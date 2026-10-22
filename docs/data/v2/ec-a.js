// v2 flow charts: SEA economic change — big picture, framework, Part F synthesis, comparative cluster analysis,
// how-to-argue, memory cues, plus new argument charts. Built only from SEA_Economic_Change_Study_Notes.
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ec = window.FLOWS2.ec || []);

/* ---------- order 1: big picture ---------- */
L.push({
  id: "ec-flow-bigpicture",
  order: 1,
  parent: "ec-top",
  kind: "causal",
  title: "The big picture: aims → approaches → paths → outcomes",
  question: "Why did some Southeast Asian economies outperform others after independence?",
  intro: "Every SEA state chased the same three aims, chose a broad approach (Owen), then followed its own path. Outcomes turned on HOW and HOW WELL the state intervened.",
  clusters: [
    {
      title: "Starting point and aims",
      summary: "A colonial vacuum left the state to pursue three conflicting aims.",
      steps: [
        {
          id: "bp-vacuum",
          type: "long_term_cause",
          t: "Colonial vacuum at independence",
          d: "Colonial powers were extractive, not developmental: no indigenous business class or planning institutions. Only the state had the capital and oversight.",
          ev: ["So government led everywhere, capitalist or socialist."],
          cards: ["ec-why-govt"]
        },
        { link: "led to", how: "With only the state able to fill the vacuum, governments themselves set and pursued the three economic aims." },
        {
          row: [
            {
              id: "bp-growth",
              type: "policy",
              t: "Aim 1: Growth",
              d: "GDP / productive capacity / national income, usually via industrialisation (ISI → EOI), agricultural modernisation, foreign investment.",
              cards: ["ec-three-aims"]
            },
            {
              id: "bp-equity",
              type: "policy",
              t: "Aim 2: Equity",
              d: "Fair distribution across population/ethnic groups: land reform, redistribution, affirmative action (NEP), welfare.",
              cards: ["ec-three-aims"]
            },
            {
              id: "bp-nat",
              type: "policy",
              t: "Aim 3: Economic nationalism",
              d: "Indigenising wealth and production; reducing foreign/minority control; self-sufficiency.",
              ev: ["Pursued via nationalisation, restrictions on foreign investment and minorities, protectionism."],
              cards: ["ec-three-aims"]
            }
          ],
          links: [
            {
              how: "Growth can be achieved while equity is sacrificed, with benefits flowing to a minority.",
              from: "bp-growth",
              to: "bp-equity",
              label: "undermined"
            },
            { how: "Excluding foreign capital and expertise starves the economy of capital and competition.", from: "bp-nat", to: "bp-growth", label: "undermined" }
          ]
        }
      ]
    },
    {
      title: "Owen's three approaches",
      link: "led to",
      how: "Because the aims conflicted, each state pursued them through one of Owen's three broad approaches.",
      summary: "Capitalist, socialist or 'Third Way'.",
      steps: [
        {
          row: [
            {
              id: "bp-cap",
              type: "context",
              t: "Capitalist",
              d: "Philippines, Thailand, Malaysia, Singapore, Indonesia (New Order, post-1965), South Vietnam (1954–75). Still ran large SOEs.",
              cards: ["ec-owen"]
            },
            {
              id: "bp-soc",
              type: "context",
              t: "Socialist",
              d: "Burma (post-1962), North Vietnam (1954–75), Socialist Republic of Vietnam (post-1975). Central planning.",
              cards: ["ec-owen"]
            },
            {
              id: "bp-third",
              type: "context",
              t: "'Third Way'",
              d: "Burma under U Nu (pre-1962), Indonesia's Guided Democracy (1957–65). Ideology over sound management.",
              cards: ["ec-owen"]
            }
          ]
        }
      ]
    },
    {
      title: "Capitalist paths",
      link: "followed by",
      how: "Within the capitalist approach, each country then followed its own path to its 1961–2001 growth outcome.",
      summary: "Five capitalist paths, from 8.3% to 3.9% growth.",
      steps: [
        {
          row: [
            {
              id: "bp-sg",
              type: "consequence",
              sign: "+",
              t: "Singapore: forced EOI, 8.3%",
              date: "1961–2001",
              d: "Almost no resources; forced into EOI; highest growth 1961–2001 (8.3%); weathered 1997 well.",
              ev: ["No resources; entrepot: relied on entrepot trade and human capital. ISI under Malaysia common market (1960–65).", "Forced EOI: 1965 Separation + 1971 British withdrawal → EOI; 100% foreign ownership allowed 1978.", "Tech → services → regional: 1979 Second Industrial Revolution → 1986 services → 1990s regionalisation.", "8.3% (1961–2001), highest. Weathered 1997 well: surplus, low debt, strict MAS. Equity issue = income gap (Gini grew), not ethnic."],
              cards: ["ec-sg-context", "ec-sg-crisis", "ec-sg-sir", "ec-sg-1997"]
            },
            {
              id: "bp-my",
              type: "consequence",
              sign: "±",
              t: "Malaysia: NEP path, 6.7%",
              date: "1957–2001",
              d: "Resource-rich laissez-faire ISI, then NEP redistribution after the 1969 riots; 6.7% growth and the best balance of aims.",
              ev: ["Laissez-faire, non-discretionary ISI 1957–71. Rich in tin, rubber, palm oil — could delay EOI.", "1969 riots → NEP 1971. Equity issue: ethnic (Malay vs Chinese/Indian) wealth gap. Bumiputera-focused redistribution: equity 2.4%→20.3%; poverty 40.3%→15%. Foreign capital restricted but FDI still courted.", "HICOM → privatisation → deepening: heavy industry, privatisation (1983), industrial deepening (1986+).", "6.7%; best balance of aims. 1997: DOMESTIC property/stock overheating, current account deficit."],
              cards: ["ec-my-colonial", "nep", "ec-my-hicom", "ec-my-afc"]
            },
            {
              id: "bp-th",
              type: "consequence",
              sign: "±",
              t: "Thailand: EOI success, 6.8%",
              date: "1957–2000",
              d: "Never colonised; state scaled back under Sarit; successful EOI by mid-1980s; but epicentre of the 1997 crisis.",
              ev: ["Never colonised: an autonomous, mainly Chinese commercial class checked the state.", "Phibun → Sarit (1957): state-led nationalism, then kanphatthana; state scaled back.", "EOI switch (1977 Plan): successful by mid-1980s; post-1985 boom.", "6.8%; AFC epicentre: baht floated 2 July 1997; Gini 0.41→0.52."],
              cards: ["ec-th-independence", "ec-th-sarit", "thaieoi", "afcthai"]
            },
            {
              id: "bp-id",
              type: "consequence",
              sign: "-",
              t: "Indonesia: oil and cronies, 5.7%",
              date: "1957–1997",
              d: "Guided Economy failed; New Order rode the oil boom; crony-captured deregulation; among the worst hit in 1997.",
              ev: ["Guided Economy 1957–65: nationalised Dutch firms; ISI failed under Nasakom inexperience.", "New Order + oil boom: 1970s aid, oil windfall, state ISI corporations.", "Oil glut → deregulation: 1980s reform captured by cronies; EOI only partial.", "5.7%; among worst hit 1997: political collapse, ethnic violence."],
              cards: ["ec-id-guided", "ec-id-oil", "ec-id-dereg-reality", "ec-id-financial"]
            },
            {
              id: "bp-ph",
              type: "consequence",
              sign: "-",
              t: "Philippines: failed transition, 3.9%",
              date: "1950–1997",
              d: "Regional ISI pioneer, then Marcos cronyism and debt; failed the ISI→EOI transition; softer landing in 1997.",
              ev: ["Regional ISI pioneer: manufacturing 8%→20% of GDP (1950–60); 'Asia's second NIC'.", "Marcos: cronyism, debt; 300+ public enterprises; oil-importer hit by 1970s shocks.", "Failed ISI→EOI: 1981–90 growth only 1.8%; deregulation under Aquino/Ramos.", "3.9%; softer 1997 landing: 'avoided the excesses' (Delhaise)."],
              cards: ["ec-ph-isi", "crony", "philfailure", "ec-ph-delhaise"]
            }
          ]
        }
      ]
    },
    {
      title: "Socialist paths and the verdict",
      link: "followed by",
      how: "The socialist and 'Third Way' states followed paths that diverged once Vietnam reformed and Burma did not.",
      summary: "Burma's worst outcome, Vietnam's pivot, and what separated winners from losers.",
      steps: [
        {
          row: [
            {
              id: "bp-bm",
              type: "consequence",
              sign: "-",
              t: "Burma: best endowed, 4.3%",
              date: "1948–2001",
              d: "Best endowed at independence, but U Nu's Third Way and Ne Win's autarky destroyed growth; insulated in 1997 for the wrong reasons.",
              ev: ["Best endowed at independence: rice, teak, oil, minerals; U Nu's Third Way welfare plan (1948–62) fails.", "Burmese Way to Socialism 1962: total nationalisation; Chinese and Indian minorities expelled; almost all foreign trade/investment banned (1962–88) — autarky. Equity achieved, but at the cost of all growth.", "8888 Uprising → SLORC: contradictory partial market opening from 1988.", "4.3%; insulated in 1997 — but for the wrong reasons (closed, pariah)."],
              cards: ["ec-bm-paradox", "burmeseway", "ec-bm-tucker", "ec-bm-limits"]
            },
            {
              id: "bp-vn",
              type: "consequence",
              sign: "+",
              t: "Vietnam: pragmatic pivot, 8–9.5%",
              date: "1954–2000",
              d: "Split legacy and disastrous planning 1976–85, then Doi Moi (1986) delivered 8–9.5% growth in the 1990s.",
              ev: ["Split legacy; heavy industry: socialist North (rich in minerals), US-dependent South (fertile Mekong Delta); reunified 1975. Heavy industry prioritised in North pre-1975 and reunified Vietnam 1976–85.", "Disastrous 1976–85: 2nd FYP failed; southern collectivisation resisted; foreign and Hoa (Chinese) enterprises nationalised post-1975.", "Doi Moi 1986: Le Duan's death; Resolution 10 (1988); FDI from 1987; embargo lifted 1994.", "8–9.5% in 1990s. Insulated in 1997 (less integrated); state still 50% of output. Equity issue: regional (south vs north) + ethnic minority poverty."],
              cards: ["ec-vn-colonial", "vietnamfyp", "ec-vn-doimoi", "ec-vn-1990s"]
            }
          ]
        },
        { link: "supports", how: "Comparing all seven paths shows outcomes tracked the quality and nature of intervention, not the ideology behind it." },
        {
          id: "bp-verdict",
          type: "judgement",
          t: "Governance, not ideology, decided outcomes",
          d: "Not ideology but governance quality and the NATURE and DIRECTION of intervention, plus a timely ISI→EOI transition (Salvatore).",
          ev: ["Nature: technocratic vs cronyist/dogmatic. Direction: market-stimulating vs market-replacing.", "Outcomes depended less on WHETHER the state intervened than on HOW and HOW WELL — and on transitioning from ISI to EOI in time."],
          cards: ["ec-f1-paths", "ec-f1-capital", "ec-salvatore"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Rank the seven economies by overall success, weighing growth, equity and nationalism — not growth alone.",
    factors: ["bp-sg", "bp-my", "bp-th", "bp-id", "bp-ph", "bp-bm", "bp-vn"],
    notes_view: "By growth 1961–2001: Singapore > Malaysia > Thailand > Indonesia > Myanmar > Philippines. Weighing all three aims, Malaysia has the best balance; Burma's equity without growth is a hollow victory."
  },
  historians: [
    { who: "Owen", view: "Classified SEA states' approaches as capitalist, socialist or 'Third Way'.", nodes: ["bp-cap", "bp-soc", "bp-third"] },
    { who: "Salvatore", view: "ISI and EOI are sequential; a timely transition separates winners from losers.", nodes: ["bp-verdict"] },
    { who: "Delhaise", view: "The Philippines missed the benefits of explosive growth but 'avoided the excesses'.", nodes: ["bp-ph"] }
  ],
  takeaways: ["Government intervention was universal — argue about HOW and HOW WELL, not WHETHER.", "Ranking 1961–2001: Singapore > Malaysia > Thailand > Indonesia > Myanmar > Philippines.", "Success = weighing growth vs equity vs nationalism, not growth alone (Burma's hollow victory).", "Memory cues: Malaysia 'Race, Resources, Restructuring'; Singapore 'Entrepot, Expelled, Excellence'; Burma 'Best Endowed, Worst Outcome'; Vietnam 'Pragmatic Pivot'."]
});
L.push({
  id: "ec-flow-framework",
  order: 2,
  parent: "ec-top",
  kind: "causal",
  title: "The analytical framework: aims and strategy (Lecture 1)",
  question: "How should SEA economic success be judged, and why did the ISI→EOI transition matter?",
  intro: "Lecture 1 tools: three conflicting aims, Owen's three approaches, and the ISI → EOI logic with Salvatore's view on timing.",
  clusters: [
    {
      title: "Three conflicting aims",
      summary: "Growth, equity and nationalism pull against each other.",
      steps: [
        {
          id: "fw-aims",
          type: "context",
          t: "Three aims, often in conflict",
          d: "Growth, equity and economic nationalism. A strong essay always weighs how a country traded off between them.",
          cards: ["ec-three-aims"]
        },
        { link: "led to", how: "Pursuing one aim often cost another, creating three recurring tensions." },
        {
          row: [
            {
              id: "fw-t-growth",
              type: "consequence",
              sign: "±",
              t: "Growth tension",
              d: "Growth can be achieved while equity is sacrificed — benefits flow to a minority.",
              cards: ["ec-three-aims"]
            },
            {
              id: "fw-t-equity",
              type: "consequence",
              sign: "±",
              t: "Equity tension",
              d: "Equity over efficiency (quotas, collectivisation) often reduces productivity/growth.",
              cards: ["ec-three-aims"]
            },
            {
              id: "fw-t-nat",
              type: "consequence",
              sign: "±",
              t: "Nationalism tension",
              d: "Excluding foreign capital/expertise (e.g. Burma) starves the economy of capital and competition.",
              cards: ["ec-three-aims"]
            }
          ]
        },
        { link: "supports", how: "Ne Win's Burma shows the tensions in action: equity and nationalism were won while growth collapsed." },
        {
          id: "fw-newin",
          type: "judgement",
          t: "Ne Win's hollow victory",
          d: "Exam tip: the Burmese Way achieved equity and nationalism but failed on growth — so NOT a success overall.",
          ev: ["Equity: top 25% earned only 5× bottom 25%. Nationalism: foreign trade/investment banned, Indians/Chinese squeezed out."],
          cards: ["ec-newin-aims", "burmeseway"]
        }
      ]
    },
    {
      title: "Owen's three approaches",
      link: "led to",
      how: "States pursued these aims through one of Owen's three broad approaches.",
      summary: "How states organised the pursuit of the aims.",
      steps: [
        {
          row: [
            {
              id: "fw-cap",
              type: "context",
              t: "Capitalist",
              d: "Private property and enterprise, but still large SOEs and indirect intervention.",
              cards: ["ec-owen"]
            },
            { id: "fw-soc", type: "context", t: "Socialist", d: "Eliminate private property; central planning over all economic decisions.", cards: ["ec-owen"] },
            {
              id: "fw-third",
              type: "context",
              t: "'Third Way'",
              d: "Vaguely socialist, straddled capitalist and socialist methods — U Nu's Burma, Guided Democracy Indonesia 1957–65.",
              cards: ["ec-owen"]
            }
          ]
        }
      ]
    },
    {
      title: "ISI, its problems, then EOI",
      link: "followed by",
      how: "Whatever the approach, industrialisation followed a common logic: ISI first, then EOI.",
      summary: "Why ISI came first and why it had to give way.",
      steps: [
        {
          id: "fw-isi",
          type: "policy",
          t: "ISI first",
          d: "Produce goods domestically to replace imports; tariffs/import restrictions protect 'infant' industries.",
          ev: ["Diversifies from primary exports, creates non-agrarian jobs, builds a base for EOI, addresses post-independence problems."],
          cards: ["ec-isi-eoi"]
        },
        { link: "led to", how: "Protection bred complacency and cronyism, and grew harder as goods became more advanced." },
        {
          id: "fw-isi-prob",
          type: "consequence",
          sign: "-",
          t: "ISI's problems",
          d: "Protection breeds complacency and inefficiency; harder for advanced goods (petrochemicals, steel); prone to cronyism (licences/quotas as political favours).",
          cards: ["ec-isi-eoi"]
        },
        { link: "led to", how: "ISI's limits made a transition to export-oriented industrialisation necessary later." },
        {
          id: "fw-eoi",
          type: "policy",
          t: "EOI",
          d: "Produce comparative-advantage goods for export; overcomes small domestic market; forces efficiency via competition. Loosen imports, incentivise FDI.",
          ev: ["Risks: hard to compete early; foreign dependence undermines nationalism."],
          cards: ["ec-isi-eoi"]
        }
      ]
    },
    {
      title: "Timing of the transition",
      link: "followed by",
      how: "Countries differed in how long they stayed in ISI before moving to EOI.",
      summary: "Stuck in ISI vs fast to EOI, and Salvatore's verdict.",
      steps: [
        {
          split: [
            {
              h: "Stuck in ISI",
              steps: [
                { id: "fw-stuck", type: "consequence", sign: "-", t: "Philippines and Indonesia", d: "Stuck in ISI too long.", cards: ["ec-isi-eoi"] },
                { link: "led to", how: "Prolonged protection bred cronyism, inefficiency and foreign debt." },
                {
                  id: "fw-stuck2",
                  type: "consequence",
                  sign: "-",
                  t: "Cronyism, inefficiency, foreign debt",
                  d: "The costs of staying in ISI too long.",
                  cards: ["ec-isi-eoi"]
                }
              ]
            },
            {
              h: "Fast to EOI",
              steps: [
                { id: "fw-fast", type: "consequence", sign: "+", t: "Singapore", d: "Skipped most of ISI; fastest to EOI (from the mid-1960s).", cards: ["ec-isi-eoi"] },
                { link: "led to", how: "Moving to EOI fastest brought success." },
                { id: "fw-fast2", type: "consequence", sign: "+", t: "Success", d: "Singapore became the region's top performer.", cards: ["ec-isi-eoi"] }
              ]
            }
          ]
        },
        { link: "supports", how: "The contrast shows timing of the transition, not the choice of strategy, separated the outcomes." },
        {
          id: "fw-salv",
          type: "interpretation",
          t: "Salvatore: sequential, not alternatives",
          d: "ISI useful early (esp. larger nations), EOI necessary later. The differentiator is whether a country TRANSITIONED at the right time.",
          cards: ["ec-salvatore"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which tension between the three aims did most damage to SEA economies? Rank them.",
    factors: ["fw-t-growth", "fw-t-equity", "fw-t-nat"],
    notes_view: "Growth absent means no overall success: Ne Win's equity and nationalism gains amid economic stagnation were a hollow victory — the model for weighing the aims."
  },
  historians: [
    {
      who: "Owen",
      view: "Capitalist, socialist and 'Third Way' approaches; 'Third Way' put ideology over sound management.",
      nodes: ["fw-cap", "fw-soc", "fw-third"]
    },
    { who: "Salvatore", view: "ISI and EOI are sequential; the timely transition is the differentiator.", nodes: ["fw-salv"] }
  ],
  takeaways: ["Weigh the three aims explicitly; growth absent = no overall success (Ne Win).", "Salvatore: the TIMELY transition from ISI to EOI, not the choice of strategy, separates winners from losers."]
});
L.push({
  id: "ec-flow-framework-2",
  order: 2.5,
  parent: "ec-top",
  kind: "causal",
  title: "The analytical framework: the state and other factors (Lecture 1)",
  question: "Why did government lead everywhere, and what else shaped SEA economic change?",
  intro: "Why the state had to lead, Tarling's two government roles, the 'miracle' factors and World Bank recipe, other shaping factors and the GDP table.",
  clusters: [
    {
      title: "Why government led",
      summary: "The colonial vacuum and Tarling's two roles.",
      steps: [
        {
          id: "fw2-why",
          type: "long_term_cause",
          t: "Why government had to lead",
          d: "Colonial powers left no indigenous business class or planning institutions (extractive). Only the state could fill the vacuum — capitalist or socialist.",
          ev: ["The difference: HOW (SOE vs incentives) and HOW WELL."],
          cards: ["ec-why-govt"]
        },
        { link: "led to", how: "Filling the vacuum meant the state took on Tarling's two roles: planning and participation." },
        {
          split: [
            {
              h: "Capitalist (Tarling)",
              steps: [
                {
                  id: "fw2-cap-plan",
                  type: "policy",
                  t: "Planning: growth-target plans",
                  d: "National development plans with growth targets (e.g. First Malaysia Plan 1969).",
                  cards: ["ec-tarling"]
                },
                { link: "followed by", how: "Beyond planning, capitalist states participated indirectly by shaping the business climate." },
                {
                  id: "fw2-cap-part",
                  type: "policy",
                  t: "Participation: indirect",
                  d: "Stability, fiscal policy, pro-business climate, technocrats, FDI/aid + some SOEs (JTC, FELDA, Pertamina).",
                  cards: ["ec-tarling"]
                }
              ]
            },
            {
              h: "Socialist (Tarling)",
              steps: [
                {
                  id: "fw2-soc-plan",
                  type: "policy",
                  t: "Planning: centralised plans",
                  d: "Centralised plans (Vietnam's 2nd FYP 1976; Burma's Four-Year Plans).",
                  cards: ["ec-tarling"]
                },
                { link: "followed by", how: "Beyond planning, socialist states participated directly by owning production." },
                {
                  id: "fw2-soc-part",
                  type: "policy",
                  t: "Participation: direct and total",
                  d: "State owns/runs virtually all production: nationalisation, state monopolies.",
                  cards: ["ec-tarling"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "The 'miracle economies'",
      link: "followed by",
      how: "The notes then identify why some states became East Asian 'miracle economies'.",
      summary: "Four factors and the World Bank recipe.",
      steps: [
        {
          row: [
            { id: "fw2-commit", type: "long_term_cause", t: "Strong government commitment", d: "To economic development.", cards: ["ec-miracle"] },
            { id: "fw2-sound", type: "long_term_cause", t: "Sound economic policies", d: "", cards: ["ec-miracle"] },
            {
              id: "fw2-integ",
              type: "long_term_cause",
              t: "Controlled global integration",
              d: "Controlled integration into the global market.",
              cards: ["ec-miracle"]
            },
            { id: "fw2-us", type: "long_term_cause", t: "Close US security/economic ties", d: "", cards: ["ec-miracle"] }
          ]
        },
        { link: "supports", how: "The World Bank's 1993 study set out a matching policy 'recipe'." },
        {
          id: "fw2-wb",
          type: "interpretation",
          t: "World Bank 'recipe'",
          date: "1993",
          d: "The East Asian Miracle: high savings/investment, pro-investment taxes, secure well-regulated bank-based finance, pro-export incentives, openness to foreign tech/investment.",
          cards: ["ec-miracle"]
        }
      ]
    },
    {
      title: "Other shaping factors",
      link: "followed by",
      how: "Alongside policy, other forces shaped economic change across the region.",
      summary: "Minorities, aid, the Green Revolution and electronics.",
      steps: [
        {
          split: [
            {
              steps: [
                {
                  id: "fw2-minor",
                  type: "long_term_cause",
                  t: "Ethnic minorities",
                  d: "Chinese/Indians dominated colonial trade, banking and capital.",
                  cards: ["ec-other-factors"]
                },
                { link: "led to", how: "Minority dominance of the economy bred resentment." },
                {
                  id: "fw2-resent",
                  type: "consequence",
                  sign: "-",
                  t: "Resentment of minorities",
                  d: "Resentment of Chinese and Indian economic dominance.",
                  cards: ["ec-other-factors"]
                },
                { link: "led to", how: "Resentment shaped economic nationalism, which targeted the minorities." },
                {
                  id: "fw2-target",
                  type: "policy",
                  t: "Nationalism targets minorities",
                  d: "Economic nationalism aimed at minority wealth.",
                  ev: ["Indians expelled from Burma; NEP vs Chinese corporate dominance."],
                  cards: ["ec-other-factors"]
                }
              ]
            },
            {
              steps: [
                {
                  id: "fw2-aid",
                  type: "long_term_cause",
                  t: "Foreign aid and investment",
                  d: "Cold War aid (US to Thailand; USSR/China via COMECON to Vietnam); Japanese aid/investment; World Bank, IMF, ADB.",
                  cards: ["ec-other-factors"]
                }
              ]
            },
            {
              steps: [
                {
                  id: "fw2-green",
                  type: "event",
                  t: "Green Revolution",
                  date: "1930s–70s",
                  d: "IR8 rice (IRRI, Philippines, mid-1960s) plus fertilizers, irrigation and machinery.",
                  cards: ["ec-green-rev"]
                },
                { link: "led to", how: "Higher-yield rice and inputs raised output." },
                {
                  id: "fw2-surplus",
                  type: "consequence",
                  sign: "+",
                  t: "Famine averted, surplus exported",
                  d: "Averted famine and created an exportable surplus.",
                  cards: ["ec-green-rev"]
                }
              ]
            },
            {
              steps: [
                {
                  id: "fw2-elec",
                  type: "event",
                  t: "Electronics take-off",
                  date: "late 1970s–80s",
                  d: "Singapore's Second Industrial Revolution (1979) best; Philippines, Malaysia, Thailand less so. Burma, Vietnam, Indonesia struggled.",
                  ev: ["The strugglers had outdated heavy industry and few skills."],
                  cards: ["ec-green-rev"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Growth outcomes",
      link: "led to",
      how: "These policies and factors produced very different growth records, 1961–2001.",
      summary: "The GDP table and how to read it.",
      steps: [
        {
          id: "fw2-gdp",
          type: "evidence",
          t: "GDP growth table (%)",
          date: "1961–2001",
          d: "Decades 1961–70 / 71–80 / 81–90 / 91–2000, then 1961–2001 average.",
          ev: ["Singapore 10.0 / 9.0 / 7.4 / 7.0 / 8.3", "Malaysia 6.5 / 7.9 / 6.0 / 6.6 / 6.7", "Thailand 8.2 / 6.9 / 7.9 / 4.4 / 6.8", "Philippines 4.9 / 5.9 / 1.8 / 2.9 / 3.9", "Indonesia 4.2 / 7.9 / 6.4 / 4.3 / 5.7", "Myanmar 3.2 / 4.7 / 1.4 / 7.4 / 4.3"],
          cards: ["ec-gdp-table"]
        },
        { link: "supports", how: "The table shows Singapore leading every decade and Myanmar's best decade following market reform." },
        {
          id: "fw2-read",
          type: "interpretation",
          t: "Reading the table",
          d: "Irony: Myanmar's best decade (1991–2000, 7.4%) followed SLORC's post-1988 market reforms — but off a tiny base, still lagging. Singapore leads every decade.",
          cards: ["ec-gdp-table"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which factor did most to shape SEA economic change? Rank them.",
    factors: ["fw2-why", "fw2-commit", "fw2-sound", "fw2-integ", "fw2-us", "fw2-minor", "fw2-aid", "fw2-green", "fw2-elec"],
    notes_view: "Government had to lead everywhere; the difference lies in HOW (direct SOE control vs indirect incentives) and HOW WELL (efficient vs corrupt/cronyist), not WHETHER it intervened."
  },
  historians: [
    {
      who: "Tarling",
      view: "Government's two roles: planning and participation — indirect in capitalist, direct and total in socialist states.",
      nodes: ["fw2-cap-plan", "fw2-cap-part", "fw2-soc-plan", "fw2-soc-part"]
    }
  ],
  takeaways: ["State leadership was a necessity of the colonial vacuum; judge its nature and efficiency.", "Cite the GDP table figures to substantiate any comparative claim."]
});
L.push({
  id: "ec-flow-f2-aims",
  order: 90,
  parent: "ec-top",
  kind: "matrix",
  title: "Three aims verdicts: Malaysia, Singapore, Burma, Vietnam",
  question: "Did Malaysia, Singapore, Burma and Vietnam achieve growth, equity and economic nationalism?",
  intro: "How each core case scored on growth, equity and economic nationalism, and the overall verdict. Different mixes produced different kinds of 'success'.",
  clusters: [
    {
      title: "Four verdicts",
      summary: "Each case's overall result.",
      steps: [
        {
          row: [
            {
              id: "f2-my",
              type: "judgement",
              t: "Malaysia: best balance",
              d: "Reasonably successful — best balance of the three aims among the case studies.",
              cards: ["ec-f2-mysg", "ec-my-eval-equity", "ec-my-nep-fdi"]
            },
            {
              id: "f2-sg",
              type: "judgement",
              t: "Singapore: top by growth",
              d: "Achieved by deliberately NOT prioritising nationalism and only partly addressing equity.",
              cards: ["ec-f2-mysg", "ec-sg-limits", "ec-sg-fdi"]
            },
            {
              id: "f2-bm",
              type: "judgement",
              t: "Burma: overall failure",
              d: "Proves nationalism and equity without growth are not real success.",
              cards: ["ec-newin-aims", "ec-f2-bmvn", "ec-bm-equity", "ec-bm-minorities"]
            },
            {
              id: "f2-vn",
              type: "judgement",
              t: "Vietnam: learning and adaptation",
              d: "Succeeded by re-balancing the aims when the original mix failed.",
              cards: ["ec-f2-bmvn", "ec-vn-1990s", "ec-vn-limits"]
            }
          ]
        }
      ]
    },
    {
      title: "The pattern",
      link: "supports",
      how: "Set side by side, the four verdicts show every route to growth cost something on another aim.",
      summary: "No case maximised all three aims.",
      steps: [
        {
          id: "f2-pattern",
          type: "judgement",
          t: "No case maximised all three",
          d: "Growth came with diluted nationalism (Singapore, Vietnam post-1986) or partial equity (Malaysia); nationalism-first (Burma) killed growth.",
          cards: ["ec-f2-mysg", "ec-f2-bmvn"]
        },
        { link: "supports", how: "Because trade-offs were unavoidable, essays must weigh the aims rather than judge growth alone." },
        {
          id: "f2-weigh",
          type: "judgement",
          t: "Weigh the aims explicitly",
          d: "Examiners reward explicit weighing of growth vs equity vs nationalism over growth-only judgements.",
          cards: ["ec-pitfalls"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["Malaysia", "Singapore", "Burma", "Vietnam"],
    rows: [
      {
        h: "Growth",
        cells: ["Strong, diversified — NIC status by Mahathir era", "Outstanding — region's top; ISI→EOI→tech/services", "Catastrophic — lowest regional growth", "Failure pre-1986; strong 1986–2000 (9.5% peak)"]
      },
      {
        h: "Equity",
        cells: ["Partial — poverty 40.3%→15%, short of 30% target", "Weakest priority — Gini deteriorated; class, not ethnic, issue", "Achieved (narrow income gap, 1972) — but amid poverty: hollow", "Low inequality pre-1986; regional/ethnic gaps rose after Doi Moi"]
      },
      {
        h: "Who gained from equity",
        cells: ["Benefits concentrated among connected elites", "Income inequality grew", "Equal, but poor", "Rising regional/ethnic income gaps"]
      },
      {
        h: "Nationalism",
        cells: ["Partial — bumiputera equity 2.4%→20.3%; FDI courted throughout", "Largely sacrificed — heavy FDI/MNC reliance; pragmatic, not nationalist", "Extreme — autarky, minority expulsion; directly CAUSED growth failure", "Full nationalisation pre-1986; deliberately diluted post-1986 for FDI"]
      },
      {
        h: "Overall verdict",
        cells: ["Reasonably successful — best BALANCE of the three aims", "Top by growth; nationalism not prioritised, equity only partial", "Overall failure — equity/nationalism without growth not success", "Best LEARNING and ADAPTATION — re-balanced aims when mix failed"]
      },
      { h: "Label", cells: ["Best balance", "Best growth", "Hollow equity/nationalism", "Best adaptation"] }
    ]
  },
  judge: {
    prompt: "Which case was most successful overall, weighing all three aims? Rank them.",
    factors: ["f2-my", "f2-sg", "f2-bm", "f2-vn"],
    notes_view: "Malaysia: best BALANCE of the three aims; Singapore most successful by growth metrics; Vietnam the best example of learning and adaptation; Burma an overall failure."
  },
  historians: [],
  takeaways: ["Malaysia = best balance; Singapore = best growth; Vietnam = best adaptation; Burma = hollow equity/nationalism.", "Use these verdicts to show explicit weighing — examiners reward it over growth-only judgements."]
});
L.push({
  id: "ec-flow-f3-bmvn",
  order: 91,
  level: 3,
  parent: "ec-cluster-bmvn",
  kind: "causal",
  title: "Why Burma failed where Vietnam succeeded",
  question: "Why did Vietnam eventually succeed where Burma failed?",
  intro: "Both began with near-identical socialist strategies and failed for similar reasons. The divergence lies in what happened NEXT: willingness, coherence and international relations.",
  clusters: [
    {
      title: "Shared socialist start",
      summary: "Same strategy, same failure.",
      steps: [
        {
          id: "f3-strategy",
          type: "policy",
          t: "Same starting strategy",
          d: "Heavy industry first, agricultural collectivisation, nationalisation, minority expulsion.",
          cards: ["burmavsvietnam"]
        },
        { link: "led to", how: "The shared strategy produced the same failures in both states." },
        {
          id: "f3-fail",
          type: "consequence",
          sign: "-",
          t: "Same failure causes",
          d: "Foreign exchange shortages, agricultural disincentives, lack of expertise.",
          cards: ["burmavsvietnam", "ec-bm-rice", "ec-vn-fyp-funds"]
        }
      ]
    },
    {
      title: "Willingness to reform",
      link: "provoked response",
      how: "Facing the same failure, the two regimes showed very different willingness to reform.",
      summary: "Reactive vs proactive.",
      steps: [
        {
          split: [
            {
              h: "Burma",
              steps: [
                {
                  id: "f3-bm-will",
                  type: "actor",
                  t: "Ne Win: REACTIVE reform",
                  date: "1962–1988",
                  d: "Ne Win clung to autarky until forced out by the 8888 Uprising (1988) — crisis-driven, decades too late.",
                  cards: ["burmavsvietnam"]
                }
              ]
            },
            {
              h: "Vietnam",
              steps: [
                {
                  id: "f3-vn-will",
                  type: "turning_point",
                  t: "Vietnam: PROACTIVE reform",
                  date: "1986",
                  d: "Leadership transition (Le Duan's death) enabled deliberate Doi Moi — reform from within, not regime collapse.",
                  cards: ["ec-vn-doimoi"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Coherence of reform",
      link: "followed by",
      how: "The second divergence lay in whether the reforms adopted were coherent or contradictory.",
      summary: "Contradictory vs mutually reinforcing.",
      steps: [
        {
          split: [
            {
              h: "Burma",
              steps: [
                {
                  id: "f3-bm-coh",
                  type: "policy",
                  t: "SLORC: contradictory reform",
                  date: "1988–",
                  d: "Market rhetoric + continued state monopolies + export bans on 28 goods.",
                  cards: ["ec-bm-tucker", "fivepercent"]
                }
              ]
            },
            {
              h: "Vietnam",
              steps: [
                {
                  id: "f3-vn-coh",
                  type: "policy",
                  t: "Doi Moi: consistent reform",
                  d: "Decentralisation + agricultural privatisation (Resolution 10) + FDI law — mutually reinforcing.",
                  cards: ["ec-vn-res10", "ec-vn-doimoi-measures"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "International relations",
      link: "followed by",
      how: "The third divergence lay in international relations after reform began.",
      summary: "Pariah vs opening.",
      steps: [
        {
          split: [
            {
              h: "Burma",
              steps: [
                { id: "f3-bm-int", type: "event", t: "Burma: brutal suppression", d: "Brutal suppression of the pro-democracy movement.", cards: ["ec-bm-asean"] },
                { link: "led to", how: "Brutality brought isolation." },
                {
                  id: "f3-bm-pariah",
                  type: "consequence",
                  sign: "-",
                  t: "Pariah status, sanctions, MNC exodus",
                  d: "Burma became a pariah: sanctions and an MNC exodus.",
                  cards: ["ec-bm-asean"]
                }
              ]
            },
            {
              h: "Vietnam",
              steps: [
                {
                  id: "f3-vn-int",
                  type: "consequence",
                  sign: "+",
                  t: "Vietnam: international opening",
                  date: "1994",
                  d: "Improved relations → US embargo lifted (1994) → IMF/World Bank/ADB credit.",
                  cards: ["ec-vn-integration"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Results and verdict",
      link: "led to",
      how: "Contradictory, isolated reform kept Burma stagnant; consistent reform plus foreign credit sustained Vietnam's growth.",
      summary: "Stagnation vs sustained growth.",
      steps: [
        {
          split: [
            {
              h: "Burma",
              steps: [
                {
                  id: "f3-bm-res",
                  type: "consequence",
                  sign: "-",
                  t: "Burma: stagnation",
                  date: "1990s",
                  d: "Through the 1990s, despite statistically high 7.4% growth off a tiny base.",
                  cards: ["ec-bm-shallow"]
                }
              ]
            },
            {
              h: "Vietnam",
              steps: [
                {
                  id: "f3-vn-res",
                  type: "consequence",
                  sign: "+",
                  t: "Vietnam: sustained growth",
                  date: "1990s",
                  d: "8–9.5% growth, major rice exporter, significant FDI.",
                  cards: ["ec-vn-1990s"]
                }
              ]
            }
          ]
        },
        { link: "supports", how: "Since both started socialist and diverged only in how they reformed, implementation rather than ideology decided outcomes." },
        {
          id: "f3-verdict",
          type: "judgement",
          t: "Implementation, not socialism, decided",
          d: "Socialism itself did not doom either; rigid, extreme implementation (Burma) vs pragmatic adaptation (Vietnam) decided outcomes.",
          cards: ["burmavsvietnam"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["Burma", "Vietnam"],
    rows: [
      {
        h: "Willingness to reform",
        cells: ["REACTIVE — forced by 8888 Uprising (1988), decades late", "PROACTIVE — leadership transition (1986) enabled Doi Moi"]
      },
      {
        h: "Coherence of reform",
        cells: ["Contradictory — market rhetoric, state monopolies, export bans (28 goods)", "Consistent — decentralisation, Resolution 10, FDI law"]
      },
      { h: "International relations", cells: ["Pariah — suppression, sanctions, MNC exodus", "Opening — US embargo lifted 1994; IMF/World Bank/ADB credit"] },
      { h: "Result", cells: ["Stagnation through 1990s despite 7.4% off tiny base", "8–9.5% growth, major rice exporter, significant FDI"] }
    ]
  },
  judge: {
    prompt: "Which factor best explains why Vietnam succeeded where Burma failed? Rank them.",
    factors: ["f3-bm-will", "f3-vn-will", "f3-bm-coh", "f3-vn-coh", "f3-bm-int", "f3-vn-int"],
    notes_view: "Socialism was not automatic failure: Vietnam succeeded once it pragmatically ADAPTED, while Burma failed due to EXTREME, rigid implementation."
  },
  historians: [],
  takeaways: ["Explain the divergence with the three factors — don't just state the growth gap.", "Burma's failure is more damning because it was the best endowed at independence."]
});
L.push({
  id: "ec-flow-f4-sgmy",
  order: 92,
  level: 3,
  parent: "ec-cluster-sgmy",
  kind: "causal",
  title: "Singapore vs Malaysia: same region, different outcomes",
  question: "Why did Singapore and Malaysia take different economic paths and reach different outcomes?",
  intro: "Resources, ethnic politics and governance quality explain why two neighbours with a shared past took different paths.",
  clusters: [
    {
      title: "Shared base, different resources",
      summary: "Good government in both; resources diverged.",
      steps: [
        {
          id: "f4-base",
          type: "context",
          t: "Shared base: technocratic government",
          d: "Both had relatively honest, technocratic governments — a key differentiator vs the Philippines/Indonesia.",
          cards: ["ec-sg-vs-my"]
        },
        { link: "followed by", how: "Despite this shared strength, their resource endowments forced different paths." },
        {
          split: [
            {
              h: "Malaysia",
              steps: [
                {
                  id: "f4-my-res",
                  type: "long_term_cause",
                  t: "Malaysia: resource-rich",
                  d: "Tin, rubber wealth allowed it to delay EOI (end of 1970s, like most neighbours).",
                  cards: ["ec-my-colonial"]
                }
              ]
            },
            {
              h: "Singapore",
              steps: [
                {
                  id: "f4-sg-res",
                  type: "long_term_cause",
                  t: "Singapore: no resources",
                  d: "Total lack of resources forced EARLY, decisive EOI (mid-1960s).",
                  cards: ["ec-sg-context"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Ethnic politics",
      link: "followed by",
      how: "Second difference: ethnic politics shaped each government's priorities.",
      summary: "NEP vs no ethnic redistribution.",
      steps: [
        {
          split: [
            {
              h: "Malaysia",
              steps: [
                {
                  id: "f4-my-eth",
                  type: "long_term_cause",
                  t: "Malaysia: ethnic politics central",
                  d: "Policy fundamentally shaped by the need to address Malay–Chinese inequality.",
                  cards: ["ec-my-chinese", "nep"]
                },
                { link: "led to", how: "The need to address inequality produced the NEP." },
                { id: "f4-my-nep", type: "policy", t: "New Economic Policy", date: "1971–90", d: "Bumiputera-focused redistribution.", cards: ["nep"] }
              ]
            },
            {
              h: "Singapore",
              steps: [
                {
                  id: "f4-sg-eth",
                  type: "long_term_cause",
                  t: "Singapore: no ethnic redistribution",
                  d: "Ethnically diverse, but PAP governance was not built around ethnic redistribution.",
                  cards: ["ec-sg-vs-my"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Governance and capture",
      link: "followed by",
      how: "Third difference: how far governance was captured by interest groups.",
      summary: "Partial crony capture vs freedom from interest groups.",
      steps: [
        {
          split: [
            {
              h: "Malaysia",
              steps: [
                {
                  id: "f4-my-crony",
                  type: "consequence",
                  sign: "-",
                  t: "Malaysia: partial crony capture",
                  d: "Privatisation contracts going to UMNO-linked firms.",
                  cards: ["ec-my-privatisation"]
                }
              ]
            },
            {
              h: "Singapore",
              steps: [
                {
                  id: "f4-sg-free",
                  type: "consequence",
                  sign: "+",
                  t: "Singapore: free of interest groups",
                  d: "Faster, more consistent long-term planning; crony capture much more limited in its state capitalism model.",
                  cards: ["ec-sg-nature", "ec-sg-holdings"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Outcome",
      link: "led to",
      how: "Early EOI and uncaptured, consistent planning gave Singapore faster growth; NEP priorities gave Malaysia a better balance of aims.",
      summary: "Best growth vs best balance.",
      steps: [
        {
          row: [
            {
              id: "f4-sg-out",
              type: "consequence",
              sign: "+",
              t: "Singapore: 8.3%, best growth",
              date: "1961–2001",
              d: "Singapore = most successful by growth.",
              cards: ["ec-gdp-table", "ec-sg-vs-my"]
            },
            {
              id: "f4-my-out",
              type: "consequence",
              sign: "±",
              t: "Malaysia: 6.7%, best balance",
              date: "1961–2001",
              d: "Malaysia = best balance of the three aims (F2).",
              cards: ["ec-gdp-table", "ec-sg-vs-my"]
            }
          ]
        }
      ]
    }
  ],
  matrix: {
    cols: ["Malaysia", "Singapore"],
    rows: [
      { h: "Resources", cells: ["Rich (tin, rubber)", "None"] },
      { h: "EOI timing", cells: ["Delayed — end of 1970s like most neighbours", "Early, decisive — mid-1960s"] },
      { h: "Ethnic politics", cells: ["Central — Malay–Chinese inequality → NEP", "Not built around ethnic redistribution"] },
      { h: "Governance", cells: ["Honest, technocratic; partial crony capture (UMNO-linked firms)", "Honest, technocratic; free of interest-group capture"] },
      { h: "Growth 1961–2001", cells: ["6.7% — best balance of aims", "8.3% — most successful by growth"] }
    ]
  },
  judge: {
    prompt: "Which difference best explains the contrasting outcomes of Singapore and Malaysia? Rank them.",
    factors: ["f4-my-res", "f4-sg-res", "f4-my-eth", "f4-sg-eth", "f4-my-crony", "f4-sg-free"],
    notes_view: ""
  },
  historians: [],
  takeaways: ["Resource endowment shaped timing of EOI; ethnic politics shaped priorities; governance quality shaped consistency.", "Pair with F2: Malaysia best balance, Singapore best growth."]
});
L.push({
  id: "ec-flow-f5-pattern",
  order: 93,
  parent: "ec-top",
  kind: "matrix",
  title: "The common pattern: ISI → EOI → diversification",
  question: "How far did SEA economies follow a common path from ISI to EOI to diversification?",
  intro: "Capitalist economies broadly followed ISI → EOI → diversification at different speeds; socialist economies first had to pivot away from central planning altogether.",
  clusters: [
    {
      title: "Two tracks",
      summary: "Capitalist track vs socialist pivot.",
      steps: [
        {
          row: [
            {
              id: "f5-cap",
              type: "interpretation",
              t: "Capitalist: followed the track",
              d: "Malaysia, Singapore, also Thailand/Philippines/Indonesia broadly followed ISI → EOI → diversification at different speeds.",
              cards: ["ec-f5-pattern", "ec-my-pioneer", "ec-my-deepening", "ec-sg-crisis", "ec-sg-levers", "ec-sg-services", "ec-sg-regional"]
            },
            {
              id: "f5-soc",
              type: "interpretation",
              t: "Socialist: pivot needed first",
              d: "Burma and Vietnam needed a dramatic, externally-forced pivot from central planning before they could start the track.",
              cards: ["ec-f5-pattern", "ec-bm-pyidawtha", "burmeseway", "ec-bm-fil", "ec-vn-north"]
            }
          ]
        }
      ]
    },
    {
      title: "Comparing speed",
      link: "supports",
      how: "Reading the stage table across shows how speed differed along the common track.",
      summary: "Fastest, never, and an equivalent pivot.",
      steps: [
        {
          id: "f5-speed",
          type: "interpretation",
          t: "Singapore fastest; Burma never",
          d: "Use the stage table to compare speed: Singapore fastest to EOI; Burma never had an EOI stage.",
          cards: ["ec-f5-pattern"]
        },
        { link: "supports", how: "Vietnam's case shows a socialist state can make an equivalent pivot once it reforms." },
        {
          id: "f5-doimoi",
          type: "interpretation",
          t: "Doi Moi as EOI-equivalent",
          d: "Doi Moi can be argued as Vietnam's EOI-equivalent pivot, leading to sustained high growth and FDI.",
          cards: ["ec-vn-doimoi", "ec-vn-1990s"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["Malaysia", "Singapore", "Burma", "Vietnam"],
    rows: [
      {
        h: "Stage 1",
        cells: ["Laissez-faire ISI (1957–71)", "ISI under Malaysia common market (1960–65)", "U Nu's Third Way welfare planning (1948–62)", "Heavy industry, central planning, North then reunified (1955–86)"]
      },
      {
        h: "Stage 2",
        cells: ["NEP restructuring + FDI (1971–90)", "Forced EOI after Separation/British withdrawal (1965–79)", "Ne Win's socialist autarky (1962–88) — NO EOI stage", "Doi Moi (1986–) — functional equivalent of an EOI pivot"]
      },
      {
        h: "Stage 3",
        cells: ["Heavy industry/privatisation (1980s) → industrial deepening (1986–90s)", "Tech/services shift (1979) → regionalisation (1990s)", "SLORC's contradictory partial market opening (1988–) — incomplete", "Sustained high growth, FDI, ASEAN integration (1990s)"]
      }
    ]
  },
  judge: {
    prompt: "Which contrast matters most when comparing paths to EOI? Rank them.",
    factors: ["f5-cap", "f5-soc", "f5-speed"],
    notes_view: "Capitalist economies broadly followed the track; socialist economies first had to make a much more dramatic, externally-forced pivot away from central planning."
  },
  historians: [],
  takeaways: ["Use the stage table to compare speed: Singapore fastest to EOI; Burma never had an EOI stage.", "Doi Moi can be argued as Vietnam's EOI-equivalent pivot."]
});
L.push({
  id: "ec-flow-cl-growth",
  order: 94,
  level: 3,
  parent: "ec-cluster-tip",
  kind: "matrix",
  title: "Growth performance compared (cluster analysis)",
  question: "How did growth compare across SEA economies, and why did its quality differ?",
  intro: "Ranking the economies over 1961–2001 and explaining why the headline numbers differ in quality.",
  clusters: [
    {
      title: "The ranking",
      summary: "Singapore leads; Myanmar's late surge misleads.",
      steps: [
        {
          id: "cg-rank",
          type: "evidence",
          t: "Ranking 1961–2001",
          d: "Singapore (8.3) > Malaysia (6.7) > Thailand (6.8) > Indonesia (5.7) > Myanmar (4.3) > Philippines (3.9).",
          cards: ["ec-cl-growth", "ec-gdp-table"]
        },
        { link: "supports", how: "The decade figures show headline rates can mislead without context." },
        {
          id: "cg-irony",
          type: "interpretation",
          t: "Myanmar's late surge misleads",
          d: "Its best decade, 1991–2000 (7.4%), followed SLORC's post-1988 reforms but started from a tiny base, so it still lagged.",
          cards: ["ec-gdp-table"]
        }
      ]
    },
    {
      title: "Quality of growth",
      link: "followed by",
      how: "Behind the ranking lie three different kinds of growth among the capitalist economies.",
      summary: "Sustained EOI vs windfall vs failure.",
      steps: [
        {
          row: [
            {
              id: "cg-thmy",
              type: "consequence",
              sign: "+",
              t: "Thailand and Malaysia: sustained EOI",
              d: "Only two capitalist states with a SUCCESSFUL, sustained EOI transition by mid-1980s — key to stronger long-run performance.",
              cards: ["ec-cl-growth", "thaieoi"]
            },
            {
              id: "cg-id",
              type: "consequence",
              sign: "±",
              t: "Indonesia: commodity windfall",
              d: "Growth driven heavily by COMMODITY WINDFALL (1970s oil), not industrial transformation — less structurally robust.",
              cards: ["ec-id-oil"]
            },
            {
              id: "cg-ph",
              type: "consequence",
              sign: "-",
              t: "Philippines: clear underperformer",
              d: "The only one of the three (Lecture 3) to fail the ISI→EOI transition convincingly; 1.8% in 1981–90.",
              cards: ["philfailure"]
            }
          ]
        },
        { link: "supports", how: "Comparing robust EOI growth with windfall growth shows the rate alone misleads." },
        {
          id: "cg-verdict",
          type: "judgement",
          t: "Quality matters as much as rate",
          d: "The quality of growth (EOI transition vs windfall) matters as much as its rate.",
          cards: ["ec-cl-growth"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["1961–70", "1971–80", "1981–90", "1991–2000", "1961–2001"],
    rows: [
      { h: "Singapore", cells: ["10.0", "9.0", "7.4", "7.0", "8.3"] },
      { h: "Malaysia", cells: ["6.5", "7.9", "6.0", "6.6", "6.7"] },
      { h: "Thailand", cells: ["8.2", "6.9", "7.9", "4.4", "6.8"] },
      { h: "Philippines", cells: ["4.9", "5.9", "1.8", "2.9", "3.9"] },
      { h: "Indonesia", cells: ["4.2", "7.9", "6.4", "4.3", "5.7"] },
      { h: "Myanmar", cells: ["3.2", "4.7", "1.4", "7.4", "4.3"] }
    ]
  },
  judge: {
    prompt: "Rank the three capitalist cases by the QUALITY, not the rate, of their growth.",
    factors: ["cg-thmy", "cg-id", "cg-ph"],
    notes_view: "Thailand and Malaysia's successful, sustained EOI transition is the key variable explaining their stronger long-run performance; Indonesia's oil-windfall growth was less structurally robust."
  },
  historians: [],
  takeaways: ["Distinguish structurally robust growth (Thailand, Malaysia) from windfall growth (Indonesia).", "Philippines is the cleanest failure case among capitalist economies."]
});
L.push({
  id: "ec-flow-cl-isieoi",
  order: 95,
  level: 3,
  parent: "ec-cluster-tip",
  kind: "causal",
  title: "ISI → EOI: why some succeeded and others didn't",
  question: "Why did some SEA economies make the ISI → EOI transition while others failed?",
  intro: "Who managed the transition, and the enabling or disabling factor in each case.",
  clusters: [
    {
      title: "Successful transitions",
      summary: "Thailand and Malaysia made EOI.",
      steps: [
        {
          split: [
            {
              h: "Thailand: YES (mid-1980s)",
              steps: [
                {
                  id: "ie-th-en",
                  type: "long_term_cause",
                  t: "Thai enablers",
                  d: "Resilient autonomous private sector (Chinese bourgeoisie) + domestic capital dominance + currency peg management + state genuinely scaled back.",
                  cards: ["ec-th-eoi-success", "ec-th-peg", "ec-th-scaling"]
                },
                { link: "enabled", how: "A capable private sector and a withdrawing state let competition drive export growth." },
                {
                  id: "ie-th-yes",
                  type: "consequence",
                  sign: "+",
                  t: "Thailand: EOI achieved",
                  date: "mid-1980s",
                  d: "Successful transition to EOI by the mid-1980s.",
                  cards: ["ec-th-eoi-success"]
                }
              ]
            },
            {
              h: "Malaysia: YES",
              steps: [
                {
                  id: "ie-my",
                  type: "consequence",
                  sign: "+",
                  t: "Malaysia: FDI-led EOI",
                  d: "NEP-guided but still attracted FDI-led EOI successfully.",
                  cards: ["ec-my-nep-fdi"]
                }
              ]
            }
          ]
        },
        { link: "supports", how: "The success cases point to a common thread in what enabled the transition." },
        {
          id: "ie-succ",
          type: "interpretation",
          t: "Common thread: success",
          d: "A capable existing private business class (Thai Chinese bourgeoisie) OR a state willing to genuinely withdraw.",
          cards: ["ec-cl-isi-eoi"]
        }
      ]
    },
    {
      title: "Partial and failed transitions",
      link: "contradicts",
      how: "Where those enablers were missing, the transition stalled or failed.",
      summary: "Indonesia partial; the Philippines failed.",
      steps: [
        {
          split: [
            {
              h: "Indonesia: PARTIAL",
              steps: [
                {
                  id: "ie-id-dis",
                  type: "long_term_cause",
                  t: "Indonesian disablers",
                  d: "Oil dependence delayed urgency; deregulation captured by cronies; auto industry never built engine capacity.",
                  cards: ["ec-id-dereg-reality", "ec-id-limits"]
                },
                { link: "led to", how: "Oil money removed urgency and cronies captured reform, so competitive export industry stayed limited." },
                {
                  id: "ie-id-part",
                  type: "consequence",
                  sign: "±",
                  t: "Indonesia: partial, oil-cushioned",
                  d: "Only a partial, limited transition — the middle case.",
                  cards: ["ec-essay-isieoi"]
                }
              ]
            },
            {
              h: "Philippines: FAILED",
              steps: [
                {
                  id: "ie-ph-dis",
                  type: "long_term_cause",
                  t: "Philippine disablers",
                  d: "Protected ISI firms never became efficient; 1970s external shocks hit before adjustment; cronyism + cyclical instability interrupted reform.",
                  cards: ["ec-ph-isi-fail", "ec-ph-1970s"]
                },
                { link: "led to", how: "Inefficient firms, early shocks and repeatedly interrupted reform left the transition failed." },
                { id: "ie-ph-fail", type: "consequence", sign: "-", t: "Philippines: failed transition", d: "Failed or weak transition to EOI.", cards: ["philfailure"] }
              ]
            }
          ]
        },
        { link: "supports", how: "The failure cases share a political logic behind the economic one." },
        {
          id: "ie-fail",
          type: "interpretation",
          t: "Common thread: failure",
          d: "Protection bred inefficiency; crony beneficiaries of protection had every incentive to resist its removal.",
          cards: ["ec-cl-isi-eoi"]
        }
      ]
    },
    {
      title: "Essay pairing",
      link: "led to",
      how: "Weighing the cases gives a ready-made essay pairing and links back to Salvatore.",
      summary: "Thailand vs Philippines; Indonesia in between.",
      steps: [
        {
          id: "ie-pair",
          type: "judgement",
          t: "Thailand vs Philippines pairing",
          d: "'Compare ISI→EOI in two economies': Thailand (success) vs Philippines (failure) is cleanest; Indonesia = 'partial/oil-cushioned' middle case.",
          cards: ["ec-essay-isieoi"]
        },
        { link: "supports", how: "The contrast confirms that the transition, not the choice of strategy, discriminated." },
        {
          id: "ie-salv",
          type: "interpretation",
          t: "Salvatore: transition is key",
          d: "The transition, not the strategy, is the differentiator between successful and unsuccessful economies.",
          cards: ["ec-salvatore"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["Transitioned to EOI?", "Key enabling/disabling factor"],
    rows: [
      { h: "Thailand", cells: ["YES (mid-1980s)", "Chinese bourgeoisie, domestic capital, peg management, state scaled back"] },
      { h: "Malaysia", cells: ["YES", "NEP-guided but still attracted FDI-led EOI"] },
      { h: "Indonesia", cells: ["PARTIAL / LIMITED", "Oil dependence; crony-captured deregulation; no engine capacity"] },
      { h: "Philippines", cells: ["FAILED / WEAK", "Inefficient protected firms; 1970s shocks; cronyism, instability"] }
    ]
  },
  judge: {
    prompt: "Which factor best explains success or failure in the ISI → EOI transition? Rank them.",
    factors: ["ie-th-en", "ie-id-dis", "ie-ph-dis", "ie-succ", "ie-fail"],
    notes_view: "Failure: protection bred inefficiency and its crony beneficiaries resisted removal. Success: a capable private business class or a state willing to genuinely withdraw."
  },
  historians: [
    { who: "Salvatore", view: "ISI and EOI are sequential; the timely transition separates winners from losers.", nodes: ["ie-salv"] }
  ],
  takeaways: ["Transition success depended on interest groups: cronies resisted ending protection.", "Links to Salvatore: the transition, not the strategy, is the differentiator."]
});
L.push({
  id: "ec-flow-cl-state",
  order: 96,
  level: 3,
  parent: "ec-cluster-tip",
  kind: "matrix",
  title: "Role of the state: a spectrum",
  question: "How far was state intervention necessary, and why did its results differ?",
  intro: "All three relied on heavy initial intervention out of necessity. The key difference is what happened AFTER: scaled back for efficiency, or captured for rent-extraction.",
  clusters: [
    {
      title: "Necessity",
      summary: "No bourgeoisie, so heavy early intervention.",
      steps: [
        {
          id: "cs-need",
          type: "long_term_cause",
          t: "Weak domestic bourgeoisie",
          d: "Weak/absent domestic bourgeoisie at independence.",
          cards: ["ec-cl-state", "ec-why-govt"]
        },
        { link: "led to", how: "With no domestic business class to lead, the state had to intervene heavily at first." },
        {
          id: "cs-heavy",
          type: "policy",
          t: "Heavy initial state intervention",
          d: "All three relied on heavy initial state intervention out of necessity.",
          cards: ["ec-cl-state"]
        }
      ]
    },
    {
      title: "What happened after",
      link: "followed by",
      how: "After the initial phase, the state's role was either scaled back for efficiency or captured for rent-extraction.",
      summary: "Withdrawal vs capture.",
      steps: [
        {
          split: [
            {
              h: "Thailand",
              steps: [
                {
                  id: "cs-th",
                  type: "consequence",
                  sign: "+",
                  t: "Thailand: genuinely scaled back",
                  d: "State-led under Phibun but always checked by an autonomous private sector; scaled back from 1957 and especially 1985.",
                  ev: ["Sarit (1957): kanphatthana — growth tied to national unity and his own legitimacy.", "Result: functioning EOI; the market 'compensated for government failures' (Hewison)."],
                  cards: ["ec-th-phibun", "ec-th-sarit", "ec-th-scaling", "ec-th-govt"]
                }
              ]
            },
            {
              h: "Indonesia",
              steps: [
                {
                  id: "cs-id",
                  type: "consequence",
                  sign: "-",
                  t: "Indonesia: captured by cronies",
                  d: "Dominant by necessity; nominally scaled back in 1980s deregulation but REINFORCED via cronyism.",
                  ev: ["Initially, Berkeley Mafia technocrats mediated between the New Order and Western aid.", "Result: 'bureaucratic capitalism' (Robison) — officials (esp. military) treat offices as personal fiefs for enrichment and political consolidation."],
                  cards: ["ec-id-weak", "ec-id-neworder", "ec-id-dereg-reality", "ec-id-robison"]
                }
              ]
            },
            {
              h: "Philippines",
              steps: [
                {
                  id: "cs-ph",
                  type: "consequence",
                  sign: "-",
                  t: "Philippines: intensified under Marcos",
                  d: "Dominant from the 1950s as ISI pioneer; intensified hugely under Marcos martial law (300+ public enterprises).",
                  ev: ["Result: 'patrimonialist plunder' — rent-seeking; political criteria override economic ones."],
                  cards: ["ec-ph-isi", "ec-ph-agri", "crony", "ec-ph-govt"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Essay verdict",
      link: "supports",
      how: "The divergent trajectories show necessity explains why intervention began, while its nature explains the outcomes.",
      summary: "Necessity vs limits; nature over existence.",
      steps: [
        {
          id: "cs-essay",
          type: "judgement",
          t: "Necessity vs limits",
          d: "Was intervention necessary? Indonesia/Philippines for NECESSITY (no domestic bourgeoisie); Thailand for LIMITS (private sector resilience meant less intervention needed).",
          cards: ["ec-essay-intervention"]
        },
        { link: "supports", how: "If all three intervened yet diverged, the trajectory and nature of intervention must discriminate." },
        {
          id: "cs-nature",
          type: "judgement",
          t: "Judge trajectory, not existence",
          d: "Judge the state by its trajectory after the initial phase: withdrawal (Thailand) vs capture (Indonesia, Philippines).",
          cards: ["ec-cl-state"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["Thailand", "Indonesia", "Philippines"],
    rows: [
      {
        h: "Initial role",
        cells: ["State-led (Phibun), always checked by autonomous private sector", "Dominant by necessity — no domestic bourgeoisie at independence", "Dominant from 1950s — ISI pioneer in the region"]
      },
      {
        h: "Trajectory",
        cells: ["Genuinely scaled back from 1957 (Sarit), especially from 1985", "Nominally scaled back (1980s deregulation), REINFORCED via cronyism", "Intensified hugely under Marcos martial law (300+ public enterprises)"]
      },
      {
        h: "Result",
        cells: ["Functioning EOI; market 'compensated for government failures' (Hewison)", "'Bureaucratic capitalism' (Robison) — offices as personal fiefs", "'Patrimonialist plunder' — political criteria override economic ones"]
      }
    ]
  },
  judge: {
    prompt: "How far was state intervention necessary for development? Weigh these cases.",
    factors: ["cs-need", "cs-th", "cs-id", "cs-ph"],
    notes_view: "Indonesia/Philippines show intervention was NECESSARY (absent domestic bourgeoisie); Thailand shows its LIMITS — private sector resilience meant less intervention was needed for success."
  },
  historians: [
    { who: "Hewison", view: "In Thailand the market 'compensated for government failures'.", nodes: ["cs-th"] },
    { who: "Robison", view: "Indonesia's 'bureaucratic capitalism': officials treat state offices as personal fiefs.", nodes: ["cs-id"] }
  ],
  takeaways: ["Judge the state by its trajectory after the initial phase: withdrawal (Thailand) vs capture (Indonesia, Philippines).", "Link to Part F: nature and direction of intervention, not its existence, discriminates."]
});
L.push({
  id: "ec-flow-cl-chinese",
  order: 97,
  level: 3,
  parent: "ec-cluster-tip",
  kind: "matrix",
  title: "Role of ethnic Chinese communities",
  question: "How far were ethnic Chinese communities a stabilising force in SEA development?",
  intro: "Disproportionate Chinese economic control was region-wide; what varied was the political response — stabilising or destabilising.",
  clusters: [
    {
      title: "Constant dominance, varied response",
      summary: "Rigg's data and four political responses.",
      steps: [
        {
          id: "cc-rigg",
          type: "evidence",
          t: "Rigg data: disproportionate control",
          date: "1980s",
          d: "Chinese shares of listed-firm capitalisation far exceed population shares everywhere (Rigg).",
          ev: ["% of population / % of listed-firm capitalisation: Singapore 70.0/81% · Thailand 10.0/81% · Indonesia 3.8/73% · Malaysia 28.0/69% · Philippines 1.3/50–60%."],
          cards: ["chinesecapital"]
        },
        { link: "provoked response", how: "Visible minority dominance forced each government to choose how to handle Chinese business." },
        {
          row: [
            {
              id: "cc-th",
              type: "consequence",
              sign: "+",
              t: "Thailand: accommodated",
              d: "Allowed autonomy; periodically co-opted as allies (post-WWII, post-1985) — least fraught.",
              cards: ["ec-th-chinese"]
            },
            {
              id: "cc-id",
              type: "consequence",
              sign: "-",
              t: "Indonesia: explicit, violent tension",
              d: "Malari riots (1974); cukong system failed; anti-Chinese violence after 1997.",
              ev: ["Cukong system: an indigenous 'front' holds licences while the Chinese partner runs the business — a failed nationalist workaround."],
              cards: ["ec-id-chinese"]
            },
            {
              id: "cc-ph",
              type: "consequence",
              sign: "±",
              t: "Philippines: moderate tension",
              d: "Smallest share (1.3%) but Marcos co-opted them (Lucio Tan) under martial law; 1990s backlash of kidnappings/robberies.",
              ev: ["179–286 victims/year (1993–97); ransoms grew from $2.5m to $10.4m annually."],
              cards: ["ec-ph-chinese"]
            },
            {
              id: "cc-my",
              type: "consequence",
              sign: "±",
              t: "Malaysia: restricted via NEP",
              d: "NEP quotas targeted Chinese corporate dominance — unlike Thailand, which largely did not restrict.",
              cards: ["ec-my-chinese", "ec-connect"]
            }
          ]
        }
      ]
    },
    {
      title: "Essay verdict",
      link: "supports",
      how: "The contrasting responses show that political handling, not dominance itself, decided whether Chinese business stabilised.",
      summary: "Stabilising or destabilising.",
      steps: [
        {
          id: "cc-essay",
          type: "judgement",
          t: "Stabilising or destabilising force?",
          d: "Dominance is a constant; the arguable variable is whether it was STABILISING (Thailand) or a SOURCE OF INSTABILITY (Indonesia, Philippines).",
          ev: ["Use the Rigg data plus the contrasting political handling."],
          cards: ["ec-essay-chinese"]
        },
        { link: "supports", how: "The Malaysia–Thailand pair isolates the effect of restriction versus accommodation." },
        {
          id: "cc-mythai",
          type: "interpretation",
          t: "Restriction vs accommodation",
          d: "Malaysia–Thailand comparison: restriction (NEP) vs accommodation of Chinese business dominance.",
          cards: ["ec-connect"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["% of population (1980s)", "% listed-firm capitalisation", "Political response"],
    rows: [
      { h: "Singapore", cells: ["70.0", "81%", "—"] },
      { h: "Thailand", cells: ["10.0", "81%", "Accommodated; co-opted as allies (post-WWII, post-1985)"] },
      { h: "Indonesia", cells: ["3.8", "73%", "Explicit, violent tension — Malari 1974, post-1997 violence"] },
      { h: "Malaysia", cells: ["28.0", "69%", "Restricted via NEP quotas"] },
      { h: "Philippines", cells: ["1.3", "50–60%", "Moderate tension — Marcos co-opted; 1990s backlash"] }
    ]
  },
  judge: {
    prompt: "Rank the four cases by how far Chinese business was a stabilising force.",
    factors: ["cc-th", "cc-id", "cc-ph", "cc-my"],
    notes_view: "Disproportionate Chinese dominance is a constant; what varies is whether it was a STABILISING force (Thailand) or a SOURCE OF POLITICAL INSTABILITY (Indonesia, Philippines)."
  },
  historians: [
    { who: "Rigg", view: "1980s data: ethnic Chinese control far exceeds their population share across SEA.", nodes: ["cc-rigg"] }
  ],
  takeaways: ["'Were ethnic Chinese essential?' — use the Rigg table and the different political responses.", "Malaysia–Thailand comparison: restriction (NEP) vs accommodation."]
});
L.push({
  id: "ec-flow-cl-equity",
  order: 98,
  level: 3,
  parent: "ec-cluster-tip",
  kind: "matrix",
  title: "Equity and income inequality compared",
  question: "Did growth in Thailand, Indonesia and the Philippines come at the cost of equity?",
  intro: "All three show aggregate growth with worsening or persistent inequality — growth and equity are not automatically compatible. The mechanisms differ.",
  clusters: [
    {
      title: "Growth without equity",
      summary: "Same pattern, three mechanisms.",
      steps: [
        {
          id: "ce-growth",
          type: "context",
          t: "Shared pattern: aggregate growth",
          d: "Aggregate growth + worsening or persistent inequality across all three.",
          cards: ["ec-cl-equity"]
        },
        { link: "followed by", how: "Despite aggregate growth, inequality worsened or persisted through a different mechanism in each economy." },
        {
          row: [
            {
              id: "ce-th",
              type: "consequence",
              sign: "-",
              t: "Thailand: regional inequality",
              d: "Gini 0.41→0.52 (1965–2000); Bangkok 48.2%→55.4% of GDP at a flat 16% of population.",
              cards: ["ec-th-inequality"]
            },
            {
              id: "ce-id",
              type: "consequence",
              sign: "-",
              t: "Indonesia: urban–rural gap",
              d: "Urban–rural income gap 42%→92% (1970–93); concentration on Java; transmigration failure.",
              cards: ["ec-id-inequality"]
            },
            {
              id: "ce-ph",
              type: "consequence",
              sign: "-",
              t: "Philippines: land structure",
              d: "Colonial ilustrado–tenant system never resolved; every land reform diluted by landowner-dominated Congress.",
              cards: ["ec-ph-colonial", "ec-ph-carp"]
            }
          ]
        }
      ]
    },
    {
      title: "Mechanisms compared",
      link: "supports",
      how: "Comparing the three mechanisms separates regional inequality from structural inequality.",
      summary: "Regional vs structural; the essay answer.",
      steps: [
        {
          id: "ce-diff",
          type: "interpretation",
          t: "Regional vs structural inequality",
          d: "Thailand/Indonesia: mostly regional/urban–rural. Philippines: unresolved LAND OWNERSHIP STRUCTURE from colonial rule — structural.",
          cards: ["ec-cl-equity"]
        },
        { link: "supports", how: "The three mechanisms answer the essay question, and the Philippine land case invites a Vietnam contrast." },
        {
          row: [
            {
              id: "ce-essay",
              type: "judgement",
              t: "Growth at the cost of equity?",
              d: "Three DIFFERENT mechanisms of one tension: Gini (Thailand), urban–rural gap (Indonesia), ilustrado land issue (Philippines).",
              cards: ["ec-essay-equity"]
            },
            {
              id: "ce-vn",
              type: "context",
              t: "Cross-link: Vietnam's land policy",
              d: "Philippine land reform failures contrast with Vietnam's agricultural reorganisation — land policy as political control vs genuine equity measure.",
              cards: ["ec-connect"]
            }
          ]
        }
      ]
    }
  ],
  matrix: {
    cols: ["Thailand", "Indonesia", "Philippines"],
    rows: [
      { h: "Mechanism", cells: ["Regional inequality (Gini)", "Urban–rural gap; concentration on Java", "Land ownership structure (ilustrado–tenant)"] },
      {
        h: "Key data",
        cells: ["Gini 0.41→0.52 (1965–2000); Bangkok 48.2%→55.4% of GDP", "Urban–rural income gap 42%→92% (1970–93)", "Every land reform diluted by landowner-dominated Congress"]
      },
      { h: "Further detail", cells: ["Bangkok's population share flat at 16%", "Transmigration policy failure", "Colonial-origin system never resolved"] },
      { h: "Type", cells: ["Regional", "Regional / urban–rural", "Structural (colonial land ownership)"] }
    ]
  },
  judge: {
    prompt: "Which mechanism of inequality was most deeply rooted? Rank them.",
    factors: ["ce-th", "ce-id", "ce-ph"],
    notes_view: "Thailand/Indonesia's inequality is mostly regional/urban–rural; the Philippines' is rooted in unresolved land ownership from colonial rule — a structural issue the others did not share to the same degree."
  },
  historians: [],
  takeaways: ["Growth did not automatically bring equity anywhere in the cluster.", "Show different mechanisms of inequality to earn evaluative credit."]
});
L.push({
  id: "ec-flow-cl-afc",
  order: 99,
  level: 3,
  parent: "ec-cluster-tip",
  kind: "causal",
  title: "Roots of the 1997 Asian Financial Crisis",
  question: "What caused the 1997 Asian Financial Crisis, and why did it hit some economies harder than others?",
  intro: "The mechanism was similar in Thailand and Indonesia; the Philippines is the deliberate contrast case showing a growth–stability trade-off.",
  clusters: [
    {
      title: "Financial liberalisation",
      summary: "How far each opened its financial system.",
      steps: [
        {
          id: "afc-measures",
          type: "context",
          t: "Measures of financial risk",
          d: "Debt service ratio: repayments as % of export earnings, IMF danger ~20%. Leverage ratio: bank liabilities/equity, below 12x strong.",
          cards: ["ec-glossary-2"]
        },
        { link: "followed by", how: "These measures gauge the vulnerabilities built up from financial liberalisation onward." },
        {
          split: [
            {
              h: "Thailand",
              steps: [
                {
                  id: "afc-th-lib",
                  type: "long_term_cause",
                  t: "Thailand: aggressive liberalisation",
                  date: "1990–93",
                  d: "1990 Article VIII; 1993 BIBF (became a conduit for short-term foreign lending) — weak oversight.",
                  cards: ["afcthai"]
                }
              ]
            },
            {
              h: "Indonesia",
              steps: [
                {
                  id: "afc-id-lib",
                  type: "long_term_cause",
                  t: "Indonesia: rapid bank expansion",
                  date: "1988–94",
                  d: "Oct 1988 reform — banks 124→244 (1988–94); credit culture lagged.",
                  cards: ["ec-id-financial"]
                }
              ]
            },
            {
              h: "Philippines",
              steps: [
                {
                  id: "afc-ph-lib",
                  type: "long_term_cause",
                  t: "Philippines: limited liberalisation",
                  d: "Only ~5 new banks since the 1980s (BSP conservatism).",
                  cards: ["ec-ph-banks"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Short-term debt",
      link: "led to",
      how: "Liberalisation opened channels for short-term foreign borrowing; Philippine conservatism kept them narrow.",
      summary: "Heavy short-term exposure except in the Philippines.",
      steps: [
        {
          split: [
            {
              h: "Thailand",
              steps: [
                {
                  id: "afc-th-debt",
                  type: "short_term_cause",
                  t: "Thailand: 70% short-term",
                  date: "1997",
                  d: "70% of US$69bn foreign bank debt was short-term (1997).",
                  cards: ["afccompare"]
                }
              ]
            },
            {
              h: "Indonesia",
              steps: [
                {
                  id: "afc-id-debt",
                  type: "short_term_cause",
                  t: "Indonesia: over half short-term",
                  d: ">50% of foreign debt short-term (regional pattern).",
                  cards: ["afccompare"]
                }
              ]
            },
            {
              h: "Philippines",
              steps: [
                {
                  id: "afc-ph-debt",
                  type: "consequence",
                  sign: "+",
                  t: "Philippines: short-term debt low",
                  d: "<20% of total debt; ~3% for top-tier banks.",
                  cards: ["afccompare"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Crony lending",
      link: "followed by",
      how: "Alongside the debt, related-party lending and bad loans were a further vulnerability, checked only in the Philippines.",
      summary: "Related-party lending and bad loans.",
      steps: [
        {
          split: [
            {
              h: "Thailand",
              steps: [
                {
                  id: "afc-th-crony",
                  type: "short_term_cause",
                  t: "Thailand: crony lending",
                  d: "BBC case (Saxena, 'Group of 16'); non-performing loans 8%.",
                  cards: ["afcthai"]
                }
              ]
            },
            {
              h: "Indonesia",
              steps: [
                {
                  id: "afc-id-crony",
                  type: "short_term_cause",
                  t: "Indonesia: crony lending",
                  d: "Liem's Bank Central Asia — 60% of loans to other Liem firms; NPL build-up via moral hazard / expected bailouts.",
                  cards: ["ec-id-financial"]
                }
              ]
            },
            {
              h: "Philippines",
              steps: [
                {
                  id: "afc-ph-dosri",
                  type: "policy",
                  t: "Philippines: DOSRI enforced",
                  d: "Limits credit to directors, officers, stockholders, related interests — enforced after crises in 1970, 1984–85, 1990–91; NPLs 3%.",
                  cards: ["ec-ph-banks"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Currency at crisis onset",
      link: "led to",
      how: "These vulnerabilities came to a head as currencies were floated or collapsed in July 1997.",
      summary: "Forced float, collapse, or deliberate float.",
      steps: [
        {
          split: [
            {
              h: "Thailand",
              steps: [
                { id: "afc-th-cur", type: "trigger", t: "Baht floated (forced)", date: "2 July 1997", d: "The baht was forced to float.", cards: ["ec-th-peg"] },
                { link: "led to", how: "The forced float made Thailand the epicentre." },
                {
                  id: "afc-th-epi",
                  type: "consequence",
                  sign: "-",
                  t: "Epicentre of the crisis",
                  d: "Thailand became the epicentre of the 1997 crisis.",
                  cards: ["ec-th-peg"]
                }
              ]
            },
            {
              h: "Indonesia",
              steps: [
                {
                  id: "afc-id-cur",
                  type: "consequence",
                  sign: "-",
                  t: "Rupiah collapsed",
                  date: "1997",
                  d: "Collapsed amid political uncertainty (Suharto's health).",
                  cards: ["ec-id-financial"]
                },
                { link: "led to", how: "Currency collapse fed political collapse." },
                {
                  id: "afc-id-worst",
                  type: "consequence",
                  sign: "-",
                  t: "Among the worst hit",
                  d: "Political collapse and ethnic violence.",
                  cards: ["ec-id-financial"]
                }
              ]
            },
            {
              h: "Philippines",
              steps: [
                {
                  id: "afc-ph-cur",
                  type: "consequence",
                  sign: "±",
                  t: "Peso floated (deliberate)",
                  date: "11 July 1997",
                  d: "Deliberate, not forced: the central bank chose not to defend it.",
                  cards: ["ec-ph-delhaise"]
                },
                { link: "led to", how: "Not defending the peso avoided a forced collapse." },
                {
                  id: "afc-ph-less",
                  type: "consequence",
                  sign: "±",
                  t: "Affected, not as severely",
                  d: "The Philippines was affected, but not as severely.",
                  cards: ["ec-ph-delhaise"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "The rest of the region",
      link: "followed by",
      how: "Elsewhere, exposure depended on domestic overheating, sound fundamentals or isolation.",
      summary: "Malaysia, Singapore, Burma and Vietnam in 1997.",
      steps: [
        {
          row: [
            {
              id: "afc-my",
              type: "consequence",
              sign: "-",
              t: "Malaysia: domestic overheating",
              d: "Domestic property/stock market overheating; large current account deficit.",
              cards: ["ec-my-afc"]
            },
            {
              id: "afc-sg",
              type: "consequence",
              sign: "+",
              t: "Singapore: weathered well",
              d: "Sound fundamentals (surplus, low debt, strict MAS).",
              cards: ["ec-sg-1997"]
            },
            {
              id: "afc-bmvn",
              type: "consequence",
              sign: "±",
              t: "Burma and Vietnam: insulated",
              d: "Burma closed/pariah (wrong reasons); Vietnam less integrated.",
              cards: ["ec-f1-capital"]
            }
          ]
        }
      ]
    },
    {
      title: "Synthesis: growth vs stability",
      link: "supports",
      how: "The Philippine contrast shows the same factors drove both explosive growth and vulnerability.",
      summary: "A trade-off no economy escaped.",
      steps: [
        {
          id: "afc-learn",
          type: "interpretation",
          t: "Earlier crises taught Philippine caution",
          d: "Conservatism learned from repeated earlier crises meant slower growth but a softer landing. Delhaise: 'missed the benefits', 'avoided the excesses'.",
          cards: ["ec-ph-delhaise"]
        },
        { link: "supports", how: "If caution cost growth but bought stability, speed and stability were traded against each other." },
        {
          id: "afc-synth",
          type: "judgement",
          t: "Trade-off: growth speed vs stability",
          d: "Liberalisation, short-term borrowing and fast EOI drove Thailand/Indonesia's explosive growth and made them vulnerable; no SEA economy escaped the trade-off.",
          cards: ["ec-cl-afc-synthesis"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["Thailand", "Indonesia", "Philippines"],
    rows: [
      {
        h: "Financial liberalisation",
        cells: ["1990 Article VIII; 1993 BIBF — weak oversight", "Oct 1988 reform — banks 124→244 (1988–94)", "Limited — only ~5 new banks since 1980s"]
      },
      { h: "Short-term debt share", cells: ["70% of US$69bn foreign bank debt (1997)", ">50% of foreign debt", "<20% of total debt; ~3% top-tier banks"] },
      {
        h: "Crony/related lending",
        cells: ["BBC case (Saxena, 'Group of 16')", "Liem's Bank Central Asia — 60% to Liem firms", "DOSRI enforced after 1970, 1984–85, 1990–91 crises"]
      },
      { h: "Non-performing loans", cells: ["8%", "Build-up via moral hazard / expected bailouts", "3% (lowest)"] },
      {
        h: "Currency at onset",
        cells: ["Baht floated 2 July 1997 (forced)", "Rupiah collapsed amid political uncertainty", "Peso floated 11 July 1997 — deliberate"]
      },
      { h: "Outcome", cells: ["Epicentre of the crisis", "Among worst hit — political collapse, ethnic violence", "Affected, not as severely"] }
    ]
  },
  judge: {
    prompt: "Which vulnerability did most to cause the 1997 crisis? Rank them.",
    factors: ["afc-th-lib", "afc-id-lib", "afc-th-debt", "afc-id-debt", "afc-th-crony", "afc-id-crony", "afc-my"],
    notes_view: "The same factors behind Thailand's and Indonesia's explosive growth (aggressive liberalisation, large short-term foreign borrowing, fast EOI) made them vulnerable: a growth–stability trade-off no SEA economy escaped entirely."
  },
  historians: [
    { who: "Delhaise", view: "The Philippines 'missed the benefits of explosive growth' but 'avoided the excesses'.", nodes: ["afc-learn", "afc-ph-cur"] },
    { who: "Montes", view: "Philippine governance too weak for faster growth, but good enough to prevent large policy errors.", nodes: ["afc-learn"] }
  ],
  takeaways: ["No SEA economy escaped the trade-off between growth speed (via liberalisation) and financial stability.", "'Evaluate the causes of the AFC': use the comparative table; the Philippines as contrast shows nuance over a single-cause narrative."]
});
L.push({
  id: "ec-flow-cl-exports",
  order: 100,
  level: 3,
  parent: "ec-cluster-tip",
  kind: "matrix",
  title: "Export diversification, 1985 vs 2000",
  question: "What does export structure reveal about the depth of industrialisation?",
  intro: "Share of the three main exports in total exports: falling = diversifying. The Philippines moved the wrong way.",
  clusters: [
    {
      title: "The diversifiers",
      summary: "Thailand and Indonesia broadened exports.",
      steps: [
        {
          row: [
            {
              id: "ex-th",
              type: "consequence",
              sign: "+",
              t: "Thailand: 28.7% → 23.3%",
              d: "Diversifying — consistent with successful industrial transformation.",
              cards: ["ec-cl-exports"]
            },
            {
              id: "ex-id",
              type: "consequence",
              sign: "±",
              t: "Indonesia: 69.3% → 30.2%",
              d: "Diversifying from a much higher base — partial transformation.",
              cards: ["ec-cl-exports"]
            }
          ]
        }
      ]
    },
    {
      title: "The Philippine outlier",
      link: "contradicts",
      how: "The Philippines moved in the reverse direction, with export concentration rising.",
      summary: "Concentration rose — fragile industrialisation.",
      steps: [
        {
          id: "ex-ph-cause",
          type: "long_term_cause",
          t: "Narrow electronics assembly reliance",
          d: "Narrow reliance on electronics/semiconductor assembly — low value-added, easily disrupted — not a diversified base.",
          cards: ["ec-ph-quant"]
        },
        { link: "led to", how: "Depending on one low value-added sector pushed the three main exports' share up." },
        { id: "ex-ph", type: "consequence", sign: "-", t: "Philippines: 27.4% → 64.7%", d: "CONCENTRATING — reverse direction.", cards: ["ec-ph-quant"] },
        { link: "supports", how: "Rising concentration from narrow assembly shows the industrial base was shallow." },
        {
          id: "ex-verdict",
          type: "judgement",
          t: "Fragile, not deep, industrialisation",
          d: "Export structure is evidence for depth of industrialisation, not just growth; the Philippines is the counter-example.",
          cards: ["ec-essay-exports"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["1985 (%)", "2000 (%)", "Direction"],
    rows: [
      { h: "Thailand", cells: ["28.7", "23.3", "Diversifying"] },
      { h: "Indonesia", cells: ["69.3", "30.2", "Diversifying (from a much higher base)"] },
      { h: "Philippines", cells: ["27.4", "64.7", "CONCENTRATING (reverse direction)"] }
    ]
  },
  judge: {
    prompt: "Rank the depth of industrialisation shown by each economy's export structure.",
    factors: ["ex-th", "ex-id", "ex-ph"],
    notes_view: "Thailand's diversification reflects successful, and Indonesia's partial, industrial transformation; the Philippines' rising concentration signals fragile, not deep, industrialisation."
  },
  historians: [],
  takeaways: ["Export structure is evidence for depth of industrialisation, not just growth.", "Use the Philippines as the counter-example in diversification essays."]
});
L.push({
  id: "ec-flow-howtoargue",
  order: 101,
  parent: "ec-top",
  kind: "evaluation",
  title: "How to argue: pitfalls, essay angles and links",
  question: "How should essays on SEA economic change be argued?",
  intro: "The essay pitfalls from Part F and the likely essay angles from the exam application notes, turned into a checklist.",
  clusters: [
    {
      title: "Five pitfalls (F6)",
      summary: "What examiners penalise.",
      steps: [
        {
          row: [
            {
              id: "hw-p1",
              type: "judgement",
              t: "Pitfall 1: growth isn't everything",
              d: "Weigh growth vs equity vs nationalism explicitly (Ne Win's hollow victory).",
              cards: ["ec-pitfalls", "ec-newin-aims"]
            },
            {
              id: "hw-p2",
              type: "judgement",
              t: "Pitfall 2: ideology ≠ outcome",
              d: "Singapore succeeded through GOVERNANCE QUALITY; Vietnam once it ADAPTED; Burma failed through EXTREME, rigid implementation.",
              cards: ["ec-pitfalls", "burmavsvietnam"]
            },
            {
              id: "hw-p3",
              type: "judgement",
              t: "Pitfall 3: remember starting points",
              d: "Burma's failure more damning (relative advantage); Singapore's success more impressive (almost nothing).",
              cards: ["ec-pitfalls", "ec-bm-paradox"]
            },
            {
              id: "hw-p4",
              type: "judgement",
              t: "Pitfall 4: cite data",
              d: "GDP growth, export %, equity ownership % — examiners expect quantitative substantiation.",
              cards: ["ec-pitfalls", "ec-gdp-table"]
            },
            {
              id: "hw-p5",
              type: "judgement",
              t: "Pitfall 5: intervention was universal",
              d: "Discriminate by NATURE (technocratic vs corrupt/dogmatic) and DIRECTION (market-stimulating vs market-replacing).",
              cards: ["ec-pitfalls", "ec-why-govt"]
            }
          ]
        }
      ]
    },
    {
      title: "Essay angles: state, Chinese, equity",
      link: "led to",
      how: "Avoiding these pitfalls shapes how to tackle the likely essay angles in the exam notes.",
      summary: "Three likely questions and their evidence.",
      steps: [
        {
          row: [
            {
              id: "hw-int",
              type: "interpretation",
              t: "Intervention necessary?",
              d: "Indonesia/Philippines = necessity; Thailand = limits.",
              cards: ["ec-essay-intervention"]
            },
            {
              id: "hw-chi",
              type: "interpretation",
              t: "Chinese essential?",
              d: "Rigg data + Thai accommodation vs Indonesian violence vs Philippine moderate tension.",
              cards: ["ec-essay-chinese"]
            },
            {
              id: "hw-eq",
              type: "interpretation",
              t: "Growth at cost of equity?",
              d: "Gini, urban–rural gap, ilustrado land — three mechanisms.",
              cards: ["ec-essay-equity"]
            }
          ]
        }
      ]
    },
    {
      title: "Essay angles: AFC, ISI→EOI, Burma–Vietnam",
      link: "followed by",
      how: "Three further likely angles draw on the AFC table, the transition and the socialist pair.",
      summary: "Three more likely questions.",
      steps: [
        {
          row: [
            { id: "hw-afc", type: "interpretation", t: "Causes of the AFC?", d: "Comparative table; Philippines as contrast case.", cards: ["ec-essay-afc"] },
            { id: "hw-isi", type: "interpretation", t: "Compare ISI→EOI?", d: "Thailand vs Philippines; Indonesia middle case.", cards: ["ec-essay-isieoi"] },
            { id: "hw-bmvn", type: "interpretation", t: "Burma vs Vietnam?", d: "Willingness, coherence, international relations.", cards: ["burmavsvietnam"] }
          ]
        }
      ]
    },
    {
      title: "Comparison and cross-lecture links",
      link: "followed by",
      how: "Comparison earns most credit, so the notes link this lecture's cases to the earlier ones.",
      summary: "Compare rather than narrate.",
      steps: [
        {
          id: "hw-comp",
          type: "context",
          t: "Comparative beats narration",
          d: "Cross-country comparison is usually worth more credit than single-country narration.",
          cards: ["ec-f1-paths"]
        },
        { link: "supports", how: "Three ready-made cross-lecture comparisons put that advice into practice." },
        {
          row: [
            {
              id: "hw-l-thmy",
              type: "context",
              t: "Thailand vs Malaysia EOI",
              d: "Thailand's 1977 EOI ≈ Malaysia's (both succeeded); NEP restricted Chinese business, Thailand didn't.",
              cards: ["ec-connect"]
            },
            {
              id: "hw-l-idbm",
              type: "context",
              t: "Indonesia vs Burma statism",
              d: "Indonesia's Article 33 statism vs Burma's extreme nationalisation — a contrast in DEGREE of state control.",
              cards: ["ec-connect"]
            },
            {
              id: "hw-l-phvn",
              type: "context",
              t: "Philippines vs Vietnam land",
              d: "Philippine land reform failures vs Vietnam's agricultural reorganisation.",
              cards: ["ec-connect"]
            }
          ]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which pitfall most weakens an essay on SEA economic change? Rank them.",
    factors: ["hw-p1", "hw-p2", "hw-p3", "hw-p4", "hw-p5"],
    notes_view: ""
  },
  historians: [],
  takeaways: ["Always weigh the three aims, compare countries, cite numbers and judge the nature of intervention.", "Use contrast cases (Philippines in AFC; Thailand in intervention) to show evaluative thinking."]
});
L.push({
  id: "ec-flow-f7-memory",
  order: 102,
  parent: "ec-top",
  kind: "chain",
  title: "Memory cues: Malaysia and Singapore",
  question: "What are the key turning points of Malaysia's and Singapore's development?",
  intro: "The F7 memory chains for the two capitalist core cases — each slogan plus its sequence of turning points and key figures.",
  clusters: [
    {
      title: "Malaysia: Race, Resources, Restructuring",
      summary: "Riots, NEP, heavy industry, domestic crisis.",
      steps: [
        { id: "f7-my-nep", type: "trigger", t: "1969 race riots", date: "1969", d: "Race riots in Malaysia.", cards: ["ec-memory", "nep", "ec-my-nep-equity"] },
        { link: "led to", how: "The riots produced the NEP." },
        {
          id: "f7-my-nep2",
          type: "turning_point",
          t: "New Economic Policy",
          date: "1971–90",
          d: "Bumiputera equity 2.4% → 20.3%.",
          cards: ["ec-memory", "nep", "ec-my-nep-equity"]
        },
        { link: "followed by", how: "Under Mahathir, restructuring moved on to state-led heavy industry." },
        {
          id: "f7-my-hicom",
          type: "policy",
          t: "Mahathir's heavy industry (HICOM)",
          d: "→ privatisation (1983) → tech/human capital deepening (1986+).",
          cards: ["ec-my-hicom", "ec-my-privatisation", "ec-my-deepening"]
        },
        { link: "followed by", how: "The 1997 crisis then reached Malaysia through its domestic markets." },
        {
          id: "f7-my-afc",
          type: "consequence",
          sign: "-",
          t: "1997: domestic overheating",
          date: "1997",
          d: "Crisis came via DOMESTIC property/stock overheating, not foreign debt.",
          cards: ["ec-my-afc"]
        }
      ]
    },
    {
      title: "Singapore: Entrepot, Expelled, Excellence",
      link: "followed by",
      how: "The second capitalist chain, Singapore, starts from the opposite endowment: no resources at all.",
      summary: "Openness, forced EOI, upgrading, Lim's three factors.",
      steps: [
        { id: "f7-sg-open", type: "context", t: "No resources, open from birth", d: "Entrepot-driven openness.", cards: ["ec-memory", "ec-sg-context"] },
        { link: "followed by", how: "Two shocks then removed the Malaysian market and British base." },
        {
          id: "f7-sg-forced",
          type: "turning_point",
          t: "Two shocks FORCE rapid EOI",
          date: "1965; 1971",
          d: "Separation (1965) + British withdrawal (1971) forced rapid EOI.",
          cards: ["ec-sg-crisis"]
        },
        { link: "followed by", how: "Once EOI was established, Singapore upgraded in stages." },
        { id: "f7-sg-up", type: "policy", t: "Second Industrial Revolution", date: "1979", d: "The technology upgrade.", cards: ["ec-sg-sir"] },
        { link: "followed by", how: "In 1986 Singapore pivoted to services." },
        { id: "f7-sg-svc", type: "policy", t: "Services pivot", date: "1986", d: "'Total business centre'.", cards: ["ec-sg-services"] },
        { link: "followed by", how: "In the 1990s Singapore regionalised." },
        { id: "f7-sg-reg", type: "policy", t: "Regionalisation", date: "1990s", d: "The 1990s regional push.", cards: ["ec-sg-regional"] },
        { link: "supports", how: "Lim Chong Yah explains this staged success with three factors." },
        {
          id: "f7-lim",
          type: "interpretation",
          t: "Lim Chong Yah's three factors",
          d: "Success = honest/technocratic governance + free enterprise + outward orientation.",
          cards: ["ec-sg-lim"]
        }
      ]
    }
  ],
  historians: [
    { who: "Lim Chong Yah", view: "Singapore's success = honest/technocratic governance + free enterprise + outward orientation.", nodes: ["f7-lim"] }
  ],
  takeaways: ["Each chain gives the turning points and figures to cite in a comparative paragraph.", "Malaysia's 1997 crisis came via DOMESTIC property/stock overheating, not foreign debt."]
});
L.push({
  id: "ec-flow-f7-memory-2",
  order: 102.5,
  parent: "ec-top",
  kind: "chain",
  title: "Memory cues: Burma and Vietnam",
  question: "What are the key turning points of Burma's and Vietnam's development?",
  intro: "The F7 memory chains for the two socialist core cases — each slogan plus its sequence of turning points and key figures.",
  clusters: [
    {
      title: "Burma: Best Endowed, Worst Outcome (1)",
      summary: "Rich start, failed plans, autarky.",
      steps: [
        { id: "f7-bm-rich", type: "context", t: "Resource-RICH at independence", d: "Burma was the best endowed state at independence.", cards: ["ec-memory"] },
        { link: "followed by", how: "U Nu's welfare planning came first, with state monopolies at its core." },
        {
          id: "f7-bm-unu",
          type: "consequence",
          sign: "-",
          t: "U Nu's pyidawtha plan fails",
          d: "State monopolies kill incentives.",
          cards: ["ec-bm-pyidawtha-fail"]
        },
        { link: "followed by", how: "Ne Win then took the economy to a far more extreme socialism." },
        {
          id: "f7-bm-way",
          type: "policy",
          t: "Burmese Way to Socialism",
          date: "1962",
          d: "Ne Win: total nationalisation, expelled Chinese/Indians, autarky.",
          cards: ["burmeseway", "ec-bm-minorities"]
        },
        { link: "led to", how: "Nationalisation, expulsions and autarky collapsed exports and drove trade underground." },
        {
          row: [
            {
              id: "f7-bm-rice",
              type: "consequence",
              sign: "-",
              t: "Rice exports collapse",
              date: "1962–73",
              d: "1,521k → 204k tons (1962–73).",
              cards: ["ec-bm-rice"]
            },
            { id: "f7-bm-black", type: "consequence", sign: "-", t: "Black market", d: "Fills 70–80% of trade.", cards: ["ec-bm-blackmarket"] }
          ]
        }
      ]
    },
    {
      title: "Burma: Best Endowed, Worst Outcome (2)",
      link: "followed by",
      how: "The regime's next moves, the demonetisations, turned economic decline into political crisis.",
      summary: "Demonetisation, uprising, contradictory opening.",
      steps: [
        {
          id: "f7-bm-demon",
          type: "consequence",
          sign: "-",
          t: "1985/1987 demonetisations",
          date: "1985; 1987",
          d: "Wipe out savings.",
          cards: ["demonetisation"]
        },
        { link: "triggered", how: "Wiping out people's savings set off the 8888 Uprising." },
        { id: "f7-bm-8888", type: "event", t: "8888 Uprising", date: "1988", d: "Ends Ne Win's rule and opens the SLORC era.", cards: ["demonetisation"] },
        { link: "followed by", how: "SLORC then opened the economy, but only partially." },
        {
          id: "f7-bm-slorc",
          type: "consequence",
          sign: "±",
          t: "SLORC's CONTRADICTORY opening",
          date: "1988–",
          d: "Market rhetoric vs continued state monopolies + export bans.",
          cards: ["ec-bm-tucker"]
        }
      ]
    },
    {
      title: "Vietnam: Pragmatic Pivot (1)",
      link: "followed by",
      how: "Vietnam's chain starts socialist too, but ends with a pragmatic pivot.",
      summary: "Split legacy to cracking the system.",
      steps: [
        { id: "f7-vn-split", type: "context", t: "Split colonial legacy", d: "Capitalist South / socialist North.", cards: ["ec-memory", "ec-vn-colonial"] },
        { link: "followed by", how: "Reunification brought the socialist model to the South." },
        {
          id: "f7-vn-reunif",
          type: "event",
          t: "Reunification imposes socialism",
          date: "1975; 1978–80",
          d: "Failed socialist transformation imposed on the South (1978–80) — fierce peasant resistance.",
          cards: ["ec-vn-stage2"]
        },
        { link: "followed by", how: "Central planning then failed its own targets." },
        { id: "f7-vn-fyp", type: "consequence", sign: "-", t: "2nd FYP fails completely", d: "12m vs 21m ton target.", cards: ["vietnamfyp"] },
        { link: "followed by", how: "The first cracks in the planned system followed." },
        { id: "f7-vn-d100", type: "event", t: "Directive 100", date: "1981", d: "Cracks the system.", cards: ["ec-vn-directive100"] }
      ]
    },
    {
      title: "Vietnam: Pragmatic Pivot (2)",
      link: "followed by",
      how: "A change of leadership then turned the cracks into full reform.",
      summary: "Doi Moi, record growth, persistent limits.",
      steps: [
        {
          id: "f7-vn-doimoi",
          type: "turning_point",
          t: "Doi Moi after Le Duan's death",
          date: "1986",
          d: "Le Duan's death (1986) enables Doi Moi; Resolution 10 (1988) privatises agriculture; US embargo lifted (1994).",
          cards: ["ec-vn-doimoi", "ec-vn-res10", "ec-vn-integration"]
        },
        { link: "led to", how: "Market reform, private farming and foreign access produced record growth." },
        { id: "f7-vn-growth", type: "consequence", sign: "+", t: "9.5% growth", date: "1995–96", d: "World's highest.", cards: ["ec-vn-1990s"] },
        { link: "followed by", how: "Yet the reforms left key socialist structures and problems in place." },
        {
          id: "f7-vn-limits",
          type: "consequence",
          sign: "±",
          t: "BUT limits persist",
          date: "1997",
          d: "State sector still 50% of output even in 1997; corruption and regional inequity persist.",
          cards: ["ec-vn-limits"]
        }
      ]
    }
  ],
  historians: [],
  takeaways: ["Each chain gives the turning points and figures to cite in a comparative paragraph.", "Burma vs Vietnam: same socialist start, but Vietnam pivoted (Doi Moi) while Burma's opening stayed contradictory."]
});
L.push({
  id: "ec-arg-1",
  order: 110,
  parent: "ec-top",
  kind: "argument",
  title: "Government intervention and economic success",
  question: "How far was government intervention responsible for economic success in Southeast Asia?",
  intro: "For and against the claim that state intervention drove success, using the notes' necessity and limits arguments.",
  clusters: [
    {
      title: "Claim",
      steps: [
        {
          id: "a1-claim",
          type: "judgement",
          t: "Intervention drove economic success",
          d: "Government intervention was mainly responsible for economic success in Southeast Asia after independence."
        }
      ]
    },
    {
      title: "For and against",
      link: "supports",
      how: "Evidence from the country cases tests the claim.",
      steps: [
        {
          split: [
            {
              h: "For",
              steps: [
                {
                  id: "a1-vacuum",
                  type: "evidence",
                  t: "Only the state could lead",
                  d: "Colonial powers left no indigenous business class or planning institutions; only the state had capital and oversight.",
                  ev: ["Indonesia/Philippines: NECESSITY argument — no domestic bourgeoisie at independence."],
                  cards: ["ec-why-govt", "ec-essay-intervention"]
                },
                { link: "supports", how: "Singapore shows how much a capable state could achieve once it led." },
                {
                  id: "a1-sg",
                  type: "evidence",
                  t: "Singapore's technocratic state",
                  d: "Honest/technocratic governance (Lim Chong Yah) and freedom from interest groups gave the highest growth: 8.3% (1961–2001).",
                  ev: ["Aggressively courted FDI; 100% foreign ownership allowed 1978."],
                  cards: ["ec-sg-lim", "ec-sg-nature"]
                },
                { link: "supports", how: "Vietnam shows state-led reform could also rescue a failing economy." },
                {
                  id: "a1-vn",
                  type: "evidence",
                  t: "Vietnam's state-led Doi Moi",
                  date: "1986",
                  d: "Reform from within the system — decentralisation, Resolution 10, FDI law — delivered 8–9.5% growth in the 1990s.",
                  cards: ["ec-vn-doimoi", "ec-vn-1990s"]
                }
              ]
            },
            {
              h: "Against",
              steps: [
                {
                  id: "a1-th",
                  type: "evidence",
                  t: "Thailand succeeded by state withdrawal",
                  d: "A resilient private sector meant LESS intervention was needed; the market 'compensated for government failures' (Hewison).",
                  ev: ["State genuinely scaled back from 1957 (Sarit) and especially 1985 onward."],
                  cards: ["ec-th-govt", "ec-th-scaling"]
                },
                { link: "contradicts", how: "Elsewhere intervention itself caused failure, which cuts against the claim." },
                {
                  id: "a1-bad",
                  type: "evidence",
                  t: "Captured or dogmatic intervention failed",
                  d: "Indonesia's 'bureaucratic capitalism', Marcos's 'patrimonialist plunder' and Burma's total state control (4.3%, lowest) show intervention could wreck growth.",
                  cards: ["ec-id-robison", "ec-ph-govt", "burmeseway"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judgement",
      link: "led to",
      how: "Weighing the cases: every state intervened, but outcomes diverged with how it intervened.",
      steps: [
        {
          id: "a1-judge",
          type: "judgement",
          t: "Nature, not existence, mattered",
          d: "Intervention was universal and often necessary; success depended on its NATURE (technocratic vs corrupt/dogmatic) and DIRECTION (market-stimulating vs market-replacing).",
          cards: ["ec-pitfalls"]
        }
      ]
    }
  ],
  judge: {
    prompt: "How far was government intervention responsible for success? Weigh the For and Against evidence.",
    factors: ["a1-vacuum", "a1-sg", "a1-vn", "a1-th", "a1-bad"],
    notes_view: "Intervention was universal; the better discriminator is its NATURE (efficient/technocratic vs corrupt/dogmatic) and DIRECTION (market-stimulating vs market-replacing), not whether it occurred."
  },
  historians: [
    {
      who: "Lim Chong Yah",
      view: "Singapore's success rested on honest/technocratic governance, free enterprise and outward orientation.",
      nodes: ["a1-sg"]
    },
    { who: "Hewison", view: "In Thailand the market 'compensated for government failures'.", nodes: ["a1-th"] },
    { who: "Robison", view: "Indonesia's 'bureaucratic capitalism' repurposed state power as personal patronage.", nodes: ["a1-bad"] }
  ],
  takeaways: ["Use Indonesia/Philippines for NECESSITY and Thailand for LIMITS.", "Argue about HOW and HOW WELL the state intervened, not WHETHER."]
});
L.push({
  id: "ec-arg-2",
  order: 111,
  parent: "ec-top",
  kind: "argument",
  title: "Growth at the expense of equity?",
  question: "To what extent was economic growth in Southeast Asia achieved at the expense of equity?",
  intro: "For and against the claim that growth came at the cost of equity, across three mechanisms and the counter-cases.",
  clusters: [
    {
      title: "Claim",
      steps: [
        {
          id: "a2-claim",
          type: "judgement",
          t: "Growth came at equity's expense",
          d: "Economic growth in Southeast Asia was achieved at the expense of equity."
        }
      ]
    },
    {
      title: "For and against",
      link: "supports",
      how: "Evidence on inequality alongside growth tests the claim.",
      steps: [
        {
          split: [
            {
              h: "For",
              steps: [
                {
                  id: "a2-th",
                  type: "evidence",
                  t: "Thailand: Gini rose with growth",
                  d: "6.8% growth, yet Gini 0.41→0.52 (1965–2000); Bangkok 48.2%→55.4% of GDP at a flat 16% of population.",
                  cards: ["ec-th-inequality"]
                },
                { link: "supports", how: "Indonesia shows the same tension through a different mechanism." },
                {
                  id: "a2-id",
                  type: "evidence",
                  t: "Indonesia: urban–rural gap widened",
                  d: "Urban–rural income gap 42%→92% (1970–93); concentration on Java; transmigration failure.",
                  cards: ["ec-id-inequality"]
                },
                { link: "supports", how: "Even the fastest growers saw gaps widen as growth took priority." },
                {
                  id: "a2-sgvn",
                  type: "evidence",
                  t: "Fast growers' gaps widened",
                  d: "Singapore: equity its weakest priority, Gini deteriorated. Vietnam: equity WORSENED after Doi Moi (regional/ethnic gaps).",
                  cards: ["ec-sg-limits", "ec-vn-limits"]
                }
              ]
            },
            {
              h: "Against",
              steps: [
                {
                  id: "a2-my",
                  type: "evidence",
                  t: "Malaysia combined growth with redistribution",
                  d: "6.7% growth with NEP: poverty 40.3%→15%, bumiputera equity 2.4%→20.3% — best balance, though benefits concentrated among connected elites.",
                  cards: ["ec-f2-mysg", "ec-my-eval-equity"]
                },
                { link: "contradicts", how: "Philippine inequality predated growth, so growth was not its main cause." },
                {
                  id: "a2-ph",
                  type: "evidence",
                  t: "Philippine inequality had colonial roots",
                  d: "Unresolved ilustrado–tenant land structure; every land reform diluted by a landowner-dominated Congress — despite low growth (3.9%).",
                  cards: ["ec-ph-colonial", "ec-ph-carp"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judgement",
      link: "led to",
      how: "Weighing the cases: inequality persisted with growth almost everywhere, but through different mechanisms and to different degrees.",
      steps: [
        {
          id: "a2-judge",
          type: "judgement",
          t: "Largely yes, via different mechanisms",
          d: "Growth and equity were NOT automatically compatible: Gini, urban–rural gap and ilustrado land are three mechanisms of one tension; Malaysia achieved only a partial balance.",
          cards: ["ec-essay-equity", "ec-cl-equity"]
        }
      ]
    }
  ],
  judge: {
    prompt: "To what extent did growth come at the expense of equity? Weigh the For and Against evidence.",
    factors: ["a2-th", "a2-id", "a2-sgvn", "a2-my", "a2-ph"],
    notes_view: "All three Lecture 3 economies show aggregate growth with worsening or persistent inequality — growth and equity are NOT automatically compatible — but via three different mechanisms."
  },
  historians: [],
  takeaways: ["Show three DIFFERENT mechanisms of the growth–equity tension, not one.", "Malaysia's NEP is the best counter-case: the best balance of the three aims, yet still only partial equity."]
});
L.push({
  id: "ec-arg-3",
  order: 112,
  parent: "ec-top",
  kind: "argument",
  title: "Were ethnic Chinese communities essential?",
  question: "Assess the view that ethnic Chinese communities were essential to Southeast Asian economic development.",
  intro: "For and against the claim, using Rigg's data and the contrasting political handling of Chinese business.",
  clusters: [
    {
      title: "Claim",
      steps: [
        {
          id: "a3-claim",
          type: "judgement",
          t: "Chinese communities were essential",
          d: "Ethnic Chinese communities were essential to Southeast Asian economic development."
        }
      ]
    },
    {
      title: "For and against",
      link: "supports",
      how: "Data and case evidence on Chinese business test the claim.",
      steps: [
        {
          split: [
            {
              h: "For",
              steps: [
                {
                  id: "a3-rigg",
                  type: "evidence",
                  t: "Disproportionate control everywhere",
                  date: "1980s",
                  d: "Rigg: Chinese controlled 81% (Thailand, 10% of population), 73% (Indonesia, 3.8%), 69% (Malaysia, 28%), 50–60% (Philippines, 1.3%).",
                  cards: ["chinesecapital"]
                },
                { link: "supports", how: "In Thailand that capital directly enabled the shift to export-led growth." },
                {
                  id: "a3-th",
                  type: "evidence",
                  t: "Thai Chinese bourgeoisie enabled EOI",
                  d: "A resilient autonomous Chinese private sector was a key enabler of Thailand's successful EOI transition by the mid-1980s.",
                  cards: ["ec-th-eoi-success", "ec-th-chinese"]
                }
              ]
            },
            {
              h: "Against",
              steps: [
                {
                  id: "a3-id",
                  type: "evidence",
                  t: "Indonesia: source of instability",
                  d: "Malari riots (1974); the cukong system failed as a nationalist workaround; anti-Chinese violence after 1997.",
                  cards: ["ec-id-chinese"]
                },
                { link: "contradicts", how: "The Philippines shows co-opted Chinese wealth also provoked backlash." },
                {
                  id: "a3-ph",
                  type: "evidence",
                  t: "Philippines: cronyism and backlash",
                  d: "Marcos co-opted Chinese-Filipinos (Lucio Tan); 1990s kidnappings/robberies: 179–286 victims a year (1993–97), ransoms $2.5m→$10.4m.",
                  cards: ["ec-ph-chinese"]
                },
                { link: "contradicts", how: "Malaysia succeeded while restricting Chinese business, so accommodation was not the only route." },
                {
                  id: "a3-my",
                  type: "evidence",
                  t: "Malaysia succeeded while restricting",
                  d: "NEP quotas restricted Chinese corporate dominance, yet Malaysia's EOI transition succeeded like Thailand's.",
                  cards: ["ec-my-chinese", "ec-connect"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judgement",
      link: "led to",
      how: "Weighing the cases: Chinese capital was present everywhere, so its political handling decided its effect.",
      steps: [
        {
          id: "a3-judge",
          type: "judgement",
          t: "Constant presence, variable effect",
          d: "Disproportionate Chinese dominance was a constant; what varied was whether it was STABILISING (Thailand) or a SOURCE OF POLITICAL INSTABILITY (Indonesia, Philippines).",
          cards: ["ec-essay-chinese"]
        }
      ]
    }
  ],
  judge: {
    prompt: "How essential were ethnic Chinese communities? Weigh the For and Against evidence.",
    factors: ["a3-rigg", "a3-th", "a3-id", "a3-ph", "a3-my"],
    notes_view: "Disproportionate Chinese economic dominance is a constant across the region; what varies, and is arguable, is whether it was a STABILISING force (Thailand) or a SOURCE OF POLITICAL INSTABILITY (Indonesia, Philippines)."
  },
  historians: [
    { who: "Rigg", view: "1980s data: ethnic Chinese controlled a highly disproportionate share of listed-firm capitalisation.", nodes: ["a3-rigg"] }
  ],
  takeaways: ["Use the Rigg data plus the contrasting political handling: Thai accommodation, Indonesian violence, Philippine moderate tension.", "Malaysia–Thailand: restriction (NEP) vs accommodation — both made EOI."]
});
L.push({
  id: "ec-arg-4",
  order: 113,
  parent: "ec-top",
  kind: "argument",
  title: "Causes of the 1997 Asian Financial Crisis",
  question: "How far was the 1997 Asian Financial Crisis caused by rapid financial liberalisation?",
  intro: "For and against liberalisation as the main cause, with the Philippines as the contrast case.",
  clusters: [
    {
      title: "Claim",
      steps: [
        {
          id: "a4-claim",
          type: "judgement",
          t: "Liberalisation caused the crisis",
          d: "Rapid financial liberalisation was the main cause of the 1997 Asian Financial Crisis."
        }
      ]
    },
    {
      title: "For and against",
      link: "supports",
      how: "The comparative AFC evidence tests the claim.",
      steps: [
        {
          split: [
            {
              h: "For",
              steps: [
                {
                  id: "a4-th",
                  type: "evidence",
                  t: "Thailand: BIBF channelled short-term debt",
                  d: "1990 Article VIII; 1993 BIBF became a conduit for short-term lending: 70% of US$69bn foreign bank debt; baht floated 2 July 1997.",
                  cards: ["afcthai", "afccompare"]
                },
                { link: "supports", how: "Indonesia shows the same liberalisation-to-debt mechanism." },
                {
                  id: "a4-id",
                  type: "evidence",
                  t: "Indonesia: banks doubled, credit lagged",
                  d: "Oct 1988 reform: banks 124→244 (1988–94), credit culture lagged; >50% of foreign debt short-term; among the worst hit.",
                  cards: ["ec-id-financial", "afccompare"]
                },
                { link: "supports", how: "The Philippine contrast isolates liberalisation as the variable." },
                {
                  id: "a4-ph",
                  type: "evidence",
                  t: "Philippine contrast: limited liberalisation",
                  d: "Only ~5 new banks since the 1980s; short-term debt <20%; peso floated deliberately 11 July 1997 — affected, not as severely.",
                  cards: ["ec-ph-banks", "ec-ph-delhaise"]
                }
              ]
            },
            {
              h: "Against",
              steps: [
                {
                  id: "a4-crony",
                  type: "evidence",
                  t: "Crony lending and moral hazard",
                  d: "Thailand's BBC case (NPLs 8%); Liem's Bank Central Asia lent 60% to Liem firms; NPLs built up on expected bailouts.",
                  cards: ["afcthai", "ec-id-financial"]
                },
                { link: "contradicts", how: "Domestic and political factors also shaped who was hit and how hard." },
                {
                  id: "a4-dom",
                  type: "evidence",
                  t: "Domestic and political factors",
                  d: "Malaysia: domestic property/stock overheating, current account deficit; Indonesia's rupiah collapsed amid political uncertainty (Suharto's health).",
                  cards: ["ec-my-afc", "ec-id-financial"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judgement",
      link: "led to",
      how: "Weighing the cases: liberalisation, debt and cronyism worked together, and the Philippines shows the cost of avoiding them.",
      steps: [
        {
          id: "a4-judge",
          type: "judgement",
          t: "A growth–stability trade-off",
          d: "The same factors behind explosive growth — liberalisation, short-term borrowing, fast EOI — created vulnerability; no SEA economy escaped the trade-off.",
          cards: ["ec-cl-afc-synthesis", "ec-essay-afc"]
        }
      ]
    }
  ],
  judge: {
    prompt: "How far was financial liberalisation the main cause of the AFC? Weigh the For and Against evidence.",
    factors: ["a4-th", "a4-id", "a4-ph", "a4-crony", "a4-dom"],
    notes_view: "The factors that generated Thailand's and Indonesia's explosive growth were precisely what made them vulnerable; Philippine conservatism, learned from earlier crises, meant slower growth but a softer landing: a trade-off."
  },
  historians: [
    { who: "Delhaise", view: "The Philippines 'missed the benefits of explosive growth' but 'avoided the excesses'.", nodes: ["a4-ph"] }
  ],
  takeaways: ["Use the comparative table directly; the Philippines as contrast case shows evaluation, not a single-cause narrative.", "Link liberalisation, short-term debt and crony lending as one mechanism."]
});
L.push({
  id: "ec-arg-5",
  order: 114,
  parent: "ec-top",
  kind: "argument",
  title: "Did ideology decide economic outcomes?",
  question: "How far did ideology (capitalism vs socialism) determine economic success in Southeast Asia?",
  intro: "For and against ideology as the decisive factor, using the socialist and capitalist cases from the notes.",
  clusters: [
    {
      title: "Claim",
      steps: [
        {
          id: "a5-claim",
          type: "judgement",
          t: "Ideology decided economic outcomes",
          d: "Whether a state was capitalist or socialist determined its economic success."
        }
      ]
    },
    {
      title: "For and against",
      link: "supports",
      how: "The country cases test whether ideology tracked outcomes.",
      steps: [
        {
          split: [
            {
              h: "For",
              steps: [
                {
                  id: "a5-bm",
                  type: "evidence",
                  t: "Burma's socialist autarky failed",
                  d: "Burmese Way (1962): total nationalisation, autarky; rice exports 1,521k→204k tons (1962–73); lowest growth (4.3%).",
                  cards: ["burmeseway", "ec-bm-rice"]
                },
                { link: "supports", how: "Vietnam's planned economy failed in the same way before reform." },
                {
                  id: "a5-vnpre",
                  type: "evidence",
                  t: "Vietnam's central planning failed",
                  date: "1976–85",
                  d: "2nd FYP failed completely (12m vs 21m ton target); southern collectivisation met fierce peasant resistance.",
                  cards: ["vietnamfyp", "ec-vn-stage2"]
                }
              ]
            },
            {
              h: "Against",
              steps: [
                {
                  id: "a5-vn",
                  type: "evidence",
                  t: "Socialist Vietnam later succeeded",
                  d: "Still socialist, Vietnam pragmatically adapted via Doi Moi (1986): 9.5% growth (1995–96), the world's highest.",
                  cards: ["ec-vn-doimoi", "ec-vn-1990s"]
                },
                { link: "contradicts", how: "A capitalist state also failed, so capitalism did not guarantee success." },
                {
                  id: "a5-ph",
                  type: "evidence",
                  t: "Capitalist Philippines underperformed",
                  d: "Marcos cronyism and a failed ISI→EOI transition: 1.8% growth in 1981–90, 3.9% overall — the lowest.",
                  cards: ["philfailure", "crony"]
                },
                { link: "contradicts", how: "Singapore's success is traced to governance, not ideology itself." },
                {
                  id: "a5-sg",
                  type: "evidence",
                  t: "Singapore: governance, not ideology",
                  d: "Succeeded due to GOVERNANCE QUALITY — honest/technocratic government, free enterprise, outward orientation (Lim Chong Yah).",
                  cards: ["ec-sg-lim", "ec-pitfalls"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judgement",
      link: "led to",
      how: "Weighing the cases: success and failure occurred under both ideologies, so implementation and governance discriminate.",
      steps: [
        {
          id: "a5-judge",
          type: "judgement",
          t: "Implementation mattered, not ideology",
          d: "Socialism ≠ automatic failure, capitalism ≠ automatic success: governance quality and pragmatic adaptation decided outcomes; Burma failed through EXTREME, rigid implementation.",
          cards: ["ec-pitfalls", "burmavsvietnam"]
        }
      ]
    }
  ],
  judge: {
    prompt: "How far did ideology determine success? Weigh the For and Against evidence.",
    factors: ["a5-bm", "a5-vnpre", "a5-vn", "a5-ph", "a5-sg"],
    notes_view: "Singapore succeeded due to GOVERNANCE QUALITY, not ideology; Vietnam succeeded once it pragmatically ADAPTED; Burma failed due to EXTREME, rigid implementation."
  },
  historians: [
    { who: "Lim Chong Yah", view: "Singapore's success = honest/technocratic governance + free enterprise + outward orientation.", nodes: ["a5-sg"] },
    { who: "Owen", view: "Classified states as capitalist, socialist or 'Third Way'; even capitalist states ran large SOEs.", nodes: ["a5-ph"] }
  ],
  takeaways: ["Don't assume socialism = automatic failure or capitalism = automatic success.", "Burma vs Vietnam is the cleanest test: same ideology, opposite outcomes."]
});
L.push({
  id: "ec-arg-6",
  order: 115,
  parent: "ec-top",
  kind: "argument",
  title: "Was the ISI→EOI transition the key?",
  question: "To what extent was a timely transition from ISI to EOI the key to economic success in Southeast Asia?",
  intro: "For and against Salvatore's view that the timely ISI→EOI transition separated winners from losers.",
  clusters: [
    {
      title: "Claim",
      steps: [
        {
          id: "a6-claim",
          type: "judgement",
          t: "Timely EOI transition was key",
          d: "A timely transition from ISI to EOI was the key to economic success in Southeast Asia."
        }
      ]
    },
    {
      title: "For and against",
      link: "supports",
      how: "Growth and transition evidence tests the claim.",
      steps: [
        {
          split: [
            {
              h: "For",
              steps: [
                {
                  id: "a6-sg",
                  type: "evidence",
                  t: "Singapore: fastest to EOI, highest",
                  d: "Skipped most of ISI and moved to EOI fastest (from mid-1960s) → highest growth, 8.3% (1961–2001).",
                  cards: ["ec-isi-eoi", "ec-gdp-table"]
                },
                { link: "supports", how: "Thailand and Malaysia confirm that a successful transition explains stronger long-run growth." },
                {
                  id: "a6-thmy",
                  type: "evidence",
                  t: "Thailand and Malaysia made EOI",
                  d: "The only two capitalist states with a successful, sustained EOI transition by the mid-1980s — the key variable in their stronger performance.",
                  cards: ["ec-cl-growth", "thaieoi"]
                },
                { link: "supports", how: "The Philippines shows the cost of failing the transition." },
                {
                  id: "a6-ph",
                  type: "evidence",
                  t: "Philippines: stuck in ISI",
                  d: "Stuck in ISI too long; failed the transition; 1.8% growth in 1981–90.",
                  cards: ["philfailure", "ec-ph-isi-fail"]
                },
                { link: "led to", how: "Staying in ISI bred cronyism, inefficiency and debt." },
                {
                  id: "a6-ph2",
                  type: "evidence",
                  t: "Cronyism, inefficiency, foreign debt",
                  d: "The costs of the failed transition.",
                  cards: ["philfailure", "ec-ph-isi-fail"]
                }
              ]
            },
            {
              h: "Against",
              steps: [
                {
                  id: "a6-id",
                  type: "evidence",
                  t: "Indonesia grew on oil windfall",
                  d: "Only a partial transition, yet 5.7% growth driven heavily by a 1970s oil COMMODITY WINDFALL — less structurally robust.",
                  cards: ["ec-id-oil", "ec-cl-growth"]
                },
                { link: "contradicts", how: "Fast transition also carried costs, so it was not simply the key to success." },
                {
                  id: "a6-afc",
                  type: "evidence",
                  t: "Fast EOI bred 1997 vulnerability",
                  d: "Liberalisation, short-term borrowing and fast EOI drove Thai growth but made Thailand the epicentre of the 1997 crisis.",
                  cards: ["ec-cl-afc-synthesis", "afcthai"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judgement",
      link: "led to",
      how: "Weighing the cases: the transition explains long-run differences, but growth quality and stability qualify it.",
      steps: [
        {
          id: "a6-judge",
          type: "judgement",
          t: "Key, but quality and stability matter",
          d: "Salvatore: a timely ISI→EOI transition differentiates success; but growth quality matters as much as rate.",
          ev: ["Salvatore: whether a country transitioned from ISI to EOI at the right time differentiates success; but growth quality matters as much as rate, and speed traded off against stability."],
          cards: ["ec-salvatore", "ec-cl-growth"]
        }
      ]
    }
  ],
  judge: {
    prompt: "How far was a timely ISI→EOI transition the key to success? Weigh the For and Against evidence.",
    factors: ["a6-sg", "a6-thmy", "a6-ph", "a6-id", "a6-afc"],
    notes_view: "Salvatore: the differentiator is less which strategy and more whether a country successfully transitioned from ISI to EOI at the right time."
  },
  historians: [
    { who: "Salvatore", view: "ISI and EOI are sequential; the timely transition separates successful from unsuccessful economies.", nodes: ["a6-judge"] }
  ],
  takeaways: ["Thailand (success) vs Philippines (failure) is the cleanest pairing; Indonesia the oil-cushioned middle case.", "Qualify with the AFC: the factors behind fast growth also created vulnerability."]
});
})();
