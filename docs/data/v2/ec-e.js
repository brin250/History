// v2 flow charts: Indonesia (ec-flow-indonesia-1..4, 4b) and the Philippines (ec-flow-philippines-1..4, 4b)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ec = window.FLOWS2.ec || []);

/* ───────────────────────── INDONESIA ───────────────────────── */

L.push({
  id: "ec-flow-indonesia-1",
  order: 70, level: 3, parent: "ec-country-id",
  kind: "causal",
  title: "Indonesia 1949–65: weak foundations to Guided Economy collapse",
  question: "Why did Sukarno's Guided Economy end in economic disaster by the mid-1960s?",
  intro: "A weak colonial inheritance made the state dominant out of necessity; Sukarno's nationalism and heavy-industry ISI then collapsed into hyper-inflation and falling GNP per capita.",
  clusters: [
    { title: "Big picture and weak foundation", summary: "Indonesia's long-run record, and the weak base it started from.",
      steps: [
        { row: [
          { id: "id1-record", type: "context", t: "Indonesia's long-run growth record", date: "1961–2001",
            d: "Average 5.7% a year GDP growth: 4.2 / 7.9 / 6.4 / 4.3% by decade; fastest in the 1970s oil boom.",
            ev: ["Statistically successful, but “cronyism and the lack of transparency limited the economic success of development strategies by the end of the 1990s.”"],
            cards: ["ec-id-overview"] },
          { id: "id1-phases", type: "context", t: "Three phases of development",
            d: "1949–65 revolution/crisis → Guided Economy. 1970s oil surge → FDI and state-led growth. 1980s–90s oil crash → deregulation.",
            ev: ["1949–65 strategy: Guided Economy — nationalisation, import substitution.",
                 "1970s strategy: foreign investment & state-led growth (agriculture, aid, state ISI corporations, infrastructure).",
                 "1980s–90s strategy: deregulation — financial reform, private sector development."],
            cards: ["ec-id-overview"] }
        ] },
        { link: "followed by", how: "The first phase began from a badly damaged post-independence base, 1949–57." },
        { id: "id1-weak", type: "long_term_cause", t: "A weak foundation", date: "1949–57",
          d: "High mortality, food shortages, destroyed physical capital; colonial agrarian economy dominated by Dutch and Chinese capital; no domestic bourgeoisie.",
          ev: ["No domestic bourgeoisie existed to fill the vacuum left by Dutch and Chinese capital."],
          cards: ["ec-id-weak"] },
        { link: "led to", how: "With no alternative capable class to fill the vacuum, the state became pre-eminent out of necessity." },
        { id: "id1-state", type: "consequence", sign: "±", t: "State pre-eminence out of necessity",
          d: "Not ideology: no alternative capable class. Still ~2% per capita GNP growth most years before Sukarno's 1957 Guided Democracy.",
          cards: ["ec-id-weak"] }
      ] },
    { link: "led to", how: "From 1957 Sukarno's answer to the weak, foreign-dominated economy was nationalism (Tarling, p.161).",
      title: "The Guided Economy", summary: "Nationalisation, heavy-industry ISI and anti-‘neo-colonial’ confrontation.",
      steps: [
        { row: [
          { id: "id1-expropriate", type: "policy", t: "Expropriation of Dutch property", date: "1957",
            d: "~300 Dutch plantations and 300 firms (mining, trade, finance, utilities) nationalised in 1957; discrimination against the Chinese.",
            cards: ["ec-id-guided"] },
          { id: "id1-isi", type: "policy", t: "Heavy-industry ISI",
            d: "Earn forex from oil/minerals/gas/agri exports → invest in steel, shipyards; state credit and import protection for infant industries.",
            cards: ["ec-id-guided"] }
        ] },
        { link: "led to", how: "Tarling: nationalism came with a rhetorical barrage against ‘neo-colonialism’ that culminated in confrontations." },
        { id: "id1-confront", type: "event", t: "Anti-‘neo-colonial’ confrontations",
          d: "Rhetoric against ‘neo-colonialism’ culminated in ‘confrontations’ over Irian Jaya and Malaysia (Tarling, p.161).",
          cards: ["ec-id-guided"] }
      ] },
    { link: "undermined", how: "The Guided Economy was undermined by inexperienced management, unfunded spending, costly military adventures and rejected Western aid.",
      title: "Why it failed", summary: "Four weaknesses drained and mismanaged the state-led economy.",
      steps: [
        { row: [
          { id: "id1-mgmt", type: "long_term_cause", t: "Inexperienced Nasakom management",
            d: "Dutch managers replaced by ex-military and civil servants with little managerial experience; foreign expertise rejected.",
            cards: ["ec-id-guided"] },
          { id: "id1-plan", type: "short_term_cause", t: "Unfunded 8-year plan", date: "1959",
            d: "12-fold rise in project spending with no clear financing → central bank credit = half of government spending by mid-1960s → big deficits.",
            cards: ["ec-id-sukarno-collapse"] },
          { id: "id1-military", type: "short_term_cause", t: "Costly military adventures", date: "1961–66",
            d: "Seizure of West Irian (1961–62) and Konfrontasi with Malaysia (1963–66): a patriotic distraction that drained finances.",
            cards: ["ec-id-sukarno-collapse"] },
          { id: "id1-aid", type: "short_term_cause", t: "Rejected Western aid", date: "1964",
            d: "Told the US ambassador to ‘go to hell with your aid’; styled himself NAM leader; Soviet-bloc aid cooled by 1964 and was insufficient.",
            ev: ["Communist-bloc aid: USSR ~$1bn military + $215m economic aid; Eastern Europe $290m; 9,200 Indonesian soldiers Soviet-trained.",
                 "This aid cooled by 1964 amid the Sino-Soviet split, and was insufficient regardless."],
            cards: ["ec-id-sukarno-collapse"] }
        ] }
      ] },
    { link: "led to", how: "Together these failures produced results that were, in Tarling's words, “disastrous” by the mid-1960s.",
      title: "Economic disaster", summary: "Hyper-inflation, collapsing trade and falling GNP per capita.",
      steps: [
        { row: [
          { id: "id1-hyper", type: "consequence", sign: "-", t: "Hyper-inflation over 2000%", date: "mid-1960s",
            d: "Industrial production plummeted; hyper-inflation over 2000% a year by the mid-1960s; GNP per capita declined 1957–65 (Tarling, p.161).",
            cards: ["ec-id-sukarno-collapse"] },
          { id: "id1-trade", type: "consequence", sign: "-", t: "Trade and reserves collapsed", date: "1959–67",
            d: "Trade collapsed: exports US$931m (1959) → US$685m (1966); forex reserves US$313m → US$17m (1960–67).",
            cards: ["ec-id-sukarno-collapse"] }
        ] }
      ] }
  ],
  judge: { prompt: "Which factor mattered most in the failure of the Guided Economy? Rank them.",
           factors: ["id1-mgmt", "id1-plan", "id1-military", "id1-aid"],
           notes_view: "The notes say ISI failed first due to the inexperience and inefficiency of the Nasakom government, worsened by unfunded spending, costly military adventures and insufficient aid." },
  historians: [
    { who: "Tarling", view: "Sukarno's answer was nationalism; the economic results were disastrous and GNP per capita declined 1957–65.", nodes: ["id1-expropriate", "id1-confront", "id1-hyper"] }
  ],
  takeaways: [
    "State dominance in Indonesia began out of necessity (no domestic bourgeoisie; Chinese politically excluded), not ideology.",
    "Guided Economy shows ISI + economic nationalism failing when run by inexperienced managers, financed by central-bank credit and drained by Konfrontasi.",
    "Rejection of Western aid left Indonesia reliant on insufficient Communist-bloc aid — the New Order reversed this, shifting to Japan and the West."
  ]
});

L.push({
  id: "ec-flow-indonesia-2",
  order: 71, level: 3, parent: "ec-country-id",
  kind: "chain",
  title: "New Order 1966–86: aid, oil boom and state-led growth",
  question: "How did Suharto's New Order generate growth in 1966–86, and what risks did state-led growth carry?",
  intro: "Suharto reopened Indonesia to Western aid and FDI, then used the 1970s oil windfall for state-led growth — while the Pertamina affair exposed the risks.",
  clusters: [
    { title: "Suharto's starting point", summary: "A wrecked economy and a regime that needed growth.",
      steps: [
        { id: "id2-inherit", type: "context", t: "Suharto's inheritance", date: "1966",
          d: "Sky-high inflation and unemployment, flagrant corruption, inefficient state industries, empty forex reserves, alienated neighbours still in Konfrontasi.",
          cards: ["ec-id-neworder"] },
        { link: "led to", how: "Facing this collapse, Suharto based his regime's political legitimacy on economic development." },
        { id: "id2-legit", type: "short_term_cause", t: "Legitimacy rests on development",
          d: "Fixing the economy was existential for Suharto's rule.",
          cards: ["ec-id-neworder"] }
      ] },
    { link: "led to", how: "Needing growth, Suharto courted Western aid and investment through technocrats, guarantees and an anti-communist foreign policy.",
      title: "Courting the West", summary: "Technocrats, investor guarantees and a foreign-policy reset brought aid.",
      steps: [
        { row: [
          { id: "id2-berkeley", type: "actor", t: "Berkeley Mafia",
            d: "US-trained Indonesian technocrats acted as chief mediators with the West.",
            cards: ["ec-id-neworder"] },
          { id: "id2-guarantee", type: "policy", t: "Investor guarantees", date: "1967",
            d: "Returned expropriated Dutch/other assets; 1967 Foreign Investment Law gave tax concessions and a guarantee against expropriation.",
            cards: ["ec-id-neworder"] },
          { id: "id2-konfrontasi", type: "policy", t: "Konfrontasi ended", date: "1966",
            d: "Ending Konfrontasi (1966) and an anti-communist stance made Indonesia attractive to the West in the Cold War.",
            cards: ["ec-id-neworder"] },
          { id: "id2-asean", type: "event", t: "ASEAN formed", date: "8 Aug 1967",
            d: "Indonesia, Thailand, Malaysia, Singapore and the Philippines formed ASEAN: common anti-communist stance plus economic cooperation.",
            cards: ["ec-id-neworder"] }
        ] },
        { link: "enabled", how: "Technocratic mediation, investor guarantees and anti-communism shifted aid from the USSR to Japan and the West." },
        { id: "id2-aidshift", type: "consequence", sign: "+", t: "Aid shift to Japan, West", date: "1967",
          d: "Pre-1965 aid came from the USSR/communist states; 1967 IGGI (14 nations) became the major aid funnel ($2.5bn estimated for 1985/86).",
          ev: ["IMF played a central advisory role in financial reorganisation through the 1970s/early 1980s."],
          cards: ["ec-id-neworder"] }
      ] },
    { link: "followed by", how: "Then Indonesia, and Suharto, were “lucky”: the 1970s oil surge made oil “a pot of gold” (Vatikiotis).",
      title: "The 1970s oil windfall", summary: "Oil revenue funded a state-led strategy.",
      steps: [
        { id: "id2-oil", type: "event", t: "Oil boom: ‘pot of gold’", date: "1970s",
          d: "Oil <US$3/barrel (1972) → >US$30 (1980); oil export revenue grew 45.5% (1970–81). GDP growth 7–8%/yr; per capita income US$260 → US$500+.",
          ev: ["“Indonesia, not to mention Suharto, was also lucky…one of Indonesia's traditional commodities suddenly became almost literally a pot of gold” (Vatikiotis, pp.34–35)."],
          cards: ["ec-id-oil"] },
        { link: "enabled", how: "The oil windfall funded state-led infrastructure, agriculture and state ISI corporations." },
        { row: [
          { id: "id2-infra", type: "policy", t: "State infrastructure",
            d: "Housing, health, education; food self-sufficiency programme. Bulog handled rice procurement/distribution/pricing; Sekneg allocated construction contracts.",
            cards: ["ec-id-agri"] },
          { id: "id2-green", type: "consequence", sign: "+", t: "Green Revolution rice success",
            d: "Bimas gave credit and new seeds: rice 12m tons (1968) → 29m (1989); self-sufficient by mid-1980s after being a major 1970s importer.",
            ev: ["Yields rose from 2.14 to 4.23 tons/ha.", "Self-sufficiency was a political stability concern, not just economic."],
            cards: ["ec-id-agri"] },
          { id: "id2-stateisi", type: "policy", t: "State ISI corporations",
            d: "Pertamina and the Dept of Industry invested in petrochemicals, steel, cement, forestry. 1975: state firms made 75% of cement.",
            ev: ["1975: state firms produced 75% of cement, 52% of paper products & machinery, 40% of food manufacturing."],
            cards: ["ec-id-stateisi"] }
        ] }
      ] },
    { link: "led to", how: "Pertamina, the leading state corporation, used the windfall era to borrow lavishly with few checks.",
      title: "Risks: the Pertamina affair", summary: "Unchecked state borrowing and lasting oil dependence.",
      steps: [
        { id: "id2-pertamina", type: "event", t: "Pertamina's debt-funded projects", date: "1973–74",
          d: "Ibnu Sutowo launched LNG/fertiliser/steel projects on lavish foreign borrowing with few checks, assuming post-1973 oil prices would stay high.",
          cards: ["pertamina"] },
        { link: "led to", how: "When oil prices stabilised in March 1974, the borrowing backfired and the debt was exposed." },
        { id: "id2-debt", type: "consequence", sign: "-", t: "US$10bn debt revealed", date: "Nov 1974",
          d: "About 2/3 of Indonesia's GNP owed to creditors. Sutowo forced to resign (1976); severely damaged credibility with foreign creditors.",
          cards: ["pertamina"] },
        { link: "followed by", how: "Entering the 1980s, Indonesia still depended heavily on oil exports." },
        { id: "id2-oildep", type: "consequence", sign: "±", t: "Oil dependence persisted", date: "1980s",
          d: "Indonesia remained heavily reliant on oil exports entering the 1980s — diversification was still shallow.",
          cards: ["ec-id-stateisi", "ec-id-limits"] }
      ] }
  ],
  judge: { prompt: "Which factor mattered most for New Order growth in 1966–86? Rank them.",
           factors: ["id2-berkeley", "id2-guarantee", "id2-aidshift", "id2-oil", "id2-green", "id2-stateisi"],
           notes_view: "The notes stress that Indonesia was ‘lucky’: growth was driven heavily by the 1970s oil windfall rather than industrial transformation, making it less structurally robust than it first appears." },
  historians: [
    { who: "Vatikiotis", view: "Indonesia and Suharto were ‘lucky’: oil became ‘a pot of gold’, oil export revenue rising 45.5% (1970–81).", nodes: ["id2-oil"] }
  ],
  takeaways: [
    "Growth rested on external props: Western aid (IGGI, IMF), FDI guarantees and the oil windfall — Indonesia was ‘lucky’ (Vatikiotis).",
    "The state, not the market, drove 1970s growth (Bulog, Bimas, Pertamina, state ISI firms); rice self-sufficiency was a real success.",
    "Pertamina shows state-led growth without transparency: unchecked borrowing left US$10bn of debt (~2/3 of GNP) and hurt creditor confidence.",
    "Oil dependence meant diversification was shallow — setting up the 1980s crisis."
  ]
});

L.push({
  id: "ec-flow-indonesia-3",
  order: 72, level: 3, parent: "ec-country-id",
  kind: "evaluation",
  title: "Indonesia 1986–1990s: oil glut, deregulation and cronyism",
  question: "Did Indonesia's deregulation after the oil glut genuinely diversify the economy, or did it entrench cronyism?",
  intro: "The oil glut forced deregulation, FDI and EOI. Statistically the economy diversified, but in reality Chinese-Indonesian conglomerates and the Suharto circle captured the gains.",
  clusters: [
    { title: "The oil glut shock", summary: "Collapsing oil prices halved growth.",
      steps: [
        { id: "id3-glut", type: "trigger", t: "Global oil glut", date: "early 1980s",
          d: "Demand slowdown, energy conservation, rising US domestic output: oil prices fell to under half the 1981 peak in 1982–86.",
          cards: ["ec-id-glut"] },
        { link: "led to", how: "Falling oil prices cut Indonesia's oil tax revenue, its fiscal mainstay." },
        { id: "id3-fiscal", type: "consequence", sign: "-", t: "Fiscal shock", date: "1982–85",
          d: "27% plunge in oil tax revenue → growth rate halved by 1985.",
          cards: ["ec-id-glut"] }
      ] },
    { link: "provoked response", how: "The revenue shock pushed the regime into a three-part strategy of deregulation, FDI and EOI.",
      title: "Three-part response", summary: "Deregulation, FDI and export orientation, with financial reform.",
      steps: [
        { row: [
          { id: "id3-dereg", type: "policy", t: "Deregulation",
            d: "Private sector development.", cards: ["ec-id-glut"] },
          { id: "id3-infra", type: "policy", t: "Infrastructure to attract FDI",
            d: "Infrastructure development and foreign investment.", cards: ["ec-id-repelita"] },
          { id: "id3-eoi", type: "policy", t: "Transition to EOI",
            d: "Export-oriented industrialisation.", cards: ["ec-id-repelita"] }
        ] },
        { link: "led to", how: "Deregulation was carried out through the 1985 reforms and the radical October 1988 banking package." },
        { row: [
          { id: "id3-1985", type: "policy", t: "1985 reforms", date: "1985",
            d: "Simplified licensing procedures; new investment incentives and tax concessions.", cards: ["ec-id-glut"] },
          { id: "id3-1988", type: "policy", t: "October 1988 banking package", date: "Oct 1988",
            d: "Radical banking restructuring: loosened rules for private (national and foreign) banks; 40+ new private bank licences within 2 years.",
            cards: ["ec-id-glut"] }
        ] }
      ] },
    { link: "led to", how: "Deregulation and infrastructure drew foreign investment while the Five Year Plans pivoted to industry.",
      title: "FDI and the industrial pivot", summary: "Foreign investment surged as plans prioritised industry.",
      steps: [
        { row: [
          { id: "id3-fdi", type: "consequence", sign: "+", t: "FDI rose six-fold", date: "1980–90",
            d: "FDI increased six-fold, 1980–90 (Rigg, p.7).", cards: ["ec-id-repelita"] },
          { id: "id3-repelita", type: "policy", t: "Repelita pivot to industry", date: "1979–94",
            d: "Repelita III (1979–84) prioritised agriculture (14.0%); Repelita IV (1984–89) and V (1989–94) prioritised industry (9.5%, 8.5%).",
            ev: ["Under Repelita IV and V agriculture targets fell to 3.0% and 3.6% — a clear policy pivot."],
            cards: ["ec-id-repelita"] }
        ] }
      ] },
    { link: "led to", how: "On the statistics, the reforms diversified exports and output and restored growth.",
      title: "Statistical success", summary: "Exports, output structure and growth all improved.",
      steps: [
        { row: [
          { id: "id3-nonoil", type: "evidence", t: "Non-oil exports rose",
            d: "Non-oil exports rose from 31% to 50% of total exports in the decade.", cards: ["ec-id-dereg-reality"] },
          { id: "id3-struct", type: "evidence", t: "Structural shift to manufacturing",
            d: "Manufacturing 13% → 18% of GDP; agriculture 24% → 19%.", cards: ["ec-id-dereg-reality"] },
          { id: "id3-recover", type: "evidence", t: "Growth recovered", date: "1982–90",
            d: "GDP growth 2% (1982 trough) → 7% (1990); manufactured exports <US$1bn (1982) → >US$9bn (1990).", cards: ["ec-id-dereg-reality"] }
        ] }
      ] },
    { link: "contradicts", how: "Vatikiotis: deregulation “simply opened up new areas of expansion for the larger business groups”, not genuine competition.",
      title: "Reality: concentration", summary: "Conglomerates, not new competitors, captured the gains.",
      steps: [
        { id: "id3-vatikiotis", type: "interpretation", t: "Expansion for big business groups",
          d: "Vatikiotis: deregulation “simply opened up new areas of expansion for the larger business groups” (p.44).", cards: ["ec-id-dereg-reality"] },
        { link: "supports", how: "Economic power concentrated in a few Sino-Indonesian conglomerates, as Vatikiotis argues." },
        { row: [
          { id: "id3-conglom", type: "evidence", t: "Sino-Indonesian conglomerates",
            d: "Liem Sioe Leong, Soerjadjaja (Astra), Widjaja (Sinar Mas).", cards: ["ec-id-dereg-reality"] },
          { id: "id3-auto", type: "evidence", t: "Auto industry concentration", date: "mid-1990s",
            d: "Astra 40%, Liem's Indomobil 21% of production — control merely transferred from military/officials to Chinese conglomerates.", cards: ["ec-id-dereg-reality"] }
        ] }
      ] },
    { link: "followed by", how: "Liberalisation itself stayed limited, as Suharto balanced growth against economic nationalism.",
      title: "Verdict", summary: "Diversification real, but state and corporate power reinforced.",
      steps: [
        { id: "id3-limits", type: "consequence", sign: "±", t: "Limits on liberalisation",
          d: "Timber export ban kept; ‘strategic industries’ (military production, transport, mechanics, electronics) shielded from privatisation — balancing growth with economic nationalism.",
          cards: ["ec-id-dereg-reality"] },
        { link: "supports", how: "Shielded sectors and conglomerate gains show deregulation reinforced rather than undermined state and corporate power." },
        { id: "id3-verdict", type: "judgement", t: "Diversified, yet power concentrated",
          d: "Deregulation diversified exports and output, but reinforced rather than undermined state power and corporate concentration (Rodan, Hewison & Robison).",
          cards: ["ec-id-dereg-reality", "ec-id-monopolies"] }
      ] }
  ],
  judge: { prompt: "Was 1980s deregulation mainly diversification or cronyism? Rank the evidence by weight.",
           factors: ["id3-nonoil", "id3-struct", "id3-recover", "id3-conglom", "id3-auto", "id3-limits"],
           notes_view: "“Paradoxically, deregulation has appeared to reinforce rather than undermine the importance of state power in determining markets and the concentration of corporate power” (Rodan, Hewison & Robison)." },
  historians: [
    { who: "Vatikiotis", view: "Deregulation simply opened new areas of expansion for the larger business groups.", nodes: ["id3-vatikiotis"] },
    { who: "Rigg", view: "FDI increased six-fold, 1980–90.", nodes: ["id3-fdi"] },
    { who: "Rodan, Hewison & Robison", view: "Deregulation paradoxically reinforced state power and the concentration of corporate power.", nodes: ["id3-verdict"] }
  ],
  takeaways: [
    "External shock (oil glut) drove Indonesia's turn to deregulation, FDI and EOI.",
    "Use the statistics (non-oil exports 31% → 50%, manufactured exports <$1bn → >$9bn) for ‘successful strategy’ arguments.",
    "Counter with Vatikiotis: liberalisation fed conglomerates (Astra, Liem) and stayed limited by economic nationalism."
  ]
});

L.push({
  id: "ec-flow-indonesia-4",
  order: 73, level: 3, parent: "ec-country-id",
  kind: "evaluation",
  title: "Evaluating Indonesia: growth versus its limitations",
  question: "How successful were Indonesia's development strategies, and what limited them?",
  intro: "Growth indicators were impressive, but crony monopolies, inequality, shallow diversification, debt and weak bank regulation limited Indonesia's success by the end of the 1990s.",
  clusters: [
    { title: "Rapid growth: indicators", summary: "Inflation, living standards, structure and exports all improved.",
      steps: [
        { row: [
          { id: "id4-inflation", type: "evidence", t: "Inflation tamed",
            d: "Inflation fell from several thousand % (Sukarno era) to under 10% (1980s).", cards: ["ec-id-growth"] },
          { id: "id4-living", type: "evidence", t: "Living standards rose",
            d: "Poverty 60% (1970) → 17% (1987) → 11% (1997); life expectancy 50 (1980) → 60 (1990).", cards: ["ec-id-growth"] },
          { id: "id4-middle", type: "evidence", t: "Self-confident middle class", date: "1970s",
            d: "A new self-confident middle class was visible by the 1970s (car/TV/fridge ownership, education investment).", cards: ["ec-id-growth"] },
          { id: "id4-structure", type: "evidence", t: "Structural change",
            d: "Agriculture % of GDP 51 (1965) → 24 (1980) → 16 (1996); industry 13 → 42 → 43; services 36 → 34 → 41.", cards: ["ec-id-growth"] },
          { id: "id4-exports", type: "evidence", t: "Export diversification", date: "1985–2000",
            d: "Top-3 exports' share 69.3% → 30.2%; primary commodities 70–80% (1980s) → 42.9% (2000).",
            ev: ["Top 3 exports: petroleum, veneer & plywood, rubber (1985) → petroleum, garments, telecoms equipment (2000)."],
            cards: ["ec-id-growth"] }
        ] }
      ] },
    { link: "contradicts", how: "Behind the indicators, crony monopolies channelled gains to Liem and the Suharto family.",
      title: "Limits: crony monopolies", summary: "Monopolies raised costs and concentrated wealth.",
      steps: [
        { row: [
          { id: "id4-liem", type: "evidence", t: "Liem-linked monopolies", date: "1969–84",
            d: "Bogasari flour (1969: govt, Liem, Suharto's step-brother). Krakatau Steel (1984): Liem's $800m bought a cold-rolled steel import monopoly.",
            ev: ["World Bank: the Krakatau import monopoly added 25–45% to domestic steel sheet costs."],
            cards: ["ec-id-monopolies"] },
          { id: "id4-family", type: "evidence", t: "Suharto family monopolies", date: "1986–90",
            d: "Panca Holding plastics earned $30m on $320m imports (1986), adding 15–20% to costs; soymeal and clove monopolies followed.",
            ev: ["Panca Holding: plastics import monopoly with Suharto's son & brother on the board.",
                 "Soymeal monopoly (1988, Tommy Suharto & Bob Hasan); clove monopoly (1990, Tommy Suharto, financed by $350m diverted from agricultural-producer reserves).",
                 "Madam ‘Tien Percent’: Suharto's wife allegedly took a 10% cut of major government transactions."],
            cards: ["ec-id-monopolies"] }
        ] },
        { link: "supports", how: "These deals underpin historians' view that the New Order concentrated wealth and power around the state." },
        { row: [
          { id: "id4-concentration", type: "interpretation", t: "Historians: wealth concentrated",
            d: "Morley: huge increase in Suharto family wealth since 1986. Rodan et al.: deregulation reinforced state power. Robison: state-sponsored private business groups grew.",
            ev: ["Morley (p.134): “the huge increase in wealth and privileged business opportunities accruing to members of the Suharto family”.",
                 "Robison (p.316): “the growth of state-sponsored private business groups”."],
            cards: ["ec-id-monopolies", "ec-id-robison"] },
          { id: "id4-bureaucratic", type: "interpretation", t: "Robison's ‘bureaucratic capitalism’",
            d: "Officials (especially military) treated offices as personal fiefs like pre-colonial Javanese rulers; big firms built by the state, ethnic Chinese, or both.",
            ev: ["Because Indonesia lacked an indigenous entrepreneurial class, large enterprises were built by the state, by ethnic Chinese capitalists, or by cooperation between the two."],
            cards: ["ec-id-robison"] }
        ] }
      ] },
    { link: "followed by", how: "A further limitation: growth widened urban–rural and regional inequality.",
      title: "Limits: inequality", summary: "Widening gaps provoked riots and failed resettlement.",
      steps: [
        { split: [
          { h: "Urban–rural", steps: [
            { id: "id4-urban", type: "consequence", sign: "-", t: "Urban–rural income gap", date: "1970–93",
              d: "Urban incomes 42% above rural (1970) → 92% (1993); 205% higher in Jakarta.", cards: ["ec-id-inequality"] },
            { link: "provoked response", how: "Resentment of bureaucratic capitalists and their Chinese (cukong) associates erupted during Tanaka's January 1974 visit." },
            { id: "id4-malari", type: "event", t: "Malari riots", date: "Jan 1974",
              d: "Riots during Japanese PM Tanaka's visit: ostensibly anti-Japanese, but venting anger at bureaucratic capitalists and cukong.",
              ev: ["Post-1997 collapse: widespread, allegedly officially-backed violence against ethnic Chinese across Indonesia."],
              cards: ["ec-id-inequality"] }
          ] },
          { h: "Regional", steps: [
            { id: "id4-regional", type: "consequence", sign: "-", t: "Regional inequality",
              d: "Java/Madura/Bali dominated economic activity → overcrowding.", cards: ["ec-id-inequality"] },
            { link: "provoked response", how: "A 1973 decree moved poor Javanese to outer islands as smallholders to ease overcrowding." },
            { id: "id4-transmig", type: "consequence", sign: "-", t: "Transmigration failed", date: "1973",
              d: "Settlers sent to Sumatra/Sulawesi/Kalimantan/Irian Jaya; failed through poorer soil, local resentment, Muslim–Christian tension → post-1998 sectarian violence.",
              ev: ["Local resentment: land had been used for subsistence hunting/foraging.",
                   "Muslim settlers vs Christian Sulawesi populace; ~1000 deaths to 2007."],
              cards: ["ec-id-inequality"] }
          ] }
        ] }
      ] },
    { link: "followed by", how: "Diversification also stayed shallow while foreign debt mounted.",
      title: "Limits: diversification and debt", summary: "Oil dependence and Asia's largest debt.",
      steps: [
        { row: [
          { id: "id4-diversify", type: "consequence", sign: "-", t: "Limited diversification", date: "1980s",
            d: "Primary products 70–80% of export revenue in the 1980s; oil 70% of export earnings (1980). No domestic engine production.",
            ev: ["Auto industry: Astra + Indomobil dominance + 100–300% import tariffs on built-up vehicles → Indonesia never developed domestic engine production capacity."],
            cards: ["ec-id-limits"] },
          { id: "id4-extdebt", type: "consequence", sign: "-", t: "Heavy external debt", date: "1980–89",
            d: "Foreign loans = 42% of the development budget (1980); by 1989 Asia's largest debt (~US$58bn, World Bank). Funds leaked through lack of transparency.",
            cards: ["ec-id-limits"] }
        ] }
      ] },
    { link: "followed by", how: "Finally, rapid banking expansion outran regulation, leaving the financial system fragile before 1997.",
      title: "Limits: financial weakness and verdict", summary: "Relationship lending left Indonesia exposed in 1997.",
      steps: [
        { id: "id4-banks", type: "long_term_cause", t: "Weak bank regulation", date: "1988–94",
          d: "Banks 124 (1988) → 244 (1994), but credit culture lagged. Liem's BCA: 60% of loans owed by other Liem firms.",
          ev: ["Lending was name/relationship-driven with few checks — classic moral hazard (expectation of government bailout).",
               "BUPN (state debt collection body) lacked both the capacity and the will to enforce regulations."],
          cards: ["ec-id-financial"] },
        { link: "led to", how: "Relationship lending with few checks left private debt far above reserves when confidence collapsed." },
        { id: "id4-crisis", type: "consequence", sign: "-", t: "Pre-crisis financial vulnerability", date: "1997",
          d: "After the baht devaluation the rupiah swung up to 10%/day, worsened by Suharto's health; private corporate debt >$60bn vs $24bn reserves.",
          cards: ["ec-id-financial"] },
        { link: "supports", how: "Monopolies, inequality, debt and fragile banks show cronyism and opacity limited success." },
        { id: "id4-verdict", type: "judgement", t: "Statistically successful, crony-limited",
          d: "Intervention became the vehicle for cronyism and wealth concentration; cronyism and lack of transparency limited success by the end of the 1990s.",
          cards: ["ec-id-overview", "ec-id-govt-eval"] }
      ] }
  ],
  judge: { prompt: "Which limitation did most to restrict Indonesia's success? Rank them.",
           factors: ["id4-liem", "id4-family", "id4-urban", "id4-regional", "id4-diversify", "id4-extdebt", "id4-banks"],
           notes_view: "Statistically successful, but “cronyism and the lack of transparency limited the economic success of development strategies by the end of the 1990s.”" },
  historians: [
    { who: "Morley", view: "Huge increase in Suharto family wealth and privileged business opportunities since 1986.", nodes: ["id4-concentration"] },
    { who: "Rodan, Hewison & Robison", view: "Deregulation reinforced rather than undermined state power and corporate concentration.", nodes: ["id4-concentration"] },
    { who: "Robison", view: "Bureaucratic capitalism: officials treated offices as personal fiefs; state-sponsored private business groups grew.", nodes: ["id4-concentration", "id4-bureaucratic"] }
  ],
  takeaways: [
    "Success: inflation tamed, poverty 60% → 11%, agriculture 51% → 16% of GDP, top-3 export share 69.3% → 30.2%.",
    "Limits: crony monopolies (Krakatau, Panca, cloves), rising urban-rural gap, oil dependence, Asia's largest debt, relationship lending (BCA)."
  ]
});

L.push({
  id: "ec-flow-indonesia-4b",
  order: 73.5, level: 3, parent: "ec-country-id",
  kind: "evaluation",
  title: "Indonesia: the role of the state and the ethnic Chinese",
  question: "Was state intervention in Indonesia necessary or excessive, and how did policy towards the ethnic Chinese work out?",
  intro: "The state filled a vacuum left by a weak bourgeoisie and entrenched itself; necessary at first, it became excessive where driven by self-profit, while indigenisation produced the cukong system.",
  clusters: [
    { title: "Why the state dominated", summary: "A missing national bourgeoisie left a vacuum.",
      steps: [
        { id: "id4b-bourgeoisie", type: "long_term_cause", t: "No powerful national bourgeoisie",
          d: "Chinese were the obvious bourgeoisie but politically excluded by social hostility; indigenous (Javanese) traders lacked resources to dominate trade.",
          cards: ["ec-id-govt"] },
        { link: "enabled", how: "Class weakness let the military, party and officials appropriate political power and bureaucratic authority (Robison)." },
        { id: "id4b-vacuum", type: "consequence", sign: "±", t: "State filled the vacuum", date: "1949–65",
          d: "Robison: political power and bureaucratic authority appropriated by military, party and state officials; the state filled the vacuum, 1949–65.",
          ev: ["“The weakness of social classes, most importantly the failure of a powerful national bourgeoisie to emerge, enabled the development of a state apparatus…” (Robison, p.300)."],
          cards: ["ec-id-govt"] }
      ] },
    { link: "led to", how: "State dominance was then entrenched in the constitution, in planning and in direct participation.",
      title: "Forms of state dominance", summary: "Constitution, plans, state firms and approval rules.",
      steps: [
        { row: [
          { id: "id4b-art33", type: "policy", t: "Article 33 statism",
            d: "Important sectors “under the powers of the State”. Oil under Pertamina; ship/aircraft under Ministry of Technology — entrenched, hard to circumvent legally.",
            cards: ["ec-id-govt"] },
          { id: "id4b-repelita", type: "policy", t: "Repelita I planning", date: "1969",
            d: "First Five Year Plan, paralleling Malaysia's NEP and Thailand's Five Year Plans.", cards: ["ec-id-govt"] },
          { id: "id4b-gaps", type: "policy", t: "State firms fill ‘national gaps’",
            d: "Pertamina and Bulog filled gaps in the inherited infrastructure/industrial base (Tarling, p.144); cf. Malaysia's FELDA/PERNAS, Singapore's JTC.",
            cards: ["ec-id-govt"] },
          { id: "id4b-pmdn", type: "policy", t: "PMDN approval rule", date: "1968",
            d: "1968 Domestic Capital Investment Law (PMDN): no business could be established without state approval.", cards: ["ec-id-govt"] }
        ] }
      ] },
    { link: "followed by", how: "The notes then weigh whether such extensive intervention was necessary or excessive.",
      title: "Necessary or excessive?", summary: "Justified by macro problems; excessive where self-profit drove it.",
      steps: [
        { split: [
          { h: "Necessary", steps: [
            { row: [
              { id: "id4b-macro", type: "evidence", t: "Macro problems needed state",
                d: "No infrastructure, no autonomous expert middle class, political instability; public goods lack a profit incentive for private provision.",
                cards: ["ec-id-govt-eval"] },
              { id: "id4b-order", type: "evidence", t: "Order attracted foreign aid",
                d: "Vatikiotis: donors were grateful for stability; the New Order's obsession with order was a selling point in western finance.",
                ev: ["“The New Order's obsession with order has been one of its best selling points in the corridors of western finance” (Vatikiotis, p.48)."],
                cards: ["ec-id-govt-eval"] }
            ] }
          ] },
          { h: "Excessive", steps: [
            { id: "id4b-profit", type: "consequence", sign: "-", t: "Self-profit stunted EOI",
              d: "Where efficiency drove it, the state scaled back for EOI; where Suharto's cronyism drove it, participation was excessive and stunted EOI.",
              ev: ["Contrast with Singapore's (and to a lesser extent Malaysia's) genuine privatisation."],
              cards: ["ec-id-govt-eval"] }
          ] }
        ] }
      ] },
    { link: "followed by", how: "The state's partnership with Chinese capital made the ethnic Chinese a flashpoint.",
      title: "The ‘masalah Cina’", summary: "Chinese economic dominance fed pribumi resentment.",
      steps: [
        { id: "id4b-masalah", type: "context", t: "‘Masalah Cina’",
          d: "Chinese 3.8% of population but 73% of listed firms. Astra and Liem Groups prominent; Liem close to Suharto, favoured in contracts.",
          cards: ["ec-id-chinese"] },
        { link: "provoked response", how: "State-funded alliances between generals and Chinese businessmen provoked pribumi riots." },
        { id: "id4b-riots", type: "event", t: "Bandung and Malari riots", date: "1973–74",
          d: "Bandung riots (Oct 1973) and Malari riots (Jan 1974, Jakarta) expressed resentment of general–Chinese alliances.",
          cards: ["ec-id-chinese"] }
      ] },
    { link: "provoked response", how: "The regime answered the riots with restrictive pro-indigenous credit and ownership rules.",
      title: "Indigenisation backfires", summary: "Pro-pribumi rules produced the cukong system.",
      steps: [
        { id: "id4b-indig", type: "policy", t: "Pro-indigenous credit rules", date: "1970s",
          d: "State bank credit reserved for indigenous firms; PMDN investors 75% indigenous-owned within 10 years; credit schemes for small indigenous traders.",
          cards: ["ec-id-chinese"] },
        { link: "led to", how: "Instead of building indigenous entrepreneurs, firms used indigenous partners as licence-holding fronts." },
        { id: "id4b-cukong", type: "consequence", sign: "-", t: "Cukong system",
          d: "Indigenous partner fronted the licence as sleeping partner; Chinese partner owned and ran it. Conglomerates gained at the indigenous petty bourgeoisie's expense.",
          cards: ["ec-id-chinese"] }
      ] }
  ],
  judge: { prompt: "Was state intervention in Indonesia more necessary or more excessive? Weigh the factors.",
           factors: ["id4b-macro", "id4b-order", "id4b-profit", "id4b-art33", "id4b-gaps"],
           notes_view: "Necessary given poor infrastructure, no autonomous expert middle class and instability; but where driven by Suharto's self-profit, participation became excessive and stunted the EOI transition." },
  historians: [
    { who: "Robison", view: "A weak national bourgeoisie let military, party and officials appropriate state power.", nodes: ["id4b-vacuum"] },
    { who: "Tarling", view: "State corporations filled ‘national gaps’ in the inherited infrastructure and industrial base.", nodes: ["id4b-gaps"] },
    { who: "Vatikiotis", view: "Donors valued the stability a strong government guaranteed; order was a selling point in western finance.", nodes: ["id4b-order"] }
  ],
  takeaways: [
    "Government role: necessary (Article 33, Repelita, public goods, aid-attracting stability) but excessive where driven by self-profit, stunting EOI.",
    "Indigenisation policies produced the cukong system, entrenching rather than reducing Chinese conglomerate power."
  ]
});

/* ───────────────────────── THE PHILIPPINES ───────────────────────── */

L.push({
  id: "ec-flow-philippines-1",
  order: 74, level: 3, parent: "ec-country-ph",
  kind: "causal",
  title: "Philippines 1950s–65: early ISI boom to failure",
  question: "Why did the Philippines fail to build on its rapid early ISI, 1950s–65?",
  intro: "Despite strong advantages, rapid early ISI stalled: protection bred inefficiency, nationalism targeted the Chinese, and the landed elite blocked land reform.",
  clusters: [
    { title: "Wasted potential", summary: "Strong advantages, weak record, Indonesian parallels.",
      steps: [
        { row: [
          { id: "ph1-advantages", type: "context", t: "Wasted advantages",
            d: "Strong US ties, English-speaking workforce, ISI pioneer. On par with Thailand mid-1970s; by 2007 US$1,192 vs Thailand's US$2,750 per capita GDP.",
            ev: ["Oil-importing (unlike Indonesia), so vulnerable to the 1970s oil shocks rather than a beneficiary."],
            cards: ["philfailure"] },
          { id: "ph1-growth", type: "consequence", sign: "-", t: "Weak growth record", date: "1961–2001",
            d: "4.9 / 5.9 / 1.8 / 2.9% by decade (average 3.9%). The 1981–90 collapse was the worst major SEA economy except possibly Myanmar.",
            cards: ["philfailure"] },
          { id: "ph1-parallels", type: "context", t: "Parallels with Indonesia",
            d: "State dominant; early ISI → foreign funds → liberalisation; cronyism (‘rent-seeking’, ‘patrimonialist plunder’) crippled a healthy start. Unique problem: weak ISI → EOI transition.",
            cards: ["ec-ph-phases"] },
          { id: "ph1-phases", type: "context", t: "Three phases",
            d: "1950s–60s state-led ISI, nationalism. 1970s–80s oil surge, recession, martial law → FDI, state-led growth. 1980s–90s instability → deregulation, privatisation.",
            cards: ["ec-ph-phases"] }
        ] }
      ] },
    { link: "followed by", how: "Explaining this record starts with the colonial inheritance of inequity and US dependence.",
      title: "Colonial roots", summary: "Plantation inequity and the Bell Act bargain.",
      steps: [
        { row: [
          { id: "ph1-colonial", type: "long_term_cause", t: "Colonial inequity",
            d: "Ilustrado tobacco/sugar plantations worked by exploited tenants → landless poor recruited by the Huk, then NPA → land reform recurring, unresolved.",
            cards: ["ec-ph-colonial"] },
          { id: "ph1-bell", type: "long_term_cause", t: "Bell Act bargain",
            d: "Philippine Rehabilitation Act: US$620m aid for ratifying the Bell Act, giving US corporations rights to Philippine resources — criticised as ceding sovereignty.",
            cards: ["ec-ph-colonial"] }
        ] }
      ] },
    { link: "enabled", how: "Export agriculture and preferential US market access gave the base on which 1950s ISI was built.",
      title: "Rapid early ISI", summary: "Controls and incentives made ‘Asia's second NIC’.",
      steps: [
        { id: "ph1-base", type: "context", t: "Export agriculture base",
          d: "Comparative advantage and preferential US market access. Earliest manufacturing processed export crops: sugar milling, vegetable oil, cigars.",
          cards: ["ec-ph-isi"] },
        { link: "followed by", how: "On this base, 1950s governments protected and encouraged new industries." },
        { id: "ph1-measures", type: "policy", t: "1950s ISI measures", date: "1950s",
          d: "Import controls, foreign exchange controls, tax incentive laws for new industries.", cards: ["ec-ph-isi"] },
        { link: "led to", how: "Controls and incentives drove manufacturing growth unprecedented in the region." },
        { id: "ph1-nic", type: "consequence", sign: "+", t: "‘Asia's second NIC after Japan’", date: "1950–60",
          d: "Manufacturing 8% → 20% of GDP, agriculture 42% → 26% (1950–60) — unprecedented in the region. Then growth stalled.",
          ev: ["Stall: manufacturing 23% (1970), 25% (1980, 1990); industry 28 → 30 → 37 → 35% (1960–90); agriculture 28 → 23 → 22% (1970–90) (Hutchison, p.68)."],
          cards: ["ec-ph-isi"] }
      ] },
    { link: "led to", how: "The same high protection that built industry removed any pressure to become competitive — the classical ISI pitfall.",
      title: "The classical ISI pitfall", summary: "Inefficiency plus external shock blocked EOI.",
      steps: [
        { row: [
          { id: "ph1-protect", type: "long_term_cause", t: "Protection bred inefficiency", date: "1950s–",
            d: "High tariffs and quantitative restrictions since the 1950s: protected firms faced no pressure to be competitive.", cards: ["ec-ph-isi-fail"] },
          { id: "ph1-shock", type: "trigger", t: "1970s external shock", date: "1970s",
            d: "Commodity price slump and protectionism abroad hit labour-intensive exports (garments, footwear, electronics).", cards: ["ec-ph-isi-fail"] }
        ] },
        { link: "led to", how: "Domestic inefficiency combined with the external shock meant the economy could not switch to EOI." },
        { id: "ph1-noeoi", type: "consequence", sign: "-", t: "Failed transition to EOI", date: "1970s",
          d: "No EOI transition in the 1970s, unlike Thailand a decade later.", cards: ["ec-ph-isi-fail"] }
      ] },
    { link: "followed by", how: "Alongside ISI, Garcia's ‘Filipino First’ nationalism targeted Chinese traders.",
      title: "Economic nationalism", summary: "‘Filipino First’ pushed out Chinese traders.",
      steps: [
        { id: "ph1-filipino", type: "policy", t: "‘Filipino First’ nationalism", date: "1954–58",
          d: "Garcia's movement paralleled Sukarno. 1954 Retail Trade Nationalization Act forced Chinese out of corn/rice trade; 1958 bill: 60%+ Filipino ownership.",
          ev: ["1958 Congress bill: important industries required 60%+ native Filipino ownership."],
          cards: ["ec-ph-filipino-first"] },
        { link: "led to", how: "Forcing out Chinese traders and mandating Filipino ownership raised Filipino control of import trade." },
        { id: "ph1-share", type: "consequence", sign: "±", t: "Filipino import-trade share rose", date: "1948–65",
          d: "Filipino share of import trade rose from 23% to 70% (1948–65).", cards: ["ec-ph-filipino-first"] }
      ] },
    { link: "followed by", how: "On equity, early land reform was driven by the Huk insurgency among the landless poor.",
      title: "Equity: early land reform", summary: "Bold laws blocked by a landowning Congress.",
      steps: [
        { id: "ph1-huk", type: "event", t: "Huk insurgency defeated", date: "1945–54",
          d: "Communist Hukbalahap drew on the landless poor. Magsaysay combined military action, amnesty and land settlement via the Economic Development Corp.",
          ev: ["Magsaysay: Defence Secretary, then President from 1953; Huks defeated by 1954."],
          cards: ["ec-ph-land-early"] },
        { link: "provoked response", how: "Insurgency among the landless pushed governments to legislate land redistribution." },
        { row: [
          { id: "ph1-1955", type: "consequence", sign: "-", t: "Land Reform Act blocked", date: "1955",
            d: "First law allowing seizure of private land for redistribution — enforcement blocked by an ilustrado-dominated Congress.", cards: ["ec-ph-land-early"] },
          { id: "ph1-1963", type: "consequence", sign: "-", t: "Macapagal's Code watered down", date: "1963",
            d: "Agricultural Land Reform Code created the Land Bank of the Philippines — watered down and underfunded by Congress.", cards: ["ec-ph-land-early"] }
        ] },
        { link: "supports", how: "Both laws fit the pattern later repeated under Marcos, Aquino and Ramos." },
        { id: "ph1-pattern", type: "judgement", t: "Recurring land-reform pattern",
          d: "1955, 1963, 1972, 1987, Ramos: bold intent → implementation undermined by a landowner-dominated Congress, because the political elite WAS the landowning class.",
          cards: ["ec-ph-land-early"] }
      ] }
  ],
  judge: { prompt: "Which factor best explains the Philippines' failure to move from ISI to EOI? Rank them.",
           factors: ["ph1-protect", "ph1-shock", "ph1-colonial", "ph1-bell", "ph1-filipino"],
           notes_view: "Domestic inefficiency combined with the 1970s external shock caused the failed EOI transition; the notes' common thread is that protection bred inefficiency and its political beneficiaries resisted removing it." },
  historians: [
    { who: "Hutchison", view: "GDP structure: manufacturing 8% → 20% (1950–60), then stalled around 25% through 1980–90.", nodes: ["ph1-nic"] }
  ],
  takeaways: [
    "The Philippines shows ISI's classic trap: rapid early gains (manufacturing 8% → 20%) but protection killed competitiveness, so it could not make the EOI transition.",
    "Economic nationalism (Filipino First, 1954 Act) parallels Sukarno's nationalisation policies.",
    "Land reform synthesis: every attempt was blocked because the political elite was the landowning class — the key equity argument across all presidencies."
  ]
});

L.push({
  id: "ec-flow-philippines-2",
  order: 75, level: 3, parent: "ec-country-ph",
  kind: "chain",
  title: "Marcos 1965–86: dependent state capitalism",
  question: "How far was Marcos-era growth built on foreign loans, and why did it collapse in the 1980s?",
  intro: "Marcos ran growth on foreign loans, state corporations and cronies; debt, a narrow export base and the 1983 Aquino assassination exposed over-reliance on foreign funds.",
  clusters: [
    { title: "Loan-financed growth", summary: "FDI and borrowing kept growth going as debt soared.",
      steps: [
        { id: "ph2-sugar", type: "context", t: "Sugar price collapse", date: "1974–78",
          d: "Sugar fell from 67 cents/lb (1974) to 7 cents/lb (1978) — devastating for an export-dependent economy.", cards: ["ec-ph-1970s"] },
        { link: "followed by", how: "Amid the 1970s recession, Marcos turned to FDI incentives and aggressive foreign borrowing." },
        { row: [
          { id: "ph2-fdi", type: "policy", t: "FDI incentives", date: "1967",
            d: "1967 Investment Incentives Act encouraged foreign investment and joint ventures with TNCs.", cards: ["ec-ph-1970s"] },
          { id: "ph2-borrow", type: "policy", t: "Aggressive foreign borrowing", date: "1970s",
            d: "Borrowing from the 1970s for infrastructure/development; a World Bank Consultative Group advised on capital inflows.", cards: ["ec-ph-1970s"] }
        ] },
        { link: "enabled", how: "International loans financed most of the decade's growth." },
        { id: "ph2-growth", type: "consequence", sign: "±", t: "Loan-financed 1970s growth", date: "1970s",
          d: "5.9% average GDP growth in the 1970s, but largely financed by international loans — a stored-up problem for the 1980s.", cards: ["ec-ph-1970s"] },
        { link: "led to", how: "Borrowing on this scale ballooned foreign debt from martial law onwards." },
        { id: "ph2-debt", type: "consequence", sign: "-", t: "Debt explosion", date: "1972–83",
          d: "Foreign debt US$2.2bn (1972, martial law) → US$25bn (1983): one of 10 most indebted developing nations. Debt service >20% (1972–77), IMF danger level.",
          cards: ["ec-ph-1970s", "ec-ph-debt"] }
      ] },
    { link: "followed by", how: "State and foreign capital also flowed into agriculture and industry after martial law.",
      title: "State capital in agriculture, industry", summary: "Real gains, but a narrow export base.",
      steps: [
        { row: [
          { id: "ph2-statecorp", type: "policy", t: "State corporations tripled",
            d: "Government corporations nearly tripled within a decade of martial law.", cards: ["ec-ph-agri"] },
          { id: "ph2-ir8", type: "consequence", sign: "+", t: "IR8 Green Revolution",
            d: "IRRI (in the Philippines) developed IR8 mid-1960s, spread across SEA and India. Rice 3.9m tons (1961) → 7.9m (1981); self-sufficient first in 1972.",
            cards: ["ec-ph-agri"] },
          { id: "ph2-narrow", type: "consequence", sign: "-", t: "Narrow export base", date: "1967–71",
            d: "~70% of export value still came from sugar, coconut and forestry products.", cards: ["ec-ph-agri"] },
          { id: "ph2-restructure", type: "consequence", sign: "+", t: "Manufactured export surge", date: "1970s",
            d: "Government credit on foreign loans drove labour-intensive exports: garments value 7x in the decade (Ker); cement, textiles breakthroughs late 1970s.",
            cards: ["ec-ph-agri"] }
        ] }
      ] },
    { link: "followed by", how: "In the early 1980s political disunity set the stage for crisis.",
      title: "Early-1980s crisis", summary: "Assassination triggered capital flight and collapse.",
      steps: [
        { id: "ph2-disunity", type: "short_term_cause", t: "Domestic disunity", date: "early 1980s",
          d: "Marcos' failing health, succession uncertainty and prominent cronies.", cards: ["ec-ph-sap"] },
        { link: "followed by", how: "Amid this uncertainty, opposition leader Aquino Jr. was assassinated in 1983." },
        { id: "ph2-aquino", type: "trigger", t: "Aquino Jr. assassinated", date: "1983",
          d: "Capital flight → economic/financial crisis exposing over-reliance on foreign funds; a 90-day debt arrangement sought with the IMF.",
          cards: ["ec-ph-sap", "ec-ph-1970s"] },
        { link: "led to", how: "Capital flight and the debt crisis collapsed growth across every sector." },
        { id: "ph2-collapse", type: "consequence", sign: "-", t: "Sector growth collapse", date: "1980–93",
          d: "GDP growth 5.1 / 6.0 / 1.4 / 4.5% (1960–70 / 1970–80 / 1980–93 / 1994); industry 6.0 / 8.2 / -0.1 / 6.0% (Hutchison).",
          ev: ["Agriculture: 4.3 / 4.0 / 1.2 / 2.9%. Manufacturing: 6.7 / 0.1 / 0.8 / 5.2% (Hutchison, p.64)."],
          cards: ["ec-ph-sap"] }
      ] },
    { link: "followed by", how: "Under World Bank pressure Marcos also adopted a Structural Adjustment Programme, 1981–85.",
      title: "Structural adjustment", summary: "Liberalisation with limited impact.",
      steps: [
        { id: "ph2-sap", type: "policy", t: "Structural Adjustment Programme", date: "1981–85",
          d: "World Bank pressure: tariffs cut to max 50%; effective manufacturing protection 44% → 29%; ~1000 items liberalised from import licensing.", cards: ["ec-ph-sap"] },
        { link: "followed by", how: "Its impact was limited by the early-1980s global slowdown and protectionist climate, while debt kept climbing." },
        { id: "ph2-limited", type: "consequence", sign: "-", t: "Limited impact, soaring debt", date: "1983–86",
          d: "Global slowdown and protectionism blunted the SAP. Foreign debt 6.6% of GNP (early 1980s) → 49.4% (1983); US$27bn before Marcos fell (1986).",
          cards: ["ec-ph-sap", "ec-ph-debt"] }
      ] },
    { link: "followed by", how: "On equity, Marcos' land reform shows reform bent to political ends.",
      title: "Equity: PD 27", summary: "Land reform as a political weapon.",
      steps: [
        { id: "ph2-motive", type: "short_term_cause", t: "Dual political motive",
          d: "Win rural popularity AND undermine rival landowning families — the Aquino family's land was among the first seized.", cards: ["ec-ph-pd27"] },
        { link: "led to", how: "To win rural support and weaken rival landowners, Marcos issued Presidential Decree 27." },
        { id: "ph2-pd27", type: "policy", t: "Presidential Decree 27", date: "Oct 1972",
          d: "All holdings over 7 hectares liable to compulsory sale to tenant farmers at government-set prices.", cards: ["ec-ph-pd27"] },
        { link: "followed by", how: "Implementation faltered because a poorly staffed department faced landowners who were Marcos' own allies." },
        { id: "ph2-weak", type: "consequence", sign: "-", t: "Weak implementation",
          d: "Dept of Agrarian Reform poorly led/staffed; price-setting hard; Marcos' allies were landowners. Became a tool to punish opponents, not genuine equity.", cards: ["ec-ph-pd27"] }
      ] }
  ],
  judge: { prompt: "What mattered most in the early-1980s Philippine collapse? Rank the factors.",
           factors: ["ph2-debt", "ph2-narrow", "ph2-disunity", "ph2-aquino", "ph2-limited"],
           notes_view: "Aquino Jr.'s 1983 assassination triggered capital flight and crisis, exposing over-reliance on foreign funds; 1970s growth had been largely loan-financed, a stored-up problem for the 1980s." },
  historians: [
    { who: "Ker", view: "Garments export value grew 7x in the decade, driven by loan-backed government credit.", nodes: ["ph2-restructure"] },
    { who: "Hutchison", view: "Sector growth collapsed in 1980–93: GDP 1.4%, industry -0.1%.", nodes: ["ph2-collapse"] }
  ],
  takeaways: [
    "‘Dependent state capitalism’: 1970s growth (5.9%) rested on foreign loans — debt rose from US$2.2bn to US$25–27bn.",
    "Real gains (IR8, rice self-sufficiency, garments 7x) but a narrow export base and political shock (1983) caused the 1980s collapse.",
    "The SAP's impact was limited by the early-1980s global slowdown and protectionism; PD 27 shows land reform used for political ends."
  ]
});

L.push({
  id: "ec-flow-philippines-3",
  order: 76, level: 3, parent: "ec-country-ph",
  kind: "chain",
  title: "Aquino and Ramos 1986–98: recovery and liberalisation",
  question: "How far did Aquino and Ramos revive the Philippine economy, 1986–98?",
  intro: "Aquino restored democracy but was crippled by Marcos-era debt and shocks; Ramos' ‘Philippines 2000’ liberalised and privatised, a real turnaround though elites captured much gain.",
  clusters: [
    { title: "Aquino's agenda", summary: "Pay debts, dismantle crony protection, reform trade.",
      steps: [
        { id: "ph3-agenda", type: "policy", t: "Aquino's reform agenda", date: "1987–92",
          d: "“honor the country's financial obligations, dismantle import controls and monopolies that protected crony enterprises, and initiate trade reform” (Abinales & Amoroso).",
          cards: ["ec-ph-aquino"] },
        { link: "led to", how: "Dismantling import controls and crony monopolies drew investment and boosted exports." },
        { id: "ph3-gains", type: "consequence", sign: "+", t: "Early recovery gains", date: "1988–89",
          d: "Foreign investment quadrupled; export value doubled. Growth 6.7% (1988), 5.5% (1989).", cards: ["ec-ph-aquino"] }
      ] },
    { link: "undermined", how: "Marcos-era debt and a string of external shocks undercut the early recovery.",
      title: "Crippled recovery", summary: "Debt and shocks stalled growth and equity.",
      steps: [
        { row: [
          { id: "ph3-legacy", type: "long_term_cause", t: "Marcos-era debt legacy",
            d: "Structural problems and debt: repayment ate 10% of GDP a year — the “foreign debt hemorrhage” (De Dios & Hutchcroft).",
            cards: ["ec-ph-aquino", "ec-ph-debt"] },
          { id: "ph3-shocks", type: "short_term_cause", t: "Multiple external shocks", date: "1990–91",
            d: "Gulf War doubled oil import costs; US base closures (1991) cost 70,000 jobs; remittances lost from 65,000 Gulf workers; natural disasters.",
            ev: ["Natural disasters: 1990 Luzon earthquake, 1990 typhoon, 1991 Mt Pinatubo eruption."],
            cards: ["ec-ph-aquino"] }
        ] },
        { link: "led to", how: "Debt repayments and shocks dragged growth down and left inequality largely untouched." },
        { id: "ph3-slow", type: "consequence", sign: "-", t: "Slow, unequal recovery", date: "1990–91",
          d: "Growth below 3% (1990–91). Poverty fell only ~3%; richest 10% held 40% of income vs poorest 30% with 10%.",
          ev: ["“the return of democracy was a welcome development…the new regime's ability to foster economic prosperity was found wanting” (Abinales & Amoroso, p.243)."],
          cards: ["ec-ph-aquino"] }
      ] },
    { link: "followed by", how: "Land reform was now argued to be a growth need too, yet Aquino's own CARP stayed weak.",
      title: "Aquino's CARP", summary: "Landowner ties produced a loophole-ridden law.",
      steps: [
        { id: "ph3-neda", type: "context", t: "NEDA's growth case",
          d: "NEDA economists argued land reform was also a growth necessity: redistribution → higher domestic consumption → stimulus, not just equity.", cards: ["ec-ph-carp"] },
        { link: "followed by", how: "Against this case stood the landowning interests of Aquino's cabinet and family." },
        { id: "ph3-elite", type: "long_term_cause", t: "Landowning elite ties",
          d: "Cabinet increasingly dominated by ilustrado-linked business; Aquino herself from one of the wealthiest landowning families.", cards: ["ec-ph-carp"] },
        { link: "led to", how: "Reluctant to push meaningful reform, Aquino delayed CARP and left its specifics to a landowner-dominated Congress." },
        { id: "ph3-carp", type: "consequence", sign: "-", t: "Weak CARP law", date: "1987",
          d: "Aquino delayed announcing CARP until the last moment; Congress produced weak, loophole-ridden legislation.", cards: ["ec-ph-carp"] }
      ] },
    { link: "followed by", how: "From 1992 Ramos' ‘Philippines 2000’ targeted NIC status by 2000 through liberalisation and privatisation.",
      title: "Ramos' ‘Philippines 2000’", summary: "Liberalisation drew FDI and electronics exports.",
      steps: [
        { row: [
          { id: "ph3-trade", type: "policy", t: "Trade liberalisation", date: "1992–98",
            d: "Lower tariffs; lifted quantitative controls on hundreds of goods; removed capital controls; energy opened to foreign ownership.", cards: ["ec-ph-ramos"] },
          { id: "ph3-privatise", type: "policy", t: "Accelerated privatisation",
            d: "Privatisation of state enterprises accelerated on efficiency grounds.", cards: ["ec-ph-ramos"] },
          { id: "ph3-monopoly", type: "policy", t: "Monopolies broken up",
            d: "Breakup of monopolies in major sectors.", cards: ["ec-ph-ramos"] },
          { id: "ph3-foreign", type: "policy", t: "100% foreign ownership",
            d: "100% foreign ownership rights granted to attract capital.", cards: ["ec-ph-ramos"] }
        ] },
        { link: "led to", how: "Open trade and special economic zones made electronics the dominant export and drew FDI." },
        { id: "ph3-results", type: "consequence", sign: "+", t: "Liberalisation turnaround", date: "1994",
          d: "SEZs (e.g. ex-Subic Bay base) → electronics became the dominant export. FDI peaked 1994; growth improved across all sectors, still slower than peers.",
          cards: ["ec-ph-ramos"] }
      ] },
    { link: "led to", how: "Privatisation, however, mostly gave existing elites new openings to accumulate wealth.",
      title: "Who gained?", summary: "Elites reshuffled gains; land reform sped up.",
      steps: [
        { id: "ph3-mixed", type: "consequence", sign: "±", t: "Privatisation: mixed results",
          d: "As in Indonesia, new openings for existing elites/cronies (e.g. Lucio Tan bought Philippine Airlines). But $12bn revenue helped balance the budget.",
          cards: ["ec-ph-ramos", "ec-ph-telecom"] },
        { link: "supports", how: "Telecoms shows the pattern: more competition, but familiar elite families still dominate." },
        { id: "ph3-telecom", type: "evidence", t: "Telecoms case study", date: "1992–93",
          d: "1992: Cojuangco PLDT held 90% of 1 million lines. 1993: 13 entrants, but PLDT stayed ahead; Ayala, Lopez, Gokongwei dominate.",
          cards: ["ec-ph-telecom"] },
        { link: "followed by", how: "On equity, Ramos also pushed land distribution further than his predecessors." },
        { id: "ph3-land", type: "consequence", sign: "±", t: "Ramos' land reform", date: "1998",
          d: "By 1998: 4.6m of a targeted 8.1m hectares distributed — genuine acceleration, still incomplete and underfunded.", cards: ["ec-ph-ramos"] }
      ] }
  ],
  judge: { prompt: "What most limited the Aquino–Ramos recovery? Rank the factors.",
           factors: ["ph3-legacy", "ph3-shocks", "ph3-elite", "ph3-mixed"],
           notes_view: "Aquino was crippled by Marcos-era structural problems and debt; democracy was welcome but its “ability to foster economic prosperity was found wanting”. Ramos delivered a strong turnaround, still slower than peers." },
  historians: [
    { who: "Abinales & Amoroso", view: "Aquino aimed to dismantle crony protection; democracy's ability to foster prosperity was found wanting.", nodes: ["ph3-agenda", "ph3-slow"] },
    { who: "De Dios & Hutchcroft", view: "A “foreign debt hemorrhage” of repayments severely limited Aquino's options.", nodes: ["ph3-legacy"] }
  ],
  takeaways: [
    "Aquino shows democracy alone did not bring prosperity: Marcos debt (10% of GDP in repayments) and shocks crippled recovery.",
    "Ramos' liberalisation was a real turnaround (SEZs, electronics, FDI peak 1994), but privatisation largely reshuffled wealth among elites.",
    "Land reform (CARP, Ramos) again limited by landowner interests — fits the recurring pattern."
  ]
});

L.push({
  id: "ec-flow-philippines-4",
  order: 77, level: 3, parent: "ec-country-ph",
  kind: "evaluation",
  title: "Evaluating the Philippines: state, cronies and debt",
  question: "Why did the Philippines under-perform its Southeast Asian neighbours?",
  intro: "A dominant state, crony capitalism and debt from unproductive projects left the Philippines with a narrow export base and stagnant industry.",
  clusters: [
    { title: "A dominant state", summary: "Planning agencies and hundreds of public enterprises.",
      steps: [
        { row: [
          { id: "ph4-planning", type: "policy", t: "Central planning agencies", date: "1960s–70s",
            d: "Macapagal's Program Implementation Agency (early-1960s decontrols); Marcos' super-agencies: Planning, Programming, Budgeting System; Development Budget Coordinating Committee.",
            cards: ["ec-ph-govt"] },
          { id: "ph4-enterprises", type: "policy", t: "300+ public enterprises",
            d: "NEDA (chaired by Marcos); National Development Co. (Sugar Institute 1951, Waterworks 1955); PCCI designated 12 export-promotion groups.",
            ev: ["Public enterprises proliferated to 300+ companies.", "PCCI merged rival chambers under government oversight."],
            cards: ["ec-ph-govt"] },
          { id: "ph4-statesector", type: "policy", t: "State dominance by 1970s", date: "1970s",
            d: "State dominance across PNOC (oil), National Power Corp, National Fertilizer Corp and state banks PNB and DBP.", cards: ["ec-ph-govt"] }
        ] }
      ] },
    { link: "enabled", how: "Marcos' dominant state handed tax, customs, financing and market privileges to favoured cronies.",
      title: "Crony capitalism", summary: "Privileged cronies, bailed out at public cost.",
      steps: [
        { row: [
          { id: "ph4-benedicto", type: "evidence", t: "Benedicto and sugar",
            d: "Marcos' friend headed the Philippine Sugar Commission; early-1980s world price rises were not passed to growers.", cards: ["crony"] },
          { id: "ph4-tan", type: "evidence", t: "Lucio Tan's tobacco empire",
            d: "Fortune Tobacco became the largest cigarette maker via Palace favours; allegedly gave Marcos equity, wrote his own tax code, printed tax stamps.",
            cards: ["crony"] },
          { id: "ph4-pldt", type: "evidence", t: "PLDT telecoms dominance",
            d: "Cojuangco family dominance persisted despite Ramos-era deregulation.", cards: ["crony"] }
        ] },
        { link: "led to", how: "When crony firms failed, the government absorbed their losses." },
        { id: "ph4-bailout", type: "consequence", sign: "-", t: "Bailout culture",
          d: "Govt absorbed 14bn pesos on Benedicto's unsold sugar, lent 15bn pesos to Marinduque Mining, 2bn to Delta Motors — failure socialised.",
          ev: ["Cronies had no incentive to be efficient since failure was socialised."],
          cards: ["crony"] }
      ] },
    { link: "led to", how: "Socialised failure and loans spent on bankrupt entities left an uncompetitive economy and a heavy debt.",
      title: "Costs of cronyism", summary: "Uncompetitive firms and a debt ‘hemorrhage’.",
      steps: [
        { row: [
          { id: "ph4-hutchison", type: "interpretation", t: "Political criteria kill competitiveness",
            d: "Substituting political for economic criteria in allocation is “antithetical to…an internationally competitive economy” (quoted in Hutchison, p.65).", cards: ["crony"] },
          { id: "ph4-debt", type: "consequence", sign: "-", t: "Burden of external debt",
            d: "Loans spent on bankrupt entities and “monuments, government buildings and bridges of love”. Repayment took 10% of GDP a year under Aquino.",
            ev: ["Abinales & Amoroso, p.213; the “foreign debt hemorrhage” (De Dios & Hutchcroft) severely limited Aquino's options."],
            cards: ["ec-ph-debt"] }
        ] }
      ] },
    { link: "led to", how: "An economy run on political rather than market criteria showed in a narrow export base and stagnant industry.",
      title: "Weak structural record", summary: "Rising export concentration, stagnant industry.",
      steps: [
        { row: [
          { id: "ph4-concentration", type: "evidence", t: "Export concentration rose", date: "1985–2000",
            d: "Top-3 export share 27.4% → 64.7% — opposite of Thailand and Indonesia; diversification real, but concentration higher than Indonesia's.",
            ev: ["Top 3 exports: coconut oil, fruit & nuts, electronics/semiconductors (1985) → electronics/semiconductors, data processing machines, telecoms equipment (2000).",
                 "Higher concentration than Indonesia confirms a narrower Philippine export base."],
            cards: ["ec-ph-quant"] },
          { id: "ph4-industry", type: "evidence", t: "Stagnant industry",
            d: "Industrial GDP share 37% → 35% since the 1980s (agriculture 23% → 22%) — unlike Thailand's continued industrial deepening.", cards: ["ec-ph-quant"] }
        ] }
      ] }
  ],
  judge: { prompt: "Which factor best explains Philippine under-performance? Rank them.",
           factors: ["ph4-planning", "ph4-benedicto", "ph4-tan", "ph4-pldt", "ph4-bailout", "ph4-debt"],
           notes_view: "The Philippines failed the ISI → EOI transition: protected firms never became efficient, 1970s shocks hit before adjustment, and cronyism plus cyclical political instability repeatedly interrupted reform." },
  historians: [
    { who: "Hutchison", view: "Political allocation is antithetical to market forces and an internationally competitive economy.", nodes: ["ph4-hutchison"] },
    { who: "Abinales & Amoroso", view: "Loans funded bankrupt entities and non-income-generating ‘monuments… and bridges of love’.", nodes: ["ph4-debt"] },
    { who: "De Dios & Hutchcroft", view: "A ‘foreign debt hemorrhage’ severely limited Aquino's policy options.", nodes: ["ph4-debt"] }
  ],
  takeaways: [
    "Under-performance: export concentration rose (27.4% → 64.7%), industry stagnated, and cronies (Benedicto, Lucio Tan, PLDT) were bailed out at public cost.",
    "Debt from unproductive projects left a ‘foreign debt hemorrhage’ for Aquino."
  ]
});

L.push({
  id: "ec-flow-philippines-4b",
  order: 77.5, level: 3, parent: "ec-country-ph",
  kind: "evaluation",
  title: "The Philippines: Chinese-Filipinos and sound banks",
  question: "How did the state treat the Chinese-Filipinos, and why did the Philippines escape the worst of the 1997 crisis?",
  intro: "Chinese-Filipinos were first targeted, then co-opted; conservative, US-style banking left the Philippines far less exposed in 1997 despite weaker growth.",
  clusters: [
    { title: "The Chinese-Filipinos", summary: "Discriminated against, co-opted, then targeted.",
      steps: [
        { id: "ph4b-chinese", type: "context", t: "Small but powerful minority",
          d: "1.3% of population, 50–60% of listed firms — smallest share in the SEA table (cf. Indonesia 3.8%/73%) (Rigg).",
          ev: ["Chinese-Filipino families held interests in 4 large private banks plus textile, food, real estate and manufacturing industries."],
          cards: ["ec-ph-chinese"] },
        { link: "provoked response", how: "Their disproportionate economic weight drew discrimination under Garcia, then co-option under Marcos." },
        { split: [
          { h: "Garcia (1950s)", steps: [
            { id: "ph4b-garcia", type: "policy", t: "Discrimination under ‘Filipino First’", date: "1950s",
              d: "Garcia's ‘Filipino First’ began blatant discrimination, paired with state-led ISI.", cards: ["ec-ph-chinese", "ec-ph-filipino-first"] }
          ] },
          { h: "Marcos (martial law)", steps: [
            { id: "ph4b-marcos", type: "consequence", sign: "±", t: "Reversal: Chinese as allies",
              d: "Marcos saw Chinese-Filipinos as valuable allies; state credit and joint ventures (e.g. Lucio Tan's rise).", cards: ["ec-ph-chinese"] }
          ] }
        ] },
        { link: "provoked response", how: "Visible, crony-enabled Chinese-Filipino wealth drew a violent social backlash in the 1990s." },
        { id: "ph4b-backlash", type: "consequence", sign: "-", t: "1990s kidnapping backlash", date: "1993–97",
          d: "Robberies/kidnappings of Chinese-Filipinos: 179–286 victims a year; ransoms $2.5m → $10.4m a year.", cards: ["ec-ph-chinese"] }
      ] },
    { link: "followed by", how: "The most exam-relevant Philippine point is its sound financial system, rooted in three causes.",
      title: "Why the banks were sound", summary: "US standards, crisis-forced rules and conservatism.",
      steps: [
        { row: [
          { id: "ph4b-us", type: "long_term_cause", t: "US-style training, education",
            d: "Close US ties → Western-modelled accounting and training; more widespread US-style education produced skilled bank managers.", cards: ["ec-ph-banks"] },
          { id: "ph4b-prior", type: "long_term_cause", t: "Prior crises forced reform",
            d: "1970, 1984–85, 1990–91 balance-of-payments crises → capital adequacy rules, DOSRI lending curbs, June 1997 prudential caps.",
            ev: ["DOSRI: director/officer/stockholder/related-interest lending restrictions.",
                 "June 1997: real estate loans capped at 20% of portfolio; max 60% loan-to-property-value."],
            cards: ["ec-ph-banks"] },
          { id: "ph4b-bsp", type: "long_term_cause", t: "BSP conservatism",
            d: "Limited financial liberalisation: only ~5 new banks post-1980s vs 100+ in Indonesia post-1988 — less explosive, less risky growth.", cards: ["ec-ph-delhaise"] }
        ] },
        { link: "led to", how: "Western standards, crisis-forced rules and few new entrants produced a conservative, well-managed banking system." },
        { id: "ph4b-sound", type: "consequence", sign: "+", t: "Sound financial system",
          d: "Explains why it escaped the worst of 1997 despite weaker growth. Delhaise: some of Asia's best bank managers; US-modelled accounting.",
          ev: ["“Philippine banks could boast of some of the best bank managers in Asia. Modeled on American standards, their accounting norms were above those of most Asian countries” (Delhaise, p.162)."],
          cards: ["ec-ph-banks"] }
      ] },
    { link: "supports", how: "1996–97 figures show the healthiest bank balance sheets and lowest exposure in the region.",
      title: "Evidence and crisis response", summary: "Low leverage and exposure allowed a calm response.",
      steps: [
        { row: [
          { id: "ph4b-leverage", type: "evidence", t: "Lowest bank leverage", date: "1996",
            d: "Leverage (times): Philippines 6.90 (lowest = healthiest), Singapore 7.55, Thailand 10.91, Indonesia private banks 12.73, Malaysia 14.23.", cards: ["ec-ph-banks"] },
          { id: "ph4b-shortterm", type: "evidence", t: "Little short-term debt",
            d: "Short-term loans under 20% of foreign debt vs over 50% in Thailand/Indonesia/Malaysia — far less exposed to capital flight.", cards: ["ec-ph-banks"] },
          { id: "ph4b-npl", type: "evidence", t: "Few bad loans",
            d: "Non-performing loans 3% of total vs Thailand's 8%, Malaysia's 5.3%.", cards: ["ec-ph-banks"] }
        ] },
        { link: "enabled", how: "Low exposure let the central bank float the peso rather than burn reserves defending it." },
        { id: "ph4b-float", type: "consequence", sign: "+", t: "Sensible crisis response", date: "July 1997",
          d: "Central bank did not spend reserves defending the peso; floated it 9 days after Thailand floated the baht (11 July 1997).", cards: ["ec-ph-delhaise"] }
      ] },
    { link: "supports", how: "Avoiding 1997's excesses underpins Delhaise's and Montes' verdict on Philippine governance.",
      title: "Verdict", summary: "Missed explosive growth, avoided the excesses.",
      steps: [
        { id: "ph4b-delhaise", type: "interpretation", t: "Delhaise and Montes verdict",
          d: "Delhaise: “missed the benefits of explosive growth, it also avoided the excesses.” Montes: governance too weak for faster growth, enough to prevent large errors.",
          ev: ["“Governance was not good enough to permit faster growth, but it was good enough to prevent large policy errors from occurring” (Montes, p.266)."],
          cards: ["ec-ph-delhaise"] },
        { link: "supports", how: "Weighed against cronyism and debt, sound governance shapes the notes' overall judgement." },
        { id: "ph4b-verdict", type: "judgement", t: "Failed potential, avoided excesses",
          d: "Failed to realise potential: weak ISI → EOI transition, cronyism and debt. But governance was sound enough to avoid the AFC's worst excesses.",
          cards: ["philfailure", "ec-ph-delhaise"] }
      ] }
  ],
  judge: { prompt: "Which factor did most to make Philippine banks sound before 1997? Rank them.",
           factors: ["ph4b-us", "ph4b-prior", "ph4b-bsp"],
           notes_view: "" },
  historians: [
    { who: "Rigg", view: "Philippines had both the smallest Chinese population share and lowest economic-control share.", nodes: ["ph4b-chinese"] },
    { who: "Delhaise", view: "Some of Asia's best bank managers; missed explosive growth but avoided the excesses.", nodes: ["ph4b-sound", "ph4b-delhaise"] },
    { who: "Montes", view: "Governance not good enough for faster growth, but good enough to prevent large policy errors.", nodes: ["ph4b-delhaise"] }
  ],
  takeaways: [
    "Most exam-relevant contrast: lowest bank leverage (6.90), <20% short-term debt, 3% NPLs → avoided the excesses of 1997 (Delhaise, Montes).",
    "Ethnic Chinese: discriminated against under Garcia, co-opted under Marcos, then targeted by 1990s backlash.",
    "Overall: failed to realise potential (weak ISI → EOI, cronyism, debt), but governance was sound enough to avoid the AFC's worst excesses."
  ]
});

})();
