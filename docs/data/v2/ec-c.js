// v2 flow charts: Burma (1948–2000), Vietnam (1954–2000) and the Burma–Vietnam comparison
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ec = window.FLOWS2.ec || []);

/* ───────────────────────── BURMA 1 ───────────────────────── */
L.push({
  id: "ec-flow-burma-1",
  order: 40,
  level: 3,
  parent: "ec-country-bm",
  kind: "causal",
  title: "Burma 1948–1962: colonial legacy to Pyidawtha's failure",
  question: "Why did U Nu's Pyidawtha Plan fail by 1956 despite Burma's favourable starting point?",
  intro: "Burma started richer in resources than its neighbours, yet U Nu's Third Way welfare plan failed by 1956, laying roots of later state domination (state boards, DSI).",
  clusters: [
    {
      title: "Colonial legacy",
      summary: "Primary-export economy, Chettiar debt and resentment; a rich start at independence.",
      steps: [
        {
          split: [
            {
              steps: [
                {
                  id: "bm1-colonial",
                  type: "long_term_cause",
                  t: "Colonial primary-export economy",
                  date: "to 1948",
                  d: "Rice, lumber and oil exports reached US$173m (1939–40); industry near non-existent.",
                  cards: ["ec-bm-colonial"]
                }
              ]
            },
            {
              steps: [
                {
                  id: "bm1-chettiar",
                  type: "long_term_cause",
                  t: "Chettiar moneylenders foreclose",
                  date: "to 1948",
                  d: "Chettiar (Indian) moneylenders dominated finance and foreclosed on indebted peasants.",
                  cards: ["ec-bm-colonial"]
                },
                { link: "led to", how: "Peasants who lost their land to foreclosure had to rent it back." },
                {
                  id: "bm1-tenancy",
                  type: "consequence",
                  sign: "-",
                  t: "Tenant farming spreads",
                  d: "Peasants became tenants on land they once owned.",
                  cards: ["ec-bm-colonial"]
                }
              ]
            }
          ]
        },
        { link: "provoked response", how: "Resentment against the Chettiars and the colonial economy erupted into violence." },
        {
          id: "bm1-sayasan",
          type: "event",
          t: "Saya San Rebellion",
          date: "1930–31",
          d: "Violent revolt crushed only by massed British/Indian troops; this resentment shaped post-independence policy toward the Indian minority.",
          cards: ["ec-bm-colonial"]
        },
        {
          link: "followed by",
          sub: "independence, 1948",
          how: "Burma reached independence with strong endowments but would go on to the region's weakest record."
        },
        {
          id: "bm1-paradox",
          type: "context",
          t: "The central paradox",
          date: "1948",
          d: "Abundant resources, high literacy, no population pressure, favourable land-man ratio: arguably BETTER endowed than neighbours, yet later SEA's lowest growth.",
          ev: ["Better endowment owed to British education policy and sparse population.", "Yet Burma ended with the lowest GDP growth rate in the region (except briefly in the 1990s) and the most closed economy in SEA."],
          cards: ["ec-bm-paradox"]
        }
      ]
    },
    {
      title: "U Nu's Third Way",
      link: "followed by",
      how: "After independence (1948), U Nu's Third Way government launched a Buddhist-principled welfare plan with modest state enterprises.",
      summary: "Welfare planning, a land target and the first military-linked SOE.",
      steps: [
        {
          row: [
            {
              id: "bm1-pyidawtha",
              type: "policy",
              t: "Pyidawtha Plan",
              date: "Aug 1952",
              d: "'Land of happiness': Buddhist-principled welfare plan — education, public health, subsidised housing, irrigation, debt relief.",
              ev: ["Economic Planning Board set up in 1947.", "Focus on an agro-based industrial economy with rural emphasis, using rice/teak comparative advantage."],
              cards: ["ec-bm-pyidawtha"]
            },
            {
              id: "bm1-landtarget",
              type: "policy",
              t: "Land reform target",
              date: "by 1955",
              d: "Reallocate 10 million acres of land by 1955.",
              cards: ["ec-bm-pyidawtha"]
            },
            {
              id: "bm1-dsi",
              type: "consequence",
              sign: "±",
              t: "Defense Services Institute",
              date: "1951",
              d: "Military-linked SOE with interest-free capital and tax exemption — precursor to total military-economic dominance under Ne Win.",
              cards: ["ec-bm-pyidawtha-fail"]
            }
          ]
        }
      ]
    },
    {
      title: "Why it failed by 1956",
      link: "undermined",
      how: "State monopolies within the plan killed incentives, while external shocks and weak administration compounded the damage; by 1956 the Plan had failed.",
      summary: "Monopolies killed incentives; shocks and poor implementation compounded it.",
      steps: [
        {
          row: [
            {
              id: "bm1-monopolies",
              type: "long_term_cause",
              t: "State monopolies killed incentives",
              d: "State Agricultural Marketing Board (SAMB) bought rice below global price, removing incentive to raise productivity.",
              ev: ["State Teak Board similarly underperformed non-state teak."],
              cards: ["ec-bm-pyidawtha-fail"]
            },
            { id: "bm1-slump", type: "short_term_cause", t: "Rice price slump", date: "1955–56", d: "Global rice price fell 25%.", cards: ["ec-bm-pyidawtha-fail"] },
            {
              id: "bm1-funds",
              type: "short_term_cause",
              t: "Lack of funds",
              d: "War damage plus the costs of fighting insurgency.",
              cards: ["ec-bm-pyidawtha-fail"]
            },
            {
              id: "bm1-emigration",
              type: "short_term_cause",
              t: "Indian emigration",
              d: "Mass Indian exodus removed technical personnel.",
              cards: ["ec-bm-pyidawtha-fail"]
            },
            {
              id: "bm1-landreform",
              type: "consequence",
              sign: "-",
              t: "Poor land reform implementation",
              date: "by 1958",
              d: "Officials lacked even up-to-date maps; only 1.4 million acres redistributed by 1958 (vs 10m target), often unproductive plots.",
              cards: ["ec-bm-pyidawtha-fail"]
            }
          ]
        }
      ]
    },
    {
      title: "Outcome",
      link: "led to",
      how: "With the Plan failed, recovery was slow and the state's role began to widen.",
      summary: "Barely back to pre-war output; state enterprise expands from 1958.",
      steps: [
        {
          id: "bm1-result",
          type: "consequence",
          sign: "-",
          t: "Barely back to pre-war",
          date: "1958–60",
          d: "GDP only reached pre-war levels by 1958–59; rice production and exports still below 1938–39 levels by 1960.",
          cards: ["ec-bm-pyidawtha-fail"]
        },
        { link: "followed by", how: "In 1958 Ne Win's caretaker government created the first major state enterprises." },
        {
          id: "bm1-caretaker",
          type: "event",
          t: "Ne Win caretaker government",
          date: "1958",
          d: "First major state enterprises in infrastructure and key commodities — a step toward fuller intervention.",
          cards: ["ec-bm-govt"]
        },
        { link: "supports", how: "Even a modest state role had hurt incentives, and state enterprise was already growing before 1962." },
        {
          id: "bm1-verdict",
          type: "judgement",
          t: "Verdict on 1948–62",
          d: "Modest state role (Pyidawtha, DSI, limited monopolies), but even limited monopolies hurt incentives; failure set the stage for Ne Win's extreme socialism.",
          ev: ["Ne Win's extreme socialism followed from 1962."]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which factor mattered most for the Pyidawtha Plan's failure? Rank them.",
    factors: ["bm1-monopolies", "bm1-slump", "bm1-funds", "bm1-emigration", "bm1-landreform"],
    notes_view: "The notes put state monopolies first ('undermined incentives': SAMB, State Teak Board) and treat the rice slump, lack of funds, Indian emigration and poor land reform as 'compounding factors'."
  },
  historians: [],
  takeaways: ["Resource endowment is not destiny: Burma's later collapse came from policy choices, not poor starting conditions.", "Even U Nu's modest state monopolies (SAMB) destroyed producer incentives — an early warning of what full nationalisation would do.", "External shocks (rice slump, insurgency) compounded weak administration (no maps, 1.4m of 10m acres)."]
});
L.push({
  id: "ec-flow-burma-2",
  order: 41,
  level: 3,
  parent: "ec-country-bm",
  kind: "causal",
  title: "Burmese Way to Socialism 1962–71: state takeover and decline",
  question: "Why did the Burmese Way to Socialism bring economic decline, 1962–71?",
  intro: "Ne Win's 1962 programme nationalised almost everything, crushed private enterprise and agriculture, and shut Burma off from trade. Output and exports collapsed while neighbours boomed.",
  clusters: [
    {
      title: "State takeover",
      summary: "Ne Win's programme nationalises banks, industry and distribution.",
      steps: [
        {
          id: "bm2-bws",
          type: "policy",
          t: "Burmese Way to Socialism",
          date: "30 Apr 1962",
          d: "Exploitative capitalism replaced by state-directed social justice; inward-looking, import-substitution focus.",
          cards: ["burmeseway"]
        },
        { link: "led to", how: "The programme was carried out through rapid nationalisation across the economy in 1963." },
        {
          id: "bm2-nat",
          type: "policy",
          t: "Rapid nationalisation",
          date: "1963",
          d: "Burma Oil Company (Jan), all banks (23 Feb), all major industries (June), consumer industries (Aug), People's Stores Corporation (Sept).",
          ev: ["People's Stores Corporation (Sept 1963) held a monopoly on imports and distribution."],
          cards: ["burmeseway"]
        },
        { link: "led to", how: "Nationalisation left the state in control of most production and trade within two years." },
        {
          id: "bm2-dom",
          type: "event",
          t: "State domination",
          date: "end-1965",
          d: "State controlled 60% of manufacturing and 90% of legal trade.",
          cards: ["burmeseway"]
        }
      ]
    },
    {
      title: "Agricultural stagnation",
      link: "followed by",
      how: "The state then set investment priorities and controlled farming directly.",
      summary: "Heavy industry favoured; quotas and forced crops kill farm incentives.",
      steps: [
        {
          row: [
            {
              id: "bm2-heavy",
              type: "policy",
              t: "Heavy industry over agriculture",
              date: "1962–73",
              d: "State investment in agriculture fell 5% while manufacturing investment rose 25% — paralleling Vietnam's similar early mistake.",
              cards: ["burmeseway"]
            },
            {
              id: "bm2-tenancy",
              type: "policy",
              t: "Tenancy Law",
              date: "1963",
              d: "Agrarian Committees: compulsory quotas, fixed state prices, land lost for non-compliance; state dictated which crops to grow.",
              ev: ["Forced cotton cultivation in Mandalay/Sagaing, banning traditional rice, groundnuts and onions."],
              cards: ["ec-bm-agri"]
            }
          ]
        },
        { link: "undermined", how: "Land-policy disincentives (quotas, fixed prices, forced crops) stopped farmers raising output despite new technology." },
        {
          id: "bm2-tech",
          type: "consequence",
          sign: "-",
          t: "Technology without results",
          date: "1962–73",
          d: "Fertiliser use rose 6×, HYV seeds from 1971, but paddy yield stayed flat at ~31 baskets/acre — disincentives, not lack of technology.",
          cards: ["ec-bm-agri"]
        },
        { link: "led to", how: "Stagnant yields left Burma struggling to feed itself, so rice exports collapsed." },
        {
          id: "bm2-riceexp",
          type: "consequence",
          sign: "-",
          t: "Rice export collapse",
          date: "1962–73",
          d: "Rice exports fell from 1,521,000 tons (1962/63) to 204,000 tons (1972/73): Burma was struggling to feed itself.",
          ev: ["Rice exports as % of total exports: 42.2% (1962) → 14.9% (1972)."],
          cards: ["ec-bm-rice"]
        }
      ]
    },
    {
      title: "Private sector suffocated",
      link: "followed by",
      how: "Alongside farm controls, private enterprise was nationalised and Burma closed itself to minorities and visitors.",
      summary: "Firms seized, total control legalised, minorities expelled, borders closed.",
      steps: [
        {
          row: [
            {
              id: "bm2-privtrade",
              type: "consequence",
              sign: "-",
              t: "Private trade wiped out",
              date: "1963",
              d: "All private banks and trading firms nationalised; private rice trade banned; ~1,000 firms closed, ~2 million unemployed.",
              cards: ["ec-bm-private"]
            },
            {
              id: "bm2-confisc",
              type: "policy",
              t: "Confiscations",
              d: "State seized 814 private schools, 17 printing firms, 9 mission hospitals, 132 factories, 182 cinemas, 24 shipping companies, and mines.",
              cards: ["ec-bm-private"]
            },
            {
              id: "bm2-law1965",
              type: "policy",
              t: "Law to Invest Powers",
              date: "1965",
              d: "Law to Invest Powers to Construct the Socialist Economy legalised total state control — beyond Indonesia's Article 33, which reserved only STRATEGIC industries.",
              cards: ["ec-bm-private"]
            }
          ]
        },
        { link: "followed by", how: "State control went together with laws squeezing out minorities and deliberate insularity." },
        {
          row: [
            {
              id: "bm2-minorities",
              type: "consequence",
              sign: "-",
              t: "Minorities driven out",
              date: "mid-1960s",
              d: "Restrictive laws squeezed out the Chinese; most remaining Indians forcibly repatriated, taking capital and expertise with them.",
              cards: ["ec-bm-minorities"]
            },
            {
              id: "bm2-insular",
              type: "policy",
              t: "Deliberate insularity",
              date: "1964",
              d: "Visas restricted to 24-hour visits, confined to Rangoon.",
              cards: ["ec-bm-private"]
            }
          ]
        }
      ]
    },
    {
      title: "Consequences",
      link: "led to",
      how: "Extreme nationalisation and isolation reduced trade, draining foreign exchange.",
      summary: "Trade and reserves collapse; a black market fills the gap.",
      steps: [
        {
          id: "bm2-trade",
          type: "consequence",
          sign: "-",
          t: "Trade collapse",
          date: "by 1971–72",
          d: "Overseas trade fell to 37% of its 1961–62 level — while Thailand and Malaysia were ramping UP exports.",
          cards: ["ec-bm-private"]
        },
        { link: "led to", how: "Shrinking exports turned the trade surplus into a deficit and ran down reserves." },
        {
          id: "bm2-forex",
          type: "consequence",
          sign: "-",
          t: "Foreign exchange crisis",
          date: "1962–72",
          d: "Trade surplus of 228.2m kyat (1962) became a deficit of 235.4m kyat (1972).",
          ev: ["Forex reserves fell from 8.19m kyat (1965) to 3.461m kyat (1972)."],
          cards: ["ec-bm-rice"]
        },
        { link: "led to", how: "The black market filled the gap left by collapsing legal trade and supply." },
        {
          id: "bm2-blackmkt",
          type: "consequence",
          sign: "-",
          t: "Hmaung-kho black market",
          date: "by early 1980s",
          d: "'Taking refuge in the dark': an estimated 70–80% of goods in Yangon/Mandalay markets came from illegal or smuggled sources.",
          cards: ["ec-bm-blackmarket"]
        },
        { link: "supports", how: "The outcomes show intervention destroyed private enterprise without building industry." },
        {
          id: "bm2-verdict",
          type: "judgement",
          t: "Verdict",
          d: "\"Excessive intervention... suffocated private enterprise and failed to build a base for long-term industrialisation.\"",
          ev: ["Poor expertise compounded poor ideology — e.g. mismanaged agricultural technology caused stagnation rather than the intended productivity boost."],
          cards: ["ec-bm-govt"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which policy did most to cause Burma's decline, 1962–71? Rank them.",
    factors: ["bm2-nat", "bm2-heavy", "bm2-tenancy", "bm2-privtrade", "bm2-minorities", "bm2-insular"],
    notes_view: "Total intervention 'suffocated private enterprise and failed to build a base for long-term industrialisation'; extreme nationalism (autarky, minority expulsion) 'directly CAUSED the growth failure', compounded by poor expertise."
  },
  historians: [],
  takeaways: ["Extreme economic nationalism (expelling Indians/Chinese, nationalising everything) bought indigenisation at the cost of capital, expertise and trade.", "Agricultural failure was about incentives (quotas, fixed prices, forced crops), not technology — fertiliser ↑6× but yields flat.", "Heavy industry in an agrarian economy without an industrial base → forex shortage → industrialisation stalled anyway."]
});
L.push({
  id: "ec-flow-burma-3",
  order: 42,
  level: 3,
  parent: "ec-country-bm",
  kind: "chain",
  title: "Burma 1971–1988: Four-Year Plans to the 8888 Uprising",
  question: "Why did Ne Win's partial reforms of 1971–88 fail to prevent economic and political collapse?",
  intro: "Ne Win admitted the crisis and tried partial reforms, but recovery was shallow. Debt, money-printing and the 1985/1987 demonetisations wiped out savings and brought down the regime.",
  clusters: [
    {
      title: "Partial reform",
      summary: "Crisis admitted; Four-Year Plans and foreign loans bring brief growth.",
      steps: [
        {
          id: "bm3-crisis",
          type: "context",
          t: "Crisis recognised",
          date: "1971",
          d: "First BSPP Congress: agriculture re-prioritised; profit motive reintroduced through performance bonuses; foreign aid actively sought.",
          ev: ["By the early 1970s Ne Win recognised the crisis."],
          cards: ["ec-bm-fouryear"]
        },
        { link: "led to", how: "The Congress's new priorities were put into Four-Year Plans and a search for foreign loans." },
        {
          row: [
            {
              id: "bm3-plan1",
              type: "consequence",
              sign: "±",
              t: "1st Four-Year Plan",
              date: "1971–74",
              d: "Improved fertiliser supply; revised marketing restored producer incentives. GDP growth only 2.2% (1971–72) and 2.2% (1972–73).",
              cards: ["ec-bm-fouryear"]
            },
            {
              id: "bm3-plan2",
              type: "consequence",
              sign: "+",
              t: "2nd Four-Year Plan",
              date: "1974",
              d: "Higher paddy procurement prices; 'Whole Township Special Paddy Production Programme'; private/foreign investment incentives. Beat 4.5% growth target.",
              ev: ["Growth of 5.9% (1976–77) and 6.4% (1977–78)."],
              cards: ["ec-bm-fouryear"]
            },
            {
              id: "bm3-aid",
              type: "consequence",
              sign: "±",
              t: "Foreign aid poured in",
              date: "1974–86",
              d: "Annual loans rose from US$65.5m (1974–77) to US$348.5m (1978–86); Burma still lagged far behind peers.",
              ev: ["Japan was the main donor, via the World Bank's Burma Aid Consultative Group."],
              cards: ["ec-bm-govt"]
            }
          ]
        }
      ]
    },
    {
      title: "Shallow recovery",
      link: "constrained",
      how: "Partial reforms never touched state domination, so the recovery stayed shallow and loan-dependent.",
      summary: "Food and oil imports, state dominance, debt and inflation.",
      steps: [
        {
          row: [
            {
              id: "bm3-foodoil",
              type: "consequence",
              sign: "-",
              t: "Food and oil importer",
              date: "1980s",
              d: "Farm output lagged population; once world's largest crude exporter and 'granary of the East', Burma became a net importer of oil and rice.",
              cards: ["ec-bm-shallow"]
            },
            {
              id: "bm3-statedom",
              type: "consequence",
              sign: "-",
              t: "State still dominant",
              d: "Only 13 of ~40,000 private establishments employed more than 50 workers; state enterprises dominated significant industry.",
              cards: ["ec-bm-shallow"]
            },
            {
              id: "bm3-debt",
              type: "consequence",
              sign: "-",
              t: "Debt and inflation",
              d: "Trade deficits plus heavy external debt from 1970s loans; government printed money to cover budget shortfalls, causing inflation.",
              cards: ["ec-bm-shallow"]
            }
          ]
        }
      ]
    },
    {
      title: "The final straw",
      link: "followed by",
      how: "Facing a black market and inflation, the regime turned to demonetisation — 'the final straw'.",
      summary: "Two demonetisations wipe out ordinary people's savings.",
      steps: [
        {
          id: "bm3-demon85",
          type: "event",
          t: "1985 demonetisation",
          date: "1985",
          d: "20/50/100-kyat notes voided; ≤5,000 kyat exchangeable, larger sums needed proof of legal earnings or faced confiscation/fines.",
          ev: ["Aimed at black marketeers, but easily circumvented by distributing cash in small lots among relatives."],
          cards: ["demonetisation"]
        },
        { link: "followed by", how: "Two years later a second demonetisation went further, with no exchange at all." },
        {
          id: "bm3-demon87",
          type: "event",
          t: "1987 demonetisation",
          date: "Sept 1987",
          d: "25/35/75-kyat notes voided with NO exchange; only 45/90-kyat notes stayed legal tender.",
          ev: ["45 and 90 are multiples of Ne Win's 'lucky number' 9, reportedly chosen per his astrologer."],
          cards: ["demonetisation"]
        },
        { link: "led to", how: "With no exchange mechanism, notes held as savings became worthless." },
        {
          id: "bm3-savings",
          type: "consequence",
          sign: "-",
          t: "Life savings wiped out",
          d: "Ordinary law-abiding Burmese permanently lost their life savings.",
          cards: ["demonetisation"]
        }
      ]
    },
    {
      title: "Collapse",
      link: "triggered",
      how: "Lost savings directly fuelled rising dissent (late 1987) and pro-democracy demands (1988).",
      summary: "8888 Uprising ends Ne Win's rule.",
      steps: [
        {
          id: "bm3-8888",
          type: "turning_point",
          t: "8888 Uprising",
          date: "Aug 1988",
          d: "Pro-democracy demands of 1988 culminated in the 8888 Uprising.",
          cards: ["demonetisation"]
        },
        { link: "led to", how: "The uprising brought down Ne Win's regime." },
        {
          id: "bm3-slorc",
          type: "event",
          t: "Ne Win falls; SLORC",
          date: "Sept 1988",
          d: "Ne Win fell and was replaced by the State Law and Order Restoration Council (SLORC).",
          cards: ["demonetisation"]
        },
        { link: "supports", how: "Reform without structural change ended in economic and then political collapse." },
        {
          id: "bm3-verdict",
          type: "judgement",
          t: "Verdict",
          d: "Partial reforms raised growth briefly but never touched state domination; reliance on loans and the printing press ended in collapse."
        }
      ]
    }
  ],
  judge: {
    prompt: "What mattered most in bringing down Ne Win's regime? Rank them.",
    factors: ["bm3-statedom", "bm3-debt", "bm3-foodoil", "bm3-demon85", "bm3-demon87"],
    notes_view: "The notes call the 1985 and 1987 demonetisations 'the final straw': wiping out savings 'directly fuelled' dissent, the 8888 Uprising and Ne Win's fall."
  },
  historians: [],
  takeaways: ["Burma shows an autarkic regime forced out by internal collapse, unlike Vietnam's planned pivot (Doi Moi).", "Foreign aid without structural reform (US$348.5m/yr loans) did not close the gap with neighbours.", "Economic mismanagement (demonetisation) had direct political consequences: 8888 and Ne Win's fall."]
});
L.push({
  id: "ec-flow-burma-4",
  order: 43,
  level: 3,
  parent: "ec-country-bm",
  kind: "evaluation",
  title: "Burma after 1988: SLORC's contradictory market opening",
  question: "How far did SLORC genuinely open Burma's economy after 1988?",
  intro: "SLORC announced a market economy but kept the state and army in control of almost everything Burma produced. Sanctions, army ownership and unsustainable rice gains meant little change.",
  clusters: [
    {
      title: "Static structure",
      summary: "By 1990 Burma remained agrarian and undiversified.",
      steps: [
        {
          row: [
            {
              id: "bm4-static",
              type: "context",
              t: "Static structure",
              date: "1990",
              d: "Agriculture still 57.3% of GDP (highest in region); industry 10.5%, manufacturing 7.8% — despite decades of supposed industrial emphasis.",
              cards: ["ec-bm-static"]
            },
            {
              id: "bm4-undiv",
              type: "consequence",
              sign: "-",
              t: "Undiversified manufacturing",
              date: "1975/76–1988/89",
              d: "Food & beverages' share of manufacturing ROSE 69.8% → 76.8%; clothing FELL 7.8% → 3.6%.",
              cards: ["ec-bm-static"]
            }
          ]
        }
      ]
    },
    {
      title: "SLORC's opening",
      link: "followed by",
      how: "From Sept 1988 SLORC announced market reforms to open the economy.",
      summary: "Foreign investment law and outward trade links.",
      steps: [
        {
          row: [
            {
              id: "bm4-fil",
              type: "policy",
              t: "Foreign Investment Law",
              date: "Nov 1988",
              d: "Wholly foreign-owned firms/JVs (min. 35% foreign stake); guarantees against nationalisation; profit repatriation; tax breaks; some monopolies abolished.",
              ev: ["Taxes were also lowered."],
              cards: ["ec-bm-fil"]
            },
            {
              id: "bm4-outward",
              type: "policy",
              t: "Opening outward",
              d: "Borders opened to Thailand/China trade; oil exploration deals with Korea, Japan, Australia and the US.",
              cards: ["ec-bm-fil"]
            }
          ]
        }
      ]
    },
    {
      title: "Contradictions (Tucker)",
      link: "undermined",
      how: "SLORC kept state and army control alongside its market rhetoric, hollowing out its own reforms.",
      summary: "Market rhetoric, state monopolies, export bans and army ownership.",
      steps: [
        {
          id: "bm4-contra",
          type: "consequence",
          sign: "±",
          t: "Core contradiction",
          d: "SLORC proclaimed a \"market-oriented economic system\" AND that \"the initiative... must be kept in the hands of the state\".",
          ev: ["Full wording: \"proper evolution of the market-oriented economic system\" and \"the initiative to shape the national economy must be kept in the hands of the state and the national people.\"", "State monopolies over teak, gems, ore, banking and broadcasting continued."],
          cards: ["ec-bm-tucker"]
        },
        { link: "intensified", how: "Trade policy carried the contradiction further by banning exports of Burma's main products." },
        {
          id: "bm4-opendoor",
          type: "consequence",
          sign: "-",
          t: "'Open-door' policy with bans",
          date: "Dec 1990",
          d: "Simultaneously banned export of 28 goods by 1994 (teak, rice, oil, gems...).",
          ev: ["Tucker: \"the SLORC lifted restrictions on everything except most things Burma produced and traded.\""],
          cards: ["ec-bm-tucker"]
        },
        { link: "followed by", how: "Ownership stayed with the army: no large state firm was privatised." },
        {
          id: "bm4-army",
          type: "consequence",
          sign: "-",
          t: "Army ownership",
          date: "end-1997",
          d: "Only 5% of large firms privately owned; NO large SOE privatised; main industries, finance and most trade under army control.",
          ev: ["Tucker: \"Burma's main industries, all her financial institutions, most of her external trade... remained under army control...the higher the rank, the greater the benefit.\""],
          cards: ["fivepercent"]
        }
      ]
    },
    {
      title: "Partial opening",
      link: "followed by",
      how: "Despite the contradictions, Burma did not return to Ne Win-style total isolation.",
      summary: "ASEAN entry, more trade, an unsustainable rice boom.",
      steps: [
        {
          row: [
            {
              id: "bm4-asean",
              type: "consequence",
              sign: "+",
              t: "Joined ASEAN",
              date: "1997",
              d: "Interest indicated from 1995; no return to Ne Win-style total isolation.",
              cards: ["ec-bm-asean"]
            },
            {
              id: "bm4-tradeup",
              type: "consequence",
              sign: "±",
              t: "Trade up, imports too",
              date: "1985–2003",
              d: "Trade volume rose 6.8× but imports rose 5.5×, largely offsetting gains.",
              cards: ["ec-bm-asean"]
            },
            {
              id: "bm4-rice",
              type: "consequence",
              sign: "±",
              t: "Rice boom and bust",
              date: "1988–95",
              d: "Production 13m → 19.5m tons; exports reached 1m tons (1994), then crashed to 353,000 tons (1995).",
              ev: ["Unsustainable: multi-cropping exhausted soil; gains partly came from cutting domestic consumption, not real productivity increases."],
              cards: ["ec-bm-rice90s"]
            }
          ]
        }
      ]
    },
    {
      title: "Pariah costs",
      link: "undermined",
      how: "Brutal suppression of the pro-democracy movement brought sanctions and aid suspension, hampering liberalisation.",
      summary: "Sanctions, aid cut-off, MNC exits and failed tourism.",
      steps: [
        {
          id: "bm4-pariah",
          type: "event",
          t: "Brutal suppression of democrats",
          d: "SLORC brutally suppressed the pro-democracy movement.",
          cards: ["ec-bm-asean", "ec-bm-limits"]
        },
        { link: "led to", how: "Brutality made Burma an international pariah and brought Western sanctions." },
        {
          id: "bm4-sanc",
          type: "consequence",
          sign: "-",
          t: "Pariah status and sanctions",
          d: "Western sanctions imposed on an international pariah.",
          ev: ["The 1988 coup triggered suspension of all foreign aid."],
          cards: ["ec-bm-asean", "ec-bm-limits"]
        },
        { link: "led to", how: "Under sanctions, Western multinationals had to leave." },
        {
          id: "bm4-mnc",
          type: "consequence",
          sign: "-",
          t: "MNCs forced out",
          d: "Coca-Cola, Apple and other MNCs were forced to exit.",
          cards: ["ec-bm-asean"]
        },
        { link: "undermined", how: "The poor human rights record deterred visitors, so the tourism push failed." },
        {
          id: "bm4-tourism",
          type: "consequence",
          sign: "-",
          t: "Tourism push failed",
          date: "1996",
          d: "'Visit Myanmar Year': poor human rights record deterred visitors; hotels stayed empty.",
          cards: ["ec-bm-rice90s"]
        },
        { link: "supports", how: "Weighing the opening against its contradictions and costs." },
        {
          id: "bm4-verdict",
          type: "judgement",
          t: "Verdict",
          d: "Liberalisation hampered by SLORC/SPDC brutality and sanctions; ASEAN more forgiving. Real improvement only under semi-democratic government post-2010.",
          ev: ["Post-2010 lies beyond the syllabus's 2000 cut-off but is useful context.", "Irony: Myanmar's best decade (1991–2000, 7.4% growth) coincides with SLORC's reforms, but from such a low base it still lagged."],
          cards: ["ec-bm-govt"]
        }
      ]
    }
  ],
  judge: {
    prompt: "What most limited SLORC's market opening? Rank them.",
    factors: ["bm4-contra", "bm4-opendoor", "bm4-army", "bm4-pariah", "bm4-rice"],
    notes_view: "SLORC's reforms were 'riddled with contradiction' (market rhetoric, continued state monopolies, export bans on 28 goods), while its brutality brought Western sanctions that 'hampered liberalisation'."
  },
  historians: [
    {
      who: "Tucker",
      view: "SLORC 'lifted restrictions on everything except most things Burma produced and traded'; the army kept control.",
      nodes: ["bm4-contra", "bm4-opendoor", "bm4-army"]
    }
  ],
  takeaways: ["Tucker: SLORC's opening was largely cosmetic — the state and army kept the commanding heights and key exports.", "Political repression had economic costs: sanctions, aid suspension, MNC exits, failed tourism.", "Contrast Vietnam, where sustained Doi Moi commitment helped end the US embargo (1994)."]
});
L.push({
  id: "ec-flow-burma-eval",
  order: 44,
  level: 3,
  parent: "ec-country-bm",
  kind: "evaluation",
  title: "Evaluating Burma: why the region's worst performer?",
  question: "Why was Burma the region's worst economic performer despite the best starting endowment?",
  intro: "Burma's numbers are the worst in SEA despite the best start. Policy — extreme nationalisation and isolation — not endowment explains the divergence.",
  clusters: [
    {
      title: "The record",
      summary: "Lowest growth, least industrialised, exports collapsed.",
      steps: [
        {
          row: [
            {
              id: "bm5-snapshot",
              type: "consequence",
              sign: "-",
              t: "Quantitative snapshot",
              date: "1961–2001",
              d: "GDP growth 4.3%, lowest in SEA except the 1990s rebound. 1990: agriculture 57.3% of GDP (highest); industry 10.5%, manufacturing 7.8% (lowest).",
              cards: ["ec-bm-snapshot"]
            },
            {
              id: "bm5-leastind",
              type: "consequence",
              sign: "-",
              t: "Least industrialised socialist state",
              d: "Even vs Cambodia/Laos; only country where primary industry's GDP share did NOT fall in the 1990s.",
              cards: ["ec-bm-snapshot"]
            },
            {
              id: "bm5-exports",
              type: "consequence",
              sign: "-",
              t: "Exports collapsed",
              date: "1950–2000",
              d: "Exports % of GDP: 21.0% (1950–60) → 1.3% (1990–2000) — the only regional economy where exports fell.",
              cards: ["ec-bm-snapshot"]
            }
          ]
        },
        { link: "supports", how: "Set against neighbours with a similar resource base, the gap points to policy, not endowment." },
        {
          id: "bm5-thantan",
          type: "judgement",
          t: "Than & Tan: policy",
          d: "Decline \"particularly telling\" against neighbours \"with which Burma shares a similar resource base\" — divergence due to POLICY, not endowment.",
          ev: ["Full quotation: \"particularly telling when set against the rapid growth and economic transformation achieved since the early 1960s by its neighbours... countries with which Burma shares a similar resource base\"."],
          cards: ["ec-bm-limits"]
        }
      ]
    },
    {
      title: "Three structural limitations",
      link: "followed by",
      how: "The notes identify three structural limitations behind this policy failure.",
      summary: "Socialist contradiction, no trade, instability.",
      steps: [
        {
          split: [
            {
              steps: [
                {
                  id: "bm5-lim1",
                  type: "long_term_cause",
                  t: "Heavy industry, no industrial base",
                  d: "Heavy industry prioritised in an agrarian economy without an industrial base: the contradiction of socialist strategy.",
                  ev: ["Same flaw as Vietnam."],
                  cards: ["ec-bm-limits"]
                },
                { link: "led to", how: "Building heavy industry from nothing used up foreign exchange." },
                { id: "bm5-forex", type: "consequence", sign: "-", t: "Foreign exchange shortage", d: "Burma ran short of foreign exchange.", cards: ["ec-bm-limits"] },
                { link: "prevented", how: "Without foreign exchange, capital goods could not be imported." },
                { id: "bm5-capgoods", type: "consequence", sign: "-", t: "No capital goods imports", d: "Capital goods couldn't be imported.", cards: ["ec-bm-limits"] },
                { link: "led to", how: "Without capital goods, the industrial drive itself stalled." },
                {
                  id: "bm5-stall",
                  type: "consequence",
                  sign: "-",
                  t: "Industrialisation stalled anyway",
                  d: "Industrialisation stalled anyway. Same flaw as Vietnam.",
                  cards: ["ec-bm-limits"]
                }
              ]
            },
            {
              steps: [
                {
                  id: "bm5-lim2",
                  type: "long_term_cause",
                  t: "Extreme nationalisation",
                  d: "Extreme nationalisation reduced international trade.",
                  cards: ["ec-bm-limits"]
                },
                { link: "led to", how: "Nationalisation cut Burma off from trade, and exports collapsed." },
                {
                  id: "bm5-trade",
                  type: "consequence",
                  sign: "-",
                  t: "Absence of international trade",
                  date: "1950–2000",
                  d: "Exports fell from 21.0% (1950–60) to 1.3% (1990–2000) of GDP.",
                  ev: ["Every other regional economy's export share rose over the same period."],
                  cards: ["ec-bm-limits"]
                },
                { link: "led to", how: "GDP slid in tandem with trade orientation, proving the importance of trade to development." },
                { id: "bm5-gdp", type: "consequence", sign: "-", t: "GDP slides with trade", d: "GDP slid in tandem with trade orientation.", cards: ["ec-bm-limits"] }
              ]
            },
            {
              steps: [
                {
                  id: "bm5-lim3",
                  type: "short_term_cause",
                  t: "Instability and investment climate",
                  date: "1988",
                  d: "The 1988 coup suspended all foreign aid, whereas Vietnam's embargo was lifted in 1994.",
                  ev: ["Hla Myint (1971): investors value reduced bureaucracy and long-term political/security certainty over tax 'handouts'."],
                  cards: ["ec-bm-limits"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Role of government",
      link: "followed by",
      how: "The government's role grew from modest beginnings to total intervention, then brutal military rule.",
      summary: "Modest → caretaker → total intervention → SLORC.",
      steps: [
        {
          id: "bm5-pre58",
          type: "context",
          t: "Pre-1958: modest role",
          date: "1948–58",
          d: "Pyidawtha plan, DSI and limited state monopolies.",
          cards: ["ec-bm-govt"]
        },
        { link: "followed by", how: "The 1958 caretaker government began major state enterprise." },
        {
          id: "bm5-1958",
          type: "context",
          t: "Ne Win caretaker",
          date: "1958",
          d: "First major state enterprises in infrastructure and key commodities.",
          cards: ["ec-bm-govt"]
        },
        { link: "followed by", how: "From 1962 Ne Win extended intervention to every sector." },
        {
          id: "bm5-total",
          type: "consequence",
          sign: "-",
          t: "Total intervention",
          date: "1962–88",
          d: "\"Excessive intervention... suffocated private enterprise and failed to build a base for long-term industrialisation.\" Poor expertise compounded poor ideology.",
          cards: ["ec-bm-govt"]
        },
        { link: "followed by", how: "From the 1970s large foreign loans were taken on without closing the gap." },
        {
          id: "bm5-aid",
          type: "consequence",
          sign: "-",
          t: "Aid mismanaged",
          date: "1974–86",
          d: "Loans rose from US$65.5m/yr (1974–77) to US$348.5m/yr (1978–86), yet Burma still lagged far behind.",
          cards: ["ec-bm-govt"]
        },
        { link: "followed by", how: "After 1988 the military regime's brutality brought sanctions." },
        { id: "bm5-post88", type: "event", t: "SLORC/SPDC brutality", date: "1988–", d: "Post-1988 brutality by the military regime.", cards: ["ec-bm-govt"] },
        { link: "led to", how: "Brutality brought Western sanctions." },
        {
          id: "bm5-sanc",
          type: "consequence",
          sign: "-",
          t: "Western sanctions",
          date: "1988–",
          d: "Western sanctions; ASEAN comparatively more forgiving.",
          cards: ["ec-bm-govt"]
        },
        { link: "undermined", how: "Sanctions hampered liberalisation." },
        {
          id: "bm5-hamper",
          type: "consequence",
          sign: "-",
          t: "Liberalisation hampered",
          d: "Real improvement came only from semi-democratic government post-2010 (outside the syllabus).",
          cards: ["ec-bm-govt"]
        }
      ]
    },
    {
      title: "Verdict",
      link: "led to",
      how: "Weighing the record: equity and nationalism were 'achieved', but at the cost of growth.",
      summary: "Hollow equity; policy, not resources, decided the outcome.",
      steps: [
        {
          id: "bm5-equity",
          type: "consequence",
          sign: "±",
          t: "Equity vs growth revisited",
          date: "1972",
          d: "Relative equity (top 25% earned only 5× bottom 25%); nationalism by expelling Chinese/Indians — but hardly \"an achievement of any sort\".",
          ev: ["Full quotation: \"the parlous overall state of the economy... means it is difficult to credit this as an achievement of any sort.\""],
          cards: ["ec-bm-equity"]
        },
        { link: "supports", how: "Equity and nationalism without growth confirm that policy failure outweighed any gains." },
        {
          id: "bm5-verdict",
          type: "judgement",
          t: "Overall verdict",
          d: "The ultimate cautionary tale of extreme economic nationalism: policy, not resources, made the best-endowed country the region's worst performer.",
          cards: ["ec-bm-paradox"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which factor best explains Burma's failure? Rank them.",
    factors: ["bm5-lim1", "bm5-lim2", "bm5-lim3", "bm5-total", "bm5-aid"],
    notes_view: "Policy, not endowment: government choices, 'especially the extremity of nationalisation and isolation', determined the outcome — 'the ultimate cautionary tale on the costs of extreme economic nationalism'."
  },
  historians: [
    {
      who: "Than & Tan",
      view: "Burma's decline is 'particularly telling' against neighbours sharing a similar resource base: policy, not endowment.",
      nodes: ["bm5-thantan"]
    },
    { who: "Hla Myint", view: "Investors value reduced bureaucracy and long-term political certainty over tax 'handouts' (1971).", nodes: ["bm5-lim3"] }
  ],
  takeaways: ["Use Burma to argue government policy was the decisive factor in economic outcomes (Than & Tan).", "Burma proves trade orientation matters: exports 21.0% → 1.3% of GDP alongside the slowest growth.", "Equity and nationalism were 'achieved' at the cost of growth — hard to credit as \"an achievement of any sort\" given the parlous economy."]
});
L.push({
  id: "ec-flow-vietnam-1",
  order: 45,
  level: 3,
  parent: "ec-country-vn",
  kind: "chain",
  title: "Vietnam 1954–1975: a country split by ideology",
  question: "How did division and war shape Vietnam's two economies, 1954–75?",
  intro: "Geneva split Vietnam into a capitalist, US-dependent South and a socialist, Soviet/Chinese-backed North. Both economies were distorted and then devastated by war.",
  clusters: [
    {
      title: "Colonial roots",
      summary: "Agrarian colony, famine, then partition at Geneva.",
      steps: [
        {
          split: [
            {
              steps: [
                { id: "vn1-colonial", type: "long_term_cause", t: "Colonial economy", d: "Agrarian: rice, rubber, coffee, coal.", cards: ["ec-vn-colonial"] }
              ]
            },
            {
              steps: [
                {
                  id: "vn1-corvee",
                  type: "long_term_cause",
                  t: "French corvée (forced labour)",
                  d: "A repressive French forced-labour system.",
                  cards: ["ec-vn-colonial"]
                },
                { link: "led to", how: "Forced labour drove peasants into tenancy." },
                { id: "vn1-tenant", type: "consequence", sign: "-", t: "Tenant farming", d: "Tenant farming on absentee-landlord land.", cards: ["ec-vn-colonial"] }
              ]
            }
          ]
        },
        { link: "followed by", how: "Under Japanese occupation famine struck." },
        {
          id: "vn1-famine",
          type: "consequence",
          sign: "-",
          t: "Famine",
          date: "1944–45",
          d: "Hundreds of thousands died as the Japanese diverted rice for war and Allied bombing disrupted transport.",
          cards: ["ec-vn-colonial"]
        },
        { link: "followed by", how: "After Dien Bien Phu, the Geneva Conference divided the country." },
        {
          id: "vn1-geneva",
          type: "turning_point",
          t: "Geneva Conference",
          date: "1954",
          d: "After Dien Bien Phu: North (socialist DRV, Soviet/Chinese-backed) and South (capitalist, US-backed).",
          cards: ["ec-vn-colonial"]
        }
      ]
    },
    {
      title: "The capitalist South",
      link: "led to",
      how: "Partition gave the South a capitalist economy built on US aid.",
      summary: "Consumer industry on US aid; rice imports; collapse on US withdrawal.",
      steps: [
        {
          id: "vn1-diem",
          type: "consequence",
          sign: "±",
          t: "Diem's consumer industry",
          d: "Sugar, textiles, processed foods with US aid — couldn't meet population needs; rural insurgency deterred investment.",
          cards: ["ec-vn-south"]
        },
        { link: "followed by", how: "During the war the South lost its rice surplus." },
        {
          id: "vn1-riceimp",
          type: "consequence",
          sign: "-",
          t: "Rice exporter to importer",
          date: "after 1965",
          d: "From leading exporter to ceasing net exports after 1965; imports were 12× exports during the war.",
          cards: ["ec-vn-south"]
        },
        { link: "followed by", how: "By the late 1960s the economy rested almost entirely on US aid." },
        {
          id: "vn1-aiddep",
          type: "consequence",
          sign: "-",
          t: "US-aid dependence",
          date: "late 1960s",
          d: "Almost wholly aid-dependent by late 1960s → collapse when the US withdrew (from 1971, completed via 1973 Paris Peace Accords).",
          cards: ["ec-vn-south"]
        }
      ]
    },
    {
      title: "The socialist North",
      link: "followed by",
      how: "Meanwhile the North followed the socialist path with Soviet/Chinese backing.",
      summary: "Planned industry on aid; collectivisation fails on incentives.",
      steps: [
        {
          id: "vn1-minerals",
          type: "context",
          t: "Minerals, little industry",
          date: "1954",
          d: "Most minerals (gold, zinc, iron, tin) but industry only 1.5% of output (war damage; technical elite fled South).",
          cards: ["ec-vn-north"]
        },
        { link: "followed by", how: "The North built industry through central planning and Soviet/Chinese aid." },
        {
          id: "vn1-plan",
          type: "policy",
          t: "Planning and 1st FYP",
          date: "1955–65",
          d: "National Planning Board (1955); 1st FYP (1961); >90% of industry/agriculture nationalised by 1965; industrial output +15%/yr (1959–64).",
          ev: ["Massive Soviet/Chinese aid (80% from Moscow) built fertiliser plants, power stations and a steel complex near Hanoi."],
          cards: ["ec-vn-north"]
        },
        { link: "followed by", how: "Agriculture was collectivised in stages." },
        { id: "vn1-teams", type: "policy", t: "Mutual aid teams", d: "First stage of collectivisation.", cards: ["ec-vn-north"] },
        { link: "followed by", how: "Teams were merged into cooperatives." },
        { id: "vn1-coops", type: "policy", t: "Cooperatives", d: "Second stage of collectivisation.", cards: ["ec-vn-north"] },
        { link: "followed by", how: "Cooperatives were organised into production brigades paid in work points." },
        {
          id: "vn1-points",
          type: "policy",
          t: "Brigades paid in work points",
          d: "Quality of labour was hard to judge, so points were awarded simply by TIME spent.",
          cards: ["ec-vn-north"]
        },
        { link: "led to", how: "Paying for time, not output, removed any reason to work harder." },
        {
          id: "vn1-collect",
          type: "consequence",
          sign: "-",
          t: "Productivity incentives killed",
          d: "Collectivisation proved ineffective; wages were low due to fixed low state prices.",
          cards: ["ec-vn-north"]
        },
        { link: "contradicts", how: "Private plots out-yielding collectives exposed collectivisation's incentive failure, yet the Party ignored the data." },
        {
          id: "vn1-plots",
          type: "evidence",
          t: "'Five percent plots'",
          date: "1974",
          d: "Private plots (5% of cooperative land) yielded 2–3× per hectare and gave 60–75% of farm income — ignored even when shown to Le Duan.",
          cards: ["ec-vn-plots"]
        }
      ]
    },
    {
      title: "War damage",
      link: "followed by",
      how: "War then struck the North's small industrial base and transport.",
      summary: "US bombing devastates; communist aid only prevents collapse.",
      steps: [
        {
          row: [
            {
              id: "vn1-bombing",
              type: "consequence",
              sign: "-",
              t: "US bombing",
              date: "1966–75",
              d: "Devastated the North's industry and transport; 9 of 30 provincial capitals completely destroyed.",
              ev: ["UN 1976 mission found 183 dams/canals and 884 water installations needing repair."],
              cards: ["ec-vn-war"]
            },
            {
              id: "vn1-commaid",
              type: "consequence",
              sign: "±",
              t: "Communist aid",
              date: "1963–68",
              d: "Soviet aid >1 billion roubles (1963–67, 60% military) plus Chinese aid prevented total collapse.",
              ev: ["CIA estimate: $3.2bn total from Communist states by 1968.", "But aid couldn't offset war damage."],
              cards: ["ec-vn-war"]
            }
          ],
          links: [
            { how: "Aid prevented total collapse but couldn't offset the war damage.", from: "vn1-commaid", to: "vn1-bombing", label: "constrained" }
          ]
        }
      ]
    },
    {
      title: "Legacy",
      link: "led to",
      how: "Aid dependence in the South and failed collectivisation plus war damage in the North left a weak base.",
      summary: "Neither model worked; legacies shaped post-1975 policy.",
      steps: [
        {
          id: "vn1-verdict",
          type: "judgement",
          t: "Neither model worked",
          d: "The South depended on US aid; the North's collectivisation failed on incentives. Both legacies shaped post-1975 policy."
        },
        { link: "followed by", how: "From this base Vietnam would later show the flexibility to abandon a failing model." },
        {
          id: "vn1-theme",
          type: "context",
          t: "Defining theme: pragmatism",
          d: "Vietnam is the model case of a socialist government flexible enough to abandon a failing model — unlike Burma, which clung to autarky.",
          ev: ["Burma clung to autarky until forced out by internal collapse."],
          cards: ["ec-vn-theme"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which factor most weakened Vietnam's economies before 1975? Rank them.",
    factors: ["vn1-diem", "vn1-aiddep", "vn1-collect", "vn1-bombing"],
    notes_view: ""
  },
  historians: [],
  takeaways: ["The five percent plots were early proof that incentives, not collectivisation, drove productivity — ignored for ideological reasons.", "Both halves were aid-dependent (US vs Soviet/Chinese); war damage set a very low base for reunification.", "The South's freeholding peasants and capitalist experience explain later resistance to socialist transformation."]
});
L.push({
  id: "ec-flow-vietnam-2",
  order: 46,
  level: 3,
  parent: "ec-country-vn",
  kind: "causal",
  title: "Vietnam 1976–1980: reunification and the failed 2nd FYP",
  question: "Why did Vietnam's 2nd Five-Year Plan (1976–80) fail?",
  intro: "Reunified Vietnam imposed the North's heavy-industry socialist model on the South. Fierce rural resistance and four causes made the 2nd Five-Year Plan a comprehensive failure.",
  clusters: [
    {
      title: "After reunification",
      summary: "Human losses, mixed early measures, then a heavy-industry plan.",
      steps: [
        {
          id: "vn2-humancost",
          type: "context",
          t: "Human cost of war",
          d: "~1.5 million killed; ~1 million refugees by Oct 1982 (UNHCR), including tens of thousands of skilled professionals — severe human capital loss.",
          cards: ["ec-vn-reunify"]
        },
        { link: "followed by", how: "The new state's first measures mixed capitalist-style openings with nationalisation." },
        {
          id: "vn2-early",
          type: "consequence",
          sign: "±",
          t: "Mixed early measures",
          d: "Farm expansion (1m new jobs); JVs and profit repatriation to woo investors; ASEAN outreach. BUT private banks abolished; foreign industrial firms nationalised.",
          ev: ["Foreign manufacturing/industrial firms were nationalised after Saigon's fall."],
          cards: ["ec-vn-reunify"]
        },
        { link: "followed by", how: "The 2nd Five-Year Plan then imposed the North's model nationwide." },
        {
          id: "vn2-fyp2",
          type: "policy",
          t: "2nd Five-Year Plan",
          date: "1976–80",
          d: "Repeated the North's mistake: heavy industry first; science/technology (mechanised farming); large-scale collectivisation (Mekong agro-farms); relocation to New Economic Zones.",
          cards: ["vietnamfyp"]
        }
      ]
    },
    {
      title: "Transforming the South",
      link: "led to",
      how: "The Plan's collectivisation drive brought socialist transformation to the South from 1978.",
      summary: "Private trade abolished, collectivisation resisted, total failure.",
      steps: [
        {
          id: "vn2-stage1",
          type: "policy",
          t: "Stage I: private trade abolished",
          date: "Mar 1978",
          d: "Without warning, major private firms put under state control; 'youth squads' confiscated goods at night, compensation rarely honoured.",
          ev: ["The confiscations triggered a merchant exodus of refugees."],
          cards: ["ec-vn-stage1"]
        },
        { link: "followed by", how: "Collectivisation of Southern farming followed in December 1978." },
        {
          id: "vn2-wx",
          type: "policy",
          t: "Work-exchange teams",
          date: "Dec 1978",
          d: "'New Management System', gradualist: farmers kept their land and contracted production goals.",
          cards: ["ec-vn-stage2"]
        },
        { link: "followed by", how: "Next came pilot cooperatives." },
        { id: "vn2-pilot", type: "policy", t: "Pilot cooperatives", d: "Set up in receptive areas first.", cards: ["ec-vn-stage2"] },
        { link: "followed by", how: "Pilots were to grow into large-scale collectives." },
        {
          id: "vn2-stage2",
          type: "policy",
          t: "Large collectives; equipment seized",
          d: "Eventual large-scale collectives; the state seized agricultural equipment and livestock for collective ownership.",
          cards: ["ec-vn-stage2"]
        },
        {
          link: "provoked response",
          how: "Southern peasants were freeholders, unlike Northern tenants, so seizure of land and equipment met immediate, fierce resistance."
        },
        {
          id: "vn2-resist",
          type: "consequence",
          sign: "-",
          t: "Fierce Southern resistance",
          d: "Peasants sold land back to owners, destroyed equipment/livestock, refused collective labour; Party used mass meetings, pressure, 'counterrevolutionary' threats.",
          cards: ["ec-vn-stage2"]
        },
        { link: "led to", how: "Resistance meant collectivisation barely took hold and output fell." },
        {
          id: "vn2-fail",
          type: "consequence",
          sign: "-",
          t: "Total failure",
          date: "1976–82",
          d: "By 1982 only 0.6% of Mekong households in cooperatives; national rice output 11.83m (1976) → 9.79m tons (1979).",
          ev: ["Only 10 new cooperatives created in Ho Chi Minh City since 1975.", "Mekong Delta rice output: 950,000 → 398,000 tons."],
          cards: ["ec-vn-stage2"]
        }
      ]
    },
    {
      title: "Four causes",
      link: "followed by",
      how: "The notes give four causes for the Plan's failure.",
      summary: "Funds, war damage, expertise, rural resistance.",
      steps: [
        {
          row: [
            {
              id: "vn2-funds",
              type: "short_term_cause",
              t: "Lack of funds",
              d: "Soviet aid ~$1bn/yr (promised $2.7bn); China cancelled aid; US never paid promised $3bn; Cambodia invasion brought embargo and defence costs.",
              ev: ["China cancelled all aid after Vietnam joined the Soviet-led CMEA (1978), due to Sino-Soviet rivalry.", "The Carter administration never honoured the $3bn reconstruction aid promised in the 1973 Paris Agreement.", "1979 Cambodia invasion → US/allied trade embargo; 50% of national spending diverted to defence."],
              cards: ["ec-vn-fyp-funds"]
            },
            {
              id: "vn2-wardmg",
              type: "long_term_cause",
              t: "War damage, infrastructure",
              d: "Docks lacked equipment/stevedores; national highway potholed; ⅓ of trucks idle without spare parts.",
              ev: ["Duiker: \"Vietnam was having considerable difficulty in absorbing foreign aid even when it was provided.\""],
              cards: ["ec-vn-fyp-causes"]
            },
            {
              id: "vn2-expertise",
              type: "short_term_cause",
              t: "Lack of expertise",
              d: "Cadres couldn't shift from wartime to peacetime administration; experienced people excluded for US/Southern ties or Chinese ethnicity.",
              ev: ["Ideology trumped competence."],
              cards: ["ec-vn-fyp-causes"]
            },
            {
              id: "vn2-rural",
              type: "short_term_cause",
              t: "Rural resistance",
              date: "by 1981",
              d: "Only 9% of peasants and 7% of cultivated land in southern cooperatives.",
              cards: ["ec-vn-fyp-causes"]
            }
          ],
          links: [
            {
              how: "Poor infrastructure meant Vietnam struggled 'absorbing foreign aid even when it was provided' (Duiker).",
              from: "vn2-wardmg",
              to: "vn2-funds",
              label: "intensified"
            }
          ]
        }
      ]
    },
    {
      title: "Outcome",
      link: "led to",
      how: "Together the four causes produced comprehensive failure against the Plan's targets.",
      summary: "Targets missed, crisis by 1980, the Hoa driven out.",
      steps: [
        {
          id: "vn2-targets",
          type: "consequence",
          sign: "-",
          t: "Targets vs achieved",
          d: "Harvest 21m tons target vs 12m achieved; agriculture +50% target vs +18.7%; industry +50% target vs +17.3%.",
          cards: ["vietnamfyp"]
        },
        { link: "followed by", how: "By 1980 the economy was in crisis, worsened by war with China and the Cambodia occupation." },
        {
          id: "vn2-crisis",
          type: "consequence",
          sign: "-",
          t: "Crisis by 1980",
          d: "Industrial capacity use <50%; rice rationed to wartime lows (1977–80); thriving black market; war with China (1979); costly Cambodia occupation (1979–89).",
          cards: ["vietnamfyp"]
        },
        { link: "followed by", how: "Southern ethnic Chinese were squeezed out amid nationalisation and persecution." },
        {
          id: "vn2-hoa",
          type: "consequence",
          sign: "-",
          t: "Hoa enterprises nationalised",
          d: "Southern ethnic Chinese (Hoa) enterprises nationalised; suspected capitalists and ex-South-government supporters persecuted.",
          cards: ["ec-vn-hoa"]
        },
        { link: "led to", how: "Squeezed out economically and persecuted, many left the country." },
        { id: "vn2-flee", type: "consequence", sign: "-", t: "Hoa flee abroad", d: "Part of the wider refugee exodus.", cards: ["ec-vn-hoa"] },
        { link: "supports", how: "The outcomes show ideology plus isolation and war produced disaster." },
        {
          id: "vn2-verdict",
          type: "judgement",
          t: "Verdict",
          d: "Ideology (heavy industry, forced collectivisation) plus external isolation and war made 1976–80 a disaster — creating the pressure for reform."
        }
      ]
    }
  ],
  judge: {
    prompt: "Which cause mattered most for the 2nd FYP's failure? Rank them.",
    factors: ["vn2-funds", "vn2-wardmg", "vn2-expertise", "vn2-rural", "vn2-fyp2"],
    notes_view: ""
  },
  historians: [
    { who: "Duiker", view: "Vietnam had 'considerable difficulty in absorbing foreign aid even when it was provided'.", nodes: ["vn2-wardmg"] }
  ],
  takeaways: ["Use the four causes to balance internal (expertise, resistance) vs external (aid cuts, embargo, war) factors in failure.", "Southern freeholders' resistance shows collectivisation clashed with local social structures, not just economics.", "Same heavy-industry-first flaw as Burma — but Vietnam's response to failure differed."]
});
L.push({
  id: "ec-flow-vietnam-3",
  order: 47,
  level: 3,
  parent: "ec-country-vn",
  kind: "chain",
  title: "Vietnam 1981–1990: Directive 100 to Doi Moi",
  question: "Why and how did Vietnam move from Directive 100 to Doi Moi, 1981–90?",
  intro: "Crisis forced step-by-step decentralisation, then a leadership change produced Doi Moi (1986): a 'market economy with socialist direction' modelled on Deng's China.",
  clusters: [
    {
      title: "Early cracks",
      summary: "Contract farming and the 3rd FYP decentralise.",
      steps: [
        {
          id: "vn3-d100",
          type: "policy",
          t: "Directive 100",
          date: "Jan 1981",
          d: "First crack: households farm own plots, sell a quota to the state, keep the surplus for bonus-price state sale or the free market.",
          cards: ["ec-vn-directive100"]
        },
        { link: "led to", how: "Letting households keep the surplus raised productivity, but quotas created new problems." },
        {
          id: "vn3-mixed",
          type: "consequence",
          sign: "±",
          t: "Mixed results",
          d: "Productivity rose, but peasants gamed quotas (colluding with managers for low targets) and resented state-controlled, often poor-quality inputs.",
          cards: ["ec-vn-directive100"]
        },
        { link: "followed by", how: "The 3rd Five-Year Plan widened decentralisation." },
        {
          id: "vn3-fyp3",
          type: "policy",
          t: "3rd Five-Year Plan",
          date: "1981–85",
          d: "Food/consumer subsidies abolished; private sector allowed in forestry, fisheries, retail; four major cities got own import-export corporations.",
          ev: ["The four cities: HCMC, Hanoi, Haiphong, Da Nang.", "More Soviet aid sought (student/technician exchanges)."],
          cards: ["ec-vn-3rdfyp"]
        },
        { link: "led to", how: "Wider decentralisation produced steady gains." },
        {
          id: "vn3-fyp3res",
          type: "consequence",
          sign: "+",
          t: "3rd FYP results",
          d: "Industrial production +~10%/yr; grain +~5%/yr; 1983 agricultural export surplus.",
          cards: ["ec-vn-3rdfyp"]
        }
      ]
    },
    {
      title: "Pressures for reform",
      link: "followed by",
      how: "Despite these gains, external pressures and a leadership change pushed for deeper reform.",
      summary: "Soviet aid cut, US embargo, new leader.",
      steps: [
        {
          split: [
            {
              steps: [
                { id: "vn3-sovcut", type: "short_term_cause", t: "Soviet aid cut", d: "Gorbachev's reforms reduced Soviet support.", cards: ["ec-vn-doimoi"] }
              ]
            },
            {
              steps: [
                {
                  id: "vn3-embargo",
                  type: "long_term_cause",
                  t: "US embargo",
                  d: "Since 1964 (North), extended 1975: blocked IMF/World Bank/ADB and deterred Western/Japanese aid.",
                  ev: ["Western/Japanese aid decisions depended on US support."],
                  cards: ["ec-vn-doimoi"]
                }
              ]
            },
            {
              steps: [
                { id: "vn3-leader", type: "event", t: "Le Duan dies", date: "1986", d: "Death of Old Guard leader Le Duan.", cards: ["ec-vn-doimoi"] },
                { link: "led to", how: "His death opened the way for a reformer to be elected General Secretary." },
                {
                  id: "vn3-linh",
                  type: "actor",
                  t: "Nguyen Van Linh elected",
                  date: "1986",
                  d: "Elected General Secretary; willing to experiment with capitalism.",
                  cards: ["ec-vn-doimoi"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Doi Moi launched",
      link: "triggered",
      how: "Linh's election, the 'catalyst', enabled a deliberate pivot while aid cuts and the embargo made reform pressing.",
      summary: "Market economy with socialist direction; decentralisation, FDI, diplomacy.",
      steps: [
        {
          id: "vn3-doimoi",
          type: "turning_point",
          t: "Doi Moi: 6th Congress",
          date: "Dec 1986",
          d: "'Renovation': 'market economy with socialist direction', modelled on Deng's China (1978) — gradualism and stability; Party supremacy kept.",
          ev: ["Unlike Gorbachev's USSR, which combined economic AND political liberalisation, liberalisation was confined to the economy.", "Doi Moi means 'change and newness'/'renovation'."],
          cards: ["ec-vn-doimoi", "ec-vn-theme"]
        },
        { link: "led to", how: "Doi Moi was implemented through mutually reinforcing reforms across government, investment and diplomacy." },
        {
          row: [
            {
              id: "vn3-decentral",
              type: "policy",
              t: "Decentralisation",
              date: "to 1989",
              d: "Fewer ministries, less bureaucracy; subsidies on key commodities abolished, market prices; by 1989 central planning formally discarded.",
              cards: ["ec-vn-doimoi-measures"]
            },
            {
              id: "vn3-fdi",
              type: "policy",
              t: "Foreign investment",
              date: "1987",
              d: "Wholly foreign-owned firms allowed in all sectors except defence; Foreign Investment Law: joint enterprises, 20-year guarantee against nationalisation.",
              ev: ["The law also allowed foreign corporations."],
              cards: ["ec-vn-doimoi-measures"]
            },
            {
              id: "vn3-diplo",
              type: "policy",
              t: "Regional diplomacy",
              date: "from 1989",
              d: "Serious negotiations with ASEAN to end the Cambodia occupation; interest in ASEAN membership.",
              cards: ["ec-vn-doimoi-measures"]
            }
          ]
        }
      ]
    },
    {
      title: "Agriculture privatised",
      link: "followed by",
      how: "Meanwhile farm output data exposed collectivisation's failure.",
      summary: "Final proof of failure prompts Resolution 10.",
      steps: [
        {
          id: "vn3-proof",
          type: "evidence",
          t: "Proof collectivisation failed",
          date: "1986",
          d: "1986 rice output still BELOW 1942 levels; Northern cooperative farmers produced 52% LESS than free Southern farmers.",
          cards: ["ec-vn-res10"]
        },
        { link: "led to", how: "This 'final proof' of collectivisation's failure prompted Resolution 10." },
        {
          id: "vn3-res10",
          type: "policy",
          t: "Resolution 10",
          date: "Apr 1988",
          d: "De facto privatised farming: 10–15 year land tenure; no collective labour; private suppliers; quotas gone — sell freely after tax.",
          ev: ["Tenure expected to become inheritable/perpetual, mirroring China's Household Responsibility System."],
          cards: ["ec-vn-res10"]
        }
      ]
    },
    {
      title: "Results",
      link: "led to",
      how: "Decentralisation, agricultural privatisation and the FDI law were comprehensive and mutually reinforcing.",
      summary: "Growth and trade double.",
      steps: [
        {
          id: "vn3-results",
          type: "consequence",
          sign: "+",
          t: "Results 1986–90",
          date: "1986–90",
          d: "Growth doubled 3% → 6%; private sector growth 10% → 25%; international trade doubled $1bn → $2bn.",
          cards: ["ec-vn-results"]
        },
        { link: "supports", how: "The results show a planned pivot paying off." },
        {
          id: "vn3-verdict",
          type: "judgement",
          t: "Verdict: pragmatism",
          d: "A deliberate, planned pivot to capitalist mechanisms while preserving one-party control — the opposite of Burma's forced collapse.",
          cards: ["ec-vn-theme"]
        }
      ]
    }
  ],
  judge: {
    prompt: "What mattered most in bringing about Doi Moi? Rank them.",
    factors: ["vn3-sovcut", "vn3-embargo", "vn3-leader", "vn3-mixed", "vn3-proof"],
    notes_view: "The notes call the leadership change the 'catalyst': Le Duan's death (1986) and Linh's election 'enabled' a planned pivot, against Soviet aid cuts and the continuing US embargo."
  },
  historians: [],
  takeaways: ["Reform was gradual and cumulative (Directive 100 → 3rd FYP → Doi Moi → Resolution 10), not a single break.", "Both external pressure (Soviet aid cuts, embargo) and internal change (Le Duan → Linh) drove Doi Moi.", "China-style economic-only liberalisation kept political stability — a key contrast with the USSR."]
});
L.push({
  id: "ec-flow-vietnam-4",
  order: 48,
  level: 3,
  parent: "ec-country-vn",
  kind: "chain",
  title: "Vietnam in the 1990s: growth and integration",
  question: "How did sustained Doi Moi bring growth and integration in the 1990s?",
  intro: "Reaffirmed Doi Moi brought world-leading growth, a rice export boom and integration into ASEAN and the world economy after the US embargo ended in 1994.",
  clusters: [
    {
      title: "Reform reaffirmed",
      summary: "Strategy to 2000 and the 7th Congress.",
      steps: [
        {
          id: "vn4-draft",
          type: "policy",
          t: "Draft Strategy to 2000",
          date: "Dec 1990",
          d: "'Socio-Economic Stabilisation and Development' targets: double per capita income, +50% rice, triple electricity output, 5× exports.",
          cards: ["ec-vn-1990s"]
        },
        { link: "followed by", how: "The 7th Congress then reaffirmed the reform course." },
        { id: "vn4-congress", type: "policy", t: "7th National Congress", date: "1991", d: "Reaffirmed Doi Moi.", cards: ["ec-vn-1990s"] }
      ]
    },
    {
      title: "Rapid growth",
      link: "led to",
      how: "Reaffirmed reform brought rapid growth in industry, agriculture and trade.",
      summary: "World-leading growth, rice boom, trade explosion.",
      steps: [
        {
          row: [
            {
              id: "vn4-growth",
              type: "consequence",
              sign: "+",
              t: "Rapid growth",
              date: "1990–96",
              d: "GDP growth averaged 8.2% in early 1990s, 9.5% in 1995–96 — highest in the world then. Industry +~15%; agriculture +6%.",
              cards: ["ec-vn-1990s"]
            },
            {
              id: "vn4-rice",
              type: "consequence",
              sign: "+",
              t: "Rice export boom",
              date: "1987–2000",
              d: "World's 3rd-largest exporter (after US, Thailand): 0.91m (1988) → 1.95m tons (1992), >3m tons/yr by decade's end.",
              ev: ["Per capita rice production: 242kg (1987) → 293kg (1989)."],
              cards: ["ec-vn-1990s"]
            },
            {
              id: "vn4-trade",
              type: "consequence",
              sign: "+",
              t: "Trade explosion",
              date: "1990–95",
              d: "International trade $1bn (1990) → $2bn (1991) → $11bn (1995).",
              cards: ["ec-vn-1990s"]
            }
          ]
        }
      ]
    },
    {
      title: "Integration",
      link: "followed by",
      how: "Growth went with infrastructure building, regional ties and donor aid.",
      summary: "Infrastructure, ASEAN and donors.",
      steps: [
        {
          id: "vn4-infra",
          type: "consequence",
          sign: "+",
          t: "Infrastructure",
          date: "by end-1995",
          d: "6 transport projects completed (e.g. National Road 14, bridges costing $610m).",
          cards: ["ec-vn-integration"]
        },
        { link: "followed by", how: "Diplomatic ties brought regional investment and donor pledges." },
        {
          row: [
            {
              id: "vn4-asean",
              type: "consequence",
              sign: "+",
              t: "ASEAN ties",
              date: "1991–95",
              d: "ASEAN investment $173m in 34 projects by Sept 1991; membership accepted 1994, formalised 1995.",
              cards: ["ec-vn-integration"]
            },
            {
              id: "vn4-donors",
              type: "consequence",
              sign: "+",
              t: "Donor aid",
              date: "Nov 1993",
              d: "First donors' meeting: 23 donors pledged $1.86bn; Japan largest.",
              cards: ["ec-vn-integration"]
            }
          ]
        }
      ]
    },
    {
      title: "Embargo lifted",
      link: "enabled",
      how: "Continued Doi Moi commitment and improved relations helped secure the lifting of the US embargo.",
      summary: "Investment influx and private-sector growth.",
      steps: [
        {
          id: "vn4-embargo",
          type: "turning_point",
          t: "US embargo lifted",
          date: "Feb 1994",
          d: "Influx of investment: $52bn new approved investment 1995–2005.",
          ev: ["Lifting the embargo opened access to IMF/World Bank/ADB credit."],
          cards: ["ec-vn-integration"]
        },
        { link: "followed by", how: "Private enterprise was then made easier to establish." },
        {
          id: "vn4-priv",
          type: "consequence",
          sign: "+",
          t: "Privatisation",
          date: "1999–2004",
          d: "Enterprise Law (1999) simplified private company formation; non-state share of production 22% → 27% (2000–2004).",
          cards: ["ec-vn-integration"]
        },
        { link: "supports", how: "Sustained reform plus normalisation turned opening into growth." },
        {
          id: "vn4-verdict",
          type: "judgement",
          t: "Verdict",
          d: "Sustained commitment to reform turned diplomatic opening and aid into investment and growth — but the state remained large (see evaluation)."
        }
      ]
    }
  ],
  judge: {
    prompt: "What most drove Vietnam's 1990s success? Rank them.",
    factors: ["vn4-congress", "vn4-asean", "vn4-donors", "vn4-embargo", "vn4-priv"],
    notes_view: "The notes credit sustained, consistent reform: continued Doi Moi commitment 'helped secure the lifting of the US trade embargo (1994)', opening IMF/World Bank/ADB credit and attracting significant FDI."
  },
  historians: [],
  takeaways: ["Vietnam's 1990s success shows the payoff of credible, sustained reform plus diplomatic normalisation (ASEAN, embargo lifted).", "Agriculture led the turnaround: Resolution 10 incentives made Vietnam the 3rd-largest rice exporter.", "Contrast Burma: Vietnam's commitment won the embargo's end (1994) while Burma's 1988 coup lost all aid."]
});
L.push({
  id: "ec-flow-vietnam-eval",
  order: 49,
  level: 3,
  parent: "ec-country-vn",
  kind: "evaluation",
  title: "Evaluating Vietnam: success with limits",
  question: "How successful was Vietnam's economic transformation after Doi Moi?",
  intro: "Doi Moi delivered strong numbers, but manufacturing lagged, the state sector stayed big, investors faced corruption and inequality rose.",
  clusters: [
    {
      title: "Success",
      summary: "Strong growth, but slow diversification.",
      steps: [
        {
          row: [
            {
              id: "vn5-quant",
              type: "consequence",
              sign: "+",
              t: "Quantitative success",
              date: "1986–96",
              d: "Growth 3% → 6% (1986–90), 8.2% early 1990s, 9.5% 1995–96; trade $1bn → $11bn (1990–95); 3rd-largest rice exporter.",
              cards: ["ec-vn-results", "ec-vn-1990s"]
            },
            {
              id: "vn5-manuf",
              type: "consequence",
              sign: "±",
              t: "Lagging diversification",
              date: "2004",
              d: "Manufacturing % of GDP: Thailand 35.2, Malaysia 31.5, Indonesia 28.3, Philippines 23.0, Vietnam 20.3 — still lagging.",
              cards: ["ec-vn-diversify"]
            },
            {
              id: "vn5-exports",
              type: "consequence",
              sign: "±",
              t: "Concentrated exports",
              date: "1985–2000",
              d: "Top 3 exports rose from 43.0% to 54.5% of total; diversified from shrimp/oil seeds/coal to petroleum/garments/shrimp but still concentrated.",
              cards: ["ec-vn-diversify"]
            }
          ]
        }
      ]
    },
    {
      title: "Three limitations",
      link: "constrained",
      how: "Even after a decade of Doi Moi, three persistent limitations held back the transformation.",
      summary: "Big SOEs, corruption, rising inequity.",
      steps: [
        {
          row: [
            {
              id: "vn5-soe",
              type: "consequence",
              sign: "-",
              t: "Socialist contradictions",
              date: "1997",
              d: "SOEs still 50% of output — \"the government's inability or reluctance to expand the private sector\" after a decade of reform.",
              cards: ["ec-vn-limits"]
            },
            {
              id: "vn5-transp",
              type: "consequence",
              sign: "-",
              t: "Lack of transparency",
              date: "1988–95",
              d: "Bribery demands; contracts voided for better offers; PERC (Hong Kong) rated Vietnam the \"riskiest place\" for investors.",
              ev: ["Only ⅓ of the promised $20bn (1988–95) was actually disbursed."],
              cards: ["ec-vn-limits"]
            },
            {
              id: "vn5-inequity",
              type: "consequence",
              sign: "-",
              t: "Rising inequity",
              date: "1993–2002",
              d: "Poverty 1993–98: south-east 32.7% → 11.1%, northern mountains 78.6% → 59.6%. Richest:poorest decile 10.6× (1996) → 12.5× (2001–02).",
              ev: ["Decile ratio was 12× in 1999.", "Ethnic minorities = 14% of population but 29% of the poor (1998)."],
              cards: ["ec-vn-limits"]
            }
          ]
        }
      ]
    },
    {
      title: "Role of government",
      link: "followed by",
      how: "Behind the large state sector lay the government's continuing economic role.",
      summary: "Party-led planning; the state sector kept growing.",
      steps: [
        {
          id: "vn5-planning",
          type: "context",
          t: "Intrusive planning",
          d: "Vasavakul: \"the party determined the course... the central government... translated party guidelines into plans.\"",
          cards: ["ec-vn-govt"]
        },
        { link: "followed by", how: "Even after 1986 the state sector kept expanding." },
        {
          id: "vn5-state",
          type: "consequence",
          sign: "±",
          t: "State sector didn't shrink",
          date: "1990–95",
          d: "State sector grew 10.5%/yr vs non-state 6%/yr; by 1993 VPA had 12% of its standing force in commercial firms.",
          ev: ["Local militias ran 160+ enterprises.", "The Vietnamese People's Army (VPA) partly propped up the state sector."],
          cards: ["ec-vn-govt"]
        },
        { link: "supports", how: "The growing state sector backs Vasavakul's distinction between ending planning and shrinking the state." },
        {
          id: "vn5-vasavakul",
          type: "judgement",
          t: "Vasavakul's nuance",
          d: "\"The abolition of the central planning system was not synonymous with the decline of the state economic sector\" — markets liberalised, not the state's footprint.",
          cards: ["ec-vn-govt"]
        }
      ]
    },
    {
      title: "Verdict",
      link: "followed by",
      how: "Post-reunification policy toward the Hoa also added to economic exclusion.",
      summary: "Pragmatic success, limited by state, corruption and inequity.",
      steps: [
        {
          id: "vn5-hoa",
          type: "consequence",
          sign: "-",
          t: "Hoa enterprises nationalised",
          date: "post-1975",
          d: "Ethnic Chinese (Hoa) enterprises nationalised; suspected capitalists and ex-South-government supporters persecuted.",
          cards: ["ec-vn-hoa"]
        },
        { link: "led to", how: "Squeezed out economically and persecuted, many fled abroad." },
        { id: "vn5-flee", type: "consequence", sign: "-", t: "Hoa flee abroad", d: "Overlapping with the wider refugee exodus.", cards: ["ec-vn-hoa"] },
        { link: "supports", how: "Weighing growth against state dominance, corruption and inequity gives a qualified verdict." },
        {
          id: "vn5-verdict",
          type: "judgement",
          t: "Overall verdict",
          d: "The key example of socialist pragmatism: a planned pivot from failure to high growth. But a large state, corruption and regional/ethnic inequity limited it.",
          cards: ["ec-vn-theme"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which limitation most restricted Vietnam's transformation? Rank them.",
    factors: ["vn5-soe", "vn5-transp", "vn5-inequity", "vn5-state", "vn5-manuf"],
    notes_view: "Vietnam is the 'best example of LEARNING and ADAPTATION', yet the state sector was still 50% of output in 1997, corruption and regional inequity persisted, and equity WORSENED after Doi Moi."
  },
  historians: [
    {
      who: "Vasavakul",
      view: "Party set the course; ending central planning did not mean the state economic sector declined.",
      nodes: ["vn5-planning", "vn5-vasavakul"]
    }
  ],
  takeaways: ["Vietnam supports the argument that pragmatic, flexible governments outperform ideological ones — even under one-party rule.", "Use Vasavakul to nuance 'liberalisation': markets opened but the state (and army) kept a large economic role.", "Growth came at the cost of equity — rising regional and ethnic gaps."]
});
L.push({
  id: "ec-flow-bmvn-compare",
  order: 50,
  level: 3,
  parent: "ec-cluster-bmvn",
  kind: "matrix",
  title: "Burma vs Vietnam: same flaw, different exits",
  question: "Why did Burma fail where Vietnam eventually succeeded?",
  intro: "Both socialist states made the same heavy-industry-first mistake. Vietnam pivoted pragmatically; Burma clung on until collapse — so policy, not starting point, decided the outcome.",
  clusters: [
    {
      title: "Same flaw",
      summary: "Near-identical socialist strategies, similar failures.",
      steps: [
        {
          id: "bv-flaw",
          type: "long_term_cause",
          t: "Shared flaw",
          d: "Heavy industry prioritised in agrarian economies without an industrial base; collectivisation/quotas killed farm incentives; minorities driven out.",
          ev: ["Minorities: Indians/Chinese in Burma; the Hoa in Vietnam."],
          cards: ["burmavsvietnam", "ec-bm-limits"]
        },
        { link: "led to", how: "Both failed for similar reasons: foreign exchange shortages, agricultural disincentives and lack of expertise." },
        {
          id: "bv-bothfail",
          type: "consequence",
          sign: "-",
          t: "Both failed initially",
          d: "Foreign exchange shortages, agricultural disincentives and lack of expertise undermined both; the divergence lies in what happened NEXT.",
          cards: ["burmavsvietnam"]
        }
      ]
    },
    {
      title: "Different exits",
      link: "followed by",
      how: "The critical divergence is in what each regime did next.",
      summary: "Burma clings on until collapse; Vietnam pivots by plan.",
      steps: [
        {
          split: [
            {
              h: "Burma",
              steps: [
                {
                  id: "bv-bm-autarky",
                  type: "consequence",
                  sign: "-",
                  t: "Clung to autarky",
                  date: "1962–88",
                  d: "Burmese Way to Socialism 1962–88; only partial Four-Year Plan reforms.",
                  cards: ["burmeseway"]
                },
                { link: "led to", how: "Clinging on meant reform came only reactively, via crisis and regime collapse." },
                {
                  id: "bv-bm-collapse",
                  type: "consequence",
                  sign: "-",
                  t: "Forced out by collapse",
                  date: "1985–88",
                  d: "Demonetisations → 8888 → SLORC; 1988 coup suspended all foreign aid; Western sanctions.",
                  cards: ["demonetisation"]
                }
              ]
            },
            {
              h: "Vietnam",
              steps: [
                {
                  id: "bv-vn-gradual",
                  type: "consequence",
                  sign: "±",
                  t: "Gradual reform",
                  date: "1981–85",
                  d: "Directive 100 (1981) → 3rd FYP (1981–85) as crisis bit.",
                  cards: ["ec-vn-directive100"]
                },
                { link: "followed by", how: "Leadership transition then enabled deliberate, proactive reform from within the system." },
                {
                  id: "bv-vn-linh",
                  type: "actor",
                  t: "Linh replaces Le Duan",
                  date: "1986",
                  d: "Le Duan's death brought Nguyen Van Linh to power.",
                  cards: ["ec-vn-doimoi"]
                },
                { link: "enabled", how: "The leadership transition enabled a deliberate, planned pivot to capitalist mechanisms." },
                { id: "bv-vn-pivot", type: "turning_point", t: "Doi Moi", date: "1986", d: "Doi Moi (1986), modelled on Deng's China.", cards: ["ec-vn-doimoi"] },
                { link: "followed by", how: "Two years later agriculture was privatised." },
                { id: "bv-vn-res10", type: "policy", t: "Resolution 10", date: "1988", d: "Privatised agriculture.", cards: ["ec-vn-doimoi"] }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "What followed",
      link: "led to",
      how: "Burma's contradictory reforms and Vietnam's consistent ones shaped how investors and the West responded.",
      summary: "Cosmetic opening vs rewarded commitment.",
      steps: [
        {
          split: [
            {
              h: "Burma",
              steps: [
                {
                  id: "bv-bm-cosmetic",
                  type: "consequence",
                  sign: "-",
                  t: "Cosmetic opening",
                  date: "1988–97",
                  d: "State/army kept teak, gems, banking; only 5% of large firms private (1997).",
                  cards: ["ec-bm-tucker", "fivepercent"]
                },
                { link: "led to", how: "Contradictory reform left continued stagnation through the 1990s." },
                {
                  id: "bv-bm-outcome",
                  type: "consequence",
                  sign: "-",
                  t: "Burma's outcome",
                  d: "GDP growth 4.3% (1961–2001), lowest in SEA; exports 1.3% of GDP (1990–2000).",
                  ev: ["The 7.4% growth of 1991–2000 came off a tiny base."],
                  cards: ["ec-bm-snapshot"]
                }
              ]
            },
            {
              h: "Vietnam",
              steps: [
                {
                  id: "bv-vn-rewarded",
                  type: "consequence",
                  sign: "+",
                  t: "Commitment rewarded",
                  date: "1994–2005",
                  d: "Sustained commitment helped lift the US embargo (1994); ASEAN 1995; $52bn investment (1995–2005).",
                  cards: ["ec-vn-integration"]
                },
                { link: "led to", how: "Access to investment and credit sustained high growth." },
                {
                  id: "bv-vn-outcome",
                  type: "consequence",
                  sign: "+",
                  t: "Vietnam's outcome",
                  d: "9.5% growth 1995–96 (world's highest); 3rd-largest rice exporter.",
                  cards: ["ec-vn-1990s"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Verdict",
      link: "supports",
      how: "Investor behaviour explains why credible commitment, not paper incentives, decided the outcomes.",
      summary: "Flexibility beat rigidity; both kept big state footprints.",
      steps: [
        {
          id: "bv-hla",
          type: "judgement",
          t: "Hla Myint: certainty matters",
          date: "1971",
          d: "Investors care less about tax 'handouts' than reduced bureaucracy and long-term political/security certainty.",
          ev: ["Contrast: Vietnam's sustained Doi Moi commitment vs Burma's 1988 coup."],
          cards: ["ec-bm-limits"]
        },
        { link: "supports", how: "Vietnam's credible commitment drew investment that Burma's instability repelled." },
        {
          id: "bv-verdict",
          type: "judgement",
          t: "Verdict",
          d: "Flexibility under one-party rule (Vietnam) beat ideological rigidity (Burma); yet both kept large state/military economic footprints.",
          cards: ["burmavsvietnam", "ec-f2-bmvn"]
        }
      ]
    }
  ],
  matrix: {
    cols: ["Burma", "Vietnam"],
    rows: [
      {
        h: "Shared flaw",
        cells: ["Heavy industry first; farm quotas; Indians/Chinese expelled", "Heavy industry first; collectivisation; the Hoa driven out"]
      },
      { h: "Willingness to reform", cells: ["Clung to autarky 1962–88; only partial Four-Year Plans", "Gradual: Directive 100 (1981), 3rd FYP (1981–85)"] },
      { h: "Turning point", cells: ["Demonetisations → 8888 → SLORC (1988): reactive", "Le Duan → Linh; Doi Moi (1986); Resolution 10 (1988)"] },
      { h: "Coherence of opening", cells: ["Cosmetic: state/army kept teak, gems, banking", "Consistent, mutually reinforcing reforms on Deng's model"] },
      { h: "Private sector", cells: ["Only 5% of large firms private (1997)", "Non-state share 22% → 27% (2000–04)"] },
      {
        h: "International relations",
        cells: ["1988 coup suspended all foreign aid; Western sanctions", "US embargo lifted 1994; ASEAN 1995; $52bn investment"]
      },
      { h: "Growth", cells: ["4.3% (1961–2001), lowest in SEA", "9.5% in 1995–96, world's highest"] },
      { h: "Trade", cells: ["Exports 1.3% of GDP (1990–2000)", "3rd-largest rice exporter"] }
    ]
  },
  judge: {
    prompt: "Which factor best explains why Vietnam succeeded where Burma failed? Rank them.",
    factors: ["bv-vn-pivot", "bv-bm-collapse", "bv-bm-cosmetic", "bv-vn-rewarded", "bv-hla"],
    notes_view: "Both failed initially for similar reasons; 'the critical divergence is in what happened NEXT' — willingness to reform, coherence of reform and international relations. Vietnam pragmatically ADAPTED; Burma failed through EXTREME, rigid implementation."
  },
  historians: [
    { who: "Hla Myint", view: "Investors value reduced bureaucracy and long-term political certainty over tax 'handouts' (1971).", nodes: ["bv-hla"] }
  ],
  takeaways: ["The Burma–Vietnam pair is the clearest test of 'government policy determined economic outcomes'.", "Political stability and credible commitment (not just incentives on paper) attracted investment.", "Both show limits: army-run enterprises in Burma (SLORC) and Vietnam (VPA)."]
});
})();
