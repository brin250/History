// v2 flow charts: Forming nation states in SEA (from Theme_I_Forming_Nation_States_Study_Notes; cards in data/ns.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ns = window.FLOWS2.ns || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "ns-top", order: 1, level: 0, kind: "causal",
  title: "Forming nation states in Southeast Asia",
  question: "Why did SEA states adopt different forms of government, and how successfully did they consolidate power?",
  intro: "Decolonisation, elites and masses, and the Cold War shaped four forms of government; most early democracies fell; consolidation produced three outcomes.",
  clusters: [
    { title: "Framework", summary: "Forms, factors, consolidation.",
      steps: [
        N("ns-t-frame", "ctx", "Four forms, three factors", null, "Democracies, monarchies, military and communist states; shaped by decolonisation, elites/masses and the Cold War.", ["ns-forms", "ns-factors"], { go: "ns-frame" })
      ] },
    { link: "led to", how: "Decolonisation set the starting conditions.",
      title: "Decolonisation", summary: "Three clusters.",
      steps: [
        { row: [
          N("ns-t-tut", "ctx", "Peaceful, with tutelage", "1907–1965", "Philippines, Malaya, Singapore.", ["ns-clusters", "philindep"], { go: "ns-tutelage" }),
          N("ns-t-notut", "ctx", "Peaceful, without tutelage", "1945–1954", "Burma, Cambodia, Laos.", ["ns-clusters", "burmaindep"], { go: "ns-notutelage" }),
          N("ns-t-violent", "ctx", "Violent re-imposition", "1945–1954", "Vietnam, Indonesia.", ["ns-clusters", "indonesiarev"], { go: "ns-violent" })
        ] }
      ] },
    { link: "followed by", how: "Most early democracies then fell.",
      title: "Early democracies fail", summary: "By 1972, all but two.",
      steps: [
        { row: [
          N("ns-t-th1", "evt", "Thailand", "1932–73", "1932 revolution; 1947 coup; military rule.", ["ns-thai1932", "ns-thaimil"], { go: "ns-th1" }),
          N("ns-t-id1", "evt", "Indonesia", "1949–67", "Parliamentary chaos; Guided Democracy; Gestapu.", ["ns-guideddem", "gestapu"], { go: "ns-id1" }),
          N("ns-t-bm1", "evt", "Burma", "1948–62", "Factionalism; Ne Win's coup.", ["ns-burma62"], { go: "ns-bm1" }),
          N("ns-t-ph1", "evt", "Philippines", "1946–72", "Patron-client democracy; martial law.", ["ns-martiallaw"], { go: "ns-ph1" })
        ] },
        K("supports", "The Cold War intensified the struggle in Indochina."),
        N("ns-t-cw", "evt", "Indochina's communist states", "1954–1976", "Second Indochina War; Cambodia and Laos fall to communism.", ["ns-2iw", "ns-khmerrouge"], { go: "ns-indochina" })
      ] },
    { link: "followed by", how: "Governments then tried to consolidate power, with three outcomes.",
      title: "Consolidation", summary: "Unstable, stable authoritarian, semi-democratic.",
      steps: [
        { split: [
          { h: "Unstable", steps: [
            { row: [
              N("ns-t-id2", "res-", "Suharto's New Order", "1965–2001", "Fell in 1998.", ["ns-suhartofall"], { go: "ns-id2" }),
              N("ns-t-ph2", "res-", "Marcos", "1972–2001", "Fell in 1986.", ["marcos"], { go: "ns-ph2" }),
              N("ns-t-th2", "res±", "Thailand", "1973–2000", "1973, 1976, 1992.", ["ns-thai92"], { go: "ns-th2" })
            ] }
          ] },
          { h: "Stable authoritarian", steps: [
            { row: [
              N("ns-t-bm2", "res±", "Ne Win", "1962–88", "BSPP rule until 8888.", ["ns-bspp"], { go: "ns-bm2" }),
              N("ns-t-bm3", "res±", "SLORC/SPDC", "1988–2021", "Coercion without legitimacy.", ["ns-slorc"], { go: "ns-bm3" }),
              N("ns-t-vn", "res+", "Vietnam's VCP", "1976–2000", "Doi Moi kept the Party in control.", ["ns-doimoi"], { go: "ns-vn" })
            ] }
          ] },
          { h: "Semi-democracies", steps: [
            { row: [
              N("ns-t-my", "res+", "Malaysia", "1957–2000", "13 May to BN dominance.", ["may13", "ns-msiasources"], { go: "ns-my" }),
              N("ns-t-sg", "res+", "Singapore", "1965–2000", "PAP dominance.", ["ns-sgsurvival"], { go: "ns-sg" })
            ] }
          ] }
        ] }
      ] },
    { link: "supports", how: "Comparing the clusters points to adaptability.",
      title: "Verdict", summary: "Adaptability decided success.",
      steps: [
        N("ns-t-compare", "int", "Comparing clusters", null, "Leaders, legitimacy, opposition and the Cold War across the three outcomes.", ["ns-compare", "ns-military"], { go: "ns-compare" }),
        K("supports", "The comparison favours adaptability over regime type."),
        N("ns-t-verdict", "judg", "Adaptability, not regime type", null, "Decolonisation set initial conditions; the Cold War amplified; success tracked capacity to adapt.", ["ns-conclusion"], { go: "ns-arg" })
      ] }
  ],
  judge: { prompt: "Which factor best explains the forms of government in SEA? Rank them.",
           factors: ["ns-t-tut", "ns-t-notut", "ns-t-violent", "ns-t-cw"],
           notes_view: "Decolonisation set initial conditions but did not determine long-term stability; the Cold War was an amplifier rather than a root cause; success correlates with capacity to adapt." },
  historians: [],
  takeaways: [
    "Four forms: parliamentary democracy, constitutional monarchy, military rule, communist states.",
    "Except Malaysia and Singapore, early democracies fell by 1972 (Thailand 1947, Indonesia 1959, Burma 1962, Philippines 1972).",
    "Three outcomes: unstable regimes reverting to democracy, stable authoritarian rule, semi-democracies."
  ]
});

L.push({
  id: "ns-frame", order: 2, level: 1, parent: "ns-top", kind: "causal",
  title: "Framework: forms, establishment, consolidation",
  question: "What forms of government emerged, why, and how is consolidation assessed?",
  intro: "Three factors explain how governments were established; four factors explain how they consolidated power; success means durability.",
  clusters: [
    { title: "Four forms", summary: "What emerged.",
      steps: [
        { row: [
          N("ns-f-dem", "ctx", "Parliamentary democracies", null, "Early Philippines, Indonesia, Burma; Malaysia and Singapore throughout.", ["ns-forms"]),
          N("ns-f-mon", "ctx", "Constitutional monarchies", null, "Cambodia, Laos, Malaysia, Thailand from 1932.", ["ns-forms"]),
          N("ns-f-mil", "ctx", "Military governments", null, "Thailand 1947–73, Burma from 1962, New Order Indonesia, Marcos's Philippines.", ["ns-forms"]),
          N("ns-f-com", "ctx", "Communist states", null, "Vietnam, Cambodia, Laos.", ["ns-forms"])
        ] }
      ] },
    { link: "supports", how: "Three factors explain why each form was established.",
      title: "Why forms differed", summary: "Before, at and after independence.",
      steps: [
        { row: [
          N("ns-f-decol", "ltc", "Decolonisation experience", null, "US/Britain ceded control if democracy resulted; French/Dutch resistance legitimised military and revolutionary struggle.", ["ns-factors", "ns-japocc"], { go: "ns-decol" }),
          N("ns-f-elites", "ltc", "Elites and masses", null, "Elite beliefs, power-sharing, constitutional familiarity; masses' desire for influence.", ["ns-factors", "ns-failure"]),
          N("ns-f-cw", "ltc", "Cold War", null, "US intervention (Domino Theory); North Vietnamese support for regional communists.", ["ns-factors"])
        ] },
        K("led to", "Where elites could not compromise and unrest was suppressed, the military rose."),
        N("ns-f-fail", "res-", "Early democracies fail", "1947–72", "Only Malaysia and Singapore sustained democracy.", ["ns-failure"])
      ] },
    { link: "followed by", how: "Regimes then tried to consolidate power.",
      title: "Consolidation", summary: "Legitimacy and control.",
      steps: [
        N("ns-f-consol", "ctx", "Consolidation of power", null, "Strengthening capacity to rule by building legitimacy and controlling opposition.", ["ns-consol"]),
        K("supports", "Four factors decide it."),
        { row: [
          N("ns-f-lead", "ltc", "Leaders", null, "Personal style, ideology, political skill.", ["ns-consol"]),
          N("ns-f-src", "ltc", "Sources of legitimacy", null, "Constitutions/elections, ideology, military, economic performance, patronage.", ["ns-consol"]),
          N("ns-f-opp", "ltc", "Challenges and opposition", null, "Responses to rebellions, insurgencies, protests.", ["ns-consol"]),
          N("ns-f-cw2", "ltc", "Cold War", null, "Superpower aid, ideology and alliances.", ["ns-consol"])
        ] },
        K("led to", "Success is measured by durability."),
        N("ns-f-out", "judg", "Three outcomes", null, "Unstable regimes reverting to democracy; stable authoritarian rule; semi-democracies.", ["ns-clusters"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Four forms: democracies, constitutional monarchies, military governments, communist states.",
    "Three factors for establishment: decolonisation, elites and masses, the Cold War.",
    "Four factors for consolidation: leaders, legitimacy, opposition, the Cold War; success = durability."
  ]
});

L.push({
  id: "ns-tutelage", order: 3, level: 3, parent: "ns-top", kind: "causal",
  title: "Peaceful transfer with tutelage",
  question: "How did the Philippines, Malaya and Singapore gain independence, and what did tutelage leave behind?",
  intro: "Long tutelage and colonial suppression of communists gave all three democratic structures and apolitical militaries — yet the Philippines still turned authoritarian.",
  clusters: [
    { title: "Three paths", summary: "US and British tutelage.",
      steps: [
        { split: [
          { h: "Philippines", steps: [
            N("ns-u-ph1", "pol", "Long US tutelage", "1907–1935", "1907 Assembly; 1934 Tydings–McDuffie Act (10-year transition); 1935 Constitution.", ["philindep"]),
            K("led to", "Independence came on schedule, but on US terms."),
            N("ns-u-ph2", "tp", "Independence; Bell Act", "4 Jul 1946", "US$500m+ aid tied to free trade and a 'parity clause' — critics saw lost sovereignty.", ["philindep"]),
            K("followed by", "The pro-US elite ruled; the Huks were defeated."),
            N("ns-u-ph3", "res±", "Ilustrado elite rule", "1946–54", "Roxas' Liberals; Huk insurgency beaten by Magsaysay's land reform; AFP tied to US (1947 bases).", ["ns-philelites"])
          ] },
          { h: "Malaya", steps: [
            N("ns-u-my1", "pol", "Malayan Union", "1946", "Centralised, jus soli; Malay backlash; UMNO formed; Federation (1948) restored Malay position.", ["ns-malayastruct", "ns-alliance"]),
            K("followed by", "Communist revolt hastened independence."),
            N("ns-u-my2", "evt", "The Emergency", "1948–60", "MCP outlawed; Templer's New Villages and hearts and minds; timetable cut from 25 to 8 years.", ["malayaemergency", "ns-malayastruct"]),
            K("enabled", "A moderate multiracial alliance won British trust."),
            N("ns-u-my3", "tp", "Alliance wins; independence", "1955–57", "51/52 seats (1955); Tunku firm at Baling; independence 31 Aug 1957.", ["ns-alliance"])
          ] },
          { h: "Singapore", steps: [
            N("ns-u-sg1", "pol", "Westminster-style elections", "1948–55", "1953 Rendel Commission; SLF won 1955; Marshall resigned 1956.", ["ns-sgstruct", "ns-sgelites"]),
            K("followed by", "The PAP won with left-wing help."),
            N("ns-u-sg2", "evt", "PAP landslide", "1959", "43/51 seats, partly via its pro-communist faction's union control.", ["ns-sgelites"]),
            K("provoked response", "Lee moved against the left."),
            N("ns-u-sg3", "pol", "PAP split, Merger, Cold Store", "1961–63", "Barisan Sosialis formed (1961); Merger Referendum (1962); Operation Cold Store (1963).", ["spore59"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Tutelage left similar starting points.",
      title: "Legacy", summary: "Same start, different ends.",
      steps: [
        N("ns-u-legacy", "res+", "Democratic structures, apolitical military", null, "Communists suppressed with colonial support; militaries professional.", ["ns-clusters"]),
        K("contradicts", "Yet one of the three became authoritarian."),
        N("ns-u-verdict", "judg", "Tutelage did not guarantee democracy", null, "The Philippines turned authoritarian (1972): decolonisation alone did not determine stability.", ["ns-conclusion"])
      ] }
  ],
  judge: { prompt: "How far did tutelage prepare these states for democracy? Rank the evidence.", factors: ["ns-u-ph2", "ns-u-my2", "ns-u-my3", "ns-u-sg3", "ns-u-legacy"],
           notes_view: "Peaceful transfer with tutelage gave democratic structures, communists suppressed and apolitical militaries — yet the Philippines still turned authoritarian." },
  historians: [],
  takeaways: [
    "Philippines: long US tutelage; independence 1946 on Bell Act terms.",
    "Malaya: Emergency hastened independence; the Alliance won British trust (1957).",
    "Singapore: PAP rose, then broke the left (Cold Store 1963) — tutelage did not guarantee democracy (Philippines)."
  ]
});

L.push({
  id: "ns-notutelage", order: 4, level: 3, parent: "ns-top", kind: "causal",
  title: "Peaceful transfer without tutelage",
  question: "Why did Burma, Cambodia and Laos gain independence with little preparation for democracy?",
  intro: "Mass pressure or royal campaigns won quick independence, but little constitutional preparation left fragile states.",
  clusters: [
    { title: "Three paths", summary: "Quick exits.",
      steps: [
        { split: [
          { h: "Burma", steps: [
            N("ns-n-bm1", "ltc", "Harsh rule, AFPFL", "1885–1945", "Nationalism (Saya San); Aung San's AFPFL fought the Japanese with the British.", ["ns-burmalegacy"]),
            K("provoked response", "Britain's 1945 plan for 3 years' direct rule met mass protest."),
            N("ns-n-bm2", "evt", "Mass pressure", "1945–46", "Rallies and People's Volunteer Organisations forced a commitment.", ["ns-burmalegacy"]),
            K("led to", "Britain agreed to go within a year."),
            N("ns-n-bm3", "pol", "Aung San–Attlee; Panglong", "1947", "Independence within a year; Panglong minority rights (Karens largely boycotted); AFPFL 173/210 seats.", ["burmaindep"]),
            K("undermined", "Aung San's murder left a fragile union."),
            N("ns-n-bm4", "res-", "Aung San assassinated", "19 Jul 1947", "U Nu lacked his standing with minorities; independence 4 Jan 1948.", ["burmaindep"],
              { ev: ["The BIA/BNA (30,000) made the military an independent power source; communists expelled from the AFPFL (1946) — Pluvier: made it 'acceptable in British eyes'."] })
          ] },
          { h: "Cambodia", steps: [
            N("ns-n-cb1", "ctx", "French protectorate", "1863–1948", "Monarchy preserved; 1948 treaty: 'fifty percent independence'.", ["ns-cambodia"]),
            K("provoked response", "Sihanouk pressed France directly."),
            N("ns-n-cb2", "pol", "'Royal crusade'", "1953", "Sihanouk dismissed the elected cabinet (1952) and campaigned from exile.", ["ns-cambodia"]),
            K("led to", "France conceded."),
            N("ns-n-cb3", "tp", "Independence", "9 Nov 1953", "A constitutional monarchy with little democratic practice.", ["ns-cambodia"])
          ] },
          { h: "Laos", steps: [
            N("ns-n-la1", "ctx", "Weak nationalism", "1893–1945", "Split kingdoms; French protectorate; Japan granted self-government.", ["ns-laos"]),
            K("followed by", "Independence came in stages."),
            N("ns-n-la2", "tp", "Independence", "1953–54", "Within the French Union (1953), full after Geneva; Royal Lao Government.", ["ns-laos"]),
            K("constrained", "A communist rival government formed at once."),
            N("ns-n-la3", "res-", "Pathet Lao rival", "1950s", "Souphanouvong's government in the northeast with Vietminh aid.", ["ns-laos"])
          ] }
        ] }
      ] },
    { link: "supports", how: "Haste left little constitutional experience.",
      title: "Verdict", summary: "Unprepared states.",
      steps: [
        N("ns-n-verdict", "judg", "Little preparation for democracy", null, "Swift withdrawal (Burma in under 3 years) left elites unprepared and no power-sharing design.", ["ns-burmaconst", "ns-clusters"])
      ] }
  ],
  historians: [ { who: "Jan Pluvier", view: "Expelling the communists made the AFPFL 'acceptable in British eyes'.", nodes: ["ns-n-bm4"] } ],
  takeaways: [
    "Burma: mass pressure forced a swift British exit; Aung San's death left U Nu a fragile union.",
    "Cambodia: Sihanouk's 'royal crusade' won independence (1953).",
    "Laos: independence in stages with a Pathet Lao rival — all with little democratic preparation."
  ]
});

L.push({
  id: "ns-violent", order: 5, level: 3, parent: "ns-top", kind: "causal",
  title: "Violent re-imposition: Indonesia and Vietnam",
  question: "How did violent decolonisation shape Indonesia and Vietnam?",
  intro: "Dutch and French attempts to return were met by armed revolutions that legitimised the army in Indonesia and communism in Vietnam.",
  clusters: [
    { title: "Two revolutions", summary: "Wars of independence.",
      steps: [
        { split: [
          { h: "Indonesia", steps: [
            N("ns-v-id1", "ltc", "Japan arms nationalists", "1943", "Sukarno released; PETA (65,000) — later the Republican Army's backbone.", ["ns-indoprewar"]),
            K("led to", "Nationalists declared independence as Japan fell."),
            N("ns-v-id2", "tp", "Independence declared", "17 Aug 1945", "Under pemuda pressure; the Dutch returned planning a federal USI.", ["indonesiarev"]),
            K("provoked response", "Fighting broke out with returning forces."),
            N("ns-v-id3", "evt", "Surabaya; Police Actions", "1945–48", "Up to 15,000 Indonesian deaths at Surabaya; Police Actions (Aug 1947, Dec 1948).", ["indonesiarev"]),
            K("followed by", "A communist rising tested the Republic."),
            N("ns-v-id4", "evt", "Madiun Affair", "Sep 1948", "PKI/PSI Soviet Republic crushed by the army: c.8,000 dead, 35,000 arrested.", ["ns-madiun"]),
            K("led to", "Anti-communism won US backing; the US pressed the Dutch."),
            N("ns-v-id5", "tp", "Hague Agreement", "2 Nov 1949", "US threatened Marshall Aid (Jan 1949); independence.", ["indonesiarev", "ns-madiun"])
          ] },
          { h: "Vietnam", steps: [
            N("ns-v-vn1", "ltc", "Repressive French rule", "to 1945", "Brazzaville (1944) ruled out autonomy; ICP (1930), Vietminh (1941).", ["ns-vietdecol"]),
            K("led to", "The Vietminh seized the moment in 1945."),
            N("ns-v-vn2", "tp", "DRV declared", "Aug 1945", "10 of 15 cabinet members ICP; Mar 1946 'free state' deal.", ["ns-vietdecol"]),
            K("provoked response", "France struck to reassert control."),
            N("ns-v-vn3", "trig", "Haiphong bombardment", "23 Nov 1946", "2,000–6,000 civilians killed; war began.", ["vietnamindep"]),
            K("led to", "A long guerrilla war ended in French defeat."),
            N("ns-v-vn4", "tp", "Dien Bien Phu; Geneva", "1954", "French surrender (7 May); divided at the 17th parallel; elections never held.", ["vietnamindep"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Revolutionary struggle legitimised those who fought it.",
      title: "Legacy", summary: "Army and Party legitimised.",
      steps: [
        { row: [
          N("ns-v-army", "res±", "Indonesia: army politicised", null, "The struggle legitimised the military, setting up Suharto's rise.", ["ns-madiun", "ns-clusters"]),
          N("ns-v-party", "res±", "Vietnam: communism legitimised", null, "Ho's moderate nationalism won broad support; 'the party commands the gun'.", ["vietnamindep"])
        ] }
      ] }
  ],
  judge: { prompt: "How did violent decolonisation shape these states? Rank the factors.", factors: ["ns-v-id1", "ns-v-id4", "ns-v-id5", "ns-v-vn3", "ns-v-vn4"],
           notes_view: "Violent re-imposition legitimised the military (Indonesia) and communism (Vietnam); Madiun's anti-communism won US support — a Cold War factor in decolonisation." },
  historians: [],
  takeaways: [
    "Indonesia: PETA, Surabaya, Police Actions; Madiun (1948) won US support; Hague (1949).",
    "Vietnam: DRV (1945), Haiphong (1946), Dien Bien Phu and Geneva (1954).",
    "The struggles legitimised the army (Indonesia) and the communist Party (Vietnam)."
  ]
});

L.push({
  id: "ns-th1", order: 6, level: 3, parent: "ns-top", kind: "causal",
  title: "Thailand: 1932 to military rule",
  question: "Why did Thailand move from absolute monarchy to military rule?",
  intro: "Never colonised, Thailand shows elite rivalry and US aid, not decolonisation, driving the shift: 1932 revolution, failed post-war democracy, 1947 coup, military rule to 1973.",
  clusters: [
    { title: "1932 revolution", summary: "End of absolute monarchy.",
      steps: [
        N("ns-a-promoters", "act", "Western-educated 'Promoters'", "1932", "Pridi, Phibun; no democratic tradition after Chakri absolutism.", ["ns-thai1932"]),
        K("led to", "A bloodless coup forced constitutional monarchy."),
        N("ns-a-1932", "tp", "1932 revolution", "24 Jun 1932", "Prajadhipok accepted a constitution; abdicated 1935.", ["ns-thai1932"])
      ] },
    { link: "followed by", how: "Post-war democracy was torn by elite rivalry.",
      title: "Post-war democracy", summary: "Rivalry and a royal death.",
      steps: [
        N("ns-a-1946", "pol", "1946 Constitution", "1946", "Fully elected legislature; 9 administrations 1945–48 amid Pridi/Seni/Phibun rivalry.", ["ns-thaipostwar"]),
        K("undermined", "The king's death was used against Pridi."),
        N("ns-a-ananda", "evt", "King Ananda found shot", "6 Jun 1946", "Unexplained; royalists used it against Pridi.", ["ns-thaipostwar"]),
        K("led to", "The military seized power."),
        N("ns-a-1947", "tp", "1947 coup", "8 Nov 1947", "Claimed to defend 'Nation, Religion and King'; 1951 'Silent Coup' (military 19/25 cabinet).", ["ns-thaipostwar"])
      ] },
    { link: "led to", how: "Generals then ruled for a quarter-century.",
      title: "Military rule", summary: "Phibun, Sarit, Thanom.",
      steps: [
        N("ns-a-leaders", "act", "Phibun, Sarit, Thanom", "1947–73", "Sarit's 'benevolent paternalism' revived the monarchy.", ["ns-thaimil", "ns-thaisources"]),
        K("enabled", "US aid strengthened the military state."),
        N("ns-a-usaid", "stc", "US military aid", "1960s", "Quadrupled; budget ~US$20m to ~US$250m/yr.", ["ns-thaimil"]),
        K("followed by", "Growth created new challengers."),
        N("ns-a-growth", "res±", "Business class and students", "1961–70", "Growth 8.2%/yr; businessmen won 46% of seats (1969).", ["ns-thaisources"])
      ] }
  ],
  judge: { prompt: "Why did Thailand become a military state? Rank the factors.", factors: ["ns-a-1946", "ns-a-ananda", "ns-a-1947", "ns-a-usaid"],
           notes_view: "Never colonised, Thailand shows elite rivalry and the masses rather than decolonisation driving authoritarianism; US aid 'consolidated Thailand's militarised state'; the most stable period (Sarit) had no constitution." },
  historians: [ { who: "Baker & Phongpaichit", view: "US Cold War aid 'consolidated Thailand's militarised state'.", nodes: ["ns-a-usaid"] } ],
  takeaways: [
    "1932: Western-educated Promoters ended absolute monarchy.",
    "Post-war democracy collapsed in elite rivalry; 1947 coup.",
    "Phibun, Sarit and Thanom ruled with US aid; growth created challengers by 1969."
  ]
});

L.push({
  id: "ns-ph1", order: 7, level: 3, parent: "ns-top", kind: "causal",
  title: "Philippines: patron-client democracy to martial law",
  question: "Why did Philippine democracy end in martial law in 1972?",
  intro: "US-style checks were hollowed out by patron-client politics; Marcos used unrest to declare martial law.",
  clusters: [
    { title: "Patron-client democracy", summary: "An 'old oligarchy'.",
      steps: [
        N("ns-p-oligarchy", "ltc", "'Old oligarchy'", "1946–65", "c.200 families; near-identical parties; Quirino's 'ten percenters'.", ["ns-patron"]),
        K("undermined", "Patronage hollowed out US-style checks."),
        N("ns-p-gridlock", "res-", "Corruption and gridlock", "1946–65", "Election rigging; Congress blocked Magsaysay's land reform.", ["ns-philconst"])
      ] },
    { link: "followed by", how: "A reformer briefly broke the pattern.",
      title: "Magsaysay", summary: "Reform cut short.",
      steps: [
        N("ns-p-magsaysay", "act", "Magsaysay elected", "1953", "Used the military to protect ballot boxes; beat the Huks with force and land reform.", ["ns-philconst"]),
        K("followed by", "His death ended reform."),
        N("ns-p-crash", "evt", "Magsaysay killed", "1957", "Air crash; ilustrado dominance returned.", ["ns-philconst"])
      ] },
    { link: "followed by", how: "Marcos came to power distrusting democracy.",
      title: "Marcos and unrest", summary: "Toward martial law.",
      steps: [
        N("ns-p-marcos", "act", "Marcos", "1965–72", "Saw democracy as 'wasteful and paralyzing'; re-elected 1969.", ["ns-martiallaw"]),
        K("intensified", "Rebellion and protest spread."),
        { row: [
          N("ns-p-cpp", "stc", "CPP/NPA and MNLF", "1968–", "Communist and Muslim insurgencies.", ["ns-martiallaw"]),
          N("ns-p-fqs", "stc", "First Quarter Storm", "Jan 1970", "Four students killed.", ["ns-martiallaw"]),
          N("ns-p-plaza", "trig", "Plaza Miranda bombing", "Aug 1971", "Cited as justification.", ["ns-martiallaw"])
        ] },
        K("was used to justify", "Marcos used the unrest to justify emergency rule."),
        N("ns-p-ml", "tp", "Martial law", "21 Sep 1972", "Proclamation No. 1081, promising a 'New Society'.", ["ns-martiallaw"])
      ] }
  ],
  judge: { prompt: "Why did Philippine democracy fail? Rank the factors.", factors: ["ns-p-oligarchy", "ns-p-gridlock", "ns-p-marcos", "ns-p-cpp", "ns-p-plaza"],
           notes_view: "US-style checks were undermined by patron-client politics; elite beliefs (Marcos) and mass unrest led to martial law despite tutelage." },
  historians: [ { who: "Ricklefs", view: "Philippine politics was dominated by patronage — Macapagal overspent despite pledging frugality.", nodes: ["ns-p-oligarchy"] } ],
  takeaways: [
    "Patron-client politics and an 'old oligarchy' hollowed out US-style democracy.",
    "Magsaysay's reforms died with him (1957).",
    "Marcos used insurgency and protest to declare martial law (21 Sep 1972)."
  ]
});

L.push({
  id: "ns-bm1", order: 8, level: 3, parent: "ns-top", kind: "causal",
  title: "Burma: U Nu's democracy to Ne Win's coup",
  question: "Why did parliamentary democracy collapse in Burma in 1962?",
  intro: "AFPFL factionalism, Buddhist Socialism and insurgencies weakened U Nu; a caretaker army government showed an alternative; Ne Win seized power in 1962.",
  clusters: [
    { title: "Weak foundations", summary: "Factions and insurgents.",
      steps: [
        { row: [
          N("ns-b-afpfl", "ltc", "AFPFL factionalism", "1948–58", "A broad coalition; Aung San's death broke trust with minorities.", ["ns-afpfl"]),
          N("ns-b-insurg", "ltc", "Insurgencies", "1948–", "Karens (seized Moulmein, threatened Rangoon) and White Flag communists — contained, not defeated.", ["ns-caretaker"]),
          N("ns-b-buddsoc", "pol", "Buddhist Socialism", "1950s", "Antagonised Christian minorities; Pyidawtha plan failed.", ["ns-afpfl"])
        ] }
      ] },
    { link: "led to", how: "The AFPFL split in 1958.",
      title: "Split and caretaker", summary: "The army's trial run.",
      steps: [
        N("ns-b-split", "evt", "AFPFL splits", "Jan 1958", "'Stable' (Ba Swe, Kyaw Nyein) vs U Nu's 'Clean'.", ["ns-afpfl"]),
        K("led to", "Facing defeat, U Nu handed power to the army."),
        N("ns-b-caretaker", "pol", "Ne Win's caretaker government", "1958–60", "18 months stabilised the country; power returned after 1960 election.", ["ns-caretaker"])
      ] },
    { link: "followed by", how: "U Nu's return revived the old problems.",
      title: "The 1962 coup", summary: "Army takes over.",
      steps: [
        { row: [
          N("ns-b-religion", "trig", "State Religion Bill", "1961", "Enraged non-Buddhist minorities and the military.", ["ns-burma62"]),
          N("ns-b-states", "stc", "Broken promises", "1960–61", "U Nu reneged on Arakanese/Mon states; insurgents held one-tenth of the country.", ["ns-burma62"])
        ] },
        K("led to", "The army seized power permanently."),
        N("ns-b-coup", "tp", "Ne Win's coup", "2 Mar 1962", "Largely bloodless; constitution suspended; Union Revolutionary Council.", ["ns-burma62"])
      ] }
  ],
  judge: { prompt: "Why did Burmese democracy fail? Rank the factors.", factors: ["ns-b-afpfl", "ns-b-insurg", "ns-b-caretaker", "ns-b-religion"],
           notes_view: "Elites' inability to share power and unfamiliarity with constitutional processes; the military's suppression of unrest raised its political role." },
  historians: [],
  takeaways: [
    "AFPFL factionalism, Buddhist Socialism and insurgencies weakened U Nu.",
    "The 1958–60 caretaker government showed the army as an alternative.",
    "The 1961 State Religion Bill and insurgency led to Ne Win's coup (2 Mar 1962)."
  ]
});

L.push({
  id: "ns-id1", order: 9, level: 3, parent: "ns-top", kind: "causal",
  title: "Indonesia: democracy, Guided Democracy, Gestapu",
  question: "Why did Indonesian democracy give way to Guided Democracy and then military rule?",
  intro: "Fragmented parties and a split 1955 election discredited democracy; Sukarno balanced army and PKI until Gestapu destroyed the PKI and raised Suharto.",
  clusters: [
    { title: "Parliamentary democracy", summary: "No common ground.",
      steps: [
        N("ns-i-parties", "ltc", "Fragmented parties", "1949–55", "Masjumi, NU, PNI, PKI, PSI; 5 cabinets rose and fell.", ["ns-indoparties"]),
        K("followed by", "The long-delayed election settled nothing."),
        N("ns-i-1955", "evt", "1955 election", "29 Sep 1955", "PNI 22.3%, Masjumi 20.9%, NU 18.4%, PKI 16.4%; no majority; Java/Outer Islands split.", ["indonesia55"])
      ] },
    { link: "intensified", how: "PKI growth and regional revolts alarmed the army.",
      title: "Pressures", summary: "PKI and regions.",
      steps: [
        { row: [
          N("ns-i-pki", "stc", "PKI growth", "1954–60s", "1 million by 1955; c.3m by the early 1960s.", ["ns-pkigrowth"]),
          N("ns-i-prri", "stc", "Regional rebellions", "1956–58", "PRRI crushed by the army, boosting its role.", ["ns-pkigrowth"])
        ] }
      ] },
    { link: "provoked response", how: "Sukarno replaced parliamentary rule.",
      title: "Guided Democracy", summary: "Nasakom balancing.",
      steps: [
        N("ns-i-gd", "pol", "Guided Democracy", "1957–60", "'50 percent plus one' democracy rejected; 1945 Constitution restored (1959); parliament dismissed (1960); elections cancelled.", ["ns-guideddem"]),
        K("led to", "Sukarno balanced the army against the PKI."),
        N("ns-i-nasakom", "res-", "Unstable balance", "1957–65", "Nasakom reconciled no one; inflation 500% by 1965; army ran Dutch firms.", ["ns-sukarnogd"])
      ] },
    { link: "triggered", how: "A coup attempt broke the balance.",
      title: "Gestapu", summary: "PKI destroyed; Suharto rises.",
      steps: [
        N("ns-i-gestapu", "trig", "Gestapu coup", "30 Sep 1965", "Six generals murdered.", ["gestapu"]),
        K("provoked response", "The army purged the PKI."),
        N("ns-i-purge", "evt", "Anti-PKI massacres", "1965–66", "Up to half a million killed; US/Western support.", ["gestapu"]),
        K("led to", "Sukarno was sidelined."),
        N("ns-i-suharto", "tp", "Suharto president", "Mar 1967", "Military rule begins.", ["gestapu"])
      ] }
  ],
  judge: { prompt: "Why did Indonesian democracy fail? Rank the factors.", factors: ["ns-i-parties", "ns-i-1955", "ns-i-pki", "ns-i-gd", "ns-i-gestapu"],
           notes_view: "Illustrates every factor for democracy's failure (elite disunity, Java/Outer Islands split, mass PKI growth); the Cold War amplified a domestic power struggle." },
  historians: [],
  takeaways: [
    "Fragmented parties and the split 1955 election discredited democracy.",
    "Sukarno's Guided Democracy (1957–65) balanced army and PKI amid 500% inflation.",
    "Gestapu (1965) led to the PKI's destruction and Suharto's presidency (1967)."
  ]
});

L.push({
  id: "ns-indochina", order: 10, level: 3, parent: "ns-top", kind: "causal",
  title: "The Cold War and Indochina's communist states",
  question: "How did the Cold War produce communist states in Vietnam, Cambodia and Laos?",
  intro: "The legitimate North outlasted the US-backed South; Cambodia and Laos were pulled into the war and fell to communists in 1975.",
  clusters: [
    { title: "Two Vietnams", summary: "Legitimacy vs despotism.",
      steps: [
        { split: [
          { h: "North (DRV)", steps: [ N("ns-c-drv", "res+", "Cohesive Lao Dong state", "1954–75", "Rural legitimacy; Ho's collective leadership; PAVN from the Vietminh.", ["ns-drv"]) ] },
          { h: "South (RVN)", steps: [
            N("ns-c-diem", "act", "Diem's despotism", "1955–63", "Family in key posts; persecuted Buddhists; NLF held ~2/3 of villages by 1962.", ["ns-rvn"]),
            K("led to", "The Buddhist Crisis brought his overthrow."),
            N("ns-c-coup", "res-", "Diem killed; instability", "1963–65", "US-sanctioned coup; 6 governments before Thieu.", ["ns-rvn"])
          ] }
        ] }
      ] },
    { link: "provoked response", how: "The US intervened under the Domino Theory.",
      title: "Second Indochina War", summary: "US war and withdrawal.",
      steps: [
        N("ns-c-us", "pol", "US intervention", "1964–73", "Tonkin Gulf (1964); Rolling Thunder; Tet (1968); Vietnamization.", ["ns-2iw"]),
        K("followed by", "The US withdrew after Paris."),
        N("ns-c-sb", "tp", "Saigon falls; SRV", "1975–76", "Paris Accords (1973); SRV proclaimed 12 Jul 1976; c.600,000 North Vietnamese and 58,000 US dead.", ["ns-2iw"])
      ] },
    { link: "intensified", how: "The war engulfed Cambodia and Laos.",
      title: "Cambodia and Laos", summary: "Communist victories.",
      steps: [
        { split: [
          { h: "Cambodia", steps: [
            N("ns-c-sihanouk", "act", "Sihanouk's balancing", "1955–70", "Sangkum won all seats by fraud; allowed NV bases (1966) and US bombing (1969).", ["ns-sihanouk"]),
            K("led to", "He was overthrown by a US-backed general."),
            N("ns-c-lonnol", "evt", "Lon Nol coup", "Mar 1970", "Sihanouk allied with the Khmer Rouge.", ["ns-sihanouk", "ns-khmerrouge"]),
            K("led to", "The Khmer Rouge won and turned on the population."),
            N("ns-c-kr", "res-", "Khmer Rouge genocide", "1975–78", "1–2 million of 8 million died; Vietnam invaded Dec 1978, withdrew by 1992.", ["ns-khmerrouge"])
          ] },
          { h: "Laos", steps: [
            N("ns-c-laos1", "evt", "Coalitions collapse", "1957–63", "1957 coalition broken by US pressure; Kong Le coup (1960) — three-way war.", ["ns-laoscw"]),
            K("led to", "The Pathet Lao won as the US withdrew."),
            N("ns-c-laos2", "res-", "Lao PDR", "Dec 1975", "One-party state with Soviet aid.", ["ns-laoscw"])
          ] }
        ] }
      ] },
    { link: "supports", how: "Legitimacy mattered more than US aid.",
      title: "Verdict", summary: "Civil war, not just aggression.",
      steps: [ N("ns-c-verdict", "judg", "Legitimacy beat aid", null, "Clark Clifford: 'a civil war in Vietnam'; the Domino Theory did not spread beyond Indochina.", ["ns-2iw"]) ] }
  ],
  judge: { prompt: "Why did communism triumph in Indochina? Rank the factors.", factors: ["ns-c-drv", "ns-c-diem", "ns-c-us", "ns-c-lonnol", "ns-c-laos1"],
           notes_view: "Cold War developments (US intervention, North Vietnamese networks, Sino-Soviet split) were decisive in establishing communist states; northern legitimacy mattered more than US aid." },
  historians: [ { who: "Clark Clifford", view: "Vietnam was 'a civil war in Vietnam', not simply communist aggression.", nodes: ["ns-c-verdict"] } ],
  takeaways: [
    "The legitimate, cohesive North outlasted Diem's despotic, US-backed South.",
    "US intervention (1964–73) ended in Saigon's fall (1975) and the SRV (1976).",
    "Cambodia (Lon Nol 1970, Khmer Rouge 1975) and Laos (Lao PDR 1975) also fell to communists."
  ]
});

L.push({
  id: "ns-id2", order: 11, level: 3, parent: "ns-top", kind: "causal",
  title: "Indonesia: Suharto's New Order and its fall",
  question: "How did Suharto consolidate power, and why did he fall in 1998?",
  intro: "Golkar, dwifungsi, oil-funded patronage and Western backing kept Suharto in power until the AFC exposed cronyism and his support collapsed.",
  clusters: [
    { title: "Sources of power", summary: "Golkar, army, patronage.",
      steps: [
        N("ns-o-style", "act", "Suharto's personal rule", "1966–98", "Calculating, 'sultanistic'; loyalty networks ('to the palace one by one').", ["ns-suhartostyle"]),
        K("enabled", "He built three pillars of control."),
        { row: [
          N("ns-o-golkar", "pol", "Golkar elections", "1971–97", "Won every election (65% to 74.5%); opposition merged into PPP and PDI.", ["ns-golkar"]),
          N("ns-o-dwi", "pol", "Dwifungsi", "1958–82", "Half the cabinet and 2/3 of governorships military by the late 1970s.", ["ns-dwifungsi"]),
          N("ns-o-oil", "pol", "Oil-funded patronage", "1973–83", "Oil revenue quadrupled; state share of GDP 13% to 41%; cukong tycoons.", ["ns-dwifungsi"])
        ] }
      ] },
    { link: "enabled", how: "The West backed an anti-communist ally.",
      title: "Cold War backing", summary: "Aid and tolerance.",
      steps: [
        N("ns-o-west", "stc", "Western support", "1966–93", "Ended Konfrontasi; co-founded ASEAN; aid and tolerance of abuses until Clinton's critical stance.", ["ns-suhartocw"])
      ] },
    { link: "constrained", how: "Opposition was contained, not removed.",
      title: "Opposition", summary: "Riots and controls.",
      steps: [
        N("ns-o-opp", "evt", "Protests contained", "1974–94", "Malari (1974), Tanjung Priok (1984); campus controls; keterbukaan and Megawati's PDI.", ["ns-neworderopp"])
      ] },
    { link: "triggered", how: "The financial crisis destroyed the regime's performance legitimacy.",
      title: "Fall", summary: "1997–98.",
      steps: [
        N("ns-o-afc", "trig", "Asian Financial Crisis", "1997", "Exposed cronyism; IMF-forced subsidy cuts sparked protests.", ["ns-suhartofall"]),
        K("led to", "Shootings turned protest into upheaval."),
        N("ns-o-trisakti", "evt", "Trisakti killings, riots", "May 1998", "4 students killed (12 May); ~2,250 dead in riots.", ["ns-suhartofall"]),
        K("led to", "The military abandoned him."),
        N("ns-o-resign", "tp", "Suharto resigns", "21 May 1998", "To Habibie.", ["ns-suhartofall"]),
        K("followed by", "A turbulent democracy followed."),
        N("ns-o-dem", "res±", "Democratic transition", "1998–2001", "PDIP 33.7% vs Golkar 22.4% (1999); Wahid dismissed 2001.", ["ns-indodem"])
      ] }
  ],
  judge: { prompt: "Why did the New Order fall? Rank the factors.", factors: ["ns-o-golkar", "ns-o-dwi", "ns-o-oil", "ns-o-west", "ns-o-afc"],
           notes_view: "Manipulated elections gave only a thin veneer of legitimacy, cronyism proved corrosive, and US support faded after the Cold War — a failure to reform in time." },
  historians: [],
  takeaways: [
    "Golkar, dwifungsi and oil-funded patronage underpinned Suharto's rule.",
    "Western Cold War backing tolerated abuses until the 1990s.",
    "The AFC exposed cronyism; Trisakti and riots forced his resignation (21 May 1998)."
  ]
});

L.push({
  id: "ns-ph2", order: 12, level: 3, parent: "ns-top", kind: "causal",
  title: "Philippines: Marcos's New Society to EDSA",
  question: "How did Marcos hold power, and why was he overthrown in 1986?",
  intro: "Martial law, the military and cronies sustained Marcos; Aquino's murder, a stolen election and military defections brought People Power.",
  clusters: [
    { title: "Sources of power", summary: "Constitution, army, cronies.",
      steps: [
        N("ns-q-1973", "pol", "1973 Constitution", "1973", "Let Marcos hold presidential and prime-ministerial power; KBL (1978) like Golkar.", ["ns-marcosstyle", "ns-marcospower"]),
        K("enabled", "He built an army and a crony economy."),
        { row: [
          N("ns-q-afp", "pol", "Expanded military", "1967–86", "AFP 45,000 to 150,000.", ["ns-marcospower"]),
          N("ns-q-cronies", "pol", "Crony monopolies", "1970s", "Cojuangco, Benedicto, Disini.", ["ns-marcospower"]),
          N("ns-q-us", "stc", "US backing", "1947–80s", "Bases and anti-communism.", ["ns-philcw"])
        ] }
      ] },
    { link: "provoked response", how: "Repression bred opposition and insurgency.",
      title: "Opposition grows", summary: "Prisoners, NPA, Aquino.",
      steps: [
        N("ns-q-prisoners", "pol", "Mass detention", "1972–77", "~70,000 political prisoners by 1977.", ["ns-marcosopp"]),
        K("led to", "Insurgency grew."),
        N("ns-q-npa", "res-", "NPA grows", "1973–86", "Regulars 1,900 to 24,430.", ["ns-marcosopp"]),
        K("followed by", "The opposition leader was murdered."),
        N("ns-q-ninoy", "trig", "Aquino assassinated", "1983", "Opposition rallied around Corazon Aquino and Cardinal Sin.", ["ns-marcosopp"])
      ] },
    { link: "led to", how: "A snap election became the final test.",
      title: "EDSA", summary: "People Power.",
      steps: [
        N("ns-q-snap", "evt", "Fraudulent snap election", "Feb 1986", "Marcos claimed a 1.6m win; tallies showed Aquino ahead by ~800,000.", ["marcos"]),
        K("led to", "Military leaders mutinied."),
        N("ns-q-mutiny", "evt", "Enrile and Ramos mutiny", "22 Feb 1986", "Cardinal Sin called 1m+ onto EDSA.", ["marcos"]),
        K("led to", "Troops and US support withdrew."),
        N("ns-q-flee", "tp", "Marcos flees", "26 Feb 1986", "Bloodless People Power.", ["marcos"])
      ] },
    { link: "followed by", how: "Democracy returned, still elite-dominated.",
      title: "Restored democracy", summary: "Elites return.",
      steps: [
        N("ns-q-after", "res±", "Elite democracy", "1986–2001", "1987 Constitution; coup attempts; US bases ended (1991); EDSA II ousted Estrada (2001).", ["ns-phildem", "ns-philcw"])
      ] }
  ],
  judge: { prompt: "Why did Marcos fall? Rank the factors.", factors: ["ns-q-cronies", "ns-q-us", "ns-q-npa", "ns-q-ninoy", "ns-q-mutiny"],
           notes_view: "US Cold War support propped up an anti-communist strongman but its withdrawal undermined him; mass uprising toppled the regime once legitimacy collapsed." },
  historians: [],
  takeaways: [
    "1973 Constitution, an expanded AFP, crony monopolies and US backing sustained Marcos.",
    "Repression grew the NPA; Aquino's 1983 assassination rallied opposition.",
    "The 1986 snap-election fraud and military mutiny brought People Power."
  ]
});

L.push({
  id: "ns-th2", order: 13, level: 3, parent: "ns-top", kind: "causal",
  title: "Thailand: 1973 to Black May 1992",
  question: "Why did Thailand swing between military and civilian rule after 1973?",
  intro: "Students ended military rule in 1973; democracy collapsed at Thammasat in 1976; Prem managed a hybrid; Black May 1992 restored civilian rule — the King decisive each time.",
  clusters: [
    { title: "1973 uprising", summary: "Students end military rule.",
      steps: [
        N("ns-r-1973", "trig", "October 1973 uprising", "Oct 1973", "500,000+ demonstrators; hundreds killed.", ["ns-thai73"]),
        K("led to", "The King intervened."),
        N("ns-r-king73", "tp", "King orders Thanom out", "Oct 1973", "Ended a quarter-century of military dominance.", ["ns-thai73"])
      ] },
    { link: "followed by", how: "Democracy proved fractious.",
      title: "Democratic interlude", summary: "Collapse at Thammasat.",
      steps: [
        N("ns-r-chaos", "res-", "Fractious democracy", "1974–76", "22 parties (1975); 1,333 strikes and 322 demonstrations.", ["ns-thai76"]),
        K("triggered", "Thanom's return sparked confrontation."),
        N("ns-r-thammasat", "tp", "Thammasat massacre", "6 Oct 1976", "46+ officially dead; coup by Admiral Sangad.", ["ns-thai76"])
      ] },
    { link: "followed by", how: "A managed democracy balanced the elites.",
      title: "Prem", summary: "Managed democracy.",
      steps: [
        N("ns-r-prem", "pol", "Prem's managed democracy", "1980–88", "Balanced military, bureaucracy and business; longest undisputed parliamentary period.", ["ns-prem"]),
        K("led to", "Business gained ground in parliament."),
        N("ns-r-business", "res+", "Business rises", "1979–88", "Business share of seats 1/3 to 2/3; military weakened.", ["ns-prem"])
      ] },
    { link: "followed by", how: "The military struck back against a corrupt civilian government.",
      title: "Black May", summary: "1991–92.",
      steps: [
        N("ns-r-1991", "evt", "NPKC coup", "Feb 1991", "Against Chatichai's corrupt, business-friendly government.", ["ns-blackmay"]),
        K("provoked response", "An unelected general as PM sparked mass protest."),
        N("ns-r-blackmay", "evt", "Black May", "May 1992", "Suchinda as PM; 500,000+ protesters; hundreds killed.", ["ns-blackmay"]),
        K("led to", "The King intervened again."),
        N("ns-r-1992", "tp", "Civilian rule restored", "1992", "Suchinda resigned; Chuan elected; 1997 'People's Constitution'; military budget 22% to 13%.", ["ns-blackmay", "ns-thai92"])
      ] }
  ],
  judge: { prompt: "What drove Thailand's swings between military and civilian rule? Rank the factors.", factors: ["ns-r-1973", "ns-r-chaos", "ns-r-prem", "ns-r-blackmay"],
           notes_view: "Constitutions were tools of whoever held power; popular opposition repeatedly forced change; the monarchy was the decisive moderating force (1973, 1976, 1992)." },
  historians: [],
  takeaways: [
    "1973: students and the King ended military rule.",
    "1976: Thammasat massacre and coup; Prem's managed democracy (1980–88).",
    "1991 coup and Black May 1992; the King decisive each time."
  ]
});

L.push({
  id: "ns-bm2", order: 14, level: 3, parent: "ns-top", kind: "causal",
  title: "Burma: Ne Win's BSPP state",
  question: "How did Ne Win consolidate power, and why did his regime weaken?",
  intro: "Ne Win ruled through one party, a socialist ideology and force; economic failure eroded legitimacy until 1988.",
  clusters: [
    { title: "Sources of power", summary: "Legitimacy, party, ideology.",
      steps: [
        N("ns-w-legit", "act", "Ne Win's legitimacy", "1962", "One of the Thirty Comrades; caretaker record; 'gradual and cautious' (Taylor).", ["ns-newin"]),
        K("enabled", "He built single-party socialism."),
        { row: [
          N("ns-w-bspp", "pol", "BSPP sole party", "1962–74", "Sole legal party from 1964; 1974 Constitution: unitary single-party state.", ["ns-bspp"]),
          N("ns-w-socialism", "pol", "Burmese Way to Socialism", "1962", "Marxism plus Buddhism; nationalised economy; traders expelled.", ["ns-bspp"])
        ] }
      ] },
    { link: "provoked response", how: "Insurgents and students resisted.",
      title: "Challenges", summary: "Met with force.",
      steps: [
        N("ns-w-insurg", "evt", "Insurgency and protest", "1962–75", "KNLA, BCP (~500,000 dead over four decades); student union building destroyed (1962); 1974–75 protests.", ["burmamilitary"])
      ] },
    { link: "undermined", how: "Economic failure drained the regime's legitimacy.",
      title: "Economic failure", summary: "Toward 1988.",
      steps: [
        N("ns-w-trade", "res-", "Economy shrinks", "1962–77", "Foreign trade 40% to 13% of GDP.", ["burmamilitary"]),
        K("intensified", "Demonetisation wiped out savings."),
        N("ns-w-demon", "trig", "Demonetisations", "1985, 1987", "Savings wiped out — leading to 8888.", ["burmamilitary"])
      ] }
  ],
  judge: { prompt: "What kept Ne Win in power, and what undermined him? Rank the factors.", factors: ["ns-w-legit", "ns-w-bspp", "ns-w-socialism", "ns-w-trade", "ns-w-demon"],
           notes_view: "Stable authoritarian cluster: deep ideological and military control with little dependence on US aid or democratic appearances — but economic failure eroded legitimacy." },
  historians: [ { who: "Taylor", view: "Ne Win's style was 'gradual and cautious'.", nodes: ["ns-w-legit"] } ],
  takeaways: [
    "Ne Win's legitimacy (Thirty Comrades, caretaker) underpinned BSPP single-party rule.",
    "The Burmese Way to Socialism nationalised the economy; insurgents met with force.",
    "Economic decline and the 1985/87 demonetisations eroded legitimacy."
  ]
});

L.push({
  id: "ns-bm3", order: 15, level: 3, parent: "ns-top", kind: "causal",
  title: "Burma: 8888, SLORC and SPDC",
  question: "How did the military keep power after 1988 despite losing legitimacy?",
  intro: "Mass protest forced Ne Win out, but SLORC seized power, ignored the NLD's 1990 landslide and ruled by force, ceasefires and mass organisation.",
  clusters: [
    { title: "8888", summary: "Uprising and coup.",
      steps: [
        N("ns-x-8888", "trig", "8888 Uprising", "Mar–Aug 1988", "A tea-shop brawl escalated nationwide; Sein Lwin's crackdown killed up to 3,000.", ["ns-8888"]),
        K("led to", "Ne Win stepped down."),
        N("ns-x-resign", "evt", "Ne Win resigns", "23 Jul 1988", "Protest continued.", ["ns-8888"]),
        K("provoked response", "The army seized power outright."),
        N("ns-x-slorc", "tp", "SLORC coup", "18 Sep 1988", "Saw Maung; NLD formed 28 Sep.", ["ns-8888"])
      ] },
    { link: "followed by", how: "SLORC allowed an election — and ignored it.",
      title: "1990 election", summary: "Landslide ignored.",
      steps: [
        N("ns-x-1990", "evt", "NLD landslide", "May 1990", "392 of 485 seats (70% turnout); NUP 10.", ["ns-slorc"]),
        K("provoked response", "SLORC refused to hand over."),
        N("ns-x-refuse", "res-", "Power kept by force", "1989–2002", "Martial law; Suu Kyi under house arrest 1989–95, 2000–02.", ["ns-slorc"])
      ] },
    { link: "followed by", how: "SLORC built control beyond coercion.",
      title: "Control", summary: "Ceasefires and mass organisation.",
      steps: [
        { row: [
          N("ns-x-cease", "pol", "Ceasefires", "early 1990s", "With 17 of 21 armed groups.", ["ns-slorc"]),
          N("ns-x-usda", "pol", "USDA", "1993", "11m members by 1999.", ["ns-spdc"])
        ] },
        K("constrained", "International pressure grew after the Cold War."),
        N("ns-x-intl", "res±", "Scrutiny and survival", "1991–2021", "Suu Kyi's Nobel (1991); ASEAN (1997) eased sanctions; SPDC (1997); 2010 elections; coup 2021.", ["ns-spdc"])
      ] },
    { link: "supports", how: "Weighing coercion against legitimacy.",
      title: "Verdict", summary: "Coercion is not legitimacy.",
      steps: [ N("ns-x-verdict", "judg", "Coercion papered over lost legitimacy", null, "Legitimacy and coercive capacity are not the same; the end of the Cold War brought more scrutiny.", ["ns-conclusion"]) ] }
  ],
  judge: { prompt: "How did the military survive after 1988? Rank the factors.", factors: ["ns-x-slorc", "ns-x-refuse", "ns-x-cease", "ns-x-usda", "ns-x-intl"],
           notes_view: "Coercion papered over Burma's loss of legitimacy only until 2010/2021; the end of the Cold War brought greater international scrutiny." },
  historians: [],
  takeaways: [
    "8888 forced Ne Win out; SLORC seized power (18 Sep 1988).",
    "SLORC ignored the NLD's 1990 landslide (392/485).",
    "Ceasefires and the USDA kept control, but legitimacy ≠ coercion."
  ]
});

L.push({
  id: "ns-vn", order: 16, level: 3, parent: "ns-top", kind: "causal",
  title: "Vietnam: the SRV and Doi Moi",
  question: "How did the VCP keep power despite early failures after 1976?",
  intro: "An orthodox Party struggled to absorb the South and was isolated after invading Cambodia; Doi Moi opened the economy while keeping Party supremacy.",
  clusters: [
    { title: "Party state", summary: "Collective, orthodox control.",
      steps: [
        N("ns-y-srv", "pol", "SRV's Party state", "1976–86", "Collective leadership; VCP 92% of Assembly seats; 'the party must always control the gun'.", ["ns-srv", "ns-clusterb"])
      ] },
    { link: "followed by", how: "Reintegrating the South went badly.",
      title: "Failure and isolation", summary: "South resists; Cambodia.",
      steps: [
        N("ns-y-south", "res-", "Southern failure", "1976–82", "Re-education camps; 0.6% of Mekong households in cooperatives; rice 11.83m to 9.79m t; boat people.", ["doimoipol"]),
        K("intensified", "Invading Cambodia isolated Vietnam."),
        N("ns-y-isolate", "res-", "Isolation", "1978–95", "US embargo till 1995; total dependence on Soviet aid.", ["doimoipol"])
      ] },
    { link: "provoked response", how: "A new leader opened the economy.",
      title: "Doi Moi", summary: "Economic opening, Party control.",
      steps: [
        N("ns-y-linh", "act", "Nguyen Van Linh", "1986", "After Le Duan's death; Doi Moi like Deng's China.", ["ns-doimoi"]),
        K("led to", "Market reforms followed."),
        N("ns-y-reforms", "pol", "Market reforms", "1987–94", "Resolution 10 (1988); investment law; SOEs halved (12,000 to 6,000).", ["ns-doimoi"]),
        K("followed by", "Limited political opening, with control kept."),
        N("ns-y-1992", "pol", "1992 Constitution", "1992", "Wider Assembly powers; 8% non-party seats; 'Gorbachev-phobia'.", ["ns-doimoi"]),
        K("led to", "Leaving Cambodia ended isolation."),
        N("ns-y-normal", "res+", "ASEAN and US ties", "1995", "Withdrawal 1989–91; ASEAN and US normalisation 1995.", ["ns-doimoi"])
      ] }
  ],
  judge: { prompt: "Why did the VCP survive? Rank the factors.", factors: ["ns-y-srv", "ns-y-linh", "ns-y-reforms", "ns-y-1992", "ns-y-normal"],
           notes_view: "Stable authoritarian cluster and the best example of adaptation: economic opening without losing political control (like China, unlike the USSR), rooted in historical legitimacy." },
  historians: [],
  takeaways: [
    "An orthodox Party state (VCP 92% of seats) failed to absorb the South.",
    "Cambodia (1978) isolated Vietnam until 1995.",
    "Doi Moi opened the economy while keeping Party supremacy — adaptation."
  ]
});

L.push({
  id: "ns-my", order: 17, level: 3, parent: "ns-top", kind: "causal",
  title: "Malaysia: 13 May and semi-democracy",
  question: "How did Malaysia's ruling coalition consolidate power after 1969?",
  intro: "The ethnic bargain broke in 1969; the BN narrowed debate, redistributed wealth and co-opted rivals while keeping elections — a semi-democracy.",
  clusters: [
    { title: "The bargain breaks", summary: "1957–1969.",
      steps: [
        N("ns-m-contract", "ctx", "Social Contract", "1957", "Malay primacy (Section 153) for Chinese economic power and citizenship.", ["ns-msia5769"]),
        K("undermined", "Ultras, the DAP and merger tensions strained it."),
        N("ns-m-1969", "trig", "13 May 1969", "1969", "MCA lost ground to Gerakan/DAP; riots: 196 dead officially (600–800 unofficially).", ["may13"]),
        K("led to", "Emergency rule followed."),
        N("ns-m-noc", "pol", "NOC/MAGERAN", "1969–71", "Parliament suspended; Tun Razak ruled; Tunku resigned.", ["may13"])
      ] },
    { link: "provoked response", how: "The new leaders rebuilt power on new foundations.",
      title: "Sources of power", summary: "Limits, NEP, BN.",
      steps: [
        { row: [
          N("ns-m-amend", "pol", "1971 Amendment Act", "1971", "Banned discussion of sensitive issues.", ["ns-msiasources"]),
          N("ns-m-nep", "pol", "NEP", "1971–90", "Bumiputera equity 1.5% to 20.3%, with cronyism.", ["ns-msiasources"]),
          N("ns-m-bn", "pol", "Barisan Nasional", "1 Jun 1974", "Co-opted all but the DAP; tilted elections.", ["ns-msiasources"])
        ] }
      ] },
    { link: "constrained", how: "Challenges were met with coercive laws.",
      title: "Challenges", summary: "Lalang and Reformasi.",
      steps: [
        N("ns-m-lalang", "evt", "Operation Lalang", "1987", "UMNO split; judges sacked; 100+ held under the ISA.", ["ns-msiachall"]),
        K("followed by", "A decade later a new challenge emerged."),
        N("ns-m-reformasi", "evt", "Reformasi", "1998–99", "Anwar sacked and jailed; BN kept 2/3 in 1999 via Chinese/Indian votes.", ["ns-msiachall"])
      ] },
    { link: "supports", how: "Weighing control against legitimacy.",
      title: "Verdict", summary: "Semi-democracy.",
      steps: [ N("ns-m-verdict", "judg", "Narrowed but legitimate channels", null, "Elections narrowed debate but offered legitimate opposition channels, unlike Indonesia/Philippines.", ["ns-msiachall", "ns-semidem"]) ] }
  ],
  judge: { prompt: "What best explains BN's durability? Rank the factors.", factors: ["ns-m-amend", "ns-m-nep", "ns-m-bn", "ns-m-lalang"],
           notes_view: "Constitutional and electoral processes stabilised Malaysia by narrowing debate while offering legitimate opposition channels — unlike Indonesia/Philippines, where crises meant regime replacement." },
  historians: [ { who: "William Case", view: "Malaysia is a 'semi-democracy' borrowing democratic features to avoid democracy.", nodes: ["ns-m-verdict"] } ],
  takeaways: [
    "The 1957 Social Contract broke down in 13 May 1969.",
    "The 1971 Amendment Act, the NEP and the BN (1974) consolidated power.",
    "Lalang (1987) and Reformasi (1998) were contained — a semi-democracy."
  ]
});

L.push({
  id: "ns-sg", order: 18, level: 3, parent: "ns-top", kind: "causal",
  title: "Singapore: the PAP's semi-democracy",
  question: "How did the PAP consolidate one-party dominance after 1965?",
  intro: "The politics of survival, coercive laws, social controls and constitutional innovations kept the PAP dominant while allowing controlled diversity.",
  clusters: [
    { title: "Politics of survival", summary: "Vulnerability.",
      steps: [
        N("ns-g-vuln", "ctx", "Separation and British withdrawal", "1965–68", "Created vulnerability and depoliticised the public.", ["ns-sgsurvival"]),
        K("enabled", "The PAP dominated parliament."),
        N("ns-g-allseats", "res+", "PAP holds every seat", "1968–80", "All seats in 1968, 1972, 1976, 1980.", ["ns-sgsurvival"])
      ] },
    { link: "followed by", how: "Control extended into law, society and media.",
      title: "Controls", summary: "Laws, grassroots, labour, press.",
      steps: [
        { row: [
          N("ns-g-isa", "pol", "Coercive laws", "1963–90", "ISA (Cold Store 1963; Spectrum 1987, 22 held); Sedition Act; Religious Harmony Act.", ["ns-sgsurvival"]),
          N("ns-g-grass", "pol", "Grassroots and labour", "1960–78", "People's Association; CCCs; NTUC and NWC depoliticised labour.", ["ns-sgsocial"]),
          N("ns-g-press", "pol", "Press controls", "1974", "Newspapers and Printing Presses Act.", ["ns-sgsocial"])
        ] }
      ] },
    { link: "provoked response", how: "When opposition re-emerged, the PAP adapted.",
      title: "Opposition and adaptation", summary: "Controlled diversity.",
      steps: [
        N("ns-g-jbj", "evt", "Jeyaretnam wins Anson", "1981", "Ended the monopoly; opposition peaked at 4 seats (1991).", ["ns-sgopp"]),
        K("provoked response", "The PAP adjusted the system."),
        N("ns-g-reforms", "pol", "NCMP, GRC, NMP, Elected President", "1984–93", "Controlled diversity; defamation suits (Tang Liang Hong 1997).", ["ns-sgsurvival", "ns-sgopp"])
      ] },
    { link: "supports", how: "Weighing the system.",
      title: "Verdict", summary: "Semi-democracy.",
      steps: [ N("ns-g-verdict", "judg", "Tilted but adaptive", null, "Impeccably conducted but tilted elections, periodic adjustment and an apolitical SAF extended PAP rule.", ["ns-sgopp", "ns-semidem"]) ] }
  ],
  judge: { prompt: "What best explains PAP dominance? Rank the factors.", factors: ["ns-g-vuln", "ns-g-isa", "ns-g-grass", "ns-g-reforms"],
           notes_view: "Tilted but impeccably conducted elections and periodic adjustments extended PAP rule, while the apolitical SAF removed the military as a rival power source (Case: semi-democracy)." },
  historians: [ { who: "William Case", view: "Singapore 'borrows cunningly some features of democracy in order substantively to avoid it'.", nodes: ["ns-g-verdict"] } ],
  takeaways: [
    "Separation and British withdrawal created a politics of survival; PAP held every seat 1968–80.",
    "ISA, grassroots bodies, NTUC and press laws controlled society.",
    "After 1981 the PAP adapted (NCMP, GRC, NMP, Elected President)."
  ]
});

L.push({
  id: "ns-decol", order: 19, level: 1, parent: "ns-top", kind: "matrix",
  title: "Decolonisation compared",
  question: "How did decolonisation differ, and what did it leave behind?",
  intro: "Cluster, communists and the military's role at independence, by country.",
  matrix: {
    cols: ["Cluster", "Communists", "Military"],
    rows: [
      { h: "Philippines", cells: ["Peaceful, with tutelage", "Huks defeated (1954)", "AFP apolitical, US-aligned"] },
      { h: "Malaya", cells: ["Peaceful, with tutelage", "MCP defeated in Emergency", "Under British command"] },
      { h: "Singapore", cells: ["Peaceful, with tutelage", "Left broken (Cold Store 1963)", "British; SAF only after 1965"] },
      { h: "Burma", cells: ["Peaceful, without tutelage", "Expelled from AFPFL (1946)", "BIA/BNA an independent power"] },
      { h: "Cambodia", cells: ["Peaceful, without tutelage", "Later Khmer Rouge", "Royal; Lon Nol coup 1970"] },
      { h: "Laos", cells: ["Peaceful, without tutelage", "Pathet Lao rival government", "Three-way civil war"] },
      { h: "Indonesia", cells: ["Violent re-imposition", "Madiun crushed (1948)", "Legitimised, politicised (PETA)"] },
      { h: "Vietnam", cells: ["Violent re-imposition", "Led the revolution", "'Party commands the gun'"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "Tutelage plus colonial suppression of communists gave apolitical militaries.",
    "Hasty withdrawal left little constitutional experience (Burma, Cambodia, Laos).",
    "Violent re-imposition legitimised the army (Indonesia) or the Party (Vietnam)."
  ]
});

L.push({
  id: "ns-compare", order: 20, level: 1, parent: "ns-top", kind: "matrix",
  title: "Consolidation clusters compared",
  question: "How did the three consolidation clusters differ?",
  intro: "Leaders, legitimacy, opposition, Cold War and outcome by cluster, from the notes' synthesis.",
  matrix: {
    cols: ["Indonesia, Philippines, Thailand", "Burma, Vietnam", "Singapore, Malaysia"],
    rows: [
      { h: "Leaders", cells: ["Personalistic (Sukarno, Marcos, Sarit)", "Institutional (VCP, Tatmadaw)", "Constitutionally constrained"] },
      { h: "Legitimacy", cells: ["Manipulated elections + patronage", "Single-party ideology", "Genuine but constrained elections"] },
      { h: "Opposition", cells: ["Uprisings topple regimes", "Suppressed", "Channelled into elections"] },
      { h: "Military", cells: ["Independent political force", "Burma: rulers; Vietnam: Party-controlled", "Professional, apolitical"] },
      { h: "Cold War", cells: ["US aid propped strongmen, then withdrew", "Isolation / Soviet patronage", "Stable alignment"] },
      { h: "Outcome by 2000", cells: ["Reverted to democracy", "Stable authoritarian", "Stable semi-democracy"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "Personalistic regimes fell to uprisings once legitimacy collapsed (1986, 1998, 1973/1992).",
    "Institutional, ideological regimes (VCP, Tatmadaw) proved resilient.",
    "Semi-democracies channelled opposition into tilted but real elections."
  ]
});

L.push({
  id: "ns-arg", order: 21, level: 1, parent: "ns-top", kind: "argument",
  title: "Did decolonisation decide the outcome?",
  question: "'The experience of decolonisation determined the forms of government in SEA.' How far do you agree?",
  intro: "Weigh decolonisation against elites, masses and the Cold War, and against later adaptation.",
  clusters: [
    { title: "Claim", summary: "Decolonisation decided it.",
      steps: [ N("ns-z-claim", "judg", "Decolonisation decisive", null, "The experience of decolonisation determined the forms of government in SEA.", ["ns-factors"]) ] },
    { link: "supports", how: "Test the claim against the cases.",
      title: "For and against", summary: "Starting conditions vs later choices.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("ns-z-violent", "evid", "Violent decolonisation legitimised army/Party", null, "Indonesia's army and Vietnam's VCP rose from revolutionary struggle.", ["ns-clusters"]),
            K("supports", "Hasty exits left unprepared states."),
            N("ns-z-hasty", "evid", "Hasty exits", null, "Burma's sub-3-year withdrawal left no power-sharing design.", ["ns-burmaconst"]),
            K("supports", "Tutelage left apolitical militaries."),
            N("ns-z-tut", "evid", "Tutelage left apolitical militaries", null, "Malaysia and Singapore stayed (semi-)democratic.", ["ns-clusters"])
          ] },
          { h: "Against", steps: [
            N("ns-z-ph", "evid", "Philippines turned authoritarian", null, "Despite long tutelage — martial law 1972.", ["ns-conclusion", "ns-martiallaw"]),
            K("contradicts", "Thailand was never colonised yet became military-ruled."),
            N("ns-z-th", "evid", "Thailand never colonised", null, "Elite rivalry and US aid drove military rule.", ["ns-thaimil"]),
            K("contradicts", "Later adaptation decided survival."),
            N("ns-z-adapt", "evid", "Adaptation decided durability", null, "Doi Moi and SG/MY electoral adjustments vs Suharto/Marcos failing to reform.", ["ns-conclusion"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both sides.",
      title: "Judgement", summary: "Starting point, not destiny.",
      steps: [
        N("ns-z-judge", "judg", "Initial conditions, not destiny", null, "Decolonisation set initial conditions; elites' ability to compromise was critical; the Cold War amplified; adaptability decided durability.", ["ns-conclusion", "ns-military"])
      ] }
  ],
  judge: { prompt: "How far did decolonisation determine forms of government? Rank the evidence.", factors: ["ns-z-violent", "ns-z-hasty", "ns-z-tut", "ns-z-ph", "ns-z-th", "ns-z-adapt"],
           notes_view: "Decolonisation set initial conditions but did not determine long-term stability; the critical variable was elites' ability to compromise; the Cold War was an amplifier; success correlated with capacity to adapt." },
  historians: [ { who: "Clark Clifford", view: "Vietnam was 'a civil war' — the Domino Theory did not materialise beyond Indochina.", nodes: ["ns-z-judge"] } ],
  takeaways: [
    "For: violent decolonisation legitimised army/Party; hasty exits left unprepared states.",
    "Against: the Philippines (tutelage) still turned authoritarian; Thailand was never colonised.",
    "Best answer: initial conditions, not destiny — elites and adaptability decided."
  ]
});
})();
