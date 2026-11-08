// Exam bank: for each topic, the essay arguments and the 1–2 summary case studies that best prove each one.
// Numbers are indices into SUMMARIES[t].cases (data/sum-*.js), so every fact shown comes from the notes.
window.EXAMBANK = {
  ai: [
    { arg: "Cause: decolonisation and territorial sovereignty", cases: [0, 3] },
    { arg: "Management to 1967: truces and consent-based peacekeeping gave only negative peace", cases: [5, 10] },
    { arg: "Turning point: 1967 and Resolution 242", cases: [12, 13] },
    { arg: "1973 made negotiation possible — but peace came only for Egypt–Israel", cases: [16, 19] }
  ],
  as: [
    { arg: "Formation: why 1967 worked, and its interlinked aims", cases: [2, 3] },
    { arg: "Security: disputes managed, not resolved (ASEAN Way)", cases: [4, 7] },
    { arg: "Security: Cambodian Crisis — unity and standing, limited influence", cases: [10] },
    { arg: "Economic: weak before 1992, real progress with AFTA", cases: [9, 11] },
    { arg: "Expansion and non-interference weakened cohesion", cases: [14] }
  ],
  bs: [
    { arg: "Cause: Yugoslavia's economic and political collapse", cases: [0] },
    { arg: "Trigger: referendum and recognition", cases: [5] },
    { arg: "Development: ethnic nationalism drove the war (ethnic cleansing)", cases: [7] },
    { arg: "Management: UN eased suffering but could not protect", cases: [9, 17] },
    { arg: "Management: peace plans failed until force shifted the balance", cases: [10, 18] },
    { arg: "Outcome: Dayton ended the war but entrenched division", cases: [19] }
  ],
  cg: [
    { arg: "Cause: hasty Belgian decolonisation", cases: [0] },
    { arg: "Cause: economic interests and external actors (Katanga)", cases: [3] },
    { arg: "Cold War internationalised the crisis", cases: [7] },
    { arg: "UN: neutrality limited it, then force ended the secessions", cases: [4, 11] },
    { arg: "Phase 2: unilateral force and failed settlement", cases: [16, 17] }
  ],
  cw1: [
    { arg: "Roots: an alliance held together only by Hitler", cases: [2] },
    { arg: "1945 conferences sowed the seeds of tension", cases: [3, 5] },
    { arg: "Soviet expansion or security? (Sovietisation)", cases: [6] },
    { arg: "US escalation: containment in action", cases: [9, 10] },
    { arg: "Climax: Berlin and the division of Europe", cases: [11, 13] }
  ],
  cw2: [
    { arg: "Korea: local roots, internationalised in June 1950", cases: [3, 4] },
    { arg: "Korea: China's entry and limited war", cases: [6, 7] },
    { arg: "Cuba: US hostility provoked the Crisis", cases: [10, 12] },
    { arg: "Cuba: Khrushchev triggered it; both leaders ended it", cases: [13, 14] },
    { arg: "Vietnam: a nationalist struggle the US read as Cold War, backing a weak South", cases: [1, 9] },
    { arg: "Vietnam: escalation, then domestic collapse forced withdrawal", cases: [15, 17] }
  ],
  cw3: [
    { arg: "Soviet decline began long before Reagan", cases: [0] },
    { arg: "Reagan Victory School: pressure strained the USSR", cases: [3, 5] },
    { arg: "Against: Soviet resolve stiffened; Reagan reacted", cases: [6, 9] },
    { arg: "Soviet Initiative School: Gorbachev ended it", cases: [10, 12] },
    { arg: "People Power School: 1989", cases: [14] },
    { arg: "End of the Cold War (1989) vs collapse of the USSR (1991)", cases: [17] }
  ],
  ea: [
    { arg: "Japan: international factors were the precondition", cases: [3, 7] },
    { arg: "Japan: MITI coordinated growth", cases: [2, 16] },
    { arg: "Japan: keiretsu and society multiplied other factors", cases: [6] },
    { arg: "China: Maoist failure pushed reform", cases: [9] },
    { arg: "China: market reforms were the engine", cases: [18, 21] },
    { arg: "China: open door and diversified outside support", cases: [24, 27] }
  ],
  ec: [
    { arg: "Failed ISI and extreme nationalism", cases: [2, 8] },
    { arg: "Successful transition to EOI", cases: [9, 15] },
    { arg: "Equity vs growth: the NEP", cases: [12] },
    { arg: "Cronyism undermined growth", cases: [10] },
    { arg: "Socialist pragmatism: Doi Moi vs Burma", cases: [20, 22] },
    { arg: "1997 crisis: growth created vulnerability", cases: [23] }
  ],
  ge: [
    { arg: "Growth: the USA dominated reconstruction", cases: [4, 6] },
    { arg: "Growth: institutions gave stability and freer trade", cases: [0, 3] },
    { arg: "Growth: active governments and Europe's own agency", cases: [2, 7] },
    { arg: "Crisis built in: Bretton Woods' collapse", cases: [12] },
    { arg: "Crisis triggered: oil shocks", cases: [15] },
    { arg: "Debt crisis hit developing countries hardest", cases: [19] }
  ],
  ip: [
    { arg: "Cause: decolonisation and the contested accession", cases: [0, 2] },
    { arg: "Cause: Pakistani gamble in 1965", cases: [11] },
    { arg: "UN: ceasefires, not settlements", cases: [5, 13] },
    { arg: "Agreements ended wars but never settled Kashmir", cases: [14, 18] },
    { arg: "Superpowers: self-interested mediators, then patrons", cases: [12, 17] }
  ],
  it: [
    { arg: "Colonial legacy activated by leaders: Sabah", cases: [1, 5] },
    { arg: "Konfrontasi: leaders were decisive", cases: [3, 4] },
    { arg: "Third Indochina War: layered causes and great-power patronage", cases: [12, 13] },
    { arg: "Management: disputes held in abeyance", cases: [15] }
  ],
  ns: [
    { arg: "Violent re-imposition politicised the military", cases: [1] },
    { arg: "Tutelage did not guarantee democracy", cases: [6] },
    { arg: "Elites' failure and military takeover", cases: [8] },
    { arg: "Semi-democracy stabilised Malaysia and Singapore", cases: [12, 15] },
    { arg: "Unstable authoritarianism fell when legitimacy faded", cases: [16] },
    { arg: "Stable authoritarianism: adaptation vs coercion", cases: [18, 19] }
  ],
  nu: [
    { arg: "Assimilation by force backfired", cases: [1, 6] },
    { arg: "Ideology as a unity tool", cases: [3] },
    { arg: "Separatism: force vs negotiated settlement", cases: [5, 8] },
    { arg: "Thailand's adaptable triad", cases: [10] },
    { arg: "Managed co-existence, not integration", cases: [16, 19] }
  ],
  wd: [
    { arg: "Symptom of deeper distrust since Separation", cases: [2] },
    { arg: "Flashpoint: water used as leverage", cases: [5, 13] },
    { arg: "Vehicle for cooperation when both had incentives", cases: [14, 15] },
    { arg: "Reduced dependence eased tension", cases: [3] }
  ]
};
