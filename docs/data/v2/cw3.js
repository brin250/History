// v2 flow charts: the end of the Cold War, 1979–1991 (cards in data/cw3.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).cw3 = window.FLOWS2.cw3 || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "cw3-top", order: 1, level: 0, kind: "causal",
  title: "The end of the Cold War, 1979–1991",
  question: "Who or what ended the Cold War?",
  intro: "A process through the 1980s ending at Malta (Dec 1989): top-down Reagan–Gorbachev convergence plus bottom-up People Power — distinct from the USSR's collapse (Dec 1991).",
  clusters: [
    { title: "Second Cold War", summary: "1979–85.",
      steps: [
        N("cw3-t-usa", "pol", "Reagan's renewed containment", "1981–85", "Build-up, INF, SDI, Reagan Doctrine, propaganda.", ["renewedcontainment", "cw3-players"], { go: "cw3-usa" })
      ] },
    { link: "followed by", how: "Gorbachev changed course.",
      title: "New Détente", summary: "1985–91.",
      steps: [
        { row: [
          N("cw3-t-ussr", "act", "Gorbachev's USSR", "1985–91", "Decline; New Thinking; Sinatra Doctrine.", ["newthinking"], { go: "cw3-ussr" }),
          N("cw3-t-people", "act", "People Power", "1980–89", "Solidarity; Leipzig; the Wall.", ["cw3-movements-reasons"], { go: "cw3-people" })
        ] },
        K("led to", "The Cold War ended."),
        N("cw3-t-end", "tp", "Malta", "Dec 1989", "'We bury the Cold War at the bottom of the Mediterranean sea.'", ["cw3-end-def", "cw3-summits"], { go: "cw3-malta" })
      ] },
    { link: "followed by", how: "A parallel process.",
      title: "Collapse", summary: "1991.",
      steps: [
        N("cw3-t-coll", "res-", "USSR collapses", "Dec 1991", "Not required by the end of the Cold War.", ["cw3-end-vs-collapse"], { go: "cw3-collapse" }),
        K("supports", "Who was responsible?"),
        N("cw3-t-hist", "judg", "Three schools", null, "Triumphalist, Soviet Initiative, People Power — none works alone.", ["historiography3", "cw3-syllabus", "cw3-guiding", "cw3-checklist", "cw3-sbcs-past"], { go: "cw3-arg" })
      ] }
  ],
  judge: { prompt: "Who or what ended the Cold War? Rank the factors.", factors: ["cw3-t-usa", "cw3-t-ussr", "cw3-t-people"],
           notes_view: "No single factor works alone: US pressure interacted with existing Soviet weaknesses; Gorbachev's agency turned them into policy shifts; those shifts created the space popular movements exploited." },
  historians: [ { who: "Gaddis (2005)", view: "The Soviet system was a 'sandpile ready to slide', toppled by ordinary people.", nodes: ["cw3-t-people"] } ],
  takeaways: [
    "Second Cold War (1979–85) → New Détente (1985–91).",
    "The Cold War ended at Malta (Dec 1989).",
    "The USSR's collapse (Dec 1991) was a parallel process."
  ]
});

L.push({
  id: "cw3-usa", order: 2, level: 1, parent: "cw3-top", kind: "chain",
  title: "Reagan: containment to accommodation",
  question: "How far did Reagan end the Cold War?",
  intro: "Reagan revived containment after détente's failure, then shifted to cooperation from 1984–85 — less important in starting the end, crucial in sustaining it.",
  clusters: [
    { title: "Renewed containment", summary: "1981–85.",
      steps: [
        N("cw3-u-why", "stc", "Détente's collapse", "1975–80", "Soviet provocation; US prestige lost.", ["cw3-detente-limits"], { go: "cw3-detente" }),
        K("provoked response", "Reagan revived containment."),
        { row: [
          N("cw3-u-build", "pol", "Build-up and INF", "1981–83", "$171bn → $376bn; Pershing II.", ["cw3-military-buildup"], { go: "cw3-buildup" }),
          N("cw3-u-sdi", "pol", "SDI", "Mar 1983", "'Star Wars'.", ["sdi"], { go: "cw3-sdi" }),
          N("cw3-u-rd", "pol", "Reagan Doctrine", "1985", "Roll-back via guerrillas.", ["reagandoctrine"], { go: "cw3-rdoc" })
        ] },
        K("supports", "Did it bankrupt the USSR?"),
        N("cw3-u-rv", "int", "Reagan Victory School", null, "Abandoned status-quo containment for 'victory'.", ["cw3-lundestad-rv"], { go: "cw3-rv" })
      ] },
    { link: "followed by", how: "Reagan shifted to cooperation.",
      title: "Accommodation", summary: "1984–89.",
      steps: [
        N("cw3-u-shift", "tp", "Shift to cooperation", "1984–86", "Able Archer; re-election; Geneva rapport.", ["cw3-shift-reasons"], { go: "cw3-shift" }),
        K("led to", "Treaties."),
        N("cw3-u-inf", "res+", "INF Treaty", "Dec 1987", "A whole category eliminated.", ["inf"], { go: "cw3-inf" })
      ] },
    { link: "supports", how: "Weighing Reagan.",
      title: "Verdict", summary: "Qualified.",
      steps: [
        N("cw3-u-eval", "judg", "Sustained, didn't start", null, "Less important initiating; crucial sustaining; passive over Eastern Europe.", ["cw3-reagan-eval", "cw3-matrix-usa"])
      ] }
  ],
  judge: { prompt: "How far did Reagan end the Cold War? Weigh the evidence.", factors: ["cw3-u-build", "cw3-u-sdi", "cw3-u-rd", "cw3-u-shift", "cw3-u-inf"],
           notes_view: "Any explanation must involve Reagan, but qualified: less important in starting the process, crucial in sustaining it, and let it finish by staying a largely passive observer of Eastern Europe." },
  historians: [ { who: "Schweitzer (2002)", view: "'Reagan happened to be there when Gorbachev ended the Cold War.'", nodes: ["cw3-u-eval"] } ],
  takeaways: [
    "Détente's collapse prompted renewed containment.",
    "Build-up, SDI and the Reagan Doctrine pressured the USSR.",
    "Reagan shifted to cooperation; his role was sustaining."
  ]
});

L.push({
  id: "cw3-detente", order: 3, level: 3, parent: "cw3-usa", kind: "causal",
  title: "Why détente collapsed",
  question: "Why did the US revive containment?",
  intro: "Détente looked like a façade; Soviet provocation and US humiliation in Iran produced the Second Cold War.",
  clusters: [
    { title: "Causes", summary: "Three reasons.",
      steps: [
        N("cw3-d-limits", "ltc", "Détente a façade", "1970s", "A 'gentleman's agreement' that froze the Cold War.", ["cw3-detente-limits", "cw3-spanier-gaddis-detente"]),
        K("intensified", "Soviet actions alarmed the US."),
        N("cw3-d-prov", "stc", "Soviet provocation", "1975–79", "Helsinki violations; ICBM build-up; Afghanistan killed SALT II.", ["cw3-soviet-provocation"]),
        K("provoked response", "Rival doctrines."),
        N("cw3-d-docs", "pol", "Brezhnev vs Carter Doctrine", "1968 / 1980", "Gulf to be defended 'by any means necessary'.", ["cw3-brezhnev-carter"]),
        K("intensified", "US humiliation."),
        N("cw3-d-prestige", "stc", "Lost US prestige", "1970s–80", "Vietnam, Watergate, Tehran: 'Moscow was on a roll'.", ["cw3-us-prestige"])
      ] }
  ],
  judge: { prompt: "Was renewed containment offensive or defensive? Weigh it.", factors: ["cw3-d-limits", "cw3-d-prov", "cw3-d-docs", "cw3-d-prestige"],
           notes_view: "Explains why renewed containment happened; use for the offensive vs defensive debate — US aggression or a response to Soviet provocation." },
  historians: [
    { who: "Spanier (1990)", view: "Détente was 'essentially an adaptation of containment' to strategic parity.", nodes: ["cw3-d-limits"] },
    { who: "Gaddis (2006)", view: "Détente froze the Cold War, so only killing it could end the Cold War.", nodes: ["cw3-d-limits"] }
  ],
  takeaways: [
    "Détente was seen as a façade.",
    "Afghanistan and Helsinki violations provoked the US.",
    "Iran humiliated the US."
  ]
});

L.push({
  id: "cw3-buildup", order: 4, level: 3, parent: "cw3-usa", kind: "chain",
  title: "Build-up, INF and propaganda",
  question: "How did Reagan pressure the USSR militarily and economically?",
  intro: "Massive defence spending, Pershing II deployment, oil-price pressure and moral rhetoric framed a renewed contest.",
  clusters: [
    { title: "Military", summary: "1981–83.",
      steps: [
        N("cw3-b-spend", "pol", "Defence build-up", "1981–86", "$171bn → $376bn; 600-ship navy; B-1, MX, Trident.", ["cw3-military-buildup"]),
        K("intensified", "Euromissiles."),
        N("cw3-b-inf", "pol", "Double-Track; Zero Option", "1979–81", "SS-20s vs Pershing II; Zero Option rejected.", ["cw3-inf-deploy"]),
        K("led to", "Talks collapsed."),
        N("cw3-b-dead", "res-", "Talks end", "Nov 1983", "Pershing IIs in West Germany; peace movements.", ["cw3-inf-deploy"])
      ] },
    { link: "intensified", how: "Economic and moral pressure.",
      title: "Economic and propaganda", summary: "1982–84.",
      steps: [
        N("cw3-b-econ", "pol", "Oil and 'Evil Empire'", "1982–84", "Saudi output raised; 'a test of moral will and faith'.", ["cw3-econ-propaganda"])
      ] }
  ],
  judge: { prompt: "How effective was Reagan's pressure? Weigh it.", factors: ["cw3-b-spend", "cw3-b-inf", "cw3-b-dead", "cw3-b-econ"],
           notes_view: "Central evidence for the Reagan Victory thesis (Soviet defence 22% → 27% of GDP); also shows escalation and deadlock critics use to argue the Soviets were not 'bending'." },
  historians: [],
  takeaways: [
    "US defence spending doubled.",
    "INF talks deadlocked; Pershing IIs deployed.",
    "Oil pressure and moral rhetoric."
  ]
});

L.push({
  id: "cw3-sdi", order: 5, level: 3, parent: "cw3-usa", kind: "chain",
  title: "SDI ('Star Wars')",
  question: "Did SDI hasten or hinder the end of the Cold War?",
  intro: "A $26bn missile-defence plan the USSR saw as offensive; it strained Soviet resources but blocked talks until set aside.",
  clusters: [
    { title: "Programme", summary: "1983.",
      steps: [
        N("cw3-s-sdi", "pol", "SDI announced", "23 Mar 1983", "Render nuclear weapons 'impotent and obsolete'.", ["sdi"]),
        K("provoked response", "Reactions."),
        { split: [
          { h: "USSR", steps: [ N("cw3-s-ussr", "res±", "Strain on Moscow", "1983–87", "Dobrynin: 'a new phase in the arms race'; 'to wear us out'.", ["cw3-sdi-impact-ussr"]) ] },
          { h: "US and allies", steps: [ N("cw3-s-us", "res±", "Popular at home, doubted abroad", "1983–87", "Mitterrand feared it undermined MAD.", ["cw3-sdi-impact-cw-us"]) ] }
        ] }
      ] },
    { link: "undermined", how: "It blocked talks.",
      title: "Verdict", summary: "One factor.",
      steps: [
        N("cw3-s-rey", "res-", "Reykjavik collapses", "1986", "INF only after SDI was set aside.", ["cw3-sdi-impact-cw-us"]),
        K("supports", "Weighing it."),
        N("cw3-s-eval", "judg", "Hastening, not decisive", null, "Strained Soviet resources but obstructed negotiations.", ["cw3-sdi-impact-ussr"])
      ] }
  ],
  judge: { prompt: "Did SDI hasten the end of the Cold War? Weigh it.", factors: ["cw3-s-sdi", "cw3-s-ussr", "cw3-s-us", "cw3-s-rey"],
           notes_view: "Hastened the end by straining Soviet resources, but blocked negotiations until left out of the talks — one of many factors, not the sole cause." },
  historians: [],
  takeaways: [
    "SDI (1983) alarmed the USSR.",
    "It strained Soviet resources.",
    "It blocked talks until set aside."
  ]
});

L.push({
  id: "cw3-rdoc", order: 6, level: 3, parent: "cw3-usa", kind: "causal",
  title: "The Reagan Doctrine",
  question: "How effective was 'roll-back'?",
  intro: "The US backed anti-communist guerrillas worldwide, draining Soviet resources — but over-extending itself.",
  clusters: [
    { title: "Roll-back", summary: "Guerrillas.",
      steps: [
        N("cw3-r-doc", "pol", "'Support for freedom fighters'", "6 Feb 1985", "Roll-back, not containment; 'we win and they lose'.", ["reagandoctrine"]),
        K("led to", "Interventions."),
        { row: [
          N("cw3-r-afg", "pol", "Afghanistan, Nicaragua", "1979–89", "$2bn+ to Mujahedeen; contras; Iran-Contra.", ["cw3-rd-afghan-nicaragua"]),
          N("cw3-r-oth", "pol", "Angola, Cambodia, Poland", "1980s", "UNITA; KPNLK; Solidarity funding.", ["cw3-rd-others"])
        ] },
        K("supports", "Weighing it."),
        N("cw3-r-eval", "judg", "Drained both sides", null, "Thatcher credited it; but US over-extended.", ["cw3-rd-verdict"])
      ] }
  ],
  judge: { prompt: "How far did the Reagan Doctrine end the Cold War? Weigh it.", factors: ["cw3-r-doc", "cw3-r-afg", "cw3-r-oth", "cw3-r-eval"],
           notes_view: "Drained Soviet resources (Afghan 'bleeding wound' ≈$20bn/yr) but over-extended the US; objectives resembled earlier containment; some backed forces later turned against the USA." },
  historians: [],
  takeaways: [
    "Roll-back via guerrillas worldwide.",
    "Afghanistan bled the USSR.",
    "It also over-extended the US."
  ]
});

L.push({
  id: "cw3-rv", order: 7, level: 3, parent: "cw3-usa", kind: "argument",
  title: "Did Reagan bankrupt the USSR?",
  question: "'Reagan's renewed containment bankrupted the USSR.' How far do you agree?",
  intro: "Weigh the Reagan Victory thesis against its limitations.",
  clusters: [
    { title: "Claim", summary: "Bankrupted.",
      steps: [ N("cw3-v-claim", "judg", "Reagan bankrupted the USSR", null, "A technology-driven arms race strained the Soviet economy.", ["cw3-rv-thesis"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "Strain vs pre-existing decline.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("cw3-v-cost", "evid", "Costly counter-measures", "1980–85", "Defence 22% → 27% of GDP; Afghan 'bleeding wound'.", ["cw3-soviet-counter", "cw3-rv-thesis"]),
            K("supports", "Less affordable for Moscow."),
            N("cw3-v-butter", "evid", "Guns and butter", "1980s", "US bore its costs better.", ["cw3-us-cost"])
          ] },
          { h: "Against", steps: [
            N("cw3-v-limits", "evid", "No Soviet 'bending'", "1981–85", "Afghanistan, SS-20s, KAL panic; decline predated Reagan.", ["cw3-rv-limits"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "Exacerbated.",
      steps: [ N("cw3-v-judge", "judg", "Exacerbated, didn't cause", null, "Reagan at most worsened existing Soviet weaknesses.", ["cw3-rv-limits"]) ] }
  ],
  judge: { prompt: "How far did Reagan bankrupt the USSR? Rank the evidence.", factors: ["cw3-v-cost", "cw3-v-butter", "cw3-v-limits"],
           notes_view: "Critics point out there is no direct evidence the Soviets bent under pressure before 1985; Soviet problems long predated Reagan, who at most exacerbated them." },
  historians: [
    { who: "Powaski (1997)", view: "The US used a technology-driven arms race to bankrupt the Soviet economy.", nodes: ["cw3-v-claim"] },
    { who: "Vadney (1998)", view: "The arms race was less affordable for the USSR than for the USA.", nodes: ["cw3-v-butter"] },
    { who: "Walker (1993)", view: "The West prevailed because it could supply 'guns as well as butter'.", nodes: ["cw3-v-butter"] },
    { who: "Schulzinger (1994)", view: "The Cold War delayed badly needed domestic reforms and damaged the US economy.", nodes: ["cw3-v-butter"] }
  ],
  takeaways: [
    "For: Soviet defence rose to 27% of GDP.",
    "Against: no Soviet bending before 1985.",
    "Best answer: Reagan exacerbated existing decline."
  ]
});

L.push({
  id: "cw3-shift", order: 8, level: 3, parent: "cw3-usa", kind: "chain",
  title: "Able Archer and the summits",
  question: "Why did Reagan shift to cooperation?",
  intro: "Able Archer 83, re-election politics and personalities moved Reagan toward Gorbachev; Geneva built rapport and Reykjavik nearly broke through.",
  clusters: [
    { title: "Reasons", summary: "1983–85.",
      steps: [
        N("cw3-h-able", "tp", "Able Archer 83", "1983", "Kremlin briefly feared attack; KAL 007 shot down.", ["cw3-able-archer"]),
        K("led to", "Reagan changed tack."),
        N("cw3-h-why", "stc", "Re-election and Shultz", "1984", "Mondale's challenge; Gromyko meeting.", ["cw3-shift-reasons"])
      ] },
    { link: "led to", how: "Summits began.",
      title: "Summits", summary: "1985–86.",
      steps: [
        N("cw3-h-geneva", "evt", "Geneva", "1985", "'A fresh start'; mutual respect.", ["cw3-summits", "cw3-econ-coop"]),
        K("followed by", "Near-breakthrough."),
        N("cw3-h-rey", "evt", "Reykjavik", "1986", "Collapsed over SDI; paved the way to INF.", ["cw3-summits"])
      ] },
    { link: "contradicts", how: "Limits of US accommodation.",
      title: "Limits", summary: "Reactive.",
      steps: [
        N("cw3-h-limits", "evid", "Reagan reactive", "1985–89", "Slow to warm; hard conditions; aid too small.", ["cw3-accom-limits", "cw3-econ-coop"])
      ] }
  ],
  judge: { prompt: "Why did Reagan shift to cooperation? Rank the reasons.", factors: ["cw3-h-able", "cw3-h-why", "cw3-h-geneva", "cw3-h-rey"],
           notes_view: "Supports 'Reagan sustained the process'; its limits are also clear — Reagan took years to warm up and was largely reacting to Gorbachev." },
  historians: [
    { who: "Gaddis (2007)", view: "Able Archer 83 was the most dangerous moment since Cuba and convinced Reagan he had pushed far enough.", nodes: ["cw3-h-able"] },
    { who: "Farnham (2001)", view: "At Geneva, Reagan and Gorbachev came to like and respect each other.", nodes: ["cw3-h-geneva"] },
    { who: "Bredenkamp (1991)", view: "Western assistance could play at most a supporting role in Soviet reform.", nodes: ["cw3-h-limits"] }
  ],
  takeaways: [
    "Able Archer convinced Reagan he had pushed far enough.",
    "Geneva built rapport; Reykjavik nearly broke through.",
    "Reagan was largely reactive."
  ]
});

L.push({
  id: "cw3-inf", order: 9, level: 3, parent: "cw3-usa", kind: "chain",
  title: "The INF Treaty, 1987",
  question: "Whose concessions made the INF Treaty possible?",
  intro: "The first treaty to eliminate a whole class of nuclear weapons came after Gorbachev accepted Reagan's conditions.",
  clusters: [
    { title: "Treaty", summary: "Dec 1987.",
      steps: [
        N("cw3-i-obst", "ctx", "Obstacles", "1985–89", "SDI; linkage to human rights; Iran-Contra; Rust affair.", ["cw3-arms-obstacles"]),
        K("followed by", "Gorbachev conceded."),
        N("cw3-i-inf", "tp", "INF Treaty", "Dec 1987", "1,000–5,500km missiles banned; US ≈859, USSR ≈1,752 dismantled.", ["inf", "cw3-summits"]),
        K("led to", "Arms race reversed."),
        N("cw3-i-sig", "res+", "Arms race reversed", "1988", "Ratified at Moscow.", ["inf"], { go: "cw3-malta" })
      ] }
  ],
  judge: { prompt: "Whose concessions made the INF Treaty? Weigh it.", factors: ["cw3-i-obst", "cw3-i-inf", "cw3-i-sig"],
           notes_view: "Shows top-down convergence; Reagan's intransigent conditions vs Gorbachev's concessions suggest the initiative was Soviet." },
  historians: [ { who: "Mason", view: "'A milestone… possible not merely to restrain but to reverse the arms race.'", nodes: ["cw3-i-sig"] } ],
  takeaways: [
    "Obstacles remained after 1985.",
    "Gorbachev accepted Reagan's conditions.",
    "INF eliminated a whole category of weapons."
  ]
});

L.push({
  id: "cw3-malta", order: 10, level: 3, parent: "cw3-top", kind: "chain",
  title: "Malta and the post-1989 treaties",
  question: "How did the Cold War formally end?",
  intro: "Bush and Gorbachev declared the Cold War over at Malta; CFE, Chemical Weapons and START I followed.",
  clusters: [
    { title: "End", summary: "Dec 1989.",
      steps: [
        N("cw3-m-malta", "tp", "Malta summit", "Dec 1989", "No agreements, but the official end.", ["cw3-summits", "cw3-econ-coop"]),
        K("followed by", "Treaties."),
        N("cw3-m-treaties", "pol", "CFE, Chemical Weapons, START I", "1989–91", "START I removed ≈80% of strategic weapons.", ["cw3-cfe-cw-start"]),
        K("supports", "US role."),
        N("cw3-m-bush", "act", "Bush continued", "1989–91", "Sought to preserve the USSR.", ["cw3-matrix-usa"])
      ] }
  ],
  judge: { prompt: "How significant was Malta? Weigh it.", factors: ["cw3-m-malta", "cw3-m-treaties", "cw3-m-bush"],
           notes_view: "Marks the end of the Cold War (1989), distinct from the USSR's collapse (1991); the US sustained and cooperated rather than driving the process." },
  historians: [],
  takeaways: [
    "Malta (Dec 1989) ended the Cold War.",
    "CFE and START I cut forces.",
    "Bush cooperated, aiming to preserve the USSR."
  ]
});

L.push({
  id: "cw3-ussr", order: 11, level: 1, parent: "cw3-top", kind: "chain",
  title: "Soviet decline and Gorbachev",
  question: "What declined in the USSR, when and why — and how did Gorbachev respond?",
  intro: "Long-term decline predated Reagan; Gorbachev's reforms worsened it at home while New Thinking transformed foreign policy.",
  clusters: [
    { title: "Decline", summary: "1945–84.",
      steps: [
        N("cw3-x-what", "ctx", "What the USSR was", "1924–91", "Russia plus 14 republics; five groups.", ["cw3-ussr-what", "cw3-republics"]),
        K("intensified", "Structural weakness."),
        N("cw3-x-decline", "ltc", "Long-term decline", "1945–84", "Planned economy; weak leaders; cost of empire.", ["sovietdecline"], { go: "cw3-decline" })
      ] },
    { link: "provoked response", how: "Gorbachev's two tracks.",
      title: "Gorbachev", summary: "1985–91.",
      steps: [
        { split: [
          { h: "Home", steps: [ N("cw3-x-reform", "pol", "Perestroika and glasnost", "1985–91", "Worsened decline.", ["perestroika"], { go: "cw3-reform" }) ] },
          { h: "Abroad", steps: [
            N("cw3-x-nt", "pol", "New Thinking", "1985–89", "Unilateral cuts; disengagement.", ["newthinking"], { go: "cw3-nt" }),
            K("led to", "Eastern Europe released."),
            N("cw3-x-sin", "tp", "Sinatra Doctrine", "1988–89", "Brezhnev Doctrine ended.", ["cw3-sinatra"], { go: "cw3-sinatra" })
          ] }
        ] }
      ] },
    { link: "supports", how: "Weighing the USSR's role.",
      title: "Verdict", summary: "Agency and decline.",
      steps: [
        N("cw3-x-eval", "judg", "Proactive driver", null, "Gorbachev ended the Cold War to save the economy; reforms had unintended results.", ["cw3-matrix-ussr-ee", "cw3-sbcs-2025a", "cw3-sbcs-2025b"])
      ] }
  ],
  judge: { prompt: "How far did Soviet decline end the Cold War? Weigh it.", factors: ["cw3-x-decline", "cw3-x-reform", "cw3-x-nt", "cw3-x-sin"],
           notes_view: "Economic problems began in the 1960s, yet foreign policy stayed confrontational until Gorbachev — decline alone did not cause the shift; Gorbachev's agency turned weakness into policy." },
  historians: [],
  takeaways: [
    "Long-term decline predated Gorbachev.",
    "Perestroika and glasnost worsened it.",
    "New Thinking and the Sinatra Doctrine transformed foreign policy."
  ]
});

L.push({
  id: "cw3-decline", order: 12, level: 3, parent: "cw3-ussr", kind: "causal",
  title: "Long-term Soviet decline, 1945–84",
  question: "Why did the Soviet economy decline?",
  intro: "Structural flaws, an inefficient command economy, weak leaders, a privileged elite and the costs of empire produced an 'invisible crisis'.",
  clusters: [
    { title: "Causes", summary: "Five.",
      steps: [
        { row: [
          N("cw3-l-struct", "ltc", "Structure", "1924–88", "Forcibly incorporated republics; Russians just over 50%.", ["cw3-structure"]),
          N("cw3-l-plan", "ltc", "Planned economy", "1945–84", "Quotas over quality; could not absorb technology.", ["sovietdecline"]),
          N("cw3-l-lead", "ltc", "Weak leaders", "1953–85", "Khrushchev's failed reforms; Brezhnev's stagnation.", ["cw3-khrushchev", "cw3-brezhnev-era"])
        ] },
        K("intensified", "Inequality and empire."),
        { row: [
          N("cw3-l-elite", "ltc", "Nomenklatura", "Brezhnev era", "195 vs ≈750 roubles a month.", ["cw3-social-divide"]),
          N("cw3-l-ext", "ltc", "Cost of empire", "1965–85", "Defence 15–17% of GNP; Third World subsidies.", ["cw3-external-causes"])
        ] },
        K("contradicts", "Decline alone did not shift policy."),
        N("cw3-l-eval", "judg", "Necessary, not sufficient", null, "Problems since the 1960s; confrontation lasted until 1985.", ["cw3-external-causes"])
      ] }
  ],
  judge: { prompt: "What was the main cause of Soviet decline? Rank them.", factors: ["cw3-l-struct", "cw3-l-plan", "cw3-l-lead", "cw3-l-elite", "cw3-l-ext"],
           notes_view: "Core evidence against the Reagan Victory School: weaknesses came before Reagan. But decline from the 1960s did not produce a timely foreign-policy shift." },
  historians: [
    { who: "Lightbody (1999)", view: "The Soviet economy was the most significant weakness: industrial growth fell from 5.25% to 2% (1967–80).", nodes: ["cw3-l-lead"] },
    { who: "Coleman (1996)", view: "'The rot began at the border.'", nodes: ["cw3-l-struct"] },
    { who: "Powaski (1997)", view: "The crisis turned critical when the USSR could not absorb technological innovation.", nodes: ["cw3-l-plan"] }
  ],
  takeaways: [
    "Structural and economic flaws ran deep.",
    "Weak leaders and a privileged elite worsened them.",
    "Decline alone did not change foreign policy."
  ]
});

L.push({
  id: "cw3-reform", order: 13, level: 3, parent: "cw3-ussr", kind: "chain",
  title: "Perestroika and glasnost",
  question: "Why did Gorbachev's reforms worsen the crisis?",
  intro: "Restructuring and openness destroyed old mechanisms and authority without providing alternatives.",
  clusters: [
    { title: "Reforms", summary: "1985–87.",
      steps: [
        N("cw3-p-alc", "pol", "Anti-alcohol campaign", "May 1985", "Damaging socio-economic impact.", ["cw3-milestones-85-89"]),
        K("followed by", "Two reforms."),
        { split: [
          { h: "Perestroika", steps: [ N("cw3-p-per", "pol", "Restructuring", "1986", "Self-financing; 500-Day Plan; CPSU divided.", ["perestroika"]) ] },
          { h: "Glasnost", steps: [ N("cw3-p-gla", "pol", "Openness", "1986–87", "Freer media; contested elections.", ["cw3-glasnost"]) ] }
        ] }
      ] },
    { link: "undermined", how: "Unintended consequences.",
      title: "Results", summary: "Collapse.",
      steps: [
        N("cw3-p-eco", "res-", "Economic collapse", "1990–91", "¼ below poverty line; income −15% (1991).", ["cw3-white-economy"]),
        K("intensified", "Nationalism surged."),
        N("cw3-p-eth", "res-", "Ethnic fracture", "1989–91", "Tbilisi; Baltic chain; authority destroyed.", ["cw3-glasnost", "cw3-milestones-85-89"])
      ] }
  ],
  judge: { prompt: "How far did Gorbachev's reforms cause the crisis? Weigh it.", factors: ["cw3-p-alc", "cw3-p-per", "cw3-p-gla", "cw3-p-eco", "cw3-p-eth"],
           notes_view: "Gorbachev as an agent whose reforms had unintended consequences — central to 'How far was Gorbachev responsible for a collapse he did not intend?'" },
  historians: [
    { who: "Hosking (1993)", view: "Glasnost thrust ethnic factors to the centre and destroyed the Soviet Union.", nodes: ["cw3-p-eth"] },
    { who: "Hobsbawn (1999)", view: "Glasnost destroyed authority and perestroika destroyed the old economic mechanisms without any alternative.", nodes: ["cw3-p-gla"] },
    { who: "White (2001)", view: "Under perestroika shortages and poverty worsened; national income fell ≈15% in 1991.", nodes: ["cw3-p-eco"] }
  ],
  takeaways: [
    "Perestroika restructured; glasnost opened up.",
    "Both destroyed old mechanisms without alternatives.",
    "Economic collapse and ethnic fracture followed."
  ]
});

L.push({
  id: "cw3-nt", order: 14, level: 3, parent: "cw3-ussr", kind: "chain",
  title: "New Thinking and unilateral cuts",
  question: "How did New Thinking end Soviet confrontation?",
  intro: "Gorbachev rejected the class approach, cut forces unilaterally and disengaged from the Third World — breaking Western suspicion.",
  clusters: [
    { title: "Ideas", summary: "Principles.",
      steps: [
        N("cw3-n-roots", "ltc", "Roots in stagnation", "1970s–85", "Defence 15–17% of GNP; failures of force.", ["cw3-nt-historians"]),
        K("led to", "A new doctrine."),
        N("cw3-n-nt", "pol", "New Thinking", "1985", "Shared security; interdependence; a 'normal state'.", ["newthinking"])
      ] },
    { link: "led to", how: "Policy shifts.",
      title: "Action", summary: "1985–89.",
      steps: [
        N("cw3-n-act", "pol", "Disengagement", "1985–89", "Afghan withdrawal; China rapprochement; INF.", ["cw3-nt-actual", "cw3-nt-manifest"]),
        K("followed by", "Unilateral cuts."),
        N("cw3-n-cuts", "tp", "Unilateral cuts", "Dec 1988", "500,000 troops, 10,000 tanks; no reciprocity.", ["cw3-unilateral-cuts"]),
        K("led to", "Trust grew."),
        N("cw3-n-trust", "res+", "Suspicion broken", "1988–89", "Positive action-reaction cycle; hardline backlash.", ["cw3-unilateral-cuts", "cw3-nt-manifest"])
      ] }
  ],
  judge: { prompt: "How far did New Thinking end the Cold War? Weigh it.", factors: ["cw3-n-roots", "cw3-n-nt", "cw3-n-act", "cw3-n-cuts"],
           notes_view: "The strongest evidence for the Soviet Initiative School; linked to economic stagnation (Petersen, Brands); started a positive action-reaction cycle." },
  historians: [
    { who: "Petersen (1993) / Brands (1993)", view: "Stagnation and defence burdens prompted Gorbachev's conclusion that only major reform could save the USSR.", nodes: ["cw3-n-roots"] },
    { who: "Lightbody (1999)", view: "Gorbachev's unilateral cuts broke the traditional suspicion of Soviet intentions.", nodes: ["cw3-n-trust"] },
    { who: "Roberts (1994)", view: "The loss of Eastern Europe and reduced military power drew hard-line criticism.", nodes: ["cw3-n-trust"] }
  ],
  takeaways: [
    "New Thinking rooted in stagnation.",
    "Unilateral cuts and disengagement followed.",
    "They broke Western suspicion."
  ]
});

L.push({
  id: "cw3-sinatra", order: 15, level: 3, parent: "cw3-ussr", kind: "chain",
  title: "The Sinatra Doctrine",
  question: "Why was the end of the Brezhnev Doctrine decisive?",
  intro: "Gorbachev let Eastern Europeans choose their own governments, removing the threat of Soviet intervention.",
  clusters: [
    { title: "Doctrine", summary: "1988–89.",
      steps: [
        N("cw3-n2-un", "pol", "UN speech", "Dec 1988", "Brezhnev Doctrine would not be enforced.", ["cw3-sinatra", "cw3-timeline-1989a"]),
        K("followed by", "Leaders told to stand alone."),
        N("cw3-n2-alone", "pol", "No Soviet support", "Apr–May 1989", "Shevardnadze: no occasion for Soviet troops.", ["cw3-timeline-1989a"]),
        K("enabled", "Floodgates opened."),
        N("cw3-n2-flood", "res+", "People Power unleashed", "1989", "Red Army stayed home; US restraint.", ["cw3-peoplepower-limits"], { go: "cw3-people" })
      ] }
  ],
  judge: { prompt: "How decisive was the Sinatra Doctrine? Weigh it.", factors: ["cw3-n2-un", "cw3-n2-alone", "cw3-n2-flood"],
           notes_view: "The necessary precondition for People Power: the 'floodgates opened' when the Red Army did not intervene." },
  historians: [
    { who: "Powaski", view: "'The demise of the Brezhnev Doctrine persuaded all but the most hard-line Westerners of Gorbachev's determination to end the Cold War.'", nodes: ["cw3-n2-un"] },
    { who: "McCauley", view: "Gorbachev believed Eastern Europeans had chosen socialism, and would not reimpose force.", nodes: ["cw3-n2-flood"] }
  ],
  takeaways: [
    "Dec 1988: Brezhnev Doctrine abandoned.",
    "Eastern European leaders left to stand alone.",
    "It made People Power possible."
  ]
});

L.push({
  id: "cw3-people", order: 16, level: 1, parent: "cw3-top", kind: "causal",
  title: "People Power in Eastern Europe",
  question: "How did the 1980s movements end the Cold War?",
  intro: "Denied self-determination and failing living standards fuelled movements that exploited Gorbachev's opening.",
  clusters: [
    { title: "Causes", summary: "Why people rose.",
      steps: [
        N("cw3-e-def", "ctx", "Movements vs revolutions", "1989", "Non-violent mass pressure; leaders had to follow.", ["cw3-movements-def"]),
        K("led to", "Deep grievances."),
        N("cw3-e-why", "ltc", "Grievances", "1945–89", "Self-determination denied; oppression; poor living standards.", ["cw3-movements-reasons"])
      ] },
    { link: "led to", how: "Two case studies.",
      title: "Cases", summary: "Poland and East Germany.",
      steps: [
        { row: [
          N("cw3-e-pol", "evt", "Poland", "1980–89", "Solidarity to Round Table.", ["solidarity"], { go: "cw3-poland" }),
          N("cw3-e-gdr", "evt", "East Germany", "1989", "Leipzig to the Wall.", ["berlinwall"], { go: "cw3-gdr" })
        ] },
        K("supports", "Weighing People Power."),
        N("cw3-e-eval", "judg", "Within superpower choices", null, "Largely independent, but possible only once Gorbachev allowed it.", ["cw3-matrix-analysis", "cw3-peoplepower-limits"])
      ] }
  ],
  judge: { prompt: "How important was People Power? Weigh it.", factors: ["cw3-e-why", "cw3-e-pol", "cw3-e-gdr", "cw3-e-eval"],
           notes_view: "People Power alone is not enough: Gorbachev's repudiation of the Brezhnev Doctrine removed the key lever of repression, and the US contribution 'lay mainly in what it did not do'." },
  historians: [ { who: "Bartel (2022)", view: "Communist dictatorships had to be pushed into free elections by mass protest.", nodes: ["cw3-e-why"] } ],
  takeaways: [
    "Grievances ran back to 1945.",
    "Poland and East Germany broke the bloc.",
    "Possible only within Gorbachev's opening."
  ]
});

L.push({
  id: "cw3-poland", order: 17, level: 3, parent: "cw3-people", kind: "chain",
  title: "Poland: Solidarity, 1980–1989",
  question: "How did Solidarity bring down communism in Poland?",
  intro: "Economic collapse sparked Solidarity; martial law crushed it, but the regime could not reform, and in 1989 Solidarity swept partly free elections.",
  clusters: [
    { title: "1980–81", summary: "Rise and repression.",
      steps: [
        N("cw3-o-econ", "ltc", "Economic crisis", "1970–81", "Income growth 9% → −5.4%; $23bn debt.", ["cw3-poland-economy"]),
        K("triggered", "Food prices doubled."),
        N("cw3-o-sol", "evt", "Solidarity founded", "Aug–Sep 1980", "Gdańsk; Wałęsa; ≈10 million members.", ["solidarity"]),
        K("provoked response", "Repression."),
        N("cw3-o-ml", "pol", "Martial law", "12 Dec 1981", "Jaruzelski; Solidarity banned; US sanctions.", ["cw3-poland-martial"])
      ] },
    { link: "followed by", how: "Stalemate, then breakthrough.",
      title: "1989", summary: "Round Table.",
      steps: [
        N("cw3-o-rt", "pol", "Round Table", "Feb–Apr 1989", "Solidarity legalised; partly free elections.", ["cw3-poland-1989", "cw3-timeline-1989a"]),
        K("led to", "Electoral sweep."),
        N("cw3-o-win", "tp", "Solidarity wins", "Jun–Aug 1989", "99/100 Senate seats; Mazowiecki PM.", ["cw3-poland-1989"]),
        K("triggered", "Chain reaction."),
        N("cw3-o-chain", "res+", "Revolutions of 1989", "1989", "Spread across the bloc.", ["cw3-poland-1989"])
      ] }
  ],
  judge: { prompt: "Why did Solidarity succeed in 1989 but not 1981? Weigh it.", factors: ["cw3-o-econ", "cw3-o-sol", "cw3-o-ml", "cw3-o-rt", "cw3-o-win"],
           notes_view: "Poland was 'always the most rebellious Warsaw Pact member' (Levesque); Solidarity's survival broke with the crushing of earlier protests; its 1989 victory triggered a chain reaction." },
  historians: [ { who: "Archie Brown / Jacques Lévesque", view: "Poland was the first breakthrough of 1989.", nodes: ["cw3-o-win"] } ],
  takeaways: [
    "Economic collapse sparked Solidarity (1980).",
    "Martial law crushed it; stalemate followed.",
    "1989: Round Table and electoral sweep."
  ]
});

L.push({
  id: "cw3-gdr", order: 18, level: 3, parent: "cw3-people", kind: "chain",
  title: "East Germany and the Wall",
  question: "Why did the Berlin Wall fall?",
  intro: "Honecker refused to reform; when Hungary opened its border, people fled and Leipzig's protests grew until the Wall opened.",
  clusters: [
    { title: "Pressure", summary: "1980s.",
      steps: [
        { row: [
          N("cw3-g-econ", "ltc", "Failing economy", "1980s", "Growth <1%; subsidies a fifth of income; no reform.", ["cw3-gdr-economy"]),
          N("cw3-g-unity", "ltc", "Hope of reunification", "1945–84", "Wall the accepted status quo; détente revived feeling.", ["cw3-gdr-reunify"])
        ] },
        K("triggered", "Hungary opened its border."),
        N("cw3-g-flee", "evt", "Exodus via Hungary", "Sep 1989", "130,000 East Germans.", ["cw3-timeline-1989b"])
      ] },
    { link: "intensified", how: "Protests grew.",
      title: "Leipzig", summary: "Sep–Oct 1989.",
      steps: [
        N("cw3-g-leip", "evt", "Leipzig demonstrations", "4 Sep–23 Oct 1989", "'Wir sind das Volk!'; police withdrew; Honecker out.", ["cw3-leipzig"]),
        K("led to", "A mistaken announcement."),
        N("cw3-g-wall", "tp", "Wall falls", "9 Nov 1989", "Schabowski's error; 2 million crossed.", ["berlinwall"]),
        K("led to", "Unity and Malta."),
        N("cw3-g-unite", "res+", "Iron Curtain gone", "1989–90", "Enabled Malta; Germany reunited 3 Oct 1990.", ["berlinwall", "cw3-jarausch"])
      ] }
  ],
  judge: { prompt: "Why did the Wall fall? Rank the factors.", factors: ["cw3-g-econ", "cw3-g-flee", "cw3-g-leip", "cw3-g-wall"],
           notes_view: "Removing the Iron Curtain resolved one of the Cold War's original disagreements and enabled Malta; the key People Power evidence ('nonviolent civil resistance')." },
  historians: [
    { who: "Mason", view: "The GDR fell because it refused to reform.", nodes: ["cw3-g-econ"] },
    { who: "Haftendorn (2011)", view: "The GDR went from the most successful socialist economy to near collapse.", nodes: ["cw3-g-econ"] },
    { who: "Jarausch (2009)", view: "A 'magical', peaceful triumph of people's power over a repressive regime.", nodes: ["cw3-g-unite"] }
  ],
  takeaways: [
    "Honecker refused to reform.",
    "Hungary's open border and Leipzig's protests broke the regime.",
    "The Wall fell on 9 Nov 1989."
  ]
});

L.push({
  id: "cw3-collapse", order: 19, level: 1, parent: "cw3-top", kind: "chain",
  title: "Collapse of the USSR, 1991",
  question: "Why did the USSR collapse after the Cold War ended?",
  intro: "The August Coup failed, Yeltsin seized power and the republics broke away — an outcome Gorbachev never intended.",
  clusters: [
    { title: "Coup", summary: "Aug 1991.",
      steps: [
        N("cw3-c-ctx", "ctx", "Divided reformers and hardliners", "1986–91", "Both camps unhappy; Yeltsin elected 57.3%.", ["cw3-coup-context", "cw3-milestones-90-91"]),
        K("triggered", "The Union Treaty."),
        N("cw3-c-coup", "trig", "August Coup", "19–21 Aug 1991", "Gorbachev under arrest; Yeltsin on a tank.", ["augustcoup"]),
        K("led to", "Two coups in one."),
        N("cw3-c-two", "tp", "Yeltsin takes power", "Aug 1991", "CPSU banned; central control ended.", ["cw3-two-coups"])
      ] },
    { link: "led to", how: "Republics broke away.",
      title: "Dissolution", summary: "Dec 1991.",
      steps: [
        N("cw3-c-minsk", "evt", "Minsk Declaration", "7 Dec 1991", "CIS; 11/15 republics gone; Gorbachev resigns 25 Dec.", ["cw3-dissolution"]),
        K("supports", "Why Yeltsin let it go."),
        N("cw3-c-yel", "int", "Yeltsin's calculation", "1991", "Avoid bloodshed; Russia better alone.", ["cw3-yeltsin-why"])
      ] },
    { link: "supports", how: "Weighing roles.",
      title: "Verdict", summary: "Parallel process.",
      steps: [
        N("cw3-c-roles", "judg", "Outcome, not cause", null, "Gorbachev's unintended results; Yeltsin seized the moment; US largely absent.", ["cw3-collapse-roles", "cw3-garthoff", "cw3-link-summary"], { go: "cw3-arg2" })
      ] }
  ],
  judge: { prompt: "Who was most responsible for the USSR's collapse? Rank them.", factors: ["cw3-c-coup", "cw3-c-two", "cw3-c-minsk", "cw3-c-yel"],
           notes_view: "The collapse was largely an outcome of the end of the Cold War, not its cause; it gave the Cold War its definitive end, since the US no longer had a USSR to contain." },
  historians: [ { who: "Sturua (1990)", view: "The failed coup signalled the end of both communism and perestroika.", nodes: ["cw3-c-coup"] } ],
  takeaways: [
    "The August Coup failed; Yeltsin seized power.",
    "The Minsk Declaration dissolved the USSR.",
    "Collapse was an outcome, not a cause, of the Cold War's end."
  ]
});

L.push({
  id: "cw3-schools", order: 20, level: 1, parent: "cw3-top", kind: "matrix",
  title: "Three schools compared",
  question: "How do the three schools explain the end of the Cold War?",
  intro: "From the notes' historiography section.",
  matrix: {
    cols: ["Triumphalist", "Soviet Initiative", "People Power"],
    rows: [
      { h: "Key player", cells: ["Reagan / US containment", "Gorbachev", "Ordinary Eastern Europeans"] },
      { h: "Authors", cells: ["Gates, Fukuyama, Matlock", "Lévesque, Garthoff, Pemberton", "Bartel, Evangelista"] },
      { h: "Evidence", cells: ["Defence 22% → 27% of GDP; SDI", "Sinatra Doctrine; INF; unilateral cuts", "Solidarity; Leipzig; the Wall"] },
      { h: "Limitation", cells: ["No Soviet 'bending' before 1985", "Understates Reagan; over-credits idealism", "Needed Gorbachev's restraint"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "Each school stresses one actor.",
    "Each has a clear limitation.",
    "The synthesis links all three."
  ]
});

L.push({
  id: "cw3-arg", order: 21, level: 1, parent: "cw3-top", kind: "argument",
  title: "A Soviet, not American, achievement?",
  question: "'The end of the Cold War was a Soviet, not an American, achievement.' How far do you agree?",
  intro: "Weigh the three schools and the action-reaction synthesis.",
  clusters: [
    { title: "Claim", summary: "Soviet achievement.",
      steps: [ N("cw3-q-claim", "judg", "A Soviet achievement", null, "Gorbachev, not Reagan, ended the Cold War.", ["cw3-essay-soviet"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "Three schools", summary: "Who ended it.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("cw3-q-sov", "evid", "Soviet Initiative", "1985–89", "New Thinking, Sinatra Doctrine, unilateral cuts.", ["cw3-soviet-initiative"])
          ] },
          { h: "Against", steps: [
            N("cw3-q-tri", "evid", "Triumphalist", "1981–89", "Containment 'broke the back' of the Soviet empire.", ["cw3-triumphalist"]),
            K("contradicts", "The people acted."),
            N("cw3-q-pp", "evid", "People Power", "1989", "Mass protest forced free elections.", ["cw3-peoplepower", "cw3-essay-topdown"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing them.",
      title: "Judgement", summary: "Synthesis.",
      steps: [ N("cw3-q-judge", "judg", "Mutually reinforcing", null, "US pressure → Soviet weakness → Gorbachev's agency → space for the people.", ["cw3-synthesis"], { go: "cw3-schools" }) ] }
  ],
  judge: { prompt: "How far was the end a Soviet achievement? Rank the schools.", factors: ["cw3-q-sov", "cw3-q-tri", "cw3-q-pp"],
           notes_view: "No single factor works on its own: an action-reaction, mutually reinforcing dynamic best explains the end — combining top-down change and bottom-up pressure." },
  historians: [
    { who: "Gates", view: "The end was the triumph of containment: denied new conquests, Soviet communism's weaknesses brought it down.", nodes: ["cw3-q-tri"] },
    { who: "Archie Brown / Jacques Lévesque", view: "Gorbachev deserves virtually all the credit; Reagan's hard line probably slowed the end.", nodes: ["cw3-q-sov"] },
    { who: "Pemberton (1998)", view: "Reagan 'joined Mikhail Gorbachev to bring the cold war to an end'.", nodes: ["cw3-q-sov"] },
    { who: "Zubok (2022)", view: "'The Soviet factor' was crucial; Gorbachev was 'the inadvertent liberator'.", nodes: ["cw3-q-pp"] },
    { who: "Bacevich (2009)", view: "Triumphalists believed the US alone would decide what came next.", nodes: ["cw3-q-tri"] }
  ],
  takeaways: [
    "For: Gorbachev's proactive policies.",
    "Against: US pressure and People Power.",
    "Best answer: a mutually reinforcing synthesis."
  ]
});

L.push({
  id: "cw3-arg2", order: 22, level: 1, parent: "cw3-collapse", kind: "argument",
  title: "One and the same process?",
  question: "'The end of the Cold War and the collapse of the USSR were one and the same process.' How far do you agree?",
  intro: "Distinguish the end (1989) from the collapse (1991) and weigh Gorbachev's responsibility.",
  clusters: [
    { title: "Claim", summary: "Same process.",
      steps: [ N("cw3-w-claim", "judg", "The same process", null, "The Cold War ended because the USSR collapsed.", ["cw3-essay-sameprocess"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "Linked but distinct.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("cw3-w-roots", "evid", "Shared roots", "1985–91", "Gorbachev; limits of communist rule; self-determination.", ["cw3-garthoff"])
          ] },
          { h: "Against", steps: [
            N("cw3-w-date", "evid", "Different dates", "1989 vs 1991", "Malta preceded and did not require the collapse.", ["cw3-end-vs-collapse"]),
            K("contradicts", "Gorbachev wanted one, not the other."),
            N("cw3-w-gorb", "evid", "Unintended collapse", "1985–91", "Reforms with unmanageable outcomes; Yeltsin seized power.", ["cw3-essay-gorb-collapse"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "Parallel.",
      steps: [ N("cw3-w-judge", "judg", "Parallel, not identical", null, "Collapse was an outcome of the end, which it made definitive.", ["cw3-essay-sameprocess", "cw3-link-summary"]) ] }
  ],
  judge: { prompt: "Were they the same process? Rank the evidence.", factors: ["cw3-w-roots", "cw3-w-date", "cw3-w-gorb"],
           notes_view: "Parallel processes with similar roots, but the end of the Cold War did not require the USSR to break up; ending the Cold War was desirable for Gorbachev, the collapse was not." },
  historians: [ { who: "Garthoff (cited in Lundestad, 2003)", view: "'Victory' came when new Soviet leaders realised their system had failed.", nodes: ["cw3-w-roots"] }, { who: "Lundestad (2003)", view: "The Soviet collapse, the end of dictatorship and the move to markets were concurrent, interdependent processes.", nodes: ["cw3-w-roots"] } ],
  takeaways: [
    "For: shared roots.",
    "Against: 1989 vs 1991; collapse unintended.",
    "Best answer: parallel, not identical."
  ]
});
})();
