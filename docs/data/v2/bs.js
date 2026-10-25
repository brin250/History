// v2 flow charts: the Bosnian War (from Bosnian_War_Study_Notes; cards in data/bs.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).bs = window.FLOWS2.bs || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "bs-top", order: 1, level: 0, kind: "causal",
  title: "The Bosnian War, 1992–1995",
  question: "Why did the Bosnian War occur, and how effective were attempts to manage it?",
  intro: "Yugoslavia's collapse turned Bosnia's three communities against each other; diplomacy and peacekeeping failed until US-led force produced Dayton.",
  clusters: [
    { title: "Causes", summary: "Politics, economics, nationalism.",
      steps: [
        N("bs-t-causes", "ltc", "Three categories of cause", "1974–1992", "Domestic politics, economic crisis, and ethnic and religious nationalisms.", ["bs-causes-summary", "bs-syllabus"], { go: "bs-causes" }),
        K("led to", "Bosnia's independence triggered war between three rival entities."),
        N("bs-t-outbreak", "tp", "Independence and war", "Mar–Apr 1992", "Referendum boycotted by Serbs; recognition on 6 Apr; Sarajevo besieged.", ["referendum92", "bs-outbreak"], { go: "bs-outbreak" })
      ] },
    { link: "followed by", how: "Three entities fought, largely through ethnic cleansing.",
      title: "The war", summary: "Entities, sieges, cleansing.",
      steps: [
        { row: [
          N("bs-t-rs", "act", "Republika Srpska", "1991–92", "Bosnian Serb state; Six Strategic Objectives.", ["bs-rs-formation"], { go: "bs-rs" }),
          N("bs-t-hb", "act", "Herzeg-Bosnia", "1991–92", "Bosnian Croat quasi-state; HVO.", ["bs-herzeg-bosnia"], { go: "bs-hb" })
        ] },
        K("led to", "Rival state projects were pursued through violence against civilians."),
        { row: [
          N("bs-t-sarajevo", "evt", "Siege of Sarajevo", "1992–96", "13,952 killed.", ["sarajevo"], { go: "bs-sarajevo" }),
          N("bs-t-clean", "evt", "Serb ethnic cleansing", "1992", "700,000–1,000,000 Bosniaks expelled.", ["bs-serb-cleansing"], { go: "bs-cleansing" }),
          N("bs-t-cb", "evt", "Croat–Bosniak war", "1992–94", "A 'war within a war'.", ["croatbosniak"], { go: "bs-croatbosniak" }),
          N("bs-t-sreb", "evt", "Srebrenica genocide", "Jul 1995", "~8,000 men and boys killed.", ["srebrenica"], { go: "bs-srebrenica" })
        ] }
      ] },
    { link: "provoked response", how: "Outside actors tried diplomacy, sanctions, peacekeeping and finally force.",
      title: "Conflict management", summary: "From failure to Dayton.",
      steps: [
        { split: [
          { h: "Diplomacy", steps: [
            N("bs-t-med", "pol", "Peace plans", "1992–94", "Carrington-Cutiliero, Vance-Owen, Owen-Stoltenberg, Contact Group.", ["bs-carrington", "vanceowen", "contactgroup"], { go: "bs-mediation" }),
            K("followed by", "The US brokered a Bosniak–Croat peace."),
            N("bs-t-wash", "pol", "Washington Agreement", "Mar 1994", "Created the Federation.", ["bs-washington"], { go: "bs-washington" })
          ] },
          { h: "Pressure", steps: [
            N("bs-t-sanc", "pol", "Sanctions, embargo", "1992–95", "Did not deter aggression.", ["bs-sanctions"], { go: "bs-sanctions" }),
            K("followed by", "Peacekeepers protected aid, not people."),
            N("bs-t-unp", "pol", "UNPROFOR, safe areas", "1992–95", "Aid protected; safe areas never secured.", ["bs-unprofor-res", "bs-unprofor-lim"], { go: "bs-unprofor" })
          ] },
          { h: "Force", steps: [
            N("bs-t-nato", "pol", "NATO escalation", "1992–95", "Monitoring, enforcement, then combat.", ["bs-nato-combat"], { go: "bs-nato" }),
            K("led to", "Force on the ground and in the air brought the parties to Dayton."),
            N("bs-t-dayton", "tp", "Storm, Deliberate Force, Dayton", "1995", "Dayton ended a war of 250,000+ dead.", ["dayton", "nato95"], { go: "bs-endgame" })
          ] }
        ] }
      ] },
    { link: "supports", how: "Comparing the actors shows what worked.",
      title: "Verdict", summary: "Force, not mediation, ended it.",
      steps: [
        N("bs-t-actors", "int", "The actors compared", null, "EC, UN, Contact Group, NATO, US, Russia, Serbia.", ["bs-players-summary"], { go: "bs-actors" }),
        K("supports", "The record points to US-led force."),
        N("bs-t-verdict", "judg", "Force made Dayton possible", null, "The international community 'attempted, but failed, to reconcile' mutually exclusive principles until force changed the balance.", ["bs-outbreak", "bs-players-summary"], { go: "bs-arg" })
      ] }
  ],
  judge: { prompt: "What did most to end the Bosnian War? Rank them.", factors: ["bs-t-med", "bs-t-wash", "bs-t-sanc", "bs-t-unp", "bs-t-dayton"],
           notes_view: "Failed EC/UN mediation, sanctions and a humanitarian-only UNPROFOR gave way to US-led diplomacy and NATO force; Operation Storm and Deliberate Force pushed the parties to Dayton." },
  historians: [],
  takeaways: [
    "Causes: domestic politics, economic crisis and ethnic/religious nationalisms.",
    "Bosniaks 44%, Serbs 31%, Croats 17% — three rival state projects fought through ethnic cleansing.",
    "Mediation and UNPROFOR failed; US-led force (Storm, Deliberate Force) produced Dayton."
  ]
});

L.push({
  id: "bs-causes", order: 2, level: 1, parent: "bs-top", kind: "causal",
  title: "Causes of the Bosnian War",
  question: "Why did the Bosnian War occur?",
  intro: "Devolution and the end of the Cold War weakened Yugoslavia; debt and austerity discredited communism; suppressed national grievances resurfaced through nationalist parties.",
  clusters: [
    { title: "Three causes", summary: "Politics, economics, nationalism.",
      steps: [
        { split: [
          { h: "Domestic politics", steps: [ N("bs-c-pol", "ltc", "Devolution and collapse", "1974–1990", "Post-Tito devolution; Eastern Bloc collapse; 1990 Congress split; nationalist election wins.", ["bs-communism-collapse", "bs-14th-congress"], { go: "bs-collapse" }) ] },
          { h: "Economic interests", steps: [ N("bs-c-econ", "ltc", "Debt, austerity, inequality", "1970s–1990", "US$21bn debt; IMF austerity; failed Marković reforms; Slovenia $12,383 vs Kosovo $1,592.", ["bs-debt", "bs-inequality"], { go: "bs-collapse" }) ] },
          { h: "Ethnic and religious", steps: [ N("bs-c-eth", "ltc", "Layered grievances", "14th c.–1990", "Ottoman, Habsburg, Serbian-monarchy and WWII legacies suppressed, not resolved.", ["bs-ottoman-habsburg", "bs-20c-tensions"], { go: "bs-ethnic" }) ] }
        ] }
      ] },
    { link: "led to", how: "Together they broke Yugoslavia apart.",
      title: "Yugoslavia breaks up", summary: "Independence declarations.",
      steps: [
        N("bs-c-break", "res-", "Yugoslavia dissolves", "1991–Jan 1992", "Slovenia, Croatia, Bosnia, Macedonia declare independence; war first in Croatia.", ["bs-breakdown", "yugoslavcollapse"])
      ] },
    { link: "intensified", how: "Bosnia's mix of peoples made it the most vulnerable republic.",
      title: "Bosnia's vulnerability", summary: "Most multi-ethnic.",
      steps: [
        N("bs-c-mix", "ctx", "Most multi-ethnic republic", "1991", "Bosniaks 44%, Serbs 31%, Croats 17%; between Serbia and Croatia.", ["bs-multiethnic"]),
        K("triggered", "Independence collided with Serb self-determination."),
        N("bs-c-war", "tp", "War", "Apr 1992", "Recognition and the siege of Sarajevo.", ["bs-outbreak", "referendum92"])
      ] }
  ],
  judge: { prompt: "Which cause of the Bosnian War mattered most? Rank them.", factors: ["bs-c-pol", "bs-c-econ", "bs-c-eth", "bs-c-mix"],
           notes_view: "The notes group causes into domestic politics, economic interests and ethnic/religious nationalisms; communist suppression meant tensions resurfaced, and the SDS plan shows premeditated mobilisation." },
  historians: [ { who: "Burg and Shoup", view: "Ethnic conflict is a struggle between mobilised identity groups for power.", nodes: ["bs-c-war"] } ],
  takeaways: [
    "Domestic: post-Tito devolution, Eastern Bloc collapse, 1990 nationalist victories.",
    "Economic: US$21bn debt, IMF austerity, inequality, failed reforms.",
    "Ethnic: layered grievances suppressed under communism resurfaced."
  ]
});

L.push({
  id: "bs-collapse", order: 3, level: 3, parent: "bs-top", kind: "causal",
  title: "Collapse of Yugoslavia, 1980–1992",
  question: "How did economic crisis and political breakdown destroy Yugoslavia?",
  intro: "Debt, austerity and the loss of Western support discredited the communists; the 1990 Congress split and nationalist elections led to secession and war.",
  clusters: [
    { title: "Economic crisis", summary: "Debt and austerity.",
      steps: [
        N("bs-y-growth", "ctx", "Growth and borrowing", "1960–80", "Growth averaged 6.1%; debt estimated US$6bn turned out US$21bn.", ["bs-debt"]),
        K("led to", "Debt forced IMF austerity."),
        N("bs-y-imf", "pol", "IMF austerity", "1980s", "Resentment of elites' reckless borrowing.", ["bs-debt"]),
        K("intensified", "A scandal exposed elite corruption."),
        N("bs-y-agro", "evt", "Agrokomerc affair", "1987", "Promissory notes worth almost US$1bn without collateral; strikes 1987–88.", ["bs-debt"])
      ] },
    { link: "intensified", how: "The end of the Cold War removed outside support.",
      title: "End of the Cold War", summary: "Western support withdrawn.",
      steps: [
        N("bs-y-gorb", "stc", "Gorbachev and 1989", "1985–91", "The West no longer needed a non-Soviet communist example; debt restructuring less generous.", ["bs-end-coldwar-econ", "bs-communism-collapse"]),
        K("led to", "Without the Soviet threat, the incentive for unity vanished."),
        N("bs-y-nounity", "res-", "No reason to stay together", "1989–90", "Western attention and money moved to Eastern Europe.", ["bs-communism-collapse"])
      ] },
    { link: "followed by", how: "A reform drive briefly helped, then failed.",
      title: "Marković's reforms", summary: "Short-term gains.",
      steps: [
        N("bs-y-mark", "pol", "Marković's reforms", "1989–90", "Devaluation, wage freeze, cuts; inflation zero by Apr 1990.", ["bs-markovic"]),
        K("undermined", "Serbia sabotaged the reforms."),
        N("bs-y-serbia", "evt", "Serbia's obstruction", "1990", "Took $1.5bn from the central bank; duties on Croatian/Slovene goods; inflation back to 120% a year.", ["bs-markovic"])
      ] },
    { link: "intensified", how: "The federation's political institutions then broke.",
      title: "Political breakdown", summary: "Congress split; nationalists win.",
      steps: [
        N("bs-y-14th", "tp", "14th Congress walkout", "Jan 1990", "Milošević's 'one person, one vote' vs devolution; Slovenes and Croats walked out, dissolving the party.", ["bs-14th-congress"]),
        K("led to", "Republics held free elections."),
        N("bs-y-elect", "evt", "1990 elections", "1990", "Nationalists won except in Serbia and Montenegro; Kučan, Tuđman for autonomy.", ["bs-14th-congress", "bs-breakdown"]),
        K("led to", "Republics declared independence."),
        N("bs-y-end", "res-", "SFRY dissolves", "Jun 1991–Jan 1992", "Croatian War first; Germany recognised Croatia and Slovenia.", ["bs-breakdown", "yugoslavcollapse"])
      ] }
  ],
  judge: { prompt: "What did most to destroy Yugoslavia? Rank the factors.", factors: ["bs-y-imf", "bs-y-gorb", "bs-y-serbia", "bs-y-14th", "bs-y-elect"],
           notes_view: "The end of the Cold War removed both Western financial support and the external incentive for unity; economic crisis and the 1990 political breakdown did the rest." },
  historians: [],
  takeaways: [
    "Debt (US$21bn), IMF austerity and Agrokomerc discredited the communists.",
    "After Gorbachev the West withdrew support; unity lost its rationale.",
    "The Jan 1990 Congress walkout and nationalist elections led to secession."
  ]
});

L.push({
  id: "bs-ethnic", order: 4, level: 3, parent: "bs-top", kind: "causal",
  title: "Ethnic and religious roots; the nationalist parties",
  question: "How did ethnic and religious nationalism drive Bosnia toward war?",
  intro: "Centuries of layered rule left grievances that communism suppressed; in 1990 they returned through nationalist parties, and the SDS planned a takeover.",
  clusters: [
    { title: "Historical layers", summary: "Ottoman to WWII.",
      steps: [
        { row: [
          N("bs-e-ott", "ltc", "Ottoman rule", "~400 years", "Islam prominent, but religious tolerance.", ["bs-ottoman-habsburg"]),
          N("bs-e-habs", "ltc", "Habsburg rule", "from 1878", "Promoted Catholicism; Catholic–Orthodox tension.", ["bs-ottoman-habsburg"]),
          N("bs-e-ww", "ltc", "Serbian monarchy and WWII", "1918–45", "Centralised Serb rule; Axis occupation and collaboration.", ["bs-20c-tensions"])
        ] },
        K("constrained", "Communism suppressed rather than resolved the grievances."),
        N("bs-e-supp", "res-", "Tensions suppressed", "1945–1980s", "Resurfaced in the late 1980s; religion tied to national identity.", ["bs-20c-tensions"])
      ] },
    { link: "led to", how: "Free elections let suppressed identities organise.",
      title: "Nationalist parties", summary: "SDA, HDZ, SDS.",
      steps: [
        { row: [
          N("bs-e-sda", "act", "SDA (Izetbegović)", "26 May 1990", "'Party of Muslim cultural-historic circle'.", ["bs-parties"]),
          N("bs-e-hdz", "act", "HDZ (Kljuić)", "18 Aug 1990", "Bosnian Croat nationalists.", ["bs-parties"]),
          N("bs-e-sds", "act", "SDS (Karadžić)", "1990", "Keep Bosnian Serbs in Yugoslavia.", ["bs-parties"])
        ] },
        K("led to", "Nationalists won Bosnia's first free election."),
        N("bs-e-1990", "evt", "Nationalist victory", "Nov 1990", "First free elections put the three nationalist parties in power.", ["bs-parties"])
      ] },
    { link: "provoked response", how: "As Bosnia moved toward independence, the SDS prepared to resist.",
      title: "SDS takeover plan", summary: "Premeditated mobilisation.",
      steps: [
        N("bs-e-sar", "pol", "Serb Autonomous Regions", "from Sep 1991", "Set up throughout Bosnia.", ["bs-sds-plan"]),
        K("followed by", "A secret plan prepared for war."),
        N("bs-e-plan", "pol", "Top-secret takeover plan", "Dec 1991", "Shadow governments, 'crisis headquarters', coordination with the JNA.", ["bs-sds-plan"]),
        K("supports", "It shows the mobilisation was planned."),
        N("bs-e-verdict", "judg", "Premeditated ethnic mobilisation", null, "Ethnic and religious nationalism was politicised directly ahead of the war.", ["bs-sds-plan", "bs-causes-summary"])
      ] }
  ],
  judge: { prompt: "How far was ethnic nationalism the main cause? Rank the factors.", factors: ["bs-e-supp", "bs-e-1990", "bs-e-sar", "bs-e-plan"],
           notes_view: "Layered Ottoman, Austro-Hungarian, Serbian-monarchy and WWII grievances were suppressed, not resolved; the SDS's secret plan shows premeditated ethnic mobilisation." },
  historians: [],
  takeaways: [
    "Ottoman, Habsburg, Serbian-monarchy and WWII legacies left layered grievances.",
    "Communism suppressed them; 1990 elections brought SDA, HDZ and SDS to power.",
    "The SDS's Dec 1991 plan shows premeditated mobilisation."
  ]
});

L.push({
  id: "bs-rs", order: 5, level: 3, parent: "bs-top", kind: "causal",
  title: "Republika Srpska and its war aims",
  question: "How was Republika Srpska formed, and what were its aims?",
  intro: "Bosnian Serbs built their own assembly, referendum and republic to stay with Yugoslavia, then set six war aims that explain ethnic cleansing.",
  clusters: [
    { title: "Building a Serb state", summary: "Assembly to republic.",
      steps: [
        N("bs-r-assembly", "pol", "Serb Assembly", "24 Oct 1991", "After Bosnia's sovereignty vote; SDS: constitution needed unanimity of all three sides.", ["bs-rs-formation", "bs-sds-plan"]),
        K("followed by", "A Serb referendum followed."),
        N("bs-r-ref", "evt", "Serb referendum", "9–10 Nov 1991", "Overwhelmingly to stay with Serbia and Montenegro; Bosnian government called it illegal.", ["bs-competition"]),
        K("led to", "A Serb republic was proclaimed."),
        N("bs-r-procl", "pol", "Republic proclaimed", "9 Jan 1992", "Constitution 28 Feb 1992; independence 7 Apr; renamed Republika Srpska 12 Aug.", ["bs-rs-formation", "bs-competition"])
      ] },
    { link: "led to", how: "The new state set war aims and an army.",
      title: "War aims", summary: "Six Strategic Objectives.",
      steps: [
        N("bs-r-six", "pol", "Six Strategic Objectives", "12 May 1992", "Separate borders; corridors; Una/Neretva border; divided Sarajevo; sea access.", ["bs-six-objectives"]),
        K("enabled", "An army was created to achieve them."),
        N("bs-r-vrs", "act", "VRS under Mladić", "12 May 1992", "Backed and funded by Belgrade.", ["bs-vrs", "bs-serbia"])
      ] },
    { link: "led to", how: "The aims required removing non-Serbs.",
      title: "Results", summary: "70% of Bosnia; war crimes.",
      steps: [
        N("bs-r-70", "res-", "70% of Bosnia held", "1993", "War crimes, genocide, ethnic cleansing, camps; Srebrenica and Sarajevo the gravest.", ["bs-vrs"])
      ] }
  ],
  judge: { prompt: "Why did Republika Srpska pursue ethnic cleansing? Rank the factors.", factors: ["bs-r-procl", "bs-r-six", "bs-r-vrs"],
           notes_view: "The Six Objectives (separate borders, corridors, divided Sarajevo, access to the sea) explain the logic of ethnic cleansing." },
  historians: [],
  takeaways: [
    "Serb Assembly (Oct 1991), referendum (Nov 1991), republic (Jan 1992), RS (Aug 1992).",
    "Six Strategic Objectives and the VRS under Mladić (12 May 1992).",
    "By 1993 RS held ~70% of Bosnia; the aims explain ethnic cleansing."
  ]
});

L.push({
  id: "bs-hb", order: 6, level: 3, parent: "bs-top", kind: "causal",
  title: "Herzeg-Bosnia and the HVO",
  question: "Why did Bosnian Croats form Herzeg-Bosnia, and why did their alliance with the Bosniaks collapse?",
  intro: "Attacks on Croat villages and dreams of a common Croatian state produced Herzeg-Bosnia; its HVO allied with the ARBiH, then turned on it.",
  clusters: [
    { title: "Formation", summary: "Self-defence and a Croatian dream.",
      steps: [
        N("bs-h-ravno", "trig", "Ravno destroyed", "Oct 1991", "JNA destroyed a Croat village; Izetbegović did not react.", ["bs-herzeg-bosnia"]),
        K("intensified", "Croat leaders pursued a wider aim."),
        N("bs-h-dream", "int", "'An age-old dream'", "12 Nov 1991", "Kordić and Boban sought 'a common Croatian State'.", ["bs-herzeg-bosnia"]),
        K("led to", "A Croat community was set up."),
        N("bs-h-hzhb", "pol", "HZ-HB established", "18 Nov 1991", "Boban president; close ties to Croatia; declared unlawful 23 Nov.", ["bs-herzeg-bosnia"])
      ] },
    { link: "followed by", how: "The Croats formed an army that first fought alongside the Bosniaks.",
      title: "The HVO alliance", summary: "Allies against the VRS.",
      steps: [
        N("bs-h-hvo", "act", "HVO formed", "8 Apr 1992", "Bosniaks 20–30% of it; drove the VRS from Mostar.", ["bs-hvo"]),
        K("led to", "A formal alliance followed."),
        N("bs-h-alliance", "pol", "Friendship agreement", "21 Jul 1992", "HVO under ARBiH command; arms via Croatia despite the embargo.", ["bs-hvo"]),
        K("undermined", "Killings and defeats broke the alliance."),
        N("bs-h-collapse", "res-", "Alliance collapses", "Oct 1992", "Kraljević assassinated; Jajce fell; HVO–ARBiH battle in Prozor.", ["bs-hvo"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Ravno (Oct 1991) and a 'common Croatian State' aim led to HZ-HB (Nov 1991).",
    "The HVO (Apr 1992) allied with the ARBiH (Jul 1992).",
    "The alliance collapsed in Oct 1992, opening the Croat–Bosniak war."
  ]
});

L.push({
  id: "bs-outbreak", order: 7, level: 3, parent: "bs-top", kind: "causal",
  title: "Referendum, recognition and outbreak",
  question: "How did Bosnia's independence trigger the war?",
  intro: "A referendum boycotted by Serbs and swift Western recognition collided with Serb self-determination; the siege of Sarajevo began within a month.",
  clusters: [
    { title: "The referendum", summary: "Boycotted by Serbs.",
      steps: [
        N("bs-o-ref", "evt", "Independence referendum", "29 Feb–1 Mar 1992", "Turnout 64%, 99.7% yes — short of the required two-thirds.", ["referendum92"]),
        K("provoked response", "Serbs rejected it."),
        N("bs-o-boycott", "evt", "Serb boycott", "1992", "SDS: Serbs would become 'a national minority in an Islamic state'; armed irregulars blocked ballot boxes.", ["referendum92"])
      ] },
    { link: "followed by", how: "Independence was declared and recognised.",
      title: "Recognition", summary: "Statehood contested.",
      steps: [
        N("bs-o-decl", "tp", "Independence declared", "3 Mar 1992", "Ending union with Serbia after almost 74 years.", ["referendum92", "bs-republic"]),
        K("followed by", "The West recognised the new state."),
        N("bs-o-recog", "pol", "US and EC recognition", "6 Apr 1992", "UN admission 22 May; same day Serbs declared their republic.", ["referendum92"])
      ] },
    { link: "triggered", how: "Recognition collided with Serb self-determination claims.",
      title: "War", summary: "Siege and cleansing.",
      steps: [
        N("bs-o-war", "res-", "War breaks out", "Apr 1992", "Siege of Sarajevo; VRS held 70%; 2 million+ displaced by 1995.", ["bs-outbreak", "bs-tl-1991-92"]),
        K("supports", "Two principles of statehood could not be reconciled."),
        N("bs-o-verdict", "judg", "Clashing principles", null, "Burg and Shoup: the world 'attempted, but failed, to reconcile' mutually exclusive principles of state formation.", ["bs-outbreak"])
      ] }
  ],
  historians: [ { who: "Burg and Shoup", view: "The international community attempted, but failed, to reconcile mutually exclusive principles of state formation.", nodes: ["bs-o-verdict"] } ],
  takeaways: [
    "Referendum (64% turnout, 99.7% yes) boycotted by Serbs.",
    "Independence 3 Mar; US/EC recognition 6 Apr 1992.",
    "Recognition collided with Serb self-determination: war within a month."
  ]
});

L.push({
  id: "bs-sarajevo", order: 8, level: 3, parent: "bs-top", kind: "causal",
  title: "The Siege of Sarajevo, 1992–1996",
  question: "Why was Sarajevo besieged, and what did the siege show?",
  intro: "To divide the capital, the JNA and VRS besieged it from the hills for nearly four years; the arms embargo left defenders without heavy weapons.",
  clusters: [
    { title: "The siege", summary: "Objective 5: divide Sarajevo.",
      steps: [
        N("bs-s-aim", "ctx", "Aim: divide Sarajevo", "1992", "VRS Objective 5; a Serb republic including Bosniak-majority areas.", ["sarajevo", "bs-six-objectives"]),
        K("led to", "Serb forces surrounded the city."),
        N("bs-s-siege", "evt", "Siege begins", "5 Apr 1992", "13,000 troops in the hills; at least 500,000 bombs from 2 May 1992.", ["sarajevo"])
      ] },
    { link: "constrained", how: "The arms embargo kept defenders weak.",
      title: "Defence", summary: "Without heavy weapons.",
      steps: [
        N("bs-s-arbih", "act", "ARBiH defenders", "1992–95", "~34,931 troops without heavy weapons or armour; could not break the siege.", ["sarajevo", "bs-republic"])
      ] },
    { link: "led to", how: "Shelling killed thousands over four years.",
      title: "Toll and end", summary: "Lifted after Dayton.",
      steps: [
        N("bs-s-toll", "res-", "13,952 killed", "1992–96", "Including 5,434 civilians.", ["sarajevo"]),
        K("followed by", "Market shellings later drove international action."),
        N("bs-s-lift", "res+", "Siege lifted", "29 Feb 1996", "After Dayton (14 Dec 1995).", ["sarajevo"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Sarajevo was besieged to divide it (VRS Objective 5).",
    "Defenders lacked heavy weapons because of the arms embargo.",
    "13,952 killed; lifted after Dayton."
  ]
});

L.push({
  id: "bs-cleansing", order: 9, level: 3, parent: "bs-top", kind: "causal",
  title: "Serb ethnic cleansing, 1992",
  question: "How and why did Bosnian Serb forces carry out ethnic cleansing?",
  intro: "To build 'the state of the Serb people', militia and SDS activists systematically expelled non-Serbs in spring and summer 1992.",
  clusters: [
    { title: "Aim", summary: "A Serb-only state.",
      steps: [
        N("bs-k-const", "pol", "'State of the Serb people'", "1992", "RS constitution (Art I.1) mentioned no others; discriminatory measures followed.", ["bs-serb-cleansing"])
      ] },
    { link: "led to", how: "Militias and SDS activists removed non-Serbs by force.",
      title: "The campaign", summary: "Apr–Aug 1992.",
      steps: [
        N("bs-k-campaign", "evt", "Expulsions", "Apr–Aug 1992", "70% of expulsions; 37 municipalities; 850 villages razed.", ["bs-serb-cleansing"]),
        K("led to", "Towns were emptied through camps and killings."),
        { row: [
          N("bs-k-prijedor", "evt", "Prijedor camps", "1992", "White armbands; Omarska, Trnopolje, Keraterm.", ["bs-prijedor"]),
          N("bs-k-visegrad", "evt", "Višegrad killings", "1992", "Hundreds shot on a bridge or burnt alive.", ["bs-prijedor"])
        ] }
      ] },
    { link: "led to", how: "The population map was redrawn.",
      title: "Results", summary: "Mass displacement.",
      steps: [
        N("bs-k-expel", "res-", "700,000–1,000,000 expelled", "1992–97", "Non-Serbs fell from 726,960 (54%) in 1991 to 235,015 (36%) in 1997.", ["bs-serb-cleansing"]),
        K("supports", "The UN defined what was happening."),
        N("bs-k-def", "evid", "UN definitions", "1993–94", "'Rendering an area ethnically homogeneous by using force or intimidation' (S/25274).", ["bs-cleansing-def"])
      ] }
  ],
  historians: [ { who: "Burg and Shoup", view: "Civilians bore the brunt: displacement exceeded half the pre-war population.", nodes: ["bs-k-expel"] } ],
  takeaways: [
    "RS defined itself as 'the state of the Serb people'.",
    "Apr–Aug 1992: 37 municipalities attacked, 850 villages razed; Prijedor camps, Višegrad.",
    "700,000–1,000,000 Bosniaks expelled — ethnic nationalism drove the war."
  ]
});

L.push({
  id: "bs-croatbosniak", order: 10, level: 3, parent: "bs-top", kind: "causal",
  title: "The Croat–Bosniak war, 1992–1994",
  question: "Why did Croats and Bosniaks fight each other, and what does it show?",
  intro: "The ARBiH–HVO alliance turned into a 'war within a war', with ethnic cleansing by Croat and Bosniak forces alike.",
  clusters: [
    { title: "The split", summary: "Allies become enemies.",
      steps: [
        N("bs-w-purge", "evt", "Mutual purges", "summer 1992", "HVO purged Bosniaks; Croats left the ARBiH as it stressed its Islamic character.", ["croatbosniak"]),
        K("led to", "Fighting broke out."),
        N("bs-w-war", "tp", "War within a war", "18 Oct 1992", "First incidents in central Bosnia; open war by early 1993.", ["croatbosniak", "bs-tl-1992"])
      ] },
    { link: "led to", how: "Both sides cleansed civilians.",
      title: "Cleansing on both sides", summary: "No faction innocent.",
      steps: [
        { split: [
          { h: "Croat forces", steps: [ N("bs-w-croat", "res-", "Croat cleansing", "1993", "Western Mostar; Heliodrom, Dretelj camps; Ahmići, Stupni Do; 20,000–25,000 expelled from Mostar.", ["bs-croat-cleansing"]) ] },
          { h: "Bosniak forces", steps: [ N("bs-w-bosniak", "res-", "Bosniak cleansing", "1992–94", "Croats expelled from Konjic and Bugojno; Topalović's killings in Sarajevo.", ["bs-bosniak-cleansing"]) ] }
        ] }
      ] },
    { link: "followed by", how: "US pressure ended this war.",
      title: "End", summary: "Washington.",
      steps: [
        N("bs-w-cease", "res+", "Ceasefire and Federation", "Feb–Mar 1994", "23 Feb ceasefire; Washington Agreement (18 Mar) altered the military balance.", ["croatbosniak", "bs-washington"]),
        K("supports", "The war shows the parties had little will to settle."),
        N("bs-w-verdict", "judg", "Peace passed to outsiders", null, "Violence by all three factions; responsibility for peace passed to international actors.", ["bs-bosniak-cleansing"])
      ] }
  ],
  historians: [],
  takeaways: [
    "The ARBiH–HVO alliance broke in Oct 1992 into a 'war within a war'.",
    "Croat (Mostar, Ahmići) and Bosniak (Konjic, Bugojno) forces both cleansed civilians.",
    "Ended by US pressure: ceasefire Feb 1994, Washington Agreement Mar 1994."
  ]
});

L.push({
  id: "bs-mediation", order: 11, level: 1, parent: "bs-top", kind: "chain",
  title: "Mediation: four failed plans",
  question: "Why did international mediation fail before 1995?",
  intro: "EC, UN–EC and Contact Group plans drifted from a united Bosnia toward partition; each was rejected by at least one side.",
  clusters: [
    { title: "Carrington-Cutiliero", summary: "EC, Feb–Mar 1992.",
      steps: [
        N("bs-m-lisbon", "pol", "Lisbon Plan", "Feb 1992", "Three constituent units; every district classed Bosniak, Serb or Croat.", ["bs-carrington"]),
        K("followed by", "All signed, then one side withdrew."),
        N("bs-m-renege", "res-", "Izetbegović reneges", "Mar 1992", "Signed 18 Mar; reneged within a week — reasons unclear.", ["bs-carrington", "bs-tl-1991-92"])
      ] },
    { link: "followed by", how: "The UN and EC joined forces in the ICFY.",
      title: "Vance-Owen", summary: "ICFY, 1993.",
      steps: [
        N("bs-m-icfy", "pol", "ICFY (London Conference)", "Aug 1992", "Non-recognition of gains by force; minority rights over self-determination.", ["bs-icfy"]),
        K("led to", "It produced a plan for a decentralised but united Bosnia."),
        N("bs-m-vo", "pol", "Vance-Owen Plan", "Jan 1993", "Ten semi-autonomous regions; nine-member presidency.", ["vanceowen"]),
        K("undermined", "The US gave no support; Serbs rejected it."),
        N("bs-m-vodead", "res-", "Rejected; 'dead'", "May–Jun 1993", "RS Assembly rejected it; 96% in a referendum; Owen declared it dead 18 Jun.", ["vanceowen"])
      ] },
    { link: "followed by", how: "Mediators moved toward partition.",
      title: "Owen-Stoltenberg", summary: "Three republics.",
      steps: [
        N("bs-m-os", "pol", "Owen-Stoltenberg Plan", "Jul–Aug 1993", "Union of three ethnic republics: Serbs 53%, Muslims 30%, Croats 17%.", ["bs-owen-stoltenberg", "bs-washington"]),
        K("undermined", "Izetbegović called it partition; the Croat–Bosniak war overwhelmed it."),
        N("bs-m-osfail", "res-", "Rejected", "1993", "Croats and Serbs accepted; Bosniaks rejected; Herzeg-Bosnia proclaimed at Grude.", ["bs-owen-stoltenberg", "bs-washington"])
      ] },
    { link: "followed by", how: "The great powers formed their own group.",
      title: "Contact Group", summary: "51–49 map.",
      steps: [
        N("bs-m-cg", "pol", "Contact Group map", "Jul 1994", "France, Germany, Russia, UK, US; 51% Federation, 49% Serbs — rejected as an 'American diktat'.", ["contactgroup"]),
        K("constrained", "Its members disagreed."),
        N("bs-m-split", "res±", "Consensus, but splits", "1994–95", "First major-power consensus and basis for later talks; splits over the arms embargo and Russia prolonged the war.", ["contactgroup", "bs-russia"])
      ] }
  ],
  judge: { prompt: "Why did mediation fail? Rank the factors.", factors: ["bs-m-renege", "bs-m-vodead", "bs-m-osfail", "bs-m-split"],
           notes_view: "Early mediation lacked a uniform approach and enforcement; plans drifted toward partition; the Contact Group's internal splits probably prolonged the conflict." },
  historians: [ { who: "Editore", view: "Four attempts to end the war before Dayton: the EC, the UN with the EC, the USA, the Contact Group.", nodes: ["bs-m-lisbon"] } ],
  takeaways: [
    "Lisbon (1992): signed, then abandoned within a week.",
    "Vance-Owen (1993): the last plan for a mixed Bosnia; rejected by Serbs, unsupported by the US.",
    "Owen-Stoltenberg (1993) and the Contact Group map (1994) moved toward partition; both rejected."
  ]
});

L.push({
  id: "bs-sanctions", order: 12, level: 3, parent: "bs-top", kind: "evaluation",
  title: "Sanctions, embargo and NATO enforcement",
  question: "How effective were sanctions and the arms embargo?",
  intro: "The UN sanctioned Serbia and NATO enforced the embargo at sea and in the air, yet Belgrade kept supplying the Bosnian Serbs.",
  clusters: [
    { title: "Sanctions", summary: "UNSC measures.",
      steps: [
        N("bs-n-757", "pol", "Resolution 757", "30 May 1992", "Trade, travel and exchanges banned (13–0); Bush seized ~US$200m of assets.", ["bs-sanctions"]),
        K("followed by", "NATO began monitoring."),
        N("bs-n-monitor", "pol", "NATO monitoring", "Jul–Oct 1992", "Maritime Monitor; Sky Monitor over the no-fly zone (Res 781).", ["bs-nato-1992"]),
        K("followed by", "Monitoring became enforcement."),
        N("bs-n-enforce", "pol", "NATO enforcement", "1992–93", "Maritime Guard: 'first authorised use of force to back a UNSC resolution'; Deny Flight from Apr 1993.", ["bs-nato-enforce"])
      ] },
    { link: "undermined", how: "Belgrade kept supplying the Bosnian Serbs.",
      title: "Limits", summary: "Serbia's aid continued.",
      steps: [
        N("bs-n-serbia", "act", "Serbia supplies the VRS", "1991–95", "Main source of soldiers, ammunition and money until 1995.", ["bs-serbia"]),
        K("led to", "Embargoes failed to deter and favoured the Serbs."),
        N("bs-n-fail", "res-", "No deterrent effect", "1992–95", "Arguably gave Serbs an initial advantage and a three-year stalemate.", ["bs-sanctions"])
      ] },
    { link: "followed by", how: "Sanctions ended with the peace.",
      title: "End", summary: "Suspended after Dayton.",
      steps: [ N("bs-n-1022", "evt", "Res 1022 suspends sanctions", "22 Nov 1995", "After Dayton was initialled.", ["bs-sanctions"]) ] }
  ],
  judge: { prompt: "How effective were sanctions? Rank the evidence.", factors: ["bs-n-757", "bs-n-enforce", "bs-n-serbia", "bs-n-fail"],
           notes_view: "Embargoes did not prevent or deter the conflict and arguably gave Serbs an initial advantage and a three-year stalemate." },
  historians: [],
  takeaways: [
    "Res 757 (1992) sanctioned Serbia; NATO enforced at sea and in the air.",
    "Belgrade kept supplying the VRS until 1995.",
    "Sanctions neither prevented nor deterred the war."
  ]
});

L.push({
  id: "bs-unprofor", order: 13, level: 3, parent: "bs-top", kind: "evaluation",
  title: "UNPROFOR and the safe areas",
  question: "How effective was UNPROFOR?",
  intro: "UNPROFOR protected aid and ran a record airlift, but its safe areas were never secured and its presence deterred no one.",
  clusters: [
    { title: "Mandate", summary: "Protecting aid.",
      steps: [
        N("bs-u-758", "pol", "Sarajevo airport", "8 Jun 1992", "Res 758; Res 770, 776 extended aid protection across Bosnia.", ["bs-unprofor-res"]),
        K("led to", "A massive airlift followed."),
        N("bs-u-airlift", "res+", "Record airlift", "1992–95", "UNHCR ~950,000 tonnes; 160,000 tonnes to Sarajevo in 12,000+ flights — longer than the Berlin airlift.", ["bs-unprofor-ach", "bs-unprofor-phases"])
      ] },
    { link: "provoked response", how: "Attacks on Srebrenica led to 'safe areas'.",
      title: "Safe areas", summary: "Declared, not defended.",
      steps: [
        N("bs-u-sreb93", "trig", "Srebrenica shelled", "12 Apr 1993", "56 dead, including 14 children in a school playground.", ["bs-srebrenica-1993"]),
        K("provoked response", "The UNSC declared safe areas."),
        N("bs-u-safe", "pol", "Six safe areas", "Apr–Jun 1993", "Res 819, 824; Res 836 allowed force in self-defence and NATO air power.", ["bs-unprofor-res", "bs-srebrenica-1993", "bs-tl-1993-94"]),
        K("constrained", "No means to defend them were provided."),
        N("bs-u-nomeans", "res-", "Never secured", "1993–95", "UNPROFOR refused to enforce aid delivery; two safe areas fell without UN reaction.", ["bs-unprofor-lim"])
      ] },
    { link: "supports", how: "Weighing aid against protection.",
      title: "Verdict", summary: "Reduced suffering, no deterrence.",
      steps: [
        { split: [
          { h: "Achievement", steps: [ N("bs-u-ach", "res+", "Reduced human suffering", null, "Reopened routes; coordinated 3,000 aid workers.", ["bs-unprofor-ach"]) ] },
          { h: "Limitation", steps: [ N("bs-u-lim", "res-", "No deterrence", null, "Ethnic cleansing where blue helmets stood; sidelined at Dayton; NATO decisive.", ["bs-unprofor-lim"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "How effective was UNPROFOR? Rank the evidence.", factors: ["bs-u-airlift", "bs-u-safe", "bs-u-nomeans", "bs-u-lim"],
           notes_view: "UNPROFOR contributed to reducing human suffering, but resisted enforcing aid delivery and did not deter ethnic cleansing — the setup for the 1995 failure." },
  historians: [],
  takeaways: [
    "UNPROFOR protected aid: ~950,000 tonnes, the longest airlift in history.",
    "Six safe areas (1993) were declared but never secured.",
    "Reduced suffering, but deterred no one."
  ]
});

L.push({
  id: "bs-washington", order: 14, level: 3, parent: "bs-top", kind: "causal",
  title: "The Washington Agreement, 1994",
  question: "How did the US end the Croat–Bosniak war?",
  intro: "After years of reluctance, the US pressed Bosniaks and Croats into a Federation, turning them back against the Serbs.",
  clusters: [
    { title: "US reluctance", summary: "Phases 1–2.",
      steps: [
        N("bs-a-reluct", "ctx", "US reluctance", "1990–93", "Gulf War costs; seen as a European problem; 'wait and see'.", ["bs-us-phase1-2", "bs-us-overview"]),
        K("intensified", "Televised atrocities raised pressure."),
        N("bs-a-markale", "trig", "First Markale attack", "Feb 1994", "68 killed, 144 injured; renewed calls for action.", ["bs-us-phase1-2"])
      ] },
    { link: "provoked response", how: "The US pressed the Croats and Bosniaks to settle.",
      title: "The agreement", summary: "A Federation.",
      steps: [
        N("bs-a-cease", "evt", "Croat–Bosniak ceasefire", "23 Feb 1994", "HVO territory had fallen from 20% to 10%.", ["bs-washington"]),
        K("led to", "A provisional deal followed under strong US pressure."),
        N("bs-a-sign", "tp", "Washington Agreement", "18 Mar 1994", "Signed at a Clinton-hosted ceremony; ten autonomous cantons.", ["bs-washington"])
      ] },
    { link: "led to", how: "The allies turned back on the Serbs.",
      title: "Effect", summary: "Military balance shifts.",
      steps: [ N("bs-a-effect", "res+", "Joint operations resume", "1994–95", "First effective US-led settlement; altered the military balance.", ["croatbosniak", "bs-washington"]) ] }
  ],
  historians: [ { who: "Boyadjeva", view: "Gulf War costs led the US to cede a decisive role in an 'intrinsically European problem'.", nodes: ["bs-a-reluct"] } ],
  takeaways: [
    "US reluctance (Gulf War costs, 'European problem') ended after Markale (Feb 1994).",
    "Washington Agreement (18 Mar 1994) created the Federation.",
    "Joint Bosniak–Croat operations shifted the military balance."
  ]
});

L.push({
  id: "bs-nato", order: 15, level: 3, parent: "bs-top", kind: "chain",
  title: "NATO's escalation, 1992–1995",
  question: "How did NATO's role escalate, and was it effective?",
  intro: "NATO moved from statements and monitoring to enforcement and then combat, but limited strikes did not stop attacks on safe areas until 1995.",
  clusters: [
    { title: "Monitoring and enforcement", summary: "1992–93.",
      steps: [
        N("bs-o-stmt", "pol", "Symbolic statements", "Feb 1992", "Urged belligerents to allow UN peacekeepers.", ["bs-nato-1992"]),
        K("followed by", "NATO monitored, then enforced."),
        N("bs-o-deny", "pol", "Deny Flight", "Apr 1993", "Enforcing the no-fly zone; close air support for UNPROFOR from Jun 1993.", ["bs-nato-enforce"])
      ] },
    { link: "followed by", how: "NATO entered combat for the first time.",
      title: "First combat", summary: "1994.",
      steps: [
        N("bs-o-bl", "tp", "Banja Luka Incident", "28 Feb 1994", "Four Serb jets shot down — NATO's first combat action.", ["bs-nato-combat"]),
        K("followed by", "Serbs attacked safe areas."),
        N("bs-o-goraz", "evt", "Goražde offensive", "Mar–Apr 1994", "NATO's first close air support (10 Apr).", ["bs-gorazde", "bs-nato-combat"]),
        K("followed by", "Fighting spread to Bihać."),
        N("bs-o-bihac", "evt", "Bihać Crisis", "Nov–Dec 1994", "Heaviest fighting of 1994; six formations.", ["bs-bihac"])
      ] },
    { link: "intensified", how: "Humiliations hardened Western resolve.",
      title: "Toward decisive force", summary: "1995.",
      steps: [
        N("bs-o-hostages", "evt", "UN troops seized", "May 1995", "33 British servicemen captured near Goražde; a US pilot shot down.", ["bs-gorazde", "bs-nato-combat"]),
        K("led to", "The US moved to armed intervention."),
        N("bs-o-phase3", "pol", "US Phase 3: intervention", "1994–95", "Wörner and the US called for more strikes; 'we have to hit 'em hard'.", ["bs-us-phase3"])
      ] }
  ],
  judge: { prompt: "How effective was NATO before Deliberate Force? Rank the evidence.", factors: ["bs-o-deny", "bs-o-bl", "bs-o-goraz", "bs-o-bihac", "bs-o-hostages"],
           notes_view: "NATO escalated from monitoring to enforcement to combat, but limited strikes did not stop attacks on safe areas — marking the US shift to armed intervention." },
  historians: [
    { who: "Watson", view: "US policy moved from reluctance to diplomacy to armed intervention.", nodes: ["bs-o-phase3"] },
    { who: "Recchia", view: "Clinton's team saw Deliberate Force as imminent: 'we have to hit 'em hard'.", nodes: ["bs-o-phase3"] }
  ],
  takeaways: [
    "NATO escalated: statements (1992), enforcement (Deny Flight 1993), combat (Feb 1994).",
    "Goražde and Bihać showed limited strikes could not protect safe areas.",
    "Humiliations in 1995 pushed the US to armed intervention."
  ]
});

L.push({
  id: "bs-srebrenica", order: 16, level: 3, parent: "bs-top", kind: "causal",
  title: "The Srebrenica genocide, July 1995",
  question: "Why did the Srebrenica genocide happen, and what were its consequences?",
  intro: "A 'safe area' without protection fell to the VRS; about 8,000 Bosniak men and boys were murdered — the gravest failure of UN peacekeeping.",
  clusters: [
    { title: "Background", summary: "A safe area in name only.",
      steps: [
        N("bs-g-enclave", "ctx", "Shrunken enclave", "1993", "150 km²; 50–60,000 refugees; aid convoys blockaded.", ["bs-srebrenica-1993"]),
        K("followed by", "It was made a safe area."),
        N("bs-g-safe", "pol", "Safe area (Res 819)", "16 Apr 1993", "Never provided with security.", ["srebrenica", "bs-unprofor-res"])
      ] },
    { link: "triggered", how: "Karadžić ordered its conquest.",
      title: "Genocide", summary: "9–11 July 1995.",
      steps: [
        N("bs-g-capture", "evt", "VRS captures Srebrenica", "9–11 Jul 1995", "Karadžić ordered it; Mladić's VRS took it without UN reaction.", ["srebrenica", "bs-vrs"]),
        K("led to", "Men and boys were systematically executed."),
        N("bs-g-killed", "res-", "~8,000 killed", "Jul 1995", "Bosniak men and boys; thousands expelled; Žepa also fell.", ["srebrenica", "bs-unprofor-lim"])
      ] },
    { link: "provoked response", how: "The West finally streamlined force.",
      title: "Response", summary: "London Conference.",
      steps: [
        N("bs-g-london", "pol", "London Conference", "21 Jul 1995", "UN commander could request NATO strikes without civilian officials; strikes for attacks on any safe area.", ["srebrenica", "bs-nato-combat"]),
        K("led to", "It opened the way to decisive force."),
        N("bs-g-verdict", "judg", "Gravest UN failure", null, "Safe areas never had security; Srebrenica pushed the West toward decisive force.", ["srebrenica"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Srebrenica was a 'safe area' (1993) never given security.",
    "9–11 Jul 1995: VRS captured it; ~8,000 men and boys killed.",
    "The 21 Jul London Conference opened the way to decisive NATO force."
  ]
});

L.push({
  id: "bs-endgame", order: 17, level: 3, parent: "bs-top", kind: "causal",
  title: "Storm, Deliberate Force and Dayton",
  question: "How was the Bosnian War brought to an end?",
  intro: "Croat–Bosniak offensives and NATO bombing changed the balance; US diplomacy then forced a settlement at Dayton, enforced by IFOR.",
  clusters: [
    { title: "Battlefield change", summary: "Operation Storm.",
      steps: [
        N("bs-d-train", "pol", "US-trained Croatian army", "1995", "Clinton let a private company use retired US personnel to train it.", ["bs-road-to-dayton"]),
        K("enabled", "A retrained army struck the Serbs."),
        N("bs-d-storm", "tp", "Operation Storm", "summer 1995", "Largest European land offensive since WWII; first Serb defeat in four years.", ["bs-road-to-dayton"])
      ] },
    { link: "followed by", how: "Another market massacre triggered NATO's bombing.",
      title: "Deliberate Force", summary: "NATO bombs.",
      steps: [
        N("bs-d-markale2", "trig", "Second Markale attack", "28 Aug 1995", "Serb mortar killed 37.", ["nato95", "bs-tl-1995"]),
        K("provoked response", "NATO launched a major air campaign."),
        N("bs-d-df", "pol", "Operation Deliberate Force", "30 Aug–20 Sep 1995", "338 Serb targets bombed.", ["nato95"]),
        K("led to", "Serb leaders agreed to talks."),
        N("bs-d-siege", "res+", "Siege end agreed", "14 Sep 1995", "Holbrooke secured Karadžić and Mladić's signatures.", ["bs-road-to-dayton"])
      ] },
    { link: "led to", how: "With the balance changed, the US hosted talks.",
      title: "Dayton", summary: "Peace and its price.",
      steps: [
        N("bs-d-talks", "pol", "Dayton talks", "1 Nov 1995", "Wright-Patterson AFB — chosen to stop negotiating via the media.", ["dayton"]),
        K("led to", "A framework was agreed."),
        N("bs-d-accord", "tp", "Dayton Accords", "21 Nov–14 Dec 1995", "One state of two entities; Sarajevo undivided; signed in Paris.", ["dayton", "bs-tl-1995"]),
        K("followed by", "NATO implemented it."),
        N("bs-d-ifor", "res±", "IFOR; lasting but divided peace", "20 Dec 1995", "60,000–66,000 troops; peace endured but entrenched ethnic divisions.", ["dayton", "nato95"])
      ] }
  ],
  judge: { prompt: "What was most important in ending the war? Rank the factors.", factors: ["bs-d-storm", "bs-d-df", "bs-d-talks", "bs-d-ifor"],
           notes_view: "Force — battlefield change plus NATO airpower — was decisive, marginalising UNPROFOR; Dayton's peace endured but entrenched ethnic divisions." },
  historians: [],
  takeaways: [
    "Operation Storm (1995) gave the Serbs their first defeat in four years.",
    "Deliberate Force (338 targets) after Markale II brought the Serbs to talks.",
    "Dayton (1995): one state, two entities; IFOR enforced it; divisions entrenched."
  ]
});

L.push({
  id: "bs-actors", order: 18, level: 1, parent: "bs-top", kind: "matrix",
  title: "Roles of the actors",
  question: "What did each actor do, and how effective were they?",
  intro: "Each actor's role and effectiveness, from the notes' summary of key players.",
  matrix: {
    cols: ["Role", "Effectiveness"],
    rows: [
      { h: "EC / ICFY", cells: ["Lisbon, Vance-Owen, Owen-Stoltenberg plans", "All rejected; no enforcement"] },
      { h: "UN", cells: ["100+ resolutions; sanctions; safe areas; UNPROFOR", "Aid delivered; safe areas not secured; sidelined"] },
      { h: "Contact Group", cells: ["51–49 map (1994)", "First consensus; splits prolonged war"] },
      { h: "NATO", cells: ["Monitoring, enforcement, combat, IFOR", "Deliberate Force plus Storm decisive"] },
      { h: "United States", cells: ["Reluctance, diplomacy, armed intervention", "Brokered Washington and Dayton"] },
      { h: "Russia", cells: ["Backed Serbs; ~500 volunteers", "Pushed pro-Serb changes; friction"] },
      { h: "Serbia", cells: ["Funded and armed the VRS", "Sustained the war despite sanctions"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "EC and UN mediation failed without enforcement.",
    "The UN reduced suffering but did not protect civilians.",
    "US-led force and diplomacy (NATO, Washington, Dayton) ended the war."
  ]
});

L.push({
  id: "bs-arg", order: 19, level: 1, parent: "bs-top", kind: "argument",
  title: "Force or diplomacy?",
  question: "'Force rather than diplomacy ended the Bosnian War.' How far do you agree?",
  intro: "Weigh the role of military pressure against diplomacy in bringing about Dayton.",
  clusters: [
    { title: "Claim", summary: "Force ended the war.",
      steps: [ N("bs-x-claim", "judg", "Force was decisive", null, "Force rather than diplomacy ended the Bosnian War.", ["bs-players-summary"]) ] },
    { link: "supports", how: "Test the claim against the record.",
      title: "For and against", summary: "Bombs vs talks.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("bs-x-plans", "evid", "Plans failed without force", null, "Lisbon, Vance-Owen, Owen-Stoltenberg and the 51–49 map all rejected.", ["bs-carrington", "vanceowen", "contactgroup"]),
            K("supports", "Peacekeeping without force failed."),
            N("bs-x-unp", "evid", "UNPROFOR deterred no one", null, "Srebrenica and Žepa fell without reaction.", ["bs-unprofor-lim"]),
            K("supports", "Only force changed Serb behaviour."),
            N("bs-x-storm", "evid", "Storm and Deliberate Force", null, "First Serb defeat; 338 targets; siege end agreed.", ["bs-road-to-dayton", "nato95"])
          ] },
          { h: "Against", steps: [
            N("bs-x-wash", "evid", "Washington diplomacy", "1994", "US pressure ended the Croat–Bosniak war and built the Federation.", ["bs-washington"]),
            K("contradicts", "Plans laid the basis for the settlement."),
            N("bs-x-basis", "evid", "Earlier plans shaped Dayton", null, "Decentralisation (Vance-Owen) and 51–49 (Contact Group) became the framework.", ["vanceowen", "contactgroup"]),
            K("contradicts", "Dayton itself was diplomacy."),
            N("bs-x-dayton", "evid", "Holbrooke's diplomacy", "1995", "Talks isolated from the media produced the accord.", ["dayton"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both sides.",
      title: "Judgement", summary: "Force enabled diplomacy.",
      steps: [ N("bs-x-judge", "judg", "Force made diplomacy work", null, "Force changed the balance; US-led diplomacy then turned it into peace, building on earlier plans.", ["bs-players-summary", "bs-us-phase3"]) ] }
  ],
  judge: { prompt: "How far did force rather than diplomacy end the war? Rank the evidence.", factors: ["bs-x-plans", "bs-x-unp", "bs-x-storm", "bs-x-wash", "bs-x-basis", "bs-x-dayton"],
           notes_view: "Operation Storm and Deliberate Force pushed the parties to Dayton; earlier plans' ideas (decentralisation, 51–49) shaped the settlement — force enabled US-led diplomacy." },
  historians: [ { who: "Burg and Shoup", view: "The world failed to reconcile mutually exclusive principles of state formation.", nodes: ["bs-x-plans"] } ],
  takeaways: [
    "For: plans and UNPROFOR failed; Storm and Deliberate Force changed Serb behaviour.",
    "Against: the Washington Agreement and Dayton were diplomacy built on earlier plans.",
    "Best answer: force made diplomacy effective."
  ]
});
})();
