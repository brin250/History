// v2 flow charts: Malaysia (ec-flow-my-*) and Singapore (ec-flow-sg-*) detail charts, level 3
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ec = window.FLOWS2.ec || []);

/* ---------------- MALAYSIA ---------------- */

L.push({
  id: "ec-flow-my-1",
  order: 20, level: 3, parent: "ec-country-my",
  kind: "causal",
  title: "Malaysia 1957–69: colonial legacy to the May 1969 riots",
  question: "Why did Malaysia abandon laissez-faire for intensive, ethnically targeted intervention by 1971?",
  intro: "How a colonial ethnic division of labour and indiscriminate laissez-faire ISI left Malays behind, so Separation and the 1969 riots made restructuring a political necessity.",
  clusters: [
    { title: "Colonial legacy", summary: "British policy entrenched an ethnic division of labour; race became central.", steps: [
      { row: [
        { id: "my1-protectorate", type: "long_term_cause", t: "Chinese Protectorate", date: "1877", d: "Deliberate British administrative policy separating the communities.", cards: ["ec-my-colonial"] },
        { id: "my1-reservations", type: "long_term_cause", t: "Malay land reservations", d: "Land reserved for padi, keeping Malays in traditional agriculture.", cards: ["ec-my-colonial"] }
      ] },
      { link: "intensified", sub: "reinforced", how: "Deliberate British administrative policy reinforced the separation of communities into distinct economic roles." },
      { id: "my1-division", type: "context", t: "Colonial ethnic division of labour", d: "Europeans at the top; Chinese and Indians in the middle; Malays in traditional agriculture.",
        ev: ["Chinese: tin mining and middlemen. Indians: rubber tappers and chettiars. Europeans held the top positions."], cards: ["ec-my-colonial"] },
      { link: "led to", how: "Because economic roles followed ethnic lines, race shaped politics with direct economic consequences." },
      { id: "my1-drabble", type: "judgement", t: "Race became the leitmotiv", d: "Drabble: 'race became the leitmotiv' of Malaysian politics, with direct economic consequences.", cards: ["ec-my-colonial"] }
    ] },
    { link: "led to", how: "At independence the colonial legacy left dependence on primary exports and Chinese-led economic management.",
      title: "Independence inheritance", summary: "Primary-export dependence and a Social Contract leaving economic management to Chinese.", steps: [
      { row: [
        { id: "my1-primary", type: "long_term_cause", t: "Primary-product dependence", date: "1957", d: "At independence tin and rubber were 85% of export earnings, so diversification was urgently needed.", cards: ["ec-my-colonial"] },
        { id: "my1-contract", type: "context", t: "UMNO–MCA Social Contract", d: "Post-independence economic management stayed with the Chinese community." }
      ] }
    ] },
    { link: "led to", how: "The urgent need to diversify away from tin and rubber was pursued through laissez-faire import substitution.",
      title: "Laissez-faire ISI", summary: "Indiscriminate incentives brought early gains, then stagnation.", steps: [
      { id: "my1-pioneer", type: "policy", t: "Pioneer Industries Programme", date: "1958", d: "Laissez-faire ISI supporting processing of tin, rubber and timber, plus consumables such as beverages, vegetable oil and biscuits.",
        ev: ["Firms with pioneer status rose from 18 to 246 (1959–71).", "The First Malaysia Plan (1966–70) belongs to this laissez-faire period with no long-term strategy."], cards: ["ec-my-pioneer", "ec-my-govt"] },
      { link: "led to", how: "Incentives expanded consumer-goods processing at first, but were handed to all firms without a targeted strategy." },
      { split: [
        { h: "Early gains", steps: [
          { id: "my1-consumer", type: "consequence", sign: "+", t: "Consumer goods share rises", date: "1959–71", d: "Consumption goods share of industrial output rose 21.9% → 31.2%: positive early results.", cards: ["ec-my-pioneer"] }
        ] },
        { h: "Critical flaw", steps: [
          { id: "my1-flaw", type: "consequence", sign: "-", t: "Non-discretionary intervention", d: "All firms got incentives indiscriminately: no targeted developmental strategy, reflecting lack of expertise.", cards: ["ec-my-pioneer"] },
          { link: "led to", how: "Without a targeted strategy, industry relied on a domestic market that saturated quickly." },
          { id: "my1-stagnation", type: "consequence", sign: "-", t: "Manufacturing stagnates", date: "1960s", d: "Domestic market saturated quickly; manufacturing growth stagnated at 9% of GDP in the 1960s.", cards: ["ec-my-pioneer"] }
        ] }
      ] }
    ] },
    { link: "followed by", how: "Alongside ISI, Malaya merged with Singapore, Sabah and Sarawak in 1963.",
      title: "Merger and Separation", summary: "Malaysia formed for economic reasons; Singapore left two years later.", steps: [
      { id: "my1-merger", type: "event", t: "Malaysia formed", date: "1963", d: "Malaya, Singapore, Sabah and Sarawak merged: Singapore as export outlet/entrepot; Sabah and Sarawak for natural resources.",
        ev: ["Brunei opted out over oil revenue-sharing disputes."], cards: ["ec-my-merger"] },
      { link: "followed by", how: "The merger lasted only until Singapore's Separation in 1965." },
      { id: "my1-separation", type: "event", t: "Singapore's Separation", date: "1965", d: "Separation exposed the racial and economic inequity within Malaysia.", cards: ["ec-my-merger"] }
    ] },
    { link: "led to", sub: "contributed to", how: "By exposing racial and economic inequity, Separation contributed to the 13 May 1969 race riots.",
      title: "Riots and restructuring", summary: "The riots ended laissez-faire and launched intensive restructuring.", steps: [
      { id: "my1-riots", type: "turning_point", t: "13 May race riots", date: "1969", d: "Turning point: laissez-faire had left ethnic inequity untouched.", cards: ["ec-my-merger"] },
      { link: "provoked response", how: "The riots pushed the state from laissez-faire to intensive intervention to restructure ethnic wealth." },
      { id: "my1-nep", type: "policy", t: "New Economic Policy", date: "1971", d: "The state now intervened intensively to restructure wealth: see the NEP 1971–90 chart.",
        ev: ["Core narrative: laissez-faire ISI (1957–71) → 1969 riots → NEP (1971–90) → Mahathir heavy industry and privatisation (1980s) → deepening and widening (1986–90s). Average GDP growth 6.7% (1961–2001): solid but behind Singapore."],
        cards: ["nep", "ec-my-narrative"] }
    ] }
  ],
  judge: { prompt: "Which factor mattered most in ending laissez-faire and bringing intensive intervention by 1971? Rank them.",
    factors: ["my1-division", "my1-primary", "my1-flaw", "my1-stagnation", "my1-separation", "my1-riots"],
    notes_view: "The notes make the 1969 riots, sparked by racial inequity that laissez-faire left untouched, the turning point to the NEP; Separation contributed by exposing that inequity." },
  historians: [ { who: "Drabble", view: "Race became the leitmotiv of Malaysian politics, with direct economic consequences.", nodes: ["my1-drabble"] } ],
  takeaways: [
    "Colonial policy created an ethnic division of labour; 'race became the leitmotiv' (Drabble), so Malaysian economic policy was always also ethnic policy.",
    "Laissez-faire ISI had early gains (pioneer firms 18 → 246) but was non-discretionary and stagnated at 9% of GDP: reflecting a lack of expertise and no targeted strategy in the 1960s.",
    "Separation (1965) and the 1969 riots are the turning point from laissez-faire to intensive, ethnically targeted intervention."
  ]
});

L.push({
  id: "ec-flow-my-nep",
  order: 21, level: 3, parent: "ec-country-my",
  kind: "chain",
  title: "Malaysia's New Economic Policy, 1971–90",
  question: "Why was the NEP introduced and how far did it achieve its aims?",
  intro: "The NEP's rationale, targets and five strategies, including the deliberate contradiction of cutting foreign ownership while courting FDI, and its results by 1990.",
  clusters: [
    { title: "Why the NEP", summary: "Ethnic inequity in wealth and poverty, exposed by the 1969 riots.", steps: [
      { row: [
        { id: "nep-ownership", type: "long_term_cause", t: "Malay ownership only 2%", date: "1970", d: "Corporate wealth: 63% foreign, 35% other Malaysians (mostly Chinese), only 2% Malay.", cards: ["nep"] },
        { id: "nep-poverty70", type: "long_term_cause", t: "Poverty concentrated among Malays", date: "1970", d: "75% of households below the poverty line were Malay.", cards: ["nep"] },
        { id: "nep-chinese", type: "long_term_cause", t: "Disproportionate Chinese dominance", date: "1980s", d: "Chinese were 28% of population but held 69% of listed-firm capitalisation: disproportionate, hence political urgency.", cards: ["ec-my-chinese"] }
      ] },
      { link: "led to", how: "Racial inequity in ownership and poverty sparked the 1969 riots, which exposed it." },
      { id: "nep-riots", type: "trigger", t: "May 1969 riots", date: "1969", d: "The riots exposed inequity, making restructuring of ethnic wealth the state's priority.", cards: ["nep"] }
    ] },
    { link: "provoked response", how: "With restructuring now the priority, the state made national unity the NEP's primary objective.",
      title: "Aims and targets", summary: "National unity through poverty reduction and ethnic ownership targets.", steps: [
      { id: "nep-unity", type: "policy", t: "Primary objective: national unity", d: "Via (i) reducing poverty regardless of race and (ii) eliminating identification of race with economic function.", cards: ["nep"] },
      { link: "led to", how: "Ending the identification of race with economic function was set out as ethnic ownership targets." },
      { id: "nep-targets", type: "policy", t: "Ownership targets", d: "Malay share of economy → 30%; foreign share down to 30%; Chinese share allowed to rise slightly to 40%.", cards: ["nep"] }
    ] },
    { link: "led to", how: "The aims were pursued through five strategies; three redistributed income, assets and opportunity to bumiputera.",
      title: "Redistributive strategies", summary: "Rural development, state-built equity and preferential education.", steps: [
      { row: [
        { id: "nep-s-poverty", type: "policy", t: "Strategy 1: poverty eradication", d: "State investment in agriculture and rural development for bumiputera: FELDA (1956) land schemes; RISDA financing rubber smallholders.", cards: ["ec-my-nep-poverty"] },
        { id: "nep-s-equity", type: "policy", t: "Strategy 2: bumiputera corporate equity", d: "Screening, state capital injections, joint ventures: Industrial Coordination Act (1975); PERNAS (1978 trading corp); PNB (1978 equity corp).",
          ev: ["PNB bought Guthrie Corp (1981) and Harrisons & Crossfield (1985)."], cards: ["ec-my-nep-equity"] },
        { id: "nep-s-education", type: "policy", t: "Strategy 3: preferential access", d: "Preferential access to higher education, scholarships and government jobs: created a new Malay middle class by the late 1970s.", cards: ["ec-my-nep-poverty"] }
      ] }
    ] },
    { link: "led to", how: "The other two strategies handled foreign capital, which the targets aimed to cut to 30%.",
      title: "Foreign capital", summary: "Courting FDI while buying out foreign assets: a deliberate balance.", steps: [
      { row: [
        { id: "nep-s-fdi", type: "policy", t: "Strategy 4: courting FDI", d: "Incentives for FDI and manufacturing despite nationalist aims: Investment Incentives Act (1968); Free Trade Zone Act (1971, tariff-free for firms exporting ≥80%).", cards: ["ec-my-nep-fdi"] },
        { id: "nep-s-nationalism", type: "policy", t: "Strategy 5: economic nationalism", d: "State purchase of foreign assets: Petronas nationalised oil (1974); London Tin → Malaysian Mining Corp.", cards: ["ec-my-nep-equity"] }
      ], links: [ { from: "nep-s-fdi", to: "nep-s-nationalism", label: "contradicts", how: "Actively courting foreign investment sat against the aim of reducing foreign ownership." } ] },
      { link: "led to", how: "Holding both strategies together produced a deliberate balance rather than pure economic nationalism." },
      { id: "nep-contradiction", type: "consequence", sign: "±", t: "A deliberate contradiction", d: "The NEP aimed to cut foreign ownership yet courted FDI: FDI gave capital, expertise and competition bumiputera-focused capital alone could not.", cards: ["ec-my-nep-fdi"] }
    ] },
    { link: "led to", how: "By 1990 the strategies had shifted ownership and cut poverty, but unevenly and short of target.",
      title: "Outcomes by 1990", summary: "Real gains in equity and poverty, but target missed and gains narrow.", steps: [
      { split: [
        { h: "Achieved", steps: [ { row: [
          { id: "nep-equity", type: "consequence", sign: "+", t: "Bumiputera equity rises", date: "1971–90", d: "Bumiputera corporate equity rose 2.4% → 20.3% (1971–90).", cards: ["ec-my-eval-equity"] },
          { id: "nep-poverty", type: "consequence", sign: "+", t: "Poverty falls", d: "Poverty fell from 40.3% to 15%.", cards: ["ec-my-eval-equity"] },
          { id: "nep-middle", type: "consequence", sign: "+", t: "New Malay middle class", d: "Bumiputera employment shifted to secondary and tertiary sectors, creating a new Malay middle class.", cards: ["ec-my-eval-equity"] }
        ] } ] },
        { h: "Fell short", steps: [ { row: [
          { id: "nep-target", type: "consequence", sign: "-", t: "30% target missed", d: "Bumiputera corporate equity stayed below the 30% target.", cards: ["ec-my-eval-equity"] },
          { id: "nep-oligopoly", type: "consequence", sign: "-", t: "Gains to connected elite", d: "Rewards concentrated in a politically connected bumiputera 'oligopoly', e.g. North-South Highway → United Engineers/UMNO.", cards: ["ec-my-eval-equity"] }
        ] } ] }
      ] }
    ] },
    { link: "followed by", how: "The NEP formally ended in 1990 with the 30% equity target still unmet.",
      title: "After the NEP", summary: "Growth now prioritised over equity.", steps: [
      { id: "nep-end", type: "event", t: "NEP formally ends", date: "1990", d: "The NEP period closed with growth, not equity, now prioritised.", cards: ["ec-my-rasiah"] },
      { link: "led to", how: "Once the NEP ended, Mahathir would not slow industrialisation to reach 30% equity." },
      { id: "nep-rasiah", type: "judgement", t: "Growth over equity", d: "Rasiah: Mahathir would not sacrifice the pace of industrialisation to reach 30% bumiputera equity.", cards: ["ec-my-rasiah"] }
    ] }
  ],
  judge: { prompt: "How far did the NEP achieve its aims? Rank these outcomes by significance.",
    factors: ["nep-equity", "nep-poverty", "nep-middle", "nep-target", "nep-oligopoly"],
    notes_view: "Partial: equity improved and poverty fell 40.3% → 15%, but the 30% target was missed and benefits concentrated among connected elites; overall Malaysia struck the best balance of the three aims." },
  historians: [ { who: "Rasiah", view: "After 1990 Mahathir put the pace of industrialisation before reaching 30% bumiputera equity.", nodes: ["nep-rasiah"] } ],
  takeaways: [
    "The NEP was driven by political necessity (2% Malay ownership, 75% of poor households Malay) as much as economics: equity and national unity were the stated aims.",
    "Mechanisms were state agencies and trusts (FELDA, RISDA, PERNAS, PNB, Petronas), showing intensive intervention in the 1970s.",
    "Partial success: equity 2.4% → 20.3% and poverty 40.3% → 15%, but the 30% target was missed and gains went to a connected elite."
  ]
});

L.push({
  id: "ec-flow-my-mahathir",
  order: 22, level: 3, parent: "ec-country-my",
  kind: "chain",
  title: "Malaysia 1980s–90s: Mahathir, HICOM, privatisation and deepening",
  question: "How and why did Malaysia's industrial strategy change under Mahathir in the 1980s–90s?",
  intro: "State-led heavy industry ran into a debt crisis, forcing privatisation and devaluation; from 1986 the state shifted to technology and human capital, putting growth before equity.",
  clusters: [
    { title: "State-led heavy industry", summary: "Look East and HICOM aimed to build a bumiputera industrial class.", steps: [
      { id: "mah-lookeast", type: "policy", t: "'Look East' policy", d: "Mahathir modelled Malaysia on Japan and South Korea, not the West, admiring their work ethic as the basis of their economic miracles.", cards: ["ec-my-hicom"] },
      { link: "followed by", how: "Alongside Look East, Mahathir launched state-led heavy industry in 1981." },
      { id: "mah-hicom", type: "policy", t: "HICOM", date: "1981", d: "Heavy Industry Corporation of Malaysia: state-led investment in cars, cement, steel, motorcycles, aiming to build a bumiputera industrial/business class.",
        ev: ["Examples: Kedah Cement, Perwaja Steel, Proton."], cards: ["ec-my-hicom"] }
    ] },
    { link: "led to", sub: "backfired", how: "HICOM ventures ran inefficient minimum-scale operations funded by government loans.",
      title: "Debt crisis", summary: "Losses at state ventures sent public debt soaring.", steps: [
      { id: "mah-losses", type: "consequence", sign: "-", t: "Heavy HICOM losses", d: "HICOM ventures suffered heavy losses from inefficient minimum-scale operations and government loan funding.", cards: ["ec-my-privatisation"] },
      { link: "led to", how: "Loan-funded losses fed directly into soaring public debt." },
      { id: "mah-debt", type: "consequence", sign: "-", t: "Soaring public debt", date: "1980–85", d: "Public enterprises accounted for 64.3% of the public-sector deficit (1980–85).", cards: ["ec-my-privatisation"] }
    ] },
    { link: "provoked response", sub: "forced", how: "The debt crisis forced a U-turn to privatisation in 1983.",
      title: "Privatisation and partnership", summary: "From owner to partner: privatisation, deregulation, devaluation.", steps: [
      { id: "mah-priv", type: "policy", t: "Privatisation", date: "1983", d: "Sale of SOEs; private financing of state projects; contracting out services; introducing competition into state monopolies.", cards: ["ec-my-privatisation"] },
      { link: "followed by", how: "Privatisation was accompanied by a partnership ethos and by financial and currency reforms." },
      { row: [
        { id: "mah-inc", type: "policy", t: "'Malaysia Incorporated'", date: "1983", d: "Public and private sectors framed as partners, not opposites; 13 SOEs privatised by 1992.", cards: ["ec-my-privatisation"] },
        { id: "mah-dereg", type: "policy", t: "Financial deregulation", date: "1980s", d: "Mahathir reduced financial regulation.", cards: ["ec-my-privatisation", "ec-my-dereg"] },
        { id: "mah-deval", type: "policy", t: "Ringgit devaluation", date: "1985", d: "Ringgit devalued to boost export competitiveness: a common regional strategy, also used by Thailand and Indonesia.", cards: ["ec-my-privatisation", "ec-my-dereg"] }
      ] }
    ] },
    { link: "followed by", how: "From 1986 the state moved from owner and partner to facilitator of technology and human capital.",
      title: "Priorities shift", summary: "Industrialisation now mattered more than equity.", steps: [
      { id: "mah-shift", type: "turning_point", t: "Industrialisation over equity", date: "1986", d: "Priorities shifted: industrialisation now mattered more than equity; less ethnically targeted, more growth-focused.", cards: ["ec-my-deepening", "ec-my-govt"] },
      { link: "led to", how: "Putting industrialisation first, the state built plans and institutions to deepen technology and human capital and localise it." },
      { row: [
        { id: "mah-deepen", type: "policy", t: "Deepening: technology, human capital", d: "Promotion of Investments Act (1986, R&D incentives); Action Plan for Industrial Technology Development (1990, Vision 2020 target).",
          ev: ["Also the Multimedia Super Corridor Project and the Human Resource Development Act."], cards: ["ec-my-deepening"] },
        { id: "mah-widen", type: "policy", t: "Widening: localisation", date: "1993", d: "Malaysian Technology Development Corporation (MTDC, 1993) invested in 8 local tech firms (e.g. Proton, Sapura) by end of year.", cards: ["ec-my-deepening"] }
      ] }
    ] },
    { link: "led to", how: "Deepening and widening transformed Malaysia's export base toward manufacturing.",
      title: "Industrial transformation", summary: "Manufactured exports and NIC status, at equity's expense.", steps: [
      { row: [
        { id: "mah-mfg", type: "consequence", sign: "+", t: "Manufacturing 60% of exports", date: "1990", d: "Manufacturing reached 60% of exports by 1990, against 20% a decade earlier.", cards: ["ec-my-deepening"] },
        { id: "mah-nic", type: "consequence", sign: "+", t: "Malaysia becomes an NIC", d: "Export growth reached 20% (1990–95); Malaysia became a Newly Industrialised Country under Mahathir.", cards: ["ec-my-eval-growth"] }
      ] },
      { link: "supports", how: "Rapid industrial gains despite the missed 30% equity target show growth was put before equity." },
      { id: "mah-rasiah", type: "judgement", t: "Growth over equity", d: "Rasiah: Mahathir was sad bumiputeras missed 30% equity but 'not prepared to achieve it at the expense of checking the pace of industrialisation'.", cards: ["ec-my-rasiah"] }
    ] }
  ],
  judge: { prompt: "Which change did most to transform Malaysian industry in the 1980s–90s? Rank them.",
    factors: ["mah-hicom", "mah-priv", "mah-inc", "mah-deval", "mah-deepen", "mah-widen"],
    notes_view: "" },
  historians: [ { who: "Rasiah", view: "Mahathir regretted the missed 30% target but would not slow industrialisation to reach it.", nodes: ["mah-rasiah"] } ],
  takeaways: [
    "HICOM shows the costs of state-led, bumiputera-focused heavy industry: losses and debt (64.3% of the public-sector deficit) forced a U-turn to privatisation.",
    "Government role shifted from owner (HICOM) to partner ('Malaysia Incorporated') to facilitator of technology and human capital after 1986.",
    "Rasiah: once the NEP ended in 1990, growth was prioritised over equity even though equity goals were unmet."
  ]
});

L.push({
  id: "ec-flow-my-finance",
  order: 23, level: 3, parent: "ec-country-my",
  kind: "causal",
  title: "Malaysia's financial policy and the 1997 crisis",
  question: "Why was Malaysia vulnerable to the 1997 Asian Financial Crisis?",
  intro: "Deregulation, NPL crisis, re-regulation, then forgotten lessons: Malaysia's 1997 vulnerability came from domestic stock and property overheating, not foreign debt or poor governance.",
  clusters: [
    { title: "Deregulation", summary: "Easier credit under weak oversight built up bad loans.", steps: [
      { id: "fin-dereg", type: "policy", t: "Financial deregulation", date: "mid-1980s", d: "Deregulation attracted FDI and eased credit.", cards: ["ec-my-dereg"] },
      { link: "led to", sub: "weak oversight", how: "Easier credit under weak oversight let non-performing loans build up." },
      { id: "fin-npl", type: "consequence", sign: "-", t: "NPL build-up", date: "1987–88", d: "Non-performing loans reached about 30% of commercial bank loans by 1987–88.", cards: ["ec-my-dereg"] }
    ] },
    { link: "provoked response", how: "The NPL build-up prompted the re-introduction of stringent banking regulation in 1989.",
      title: "Re-regulation, then relapse", summary: "Tough rules in 1989, easy credit again by the 1990s.", steps: [
      { id: "fin-bafia", type: "policy", t: "Banking and Financial Institutions Act", date: "1989", d: "Stringent regulation re-introduced: sound practices and cash reserves required; private foreign borrowing needed Bank Negara approval.", cards: ["ec-my-dereg"] },
      { link: "followed by", how: "By the 1990s the lessons were forgotten and easy credit returned." },
      { id: "fin-easy", type: "consequence", sign: "-", t: "Lessons forgotten", date: "1990s", d: "Easy credit returned, renewing the build-up of non-performing loans.", cards: ["ec-my-dereg"] }
    ] },
    { link: "followed by", how: "Renewed NPLs coincided with overheating domestic markets, riskier bank mergers and a large current account deficit.",
      title: "Sources of vulnerability", summary: "Domestic property and stock overheating plus a current account deficit.", steps: [
      { row: [
        { id: "fin-property", type: "short_term_cause", t: "Property market overheating", d: "Property loans made up 45–55% of lending.", cards: ["ec-my-afc"] },
        { id: "fin-stock", type: "short_term_cause", t: "Stock market overheating", d: "KLSE was 3rd largest in Asia-Pacific; stock market capitalisation reached 300% of GDP.", cards: ["ec-my-afc"] },
        { id: "fin-mergers", type: "short_term_cause", t: "Bank–finance company mergers", d: "E.g. Sime Darby + UMBC → Sime Bank: increased exposure to stock-market risk.", cards: ["ec-my-afc"] },
        { id: "fin-cad", type: "short_term_cause", t: "Current account deficit", d: "A large current account deficit combined with a volatile stock market.", cards: ["ec-my-afc"] }
      ], links: [ { from: "fin-mergers", to: "fin-stock", label: "intensified", how: "Mergers tied banks more closely to the stock market, increasing their exposure to its risk." } ] },
      { link: "led to", how: "Overheated markets and the deficit left Malaysia exposed when the 1997 crisis struck." },
      { id: "fin-afc", type: "event", t: "1997 Asian Financial Crisis", date: "1997", d: "KLSE composite index fell from 1,238 points (Dec 1996) to 594 points (Dec 1997).", cards: ["ec-my-afc"] }
    ] },
    { link: "supports", how: "The crash's pattern points to domestic overheating, not foreign debt or weak banks.",
      title: "Diagnosis", summary: "Different from Thailand and Indonesia: domestic bubble, robust banks.", steps: [
      { split: [
        { h: "Not foreign debt", steps: [
          { id: "fin-notdebt", type: "evidence", t: "No foreign-debt build-up", d: "Unlike Indonesia, no massive foreign debt build-up: the root cause was domestic property and stock overheating, unlike Thailand/Indonesia.", cards: ["ec-my-afc"] }
        ] },
        { h: "Less moral hazard", steps: [
          { id: "fin-robust", type: "evidence", t: "Relatively robust banks", date: "1996", d: "BNM had forced weak banks to take losses (mid-1980s); annual NPL disclosure; banking 'relatively robust' in 1996.", cards: ["ec-my-afc"] }
        ] }
      ] },
      { link: "supports", how: "Domestic causes and sound banking show vulnerability came from the deficit and volatile stocks, not poor governance." },
      { id: "fin-verdict", type: "judgement", t: "Exposed despite good governance", d: "Vulnerability stemmed from the current account deficit and volatile stock market, not poor governance: transparent, quick to fix NPLs pre-1997, yet exposed.", cards: ["ec-my-eval-growth"] }
    ] }
  ],
  judge: { prompt: "Which factor did most to make Malaysia vulnerable in 1997? Rank them.",
    factors: ["fin-easy", "fin-property", "fin-stock", "fin-mergers", "fin-cad"],
    notes_view: "The root cause was overheating of domestic property and stock markets, not foreign debt; vulnerability stemmed from the current account deficit and volatile stock market, not poor governance." },
  historians: [],
  takeaways: [
    "Malaysia's financial story is cyclical: deregulation → NPLs (~30%) → 1989 re-regulation → easy credit again → 1997.",
    "Distinguish Malaysia's 1997 cause (domestic stock/property bubble, 300% of GDP market cap) from Indonesia's foreign-debt build-up.",
    "Good governance (transparency, BNM discipline) limited moral hazard, so vulnerability stemmed from the current account deficit and volatile stock market, not poor governance."
  ]
});

L.push({
  id: "ec-flow-my-eval",
  order: 24, level: 3, parent: "ec-country-my",
  kind: "evaluation",
  title: "Evaluating Malaysia: successes, limits, state and ethnicity",
  question: "How successful was Malaysia's economic development, and how far did ethnic politics shape it?",
  intro: "Malaysia judged against equity, growth, unity and stability; how the state's role changed by period; and why ethnic Chinese dominance shaped everything.",
  clusters: [
    { title: "Role of ethnic communities", summary: "Disproportionate Chinese economic control made race central.", steps: [
      { id: "myev-chinese", type: "context", t: "Chinese economic dominance", date: "1980s", d: "Across SEA, the Chinese share of listed-firm capitalisation far exceeded their share of population.",
        ev: ["Chinese share of listed-firm capitalisation (share of population), 1980s: Singapore 81% (70%); Thailand 81% (10%); Indonesia 73% (3.8%); Malaysia 69% (28%); Philippines 50–60% (1.3%)."], cards: ["ec-my-chinese"] },
      { link: "supports", how: "Even with one of the higher Chinese population shares, Malaysia's 69% Chinese control was very disproportionate." },
      { id: "myev-urgency", type: "long_term_cause", t: "Disproportionate control in Malaysia", d: "Chinese held 69% of listed capital with 28% of population, explaining the NEP's political urgency.", cards: ["ec-my-chinese", "ec-my-colonial"] },
      { link: "supports", how: "Disproportionate ethnic control helps explain why race dominated Malaysian politics and economic policy." },
      { id: "myev-drabble", type: "judgement", t: "Race became the leitmotiv", d: "Drabble: 'race became the leitmotiv' of Malaysian politics, with economic consequences.", cards: ["ec-my-colonial"] }
    ] },
    { link: "provoked response", how: "Ethnic inequity made the NEP's 1970s intervention intensive and ethnically targeted after 1960s laissez-faire.",
      title: "Role of government by period", summary: "How the nature of intervention changed, decade by decade.", steps: [
      { id: "myev-gov60", type: "policy", t: "1960s: laissez-faire", date: "1960s", d: "Laissez-faire, no long-term strategy: Pioneer Industries Programme; First Malaysia Plan (1966–70).", cards: ["ec-my-govt"] },
      { link: "followed by", how: "After the 1969 riots, laissez-faire gave way to NEP-driven, intensive intervention." },
      { id: "myev-gov70", type: "policy", t: "1970s: NEP-driven intervention", date: "1970s", d: "Intensive: rural development; state trusts and agencies (FELDA, PERNAS, PNB) restructure ethnic ownership.", cards: ["ec-my-govt"] },
      { link: "followed by", how: "In the 1980s the state turned to state-led heavy industry under Mahathir." },
      { id: "myev-gov80", type: "policy", t: "1980s: state-led heavy industry", date: "1980s", d: "State-led heavy industry (HICOM) → crisis → deregulation, currency devaluation, privatisation.", cards: ["ec-my-govt"] },
      { link: "followed by", how: "From 1986 the state shifted to building technology and human capital." },
      { id: "myev-gov86", type: "policy", t: "1986 onward: growth-focused facilitation", date: "1986+", d: "State plans and institutions for technology and human capital; less ethnically targeted, more growth-focused.", cards: ["ec-my-govt"] }
    ] },
    { link: "led to", how: "NEP restructuring, post-1986 deepening and Bank Negara's regulation produced equity gains, diversified growth and relatively stable banking.",
      title: "Successes", summary: "Equity gains, diversified growth and relatively sound banking.", steps: [
      { row: [
        { id: "myev-equity", type: "consequence", sign: "+", t: "NEP equity gains", d: "Bumiputera equity 2.4% → 20.3% (1971–90); poverty 40.3% → 15%; shift to secondary/tertiary jobs; new Malay middle class.", cards: ["ec-my-eval-equity"] },
        { id: "myev-growth", type: "consequence", sign: "+", t: "Diversified industrial growth", d: "Industry 24.7% → 41.7% of GDP (1970–90); three main exports 54.4% → 44.5% of total; became an NIC.",
          ev: ["Export growth rose to 20% (1990–95).", "Overall average GDP growth 6.7% (1961–2001): solid but behind Singapore (8.3%)."], cards: ["ec-my-eval-growth", "ec-my-narrative"] },
        { id: "myev-finance", type: "consequence", sign: "+", t: "Financial stability", d: "Relatively transparent, well-regulated banking system; quick to address NPL crises before 1997.", cards: ["ec-my-eval-growth"] }
      ] }
    ] },
    { link: "contradicts", how: "Yet the record also shows narrow equity gains, early stagnation, ethnic and regional division, and exposure in 1997.",
      title: "Limitations", summary: "Equity shortfall, early stagnation, weakened unity, 1997 exposure.", steps: [
      { row: [
        { id: "myev-shortfall", type: "consequence", sign: "-", t: "Equity target missed", d: "Missed the 30% target; gains went to a connected bumiputera 'oligopoly' (North-South Highway → United Engineers/UMNO).", cards: ["ec-my-eval-equity"] },
        { id: "myev-stagnation", type: "consequence", sign: "-", t: "Early stagnation", date: "1960s", d: "1960s manufacturing growth stuck at 9% of GDP under non-discretionary ISI.", cards: ["ec-my-pioneer"] },
        { id: "myev-unity", type: "consequence", sign: "-", t: "National unity weakened", d: "Affirmative action reinforced ethnic identity as the basis for privilege: divisive long-term.", cards: ["ec-my-eval-growth"] },
        { id: "myev-regional", type: "consequence", sign: "-", t: "Regional inequality", d: "Regional inequality emerged: industrialised west coast versus poorer Kedah and Kelantan.", cards: ["ec-my-eval-growth"] },
        { id: "myev-1997", type: "consequence", sign: "-", t: "1997 vulnerability", date: "1997", d: "Exposed through domestic stock/property overheating and a large current account deficit.", cards: ["ec-my-afc"] }
      ] }
    ] },
    { link: "led to", how: "Weighing the criteria: growth clearly succeeded, equity was partial and national unity arguably worsened.",
      title: "Judgement", summary: "Strong on growth, partial on equity, weak on unity.", steps: [
      { id: "myev-rasiah", type: "judgement", t: "Growth over equity", d: "Rasiah: Mahathir would not reach 30% equity 'at the expense of checking the pace of industrialisation'.", cards: ["ec-my-rasiah"] },
      { link: "supports", how: "Rasiah's trade-off explains why growth outpaced equity once the NEP ended." },
      { id: "myev-overall", type: "judgement", t: "Strong growth, partial equity", d: "Strong on growth and diversification, partial on equity, weak on unity: ethnic politics shaped both the NEP's ambitions and its limits." }
    ] }
  ],
  judge: { prompt: "On which criterion was Malaysia most and least successful? Rank these outcomes.",
    factors: ["myev-equity", "myev-growth", "myev-finance", "myev-shortfall", "myev-unity", "myev-regional", "myev-1997"],
    notes_view: "Growth strong and diversified (NIC status); equity partial, short of 30% with benefits to connected elites; reasonably successful overall, the best balance of the three aims among the case studies." },
  historians: [
    { who: "Drabble", view: "Race became the leitmotiv of Malaysian politics, with economic consequences.", nodes: ["myev-drabble"] },
    { who: "Rasiah", view: "Mahathir would not reach 30% equity at the expense of the pace of industrialisation.", nodes: ["myev-rasiah"] }
  ],
  takeaways: [
    "Use the criteria table: growth/diversification clearly succeeded; equity was partial; national unity arguably worsened.",
    "Government role was never constant: laissez-faire → NEP intensive → state heavy industry → privatisation → growth-focused facilitation.",
    "Ethnic community (Chinese dominance, 69% of listed capital) explains the political urgency of ethnically targeted NEP restructuring."
  ]
});

/* ---------------- SINGAPORE ---------------- */
L.push({
  id: "ec-flow-sg-1",
  order: 25, level: 3, parent: "ec-country-sg",
  kind: "causal",
  title: "Singapore 1950s–1971: from entrepot to forced EOI",
  question: "Why did Singapore turn decisively to export-oriented industrialisation after 1965?",
  intro: "A resource-less entrepot took foreign advice to industrialise, tried ISI under Malaysia, then Separation and British withdrawal forced a decisive turn to EOI.",
  clusters: [
    { title: "Starting conditions", summary: "No resources, but open, service-skilled and export-oriented from the start.", steps: [
      { row: [
        { id: "sg1-entrepot", type: "context", t: "British-built entrepot", date: "1950s", d: "British developed Singapore as an entrepot, not an industrial centre; 1950s growth rate below 2%.", cards: ["ec-sg-context"] },
        { id: "sg1-nofallback", type: "long_term_cause", t: "No primary fallback", d: "No agrarian sector, no natural resources, tiny domestic market, unlike Malaysia, Thailand, Indonesia and the Philippines.", cards: ["ec-sg-context"] },
        { id: "sg1-open", type: "long_term_cause", t: "Open from the start", d: "Entrepot trade gave early exposure to a wide range of goods: an inherently export-oriented, open economy.",
          ev: ["Exports as % of GDP, 1950–60 → 1990–2000: Singapore 126.7 → 177.4; Malaysia 53.3 → 94.4; Thailand 19.6 → 45.1; Philippines 12.0 → 39.7; Indonesia 25.0 → 30.8; Myanmar 21.0 → 1.3."],
          cards: ["ec-sg-context", "ec-sg-exportgdp"] },
        { id: "sg1-human", type: "long_term_cause", t: "Service-skilled workforce", date: "1947", d: "1947 workforce: services 30.9%, commerce 23.2%, agriculture only 8.1%: a different starting quality of human capital.", cards: ["ec-sg-context"] }
      ], links: [ { from: "sg1-entrepot", to: "sg1-open", label: "led to", how: "Reliance on entrepot trade meant early exposure to many goods and an inherently open, export-oriented economy." } ] }
    ] },
    { link: "followed by", how: "Between 1955 and 1961 three foreign reports recommended government-led industrialisation.",
      title: "Foreign advice and the EDB", summary: "Three reports shaped a planned, government-led industrial drive.", steps: [
      { row: [
        { id: "sg1-ibrd", type: "policy", t: "IBRD Report", date: "1955", d: "Government should play an infrastructural role and attract FDI.", cards: ["ec-sg-reports"] },
        { id: "sg1-lyle", type: "policy", t: "Lyle Report", date: "1959", d: "Led to the Pioneer Industries Ordinance and the Industrial Expansion Ordinance.", cards: ["ec-sg-reports"] },
        { id: "sg1-winsemius", type: "policy", t: "Winsemius Report", date: "1961", d: "Led to the first Development Plan (1961–64) and the Economic Development Board.", cards: ["ec-sg-reports"] }
      ] },
      { link: "led to", how: "The reports' advice was institutionalised: the Winsemius Report led directly to the EDB in August 1961." },
      { id: "sg1-edb", type: "policy", t: "Economic Development Board", date: "Aug 1961", d: "'One-stop investment agency' providing loans, technical advice and industrial estates.",
        ev: ["By 1968 the EDB had spawned DBS, the National Productivity Board and Jurong Town Corporation."], cards: ["ec-sg-reports"] }
    ] },
    { link: "led to", how: "Foreign-advised industrialisation took the form of ISI under merger with Malaysia.",
      title: "Merger and Separation", summary: "The promised common market never came; Singapore left.", steps: [
      { id: "sg1-merger", type: "event", t: "Merger: ISI under Malaysia", date: "1963", d: "Malaysia was to be hinterland (resources) and common market (domestic demand) for Singapore.", cards: ["ec-sg-crisis"] },
      { link: "led to", sub: "tension", how: "The common market never materialised, becoming a source of tension that contributed to Separation." },
      { id: "sg1-separation", type: "turning_point", t: "Separation", date: "1965", d: "Singapore lost its hinterland and common market; Malaysia became an economic competitor.", cards: ["ec-sg-crisis"] }
    ] },
    { link: "intensified", how: "The loss of the hinterland was compounded by Britain's military withdrawal, announced in July 1967.",
      title: "Forced EOI", summary: "Twin shocks forced a decisive pivot to export-oriented industry.", steps: [
      { id: "sg1-withdrawal", type: "turning_point", t: "British military withdrawal", date: "1967–71", d: "Announced July 1967, completed Dec 1971: loss of 40,000 jobs, equal to 10% of national income.", cards: ["ec-sg-crisis"] },
      { link: "provoked response", how: "Losing the hinterland and 10% of national income forced Singapore to rethink its industrial strategy." },
      { split: [
        { h: "Short term", steps: [
          { id: "sg1-isi", type: "consequence", sign: "±", t: "Continued ISI", d: "ISI continued in the short term to absorb excess labour, e.g. textiles.", cards: ["ec-sg-crisis"] }
        ] },
        { h: "Decisive pivot", steps: [
          { id: "sg1-eoi", type: "policy", t: "EOI under Goh Keng Swee", date: "late 1960s", d: "Decisive pivot to export-oriented industrialisation, leveraging human capital, location and port status.",
            ev: ["The EOI levers (next chart): export incentives, manpower training, FDI policy, political stability.",
                 "Core narrative: entrepot → brief ISI under Malaysia (1960–65) → forced EOI after 1965 and 1971 → 'Second Industrial Revolution' (1979) → services and regionalisation (1986+). Average growth 8.3% (1961–2001): region's top performer."],
            cards: ["ec-sg-crisis", "ec-sg-levers", "ec-sg-narrative"] }
        ] }
      ] }
    ] }
  ],
  judge: { prompt: "Which factor did most to push Singapore into export-oriented industrialisation? Rank them.",
    factors: ["sg1-nofallback", "sg1-open", "sg1-human", "sg1-merger", "sg1-separation", "sg1-withdrawal"],
    notes_view: "Singapore's total lack of resources forced early, decisive EOI adoption; the turning point was Separation (1965) plus British withdrawal (1971), which forced rapid EOI." },
  historians: [],
  takeaways: [
    "Singapore's starting conditions (no resources, entrepot openness, service-skilled workforce) made EOI both necessary and feasible.",
    "Foreign reports (IBRD, Lyle, Winsemius) and the EDB show the state's role was planned from the start.",
    "Separation (1965) and British withdrawal (10% of national income) were external shocks that forced the turn to EOI: crisis as catalyst."
  ]
});

L.push({
  id: "ec-flow-sg-eoi",
  order: 26, level: 3, parent: "ec-country-sg",
  kind: "chain",
  title: "Singapore 1965–79: the levers of export-oriented industrialisation",
  question: "How did the Singapore state make export-oriented industrialisation work, 1965–79?",
  intro: "How the state used incentives, training, FDI policy and political stability to make MNC-led export manufacturing work, and the results by 1980.",
  clusters: [
    { title: "The pivot and first levers", summary: "Export incentives and manpower training launched EOI.", steps: [
      { id: "eoi-pivot", type: "context", t: "Pivot to EOI", date: "late 1960s", d: "Under Goh Keng Swee, after Separation and British withdrawal.", cards: ["ec-sg-crisis"] },
      { link: "led to", how: "The pivot was carried out through state levers, starting with export incentives and manpower training." },
      { row: [
        { id: "eoi-incentives", type: "policy", t: "Lever 1: export incentives", d: "Concessionary tax rates; lower MAS interest rates for export financing; Export Credit Insurance Scheme (1976); Small Industries Finance Scheme (1976).", cards: ["ec-sg-levers"] },
        { id: "eoi-training", type: "policy", t: "Lever 2: manpower training", d: "Industrial training centres; 1968 education restructuring toward technical/vocational skills; technical/vocational enrolment rose 8× (1966–76).",
          ev: ["E.g. Ngee Ann College and Singapore Polytechnic reorganised 1968–69."], cards: ["ec-sg-levers"] }
      ] }
    ] },
    { link: "led to", how: "EOI also depended on attracting foreign MNCs with generous investment terms.",
      title: "Opening to foreign capital", summary: "Generous FDI terms, then full foreign ownership in 1978.", steps: [
      { id: "eoi-fdi", type: "policy", t: "Lever 3: foreign investment policy", d: "Pioneer-status tax exemptions; free profit repatriation; simplified immigration for skilled workers and capital holders.", cards: ["ec-sg-fdi"] },
      { link: "followed by", how: "In 1978 FDI policy went further still, allowing full foreign ownership." },
      { id: "eoi-100", type: "turning_point", t: "100% foreign ownership allowed", date: "1978", d: "Full foreign ownership permitted: a 'major turning point' in Singapore's openness to FDI.", cards: ["ec-sg-fdi"] }
    ] },
    { link: "followed by", how: "Alongside incentives, the state secured labour peace and built supporting boards and enterprises.",
      title: "Stability and state machinery", summary: "Labour peace, tripartism, statutory boards, state enterprises.", steps: [
      { row: [
        { id: "eoi-stability", type: "policy", t: "Lever 4: political stability", d: "PAP political stability: lost man-days 129,893 (1960) → 1,001 (1977), a 99% decline.",
          ev: ["Infrastructure: strong transport and communication legacy from entrepot history."], cards: ["ec-sg-fdi"] },
        { id: "eoi-tripartism", type: "policy", t: "Tripartism", date: "1971", d: "NTUC and the National Wages Council (1971) coordinate government, unions and employers.", cards: ["ec-sg-boards"] },
        { id: "eoi-boards", type: "policy", t: "Statutory boards", d: "National Productivity Board (1972); JTC (1968, industrial land).", cards: ["ec-sg-boards"] },
        { id: "eoi-soes", type: "policy", t: "State enterprises", d: "Neptune Orient Lines (1969), Singapore Petroleum Company (1969), Singapore Airlines (1972), Jurong/Keppel Shipyard.", cards: ["ec-sg-holdings"] }
      ], links: [ { from: "eoi-tripartism", to: "eoi-stability", label: "enabled", how: "Tripartite coordination of government, unions and employers almost entirely eliminated labour unrest." } ] }
    ] },
    { link: "led to", how: "Incentives, training, FDI-friendly policy and labour peace drew foreign firms into export manufacturing.",
      title: "Results by 1980", summary: "MNC-led exports and the region's highest manufacturing share.", steps: [
      { row: [
        { id: "eoi-mnc", type: "consequence", sign: "+", t: "MNC-led exports", date: "1976", d: "Foreign-affiliated firms made up 71% of exports by 1976, mainly from the US, UK and Japan.", cards: ["ec-sg-fdi"] },
        { id: "eoi-mfg", type: "consequence", sign: "+", t: "Manufacturing surge", date: "1960–80", d: "Manufacturing share of GDP rose 13.2% (1960) → 29.1% (1980): the highest in the region.", cards: ["ec-sg-fdi", "ec-sg-indicators"] }
      ] },
      { link: "followed by", how: "By the late 1970s the low-value, labour-intensive model was reaching its limit." },
      { id: "eoi-shortage", type: "consequence", sign: "±", t: "Labour shortage", date: "late 1970s", d: "The low-value, labour-intensive model reached its limit, leading to the Second Industrial Revolution (next chart).", cards: ["ec-sg-sir"] }
    ] }
  ],
  judge: { prompt: "Which lever mattered most to the success of EOI? Rank them.",
    factors: ["eoi-incentives", "eoi-training", "eoi-fdi", "eoi-100", "eoi-stability", "eoi-tripartism"],
    notes_view: "" },
  historians: [],
  takeaways: [
    "EOI succeeded because the state combined incentives, training and FDI-friendly policy with labour peace (lost man-days down 99%).",
    "Foreign-affiliated firms (71% of exports by 1976) drove export growth; manufacturing reached 29.1% of GDP by 1980, the highest in the region.",
    "Allowing 100% foreign ownership (1978) is the turning point to cite on Singapore's openness to FDI."
  ]
});

L.push({
  id: "ec-flow-sg-2",
  order: 27, level: 3, parent: "ec-country-sg",
  kind: "chain",
  title: "Singapore 1979–1990s: technology, services and regionalisation",
  question: "How and why did Singapore restructure its economy after 1979?",
  intro: "Labour shortage drove a shift up the value chain; the 1985 recession exposed vulnerability and prompted 'two engines' of manufacturing and services, then regionalisation.",
  clusters: [
    { title: "Second Industrial Revolution", summary: "Labour shortage drove a deliberate shift to technology.", steps: [
      { id: "sg2-shortage", type: "short_term_cause", t: "Labour shortage", date: "late 1970s", d: "Low-value, labour-intensive industry was no longer viable.", cards: ["ec-sg-sir"] },
      { link: "led to", how: "The labour shortage drove a deliberate shift away from labour-intensive industry towards technological sophistication." },
      { id: "sg2-sir", type: "policy", t: "'Second Industrial Revolution'", date: "1979–81", d: "Deliberate shift to technological sophistication: R&D, engineering design, computer software.", cards: ["ec-sg-sir"] },
      { link: "led to", how: "The shift was set out as a ten-year plan in Goh Chok Tong's 1981 Budget." },
      { id: "sg2-budget", type: "policy", t: "Goh Chok Tong's Budget", date: "1981", d: "10-year Economic Development Plan for the Eighties: high-value products using skilled labour, less exposed to tariffs/protectionism than textiles.",
        ev: ["Target products: integrated circuits, computers, aircraft components, X-ray machines, using more skilled managerial, engineering and technical labour."], cards: ["ec-sg-sir"] }
    ] },
    { link: "led to", how: "The technology drive was backed by new state institutions for technology, overseas investment and trade.",
      title: "New institutions", summary: "STC, GIC and the Trade Development Board; productivity nearly doubles.", steps: [
      { row: [
        { id: "sg2-stc", type: "policy", t: "Singapore Technologies Corporation", date: "1983", d: "STC, a new state technology institution.", cards: ["ec-sg-sir"] },
        { id: "sg2-gic", type: "policy", t: "GIC", d: "Government of Singapore Investment Corporation: invests in overseas high-tech MNCs.", cards: ["ec-sg-sir"] },
        { id: "sg2-tdb", type: "policy", t: "Trade Development Board", date: "1983", d: "Statutory board, later IE Singapore → Enterprise Singapore.", cards: ["ec-sg-boards"] }
      ] },
      { link: "followed by", how: "Over 1979–84 the shift to higher-value production nearly doubled value-added per worker." },
      { id: "sg2-va", type: "consequence", sign: "+", t: "Value-added per worker doubles", date: "1979–84", d: "Value-added per worker nearly doubled over 1979–84.", cards: ["ec-sg-sir"] }
    ] },
    { link: "followed by", how: "From 1981 to 1986 Singapore faced difficulties as domestic costs and global conditions turned against it.",
      title: "1985 recession", summary: "High wages and global headwinds exposed vulnerability.", steps: [
      { row: [
        { id: "sg2-wages", type: "short_term_cause", t: "High-wage policy", d: "High wages, adopted to attract skilled labour, plus a tight labour market reduced investment attractiveness.", cards: ["ec-sg-recession"] },
        { id: "sg2-slowdown", type: "short_term_cause", t: "Global slowdown", d: "A global economic slowdown cut demand.", cards: ["ec-sg-recession"] },
        { id: "sg2-protection", type: "short_term_cause", t: "Developed-world protectionism", d: "Protectionism in developed economies hit an export-dependent economy.", cards: ["ec-sg-recession"] },
        { id: "sg2-oil", type: "short_term_cause", t: "Low oil prices", d: "Low oil prices hurt shipbuilding and ship-repair, a quarter of manufacturing.", cards: ["ec-sg-recession"] }
      ] },
      { link: "led to", how: "Reduced investment attractiveness, weak global demand and protectionism produced recession in 1985." },
      { id: "sg2-recession", type: "consequence", sign: "-", t: "1985 recession", date: "1985", d: "Part of the 1981–86 difficulties: demonstrated Singapore's vulnerability to global trends.", cards: ["ec-sg-recession"] }
    ] },
    { link: "provoked response", how: "Having exposed Singapore's vulnerability, the recession prompted the 1986 Economic Committee to rethink sources of growth.",
      title: "Two engines of growth", summary: "Manufacturing and services; Singapore as a total business centre.", steps: [
      { id: "sg2-committee", type: "policy", t: "Economic Committee: two engines", date: "1986", d: "Chaired by Lee Hsien Loong, with business representatives: manufacturing AND services as engines; Singapore a 'total business centre' ('clusters' concept).", cards: ["ec-sg-services", "ec-sg-holdings"] },
      { link: "followed by", how: "New instruments then supported small firms and strategic cluster investment." },
      { row: [
        { id: "sg2-seb", type: "policy", t: "Small Enterprise Bureau", date: "1986", d: "New statutory board, set up the same year as the Economic Committee.", cards: ["ec-sg-boards"] },
        { id: "sg2-cdf", type: "policy", t: "Cluster Development Fund", date: "1995", d: "S$1 billion for strategic investments.", cards: ["ec-sg-services"] }
      ] },
      { link: "followed by", how: "Services expanded and corporate headquarters arrived after the 1986 shift." },
      { id: "sg2-services", type: "consequence", sign: "+", t: "Services grow", d: "Services share of GDP 16% (1965) → 24% (1985) → 28% (2010); over 60 major TNCs made Singapore their Asia-Pacific HQ since 1986.", cards: ["ec-sg-services", "ec-sg-regional"] }
    ] },
    { link: "followed by", how: "In the 1990s the state pushed Singapore-based firms outwards to transcend city-state limits.",
      title: "Regionalisation", summary: "The 'second wing': Singapore firms integrated with the region.", steps: [
      { id: "sg2-regional", type: "policy", t: "Regionalisation: the 'second wing'", date: "1990s", d: "'Singapore Inc.' integrated Singapore-based firms with regional economies to transcend city-state limits.",
        ev: ["Johor-Riau Growth Triangle; Suzhou Industrial Park; 1994 Regional Business Forum (EDB)."], cards: ["ec-sg-regional", "ec-sg-holdings"] },
      { link: "led to", how: "Government-driven integration with regional economies sent Singapore-based investment abroad on a large scale." },
      { id: "sg2-abroad", type: "consequence", sign: "+", t: "Investment abroad soars", date: "1989–93", d: "Direct investment abroad S$8.7bn → S$16.9bn in one year (1989–90), reaching S$28.2bn by 1993.", cards: ["ec-sg-regional"] }
    ] },
    { link: "followed by", how: "By 1997 the restructured economy faced the Asian Financial Crisis.",
      title: "Outcomes", summary: "Resilience in 1997; falling manufacturing share as success.", steps: [
      { row: [
        { id: "sg2-1997", type: "consequence", sign: "+", t: "Weathered 1997 better", date: "1997", d: "MAS's strict regulation meant the financial sector withstood the Asian Financial Crisis far better than regional peers.", cards: ["ec-sg-services", "ec-sg-1997"] },
        { id: "sg2-mfgshare", type: "judgement", t: "Falling manufacturing share ≠ failure", d: "Manufacturing 29.1% (1980) → 27.1% (1990) reflects the deliberate, successful shift to higher-value technology and services.", cards: ["ec-sg-indicators"] }
      ] }
    ] }
  ],
  judge: { prompt: "Which restructuring did most to transform Singapore's economy after 1979? Rank them.",
    factors: ["sg2-sir", "sg2-budget", "sg2-committee", "sg2-cdf", "sg2-regional"],
    notes_view: "The notes call the 1979 Second Industrial Revolution the most successful regional response to the electronics take-off, and read the falling manufacturing share as a deliberate, successful shift to technology and services." },
  historians: [],
  takeaways: [
    "The state deliberately restructured twice: the 1979 Second Industrial Revolution (response to labour shortage) and the 1986 'two engines' shift (after the 1985 recession).",
    "The 1985 recession (high-wage policy, global slowdown, protectionism, low oil prices) demonstrated Singapore's vulnerability to global trends.",
    "Regionalisation (Growth Triangle, Suzhou, S$28.2bn abroad by 1993) was the state's way to transcend city-state limitations."
  ]
});

L.push({
  id: "ec-flow-sg-eval",
  order: 28, level: 3, parent: "ec-country-sg",
  kind: "evaluation",
  title: "Evaluating Singapore: success, Achilles' heels and 1997",
  question: "How successful was Singapore's economic development, and why did it succeed?",
  intro: "Lim Chong Yah's three factors for success, quantitative indicators, the limitations that persisted, and why Singapore weathered 1997 better than its neighbours.",
  clusters: [
    { title: "Why Singapore succeeded", summary: "Lim Chong Yah: free enterprise, outward orientation, able and honest government.", steps: [
      { row: [
        { id: "sgev-free", type: "long_term_cause", t: "Free enterprise", d: "Lim: bred efficiency while neighbours grappled with over-protectionism.", cards: ["ec-sg-lim"] },
        { id: "sgev-outward", type: "long_term_cause", t: "Outward-looking orientation", d: "Lim: a natural extension of Singapore's entrepot trade history.", cards: ["ec-sg-lim"] },
        { id: "sgev-govt", type: "long_term_cause", t: "Able, honest government", d: "Lim: 'the leadership of the state was crucial, critical, and indispensable'.", cards: ["ec-sg-lim"] },
        { id: "sgev-autonomy", type: "context", t: "PAP's autonomy", d: "English-educated nationalists allied with the Chinese-educated working class; relatively free of interest-group and crony pressure.",
          ev: ["Contrast: Philippines (Marcos cronies, e.g. Benedicto, Cuenca) and Indonesia (military cooption limiting state autonomy)."], cards: ["ec-sg-lim"] }
      ], links: [ { from: "sgev-autonomy", to: "sgev-govt", label: "enabled", how: "Freedom from interest-group and crony pressure allowed the PAP to govern ably and honestly." } ] }
    ] },
    { link: "led to", how: "In Lim's account these factors, above all state leadership, made Singapore the region's top performer.",
      title: "Measures of success", summary: "Fastest regional growth and successful restructuring.", steps: [
      { row: [
        { id: "sgev-top", type: "consequence", sign: "+", t: "Region's top performer", date: "1961–2001", d: "Average GDP growth 8.3% (1961–2001): the region's top performer.", cards: ["ec-sg-narrative"] },
        { id: "sgev-indicators", type: "evidence", t: "Quantitative indicators", d: "Industry and manufacturing shares peaked around 1980; export concentration rose and primary exports fell sharply.",
          ev: ["Industry % of GDP: 36.4 (1970), 38.8 (1980), 34.8 (1990). Manufacturing % of GDP: 20.5, 29.1, 27.1.",
               "Three main exports 39.8% (1985) → 50.2% (2000) of total; primary exports 49.8% (1975) → 15.5% (1994) of total."], cards: ["ec-sg-indicators"] }
      ] },
      { link: "supports", how: "Read alongside the shift to technology and services, the falling industry share signals restructuring, not decline." },
      { id: "sgev-reading", type: "judgement", t: "Falling share is not failure", d: "Falling industry share in the 1980s–90s reflects the successful shift to higher-value technology and services, not failure.", cards: ["ec-sg-indicators"] }
    ] },
    { link: "contradicts", how: "Despite this success, limitations persisted: Singapore's Achilles' heels.",
      title: "Achilles' heels", summary: "Inequality, external vulnerability, resource and labour dependence.", steps: [
      { row: [
        { id: "sgev-inequality", type: "consequence", sign: "-", t: "Social inequality", date: "1990", d: "1990 census: 20% of households under $700/month; 50% under $2,100; top 10% $9,700+. Gini coefficient deteriorated over time.", cards: ["ec-sg-limits"] },
        { id: "sgev-external", type: "consequence", sign: "-", t: "External vulnerability", d: "1985 recession; 1997–98 Asian Financial Crisis; 2009 global financial crisis.",
          ev: ["1997–98: Straits Times Index fell 62% (Feb 1997–Sep 1998); GDP growth only 0.3% in 1998, though still relatively strong regionally."], cards: ["ec-sg-limits"] },
        { id: "sgev-resources", type: "consequence", sign: "-", t: "Resource dependence", d: "Imports nearly all essentials, especially food: drives strong emphasis on defence and regional diplomacy.", cards: ["ec-sg-limits"] },
        { id: "sgev-labour", type: "consequence", sign: "-", t: "Labour shortage", d: "Small population and falling birth rate → reliance on politically sensitive immigration; pro-family policies of limited success.", cards: ["ec-sg-limits"] }
      ] }
    ] },
    { link: "followed by", how: "The 1997–98 crisis tested this vulnerability; sound fundamentals explain why Singapore weathered it better than neighbours.",
      title: "Weathering 1997", summary: "Sound fundamentals, not openness, decided the outcome.", steps: [
      { row: [
        { id: "sgev-surplus", type: "long_term_cause", t: "Current account surplus", date: "1997", d: "15.4% surplus in 1997, versus deficits elsewhere.", cards: ["ec-sg-1997"] },
        { id: "sgev-nodebt", type: "long_term_cause", t: "No foreign borrowing", d: "No external debt since 1995; FDI-reliant rather than foreign-loan-reliant.", cards: ["ec-sg-1997"] },
        { id: "sgev-mas", type: "long_term_cause", t: "Strict MAS regulation", d: "6% bank reserve requirement since 1975; 18%/10% liquid asset requirements for banks/finance companies.", cards: ["ec-sg-1997"] }
      ] },
      { link: "led to", how: "Surplus, no external debt and strict regulation let Singapore weather 1997 better, despite its openness." },
      { id: "sgev-conclusion", type: "judgement", t: "Domestic policy matters most", d: "'Economic openness and globalisation are not sufficient factors' to explain a crisis: sound domestic policy is what matters.", cards: ["ec-sg-1997"] }
    ] }
  ],
  judge: { prompt: "Which of Lim Chong Yah's factors best explains Singapore's success? Rank them.",
    factors: ["sgev-free", "sgev-outward", "sgev-govt", "sgev-autonomy"],
    notes_view: "Lim: 'the leadership of the state was crucial, critical, and indispensable'; the notes add that Singapore succeeded through governance quality, not ideology." },
  historians: [ { who: "Lim Chong Yah", view: "Free enterprise, outward orientation and able, honest government; state leadership 'crucial, critical, and indispensable'.", nodes: ["sgev-free", "sgev-outward", "sgev-govt"] } ],
  takeaways: [
    "Lim Chong Yah's three factors (free enterprise, outward orientation, able and honest government) structure a 'why Singapore succeeded' answer.",
    "Success had costs: inequality (rising Gini), external vulnerability (1985, 1997–98), resource and labour dependence.",
    "1997 proves domestic fundamentals matter more than openness: surplus, no external debt, strict MAS rules, unlike Malaysia's stock bubble or Indonesia's foreign loans."
  ]
});

L.push({
  id: "ec-flow-sg-govt",
  order: 29, level: 3, parent: "ec-country-sg",
  kind: "matrix",
  title: "Singapore's state: mechanisms and the nature of intervention",
  question: "How far did the nature, rather than the extent, of state intervention explain Singapore's success?",
  intro: "The machinery of the developmental state (statutory boards, tripartism, state holding companies, cooption) and why its nature, not its extent, set Singapore apart.",
  matrix: {
    cols: ["Singapore", "Indonesia / Philippines"],
    rows: [
      { h: "Purpose of SOEs", cells: ["Stimulate and collaborate with private capital", "State domination over private capital, or crony capture of it"] },
      { h: "Decision criteria", cells: ["Economic efficiency given 'highest priority'", "Political considerations often replaced economic criteria"] },
      { h: "Capital strategy", cells: ["Channelled and directed local capital to productive investment", "Suppressed available capital; relied on foreign loans"] },
      { h: "Interest-group pressure", cells: ["PAP relatively free of interest-group/crony pressure", "Marcos cronies (Philippines); military cooption limiting autonomy (Indonesia)"] },
      { h: "Result in 1997", cells: ["Sound fundamentals: weathered the crisis comparatively well", "Foreign-loan reliance: severe vulnerability exposed"] }
    ]
  },
  clusters: [
    { title: "Planned machinery", summary: "Planning from 1961 grew into boards and tripartite labour institutions.", steps: [
      { id: "sggov-planned", type: "context", t: "Strong state, planned early", date: "1961", d: "EDB and Development Plans built on foreign reports, backed by PAP stability.", cards: ["ec-sg-reports"] },
      { link: "followed by", how: "From this base the state built a dense machinery of statutory boards and tripartite labour institutions." },
      { row: [
        { id: "sggov-boards", type: "policy", t: "About 70 statutory boards", date: "by 1990", d: "EDB (FDI attraction), JTC (1968, industrial land), National Productivity Board (1972), Trade Development Board (1983), Small Enterprise Bureau (1986).",
          ev: ["The Trade Development Board later became IE Singapore → Enterprise Singapore."], cards: ["ec-sg-boards"] },
        { id: "sggov-tripartism", type: "policy", t: "Tripartism", date: "1971", d: "NTUC and National Wages Council (1971): government/NTUC/employers coordination eliminated labour unrest almost entirely; last strike before 2012 was 1986.", cards: ["ec-sg-boards"] }
      ] }
    ] },
    { link: "followed by", how: "The state also owned firms directly and drew business into policy-making.",
      title: "State firms and cooption", summary: "Holding companies, vital-sector SOEs and business partnership.", steps: [
      { row: [
        { id: "sggov-holdings", type: "policy", t: "State holding companies", d: "Temasek Holdings, MND Holdings, Singapore Technologies: by 1990 sole shareholder of 50 companies plus stakes in 566 subsidiaries.", cards: ["ec-sg-holdings"] },
        { id: "sggov-soes", type: "policy", t: "Vital-sector SOEs", d: "Jurong/Keppel Shipyard, Neptune Orient Lines (1969), Singapore Airlines (1972), Singapore Petroleum Company (1969).", cards: ["ec-sg-holdings"] },
        { id: "sggov-cooption", type: "policy", t: "Cooption of private sector", d: "1986 Economic Committee included business; 1994 Regional Business Forum (EDB) coordinated regionalisation with private input.",
          ev: ["Rodan: the 'institutionalisation of interaction between capital and state'."], cards: ["ec-sg-holdings"] }
      ] }
    ] },
    { link: "supports", how: "This machinery was as extensive as elsewhere in SEA, yet it collaborated with private capital rather than dominating it.",
      title: "Nature, not extent", summary: "Comparable extent, different nature: efficient, autonomous, collaborative.", steps: [
      { row: [
        { id: "sggov-extent", type: "judgement", t: "Extent similar, nature different", d: "Intervention was comparable in extent to other SEA states but fundamentally different in nature: see the comparison table.", cards: ["ec-sg-nature"] },
        { id: "sggov-ethnic", type: "context", t: "Ethnic dimension", date: "1980s", d: "Chinese were 70% of population and held 81% of listed capital; PAP relatively free of crony pressure; contrast Malaysia's ethnically targeted NEP.", cards: ["ec-my-chinese", "ec-sg-lim"] }
      ] },
      { link: "led to", how: "Efficient, autonomous, partnership-based intervention, not built around ethnic redistribution or cronies, underpinned Singapore's success." },
      { id: "sggov-verdict", type: "judgement", t: "Better intervention, not less", d: "Lim: state leadership 'crucial, critical, and indispensable'. Success came from efficient, autonomous, partnership-based intervention, not from less intervention.", cards: ["ec-sg-lim", "ec-sg-vs-my"] }
    ] }
  ],
  judge: { prompt: "Which mechanism of the state contributed most to Singapore's success? Rank them.",
    factors: ["sggov-boards", "sggov-tripartism", "sggov-holdings", "sggov-soes", "sggov-cooption"],
    notes_view: "Intervention was universal; the better discriminator is its nature (efficient/technocratic vs corrupt/dogmatic) and direction (market-stimulating vs market-replacing), not whether it occurred." },
  historians: [
    { who: "Rodan", view: "Cooption of business meant the 'institutionalisation of interaction between capital and state'.", nodes: ["sggov-cooption"] },
    { who: "Lim Chong Yah", view: "The leadership of the state was 'crucial, critical, and indispensable'.", nodes: ["sggov-verdict"] }
  ],
  takeaways: [
    "Name the mechanisms: ~70 statutory boards, tripartism (NWC 1971), Temasek and other holding companies, cooption of business (Rodan).",
    "Essay distinction: Singapore's intervention matched others in extent but differed in nature: efficiency-driven, collaborative with capital, free of cronyism.",
    "Contrast with Indonesia/Philippines, whose politicised SOEs and foreign-loan reliance left them exposed in 1997."
  ]
});
})();
