// Flow charts: Malaysia (Part B) and Singapore (Part C) — from SEA_Economic_Change_Study_Notes
(function(){
const F = (window.FLOWS = window.FLOWS || {}); const L = (F.ec = F.ec || []);

/* ───────────── MALAYSIA ───────────── */

L.push({
  id: "ec-flow-my-1", order: 20,
  title: "Malaysia 1957–69: colonial legacy to the May 1969 riots",
  intro: "How a colonial ethnic division of labour and indiscriminate laissez-faire ISI left Malays economically behind, so that Separation and the 1969 riots made restructuring a political necessity.",
  steps: [
    { t: "Core narrative", d: "Laissez-faire ISI (1957–71) → 1969 riots → NEP (1971–90) → Mahathir heavy industry & privatisation (1980s) → deepening & widening (1986–90s). Average GDP growth 6.7% (1961–2001): solid but behind Singapore.", tone: "context", cards: ["ec-my-narrative"] },
    { t: "Colonial ethnic division of labour", d: "Europeans at top; Chinese (tin mining, middlemen) & Indians (rubber tappers, chettiars) in the middle; Malays in traditional agriculture.", tone: "context", cards: ["ec-my-colonial"] },
    { arrow: "reinforced by" },
    { row: [
      { t: "Chinese Protectorate (1877)", d: "Deliberate British administrative policy separating communities.", tone: "cause" },
      { t: "Malay land reservations", d: "Reserved land for padi, keeping Malays in agriculture.", tone: "cause" } ] },
    { t: "'Race became the leitmotiv' (Drabble)", d: "Race became the leitmotiv of Malaysian politics, with direct economic consequences.", tone: "verdict", cards: ["ec-my-colonial"] },
    { t: "Independence 1957: primary dependence", d: "Tin & rubber = 85% of export earnings: heavy dependence on primary products, so diversification was urgently needed.", tone: "bad", cards: ["ec-my-colonial"] },
    { t: "Social Contract (UMNO–MCA)", d: "Post-independence economic management stayed with the Chinese community.", tone: "context" },
    { t: "Pioneer Industries Programme (1958)", d: "Laissez-faire ISI backing processing of tin, rubber, timber + consumables (beverages, vegetable oil, biscuits). Pioneer-status firms 18 → 246 (1959–71). First Malaysia Plan (1966–70).", tone: "policy", cards: ["ec-my-pioneer", "ec-my-govt"] },
    { split: [
      { h: "Early gains", steps: [
        { t: "Consumer goods share up", d: "Consumption goods share of industrial output 21.9% → 31.2% in the same period: positive early results.", tone: "good" } ] },
      { h: "Critical flaw", steps: [
        { t: "Non-discretionary intervention", d: "All firms got incentives indiscriminately: no targeted strategy, reflecting lack of expertise.", tone: "bad" },
        { t: "Stagnation", d: "Domestic market saturated quickly; manufacturing stuck at 9% of GDP in the 1960s.", tone: "bad" } ] } ] },
    { t: "Merger: Malaysia formed (1963)", d: "Malaya + Singapore + Sabah + Sarawak. Rationale: Singapore as export outlet/entrepot; Sabah/Sarawak's natural resources. Brunei opted out over oil revenue-sharing disputes.", tone: "event", cards: ["ec-my-merger"] },
    { t: "Singapore's Separation (1965)", d: "Exposed the racial/economic inequity within Malaysia.", tone: "event", cards: ["ec-my-merger"] },
    { arrow: "contributed to" },
    { t: "13 May 1969 race riots", d: "Turning point: laissez-faire had left ethnic inequity untouched; the state now intervened intensively to restructure wealth.", tone: "bad", cards: ["ec-my-merger"] },
    { arrow: "in response" },
    { t: "New Economic Policy (1971)", d: "See next chart: NEP 1971–90.", tone: "policy", cards: ["nep"] }
  ],
  takeaways: [
    "Colonial policy created an ethnic division of labour; 'race became the leitmotiv' (Drabble), so Malaysian economic policy was always also ethnic policy.",
    "Laissez-faire ISI had early gains (pioneer firms 18 → 246) but was non-discretionary and stagnated at 9% of GDP: evidence of limited state capacity in the 1960s.",
    "Separation (1965) and the 1969 riots are the turning point from laissez-faire to intensive, ethnically targeted intervention."
  ]
});

L.push({
  id: "ec-flow-my-nep", order: 21,
  title: "Malaysia's New Economic Policy, 1971–90",
  intro: "The NEP's rationale, targets and five strategies, including its deliberate contradiction of cutting foreign ownership while courting FDI.",
  steps: [
    { t: "1969 riots expose inequity", d: "Restructuring ethnic wealth becomes the state's priority.", tone: "context", cards: ["nep"] },
    { row: [
      { t: "Ownership 1970", d: "Corporate wealth: 63% foreign, 35% other Malaysians (mostly Chinese), only 2% Malay.", tone: "cause", cards: ["nep"] },
      { t: "Poverty 1970", d: "75% of households below the poverty line were Malay.", tone: "cause", cards: ["nep"] },
      { t: "Chinese dominance", d: "Chinese = 28% of population but 69% of listed-firm capitalisation (1980s): disproportionate, hence political urgency.", tone: "cause", cards: ["ec-my-chinese"] } ] },
    { t: "Primary objective: national unity", d: "Via (i) reducing poverty regardless of race and (ii) eliminating identification of race with economic function.", tone: "policy", cards: ["nep"] },
    { t: "Targets for 1990", d: "Malay share of economy → 30%; foreign share down to 30%; Chinese share allowed to rise slightly to 40%.", tone: "policy", cards: ["nep"] },
    { arrow: "pursued through five strategies" },
    { t: "1. Poverty eradication", d: "State investment in agriculture/rural development for bumiputera: FELDA (1956) land schemes; RISDA financing rubber smallholders.", tone: "policy", cards: ["ec-my-nep-poverty"] },
    { t: "2. Bumiputera corporate equity", d: "Screening, state capital injections, joint ventures: Industrial Coordination Act (1975); PERNAS (1978 trading corp); PNB (1978 equity corp) bought Guthrie Corp (1981), Harrisons & Crossfield (1985).", tone: "policy", cards: ["ec-my-nep-equity"] },
    { t: "3. Education & employment", d: "Preferential access to higher education, scholarships, government jobs: created a new Malay middle class by the late 1970s.", tone: "policy", cards: ["ec-my-nep-poverty"] },
    { t: "4. FDI & manufacturing", d: "Incentives despite nationalist aims: Investment Incentives Act (1968); Free Trade Zone Act (1971, tariff-free for firms exporting ≥80%).", tone: "policy", cards: ["ec-my-nep-fdi"] },
    { t: "5. Economic nationalism", d: "State purchase of foreign assets: Petronas nationalised oil (1974); London Tin → Malaysian Mining Corp.", tone: "policy", cards: ["ec-my-nep-equity"] },
    { t: "The apparent contradiction", d: "NEP aimed to reduce foreign ownership yet actively courted FDI. Deliberate balance: FDI gave capital, expertise and competition bumiputera-focused capital alone could not.", tone: "mixed", cards: ["ec-my-nep-fdi"] },
    { arrow: "by 1990" },
    { split: [
      { h: "Achieved", steps: [
        { t: "Equity & poverty", d: "Bumiputera corporate equity 2.4% → 20.3% (1971–90); poverty 40.3% → 15%; bumiputera employment shifted to secondary/tertiary sectors; new Malay middle class.", tone: "good", cards: ["ec-my-eval-equity"] } ] },
      { h: "Fell short", steps: [
        { t: "Target missed, gains narrow", d: "Below 30% target; rewards concentrated in politically connected bumiputera 'oligopoly' (e.g. North-South Highway → United Engineers/UMNO).", tone: "bad", cards: ["ec-my-eval-equity"] } ] } ] },
    { t: "NEP formally ends 1990", d: "Growth now prioritised over equity (Rasiah): Mahathir would not sacrifice industrialisation to reach 30%.", tone: "verdict", cards: ["ec-my-rasiah"] }
  ],
  takeaways: [
    "The NEP was driven by political necessity (2% Malay ownership, 75% of poor households Malay) as much as economics: equity and national unity were the stated aims.",
    "Mechanisms were state agencies and trusts (FELDA, RISDA, PERNAS, PNB, Petronas), showing intensive intervention in the 1970s.",
    "Partial success: equity 2.4% → 20.3% and poverty 40.3% → 15%, but the 30% target was missed and gains went to a connected elite."
  ]
});

L.push({
  id: "ec-flow-my-mahathir", order: 22,
  title: "Malaysia 1980s–90s: Mahathir, HICOM, privatisation and deepening",
  intro: "State-led heavy industry ran into a debt crisis, forcing privatisation and devaluation; from 1986 the state shifted to technology and human capital, putting growth before equity.",
  steps: [
    { t: "'Look East' policy", d: "Mahathir modelled Malaysia on Japan/South Korea, not the West, admiring their work ethic as the basis of their economic miracles.", tone: "policy", cards: ["ec-my-hicom"] },
    { t: "HICOM (1981)", d: "Heavy Industry Corporation of Malaysia: state-led investment in cars, cement, steel, motorcycles (Kedah Cement, Perwaja Steel, Proton). Aim: build a bumiputera industrial/business class.", tone: "policy", cards: ["ec-my-hicom"] },
    { arrow: "backfired →" },
    { t: "Heavy losses & soaring debt", d: "Inefficient minimum-scale operations + government loan funding. Public enterprises = 64.3% of public-sector deficit (1980–85).", tone: "bad", cards: ["ec-my-privatisation"] },
    { arrow: "forced" },
    { t: "Privatisation (1983)", d: "Methods: sale of SOEs; private financing of state projects; contracting out services; introducing competition into state monopolies.", tone: "policy", cards: ["ec-my-privatisation"] },
    { row: [
      { t: "'Malaysia Incorporated' (1983)", d: "Public & private sectors as partners, not opposites. 13 SOEs privatised by 1992.", tone: "policy", cards: ["ec-my-privatisation"] },
      { t: "Deregulation & devaluation", d: "Reduced financial regulation; ringgit devalued (1985) to boost export competitiveness, as Thailand and Indonesia also did.", tone: "policy", cards: ["ec-my-privatisation", "ec-my-dereg"] } ] },
    { t: "1986 onward: priorities shift", d: "Industrialisation now mattered more than equity; less ethnically targeted, more growth-focused.", tone: "event", cards: ["ec-my-deepening", "ec-my-govt"] },
    { t: "Deepening: technology & human capital", d: "Promotion of Investments Act (1986, R&D incentives); Action Plan for Industrial Technology Development (1990, Vision 2020 target); Multimedia Super Corridor; Human Resource Development Act.", tone: "policy", cards: ["ec-my-deepening"] },
    { t: "Widening: localisation", d: "Malaysian Technology Development Corporation (MTDC, 1993) invested in 8 local tech firms (e.g. Proton, Sapura) by end of year.", tone: "policy", cards: ["ec-my-deepening"] },
    { t: "Results: industrial transformation", d: "Manufacturing = 60% of exports by 1990 (vs 20% a decade earlier); export growth 20% (1990–95); Malaysia became an NIC under Mahathir.", tone: "good", cards: ["ec-my-deepening", "ec-my-eval-growth"] },
    { t: "Rasiah: growth over equity", d: "Mahathir was sad bumiputeras missed 30% equity but 'not prepared to achieve it at the expense of checking the pace of industrialisation'.", tone: "verdict", cards: ["ec-my-rasiah"] }
  ],
  takeaways: [
    "HICOM shows the costs of state-led, bumiputera-focused heavy industry: losses and debt (64.3% of the public-sector deficit) forced a U-turn to privatisation.",
    "Government role shifted from owner (HICOM) to partner ('Malaysia Incorporated') to facilitator of technology and human capital after 1986.",
    "Rasiah: once the NEP ended in 1990, growth was prioritised over equity even though equity goals were unmet."
  ]
});

L.push({
  id: "ec-flow-my-finance", order: 23,
  title: "Malaysia's financial policy and the 1997 crisis",
  intro: "Deregulation, NPL crisis, re-regulation and then forgotten lessons: Malaysia's 1997 vulnerability came from domestic stock and property overheating, not foreign debt or poor governance.",
  steps: [
    { t: "Financial deregulation (mid-1980s)", d: "Attracted FDI and eased credit.", tone: "policy", cards: ["ec-my-dereg"] },
    { arrow: "but weak oversight →" },
    { t: "NPL build-up", d: "Non-performing loans reached ~30% of commercial bank loans by 1987–88.", tone: "bad", cards: ["ec-my-dereg"] },
    { arrow: "in response" },
    { t: "Banking & Financial Institutions Act (1989)", d: "Stringent regulation re-introduced: sound practices/cash reserves required; private foreign borrowing needed Bank Negara approval.", tone: "policy", cards: ["ec-my-dereg"] },
    { t: "Lessons forgotten by 1990s", d: "Easy credit returned → renewed NPL build-up.", tone: "bad", cards: ["ec-my-dereg"] },
    { row: [
      { t: "Property & stock overheating", d: "Property loans = 45–55% of lending; KLSE 3rd largest in Asia-Pacific; market capitalisation = 300% of GDP.", tone: "cause", cards: ["ec-my-afc"] },
      { t: "Bank–finance mergers", d: "E.g. Sime Darby + UMBC → Sime Bank: increased exposure to stock-market risk.", tone: "cause", cards: ["ec-my-afc"] },
      { t: "Current account deficit", d: "Large deficit plus a volatile stock market.", tone: "cause", cards: ["ec-my-afc"] } ] },
    { t: "1997 Asian Financial Crisis", d: "KLSE composite index 1,238 points (Dec 1996) → 594 points (Dec 1997).", tone: "event", cards: ["ec-my-afc"] },
    { split: [
      { h: "Different from Thailand/Indonesia", steps: [
        { t: "Not foreign debt", d: "No massive foreign debt build-up (unlike Indonesia); root cause was domestic property/stock overheating.", tone: "mixed", cards: ["ec-my-afc"] } ] },
      { h: "Less moral hazard", steps: [
        { t: "Relatively robust banks", d: "BNM had forced weak banks to take losses (mid-1980s); annual NPL disclosure; banking 'relatively robust' in 1996.", tone: "good", cards: ["ec-my-afc"] } ] } ] },
    { t: "Verdict", d: "Vulnerability stemmed from the current account deficit + volatile stock market, not poor governance. Transparent, quick to fix NPLs pre-1997, yet still exposed.", tone: "verdict", cards: ["ec-my-eval-growth"] }
  ],
  takeaways: [
    "Malaysia's financial story is cyclical: deregulation → NPLs (~30%) → 1989 re-regulation → easy credit again → 1997.",
    "Distinguish Malaysia's 1997 cause (domestic stock/property bubble, 300% of GDP market cap) from Indonesia's foreign-debt build-up.",
    "Good governance (transparency, BNM discipline) limited moral hazard, so the crisis is a limitation of policy cycles, not of state capacity."
  ]
});

L.push({
  id: "ec-flow-my-eval", order: 24,
  title: "Evaluating Malaysia: successes, limits, state and ethnicity",
  intro: "Malaysia judged against equity, growth, unity and stability; how the state's role changed by period; and why ethnic Chinese dominance shaped everything.",
  steps: [
    { t: "Overall: 6.7% growth (1961–2001)", d: "Solid but behind Singapore (8.3%).", tone: "context", cards: ["ec-my-narrative"] },
    { split: [
      { h: "Successes", steps: [
        { t: "Equity (NEP)", d: "Bumiputera equity 2.4% → 20.3% (1971–90); poverty 40.3% → 15%; shift to secondary/tertiary jobs; new Malay middle class.", tone: "good", cards: ["ec-my-eval-equity"] },
        { t: "Growth & diversification", d: "Industry 24.7% → 41.7% of GDP (1970–90); 3 main exports 54.4% → 44.5% of total; export growth 20% (1990–95); became an NIC.", tone: "good", cards: ["ec-my-eval-growth"] },
        { t: "Financial stability", d: "Relatively transparent, well-regulated banks; quick to address NPL crises pre-1997.", tone: "good", cards: ["ec-my-eval-growth"] } ] },
      { h: "Limitations", steps: [
        { t: "Equity shortfall", d: "Missed 30% target; gains to a connected bumiputera 'oligopoly' (North-South Highway → United Engineers/UMNO).", tone: "bad", cards: ["ec-my-eval-equity"] },
        { t: "Early stagnation", d: "1960s manufacturing stuck at 9% under non-discretionary ISI.", tone: "bad", cards: ["ec-my-pioneer"] },
        { t: "National unity", d: "Affirmative action reinforced ethnicity as basis for privilege, divisive long-term; regional inequality (industrial west coast vs poorer Kedah/Kelantan).", tone: "bad", cards: ["ec-my-eval-growth"] },
        { t: "1997 vulnerability", d: "Domestic stock/property overheating and large current account deficit.", tone: "bad", cards: ["ec-my-afc"] } ] } ] },
    { t: "Role of government by period", d: "How the nature of intervention changed.", tone: "context", cards: ["ec-my-govt"] },
    { row: [
      { t: "1960s", d: "Laissez-faire, no long-term strategy: Pioneer Industries; First Malaysia Plan (1966–70).", tone: "policy", cards: ["ec-my-govt"] },
      { t: "1970s", d: "NEP-driven, intensive: rural development; FELDA, PERNAS, PNB restructure ownership.", tone: "policy", cards: ["ec-my-govt"] } ] },
    { row: [
      { t: "1980s", d: "State-led heavy industry (HICOM) → crisis → deregulation, devaluation, privatisation.", tone: "policy", cards: ["ec-my-govt"] },
      { t: "1986 onward", d: "Plans/institutions for technology & human capital; less ethnically targeted, more growth-focused.", tone: "policy", cards: ["ec-my-govt"] } ] },
    { t: "Role of ethnic communities", d: "Chinese share of listed-firm capitalisation (1980s): Singapore 81% (70% of pop.); Thailand 81% (10%); Indonesia 73% (3.8%); Malaysia 69% (28%); Philippines 50–60% (1.3%).", tone: "context", cards: ["ec-my-chinese"] },
    { t: "Why it mattered for Malaysia", d: "Even with a high Chinese population share, 69% control was very disproportionate, explaining the NEP's political urgency; colonial division of labour was the root.", tone: "cause", cards: ["ec-my-chinese", "ec-my-colonial"] },
    { row: [
      { t: "Drabble", d: "'Race became the leitmotiv' of Malaysian politics, with economic consequences.", tone: "verdict", cards: ["ec-my-colonial"] },
      { t: "Rasiah", d: "Mahathir would not reach 30% equity 'at the expense of checking the pace of industrialisation'.", tone: "verdict", cards: ["ec-my-rasiah"] } ] },
    { t: "Overall judgement", d: "Strong on growth and diversification, partial on equity, weak on unity: ethnic politics shaped both the NEP's ambitions and its limits.", tone: "verdict" }
  ],
  takeaways: [
    "Use the criteria table: growth/diversification clearly succeeded; equity was partial; national unity arguably worsened.",
    "Government role was never constant: laissez-faire → NEP intensive → state heavy industry → privatisation → growth-focused facilitation.",
    "Ethnic community (Chinese dominance, 69% of listed capital) explains why Malaysian intervention was ethnically targeted, unlike Singapore's."
  ]
});

/* ───────────── SINGAPORE ───────────── */

L.push({
  id: "ec-flow-sg-1", order: 25,
  title: "Singapore 1950s–1971: from entrepot to forced EOI",
  intro: "A resource-less entrepot took foreign advice to industrialise, tried ISI under Malaysia, then Separation and British withdrawal forced a decisive turn to export-oriented industrialisation.",
  steps: [
    { t: "Core narrative", d: "Entrepot → brief ISI under Malaysia (1960–65) → forced EOI after 1965 & 1971 → 'Second Industrial Revolution' (1979) → services & regionalisation (1986+). Average growth 8.3% (1961–2001): region's top performer.", tone: "context", cards: ["ec-sg-narrative"] },
    { t: "British entrepot, not industrial centre", d: "1950s growth rate below 2%.", tone: "context", cards: ["ec-sg-context"] },
    { row: [
      { t: "No fallback", d: "No agrarian sector, no natural resources, tiny domestic market, unlike Malaysia, Thailand, Indonesia, Philippines.", tone: "cause", cards: ["ec-sg-context"] },
      { t: "Open from the start", d: "Entrepot trade gave exposure to a wide range of goods: inherently export-oriented, open economy.", tone: "cause", cards: ["ec-sg-context"] },
      { t: "Human capital", d: "1947 workforce: services 30.9%, commerce 23.2%, agriculture only 8.1%.", tone: "cause", cards: ["ec-sg-context"] } ] },
    { t: "Exports as % of GDP", d: "1950–60 vs 1990–2000: Singapore 126.7 → 177.4; Malaysia 53.3 → 94.4; Thailand 19.6 → 45.1; Philippines 12.0 → 39.7; Indonesia 25.0 → 30.8; Myanmar 21.0 → 1.3.", tone: "context", cards: ["ec-sg-exportgdp"] },
    { t: "Foreign advice (1955–61)", d: "Three reports recommend government-led industrialisation.", tone: "cause", cards: ["ec-sg-reports"] },
    { row: [
      { t: "IBRD Report (1955)", d: "Government plays infrastructural role + attracts FDI.", tone: "policy", cards: ["ec-sg-reports"] },
      { t: "Lyle Report (1959)", d: "Led to Pioneer Industries Ordinance & Industrial Expansion Ordinance.", tone: "policy", cards: ["ec-sg-reports"] },
      { t: "Winsemius Report (1961)", d: "Led to first Development Plan (1961–64) and the EDB (Aug 1961).", tone: "policy", cards: ["ec-sg-reports"] } ] },
    { t: "Economic Development Board", d: "'One-stop investment agency': loans, technical advice, industrial estates. Spawned DBS, National Productivity Board, Jurong Town Corporation by 1968.", tone: "policy", cards: ["ec-sg-reports"] },
    { t: "Merger with Malaysia (1963): ISI", d: "Malaysia to be hinterland (resources) + common market (demand). The common market never materialised: a source of tension.", tone: "event", cards: ["ec-sg-crisis"] },
    { arrow: "contributed to" },
    { t: "Separation (1965)", d: "Lost hinterland and common market; Malaysia now an economic competitor.", tone: "bad", cards: ["ec-sg-crisis"] },
    { t: "British military withdrawal", d: "Announced July 1967, completed Dec 1971: loss of 40,000 jobs = 10% of national income.", tone: "bad", cards: ["ec-sg-crisis"] },
    { arrow: "forced" },
    { split: [
      { h: "Short term", steps: [
        { t: "Continued ISI", d: "To absorb excess labour (e.g. textiles).", tone: "mixed", cards: ["ec-sg-crisis"] } ] },
      { h: "Decisive pivot", steps: [
        { t: "EOI under Goh Keng Swee", d: "Leveraging human capital, location and port status.", tone: "policy", cards: ["ec-sg-crisis"] } ] } ] },
    { t: "See next chart: the EOI levers", d: "Export incentives, manpower training, FDI policy, political stability.", tone: "context", cards: ["ec-sg-levers"] }
  ],
  takeaways: [
    "Singapore's starting conditions (no resources, entrepot openness, service-skilled workforce) made EOI both necessary and feasible.",
    "Foreign reports (IBRD, Lyle, Winsemius) and the EDB show the state's role was planned from the start.",
    "Separation (1965) and British withdrawal (10% of national income) were external shocks that forced the turn to EOI: crisis as catalyst."
  ]
});

L.push({
  id: "ec-flow-sg-eoi", order: 26,
  title: "Singapore 1965–79: the levers of export-oriented industrialisation",
  intro: "How the state used incentives, training, FDI policy and political stability to make MNC-led export manufacturing work, and the results by 1980.",
  steps: [
    { t: "Pivot to EOI (late 1960s)", d: "Under Goh Keng Swee, after Separation and British withdrawal.", tone: "context", cards: ["ec-sg-crisis"] },
    { t: "Lever 1: Export incentives", d: "Concessionary tax rates; lower MAS interest rates for export financing; Export Credit Insurance Scheme (1976); Small Industries Finance Scheme (1976).", tone: "policy", cards: ["ec-sg-levers"] },
    { t: "Lever 2: Manpower training", d: "Industrial training centres; 1968 education restructuring (technical/vocational): Ngee Ann College, Singapore Polytechnic reorganised 1968–69. Technical/vocational enrolment rose 8× (1966–76).", tone: "policy", cards: ["ec-sg-levers"] },
    { t: "Lever 3: Foreign investment policy", d: "Pioneer-status tax exemptions; free profit repatriation; simplified immigration for skilled/capital holders.", tone: "policy", cards: ["ec-sg-fdi"] },
    { t: "1978: 100% foreign ownership", d: "Allowed in full: a 'major turning point'.", tone: "event", cards: ["ec-sg-fdi"] },
    { t: "Lever 4: Stability & infrastructure", d: "PAP political stability: lost man-days 129,893 (1960) → 1,001 (1977), a 99% decline. Strong transport/communication legacy from entrepot history.", tone: "policy", cards: ["ec-sg-fdi"] },
    { row: [
      { t: "Tripartism", d: "NTUC + National Wages Council (1971) coordinate government, unions, employers.", tone: "policy", cards: ["ec-sg-boards"] },
      { t: "Statutory boards", d: "National Productivity Board (1972); JTC (1968, industrial land).", tone: "policy", cards: ["ec-sg-boards"] },
      { t: "State enterprises", d: "Neptune Orient Lines (1969), Singapore Petroleum Company (1969), Singapore Airlines (1972), Jurong/Keppel Shipyard.", tone: "policy", cards: ["ec-sg-holdings"] } ] },
    { arrow: "results" },
    { t: "MNC-led exports", d: "Foreign-affiliated firms = 71% of exports by 1976 (mainly US, UK, Japan).", tone: "good", cards: ["ec-sg-fdi"] },
    { t: "Manufacturing surge", d: "Manufacturing share of GDP 13.2% (1960) → 29.1% (1980): highest in the region.", tone: "good", cards: ["ec-sg-fdi", "ec-sg-indicators"] },
    { t: "But: labour shortage by late 1970s", d: "Low-value, labour-intensive model reaching its limit → Second Industrial Revolution (next chart).", tone: "mixed", cards: ["ec-sg-sir"] }
  ],
  takeaways: [
    "EOI succeeded because the state combined incentives, training and FDI-friendly policy with labour peace (lost man-days down 99%).",
    "Reliance on MNCs (71% of exports by 1976) is both the engine of growth and a source of external vulnerability.",
    "Allowing 100% foreign ownership (1978) is the turning point to cite on Singapore's openness to FDI."
  ]
});

L.push({
  id: "ec-flow-sg-2", order: 27,
  title: "Singapore 1979–1990s: technology, services and regionalisation",
  intro: "Labour shortage drove a shift up the value chain; the 1985 recession exposed vulnerability and prompted the 'two engines' of manufacturing and services, then regionalisation.",
  steps: [
    { t: "Labour shortage (late 1970s)", d: "Low-value, labour-intensive industry no longer viable.", tone: "cause", cards: ["ec-sg-sir"] },
    { arrow: "led to" },
    { t: "'Second Industrial Revolution' (1979–81)", d: "Deliberate shift to technological sophistication: R&D, engineering design, computer software.", tone: "policy", cards: ["ec-sg-sir"] },
    { t: "Goh Chok Tong's 1981 Budget", d: "10-year Economic Development Plan for the Eighties: integrated circuits, computers, aircraft components, X-ray machines; more skilled labour; less exposed to tariffs than textiles.", tone: "policy", cards: ["ec-sg-sir"] },
    { row: [
      { t: "STC (1983)", d: "Singapore Technologies Corporation.", tone: "policy", cards: ["ec-sg-sir"] },
      { t: "GIC", d: "Government of Singapore Investment Corporation: invests in overseas high-tech MNCs.", tone: "policy", cards: ["ec-sg-sir"] },
      { t: "Trade Development Board (1983)", d: "Later IE Singapore → Enterprise Singapore.", tone: "policy", cards: ["ec-sg-boards"] } ] },
    { t: "Value-added per worker nearly doubled", d: "1979–84.", tone: "good", cards: ["ec-sg-sir"] },
    { row: [
      { t: "High-wage policy", d: "To attract skilled labour; with tight labour market, reduced investment attractiveness.", tone: "cause", cards: ["ec-sg-recession"] },
      { t: "Global slowdown", d: "Plus developed-world protectionism.", tone: "cause", cards: ["ec-sg-recession"] },
      { t: "Low oil prices", d: "Hurt shipbuilding/ship-repair (¼ of manufacturing).", tone: "cause", cards: ["ec-sg-recession"] } ] },
    { t: "1985 recession", d: "Part of 1981–86 difficulties: demonstrated Singapore's vulnerability to global trends.", tone: "bad", cards: ["ec-sg-recession"] },
    { arrow: "in response" },
    { t: "1986 Economic Committee", d: "Chaired by Lee Hsien Loong, included business representatives: TWO engines of growth, manufacturing AND services; Singapore as a 'total business centre' ('clusters' concept).", tone: "policy", cards: ["ec-sg-services", "ec-sg-holdings"] },
    { row: [
      { t: "Small Enterprise Bureau (1986)", d: "New statutory board, same year as the Economic Committee.", tone: "policy", cards: ["ec-sg-boards"] },
      { t: "Cluster Development Fund (1995)", d: "S$1 billion for strategic investments.", tone: "policy", cards: ["ec-sg-services"] } ] },
    { t: "Services grow", d: "Services share of GDP 16% (1965) → 24% (1985) → 28% (2010). Over 60 major TNCs made Singapore their Asia-Pacific HQ since 1986.", tone: "good", cards: ["ec-sg-services", "ec-sg-regional"] },
    { t: "1990s Regionalisation: 'second wing'", d: "'Singapore Inc.' integrated local firms with regional economies to transcend city-state limits: Johor-Riau Growth Triangle; Suzhou Industrial Park; 1994 Regional Business Forum (EDB).", tone: "policy", cards: ["ec-sg-regional", "ec-sg-holdings"] },
    { t: "Investment abroad soars", d: "Direct investment abroad S$8.7bn → S$16.9bn in one year (1989–90), S$28.2bn by 1993.", tone: "good", cards: ["ec-sg-regional"] },
    { t: "1997: weathered better", d: "MAS's strict regulation meant the financial sector withstood the Asian Financial Crisis far better than regional peers (see evaluation chart).", tone: "good", cards: ["ec-sg-services", "ec-sg-1997"] },
    { t: "Falling manufacturing share ≠ failure", d: "Manufacturing 29.1% (1980) → 27.1% (1990) reflects the deliberate, successful shift to higher-value technology and services.", tone: "verdict", cards: ["ec-sg-indicators"] }
  ],
  takeaways: [
    "Singapore's state repeatedly restructured pre-emptively (1979 SIR) and reactively (1986 after the recession): adaptability is the key strength.",
    "The 1985 recession shows the limits of state planning: high-wage policy plus global protectionism exposed external vulnerability.",
    "Regionalisation (Growth Triangle, Suzhou, S$28.2bn abroad by 1993) was the answer to city-state limits on land and labour."
  ]
});

L.push({
  id: "ec-flow-sg-eval", order: 28,
  title: "Evaluating Singapore: success, Achilles' heels and 1997",
  intro: "Quantitative indicators, Lim Chong Yah's three factors for success, the limitations that persisted, and why Singapore weathered 1997 better than its neighbours.",
  steps: [
    { t: "Region's top performer", d: "Average GDP growth 8.3% (1961–2001), consistently the regional leader.", tone: "good", cards: ["ec-sg-narrative"] },
    { t: "Quantitative indicators", d: "Industry % GDP 36.4 (1970), 38.8 (1980), 34.8 (1990); manufacturing 20.5, 29.1, 27.1; 3 main exports 39.8% (1985) → 50.2% (2000); primary exports 49.8% (1975) → 15.5% (1994).", tone: "context", cards: ["ec-sg-indicators"] },
    { t: "Reading the figures", d: "Falling industry share in the 1980s–90s reflects the successful shift to higher-value technology and services, not failure.", tone: "verdict", cards: ["ec-sg-indicators"] },
    { t: "Lim Chong Yah's three factors", d: "Why Singapore succeeded.", tone: "verdict", cards: ["ec-sg-lim"] },
    { row: [
      { t: "1. Free enterprise", d: "Bred efficiency while neighbours grappled with over-protectionism.", tone: "good", cards: ["ec-sg-lim"] },
      { t: "2. Outward-looking", d: "Natural extension of entrepot trade history.", tone: "good", cards: ["ec-sg-lim"] },
      { t: "3. Able, honest government", d: "'The leadership of the state was crucial, critical, and indispensable' (Lim).", tone: "good", cards: ["ec-sg-lim"] } ] },
    { t: "PAP's autonomy", d: "English-educated nationalists allied with Chinese-educated working class; relatively free of interest-group/crony pressure, unlike Philippines (Marcos cronies Benedicto, Cuenca) and Indonesia (military cooption).", tone: "verdict", cards: ["ec-sg-lim"] },
    { t: "Achilles' heels", d: "Limitations despite success.", tone: "mixed", cards: ["ec-sg-limits"] },
    { row: [
      { t: "Social inequality", d: "1990 census: 20% of households <$700/month; 50% <$2,100; top 10% $9,700+. Gini coefficient deteriorated over time.", tone: "bad", cards: ["ec-sg-limits"] },
      { t: "External vulnerability", d: "1985 recession; 1997–98 crisis (Straits Times Index −62%, Feb'97–Sep'98; 1998 growth 0.3%, still relatively strong); 2009 global crisis.", tone: "bad", cards: ["ec-sg-limits"] } ] },
    { row: [
      { t: "Resource dependence", d: "Imports nearly all essentials, especially food: drives emphasis on defence/regional diplomacy.", tone: "bad", cards: ["ec-sg-limits"] },
      { t: "Labour shortage", d: "Small population + falling birth rate → politically sensitive immigration; pro-family policies of limited success.", tone: "bad", cards: ["ec-sg-limits"] } ] },
    { t: "Why Singapore weathered 1997 better", d: "Sound fundamentals.", tone: "context", cards: ["ec-sg-1997"] },
    { row: [
      { t: "Current account", d: "15.4% surplus in 1997, vs deficits elsewhere.", tone: "good", cards: ["ec-sg-1997"] },
      { t: "No foreign borrowing", d: "No external debt since 1995; FDI-reliant, not foreign-loan-reliant.", tone: "good", cards: ["ec-sg-1997"] },
      { t: "Strict MAS regulation", d: "6% bank reserve requirement since 1975; 18%/10% liquid asset requirements for banks/finance companies.", tone: "good", cards: ["ec-sg-1997"] } ] },
    { t: "Conclusion on 1997", d: "'Economic openness and globalisation are not sufficient factors' to explain a crisis: sound domestic policy is what matters.", tone: "verdict", cards: ["ec-sg-1997"] }
  ],
  takeaways: [
    "Lim Chong Yah's three factors (free enterprise, outward orientation, able and honest government) structure a 'why Singapore succeeded' answer.",
    "Success had costs: inequality (rising Gini), external vulnerability (1985, 1997–98), resource and labour dependence.",
    "1997 proves domestic fundamentals matter more than openness: surplus, no external debt, strict MAS rules, unlike Malaysia's stock bubble or Indonesia's foreign loans."
  ]
});

L.push({
  id: "ec-flow-sg-govt", order: 29,
  title: "Singapore's state: mechanisms and the nature of intervention",
  intro: "The machinery of the developmental state (statutory boards, tripartism, state holding companies, cooption) and why its nature, not its extent, set Singapore apart.",
  steps: [
    { t: "Strong state, planned from 1961", d: "EDB and Development Plans built on foreign reports; PAP stability.", tone: "context", cards: ["ec-sg-reports"] },
    { t: "Statutory boards (~70 by 1990)", d: "EDB (FDI attraction), JTC (1968, industrial land), National Productivity Board (1972), Trade Development Board (1983, later IE Singapore → Enterprise Singapore), Small Enterprise Bureau (1986).", tone: "policy", cards: ["ec-sg-boards"] },
    { t: "Trade unions & tripartism", d: "NTUC + National Wages Council (1971): government/NTUC/employers coordination eliminated labour unrest almost entirely; last strike before 2012 was in 1986.", tone: "policy", cards: ["ec-sg-boards"] },
    { t: "State-owned holding companies", d: "Temasek Holdings, MND Holdings, Singapore Technologies: by 1990 sole shareholder of 50 companies + stakes in 566 subsidiaries.", tone: "policy", cards: ["ec-sg-holdings"] },
    { t: "Vital-sector SOEs", d: "Jurong/Keppel Shipyard, Neptune Orient Lines (1969), Singapore Airlines (1972), Singapore Petroleum Company (1969).", tone: "policy", cards: ["ec-sg-holdings"] },
    { t: "Cooption of private sector", d: "1986 Economic Committee included business; 1994 Regional Business Forum (EDB) coordinated regionalisation: 'institutionalisation of interaction between capital and state' (Rodan).", tone: "policy", cards: ["ec-sg-holdings"] },
    { arrow: "so the key distinction is" },
    { t: "Extent similar, nature different", d: "Singapore's intervention was comparable in extent to other SEA states but fundamentally different in nature.", tone: "verdict", cards: ["ec-sg-nature"] },
    { split: [
      { h: "Singapore", steps: [
        { t: "SOE purpose", d: "Stimulate & collaborate with private capital.", tone: "good", cards: ["ec-sg-nature"] },
        { t: "Decisions", d: "Economic efficiency given 'highest priority'.", tone: "good", cards: ["ec-sg-nature"] },
        { t: "Capital", d: "Channelled and directed local capital to productive investment.", tone: "good", cards: ["ec-sg-nature"] } ] },
      { h: "Indonesia / Philippines", steps: [
        { t: "SOE purpose", d: "State domination OVER private capital, or crony capture of it.", tone: "bad", cards: ["ec-sg-nature"] },
        { t: "Decisions", d: "Political considerations often replaced economic criteria.", tone: "bad", cards: ["ec-sg-nature"] },
        { t: "Capital", d: "Suppressed available capital; relied on foreign loans → severe vulnerability exposed in 1997.", tone: "bad", cards: ["ec-sg-nature"] } ] } ] },
    { t: "Ethnic dimension", d: "Chinese = 70% of population and 81% of listed capital (1980s); PAP relatively free of interest-group/crony pressure. Contrast Malaysia's ethnically targeted NEP.", tone: "context", cards: ["ec-my-chinese", "ec-sg-lim"] },
    { t: "Verdict", d: "Lim: state leadership 'crucial, critical, and indispensable'. Success came from efficient, autonomous, partnership-based intervention, not from less intervention.", tone: "verdict", cards: ["ec-sg-lim", "ec-sg-vs-my"] }
  ],
  takeaways: [
    "Name the mechanisms: ~70 statutory boards, tripartism (NWC 1971), Temasek and other holding companies, cooption of business (Rodan).",
    "Essay distinction: Singapore's intervention matched others in extent but differed in nature: efficiency-driven, collaborative with capital, free of cronyism.",
    "Contrast with Indonesia/Philippines, whose politicised SOEs and foreign-loan reliance left them exposed in 1997."
  ]
});

})();
