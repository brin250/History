// Top-down overview flow charts (maps) for SEA economic change — from SEA_Economic_Change_Study_Notes.
// Level 0 = whole topic, level 1 = clusters, level 2 = countries. Nodes with `go` open the named chart.
(function(){
const F = (window.FLOWS = window.FLOWS || {}); const L = (F.ec = F.ec || []);

/* ---------- Level 0 ---------- */
L.push({
  id: "ec-top", order: 0, level: 0,
  title: "SEA economic change: the whole topic",
  intro: "Start here. Every state chased the same three aims; tap a cluster to drill down to countries and phases, or a comparison chart to argue across cases.",
  steps: [
    { t: "The three aims: big picture", d: "Growth, equity and economic nationalism pull against each other; see aims → approaches → paths → outcomes on one chart.", tone: "context", cards: ["ec-three-aims", "ec-f1-paths"], go: "ec-flow-bigpicture" },
    { t: "Lecture 1 framework", d: "Owen's capitalist / socialist / 'Third Way' approaches; ISI vs EOI; Tarling's two government roles; why the colonial vacuum made the state lead.", tone: "context", cards: ["ec-owen", "ec-isi-eoi", "ec-why-govt"], go: "ec-flow-framework" },
    { arrow: "three clusters of cases" },
    { row: [
      { t: "Singapore & Malaysia", d: "Capitalist; forced early EOI (Singapore) vs NEP restructuring (Malaysia). Best growth vs best balance of aims.", tone: "good", cards: ["ec-sg-vs-my"], go: "ec-cluster-sgmy" },
      { t: "Thailand, Indonesia, Philippines", d: "Capitalist; Thailand made EOI, Indonesia partial (oil, cronies), Philippines failed. Thailand and Indonesia hit hardest in 1997.", tone: "mixed", cards: ["ec-cl-growth"], go: "ec-cluster-tip" },
      { t: "Burma & Vietnam", d: "Socialist; same heavy-industry-first flaw. Vietnam pivoted (Doi Moi 1986); Burma clung to autarky — best endowed, worst outcome.", tone: "mixed", cards: ["burmavsvietnam"], go: "ec-cluster-bmvn" } ] },
    { arrow: "compare across countries" },
    { row: [
      { t: "Three aims verdicts", d: "Malaysia best balance; Singapore best growth; Vietnam best adaptation; Burma hollow equity/nationalism.", tone: "verdict", cards: ["ec-f2-mysg", "ec-f2-bmvn"], go: "ec-flow-f2-aims" },
      { t: "ISI → EOI → diversification", d: "Capitalist economies followed this track at different speeds; socialist ones first had to abandon central planning.", tone: "context", cards: ["ec-f5-pattern"], go: "ec-flow-f5-pattern" },
      { t: "Growth ranking 1961–2001", d: "Singapore > Malaysia > Thailand > Indonesia > Myanmar > Philippines.", tone: "context", cards: ["ec-gdp-table"], go: "ec-flow-cl-growth" } ] },
    { row: [
      { t: "Role of the state", d: "Intervention was universal; judge its nature and direction — scaled back (Thailand) or captured (Indonesia, Philippines).", tone: "context", cards: ["ec-cl-state"], go: "ec-flow-cl-state" },
      { t: "Ethnic Chinese", d: "Disproportionate Chinese control region-wide; the political response varied — stabilising or destabilising.", tone: "context", cards: ["chinesecapital"], go: "ec-flow-cl-chinese" },
      { t: "1997 Asian Financial Crisis", d: "Growth speed via liberalisation vs financial stability: no SEA economy escaped the trade-off.", tone: "bad", cards: ["afccompare"], go: "ec-flow-cl-afc" } ] },
    { arrow: "verdict and exam technique" },
    { row: [
      { t: "How to argue", d: "Weigh the three aims, compare countries, cite numbers, judge the nature of intervention.", tone: "verdict", cards: ["ec-pitfalls"], go: "ec-flow-howtoargue" },
      { t: "Memory cues", d: "'Race, Resources, Restructuring'; 'Entrepot, Expelled, Excellence'; 'Best Endowed, Worst Outcome'; 'Pragmatic Pivot'.", tone: "verdict", cards: ["ec-memory"], go: "ec-flow-f7-memory" } ] },
    { t: "Overall verdict", d: "Not WHETHER the state intervened but HOW and HOW WELL — and whether it made the ISI → EOI transition in time (Salvatore).", tone: "verdict", cards: ["ec-salvatore", "ec-why-govt"] }
  ],
  takeaways: [
    "Government intervention was universal — argue about its nature (efficient vs corrupt/dogmatic) and direction (market-stimulating vs market-replacing).",
    "Success means weighing growth vs equity vs nationalism, not growth alone (Burma's hollow victory).",
    "Starting points matter for judgement: Burma's failure is more damning, Singapore's success more impressive."
  ]
});

/* ---------- Level 1: clusters ---------- */
L.push({
  id: "ec-cluster-sgmy", order: 3, level: 1, parent: "ec-top",
  title: "Cluster: Singapore & Malaysia",
  intro: "Two capitalist neighbours with a shared past: resources, ethnic politics and governance quality explain their different paths.",
  steps: [
    { t: "Shared", d: "Capitalist; relatively honest, technocratic governments (vs Philippines/Indonesia); both followed ISI → EOI → diversification.", tone: "context", cards: ["ec-sg-vs-my"] },
    { row: [
      { t: "Resources differ", d: "Malaysia's tin and rubber let it delay EOI; Singapore's lack of resources forced early, decisive EOI.", tone: "cause", cards: ["ec-my-colonial", "ec-sg-context"] },
      { t: "Ethnic politics differ", d: "Malaysia shaped by Malay–Chinese inequality (NEP); PAP governance not built around ethnic redistribution.", tone: "cause", cards: ["nep", "ec-my-chinese"] },
      { t: "Governance differs", d: "Singapore freer from interest-group capture; UMNO-linked privatisation contracts in Malaysia.", tone: "cause", cards: ["ec-sg-nature", "ec-my-privatisation"] } ] },
    { arrow: "each country" },
    { row: [
      { t: "Singapore", d: "Entrepot → forced EOI (1965/1971) → technology → services → regionalisation. GDP growth 8.3%, region's highest.", tone: "good", cards: ["ec-sg-narrative"], go: "ec-country-sg" },
      { t: "Malaysia", d: "Laissez-faire ISI → 1969 riots → NEP → HICOM → privatisation → deepening. GDP growth 6.7%.", tone: "good", cards: ["ec-my-narrative"], go: "ec-country-my" } ] },
    { arrow: "compare" },
    { row: [
      { t: "Singapore vs Malaysia", d: "Resources shaped EOI timing; ethnic politics shaped priorities; governance shaped consistency.", tone: "context", cards: ["ec-sg-vs-my"], go: "ec-flow-f4-sgmy" },
      { t: "Three aims verdicts", d: "How each scored on growth, equity and nationalism.", tone: "context", cards: ["ec-f2-mysg"], go: "ec-flow-f2-aims" },
      { t: "Common pattern", d: "Singapore fastest to EOI; Malaysia NEP-guided but FDI-led EOI.", tone: "context", cards: ["ec-f5-pattern"], go: "ec-flow-f5-pattern" } ] },
    { t: "Cluster verdict", d: "Malaysia: best BALANCE of the three aims. Singapore: most successful by growth, by NOT prioritising nationalism and only partly addressing equity.", tone: "verdict", cards: ["ec-f2-mysg"] }
  ],
  takeaways: [
    "Pair F4 with F2: Malaysia best balance, Singapore best growth.",
    "1997: Malaysia hit via domestic stock/property overheating; Singapore weathered it on sound fundamentals."
  ]
});

L.push({
  id: "ec-cluster-tip", order: 4, level: 1, parent: "ec-top",
  title: "Cluster: Thailand, Indonesia & the Philippines",
  intro: "The Lecture 3 cluster: all three began with heavy state intervention out of necessity; what happened next — withdrawal or capture — decided the outcome.",
  steps: [
    { t: "Shared", d: "Capitalist; heavy initial state role; disproportionate Chinese economic control; growth with worsening or persistent inequality.", tone: "context", cards: ["ec-cl-state", "ec-cl-equity"] },
    { t: "How they differ", d: "State scaled back (Thailand) vs reinforced via cronyism (Indonesia) vs intensified under Marcos (Philippines).", tone: "cause", cards: ["ec-cl-state"] },
    { arrow: "each country" },
    { row: [
      { t: "Thailand", d: "Never colonised → Phibun → Sarit → EOI from 1977. Growth 6.8%; private Chinese class decisive; 1997 epicentre.", tone: "good", cards: ["ec-th-overview"], go: "ec-country-th" },
      { t: "Indonesia", d: "Guided Economy collapse → New Order aid and oil → deregulation captured by cronies. Growth 5.7%; worst-hit 1997.", tone: "mixed", cards: ["ec-id-overview"], go: "ec-country-id" },
      { t: "Philippines", d: "Early ISI boom → Marcos debt and cronies → Ramos liberalisation. Growth 3.9%; sound banks softened 1997.", tone: "bad", cards: ["philfailure"], go: "ec-country-ph" } ] },
    { arrow: "comparative cluster analysis" },
    { row: [
      { t: "Growth compared", d: "Robust (Thailand) vs windfall (Indonesia) vs failure (Philippines).", tone: "context", cards: ["ec-cl-growth"], go: "ec-flow-cl-growth" },
      { t: "ISI → EOI", d: "Yes / partial / failed: cronies resisted ending protection.", tone: "context", cards: ["ec-cl-isi-eoi"], go: "ec-flow-cl-isieoi" },
      { t: "Role of the state", d: "Withdrawal vs 'bureaucratic capitalism' vs 'patrimonialist plunder'.", tone: "context", cards: ["ec-cl-state"], go: "ec-flow-cl-state" } ] },
    { row: [
      { t: "Ethnic Chinese", d: "Stabilising (Thailand) vs source of instability (Indonesia, Philippines).", tone: "context", cards: ["chinesecapital"], go: "ec-flow-cl-chinese" },
      { t: "Equity", d: "Regional/urban-rural gaps (Thailand, Indonesia) vs unresolved land ownership (Philippines).", tone: "context", cards: ["ec-cl-equity"], go: "ec-flow-cl-equity" },
      { t: "1997 AFC", d: "Thailand and Indonesia similar mechanism; Philippines the contrast case.", tone: "context", cards: ["ec-cl-afc-synthesis"], go: "ec-flow-cl-afc" },
      { t: "Exports 1985–2000", d: "Thailand and Indonesia diversified; Philippines concentrated (27.4% → 64.7%).", tone: "context", cards: ["ec-cl-exports"], go: "ec-flow-cl-exports" } ] },
    { t: "Cluster verdict", d: "Thailand succeeded via a capable private class and a state that withdrew; where the state was captured for rent, EOI stalled.", tone: "verdict", cards: ["ec-cl-isi-eoi"] }
  ],
  takeaways: [
    "Judge the state by its trajectory after the initial phase: withdrawal (Thailand) vs capture (Indonesia, Philippines).",
    "The Philippines shows the growth–stability trade-off: slower growth, softer landing in 1997."
  ]
});

L.push({
  id: "ec-cluster-bmvn", order: 5, level: 1, parent: "ec-top",
  title: "Cluster: Burma & Vietnam (socialist economies)",
  intro: "Both began with near-identical socialist strategies and failed for similar reasons; the divergence lies in what happened NEXT.",
  steps: [
    { t: "Shared start", d: "Heavy industry first, agricultural collectivisation, nationalisation, minority expulsion.", tone: "context", cards: ["burmavsvietnam"] },
    { t: "Shared failure", d: "Foreign exchange shortages, agricultural disincentives, lack of expertise.", tone: "bad", cards: ["burmavsvietnam"] },
    { arrow: "then they diverged" },
    { row: [
      { t: "Burma", d: "U Nu's Third Way → Ne Win's autarky (1962) → 8888 → SLORC's contradictory opening. GDP growth 4.3%, lowest.", tone: "bad", cards: ["ec-bm-paradox"], go: "ec-country-bm" },
      { t: "Vietnam", d: "Split North/South → failed 2nd FYP → Directive 100 → Doi Moi (1986) → 1990s growth of 8–9.5%.", tone: "good", cards: ["ec-vn-theme"], go: "ec-country-vn" } ] },
    { row: [
      { t: "Willingness to reform", d: "Burma reactive, decades too late; Vietnam proactive after the 1986 leadership change.", tone: "cause", cards: ["ec-vn-doimoi"] },
      { t: "Coherence of reform", d: "SLORC contradictory (export bans on 28 goods); Doi Moi consistent and mutually reinforcing.", tone: "cause", cards: ["ec-bm-tucker", "ec-vn-res10"] },
      { t: "International relations", d: "Burma a pariah under sanctions; Vietnam's US embargo lifted 1994.", tone: "cause", cards: ["ec-vn-integration"] } ] },
    { arrow: "compare" },
    { row: [
      { t: "Why Burma failed, Vietnam succeeded", d: "The three factors: willingness, coherence, international relations.", tone: "context", cards: ["burmavsvietnam"], go: "ec-flow-f3-bmvn" },
      { t: "Same flaw, different exits", d: "Vietnam pivoted pragmatically; Burma clung on until collapse.", tone: "context", cards: ["ec-f2-bmvn"], go: "ec-flow-bmvn-compare" },
      { t: "Three aims verdicts", d: "Burma hollow equity/nationalism; Vietnam re-balanced its aims.", tone: "context", cards: ["ec-f2-bmvn"], go: "ec-flow-f2-aims" } ] },
    { t: "Cluster verdict", d: "Policy, not starting point, decided the outcome: Burma an overall failure; Vietnam the best example of learning and adaptation.", tone: "verdict", cards: ["ec-f2-bmvn"] }
  ],
  takeaways: [
    "Don't assume socialism = automatic failure: Vietnam succeeded once it pragmatically adapted; Burma failed through extreme, rigid implementation.",
    "Explain the divergence with the three factors — don't just state the growth gap."
  ]
});

/* ---------- Level 2: countries ---------- */
L.push({
  id: "ec-country-sg", order: 6, level: 2, parent: "ec-cluster-sgmy",
  title: "Singapore: entrepot, expelled, excellence",
  intro: "Singapore's path in order — tap a phase for the detailed chart.",
  steps: [
    { t: "Starting point", d: "Almost no resources — relied on entrepot trade and human capital, so its success is more impressive for starting with almost nothing.", tone: "context", cards: ["ec-sg-context"] },
    { t: "1950s–1971: entrepot to forced EOI", d: "No resources; ISI under Malaysia (1960–65); Separation 1965 and British withdrawal (10% of national income) forced EOI. Winsemius, EDB.", tone: "policy", cards: ["ec-sg-context", "ec-sg-crisis"], go: "ec-flow-sg-1" },
    { t: "1965–79: the levers of EOI", d: "Incentives, training, labour peace, MNC-friendly FDI; 100% foreign ownership allowed 1978; manufacturing 29.1% of GDP by 1980.", tone: "policy", cards: ["ec-sg-levers", "ec-sg-fdi"], go: "ec-flow-sg-eoi" },
    { t: "1979–1990s: technology, services, region", d: "1979 Second Industrial Revolution; 1985 recession → 1986 'two engines' (Lee Hsien Loong); Growth Triangle, Suzhou.", tone: "policy", cards: ["ec-sg-sir", "ec-sg-services", "ec-sg-regional"], go: "ec-flow-sg-2" },
    { t: "The state's machinery", d: "~70 statutory boards, tripartism (NWC 1971), Temasek; intervention efficiency-driven, free of cronyism.", tone: "context", cards: ["ec-sg-boards", "ec-sg-nature"], go: "ec-flow-sg-govt" },
    { t: "Evaluation", d: "Lim Chong Yah's three factors; costs: rising Gini, external vulnerability (1985, 1997–98); weathered 1997 on sound fundamentals.", tone: "mixed", cards: ["ec-sg-lim", "ec-sg-limits", "ec-sg-1997"], go: "ec-flow-sg-eval" },
    { t: "Verdict", d: "Most successful by growth (8.3%, region's highest), by deliberately NOT prioritising nationalism and only partially addressing equity.", tone: "verdict", cards: ["ec-f2-mysg"] }
  ],
  takeaways: [
    "Success = free enterprise + outward orientation + able and honest government (Lim Chong Yah).",
    "Crisis as catalyst: Separation and British withdrawal forced the early turn to EOI."
  ]
});

L.push({
  id: "ec-country-my", order: 7, level: 2, parent: "ec-cluster-sgmy",
  title: "Malaysia: race, resources, restructuring",
  intro: "Malaysia's path in order — tap a phase for the detailed chart.",
  steps: [
    { t: "Starting point", d: "Rich in tin, rubber and palm oil; at independence (1957) tin and rubber were 85% of export earnings.", tone: "context", cards: ["ec-my-colonial"] },
    { t: "1957–69: laissez-faire ISI", d: "Colonial ethnic division of labour; pioneer firms 18 → 246 but non-discretionary ISI; Separation 1965 and May 1969 riots.", tone: "policy", cards: ["ec-my-colonial", "ec-my-pioneer"], go: "ec-flow-my-1" },
    { t: "1971–90: the NEP", d: "Equity and unity aims; FELDA, PERNAS, PNB, Petronas; bumiputera equity 2.4% → 20.3%, poverty 40.3% → 15%.", tone: "policy", cards: ["nep", "ec-my-nep-equity"], go: "ec-flow-my-nep" },
    { t: "1980s–90s: Mahathir's heavy industry", d: "HICOM losses and debt → privatisation (1983) → technology and human-capital deepening after 1986.", tone: "policy", cards: ["ec-my-hicom", "ec-my-privatisation", "ec-my-deepening"], go: "ec-flow-my-mahathir" },
    { t: "Finance and the 1997 crisis", d: "Deregulation → NPLs → 1989 re-regulation → easy credit again; 1997 via domestic stock/property overheating, not foreign debt.", tone: "bad", cards: ["ec-my-dereg", "ec-my-afc"], go: "ec-flow-my-finance" },
    { t: "Evaluation", d: "Growth and diversification succeeded; equity partial (30% target missed, gains to connected elite); unity arguably worsened.", tone: "mixed", cards: ["ec-my-eval-equity", "ec-my-eval-growth"], go: "ec-flow-my-eval" },
    { t: "Verdict", d: "Reasonably successful — the best BALANCE of the three aims among the case studies. GDP growth 6.7%.", tone: "verdict", cards: ["ec-f2-mysg"] }
  ],
  takeaways: [
    "'Race became the leitmotiv' (Drabble): Malaysian economic policy was always also ethnic policy.",
    "The state's role kept changing: laissez-faire → NEP → state heavy industry → privatisation → facilitation."
  ]
});

L.push({
  id: "ec-country-th", order: 8, level: 2, parent: "ec-cluster-tip",
  title: "Thailand: private capital and the EOI switch",
  intro: "Thailand's path in order — tap a phase for the detailed chart.",
  steps: [
    { t: "To 1957: never colonised, Phibun", d: "Autonomous Chinese commercial class; 1932 Revolution; Phibun's 'haphazard' (Hewison) state enterprises did not displace private capital.", tone: "policy", cards: ["ec-th-independence", "ec-th-phibun"], go: "ec-flow-thailand-1" },
    { t: "1957–77: Sarit and kanphatthana", d: "State from owner to enabler: infrastructure, planning bodies, private and foreign investment, US Cold War aid; but cronyism, protection.", tone: "policy", cards: ["ec-th-sarit", "ec-th-aid"], go: "ec-flow-thailand-2" },
    { t: "From 1977: switch to EOI", d: "Shocks and debt → 4th Plan (1977–81); baht peg, Plaza Accord (1985); state scaled back (6th Plan 1987).", tone: "policy", cards: ["thaieoi", "ec-th-peg", "ec-th-scaling"], go: "ec-flow-thailand-3" },
    { t: "Evaluation and road to 1997", d: "Gini 0.41 → 0.52; Bangkok's GDP share rose; BIBF and short-term debt made Thailand the AFC epicentre.", tone: "mixed", cards: ["ec-th-inequality", "afcthai"], go: "ec-flow-thailand-4" },
    { row: [
      { t: "Ethnic Chinese", d: "10% of population, 81% of listed capitalisation; allowed autonomy and periodically co-opted — a stabilising force.", tone: "context", cards: ["ec-th-chinese"], go: "ec-flow-cl-chinese" },
      { t: "1997 crisis", d: "BIBF (1993); 70% of US$69bn foreign bank debt short-term; baht floated 2 July 1997 — the epicentre.", tone: "bad", cards: ["afcthai"], go: "ec-flow-cl-afc" } ] },
    { t: "Verdict", d: "Second only to Singapore in growth (6.8%); successful EOI by the mid-1980s — 'the market compensated for government failures'.", tone: "verdict", cards: ["ec-th-govt", "ec-th-eoi-success"] }
  ],
  takeaways: [
    "Domestic private (Chinese) capital, not the state or foreign capital, explains Thailand's success relative to Indonesia and the Philippines.",
    "Growth without equity, and liberalisation without regulatory capacity, set up 1997."
  ]
});

L.push({
  id: "ec-country-id", order: 9, level: 2, parent: "ec-cluster-tip",
  title: "Indonesia: oil, the New Order and cronyism",
  intro: "Indonesia's path in order — tap a phase for the detailed chart.",
  steps: [
    { t: "1949–65: Guided Economy collapse", d: "No domestic bourgeoisie, so state dominant by necessity; Sukarno's nationalism, ISI and Konfrontasi ended in hyper-inflation.", tone: "policy", cards: ["ec-id-weak", "ec-id-guided"], go: "ec-flow-indonesia-1" },
    { t: "1966–86: New Order, aid and oil", d: "Suharto reopened to Western aid (IGGI) and FDI; oil windfall funded state-led growth; rice self-sufficiency; Pertamina debt.", tone: "policy", cards: ["ec-id-neworder", "ec-id-oil", "pertamina"], go: "ec-flow-indonesia-2" },
    { t: "1986–1990s: deregulation and cronyism", d: "Oil glut forced deregulation, FDI and EOI; non-oil exports 31% → 50%, but gains to conglomerates (Astra, Liem).", tone: "policy", cards: ["ec-id-glut", "ec-id-dereg-reality"], go: "ec-flow-indonesia-3" },
    { t: "Evaluation", d: "Poverty 60% → 11%; but crony monopolies, urban–rural gap 42% → 92%, Asia's largest debt, relationship lending (BCA).", tone: "mixed", cards: ["ec-id-growth", "ec-id-limits", "ec-id-financial"], go: "ec-flow-indonesia-4" },
    { row: [
      { t: "Ethnic Chinese", d: "3.8% of population, 73% of listed capitalisation; cukong system; Malari riots (1974); anti-Chinese violence after 1997.", tone: "context", cards: ["ec-id-chinese"], go: "ec-flow-cl-chinese" },
      { t: "1997 crisis", d: "Oct 1988 reform: banks 124 → 244; Liem's BCA lent 60% to Liem firms; rupiah collapsed — among the worst-hit.", tone: "bad", cards: ["ec-id-financial"], go: "ec-flow-cl-afc" } ] },
    { t: "Verdict", d: "Growth 5.7%, but windfall-driven and less robust; partial EOI; state necessary yet 'bureaucratic capitalism' (Robison); worst-hit in 1997.", tone: "verdict", cards: ["ec-id-govt-eval", "ec-id-robison"] }
  ],
  takeaways: [
    "Indonesia was 'lucky' (Vatikiotis): aid, FDI guarantees and oil propped up growth.",
    "Deregulation nominally shrank the state but reinforced it via cronyism."
  ]
});

L.push({
  id: "ec-country-ph", order: 10, level: 2, parent: "ec-cluster-tip",
  title: "Philippines: early promise, cronies and debt",
  intro: "The Philippines' path in order — tap a phase for the detailed chart.",
  steps: [
    { t: "1950s–65: early ISI boom to failure", d: "'Asia's second NIC': manufacturing 8% → 20%; protection bred inefficiency; Garcia's 'Filipino First'; land reform blocked.", tone: "policy", cards: ["ec-ph-isi", "ec-ph-filipino-first"], go: "ec-flow-philippines-1" },
    { t: "1965–86: Marcos' dependent state capitalism", d: "Foreign loans, state corporations, cronies; debt US$2.2bn → US$25–27bn; 1983 Aquino assassination exposed it.", tone: "policy", cards: ["ec-ph-1970s", "ec-ph-debt", "crony"], go: "ec-flow-philippines-2" },
    { t: "1986–98: Aquino and Ramos", d: "Aquino crippled by Marcos debt; Ramos' 'Philippines 2000' liberalised and privatised — real turnaround, elites still gained.", tone: "policy", cards: ["ec-ph-aquino", "ec-ph-ramos"], go: "ec-flow-philippines-3" },
    { t: "Evaluation", d: "Export concentration 27.4% → 64.7%; crony bailouts; but conservative banks (3% NPLs) avoided 1997's excesses (Delhaise).", tone: "mixed", cards: ["ec-ph-quant", "ec-ph-banks", "ec-ph-delhaise"], go: "ec-flow-philippines-4" },
    { row: [
      { t: "Ethnic Chinese", d: "1.3% of population, 50–60% of listed capitalisation; targeted under Garcia, co-opted under Marcos, 1990s kidnapping backlash.", tone: "context", cards: ["ec-ph-chinese"], go: "ec-flow-cl-chinese" },
      { t: "1997 crisis", d: "Under 20% of debt short-term; peso floated 11 July 1997 deliberately, not forced — affected but not as severely.", tone: "mixed", cards: ["ec-ph-banks"], go: "ec-flow-cl-afc" } ] },
    { t: "Verdict", d: "Clear underperformer (3.9% growth, lowest): failed the ISI → EOI transition; cronyism and political instability repeatedly interrupted reform.", tone: "verdict", cards: ["philfailure", "ec-cl-isi-eoi"] }
  ],
  takeaways: [
    "Every land reform attempt was diluted by a landowner-dominated Congress.",
    "Slower growth but a softer landing in 1997: the growth–stability trade-off."
  ]
});

L.push({
  id: "ec-country-bm", order: 11, level: 2, parent: "ec-cluster-bmvn",
  title: "Burma: best endowed, worst outcome",
  intro: "Burma's path in order — tap a phase for the detailed chart.",
  steps: [
    { t: "Starting point", d: "Rich in rice, teak, oil and minerals — the BEST endowed at independence.", tone: "context", cards: ["ec-bm-paradox"] },
    { t: "1948–62: U Nu's Pyidawtha", d: "Resource-rich start; Third Way welfare plan failed by 1956 — state monopolies (SAMB) killed incentives; rice slump, insurgency.", tone: "policy", cards: ["ec-bm-pyidawtha", "ec-bm-pyidawtha-fail"], go: "ec-flow-burma-1" },
    { t: "1962–71: Burmese Way to Socialism", d: "Ne Win nationalised almost everything, expelled Indians/Chinese, shut off trade; rice exports collapsed; black market grew.", tone: "policy", cards: ["burmeseway", "ec-bm-rice"], go: "ec-flow-burma-2" },
    { t: "1971–88: Four-Year Plans to 8888", d: "Partial reforms and aid but shallow recovery; 1985/1987 demonetisations wiped out savings → 8888 Uprising.", tone: "policy", cards: ["ec-bm-fouryear", "demonetisation"], go: "ec-flow-burma-3" },
    { t: "After 1988: SLORC's opening", d: "Market rhetoric but state and army kept control; export bans on 28 goods; sanctions — Tucker: largely cosmetic.", tone: "policy", cards: ["ec-bm-tucker", "ec-bm-limits"], go: "ec-flow-burma-4" },
    { t: "Evaluation", d: "Worst numbers in SEA despite the best start; exports 21.0% → 1.3% of GDP; policy, not endowment, explains it.", tone: "bad", cards: ["ec-bm-snapshot", "ec-bm-equity"], go: "ec-flow-burma-eval" },
    { t: "Verdict", d: "Overall failure (4.3% growth): equity and nationalism without growth are a hollow victory, not real 'success'.", tone: "verdict", cards: ["ec-newin-aims", "ec-f2-bmvn"] }
  ],
  takeaways: [
    "Burma's failure is more damning because it was the best endowed at independence.",
    "Use Burma to argue government policy was the decisive factor in outcomes (Than & Tan)."
  ]
});

L.push({
  id: "ec-country-vn", order: 12, level: 2, parent: "ec-cluster-bmvn",
  title: "Vietnam: the pragmatic pivot",
  intro: "Vietnam's path in order — tap a phase for the detailed chart.",
  steps: [
    { t: "Starting point", d: "Rich in minerals in the North, fertile Mekong Delta in the South; a split colonial legacy.", tone: "context", cards: ["ec-vn-colonial"] },
    { t: "1954–75: split by ideology", d: "Capitalist, US-dependent South vs socialist, Soviet/Chinese-backed North; five percent plots proved incentives worked; war devastation.", tone: "policy", cards: ["ec-vn-south", "ec-vn-north", "ec-vn-plots"], go: "ec-flow-vietnam-1" },
    { t: "1976–80: reunification, failed 2nd FYP", d: "North's heavy-industry model imposed on the South; fierce peasant resistance; 12m vs 21m ton target.", tone: "bad", cards: ["vietnamfyp", "ec-vn-fyp-causes"], go: "ec-flow-vietnam-2" },
    { t: "1981–90: Directive 100 to Doi Moi", d: "Directive 100 (1981) cracked the system; Le Duan's death enabled Doi Moi (1986); Resolution 10 (1988) privatised agriculture.", tone: "policy", cards: ["ec-vn-directive100", "ec-vn-doimoi", "ec-vn-res10"], go: "ec-flow-vietnam-3" },
    { t: "1990s: growth and integration", d: "US embargo lifted 1994; ASEAN; 9.5% growth (1995–96, world's highest); 3rd-largest rice exporter.", tone: "good", cards: ["ec-vn-1990s", "ec-vn-integration"], go: "ec-flow-vietnam-4" },
    { t: "Evaluation", d: "Strong numbers, but state sector still 50% of output (1997), corruption, lagging manufacturing, rising regional/ethnic inequality.", tone: "mixed", cards: ["ec-vn-limits", "ec-vn-govt"], go: "ec-flow-vietnam-eval" },
    { t: "Verdict", d: "Best example of LEARNING and ADAPTATION — succeeded by re-balancing the three aims when the original mix failed.", tone: "verdict", cards: ["ec-f2-bmvn"] }
  ],
  takeaways: [
    "Pragmatic, flexible governments outperform ideological ones — even under one-party rule.",
    "Equity worsened after Doi Moi: growth came at a cost."
  ]
});
})();
