// v2 flow charts: the Arab–Israeli conflict, 1948–1979 (cards in data/ai.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ai = window.FLOWS2.ai || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "ai-top", order: 1, level: 0, kind: "causal",
  title: "The Arab–Israeli conflict, 1948–1979",
  question: "Why did the Arab–Israeli conflict occur, and how effective were diplomacy and peacekeeping?",
  intro: "Competing nationalisms and Britain's contradictory promises gave two peoples a claim to one land. Four wars followed; only after 1973 did diplomacy produce a durable — but bilateral — peace.",
  clusters: [
    { title: "Causes", summary: "Nationalism and decolonisation.",
      steps: [
        N("ai-t-causes", "ltc", "Competing nationalisms", "1880s–1947", "Zionism vs Arab nationalism; religion and economics compounded the clash.", ["ai-starting-points", "ai-weigh-causes"], { go: "ai-causes" }),
        K("intensified", "Britain's promises and Mandate gave both a claim."),
        N("ai-t-decol", "ltc", "Contradictory British rule", "1915–1947", "Hussein–McMahon, Sykes-Picot, Balfour; a contradictory Mandate.", ["promises", "ai-mandate"], { go: "ai-promises" }),
        K("triggered", "Britain handed the problem to the UN."),
        N("ai-t-181", "trig", "Partition and Israel declared", "1947–48", "Res. 181; civil war; Israel declared 14 May 1948.", ["partition"], { go: "ai-partition" })
      ] },
    { link: "led to", how: "Four wars followed.",
      title: "Four wars", summary: "1948, 1956, 1967, 1973.",
      steps: [
        { row: [
          N("ai-t-48", "evt", "1948 War / Al Nakba", "1948–49", "Israel controls 75%+ of the Mandate; 750,000–940,000 refugees.", ["1948war", "ai-four-wars"], { go: "ai-1948" }),
          N("ai-t-56", "evt", "Suez Crisis", "1956", "Nasser triumphant politically; Britain and France lose.", ["suez", "ai-four-wars"], { go: "ai-suez" }),
          N("ai-t-67", "evt", "Six-Day War", "1967", "Israel triples its territory.", ["sixday", "ai-four-wars"], { go: "ai-1967" }),
          N("ai-t-73", "evt", "Yom Kippur War", "1973", "Arab dignity restored; oil weapon.", ["yomkippur", "ai-four-wars"], { go: "ai-1973" })
        ] }
      ] },
    { link: "supports", how: "Judging management.",
      title: "Verdict", summary: "Negative peace, then bilateral peace.",
      steps: [
        { row: [
          N("ai-t-un", "int", "UN mechanisms evolve", "1948–74", "UNTSO → UNEF I → 242 → UNEF II/UNDOF: more robust, still consent-dependent.", ["ai-un-evolution", "ai-superpower-evolution"], { go: "ai-compare" }),
          N("ai-t-cd", "pol", "Camp David", "1978–79", "Egypt first Arab state to recognise Israel.", ["campdavid"], { go: "ai-campdavid" })
        ] },
        K("supports", "Weighing the record."),
        N("ai-t-verdict", "judg", "Negative peace until 1973", null, "Fighting stopped but territory, refugees and recognition festered; Camp David's peace was bilateral, leaving the Palestinian question unresolved.", ["ai-effectiveness-criteria"], { go: "ai-arg" })
      ] }
  ],
  judge: { prompt: "What was the most important cause of the Arab–Israeli conflict? Rank them.", factors: ["ai-t-causes", "ai-t-decol", "ai-t-181"],
           notes_view: "Decolonisation (contradictory British promises) created the structural conditions; competing nationalisms made conflict over the same land essentially irreconcilable; religion and economics compounded it." },
  historians: [ { who: "Fraser (2015)", view: "Arabs and Jews had different names for the land, reflecting totally different views of its past, present and future.", nodes: ["ai-t-causes"] } ],
  takeaways: [
    "Competing nationalisms plus Britain's contradictory promises caused the conflict.",
    "Four wars: 1948, 1956, 1967, 1973.",
    "Only negative peace before 1973; Camp David's peace was bilateral."
  ]
});

L.push({
  id: "ai-causes", order: 2, level: 1, parent: "ai-top", kind: "causal",
  title: "Causes of the conflict",
  question: "Why did the Arab–Israeli conflict occur?",
  intro: "Two nationalisms grew in parallel over a land neither 'Palestine' nor 'Israel' in the 1880s; British policy, security fears, religion and economics compounded them.",
  clusters: [
    { title: "Setting", summary: "The land and its framing.",
      steps: [
        N("ai-c-land", "ctx", "Ottoman Palestine", "1880s", "Two Ottoman districts; overwhelmingly Arab; faiths co-existed peacefully.", ["ai-ottoman-palestine"]),
        K("followed by", "The region grew in strategic value."),
        N("ai-c-sig", "ctx", "A penetrated region", "1908–Cold War", "Oil, artificial states, Cold War theatre; two levels of conflict.", ["ai-me-significance", "ai-two-levels"])
      ] },
    { link: "led to", how: "Rival nationalisms emerged in parallel.",
      title: "Nationalisms", summary: "Two claims to one land.",
      steps: [
        { split: [
          { h: "Jewish", steps: [
            N("ai-c-herzl", "ltc", "Political Zionism", "1896–97", "Herzl's Der Judenstaat; Basle Congress; immigration and land purchase.", ["ai-zionism-herzl"])
          ] },
          { h: "Arab", steps: [
            N("ai-c-arab", "ltc", "Arab nationalism", "19th c.–1960s", "Anti-Turkish, anti-colonial, anti-Zionist; Pan-Arabism peaked in the 1960s.", ["ai-arab-nationalism"]),
            K("led to", "Palestinians defined themselves against Zionism."),
            N("ai-c-pal", "ltc", "Palestinian nationalism", "early 20th c.", "Cohesive only with the 1936–39 Arab Revolt.", ["ai-palestinian-nationalism"])
          ] }
        ] }
      ] },
    { link: "intensified", how: "Other factors compounded the clash.",
      title: "Compounding factors", summary: "Not root causes.",
      steps: [
        { row: [
          N("ai-c-decol", "ltc", "Decolonisation", "1915–47", "Contradictory promises and Mandate.", ["promises"], { go: "ai-promises" }),
          N("ai-c-sec", "ltc", "Security", "1948–79", "Arab fear of expansion vs Israeli existential threat.", ["ai-security"]),
          N("ai-c-rel", "ltc", "Religion", "1920s–", "Jerusalem holy to all three faiths.", ["ai-jerusalem"], { go: "ai-mandate" }),
          N("ai-c-econ", "ltc", "Economics", "1948–79", "Land expropriation; unequal water; refugee poverty.", ["ai-econ-disparities"], { go: "ai-refugees" })
        ] },
        K("supports", "Weigh, don't list."),
        N("ai-c-weigh", "judg", "Nationalism made it irreconcilable", null, "Decolonisation set the structure; religion and economics aggravated it.", ["ai-weigh-causes"])
      ] }
  ],
  judge: { prompt: "Which cause mattered most? Rank them.", factors: ["ai-c-herzl", "ai-c-arab", "ai-c-decol", "ai-c-sec", "ai-c-rel", "ai-c-econ"],
           notes_view: "Weigh the six factors: decolonisation created the structural conditions; competing nationalisms made conflict essentially irreconcilable; religion and economics were compounding rather than root causes." },
  historians: [
    { who: "Schulze (2017)", view: "Zionism and Arab nationalism developed almost in parallel in the 19th century as secular ideologies of emancipation and self-determination.", nodes: ["ai-c-herzl", "ai-c-arab"] },
    { who: "L. Carl Brown", view: "The Middle East is 'the most penetrated international relations subsystem in today's world.'", nodes: ["ai-c-sig"] }
  ],
  takeaways: [
    "Zionism and Arab nationalism grew in parallel over one land.",
    "Palestinian nationalism formed in opposition to Zionism.",
    "Decolonisation set the structure; religion, security and economics compounded it."
  ]
});

L.push({
  id: "ai-promises", order: 3, level: 3, parent: "ai-causes", kind: "causal",
  title: "Britain's conflicting promises, 1915–17",
  question: "How did Britain's wartime promises sow the conflict?",
  intro: "To win allies against the Ottomans, Britain made overlapping promises to the Arabs, France and the Zionists — none specifying borders.",
  clusters: [
    { title: "Three promises", summary: "Overlapping claims.",
      steps: [
        { row: [
          N("ai-p-hm", "pol", "Hussein–McMahon", "1915–16", "Arab sovereignty for the Arab Revolt; Palestine not excluded.", ["promises"]),
          N("ai-p-sp", "pol", "Sykes-Picot", "May 1916", "Secret Anglo-French spheres; French Aleppo, British Suez route.", ["promises", "ai-anglo-french-econ"]),
          N("ai-p-bal", "pol", "Balfour Declaration", "2 Nov 1917", "'A national home for the Jewish people' — not a state, no borders.", ["promises"])
        ] },
        K("led to", "Both sides believed Palestine was theirs."),
        N("ai-p-both", "res-", "Palestine promised twice", "1917", "Neither document specified borders.", ["promises"])
      ] },
    { link: "followed by", how: "Anglo-French interests later aligned with Israel.",
      title: "Lasting interests", summary: "Britain and France.",
      steps: [
        N("ai-p-france", "act", "France arms Israel", "1953–63", "Mirage fighters; nuclear reactor; shared hostility to Arab nationalism over Algeria.", ["ai-anglo-french-econ"]),
        K("led to", "Interests converged in 1956."),
        N("ai-p-suez", "res-", "Collusion over Suez", "1956", "Israel, France and the UK conspired.", ["ai-anglo-french-econ"], { go: "ai-suez" })
      ] }
  ],
  judge: { prompt: "How far did Britain's promises cause the conflict? Weigh them.", factors: ["ai-p-hm", "ai-p-sp", "ai-p-bal", "ai-p-both"],
           notes_view: "Core evidence for decolonisation as the structural cause: British policy sowed the seeds, though competing nationalisms made it irreconcilable." },
  historians: [],
  takeaways: [
    "Hussein–McMahon, Sykes-Picot and Balfour overlapped.",
    "None specified borders; both sides felt promised Palestine.",
    "Anglo-French interests later aligned with Israel (Suez)."
  ]
});

L.push({
  id: "ai-mandate", order: 4, level: 3, parent: "ai-causes", kind: "chain",
  title: "Mandate-era clashes, 1920–1939",
  question: "Why did communal violence grow under the Mandate?",
  intro: "A contradictory Mandate, rising Jewish immigration and Jerusalem's sanctity drove violence; British partition and restriction satisfied neither side.",
  clusters: [
    { title: "Contradictory Mandate", summary: "1920s.",
      steps: [
        N("ai-m-mandate", "ctx", "A contradictory Mandate", "1922", "Jewish national home while safeguarding all Palestinians' rights.", ["ai-mandate"]),
        K("provoked response", "Arabs resented growing Jewish settlement."),
        N("ai-m-1920", "evt", "April 1920 riots", "1920", "Jews built institutions; Arabs stayed divided by family and religion.", ["ai-early-clashes"])
      ] },
    { link: "intensified", how: "Religion turned rivalry into violence.",
      title: "Wailing Wall", summary: "1928–29.",
      steps: [
        N("ai-m-wall", "trig", "Western Wall dispute", "1928", "Benches and a screen seen as strengthening Jewish claims.", ["ai-wailing-wall", "ai-jerusalem"]),
        K("led to", "Fights became a small civil war."),
        N("ai-m-1929", "evt", "1929 riots", "1929", "Inquiry blamed land purchases; Passfield White Paper; Weizmann resigned.", ["ai-wailing-wall"])
      ] },
    { link: "intensified", how: "Nazi persecution drove immigration.",
      title: "Revolt and restriction", summary: "1933–39.",
      steps: [
        N("ai-m-revolt", "evt", "Arab Revolt", "1936–39", "Immigration surge after 1933; Arabs feared becoming a minority.", ["ai-1930s-mandate", "ai-1930s-religion"]),
        K("provoked response", "Britain tried partition, then restriction."),
        N("ai-m-peel", "pol", "Peel partition plan", "1937", "Rejected by Palestinian Arabs and Arab states; retracted.", ["ai-1930s-mandate", "ai-1930s-religion"]),
        K("followed by", "A restrictive White Paper."),
        N("ai-m-wp", "pol", "1939 White Paper", "1939", "Immigration capped at 15,000/year; roundtable failed.", ["ai-1930s-mandate", "ai-1930s-religion"]),
        K("undermined", "Both sides rejected it."),
        N("ai-m-reject", "res-", "Both reject it", "1939", "Jews: betrayal of Balfour; Arabs: independence postponed.", ["ai-1930s-religion"], { go: "ai-ww2" })
      ] }
  ],
  judge: { prompt: "Why did British attempts at a solution fail? Rank the factors.", factors: ["ai-m-mandate", "ai-m-wall", "ai-m-revolt", "ai-m-peel", "ai-m-wp"],
           notes_view: "Religion and immigration compounded nationalist rivalry; Britain could neither protect civilians nor reconcile both sides." },
  historians: [ { who: "Goldschmidt Jr. and Al-Marashi (2019)", view: "Muslims feared Jewish actions at the Western Wall could lead to a claim on the Temple Mount.", nodes: ["ai-m-wall"] } ],
  takeaways: [
    "The Mandate's two aims were contradictory.",
    "The 1929 Wailing Wall riots showed religion compounding rivalry.",
    "Peel (1937) and the 1939 White Paper satisfied neither side."
  ]
});

L.push({
  id: "ai-ww2", order: 5, level: 3, parent: "ai-causes", kind: "causal",
  title: "WWII and Britain's exit",
  question: "Why did British withdrawal become inevitable by 1947?",
  intro: "Five converging factors made withdrawal almost inevitable, while both superpowers backed a Jewish state.",
  clusters: [
    { title: "Five factors", summary: "Converging pressure.",
      steps: [
        { row: [
          N("ai-w-decline", "ltc", "Imperial decline", "1945", "Costly Mandate unsustainable; an 'honourable way out'.", ["ai-ww2-withdrawal"]),
          N("ai-w-holo", "ltc", "Holocaust", "1939–45", "6 million murdered; refugee crisis; sympathy.", ["ai-ww2-withdrawal"]),
          N("ai-w-violence", "stc", "Violence", "1945–47", "Jewish attacks killed 127 British soldiers by Oct 1947.", ["ai-ww2-withdrawal"])
        ] },
        K("led to", "Britain handed Palestine to the UN."),
        N("ai-w-exit", "tp", "Britain ends the Mandate", "Feb 1947", "Problem handed to the UN.", ["ai-ww2-withdrawal"], { go: "ai-partition" })
      ] },
    { link: "enabled", how: "Both superpowers backed statehood.",
      title: "Superpowers", summary: "Rival motives.",
      steps: [
        { split: [
          { h: "USA", steps: [
            N("ai-w-us", "act", "US backs a Jewish state", "1942–48", "Biltmore Program; Truman recognised Israel 14 May 1948.", ["ai-superpower-israel", "ai-ww2-withdrawal"]),
            K("led to", "Oil and containment shaped US aims."),
            N("ai-w-usaim", "int", "Oil and containment", "1947 onward", "Truman Doctrine; Arab oil (~13% of GNP); Israel a strategic partner.", ["ai-us-objectives"])
          ] },
          { h: "USSR", steps: [
            N("ai-w-stalin", "act", "Stalin turns pro-Zionist", "1944–47", "Expected a socialist state hastening British decline.", ["ai-superpower-israel"]),
            K("followed by", "Later courted radical Arab states."),
            N("ai-w-ussr", "int", "Limited, reactive influence", "1950s–73", "Ties with Egypt, Syria, Iraq; waned from 1973.", ["ai-ussr-involvement"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "Why did Britain withdraw? Rank the factors.", factors: ["ai-w-decline", "ai-w-holo", "ai-w-violence", "ai-w-us"],
           notes_view: "Decolonisation plus external (superpower) support created Israel: imperial decline, US involvement, the Holocaust, refugees and violence made withdrawal near-inevitable." },
  historians: [],
  takeaways: [
    "Decline, Holocaust, refugees, US pressure and violence forced Britain out.",
    "By Feb 1947 Britain handed the problem to the UN.",
    "Both the US and USSR backed a Jewish state, for different reasons."
  ]
});

L.push({
  id: "ai-partition", order: 6, level: 3, parent: "ai-causes", kind: "chain",
  title: "Partition and Israel's birth, 1947–48",
  question: "Why did the UN Partition Plan lead to war?",
  intro: "UNSCOP found both claims valid but irreconcilable; the Zionists accepted partition, the Arabs rejected it, and civil war followed.",
  clusters: [
    { title: "Partition", summary: "Resolution 181.",
      steps: [
        N("ai-x-181", "pol", "Resolution 181", "29 Nov 1947", "Arab ~43%, Jewish ~56%; Jerusalem corpus separatum; 33–13–10.", ["partition"]),
        K("provoked response", "Responses split."),
        { split: [
          { h: "Zionists", steps: [
            N("ai-x-accept", "act", "Accept as a first step", "1947", "Disliked Jerusalem's status and non-contiguity.", ["partition"])
          ] },
          { h: "Arabs", steps: [
            N("ai-x-reject", "act", "Reject; resolve on war", "1947", "All 5 Arab members voted against; divided behind unity.", ["partition"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Civil war as Britain withdrew.",
      title: "Civil war", summary: "Plan Dalet.",
      steps: [
        N("ai-x-civil", "evt", "Civil war", "1947–48", "British withdrew, intervening only occasionally.", ["ai-civil-war-4748"]),
        K("intensified", "Zionist forces went beyond the lines."),
        N("ai-x-dalet", "pol", "Plan Dalet", "1948", "Conquered territory beyond partition lines.", ["ai-civil-war-4748", "ai-declaration"]),
        K("followed by", "The Mandate expired."),
        N("ai-x-declare", "tp", "Israel declared", "14 May 1948", "Ben-Gurion PM, Weizmann President; Arab states invade.", ["ai-declaration"], { go: "ai-1948" })
      ] }
  ],
  judge: { prompt: "Why did partition lead to war? Rank the factors.", factors: ["ai-x-181", "ai-x-reject", "ai-x-civil", "ai-x-dalet"],
           notes_view: "Key evidence for territorial sovereignty as a cause: fragmented, indefensible borders with a large Arab population 'trapped' inside the Jewish state." },
  historians: [],
  takeaways: [
    "Res. 181: fragmented borders; Jerusalem international.",
    "Zionists accepted, Arabs rejected; civil war followed.",
    "Israel declared 14 May 1948; Arab states invaded."
  ]
});

L.push({
  id: "ai-1948", order: 7, level: 1, parent: "ai-top", kind: "chain",
  title: "1948 War / Al Nakba",
  question: "Why did Israel win in 1948, and with what consequences?",
  intro: "Israel's declaration triggered invasion by five Arab states; Israel won and expanded well beyond partition lines.",
  clusters: [
    { title: "War", summary: "Civil to inter-state.",
      steps: [
        N("ai-1-leadup", "stc", "Civil war atrocities", "Dec 1947–May 1948", "Strike sparked clashes; Deir Yassin (250 killed); convoy ambush (75).", ["ai-1948-leadup"]),
        K("followed by", "Arab states invaded."),
        N("ai-1-invade", "trig", "Arab invasion", "15 May 1948", "Egypt, Jordan, Lebanon, Syria, Iraq; truces and armistices followed.", ["1948war"], { go: "ai-un48" })
      ] },
    { link: "led to", how: "Israel prevailed.",
      title: "Why Israel won", summary: "Arab weakness.",
      steps: [
        { row: [
          N("ai-1-idf", "evid", "IDF grows to 100,000", "1948", "Better trained, more motivated; Arab Legion only 10,000.", ["ai-1948-why-israel-won"]),
          N("ai-1-div", "evid", "Arab disunity", "1948", "Abdullah's 'Greater Syria' vs Egypt and Saudi Arabia.", ["ai-arab-divisions-1948"]),
          N("ai-1-powers", "evid", "Great powers' confusion", "1948", "US and USSR recognised Israel; Czech arms despite embargo.", ["ai-1948-powers"])
        ] }
      ] },
    { link: "led to", how: "Victory and catastrophe.",
      title: "Impact", summary: "Two narratives.",
      steps: [
        { split: [
          { h: "Israel", steps: [
            N("ai-1-gain", "res±", "Territory +21%", "1949", "'Garrison state' without recognition or real security.", ["ai-1948-impact"])
          ] },
          { h: "Arabs", steps: [
            N("ai-1-nakba", "res-", "Al Nakba", "1948–49", "750,000–940,000 refugees.", ["1948war"], { go: "ai-refugees" }),
            K("undermined", "Defeat delegitimised Arab regimes."),
            N("ai-1-regimes", "res-", "Arab regimes fall", "1949–52", "Syria (1949), Abdullah (1951), Farouk (1952); Arab nationalism surged.", ["ai-1948-impact"], { go: "ai-suez-road" })
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "Why did the Arabs lose in 1948? Rank the factors.", factors: ["ai-1-idf", "ai-1-div", "ai-1-powers"],
           notes_view: "Arab disunity, poorly trained armies and poor morale against a larger, motivated IDF fighting for survival; great-power confusion hurt the Arabs more." },
  historians: [ { who: "Goldschmidt Jr. and Al-Marashi (2019)", view: "In 1948 poor Arab morale and smaller-than-expected Arab armies were major reasons for defeat.", nodes: ["ai-1-idf"] } ],
  takeaways: [
    "Civil war became inter-state war on 15 May 1948.",
    "IDF strength and Arab disunity explain Israel's victory.",
    "Israel +21%; Palestinians dispersed; Arab regimes toppled."
  ]
});

L.push({
  id: "ai-un48", order: 8, level: 3, parent: "ai-1948", kind: "chain",
  title: "Truces and armistices, 1948–49",
  question: "How effective was UN mediation in 1948–49?",
  intro: "Bernadotte's truces were short-lived; Bunche's proximity talks produced armistices — negative peace without settlement.",
  clusters: [
    { title: "Mediation", summary: "Bernadotte to Bunche.",
      steps: [
        N("ai-u-truce", "pol", "Two truces", "Jun–Oct 1948", "Both bypassed limits; the IDF rearmed with Czech materiel.", ["ai-bernadotte", "ai-eval-truces-1948"]),
        K("undermined", "Both rejected his plan; he was murdered."),
        N("ai-u-bern", "evt", "Bernadotte assassinated", "17 Sep 1948", "Stern Gang; showed UN impotence.", ["ai-bernadotte", "ai-eval-truces-1948"]),
        K("followed by", "Bunche took over."),
        N("ai-u-rhodes", "pol", "Rhodes proximity talks", "Jan 1949", "Separate hotel suites; no direct Arab negotiation.", ["ai-bunche-rhodes"]),
        K("led to", "Four armistices."),
        N("ai-u-arm", "res±", "1949 Armistices", "Feb–Jul 1949", "Egypt, Lebanon, Jordan, Syria; Jordan never ratified non-belligerency.", ["ai-eval-armistice", "1948war"], { go: "ai-untso" })
      ] },
    { link: "supports", how: "Weighing the outcome.",
      title: "Negative peace", summary: "Fighting stopped.",
      steps: [
        N("ai-u-neg", "judg", "Negative, not positive peace", null, "Territory, refugees and non-recognition carried into 1956, 1967 and 1973.", ["ai-1948-negative-peace", "ai-eval-armistice"])
      ] }
  ],
  judge: { prompt: "How effective was UN mediation in 1948–49? Weigh the evidence.", factors: ["ai-u-truce", "ai-u-bern", "ai-u-rhodes", "ai-u-arm"],
           notes_view: "The classic negative vs positive peace argument: active fighting ended, but non-recognition and territorial demands carried forward." },
  historians: [],
  takeaways: [
    "Truces were stop-gaps; Bernadotte was assassinated.",
    "Bunche's Rhodes talks produced four armistices.",
    "Negative peace only."
  ]
});

L.push({
  id: "ai-untso", order: 9, level: 3, parent: "ai-1948", kind: "chain",
  title: "UNTSO, MACs and Lausanne",
  question: "How effective was UN machinery in 1948–56?",
  intro: "UNTSO and the MACs supervised the armistices; the UNCCP's Lausanne Conference failed to reach a final settlement.",
  clusters: [
    { title: "Machinery", summary: "Observation and conciliation.",
      steps: [
        { split: [
          { h: "Observation", steps: [
            N("ai-o-untso", "pol", "UNTSO and MACs", "29 May 1948", "Res. 50; MACs the only formal Arab–Israeli forum.", ["ai-untso"])
          ] },
          { h: "Conciliation", steps: [
            N("ai-o-unccp", "pol", "UNCCP and Lausanne", "Dec 1948–Sep 1949", "Res. 194; borders and refugees — no agreement.", ["ai-unccp-lausanne"])
          ] }
        ] }
      ] },
    { link: "supports", how: "Weighing the record.",
      title: "Effectiveness", summary: "Survived, could not enforce.",
      steps: [
        { split: [
          { h: "Achievements", steps: [
            N("ai-o-good", "evid", "Most successful UN initiative", "1948–56", "Observers reported breaches; superseded UNCCP by 1953.", ["ai-eval-untso", "ai-untso"])
          ] },
          { h: "Limitations", steps: [
            N("ai-o-bad", "evid", "No enforcement", "1951–53", "Israel boycotted ISMC, left HJKIMAC; infiltration continued.", ["ai-eval-untso"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "How effective was UN machinery in 1948–56? Weigh the evidence.", factors: ["ai-o-untso", "ai-o-unccp", "ai-o-good", "ai-o-bad"],
           notes_view: "UNTSO was the most successful UN initiative of 1948–56 (Kopops et al.) but had no enforcement — consent-dependent machinery." },
  historians: [ { who: "Kopops et al. (2015)", view: "From 1948 to 1956 UNTSO was the most successful UN initiative in the Middle East; its peace-observation function survived the collapse of broader peace conferences.", nodes: ["ai-o-good"] } ],
  takeaways: [
    "UNTSO and MACs supervised the armistices.",
    "Lausanne failed to reach a settlement.",
    "UNTSO survived but could not enforce."
  ]
});

L.push({
  id: "ai-refugees", order: 10, level: 3, parent: "ai-1948", kind: "causal",
  title: "The Palestinian refugee problem",
  question: "Why did the refugee problem become permanent?",
  intro: "Hundreds of thousands fled or were expelled; Arab states (except Jordan) would not absorb them and Israel would not readmit them.",
  clusters: [
    { title: "Exodus", summary: "Contested causes.",
      steps: [
        N("ai-r-flight", "evt", "Mass exodus", "1948–49", "750,000 by early 1949, 940,000 by June, from 369 towns and villages.", ["ai-refugees-1948"]),
        K("provoked response", "Rival explanations."),
        { split: [
          { h: "Israeli view", steps: [ N("ai-r-isr", "int", "Arab armies urged flight", "1948", "Organic flight.", ["ai-refugees-1948", "ai-historiography"]) ] },
          { h: "Arab view", steps: [ N("ai-r-arab", "int", "Deliberate expulsion", "1948", "Ethnic cleansing.", ["ai-refugees-1948"]) ] }
        ] }
      ] },
    { link: "led to", how: "No side resolved it.",
      title: "Permanence", summary: "Camps for decades.",
      steps: [
        N("ai-r-stuck", "res-", "No return, no absorption", "1949 onward", "Israel feared a 'fifth column'; UNRWA camps as a stopgap.", ["ai-refugees-1948"]),
        K("intensified", "Inequality deepened grievance."),
        N("ai-r-econ", "res-", "Land and economic disparities", "1948–79", "Absentee Property Law; unequal water and funding; wage gaps.", ["ai-econ-disparities"])
      ] }
  ],
  judge: { prompt: "Why did the refugee problem persist? Rank the factors.", factors: ["ai-r-flight", "ai-r-stuck", "ai-r-econ"],
           notes_view: "Foundational to Palestinian identity and a contested debate; refugees became a destabilising force in host Arab states." },
  historians: [],
  takeaways: [
    "750,000–940,000 refugees; ~150,000 stayed as Israeli citizens.",
    "Flight vs expulsion remains contested.",
    "No return, no absorption; UNRWA camps for decades."
  ]
});

L.push({
  id: "ai-suez-road", order: 11, level: 3, parent: "ai-suez", kind: "chain",
  title: "Nasser, fedayeen and Czech arms",
  question: "Why were Egypt and Israel on a collision course by 1956?",
  intro: "Nasser's defiance of the West, escalating fedayeen raids and reprisals, and an arms race set Egypt and Israel on course for war.",
  clusters: [
    { title: "Nasser", summary: "Arab Socialism.",
      steps: [
        N("ai-s-nasser", "act", "Nasser's rise", "1952–56", "Farouk toppled; nationalisations; Aswan Dam ambitions.", ["ai-nasser-rise"])
      ] },
    { link: "intensified", how: "Border violence escalated.",
      title: "Raids and reprisals", summary: "1950–55.",
      steps: [
        N("ai-s-raids", "evt", "Fedayeen raids", "1950–56", "Israeli casualties rose from 19/31 to 54/129; harsh reprisals.", ["ai-fedayeen-tensions"]),
        K("triggered", "An Israeli raid on Gaza."),
        N("ai-s-gaza", "evt", "Gaza Raid", "28 Feb 1955", "Operation Black Arrow killed 38 Egyptian soldiers.", ["ai-gaza-raid-czech"]),
        K("provoked response", "Nasser armed and blockaded."),
        N("ai-s-war", "pol", "Economic warfare", "1955", "Commando camps; Canal and Aqaba closed to Israel.", ["ai-nasser-rise"])
      ] },
    { link: "intensified", how: "An arms race drew in outsiders.",
      title: "Arms race", summary: "Soviet bloc vs France.",
      steps: [
        N("ai-s-czech", "pol", "Czech Arms Deal", "1955", "300 tanks, 200 MiG-15s, 50 Il-28 bombers.", ["ai-gaza-raid-czech"]),
        K("provoked response", "France armed Israel."),
        N("ai-s-mystere", "pol", "French Mystères", "Apr 1956", "Fighters and tanks; Israel saw the balance shifting.", ["ai-gaza-raid-czech"], { go: "ai-suez" })
      ] }
  ],
  judge: { prompt: "What drove Egypt and Israel toward war? Rank the factors.", factors: ["ai-s-nasser", "ai-s-raids", "ai-s-gaza", "ai-s-czech"],
           notes_view: "Supports the security cause and shows the arms race that drew in outside powers (Soviet bloc for Egypt, France for Israel)." },
  historians: [],
  takeaways: [
    "Nasser defied the West.",
    "Fedayeen raids and the Gaza Raid escalated violence.",
    "The Czech deal and French arms fuelled an arms race."
  ]
});

L.push({
  id: "ai-suez", order: 12, level: 1, parent: "ai-top", kind: "chain",
  title: "The Suez Crisis, 1956",
  question: "Why did the Suez Crisis happen, and who won?",
  intro: "After Nasser nationalised the canal, Britain, France and Israel colluded to invade Egypt; US pressure forced them to halt.",
  clusters: [
    { title: "Causes", summary: "Nationalisation.",
      steps: [
        N("ai-z-road", "stc", "Collision course", "1952–56", "Raids, the Gaza Raid and the arms race.", ["ai-gaza-raid-czech"], { go: "ai-suez-road" }),
        K("triggered", "The US withdrew Aswan funding."),
        N("ai-z-nat", "trig", "Canal nationalised", "26 Jul 1956", "To fund Aswan; threatened Western oil access.", ["ai-canal-nationalisation"])
      ] },
    { link: "provoked response", how: "Three states colluded.",
      title: "Collusion", summary: "Tripartite Aggression.",
      steps: [
        N("ai-z-motives", "int", "Convergent motives", "1956", "France: Algeria; Britain: oil share 49%→14%; Israel: security.", ["ai-sevres-collusion", "suez"]),
        K("led to", "A pretext for intervention."),
        N("ai-z-kadesh", "evt", "Operation Kadesh", "29 Oct 1956", "Israel invades Sinai; Anglo-French invasion 5 Nov.", ["ai-sevres-collusion", "suez"])
      ] },
    { link: "provoked response", how: "The US forced a halt.",
      title: "US pressure", summary: "Halt.",
      steps: [
        N("ai-z-us", "act", "US forces halt", "Nov 1956", "Feared Soviet intervention; oil; Eisenhower's re-election; Hungary.", ["ai-us-halts-suez"]),
        K("led to", "A UN ceasefire and force."),
        N("ai-z-unef", "pol", "Res. 997/998; UNEF I", "2–7 Nov 1956", "Ceasefire; first UN emergency force.", ["ai-res-997-998"], { go: "ai-unef1" })
      ] },
    { link: "led to", how: "A new regional order.",
      title: "Consequences", summary: "Winners and losers.",
      steps: [
        { split: [
          { h: "Egypt", steps: [ N("ai-z-egypt", "res+", "Nasser triumphant", "1956", "Military defeat but immense prestige; kept the Canal.", ["ai-suez-consequences"]) ] },
          { h: "Israel", steps: [ N("ai-z-israel", "res+", "Aqaba shipping", "1956", "Fedayeen limited; deterred war for years.", ["ai-suez-consequences"]) ] },
          { h: "Britain, France", steps: [ N("ai-z-loser", "res-", "Influence collapses", "1956", "Superpowers filled the vacuum.", ["ai-suez-consequences"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "Who won the Suez Crisis? Weigh the outcomes.", factors: ["ai-z-egypt", "ai-z-israel", "ai-z-loser", "ai-z-us"],
           notes_view: "Shows the eclipse of British/French power by the superpowers and Nasser's political triumph despite military defeat." },
  historians: [],
  takeaways: [
    "Nationalisation (26 Jul) triggered collusion.",
    "The US forced Britain, France and Israel to halt.",
    "Nasser won politically; Britain and France lost."
  ]
});

L.push({
  id: "ai-unef1", order: 13, level: 3, parent: "ai-suez", kind: "chain",
  title: "Hammarskjöld and UNEF I",
  question: "How effective was UNEF I?",
  intro: "Hammarskjöld defined peacekeeping — consent, impartiality, non-use of force — and UNEF I kept a quiet decade, until consent was withdrawn.",
  clusters: [
    { title: "Creation", summary: "Improvised peacekeeping.",
      steps: [
        N("ai-e-997", "pol", "Res. 997 and 998", "2–4 Nov 1956", "Ceasefire and withdrawal; US threats on sterling.", ["ai-res-997-998"]),
        K("enabled", "Hammarskjöld defined the strategy."),
        N("ai-e-hamm", "pol", "'Chapter Six and a Half'", "1956", "Consent, impartiality, non-use of force except self-defence.", ["ai-hammarskjold"]),
        K("led to", "UNEF I deployed."),
        N("ai-e-unef", "pol", "UNEF I", "7 Nov 1956", "Supervised withdrawal; buffer; Canal clearing.", ["ai-unef1"])
      ] },
    { link: "supports", how: "Weighing it.",
      title: "Effectiveness", summary: "Quiet decade.",
      steps: [
        { split: [
          { h: "Achievements", steps: [ N("ai-e-good", "evid", "Quiet decade", "1957–67", "Orderly withdrawal; precedent for future PKOs.", ["ai-eval-hammarskjold-unef1"]) ] },
          { h: "Limitations", steps: [
            N("ai-e-bad", "evid", "Consent-dependent", "1967", "72 posts for ~500 sq km; lightly armed.", ["ai-eval-hammarskjold-unef1"]),
            K("led to", "Nasser withdrew consent."),
            N("ai-e-1967", "res-", "Withdrawn on request", "18 May 1967", "U Thant had to comply.", ["ai-eval-hammarskjold-unef1"], { go: "ai-1967" })
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "How effective was UNEF I? Weigh the evidence.", factors: ["ai-e-hamm", "ai-e-unef", "ai-e-good", "ai-e-bad"],
           notes_view: "Peacekeeping born from improvisation — genuine innovation, but the consent-dependence that led directly to 1967." },
  historians: [],
  takeaways: [
    "Res. 997/998 created the first UN emergency force.",
    "Hammarskjöld's three principles became precedent.",
    "A quiet decade, until Nasser withdrew consent in 1967."
  ]
});

L.push({
  id: "ai-road67", order: 14, level: 3, parent: "ai-1967", kind: "chain",
  title: "The PLO and rising tensions",
  question: "Why did tensions rise toward war in 1966–67?",
  intro: "Palestinians revived politically; inter-Arab rivalry over the PLO and border clashes made war seem near-inevitable.",
  clusters: [
    { title: "Palestinian revival", summary: "Fatah and PLO.",
      steps: [
        N("ai-v-fatah", "act", "Fatah formed", "1957", "Arafat and al-Wazīr; low-intensity guerrilla warfare.", ["ai-plo-formation"]),
        K("provoked response", "Nasser sought control."),
        N("ai-v-plo", "pol", "PLO founded", "Jan 1964", "Under al-Shukayri; Egyptian control; focal point of Arab rivalry.", ["ai-plo-formation"])
      ] },
    { link: "intensified", how: "Border clashes escalated.",
      title: "Escalation", summary: "1966–67.",
      steps: [
        N("ai-v-syria", "evt", "Ba'athists in Syria", "Feb–Nov 1966", "Galilee clash; Egypt–Syria defence pact.", ["ai-tensions-6667"]),
        K("intensified", "Israel struck Jordan's West Bank."),
        N("ai-v-samu", "evt", "Battle of Samu", "13 Nov 1966", "After a Fatah landmine; 3 civilians, 14 soldiers killed.", ["ai-tensions-6667"]),
        K("intensified", "Air clashes with Syria."),
        N("ai-v-migs", "evt", "Six Syrian MiGs downed", "7 Apr 1967", "Nasser pledged to aid Syria.", ["ai-tensions-6667"], { go: "ai-1967" })
      ] }
  ],
  judge: { prompt: "Why did war seem inevitable by 1967? Rank the factors.", factors: ["ai-v-fatah", "ai-v-plo", "ai-v-syria", "ai-v-samu", "ai-v-migs"],
           notes_view: "Links the Palestinian level to the inter-state level and shows a slide to war that no party clearly 'wanted'." },
  historians: [],
  takeaways: [
    "Fatah (1957) and the PLO (1964) revived the Palestinian cause.",
    "Syria's Ba'athists and Samu escalated clashes.",
    "Nasser pledged to aid Syria."
  ]
});

L.push({
  id: "ai-1967", order: 15, level: 1, parent: "ai-top", kind: "chain",
  title: "The Six-Day War, 1967",
  question: "Why did the 1967 war break out, and why did Israel win?",
  intro: "False Soviet intelligence, Egypt's move into Sinai, UNEF's withdrawal and the Tiran closure led Israel to strike first and win decisively.",
  clusters: [
    { title: "Slide to war", summary: "May 1967.",
      steps: [
        N("ai-6-tension", "stc", "Rising tensions", "1966–67", "Samu; MiGs; Egypt–Syria pact.", ["ai-tensions-6667"], { go: "ai-road67" }),
        K("triggered", "False Soviet intelligence."),
        N("ai-6-intel", "trig", "Podgorny's false warning", "13 May 1967", "Claimed Israel mobilised against Syria.", ["ai-1967-timeline", "ai-soviet-false-intel"]),
        K("led to", "Nasser escalated."),
        N("ai-6-tiran", "evt", "UNEF out; Tiran closed", "18–22 May 1967", "Casus belli; Jordan and Iraq join Egypt.", ["ai-1967-timeline"])
      ] },
    { link: "provoked response", how: "Israel struck first.",
      title: "War", summary: "Six days.",
      steps: [
        N("ai-6-strike", "tp", "Pre-emptive air strikes", "5 Jun 1967", "304 Egyptian, 53 Syrian, 28 Jordanian aircraft destroyed.", ["ai-1967-timeline"]),
        K("led to", "Air superiority and Arab disunity."),
        N("ai-6-win", "res+", "Israel triumphs", "5–10 Jun 1967", "East Jerusalem, West Bank, Gaza, Sinai, Golan; Egypt lost 12,000.", ["sixday"], { go: "ai-242" })
      ] },
    { link: "supports", how: "Superpower roles.",
      title: "Superpowers", summary: "Miscalculation.",
      steps: [
        { split: [
          { h: "USSR", steps: [ N("ai-6-ussr", "int", "Miscalculation", "1967", "Brezhnev's report: no intent to incite war; diplomacy only.", ["ai-soviet-false-intel", "ai-ussr-1967-war"]) ] },
          { h: "US", steps: [ N("ai-6-us", "int", "Johnson 'missing'", "May–Jun 1967", "Vietnam distraction; peace before withdrawal.", ["ai-us-1967", "ai-ross-vietnam"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "Who was most responsible for the 1967 war? Rank the factors.", factors: ["ai-6-tension", "ai-6-intel", "ai-6-tiran", "ai-6-ussr", "ai-6-us"],
           notes_view: "Soviet miscalculation, Israeli pre-emption or Nasser's brinkmanship? Air superiority and Arab disunity explain victory; UNEF's withdrawal shows consent-dependence." },
  historians: [ { who: "Dennis Ross (2017)", view: "Vietnam's demand on attention left Johnson 'missing in action' between 14 May and 5 June 1967, enabling the slide to war.", nodes: ["ai-6-us"] } ],
  takeaways: [
    "False Soviet intelligence → Sinai → UNEF out → Tiran closed.",
    "Israeli air strikes (5 Jun) decided the war.",
    "Soviet miscalculation and US distraction."
  ]
});

L.push({
  id: "ai-242", order: 16, level: 3, parent: "ai-1967", kind: "chain",
  title: "Resolution 242 and the aftermath",
  question: "How effective was Resolution 242?",
  intro: "Res. 242 set the 'land for peace' framework, but it was ambiguous, unenforceable and silent on Palestinian statehood.",
  clusters: [
    { title: "Resolutions", summary: "234 → 242.",
      steps: [
        N("ai-g-234", "pol", "Res. 234", "7 Jun 1967", "Soviet-proposed unanimous ceasefire.", ["res242"]),
        K("followed by", "A framework for peace."),
        N("ai-g-242", "pol", "Res. 242", "22 Nov 1967", "Withdrawal; end of belligerency; secure boundaries; refugee settlement.", ["res242"])
      ] },
    { link: "supports", how: "Weighing 242.",
      title: "Effectiveness", summary: "Touchstone, not solution.",
      steps: [
        { split: [
          { h: "Achievements", steps: [ N("ai-g-good", "evid", "'Land for peace'", "1967–", "Backed by US and USSR; groundwork for Camp David.", ["ai-eval-242"]) ] },
          { h: "Limitations", steps: [ N("ai-g-bad", "evid", "Ambiguous, unenforced", "1967–91", "'All' territories?; PLO rejected it until 1988.", ["ai-eval-242", "res242"]) ] }
        ] }
      ] },
    { link: "followed by", how: "Positions hardened.",
      title: "Aftermath", summary: "No peace.",
      steps: [
        N("ai-g-khart", "res-", "Khartoum: 'three noes'", "Sep 1967", "No peace, no recognition, no negotiation.", ["ai-1967-aftermath", "ai-glossary"]),
        K("intensified", "Palestinians radicalised."),
        N("ai-g-pal", "res-", "Palestinians radicalised", "1967–", "1 million under Israeli rule; Fatah and Arafat rise.", ["ai-1967-aftermath"], { go: "ai-attrition" })
      ] }
  ],
  judge: { prompt: "How effective was Resolution 242? Weigh the evidence.", factors: ["ai-g-234", "ai-g-242", "ai-g-good", "ai-g-bad", "ai-g-khart"],
           notes_view: "Military outcomes produced the diplomatic vocabulary used afterward — but 242 was ambiguous, unenforceable and silent on Palestinian statehood and settlements." },
  historians: [ { who: "Yapp (1991)", view: "After 1967 the Arabs could not make peace from utter defeat, Israel would not concede after victory, and the superpowers lacked the will and ability to impose peace.", nodes: ["ai-g-khart"] } ],
  takeaways: [
    "Res. 242: 'land for peace' — never fully implemented.",
    "Ambiguous on withdrawal; silent on Palestinians.",
    "Khartoum's 'three noes'; Palestinian nationalism radicalised."
  ]
});

L.push({
  id: "ai-attrition", order: 17, level: 3, parent: "ai-1973", kind: "chain",
  title: "War of Attrition and extremism",
  question: "Why did 1967 settle nothing?",
  intro: "Egypt waged a low-intensity war along the Canal, while disillusioned Palestinians organised independently and some turned to terrorism.",
  clusters: [
    { title: "Two fronts", summary: "No war, no peace.",
      steps: [
        { split: [
          { h: "Egypt", steps: [
            N("ai-a-war", "evt", "War of Attrition", "Mar 1969–Aug 1970", "Raids to dislodge Israel and destroy the Bar Lev Line.", ["ai-war-of-attrition"]),
            K("followed by", "Heavy losses forced a ceasefire."),
            N("ai-a-cease", "res±", "Ceasefire", "8 Aug 1970", "US agreement Israel would respect 242.", ["ai-war-of-attrition"])
          ] },
          { h: "Palestinians", steps: [
            N("ai-a-arafat", "act", "Independent Palestinians", "1967–73", "Arafat the decisive voice; Fatah grows.", ["ai-palestinian-extremism"]),
            K("led to", "Some turned to terror."),
            N("ai-a-pflp", "res-", "PFLP terrorism", "1967–73", "Provoked Israeli bombing of camps in Syria and Jordan.", ["ai-palestinian-extremism"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "Why did 1967 settle nothing? Rank the factors.", factors: ["ai-a-war", "ai-a-cease", "ai-a-arafat", "ai-a-pflp"],
           notes_view: "The 'no war, no peace' deadlock and radicalised Palestinian nationalism fed directly into 1973." },
  historians: [],
  takeaways: [
    "Egypt's War of Attrition ended 8 Aug 1970.",
    "Palestinians organised independently under Arafat.",
    "PFLP terrorism provoked Israeli reprisals."
  ]
});

L.push({
  id: "ai-sadat", order: 18, level: 3, parent: "ai-1973", kind: "chain",
  title: "Sadat's road to war",
  question: "Why did Sadat choose a limited war?",
  intro: "Sadat offered peace for Sinai; when Israel refused, he planned a limited war with Syria to force negotiations.",
  clusters: [
    { title: "Peace offer", summary: "Refused.",
      steps: [
        N("ai-d-offer", "pol", "Peace for Sinai", "Feb 1971", "After Nasser's death; to end 'no war, no peace'.", ["ai-sadat-peace-offer"]),
        K("undermined", "Israel saw no urgency."),
        N("ai-d-dayan", "int", "Israeli confidence", "1971–73", "Dayan: 1967 land kept Israel strong; Sharon's boast.", ["ai-sadat-peace-offer", "ai-sadat-war-aims"])
      ] },
    { link: "provoked response", how: "Sadat opted for limited war.",
      title: "War planning", summary: "Two fronts.",
      steps: [
        N("ai-d-expel", "pol", "Soviet advisors expelled", "18 Jul 1972", "15,000 out; pressure for faster arms.", ["ai-sadat-war-aims"]),
        K("followed by", "Decision for war."),
        N("ai-d-decide", "pol", "War decided with Syria", "Nov 1972–Jan 1973", "Joint command; timed for US distraction.", ["ai-syria-complicity"]),
        K("led to", "Different aims."),
        { split: [
          { h: "Sadat", steps: [ N("ai-d-aims", "int", "War to force talks", "1973", "Break defeatism, regain Sinai, attract US aid.", ["ai-sadat-war-aims"]) ] },
          { h: "Asad", steps: [ N("ai-d-asad", "int", "Regain the Golan", "1973", "Did not see war as a step to peace.", ["ai-syria-complicity"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "Why did Sadat go to war in 1973? Rank the factors.", factors: ["ai-d-offer", "ai-d-dayan", "ai-d-expel", "ai-d-aims"],
           notes_view: "War as an instrument of diplomacy, against Israeli over-confidence (Sharon, Sep 1973) — key to why 1973 led to peace." },
  historians: [],
  takeaways: [
    "Sadat's 1971 peace offer was refused.",
    "He expelled Soviet advisors and planned war with Syria.",
    "A limited war to force negotiations."
  ]
});

L.push({
  id: "ai-1973", order: 19, level: 1, parent: "ai-top", kind: "chain",
  title: "The Yom Kippur War, 1973",
  question: "Why did the 1973 war open the way to peace?",
  intro: "The surprise attack restored Arab dignity; a US airlift saved Israel; the superpowers imposed a ceasefire and the oil weapon added leverage.",
  clusters: [
    { title: "Causes", summary: "Deadlock to war.",
      steps: [
        { row: [
          N("ai-y-dead", "stc", "No war, no peace", "1967–73", "Attrition; Palestinian radicalisation.", ["ai-war-of-attrition"], { go: "ai-attrition" }),
          N("ai-y-sadat", "stc", "Sadat's limited war", "1971–73", "Peace offer refused; war to force talks.", ["ai-sadat-war-aims"], { go: "ai-sadat" })
        ] },
        K("triggered", "A two-front surprise attack."),
        N("ai-y-attack", "trig", "Surprise attack", "6 Oct 1973", "IDF outnumbered 12-to-1; intelligence failed.", ["ai-1973-course", "yomkippur"])
      ] },
    { link: "provoked response", how: "The US rescued Israel.",
      title: "Course", summary: "Recovery and crisis.",
      steps: [
        N("ai-y-airlift", "evt", "US airlift", "Oct 1973", "Syria repelled by 11 Oct; Canal crossed by 18 Oct.", ["ai-1973-course"]),
        K("led to", "Superpowers imposed a ceasefire."),
        N("ai-y-cease", "pol", "Joint ceasefire", "22–24 Oct 1973", "Kissinger–Brezhnev; Soviet alert over the Third Army.", ["ai-1973-course"], { go: "ai-unef2" })
      ] },
    { link: "enabled", how: "Leverage and dignity made talks possible.",
      title: "Leverage", summary: "Oil weapon.",
      steps: [
        N("ai-y-oil", "pol", "Oil weapon", "1973–74", "Exports to US and Netherlands halted; 25% cut.", ["ai-oil-weapon"]),
        K("enabled", "Conditions now favoured compromise."),
        N("ai-y-cond", "tp", "Conditions for peace", "1973", "Arabs not decisively defeated; dignity restored.", ["ai-oil-weapon", "yomkippur"], { go: "ai-shuttle" })
      ] }
  ],
  judge: { prompt: "Why did 1973 make peace possible? Rank the factors.", factors: ["ai-y-attack", "ai-y-airlift", "ai-y-cease", "ai-y-oil", "ai-y-cond"],
           notes_view: "Arab forces were not decisively defeated and gained political leverage — conditions more conducive to negotiation than at any point since 1948." },
  historians: [ { who: "Yapp (1991)", view: "Before 1973 the Arabs could not make peace from utter defeat, Israel would not concede after victory, and the superpowers lacked the will to impose peace.", nodes: ["ai-y-cond"] } ],
  takeaways: [
    "Surprise attack (6 Oct) restored Arab dignity.",
    "US airlift; joint superpower ceasefire.",
    "Oil weapon and dignity created conditions for peace."
  ]
});

L.push({
  id: "ai-unef2", order: 20, level: 3, parent: "ai-1973", kind: "chain",
  title: "Res. 338, UNEF II and UNDOF",
  question: "How effective was peacekeeping after 1973?",
  intro: "UNEF II separated Egypt and Israel; UNDOF supervised the Golan — more robust, but still reliant on cooperation.",
  clusters: [
    { title: "Mechanisms", summary: "Resolutions to forces.",
      steps: [
        N("ai-n-338", "pol", "Res. 338 and 339", "22–23 Oct 1973", "Ceasefire; implement 242; negotiations.", ["ai-res-338-unef2"]),
        K("led to", "Two forces deployed."),
        { split: [
          { h: "Sinai", steps: [ N("ai-n-unef2", "pol", "UNEF II", "25 Oct 1973", "~7,000 troops; renewed 8 times to 1979.", ["ai-res-338-unef2"]) ] },
          { h: "Golan", steps: [ N("ai-n-undof", "pol", "UNDOF", "31 May 1974", "~1,300 peacekeepers.", ["ai-res-338-unef2"]) ] }
        ] }
      ] },
    { link: "supports", how: "Weighing them.",
      title: "Effectiveness", summary: "More robust.",
      steps: [
        { split: [
          { h: "Achievements", steps: [ N("ai-n-good", "evid", "No war during deployment", "1973–79", "Only 5 low-level disputes; facilitated Camp David.", ["ai-eval-unef2-undof"]) ] },
          { h: "Limitations", steps: [ N("ai-n-bad", "evid", "Self-reported compliance", "1974–", "Biweekly non-surprise inspections; no permanent settlement.", ["ai-eval-unef2-undof"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "How effective were UNEF II and UNDOF? Weigh the evidence.", factors: ["ai-n-338", "ai-n-unef2", "ai-n-undof", "ai-n-good", "ai-n-bad"],
           notes_view: "Strongest evidence that peacekeeping became more effective over time — yet still dependent on the parties' cooperation and great-power diplomacy." },
  historians: [],
  takeaways: [
    "Res. 338 ordered a ceasefire and negotiations.",
    "UNEF II (Sinai) and UNDOF (Golan) kept the peace.",
    "Still reliant on self-reported compliance."
  ]
});

L.push({
  id: "ai-shuttle", order: 21, level: 3, parent: "ai-1973", kind: "chain",
  title: "Kissinger's shuttle diplomacy",
  question: "How effective was Kissinger's step-by-step diplomacy?",
  intro: "Incremental disengagement deals stabilised the fronts and reduced Soviet influence, but damaged Arab trust.",
  clusters: [
    { title: "Agreements", summary: "Step by step.",
      steps: [
        N("ai-k-101", "pol", "Kilometre 101", "11 Nov 1973", "First Israel–Egypt agreement since 1949.", ["ai-agreements-7375", "shuttle"]),
        K("followed by", "Geneva failed."),
        N("ai-k-geneva", "evt", "Geneva Conference", "Dec 1973", "Failed to reconvene after opening speeches.", ["ai-agreements-7375"]),
        K("followed by", "Disengagement deals."),
        N("ai-k-sinai1", "pol", "Sinai I; Golan deal", "Jan–May 1974", "Three zones; UNDOF separation zone.", ["ai-agreements-7375", "shuttle"]),
        K("followed by", "A second Sinai deal."),
        N("ai-k-sinai2", "pol", "Sinai II", "Sep 1975", "Oilfields regained; Canal reopened.", ["ai-agreements-7375"])
      ] },
    { link: "supports", how: "Weighing it.",
      title: "Effectiveness", summary: "Groundwork, distrust.",
      steps: [
        { split: [
          { h: "Achievements", steps: [ N("ai-k-good", "evid", "Groundwork for Camp David", "1973–75", "Reduced Soviet influence; Watergate gave latitude.", ["shuttle"], { go: "ai-campdavid" }) ] },
          { h: "Limitations", steps: [ N("ai-k-bad", "evid", "Favoured Israel", "1973–75", "Damaged Arab trust in piecemeal diplomacy.", ["shuttle", "ai-historiography"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "How effective was shuttle diplomacy? Weigh the evidence.", factors: ["ai-k-101", "ai-k-sinai1", "ai-k-sinai2", "ai-k-good", "ai-k-bad"],
           notes_view: "Laid the groundwork for Camp David, but step-by-step manipulation favouring Israel damaged Arab trust in piecemeal diplomacy." },
  historians: [],
  takeaways: [
    "Kilometre 101, Sinai I, Golan deal, Sinai II.",
    "Reduced Soviet influence; laid groundwork for Camp David.",
    "Favoured Israel, damaging Arab trust."
  ]
});

L.push({
  id: "ai-campdavid", order: 22, level: 3, parent: "ai-1973", kind: "chain",
  title: "Camp David and the 1979 treaty",
  question: "How far did Camp David bring peace?",
  intro: "Carter, Sadat and Begin agreed two frameworks; Egypt became the first Arab state to recognise Israel — but only bilaterally.",
  clusters: [
    { title: "Accords", summary: "Two frameworks.",
      steps: [
        N("ai-cd-summit", "pol", "Camp David summit", "5–17 Sep 1978", "Carter and Vance met delegations separately.", ["campdavid"]),
        K("led to", "Two frameworks."),
        { split: [
          { h: "Framework 1", steps: [ N("ai-cd-f1", "pol", "Sinai for peace", "1978", "Full relations and shipping rights.", ["campdavid"]) ] },
          { h: "Framework 2", steps: [ N("ai-cd-f2", "pol", "Palestinian autonomy", "1978", "West Bank (excluding Jerusalem) and Gaza.", ["campdavid"]) ] }
        ] },
        K("led to", "A treaty."),
        N("ai-cd-treaty", "tp", "Egypt–Israel treaty", "26 Mar 1979", "First Arab recognition; Sinai returned by 1982.", ["campdavid", "ai-eval-camp-david"])
      ] },
    { link: "provoked response", how: "Reactions split.",
      title: "Implications", summary: "Bilateral peace.",
      steps: [
        { split: [
          { h: "Gains", steps: [ N("ai-cd-gain", "res+", "Durable peace", "1979–", "Secure southern border for Israel; US aid; precedent.", ["ai-camp-david-implications", "ai-eval-camp-david"]) ] },
          { h: "Costs", steps: [
            N("ai-cd-boycott", "res-", "Egypt isolated", "1979–81", "Arab League boycott; Sadat assassinated 6 Oct 1981.", ["ai-camp-david-implications"]),
            K("undermined", "Palestinians were left out."),
            N("ai-cd-pal", "res-", "Palestinians unresolved", "1979–", "Statehood, refugees, Jerusalem, settlements unaddressed.", ["ai-eval-camp-david", "ai-camp-david-implications"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "How far did Camp David bring peace? Weigh the evidence.", factors: ["ai-cd-summit", "ai-cd-treaty", "ai-cd-gain", "ai-cd-boycott", "ai-cd-pal"],
           notes_view: "The only durable, positive peace in the topic — but bilateral only: Palestinian statehood, refugees, Jerusalem and settlements unresolved (Edward Said)." },
  historians: [ { who: "Edward Said", view: "Millions of Palestinians could not be expected to go away or to acquiesce to an Israeli, Egyptian or American idea of their 'autonomy'.", nodes: ["ai-cd-pal"] } ],
  takeaways: [
    "Two frameworks: Sinai for peace; Palestinian autonomy.",
    "1979 treaty: first Arab recognition of Israel.",
    "Egypt isolated; Palestinian question unresolved."
  ]
});

L.push({
  id: "ai-compare", order: 23, level: 1, parent: "ai-top", kind: "matrix",
  title: "The four wars compared",
  question: "How did causes, outcomes and management change across the four wars?",
  intro: "The four wars, superpowers and UN mechanisms at a glance, from the notes.",
  matrix: {
    cols: ["1948", "1956", "1967", "1973"],
    rows: [
      { h: "Trigger", cells: ["Independence; Arab invasion", "Canal nationalisation", "UNEF out; Tiran closed", "Sadat/Asad surprise attack"] },
      { h: "Outcome", cells: ["Israel +21%; refugees", "Nasser triumphant; UK/France collapse", "Israel triples territory", "Arab dignity restored"] },
      { h: "Superpowers", cells: ["Both recognise Israel; Czech arms", "US decisive arbiter", "Soviet miscalculation; both avoid clash", "Kissinger–Brezhnev; oil weapon"] },
      { h: "UN", cells: ["UNTSO: unarmed observers", "UNEF I: consent-dependent", "Res. 242: ambiguous", "UNEF II/UNDOF: more robust"] },
      { h: "Diplomacy", cells: ["Armistices; Lausanne failed", "Res. 997/998", "Khartoum 'three noes'", "Shuttle → Camp David"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "UN mechanisms grew more robust but stayed consent-dependent.",
    "Superpowers moved from recognition to direct crisis management.",
    "Lasting peace came from bilateral diplomacy, not the UN."
  ]
});

L.push({
  id: "ai-arg", order: 24, level: 1, parent: "ai-top", kind: "argument",
  title: "Was conflict management effective?",
  question: "'Diplomacy and peacekeeping were effective in managing the Arab–Israeli conflict, 1948–1979.' How far do you agree?",
  intro: "Test each mechanism: did it stop fighting (negative peace) and address root causes (positive peace)?",
  clusters: [
    { title: "Claim", summary: "Management effective.",
      steps: [ N("ai-q-claim", "judg", "Management was effective", null, "Diplomacy and peacekeeping managed the conflict effectively.", ["ai-effectiveness-criteria"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "Negative vs positive peace.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("ai-q-stop", "evid", "Fighting stopped each time", "1948–73", "Truces, armistices, UNEF I, 242, 338.", ["ai-un-evolution"]),
            K("supports", "Mechanisms improved."),
            N("ai-q-robust", "evid", "More robust over time", "1973–79", "UNEF II: no war, 5 low-level disputes.", ["ai-eval-unef2-undof"]),
            K("supports", "Diplomacy delivered peace."),
            N("ai-q-cd", "evid", "Camp David", "1979", "First Arab–Israeli peace treaty.", ["ai-eval-camp-david"])
          ] },
          { h: "Against", steps: [
            N("ai-q-neg", "evid", "Only negative peace", "1948–67", "Territory, refugees, recognition festered into the next war.", ["ai-1948-negative-peace"]),
            K("contradicts", "Consent could be withdrawn."),
            N("ai-q-consent", "evid", "Consent-dependent", "1967", "UNEF I withdrawn on Nasser's request.", ["ai-eval-hammarskjold-unef1"]),
            K("contradicts", "Palestinians bore the cost."),
            N("ai-q-pal", "evid", "Palestinians excluded", "1979", "Camp David bilateral only.", ["ai-camp-david-implications"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "Bilateral success only.",
      steps: [ N("ai-q-judge", "judg", "Effective only after 1973, bilaterally", null, "Before 1973 only negative peace; 1973–79 a positive outcome only between Egypt and Israel.", ["ai-effectiveness-criteria", "ai-historiography"]) ] }
  ],
  judge: { prompt: "How effective was conflict management? Rank the evidence.", factors: ["ai-q-stop", "ai-q-robust", "ai-q-cd", "ai-q-neg", "ai-q-consent", "ai-q-pal"],
           notes_view: "Before 1973 only negative peace; 1973–79 a positive outcome only bilaterally (Egypt–Israel). UN mechanisms grew more robust but always depended on consent; lasting peace came from bilateral diplomacy." },
  historians: [],
  takeaways: [
    "For: fighting stopped; mechanisms improved; Camp David.",
    "Against: negative peace; consent-dependent; Palestinians excluded.",
    "Best answer: effective only after 1973, and only bilaterally."
  ]
});
})();
