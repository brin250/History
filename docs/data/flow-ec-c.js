// Flow charts: Burma (Part D) and Vietnam (Part E) — from SEA_Economic_Change_Study_Notes
(function(){
const F = (window.FLOWS = window.FLOWS || {}); const L = (F.ec = F.ec || []);

/* ───────────── BURMA ───────────── */

L.push({
  id: "ec-flow-burma-1", order: 40,
  title: "Burma 1948–1962: colonial legacy to Pyidawtha's failure",
  intro: "Burma started richer in resources than its neighbours, yet U Nu's Third Way welfare plan failed by 1956. The roots of later state domination (state boards, the military's DSI) were laid here.",
  steps: [
    { t: "The central paradox", d: "At independence: abundant resources, high literacy, no population pressure, favourable land-man ratio — arguably BETTER endowed than neighbours. Yet lowest GDP growth and most closed economy in SEA.", tone: "context", cards: ["ec-bm-paradox"] },
    { t: "Colonial primary-export economy", d: "Rice, lumber, oil; exports reached US$173m (1939–40). Industry near non-existent. Chettiar (Indian) moneylenders foreclosed on indebted peasants → tenant farming on land peasants once owned.", tone: "context", cards: ["ec-bm-colonial"] },
    { t: "Saya San Rebellion (1930–31)", d: "Resentment of Chettiars and colonial economy → violence, crushed only by massed British/Indian troops. This resentment shaped post-independence policy toward the Indian minority.", tone: "event", cards: ["ec-bm-colonial"] },
    { arrow: "after independence (1948), U Nu's Third Way" },
    { t: "Pyidawtha Plan (Aug 1952)", d: "'Land of happiness': Buddhist-principled welfare — education, public health, subsidised housing, irrigation, debt relief. Economic Planning Board (1947); agro-based industry, rural emphasis on rice/teak comparative advantage.", tone: "policy", cards: ["ec-bm-pyidawtha"] },
    { t: "Land reform target", d: "Reallocate 10 million acres of land by 1955.", tone: "policy", cards: ["ec-bm-pyidawtha"] },
    { t: "Defense Services Institute (1951)", d: "Military-linked SOE with interest-free capital, tax-exempt — precursor to total military-economic dominance under Ne Win.", tone: "mixed", cards: ["ec-bm-pyidawtha-fail"] },
    { arrow: "but by 1956 the Plan had failed, because" },
    { t: "State monopolies killed incentives", d: "State Agricultural Marketing Board (SAMB) bought rice below global price → no incentive to raise productivity. State Teak Board underperformed non-state teak.", tone: "cause", cards: ["ec-bm-pyidawtha-fail"] },
    { row: [
      { t: "Rice price slump", d: "Global rice price fell 25% (1955–56).", tone: "cause" },
      { t: "Lack of funds", d: "War damage plus costs of fighting insurgency.", tone: "cause" },
      { t: "Indian emigration", d: "Mass exodus removed technical personnel.", tone: "cause" }
    ] },
    { t: "Poor land reform implementation", d: "Officials lacked even up-to-date maps. Only 1.4 million acres redistributed by 1958 (vs 10m target), often unproductive plots.", tone: "bad", cards: ["ec-bm-pyidawtha-fail"] },
    { t: "Result: barely back to pre-war", d: "GDP only reached pre-war levels by 1958–59; rice production/exports still below 1938–39 levels by 1960.", tone: "bad", cards: ["ec-bm-pyidawtha-fail"] },
    { t: "1958 Ne Win caretaker government", d: "First major state enterprises in infrastructure and key commodities — a step toward fuller intervention.", tone: "event", cards: ["ec-bm-govt"] },
    { t: "Verdict on 1948–62", d: "Modest state role (Pyidawtha, DSI, limited monopolies), but even limited monopolies hurt incentives; failure set the stage for Ne Win's 1962 coup and extreme socialism.", tone: "verdict" }
  ],
  takeaways: [
    "Resource endowment is not destiny: Burma's later collapse came from policy choices, not poor starting conditions.",
    "Even U Nu's modest state monopolies (SAMB) destroyed producer incentives — an early warning of what full nationalisation would do.",
    "External shocks (rice slump, insurgency) compounded weak administration (no maps, 1.4m of 10m acres)."
  ]
});

L.push({
  id: "ec-flow-burma-2", order: 41,
  title: "Burmese Way to Socialism 1962–71: state takeover and decline",
  intro: "Ne Win's 1962 programme nationalised almost everything, crushed private enterprise and agriculture, and shut Burma off from trade. Output and exports collapsed while neighbours boomed.",
  steps: [
    { t: "Burmese Way to Socialism (30 Apr 1962)", d: "Exploitative capitalism replaced by state-directed social justice; inward-looking, import-substitution focus.", tone: "policy", cards: ["burmeseway"] },
    { t: "Rapid nationalisation, 1963", d: "All banks (23 Feb 1963); Burma Oil Company (Jan 1963); all major industries by June; consumer industries (Aug); People's Stores Corporation (Sept) — import/distribution monopoly.", tone: "policy", cards: ["burmeseway"] },
    { t: "State domination by end-1965", d: "State controlled 60% of manufacturing and 90% of legal trade.", tone: "event", cards: ["burmeseway"] },
    { t: "Heavy industry over agriculture", d: "1962–73: state investment in agriculture fell 5% while manufacturing investment rose 25% — paralleling Vietnam's similar early mistake.", tone: "policy", cards: ["burmeseway"] },
    { split: [
      { h: "Agricultural stagnation", steps: [
        { t: "Tenancy Law 1963", d: "Agrarian Committees: compulsory quotas, fixed state prices, land lost for non-compliance. State dictated crops — forced cotton in Mandalay/Sagaing, banning rice/groundnuts/onions.", tone: "policy", cards: ["ec-bm-agri"] },
        { t: "Technology without results", d: "Fertiliser use ↑6×, HYV seeds from 1971, but paddy yield flat at ~31 baskets/acre (1962–73) — disincentives from land policy, not lack of technology.", tone: "bad", cards: ["ec-bm-agri"] },
        { t: "Rice export collapse", d: "1,521,000 tons (1962/63) → 204,000 tons (1972/73). Share of total exports 42.2% (1962) → 14.9% (1972): struggling to feed itself.", tone: "bad", cards: ["ec-bm-rice"] }
      ] },
      { h: "Private sector suffocated", steps: [
        { t: "Private trade wiped out", d: "All private banks/trading firms nationalised; private rice trade banned (1963); ~1,000 firms closed, ~2 million unemployed.", tone: "bad", cards: ["ec-bm-private"] },
        { t: "Confiscations", d: "814 private schools, 17 printing firms, 9 mission hospitals, 132 factories, 182 cinemas, 24 shipping companies, mines.", tone: "policy", cards: ["ec-bm-private"] },
        { t: "1965 Law to Invest Powers…", d: "Law to Invest Powers to Construct the Socialist Economy legalised total state control — beyond Indonesia's Article 33, which reserved only STRATEGIC industries.", tone: "policy", cards: ["ec-bm-private"] }
      ] }
    ] },
    { t: "Minorities driven out", d: "Restrictive laws squeezed out the Chinese; most remaining Indians forcibly repatriated by mid-1960s, taking capital and expertise with them.", tone: "bad", cards: ["ec-bm-minorities"] },
    { t: "Deliberate insularity (1964)", d: "Visas restricted to 24-hour visits, confined to Rangoon.", tone: "policy", cards: ["ec-bm-private"] },
    { arrow: "consequences" },
    { t: "Trade collapse", d: "Overseas trade fell to 37% of its 1961–62 level by 1971–72 — while Thailand/Malaysia were ramping UP exports.", tone: "bad", cards: ["ec-bm-private"] },
    { t: "Foreign exchange crisis", d: "Trade surplus 228.2m kyat (1962) → deficit 235.4m kyat (1972); forex reserves 8.19m kyat (1965) → 3.461m kyat (1972).", tone: "bad", cards: ["ec-bm-rice"] },
    { t: "Hmaung-kho black market", d: "'Taking refuge in the dark' filled the gap: by early 1980s, an estimated 70–80% of goods in Yangon/Mandalay markets were illegal/smuggled.", tone: "bad", cards: ["ec-bm-blackmarket"] },
    { t: "Verdict", d: "\"Excessive intervention... suffocated private enterprise and failed to build a base for long-term industrialisation.\" Poor expertise compounded poor ideology (mismanaged agricultural technology).", tone: "verdict", cards: ["ec-bm-govt"] }
  ],
  takeaways: [
    "Extreme economic nationalism (expelling Indians/Chinese, nationalising everything) bought indigenisation at the cost of capital, expertise and trade.",
    "Agricultural failure was about incentives (quotas, fixed prices, forced crops), not technology — fertiliser ↑6× but yields flat.",
    "Heavy industry in an agrarian economy without an industrial base → forex shortage → industrialisation stalled anyway."
  ]
});

L.push({
  id: "ec-flow-burma-3", order: 42,
  title: "Burma 1971–1988: Four-Year Plans to the 8888 Uprising",
  intro: "Ne Win admitted the crisis and tried partial reforms, but recovery was shallow. Debt, money-printing and the 1985/1987 demonetisations wiped out savings and brought down the regime.",
  steps: [
    { t: "Crisis recognised (early 1970s)", d: "First BSPP Congress (1971): agriculture re-prioritised; profit motive reintroduced (performance bonuses); foreign aid actively sought.", tone: "context", cards: ["ec-bm-fouryear"] },
    { t: "1st Four-Year Plan (1971–74)", d: "Improved fertiliser supply; revised marketing restoring producer incentives. GDP growth only 2.2% (1971–72) and 2.2% (1972–73).", tone: "mixed", cards: ["ec-bm-fouryear"] },
    { t: "2nd Four-Year Plan (1974)", d: "Higher paddy procurement prices; 'Whole Township Special Paddy Production Programme'; private/foreign investment incentives. Beat 4.5% target: 5.9% (1976–77), 6.4% (1977–78).", tone: "good", cards: ["ec-bm-fouryear"] },
    { t: "Foreign aid poured in", d: "Annual loans rose US$65.5m (1974–77) → US$348.5m (1978–86); Japan main donor, via World Bank's Burma Aid Consultative Group. Burma still lagged far behind peers.", tone: "mixed", cards: ["ec-bm-govt"] },
    { arrow: "BUT recovery was shallow" },
    { t: "Food and oil importer", d: "By mid-1980s farm output lagged population; once the world's largest crude exporter and 'granary of the East', Burma became a net importer of oil and rice.", tone: "bad", cards: ["ec-bm-shallow"] },
    { t: "State still dominant", d: "Only 13 of ~40,000 private establishments employed >50 workers.", tone: "bad", cards: ["ec-bm-shallow"] },
    { t: "Debt and inflation", d: "Trade deficits + heavy external debt from 1970s loans; government printed money to cover budget shortfalls → inflation.", tone: "bad", cards: ["ec-bm-shallow"] },
    { arrow: "the final straw" },
    { t: "1985 demonetisation", d: "20/50/100-kyat notes voided; ≤5,000 kyat exchangeable, larger sums needed proof of legal earnings or faced confiscation. Aimed at black marketeers, but evaded by splitting cash among relatives.", tone: "event", cards: ["demonetisation"] },
    { t: "Sept 1987 demonetisation", d: "25/35/75-kyat notes voided with NO exchange at all. Only 45/90-kyat notes (multiples of Ne Win's 'lucky' 9, reportedly per his astrologer) stayed legal.", tone: "event", cards: ["demonetisation"] },
    { t: "Life savings wiped out", d: "Ordinary law-abiding Burmese lost their savings permanently → rising dissent (late 1987).", tone: "bad", cards: ["demonetisation"] },
    { t: "8888 Uprising (Aug 1988)", d: "Pro-democracy demands (1988) → 8888 Uprising → Ne Win's fall → replaced by SLORC (Sept 1988).", tone: "event", cards: ["demonetisation"] },
    { t: "Verdict", d: "Partial reforms raised growth briefly but never touched state domination; reliance on loans and the printing press ended in economic and political collapse.", tone: "verdict" }
  ],
  takeaways: [
    "Burma shows an autarkic regime forced out by internal collapse, unlike Vietnam's planned pivot (Doi Moi).",
    "Foreign aid without structural reform (US$348.5m/yr loans) did not close the gap with neighbours.",
    "Economic mismanagement (demonetisation) had direct political consequences: 8888 and Ne Win's fall."
  ]
});

L.push({
  id: "ec-flow-burma-4", order: 43,
  title: "Burma after 1988: SLORC's contradictory market opening",
  intro: "SLORC announced a market economy but kept the state and army in control of almost everything Burma produced. Sanctions, army ownership and unsustainable rice gains meant little real change.",
  steps: [
    { t: "Static structure by 1990", d: "Agriculture still 57.3% of GDP (highest in region); industry 10.5%, manufacturing 7.8% — despite decades of supposed industrial emphasis.", tone: "context", cards: ["ec-bm-static"] },
    { t: "Undiversified manufacturing", d: "Food & beverages' share of manufacturing ROSE 69.8% → 76.8% (1975/76–1988/89); clothing FELL 7.8% → 3.6%.", tone: "bad", cards: ["ec-bm-static"] },
    { arrow: "SLORC reforms from Sept 1988" },
    { t: "Foreign Investment Law (Nov 1988)", d: "Wholly foreign-owned firms/JVs (min. 35% foreign stake); guarantees against nationalisation; profit repatriation; tax breaks; some monopolies abolished; lower taxes.", tone: "policy", cards: ["ec-bm-fil"] },
    { t: "Opening outward", d: "Borders opened to Thailand/China trade; oil exploration deals with Korea, Japan, Australia, US.", tone: "policy", cards: ["ec-bm-fil"] },
    { arrow: "but" },
    { t: "Core contradiction (Tucker)", d: "SLORC proclaimed a \"market-oriented economic system\" AND that \"the initiative... must be kept in the hands of the state\". State monopolies on teak, gems, ore, banking, broadcasting continued.", tone: "mixed", cards: ["ec-bm-tucker"] },
    { t: "Dec 1990 'open-door' policy", d: "Simultaneously banned export of 28 goods by 1994 (teak, rice, oil, gems...). Tucker: \"lifted restrictions on everything except most things Burma produced and traded.\"", tone: "bad", cards: ["ec-bm-tucker"] },
    { row: [
      { t: "Joined ASEAN 1997", d: "Interest from 1995; no return to Ne Win-style total isolation.", tone: "good", cards: ["ec-bm-asean"] },
      { t: "Trade up, imports too", d: "Trade volume ↑6.8× (1985–2003) but imports ↑5.5×, largely offsetting gains.", tone: "mixed", cards: ["ec-bm-asean"] }
    ] },
    { t: "International pariah", d: "Brutal suppression of pro-democracy movement → Western sanctions; Coca-Cola, Apple and other MNCs forced out. 1988 coup triggered suspension of all foreign aid.", tone: "bad", cards: ["ec-bm-asean", "ec-bm-limits"] },
    { t: "Army ownership (end-1997)", d: "Only 5% of large firms privately owned; NO large SOE privatised. Main industries, finance, most trade under army control — \"the higher the rank, the greater the benefit\" (Tucker).", tone: "bad", cards: ["fivepercent"] },
    { t: "Rice boom and bust", d: "Production 13m → 19.5m tons (1988–95); exports 1m tons (1994), then crashed to 353,000 tons (1995). Multi-cropping exhausted soil; gains partly from cutting domestic consumption.", tone: "mixed", cards: ["ec-bm-rice90s"] },
    { t: "Tourism push failed", d: "'Visit Myanmar Year' 1996: poor human rights record deterred visitors; hotels stayed empty.", tone: "bad", cards: ["ec-bm-rice90s"] },
    { t: "Verdict", d: "Liberalisation hampered by SLORC/SPDC brutality and sanctions; ASEAN more forgiving. Real improvement only under semi-democratic government post-2010 (beyond the 2000 syllabus cut-off).", tone: "verdict", cards: ["ec-bm-govt"] }
  ],
  takeaways: [
    "Tucker: SLORC's opening was largely cosmetic — the state and army kept the commanding heights and key exports.",
    "Political repression had economic costs: sanctions, aid suspension, MNC exits, failed tourism.",
    "Contrast Vietnam, where sustained Doi Moi commitment helped end the US embargo (1994)."
  ]
});

L.push({
  id: "ec-flow-burma-eval", order: 44,
  title: "Evaluating Burma: why the region's worst performer?",
  intro: "Burma's numbers are the worst in SEA despite the best start. Policy — extreme nationalisation and isolation — not endowment explains the divergence.",
  steps: [
    { t: "Quantitative snapshot", d: "GDP growth 1961–2001: 4.3%, lowest in SEA except 1990s rebound. 1990: agriculture 57.3% of GDP (highest); industry 10.5%, manufacturing 7.8% (lowest).", tone: "bad", cards: ["ec-bm-snapshot"] },
    { row: [
      { t: "Least industrialised socialist state", d: "Even vs Cambodia/Laos; only country where primary industry's GDP share did NOT fall in the 1990s.", tone: "bad", cards: ["ec-bm-snapshot"] },
      { t: "Exports collapsed", d: "Exports % of GDP: 21.0% (1950–60) → 1.3% (1990–2000) — only regional economy where exports fell.", tone: "bad", cards: ["ec-bm-snapshot"] }
    ] },
    { t: "Historians: Than & Tan", d: "Decline \"particularly telling\" against neighbours \"with which Burma shares a similar resource base\" — divergence due to POLICY, not endowment.", tone: "verdict", cards: ["ec-bm-limits"] },
    { arrow: "three structural limitations" },
    { t: "1. Contradiction of socialist strategy", d: "Heavy industry in an agrarian economy with no industrial base → forex shortage → couldn't import capital goods → industrialisation stalled anyway. Same flaw as Vietnam.", tone: "cause", cards: ["ec-bm-limits"] },
    { t: "2. Absence of international trade", d: "Extreme nationalisation cut trade; GDP slid with trade orientation (exports 21.0% → 1.3% of GDP while every other regional economy rose) — proves trade matters.", tone: "cause", cards: ["ec-bm-limits"] },
    { t: "3. Instability and investment climate", d: "1988 coup suspended all foreign aid (vs Vietnam's embargo lifted 1994). Hla Myint (1971): investors value less bureaucracy and long-term political certainty over tax 'handouts'.", tone: "cause", cards: ["ec-bm-limits"] },
    { t: "Equity vs growth revisited", d: "Relative equity achieved (1972: top 25% earned only 5× bottom 25%); nationalism achieved by expelling Chinese/Indians — but \"the parlous overall state of the economy\" means it's hardly \"an achievement of any sort.\"", tone: "mixed", cards: ["ec-bm-equity"] },
    { arrow: "role of the government over time" },
    { t: "Pre-1958: modest", d: "Pyidawtha plan, DSI, limited state monopolies.", tone: "context", cards: ["ec-bm-govt"] },
    { t: "1958: Ne Win caretaker", d: "First major state enterprises in infrastructure and key commodities.", tone: "context", cards: ["ec-bm-govt"] },
    { t: "1962–88: total intervention", d: "\"Excessive intervention... suffocated private enterprise and failed to build a base for long-term industrialisation.\" Poor expertise compounded poor ideology.", tone: "bad", cards: ["ec-bm-govt"] },
    { t: "Aid mismanaged", d: "Loans US$65.5m/yr (1974–77) → US$348.5m/yr (1978–86) yet Burma still lagged far behind.", tone: "bad", cards: ["ec-bm-govt"] },
    { t: "Post-1988: SLORC/SPDC", d: "Brutality → Western sanctions → hampered liberalisation; ASEAN more forgiving. Real improvement only post-2010 (outside syllabus).", tone: "bad", cards: ["ec-bm-govt"] },
    { t: "Overall verdict", d: "The ultimate cautionary tale of extreme economic nationalism: government policy, not resources, made the best-endowed country the region's worst performer.", tone: "verdict", cards: ["ec-bm-paradox"] }
  ],
  takeaways: [
    "Use Burma to argue government policy was the decisive factor in economic outcomes (Than & Tan).",
    "Burma proves trade orientation matters: exports 21.0% → 1.3% of GDP alongside the slowest growth.",
    "Equity and nationalism were 'achieved' at the cost of growth — the sharpest trade-off among the three aims."
  ]
});

/* ───────────── VIETNAM ───────────── */

L.push({
  id: "ec-flow-vietnam-1", order: 45,
  title: "Vietnam 1954–1975: a country split by ideology",
  intro: "Geneva split Vietnam into a capitalist, US-dependent South and a socialist, Soviet/Chinese-backed North. Both economies were distorted and then devastated by war.",
  steps: [
    { t: "Defining theme: pragmatism", d: "Vietnam is the model case of a socialist government flexible enough to abandon a failing model — unlike Burma, which clung to autarky until internal collapse.", tone: "context", cards: ["ec-vn-theme"] },
    { t: "Colonial economy", d: "Agrarian (rice, rubber, coffee, coal); repressive French corvée (forced labour) → tenant farming on absentee-landlord land.", tone: "context", cards: ["ec-vn-colonial"] },
    { t: "Famine (1944–45)", d: "Hundreds of thousands died as the Japanese diverted rice for war and Allied bombing disrupted transport.", tone: "bad", cards: ["ec-vn-colonial"] },
    { t: "Geneva Conference (1954)", d: "After Dien Bien Phu: North (socialist DRV, Soviet/Chinese-backed) and South (capitalist, US-backed).", tone: "event", cards: ["ec-vn-colonial"] },
    { split: [
      { h: "South (capitalist)", steps: [
        { t: "Diem's consumer industry", d: "Sugar, textiles, processed foods with US aid — couldn't meet population needs; rural insurgency deterred investment.", tone: "mixed", cards: ["ec-vn-south"] },
        { t: "Rice exporter to importer", d: "Ceased net exports after 1965; imports 12× exports during the war.", tone: "bad", cards: ["ec-vn-south"] },
        { t: "US-aid dependence", d: "Almost wholly aid-dependent by late 1960s → collapse when US withdrew (from 1971, completed via 1973 Paris Peace Accords).", tone: "bad", cards: ["ec-vn-south"] }
      ] },
      { h: "North (socialist)", steps: [
        { t: "Minerals, little industry", d: "Most minerals (gold, zinc, iron, tin) but industry only 1.5% of output in 1954 (war damage, technical elite fled South).", tone: "context", cards: ["ec-vn-north"] },
        { t: "Planning and 1st FYP (1961)", d: "National Planning Board (1955). >90% of industry/agriculture nationalised by 1965. Industrial output +15%/yr (1959–64) on Soviet/Chinese aid (80% Moscow): fertiliser plants, power stations, Hanoi steel complex.", tone: "policy", cards: ["ec-vn-north"] },
        { t: "Collectivisation fails", d: "Mutual aid teams → cooperatives → brigades with 'work points' awarded by TIME spent, killing incentives. Low wages from fixed low state prices.", tone: "bad", cards: ["ec-vn-north"] },
        { t: "'Five percent plots'", d: "Private plots (5% of land) yielded 2–3× per hectare and gave 60–75% of farm income — evidence the Party ignored even when shown in 1974 (Le Duan).", tone: "mixed", cards: ["ec-vn-plots"] }
      ] }
    ] },
    { t: "US bombing (1966–75)", d: "Devastated the North's industry and transport. UN 1976 mission: 183 dams/canals and 884 water installations needing repair; 9 of 30 provincial capitals destroyed.", tone: "bad", cards: ["ec-vn-war"] },
    { t: "Communist aid", d: "Soviet >1 billion roubles (1963–67, 60% military) plus Chinese aid (CIA est. $3.2bn from Communist states by 1968) prevented collapse but couldn't offset war damage.", tone: "mixed", cards: ["ec-vn-war"] },
    { t: "Verdict", d: "Neither model worked: the South depended on US aid, the North's collectivisation failed on incentives. Both legacies shaped post-1975 policy.", tone: "verdict" }
  ],
  takeaways: [
    "The five percent plots were early proof that incentives, not collectivisation, drove productivity — ignored for ideological reasons.",
    "Both halves were aid-dependent (US vs Soviet/Chinese); war damage set a very low base for reunification.",
    "The South's freeholding peasants and capitalist experience explain later resistance to socialist transformation."
  ]
});

L.push({
  id: "ec-flow-vietnam-2", order: 46,
  title: "Vietnam 1976–1980: reunification and the failed 2nd FYP",
  intro: "Reunified Vietnam imposed the North's heavy-industry socialist model on the South. Fierce rural resistance and four causes made the 2nd Five-Year Plan a comprehensive failure.",
  steps: [
    { t: "Human cost of war", d: "~1.5 million killed; ~1 million refugees by Oct 1982 (UNHCR), including tens of thousands of skilled professionals — severe human capital loss.", tone: "context", cards: ["ec-vn-reunify"] },
    { t: "Mixed early measures", d: "Farm expansion (1m new jobs); foreign investment wooed with JVs and profit repatriation; outreach to ASEAN. BUT private banks abolished; foreign industrial firms nationalised after Saigon's fall.", tone: "mixed", cards: ["ec-vn-reunify"] },
    { t: "2nd Five-Year Plan (1976–80)", d: "Repeated the North's mistake: heavy industry first; science/technology (mechanised farming); large-scale collectivisation (Mekong agro-farms); relocation to New Economic Zones (NEZs).", tone: "policy", cards: ["vietnamfyp"] },
    { arrow: "socialist transformation of the South" },
    { t: "Stage I (Mar 1978): private trade abolished", d: "Without warning, major private firms put under state control. 'Youth squads' confiscated goods at night, compensation rarely honoured → merchant refugee exodus.", tone: "policy", cards: ["ec-vn-stage1"] },
    { t: "Stage II (Dec 1978): collectivisation", d: "'New Management System': work-exchange teams → pilot cooperatives → large collectives. State seized equipment/livestock.", tone: "policy", cards: ["ec-vn-stage2"] },
    { t: "Fierce Southern resistance", d: "Southern peasants were freeholders (unlike Northern tenants): sold land back to owners, destroyed equipment/livestock, refused collective labour. Party used mass meetings, pressure, 'counterrevolutionary' threats.", tone: "bad", cards: ["ec-vn-stage2"] },
    { t: "Total failure", d: "By 1982 only 0.6% of Mekong households in cooperatives; 10 new cooperatives in HCMC since 1975. Rice 11.83m (1976) → 9.79m tons (1979); Mekong 950,000 → 398,000 tons.", tone: "bad", cards: ["ec-vn-stage2"] },
    { arrow: "why the 2nd FYP failed — four causes" },
    { row: [
      { t: "1. Lack of funds", d: "Soviet aid ~$1bn/yr (promised $2.7bn); China cut aid after Vietnam joined CMEA (1978); US never paid promised $3bn; 1979 Cambodia invasion → embargo, 50% of spending on defence.", tone: "cause", cards: ["ec-vn-fyp-funds"] },
      { t: "2. War damage, infrastructure", d: "Docks lacked equipment/stevedores; highway potholed; ⅓ of trucks idle without spare parts. Duiker: difficulty \"absorbing foreign aid even when it was provided.\"", tone: "cause", cards: ["ec-vn-fyp-causes"] }
    ] },
    { row: [
      { t: "3. Lack of expertise", d: "Cadres couldn't shift from wartime to peacetime administration; experienced people excluded for US/Southern-govt ties or Chinese ethnicity — ideology trumped competence.", tone: "cause", cards: ["ec-vn-fyp-causes"] },
      { t: "4. Rural resistance", d: "Only 9% of peasants and 7% of cultivated land in southern cooperatives by 1981.", tone: "cause", cards: ["ec-vn-fyp-causes"] }
    ] },
    { t: "Targets vs achieved", d: "Harvest 21m tons target vs 12m achieved; agriculture +50% target vs +18.7%; industry +50% target vs +17.3% — comprehensive failure.", tone: "bad", cards: ["vietnamfyp"] },
    { t: "Crisis by 1980", d: "Industrial capacity use <50%; rice rationed to wartime lows (1977–80); thriving black market; brief war with China (1979) and costly Cambodia occupation (1979–89).", tone: "bad", cards: ["vietnamfyp"] },
    { t: "The Hoa squeezed out", d: "Southern ethnic Chinese enterprises nationalised; suspected capitalists/ex-South supporters persecuted → fled abroad, part of the wider refugee exodus.", tone: "bad", cards: ["ec-vn-hoa"] },
    { t: "Verdict", d: "Ideology (heavy industry, forced collectivisation) plus external isolation and war made 1976–80 a disaster — creating the pressure for reform.", tone: "verdict" }
  ],
  takeaways: [
    "Use the four causes to balance internal (expertise, resistance) vs external (aid cuts, embargo, war) factors in failure.",
    "Southern freeholders' resistance shows collectivisation clashed with local social structures, not just economics.",
    "Same heavy-industry-first flaw as Burma — but Vietnam's response to failure differed."
  ]
});

L.push({
  id: "ec-flow-vietnam-3", order: 47,
  title: "Vietnam 1981–1990: Directive 100 to Doi Moi",
  intro: "Crisis forced step-by-step decentralisation, then a leadership change produced Doi Moi (1986): a 'market economy with socialist direction' modelled on Deng's China.",
  steps: [
    { t: "Directive 100 (Jan 1981)", d: "First crack: households farm own plots, sell a quota to the state, keep the surplus for bonus-price state sale or the free market.", tone: "policy", cards: ["ec-vn-directive100"] },
    { t: "Mixed results", d: "Productivity rose, but peasants gamed quotas (colluding with managers for low targets) and resented state-controlled, often poor-quality inputs.", tone: "mixed", cards: ["ec-vn-directive100"] },
    { t: "3rd Five-Year Plan (1981–85)", d: "Food/consumer subsidies abolished; private sector allowed in forestry, fisheries, retail; HCMC, Hanoi, Haiphong, Da Nang got own import-export corporations; more Soviet aid sought.", tone: "policy", cards: ["ec-vn-3rdfyp"] },
    { t: "3rd FYP results", d: "Industrial production +~10%/yr; grain +~5%/yr; 1983 agricultural export surplus.", tone: "good", cards: ["ec-vn-3rdfyp"] },
    { arrow: "pressures for deeper reform" },
    { row: [
      { t: "Soviet aid cut", d: "Gorbachev's reforms reduced Soviet support.", tone: "cause", cards: ["ec-vn-doimoi"] },
      { t: "US embargo", d: "Since 1964 (North), extended 1975: blocked IMF/World Bank/ADB and deterred Western/Japanese aid.", tone: "cause", cards: ["ec-vn-doimoi"] },
      { t: "Leadership change", d: "Le Duan died (1986) → Nguyen Van Linh, willing to experiment with capitalism, became General Secretary.", tone: "cause", cards: ["ec-vn-doimoi"] }
    ] },
    { t: "Doi Moi: 6th Congress (Dec 1986)", d: "'Renovation': 'market economy with socialist direction'. Modelled on Deng's China (1978) — gradualism and stability, unlike Gorbachev's USSR. Party supremacy kept; liberalisation economic only.", tone: "policy", cards: ["ec-vn-doimoi", "ec-vn-theme"] },
    { t: "Decentralisation", d: "Fewer ministries/less bureaucracy; subsidies on key commodities abolished, market prices; by 1989 central planning formally discarded.", tone: "policy", cards: ["ec-vn-doimoi-measures"] },
    { t: "Foreign investment (1987)", d: "Wholly foreign-owned firms allowed in all sectors except defence; Foreign Investment Law: joint enterprises, foreign corporations, 20-year guarantee against nationalisation.", tone: "policy", cards: ["ec-vn-doimoi-measures"] },
    { t: "Proof collectivisation failed", d: "1986 rice output still BELOW 1942 levels; Northern cooperative farmers produced 52% LESS than free Southern farmers.", tone: "bad", cards: ["ec-vn-res10"] },
    { arrow: "prompted" },
    { t: "Resolution 10 (Apr 1988)", d: "De facto privatised farming: 10–15 year land tenure (expected inheritable, like China's Household Responsibility System); no collective labour; private suppliers; quotas gone — sell freely after tax.", tone: "policy", cards: ["ec-vn-res10"] },
    { t: "Regional diplomacy (from 1989)", d: "Serious negotiations with ASEAN to end the Cambodia occupation; interest in ASEAN membership.", tone: "policy", cards: ["ec-vn-doimoi-measures"] },
    { t: "Results 1986–90", d: "Growth doubled 3% → 6%; private sector growth 10% → 25%; international trade doubled $1bn → $2bn.", tone: "good", cards: ["ec-vn-results"] },
    { t: "Verdict", d: "Pragmatism: a deliberate, planned pivot to capitalist mechanisms while preserving one-party control — the opposite of Burma's forced collapse.", tone: "verdict", cards: ["ec-vn-theme"] }
  ],
  takeaways: [
    "Reform was gradual and cumulative (Directive 100 → 3rd FYP → Doi Moi → Resolution 10), not a single break.",
    "Both external pressure (Soviet aid cuts, embargo) and internal change (Le Duan → Linh) drove Doi Moi.",
    "China-style economic-only liberalisation kept political stability — a key contrast with the USSR."
  ]
});

L.push({
  id: "ec-flow-vietnam-4", order: 48,
  title: "Vietnam in the 1990s: growth and integration",
  intro: "Reaffirmed Doi Moi brought world-leading growth, a rice export boom and integration into ASEAN and the world economy after the US embargo ended in 1994.",
  steps: [
    { t: "7th National Congress (1991)", d: "Reaffirmed Doi Moi.", tone: "policy", cards: ["ec-vn-1990s"] },
    { t: "Draft Strategy to 2000 (Dec 1990)", d: "'Socio-Economic Stabilisation and Development' targets: double per capita income, +50% rice, triple electricity output, 5× exports.", tone: "policy", cards: ["ec-vn-1990s"] },
    { t: "Rapid growth", d: "GDP growth averaged 8.2% in early 1990s, 9.5% in 1995–96 — highest in the world then. Industry +~15%; agriculture (esp. rice) +6%.", tone: "good", cards: ["ec-vn-1990s"] },
    { t: "Rice export boom", d: "Per capita rice 242kg (1987) → 293kg (1989). World's 3rd-largest exporter (after US, Thailand): 0.91m (1988) → 1.95m tons (1992), >3m tons/yr by decade's end.", tone: "good", cards: ["ec-vn-1990s"] },
    { t: "Trade explosion", d: "International trade $1bn (1990) → $2bn (1991) → $11bn (1995).", tone: "good", cards: ["ec-vn-1990s"] },
    { t: "Infrastructure", d: "6 transport projects completed by end-1995 (e.g. National Road 14, bridges costing $610m).", tone: "good", cards: ["ec-vn-integration"] },
    { row: [
      { t: "ASEAN ties", d: "ASEAN investment $173m in 34 projects by Sept 1991; membership accepted 1994, formalised 1995.", tone: "good", cards: ["ec-vn-integration"] },
      { t: "Donor aid", d: "First donors' meeting (Nov 1993): 23 donors pledged $1.86bn; Japan largest.", tone: "good", cards: ["ec-vn-integration"] }
    ] },
    { t: "US embargo lifted (Feb 1994)", d: "Influx of investment: $52bn new approved investment 1995–2005.", tone: "event", cards: ["ec-vn-integration"] },
    { t: "Privatisation", d: "Enterprise Law (1999) simplified private company formation; non-state share of production 22% → 27% (2000–2004).", tone: "good", cards: ["ec-vn-integration"] },
    { t: "Verdict", d: "Sustained commitment to reform turned diplomatic opening and aid into investment and growth — but the state remained large (see evaluation).", tone: "verdict" }
  ],
  takeaways: [
    "Vietnam's 1990s success shows the payoff of credible, sustained reform plus diplomatic normalisation (ASEAN, embargo lifted).",
    "Agriculture led the turnaround: Resolution 10 incentives made Vietnam the 3rd-largest rice exporter.",
    "Contrast Burma: Vietnam's commitment won the embargo's end (1994) while Burma's 1988 coup lost all aid."
  ]
});

L.push({
  id: "ec-flow-vietnam-eval", order: 49,
  title: "Evaluating Vietnam: success with limits",
  intro: "Doi Moi delivered strong numbers, but manufacturing lagged, the state sector stayed big, investors faced corruption and inequality rose.",
  steps: [
    { t: "Quantitative success", d: "Growth 3% → 6% (1986–90), 8.2% early 1990s, 9.5% 1995–96; trade $1bn → $11bn (1990–95); 3rd-largest rice exporter.", tone: "good", cards: ["ec-vn-results", "ec-vn-1990s"] },
    { t: "Lagging diversification", d: "Manufacturing % of GDP (2004): Thailand 35.2, Malaysia 31.5, Indonesia 28.3, Philippines 23.0, Vietnam 20.3 — still lagging.", tone: "mixed", cards: ["ec-vn-diversify"] },
    { t: "Concentrated exports", d: "Top 3 exports rose 43.0% (1985) → 54.5% (2000) of total; diversified from shrimp/oil seeds/coal to petroleum/garments/shrimp but still concentrated.", tone: "mixed", cards: ["ec-vn-diversify"] },
    { arrow: "three persistent limitations" },
    { t: "1. Socialist contradictions", d: "SOEs still 50% of output in 1997 — \"the government's inability or reluctance to expand the private sector\" after a decade of reform.", tone: "bad", cards: ["ec-vn-limits"] },
    { t: "2. Lack of transparency", d: "Bribery demands; contracts voided for better offers. PERC (Hong Kong): \"riskiest place\" for investors. Only ⅓ of promised $20bn (1988–95) disbursed.", tone: "bad", cards: ["ec-vn-limits"] },
    { t: "3. Rising inequity", d: "Poverty 1993–98: south-east 32.7% → 11.1%, northern mountains 78.6% → 59.6%. Richest:poorest decile 10.6× (1996) → 12× (1999) → 12.5× (2001–02). Minorities 14% of people, 29% of poor (1998).", tone: "bad", cards: ["ec-vn-limits"] },
    { arrow: "role of the government" },
    { t: "Intrusive planning", d: "Vasavakul: \"the party determined the course... the central government... translated party guidelines into plans.\"", tone: "context", cards: ["ec-vn-govt"] },
    { t: "State sector didn't shrink", d: "State sector grew 10.5%/yr vs non-state 6%/yr (1990–95); by 1993 VPA had 12% of standing force in commercial firms; local militias ran 160+ enterprises.", tone: "mixed", cards: ["ec-vn-govt"] },
    { t: "Vasavakul's nuance", d: "\"The abolition of the central planning system was not synonymous with the decline of the state economic sector\" — Doi Moi liberalised MARKETS, not the state's economic footprint.", tone: "verdict", cards: ["ec-vn-govt"] },
    { t: "Hoa squeezed out", d: "Post-reunification nationalisation and persecution of ethnic Chinese and suspected capitalists → flight abroad, losing capital and skills.", tone: "bad", cards: ["ec-vn-hoa"] },
    { t: "Overall verdict", d: "The key example of socialist pragmatism: failure → planned pivot → high growth. But a large state, corruption and regional/ethnic inequity limited the transformation.", tone: "verdict", cards: ["ec-vn-theme"] }
  ],
  takeaways: [
    "Vietnam supports the argument that pragmatic, flexible governments outperform ideological ones — even under one-party rule.",
    "Use Vasavakul to nuance 'liberalisation': markets opened but the state (and army) kept a large economic role.",
    "Growth came at the cost of equity — rising regional and ethnic gaps."
  ]
});

L.push({
  id: "ec-flow-bmvn-compare", order: 50,
  title: "Burma vs Vietnam: same flaw, different exits",
  intro: "Both socialist states made the same heavy-industry-first mistake. Vietnam pivoted pragmatically; Burma clung on until collapse — so policy, not starting point, decided the outcome.",
  steps: [
    { t: "Shared flaw", d: "Heavy industry prioritised in agrarian economies without an industrial base; collectivisation/quotas killed farm incentives; minorities (Indians/Chinese; the Hoa) driven out.", tone: "cause", cards: ["burmavsvietnam", "ec-bm-limits"] },
    { split: [
      { h: "Burma", steps: [
        { t: "Clung to autarky", d: "Burmese Way to Socialism 1962–88; only partial Four-Year Plan reforms.", tone: "bad", cards: ["burmeseway"] },
        { t: "Forced out by collapse", d: "Demonetisations → 8888 → SLORC; 1988 coup suspended all foreign aid; Western sanctions.", tone: "bad", cards: ["demonetisation"] },
        { t: "Cosmetic opening", d: "State/army kept teak, gems, banking; only 5% of large firms private (1997).", tone: "bad", cards: ["ec-bm-tucker", "fivepercent"] },
        { t: "Outcome", d: "GDP growth 4.3% (1961–2001), lowest in SEA; exports 1.3% of GDP (1990–2000).", tone: "bad", cards: ["ec-bm-snapshot"] }
      ] },
      { h: "Vietnam", steps: [
        { t: "Gradual reform", d: "Directive 100 (1981) → 3rd FYP (1981–85) as crisis bit.", tone: "mixed", cards: ["ec-vn-directive100"] },
        { t: "Planned pivot", d: "Le Duan → Nguyen Van Linh; Doi Moi (1986) on Deng's model; Resolution 10 (1988).", tone: "good", cards: ["ec-vn-doimoi"] },
        { t: "Rewarded", d: "Sustained commitment helped lift the US embargo (1994); ASEAN 1995; $52bn investment (1995–2005).", tone: "good", cards: ["ec-vn-integration"] },
        { t: "Outcome", d: "9.5% growth 1995–96 (world's highest); 3rd-largest rice exporter.", tone: "good", cards: ["ec-vn-1990s"] }
      ] }
    ] },
    { t: "Hla Myint (1971)", d: "Investors care less about tax 'handouts' than reduced bureaucracy and long-term political/security certainty — Vietnam offered it, Burma did not.", tone: "verdict", cards: ["ec-bm-limits"] },
    { t: "Verdict", d: "Flexibility under one-party rule (Vietnam) beat ideological rigidity (Burma); yet both kept large state/military economic footprints.", tone: "verdict", cards: ["burmavsvietnam", "ec-f2-bmvn"] }
  ],
  takeaways: [
    "The Burma–Vietnam pair is the clearest test of 'government policy determined economic outcomes'.",
    "Political stability and credible commitment (not just incentives on paper) attracted investment.",
    "Both show limits: army-run enterprises in Burma (SLORC) and Vietnam (VPA)."
  ]
});

})();
