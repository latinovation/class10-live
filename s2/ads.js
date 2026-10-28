// The ads for "Creative quality evaluation", with the one-line brief students
// reread before scoring and the instructor's expected scores with evidence.
// Video links are for the instructor's laptop only; they are not shown on student pages.
window.LETTERS = [
  { L: 'D', name: 'Distinctive', q: 'Could only this brand say it? Does it stand out where it runs?' },
  { L: 'I', name: 'Inspires amplification', q: 'Will people, partners and other media pick it up and extend it?' },
  { L: 'R', name: 'Recognizable glue', q: 'Cover the logo: would you still know whose ad it is?' },
  { L: 'E', name: 'Emotional', q: 'Does it make the target feel something, and do the words, images and pacing deliver it?' },
  { L: 'C', name: 'Connection', q: 'Does it come from a human insight, so the target feels seen?' },
  { L: 'T', name: 'True to the brand', q: 'On the positioning and benefit, in the brand\'s voice, every claim provable?' },
  { L: 'S', name: 'Simple', q: 'One thought, got in three seconds?' }
];

window.ADS = {
  1: {
    short: 'Ad 1', title: 'CeraVe, the Super Bowl spot', year: '2024',
    brief: 'Win attention in the Super Bowl for a skincare brand whose claim is "developed with dermatologists."',
    expected: { D: 2, I: 2, R: 2, E: 2, C: 1, T: 2, S: 2 },
    evidence: {
      D: 'Only this brand could make this joke, because the joke is its own name.',
      I: 'Built to travel: a teaser rumour, creators, then the debunk in the game.',
      R: 'The name pun, "Developed with dermatologists" and the tub carry it without the logo.',
      E: 'Deadpan awkwardness lands; the boardroom pacing delivers the laugh.',
      C: 'It rides a joke people already made online, not a human truth about skin.',
      T: 'The close restates the core claim, and the product is on screen.',
      S: 'One thought: no, the actor did not make this.'
    },
    reveal: 'Ogilvy. Cannes Lions 2024 Grand Prix (Social & Influencer). Super Clio 2024 for the best Super Bowl ad. Three weeks of a planted rumour, then the ad debunked it.',
    ie: false
  },
  2: {
    short: 'Ad 2', title: 'Peloton, "The Gift That Gives Back"', year: '2019',
    brief: 'Make the bike the holiday gift that changes someone\'s year.',
    expected: { D: 1, I: 0, R: 1, E: 0, C: 0, T: 1, S: 2 },
    evidence: {
      D: 'The home-studio look is the brand\'s; "a gift bike" is a category cliche.',
      I: 'Parodies were hostile; nothing the brand could extend.',
      R: 'The bike is shown, but there is no repeatable device.',
      E: 'Meant to be warm; many viewers felt unease.',
      C: 'Viewers did not see their lives; they saw pressure.',
      T: 'On the product, off the empowering brand message.',
      S: 'One easy story.'
    },
    reveal: 'December 2019. Viewers called it sexist and said it implied pressure to lose weight. Shares fell as much as 10 percent intraday (Fortune). The company said it was disappointed in how some had misinterpreted the commercial.',
    ie: true, ieNote: 'Idea (a gift that changes her year) about 8. Execution (the casting, the diary, the thank-you) about 4.'
  },
  3: {
    short: 'Ad 3', title: 'Apple, iPad Pro "Crush!"', year: '2024',
    brief: 'Launch the thinnest iPad Pro: every creative tool you own now fits inside it.',
    expected: { D: 2, I: 1, R: 2, E: 0, C: 0, T: 1, S: 2 },
    evidence: {
      D: 'Unmistakably Apple\'s launch-film style.',
      I: 'Amplified as backlash and parody, not as intended.',
      R: 'The reveal language and the product shot are ownable.',
      E: 'The intended feeling was awe; people reported dismay.',
      C: 'Creative people felt attacked, not seen.',
      T: 'On message for the product, against the brand\'s stance as a champion of creativity.',
      S: 'One image, one idea, very clear.'
    },
    reveal: 'Apple\'s VP of marketing communications: "We missed the mark with this video, and we\'re sorry." TV plans were cancelled. Critics: Hugh Grant, Justine Bateman.',
    ie: true, ieNote: 'Idea (everything you create fits in this) about 11. Execution (crushing the tools) about 6.'
  },
  4: {
    short: 'Team ad', title: 'Heinz, "A.I. Ketchup"', year: '2022',
    brief: 'Instructor summary: Heinz is at risk of losing relevance with younger audiences. Say "Heinz is ketchup" in a way they will share.',
    expected: { D: 2, I: 2, R: 2, E: 1, C: 1, T: 2, S: 2 },
    evidence: {
      D: 'Only a leader with a fully recognisable bottle can say "even AI picks us."',
      I: 'Audience prompts fed the campaign; other brands joined in.',
      R: 'The bottle shape and label are the proof and the asset.',
      E: 'Amusement and surprise, not a deep feeling.',
      C: 'Rides the moment everyone was playing with image generators; not a human truth.',
      T: 'The positioning is proven live by an independent machine.',
      S: 'One thought, instantly understood.'
    },
    reveal: 'Rethink (Toronto). Clio Gold 2023. Over 850 million earned impressions (agency-reported). The idea came from asking an image generator to draw "ketchup."',
    ie: false
  }
};
