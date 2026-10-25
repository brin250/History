// v2 flow charts: the Cold War travels — Korea, Cuba, Vietnam (cards in data/cw2.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).cw2 = window.FLOWS2.cw2 || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "cw2-top", order: 1, level: 0, kind: "causal",
  title: "The Cold War travels: Korea, Cuba, Vietnam",
  question: "How did the Cold War develop outside Europe, and how did these conflicts affect it?",
  intro: "Each case began as a local struggle that the superpowers turned into a Cold War contest; the key move is to periodise when outsiders drove events.",
  clusters: [
    { title: "Three case studies", summary: "Examined separately.",
      steps: [
        { split: [
          { h: "Korea", steps: [ N("cw2-t-korea", "evt", "Korean War", "1950–53", "Internationalised 25–27 Jun 1950; militarised the Cold War.", ["cw2-syllabus", "cw2-stueck"], { go: "cw2-korea" }) ] },
          { h: "Cuba", steps: [ N("cw2-t-cuba", "evt", "Cuban Missile Crisis", "1962", "A turning point… however.", ["cmc"], { go: "cw2-cuba" }) ] },
          { h: "Vietnam", steps: [ N("cw2-t-viet", "evt", "Vietnam War", "1946/59–75", "Proxy at the outset; nationalism came to dominate.", ["cw2-vietnam-wars"], { go: "cw2-viet" }) ] }
        ] }
      ] },
    { link: "supports", how: "Recurring dynamics.",
      title: "Throughlines", summary: "Links to Topic 1.",
      steps: [
        { row: [
          N("cw2-t-cont", "int", "Containment and action-reaction", "1946–75", "NSC-68 militarised it; each 'defensive' act read as aggressive.", ["cw2-links-containment"]),
          N("cw2-t-rest", "int", "Restraint and dominoes", "1948–75", "Both stopped short of direct hot war.", ["cw2-links-restraint"])
        ] },
        K("supports", "Answering the key question."),
        N("cw2-t-verdict", "judg", "Local roots, Cold War escalation", null, "Periodise: when did outside powers drive events, and when local actors?", ["cw2-guiding-qs", "cw2-sbcs-strategy"], { go: "cw2-arg" })
      ] }
  ],
  judge: { prompt: "Were these Cold War conflicts or local ones? Weigh the cases.", factors: ["cw2-t-korea", "cw2-t-cuba", "cw2-t-viet", "cw2-t-cont"],
           notes_view: "Every case starts as a local struggle the superpowers turned into a Cold War contest. Korea was internationalised in Jun 1950; Cuba became a Cold War issue with Mikoyan's 1960 visit; Vietnam began as more of a proxy conflict but local nationalism increasingly dominated." },
  historians: [ { who: "Stueck (2002)", view: "Korea was 'quite possibly the most important event since World War II' — a substitute for World War III.", nodes: ["cw2-t-korea"] } ],
  takeaways: [
    "Each conflict had local roots.",
    "Superpowers turned them into Cold War contests.",
    "Containment, action-reaction and restraint recur."
  ]
});

L.push({
  id: "cw2-korea", order: 2, level: 1, parent: "cw2-top", kind: "chain",
  title: "The Korean War, 1950–1953",
  question: "Who caused the Korean War, and was it a civil war or a Cold War conflict?",
  intro: "A local struggle for reunification became international when the US and UN intervened, intensified by rollback and China's entry.",
  clusters: [
    { title: "Roots", summary: "1945–50.",
      steps: [
        { row: [
          N("cw2-k-div", "ltc", "Divided Korea", "1945–49", "38th Parallel; Rhee and Kim both sought reunification.", ["cw2-two-koreas"], { go: "cw2-k-roots" }),
          N("cw2-k-china-n", "ltc", "China and NSC-68", "1949–50", "'Loss of China'; militarised containment.", ["nsc68"], { go: "cw2-k-china" })
        ] },
        K("triggered", "Kim invaded."),
        N("cw2-k-out", "trig", "North invades", "25 Jun 1950", "Kim initiator; Stalin enabler.", ["koreaoutbreak", "cw2-rt-korea-tl"], { go: "cw2-k-outbreak" })
      ] },
    { link: "provoked response", how: "Four phases followed.",
      title: "Four phases", summary: "1950–53.",
      steps: [
        N("cw2-k-p12-n", "evt", "Intervention and rollback", "Jun–Nov 1950", "UN Command; Inchon; across the 38th Parallel.", ["cw2-phase1", "cw2-rt-korea-phases"], { go: "cw2-k-p12" }),
        K("provoked response", "China entered."),
        N("cw2-k-p34-n", "evt", "China, stalemate, armistice", "1950–53", "Volunteers; MacArthur sacked; Panmunjom.", ["chinakorea", "armistice"], { go: "cw2-k-p34" })
      ] },
    { link: "led to", how: "Costs and impact.",
      title: "Impact", summary: "Militarised Cold War.",
      steps: [
        N("cw2-k-cost", "res-", "Total war for Koreans", "1950–53", "~10% killed, wounded or missing; ~2 million communist casualties.", ["cw2-korea-costs", "cw2-korea-players"]),
        K("led to", "The Cold War changed."),
        N("cw2-k-imp", "res-", "Cold War militarised", "1950s", "Defence spending tripled; pacts across Asia.", ["koreaimpact"], { go: "cw2-k-impact" })
      ] }
  ],
  judge: { prompt: "Who was most responsible for the Korean War? Rank the players.", factors: ["cw2-k-div", "cw2-k-out", "cw2-k-p12-n", "cw2-k-p34-n"],
           notes_view: "Kim the initiator; Stalin the enabler; Mao minimal (enabler via training); the USA indirectly via ambiguity and MacArthur's rollback; Rhee shared ambitions but was restrained." },
  historians: [ { who: "Stueck (2002)", view: "A substitute for World War III that stabilised yet intensified and militarised the Cold War.", nodes: ["cw2-k-imp"] } ],
  takeaways: [
    "Local roots: two regimes both wanting reunification.",
    "Internationalised in Jun 1950; intensified by rollback and China.",
    "It militarised and globalised the Cold War."
  ]
});

L.push({
  id: "cw2-k-roots", order: 3, level: 3, parent: "cw2-korea", kind: "chain",
  title: "Korea divided, 1945–1949",
  question: "Why did two hostile Korean regimes emerge?",
  intro: "After Japanese rule Korea was hastily divided; rival regimes formed and neither outside power saw Korea as a priority.",
  clusters: [
    { title: "Division", summary: "38th Parallel.",
      steps: [
        N("cw2-r-colony", "ctx", "Japanese colony", "1905–45", "Rhee's 1919 appeal ignored; Yalta trusteeship plan.", ["cw2-korea-tl-1905"]),
        K("followed by", "A hasty line."),
        N("cw2-r-38", "pol", "38th Parallel", "Aug 1945", "US-proposed, arbitrary; Stalin agreed.", ["cw2-korea-tl-1905"]),
        K("led to", "Elections in the South only."),
        N("cw2-r-two", "res-", "Two regimes", "1948", "ROK (Rhee) and DPRK (Kim); troops leave; raids from 1949.", ["cw2-two-koreas", "cw2-korea-tl-1905"])
      ] },
    { link: "supports", how: "Outsiders' interest.",
      title: "Low priority", summary: "Before 1949.",
      steps: [
        { split: [
          { h: "USA", steps: [ N("cw2-r-us", "int", "'Little strategic interest'", "1945–50", "Europe and Japan first; rising after 1949.", ["cw2-korea-importance-us"]) ] },
          { h: "USSR, China", steps: [ N("cw2-r-ussr", "int", "Distraction; border security", "1945–50", "Stalin stopped at the 38th; China focused on Taiwan.", ["cw2-korea-importance-ussr-prc"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "How far were the war's roots local? Weigh it.", factors: ["cw2-r-38", "cw2-r-two", "cw2-r-us", "cw2-r-ussr"],
           notes_view: "The war's local roots: both leaders sought reunification by force; Korea was not a priority for any external power before 1949 — key for 'civil war vs Cold War' questions." },
  historians: [],
  takeaways: [
    "Korea was divided hastily at the 38th Parallel.",
    "Rival regimes formed; border raids from 1949.",
    "Korea mattered little to outsiders before 1949."
  ]
});

L.push({
  id: "cw2-k-china", order: 4, level: 3, parent: "cw2-korea", kind: "chain",
  title: "China's revolution and NSC-68",
  question: "How did events of 1949–50 raise the stakes in Asia?",
  intro: "The CCP's victory and the Sino-Soviet Treaty fed the 'loss of China' and NSC-68's call for militarised containment.",
  clusters: [
    { title: "China", summary: "1949–50.",
      steps: [
        N("cw2-c-prc", "evt", "PRC founded", "1 Oct 1949", "Civil War won; Nationalists to Taiwan.", ["cw2-chinese-civil-war"]),
        K("led to", "Mao leaned to one side."),
        N("cw2-c-treaty", "pol", "Sino-Soviet Treaty", "14 Feb 1950", "$300m credit; Soviet specialists.", ["cw2-sino-soviet-treaty"])
      ] },
    { link: "provoked response", how: "US fear of monolithic communism.",
      title: "US reaction", summary: "Militarised containment.",
      steps: [
        N("cw2-c-loss", "int", "'Loss of China'", "1949–50", "McCarthyism; PRC called a Soviet 'satellite'.", ["cw2-loss-of-china"]),
        K("led to", "A new strategy."),
        N("cw2-c-nsc", "pol", "NSC-68", "7 Apr 1950", "'New fanatic faith'; massive build-up; Kennan opposed.", ["nsc68"]),
        K("accelerated", "Korea settled the debate."),
        N("cw2-c-policy", "res-", "Rearmament", "1950–53", "Defence 5% → 14.2% of GDP.", ["cw2-nsc68-policy"])
      ] }
  ],
  judge: { prompt: "How far did China's revolution set up the Korean War? Weigh it.", factors: ["cw2-c-prc", "cw2-c-treaty", "cw2-c-loss", "cw2-c-nsc"],
           notes_view: "Explains US fear of monolithic communism and why Korea converted containment from words into a rearmament programme." },
  historians: [ { who: "Noam Chomsky (2012)", view: "'It is only possible to lose something that one owns.'", nodes: ["cw2-c-loss"] } ],
  takeaways: [
    "The PRC allied with Moscow (1950).",
    "The 'loss of China' fed McCarthyism.",
    "NSC-68 became policy after Korea."
  ]
});

L.push({
  id: "cw2-k-outbreak", order: 5, level: 3, parent: "cw2-korea", kind: "causal",
  title: "Outbreak of the Korean War",
  question: "Who was responsible for the outbreak in June 1950?",
  intro: "Kim persuaded Stalin the US would not intervene; Mao's role was minimal; US ambiguity may have encouraged them.",
  clusters: [
    { title: "Roles", summary: "Relative responsibility.",
      steps: [
        { row: [
          N("cw2-o-kim", "act", "Kim the initiator", "1949–50", "Asked Stalin three times; Khrushchev: 'Kim was the initiator'.", ["cw2-kim-role"]),
          N("cw2-o-stalin", "act", "Stalin the enabler", "1950", "Aid tripled: 258 T-34s; 'I shall not lift a finger'.", ["cw2-stalin-role"]),
          N("cw2-o-mao", "act", "Mao minimal", "1950", "~50% of troops Chinese-trained.", ["cw2-mao-role"]),
          N("cw2-o-us", "act", "US ambiguity", "Jan 1950", "Acheson's perimeter omitted Korea; Rhee restrained.", ["cw2-us-rhee-role"])
        ] },
        K("triggered", "Formal approval, then attack."),
        N("cw2-o-inv", "trig", "Invasion", "25 Jun 1950", "90,000 troops, 150 T-34s.", ["koreaoutbreak", "cw2-korea-tl-1948"])
      ] }
  ],
  judge: { prompt: "Who was most responsible for the outbreak? Rank them.", factors: ["cw2-o-kim", "cw2-o-stalin", "cw2-o-mao", "cw2-o-us"],
           notes_view: "Kim the initiator, Stalin the enabler (Lee: a 'critical step towards full-scale war'), Mao an enabler via training, the USA indirect via ambiguity." },
  historians: [ { who: "Lee", view: "Stalin's support of Kim was a critical step towards full-scale war, though Stalin did not correctly anticipate its impact.", nodes: ["cw2-o-stalin"] } ],
  takeaways: [
    "Kim initiated; Stalin enabled.",
    "Mao's role was minimal; US ambiguity encouraged.",
    "Invasion: 25 Jun 1950."
  ]
});

L.push({
  id: "cw2-k-p12", order: 6, level: 3, parent: "cw2-korea", kind: "chain",
  title: "Intervention and rollback, 1950",
  question: "Why did the US intervene, and why did it cross the 38th Parallel?",
  intro: "With the USSR absent, the UN authorised assistance; after Inchon, Truman shifted from containment to rollback.",
  clusters: [
    { title: "Phase 1", summary: "Internationalised.",
      steps: [
        N("cw2-p-un", "pol", "UN resolutions", "25–27 Jun 1950", "Passed in Stalin's absence; UN Command under MacArthur.", ["cw2-un-response"]),
        K("supports", "Why the US fought."),
        N("cw2-p-why", "int", "Aggression, prestige, politics", "1950", "Acheson on prestige; McCarthyism; midterms.", ["cw2-phase1", "cw2-sbcs-2024"])
      ] },
    { link: "followed by", how: "MacArthur turned the tide.",
      title: "Phase 2", summary: "Intensified.",
      steps: [
        N("cw2-p-inchon", "tp", "Inchon landings", "15 Sep 1950", "Seoul retaken in two weeks.", ["inchon"]),
        K("led to", "Rollback."),
        N("cw2-p-roll", "pol", "Across the 38th", "7 Oct 1950", "Containment became rollback; race to the Yalu.", ["cw2-rollback"], { go: "cw2-k-p34" })
      ] }
  ],
  judge: { prompt: "Why did the US go to war in Korea? Rank the motives.", factors: ["cw2-p-un", "cw2-p-why", "cw2-p-inchon", "cw2-p-roll"],
           notes_view: "Phase 1 marks the true internationalisation; Phase 2 the intensification — US aims became removing communism from Asia." },
  historians: [],
  takeaways: [
    "The UN acted in the USSR's absence.",
    "Prestige and politics drove US entry.",
    "Inchon led to rollback across the 38th Parallel."
  ]
});

L.push({
  id: "cw2-k-p34", order: 7, level: 3, parent: "cw2-korea", kind: "chain",
  title: "China's entry and the armistice",
  question: "Why did China intervene, and how did the war end?",
  intro: "China entered to protect its revolution; stalemate, Truman's restraint, Eisenhower and Stalin's death produced an armistice.",
  clusters: [
    { title: "Phase 3", summary: "China enters.",
      steps: [
        N("cw2-q-china", "tp", "Chinese Volunteers", "25 Oct 1950", "~300,000 counter-attacked; 2.3 million deployed.", ["chinakorea"]),
        K("supports", "Was it a proxy war?"),
        N("cw2-q-proxy", "int", "Proxy debate", "1950–51", "Local aims subordinated, but US and PRC sent their own troops.", ["cw2-proxy-debate"])
      ] },
    { link: "followed by", how: "Stalemate and restraint.",
      title: "Phase 4", summary: "Limited war.",
      steps: [
        N("cw2-q-stale", "res±", "Stalemate", "1951–53", "Seoul's last change of hands; limited aims.", ["cw2-stalemate"]),
        K("led to", "MacArthur demanded more."),
        N("cw2-q-mac", "pol", "MacArthur dismissed", "Apr 1951", "'No substitute for victory'.", ["cw2-macarthur-dismissal", "cw2-korea-tl-war"]),
        K("followed by", "New leaders, new terms."),
        N("cw2-q-arm", "res±", "Armistice", "27 Jul 1953", "Panmunjom; near the 38th Parallel.", ["armistice"])
      ] }
  ],
  judge: { prompt: "Why did the war end in stalemate? Rank the factors.", factors: ["cw2-q-china", "cw2-q-stale", "cw2-q-mac", "cw2-q-arm"],
           notes_view: "Superpower restraint (limited war by limited means) and local actors losing the initiative; a status-quo, no-clear-winner verdict." },
  historians: [ { who: "S.J. Ball", view: "China intervened because it felt its own revolution was threatened, not out of concern for the Korean revolution.", nodes: ["cw2-q-china"] } ],
  takeaways: [
    "China entered to protect its own revolution.",
    "Truman sacked MacArthur: limited war.",
    "Armistice near the 38th Parallel (1953)."
  ]
});

L.push({
  id: "cw2-k-impact", order: 8, level: 3, parent: "cw2-korea", kind: "causal",
  title: "Impact of the Korean War",
  question: "How did Korea change the Cold War, and who won?",
  intro: "Korea militarised the Cold War and extended containment to Asia, while superpower restraint set a pattern.",
  clusters: [
    { title: "Impact", summary: "Change.",
      steps: [
        { row: [
          N("cw2-i-mil", "res-", "Militarisation", "1950s", "$13.1bn → $50.4bn; pacts; West German rearmament.", ["koreaimpact"]),
          N("cw2-i-china", "res±", "Sino-Soviet ties", "1950–58", "Deeper cooperation, then seeds of the split.", ["cw2-korea-china-relations"]),
          N("cw2-i-nam", "res±", "NAM and restraint", "1955–61", "Bandung; limited wars by limited means.", ["cw2-korea-proxy-nam"])
        ] },
        K("contradicts", "Continuity too."),
        N("cw2-i-cont", "int", "Change vs continuity", "1953–58", "Peaceful Coexistence owed more to MAD and Stalin's death.", ["cw2-rt-korea-impact"])
      ] },
    { link: "supports", how: "Who won?",
      title: "Winners", summary: "Status quo.",
      steps: [
        N("cw2-i-win", "judg", "No clear winner", "1953", "US status quo at high cost; USSR cheap gains; PRC a major power.", ["cw2-korea-winlose-1", "cw2-korea-winlose-2", "cw2-rt-korea-winlose"])
      ] }
  ],
  judge: { prompt: "How far did Korea change the Cold War? Weigh it.", factors: ["cw2-i-mil", "cw2-i-china", "cw2-i-nam", "cw2-i-cont"],
           notes_view: "Korea militarised the Cold War and extended containment to Asia; Peaceful Coexistence owed more to MAD and Stalin's death. Status-quo outcome." },
  historians: [],
  takeaways: [
    "Militarised the Cold War; containment reached Asia.",
    "Superpowers fought limited wars.",
    "Status quo: no clear winner."
  ]
});

L.push({
  id: "cw2-cuba", order: 9, level: 1, parent: "cw2-top", kind: "chain",
  title: "The Cuban Missile Crisis, 1962",
  question: "Who was responsible for the Cuban Missile Crisis?",
  intro: "A nationalist revolution, US hostility and Soviet ambition turned Cuba into the most dangerous crisis of the Cold War.",
  clusters: [
    { title: "Origins", summary: "1959–62.",
      steps: [
        N("cw2-u-rev-n", "ltc", "Cuban Revolution", "1959–60", "Anti-imperialist; spiral to the Soviet camp.", ["cubanrev", "cw2-rt-cmc-tl1"], { go: "cw2-u-rev" }),
        K("provoked response", "The US tried to topple Castro."),
        N("cw2-u-pigs-n", "stc", "Bay of Pigs; Mongoose", "1961–62", "Solidified Castro; pushed him to Moscow.", ["bayofpigs"], { go: "cw2-u-pigs" })
      ] },
    { link: "provoked response", how: "Khrushchev deployed missiles.",
      title: "Crisis", summary: "1962.",
      steps: [
        N("cw2-u-anadyr-n", "trig", "Operation Anadyr", "May–Oct 1962", "Khrushchev's initiative.", ["cw2-anadyr"], { go: "cw2-u-anadyr" }),
        K("led to", "Thirteen days."),
        N("cw2-u-days-n", "tp", "Thirteen Days", "14–28 Oct 1962", "Blockade; letters; backchannel deal.", ["cmc", "cw2-cmc-players"], { go: "cw2-u-days" })
      ] },
    { link: "led to", how: "Lasting impact.",
      title: "Impact", summary: "Turning point… however.",
      steps: [
        N("cw2-u-imp", "res±", "Arms control and détente", "1962–79", "Hot Line, PTBT, NPT, SALT I — but the arms race went on.", ["cmcimpact"], { go: "cw2-u-impact" })
      ] }
  ],
  judge: { prompt: "Who was most responsible for the Crisis? Rank the players.", factors: ["cw2-u-rev-n", "cw2-u-pigs-n", "cw2-u-anadyr-n", "cw2-u-days-n"],
           notes_view: "Khrushchev triggered it by deploying missiles; Kennedy escalated via the blockade but negotiated in good faith; Castro had a limited direct role. Context: persistent US influence; development: Soviet initiative provoked by US actions." },
  historians: [ { who: "Sewell (2002)", view: "The Crisis meant different things to each player — the 'Cuban Missile', 'Caribbean' and 'October' Crisis.", nodes: ["cw2-u-days-n"] } ],
  takeaways: [
    "Revolution and US hostility drove Cuba to Moscow.",
    "Khrushchev deployed missiles; Kennedy blockaded.",
    "A deal ended it; impact was a turning point… however."
  ]
});

L.push({
  id: "cw2-u-rev", order: 10, level: 3, parent: "cw2-cuba", kind: "chain",
  title: "The Cuban Revolution and the USSR",
  question: "How did the Cuban Revolution become a Cold War issue?",
  intro: "Castro overthrew a US-backed dictator; his reforms and the US response spiralled into alignment with the USSR.",
  clusters: [
    { title: "Revolution", summary: "Anti-imperialist.",
      steps: [
        N("cw2-v-us", "ltc", "US domination", "1823–1959", "Monroe Doctrine; US firms owned ~90% of utilities.", ["cw2-us-cuba-before", "cw2-cuba-importance"]),
        K("provoked response", "Nationalist revolt."),
        N("cw2-v-rev", "evt", "Batista flees", "1 Jan 1959", "26th of July Movement; elections postponed.", ["cubanrev"])
      ] },
    { link: "led to", how: "An action-reaction spiral.",
      title: "Spiral", summary: "1959–60.",
      steps: [
        N("cw2-v-land", "pol", "Agrarian Reform Law", "May 1959", "~40% of land from foreign hands; US protested.", ["cw2-agrarian-reform"]),
        K("provoked response", "Cuba turned to Moscow."),
        N("cw2-v-mik", "tp", "Mikoyan's visit", "Feb 1960", "$100m credit; sugar for oil.", ["cw2-mikoyan-1960"]),
        K("intensified", "Sanctions and seizures."),
        N("cw2-v-bear", "res-", "Into the Soviet orbit", "1960", "Sugar cut 95%; $1bn seized; 'bear hug'.", ["cw2-mikoyan-1960"], { go: "cw2-u-pigs" })
      ] }
  ],
  judge: { prompt: "When did Cuba become a Cold War issue? Weigh it.", factors: ["cw2-v-us", "cw2-v-rev", "cw2-v-land", "cw2-v-mik"],
           notes_view: "The Revolution was anti-imperialist and nationalist; Mikoyan's Feb 1960 visit arguably made it a Cold War conflict by transgressing spheres of influence." },
  historians: [ { who: "Edwards (2002)", view: "The origins of the missile crisis lie in the Cuban Revolution.", nodes: ["cw2-v-rev"] } ],
  takeaways: [
    "US domination provoked a nationalist revolution.",
    "Reforms and sanctions spiralled.",
    "Mikoyan's 1960 visit made it a Cold War issue."
  ]
});

L.push({
  id: "cw2-u-pigs", order: 11, level: 3, parent: "cw2-cuba", kind: "chain",
  title: "Bay of Pigs and Mongoose",
  question: "How did US actions set the stage for the Crisis?",
  intro: "A failed exile invasion and covert sabotage convinced Castro the US meant to overthrow him.",
  clusters: [
    { title: "US action", summary: "1961–62.",
      steps: [
        N("cw2-w-pigs", "evt", "Bay of Pigs", "17 Apr 1961", "~1,400 exiles; no US air support; 1,100 captured.", ["bayofpigs"]),
        K("followed by", "Covert war."),
        N("cw2-w-mong", "pol", "Operation Mongoose", "1961–62", "Sabotage; assassination plots.", ["cw2-mongoose"]),
        K("provoked response", "Castro sought protection."),
        N("cw2-w-fear", "res-", "Castro fears invasion", "1962", "Closer to Moscow.", ["bayofpigs"], { go: "cw2-u-anadyr" })
      ] }
  ],
  judge: { prompt: "How far did the US provoke the Crisis? Weigh it.", factors: ["cw2-w-pigs", "cw2-w-mong", "cw2-w-fear"],
           notes_view: "The Crisis was provoked by US actions — Kennedy had a limited direct role in the outbreak but his administration's policies set the stage." },
  historians: [ { who: "Edwards (2002)", view: "The Bay of Pigs unintentionally solidified Castro's regime.", nodes: ["cw2-w-pigs"] } ],
  takeaways: [
    "The Bay of Pigs failed and solidified Castro.",
    "Mongoose deepened his fear.",
    "Castro turned to Moscow for protection."
  ]
});

L.push({
  id: "cw2-u-anadyr", order: 12, level: 3, parent: "cw2-cuba", kind: "causal",
  title: "Why Khrushchev sent missiles",
  question: "Why did Khrushchev deploy missiles to Cuba?",
  intro: "Strategic, prestige and ideological motives drove a secret deployment that was Khrushchev's own initiative.",
  clusters: [
    { title: "Motives", summary: "Five reasons.",
      steps: [
        { row: [
          N("cw2-a-gap", "stc", "Missile gap", "1961–62", "Bluff exposed; triple strike power; answer Jupiters.", ["khrushchevmissiles"]),
          N("cw2-a-berlin", "stc", "Berlin failure", "1958–61", "Needed a success.", ["khrushchevmissiles"]),
          N("cw2-a-protect", "stc", "Protect Cuba", "1961–62", "Fear of US invasion; stop a drift to China.", ["khrushchevmissiles", "cw2-cuba-importance"])
        ] },
        K("led to", "Khrushchev's initiative."),
        N("cw2-a-whose", "int", "Khrushchev's idea", "1962", "Persuaded a reluctant Castro.", ["cw2-cmc-initiative"]),
        K("led to", "Secret deployment."),
        N("cw2-a-op", "pol", "Operation Anadyr", "Jul–Oct 1962", "~43,000 personnel; reveal after midterms.", ["cw2-anadyr"], { go: "cw2-u-days" })
      ] }
  ],
  judge: { prompt: "Why did Khrushchev deploy missiles? Rank the motives.", factors: ["cw2-a-gap", "cw2-a-berlin", "cw2-a-protect", "cw2-a-whose"],
           notes_view: "Supports Soviet responsibility/Khrushchev's insecurity for the development phase; balance with Cuba's genuine fear of invasion and Khrushchev's ideological romanticism." },
  historians: [
    { who: "Mason (1996)", view: "'What began in Berlin in 1958 ended in Cuba in 1962'.", nodes: ["cw2-a-berlin"] },
    { who: "Sewell, Ball, Naftali, Blight", view: "The initiative came from Khrushchev, who had to persuade a reluctant Castro.", nodes: ["cw2-a-whose"] },
    { who: "S.J. Ball", view: "Cuba was chosen to demonstrate Soviet power rather than for the Cuban revolutionaries' good.", nodes: ["cw2-a-protect"] }
  ],
  takeaways: [
    "Missile gap, Berlin and protecting Cuba.",
    "The initiative was Khrushchev's.",
    "Anadyr: secret deployment of ~43,000."
  ]
});

L.push({
  id: "cw2-u-days", order: 13, level: 3, parent: "cw2-cuba", kind: "chain",
  title: "The Thirteen Days",
  question: "How was the Crisis resolved, and who deserves credit?",
  intro: "Kennedy chose a blockade; after two letters and a U-2 shootdown, a backchannel deal ended the Crisis — without Castro.",
  clusters: [
    { title: "Discovery and blockade", summary: "14–24 Oct.",
      steps: [
        N("cw2-d-u2", "trig", "U-2 photographs", "14–16 Oct 1962", "ExComm convened.", ["cmc", "cw2-rt-cmc-tl2"]),
        K("provoked response", "Blockade not air strikes."),
        N("cw2-d-block", "pol", "Quarantine", "22–24 Oct 1962", "DEFCON 3; 'the other fellow just blinked'.", ["cmc"])
      ] },
    { link: "followed by", how: "Letters and danger.",
      title: "Deal", summary: "26–28 Oct.",
      steps: [
        N("cw2-d-letters", "evt", "Two letters; U-2 shot down", "26–27 Oct 1962", "Non-invasion pledge; Jupiters added.", ["cw2-cmc-resolution"]),
        K("led to", "Backchannel deal."),
        N("cw2-d-deal", "tp", "RFK–Dobrynin deal", "28 Oct 1962", "Public pledge; quiet Jupiter withdrawal.", ["cw2-cmc-resolution"]),
        K("undermined", "Castro was excluded."),
        N("cw2-d-castro", "res-", "Castro furious", "1962", "An 'insignificant island'.", ["cw2-cmc-resolution", "cw2-cmc-roles"])
      ] },
    { link: "supports", how: "Roles.",
      title: "Responsibility", summary: "Both leaders.",
      steps: [
        N("cw2-d-roles", "judg", "Both ended it", null, "Khrushchev triggered it; Kennedy escalated but negotiated in good faith.", ["cw2-cmc-roles", "cw2-cmc-names", "cw2-rt-cmc-phases"], { go: "cw2-u-impact" })
      ] }
  ],
  judge: { prompt: "Who deserves credit for ending the Crisis? Weigh it.", factors: ["cw2-d-block", "cw2-d-letters", "cw2-d-deal", "cw2-d-castro"],
           notes_view: "Both leaders bear responsibility for ending it (willingness to negotiate, fear of accidental escalation); Sewell's three names show different perspectives." },
  historians: [],
  takeaways: [
    "Kennedy chose a blockade.",
    "Letters and a U-2 shootdown raised the stakes.",
    "A backchannel deal ended it; Castro was excluded."
  ]
});

L.push({
  id: "cw2-u-impact", order: 14, level: 3, parent: "cw2-cuba", kind: "causal",
  title: "Impact of the Missile Crisis",
  question: "How far was the Crisis a turning point, and who won?",
  intro: "The Crisis brought arms control and détente — 'however', the arms race and rivalry continued.",
  clusters: [
    { title: "Turning point… however", summary: "Change vs continuity.",
      steps: [
        { split: [
          { h: "Arms control", steps: [ N("cw2-m-arms", "res±", "Hot Line to SALT I", "1962–72", "However: MIRVs; Soviet parity; India's test.", ["cmcimpact"]) ] },
          { h: "Détente", steps: [ N("cw2-m-det", "res±", "Caution and détente", "1963–79", "However: Vietnam; DEFCON 1973; Afghanistan.", ["cw2-cmc-detente", "cw2-rt-cmc-impact"]) ] }
        ] }
      ] },
    { link: "supports", how: "Who won?",
      title: "Winners", summary: "Everyone and no one.",
      steps: [
        N("cw2-m-win", "judg", "Both won and lost", "1962", "US prestige; Soviet pledge; Castro's survival.", ["cw2-cmc-winlose"])
      ] }
  ],
  judge: { prompt: "How far was the Crisis a turning point? Weigh it.", factors: ["cw2-m-arms", "cw2-m-det", "cw2-m-win"],
           notes_view: "Frame each impact as 'a turning point… however': arms control and détente, but the arms race continued and détente was arguably superficial." },
  historians: [
    { who: "Edwards (2002)", view: "The Crisis was 'a decisive event' that brought home the dangers of nuclear brinkmanship.", nodes: ["cw2-m-det"] },
    { who: "Mason (2003)", view: "The CMC contrasted with the near-absence of arms control in 1957–62.", nodes: ["cw2-m-arms"] },
    { who: "Michael Dobbs", view: "The Crisis 'guaranteed Castro's hold on power… for more than four decades.'", nodes: ["cw2-m-win"] }
  ],
  takeaways: [
    "Arms control followed — but the race continued.",
    "Détente — but rivalry continued.",
    "Both sides won and lost."
  ]
});

L.push({
  id: "cw2-viet", order: 15, level: 1, parent: "cw2-top", kind: "chain",
  title: "The Vietnam Wars, 1946–1975",
  question: "What caused the Vietnam War, and was it a Cold War conflict?",
  intro: "An anti-colonial struggle became a US war of containment; the US Americanised then Vietnamised it, and the North won.",
  clusters: [
    { title: "Roots", summary: "1946–64.",
      steps: [
        N("cw2-n-first", "ltc", "First Indochina War", "1946–54", "Viet Minh vs France; US paid ~3/4.", ["dienbienphu", "cw2-vietnam-wars"], { go: "cw2-v-first" }),
        K("followed by", "Partition."),
        N("cw2-n-geneva", "pol", "Geneva and SEATO", "1954", "17th Parallel; domino theory.", ["geneva54"], { go: "cw2-v-geneva" }),
        K("led to", "A weak South and a people's war."),
        N("cw2-n-diem", "stc", "Diem and the NLF", "1955–63", "Dictatorship; Hanoi turns to armed struggle.", ["diem"], { go: "cw2-v-diem" })
      ] },
    { link: "intensified", how: "The US took over the war.",
      title: "US war", summary: "1964–73.",
      steps: [
        N("cw2-n-amer", "pol", "Americanisation", "1964–68", "Tonkin; Rolling Thunder; 543,000 troops.", ["tonkin"], { go: "cw2-v-amer" }),
        K("followed by", "Tet broke US will."),
        N("cw2-n-tet", "tp", "Tet and Vietnamisation", "1968–72", "Military defeat, political victory; Nixon withdraws.", ["tet", "vietnamisation"], { go: "cw2-v-tet" })
      ] },
    { link: "led to", how: "US exit and reunification.",
      title: "End", summary: "1973–75.",
      steps: [
        N("cw2-n-end", "res-", "Paris and Saigon", "1973–75", "No enforcement; Saigon falls 30 Apr 1975.", ["paris73", "cw2-rt-viet-tl2"], { go: "cw2-v-end" }),
        K("led to", "Cold War consequences."),
        N("cw2-n-imp", "res±", "Impact", "1969–85", "Soviet gains; détente; Sino-US rapprochement.", ["vietnamimpact"], { go: "cw2-v-impact" })
      ] }
  ],
  judge: { prompt: "What were the principal forces behind the war? Rank them.", factors: ["cw2-n-first", "cw2-n-geneva", "cw2-n-diem", "cw2-n-amer", "cw2-n-tet"],
           notes_view: "Continuity: decolonisation and nationalism; each phase explains the next as US fear of international communism drove support for France, then Diem, then escalation. Turning points: Dien Bien Phu, Thich Quang Duc, Gulf of Tonkin, Tet." },
  historians: [ { who: "Mason (2001)", view: "The US lost Vietnam despite overwhelming resources — 'Yet the United States still lost the war. Why?'", nodes: ["cw2-n-end"] } ],
  takeaways: [
    "An anti-colonial war became a US containment war.",
    "Americanisation to 1968; Vietnamisation after.",
    "The North won in 1975."
  ]
});

L.push({
  id: "cw2-v-first", order: 16, level: 3, parent: "cw2-viet", kind: "chain",
  title: "First Indochina War, 1945–1954",
  question: "Why did a war of independence become a Cold War issue?",
  intro: "Ho's Viet Minh declared independence; the US declined to back it and later funded France, until Dien Bien Phu.",
  clusters: [
    { title: "Independence", summary: "1945.",
      steps: [
        N("cw2-f-col", "ltc", "French colonialism", "1900–45", "Haphazard, brutal; profit, not politics.", ["cw2-french-colonialism"]),
        K("provoked response", "Nationalism grew."),
        N("cw2-f-ho", "act", "Ho's independence", "2 Sep 1945", "Echoing the US Declaration.", ["cw2-ho-rise", "cw2-rt-viet-tl1"]),
        K("undermined", "The US needed France."),
        N("cw2-f-us", "int", "US declines to back Ho", "1945–46", "Roosevelt died; France needed in Europe.", ["cw2-us-no-independence"])
      ] },
    { link: "led to", how: "War with France.",
      title: "War", summary: "1946–54.",
      steps: [
        N("cw2-f-war", "evt", "War with France", "1946–54", "Haiphong; Bao Dai; 1.6 trillion francs.", ["cw2-first-indochina"]),
        K("intensified", "Outside powers joined."),
        N("cw2-f-powers", "act", "US pays, China aids", "1950–54", "US ~3/4 of costs; Chinese advisers; Stalin ambivalent.", ["cw2-indochina-powers"]),
        K("led to", "Decisive defeat."),
        N("cw2-f-dbp", "tp", "Dien Bien Phu", "13 Mar–7 May 1954", "French lost; Vietnam onto the Geneva agenda.", ["dienbienphu"], { go: "cw2-v-geneva" })
      ] }
  ],
  judge: { prompt: "How far was the First Indochina War a Cold War conflict? Weigh it.", factors: ["cw2-f-col", "cw2-f-ho", "cw2-f-us", "cw2-f-powers"],
           notes_view: "Fundamentally decolonisation, yet the US viewed the nationalist Viet Minh in Cold War terms — so even the First Indochina War could not be extricated from the Cold War." },
  historians: [
    { who: "Best et al. (2012)", view: "The war's origins lay in the Vietnamese struggle against French colonial rule.", nodes: ["cw2-f-col"] },
    { who: "Logevall (2001)", view: "The French showed scant interest in Indochinese political institutions.", nodes: ["cw2-f-col"] }
  ],
  takeaways: [
    "Ho declared independence in 1945.",
    "The US backed France, paying ~3/4 by 1954.",
    "Dien Bien Phu ended French rule."
  ]
});

L.push({
  id: "cw2-v-geneva", order: 17, level: 3, parent: "cw2-viet", kind: "chain",
  title: "Geneva, SEATO and dominoes",
  question: "Why did Geneva fail to settle Vietnam?",
  intro: "Geneva partitioned Vietnam pending elections; the US refused to be bound and extended containment through SEATO and domino logic.",
  clusters: [
    { title: "Geneva", summary: "1954.",
      steps: [
        N("cw2-g-acc", "pol", "Geneva Accords", "20 Jul 1954", "17th Parallel; elections 1956; Viet Minh pressured by sponsors.", ["geneva54"]),
        K("undermined", "The US would not be bound."),
        N("cw2-g-us", "pol", "US backs Diem", "1954–63", "Elections refused; ~$7bn aid (1955–60).", ["cw2-us-disregard-geneva"])
      ] },
    { link: "enabled", how: "Cold War logic.",
      title: "Containment", summary: "SEATO and dominoes.",
      steps: [
        { row: [
          N("cw2-g-seato", "pol", "SEATO", "Sep 1954", "Indochina protected by protocol.", ["cw2-seato"]),
          N("cw2-g-domino", "int", "Domino theory", "1953–54", "'Falling domino' principle.", ["domino"])
        ] }
      ] }
  ],
  judge: { prompt: "Why did Geneva fail? Rank the factors.", factors: ["cw2-g-acc", "cw2-g-us", "cw2-g-seato", "cw2-g-domino"],
           notes_view: "Vietnam was shaped by superpower interests at the outset (Viet Minh pressured by sponsors); domino logic justified US support of a non-communist dictator in the South." },
  historians: [ { who: "Kevin Ruane (2000)", view: "US aid gave Diem the means to protect a dictatorship.", nodes: ["cw2-g-us"] } ],
  takeaways: [
    "Geneva partitioned Vietnam pending elections.",
    "The US refused to be bound and backed Diem.",
    "SEATO and domino logic extended containment."
  ]
});

L.push({
  id: "cw2-v-diem", order: 18, level: 3, parent: "cw2-viet", kind: "chain",
  title: "Diem and the people's war",
  question: "How did South Vietnam's weakness and Hanoi's choice lead to war?",
  intro: "Diem's unpopular dictatorship pushed non-communists to the NLF; Hanoi turned to armed struggle; Kennedy poured in advisors.",
  clusters: [
    { title: "South", summary: "Diem's rule.",
      steps: [
        N("cw2-z-diem", "act", "Diem's regime", "1955–63", "98.2% fraudulent referendum; no land reform.", ["diem"]),
        K("intensified", "Repression deepened."),
        { row: [
          N("cw2-z-ham", "pol", "Strategic Hamlets", "1962", "Corrupt and resented.", ["cw2-strategic-hamlets"]),
          N("cw2-z-bud", "evt", "Buddhist crisis", "11 Jun 1963", "Thich Quang Duc's self-immolation.", ["cw2-buddhist-crisis"])
        ] },
        K("led to", "Kennedy allowed a coup."),
        N("cw2-z-coup", "tp", "Diem killed", "1 Nov 1963", "US more entrenched, not less.", ["cw2-diem-coup", "cw2-flexible-response"])
      ] },
    { link: "provoked response", how: "Hanoi turned to arms.",
      title: "North", summary: "People's war.",
      steps: [
        N("cw2-z-restraint", "ctx", "Northern restraint", "1954–58", "No Soviet/Chinese support for quick reunification.", ["cw2-north-1954"]),
        K("followed by", "Armed struggle."),
        N("cw2-z-pw", "pol", "People's war; NLF", "1959–61", "Ho Chi Minh Trail; ~16,000 Viet Cong by 1961.", ["cw2-north-1959"], { go: "cw2-v-amer" })
      ] }
  ],
  judge: { prompt: "Was the war's emergence local or driven from outside? Weigh it.", factors: ["cw2-z-diem", "cw2-z-bud", "cw2-z-coup", "cw2-z-pw"],
           notes_view: "South Vietnamese weakness pushed non-communists toward the NLF; local initiative (Duiker) rather than Moscow/Beijing direction — while US credibility made it more entrenched." },
  historians: [
    { who: "Kevin Ruane (2000)", view: "Diem's contempt for democracy and corruption pushed non-communists into the NLF/Viet Cong orbit.", nodes: ["cw2-z-bud"] },
    { who: "Duiker (1993)", view: "In early 1959 Hanoi decided victory in the South required violent struggle.", nodes: ["cw2-z-pw"] }
  ],
  takeaways: [
    "Diem's dictatorship alienated the South.",
    "Hanoi launched a people's war (1959).",
    "Diem's murder deepened US entrenchment."
  ]
});

L.push({
  id: "cw2-v-amer", order: 19, level: 3, parent: "cw2-viet", kind: "chain",
  title: "Americanisation and outside aid",
  question: "Why did the US escalate, and how did China and the USSR respond?",
  intro: "Tonkin gave Johnson a blank cheque for bombing and ground war; China and the USSR backed Hanoi as rivals.",
  clusters: [
    { title: "US escalation", summary: "1964–68.",
      steps: [
        N("cw2-e-tonkin", "trig", "Gulf of Tonkin", "Aug 1964", "'All necessary measures'; no declaration of war.", ["tonkin"]),
        K("led to", "Bombing and troops."),
        { row: [
          N("cw2-e-rt", "pol", "Rolling Thunder", "1965–68", "864,000 tons; infiltration still rose.", ["cw2-rolling-thunder"]),
          N("cw2-e-sd", "pol", "Search-and-Destroy", "1965–69", "543,000 troops; body counts; Agent Orange.", ["cw2-search-destroy"])
        ] }
      ] },
    { link: "provoked response", how: "Communist powers aided Hanoi.",
      title: "Outside aid", summary: "Rivals.",
      steps: [
        N("cw2-e-motive", "int", "Chinese and Soviet motives", "1956–65", "Ideology and strategy; USSR never in combat.", ["cw2-prc-ussr-motives"]),
        K("led to", "Aid poured in."),
        N("cw2-e-aid", "pol", "Troops and weapons", "1965–71", "320,000 Chinese troops; 3/4 of equipment Soviet.", ["cw2-prc-ussr-aid"]),
        K("intensified", "The split made it competitive."),
        N("cw2-e-comp", "res±", "Competition for Hanoi", "1963–75", "Deng's 1bn yuan offer; 'united action' rejected.", ["cw2-sino-soviet-competition"])
      ] }
  ],
  judge: { prompt: "Why did the US Americanise the war? Rank the factors.", factors: ["cw2-e-tonkin", "cw2-e-rt", "cw2-e-sd", "cw2-e-aid"],
           notes_view: "Responsibility for Americanisation lies with the US foreign-policy framework, policy inertia and Johnson; US conventional tactics were ill-suited to guerrilla war. Sino-Soviet competition sometimes mattered more than solidarity with Hanoi." },
  historians: [
    { who: "Logevall (2001)", view: "Johnson, haunted by Munich, would not reward 'aggression' with 'appeasement'.", nodes: ["cw2-e-tonkin"] },
    { who: "Mason", view: "Hanoi could sustain 10:1 losses and still dictate the pace.", nodes: ["cw2-e-sd"] }
  ],
  takeaways: [
    "Tonkin gave Johnson a blank cheque.",
    "Bombing and ground war failed to stop infiltration.",
    "China and the USSR competed to aid Hanoi."
  ]
});

L.push({
  id: "cw2-v-tet", order: 20, level: 3, parent: "cw2-viet", kind: "chain",
  title: "Tet, My Lai and Vietnamisation",
  question: "Why did the US begin to withdraw?",
  intro: "Tet failed militarily but broke US claims of progress; My Lai and domestic dissent drove Nixon to withdraw while widening the bombing.",
  clusters: [
    { title: "1968", summary: "Turning point.",
      steps: [
        N("cw2-h-tet", "tp", "Tet Offensive", "Jan 1968", "Military defeat; LBJ's political 'death knell'.", ["tet"]),
        K("intensified", "Morality questioned."),
        N("cw2-h-mylai", "evt", "My Lai", "16 Mar 1968", "Up to 504 villagers killed; exposed 1969.", ["cw2-mylai"]),
        K("supports", "Victory measured psychologically."),
        N("cw2-h-vic", "int", "Measuring 'victory'", null, "Body counts; televised war; Cronkite.", ["cw2-victory", "cw2-withdrawal-media"])
      ] },
    { link: "led to", how: "Nixon changed course.",
      title: "Withdrawal", summary: "1969–72.",
      steps: [
        { split: [
          { h: "Ground", steps: [ N("cw2-h-viet", "pol", "Vietnamisation", "1969–72", "540,000 → 24,000 troops.", ["vietnamisation"]) ] },
          { h: "Air", steps: [ N("cw2-h-bomb", "pol", "Wider bombing", "1970–72", "Cambodia, Laos; Christmas bombing.", ["cw2-nixon-bombing"]) ] }
        ] },
        K("supports", "Why the US left."),
        N("cw2-h-why", "judg", "Domestic collapse", "1965–73", "Anti-war movement; race; triangular diplomacy.", ["cw2-withdrawal-domestic", "cw2-withdrawal-media"], { go: "cw2-v-end" })
      ] }
  ],
  judge: { prompt: "Why did the US withdraw? Rank the reasons.", factors: ["cw2-h-tet", "cw2-h-mylai", "cw2-h-viet", "cw2-h-why"],
           notes_view: "Military failure, domestic legitimacy collapse, media and triangular diplomacy — by the late 1960s domestic priorities outweighed Cold War calculations." },
  historians: [],
  takeaways: [
    "Tet was a political turning point.",
    "My Lai undermined the war's morality.",
    "Nixon withdrew troops but widened the bombing."
  ]
});

L.push({
  id: "cw2-v-end", order: 21, level: 3, parent: "cw2-viet", kind: "chain",
  title: "Paris and the Fall of Saigon",
  question: "How did the war end?",
  intro: "Kissinger's diplomacy produced a US exit without enforcement; the North invaded again and took Saigon.",
  clusters: [
    { title: "Exit", summary: "1973.",
      steps: [
        N("cw2-x-paris", "pol", "Paris Peace Accords", "27 Jan 1973", "'Peace with honour'; no enforcement; Thieu dismayed.", ["paris73"]),
        K("followed by", "The North rebuilt."),
        N("cw2-x-saigon", "tp", "Saigon falls", "30 Apr 1975", "War Powers Act: no US airstrikes.", ["cw2-fall-saigon"])
      ] },
    { link: "led to", how: "Consequences.",
      title: "Aftermath", summary: "Dominoes and rapprochement.",
      steps: [
        { split: [
          { steps: [ N("cw2-x-dom", "res±", "Dominoes did not fall", "1973–75", "Vietnam Syndrome; War Powers Resolution.", ["cw2-domino-collapse"]) ] },
          { steps: [ N("cw2-x-china", "res±", "Nixon in China", "1972–79", "Split exploited; Shanghai Communiqué.", ["cw2-viet-china"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "Who won the Vietnam War? Weigh it.", factors: ["cw2-x-paris", "cw2-x-saigon", "cw2-x-dom", "cw2-x-china"],
           notes_view: "The end was shaped by Hanoi's reliance on sponsors and their desire for better US relations; the North's strategic win vs a belated, costly US exit." },
  historians: [],
  takeaways: [
    "Paris (1973): US exit, no enforcement.",
    "Saigon fell in 1975.",
    "Dominoes did not fall; rapprochement followed."
  ]
});

L.push({
  id: "cw2-v-impact", order: 22, level: 3, parent: "cw2-viet", kind: "causal",
  title: "Impact of the Vietnam War",
  question: "How did Vietnam affect the Cold War?",
  intro: "Vietnam brought Soviet Third World gains, détente and Sino-US rapprochement — and a new Indochina war.",
  clusters: [
    { title: "Impact", summary: "Change.",
      steps: [
        { row: [
          N("cw2-y-sov", "res-", "Soviet gains", "1969–85", "Clients 3 → 16; Hanoi tilted to Moscow.", ["vietnamimpact"]),
          N("cw2-y-det", "res+", "Détente", "1972–79", "SALT I; Helsinki; SALT II.", ["cw2-viet-detente"]),
          N("cw2-y-third", "res-", "Third Indochina War", "1978–91", "Vietnam invades Cambodia; Sino-Soviet rivalry.", ["cw2-third-indochina"])
        ] },
        K("supports", "Who won?"),
        N("cw2-y-win", "judg", "North's strategic win", null, "Costly US failure; détente gave way to Cold War II.", ["cw2-rt-viet-impact", "cw2-mason-vietnam"])
      ] }
  ],
  judge: { prompt: "How far did Vietnam change the Cold War? Weigh it.", factors: ["cw2-y-sov", "cw2-y-det", "cw2-y-third", "cw2-y-win"],
           notes_view: "Soviet client states grew from 3 to 16; domino theory discredited; Vietnam Syndrome; détente and Nixon's 1972 China visit." },
  historians: [ { who: "Truong Nhu Tang (1985)", view: "The Party moved toward alliance with the Soviets from 1969; by 1974 the pro-Soviet faction had won.", nodes: ["cw2-y-sov"] } ],
  takeaways: [
    "Soviet Third World gains.",
    "Détente and Sino-US rapprochement.",
    "A strategic win for the North."
  ]
});

L.push({
  id: "cw2-arg", order: 23, level: 1, parent: "cw2-top", kind: "argument",
  title: "Cold War or local conflicts?",
  question: "'These were Cold War conflicts rather than local ones.' How far do you agree?",
  intro: "Periodise each case: when did outside powers drive events, and when did local actors?",
  clusters: [
    { title: "Claim", summary: "Cold War conflicts.",
      steps: [ N("cw2-z-claim", "judg", "Cold War conflicts", null, "The superpowers drove these conflicts.", ["cw2-guiding-qs"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "Outside vs local.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("cw2-z-korea", "evid", "Korea internationalised", "1950", "US/UN entry, rollback, China.", ["cw2-proxy-debate"]),
            K("supports", "Cuba too."),
            N("cw2-z-cuba", "evid", "Cuba in the Soviet orbit", "1960–62", "Mikoyan; Khrushchev's missiles.", ["cw2-mikoyan-1960", "cw2-cmc-initiative"])
          ] },
          { h: "Against", steps: [
            N("cw2-z-local", "evid", "Local roots", "1945–59", "Reunification; anti-imperialism; nationalism.", ["cw2-two-koreas", "cubanrev", "cw2-viet-continuities"]),
            K("contradicts", "Nationalism dominated Vietnam."),
            N("cw2-z-viet", "evid", "Vietnamese nationalism", "1946–75", "Proxy at first; nationalism increasingly dominant.", ["cw2-viet-coldwar", "cw2-human-voice"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "Periodise.",
      steps: [ N("cw2-z-judge", "judg", "Local, then Cold War", null, "Local struggles turned into Cold War contests; the balance shifted by phase.", ["cw2-viet-coldwar", "cw2-rt-viet-players", "cw2-viet-players", "cw2-rt-viet-phases"]) ] }
  ],
  judge: { prompt: "How far were these Cold War conflicts? Rank the evidence.", factors: ["cw2-z-korea", "cw2-z-cuba", "cw2-z-local", "cw2-z-viet"],
           notes_view: "Korea internationalised in Jun 1950 and intensified by rollback and China; Cuba a Cold War issue from Mikoyan's 1960 visit; Vietnam more proxy at the outset, but nationalism increasingly dominated." },
  historians: [],
  takeaways: [
    "For: internationalisation, Soviet missiles.",
    "Against: local roots; Vietnamese nationalism.",
    "Best answer: periodise each case."
  ]
});
})();
