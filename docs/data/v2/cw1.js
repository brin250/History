// v2 flow charts: the emergence of the Cold War, 1945–1955 (cards in data/cw1.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).cw1 = window.FLOWS2.cw1 || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "cw1-top", order: 1, level: 0, kind: "causal",
  title: "The emergence of the Cold War, 1945–1955",
  question: "How did the Cold War develop, and whose action was most responsible?",
  intro: "Roots in 1917, a Grand Alliance held together by Hitler, then an action-reaction cycle that divided Europe into blocs by 1955.",
  clusters: [
    { title: "What it was", summary: "Extreme tension short of war.",
      steps: [
        N("cw1-t-def", "ctx", "Defining the Cold War", "from 1945", "Extreme tension short of all-out war; propaganda, misperception, race for allies.", ["cw1-def-dockrill-calvo", "cw1-def-roberts", "cw1-features"]),
        K("followed by", "Its roots ran back to 1917."),
        N("cw1-t-roots", "ltc", "Ideological roots", "1917–41", "An early action-reaction cycle.", ["cw1-periodisation", "cw1-tl-1917-44"], { go: "cw1-roots" })
      ] },
    { link: "followed by", how: "War made brief allies.",
      title: "Alliance to rivalry", summary: "1941–1947.",
      steps: [
        N("cw1-t-ga", "tp", "Grand Alliance and demise", "1941–45", "'The real glue was Hitler'; new leaders and issues broke it.", ["cw1-ga-demise"], { go: "cw1-ga" }),
        K("led to", "Bipolar superpowers filled the vacuum."),
        N("cw1-t-super", "act", "Two superpowers", "from 1949", "USA vs USSR, confrontation mainly from the Soviet bomb.", ["cw1-superpower", "cw1-yardstick-pol-geo", "cw1-yardstick-econ-nuc", "cw1-players-europe"])
      ] },
    { link: "led to", how: "Manifestations divided Europe.",
      title: "Division of Europe", summary: "1945–1955.",
      steps: [
        N("cw1-t-manif", "evt", "Manifestations", "1945–55", "Yalta, Potsdam, Sovietisation, Truman, Marshall, Berlin, NATO, Warsaw Pact.", ["cw1-tl-1946", "cw1-tl-1947-48", "cw1-checklist-a", "cw1-checklist-b"], { go: "cw1-manif" }),
        K("supports", "Explaining it."),
        { row: [
          N("cw1-t-causes", "int", "Causes", null, "Security over economics; ideology the lens.", ["cw1-causes-framework"], { go: "cw1-causes" }),
          N("cw1-t-hist", "judg", "Who was responsible?", null, "Four schools disagree.", ["historiography1", "cw1-sbcs-past"], { go: "cw1-arg" })
        ] }
      ] }
  ],
  judge: { prompt: "Whose action was most responsible for the Cold War? Weigh it.", factors: ["cw1-t-roots", "cw1-t-ga", "cw1-t-manif", "cw1-t-causes"],
           notes_view: "Each side professed its actions as defensive while the other perceived them as aggressive; security outweighed economics, and ideology was the lens through which the cycle was interpreted. Factors for tension and cooperation coexisted in every phase." },
  historians: [
    { who: "Dockrill (1998)", view: "The Cold War stayed 'cold' because nuclear weapons made war a suicidal enterprise.", nodes: ["cw1-t-def"] },
    { who: "Kissinger", view: "The superpowers behaved like two heavily armed blind men, each believing himself in mortal peril from the other.", nodes: ["cw1-t-hist"] }
  ],
  takeaways: [
    "Roots in 1917; the Grand Alliance was one of convenience.",
    "An action-reaction cycle divided Europe, 1945–55.",
    "Security drove it; ideology framed it."
  ]
});

L.push({
  id: "cw1-roots", order: 2, level: 3, parent: "cw1-top", kind: "causal",
  title: "Roots: 1917–1941",
  question: "Why did mistrust between the West and the USSR begin before 1945?",
  intro: "From the Bolshevik Revolution each side saw the other's actions as hostile — an early action-reaction cycle, though not yet the Cold War.",
  clusters: [
    { title: "Two systems", summary: "Ideology.",
      steps: [
        N("cw1-r-sys", "ltc", "Rival systems", "1917–41", "Liberal capitalism vs one-party communism and command economy.", ["cw1-systems"])
      ] },
    { link: "provoked response", how: "Each side's actions alarmed the other.",
      title: "Action and reaction", summary: "Mutual hostility.",
      steps: [
        { split: [
          { h: "Soviet actions", steps: [ N("cw1-r-ussr", "evt", "Seen as aggressive", "1917–39", "USSR (1924), COMINTERN, 'Permanent Revolution', Nazi-Soviet Pact.", ["cw1-ussr-actions-1917"]) ] },
          { h: "Western actions", steps: [ N("cw1-r-west", "evt", "Seen as hostile", "1917–30s", "Civil War intervention; League exclusion; sanctions; appeasement.", ["cw1-west-actions-1917"]) ] }
        ] }
      ] },
    { link: "contradicts", how: "Not yet a Cold War.",
      title: "Why not 1917", summary: "No two blocs.",
      steps: [
        N("cw1-r-not", "int", "Not the start", null, "No two-bloc split; fascism and other ideologies still competed.", ["cw1-1917-not-start"])
      ] }
  ],
  judge: { prompt: "How far did the Cold War originate before 1945? Weigh it.", factors: ["cw1-r-sys", "cw1-r-ussr", "cw1-r-west", "cw1-r-not"],
           notes_view: "The ideological/systemic origins of mistrust and the earliest action-reaction pattern; supports arguments that ideology fuelled suspicion (Varsori)." },
  historians: [ { who: "Varsori (2013)", view: "The Cold War confirmed pre-existing cultural, psychological and ideological prejudices on both sides.", nodes: ["cw1-r-sys"] } ],
  takeaways: [
    "Rival systems bred mistrust from 1917.",
    "Each side read the other's actions as hostile.",
    "Not yet a Cold War: no two-bloc split."
  ]
});

L.push({
  id: "cw1-ga", order: 3, level: 1, parent: "cw1-top", kind: "chain",
  title: "Rise and fall of the Grand Alliance",
  question: "Why did the Grand Alliance form and then break down?",
  intro: "The German threat drew the Big Three together; once it receded, new leaders, new issues and a bipolar world exposed rival visions.",
  clusters: [
    { title: "Formation", summary: "1941–44.",
      steps: [
        N("cw1-g-form", "tp", "Common German threat", "Jun 1941", "Barbarossa transformed US–Soviet relations.", ["cw1-ga-formation"]),
        K("enabled", "The Big Three could bargain."),
        N("cw1-g-pct", "pol", "Percentages agreement", "Oct 1944", "Romania 90:10, Greece 10:90; Stalin kept his word on Greece.", ["cw1-percentages"])
      ] },
    { link: "undermined", how: "Once Hitler was beaten, the glue went.",
      title: "Demise", summary: "1943–45.",
      steps: [
        { row: [
          N("cw1-g-leaders", "stc", "New leaders", "1945", "Truman for Roosevelt; Attlee for Churchill.", ["cw1-ga-demise"]),
          N("cw1-g-issues", "stc", "New issues", "1944–45", "Atomic bomb, Second Front, UN, Lend-Lease ended.", ["cw1-new-issues-1944", "cw1-actions-1943-45"]),
          N("cw1-g-gp", "ltc", "German and Polish problems", "1943–45", "Reparations; Lublin vs London; Katyn; Warsaw Uprising.", ["cw1-german-polish"])
        ] },
        K("intensified", "The world became bipolar."),
        N("cw1-g-bipolar", "res-", "Bipolar order", "1945", "USA and USSR filled the vacuum.", ["cw1-german-polish", "cw1-sources-1943-45"], { go: "cw1-yalta" })
      ] }
  ],
  judge: { prompt: "Why did the Grand Alliance break down? Rank the factors.", factors: ["cw1-g-leaders", "cw1-g-issues", "cw1-g-gp", "cw1-g-bipolar"],
           notes_view: "Structural explanations (bipolarity, end of the common threat) and personalities; radically different postwar visions (Edwards, 2002)." },
  historians: [
    { who: "Williamson (2001)", view: "Alliances need a common danger or shared principles; postwar Europe had neither — 'the real glue was Hitler'.", nodes: ["cw1-g-bipolar"] },
    { who: "Calvocoressi (2001)", view: "The 1941–45 alliance was a 'marriage of convenience'.", nodes: ["cw1-g-form"] },
    { who: "Philips (2001)", view: "Truman's anti-Soviet stance stemmed from inexperience, a desire to appear strong and hawkish advisors.", nodes: ["cw1-g-leaders"] }
  ],
  takeaways: [
    "Barbarossa made the alliance; Hitler held it together.",
    "New leaders and issues strained it.",
    "A bipolar world replaced it."
  ]
});

L.push({
  id: "cw1-yalta", order: 4, level: 3, parent: "cw1-manif", kind: "chain",
  title: "Yalta and its aftermath, 1945",
  question: "Why did Yalta mask rather than resolve differences?",
  intro: "The Big Three agreed on Germany and the DLE, but Soviet security and Poland were left unresolved — and relations worsened before Potsdam.",
  clusters: [
    { title: "Yalta", summary: "Feb 1945.",
      steps: [
        N("cw1-y-yalta", "pol", "Yalta Conference", "Feb 1945", "Four zones; UN; Soviet entry into the Pacific war; border shift west.", ["yalta"]),
        K("led to", "A declaration on liberated states."),
        N("cw1-y-dle", "pol", "Declaration of Liberated Europe", "Feb 1945", "Representative interim governments; free elections.", ["cw1-dle"]),
        K("undermined", "The USSR did not abide by it."),
        N("cw1-y-viol", "res-", "DLE violated", "1945–48", "People's Democracies and rigged elections.", ["cw1-dle-violation"], { go: "cw1-sov" })
      ] },
    { link: "followed by", how: "Relations worsened before Potsdam.",
      title: "Feb–Jul 1945", summary: "Gap.",
      steps: [
        { row: [
          N("cw1-y-poles", "evt", "Polish exiles arrested", "1945", "Lured to Moscow for talks.", ["cw1-yalta-potsdam-gap"]),
          N("cw1-y-lend", "pol", "Truman ends Lend-Lease", "May 1945", "Seen as designed to weaken the USSR.", ["cw1-yalta-potsdam-gap", "cw1-tl-1945"])
        ] }
      ] }
  ],
  judge: { prompt: "How far did Yalta cause later tension? Weigh it.", factors: ["cw1-y-yalta", "cw1-y-dle", "cw1-y-viol", "cw1-y-lend"],
           notes_view: "Failure to recognise Soviet security concerns and the USSR's failure to abide by the DLE laid the foundation for a disagreeable Potsdam." },
  historians: [],
  takeaways: [
    "Yalta divided Germany and signed the DLE.",
    "Poland and Soviet security were left unresolved.",
    "Arrests and the end of Lend-Lease worsened relations."
  ]
});

L.push({
  id: "cw1-potsdam", order: 5, level: 3, parent: "cw1-manif", kind: "chain",
  title: "Potsdam and the atomic bomb",
  question: "Why was Potsdam more disagreeable than Yalta?",
  intro: "Disputes over reparations and Germany surfaced openly; the atomic bomb was seen by the USSR as reneging on agreements.",
  clusters: [
    { title: "Potsdam", summary: "Jul 1945.",
      steps: [
        N("cw1-p-rep", "pol", "Reparations compromise", "Jul 1945", "USSR wanted $10bn; each side took from its own zone.", ["potsdam"]),
        K("intensified", "Rival aims for Germany."),
        N("cw1-p-ger", "int", "Rival German aims", "1945", "US feared German anarchy; USSR wanted Germany weak.", ["potsdam"])
      ] },
    { link: "intensified", how: "The bomb changed the balance.",
      title: "Atomic bomb", summary: "Aug 1945.",
      steps: [
        N("cw1-p-bomb", "evt", "Hiroshima and Nagasaki", "Aug 1945", "Ended the Pacific war, limiting Soviet gains.", ["cw1-potsdam-abomb", "cw1-tl-1945"]),
        K("provoked response", "Stalin sped up Sovietisation."),
        N("cw1-p-sov", "res-", "Sovietisation hastened", "1945–", "Seen as reneging on agreements.", ["cw1-potsdam-abomb"])
      ] },
    { link: "supports", how: "Why the conferences mattered.",
      title: "Significance", summary: "Seeds of tension.",
      steps: [
        N("cw1-p-obs", "judg", "'Fateful conferences'", null, "US sought an order to thrive in; USSR one to be secure in.", ["cw1-conferences-obs"])
      ] }
  ],
  judge: { prompt: "Why did Potsdam deepen tension? Rank the factors.", factors: ["cw1-p-rep", "cw1-p-ger", "cw1-p-bomb", "cw1-p-sov"],
           notes_view: "The US sought an order in which it could thrive, the USSR one in which it could be secure; these 'fateful conferences' sowed the seeds. Revisionists cite the bomb as intimidation." },
  historians: [],
  takeaways: [
    "Reparations and Germany divided the allies.",
    "The bomb limited Soviet gains and hastened Sovietisation.",
    "Differences masked at Yalta unravelled."
  ]
});

L.push({
  id: "cw1-sov", order: 6, level: 3, parent: "cw1-manif", kind: "chain",
  title: "Sovietisation of Eastern Europe",
  question: "Was Sovietisation planned expansion or security-driven?",
  intro: "A gradual 'salami' process imposed communist control in two waves — but Stalin's aims in 1945–46 were more limited than traditionalists claim.",
  clusters: [
    { title: "Process", summary: "Salami tactics.",
      steps: [
        N("cw1-s-wave1", "pol", "First wave", "before 1947", "Poland, Bulgaria, Romania.", ["sovietisation"]),
        K("intensified", "Hardening US attitudes and Tito's break."),
        N("cw1-s-wave2", "pol", "Second wave", "1947–48", "Hungary, Czechoslovakia.", ["sovietisation"]),
        K("led to", "Total communist control."),
        N("cw1-s-stalin", "res-", "Mini-Stalins", "1945–48", "Bierut, Gottwald, Rákosi; Masaryk found dead.", ["cw1-stalinisation"])
      ] },
    { link: "contradicts", how: "Historians qualify the picture.",
      title: "Nuance", summary: "Limited aims.",
      steps: [
        N("cw1-s-nuance", "int", "No master plan early on", "1945–47", "Free Czech elections (1946); communists in the West restrained.", ["cw1-sovietisation-nuance"])
      ] }
  ],
  judge: { prompt: "Was Sovietisation expansionist or defensive? Weigh the evidence.", factors: ["cw1-s-wave1", "cw1-s-wave2", "cw1-s-stalin", "cw1-s-nuance"],
           notes_view: "Key traditionalist evidence of expansionism and DLE violation; the nuance supports security-first and post-Cold War 'no master plan' views." },
  historians: [
    { who: "Seton-Watson", view: "Genuine coalitions → sham coalitions → total communist control.", nodes: ["cw1-s-stalin"] },
    { who: "Edwards (2002)", view: "Stalin did not seek all of Eastern Europe in 1945–46.", nodes: ["cw1-s-nuance"] },
    { who: "Painter (1999)", view: "The Soviets discouraged revolution by Western communist parties; COMINFORM (1947) ended accommodation.", nodes: ["cw1-s-nuance"] }
  ],
  takeaways: [
    "Two waves of Sovietisation, before and after 1947.",
    "Seton-Watson: genuine → sham → total control.",
    "Early Soviet aims were limited."
  ]
});

L.push({
  id: "cw1-kennan", order: 7, level: 3, parent: "cw1-manif", kind: "causal",
  title: "Long Telegram and Iron Curtain",
  question: "How did Western perceptions harden in 1946?",
  intro: "Kennan analysed Soviet conduct as internally driven; Churchill publicly named the iron curtain — both hardened Western attitudes.",
  clusters: [
    { title: "Two warnings", summary: "1946.",
      steps: [
        { split: [
          { h: "Kennan", steps: [
            N("cw1-k-tel", "int", "Long Telegram", "Feb 1946", "Ideology, insecurity, 'neurotic' leaders; Article X (1947).", ["longtelegram"]),
            K("led to", "Containment."),
            N("cw1-k-cont", "pol", "Containment", "1947–", "'Unalterable counter-force'; Kennan later said the danger was political.", ["cw1-kennan-containment"])
          ] },
          { h: "Churchill", steps: [
            N("cw1-k-iron", "evt", "Iron Curtain speech", "Mar 1946", "'From Stettin… to Trieste'; but Russia did not desire war.", ["ironcurtain"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Hardened attitudes.",
      title: "Impact", summary: "Firmer US policy.",
      steps: [
        N("cw1-k-hard", "res-", "Attitudes harden", "1946–47", "Firmer Truman policy; Soviet fears of encirclement.", ["ironcurtain", "longtelegram"], { go: "cw1-truman" })
      ] }
  ],
  judge: { prompt: "How far did these 1946 warnings shape US policy? Weigh them.", factors: ["cw1-k-tel", "cw1-k-cont", "cw1-k-iron", "cw1-k-hard"],
           notes_view: "US perception driving policy; Churchill's speech had powerful imagery but limited authority — useful for 'professed defensive vs perceived aggressive' evaluation." },
  historians: [ { who: "Kennan (1946–47; 1984)", view: "Soviet aggression was internally driven and needed long-term containment, though he later said the danger was political, not military.", nodes: ["cw1-k-tel", "cw1-k-cont"] } ],
  takeaways: [
    "Kennan: Soviet conduct internally driven → containment.",
    "Churchill: an iron curtain, but no Soviet desire for war.",
    "Both hardened Western attitudes."
  ]
});

L.push({
  id: "cw1-truman", order: 8, level: 3, parent: "cw1-manif", kind: "chain",
  title: "The Truman Doctrine, 1947",
  question: "Why was the Truman Doctrine 'the point of no return'?",
  intro: "Truman used Greece and Turkey to frame a global struggle of freedom vs oppression — and the USSR reacted.",
  clusters: [
    { title: "Doctrine", summary: "Mar 1947.",
      steps: [
        N("cw1-tr-ctx", "stc", "British withdrawal from Greece", "1947", "A vacuum; Stalin had been neutral in the Greek Civil War.", ["truman"]),
        K("provoked response", "Truman framed it ideologically."),
        N("cw1-tr-doc", "tp", "Truman Doctrine", "Mar 1947", "Freedom vs oppression; containment begins.", ["truman", "cw1-truman-significance"])
      ] },
    { link: "provoked response", how: "Both sides escalated.",
      title: "Reactions", summary: "Action-reaction.",
      steps: [
        { split: [
          { h: "USSR", steps: [ N("cw1-tr-ussr", "res-", "COMINFORM; 'Two Camps'", "Sep 1947", "Second wave of Sovietisation.", ["cw1-truman-impact"]) ] },
          { h: "USA", steps: [ N("cw1-tr-us", "res-", "US build-up", "1947–48", "Bombs 13 → 50; National Security Act.", ["cw1-truman-impact", "cw1-truman-significance"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "How far did the Truman Doctrine escalate the Cold War? Weigh it.", factors: ["cw1-tr-ctx", "cw1-tr-doc", "cw1-tr-ussr", "cw1-tr-us"],
           notes_view: "Central to revisionist arguments that the US escalated; shows the action-reaction cycle in its clearest form." },
  historians: [],
  takeaways: [
    "Truman framed Greece and Turkey as a global struggle.",
    "It ended the Grand Alliance and broke US isolationism.",
    "The USSR answered with COMINFORM and more Sovietisation."
  ]
});

L.push({
  id: "cw1-marshall", order: 9, level: 3, parent: "cw1-manif", kind: "chain",
  title: "The Marshall Plan and COMECON",
  question: "Was the Marshall Plan economic aid or containment?",
  intro: "Marshall's aid was the economic half of 'the same walnut'; the USSR rejected it as 'dollar imperialism' and built COMECON.",
  clusters: [
    { title: "Plan", summary: "Jun 1947.",
      steps: [
        N("cw1-m-plan", "pol", "Marshall Plan", "Jun 1947", "$17bn over 4 years ($13bn, 1948–52).", ["marshall"]),
        K("supports", "Stated vs real aims."),
        N("cw1-m-why", "int", "Real function: containment", "1947", "Communists held ~20% in France and Italy.", ["cw1-marshall-reasons"])
      ] },
    { link: "led to", how: "Recovery and rejection.",
      title: "Impact", summary: "Europe divided.",
      steps: [
        { split: [
          { h: "West", steps: [ N("cw1-m-recov", "res+", "Recovery", "1948–52", "Output +35%; 75% spent on US goods.", ["cw1-marshall-impact"]) ] },
          { h: "East", steps: [
            N("cw1-m-reject", "res-", "Soviet rejection", "1947", "'Dollar imperialism'; satellites barred.", ["cw1-marshall-impact"]),
            K("led to", "A Soviet economic bloc."),
            N("cw1-m-comecon", "pol", "COMECON", "Jan 1949", "Enforced specialisation to control satellites.", ["cw1-comecon-bomb"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "Was the Marshall Plan economic or political? Weigh it.", factors: ["cw1-m-plan", "cw1-m-why", "cw1-m-recov", "cw1-m-reject"],
           notes_view: "Supports both economic (revisionist) and containment readings; economics subordinated to security as the USSR rejected aid it needed." },
  historians: [ { who: "Edwards (2002)", view: "The Marshall Plan's real function was containment.", nodes: ["cw1-m-why"] } ],
  takeaways: [
    "Marshall aid: $13bn; output +35%.",
    "Real function: containment.",
    "The USSR rejected it and built COMECON."
  ]
});

L.push({
  id: "cw1-berlin", order: 10, level: 3, parent: "cw1-manif", kind: "chain",
  title: "The Berlin Blockade, 1948–49",
  question: "Why was Berlin the climax of Cold War I?",
  intro: "Western moves to rebuild Germany, capped by the Deutsche Mark, provoked a Soviet blockade; the airlift beat it and Germany split.",
  clusters: [
    { title: "Causes", summary: "Rebuilding Germany.",
      steps: [
        N("cw1-b-ctx", "ltc", "US reverse course", "1946–48", "Bizonia; Stuttgart speech; Czech coup (Mar 1948).", ["cw1-berlin-context"]),
        K("triggered", "Currency reform."),
        N("cw1-b-dm", "trig", "Operation Bird Dog", "Jun 1948", "Deutsche Mark; inflation in the East.", ["cw1-bird-dog"])
      ] },
    { link: "provoked response", how: "Stalin blockaded Berlin.",
      title: "Crisis", summary: "11 months.",
      steps: [
        N("cw1-b-block", "evt", "Blockade", "24 Jun 1948", "Road, rail, power cut; 'tip of a bayonet'.", ["berlin"]),
        K("provoked response", "The West flew in supplies."),
        N("cw1-b-air", "res+", "Airlift wins", "May 1949", "275,000 flights; Stalin backed down.", ["berlin"])
      ] },
    { link: "led to", how: "Division and escalation.",
      title: "Consequences", summary: "Lasting split.",
      steps: [
        N("cw1-b-split", "res-", "Germany divided", "1949", "FRG and GDR; NATO hastened.", ["cw1-berlin-consequences", "cw1-tl-1949-55"], { go: "cw1-nato" }),
        K("followed by", "The USSR caught up."),
        N("cw1-b-bomb", "evt", "Soviet atomic bomb", "Aug 1949", "Arms race; Cold War spreads to Korea.", ["cw1-comecon-bomb", "cw1-berlin-consequences"])
      ] }
  ],
  judge: { prompt: "Who was more responsible for the Berlin crisis? Weigh it.", factors: ["cw1-b-ctx", "cw1-b-dm", "cw1-b-block", "cw1-b-air"],
           notes_view: "The climax of Cold War I, closest to hot war; the USSR saw a repudiation of Yalta, the US saw Soviet aggression." },
  historians: [],
  takeaways: [
    "Western currency reform provoked the blockade.",
    "The airlift forced Stalin to back down.",
    "Germany split; NATO formed; the USSR got the bomb."
  ]
});

L.push({
  id: "cw1-nato", order: 11, level: 3, parent: "cw1-manif", kind: "chain",
  title: "NATO and the Warsaw Pact",
  question: "How did military blocs complete Europe's division?",
  intro: "Twelve Western states formed NATO; its expansion to West Germany prompted the Warsaw Pact.",
  clusters: [
    { title: "NATO", summary: "1949.",
      steps: [
        N("cw1-n-nato", "pol", "NATO founded", "4 Apr 1949", "12 members; Article 5; built on Dunkirk and Brussels treaties.", ["nato"]),
        K("contradicts", "Was a Soviet attack real?"),
        N("cw1-n-edw", "int", "No real invasion threat", "1949", "Edwards: never regarded as a real possibility.", ["cw1-nato-edwards"])
      ] },
    { link: "followed by", how: "Korea militarised and expanded it.",
      title: "Expansion", summary: "1952–55.",
      steps: [
        N("cw1-n-exp", "pol", "West Germany joins", "1955", "A U-turn showing Western fear of communism.", ["cw1-nato-expansion"]),
        K("provoked response", "The USSR replied."),
        N("cw1-n-wp", "pol", "Warsaw Pact", "May 1955", "Later used against Hungary and Czechoslovakia.", ["cw1-warsaw-pact"])
      ] },
    { link: "led to", how: "Division complete.",
      title: "Outcome", summary: "By 1955.",
      steps: [
        N("cw1-n-done", "res-", "Europe fully divided", "1955", "Ideological, political, economic, geographic, military.", ["cw1-obs-1950-55"])
      ] }
  ],
  judge: { prompt: "Were the alliances defensive or provocative? Weigh the evidence.", factors: ["cw1-n-nato", "cw1-n-edw", "cw1-n-exp", "cw1-n-wp"],
           notes_view: "Revisionist evidence of Western provocation, but also Western fear; ironically Soviet actions forced the West to consolidate and revive Germany." },
  historians: [],
  takeaways: [
    "NATO (1949): Article 5 mutual defence.",
    "West Germany's entry (1955) prompted the Warsaw Pact.",
    "By 1955 Europe was divided on every dimension."
  ]
});

L.push({
  id: "cw1-manif", order: 12, level: 1, parent: "cw1-top", kind: "chain",
  title: "Manifestations, 1945–1955",
  question: "How did tensions manifest and escalate?",
  intro: "Conferences sowed the seeds; 1946 hardened attitudes; 1947–49 divided Europe; alliances completed the division.",
  clusters: [
    { title: "1945", summary: "Conferences.",
      steps: [
        { row: [
          N("cw1-x-yalta", "pol", "Yalta", "Feb 1945", "Differences masked.", ["yalta"], { go: "cw1-yalta" }),
          N("cw1-x-pots", "pol", "Potsdam", "Jul 1945", "Differences surfaced.", ["potsdam"], { go: "cw1-potsdam" })
        ] }
      ] },
    { link: "followed by", how: "Attitudes hardened.",
      title: "1945–46", summary: "Hardening.",
      steps: [
        { row: [
          N("cw1-x-sov", "pol", "Sovietisation", "1945–48", "Salami tactics.", ["sovietisation"], { go: "cw1-sov" }),
          N("cw1-x-ken", "int", "Long Telegram; Iron Curtain", "1946", "Containment logic.", ["longtelegram", "ironcurtain"], { go: "cw1-kennan" })
        ] }
      ] },
    { link: "intensified", how: "Europe divided.",
      title: "1947–49", summary: "Climax.",
      steps: [
        { row: [
          N("cw1-x-tru", "tp", "Truman Doctrine", "Mar 1947", "Point of no return.", ["truman"], { go: "cw1-truman" }),
          N("cw1-x-mar", "pol", "Marshall Plan", "Jun 1947", "Other half of the walnut.", ["marshall"], { go: "cw1-marshall" }),
          N("cw1-x-ber", "evt", "Berlin Blockade", "1948–49", "Climax of Cold War I.", ["berlin"], { go: "cw1-berlin" })
        ] },
        K("supports", "A pattern emerged."),
        N("cw1-x-obs", "int", "Defensive vs aggressive", "1947–49", "Economics subordinated to security; manifestations more concrete.", ["cw1-obs-1947-49"])
      ] },
    { link: "led to", how: "Military blocs.",
      title: "1949–55", summary: "Completion.",
      steps: [
        N("cw1-x-nato", "res-", "NATO and Warsaw Pact", "1949–55", "Division of Europe complete.", ["nato", "cw1-warsaw-pact"], { go: "cw1-nato" })
      ] }
  ],
  judge: { prompt: "Which event did most to divide Europe? Rank them.", factors: ["cw1-x-yalta", "cw1-x-sov", "cw1-x-tru", "cw1-x-mar", "cw1-x-ber", "cw1-x-nato"],
           notes_view: "Originators professed actions as defensive; recipients perceived them as aggressive. 1948–49 was the climax of Cold War I; after this, spheres of influence stabilised." },
  historians: [],
  takeaways: [
    "1945 conferences sowed the seeds.",
    "1947–49: Truman, Marshall and Berlin divided Europe.",
    "NATO and the Warsaw Pact completed the division."
  ]
});

L.push({
  id: "cw1-causes", order: 13, level: 1, parent: "cw1-top", kind: "causal",
  title: "Causes of the tensions",
  question: "Why did tensions emerge between the USA and USSR?",
  intro: "Substantive issues — Europe's political shape, economics and security — fed an action-reaction cycle interpreted through ideology.",
  clusters: [
    { title: "Substantive issues", summary: "(A).",
      steps: [
        { row: [
          N("cw1-c-pol", "ltc", "Political shape of Europe", "1944–47", "Poland; Soviet influence vs self-determination.", ["cw1-cause-political", "cw1-motive-political"]),
          N("cw1-c-econ", "ltc", "Economic issues", "1945–55", "Rebuild vs weaken Germany; really about security.", ["cw1-cause-economic", "cw1-motive-economic"])
        ] },
        K("intensified", "Security fears clashed."),
        { split: [
          { h: "USA", steps: [ N("cw1-c-secus", "ltc", "Pre-emptive insecurity", "1941–47", "Feared Eurasian domination; intelligence saw no war for 5–10 years.", ["cw1-cause-security-us"]) ] },
          { h: "USSR", steps: [ N("cw1-c-secussr", "ltc", "Real insecurity", "1941–47", "'Real, repeated and recent'; buffer zone.", ["cw1-cause-security-ussr", "cw1-motive-security"]) ] }
        ] }
      ] },
    { link: "led to", how: "A cycle took on a life of its own.",
      title: "Action-reaction", summary: "(B).",
      steps: [
        N("cw1-c-cycle", "int", "Action-reaction cycle", "1939–55", "The stronger US misread Soviet security as expansion.", ["cw1-action-reaction"]),
        K("intensified", "Ideology framed it."),
        N("cw1-c-ideo", "int", "Ideology as lens", null, "Confirmed pre-existing prejudices.", ["cw1-ideology", "cw1-motive-ideological"], { go: "cw1-motives" })
      ] }
  ],
  judge: { prompt: "What was the most important cause of tension? Rank them.", factors: ["cw1-c-pol", "cw1-c-econ", "cw1-c-secus", "cw1-c-secussr", "cw1-c-cycle", "cw1-c-ideo"],
           notes_view: "Security concerns outweighed economic ones; an apparently economic conflict was really about differing security perceptions; ideology was the lens through which the cycle was interpreted and intensified." },
  historians: [
    { who: "Leffler (2005)", view: "The US feared Soviet domination of Eurasia, but its insecurity was pre-emptive rather than based on a real threat.", nodes: ["cw1-c-secus"] },
    { who: "McCauley (1995)", view: "The stronger US misread legitimate Soviet security interests as expansionism, starting a vicious action-reaction cycle.", nodes: ["cw1-c-cycle"] },
    { who: "Varsori (2013)", view: "The Cold War confirmed pre-existing cultural, psychological and ideological prejudices.", nodes: ["cw1-c-ideo"] }
  ],
  takeaways: [
    "Poland, Germany and economics were substantive issues.",
    "Soviet insecurity was real; US insecurity pre-emptive.",
    "An action-reaction cycle, framed by ideology."
  ]
});

L.push({
  id: "cw1-motives", order: 14, level: 3, parent: "cw1-causes", kind: "matrix",
  title: "Motivations by category",
  question: "How did US and Soviet motives differ?",
  intro: "From the notes' Section 23.2 supplement.",
  matrix: {
    cols: ["USA", "USSR"],
    rows: [
      { h: "Ideological", cells: ["Wilsonian idealism, capitalism", "Class struggle; secondary to security after 1945"] },
      { h: "Political", cells: ["Stronger: parties, doves vs hawks", "Weaker in Stalin's system"] },
      { h: "Border security", cells: ["Less important: oceans", "More important: invasions via Eastern Europe"] },
      { h: "Economic", cells: ["Less: markets, Depression memory", "More: reparations; secondary by 1947"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "Security mattered more to the USSR.",
    "Politics mattered more in the democratic USA.",
    "Economics became secondary to security by 1947."
  ]
});

L.push({
  id: "cw1-arg", order: 15, level: 1, parent: "cw1-top", kind: "argument",
  title: "Who was responsible for the Cold War?",
  question: "'Stalin was mainly responsible for the Cold War.' How far do you agree?",
  intro: "Weigh the four historiographical schools and the evidence each uses.",
  clusters: [
    { title: "Claim", summary: "Stalin to blame.",
      steps: [ N("cw1-q-claim", "judg", "Stalin was responsible", null, "Soviet expansionism caused the Cold War.", ["historiography1"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "Four schools", summary: "Blame.",
      steps: [
        { split: [
          { h: "Blame Stalin", steps: [
            N("cw1-q-trad", "evid", "Traditionalists", "1940s", "DLE ignored, Sovietisation, COMECON, Berlin, A-bomb.", ["cw1-traditionalist"]),
            K("supports", "Archives later backed this."),
            N("cw1-q-pcw", "evid", "Post-Cold War", "post-1991", "Stalin's paranoid security obsession, but no master plan.", ["cw1-postcoldwar"])
          ] },
          { h: "Blame shared or US", steps: [
            N("cw1-q-rev", "evid", "Revisionists", "1960s", "A-bomb, Truman, Marshall, NATO — 'US imperialism'.", ["cw1-revisionist"]),
            K("contradicts", "Both pursued interests."),
            N("cw1-q-post", "evid", "Post-Revisionists", "1970s–80s", "Both, Stalin more: empire by invitation vs imposition.", ["cw1-postrevisionist", "cw1-kissinger"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing them.",
      title: "Judgement", summary: "Synthesis.",
      steps: [ N("cw1-q-judge", "judg", "A nuanced synthesis", null, "Ideology, strategic interests and the self-reinforcing cycle; schools shaped by their contexts.", ["cw1-hist-conclusion", "cw1-eval-phases", "cw1-eval-hotwar", "cw1-guiding-qs", "cw1-syllabus"]) ] }
  ],
  judge: { prompt: "How far was Stalin responsible? Rank the schools' evidence.", factors: ["cw1-q-trad", "cw1-q-pcw", "cw1-q-rev", "cw1-q-post"],
           notes_view: "Current literature favours a nuanced synthesis of ideology, strategic interests and the action-reaction cycle; interpretations were grounded in ideological differences and shaped by the ongoing Cold War (Painter & Leffler, 2005)." },
  historians: [
    { who: "Traditionalists (Feis, Schlesinger, Kennan)", view: "Stalin's ideologically driven expansionism caused the Cold War; the US merely defended itself.", nodes: ["cw1-q-trad"] },
    { who: "Revisionists (W.A. Williams, Kolko, McCormick)", view: "US anti-communism and economic expansionism share or bear primary blame.", nodes: ["cw1-q-rev"] },
    { who: "Post-Revisionists (Gaddis 1983, Leffler)", view: "Both pursued strategic interests, but Stalin bears more blame.", nodes: ["cw1-q-post"] },
    { who: "Post-Cold War (Gaddis, Westad)", view: "Stalin's paranoid security obsession bears responsibility, though he had no master plan.", nodes: ["cw1-q-pcw"] },
    { who: "Westad (2010)", view: "The Cold War must be placed in the larger context of chronological time and geographical space.", nodes: ["cw1-q-judge"] }
  ],
  takeaways: [
    "Traditionalists and post-Cold War historians blame Stalin.",
    "Revisionists blame the US; post-revisionists both.",
    "Best answer: a synthesis; evaluate each source's context."
  ]
});
})();
