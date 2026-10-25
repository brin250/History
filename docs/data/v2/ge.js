// v2 flow charts: the global economy, 1945–2000 (cards in data/ge.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ge = window.FLOWS2.ge || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "ge-top", order: 1, level: 0, kind: "causal",
  title: "The global economy, 1945–2000",
  question: "Why did the global economy grow to the early 1970s, and why did it face the 'Crisis Decades'?",
  intro: "US aid and institutions rebuilt Europe and Japan and fed a Golden Age; success bred its own undoing, and the Crisis Decades hit developing countries hardest.",
  clusters: [
    { title: "Growth", summary: "1945–late 1960s.",
      steps: [
        N("ge-t-recon", "pol", "Postwar reconstruction", "1945–52", "USA dominant: Marshall Plan, Japan aid, NATO, US–Japan Treaty.", ["ge-narrative", "ge-phases"], { go: "ge-growth" }),
        K("led to", "Recovery fed liberalisation."),
        N("ge-t-golden", "res+", "Golden Age of Capitalism", "1952–late 1960s", "GATT, EEC, MNCs, Keynesian mixed economies; GDP ~5% (1963–73).", ["ge-indicators", "ge-timeline-1"], { go: "ge-compare" })
      ] },
    { link: "undermined", how: "Success bred its own undoing.",
      title: "Reversal", summary: "Late 1960s–1973.",
      steps: [
        N("ge-t-decline", "tp", "US relative decline", "late 1960s–1973", "Deficits, Vietnam, recovered rivals; Nixon Shock (1971).", ["ge-narrative"], { go: "ge-nixon" })
      ] },
    { link: "led to", how: "Shocks and policy choices followed.",
      title: "Crisis Decades", summary: "1970s–1990s.",
      steps: [
        { row: [
          N("ge-t-oil", "trig", "Oil shocks", "1973, 1979", "Inflation, stagnation, stagflation.", ["oilcrisis"], { go: "ge-oil" }),
          N("ge-t-np", "res-", "New Protectionism", "1970s–90s", "Non-tariff barriers.", ["newprotectionism"], { go: "ge-np" }),
          N("ge-t-debt", "res-", "Debt Crisis", "1982", "Mexico defaults; lost decade.", ["ge-debt-overview"], { go: "ge-debt" })
        ] },
        K("supports", "Weighing the whole."),
        N("ge-t-verdict", "judg", "Crisis built in and triggered", null, "Seeds sown in the Golden Age; oil a singular trigger; developing countries hit far harder and longer.", ["ge-define", "ge-timeline-2"], { go: "ge-crisis" })
      ] }
  ],
  judge: { prompt: "Was the Crisis Decades built into Golden Age growth or triggered by shocks? Rank the factors.", factors: ["ge-t-recon", "ge-t-golden", "ge-t-decline", "ge-t-oil"],
           notes_view: "Best essays argue both: Bretton Woods' over-reliance on the dollar was structural; the 1973 oil shock a singular trigger. The relative importance of factors changed across the four phases." },
  historians: [ { who: "Hobsbawm (1999)", view: "After 1973 the world 'lost its bearings' and capitalism's operations became uncontrollable.", nodes: ["ge-t-verdict"] } ],
  takeaways: [
    "Four phases: reconstruction, Golden Age, reversal, Crisis Decades.",
    "US aid and institutions drove growth; US decline undermined it.",
    "Crises hit developing countries harder and longer."
  ]
});

L.push({
  id: "ge-growth", order: 2, level: 1, parent: "ge-top", kind: "causal",
  title: "Why the global economy grew, 1945–73",
  question: "How far were the USA, Western Europe/Japan, MNCs and institutions responsible for growth?",
  intro: "From a war-devastated base, US policy, active governments, regional integration, MNCs and institutions combined to produce unprecedented growth.",
  clusters: [
    { title: "Starting point", summary: "Devastation.",
      steps: [
        N("ge-g-ruin", "ctx", "World after WWII", "1945", "Germany, Eastern Europe, China, Japan worst hit; 'dollar shortage'; the 'German question'.", ["ge-postwar-state"])
      ] },
    { link: "provoked response", how: "Five factors drove recovery and growth.",
      title: "Factors of growth", summary: "Five actors.",
      steps: [
        { row: [
          N("ge-g-usa", "act", "USA", "1945–60s", "Aid, defence, market access, institutions.", ["marshallecon", "ge-us-defence"], { go: "ge-marshall" }),
          N("ge-g-inst", "act", "Institutions", "1944–", "Bretton Woods, IMF, IBRD, GATT.", ["brettonwoods", "ge-gatt"], { go: "ge-bw" }),
          N("ge-g-state", "act", "Active government", "1946–", "Keynesian mixed economies; planning.", ["ge-mixed-economy"], { go: "ge-state" })
        ] },
        K("enabled", "Regional actors and firms built on this."),
        { row: [
          N("ge-g-europe", "act", "Western Europe", "1950–69", "EPU, EEC, EFTA, CAP.", ["eec"], { go: "ge-europe" }),
          N("ge-g-japan", "act", "Japan", "1945–70s", "Occupation aid; Flying Geese.", ["ge-japan-aid", "ge-flying-geese"], { go: "ge-japan" }),
          N("ge-g-mnc", "act", "MNCs", "1950–84", "FDI, technology, markets.", ["mncs"], { go: "ge-mncs" })
        ] }
      ] },
    { link: "led to", how: "Unprecedented, widespread growth.",
      title: "Golden Age", summary: "Scale and features.",
      steps: [
        N("ge-g-boom", "res+", "Unprecedented boom", "1950–73", "OECD-16 4.8% p.a.; manufacturing quadrupled; mass consumption.", ["ge-boom-scale", "ge-golden-features", "ge-liberalisation-def"], { go: "ge-soviet" }),
        K("contradicts", "Was it a miracle?"),
        N("ge-g-miracle", "int", "'Less of a miracle'", null, "Catch-up, deliberate US policy and institutional design — but unprecedented cooperation and technology.", ["ge-l1-synthesis"], { go: "ge-arg1" })
      ] }
  ],
  judge: { prompt: "Which factor contributed most to growth? Rank them.", factors: ["ge-g-usa", "ge-g-inst", "ge-g-state", "ge-g-europe", "ge-g-japan", "ge-g-mnc"],
           notes_view: "Growth was not linear: USA dominant 1945–52 → liberalisation and active government 1952–late 1960s → reversing as the US weakened to 1973. US influence continued via its institutions." },
  historians: [ { who: "Kenwood & Lougheed (2001)", view: "OECD-16 real GDP grew 4.8% p.a. (1950–73), developing countries 6% and the communist bloc 5%.", nodes: ["ge-g-boom"] } ],
  takeaways: [
    "Five factors: USA, institutions, active government, Europe/Japan, MNCs.",
    "OECD-16 grew 4.8% p.a. (1950–73).",
    "Partly catch-up — but more than 'just catch-up'."
  ]
});

L.push({
  id: "ge-bw", order: 3, level: 3, parent: "ge-growth", kind: "chain",
  title: "Bretton Woods and its fragility",
  question: "How did Bretton Woods promote growth, and why was it fragile?",
  intro: "The US shaped a multilateral order of fixed rates, the IMF and the IBRD; its dependence on the dollar was a built-in weakness.",
  clusters: [
    { title: "Design", summary: "US-shaped order.",
      steps: [
        N("ge-b-charter", "pol", "Atlantic Charter", "14 Aug 1941", "Reduced trade restrictions; basis of the UN; inspired NATO and GATT.", ["ge-atlantic-charter"], { go: "ge-gatt" }),
        K("led to", "44 nations met at Bretton Woods."),
        N("ge-b-conf", "pol", "Bretton Woods Conference", "Jul 1944", "US proposals; 1930s lessons; IMF and IBRD created.", ["ge-bw-conference"]),
        K("led to", "Fixed rates pegged to a gold-backed dollar."),
        { split: [
          { h: "Fixed rates", steps: [ N("ge-b-system", "pol", "Gold-dollar peg", "1944–71", "$35/oz; fully functional 1958; US held 3/4 of world gold.", ["brettonwoods"]) ] },
          { h: "IMF", steps: [ N("ge-b-imf", "pol", "Short-term BOP loans", "1944–", "Suez loans: $262m France, $1.2bn UK; conditionality.", ["ge-imf"]) ] },
          { h: "IBRD", steps: [ N("ge-b-ibrd", "pol", "Long-term loans", "1947–94", "Europe first, then developing economies; $610m → $14.244bn.", ["ge-ibrd"]) ] }
        ] }
      ] },
    { link: "led to", how: "Stability boosted trade.",
      title: "Significance", summary: "Growth and fragility.",
      steps: [
        N("ge-b-growth", "res+", "Investor confidence", "1948–68", "Non-communist exports +290%.", ["ge-bw-significance"]),
        K("undermined", "Built on the dollar."),
        N("ge-b-fragile", "res-", "Dollar overhang", "1961", "Foreign-held dollars exceeded US reserves; UK devalued 1967.", ["ge-bw-significance"], { go: "ge-nixon" })
      ] }
  ],
  judge: { prompt: "How far did Bretton Woods cause growth? Weigh it.", factors: ["ge-b-conf", "ge-b-system", "ge-b-imf", "ge-b-ibrd", "ge-b-fragile"],
           notes_view: "The US shaped a multilateral order giving the stability behind Golden Age growth — but dependence on the dollar was a built-in fragility: the 1970s crisis was sown during the Golden Age." },
  historians: [ { who: "Brett (1985)", view: "By 1961 foreign-held dollars already exceeded US gold/forex reserves.", nodes: ["ge-b-fragile"] } ],
  takeaways: [
    "Atlantic Charter → Bretton Woods → IMF, IBRD, fixed rates.",
    "Stability fuelled trade (+290%, 1948–68).",
    "Dollar dependence was a built-in fragility."
  ]
});

L.push({
  id: "ge-marshall", order: 4, level: 3, parent: "ge-growth", kind: "chain",
  title: "Marshall Plan and Europe's recovery",
  question: "How far did the USA drive Europe's recovery?",
  intro: "The US gave $13 billion and a security umbrella; the Deutsche Mark launched West Germany's 'miracle' — partly catch-up from a low base.",
  clusters: [
    { title: "US motives", summary: "Containment and markets.",
      steps: [
        N("ge-m-motive", "int", "Why rebuild Europe", "1945–52", "Containment; Pax Americana; overseas markets for US production.", ["ge-us-motives"]),
        K("led to", "Aid replaced emergency loans."),
        N("ge-m-plan", "pol", "Marshall Plan", "1948–52", "$13bn; recipients' GNP +15–25%; required OEEC collaboration.", ["marshallecon"])
      ] },
    { link: "enabled", how: "Security freed resources.",
      title: "Security umbrella", summary: "NATO.",
      steps: [
        N("ge-m-nato", "pol", "NATO and aid", "1949–61", "MDAP $1.4bn → $5.222bn; Mutual Security Act $33.4bn.", ["ge-us-defence"])
      ] },
    { link: "led to", how: "West Germany recovered fastest.",
      title: "Miracle on the Rhine", summary: "Bird Dog.",
      steps: [
        N("ge-m-birddog", "pol", "Operation Bird Dog", "1948", "Deutsche Mark; production +50% (Jun–Dec 1948).", ["ge-birddog"]),
        K("led to", "A decade of rapid growth."),
        N("ge-m-wunder", "res+", "Wirtschaftswunder", "1949–59", "Real GDP 7.4%; production doubled 1950–57; reconstruction growth lasted.", ["ge-miracles", "ge-europe-recon"]),
        K("contradicts", "Was it a miracle?"),
        N("ge-m-catch", "int", "Catch-up growth", null, "Prosperity followed depression and war — a low base.", ["ge-vanderwee"])
      ] },
    { link: "led to", how: "Aid had lasting effects.",
      title: "Significance", summary: "Political glue.",
      steps: [
        N("ge-m-glue", "res±", "Cold War 'glue'", "1950s–60s", "Opened markets; early dependency later gave way to competition.", ["ge-us-aid-significance"])
      ] }
  ],
  judge: { prompt: "How far was the USA responsible for Europe's recovery? Weigh the evidence.", factors: ["ge-m-plan", "ge-m-nato", "ge-m-birddog", "ge-m-catch"],
           notes_view: "Central evidence for the USA as dominant actor 1945–52; but Van Der Wee's catch-up point and Europe's own reconstruction growth (Dumke, Temin) qualify it." },
  historians: [
    { who: "Gilpin (2001)", view: "The Cold War was the 'political glue' of the world economy.", nodes: ["ge-m-glue"] },
    { who: "Van Der Wee", view: "Growth partly reflects catch-up from a low base rather than pure policy success.", nodes: ["ge-m-catch"] },
    { who: "Dumke (1990) and Temin (2002)", view: "Reconstruction growth drove Europe's postwar 'growth miracles'; Vonyó: it lasted until the end of the Golden Age.", nodes: ["ge-m-wunder"] }
  ],
  takeaways: [
    "Marshall Plan: $13bn, GNP +15–25%.",
    "NATO underwrote defence.",
    "West Germany's miracle — partly catch-up."
  ]
});

L.push({
  id: "ge-japan", order: 5, level: 3, parent: "ge-growth", kind: "chain",
  title: "Japan: occupation to miracle",
  question: "How did the USA help create the Japanese Miracle?",
  intro: "The Reverse Course, aid, a defence umbrella and US market access let Japan grow over 10% a year.",
  clusters: [
    { title: "Occupation", summary: "Reverse Course.",
      steps: [
        N("ge-j-occ", "pol", "Reverse Course", "1947–50", "Fear of communism: rehabilitation over demilitarisation.", ["ge-japan-occupation"]),
        K("led to", "Aid and reform."),
        N("ge-j-aid", "pol", "US aid", "1945–52", "$2.3bn (~4% of GNP); land reform; modern machines.", ["ge-japan-aid"])
      ] },
    { link: "enabled", how: "Defence and markets.",
      title: "US support", summary: "Umbrella and market.",
      steps: [
        { split: [
          { h: "Defence", steps: [ N("ge-j-treaty", "pol", "US–Japan Treaty", "1960", "Defence <1% of GDP by 1970.", ["ge-us-defence"]) ] },
          { h: "Market", steps: [ N("ge-j-market", "pol", "Open US market", "1958–60s", "Eisenhower's VER; purchases +150%; first trade surplus.", ["ge-us-market"]) ] }
        ] }
      ] },
    { link: "led to", how: "Rapid growth.",
      title: "Miracle", summary: "1954–73.",
      steps: [
        N("ge-j-miracle", "res+", "Japanese Miracle", "1954–73", ">10%/yr; 3rd largest economy by 1970.", ["ge-miracles", "ge-japan-aid"], { go: "ge-geese" })
      ] }
  ],
  judge: { prompt: "How far did the USA create Japan's miracle? Weigh the factors.", factors: ["ge-j-occ", "ge-j-aid", "ge-j-treaty", "ge-j-market"],
           notes_view: "Cold War US policy was dominant in reconstruction: fear that a weak Japan would strengthen communism across East Asia." },
  historians: [ { who: "Patrick & Rosovsky (1976)", view: "Japan's economy would have been 30% smaller by 1976 had it borne its own defence burden.", nodes: ["ge-j-treaty"] } ],
  takeaways: [
    "Reverse Course prioritised rehabilitation.",
    "US defence and markets freed Japanese resources.",
    "Growth >10%/yr, 1954–73."
  ]
});

L.push({
  id: "ge-state", order: 6, level: 3, parent: "ge-growth", kind: "chain",
  title: "Mixed economy and planning",
  question: "How far was growth state-driven?",
  intro: "Believing laissez-faire had caused the Depression, governments adopted Keynesian demand management, welfare states and national plans.",
  clusters: [
    { title: "Ideas", summary: "Keynes.",
      steps: [
        N("ge-s-mixed", "ltc", "Mixed economy", "postwar", "Five objectives incl. full employment and price stability.", ["ge-mixed-economy", "ge-glossary-1"]),
        K("enabled", "Keynes supplied the tools."),
        N("ge-s-keynes", "pol", "Keynesian demand management", "1936–early 1970s", "Fiscal and monetary policy for full employment.", ["ge-keynes"])
      ] },
    { link: "led to", how: "States intervened directly.",
      title: "Policies", summary: "Welfare and planning.",
      steps: [
        { split: [
          { h: "Welfare", steps: [ N("ge-s-welfare", "pol", "Welfare states", "1942–60s", "Beveridge; social spending +64% France, +50% UK.", ["ge-welfare"]) ] },
          { h: "Planning", steps: [
            N("ge-s-monnet", "pol", "Monnet Plan; MITI", "1946–60", "France 5.8% (1960s); Ikeda's income doubling.", ["ge-planning"]),
            K("followed by", "Tigers planned too."),
            N("ge-s-tigers", "pol", "Taiwan and Korea plans", "1960s–80s", "ISI → EOI; ITRI (1973) cushioned shocks.", ["ge-planning"])
          ] }
        ] }
      ] },
    { link: "followed by", how: "Stagflation later discredited it.",
      title: "Limits", summary: "Until the 1970s.",
      steps: [
        N("ge-s-end", "res-", "Keynesianism discredited", "1970s", "Stagflation; shift to fighting inflation.", ["ge-keynes", "ge-monetarism"], { go: "ge-policy" })
      ] }
  ],
  judge: { prompt: "How far was growth driven by active government? Weigh it.", factors: ["ge-s-keynes", "ge-s-welfare", "ge-s-monnet", "ge-s-tigers"],
           notes_view: "Evidence that growth was state-driven, not just US- or market-driven; Keynesianism stayed dominant until stagflation discredited it in the early 1970s." },
  historians: [],
  takeaways: [
    "Keynesian mixed economies sought full employment.",
    "Welfare states and national plans stimulated growth.",
    "Stagflation discredited the model."
  ]
});

L.push({
  id: "ge-gatt", order: 7, level: 3, parent: "ge-growth", kind: "chain",
  title: "GATT rounds and the WTO",
  question: "How far did GATT drive trade growth?",
  intro: "US-led GATT cut tariffs through successive rounds; its success pushed states toward non-tariff barriers.",
  clusters: [
    { title: "Origins", summary: "US leadership.",
      steps: [
        N("ge-a-us", "pol", "US trade leadership", "1945–47", "Tariff cuts up to 50%; 123 bilateral agreements.", ["ge-us-trade-policy"]),
        K("led to", "Consolidated into GATT."),
        N("ge-a-gatt", "pol", "GATT signed", "30 Oct 1947", "23 countries; MFN, reduced barriers, reciprocity.", ["ge-gatt"])
      ] },
    { link: "followed by", how: "Successive rounds.",
      title: "Rounds", summary: "1947–93.",
      steps: [
        N("ge-a-rounds", "pol", "Geneva to Uruguay", "1947–93", "45,000 cuts (1947); Kennedy, Tokyo, Uruguay ($3.7 trillion).", ["ge-gatt-rounds"]),
        K("led to", "Trade boomed."),
        N("ge-a-boom", "res+", "Trade grew 8%/yr", "1950s–60s", "W. Germany's share of manufactured exports 7.3% → 19.3%.", ["ge-gatt-significance"])
      ] },
    { link: "led to", how: "Two longer-term outcomes.",
      title: "Legacy", summary: "Irony and WTO.",
      steps: [
        { split: [
          { steps: [ N("ge-a-irony", "res-", "Push to non-tariff barriers", "1970s", "Success set up New Protectionism.", ["ge-gatt-significance"], { go: "ge-np" }) ] },
          { steps: [ N("ge-a-wto", "res+", "WTO", "1995", "Services, IP, binding disputes; LDC share 1/4 → 1/3.", ["ge-wto"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "How important was GATT to growth? Weigh it.", factors: ["ge-a-us", "ge-a-gatt", "ge-a-rounds", "ge-a-boom"],
           notes_view: "Key evidence for institutions driving growth; ironically its success pushed countries toward non-tariff barriers. Continued rounds show cooperation persisted." },
  historians: [ { who: "Judt (2005)", view: "World trade grew 8%/yr in the 1950s–60s.", nodes: ["ge-a-boom"] } ],
  takeaways: [
    "US-led GATT (1947): MFN, reciprocity.",
    "Rounds cut tariffs; trade grew 8%/yr.",
    "Success pushed states to NTBs; WTO from 1995."
  ]
});

L.push({
  id: "ge-europe", order: 8, level: 3, parent: "ge-growth", kind: "chain",
  title: "European integration, 1950–1969",
  question: "How far did Western Europe drive its own growth?",
  intro: "A payments union, a customs union and a rival free-trade area drove intra-European trade; CAP showed integration's costs.",
  clusters: [
    { title: "Payments", summary: "EPU.",
      steps: [
        N("ge-e-epu", "pol", "European Payments Union", "1950", "$500m US grant; multilateral offsetting; convertibility by 1958.", ["ge-epu"])
      ] },
    { link: "enabled", how: "Then trading blocs.",
      title: "Blocs", summary: "EEC and EFTA.",
      steps: [
        { split: [
          { h: "EEC", steps: [ N("ge-e-eec", "pol", "EEC", "1957/58", "Six; tariffs gone in 10.5 years; trade quadrupled.", ["eec"]) ] },
          { h: "EFTA", steps: [ N("ge-e-efta", "pol", "EFTA", "1960", "Seven incl. UK; tariff-free by end-1966.", ["ge-efta"]) ] }
        ] }
      ] },
    { link: "followed by", how: "Agriculture integrated at a cost.",
      title: "CAP", summary: "Costs.",
      steps: [
        N("ge-e-cap", "pol", "CAP", "1962/67", "Target prices; guaranteed surplus purchase.", ["ge-cap"]),
        K("led to", "High costs."),
        N("ge-e-cost", "res-", "Integration at a cost", "1970s–80s", "~2/3 of the EEC budget; higher food prices.", ["ge-cap"])
      ] }
  ],
  judge: { prompt: "How far did Europe drive its own growth? Weigh the evidence.", factors: ["ge-e-epu", "ge-e-eec", "ge-e-efta", "ge-e-cap"],
           notes_view: "Western Europe's own agency in regional growth, beyond US leadership; CAP shows integration at real economic cost." },
  historians: [],
  takeaways: [
    "EPU restored convertibility by 1958.",
    "EEC trade quadrupled; EFTA moved faster.",
    "CAP absorbed 2/3 of the budget."
  ]
});

L.push({
  id: "ge-mncs", order: 9, level: 3, parent: "ge-growth", kind: "causal",
  title: "MNCs and global growth",
  question: "How far did MNCs drive growth?",
  intro: "American MNCs drove FDI and technology transfer; from the 1960s European and Japanese rivals balanced US predominance.",
  clusters: [
    { title: "American MNCs", summary: "1950s–60s.",
      steps: [
        N("ge-n-def", "ctx", "What is an MNC", null, "Owns units in two or more countries via FDI.", ["ge-mnc-def"]),
        K("enabled", "US firms led overseas expansion."),
        N("ge-n-us", "act", "US dominance", "1950–84", "~$140bn of goods by 1969; FDI $11.8bn → $233.4bn.", ["ge-us-mncs"]),
        K("led to", "Hosts benefited."),
        N("ge-n-host", "res+", "Growth in hosts", "1950s–60s", "Technology and management transfer; Europe at 40% of US productivity (1950).", ["mncs", "ge-mnc-host"])
      ] },
    { link: "followed by", how: "Rivals emerged.",
      title: "Shift", summary: "1960s–80s.",
      steps: [
        N("ge-n-why", "ctx", "Why the shift", "1970s", "Transport, favourable policies, currency instability, trade barriers.", ["ge-mnc-shift-why"]),
        K("led to", "European and Japanese MNCs grew."),
        N("ge-n-rivals", "res±", "European, Japanese rivals", "1960s–84", "Hoechst 117 plants; US share 70.4% → 58.8%.", ["ge-euro-japan-mncs"]),
        K("intensified", "MNCs outgrew states."),
        N("ge-n-scale", "res±", "MNCs dwarf states", "1969–84", "~30% of world production; 57 of the top 100 entities.", ["ge-mnc-scale"])
      ] }
  ],
  judge: { prompt: "How important were MNCs to growth? Weigh them.", factors: ["ge-n-us", "ge-n-host", "ge-n-rivals", "ge-n-scale"],
           notes_view: "Use when weighing state-driven vs private-capital-driven growth — MNCs increasingly 'dwarfed' state power; the European/Japanese rise links to US decline (Brett, 1985)." },
  historians: [
    { who: "Wilkins (1974)", view: "'Multinational corporation' was virtually a euphemism for the overseas expansion of America's giant corporations.", nodes: ["ge-n-us"] },
    { who: "Spero & Hart (2003)", view: "A firm engaging only in overseas trade or contracting is not truly multinational.", nodes: ["ge-n-def"] }
  ],
  takeaways: [
    "US MNCs drove FDI and technology transfer.",
    "European and Japanese MNCs balanced US dominance.",
    "MNCs came to dwarf state power."
  ]
});

L.push({
  id: "ge-geese", order: 10, level: 3, parent: "ge-growth", kind: "chain",
  title: "Japan's Flying Geese role",
  question: "How did Japan become a regional engine?",
  intro: "Japan shed declining industries to the Asian Tigers, investing, lending and transferring technology — moving from aid recipient to donor.",
  clusters: [
    { title: "Model", summary: "Akamatsu.",
      steps: [
        N("ge-f-model", "int", "Flying Geese", "1930s", "Industries cascade from Japan to Tigers, ASEAN, China.", ["ge-flying-geese"]),
        K("led to", "Japan invested in its neighbours."),
        { split: [
          { h: "South Korea", steps: [ N("ge-f-korea", "pol", "Normalisation", "1965", "$800m; largest investor by early 1970s; steel, shipbuilding shifted.", ["ge-japan-korea"]) ] },
          { h: "Taiwan", steps: [ N("ge-f-taiwan", "pol", "Investment and models", "1952–78", "17% of investment; Acer emulated Sony.", ["ge-japan-taiwan"]) ] }
        ] }
      ] },
    { link: "led to", how: "Japan became a donor.",
      title: "Donor", summary: "Emulating the US.",
      steps: [
        N("ge-f-donor", "res+", "Aid donor", "1960–74", "$246m → $5.8bn; 4th largest DAC donor by 1974.", ["ge-donors"])
      ] }
  ],
  judge: { prompt: "How significant was Japan's regional role? Weigh it.", factors: ["ge-f-model", "ge-f-korea", "ge-f-taiwan", "ge-f-donor"],
           notes_view: "Japan moved from aid recipient to regional engine and donor — Western Europe/Japan emulating the US role as US dominance declined." },
  historians: [ { who: "Akamatsu Kaname (1930s)", view: "Industries cascade from Japan to less-developed Asian economies in a V-formation.", nodes: ["ge-f-model"] } ],
  takeaways: [
    "Flying Geese: industries cascade from Japan.",
    "Korea and Taiwan gained investment and technology.",
    "Japan became a major donor."
  ]
});

L.push({
  id: "ge-soviet", order: 11, level: 3, parent: "ge-growth", kind: "chain",
  title: "Soviet bloc planned economies",
  question: "Why is communist growth not counted in the Golden Age?",
  intro: "The USSR and Eastern Europe industrialised rapidly from a backward base, but the planned system soured by the 1970s.",
  clusters: [
    { title: "Rise and fall", summary: "4.8% → <2%.",
      steps: [
        N("ge-u-rebuild", "evt", "Rapid rebuilding", "1945–late 1960s", "Soviet model; 4.8%/yr in the 1960s.", ["ge-ussr"]),
        K("undermined", "Planning flaws mounted."),
        N("ge-u-sour", "res-", "System sours", "1970s–80s", "Shortages; uncompetitive exports; debt to the West; <2% after 1980.", ["ge-ussr"]),
        K("led to", "Economic and political collapse."),
        N("ge-u-1989", "res-", "1989 revolutions", "1989", "Catastrophic transition to markets.", ["ge-ussr"])
      ] },
    { link: "supports", how: "Why excluded.",
      title: "Not a Golden Age", summary: "Structural.",
      steps: [
        N("ge-u-why", "int", "Structural, short-lived", null, "Not capitalist policy; not sustained; not widespread.", ["ge-communist-golden"])
      ] }
  ],
  judge: { prompt: "Why was the Soviet bloc not part of the Golden Age? Weigh it.", factors: ["ge-u-rebuild", "ge-u-sour", "ge-u-why"],
           notes_view: "Comparable communist growth was structural, short-lived and not widespread — a reminder the topic is skewed toward industrialised capitalist economies." },
  historians: [],
  takeaways: [
    "Soviet growth 4.8% (1960s) → <2% after 1980.",
    "Planning flaws and debt soured the system.",
    "Growth was structural, short-lived, not widespread."
  ]
});

L.push({
  id: "ge-crisis", order: 12, level: 1, parent: "ge-top", kind: "causal",
  title: "The Crisis Decades, 1970s–1990s",
  question: "Were the crises built into Golden Age growth or triggered by external shocks?",
  intro: "Four causal chains link the crises: US decline, the Bretton Woods collapse, oil shocks and protectionism — all hitting developing countries hardest.",
  clusters: [
    { title: "Causes", summary: "Structural and triggered.",
      steps: [
        { row: [
          N("ge-c-struct", "ltc", "Structural flaws", "1958–71", "Over-reliance on the dollar; US overstretch.", ["ge-crisis-intro"], { go: "ge-nixon" }),
          N("ge-c-oil", "trig", "Oil shocks", "1973, 1979", "Singular external triggers.", ["ge-oil-catalyst"], { go: "ge-oil" })
        ] },
        K("led to", "Crisis indicators worsened."),
        N("ge-c-stats", "res-", "Indicators of crisis", "1971–98", "Inflation >15% (1974); growth 2.8% (1974–80); OECD unemployment ~7%.", ["ge-crisis-stats"])
      ] },
    { link: "led to", how: "Policy responses created new crises.",
      title: "Chains", summary: "Four linked chains.",
      steps: [
        { row: [
          N("ge-c-pol", "pol", "Monetarism", "1979–90", "Thatcher, Reagan, Volcker.", ["ge-monetarism"], { go: "ge-policy" }),
          N("ge-c-np", "res-", "New Protectionism", "1970s–90s", "US decline + lobbies + weak GATT.", ["newprotectionism"], { go: "ge-np" }),
          N("ge-c-debt", "res-", "Debt Crisis", "1982", "Petrodollars + Volcker.", ["ge-debt-overview"], { go: "ge-debt" })
        ] },
        K("supports", "Linking the stories."),
        N("ge-c-chain", "int", "Causal chains", null, "Bretton Woods collapse → petrodollars → overborrowing → Debt Crisis; oil → stagflation → Volcker → Debt Crisis.", ["ge-causal-chains"], { go: "ge-arg2" })
      ] },
    { link: "led to", how: "Impact was uneven.",
      title: "Uneven impact", summary: "Developed vs developing.",
      steps: [
        { split: [
          { h: "Developed", steps: [ N("ge-c-dev", "res±", "Adapted", "1973–80s", "Cheap borrowing; Japan shrugged it off; Tigers outperformed.", ["ge-crisis-uneven", "ge-l2-synthesis"]) ] },
          { h: "Developing", steps: [ N("ge-c-ldc", "res-", "Trapped by debt", "1980s", "Expensive loans trapped them for most of the decade.", ["ge-l2-synthesis"]) ] }
        ] },
        K("contradicts", "Cooperation persisted."),
        N("ge-c-coop", "evid", "Cooperation in altered forms", "1971–97", "G7, WEF, GATT rounds, Plaza, ERM.", ["ge-coop-g7-wef"], { go: "ge-coop" })
      ] }
  ],
  judge: { prompt: "Were the crises built in or triggered? Rank the causes.", factors: ["ge-c-struct", "ge-c-oil", "ge-c-pol", "ge-c-np", "ge-c-debt"],
           notes_view: "Argue both: Bretton Woods' over-reliance on the dollar was structural; the oil shock a singular trigger that revealed pre-existing weaknesses. Don't overstate the breakdown of cooperation." },
  historians: [ { who: "Hobsbawm (1999)", view: "'A world which lost its bearings and slid into instability and crisis… the foundations of the Golden Age had crumbled.'", nodes: ["ge-c-stats"] } ],
  takeaways: [
    "Structural flaws plus external triggers.",
    "Four causal chains led to the Debt Crisis and protectionism.",
    "Developing countries hit hardest; cooperation persisted."
  ]
});

L.push({
  id: "ge-nixon", order: 13, level: 3, parent: "ge-crisis", kind: "chain",
  title: "Nixon Shock and Bretton Woods' collapse",
  question: "Why did Bretton Woods collapse?",
  intro: "With the dollar overvalued and gold reserves falling, Nixon suspended convertibility in 1971; by 1973 rates floated.",
  clusters: [
    { title: "US decline", summary: "Overvalued dollar.",
      steps: [
        N("ge-x-role", "ltc", "US relative decline", "1964–75", "Trade surplus $6.6bn → $2.7bn deficit; productivity lagged rivals.", ["ge-us-changing"]),
        K("intensified", "Vietnam and the Great Society added dollars."),
        N("ge-x-dollar", "stc", "Dollar overvalued", "1960–69", "Military outflows to $2.7bn/yr; deficit $25bn (1968); gold falling.", ["ge-dollar-overvalued"])
      ] },
    { link: "triggered", how: "Nixon acted.",
      title: "Collapse", summary: "1971–73.",
      steps: [
        N("ge-x-shock", "tp", "Nixon Shock", "15 Aug 1971", "Gold convertibility suspended; price/wage freeze; 10% import tariff.", ["nixonshock"]),
        K("followed by", "Patch-ups failed."),
        N("ge-x-float", "res-", "Floating rates", "Dec 1971–Mar 1973", "Smithsonian; EC joint float.", ["ge-bw-collapse"])
      ] },
    { link: "enabled", how: "Lost discipline opened the door to debt.",
      title: "Bridge to debt", summary: "Financial liberalisation.",
      steps: [
        N("ge-x-finlib", "res-", "Financial liberalisation", "late 1960s–81", "Capital flows; LDC BOP deficits $46bn → $108bn.", ["ge-finlib"]),
        K("led to", "Private debt expanded."),
        N("ge-x-gilpin", "int", "'The door had been opened'", "1970s–80s", "To vast debt expansion.", ["ge-gilpin-bridge"], { go: "ge-debt" })
      ] }
  ],
  judge: { prompt: "Why did Bretton Woods collapse? Rank the factors.", factors: ["ge-x-role", "ge-x-dollar", "ge-x-shock", "ge-x-finlib"],
           notes_view: "Core evidence the crisis was structural, rooted in US relative decline; losing Bretton Woods' discipline 'opened the door' to debt expansion (Gilpin) — the bridge to the Debt Crisis." },
  historians: [
    { who: "Brett (1985)", view: "US relative decline: falling trade surplus and weakening competitive position vs Western Europe/Japan.", nodes: ["ge-x-role"] },
    { who: "Gilpin (2001)", view: "Abandoning Bretton Woods opened the door to the debt expansion of the late 1970s–80s.", nodes: ["ge-x-gilpin"] }
  ],
  takeaways: [
    "Vietnam, the Great Society and rivals overvalued the dollar.",
    "Nixon suspended convertibility (1971); rates floated by 1973.",
    "Financial liberalisation opened the door to debt."
  ]
});

L.push({
  id: "ge-oil", order: 14, level: 3, parent: "ge-crisis", kind: "chain",
  title: "The oil crises, 1973 and 1979",
  question: "What was the impact of the oil crises?",
  intro: "OPEC's 1973 embargo and the 1979 Iranian Revolution spiked prices, producing stagflation; developed economies adapted, developing ones fell into debt.",
  clusters: [
    { title: "Shocks", summary: "Two spikes.",
      steps: [
        N("ge-o-dep", "ltc", "Oil dependence", "1950–71", "8.5% → 60% of W. Europe's energy; prices flat.", ["ge-oil-dependence"]),
        K("triggered", "Supply was cut."),
        { split: [
          { h: "1973", steps: [ N("ge-o-73", "trig", "OPEC embargo", "Oct–Dec 1973", "Prices +70%, then +130%.", ["oilcrisis"]) ] },
          { h: "1979", steps: [ N("ge-o-79", "trig", "Iranian Revolution", "1979", "Prices nearly tripled to $39.50.", ["ge-oil1979"]) ] }
        ] }
      ] },
    { link: "led to", how: "Short-term stagflation.",
      title: "Stagflation", summary: "Both at once.",
      steps: [
        N("ge-o-stag", "res-", "Stagflation", "1973–79", "Inflation 11.9%; OECD unemployment +7m; policy dilemma.", ["ge-stagflation", "ge-glossary-2"])
      ] },
    { link: "led to", how: "Long-term impact diverged.",
      title: "Uneven impact", summary: "Adapt or borrow.",
      steps: [
        { split: [
          { h: "Developed", steps: [ N("ge-o-adapt", "res±", "Adapted", "1970s", "Alternative energy; restructuring; ITRI.", ["ge-oil-developed"]) ] },
          { h: "Developing", steps: [
            N("ge-o-ldc", "res-", "Deficits and decline", "1973–80s", "Non-oil LDC deficits $11.5bn → $45.9bn.", ["ge-oil-developing"]),
            K("led to", "Survival by debt."),
            N("ge-o-cat", "res-", "Catalyst for debt", "1970s–82", "Commercial loans; protectionism.", ["ge-oil-catalyst"], { go: "ge-debt" })
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "Assess the impact of the oil crises. Weigh the outcomes.", factors: ["ge-o-73", "ge-o-79", "ge-o-stag", "ge-o-adapt", "ge-o-ldc"],
           notes_view: "Long-term damage to oil-importing developing economies vs adaptation by developed ones; a singular trigger that revealed pre-existing weaknesses." },
  historians: [ { who: "Judt (2005)", view: "Decades of flat oil prices made the 1973/79 spikes all the more disruptive.", nodes: ["ge-o-dep"] } ],
  takeaways: [
    "1973 embargo and 1979 revolution spiked prices.",
    "Stagflation baffled policymakers.",
    "Developed economies adapted; developing ones borrowed."
  ]
});

L.push({
  id: "ge-policy", order: 15, level: 3, parent: "ge-crisis", kind: "chain",
  title: "Thatcherism, Reaganomics and Volcker",
  question: "How did governments respond to stagflation?",
  intro: "Governments abandoned employment as the main aim to fight inflation — tax cuts, privatisation and the Volcker Shock.",
  clusters: [
    { title: "Shift", summary: "Inflation first.",
      steps: [
        N("ge-p-shift", "pol", "Fight inflation", "1970s–80s", "Monetarist spending cuts; privatisation.", ["ge-monetarism"]),
        K("led to", "Two leaders took it furthest."),
        { split: [
          { h: "Reagan", steps: [ N("ge-p-reagan", "pol", "Reaganomics", "1981–89", "Top tax 70% → 28%; deregulation; Volcker's 20% rates.", ["reaganthatcher"]) ] },
          { h: "Thatcher", steps: [ N("ge-p-thatcher", "pol", "Thatcherism", "1979–90", "Privatised BT, British Gas; VAT 8% → 15%.", ["reaganthatcher"]) ] }
        ] }
      ] },
    { link: "led to", how: "Mixed outcomes.",
      title: "Outcomes", summary: "Jobs vs costs.",
      steps: [
        { split: [
          { h: "Gains", steps: [ N("ge-p-gain", "res+", "Jobs; inflation 4%", "1982–90", "21m+ US jobs; UK unemployment halved by 1990.", ["ge-reagan-thatcher-outcomes"]) ] },
          { h: "Costs", steps: [ N("ge-p-cost", "res-", "Slow recovery", "1979–89", "UK inflation 7.5%/yr; manufacturing recovered only 1988.", ["ge-reagan-thatcher-outcomes"]) ] }
        ] },
        K("intensified", "Volcker's rates spread abroad."),
        N("ge-p-volcker", "res-", "Volcker Shock", "1979–82", "World rates followed.", ["volcker"], { go: "ge-debt" })
      ] }
  ],
  judge: { prompt: "How effective were the policy responses? Weigh them.", factors: ["ge-p-shift", "ge-p-reagan", "ge-p-thatcher", "ge-p-gain", "ge-p-cost"],
           notes_view: "Policy responses to stagflation ended the Keynesian consensus (Pollard, 1997); mixed outcomes are useful for evaluation." },
  historians: [ { who: "Pollard (1997)", view: "Governments shifted from growth/employment to fighting inflation, with monetarist cuts in government spending.", nodes: ["ge-p-shift"] } ],
  takeaways: [
    "Inflation replaced employment as the main aim.",
    "Reagan and Thatcher cut taxes and privatised.",
    "Mixed outcomes; Volcker's rates spread abroad."
  ]
});

L.push({
  id: "ge-np", order: 16, level: 3, parent: "ge-crisis", kind: "causal",
  title: "New Protectionism, 1970s–1990s",
  question: "Why did New Protectionism rise, and with what effects?",
  intro: "Four causes drove non-tariff barriers that were hard to quantify or negotiate down; developing countries paid most.",
  clusters: [
    { title: "What it was", summary: "Non-tariff barriers.",
      steps: [
        N("ge-q-def", "ctx", "Old vs new", "1970s–", "Quotas, VERs, subsidies, standards, MFA, Section 301.", ["newprotectionism", "ge-glossary-2"])
      ] },
    { link: "led to", how: "Four causes.",
      title: "Causes", summary: "Four drivers.",
      steps: [
        { row: [
          N("ge-q-us", "ltc", "Weakening US will", "1965–85", "First goods deficit since 1893 (1970); $140bn by 1985.", ["ge-np-us-decline"]),
          N("ge-q-inst", "ltc", "Ineffective institutions", "1974–90s", "GATT struggled with NTBs; stagflation.", ["ge-np-institutions"]),
          N("ge-q-lobby", "stc", "Domestic lobbies", "1970s–82", "US unemployment 10.6%; autos 23.2%.", ["ge-np-lobbies"]),
          N("ge-q-hard", "stc", "Harder to reduce", "1985–99", "Omnibus Act (1988): 10% surplus cuts.", ["ge-np-harder"])
        ] }
      ] },
    { link: "led to", how: "Costs and benefits.",
      title: "Effects", summary: "Short vs long run.",
      steps: [
        N("ge-q-cost", "res-", "Trade collapses", "1973–85", "Trade growth −2.2% (1982); tit-for-tat.", ["ge-protect-costs"]),
        K("contradicts", "Some gained in the short run."),
        N("ge-q-pe", "evid", "Benefits and LDC harm", "1970s–90s", "India's generics boom vs Uruguay's beef collapse.", ["ge-protect-benefits", "ge-protect-ldcs"], { go: "ge-protect" })
      ] }
  ],
  judge: { prompt: "What was the main cause of New Protectionism? Rank them.", factors: ["ge-q-us", "ge-q-inst", "ge-q-lobby", "ge-q-hard"],
           notes_view: "The reversal of Golden Age cooperation as governments privileged national problems; lasting structural consequences made future liberalisation harder." },
  historians: [ { who: "Hobsbawm (1999)", view: "Capitalism's operations 'had become uncontrollable. Nobody knew what to do about the vagaries of the world economy'.", nodes: ["ge-q-inst"] } ],
  takeaways: [
    "Non-tariff barriers replaced tariffs.",
    "Four causes: US decline, weak institutions, lobbies, hard to reduce.",
    "Trade collapsed; developing exporters suffered most."
  ]
});

L.push({
  id: "ge-protect", order: 17, level: 3, parent: "ge-np", kind: "causal",
  title: "Protectionism: winners and losers",
  question: "Who gained and who lost from protectionism?",
  intro: "India's protected drug industry thrived, but developed-country barriers devastated developing commodity exporters like Uruguay.",
  clusters: [
    { title: "Two cases", summary: "Contrast.",
      steps: [
        { split: [
          { h: "Winner", steps: [
            N("ge-r-india", "pol", "India's Patents Act", "1970", "Drug IP waived; generics at scale.", ["ge-protect-benefits"]),
            K("led to", "Domestic firms took the market."),
            N("ge-r-share", "res+", "Domestic firms take 80%", "1970–90s", "Firms 2,257 → 16,000.", ["ge-protect-benefits"])
          ] },
          { h: "Losers", steps: [
            N("ge-r-eec", "pol", "EEC beef restrictions", "1974", "Cut Uruguay's largest remaining market.", ["ge-uruguay-beef"]),
            K("led to", "Exports collapsed."),
            N("ge-r-beef", "res-", "Beef exports collapse", "1974–77", "Uruguay $138m → $68m; Colombia to zero.", ["ge-uruguay-beef"])
          ] }
        ] }
      ] },
    { link: "supports", how: "The general pattern.",
      title: "Pattern", summary: "LDCs lose.",
      steps: [
        N("ge-r-ldc", "judg", "Disproportionate harm", null, "GATT cuts helped developed manufacturing; LDC industries stayed protected against.", ["ge-protect-ldcs"])
      ] }
  ],
  judge: { prompt: "Did protectionism help or harm developing countries? Weigh it.", factors: ["ge-r-india", "ge-r-share", "ge-r-eec", "ge-r-beef"],
           notes_view: "India is a rare case of protectionism enabling self-sufficient development; developed-country protectionism devastated developing-country export revenue." },
  historians: [],
  takeaways: [
    "India's drug industry thrived behind protection.",
    "EEC restrictions wrecked Uruguayan and Colombian beef.",
    "Developing commodity exporters lost most."
  ]
});

L.push({
  id: "ge-debt", order: 18, level: 3, parent: "ge-crisis", kind: "chain",
  title: "Volcker Shock and the Debt Crisis",
  question: "Why did the Third World Debt Crisis happen?",
  intro: "Petrodollar loans financed oil bills; the Volcker Shock made them unpayable, and Mexico's 1982 default triggered a lost decade.",
  clusters: [
    { title: "Borrowing", summary: "Petrodollars.",
      steps: [
        N("ge-d-over", "ltc", "Overborrowing", "1970s–83", "~$150bn petrodollars recycled; commercial loans over the IMF.", ["ge-overborrowing"]),
        K("intensified", "Debt soared."),
        N("ge-d-scale", "stc", "Scale of debt", "1973–83", "Latin America $300bn; Third World $750bn.", ["ge-borrow-scale"])
      ] },
    { link: "triggered", how: "Rates spiked.",
      title: "Shock", summary: "Volcker.",
      steps: [
        N("ge-d-volcker", "trig", "Volcker Shock", "1979–82", "US rates above 20%; each point cost debtors $4–5bn/yr.", ["volcker"]),
        K("led to", "Mexico could not pay."),
        N("ge-d-mexico", "tp", "Mexico defaults", "Aug 1982", "$86bn; wave of defaults; Brazil $99bn.", ["ge-debt-overview", "volcker"])
      ] },
    { link: "led to", how: "Lasting damage.",
      title: "Impact", summary: "Divergence.",
      steps: [
        N("ge-d-short", "res-", "Capital flight", "1982–90", "Debt $87bn → $810bn; indebted countries 12 → 24.", ["ge-debt-shortterm"]),
        K("led to", "Prolonged stagnation."),
        N("ge-d-long", "res-", "Lost decade", "1983–88", "Mexico's GDP 0.1%/yr; developed countries recovered.", ["ge-debt-longterm"], { go: "ge-debtmgmt" })
      ] }
  ],
  judge: { prompt: "What caused the Debt Crisis? Rank the factors.", factors: ["ge-d-over", "ge-d-scale", "ge-d-volcker", "ge-d-mexico"],
           notes_view: "The culmination of the causal chains (Bretton Woods collapse, petrodollars, oil shocks, Volcker); shows long-run divergence between developed and developing economies." },
  historians: [ { who: "Frieden (2007)", view: "As lenders stopped lending, debtor countries ran out of money faster in a self-reinforcing panic.", nodes: ["ge-d-volcker"] } ],
  takeaways: [
    "Petrodollars funded overborrowing.",
    "Volcker's rates made debt unpayable; Mexico defaulted 1982.",
    "Developing countries suffered a lost decade."
  ]
});

L.push({
  id: "ge-debtmgmt", order: 19, level: 3, parent: "ge-crisis", kind: "chain",
  title: "Managing the debt crisis",
  question: "How effective were the IMF and creditor plans?",
  intro: "IMF austerity and structural adjustment came first; the Baker and Brady Plans moved toward real debt reduction.",
  clusters: [
    { title: "Austerity", summary: "Conditionality.",
      steps: [
        N("ge-h-saps", "pol", "SAPs and Mexico", "1982–85", "Devaluation, cuts, privatisation; gains stalled by 1985.", ["ge-saps"]),
        K("followed by", "Wider IMF programmes."),
        N("ge-h-imf", "pol", "IMF conditionality", "1982–93", "$3.8bn to Mexico; 17 Latin American programmes by 1983.", ["ge-imf-debt"])
      ] },
    { link: "followed by", how: "Creditors shifted to relief.",
      title: "Relief", summary: "Rescheduling to reduction.",
      steps: [
        N("ge-h-clubs", "pol", "Paris and London Clubs", "1982–91", "Rescheduling; Toronto terms cancelled 33–50%.", ["debtmanagement"]),
        K("followed by", "Plans for growth, then reduction."),
        N("ge-h-brady", "pol", "Baker and Brady Plans", "1985, 1989", "Growth via trade; then actual debt reduction.", ["debtmanagement"]),
        K("led to", "Crisis ended."),
        N("ge-h-end", "res+", "Crisis over", "early 1990s", "Relief agreed; investors returned.", ["debtmanagement"])
      ] },
    { link: "provoked response", how: "Reforms bred resentment.",
      title: "Costs", summary: "Washington Consensus.",
      steps: [
        N("ge-h-wc", "int", "Washington Consensus", "1990", "10-point package contradicting state-led models.", ["ge-washington"]),
        K("supports", "Even successes hurt."),
        N("ge-h-korea", "evid", "South Korea bailout", "1997–2001", "$60bn; repaid early, but 80% of households lost income.", ["imfkorea"])
      ] }
  ],
  judge: { prompt: "How effective were international institutions in the debt crisis? Weigh them.", factors: ["ge-h-saps", "ge-h-imf", "ge-h-clubs", "ge-h-brady", "ge-h-korea"],
           notes_view: "Institutions adapted, but conditionality caused resentment; the crisis ended by the early 1990s once debt relief was agreed (Ocampo et al., 2014). Even 'successful' interventions imposed severe social costs." },
  historians: [
    { who: "Ocampo et al. (2014)", view: "The debt crisis effectively ended by the early 1990s once debt relief was agreed and investors returned.", nodes: ["ge-h-end"] },
    { who: "John Williamson (1990)", view: "Coined the Washington Consensus, the 10-point reform package of the IMF, World Bank and US Treasury.", nodes: ["ge-h-wc"] }
  ],
  takeaways: [
    "IMF austerity and SAPs stalled by 1985.",
    "Baker and Brady moved to real debt reduction.",
    "Conditionality bred resentment; Korea shows social costs."
  ]
});

L.push({
  id: "ge-coop", order: 20, level: 3, parent: "ge-crisis", kind: "chain",
  title: "Continued cooperation, 1971–1997",
  question: "Did cooperation break down in the Crisis Decades?",
  intro: "Advanced economies kept cooperating through informal summits, forums and currency agreements.",
  clusters: [
    { title: "Forums and deals", summary: "Altered forms.",
      steps: [
        { row: [
          N("ge-k-g7", "pol", "G7 and WEF", "1971–97", "Informal, non-binding; G6 → G7 → G8.", ["ge-coop-g7-wef"]),
          N("ge-k-erm", "pol", "ERM", "1979", "Reduced EEC exchange-rate variability.", ["ge-erm"]),
          N("ge-k-plaza", "pol", "Plaza Accord", "22 Sep 1985", "Dollar depreciated vs yen and mark.", ["ge-plaza"])
        ] },
        K("led to", "Partial success."),
        N("ge-k-res", "res±", "Partial correction", "1985–", "Fixed US–Germany, not US–Japan imbalance.", ["ge-plaza"])
      ] }
  ],
  judge: { prompt: "How far did cooperation survive the Crisis Decades? Weigh it.", factors: ["ge-k-g7", "ge-k-erm", "ge-k-plaza", "ge-k-res"],
           notes_view: "Prevents overstating the breakdown of cooperation in the Crisis Decades — cooperation persisted in altered forms." },
  historians: [],
  takeaways: [
    "G7, WEF, ERM and Plaza kept cooperation going.",
    "Mostly informal and non-binding.",
    "Plaza corrected only part of the imbalance."
  ]
});

L.push({
  id: "ge-compare", order: 21, level: 1, parent: "ge-top", kind: "matrix",
  title: "Factors across the four phases",
  question: "How did the importance of each factor change across the phases?",
  intro: "From the notes' periodisation and synthesis.",
  matrix: {
    cols: ["1945–52", "1952–late 1960s", "Late 1960s–73", "1970s–90s"],
    rows: [
      { h: "USA", cells: ["Dominant: aid, NATO", "Market access; institutions", "Decline; Nixon Shock", "Volcker; protectionism"] },
      { h: "W. Europe/Japan", cells: ["Aid recipients", "EEC, EFTA; Japanese Miracle", "Donors; rivals to US", "Japan shrugs off; ERM"] },
      { h: "MNCs", cells: ["US firms expand", "FDI, tech transfer", "European/Japanese rise", "Dwarf states"] },
      { h: "Institutions", cells: ["Bretton Woods, GATT", "Fixed rates; GATT rounds", "Bretton Woods strained", "IMF SAPs; WTO"] },
      { h: "Outcome", cells: ["Reconstruction", "~5% growth", "Slowing", "2.5% → 2.2% growth"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "The USA's role shifted from benefactor to self-interested actor.",
    "Europe/Japan moved from recipients to rivals and donors.",
    "Institutions gave stability, then imposed conditionality."
  ]
});

L.push({
  id: "ge-arg1", order: 22, level: 1, parent: "ge-top", kind: "argument",
  title: "Was the USA mainly responsible for growth?",
  question: "'The USA was mainly responsible for the growth of the global economy, 1945–1973.' How far do you agree?",
  intro: "Weigh the USA against at least two other factors, ideally across the phases.",
  clusters: [
    { title: "Claim", summary: "USA responsible.",
      steps: [ N("ge-y-claim", "judg", "The USA was mainly responsible", null, "US aid, security and institutions drove growth.", ["ge-essay-type1"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "USA vs others.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("ge-y-aid", "evid", "Aid and security", "1945–60", "Marshall Plan $13bn; Japan 30% bigger thanks to defence umbrella.", ["marshallecon", "ge-us-defence"]),
            K("supports", "And the institutions."),
            N("ge-y-inst", "evid", "US-designed institutions", "1944–47", "Bretton Woods and GATT on US proposals.", ["ge-bw-conference"])
          ] },
          { h: "Against", steps: [
            N("ge-y-state", "evid", "Active governments", "1946–", "Monnet Plan, MITI, welfare states.", ["ge-planning"]),
            K("contradicts", "Europe's own integration."),
            N("ge-y-eu", "evid", "European agency", "1950–69", "EPU, EEC quadrupled trade.", ["eec"]),
            K("contradicts", "Catch-up from a low base."),
            N("ge-y-catch", "evid", "Catch-up growth", null, "Prosperity followed depression and war.", ["ge-vanderwee", "ge-essay-type4"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "Phase-dependent.",
      steps: [ N("ge-y-judge", "judg", "Dominant early, shared later", null, "USA dominant 1945–52; then active governments, Europe/Japan and MNCs shared the role.", ["ge-l1-synthesis"]) ] }
  ],
  judge: { prompt: "How far was the USA responsible for growth? Rank the evidence.", factors: ["ge-y-aid", "ge-y-inst", "ge-y-state", "ge-y-eu", "ge-y-catch"],
           notes_view: "USA dominant 1945–52 → liberalisation and active government 1952–late 1960s; US influence continued via its institutions, but Western Europe/Japan's rise shows cooperation beyond US leadership." },
  historians: [],
  takeaways: [
    "For: aid, defence, institutions.",
    "Against: active governments, European agency, catch-up.",
    "Best answer: USA dominant early, shared later."
  ]
});

L.push({
  id: "ge-arg2", order: 23, level: 1, parent: "ge-top", kind: "argument",
  title: "Built-in flaws or external shocks?",
  question: "'The Crisis Decades were caused by external shocks rather than flaws built into Golden Age growth.' How far do you agree?",
  intro: "Distinguish short- vs long-term, developed vs developing, and region.",
  clusters: [
    { title: "Claim", summary: "External shocks.",
      steps: [ N("ge-z-claim", "judg", "External shocks caused the crises", null, "The oil shocks triggered the Crisis Decades.", ["ge-essay-type2"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "Shocks vs structure.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("ge-z-oil", "evid", "Oil shocks", "1973, 1979", "Inflation 11.9%; stagflation.", ["ge-stagflation"]),
            K("supports", "Shocks spread to debt."),
            N("ge-z-cat", "evid", "Oil as catalyst", "1970s–82", "Borrowing to pay oil bills.", ["ge-oil-catalyst"])
          ] },
          { h: "Against", steps: [
            N("ge-z-dollar", "evid", "Dollar overhang", "1961", "Foreign-held dollars exceeded reserves.", ["ge-bw-significance"]),
            K("contradicts", "US overstretch."),
            N("ge-z-us", "evid", "US relative decline", "1964–71", "Vietnam, Great Society, recovered rivals.", ["ge-dollar-overvalued"]),
            K("contradicts", "Policy choices too."),
            N("ge-z-policy", "evid", "Policy choices", "1970s–82", "Financial liberalisation, Volcker, overborrowing.", ["ge-finlib"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "Both.",
      steps: [ N("ge-z-judge", "judg", "Structural flaws, external trigger", null, "Oil revealed pre-existing weaknesses; developing countries suffered far longer.", ["ge-crisis-intro", "ge-essay-type3"]) ] }
  ],
  judge: { prompt: "Were the crises external or built in? Rank the evidence.", factors: ["ge-z-oil", "ge-z-cat", "ge-z-dollar", "ge-z-us", "ge-z-policy"],
           notes_view: "Best essays argue both — Bretton Woods' over-reliance on the dollar was structural; the 1973 oil shock a singular trigger. Differentiate developed vs developing economies." },
  historians: [],
  takeaways: [
    "For: oil shocks triggered stagflation and debt.",
    "Against: dollar overhang, US decline, policy choices.",
    "Best answer: structural flaws with an external trigger."
  ]
});
})();
