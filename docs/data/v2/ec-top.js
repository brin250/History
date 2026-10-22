// v2 flow charts: overview maps for SEA economic change (ec-top, the three cluster charts, the seven country charts)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ec = window.FLOWS2.ec || []);

/* ---------- Level 0 ---------- */
L.push({
  id: "ec-top", order: 0, level: 0,
  kind: "chain",
  title: "SEA economic change: the whole topic",
  question: "How, and how well, did Southeast Asian states pursue growth, equity and economic nationalism?",
  intro: "Start here. Every state chased the same three aims; tap a cluster to drill down to countries and phases, or a comparison chart to argue across cases.",
  clusters: [
    { title: "Aims and approaches", summary: "Three conflicting aims; Owen's approaches; ISI vs EOI; Tarling's roles.", steps: [
      { row: [
        { id: "top-aims", type: "context", t: "The three aims: big picture", d: "Growth, equity and economic nationalism pull against each other; see aims → approaches → paths → outcomes on one chart.", cards: ["ec-three-aims", "ec-f1-paths"], go: "ec-flow-bigpicture" },
        { id: "top-framework", type: "context", t: "Lecture 1 framework", d: "Owen's capitalist / socialist / 'Third Way' approaches; ISI vs EOI; Tarling's two government roles; why the colonial vacuum made the state lead.", cards: ["ec-owen", "ec-isi-eoi", "ec-why-govt"], go: "ec-flow-framework" } ] }
    ] },
    { link: "led to", how: "Owen's categories sort the cases into capitalist and socialist economies, giving three clusters of cases.", title: "Three clusters of cases", summary: "Capitalist pairs and trio; the socialist pair.", steps: [
      { row: [
        { id: "top-sgmy", type: "consequence", sign: "+", t: "Singapore & Malaysia", d: "Capitalist; forced early EOI (Singapore) vs NEP restructuring (Malaysia). Best growth vs best balance of aims.", cards: ["ec-sg-vs-my"], go: "ec-cluster-sgmy" },
        { id: "top-tip", type: "consequence", sign: "±", t: "Thailand, Indonesia, Philippines", d: "Capitalist; Thailand made EOI, Indonesia partial (oil, cronies), Philippines failed.", ev: ["Thailand and Indonesia were hit hardest in 1997."], cards: ["ec-cl-growth"], go: "ec-cluster-tip" },
        { id: "top-bmvn", type: "consequence", sign: "±", t: "Burma & Vietnam", d: "Socialist; same heavy-industry-first flaw. Vietnam pivoted (Doi Moi 1986); Burma clung to autarky — best endowed, worst outcome.", cards: ["burmavsvietnam"], go: "ec-cluster-bmvn" } ] }
    ] },
    { link: "followed by", how: "Comparing across countries tests who balanced the three aims and who made the ISI → EOI transition in time.", title: "Compare outcomes", summary: "Aims verdicts, the common track, the growth ranking.", steps: [
      { row: [
        { id: "top-f2", type: "judgement", t: "Three aims verdicts", d: "Malaysia best balance; Singapore best growth; Vietnam best adaptation; Burma hollow equity/nationalism.", cards: ["ec-f2-mysg", "ec-f2-bmvn"], go: "ec-flow-f2-aims" },
        { id: "top-f5", type: "context", t: "ISI → EOI → diversification", d: "Capitalist economies followed this track at different speeds; socialist ones first had to abandon central planning.", cards: ["ec-f5-pattern"], go: "ec-flow-f5-pattern" },
        { id: "top-growth", type: "evidence", t: "Growth ranking", date: "1961–2001", d: "Singapore > Malaysia > Thailand > Indonesia > Myanmar > Philippines.", cards: ["ec-gdp-table"], go: "ec-flow-cl-growth" } ] }
    ] },
    { link: "followed by", how: "Cross-cutting themes explain the ranking: the nature of intervention, the Chinese minority and exposure in 1997.", title: "Compare themes", summary: "The state, ethnic Chinese capital, the 1997 crisis.", steps: [
      { row: [
        { id: "top-state", type: "context", t: "Role of the state", d: "Intervention was universal; judge its nature and direction — scaled back (Thailand) or captured (Indonesia, Philippines).", cards: ["ec-cl-state"], go: "ec-flow-cl-state" },
        { id: "top-chinese", type: "context", t: "Ethnic Chinese", d: "Disproportionate Chinese control region-wide; the political response varied — stabilising or destabilising.", cards: ["chinesecapital"], go: "ec-flow-cl-chinese" },
        { id: "top-afc", type: "consequence", sign: "-", t: "Asian Financial Crisis", date: "1997", d: "Growth speed via liberalisation vs financial stability: no SEA economy escaped the trade-off.", cards: ["afccompare"], go: "ec-flow-cl-afc" } ] }
    ] },
    { link: "led to", how: "Weighing the three aims across cases, with numbers, produces the verdict on HOW the state intervened.", title: "Judgement and exam technique", summary: "How to argue, memory cues, model essays, overall verdict.", steps: [
      { row: [
        { id: "top-argue", type: "judgement", t: "How to argue", d: "Weigh the three aims, compare countries, cite numbers, judge the nature of intervention.", cards: ["ec-pitfalls"], go: "ec-flow-howtoargue" },
        { id: "top-memory", type: "judgement", t: "Memory cues", d: "'Race, Resources, Restructuring'; 'Entrepot, Expelled, Excellence'; 'Best Endowed, Worst Outcome'; 'Pragmatic Pivot'.", cards: ["ec-memory"], go: "ec-flow-f7-memory" },
        { id: "top-essays", type: "judgement", t: "Essay arguments", d: "Model 'How far…?' arguments: a claim, evidence for and against, and a weighed judgement.", go: "ec-arg-1" } ] },
      { link: "supports", how: "Each technique points to the same discriminator: the nature and direction of intervention, not whether it occurred.", },
      { id: "top-verdict", type: "judgement", t: "Overall verdict", d: "Not WHETHER the state intervened but HOW and HOW WELL — and whether it made the ISI → EOI transition in time (Salvatore).", cards: ["ec-salvatore", "ec-why-govt"] }
    ] }
  ],
  judge: { prompt: "Which best explains why SEA economies' outcomes diverged? Rank them.", factors: ["top-state", "top-f5", "top-chinese", "top-afc"],
           notes_view: "Not whether but HOW (direct SOE control vs indirect incentives) and HOW WELL (efficient vs corrupt/cronyist) government intervened — and whether the ISI → EOI transition came at the right time (Salvatore)." },
  historians: [
    { who: "Owen", view: "Approaches were capitalist, socialist or a 'Third Way' straddling both.", nodes: ["top-framework"] },
    { who: "Tarling", view: "Governments had two roles: planning and participation.", nodes: ["top-framework"] },
    { who: "Salvatore", view: "ISI and EOI are sequential; success depended on transitioning at the right time.", nodes: ["top-f5", "top-verdict"] }
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
  kind: "causal",
  title: "Cluster: Singapore & Malaysia",
  question: "Why did Singapore and Malaysia, despite a shared past, follow different paths?",
  intro: "Two capitalist neighbours with a shared past: resources, ethnic politics and governance quality explain their different paths.",
  clusters: [
    { title: "Shared base, different factors", summary: "Shared capitalist base; resources, ethnic politics, governance differ.", steps: [
      { id: "sgmy-shared", type: "context", t: "Shared", d: "Capitalist; relatively honest, technocratic governments (vs Philippines/Indonesia); both followed ISI → EOI → diversification.", cards: ["ec-sg-vs-my"] },
      { link: "followed by", how: "Within that shared base, three differences shaped each country's path." },
      { row: [
        { id: "sgmy-res", type: "long_term_cause", t: "Resources differ", d: "Malaysia's tin and rubber let it delay EOI; Singapore's lack of resources forced early, decisive EOI.", cards: ["ec-my-colonial", "ec-sg-context"] },
        { id: "sgmy-eth", type: "long_term_cause", t: "Ethnic politics differ", d: "Malaysia shaped by Malay–Chinese inequality (NEP); PAP governance not built around ethnic redistribution.", cards: ["nep", "ec-my-chinese"] },
        { id: "sgmy-gov", type: "long_term_cause", t: "Governance differs", d: "Singapore freer from interest-group capture; UMNO-linked privatisation contracts in Malaysia.", cards: ["ec-sg-nature", "ec-my-privatisation"] } ] }
    ] },
    { link: "led to", how: "Resources shaped EOI timing, ethnic politics shaped priorities and governance shaped consistency in each country.", title: "Each country", summary: "Singapore 8.3% growth; Malaysia 6.7%.", steps: [
      { row: [
        { id: "sgmy-sg", type: "consequence", sign: "+", t: "Singapore", d: "Entrepot → forced EOI (1965/1971) → technology → services → regionalisation. GDP growth 8.3%, region's highest.", cards: ["ec-sg-narrative"], go: "ec-country-sg" },
        { id: "sgmy-my", type: "consequence", sign: "+", t: "Malaysia", d: "Laissez-faire ISI → 1969 riots → NEP → HICOM → privatisation → deepening. GDP growth 6.7%.", cards: ["ec-my-narrative"], go: "ec-country-my" } ] }
    ] },
    { link: "followed by", how: "Set side by side, the two cases are compared on causes, aims and the common regional track.", title: "Compare and judge", summary: "F4 differences, F2 aims, F5 pattern; cluster verdict.", steps: [
      { row: [
        { id: "sgmy-f4", type: "interpretation", t: "Singapore vs Malaysia", d: "Resources shaped EOI timing; ethnic politics shaped priorities; governance shaped consistency.", cards: ["ec-sg-vs-my"], go: "ec-flow-f4-sgmy" },
        { id: "sgmy-f2", type: "interpretation", t: "Three aims verdicts", d: "How each scored on growth, equity and nationalism.", cards: ["ec-f2-mysg"], go: "ec-flow-f2-aims" },
        { id: "sgmy-f5", type: "interpretation", t: "Common pattern", d: "Singapore fastest to EOI; Malaysia NEP-guided but FDI-led EOI.", cards: ["ec-f5-pattern"], go: "ec-flow-f5-pattern" } ] },
      { link: "led to", how: "Weighing all three aims, not growth alone, separates the best balance from the best growth." },
      { id: "sgmy-verdict", type: "judgement", t: "Cluster verdict", d: "Malaysia: best BALANCE of the three aims. Singapore: most successful by growth, by NOT prioritising nationalism and only partly addressing equity.", cards: ["ec-f2-mysg"] }
    ] }
  ],
  judge: { prompt: "Which difference mattered most for Singapore's and Malaysia's different paths? Rank them.", factors: ["sgmy-res", "sgmy-eth", "sgmy-gov"],
           notes_view: "Resource endowment forced different paths (EOI delayed vs forced early); ethnic politics shaped priorities (NEP); Singapore's freedom from interest-group capture allowed faster, more consistent planning." },
  historians: [],
  takeaways: [
    "Pair F4 with F2: Malaysia best balance, Singapore best growth.",
    "1997: Malaysia hit via domestic stock/property overheating; Singapore weathered it on sound fundamentals."
  ]
});

L.push({
  id: "ec-cluster-tip", order: 4, level: 1, parent: "ec-top",
  kind: "causal",
  title: "Cluster: Thailand, Indonesia & the Philippines",
  question: "Why did Thailand succeed where Indonesia and the Philippines fell short?",
  intro: "The Lecture 3 cluster: all three began with heavy state intervention out of necessity; what happened next — withdrawal or capture — decided the outcome.",
  clusters: [
    { title: "Shared start", summary: "Heavy initial state role; Chinese economic control; inequality.", steps: [
      { id: "tip-shared", type: "context", t: "Shared", d: "Capitalist; heavy initial state role; disproportionate Chinese economic control; growth with worsening or persistent inequality.", cards: ["ec-cl-state", "ec-cl-equity"] },
      { link: "followed by", how: "After the initial phase of necessary intervention, the state's trajectory diverged: scaled back or captured for rent." },
      { id: "tip-differ", type: "long_term_cause", t: "How they differ", d: "State scaled back (Thailand) vs reinforced via cronyism (Indonesia) vs intensified under Marcos (Philippines).", cards: ["ec-cl-state"] }
    ] },
    { link: "led to", how: "A withdrawing state let Thailand's private class drive EOI; where the state was captured for rent, EOI stalled.", title: "Each country", summary: "Thailand 6.8%, Indonesia 5.7%, Philippines 3.9%.", steps: [
      { row: [
        { id: "tip-th", type: "consequence", sign: "+", t: "Thailand", d: "Never colonised → Phibun → Sarit → EOI from 1977. Growth 6.8%; private Chinese class decisive; 1997 epicentre.", cards: ["ec-th-overview"], go: "ec-country-th" },
        { id: "tip-id", type: "consequence", sign: "±", t: "Indonesia", d: "Guided Economy collapse → New Order aid and oil → deregulation captured by cronies. Growth 5.7%; worst-hit 1997.", cards: ["ec-id-overview"], go: "ec-country-id" },
        { id: "tip-ph", type: "consequence", sign: "-", t: "Philippines", d: "Early ISI boom → Marcos debt and cronies → Ramos liberalisation. Growth 3.9%; sound banks softened 1997.", cards: ["philfailure"], go: "ec-country-ph" } ] }
    ] },
    { link: "followed by", how: "Comparative cluster analysis sets the three side by side on growth, the EOI transition and the state.", title: "Compare outcomes", summary: "Growth, ISI → EOI, role of the state.", steps: [
      { row: [
        { id: "tip-growth", type: "interpretation", t: "Growth compared", d: "Robust (Thailand) vs windfall (Indonesia) vs failure (Philippines).", cards: ["ec-cl-growth"], go: "ec-flow-cl-growth" },
        { id: "tip-isieoi", type: "interpretation", t: "ISI → EOI", d: "Yes / partial / failed: cronies resisted ending protection.", cards: ["ec-cl-isi-eoi"], go: "ec-flow-cl-isieoi" },
        { id: "tip-state", type: "interpretation", t: "Role of the state", d: "Withdrawal vs 'bureaucratic capitalism' vs 'patrimonialist plunder'.", cards: ["ec-cl-state"], go: "ec-flow-cl-state" } ] }
    ] },
    { link: "followed by", how: "Further themes compare Chinese capital, equity, the 1997 crisis and export structure.", title: "Compare themes and judge", summary: "Chinese, equity, 1997, exports; cluster verdict.", steps: [
      { row: [
        { id: "tip-chinese", type: "interpretation", t: "Ethnic Chinese", d: "Stabilising (Thailand) vs source of instability (Indonesia, Philippines).", cards: ["chinesecapital"], go: "ec-flow-cl-chinese" },
        { id: "tip-equity", type: "interpretation", t: "Equity", d: "Regional/urban-rural gaps (Thailand, Indonesia) vs unresolved land ownership (Philippines).", cards: ["ec-cl-equity"], go: "ec-flow-cl-equity" },
        { id: "tip-afc", type: "interpretation", t: "1997 AFC", d: "Thailand and Indonesia similar mechanism; Philippines the contrast case.", cards: ["ec-cl-afc-synthesis"], go: "ec-flow-cl-afc" },
        { id: "tip-exports", type: "evidence", t: "Exports", date: "1985–2000", d: "Thailand and Indonesia diversified; Philippines concentrated (27.4% → 64.7%).", cards: ["ec-cl-exports"], go: "ec-flow-cl-exports" } ] },
      { link: "led to", how: "The comparisons show the decisive variable was a capable private class or a state willing to withdraw." },
      { id: "tip-verdict", type: "judgement", t: "Cluster verdict", d: "Thailand succeeded via a capable private class and a state that withdrew; where the state was captured for rent, EOI stalled.", cards: ["ec-cl-isi-eoi"] }
    ] }
  ],
  judge: { prompt: "Rank Thailand, Indonesia and the Philippines by success — and say why.", factors: ["tip-th", "tip-id", "tip-ph"],
           notes_view: "Thailand made a successful, sustained EOI transition by the mid-1980s; Indonesia's growth was commodity-windfall driven and less robust; the Philippines is the clear underperformer, failing the ISI → EOI transition." },
  historians: [
    { who: "Hewison", view: "In Thailand the market 'compensated for government failures'.", nodes: ["tip-state", "tip-th"] },
    { who: "Robison", view: "Indonesia's state power became 'bureaucratic capitalism' — personal patronage.", nodes: ["tip-state", "tip-id"] }
  ],
  takeaways: [
    "Judge the state by its trajectory after the initial phase: withdrawal (Thailand) vs capture (Indonesia, Philippines).",
    "The Philippines shows the growth–stability trade-off: slower growth, softer landing in 1997."
  ]
});

L.push({
  id: "ec-cluster-bmvn", order: 5, level: 1, parent: "ec-top",
  kind: "causal",
  title: "Cluster: Burma & Vietnam (socialist economies)",
  question: "Why did Burma fail where Vietnam eventually succeeded?",
  intro: "Both began with near-identical socialist strategies and failed for similar reasons; the divergence lies in what happened NEXT.",
  clusters: [
    { title: "Shared start and failure", summary: "Same socialist strategy, same failures.", steps: [
      { id: "bv-start", type: "context", t: "Shared start", d: "Heavy industry first, agricultural collectivisation, nationalisation, minority expulsion.", cards: ["burmavsvietnam"] },
      { link: "led to", how: "Both near-identical socialist strategies failed for similar reasons." },
      { id: "bv-fail", type: "consequence", sign: "-", t: "Shared failure", d: "Foreign exchange shortages, agricultural disincentives, lack of expertise.", cards: ["burmavsvietnam"] }
    ] },
    { link: "followed by", how: "The critical divergence lies in what happened NEXT, explained by three factors.", title: "Why they diverged", summary: "Willingness, coherence, international relations.", steps: [
      { row: [
        { id: "bv-will", type: "short_term_cause", t: "Willingness to reform", d: "Burma reactive, decades too late; Vietnam proactive after the 1986 leadership change.", cards: ["ec-vn-doimoi"] },
        { id: "bv-coh", type: "short_term_cause", t: "Coherence of reform", d: "SLORC contradictory (export bans on 28 goods); Doi Moi consistent and mutually reinforcing.", cards: ["ec-bm-tucker", "ec-vn-res10"] },
        { id: "bv-ir", type: "short_term_cause", t: "International relations", d: "Burma a pariah under sanctions; Vietnam's US embargo lifted 1994.", cards: ["ec-vn-integration"] } ] }
    ] },
    { link: "led to", how: "Reactive, contradictory, isolated reform kept Burma stagnant; proactive, coherent reform and lifted embargo let Vietnam grow.", title: "Then they diverged", summary: "Burma 4.3%, lowest; Vietnam 8–9.5% in the 1990s.", steps: [
      { row: [
        { id: "bv-bm", type: "consequence", sign: "-", t: "Burma", d: "U Nu's Third Way → Ne Win's autarky (1962) → 8888 → SLORC's contradictory opening. GDP growth 4.3%, lowest.", cards: ["ec-bm-paradox"], go: "ec-country-bm" },
        { id: "bv-vn", type: "consequence", sign: "+", t: "Vietnam", d: "Split North/South → failed 2nd FYP → Directive 100 → Doi Moi (1986) → 1990s growth of 8–9.5%.", cards: ["ec-vn-theme"], go: "ec-country-vn" } ] }
    ] },
    { link: "followed by", how: "Comparison charts set the two side by side on the three factors, their exits and the three aims.", title: "Compare and judge", summary: "F3 factors, same flaw, aims verdicts; cluster verdict.", steps: [
      { row: [
        { id: "bv-f3", type: "interpretation", t: "Why Burma failed, Vietnam succeeded", d: "The three factors: willingness, coherence, international relations.", cards: ["burmavsvietnam"], go: "ec-flow-f3-bmvn" },
        { id: "bv-exits", type: "interpretation", t: "Same flaw, different exits", d: "Vietnam pivoted pragmatically; Burma clung on until collapse.", cards: ["ec-f2-bmvn"], go: "ec-flow-bmvn-compare" },
        { id: "bv-f2", type: "interpretation", t: "Three aims verdicts", d: "Burma hollow equity/nationalism; Vietnam re-balanced its aims.", cards: ["ec-f2-bmvn"], go: "ec-flow-f2-aims" } ] },
      { link: "led to", how: "Since both started alike and failed alike, the divergence points to policy rather than starting point." },
      { id: "bv-verdict", type: "judgement", t: "Cluster verdict", d: "Policy, not starting point, decided the outcome: Burma an overall failure; Vietnam the best example of learning and adaptation.", cards: ["ec-f2-bmvn"] }
    ] }
  ],
  judge: { prompt: "Which factor best explains why Burma failed where Vietnam succeeded? Rank them.", factors: ["bv-will", "bv-coh", "bv-ir"],
           notes_view: "Burma's reform was reactive, decades too late and contradictory, leaving it a sanctioned pariah; Vietnam's 1986 leadership change enabled proactive, coherent Doi Moi and the 1994 embargo lift." },
  historians: [
    { who: "Tucker", view: "SLORC proclaimed a market economy yet kept the initiative in state hands — a core contradiction.", nodes: ["bv-coh"] }
  ],
  takeaways: [
    "Don't assume socialism = automatic failure: Vietnam succeeded once it pragmatically adapted; Burma failed through extreme, rigid implementation.",
    "Explain the divergence with the three factors — don't just state the growth gap."
  ]
});

/* ---------- Level 2: countries ---------- */
L.push({
  id: "ec-country-sg", order: 6, level: 2, parent: "ec-cluster-sgmy",
  kind: "chain",
  title: "Singapore: entrepot, expelled, excellence",
  question: "How did Singapore become the region's top growth performer, and at what cost?",
  intro: "Singapore's path in order — tap a phase for the detailed chart.",
  clusters: [
    { title: "From entrepot to forced EOI", summary: "No resources; Separation and withdrawal force EOI.", steps: [
      { id: "sg-start", type: "context", t: "Starting point", d: "Almost no resources — relied on entrepot trade and human capital, so its success is more impressive for starting with almost nothing.", cards: ["ec-sg-context"] },
      { link: "led to", how: "With no resources and then no hinterland, Separation and British withdrawal forced an early turn to EOI." },
      { id: "sg-p1", type: "policy", t: "Entrepot to forced EOI", date: "1950s–1971", d: "No resources; ISI under Malaysia (1960–65); Separation 1965 and British withdrawal (10% of national income) forced EOI. Winsemius, EDB.", cards: ["ec-sg-context", "ec-sg-crisis"], go: "ec-flow-sg-1" },
      { link: "led to", how: "Forced into EOI, the state built incentives, training and labour peace to attract MNC investment." },
      { id: "sg-p2", type: "policy", t: "The levers of EOI", date: "1965–79", d: "Incentives, training, labour peace, MNC-friendly FDI; 100% foreign ownership allowed 1978; manufacturing 29.1% of GDP by 1980.", cards: ["ec-sg-levers", "ec-sg-fdi"], go: "ec-flow-sg-eoi" }
    ] },
    { link: "followed by", how: "From 1979 Singapore upgraded to technology, then services and the region, run by its state machinery.", title: "Upgrading", summary: "Technology, services, regionalisation; statutory boards.", steps: [
      { row: [
        { id: "sg-p3", type: "policy", t: "Technology, services, region", date: "1979–1990s", d: "1979 Second Industrial Revolution; 1985 recession → 1986 'two engines' (Lee Hsien Loong); Growth Triangle, Suzhou.", cards: ["ec-sg-sir", "ec-sg-services", "ec-sg-regional"], go: "ec-flow-sg-2" },
        { id: "sg-govt", type: "context", t: "The state's machinery", d: "~70 statutory boards, tripartism (NWC 1971), Temasek; intervention efficiency-driven, free of cronyism.", cards: ["ec-sg-boards", "ec-sg-nature"], go: "ec-flow-sg-govt" } ] }
    ] },
    { link: "led to", how: "Outward, state-led growth brought the region's top growth but also inequality and external exposure.", title: "Judge", summary: "Lim's three factors, costs, verdict.", steps: [
      { id: "sg-eval", type: "consequence", sign: "±", t: "Evaluation", d: "Lim Chong Yah's three factors; costs: rising Gini, external vulnerability (1985, 1997–98); weathered 1997 on sound fundamentals.", cards: ["ec-sg-lim", "ec-sg-limits", "ec-sg-1997"], go: "ec-flow-sg-eval" },
      { link: "supports", how: "Weighing growth against equity and nationalism gives a qualified verdict." },
      { id: "sg-verdict", type: "judgement", t: "Verdict", d: "Most successful by growth (8.3%, region's highest), by deliberately NOT prioritising nationalism and only partially addressing equity.", cards: ["ec-f2-mysg"] }
    ] }
  ],
  judge: { prompt: "Which factor mattered most for Singapore's success? Rank them.", factors: ["sg-start", "sg-p1", "sg-p2", "sg-p3", "sg-govt"],
           notes_view: "Free enterprise, outward orientation and able, honest government (Lim Chong Yah) — 'leadership of the state was crucial'. Most successful by growth, but by NOT prioritising nationalism and only partially addressing equity." },
  historians: [
    { who: "Lim Chong Yah", view: "Free enterprise, outward orientation, able and honest government; the state's leadership was indispensable.", nodes: ["sg-eval", "sg-govt"] }
  ],
  takeaways: [
    "Success = free enterprise + outward orientation + able and honest government (Lim Chong Yah).",
    "Crisis as catalyst: Separation and British withdrawal forced the early turn to EOI."
  ]
});

L.push({
  id: "ec-country-my", order: 7, level: 2, parent: "ec-cluster-sgmy",
  kind: "chain",
  title: "Malaysia: race, resources, restructuring",
  question: "How far did Malaysia balance growth, equity and economic nationalism?",
  intro: "Malaysia's path in order — tap a phase for the detailed chart.",
  clusters: [
    { title: "Resources, ISI and the NEP", summary: "Tin and rubber; laissez-faire ISI; 1969 riots; NEP.", steps: [
      { id: "my-start", type: "context", t: "Starting point", d: "Rich in tin, rubber and palm oil; at independence (1957) tin and rubber were 85% of export earnings.", cards: ["ec-my-colonial"] },
      { link: "enabled", how: "Resource wealth let Malaysia delay EOI and run a laissez-faire ISI on the colonial ethnic division of labour." },
      { id: "my-p1", type: "policy", t: "Laissez-faire ISI", date: "1957–69", d: "Colonial ethnic division of labour; pioneer firms 18 → 246 but non-discretionary ISI; Separation 1965 and May 1969 riots.", cards: ["ec-my-colonial", "ec-my-pioneer"], go: "ec-flow-my-1" },
      { link: "triggered", how: "The May 1969 riots exposed Malay–Chinese inequality and led to the NEP (1971)." },
      { id: "my-nep", type: "policy", t: "The New Economic Policy", date: "1971–90", d: "Equity and unity aims; FELDA, PERNAS, PNB, Petronas; bumiputera equity 2.4% → 20.3%, poverty 40.3% → 15%.", cards: ["nep", "ec-my-nep-equity"], go: "ec-flow-my-nep" }
    ] },
    { link: "followed by", how: "Under Mahathir priorities shifted: industrialisation came to matter more than equity.", title: "Mahathir and finance", summary: "Heavy industry, privatisation, deepening; deregulation to 1997.", steps: [
      { id: "my-p3", type: "policy", t: "Mahathir's heavy industry", date: "1980s–90s", d: "HICOM losses and debt → privatisation (1983) → technology and human-capital deepening after 1986.", cards: ["ec-my-hicom", "ec-my-privatisation", "ec-my-deepening"], go: "ec-flow-my-mahathir" },
      { link: "followed by", how: "Alongside industrial change ran cycles of financial deregulation and re-regulation, ending in the 1997 crisis." },
      { id: "my-fin", type: "consequence", sign: "-", t: "Finance and the 1997 crisis", d: "Deregulation → NPLs → 1989 re-regulation → easy credit again; 1997 via domestic stock/property overheating, not foreign debt.", cards: ["ec-my-dereg", "ec-my-afc"], go: "ec-flow-my-finance" }
    ] },
    { link: "led to", how: "Weighing the results against the three aims gives a mixed but balanced record.", title: "Judge", summary: "Growth succeeded; equity partial; verdict.", steps: [
      { id: "my-eval", type: "consequence", sign: "±", t: "Evaluation", d: "Growth and diversification succeeded; equity partial (30% target missed, gains to connected elite); unity arguably worsened.", cards: ["ec-my-eval-equity", "ec-my-eval-growth"], go: "ec-flow-my-eval" },
      { link: "supports", how: "No aim was fully met, but none was sacrificed, so the verdict rests on balance." },
      { id: "my-verdict", type: "judgement", t: "Verdict", d: "Reasonably successful — the best BALANCE of the three aims among the case studies. GDP growth 6.7%.", cards: ["ec-f2-mysg"] }
    ] }
  ],
  judge: { prompt: "Which phase did most to shape Malaysia's record? Rank them.", factors: ["my-start", "my-p1", "my-nep", "my-p3", "my-fin"],
           notes_view: "Reasonably successful — best BALANCE of the three aims: strong, diversified growth; equity partial (poverty 40.3% → 15% but 30% target missed, gains to connected elites); nationalism partial as FDI stayed essential." },
  historians: [
    { who: "Drabble", view: "'Race became the leitmotiv' of Malaysian politics, with direct economic consequences.", nodes: ["my-nep"] }
  ],
  takeaways: [
    "'Race became the leitmotiv' (Drabble): Malaysian economic policy was always also ethnic policy.",
    "The state's role kept changing: laissez-faire → NEP → state heavy industry → privatisation → facilitation."
  ]
});

L.push({
  id: "ec-country-th", order: 8, level: 2, parent: "ec-cluster-tip",
  kind: "chain",
  title: "Thailand: private capital and the EOI switch",
  question: "Why did Thailand make a successful transition to EOI, and what did it cost?",
  intro: "Thailand's path in order — tap a phase for the detailed chart.",
  clusters: [
    { title: "Foundations", summary: "Never colonised; Phibun; autonomous Chinese capital.", steps: [
      { row: [
        { id: "th-p1", type: "policy", t: "Never colonised; Phibun", date: "To 1957", d: "Autonomous Chinese commercial class; 1932 Revolution; Phibun's 'haphazard' (Hewison) state enterprises did not displace private capital.", cards: ["ec-th-independence", "ec-th-phibun"], go: "ec-flow-thailand-1" },
        { id: "th-chinese", type: "context", t: "Ethnic Chinese", d: "10% of population, 81% of listed capitalisation; allowed autonomy and periodically co-opted — a stabilising force.", cards: ["ec-th-chinese"], go: "ec-flow-cl-chinese" } ] }
    ] },
    { link: "followed by", how: "Under Sarit (from 1957) the state shifted from owner to enabler of private and foreign investment.", title: "Sarit to the EOI switch", summary: "State as enabler, then EOI from 1977.", steps: [
      { id: "th-p2", type: "policy", t: "Sarit and kanphatthana", date: "1957–77", d: "State from owner to enabler: infrastructure, planning bodies, private and foreign investment, US Cold War aid; but cronyism, protection.", cards: ["ec-th-sarit", "ec-th-aid"], go: "ec-flow-thailand-2" },
      { link: "led to", how: "Shocks and debt exposed the limits of protection and pushed the switch to EOI." },
      { id: "th-p3", type: "policy", t: "Switch to EOI", date: "From 1977", d: "Shocks and debt → 4th Plan (1977–81); baht peg, Plaza Accord (1985); state scaled back (6th Plan 1987).", cards: ["thaieoi", "ec-th-peg", "ec-th-scaling"], go: "ec-flow-thailand-3" }
    ] },
    { link: "led to", how: "Fast EOI growth came without equity, and liberalisation outran regulatory capacity.", title: "Judge", summary: "Inequality, 1997 epicentre, verdict.", steps: [
      { id: "th-eval", type: "consequence", sign: "±", t: "Evaluation and road to 1997", d: "Gini 0.41 → 0.52; Bangkok's GDP share rose; BIBF and short-term debt made Thailand the AFC epicentre.", cards: ["ec-th-inequality", "afcthai"], go: "ec-flow-thailand-4" },
      { link: "led to", how: "BIBF (1993) channelled short-term foreign borrowing that left the pegged baht exposed." },
      { id: "th-afc", type: "consequence", sign: "-", t: "1997 crisis", d: "BIBF (1993); 70% of US$69bn foreign bank debt short-term; baht floated 2 July 1997 — the epicentre.", cards: ["afcthai"], go: "ec-flow-cl-afc" },
      { link: "supports", how: "Despite 1997, the long-run record shows growth second only to Singapore." },
      { id: "th-verdict", type: "judgement", t: "Verdict", d: "Second only to Singapore in growth (6.8%); successful EOI by the mid-1980s — 'the market compensated for government failures'.", cards: ["ec-th-govt", "ec-th-eoi-success"] }
    ] }
  ],
  judge: { prompt: "Which factor mattered most for Thailand's EOI success? Rank them.", factors: ["th-chinese", "th-p1", "th-p2", "th-p3", "th-afc"],
           notes_view: "A resilient, autonomous Chinese private sector and domestic capital, peg management and a state that genuinely scaled back explain success — 'the market compensated for government failures'; growth without equity set up 1997." },
  historians: [
    { who: "Hewison", view: "Phibun's 'haphazard state-led development'; the market 'compensated for government failures'.", nodes: ["th-p1", "th-verdict"] }
  ],
  takeaways: [
    "Domestic private (Chinese) capital, not the state or foreign capital, explains Thailand's success relative to Indonesia and the Philippines.",
    "Growth without equity, and liberalisation without regulatory capacity, set up 1997."
  ]
});

L.push({
  id: "ec-country-id", order: 9, level: 2, parent: "ec-cluster-tip",
  kind: "chain",
  title: "Indonesia: oil, the New Order and cronyism",
  question: "How far was Indonesia's growth a genuine success?",
  intro: "Indonesia's path in order — tap a phase for the detailed chart.",
  clusters: [
    { title: "Sukarno to Suharto", summary: "Guided Economy collapse; New Order aid and oil.", steps: [
      { id: "id-p1", type: "policy", t: "Guided Economy collapse", date: "1949–65", d: "No domestic bourgeoisie, so state dominant by necessity; Sukarno's nationalism, ISI and Konfrontasi ended in hyper-inflation.", cards: ["ec-id-weak", "ec-id-guided"], go: "ec-flow-indonesia-1" },
      { link: "provoked response", how: "Economic disaster under Sukarno was answered by Suharto reopening to Western aid and FDI." },
      { id: "id-p2", type: "policy", t: "New Order, aid and oil", date: "1966–86", d: "Suharto reopened to Western aid (IGGI) and FDI; oil windfall funded state-led growth; rice self-sufficiency; Pertamina debt.", cards: ["ec-id-neworder", "ec-id-oil", "pertamina"], go: "ec-flow-indonesia-2" }
    ] },
    { link: "led to", how: "The oil glut ended the windfall and forced deregulation, FDI and EOI.", title: "Deregulation and cronies", summary: "Non-oil exports rose; conglomerates gained.", steps: [
      { row: [
        { id: "id-p3", type: "policy", t: "Deregulation and cronyism", date: "1986–1990s", d: "Oil glut forced deregulation, FDI and EOI; non-oil exports 31% → 50%, but gains to conglomerates (Astra, Liem).", cards: ["ec-id-glut", "ec-id-dereg-reality"], go: "ec-flow-indonesia-3" },
        { id: "id-chinese", type: "context", t: "Ethnic Chinese", d: "3.8% of population, 73% of listed capitalisation; cukong system; Malari riots (1974); anti-Chinese violence after 1997.", cards: ["ec-id-chinese"], go: "ec-flow-cl-chinese" } ] }
    ] },
    { link: "led to", how: "Crony capture and relationship lending left growth fragile and the banks exposed.", title: "Judge", summary: "Poverty fell; cronyism and 1997; verdict.", steps: [
      { id: "id-eval", type: "consequence", sign: "±", t: "Evaluation", d: "Poverty 60% → 11%; but crony monopolies, urban–rural gap 42% → 92%, Asia's largest debt, relationship lending (BCA).", cards: ["ec-id-growth", "ec-id-limits", "ec-id-financial"], go: "ec-flow-indonesia-4" },
      { link: "led to", how: "Bank reform multiplied banks that lent to their owners' firms, leaving the system fragile." },
      { id: "id-afc", type: "consequence", sign: "-", t: "1997 crisis", d: "Oct 1988 reform: banks 124 → 244; Liem's BCA lent 60% to Liem firms; rupiah collapsed — among the worst-hit.", cards: ["ec-id-financial"], go: "ec-flow-cl-afc" },
      { link: "supports", how: "Weighing windfall growth against cronyism and 1997 gives a qualified verdict." },
      { id: "id-verdict", type: "judgement", t: "Verdict", d: "Growth 5.7%, but windfall-driven and less robust; partial EOI; state necessary yet 'bureaucratic capitalism' (Robison); worst-hit in 1997.", cards: ["ec-id-govt-eval", "ec-id-robison"] }
    ] }
  ],
  judge: { prompt: "Which factor most shaped Indonesia's growth and its limits? Rank them.", factors: ["id-p1", "id-p2", "id-p3", "id-chinese", "id-afc"],
           notes_view: "Growth was driven heavily by a commodity windfall (1970s oil), so less robust than it appears; EOI only partial as cronies captured deregulation; the state was necessary yet became 'bureaucratic capitalism'." },
  historians: [
    { who: "Robison", view: "'Bureaucratic capitalism': officials treated lucrative offices as personal fiefs.", nodes: ["id-verdict"] },
    { who: "Vatikiotis", view: "Indonesia was 'lucky': oil prices made a traditional commodity 'a pot of gold'.", nodes: ["id-p2"] }
  ],
  takeaways: [
    "Indonesia was 'lucky' (Vatikiotis): aid, FDI guarantees and oil propped up growth.",
    "Deregulation nominally shrank the state but reinforced it via cronyism."
  ]
});

L.push({
  id: "ec-country-ph", order: 10, level: 2, parent: "ec-cluster-tip",
  kind: "chain",
  title: "Philippines: early promise, cronies and debt",
  question: "Why did the Philippines fail to convert its early promise into sustained growth?",
  intro: "The Philippines' path in order — tap a phase for the detailed chart.",
  clusters: [
    { title: "Early boom to Marcos", summary: "ISI stalls; Marcos debt and cronies.", steps: [
      { id: "ph-p1", type: "policy", t: "Early ISI boom to failure", date: "1950s–65", d: "'Asia's second NIC': manufacturing 8% → 20%; protection bred inefficiency; Garcia's 'Filipino First'; land reform blocked.", cards: ["ec-ph-isi", "ec-ph-filipino-first"], go: "ec-flow-philippines-1" },
      { link: "followed by", how: "As protected ISI firms stayed inefficient, Marcos turned to foreign loans, state corporations and cronies." },
      { row: [
        { id: "ph-p2", type: "policy", t: "Marcos' dependent state capitalism", date: "1965–86", d: "Foreign loans, state corporations, cronies; debt US$2.2bn → US$25–27bn; 1983 Aquino assassination exposed it.", cards: ["ec-ph-1970s", "ec-ph-debt", "crony"], go: "ec-flow-philippines-2" },
        { id: "ph-chinese", type: "context", t: "Ethnic Chinese", d: "1.3% of population, 50–60% of listed capitalisation; targeted under Garcia, co-opted under Marcos, 1990s kidnapping backlash.", cards: ["ec-ph-chinese"], go: "ec-flow-cl-chinese" } ] }
    ] },
    { link: "constrained", how: "The Marcos debt crippled Aquino before Ramos liberalised and privatised.", title: "Reform and its limits", summary: "Aquino, Ramos; exports, 1997; verdict.", steps: [
      { id: "ph-p3", type: "policy", t: "Aquino and Ramos", date: "1986–98", d: "Aquino crippled by Marcos debt; Ramos' 'Philippines 2000' liberalised and privatised — real turnaround, elites still gained.", cards: ["ec-ph-aquino", "ec-ph-ramos"], go: "ec-flow-philippines-3" },
      { link: "led to", how: "Late, partial reform left exports concentrated, but cautious banking limited excesses." },
      { id: "ph-eval", type: "consequence", sign: "±", t: "Evaluation", d: "Export concentration 27.4% → 64.7%; crony bailouts; but conservative banks (3% NPLs) avoided 1997's excesses (Delhaise).", cards: ["ec-ph-quant", "ec-ph-banks", "ec-ph-delhaise"], go: "ec-flow-philippines-4" },
      { link: "led to", how: "Conservative banks and little short-term debt softened the 1997 blow." },
      { id: "ph-afc", type: "consequence", sign: "±", t: "1997 crisis", d: "Under 20% of debt short-term; peso floated 11 July 1997 deliberately, not forced — affected but not as severely.", cards: ["ec-ph-banks"], go: "ec-flow-cl-afc" },
      { link: "supports", how: "A softer 1997 landing does not offset decades of failed transition." },
      { id: "ph-verdict", type: "judgement", t: "Verdict", d: "Clear underperformer (3.9% growth, lowest): failed the ISI → EOI transition; cronyism and political instability repeatedly interrupted reform.", cards: ["philfailure", "ec-cl-isi-eoi"] }
    ] }
  ],
  judge: { prompt: "Which factor did most to hold the Philippines back? Rank them.", factors: ["ph-p1", "ph-p2", "ph-chinese", "ph-p3", "ph-afc"],
           notes_view: "The clear underperformer: protected ISI firms never became efficient, 1970s shocks hit before adjustment, and cronyism plus cyclical political instability repeatedly interrupted reform." },
  historians: [
    { who: "Delhaise", view: "It 'missed the benefits of explosive growth' but 'avoided the excesses'.", nodes: ["ph-eval", "ph-afc"] }
  ],
  takeaways: [
    "Every land reform attempt was diluted by a landowner-dominated Congress.",
    "Slower growth but a softer landing in 1997: the growth–stability trade-off."
  ]
});

L.push({
  id: "ec-country-bm", order: 11, level: 2, parent: "ec-cluster-bmvn",
  kind: "chain",
  title: "Burma: best endowed, worst outcome",
  question: "Why did the best-endowed economy produce the worst outcome?",
  intro: "Burma's path in order — tap a phase for the detailed chart.",
  clusters: [
    { title: "Best start, worst policies", summary: "Best endowed; Pyidawtha fails; Ne Win's autarky.", steps: [
      { id: "bm-start", type: "context", t: "Starting point", d: "Rich in rice, teak, oil and minerals — the BEST endowed at independence.", cards: ["ec-bm-paradox"] },
      { link: "followed by", how: "Despite the resource-rich start, U Nu's Third Way welfare plan failed by 1956." },
      { id: "bm-p1", type: "policy", t: "U Nu's Pyidawtha", date: "1948–62", d: "Resource-rich start; Third Way welfare plan failed by 1956 — state monopolies (SAMB) killed incentives; rice slump, insurgency.", cards: ["ec-bm-pyidawtha", "ec-bm-pyidawtha-fail"], go: "ec-flow-burma-1" },
      { link: "followed by", how: "Ne Win's 1962 takeover replaced the Third Way with extreme socialist autarky." },
      { id: "bm-p2", type: "policy", t: "Burmese Way to Socialism", date: "1962–71", d: "Ne Win nationalised almost everything, expelled Indians/Chinese, shut off trade; rice exports collapsed; black market grew.", cards: ["burmeseway", "ec-bm-rice"], go: "ec-flow-burma-2" }
    ] },
    { link: "led to", how: "Autarky's failure pushed partial reforms and aid, but recovery stayed shallow.", title: "Crisis and reactive opening", summary: "Four-Year Plans, 8888, SLORC.", steps: [
      { id: "bm-p3", type: "policy", t: "Four-Year Plans to 8888", date: "1971–88", d: "Partial reforms and aid but shallow recovery; 1985/1987 demonetisations wiped out savings → 8888 Uprising.", cards: ["ec-bm-fouryear", "demonetisation"], go: "ec-flow-burma-3" },
      { link: "provoked response", how: "The 8888 Uprising forced a reactive, crisis-driven market opening under SLORC." },
      { id: "bm-p4", type: "policy", t: "SLORC's opening", date: "After 1988", d: "Market rhetoric but state and army kept control; export bans on 28 goods; sanctions — Tucker: largely cosmetic.", cards: ["ec-bm-tucker", "ec-bm-limits"], go: "ec-flow-burma-4" }
    ] },
    { link: "led to", how: "Decades of rigid, then contradictory, policy produced the worst numbers in SEA.", title: "Judge", summary: "Worst numbers; hollow victory.", steps: [
      { id: "bm-eval", type: "consequence", sign: "-", t: "Evaluation", d: "Worst numbers in SEA despite the best start; exports 21.0% → 1.3% of GDP; policy, not endowment, explains it.", cards: ["ec-bm-snapshot", "ec-bm-equity"], go: "ec-flow-burma-eval" },
      { link: "supports", how: "Equity and nationalism were achieved, but without growth they cannot count as success." },
      { id: "bm-verdict", type: "judgement", t: "Verdict", d: "Overall failure (4.3% growth): equity and nationalism without growth are a hollow victory, not real 'success'.", cards: ["ec-newin-aims", "ec-f2-bmvn"] }
    ] }
  ],
  judge: { prompt: "Which phase did most to cause Burma's failure? Rank them.", factors: ["bm-start", "bm-p1", "bm-p2", "bm-p3", "bm-p4"],
           notes_view: "Overall failure: nationalism achieved to an extreme degree directly CAUSED the growth failure; equity and nationalism without growth are not real 'success'. Policy, not endowment, explains it." },
  historians: [
    { who: "Tucker", view: "SLORC's opening was contradictory; industries and finance stayed under army control.", nodes: ["bm-p4"] },
    { who: "Than & Tan", view: "Decline is telling against neighbours with a similar resource base.", nodes: ["bm-eval"] }
  ],
  takeaways: [
    "Burma's failure is more damning because it was the best endowed at independence.",
    "Use Burma to argue government policy was the decisive factor in outcomes (Than & Tan)."
  ]
});

L.push({
  id: "ec-country-vn", order: 12, level: 2, parent: "ec-cluster-bmvn",
  kind: "chain",
  title: "Vietnam: the pragmatic pivot",
  question: "How did Vietnam turn socialist failure into rapid growth, and with what limits?",
  intro: "Vietnam's path in order — tap a phase for the detailed chart.",
  clusters: [
    { title: "Split, then failure", summary: "Split legacy; two systems; failed 2nd FYP.", steps: [
      { id: "vn-start", type: "context", t: "Starting point", d: "Rich in minerals in the North, fertile Mekong Delta in the South; a split colonial legacy.", cards: ["ec-vn-colonial"] },
      { link: "followed by", how: "The split legacy became an ideological split, then reunification on Northern terms." },
      { id: "vn-p1", type: "policy", t: "Split by ideology", date: "1954–75", d: "Capitalist, US-dependent South vs socialist, Soviet/Chinese-backed North; five percent plots proved incentives worked; war devastation.", cards: ["ec-vn-south", "ec-vn-north", "ec-vn-plots"], go: "ec-flow-vietnam-1" },
      { link: "led to", how: "Reunification imposed the North's heavy-industry model on the South." },
      { id: "vn-p2", type: "consequence", sign: "-", t: "Reunification, failed 2nd FYP", date: "1976–80", d: "North's heavy-industry model imposed on the South; fierce peasant resistance; 12m vs 21m ton target.", cards: ["vietnamfyp", "ec-vn-fyp-causes"], go: "ec-flow-vietnam-2" }
    ] },
    { link: "provoked response", how: "Plan failure pushed Directive 100; Le Duan's death then enabled proactive reform.", title: "The pivot", summary: "Directive 100, Doi Moi, 1990s growth.", steps: [
      { id: "vn-p3", type: "policy", t: "Directive 100 to Doi Moi", date: "1981–90", d: "Directive 100 (1981) cracked the system; Le Duan's death enabled Doi Moi (1986); Resolution 10 (1988) privatised agriculture.", cards: ["ec-vn-directive100", "ec-vn-doimoi", "ec-vn-res10"], go: "ec-flow-vietnam-3" },
      { link: "led to", how: "Coherent, mutually reinforcing reforms and improved relations opened FDI and credit access." },
      { id: "vn-p4", type: "consequence", sign: "+", t: "Growth and integration", date: "1990s", d: "US embargo lifted 1994; ASEAN; 9.5% growth (1995–96, world's highest); 3rd-largest rice exporter.", cards: ["ec-vn-1990s", "ec-vn-integration"], go: "ec-flow-vietnam-4" }
    ] },
    { link: "led to", how: "Growth came with a large state sector and rising inequality.", title: "Judge", summary: "Strong numbers, real limits; verdict.", steps: [
      { id: "vn-eval", type: "consequence", sign: "±", t: "Evaluation", d: "Strong numbers, but state sector still 50% of output (1997), corruption, lagging manufacturing, rising regional/ethnic inequality.", cards: ["ec-vn-limits", "ec-vn-govt"], go: "ec-flow-vietnam-eval" },
      { link: "supports", how: "Re-balancing the aims after failure shows learning, despite costs to equity." },
      { id: "vn-verdict", type: "judgement", t: "Verdict", d: "Best example of LEARNING and ADAPTATION — succeeded by re-balancing the three aims when the original mix failed.", cards: ["ec-f2-bmvn"] }
    ] }
  ],
  judge: { prompt: "Which factor mattered most for Vietnam's turnaround? Rank them.", factors: ["vn-start", "vn-p1", "vn-p2", "vn-p3", "vn-p4"],
           notes_view: "Best example of LEARNING and ADAPTATION — succeeded by re-balancing the three aims when the original mix failed; but equity WORSENED after Doi Moi and nationalism was deliberately diluted to attract FDI." },
  historians: [],
  takeaways: [
    "Pragmatic, flexible governments outperform ideological ones — even under one-party rule.",
    "Equity worsened after Doi Moi: growth came at a cost."
  ]
});
})();
