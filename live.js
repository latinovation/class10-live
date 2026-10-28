// Tiny transport for the Class 10 live sessions.
// Messages are JSON strings published to a public ntfy.sh topic and read back
// over server-sent events (with a polling fallback). Nothing here is secret:
// the topic name only keeps strangers from stumbling onto the room's messages.
// Add ?k=<key> to any page to use another room; the default key is in config.js.
window.LIVE = (function () {
  var base = 'https://ntfy.sh/';
  var params = new URLSearchParams(location.search);
  var key = params.get('k') || window.LIVE_KEY || 'demo';

  function topic(name) { return 'mar4741c10-' + key + '-' + name; }

  function send(name, obj) {
    return fetch(base + topic(name), { method: 'POST', body: JSON.stringify(obj) })
      .then(function (r) { if (!r.ok) throw new Error('relay ' + r.status); return r; });
  }

  // onMsg(data, envelope) fires once per message, oldest first on first load.
  // onStatus('live' | 'polling' | 'offline') reports the connection.
  function listen(name, onMsg, onStatus) {
    var seen = {};
    var gotAny = false;
    function handle(line) {
      var env;
      try { env = JSON.parse(line); } catch (e) { return; }
      if (!env || env.event !== 'message' || seen[env.id]) return;
      seen[env.id] = true;
      var data;
      try { data = JSON.parse(env.message); } catch (e) { return; }
      if (data && typeof data === 'object') onMsg(data, env);
    }
    function poll() {
      return fetch(base + topic(name) + '/json?poll=1&since=all')
        .then(function (r) { return r.text(); })
        .then(function (t) { t.split('\n').forEach(function (l) { if (l.trim()) handle(l); }); gotAny = true; if (onStatus && !es) onStatus('polling'); })
        .catch(function () { if (onStatus) onStatus('offline'); });
    }
    var es = null;
    function startSSE() {
      if (!window.EventSource) return;
      try {
        es = new EventSource(base + topic(name) + '/sse?since=all');
        es.onmessage = function (e) { handle(e.data); };
        es.onopen = function () { if (onStatus) onStatus('live'); };
        es.onerror = function () { if (onStatus) onStatus(gotAny ? 'polling' : 'offline'); };
      } catch (e) { es = null; }
    }
    startSSE();
    poll();
    var timer = setInterval(poll, 15000);
    return { refresh: poll, stop: function () { clearInterval(timer); if (es) es.close(); } };
  }

  // Deterministic shuffle of [1..n] from the room key, so a team's label on the
  // board hides its team number but stays the same across reloads.
  function permutation(n) {
    var h = 2166136261;
    for (var i = 0; i < key.length; i++) { h ^= key.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    var arr = []; for (var j = 1; j <= n; j++) arr.push(j);
    for (var k = arr.length - 1; k > 0; k--) {
      h = (Math.imul(h, 1103515245) + 12345) >>> 0;
      var r = h % (k + 1);
      var t = arr[k]; arr[k] = arr[r]; arr[r] = t;
    }
    return arr;
  }

  function download(filename, obj) {
    var blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = filename; a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // Draws a QR code into an element, when the qrcode-generator library is loaded.
  function qr(el, text, size) {
    if (!window.qrcode || !el) return;
    var q = window.qrcode(0, 'M'); q.addData(text); q.make();
    el.innerHTML = q.createSvgTag({ cellSize: 1, margin: 2, scalable: true });
    var svg = el.querySelector('svg'); if (svg) { svg.setAttribute('width', size || 220); svg.setAttribute('height', size || 220); }
  }

  return { key: key, topic: topic, send: send, listen: listen, permutation: permutation, download: download, esc: esc, qr: qr };
})();
