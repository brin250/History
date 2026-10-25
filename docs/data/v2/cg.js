// v2 flow charts: the Congo Crisis, 1960–1965 (from Congo_Crisis_1960-1965_Study_Guide; cards in data/cg.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).cg = window.FLOWS2.cg || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "cg-top", order: 1, level: 0, kind: "causal",
  title: "The Congo Crisis, 1960–1965",
  question: "Why did the Congo Crisis occur, and how effective were attempts to manage it?",
  intro: "Hasty decolonisation, divided parties, mineral wealth and politicised ethnicity broke the new state; the UN ended the secessions, but force and foreign action shaped the end.",
  clusters: [
    { title: "Causes", summary: "Four interlocking causes.",
      steps: [
        N("cg-t-causes", "ltc", "Four interlocking causes", "1908–1960", "Hasty decolonisation, divided parties, foreign mining interests, politicised ethnicity.", ["cg-syllabus", "cg-scale-phases"], { go: "cg-causes" }),
        K("triggered", "Days after independence the army mutinied."),
        N("cg-t-mutiny", "trig", "Mutiny and Belgian intervention", "Jul 1960", "Force Publique mutiny; Belgian troops; ONUC created.", ["cg-overview", "onuc"], { go: "cg-mutiny" })
      ] },
    { link: "led to", how: "The state fragmented in Phase 1.",
      title: "Phase 1: fragmentation", summary: "1960–1963.",
      steps: [
        { row: [
          N("cg-t-katanga", "evt", "Katanga secedes", "Jul 1960", "Tshombe, backed by UMHK.", ["katanga"], { go: "cg-katanga" }),
          N("cg-t-kasai", "evt", "South Kasai secedes", "Aug 1960", "Kalonji's Baluba state.", ["southkasai"], { go: "cg-kasai" })
        ] },
        K("led to", "The secessions split the central government."),
        N("cg-t-deadlock", "tp", "Deadlock; Mobutu's coup", "Sep 1960", "Kasavubu and Lumumba dismissed each other; Mobutu stepped in.", ["cg-deadlock"], { go: "cg-deadlock" }),
        K("followed by", "Lumumba was murdered; the UN turned to force."),
        { row: [
          N("cg-t-lumumba", "evt", "Lumumba murdered", "Jan 1961", "With US covert backing for his removal.", ["lumumba"], { go: "cg-lumumba" }),
          N("cg-t-force", "pol", "ONUC uses force", "1961–63", "Rum Punch, Morthor, Unokat, Grandslam.", ["cg-onuc-phase2", "cg-unokat-grandslam"], { go: "cg-onuc-force" })
        ] }
      ] },
    { link: "followed by", how: "Phase 2 brought rebellion against the centre.",
      title: "Phase 2: insurrection", summary: "1963–1965.",
      steps: [
        { row: [
          N("cg-t-kwilu", "evt", "Kwilu rebellion", "1963–65", "Mulele's 'Second Independence'.", ["cg-kwilu-causes"], { go: "cg-kwilu" }),
          N("cg-t-simba", "evt", "Simba rebellion", "1963–64", "Half the country; crushed with US/Belgian help.", ["simba"], { go: "cg-simba" })
        ] },
        K("led to", "Settlements failed and Mobutu took power."),
        N("cg-t-mobutu", "tp", "Mobutu's second coup", "24 Nov 1965", "After the Luluabourg Constitution and 1965 elections.", ["cg-mobutu", "cg-1965-elections"], { go: "cg-settle" })
      ] },
    { link: "supports", how: "Judging management.",
      title: "Verdict", summary: "Military success, political failure.",
      steps: [
        N("cg-t-onuc", "int", "ONUC's record", "1960–64", "Three objectives: Belgian withdrawal, mercenaries out, internal stability.", ["cg-un-mandate", "cg-onuc-eval"], { go: "cg-onuc-eval" }),
        K("supports", "Weighing the record."),
        N("cg-t-verdict", "judg", "Secessions ended, no settlement", null, "The UN ended the secessions by force, but durable political settlement failed; unilateral action dominated Phase 2.", ["cg-exam-overall"], { go: "cg-arg" })
      ] }
  ],
  judge: { prompt: "What was the most important cause of the Congo Crisis? Rank them.", factors: ["cg-t-causes", "cg-t-mutiny", "cg-t-katanga", "cg-t-deadlock"],
           notes_view: "The causes interlock: hasty Belgian decolonisation, regional parties split over federalism, foreign mining interests bankrolling secession, and politicised ethnicity; external actors internationalised the crisis." },
  historians: [ { who: "Kent", view: "'The demands of the Cold War had to confront the requirements of decolonisation in an explosive socio-economic and political mix.'", nodes: ["cg-t-causes"] } ],
  takeaways: [
    "Phase 1 (1960–63): mutiny, Katanga and South Kasai secessions, deadlock, Lumumba's murder.",
    "Phase 2 (1963–65): Kwilu and Simba rebellions; Mobutu's coup.",
    "ONUC ended the secessions by force, but no durable political settlement emerged."
  ]
});

L.push({
  id: "cg-causes", order: 2, level: 1, parent: "cg-top", kind: "causal",
  title: "Causes of the Congo Crisis",
  question: "Why did the Congo Crisis occur?",
  intro: "Four causes interlocked: hasty decolonisation, divided parties, mineral wealth that bankrolled secession, and colonially politicised ethnicity.",
  clusters: [
    { title: "Four causes", summary: "Decolonisation, politics, economics, ethnicity.",
      steps: [
        { row: [
          N("cg-c-decol", "ltc", "Hasty decolonisation", "1955–60", "No trained elite; 'instant decolonisation' in 18 months.", ["belgiandecol", "cg-unprepared"], { go: "cg-decol" }),
          N("cg-c-pol", "ltc", "Divided parties", "1950–60", "Regional parties split over federalism vs centralism.", ["cg-mnc", "cg-abako", "cg-conakat"], { go: "cg-parties" }),
          N("cg-c-econ", "ltc", "Mineral wealth", "1906–60", "Katanga 75% of output; UMHK and Forminière bankrolled secession.", ["cg-resources", "cg-colonial-economy"], { go: "cg-econ" }),
          N("cg-c-eth", "ltc", "Politicised ethnicity", "1930s–60", "Belgian divide-and-rule: Lulua vs Baluba; Bakongo vs Upper River; Katangese vs 'strangers'.", ["cg-lulua-baluba", "cg-bakongo"], { go: "cg-parties" })
        ] }
      ] },
    { link: "led to", how: "Together they left a fragile state at independence.",
      title: "A fragile state", summary: "Vast and divided.",
      steps: [
        N("cg-c-fragile", "ctx", "Vast, divided state", "1960", "~14 million people, 200+ ethnic groups, six provinces.", ["cg-scale-phases"]),
        K("intensified", "Outside powers turned a domestic breakdown into an international one."),
        N("cg-c-cw", "res-", "Cold War proxy conflict", "1960–65", "~100,000 dead.", ["cg-overview"])
      ] }
  ],
  judge: { prompt: "Which cause mattered most? Rank them.", factors: ["cg-c-decol", "cg-c-pol", "cg-c-econ", "cg-c-eth"],
           notes_view: "Hasty decolonisation, regional/ethnic parties split over federalism, foreign mining interests bankrolling secession, and colonially politicised ethnicity interlocked." },
  historians: [
    { who: "Kent", view: "'In economic terms the fundamental problem was not essentially of African making.'", nodes: ["cg-c-econ"] },
    { who: "Parker", view: "Not the first war of decolonisation in Africa, but the worst up to that point.", nodes: ["cg-c-cw"] }
  ],
  takeaways: [
    "Hasty Belgian decolonisation left no prepared elite.",
    "Parties split over federalism vs centralism; mining interests bankrolled secession.",
    "Belgian divide-and-rule politicised ethnic identities."
  ]
});

L.push({
  id: "cg-decol", order: 3, level: 3, parent: "cg-top", kind: "causal",
  title: "Belgian rule and hasty decolonisation",
  question: "Why was the Congo so unprepared for independence?",
  intro: "Paternalist rule gave Africans no political role; after the 1959 riots Belgium rushed independence in 18 months — 'instant decolonisation'.",
  clusters: [
    { title: "Paternalist rule", summary: "No political preparation.",
      steps: [
        N("cg-d-trinity", "ltc", "'Colonial trinity'", "1908–60", "State, missionaries and companies; Africans treated as children with no legislative role.", ["cg-belgian-rule"]),
        K("prevented", "Paternalism ruled out political education."),
        N("cg-d-noelite", "res-", "No political training", "1950s", "Moral principles over political experience; only an évolué middle class.", ["cg-unprepared", "cg-belgian-rule"]),
        K("followed by", "A gradual plan was rejected."),
        N("cg-d-vanbilsen", "evt", "Van Bilsen's Thirty-Year Plan", "Dec 1955", "Gradual transfer dismissed; critics suggested he be tried for treason.", ["cg-unprepared"])
      ] },
    { link: "triggered", how: "Riots forced Belgium to change course suddenly.",
      title: "Sudden capitulation", summary: "1959 riots.",
      steps: [
        N("cg-d-resist", "ltc", "African resistance", "1919–1950s", "1919 revolt; Kimbanguism and other anti-European movements; depression unrest.", ["cg-resistance"]),
        K("intensified", "Unrest exploded in the capital."),
        N("cg-d-riots", "trig", "Leopoldville riots", "4–7 Jan 1959", "Scores of Africans killed after an independence rally.", ["cg-resistance", "belgiandecol"]),
        K("provoked response", "Belgium promised independence."),
        N("cg-d-goal", "pol", "Independence the goal", "13 Jan 1959", "'Without fatal procrastination, yet without fatal haste'.", ["belgiandecol"])
      ] },
    { link: "accelerated", how: "Even a four-year timetable sparked protest, so Belgium sped up.",
      title: "Instant decolonisation", summary: "18 months.",
      steps: [
        N("cg-d-4yr", "evt", "Four-year limit rejected", "Oct–Nov 1959", "De Schrijver's timetable still caused disturbances.", ["belgiandecol"]),
        K("led to", "A conference set an early date."),
        N("cg-d-round", "pol", "Round Table Conference", "Jan 1960", "16 resolutions; independence on 30 Jun 1960.", ["belgiandecol", "cg-tl-1959-60"]),
        K("followed by", "Elections and independence came in months."),
        N("cg-d-indep", "tp", "Independence", "30 Jun 1960", "MNC-L largest; Lumumba PM, Kasavubu President; chaos within days.", ["cg-tl-1959-60"])
      ] }
  ],
  judge: { prompt: "Why was the Congo unprepared? Rank the factors.", factors: ["cg-d-trinity", "cg-d-noelite", "cg-d-riots", "cg-d-round"],
           notes_view: "An unprepared state with no trained elite descended into chaos within days of independence ('instant decolonisation')." },
  historians: [ { who: "Namikas", view: "Colonialism left the Congo exploited, underdeveloped and poorly governed.", nodes: ["cg-d-noelite"] } ],
  takeaways: [
    "Belgian paternalism gave Africans no political role; Van Bilsen's plan rejected.",
    "The Jan 1959 riots made Belgium capitulate.",
    "Independence came on 30 Jun 1960 after just 18 months — 'instant decolonisation'."
  ]
});

L.push({
  id: "cg-parties", order: 4, level: 3, parent: "cg-top", kind: "causal",
  title: "Parties and ethnic rivalries",
  question: "How did party politics and ethnic rivalries prepare the ground for secession?",
  intro: "Colonial chiefdoms entrenched local identities; regional parties split over federalism vs centralism; Lulua–Baluba violence fed the South Kasai secession.",
  clusters: [
    { title: "Colonial roots", summary: "Identities politicised.",
      steps: [
        N("cg-p-chief", "ltc", "Belgian chiefdoms", "colonial", "Appointed chiefs entrenched local identities that nationalists later politicised.", ["cg-bakongo", "cg-unprepared"])
      ] },
    { link: "led to", how: "Ethnic rivalries sharpened in three regions.",
      title: "Three rivalries", summary: "Kasai, Leopoldville, Katanga.",
      steps: [
        { split: [
          { h: "Kasai", steps: [
            N("cg-p-lb1", "ltc", "Lulua vs Baluba", "1930s–50s", "Colonial rule split Tshiluba speakers, favouring Baluba, then Lulua.", ["cg-lulua-baluba"]),
            K("led to", "Rivalry turned to violence."),
            N("cg-p-lb2", "res-", "Baluba repressed", "1957–60", "Baluba won 1957 polls; Aug 1959 protests repressed; Lulua proposed evicting 100,000 farmers.", ["cg-lulua-baluba"])
          ] },
          { h: "Leopoldville", steps: [ N("cg-p-bak", "ltc", "Bakongo vs Upper River", "1959–60", "Kikongo vs Lingala; ABAKO's Kongo revival.", ["cg-bakongo"]) ] },
          { h: "Katanga", steps: [ N("cg-p-kat", "ltc", "Katangese vs 'strangers'", "1957–60", "Lulua/Baluba migrants 38% of Katanga; BALUBAKAT vs CONAKAT.", ["cg-katanga-strangers"]) ] }
        ] }
      ] },
    { link: "intensified", how: "Parties formed along these lines.",
      title: "Parties", summary: "Federalism vs centralism.",
      steps: [
        { row: [
          N("cg-p-mnc", "act", "MNC (Lumumba)", "10 Oct 1958", "The only national party; centralist.", ["cg-mnc"]),
          N("cg-p-abako", "act", "ABAKO (Kasavubu)", "1950", "Bakongo; federalist.", ["cg-abako"]),
          N("cg-p-conakat", "act", "CONAKAT (Tshombe)", "1958", "Katangan autonomy; funded via UMHK.", ["cg-conakat"])
        ] },
        K("led to", "The MNC itself split."),
        N("cg-p-split", "res-", "MNC splits", "Jul 1959", "MNC-L (Lumumba) and MNC-K (Kalonji, Baluba) — seed of South Kasai.", ["cg-mnc"])
      ] }
  ],
  judge: { prompt: "How far did ethnic rivalry cause the crisis? Rank the factors.", factors: ["cg-p-chief", "cg-p-lb2", "cg-p-kat", "cg-p-split"],
           notes_view: "The federalist–centralist divide underlay both secessions, and the Lulua–Baluba conflict led directly to South Kasai." },
  historians: [],
  takeaways: [
    "Belgian chiefdoms entrenched identities later politicised.",
    "Lulua–Baluba, Bakongo–Upper River and Katangese–'strangers' rivalries.",
    "Parties split over federalism; the MNC-K split seeded South Kasai."
  ]
});

L.push({
  id: "cg-econ", order: 5, level: 3, parent: "cg-top", kind: "causal",
  title: "Economic interests and mineral wealth",
  question: "How did economic interests contribute to the crisis?",
  intro: "An export economy built on forced labour served Belgian profit; Katanga's minerals gave foreign companies a stake in secession.",
  clusters: [
    { title: "Colonial economy", summary: "Export and forced labour.",
      steps: [
        N("cg-e-sgb", "pol", "Mining companies founded", "1906", "Société Générale formed UMHK, Forminière, BCK railway.", ["cg-colonial-economy"]),
        K("led to", "The economy was built for export and profit."),
        N("cg-e-forced", "res-", "Forced labour economy", "1917–1960", "60 days' compulsory farm work; 4–7 year indentures; expatriates held managerial posts.", ["cg-colonial-economy"])
      ] },
    { link: "followed by", how: "Mineral wealth concentrated in one province.",
      title: "Katanga's wealth", summary: "Copper and cobalt.",
      steps: [
        N("cg-e-minerals", "ctx", "Mineral riches", "1960", "~60% of the West's cobalt; Katanga 75% of output; heavy US/European investment.", ["cg-resources"]),
        K("led to", "Katanga carried the national budget."),
        N("cg-e-katanga", "ctx", "Katanga's tax weight", "1960", "47% of tax income; UMHK ~70% of Katangan production; 32,000 Belgian settlers.", ["cg-katanga-goals"])
      ] },
    { link: "enabled", how: "Companies paid for secession to protect their interests.",
      title: "Bankrolling secession", summary: "UMHK and Forminière.",
      steps: [
        { row: [
          N("cg-e-umhk", "act", "UMHK backs Tshombe", "1960", "Feared a strong centre; financed CONAKAT.", ["cg-conakat", "cg-belgium-p1"]),
          N("cg-e-form", "act", "Forminière backs Kalonji", "1960", "Mining concessions for support.", ["cg-belgium-p1", "southkasai"])
        ] },
        K("supports", "The problem was largely external."),
        N("cg-e-verdict", "judg", "Not of African making", null, "Kent: 'in economic terms the fundamental problem was not essentially of African making'.", ["cg-resources"])
      ] }
  ],
  historians: [ { who: "Kent", view: "The economic problem 'was not essentially of African making'.", nodes: ["cg-e-verdict"] } ],
  takeaways: [
    "A forced-labour export economy served Belgian profit.",
    "Katanga: 75% of mineral output, 47% of tax income.",
    "UMHK and Forminière bankrolled the secessions."
  ]
});

L.push({
  id: "cg-mutiny", order: 6, level: 3, parent: "cg-top", kind: "causal",
  title: "Mutiny, Belgian intervention and ONUC",
  question: "How did the crisis begin, and how did the UN respond?",
  intro: "Days after independence the army mutinied; Belgian troops intervened unasked; the Congo appealed to the UN, which deployed ONUC within days.",
  clusters: [
    { title: "Breakdown", summary: "July 1960.",
      steps: [
        N("cg-m-mutiny", "trig", "Force Publique mutiny", "5 Jul 1960", "At Thysville against Belgian officers; spread nationwide.", ["cg-tl-1960", "cg-overview"]),
        K("provoked response", "Belgium sent troops without permission."),
        N("cg-m-belgian", "evt", "Belgian intervention", "9–10 Jul 1960", "Unilateral; Katanga seceded on 11 Jul.", ["cg-tl-1960"])
      ] },
    { link: "provoked response", how: "The Congo appealed to the UN.",
      title: "ONUC created", summary: "Article 99.",
      steps: [
        N("cg-m-art99", "pol", "Article 99 invoked", "12–14 Jul 1960", "First time in UN history; Res 143 authorised ONUC and called for Belgian withdrawal.", ["cg-un-mandate", "cg-hammarskjold"]),
        K("led to", "Troops were airlifted in fast."),
        N("cg-m-deploy", "res+", "Rapid deployment", "16 Jul 1960", "US airlift moved ~9,000 UN troops in two weeks; up to 19,000 troops.", ["cg-onuc-phase1", "onuc"])
      ] },
    { link: "constrained", how: "ONUC's mandate was unclear from the start.",
      title: "Problems of mandate", summary: "Consent and impartiality.",
      steps: [
        N("cg-m-vague", "res-", "No clear guidance", "1960", "Res 143 vague; the inviting government collapsed two months later — no one to give consent.", ["onuc", "cg-onuc-eval"])
      ] }
  ],
  historians: [],
  takeaways: [
    "The Force Publique mutiny (5 Jul 1960) and Belgian intervention began the crisis.",
    "Hammarskjöld invoked Article 99; ONUC deployed in days.",
    "Res 143 was vague, and the government that invited ONUC soon collapsed."
  ]
});

L.push({
  id: "cg-katanga", order: 7, level: 3, parent: "cg-top", kind: "causal",
  title: "The Katanga secession, 1960–1963",
  question: "Why did Katanga secede, and why did it last so long?",
  intro: "Tshombe declared the richest province independent with UMHK money and Belgian support; Hammarskjöld's neutrality kept the UN from ending it until 1963.",
  clusters: [
    { title: "Secession", summary: "Money and Cold War framing.",
      steps: [
        N("cg-k-fear", "stc", "Fear of a strong centre", "1960", "CONAKAT feared Lumumba's government; UMHK feared for its mines.", ["cg-katanga-goals"]),
        K("led to", "Tshombe declared independence."),
        N("cg-k-declare", "tp", "Katanga secedes", "11 Jul 1960", "Accused the centre of communism; UMHK advanced 1,250m Belgian francs.", ["katanga", "cg-katanga-goals", "cg-tshombe"])
      ] },
    { link: "enabled", how: "Foreign backing sustained the new state.",
      title: "Backing", summary: "Belgium and mercenaries.",
      steps: [
        N("cg-k-umhk", "act", "UMHK builds the state", "1960–62", "Supplied 80% of revenue; constitution, bank, currency.", ["cg-belgium-p1"]),
        K("supports", "Western powers backed it in practice."),
        N("cg-k-west", "act", "Belgium, France, Britain", "1960–62", "Support in practice though not in name; mercenaries in its army.", ["katanga"])
      ] },
    { link: "constrained", how: "The UN at first would not use force.",
      title: "UN restraint", summary: "Neutrality.",
      steps: [
        N("cg-k-146", "pol", "Res 146", "9 Aug 1960", "Belgians out of Katanga; ONUC not to influence the internal conflict.", ["katanga"], { go: "cg-hammar" }),
        K("followed by", "Later resolutions allowed force."),
        N("cg-k-end", "res+", "Ended by Grandslam", "Jan 1963", "After Res 161, 169 and the unimplemented Kitona Declaration.", ["katanga", "cg-unokat-grandslam"])
      ] }
  ],
  judge: { prompt: "Why did the Katanga secession last until 1963? Rank the factors.", factors: ["cg-k-declare", "cg-k-umhk", "cg-k-west", "cg-k-146"],
           notes_view: "Economic interests and external actors sustained it; Brussels justified support in Cold War terms; it ended only by UN force (Grandslam)." },
  historians: [],
  takeaways: [
    "Tshombe seceded (11 Jul 1960) with UMHK money, accusing the centre of communism.",
    "UMHK built the state; Belgium, France and Britain backed it in practice.",
    "UN restraint (Res 146) let it last until Grandslam (Jan 1963)."
  ]
});

L.push({
  id: "cg-hammar", order: 8, level: 3, parent: "cg-top", kind: "causal",
  title: "Hammarskjöld's neutrality and Lumumba",
  question: "How did Hammarskjöld's neutrality shape the crisis?",
  intro: "Hammarskjöld got Belgian troops out of Katanga peacefully but refused to crush secession, pushing Lumumba toward the Soviet Union.",
  clusters: [
    { title: "Diplomacy", summary: "Entry without force.",
      steps: [
        N("cg-h-trips", "pol", "Katanga diplomacy", "Aug 1960", "Brought two Swedish companies to talks with Tshombe; non-interference pledge.", ["cg-sg-p1", "cg-hammarskjold"]),
        K("led to", "Belgian troops left peacefully."),
        N("cg-h-belgout", "res+", "Belgians withdraw", "early Sep 1960", "From Katanga.", ["cg-sg-p1"])
      ] },
    { link: "contradicts", how: "But he refused Lumumba's demand to end secession.",
      title: "Refusing Lumumba", summary: "Strict neutrality.",
      steps: [
        N("cg-h-refuse", "pol", "No force against Katanga", "Jul 1960", "Mandate forbade interference in internal politics.", ["cg-onuc-phase1", "lumumba"]),
        K("provoked response", "Lumumba threatened to turn to Moscow."),
        N("cg-h-ultimatum", "evt", "Lumumba's ultimatum", "17 Jul 1960", "Congo 'may be obligated to call upon the Soviet Union'; relationship 'degenerated'.", ["lumumba"])
      ] },
    { link: "led to", how: "Neutrality drew criticism from both camps.",
      title: "Criticism", summary: "Troika demand.",
      steps: [
        N("cg-h-troika", "evt", "Khrushchev's 'troika'", "1960", "Demanded a three-person Secretariat; Hammarskjöld refused to resign.", ["cg-hammarskjold", "cg-un-p2"]),
        K("followed by", "He died seeking a ceasefire."),
        N("cg-h-death", "evt", "Hammarskjöld dies", "17 Sep 1961", "Plane crash near Ndola en route to talks with Tshombe.", ["cg-sg-p1"])
      ] }
  ],
  judge: { prompt: "Was Hammarskjöld's neutrality a strength or a weakness? Rank the evidence.", factors: ["cg-h-belgout", "cg-h-refuse", "cg-h-ultimatum", "cg-h-troika"],
           notes_view: "Success on Belgian withdrawal, but neutrality pushed Lumumba toward the USSR and drew criticism from non-aligned and communist states." },
  historians: [],
  takeaways: [
    "Hammarskjöld got Belgian troops out of Katanga by diplomacy.",
    "His refusal to crush secession pushed Lumumba toward the USSR.",
    "Criticised by the USSR (troika); he died near Ndola (1961)."
  ]
});

L.push({
  id: "cg-kasai", order: 9, level: 3, parent: "cg-top", kind: "causal",
  title: "South Kasai and the Bakwanga massacres",
  question: "How did the South Kasai secession widen the crisis?",
  intro: "Kalonji's Baluba state seceded; Lumumba's unilateral offensive brought massacres that triggered his dismissal and Mobutu's coup.",
  clusters: [
    { title: "Secession", summary: "A Baluba homeland.",
      steps: [
        N("cg-s-roots", "ltc", "Baluba persecution", "1959–60", "Kalonji exploited Lulua–Baluba tension.", ["cg-kasai-goals", "cg-lulua-baluba"]),
        K("led to", "Kalonji declared a Baluba state."),
        N("cg-s-declare", "tp", "'Autonomous State of South Kasai'", "9 Aug 1960", "Backed by Forminière; did not explicitly reject Congolese sovereignty.", ["southkasai", "cg-kalonji"])
      ] },
    { link: "provoked response", how: "Refused UN help, Lumumba acted alone.",
      title: "Lumumba's offensive", summary: "Massacre.",
      steps: [
        N("cg-s-un", "pol", "UN refuses help", "Aug 1960", "Internal matter; impartiality.", ["southkasai"]),
        K("led to", "Lumumba sent the army."),
        N("cg-s-bakwanga", "evt", "Bakwanga massacres", "23–26 Aug 1960", "~3,000 civilians killed — 'a case of incipient genocide' (Hammarskjöld).", ["cg-bakwanga"])
      ] },
    { link: "triggered", how: "The massacres brought down Lumumba.",
      title: "Consequences", summary: "Political crisis.",
      steps: [
        N("cg-s-dismiss", "res-", "Lumumba dismissed", "5 Sep 1960", "Kasavubu blamed him; deadlock led to Mobutu's coup.", ["cg-bakwanga"]),
        K("followed by", "The secession ended in an internal coup."),
        N("cg-s-end", "evt", "Secession ends", "Oct 1962", "Kankolongo's coup against Kalonji.", ["southkasai", "cg-tl-1961-63"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Kalonji declared a Baluba state (9 Aug 1960), backed by Forminière.",
    "Lumumba's unilateral offensive brought the Bakwanga massacres (~3,000 dead).",
    "The massacres triggered Lumumba's dismissal and Mobutu's coup."
  ]
});

L.push({
  id: "cg-deadlock", order: 10, level: 3, parent: "cg-top", kind: "causal",
  title: "Deadlock and Mobutu's first coup",
  question: "How did constitutional deadlock let Mobutu seize power?",
  intro: "Kasavubu and Lumumba dismissed each other; Mobutu 'neutralised' both, sided with Kasavubu, and the country split four ways.",
  clusters: [
    { title: "Deadlock", summary: "Two governments.",
      steps: [
        N("cg-l-dismiss", "evt", "Kasavubu dismisses Lumumba", "5 Sep 1960", "Lumumba had 'plunged the nation into fratricidal war'.", ["cg-deadlock", "cg-kasavubu"]),
        K("provoked response", "Lumumba deposed Kasavubu in turn."),
        N("cg-l-counter", "evt", "Lumumba deposes Kasavubu", "Sep 1960", "Both claimed to be the legal government.", ["cg-deadlock"])
      ] },
    { link: "led to", how: "The army chief stepped in.",
      title: "Mobutu's coup", summary: "Backed by Belgium and the CIA.",
      steps: [
        N("cg-l-coup", "tp", "Mobutu's first coup", "14 Sep 1960", "'Neutralised' both; expelled Soviet-bloc personnel; sided with Kasavubu.", ["cg-mobutu"]),
        K("led to", "A ceasefire followed."),
        N("cg-l-cease", "evt", "Ceasefire in South Kasai", "18–24 Sep 1960", "ANC withdrew.", ["cg-mobutu", "cg-tl-1960"])
      ] },
    { link: "led to", how: "The country fractured.",
      title: "Four-way split", summary: "Rival governments.",
      steps: [
        N("cg-l-four", "res-", "Four sections", "1960–61", "Leopoldville, Katanga, Kasai, Gizenga's Stanleyville; the UN recognised Mobutu's.", ["cg-deadlock"], { go: "cg-adoula" })
      ] }
  ],
  historians: [],
  takeaways: [
    "Kasavubu and Lumumba dismissed each other (Sep 1960).",
    "Mobutu's coup (14 Sep 1960), backed by Belgium and the CIA, sided with Kasavubu.",
    "The country split four ways."
  ]
});

L.push({
  id: "cg-lumumba", order: 11, level: 3, parent: "cg-top", kind: "causal",
  title: "US covert action and Lumumba's murder",
  question: "Why was Lumumba killed, and what did it change?",
  intro: "Rebuffed by the US, Lumumba asked Moscow for aid; Washington plotted his removal; he was handed to his enemies and murdered.",
  clusters: [
    { title: "Turning to Moscow", summary: "After a US rebuff.",
      steps: [
        N("cg-u-herter", "evt", "US rebuffs Lumumba", "28 Jul 1960", "Herter insisted all aid go through the UN.", ["lumumba"]),
        K("led to", "Lumumba sought Soviet help."),
        N("cg-u-soviet", "evt", "Soviet aid requested", "15 Aug 1960", "USSR gave limited aid — arguably following the US rejection.", ["lumumba", "cg-ussr-p1"])
      ] },
    { link: "provoked response", how: "Washington saw a communist takeover.",
      title: "US covert action", summary: "Eisenhower's plans.",
      steps: [
        N("cg-u-devlin", "int", "'Classic Communist takeover'", "1960", "CIA's Devlin convinced officials Lumumba must go.", ["cg-us-eisenhower"]),
        K("led to", "Assassination plans were authorised."),
        N("cg-u-plans", "pol", "Covert programme", "Aug 1960", "~7 years; assassination plans under Eisenhower's authorisation.", ["cg-us-eisenhower"])
      ] },
    { link: "followed by", how: "Lumumba fell into his enemies' hands.",
      title: "Murder", summary: "Katanga, January 1961.",
      steps: [
        N("cg-u-capture", "evt", "Lumumba captured", "1 Dec 1960", "Handed by Mobutu to enemies in Katanga.", ["lumumba", "cg-mobutu"]),
        K("led to", "He was killed."),
        N("cg-u-murder", "tp", "Lumumba murdered", "17 Jan 1961", "In Katanga.", ["lumumba", "cg-tl-1961-63"]),
        K("led to", "The UN and West were blamed."),
        N("cg-u-backlash", "res-", "Backlash against UN and West", "1961", "Khrushchev blamed the UN; protests in New York and Belgium; damaged UN neutrality.", ["cg-un-p2"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Rebuffed by the US (Jul 1960), Lumumba asked Moscow for aid.",
    "The CIA saw a 'communist takeover'; Eisenhower authorised assassination plans.",
    "Lumumba was murdered in Katanga (17 Jan 1961), damaging the West and UN neutrality."
  ]
});

L.push({
  id: "cg-adoula", order: 12, level: 3, parent: "cg-top", kind: "causal",
  title: "Gizenga, Lovanium and Adoula",
  question: "Why did the 1961 political settlement fail to unite the Congo?",
  intro: "Gizenga's Soviet-backed regime joined UN talks; Kennedy backed Adoula, but excluding Lumumbists sowed Phase 2's rebellions.",
  clusters: [
    { title: "Rival regime", summary: "Stanleyville.",
      steps: [
        N("cg-a-gizenga", "act", "Gizenga's 'Free Republic'", "1961", "Stanleyville; Soviet support.", ["cg-lumumbists"]),
        K("followed by", "It dissolved to join UN talks."),
        N("cg-a-lovanium", "pol", "Lovanium talks", "1961", "UN-sponsored; produced no Lumumbist government.", ["cg-deadlock"])
      ] },
    { link: "led to", how: "Kennedy backed a moderate premier.",
      title: "Adoula", summary: "US-backed coalition.",
      steps: [
        N("cg-a-kennedy", "act", "Kennedy's shift", "1961", "Distanced the US from Belgian 'recolonisation'; CIA funded Adoula.", ["cg-us-kennedy"]),
        K("led to", "A coalition formed."),
        N("cg-a-adoula", "pol", "Adoula government", "2 Aug 1961", "Gizenga deputy PM.", ["cg-us-kennedy", "cg-deadlock"])
      ] },
    { link: "undermined", how: "Lumumbists were pushed out.",
      title: "Exclusion", summary: "Seeds of rebellion.",
      steps: [
        N("cg-a-exclude", "res-", "Lumumbists excluded", "1962", "Gizenga expelled and imprisoned; many Lumumbists exiled — seeding Phase 2.", ["cg-lumumbists", "cg-deadlock"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Gizenga's Stanleyville regime dissolved for the Lovanium talks (1961).",
    "Kennedy backed Adoula (Aug 1961) in a brief coalition.",
    "Excluding Lumumbists sowed the Phase 2 rebellions."
  ]
});

L.push({
  id: "cg-onuc-force", order: 13, level: 3, parent: "cg-top", kind: "chain",
  title: "ONUC turns to force, 1961–1963",
  question: "How and why did the UN move from neutrality to force against Katanga?",
  intro: "Lumumba's death led to Res 161 (force as last resort); U Thant's Res 169 and Grandslam ended Katanga — at the cost of UN neutrality.",
  clusters: [
    { title: "Res 161", summary: "Force as last resort.",
      steps: [
        N("cg-f-161", "pol", "Resolution 161", "21 Feb 1961", "After Lumumba's death: force as a last resort to prevent civil war.", ["cg-onuc-phase2", "cg-un-mandate"]),
        K("led to", "ONUC moved on Katanga's mercenaries."),
        { row: [
          N("cg-f-rum", "evt", "Rum Punch", "28 Aug 1961", "Peaceful surrender of 81 mercenaries.", ["cg-rumpunch-morthor"]),
          N("cg-f-morthor", "evt", "Morthor", "13 Sep 1961", "8-day fight; mercenaries counterattacked; done without UK/France/US approval.", ["cg-rumpunch-morthor"])
        ] }
      ] },
    { link: "followed by", how: "After Hammarskjöld's death U Thant took a harder line.",
      title: "Res 169 and Unokat", summary: "'Requisite measure of force'.",
      steps: [
        N("cg-f-169", "pol", "Resolution 169", "24 Nov 1961", "Force against mercenaries; secession condemned; the US backed it.", ["cg-un-mandate", "cg-us-kennedy"]),
        K("led to", "ONUC attacked."),
        N("cg-f-unokat", "evt", "Operation Unokat", "Dec 1961", "Took Camp Massart.", ["cg-unokat-grandslam"]),
        K("led to", "Tshombe signed — but did not comply."),
        N("cg-f-kitona", "evt", "Kitona Declaration", "21 Dec 1961", "Recognised central authority; not implemented.", ["cg-unokat-grandslam", "cg-tshombe"])
      ] },
    { link: "followed by", how: "A reconciliation plan failed and Katangese forces attacked.",
      title: "Grandslam", summary: "Secession ended.",
      steps: [
        N("cg-f-plan", "pol", "Plan for National Reconciliation", "Aug 1962", "Federal Congo — really US proposals.", ["cg-uthant", "cg-sg-p1"]),
        K("triggered", "Mercenaries attacked peacekeepers."),
        N("cg-f-attack", "trig", "Attack on UN troops", "24 Dec 1962", "Tshombe's mercenaries.", ["cg-unokat-grandslam", "cg-tl-1961-63"]),
        K("provoked response", "U Thant ordered an offensive."),
        N("cg-f-grand", "tp", "Operation Grandslam", "28 Dec 1962", "'Complete freedom of movement'; Tshombe surrendered 17 Jan 1963.", ["cg-unokat-grandslam", "cg-uthant"])
      ] },
    { link: "supports", how: "Weighing effectiveness against neutrality.",
      title: "Verdict", summary: "Effective, not neutral.",
      steps: [ N("cg-f-verdict", "judg", "Decisive but partial", null, "Ended the secession by force; but acquiescence to US pressure (Greene Plan) undercut impartiality.", ["cg-uthant", "cg-exam-phase1"], { go: "cg-onuc-out" }) ] }
  ],
  judge: { prompt: "Why did the UN succeed in ending the Katanga secession? Rank the factors.", factors: ["cg-f-161", "cg-f-169", "cg-f-unokat", "cg-f-grand"],
           notes_view: "The strongest evidence of effective UN management at the military/territorial level — contrast Hammarskjöld's neutrality with U Thant's force; but acquiescence to US pressure undercuts impartiality." },
  historians: [],
  takeaways: [
    "Res 161 (Feb 1961) allowed force; Rum Punch and Morthor followed.",
    "Res 169 (Nov 1961) and Unokat; Tshombe ignored the Kitona Declaration.",
    "Grandslam (Dec 1962) ended Katanga — but UN neutrality suffered."
  ]
});

L.push({
  id: "cg-onuc-out", order: 14, level: 3, parent: "cg-top", kind: "causal",
  title: "ONUC winds down, 1963–1964",
  question: "What happened as ONUC withdrew?",
  intro: "After Katanga, ONUC shrank just as new rebellions began and left in mid-1964, leaving Phase 2 to unilateral action.",
  clusters: [
    { title: "Phase-out", summary: "Shrinking.",
      steps: [
        N("cg-o-start", "pol", "Phase-out begins", "Feb 1963", "Extended 6 months at the government's request.", ["cg-unokat-grandslam", "cg-un-p2"]),
        K("led to", "Forces shrank rapidly."),
        N("cg-o-shrink", "res-", "~20,000 to ~5,500", "Jan 1964", "Kwilu revolt not recognised in time; little airlift.", ["cg-onuc-phase3"])
      ] },
    { link: "followed by", how: "It left as rebellions spread.",
      title: "Withdrawal", summary: "June 1964.",
      steps: [
        N("cg-o-rescue", "pol", "Missionary rescues", "Jan–Apr 1964", "Dextraze's force rescued 100+ missionaries; no other role.", ["cg-kwilu-onuc", "cg-onuc-phase3"]),
        K("followed by", "The last troops left."),
        N("cg-o-leave", "evt", "Last peacekeepers leave", "30 Jun 1964", "85 Nigerians and 58 Canadians; ~2,000 civilian experts stayed.", ["cg-un-p2"])
      ] },
    { link: "supports", how: "Judging ONUC's legacy.",
      title: "Verdict", summary: "Kept the country together.",
      steps: [ N("cg-o-verdict", "judg", "Strengthened the centre", null, "ONUC 'strengthened the hand of the central government and kept the country together', but its exit left Phase 2 to Great Power action.", ["cg-onuc-phase3", "cg-onuc-eval"]) ] }
  ],
  historians: [],
  takeaways: [
    "ONUC shrank from ~20,000 to ~5,500 by Jan 1964.",
    "It rescued missionaries in Kwilu but did little else; left 30 Jun 1964.",
    "It kept the country together, but its exit left Phase 2 to unilateral action."
  ]
});

L.push({
  id: "cg-kwilu", order: 15, level: 3, parent: "cg-top", kind: "causal",
  title: "The Kwilu rebellion, 1963–1965",
  question: "Why did the Kwilu rebellion break out, and how was it suppressed?",
  intro: "Socio-economic despair after independence made Mulele's Maoist 'Second Independence' attractive; it was crushed brutally with foreign help.",
  clusters: [
    { title: "Causes", summary: "Worse off than before.",
      steps: [
        N("cg-w-econ", "ltc", "Economic despair", "late 1963", "Franc collapsed; schools overcrowded; high unemployment — many worse off than before 1960.", ["cg-kwilu-causes"]),
        K("intensified", "A new elite replaced the Belgians while others were left out."),
        N("cg-w-strat", "ltc", "Social stratification", "1960–63", "Young men felt disenfranchised.", ["cg-kwilu-causes"])
      ] },
    { link: "enabled", how: "Mulele offered an explanation and a cause.",
      title: "Mulele's movement", summary: "'Second Independence'.",
      steps: [
        N("cg-w-mulele", "act", "Mulele", "1962–64", "Lumumba's ex-minister, Maoist-trained; recruited youth in Gungu and Idiofa.", ["cg-mulele", "cg-mulele-doctrine"]),
        K("led to", "Rebellion escalated."),
        N("cg-w-rising", "evt", "Rising escalates", "16 Jan 1964", "Attacks on officials, missions, a refinery; belief bullets 'turn to water'.", ["cg-kwilu-course"])
      ] },
    { link: "provoked response", how: "The state and foreign forces crushed it.",
      title: "Repression", summary: "Scorched earth.",
      steps: [
        N("cg-w-merc", "pol", "ANC, mercenaries, paratroopers", "1964", "350 Belgian paratroopers; scorched earth.", ["cg-kwilu-course"]),
        K("led to", "Civilians were massacred."),
        N("cg-w-kikwit", "res-", "'National Butchery of Kikwit'", "1964", "Over 3,000 civilians killed in a day; most areas retaken by early 1965.", ["cg-kwilu-course"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Economic despair and stratification after 1960 fuelled rebellion.",
    "Mulele's Maoist 'Second Independence' escalated in Jan 1964.",
    "Crushed by the ANC, mercenaries and Belgian paratroopers; ONUC only rescued missionaries."
  ]
});

L.push({
  id: "cg-simba", order: 16, level: 3, parent: "cg-top", kind: "causal",
  title: "The Simba rebellion and Dragon Rouge",
  question: "Why did the Simba rebellion spread so far, and why was it defeated?",
  intro: "Lumumbist successors seized half the country, but disunity and Western intervention — Tshombe's mercenaries, US aircraft, Dragon Rouge — crushed them.",
  clusters: [
    { title: "Rise", summary: "Half the country.",
      steps: [
        N("cg-b-cnl", "act", "CNL founded", "3 Oct 1963", "Gbenye and Soumialot in Brazzaville.", ["simba", "cg-lumumbists"]),
        K("led to", "Rebels advanced rapidly."),
        N("cg-b-peak", "res-", "Simba peak", "Sep 1964", "Almost half the country, 7 of 21 capitals; Stanleyville fell 4 Aug.", ["simba"])
      ] },
    { link: "enabled", how: "Communist states gave some help.",
      title: "Communist support", summary: "China more than the USSR.",
      steps: [
        N("cg-b-china", "act", "China, USSR, Cuba, GDR", "1964", "China stronger (Sino-Soviet split); USSR token aid; Che Guevara's Cubans trained Simbas.", ["cg-communist-p2", "cg-simba-external"])
      ] },
    { link: "provoked response", how: "The West backed a new premier and intervened.",
      title: "Western response", summary: "Tshombe and the US.",
      steps: [
        N("cg-b-tshombe", "pol", "Tshombe recalled", "30 Jul 1964", "With mercenaries and his Katangese Gendarmerie; Belgian aid 'the backbone of the ANC'.", ["cg-simba-external", "cg-belgium-p2"]),
        K("supports", "The US armed the government."),
        N("cg-b-us", "pol", "US air power", "Apr 1964", "Johnson gave T-28s, C-47s, H-21s; CIA pilots flew for the ANC.", ["cg-us-johnson"]),
        K("followed by", "Rebels took Western hostages."),
        N("cg-b-hostages", "evt", "Stanleyville hostages", "28 Oct 1964", "Westerners, including Americans.", ["cg-dragon-rouge"]),
        K("provoked response", "The US and Belgium launched a rescue."),
        N("cg-b-dragon", "tp", "Operation Dragon Rouge", "Nov 1964", "Joint US–Belgian rescue; Simbas put down by Dec 1964.", ["cg-dragon-rouge"])
      ] },
    { link: "led to", how: "The rebellion collapsed, at political cost.",
      title: "Outcome", summary: "Rebels divided; Tshombe weakened.",
      steps: [
        N("cg-b-out", "res±", "Rebels defeated; Tshombe damaged", "1964–65", "Rebel disunity and no strategy; Dragon Rouge damaged Tshombe, dismissed Oct 1965.", ["simba", "cg-dragon-rouge"])
      ] }
  ],
  judge: { prompt: "Why were the Simbas defeated? Rank the factors.", factors: ["cg-b-peak", "cg-b-china", "cg-b-tshombe", "cg-b-us", "cg-b-dragon"],
           notes_view: "Phase 2 Cold War dynamics (Sino-Soviet split, converged US–European interests, little US hesitation over force) — unilateral action, not the UN, dominated." },
  historians: [],
  takeaways: [
    "The CNL's Simbas held half the country by Sep 1964.",
    "China backed them more than the USSR; Cubans trained them.",
    "Tshombe's mercenaries, US aircraft and Dragon Rouge crushed them by Dec 1964."
  ]
});

L.push({
  id: "cg-settle", order: 17, level: 3, parent: "cg-top", kind: "causal",
  title: "Luluabourg, the 1965 elections and Mobutu",
  question: "Why did the political settlements of 1964–65 end in Mobutu's coup?",
  intro: "A new constitution and elections addressed federalism but concentrated power; the Kasavubu–Tshombe struggle let Mobutu take over.",
  clusters: [
    { title: "Constitution", summary: "Luluabourg.",
      steps: [
        N("cg-z-lulua", "pol", "Luluabourg Constitution", "1 Aug 1964", "Strong presidency; 6 to 21 provinces; 'Democratic Republic of the Congo'.", ["luluabourg", "cg-domestic-p2"]),
        K("led to", "It balanced federalism but freed the President."),
        N("cg-z-lulres", "res±", "Federalism met; power unchecked", "1964", "Reduced secession risk; transferred power to an unchecked President.", ["luluabourg"])
      ] },
    { link: "followed by", how: "Elections followed.",
      title: "1965 elections", summary: "Tshombe wins.",
      steps: [
        N("cg-z-elect", "evt", "Elections", "Mar–Apr 1965", "223 parties for 167 seats; Tshombe's CONACO won 122.", ["cg-1965-elections"]),
        K("led to", "President and PM fought for control."),
        N("cg-z-struggle", "evt", "Kasavubu dismisses Tshombe", "14 Oct 1965", "Named Kimba; parliament rejected him.", ["cg-1965-elections", "cg-kasavubu"])
      ] },
    { link: "triggered", how: "The deadlock gave Mobutu his opening.",
      title: "Mobutu's coup", summary: "End of the crisis.",
      steps: [
        N("cg-z-coup", "tp", "Mobutu's second coup", "24 Nov 1965", "Bloodless; cancelled elections; 'regime of exception'.", ["cg-mobutu", "cg-tl-1963-65"]),
        K("supports", "The settlements fed into, rather than prevented, the coup."),
        N("cg-z-verdict", "judg", "Settlement failed", null, "Both the constitution and the elections fed into Mobutu's takeover.", ["cg-exam-overall"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Luluabourg (1964): 21 provinces, strong presidency — power unchecked.",
    "1965 elections: CONACO won; Kasavubu dismissed Tshombe.",
    "Mobutu's coup (24 Nov 1965) ended the crisis; settlements had failed."
  ]
});

L.push({
  id: "cg-onuc-eval", order: 18, level: 1, parent: "cg-top", kind: "matrix",
  title: "ONUC's objectives and record",
  question: "How far did ONUC achieve its objectives?",
  intro: "The UN's three objectives and wider record, from the notes.",
  matrix: {
    cols: ["Resolutions", "Outcome"],
    rows: [
      { h: "Belgian withdrawal", cells: ["143, 145, 146, 161", "Achieved from Katanga by early Sep 1960"] },
      { h: "Mercenaries out", cells: ["161, 169", "Achieved by force: Rum Punch to Grandslam"] },
      { h: "Internal stability", cells: ["143, 145, 161, 169", "Secessions ended; no durable settlement"] },
      { h: "Deployment", cells: ["Article 99; Res 143", "~9,000 troops in two weeks; up to 19,000"] },
      { h: "Neutrality", cells: ["Hammarskjöld vs U Thant", "Contested; seen as pro-Western by USSR"] },
      { h: "Phase 2", cells: ["Res 199 (withdrawal)", "Left 1964; rescues only; Great Powers dominated"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "ONUC met its military/territorial objectives by force.",
    "It failed to produce a durable political settlement.",
    "Its neutrality was contested, and it left before Phase 2."
  ]
});

L.push({
  id: "cg-arg", order: 19, level: 1, parent: "cg-top", kind: "argument",
  title: "Was the UN effective in the Congo?",
  question: "'The UN was effective in managing the Congo Crisis.' How far do you agree?",
  intro: "Weigh ONUC's military success against its political failures and the dominance of unilateral action.",
  clusters: [
    { title: "Claim", summary: "UN effective.",
      steps: [ N("cg-x-claim", "judg", "The UN was effective", null, "The UN was effective in managing the Congo Crisis.", ["cg-exam-overall"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "Military vs political.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("cg-x-deploy", "evid", "Rapid deployment", "1960", "Troops within days at the government's request.", ["cg-onuc-eval"]),
            K("supports", "Belgians left Katanga peacefully."),
            N("cg-x-belg", "evid", "Belgian withdrawal secured", "1960", "Hammarskjöld's Katanga diplomacy.", ["cg-sg-p1"]),
            K("supports", "The secessions ended."),
            N("cg-x-grand", "evid", "Secessions ended", "1963", "Grandslam ended Katanga; ONUC 'kept the country together'.", ["cg-unokat-grandslam", "cg-onuc-phase3"])
          ] },
          { h: "Against", steps: [
            N("cg-x-neutral", "evid", "Neutrality lost", null, "Seen as a US proxy; Greene Plan; Lumumba's death.", ["cg-uthant", "cg-un-p2"]),
            K("contradicts", "No durable settlement came."),
            N("cg-x-settle", "evid", "No political settlement", "1964–65", "Luluabourg and elections fed into Mobutu's coup.", ["cg-exam-overall"]),
            K("contradicts", "Others managed Phase 2."),
            N("cg-x-unilateral", "evid", "Unilateral action dominated", "1964", "US/Belgian intervention and mercenaries after ONUC left.", ["cg-us-johnson", "cg-belgium-p2"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "Militarily effective, politically not.",
      steps: [ N("cg-x-judge", "judg", "Effective militarily only", null, "Distinguish military/territorial success from the failure of durable political settlement and lost neutrality.", ["cg-exam-overall"]) ] }
  ],
  judge: { prompt: "How effective was the UN? Rank the evidence.", factors: ["cg-x-deploy", "cg-x-belg", "cg-x-grand", "cg-x-neutral", "cg-x-settle", "cg-x-unilateral"],
           notes_view: "Distinguish military/territorial achievements (secessions ended, Grandslam) from failure to achieve durable political settlement; unilateral Great Power action dominated Phase 2; neutrality was contested." },
  historians: [],
  takeaways: [
    "For: rapid deployment, Belgian withdrawal, secessions ended.",
    "Against: lost neutrality, no political settlement, Phase 2 left to Great Powers.",
    "Best answer: effective militarily, not politically."
  ]
});
})();
