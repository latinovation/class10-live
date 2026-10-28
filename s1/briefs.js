// The two briefs for "Mini brief vs outcome". Students see "Brief 1" and
// "Brief 2"; the board calls them A (the client email) and B (the one-page brief).
window.BRIEFS = {
  1: {
    label: 'Brief 1',
    kind: 'A',
    text: 'Subject: New social ad for HydraLift\n\nHi team,\n\nWe are launching HydraLift, our new electrolyte drink mix, and we need a social ad that gets people to try it.\n\nHydraLift is for anyone who wants to feel better every day: busy professionals, parents, students, frequent travelers, and people who work out. It hydrates faster than plain water, gives steady energy without a sugar crash, supports immunity, has zero sugar, comes in five great flavors, and is priced for everyday use.\n\nWe want the ad to feel fresh, energetic and positive, premium but approachable. We would like people to love the brand, learn how good it is for them, and buy it.\n\nPlease use our colors (navy #1F3A5F, teal #0F6E6A, soft white #F7F9F8), include the HydraLift name and a call to action, and keep it fun.\n\nThanks!'
  },
  2: {
    label: 'Brief 2',
    kind: 'B',
    text: 'HYDRALIFT: CREATIVE BRIEF (Square social ad)\n\n1. Objective: Move Dana from reaching for a third coffee or a vending-machine soda around 3 PM, to mixing a HydraLift into her water bottle before or early in her shift.\n\n2. Design target: Dana, 29, a nurse on 12-hour shifts. She is on her feet, hardly ever sits, and goes hours without a drink because there is no good moment to stop. She is used to taking care of everyone else first.\n\n3. Insight (in her words): "By 3 I am dragging and I tell myself I need coffee. Honestly I have not had a real drink since seven this morning."\n\n4. Single-minded proposition: Your 3 PM slump might be thirst.\n\n5. Reason to believe: HydraLift puts back the sodium, potassium and magnesium you lose over hours without a drink, mixes into any water bottle in ten seconds, and has no sugar crash. (Placeholder claims for class use.)\n\n6. Tone: Steady, plain-spoken, on your side. Never preachy, never cute, never medical advice.\n\n7. Think / Feel / Do: Think "that might actually be me." Feel understood, not lectured. Do: put one HydraLift in her bottle at the start of her next shift.\n\n8. Mandatories: HydraLift name and logo. Colors navy #1F3A5F, teal #0F6E6A, soft white #F7F9F8. HydraLift is never a gym or sports product, so no gym or athlete imagery. No health or treatment claims.\n\n9. Get nurses on 12-hour shifts To mix a HydraLift into their water bottle By showing that their 3 PM slump might be thirst.'
  }
};

window.PROMPT = 'You are a creative at an ad agency. Below is the client\'s creative brief. Read it, then write ONE square (1:1) social ad concept for it.\n\nRules:\n- Use only what is in the brief. Do not ask me questions. Do not give options. Give exactly one concept.\n- Reply in exactly this format and nothing else:\n\nHEADLINE: (8 words or fewer)\nBODY LINE: (20 words or fewer)\nPICTURE: (two sentences describing the image)\n\nTHE BRIEF:\n';

// Highlights for the reveal: the seven benefits in Brief A, the one proposition in Brief B.
window.BRIEF_A_BENEFITS = ['hydrates faster than plain water', 'gives steady energy without a sugar crash', 'supports immunity', 'has zero sugar', 'comes in five great flavors', 'is priced for everyday use', 'anyone who wants to feel better every day'];
window.BRIEF_B_SMP = 'Your 3 PM slump might be thirst.';
