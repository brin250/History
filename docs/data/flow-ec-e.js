// Flow charts: Indonesia and the Philippines — from SEA_Economic_Change_Study_Notes (Lecture 3)
(function(){
const F = (window.FLOWS = window.FLOWS || {}); const L = (F.ec = F.ec || []);

/* ===================== INDONESIA ===================== */

L.push({
  id: "ec-flow-indonesia-1", order: 70,
  title: "Indonesia 1949–65: weak foundations to Guided Economy collapse",
  intro: "How a weak colonial inheritance made the state dominant out of necessity, and how Sukarno's economic nationalism and ISI ended in hyper-inflation and falling GNP per capita.",
  steps: [
    { t: "Big picture: Indonesia 1961–2001", d: "Avg 5.7% p.a. GDP growth (4.2 / 7.9 / 6.4 / 4.3 by decade), fastest in 1970s oil boom. Statistically successful, but cronyism and lack of transparency limited success by the end of the 1990s.", tone: "context", cards: ["ec-id-overview"] },
    { t: "Three phases", d: "1949–65 revolution/crisis → Guided Economy (nationalisation, ISI). 1970s oil surge → FDI & state-led growth. 1980s–90s oil crash → deregulation, financial reform, private sector.", tone: "context", cards: ["ec-id-overview"] },
    { t: "1949–57: a weak foundation", d: "High mortality, food shortages, destroyed physical capital. Colonial agrarian economy dominated by Dutch and Chinese capital; no domestic bourgeoisie to fill the vacuum.", tone: "context", cards: ["ec-id-weak"] },
    { t: "State pre-eminence out of necessity", d: "Not ideology: no alternative capable class. Still ~2% per capita GNP growth most years before Sukarno's 1957 Guided Democracy.", tone: "mixed", cards: ["ec-id-weak"] },
    { arrow: "1957: Sukarno's answer was nationalism" },
    { row: [
      { t: "Expropriation", d: "~300 Dutch plantations + 300 firms (mining, trade, finance, utilities) nationalised 1957; discrimination against the Chinese.", tone: "policy", cards: ["ec-id-guided"] },
      { t: "Heavy-industry ISI", d: "Earn forex from oil/minerals/gas/agri exports → invest in steel, shipyards; state credit + import protection for infant industries.", tone: "policy", cards: ["ec-id-guided"] }
    ] },
    { t: "Tarling: rhetoric against “neo-colonialism”", d: "Nationalism culminated in ‘confrontations’ over Irian Jaya and Malaysia (Tarling, p.161).", tone: "context", cards: ["ec-id-guided"] },
    { arrow: "failed because" },
    { row: [
      { t: "Inexperienced management", d: "Nasakom government: Dutch managers replaced by ex-military/civil servants with little managerial experience; foreign expertise rejected.", tone: "cause", cards: ["ec-id-guided"] },
      { t: "Unfunded 1959 8-year plan", d: "12-fold rise in project spending, no clear financing → central bank credit = half of govt spending by mid-1960s → big deficits.", tone: "cause", cards: ["ec-id-sukarno-collapse"] }
    ] },
    { row: [
      { t: "Costly military adventures", d: "Seizure of West Irian (1961–62), Konfrontasi with Malaysia (1963–66): patriotic distraction that drained finances.", tone: "cause", cards: ["ec-id-sukarno-collapse"] },
      { t: "Rejected Western aid", d: "1964: told US ambassador to ‘go to hell with your aid’; styled himself NAM leader. Soviet bloc aid (USSR ~$1bn military + $215m economic; E. Europe $290m; 9,200 soldiers trained) cooled by 1964 (Sino-Soviet split) and was insufficient.", tone: "cause", cards: ["ec-id-sukarno-collapse"] }
    ] },
    { arrow: "result" },
    { t: "Economic disaster", d: "Trade collapsed, industrial output plummeted, hyper-inflation over 2000% a year by mid-1960s; GNP per capita declined 1957–65 (Tarling).", tone: "bad", cards: ["ec-id-sukarno-collapse"] },
    { t: "Key collapse figures", d: "Exports US$931m (1959) → US$685m (1966). Forex reserves US$313m → US$17m (1960–67).", tone: "bad", cards: ["ec-id-sukarno-collapse"] }
  ],
  takeaways: [
    "State dominance in Indonesia began out of necessity (no domestic bourgeoisie; Chinese politically excluded), not ideology.",
    "Guided Economy shows ISI + economic nationalism failing when run by inexperienced managers, financed by central-bank credit and drained by Konfrontasi.",
    "Rejection of Western aid left Indonesia reliant on insufficient Communist-bloc aid — the New Order reversed this, shifting to Japan and the West."
  ]
});

L.push({
  id: "ec-flow-indonesia-2", order: 71,
  title: "New Order 1966–86: aid, oil boom and state-led growth",
  intro: "Suharto staked his legitimacy on development: he reopened Indonesia to Western aid and FDI, then used the 1970s oil windfall for state-led infrastructure, agriculture and ISI corporations — while the Pertamina affair showed the risks.",
  steps: [
    { t: "Suharto's inheritance", d: "Sky-high inflation/unemployment, flagrant corruption, inefficient state industries, empty forex reserves, alienated neighbours still in Konfrontasi.", tone: "context", cards: ["ec-id-neworder"] },
    { t: "Legitimacy = economic development", d: "Fixing the economy was existential for Suharto's rule.", tone: "cause", cards: ["ec-id-neworder"] },
    { arrow: "so he courted the West" },
    { row: [
      { t: "Berkeley Mafia", d: "US-trained technocrats as chief mediators with the West.", tone: "policy", cards: ["ec-id-neworder"] },
      { t: "Investor guarantees", d: "Returned expropriated Dutch/other assets; 1967 Foreign Investment Law (tax concessions + guarantee against expropriation).", tone: "policy", cards: ["ec-id-neworder"] },
      { t: "Foreign policy reset", d: "Ended Konfrontasi (1966); anti-communism attractive in Cold War. 8 Aug 1967: ASEAN formed with Thailand, Malaysia, Singapore, Philippines.", tone: "policy", cards: ["ec-id-neworder"] }
    ] },
    { t: "Aid shift: USSR → Japan & West", d: "1967 IGGI (14 nations) became major aid funnel ($2.5bn est. for 1985/86). IMF central adviser in financial reorganisation through 1970s/early 1980s.", tone: "good", cards: ["ec-id-neworder"] },
    { arrow: "then luck: 1970s oil surge" },
    { t: "Oil boom — “a pot of gold”", d: "Oil <US$3/barrel (1972) → >US$30 (1980); oil export revenue grew 45.5% (1970–81, Vatikiotis). GDP growth 7–8%/yr; per capita income US$260 → US$500+.", tone: "event", cards: ["ec-id-oil"] },
    { arrow: "windfall funded state-led strategy" },
    { row: [
      { t: "(a) Infrastructure", d: "Housing, health, education; food self-sufficiency programme. Bulog (rice procurement/distribution/pricing); Sekneg allocated construction contracts.", tone: "policy", cards: ["ec-id-agri"] },
      { t: "(b) Green Revolution", d: "Bimas: credit + new seeds. Rice 12m tons (1968) → 29m (1989); yields 2.14 → 4.23 t/ha. Self-sufficient by mid-1980s (major importer in 1970s) — for political stability too.", tone: "good", cards: ["ec-id-agri"] },
      { t: "(c) State ISI corporations", d: "Pertamina + Dept of Industry in petrochemicals, steel, cement, forestry. 1975: state firms made 75% of cement, 52% of paper & machinery, 40% of food manufacturing.", tone: "policy", cards: ["ec-id-stateisi"] }
    ] },
    { t: "Case study: the Pertamina affair", d: "Ibnu Sutowo launched LNG/fertiliser/steel projects on lavish foreign borrowing with few checks, assuming post-1973 oil prices would stay high; they stabilised March 1974.", tone: "event", cards: ["pertamina"] },
    { arrow: "backfired →" },
    { t: "US$10bn debt revealed (Nov 1974)", d: "About 2/3 of Indonesia's GNP owed to creditors. Sutowo forced to resign (1976); severely damaged credibility with foreign creditors.", tone: "bad", cards: ["pertamina"] },
    { t: "Limit entering the 1980s", d: "Indonesia still heavily reliant on oil exports — diversification shallow.", tone: "mixed", cards: ["ec-id-stateisi", "ec-id-limits"] }
  ],
  takeaways: [
    "Growth rested on external props: Western aid (IGGI, IMF), FDI guarantees and the oil windfall — Indonesia was ‘lucky’ (Vatikiotis).",
    "The state, not the market, drove 1970s growth (Bulog, Bimas, Pertamina, state ISI firms); rice self-sufficiency was a real success.",
    "Pertamina shows state-led growth without transparency: unchecked borrowing left US$10bn of debt (~2/3 of GNP) and hurt creditor confidence.",
    "Oil dependence meant diversification was shallow — setting up the 1980s crisis."
  ]
});

L.push({
  id: "ec-flow-indonesia-3", order: 72,
  title: "Indonesia 1986–1990s: oil glut, deregulation and cronyism",
  intro: "The oil glut forced deregulation and a turn to FDI and EOI. Statistically it diversified the economy, but in reality it handed new opportunities to Chinese-Indonesian conglomerates and the Suharto circle.",
  steps: [
    { t: "Early 1980s global oil glut", d: "Demand slowdown, energy conservation, rising US domestic output. 1982–86 oil prices fell to < half the 1981 peak.", tone: "event", cards: ["ec-id-glut"] },
    { t: "Fiscal shock", d: "27% plunge in oil tax revenue → growth rate halved by 1985.", tone: "bad", cards: ["ec-id-glut"] },
    { arrow: "in response, three-part strategy" },
    { row: [
      { t: "1. Deregulation", d: "Private sector development.", tone: "policy", cards: ["ec-id-glut"] },
      { t: "2. Infrastructure & FDI", d: "Attract foreign investment.", tone: "policy", cards: ["ec-id-repelita"] },
      { t: "3. Transition to EOI", d: "Export-oriented industrialisation.", tone: "policy", cards: ["ec-id-repelita"] }
    ] },
    { row: [
      { t: "1985 reforms", d: "Simplified licensing; new investment incentives/tax concessions.", tone: "policy", cards: ["ec-id-glut"] },
      { t: "October 1988 package", d: "Radical banking restructuring: loosened rules for private (national & foreign) banks; 40+ new private bank licences in 2 years.", tone: "policy", cards: ["ec-id-glut"] }
    ] },
    { row: [
      { t: "FDI six-fold rise", d: "FDI increased six-fold, 1980–90 (Rigg).", tone: "good", cards: ["ec-id-repelita"] },
      { t: "Repelita pivot to industry", d: "Repelita III (1979–84) prioritised agriculture (14.0%). Repelita IV (1984–89), V (1989–94) prioritised industry (9.5%, 8.5%) over agriculture (3.0%, 3.6%).", tone: "policy", cards: ["ec-id-repelita"] }
    ] },
    { arrow: "but was it diversification or cronyism?" },
    { split: [
      { h: "Statistical success", steps: [
        { t: "Non-oil exports up", d: "31% → 50% of total exports in the decade.", tone: "good", cards: ["ec-id-dereg-reality"] },
        { t: "Structural shift", d: "Manufacturing 13% → 18% of GDP; agriculture 24% → 19%.", tone: "good", cards: ["ec-id-dereg-reality"] },
        { t: "Growth recovery", d: "GDP growth 2% (1982 trough) → 7% (1990); manufactured exports <US$1bn (1982) → >US$9bn (1990).", tone: "good", cards: ["ec-id-dereg-reality"] }
      ] },
      { h: "Reality: concentration", steps: [
        { t: "Vatikiotis", d: "Deregulation “simply opened up new areas of expansion for the larger business groups” (p.44).", tone: "bad", cards: ["ec-id-dereg-reality"] },
        { t: "Sino-Indonesian conglomerates", d: "Liem Sioe Leong, Soerjadjaja (Astra), Widjaja (Sinar Mas).", tone: "bad", cards: ["ec-id-dereg-reality"] },
        { t: "Auto industry", d: "Astra 40%, Liem's Indomobil 21% of production by mid-1990s — control merely transferred from military/officials to Chinese conglomerates.", tone: "bad", cards: ["ec-id-dereg-reality"] }
      ] }
    ] },
    { t: "Suharto's limits on liberalisation", d: "Timber export ban kept; ‘strategic industries’ (military production, transport, mechanics, electronics) shielded from privatisation — balancing growth with economic nationalism.", tone: "mixed", cards: ["ec-id-dereg-reality"] },
    { t: "Verdict", d: "Deregulation diversified exports and output, but reinforced rather than undermined state power and corporate concentration (Rodan, Hewison & Robison).", tone: "verdict", cards: ["ec-id-dereg-reality", "ec-id-monopolies"] }
  ],
  takeaways: [
    "External shock (oil glut) drove Indonesia's turn to deregulation, FDI and EOI.",
    "Use the statistics (non-oil exports 31% → 50%, manufactured exports <$1bn → >$9bn) for ‘successful strategy’ arguments.",
    "Counter with Vatikiotis: liberalisation fed conglomerates (Astra, Liem) and stayed limited by economic nationalism."
  ]
});

L.push({
  id: "ec-flow-indonesia-4", order: 73,
  title: "Evaluating Indonesia: growth, cronyism, state role, Chinese",
  intro: "Indonesia's growth indicators were impressive, but crony monopolies, inequality, shallow diversification, debt and weak bank regulation limited it. The state's role was necessary yet turned excessive where self-profit drove it.",
  steps: [
    { t: "Rapid growth: indicators", d: "Inflation: several thousand % (Sukarno) → <10% (1980s). Life expectancy 50 (1980) → 60 (1990). Poverty 60% (1970) → 17% (1987) → 11% (1997). Confident middle class by 1970s.", tone: "good", cards: ["ec-id-growth"] },
    { t: "Structural change", d: "Agri % GDP 51 (1965) → 24 (1980) → 16 (1996); industry 13 → 42 → 43; services 36 → 34 → 41.", tone: "good", cards: ["ec-id-growth"] },
    { t: "Export diversification", d: "Top 3 exports: petroleum, plywood, rubber (1985) → petroleum, garments, telecoms (2000). Top-3 share 69.3% → 30.2%; primary commodities 70–80% (1980s) → 42.9% (2000).", tone: "good", cards: ["ec-id-growth"] },
    { arrow: "BUT limitations" },
    { t: "(a) Crony monopolies", d: "Bogasari flour (1969: govt, Liem, Suharto's step-brother). Krakatau Steel (1984): Liem's $800m for cold-rolled steel import monopoly — +25–45% to sheet costs (World Bank).", tone: "bad", cards: ["ec-id-monopolies"] },
    { t: "More family monopolies", d: "Panca Holding plastics: $30m on $320m imports (1986), +15–20% to costs. Soymeal (1988, Tommy Suharto & Bob Hasan); cloves (1990, Tommy, $350m from agri reserves). Madam ‘Tien Percent’ 10% cut.", tone: "bad", cards: ["ec-id-monopolies"] },
    { t: "Historians on concentration", d: "Morley: huge increase in Suharto family wealth since 1986. Rodan et al.: deregulation reinforced state power. Robison: growth of state-sponsored private business groups.", tone: "verdict", cards: ["ec-id-monopolies", "ec-id-robison"] },
    { t: "Robison's ‘bureaucratic capitalism’", d: "Officials (esp. military) treated offices as personal fiefs like pre-colonial Javanese rulers. No indigenous entrepreneurs, so big firms built by state, ethnic Chinese, or both together.", tone: "verdict", cards: ["ec-id-robison"] },
    { row: [
      { t: "(b) Relative inequality", d: "Urban incomes 42% above rural (1970) → 92% (1993); 205% in Jakarta. Malari riots (Jan 1974, Tanaka visit) vented anger at bureaucratic capitalists and cukong; post-1997 anti-Chinese violence.", tone: "bad", cards: ["ec-id-inequality"] },
      { t: "Regional inequality", d: "Java/Madura/Bali dominant → overcrowding. 1973 transmigration moved poor Javanese to Sumatra/Sulawesi/Kalimantan/Irian Jaya — failed: poorer soil, local resentment, Muslim–Christian tension → post-1998 sectarian violence (~1000 deaths to 2007).", tone: "bad", cards: ["ec-id-inequality"] }
    ] },
    { row: [
      { t: "(c) Limited diversification", d: "Primary products 70–80% of export revenue in 1980s; oil 70% of export earnings (1980). Astra/Indomobil + 100–300% tariffs on built-up cars → no domestic engine production.", tone: "bad", cards: ["ec-id-limits"] },
      { t: "(d) External debt", d: "Foreign loans = 42% of development budget (1980); by 1989 Asia's largest debt (~US$58bn). Funds leaked through lack of transparency.", tone: "bad", cards: ["ec-id-limits"] }
    ] },
    { row: [
      { t: "(e) Pre-crisis financial weakness", d: "Post-baht-devaluation ‘crisis of confidence’: rupiah fluctuated up to 10%/day, worsened by uncertainty over Suharto's health. At crisis onset private corporate debt >$60bn vs only $24bn forex reserves.", tone: "bad", cards: ["ec-id-financial"] },
      { t: "Weak bank regulation", d: "Banks 124 (1988) → 244 (1994), but credit culture/regulation lagged. Name/relationship lending: Liem's BCA owed 60% of its loans by other Liem firms (moral hazard: expected bailout). BUPN lacked capacity and will.", tone: "bad", cards: ["ec-id-financial"] }
    ] },
    { arrow: "role of the government" },
    { t: "Why the state dominated", d: "Robison: no powerful national bourgeoisie, so military, party and officials took over the state. Chinese excluded politically; Javanese traders lacked resources → state filled vacuum 1949–65.", tone: "context", cards: ["ec-id-govt"] },
    { row: [
      { t: "Constitutional statism", d: "Article 33: important sectors “under the powers of the State”. Oil under Pertamina; ship/aircraft under Ministry of Technology — entrenched, hard to circumvent legally.", tone: "policy", cards: ["ec-id-govt"] },
      { t: "Planning & participation", d: "Repelita I (1969), like Malaysia's NEP/Thai plans. State firms (Pertamina, Bulog) filled ‘national gaps’ (cf. FELDA/PERNAS, JTC). 1968 PMDN law: no business without state approval.", tone: "policy", cards: ["ec-id-govt"] }
    ] },
    { split: [
      { h: "Necessary", steps: [
        { t: "Macro problems needed state", d: "No infrastructure, no autonomous expert middle class, political instability. Public goods lack profit incentive.", tone: "good", cards: ["ec-id-govt-eval"] },
        { t: "Order attracted aid", d: "Vatikiotis: donors grateful for stability; obsession with order a selling point in western finance.", tone: "good", cards: ["ec-id-govt-eval"] }
      ] },
      { h: "Excessive", steps: [
        { t: "Self-profit motive", d: "Where efficiency drove it, state scaled back for EOI; where Suharto's cronyism drove it, participation was excessive and stunted EOI — unlike Singapore's (and partly Malaysia's) genuine privatisation.", tone: "bad", cards: ["ec-id-govt-eval"] }
      ] }
    ] },
    { arrow: "role of ethnic Chinese" },
    { t: "‘Masalah Cina’", d: "Chinese 3.8% of population but disproportionate economic control (73% of listed firms). Astra and Liem Groups; Liem close to Suharto, favoured in contracts.", tone: "context", cards: ["ec-id-chinese"] },
    { t: "1970s pribumi–Chinese tension", d: "Bandung riots (Oct 1973), Malari (Jan 1974) against general–Chinese alliances → state bank credit for indigenous firms; PMDN 75% indigenous-owned within 10 years; credit for small traders.", tone: "event", cards: ["ec-id-chinese"] },
    { arrow: "backfired →" },
    { t: "Cukong system", d: "Failed to build indigenous entrepreneurs: indigenous partner fronted the licence as sleeping partner; Chinese partner owned and ran it. Conglomerates gained at the expense of the indigenous petty bourgeoisie.", tone: "bad", cards: ["ec-id-chinese"] },
    { t: "Overall verdict", d: "Statistically successful, but intervention became the vehicle for cronyism and wealth concentration; cronyism and lack of transparency limited success by the end of the 1990s.", tone: "verdict", cards: ["ec-id-overview", "ec-id-govt-eval"] }
  ],
  takeaways: [
    "Success: inflation tamed, poverty 60% → 11%, agriculture 51% → 16% of GDP, top-3 export share 69.3% → 30.2%.",
    "Limits: crony monopolies (Krakatau, Panca, cloves), rising urban-rural gap, oil dependence, Asia's largest debt, relationship lending (BCA).",
    "Government role: necessary (Article 33, Repelita, public goods, aid-attracting stability) but excessive where driven by self-profit, stunting EOI.",
    "Indigenisation policies produced the cukong system, entrenching rather than reducing Chinese conglomerate power."
  ]
});

/* ===================== PHILIPPINES ===================== */

L.push({
  id: "ec-flow-philippines-1", order: 74,
  title: "Philippines 1950s–65: early ISI boom to failure",
  intro: "Despite strong advantages the Philippines failed to realise its potential. Rapid early ISI made it ‘Asia's second NIC’, but protection bred inefficiency, nationalism targeted the Chinese, and land reform was blocked by the landed elite.",
  steps: [
    { t: "Wasted advantages", d: "Strong US ties, English-speaking workforce, ISI pioneer. On par with Thailand mid-1970s; by 2007 US$1,192 vs Thailand's US$2,750 per capita GDP. Oil-importing, so hurt by 1970s oil shocks.", tone: "context", cards: ["philfailure"] },
    { t: "Growth record", d: "4.9 / 5.9 / 1.8 / 2.9% by decade (avg 3.9%, 1961–2001). 1981–90 collapse (1.8%) worst of major SEA economies, except possibly Myanmar.", tone: "bad", cards: ["philfailure"] },
    { t: "Parallels with Indonesia", d: "State dominant in planning/participation; early ISI → foreign funds → liberalisation. Cronyism crippled a healthy start (‘rent-seeking’, ‘patrimonialist plunder’). Unique problem: weak ISI → EOI transition.", tone: "context", cards: ["ec-ph-phases"] },
    { t: "Phases", d: "1950s–60s state-led ISI, economic nationalism. 1970s–80s oil surge, recession, martial law → FDI & state-led growth. 1980s–90s instability, regime change → deregulation & privatisation.", tone: "context", cards: ["ec-ph-phases"] },
    { row: [
      { t: "Colonial inequity", d: "Tobacco/sugar plantations of the ilustrados worked by exploited tenants → landless poor recruited by Huk, then NPA → land reform a recurring, unresolved issue.", tone: "cause", cards: ["ec-ph-colonial"] },
      { t: "Bell Act bargain", d: "Philippine Rehabilitation Act: US$620m aid for ratifying the Bell Act, giving US corporations rights to Philippine resources — criticised as ceding sovereignty.", tone: "cause", cards: ["ec-ph-colonial"] }
    ] },
    { arrow: "1950s: rapid early ISI" },
    { t: "Base: export agriculture", d: "Comparative advantage + preferential US market access. Earliest manufacturing processed export crops: sugar milling, vegetable oil, cigars.", tone: "context", cards: ["ec-ph-isi"] },
    { t: "1950s ISI measures", d: "Import controls, foreign exchange controls, tax incentive laws for new industries.", tone: "policy", cards: ["ec-ph-isi"] },
    { t: "‘Asia's second NIC after Japan’", d: "Manufacturing 8% → 20% of GDP (1950–60), agriculture 42% → 26% — unprecedented. Then stalls: manufacturing 23% (1970), 25% (1980, 1990); industry 28 → 30 → 37 → 35% (1960–90); agriculture 28 → 23 → 22% (1970–90).", tone: "good", cards: ["ec-ph-isi"] },
    { arrow: "but the classical ISI pitfall" },
    { t: "Protection bred inefficiency", d: "High tariffs/quantitative restrictions since 1950s: no pressure to be competitive.", tone: "cause", cards: ["ec-ph-isi-fail"] },
    { t: "1970s external shock", d: "Commodity price slump + protectionism abroad hit labour-intensive exports (garments, footwear, electronics).", tone: "event", cards: ["ec-ph-isi-fail"] },
    { t: "Failed transition to EOI", d: "Domestic inefficiency + external shock → no EOI transition in the 1970s, unlike Thailand a decade later.", tone: "bad", cards: ["ec-ph-isi-fail"] },
    { row: [
      { t: "Economic nationalism", d: "Garcia's ‘Filipino First’ (paralleled Sukarno). Retail Trade Nationalization Act (1954) forced Chinese out of corn/rice trade; 1958 bill: 60%+ Filipino ownership of important industries.", tone: "policy", cards: ["ec-ph-filipino-first"] },
      { t: "Nationalist result", d: "Filipino share of import trade 23% → 70% (1948–65).", tone: "mixed", cards: ["ec-ph-filipino-first"] }
    ] },
    { arrow: "equity: early land reform" },
    { t: "Huk insurgency (1945–54)", d: "Communist Hukbalahap drew support from landless poor. Magsaysay (Defence Sec., President from 1953): military action + amnesty + land settlement via Economic Development Corp → Huks defeated by 1954.", tone: "event", cards: ["ec-ph-land-early"] },
    { row: [
      { t: "Land Reform Act (1955)", d: "First law allowing seizure of private land for redistribution — enforcement blocked by ilustrado Congress.", tone: "bad", cards: ["ec-ph-land-early"] },
      { t: "Macapagal's Code (1963)", d: "Agricultural Land Reform Code created Land Bank of the Philippines — watered down/underfunded by Congress.", tone: "bad", cards: ["ec-ph-land-early"] }
    ] },
    { t: "Recurring land-reform pattern", d: "1955, 1963, 1972, 1987, Ramos: bold intent → implementation undermined by a landowner-dominated Congress, because the political elite WAS the landowning class.", tone: "verdict", cards: ["ec-ph-land-early"] }
  ],
  takeaways: [
    "The Philippines shows ISI's classic trap: rapid early gains (manufacturing 8% → 20%) but protection killed competitiveness, so it could not make the EOI transition.",
    "Economic nationalism (Filipino First, 1954 Act) parallels Sukarno's nationalisation policies.",
    "Land reform synthesis: every attempt was blocked because the political elite was the landowning class — the key equity argument across all presidencies."
  ]
});

L.push({
  id: "ec-flow-philippines-2", order: 75,
  title: "Marcos 1965–86: dependent state capitalism",
  intro: "Marcos ran growth on foreign loans, state corporations and cronies. 1970s growth looked healthy, but debt, narrow exports and the 1983 Aquino assassination exposed an over-reliance on foreign funds.",
  steps: [
    { t: "1970s recession context", d: "Sugar price collapse: 67 cents/lb (1974) → 7 cents/lb (1978) — devastating for an export-dependent economy.", tone: "context", cards: ["ec-ph-1970s"] },
    { t: "Loan-financed growth", d: "5.9% average GDP growth in the 1970s, but largely financed by international loans — a stored-up problem for the 1980s.", tone: "mixed", cards: ["ec-ph-1970s"] },
    { row: [
      { t: "FDI incentives", d: "1967 Investment Incentives Act: foreign investment + joint ventures with TNCs.", tone: "policy", cards: ["ec-ph-1970s"] },
      { t: "Aggressive borrowing", d: "From 1970s for infrastructure/development; World Bank Consultative Group advised on capital inflows.", tone: "policy", cards: ["ec-ph-1970s"] }
    ] },
    { t: "Debt explosion", d: "Foreign debt US$2.2bn (1972, martial law) → US$25bn (1983): one of 10 most indebted developing nations. Debt service >20% (1972–77), IMF danger level.", tone: "bad", cards: ["ec-ph-1970s", "ec-ph-debt"] },
    { arrow: "state & foreign capital in agri/industry" },
    { row: [
      { t: "State corporations", d: "Government corporations nearly tripled within a decade of martial law.", tone: "policy", cards: ["ec-ph-agri"] },
      { t: "IR8 Green Revolution", d: "IRRI (in Philippines) developed IR8 mid-1960s, spread across SEA and India. Rice 3.9m tons (1961) → 7.9m (1981); self-sufficiency first achieved 1972.", tone: "good", cards: ["ec-ph-agri"] }
    ] },
    { t: "Narrow export base", d: "~70% of export value (1967–71) still sugar, coconut, forestry products.", tone: "bad", cards: ["ec-ph-agri"] },
    { t: "Export restructuring", d: "Govt credit on foreign loans drove labour-intensive manufactured exports: garments value 7x in the decade (Ker); cement, textiles breakthroughs late 1970s.", tone: "good", cards: ["ec-ph-agri"] },
    { arrow: "early 1980s: crisis" },
    { t: "Domestic disunity", d: "Marcos' failing health, succession uncertainty, prominent cronies.", tone: "cause", cards: ["ec-ph-sap"] },
    { t: "Aquino Jr. assassinated (1983)", d: "Capital flight → economic/financial crisis exposing over-reliance on foreign funds; 90-day debt arrangement sought with IMF.", tone: "event", cards: ["ec-ph-sap", "ec-ph-1970s"] },
    { t: "Sector growth collapse", d: "Growth % (1960–70/1970–80/1980–93/1994): GDP 5.1 / 6.0 / 1.4 / 4.5; agriculture 4.3 / 4.0 / 1.2 / 2.9; industry 6.0 / 8.2 / -0.1 / 6.0; manufacturing 6.7 / 0.1 / 0.8 / 5.2 (Hutchison).", tone: "bad", cards: ["ec-ph-sap"] },
    { t: "Structural Adjustment Programme", d: "World Bank pressure: tariffs cut to max 50% (1981–85); manufacturing protection 44% → 29%; ~1000 items liberalised from import licensing.", tone: "policy", cards: ["ec-ph-sap"] },
    { t: "Limited impact", d: "Global slowdown and protectionism of early 1980s. Foreign debt 6.6% of GNP (early 1980s) → 49.4% (1983); US$27bn before Marcos fell (1986).", tone: "bad", cards: ["ec-ph-sap", "ec-ph-debt"] },
    { arrow: "equity: Marcos' land reform" },
    { t: "PD 27 (Oct 1972)", d: "All holdings >7 hectares liable to compulsory sale to tenants at government-set prices.", tone: "policy", cards: ["ec-ph-pd27"] },
    { t: "Dual political motive", d: "Win rural popularity AND undermine rival landowning families — Aquino family land among first seized.", tone: "cause", cards: ["ec-ph-pd27"] },
    { t: "Weak implementation", d: "Dept of Agrarian Reform poorly led/staffed; price-setting hard; Marcos' allies were landowners. Became a tool to punish opponents, not genuine equity.", tone: "bad", cards: ["ec-ph-pd27"] }
  ],
  takeaways: [
    "‘Dependent state capitalism’: 1970s growth (5.9%) rested on foreign loans — debt rose from US$2.2bn to US$25–27bn.",
    "Real gains (IR8, rice self-sufficiency, garments 7x) but a narrow export base and political shock (1983) caused the 1980s collapse.",
    "The SAP's impact was limited by the early-1980s global slowdown and protectionism; PD 27 shows land reform used for political ends."
  ]
});

L.push({
  id: "ec-flow-philippines-3", order: 76,
  title: "Aquino and Ramos 1986–98: recovery and liberalisation",
  intro: "Aquino restored democracy but was crippled by Marcos-era debt and external shocks; Ramos' ‘Philippines 2000’ liberalised and privatised, delivering a real turnaround — though elites still captured much of the gain.",
  steps: [
    { t: "Aquino's agenda (1987–92)", d: "“honor the country's financial obligations, dismantle import controls and monopolies that protected crony enterprises, and initiate trade reform” (Abinales & Amoroso).", tone: "policy", cards: ["ec-ph-aquino"] },
    { t: "Early gains", d: "Foreign investment quadrupled; export value doubled. Growth 6.7% (1988), 5.5% (1989).", tone: "good", cards: ["ec-ph-aquino"] },
    { arrow: "but crippled by" },
    { row: [
      { t: "Marcos-era legacy", d: "Structural problems and debt: repayment ate 10% of GDP a year — the “foreign debt hemorrhage” (De Dios & Hutchcroft).", tone: "cause", cards: ["ec-ph-aquino", "ec-ph-debt"] },
      { t: "Multiple shocks", d: "Gulf War (1990–91) doubled oil import costs; US base closures (1991) cost 70,000 jobs; remittances lost from 65,000 Gulf workers; 1990 Luzon quake, 1990 typhoon, 1991 Mt Pinatubo.", tone: "cause", cards: ["ec-ph-aquino"] }
    ] },
    { t: "Slow recovery", d: "Growth below 3% (1990–91). Poverty fell only ~3%; richest 10% held 40% of income vs poorest 30% with 10%. Democracy welcome but “ability to foster economic prosperity was found wanting”.", tone: "bad", cards: ["ec-ph-aquino"] },
    { t: "Aquino's CARP", d: "NEDA: land reform now also a growth need (redistribution → consumption). Aquino delayed CARP, left details to landowner Congress → weak, loophole-ridden law.", tone: "bad", cards: ["ec-ph-carp"] },
    { t: "Why CARP was weak", d: "Cabinet increasingly dominated by ilustrado-linked business; Aquino herself from one of the wealthiest landowning families.", tone: "cause", cards: ["ec-ph-carp"] },
    { arrow: "1992–98: Ramos' ‘Philippines 2000’ (NIC by 2000)" },
    { row: [
      { t: "Trade liberalisation", d: "Lower tariffs; lifted quantitative controls on hundreds of goods; removed capital controls; energy opened to foreign ownership.", tone: "policy", cards: ["ec-ph-ramos"] },
      { t: "Privatisation & monopolies", d: "Accelerated privatisation (efficiency); breakup of monopolies in major sectors.", tone: "policy", cards: ["ec-ph-ramos"] },
      { t: "100% foreign ownership", d: "Granted to attract capital.", tone: "policy", cards: ["ec-ph-ramos"] }
    ] },
    { t: "Liberalisation results", d: "Special economic zones (e.g. ex-Subic Bay base) → electronics became dominant export. FDI peaked 1994; growth improved across all sectors, but still slower than SEA peers.", tone: "good", cards: ["ec-ph-ramos"] },
    { t: "Privatisation: mixed", d: "As in Indonesia, new openings for existing elites/cronies (e.g. Lucio Tan bought Philippine Airlines). But $12bn revenue helped balance the budget.", tone: "mixed", cards: ["ec-ph-ramos", "ec-ph-telecom"] },
    { t: "Case study: telecoms", d: "1992: Cojuangco PLDT held 90% of 1 million lines. 1993: 13 entrants, but PLDT stayed ahead; Ayala, Lopez, Gokongwei dominate a more competitive market.", tone: "mixed", cards: ["ec-ph-telecom"] },
    { t: "Ramos' land reform", d: "By 1998: 4.6m of targeted 8.1m hectares distributed — genuine acceleration, still incomplete and underfunded.", tone: "mixed", cards: ["ec-ph-ramos"] }
  ],
  takeaways: [
    "Aquino shows democracy alone did not bring prosperity: Marcos debt (10% of GDP in repayments) and shocks crippled recovery.",
    "Ramos' liberalisation was a real turnaround (SEZs, electronics, FDI peak 1994), but privatisation largely reshuffled wealth among elites.",
    "Land reform (CARP, Ramos) again limited by landowner interests — fits the recurring pattern."
  ]
});

L.push({
  id: "ec-flow-philippines-4", order: 77,
  title: "Evaluating the Philippines: cronies, debt, sound banks",
  intro: "A narrow export base, crony capitalism and debt explain Philippine under-performance — yet conservative, US-style banking left it far less exposed in the 1997 crisis. The state was dominant; the Chinese were first targeted, then co-opted.",
  steps: [
    { t: "Export concentration ROSE", d: "Top 3 exports: coconut oil, fruit & nuts, electronics (1985) → electronics/semiconductors, data processing, telecoms (2000). Top-3 share 27.4% → 64.7% — opposite of Thailand and Indonesia. Diversification real, but concentration higher than Indonesia's: a narrower base.", tone: "bad", cards: ["ec-ph-quant"] },
    { t: "Stagnant industry", d: "Industrial GDP share 37% → 35% since 1980s (agriculture 23% → 22%) — unlike Thailand's continued industrial deepening.", tone: "bad", cards: ["ec-ph-quant"] },
    { arrow: "why? crony capitalism" },
    { row: [
      { t: "Benedicto & sugar", d: "Marcos' friend headed Philippine Sugar Commission; early-1980s world price rises not passed to growers.", tone: "bad", cards: ["crony"] },
      { t: "Lucio Tan's tobacco", d: "Fortune Tobacco became largest cigarette maker via Palace tax/customs/financing favours; allegedly gave Marcos equity, wrote own tax code, printed own tax stamps.", tone: "bad", cards: ["crony"] },
      { t: "PLDT telecoms", d: "Cojuangco dominance persisted despite Ramos deregulation.", tone: "bad", cards: ["crony"] }
    ] },
    { t: "Bailout culture", d: "Govt absorbed 14bn pesos on Benedicto's unsold sugar, 15bn pesos loans to Marinduque Mining, 2bn to Delta Motors — failure socialised, so no incentive to be efficient.", tone: "bad", cards: ["crony"] },
    { t: "Hutchison quote", d: "Substituting political for economic criteria in allocation is “antithetical to…an internationally competitive economy”.", tone: "verdict", cards: ["crony"] },
    { t: "Burden of external debt", d: "Loans spent on bankrupt entities and non-income-generating structures (“monuments, government buildings and bridges of love”). Repayment 10% of GDP a year under Aquino.", tone: "bad", cards: ["ec-ph-debt"] },
    { arrow: "BUT the key distinctive point" },
    { t: "Sound financial system", d: "Explains why it escaped the worst of 1997 despite weaker growth. Delhaise: some of Asia's best bank managers; US-modelled accounting above most Asian norms.", tone: "good", cards: ["ec-ph-banks"] },
    { t: "1996 bank leverage (times)", d: "Philippines 6.90 (lowest = healthiest), Singapore 7.55, Thailand 10.91, Indonesia private banks 12.73, Malaysia 14.23.", tone: "good", cards: ["ec-ph-banks"] },
    { t: "Lower exposure", d: "Short-term loans <20% of foreign debt (vs >50% Thailand/Indonesia/Malaysia). NPLs 3% vs Thailand 8%, Malaysia 5.3%.", tone: "good", cards: ["ec-ph-banks"] },
    { row: [
      { t: "US ties & education", d: "Western-modelled accounting/training; US-style education produced skilled managers.", tone: "cause", cards: ["ec-ph-banks"] },
      { t: "Prior crises forced reform", d: "1970, 1984–85, 1990–91 BoP crises → capital adequacy rules, DOSRI lending curbs, June 1997 caps (real estate ≤20% of loans; ≤60% loan-to-value).", tone: "cause", cards: ["ec-ph-banks"] },
      { t: "BSP conservatism", d: "Only ~5 new banks post-1980s vs 100+ in Indonesia post-1988: less explosive, less risky.", tone: "cause", cards: ["ec-ph-delhaise"] }
    ] },
    { t: "Sensible crisis response", d: "Central bank did not spend reserves defending the peso; floated it 9 days after Thailand floated the baht (11 July 1997).", tone: "good", cards: ["ec-ph-delhaise"] },
    { t: "Delhaise & Montes verdict", d: "“missed the benefits of explosive growth, it also avoided the excesses.” Montes: governance not good enough for faster growth, but good enough to prevent large policy errors.", tone: "verdict", cards: ["ec-ph-delhaise"] },
    { arrow: "role of the government" },
    { t: "Central planning", d: "Macapagal: Program Implementation Agency (early 1960s decontrols). Marcos: super-agencies (Planning, Programming, Budgeting System; Development Budget Coordinating Committee).", tone: "policy", cards: ["ec-ph-govt"] },
    { t: "State participation", d: "Public enterprises 300+. NEDA (chaired by Marcos); National Development Co. (Sugar Institute 1951, Waterworks 1955); PCCI (12 export groups). By 1970s: PNOC, NPC, Fertilizer Corp, PNB, DBP.", tone: "policy", cards: ["ec-ph-govt"] },
    { arrow: "role of the Chinese-Filipinos" },
    { t: "Small but powerful", d: "1.3% of population, 50–60% of listed firms — smallest share in SEA table (cf. Indonesia 3.8%/73%). Interests in 4 large private banks, textiles, food, real estate, manufacturing.", tone: "context", cards: ["ec-ph-chinese"] },
    { split: [
      { h: "Garcia (1950s)", steps: [
        { t: "Discrimination", d: "‘Filipino First’ began blatant discrimination, paired with state-led ISI.", tone: "bad", cards: ["ec-ph-chinese", "ec-ph-filipino-first"] }
      ] },
      { h: "Marcos (martial law)", steps: [
        { t: "Reversal: allies", d: "Saw Chinese-Filipinos as valuable allies; state credit and joint ventures (e.g. Lucio Tan's rise).", tone: "mixed", cards: ["ec-ph-chinese"] }
      ] }
    ] },
    { t: "Backlash in the 1990s", d: "Robberies/kidnappings of Chinese-Filipinos: 179–286 victims/yr (1993–97); ransoms $2.5m → $10.4m a year — reaction to visible crony-enabled wealth.", tone: "bad", cards: ["ec-ph-chinese"] },
    { t: "Overall verdict", d: "Failed to realise potential: weak ISI → EOI transition, cronyism and debt. But governance sound enough to avoid the AFC's worst excesses.", tone: "verdict", cards: ["philfailure", "ec-ph-delhaise"] }
  ],
  takeaways: [
    "Under-performance: export concentration rose (27.4% → 64.7%), industry stagnated, and cronies (Benedicto, Lucio Tan, PLDT) were bailed out at public cost.",
    "Debt from unproductive projects left a ‘foreign debt hemorrhage’ for Aquino.",
    "Most exam-relevant contrast: lowest bank leverage (6.90), <20% short-term debt, 3% NPLs → avoided the excesses of 1997 (Delhaise, Montes).",
    "Ethnic Chinese: discriminated against under Garcia, co-opted under Marcos, then targeted by 1990s backlash."
  ]
});
})();
