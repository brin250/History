// v2 flow charts: the rise of the Japanese (1947–1991) and Chinese (1978–2000) economies (cards in data/ea.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ea = window.FLOWS2.ea || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "ea-top", order: 1, level: 0, kind: "causal",
  title: "The rise of Japan and China",
  question: "What led to the rise of the Japanese economy (1947–1991) and the Chinese economy (1978–2000)?",
  intro: "Both combined strong state direction, market dynamism and favourable international conditions — but Japan rebuilt a market economy, while China transformed a command economy.",
  clusters: [
    { title: "Two miracles", summary: "Japan and China.",
      steps: [
        { split: [
          { h: "Japan, 1947–91", steps: [
            N("ea-t-jp", "res+", "Japanese Miracle", "1950–73", "GNP ~10% p.a.; then ~4% stable growth to 1991.", ["ea-jp-eq", "ea-jp-phases"], { go: "ea-jp" })
          ] },
          { h: "China, 1978–2000", steps: [
            N("ea-t-cn", "res+", "Reform and opening", "1978–2000", "Growth 9.2% p.a.; command to market economy.", ["ea-cn-eq", "ea-cn-indicators"], { go: "ea-cn" })
          ] }
        ] }
      ] },
    { link: "supports", how: "Comparing them.",
      title: "Comparison", summary: "Similar ingredients, different transformations.",
      steps: [
        N("ea-t-compare", "int", "State, market, world", null, "MITI vs Deng; keiretsu vs TVEs; US reliance vs diversified support.", ["ea-compare"], { go: "ea-compare" })
      ] }
  ],
  judge: { prompt: "Which factor best explains both rises? Weigh them.", factors: ["ea-t-jp", "ea-t-cn", "ea-t-compare"],
           notes_view: "Both combined strong state direction with market dynamism and favourable international conditions; China's reform was gradual and dual-track under one-party control, and not linear." },
  historians: [ { who: "Beckley, Horiuchi and Miller (2018)", view: "Japan's institutions worked partly because of its 'privileged geopolitical environment'.", nodes: ["ea-t-jp"] } ],
  takeaways: [
    "Japan: 10% growth (1950–73), then ~4%.",
    "China: 9.2% growth after 1978.",
    "Japan rebuilt a market economy; China left a command economy."
  ]
});

L.push({
  id: "ea-jp", order: 2, level: 1, parent: "ea-top", kind: "causal",
  title: "Why Japan's economy rose, 1947–1991",
  question: "What led to the rise of the Japanese economy?",
  intro: "Four interacting factor clusters — government, keiretsu, socio-economic change and international developments — dominated in different phases.",
  clusters: [
    { title: "Four clusters", summary: "Interacting factors.",
      steps: [
        { row: [
          N("ea-j-intl", "ltc", "International developments", "1945–73", "Occupation, Korean War, US security, technology, markets.", ["ea-jp-intl-eval"], { go: "ea-jp-intl" }),
          N("ea-j-gov", "pol", "Government intervention", "1949–80s", "MITI and the developmental state.", ["miti"], { go: "ea-jp-gov" }),
          N("ea-j-kei", "act", "Keiretsu system", "1950s–80s", "Main banks, cross-shareholdings, lifetime employment.", ["keiretsu"], { go: "ea-jp-keiretsu" }),
          N("ea-j-socio", "ltc", "Socio-economic changes", "1946–80s", "Education, savings, consensus.", ["ea-jp-socio-eval"], { go: "ea-jp-socio" })
        ] },
        K("intensified", "The factors reinforced each other."),
        N("ea-j-link", "int", "Factors interact", null, "MITI ↔ keiretsu; savings → banks → investment; US umbrella → resources for MITI.", ["ea-jp-interaction", "ea-jp-linkages"])
      ] },
    { link: "led to", how: "Two phases of growth.",
      title: "Phases", summary: "Rapid then stable.",
      steps: [
        N("ea-j-rapid", "res+", "Rapid growth", "1945–73", "GNP 10% p.a.; 7% of US GNP (1955) → one-third (1973).", ["ea-jp-miracle-gnp", "ea-jp-phases"]),
        K("followed by", "Shocks slowed but did not stop growth."),
        N("ea-j-stable", "res±", "Stable growth", "1974–91", "~4% p.a. despite oil shocks; 1990 bubble burst.", ["ea-jp-phases", "ea-jp-miracle-other"], { go: "ea-jp-shocks" })
      ] },
    { link: "supports", how: "Weighing the factors.",
      title: "Verdict", summary: "Phases matter.",
      steps: [
        N("ea-j-verdict", "judg", "Privileged environment, able institutions", null, "Institutions enhanced by geopolitics; without it, solid growth but probably not a miracle.", ["ea-jp-beckley"], { go: "ea-jp-arg" })
      ] }
  ],
  judge: { prompt: "Which factor contributed most to Japan's rise? Rank them.", factors: ["ea-j-intl", "ea-j-gov", "ea-j-kei", "ea-j-socio"],
           notes_view: "Argue interaction across time: US/international factors critical in the 1950s–60s; government-led policy dominant in the high-growth era; savings and education constants that magnified other factors." },
  historians: [ { who: "Beckley, Horiuchi and Miller (2018)", view: "Japan's institutions were enhanced by a privileged geopolitical environment; without it, solid growth but probably not a miracle.", nodes: ["ea-j-verdict"] } ],
  takeaways: [
    "Four clusters: international, government, keiretsu, socio-economic.",
    "Rapid growth (1945–73), stable growth (1974–91).",
    "Factors interacted; their weighting changed by phase."
  ]
});

L.push({
  id: "ea-jp-occ", order: 3, level: 3, parent: "ea-jp-intl", kind: "chain",
  title: "Occupation and the Korean War",
  question: "How did the Occupation and Korean War set up Japan's recovery?",
  intro: "SCAP first punished and reformed Japan, then shifted to rehabilitation; the Korean War made Japan a supply depot.",
  clusters: [
    { title: "Occupation", summary: "Punish, then rebuild.",
      steps: [
        N("ea-o-punish", "pol", "Punish and reform", "1945–47", "War crimes trials; land reform; zaibatsu break-up; Art. 9.", ["ea-jp-occupation", "ea-jp-timeline1"]),
        K("followed by", "Fear of communism reversed priorities."),
        N("ea-o-reverse", "tp", "Reverse Course", "1947/48–50", "Rehabilitation over punishment; Dodge Line; MITI created.", ["ea-jp-occupation", "ea-jp-timeline1"])
      ] },
    { link: "accelerated", how: "War next door boosted industry.",
      title: "Korean War boom", summary: "Tokuju.",
      steps: [
        N("ea-o-tokuju", "evt", "Special procurements", "1950–53", "Supply base for UN forces; production +50% in a year.", ["koreaprocurement"]),
        K("led to", "Foreign exchange funded bottlenecks."),
        N("ea-o-forex", "res+", "Import capacity doubled", "1952–53", "37% of forex receipts; power, steel, shipping, coal.", ["koreaprocurement"])
      ] },
    { link: "followed by", how: "Formal peace and alliance.",
      title: "Peace", summary: "1951–52.",
      steps: [
        N("ea-o-sf", "pol", "San Francisco Treaty", "Sep 1951", "49/52 signed; US bases for a security pact; yen at 350:$1.", ["ea-jp-occupation", "ea-jp-timeline1"], { go: "ea-jp-intl" })
      ] }
  ],
  judge: { prompt: "How important was the Occupation era to Japan's rise? Weigh it.", factors: ["ea-o-punish", "ea-o-reverse", "ea-o-tokuju", "ea-o-sf"],
           notes_view: "The Cold War context made international factors the precondition for Japan's growth — Japan's timing was fortune, not policy choice (Beckley et al., 2018)." },
  historians: [],
  takeaways: [
    "Reform gave way to the Reverse Course.",
    "Korean War procurements boosted production 50%.",
    "Peace came with a US security pact."
  ]
});

L.push({
  id: "ea-jp-gov", order: 4, level: 3, parent: "ea-jp", kind: "chain",
  title: "MITI and the developmental state",
  question: "How far did government intervention drive Japan's growth?",
  intro: "MITI led a developmental state through administrative guidance, picking winners from labour-intensive industries to high technology.",
  clusters: [
    { title: "Agencies", summary: "Pilot agency.",
      steps: [
        N("ea-g-devstate", "int", "Developmental state", null, "Elite bureaucracy and a pilot agency, without displacing the market.", ["ea-jp-devstate"]),
        K("enabled", "Agencies carried it out."),
        { row: [
          N("ea-g-miti", "pol", "MITI", "1949", "Administrative guidance (gyosei shido).", ["miti"]),
          N("ea-g-agencies", "pol", "JDB, EPA, Council", "1948–52", "Below-market loans; non-binding plans; business advice.", ["ea-jp-agencies"])
        ] }
      ] },
    { link: "led to", how: "Plans and tools.",
      title: "Policy", summary: "Signals and targets.",
      steps: [
        N("ea-g-tools", "pol", "Industrial policy tools", "1948–75", "Protection, FILP, tax incentives, rationalisation laws.", ["ea-jp-indpolicy-tools"], { go: "ea-jp-tools" }),
        K("followed by", "Ikeda set a bold target."),
        N("ea-g-ikeda", "pol", "Income Doubling Plan", "1960", "Growth ~10% in year one vs 7.2% planned.", ["ea-jp-incomedoubling", "ea-jp-timeline2"]),
        K("led to", "Targets moved up the value chain."),
        N("ea-g-winners", "pol", "Picking winners", "1950s–80s", "Textiles → steel, autos → semiconductors → supercomputers.", ["ea-jp-pickwinners"]),
        K("led to", "MITI forced cooperation in chips."),
        N("ea-g-vlsi", "res+", "VLSI project", "1970s–87", "$116m; equipment share 10% → 35%; 1,000+ patents.", ["ea-jp-vlsi"])
      ] },
    { link: "supports", how: "Weighing the state.",
      title: "Evaluation", summary: "Strengths and limits.",
      steps: [
        { split: [
          { h: "Strength", steps: [ N("ea-g-good", "evid", "First-mover advantage", null, "Matched investment to comparative advantage.", ["ea-jp-gov-eval"]) ] },
          { h: "Limits", steps: [ N("ea-g-bad", "evid", "Firms defied MITI", null, "Honda entered autos; sunset industries entrenched.", ["ea-jp-gov-eval"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "How far was government intervention the key factor? Weigh the evidence.", factors: ["ea-g-miti", "ea-g-tools", "ea-g-ikeda", "ea-g-vlsi", "ea-g-bad"],
           notes_view: "Not a Soviet command economy, but state management was extensive (Gordon, 2003). Revisionists argue market forces and firm dynamism did more." },
  historians: [
    { who: "Johnson (1982/1995)", view: "Japan was a developmental state led by an elite bureaucracy and a pilot agency, without displacing market rationality.", nodes: ["ea-g-devstate"] },
    { who: "Gordon (2003)", view: "Not a command economy, but not a simple free-market miracle — state management was extensive.", nodes: ["ea-g-agencies"] },
    { who: "Ito (1996)", view: "Exports shifted from textiles and toys in the 1950s to automobiles and semiconductors in the 1980s.", nodes: ["ea-g-winners"] }
  ],
  takeaways: [
    "MITI led through administrative guidance.",
    "Picking winners moved industry up the value chain.",
    "Firms sometimes defied MITI; protection had costs."
  ]
});

L.push({
  id: "ea-jp-tools", order: 5, level: 3, parent: "ea-jp-gov", kind: "chain",
  title: "Protection, FILP and rationalisation",
  question: "How did Japan's industrial policy tools work?",
  intro: "The state shielded infant industries, then funded them with FILP loans, tax incentives and rationalisation laws.",
  clusters: [
    { title: "Protection", summary: "Infant industries.",
      steps: [
        N("ea-p-infant", "pol", "Infant-industry protection", "1950s–60s", "Car import ban; tariffs over 60%; 'banned unless listed' to 1962.", ["ea-jp-infant"]),
        K("led to", "Import substitution became export promotion."),
        N("ea-p-lift", "res+", "Bans lifted as firms matured", "1961–75", "Trucks 1961, colour TVs 1964, computers 1975.", ["ea-jp-indpolicy-tools", "ea-jp-infant"])
      ] },
    { link: "enabled", how: "Money and restructuring.",
      title: "Finance", summary: "FILP and tax.",
      steps: [
        { split: [
          { h: "Funding", steps: [ N("ea-p-filp", "pol", "FILP and low tax", "1948–75", "Agencies 14 → 52; corporate tax 19–22% vs 27–31% in US.", ["ea-jp-fiscal"]) ] },
          { h: "Restructuring", steps: [ N("ea-p-rational", "pol", "Rationalisation laws", "1952, 1964", "Tax relief for new equipment; subsidised consolidation.", ["ea-jp-fiscal", "ea-jp-indpolicy-tools"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "Which policy tool mattered most? Weigh them.", factors: ["ea-p-infant", "ea-p-lift", "ea-p-filp", "ea-p-rational"],
           notes_view: "Import substitution → export promotion; but protection also entrenched inefficient 'sunset' industries needing costly support later." },
  historians: [],
  takeaways: [
    "Protection shielded infant industries until mature.",
    "FILP and low taxes funded expansion.",
    "Rationalisation laws consolidated excess capacity."
  ]
});

L.push({
  id: "ea-jp-keiretsu", order: 6, level: 3, parent: "ea-jp", kind: "causal",
  title: "Keiretsu and lifetime employment",
  question: "How far did the keiretsu system drive Japan's growth?",
  intro: "Groups of firms linked by main banks and cross-shareholdings pooled capital, shared R&D and insured each other, backed by lifetime employment.",
  clusters: [
    { title: "Structure", summary: "Two forms.",
      steps: [
        N("ea-k-def", "ctx", "Keiretsu", "1950s", "20–40 firms; main bank; Big Six.", ["keiretsu"]),
        K("led to", "Two forms."),
        { split: [
          { h: "Horizontal", steps: [ N("ea-k-hor", "act", "Cross-industry groups", "1950s–70s", "Group bank; trading company; Sumitomo rescued Mazda.", ["ea-jp-horizontal"]) ] },
          { h: "Vertical", steps: [ N("ea-k-ver", "act", "Supplier pyramids", "1950s–80s", "Toyota suppliers; Matsushita; economies of scale.", ["ea-jp-vertical"]) ] }
        ] }
      ] },
    { link: "enabled", how: "Functions and labour.",
      title: "Functions", summary: "Capital, R&D, people.",
      steps: [
        { row: [
          N("ea-k-func", "res+", "Capital, R&D, MITI link", "1950s–80s", "Low-cost finance; strategic industries tracked MITI.", ["ea-jp-keiretsu-functions"]),
          N("ea-k-life", "res+", "Lifetime employment", "1950s–80s", "Training; enterprise unions; Just-In-Time and kaizen.", ["ea-jp-lifetime"])
        ] }
      ] },
    { link: "supports", how: "Weighing it.",
      title: "Evaluation", summary: "Strength and opacity.",
      steps: [
        { split: [
          { h: "Strength", steps: [ N("ea-k-good", "evid", "Competitive, long-term", null, "Pooled capital; insulated from short-termism.", ["ea-jp-keiretsu-eval"]) ] },
          { h: "Limits", steps: [ N("ea-k-bad", "evid", "Debt and opacity", null, "Cheap capital encouraged debt; low transparency.", ["ea-jp-keiretsu-eval"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "How far did the keiretsu drive growth? Weigh it.", factors: ["ea-k-hor", "ea-k-ver", "ea-k-func", "ea-k-life"],
           notes_view: "The private-sector factor that kept firms competitive and insulated from short-termism; it reinforced MITI policy. Cheap capital encouraged debt, and opacity reduced transparency." },
  historians: [
    { who: "Ozkan (2011)", view: "MITI and the keiretsu had a 'symbiotic relationship'.", nodes: ["ea-k-func"] },
    { who: "McGuire (2002)", view: "Keiretsu gave members in-group loans, domestic markets and international marketing capabilities.", nodes: ["ea-k-hor"] },
    { who: "Kensy (2001)", view: "'The whole of Japan is one big keiretsu' — the networks reduced market transparency.", nodes: ["ea-k-bad"] }
  ],
  takeaways: [
    "Horizontal and vertical keiretsu pooled capital and R&D.",
    "Lifetime employment enabled training and kaizen.",
    "Risks: excessive debt and opacity."
  ]
});

L.push({
  id: "ea-jp-socio", order: 7, level: 3, parent: "ea-jp", kind: "causal",
  title: "Education, savings and consensus",
  question: "How important were socio-economic factors?",
  intro: "Education, high savings and consensus culture were enabling, multiplier factors rather than standalone drivers.",
  clusters: [
    { title: "Factors", summary: "Three enablers.",
      steps: [
        { row: [
          N("ea-s-edu", "ltc", "Education reform", "1946–80s", "9 compulsory years; 91% of workforce high-school educated by 1971.", ["ea-jp-education"]),
          N("ea-s-save", "ltc", "High savings", "1950s–70s", "Household rate >20% from 1970; Japan 18.3% vs US 7%.", ["ea-jp-savings", "ea-jp-savings-reasons"]),
          N("ea-s-cons", "ltc", "Consensus culture", "1960s", "Toyo Rayon pivoted overnight, keeping all staff.", ["ea-jp-consensus"])
        ] },
        K("enabled", "They multiplied other factors."),
        N("ea-s-mult", "judg", "Multipliers, not drivers", null, "Savings fed banks and keiretsu; education supplied MITI's industries.", ["ea-jp-socio-eval"])
      ] }
  ],
  judge: { prompt: "How important were socio-economic factors? Weigh them.", factors: ["ea-s-edu", "ea-s-save", "ea-s-cons"],
           notes_view: "Best framed as enabling/multiplier factors: the precondition that made government and keiretsu strategies effective." },
  historians: [ { who: "Yamamura (1976)", view: "High savings came from rising income, bonuses, seniority wages, weak welfare, tax incentives and thrift (background only).", nodes: ["ea-s-save"] } ],
  takeaways: [
    "Education produced the world's most educated workforce.",
    "High savings funded investment via banks.",
    "Consensus eased restructuring — multipliers, not drivers."
  ]
});

L.push({
  id: "ea-jp-intl", order: 8, level: 3, parent: "ea-jp", kind: "causal",
  title: "Japan's international advantages",
  question: "How far did international developments make Japan's miracle possible?",
  intro: "The US provided security, technology and markets, and two wars brought windfalls — a 'privileged geopolitical environment'.",
  clusters: [
    { title: "Cold War support", summary: "US backing.",
      steps: [
        N("ea-i-occ", "ctx", "Occupation and Korea", "1945–53", "Reverse Course; Korean War procurements.", ["ea-jp-occupation"], { go: "ea-jp-occ" }),
        K("enabled", "The US provided three supports."),
        { row: [
          N("ea-i-sec", "pol", "Security guarantee", "1951–70", "Yoshida Doctrine; defence <1% of GDP by 1970.", ["ea-jp-security"]),
          N("ea-i-tech", "pol", "Technology transfer", "1950–62", "1,998 contracts; Toyota copied Ford.", ["ea-jp-techtransfer", "ea-jp-toyota"]),
          N("ea-i-market", "pol", "US market and GATT", "1955–60s", "Purchases +150%; >30% of exports.", ["ea-jp-usmarket"])
        ] },
        K("accelerated", "A second war windfall."),
        N("ea-i-viet", "evt", "Vietnam War", "1965–72", "~$1bn/yr; share of world GDP 5.7% → 12.9%.", ["ea-jp-vietnam"])
      ] },
    { link: "supports", how: "Weighing it.",
      title: "Evaluation", summary: "Necessary, not sufficient.",
      steps: [
        N("ea-i-eval", "judg", "Precondition, not sufficient", null, "Fortune of timing; but Japan converted support into capacity, unlike other allies.", ["ea-jp-intl-eval"])
      ] }
  ],
  judge: { prompt: "How far did international factors make the miracle? Rank them.", factors: ["ea-i-occ", "ea-i-sec", "ea-i-tech", "ea-i-market", "ea-i-viet"],
           notes_view: "Arguably the precondition for the other factors; but Japan still had to convert US support into productive capacity — domestic factors mattered for exploiting the opportunity." },
  historians: [
    { who: "Patrick and Rosovsky (1976)", view: "Japan's economy would have been 30% smaller by 1976 without the US defence umbrella.", nodes: ["ea-i-sec"] },
    { who: "Fujimoto (1998)", view: "Toyota modernised by adopting American methods after visiting Ford.", nodes: ["ea-i-tech"] },
    { who: "Forsberg (2000)", view: "The US desire to consolidate the Cold War alliance let Japan crack the American market.", nodes: ["ea-i-market"] },
    { who: "Schaller (1997)", view: "Japan earned ~$1bn/year from the Vietnam War.", nodes: ["ea-i-viet"] }
  ],
  takeaways: [
    "US security, technology and markets were vital.",
    "Korean and Vietnam Wars brought windfalls.",
    "Necessary but not sufficient."
  ]
});

L.push({
  id: "ea-jp-shocks", order: 9, level: 3, parent: "ea-jp", kind: "chain",
  title: "Shocks, adaptation and the bubble",
  question: "How did Japan sustain growth after 1971, and why did it falter?",
  intro: "Japan absorbed the Nixon Shock and oil crises better than the West, but trade friction, the Plaza Accord and the 1990 bubble exposed fragilities.",
  clusters: [
    { title: "Shocks", summary: "1971–73.",
      steps: [
        N("ea-x-nixon", "trig", "Nixon Shock", "1971", "Yen +16%; growth fell to 3%.", ["ea-jp-nixonshock"]),
        K("followed by", "Oil prices spiked."),
        N("ea-x-oil", "trig", "Oil crises", "1973, 1979", "Inflation 25% (1972–75); brief recession.", ["ea-jp-oil", "ea-jp-monetary"])
      ] },
    { link: "provoked response", how: "Japan adapted.",
      title: "Adaptation", summary: "Stable growth.",
      steps: [
        N("ea-x-adapt", "pol", "Monetary discipline, nuclear", "1975–85", "BOJ money targets; inflation <3%; nuclear 25% of power.", ["ea-jp-monetary", "ea-jp-oil"]),
        K("led to", "Growth outpaced the West."),
        N("ea-x-stable", "res+", "4–5% growth", "1975–89", "Double Europe's pace.", ["ea-jp-oil", "ea-jp-miracle-other"])
      ] },
    { link: "undermined", how: "Friction and finance.",
      title: "Limits", summary: "To 1990.",
      steps: [
        N("ea-x-lib", "pol", "Forced liberalisation", "1970s–90", "Car VERs (1978); capital controls lifted; Plaza endaka (1985).", ["ea-jp-liberalisation", "ea-jp-timeline2"]),
        K("led to", "Asset prices collapsed."),
        N("ea-x-bubble", "res-", "Bubble bursts", "1990", "Prolonged recession.", ["ea-jp-timeline2", "ea-jp-linkages"])
      ] }
  ],
  judge: { prompt: "How resilient was Japan's economy after 1971? Weigh the evidence.", factors: ["ea-x-nixon", "ea-x-oil", "ea-x-adapt", "ea-x-lib", "ea-x-bubble"],
           notes_view: "The stable-growth phase shows adaptive resilience across all factors; trade friction, sunset-industry costs and the 1990 collapse show structural fragilities. The Nixon Shock shows US goodwill was not unconditional." },
  historians: [],
  takeaways: [
    "Nixon Shock and oil crises hit Japan briefly.",
    "Monetary discipline and nuclear power sustained 4–5% growth.",
    "Trade friction and the 1990 bubble exposed fragilities."
  ]
});

L.push({
  id: "ea-jp-arg", order: 10, level: 1, parent: "ea-jp", kind: "argument",
  title: "Was government intervention most important?",
  question: "'Government intervention was the most important factor in Japan's economic rise, 1947–1991.' How far do you agree?",
  intro: "Test the claim against the keiretsu, socio-economic and international factors, phase by phase.",
  clusters: [
    { title: "Claim", summary: "Government key.",
      steps: [ N("ea-y-claim", "judg", "Government was key", null, "MITI coordinated capital, labour and opportunity.", ["ea-jp-theses"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "State vs others.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("ea-y-miti", "evid", "Picking winners worked", "1950s–80s", "Steel, autos, semiconductors; VLSI.", ["ea-jp-gov-eval", "ea-jp-vlsi"]),
            K("supports", "The state funded firms."),
            N("ea-y-filp", "evid", "Cheap capital", "1948–75", "FILP; JDB loans; low taxes.", ["ea-jp-fiscal"])
          ] },
          { h: "Against", steps: [
            N("ea-y-intl", "evid", "International precondition", "1945–73", "US security, technology, markets.", ["ea-jp-intl-eval"]),
            K("contradicts", "Firms acted alone."),
            N("ea-y-firms", "evid", "Firm dynamism", "1950s–80s", "Honda defied MITI; keiretsu R&D.", ["ea-jp-gov-eval", "ea-jp-keiretsu-eval"]),
            K("contradicts", "Society multiplied everything."),
            N("ea-y-socio", "evid", "Savings and education", "1946–80s", "Preconditions for state strategy.", ["ea-jp-socio-eval"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "By phase.",
      steps: [ N("ea-y-judge", "judg", "No single factor dominates", null, "Occupation/Korea: international; 1955–73: government + keiretsu; 1974–91: resilience across all.", ["ea-jp-theses", "ea-jp-beckley"]) ] }
  ],
  judge: { prompt: "How far was government intervention most important? Rank the evidence.", factors: ["ea-y-miti", "ea-y-filp", "ea-y-intl", "ea-y-firms", "ea-y-socio"],
           notes_view: "Thesis options: international factors necessary but not sufficient; government the coordinating factor; or no single factor — argue via phases." },
  historians: [],
  takeaways: [
    "For: picking winners, cheap capital.",
    "Against: US support, firm dynamism, society.",
    "Best answer: argue by phase."
  ]
});

L.push({
  id: "ea-cn", order: 11, level: 1, parent: "ea-top", kind: "chain",
  title: "Why China's economy rose, 1978–2000",
  question: "What led to the rise of the Chinese economy?",
  intro: "Maoist failure created the case for reform; Deng set the direction; market reforms and the open door delivered growth; international ties sustained it.",
  clusters: [
    { title: "Push", summary: "Maoist failure.",
      steps: [
        N("ea-c-mao", "ltc", "Maoist failure", "1958–76", "Great Leap Forward and Cultural Revolution.", ["ea-cn-timeline1"], { go: "ea-cn-mao" }),
        K("enabled", "Deng took the opening."),
        N("ea-c-deng", "tp", "Deng's reform", "Dec 1978", "3rd Plenum; Socialism with Chinese Characteristics.", ["ea-cn-players", "ea-cn-phases"], { go: "ea-cn-deng" })
      ] },
    { link: "led to", how: "Reform and opening.",
      title: "Engines", summary: "Three engines.",
      steps: [
        { row: [
          N("ea-c-hrs", "pol", "HRS and TVEs", "1978–2000", "Rural reform and rural industry.", ["hrs", "tves"], { go: "ea-cn-rural" }),
          N("ea-c-soe", "pol", "SOE reform", "1978–98", "Dual track; ownership reform.", ["ea-cn-soe-stages"], { go: "ea-cn-soe" }),
          N("ea-c-open", "pol", "Open door", "1980–2001", "SEZs, FDI, WTO.", ["sezs"], { go: "ea-cn-open" })
        ] },
        K("enabled", "Outside partners supplied capital and markets."),
        N("ea-c-intl", "act", "International support", "1972–2000", "US, Japan, ASEAN, overseas Chinese.", ["ea-cn-rapprochement"], { go: "ea-cn-intl" })
      ] },
    { link: "followed by", how: "Reform was not linear.",
      title: "Pause and relaunch", summary: "1989–92.",
      steps: [
        N("ea-c-tian", "tp", "Tiananmen and Southern Tour", "1989–92", "Rectification paused reform; Deng relaunched it.", ["southerntour", "ea-cn-timeline2"], { go: "ea-cn-south" }),
        K("led to", "Sustained growth."),
        N("ea-c-growth", "res+", "9.2% growth", "1978–2000", "12.1% in the 1990s; exports 14-fold.", ["ea-cn-indicators", "ea-cn-causalchain"], { go: "ea-cn-arg" })
      ] }
  ],
  judge: { prompt: "Which factor contributed most to China's rise? Rank them.", factors: ["ea-c-mao", "ea-c-deng", "ea-c-hrs", "ea-c-soe", "ea-c-open", "ea-c-intl"],
           notes_view: "Maoist failure created the case for reform → Deng's state intervention set the direction → market reforms and opening-up delivered growth → international factors sustained it. Linkages: HRS savings capitalised TVEs; rapprochement enabled SEZs." },
  historians: [],
  takeaways: [
    "Maoist failure pushed reform; Deng directed it.",
    "HRS, TVEs, SOE reform and the open door delivered growth.",
    "Not linear: Tiananmen paused reform until 1992."
  ]
});

L.push({
  id: "ea-cn-mao", order: 12, level: 3, parent: "ea-cn", kind: "chain",
  title: "The failure of the Maoist economy",
  question: "Why did Maoist failure push China toward reform?",
  intro: "Autarky, a skewed command economy, the Great Leap Forward and the Cultural Revolution discredited Maoism and opened the way for reform.",
  clusters: [
    { title: "Structure", summary: "Command economy.",
      steps: [
        N("ea-m-struct", "ltc", "Weak command economy", "1949–76", "Autarky and embargo; Third Front; no competition; Party interference.", ["maoistfail", "ea-cn-command"])
      ] },
    { link: "intensified", how: "Mass campaigns made it worse.",
      title: "Disasters", summary: "Two campaigns.",
      steps: [
        N("ea-m-glf", "evt", "Great Leap Forward", "1958–62", "Communes; backyard furnaces; anti-sparrow campaign.", ["ea-cn-glf"]),
        K("led to", "Famine and collapse."),
        N("ea-m-bitter", "res-", "Three Bitter Years", "1959–62", "~30 million dead; growth +21.3% to −27.3%.", ["ea-cn-glf-impact", "ea-cn-indicators"]),
        K("followed by", "Political turmoil."),
        N("ea-m-cr", "evt", "Cultural Revolution", "1966–76", "0.5–2 million dead; universities shut 6 years.", ["ea-cn-culturalrev"])
      ] },
    { link: "led to", how: "Planners eventually turned to reform.",
      title: "Pressure", summary: "1976–78.",
      steps: [
        N("ea-m-press", "stc", "Pressure for reform", "1977–78", "Targets missed; first instinct was to rebuild the plan.", ["ea-cn-pressures"]),
        K("supports", "Why, not how."),
        N("ea-m-eval", "judg", "Necessary, not sufficient", null, "Explains why reform was urgent, not how gradualism succeeded.", ["ea-cn-push-eval"], { go: "ea-cn-deng" })
      ] }
  ],
  judge: { prompt: "How important was Maoist failure to reform? Weigh it.", factors: ["ea-m-struct", "ea-m-glf", "ea-m-bitter", "ea-m-cr", "ea-m-press"],
           notes_view: "The 'push factor': Maoist failure made reform politically possible, but explains why, not how, reform succeeded." },
  historians: [
    { who: "Bramall (2009)", view: "Late Maoist industry was too small and inefficient.", nodes: ["ea-m-struct"] },
    { who: "Becker (1996)", view: "An estimated 30 million died in the Great Leap's 'Three Bitter Years'.", nodes: ["ea-m-bitter"] },
    { who: "Lamb (2005)", view: "The Cultural Revolution ironically led to China's embrace of capitalism.", nodes: ["ea-m-cr"] }
  ],
  takeaways: [
    "The command economy was autarkic and skewed.",
    "The Great Leap and Cultural Revolution were disasters.",
    "Failure explains why reform came, not how it succeeded."
  ]
});

L.push({
  id: "ea-cn-deng", order: 13, level: 3, parent: "ea-cn", kind: "chain",
  title: "Deng and state intervention",
  question: "How did Deng's state shape reform?",
  intro: "Deng made modernisation the Party's goal, built modern institutions and repeatedly reined in inflation.",
  clusters: [
    { title: "Direction", summary: "3rd Plenum.",
      steps: [
        N("ea-d-plenum", "tp", "3rd Plenum", "Dec 1978", "Modernisation replaced class struggle; 6.5bn yuan deficit; 20m unemployed.", ["ea-cn-3rdplenum"]),
        K("led to", "A pragmatic programme."),
        { row: [
          N("ea-d-mods", "pol", "Four Modernisations", "1978", "Agriculture, industry, defence, science.", ["ea-cn-fourmods"]),
          N("ea-d-scc", "int", "Socialism with Chinese Characteristics", "1978–2000", "Market policies under Party control; gradual.", ["ea-cn-socialismcc"])
        ] }
      ] },
    { link: "enabled", how: "Institutions were rebuilt.",
      title: "Institutions", summary: "Education and banks.",
      steps: [
        { split: [
          { h: "Education", steps: [ N("ea-d-edu", "pol", "Education reform", "1978–2000", "Entrance exam restored; students abroad 2,124 → 38,989.", ["ea-cn-education"]) ] },
          { h: "Banking", steps: [
            N("ea-d-bank", "pol", "Modern banking", "1978–90", "PBOC central bank; four state banks; stock exchanges 1990.", ["ea-cn-banking"]),
            K("led to", "Incentives sparked lending."),
            N("ea-d-lend", "res±", "Lending surge", "1984", "Rural Credit Cooperative loans doubled.", ["ea-cn-1984lending"])
          ] }
        ] }
      ] },
    { link: "provoked response", how: "Overheating forced tightening.",
      title: "Inflation control", summary: "Cycles.",
      steps: [
        N("ea-d-infl1", "pol", "Early cycles", "1979–85", "6% (1980) → 1.9%; 8.8% (1985) → credit cut.", ["ea-cn-inflation1"]),
        K("followed by", "Bigger cycles."),
        N("ea-d-infl2", "pol", "Later cycles", "1986–95", "27% (1988) → 0.6% (1990); 24.1% (1994) → 17.1%.", ["ea-cn-inflation2"])
      ] }
  ],
  judge: { prompt: "How far did Deng's state drive China's rise? Weigh the evidence.", factors: ["ea-d-plenum", "ea-d-scc", "ea-d-edu", "ea-d-bank", "ea-d-infl2"],
           notes_view: "Deng as catalyst/coordinator, comparable to MITI, but having to preserve one-party control; gradualism contrasts with Soviet 'shock therapy'. The state managed overheating — reform was not smooth." },
  historians: [ { who: "Naughton (2010)", view: "By 1977 planners' first instinct was to rebuild the plan, not reform.", nodes: ["ea-d-plenum"] } ],
  takeaways: [
    "3rd Plenum: modernisation over class struggle.",
    "Education and banking were rebuilt.",
    "The state repeatedly reined in inflation."
  ]
});

L.push({
  id: "ea-cn-rural", order: 14, level: 3, parent: "ea-cn", kind: "chain",
  title: "HRS and TVEs",
  question: "How did rural reform drive China's growth?",
  intro: "The Household Responsibility System delivered quick farm gains; its savings capitalised Township and Village Enterprises.",
  clusters: [
    { title: "HRS", summary: "Household farming.",
      steps: [
        N("ea-r-hrs", "pol", "Household Responsibility System", "1978–84", "Quotas to the state, surplus kept; 1% → 99% adoption.", ["hrs"]),
        K("led to", "Output surged."),
        N("ea-r-grain", "res+", "Record harvests", "1984", "Grain 407m tonnes (+33.6%); meat +156% by 1988.", ["hrs"])
      ] },
    { link: "enabled", how: "Farm savings funded rural industry.",
      title: "TVEs", summary: "Rural industry.",
      steps: [
        N("ea-r-tve", "act", "TVEs", "1978–2000", "Local public firms with hard budgets; 47% of industry by 2000.", ["tves"]),
        K("led to", "Exports and jobs."),
        N("ea-r-exp", "res+", "Exports and jobs", "1978–99", ">40% of exports; 28.3m → 127m workers.", ["ea-cn-tve-exports"]),
        K("supports", "Why they succeeded."),
        N("ea-r-why", "evid", "Reasons for success", "1980s–90s", "Flexible; labour-intensive; low tax; research links; HRS savings.", ["ea-cn-tve-success1", "ea-cn-tve-success2"])
      ] },
    { link: "supports", how: "Weighing market reform.",
      title: "Evaluation", summary: "Momentum.",
      steps: [
        N("ea-r-eval", "judg", "Built momentum", null, "Visible gains built support; TVEs a distinctive Chinese innovation.", ["ea-cn-market-eval"])
      ] }
  ],
  judge: { prompt: "How important were HRS and TVEs? Weigh them.", factors: ["ea-r-hrs", "ea-r-grain", "ea-r-tve", "ea-r-exp"],
           notes_view: "HRS built political support for wider reform; TVEs, small hybrid public/market entities, contrast with Japan's keiretsu — mutually reinforcing with HRS." },
  historians: [ { who: "Naughton (2010)", view: "The return to household farming was one of the main causes of output acceleration.", nodes: ["ea-r-grain"] } ],
  takeaways: [
    "HRS: near-universal by 1984; record harvests.",
    "TVEs: >40% of exports; 127m workers.",
    "Rural reform built momentum for wider reform."
  ]
});

L.push({
  id: "ea-cn-soe", order: 15, level: 3, parent: "ea-cn", kind: "chain",
  title: "SOE reform and the dual track",
  question: "How did state enterprise reform work?",
  intro: "SOEs moved from management reform to dual-track pricing to ownership reform, with wage reform alongside.",
  clusters: [
    { title: "Stages", summary: "Three stages.",
      steps: [
        N("ea-e-mgmt", "pol", "Management reform", "1978–84", "Sichuan pilot → 6,600 SOEs by 1980.", ["ea-cn-soe-stages"]),
        K("followed by", "Dual-track pricing."),
        N("ea-e-dual", "pol", "Dual track", "1984–92", "Above-quota output sold up to 20% above state price.", ["ea-cn-soe-stages"]),
        K("followed by", "Ownership reform after 1992."),
        N("ea-e-own", "pol", "Zhuada fangxiao", "1995–98", "Keep large SOEs, sell small; 1/4 restructured.", ["ea-cn-soe-stages"])
      ] },
    { link: "led to", how: "Ownership and wages changed.",
      title: "Effects", summary: "Private rise.",
      steps: [
        { split: [
          { steps: [ N("ea-e-share", "res±", "Public share falls", "1983–2003", "73.4% → 11.1% of industrial output; private firms 1.32m.", ["ea-cn-soe-effect"]) ] },
          { steps: [ N("ea-e-wage", "res+", "Wage reform", "1978–2000", "Bonuses revived; real wages 1.9x (1992–97).", ["ea-cn-wages"]) ] }
        ] },
        K("undermined", "Two prices invited abuse."),
        N("ea-e-risk", "res-", "Corruption risk", null, "Arbitrage between plan and market prices.", ["ea-cn-market-eval"])
      ] }
  ],
  judge: { prompt: "How successful was SOE reform? Weigh the evidence.", factors: ["ea-e-mgmt", "ea-e-dual", "ea-e-own", "ea-e-share", "ea-e-risk"],
           notes_view: "Gradualism allowed reform without shocking the plan, but created corruption/arbitrage risks between plan and market prices." },
  historians: [ { who: "Naughton (2010)", view: "Gradual reform of a command economy is feasible and resilient.", nodes: ["ea-e-dual"] } ],
  takeaways: [
    "Management reform → dual track → ownership reform.",
    "Public share of output fell to 11.1%.",
    "Dual track invited corruption."
  ]
});

L.push({
  id: "ea-cn-open", order: 16, level: 3, parent: "ea-cn", kind: "chain",
  title: "SEZs and the open door",
  question: "How did the open door policy drive growth?",
  intro: "SEZs created a 'micro climate' for capital and technology, then opening spread along the coast and inland, culminating in WTO entry.",
  clusters: [
    { title: "SEZs", summary: "Experiments.",
      steps: [
        N("ea-z-sez", "pol", "Four SEZs", "Aug 1980", "Shenzhen, Zhuhai, Shantou, Xiamen.", ["sezs"]),
        K("enabled", "Tax incentives drew FDI."),
        N("ea-z-tax", "pol", "FDI tax incentives", "1980s–90s", "SEZ rate 18% (vs 33%); 10% for export/tech firms.", ["ea-cn-fdi-tax"]),
        K("followed by", "Opening spread."),
        N("ea-z-coast", "pol", "Coastal cities, Hainan", "1984–88", "14 coastal cities; open regions; Hainan SEZ.", ["sezs"]),
        K("led to", "Rapid growth."),
        N("ea-z-impact", "res+", "Coastal boom", "1985–90", "SEZ output 8-fold; coast ~2/3 of exports.", ["ea-cn-sez-impact"])
      ] },
    { link: "followed by", how: "Opening spread inland.",
      title: "Four-Along", summary: "1990s.",
      steps: [
        N("ea-z-four", "pol", "Four-Along strategy", "1990s", "Coast, border, river (Pudong), railway.", ["ea-cn-fouralong"]),
        K("led to", "The culmination."),
        N("ea-z-wto", "tp", "WTO accession", "Nov 2001", "Tariffs to 8.9%; just outside the window.", ["ea-cn-wto"])
      ] },
    { link: "supports", how: "Weighing it.",
      title: "Evaluation", summary: "Experiments, inequality.",
      steps: [
        N("ea-z-eval", "judg", "Controlled experiments", null, "Like Japan's infant-industry protection; cost: coastal–inland inequality.", ["ea-cn-open-eval", "ea-cn-linkages"])
      ] }
  ],
  judge: { prompt: "How important was the open door? Weigh the evidence.", factors: ["ea-z-sez", "ea-z-tax", "ea-z-impact", "ea-z-four", "ea-z-wto"],
           notes_view: "SEZs were controlled experiments comparable to Japan's infant-industry protection; WTO accession the culmination; cost: growing coastal–inland inequality." },
  historians: [ { who: "Wu (2005)", view: "China could not open nationwide at once, so SEZs created a 'micro climate' first.", nodes: ["ea-z-sez"] } ],
  takeaways: [
    "SEZs (1980) attracted FDI with low taxes.",
    "Opening spread to coastal cities and the Four-Along.",
    "WTO (2001) culminated it; inequality grew."
  ]
});

L.push({
  id: "ea-cn-intl", order: 17, level: 3, parent: "ea-cn", kind: "causal",
  title: "China's international partners",
  question: "How far did international developments drive China's rise?",
  intro: "Rapprochement with the US, Japanese plants and aid, and overseas Chinese capital supplied the money, technology and markets.",
  clusters: [
    { title: "Partners", summary: "Diversified support.",
      steps: [
        N("ea-n-us", "tp", "Sino-US rapprochement", "1972–82", "Shanghai Communiqué; recognition 1979; embargo lifted.", ["ea-cn-rapprochement", "ea-cn-rapprochement-econ"]),
        K("enabled", "Other partners followed."),
        { row: [
          N("ea-n-japan", "act", "Japan", "1978–85", "Plants and tech (52% of imports); ¥470bn aid.", ["ea-cn-flyinggeese", "ea-cn-sinojapan-trade"]),
          N("ea-n-diaspora", "act", "Overseas Chinese", "1990s", "Hong Kong 41% of FDI (1999); Taiwan, Singapore.", ["ea-cn-fdi-sources", "ea-cn-diaspora"]),
          N("ea-n-asean", "act", "ASEAN", "1990–97", "Trade $14.29bn → $25.04bn; Singapore FDI.", ["ea-cn-asean"])
        ] }
      ] },
    { link: "led to", how: "FDI transformed the economy.",
      title: "FDI impact", summary: "Scale.",
      steps: [
        N("ea-n-fdi", "res+", "FDI surge", "1985–99", "$40–50bn/yr; FFEs 1% → 45% of exports.", ["ea-cn-fdi-scale", "ea-cn-fdi-impact"]),
        K("supports", "Weighing it."),
        N("ea-n-eval", "judg", "Geopolitical timing", null, "Like Japan, but diversified beyond the US.", ["ea-cn-intl-eval"])
      ] }
  ],
  judge: { prompt: "How far did international partners drive China's rise? Rank them.", factors: ["ea-n-us", "ea-n-japan", "ea-n-diaspora", "ea-n-asean", "ea-n-fdi"],
           notes_view: "China's tailwind parallels Japan's Cold War backing; but China diversified across the US, Japan, ASEAN and the diaspora — diaspora capital, not just Western FDI, was central." },
  historians: [
    { who: "Jian (2019)", view: "Reported Deng's remark that countries with the United States became rich.", nodes: ["ea-n-us"] },
    { who: "Akamatsu (1962)", view: "Industrial dynamism cascades from Japan to the NIEs, ASEAN and China.", nodes: ["ea-n-japan"] }
  ],
  takeaways: [
    "Rapprochement lifted the US embargo.",
    "Japan, the diaspora and ASEAN supplied capital and tech.",
    "FDI reached $40–50bn a year."
  ]
});

L.push({
  id: "ea-cn-south", order: 18, level: 3, parent: "ea-cn", kind: "chain",
  title: "Tiananmen and the Southern Tour",
  question: "Why was China's reform not linear?",
  intro: "After Tiananmen, reform paused; Deng's 1992 Southern Tour relaunched it.",
  clusters: [
    { title: "Pause", summary: "1989–91.",
      steps: [
        N("ea-u-rect", "evt", "Rectification", "1989–91", "Dissent suppressed; spending cut; reform paused.", ["southerntour"]),
        K("provoked response", "Deng intervened."),
        N("ea-u-tour", "tp", "Southern Tour", "1992", "Shenzhen, Zhuhai, Shanghai: 'not act as women with bound feet'.", ["southerntour"]),
        K("led to", "Reform relaunched."),
        N("ea-u-sme", "res+", "Socialist market economy", "Oct 1992", "14th Party Congress; Zhu Rongji rises.", ["southerntour"])
      ] },
    { link: "supports", how: "Weighing the state's role.",
      title: "Evaluation", summary: "Not linear.",
      steps: [
        N("ea-u-eval", "judg", "Needed a political relaunch", null, "Unlike Japan's steady path; Deng also preserved one-party control.", ["ea-cn-state-eval"])
      ] }
  ],
  judge: { prompt: "How important was the Southern Tour? Weigh it.", factors: ["ea-u-rect", "ea-u-tour", "ea-u-sme"],
           notes_view: "State intervention was not linear — reform paused (1989–91) and needed a deliberate political relaunch, unlike Japan." },
  historians: [],
  takeaways: [
    "Tiananmen led to the Rectification pause.",
    "The Southern Tour (1992) relaunched reform.",
    "Reform needed political leadership to survive."
  ]
});

L.push({
  id: "ea-cn-arg", order: 19, level: 1, parent: "ea-cn", kind: "argument",
  title: "What drove China's rise most?",
  question: "'Market-oriented reforms were the most important reason for China's economic rise, 1978–2000.' How far do you agree?",
  intro: "Weigh market reforms against Maoist push factors, Deng's leadership and the open door.",
  clusters: [
    { title: "Claim", summary: "Market reforms.",
      steps: [ N("ea-q-claim", "judg", "Market reforms were key", null, "HRS, TVEs and SOE reform were the primary engine.", ["ea-cn-theses"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "Reform vs others.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("ea-q-hrs", "evid", "HRS gains", "1978–84", "Record harvests built momentum.", ["hrs"]),
            K("supports", "Savings funded industry."),
            N("ea-q-tve", "evid", "TVE engine", "1978–2000", "47% of industry; >40% of exports.", ["tves", "ea-cn-tve-exports"])
          ] },
          { h: "Against", steps: [
            N("ea-q-deng", "evid", "Deng's leadership", "1978–92", "Converted crisis into reform; Southern Tour.", ["ea-cn-state-eval"]),
            K("contradicts", "The world supplied capital."),
            N("ea-q-open", "evid", "Open door and FDI", "1980–2000", "FFEs 45% of exports.", ["ea-cn-fdi-impact"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "Linked factors.",
      steps: [ N("ea-q-judge", "judg", "Reforms within a chain", null, "Maoist failure → Deng → reforms and opening → international support sustained 9%+ growth.", ["ea-cn-theses", "ea-cn-causalchain"]) ] }
  ],
  judge: { prompt: "How far were market reforms the key factor? Rank the evidence.", factors: ["ea-q-hrs", "ea-q-tve", "ea-q-deng", "ea-q-open"],
           notes_view: "Thesis options: Maoist failure the precondition but Deng converted it; market reforms the primary engine; or the open door decisive — domestic reforms alone could not sustain 9%+ growth." },
  historians: [],
  takeaways: [
    "For: HRS and TVEs generated growth and savings.",
    "Against: Deng's leadership and the open door.",
    "Best answer: reforms within a linked chain."
  ]
});

L.push({
  id: "ea-compare", order: 20, level: 1, parent: "ea-top", kind: "matrix",
  title: "Japan and China compared",
  question: "How similar were the rises of Japan and China?",
  intro: "From the notes' comparison themes.",
  matrix: {
    cols: ["Japan (1947–91)", "China (1978–2000)"],
    rows: [
      { h: "State", cells: ["MITI pilot agency", "Deng; one-party control"] },
      { h: "Firms", cells: ["Keiretsu: large private groups", "TVEs: small hybrid public/market"] },
      { h: "Sequencing", cells: ["Infant-industry protection", "SEZs as experiments"] },
      { h: "Outside support", cells: ["Mainly the US", "US, Japan, ASEAN, diaspora"] },
      { h: "Transformation", cells: ["Catch-up in a market economy", "From a command economy"] },
      { h: "Path", cells: ["Comparatively steady", "Paused 1989–91; relaunched 1992"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "Both had a coordinating state.",
    "Keiretsu vs TVEs; protection vs SEZs.",
    "Japan's industrial transformation vs China's structural one."
  ]
});
})();
