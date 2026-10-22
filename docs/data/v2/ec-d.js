// v2 flow charts: Thailand detail charts (ec-flow-thailand-1 to -4), parent ec-country-th
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ec = window.FLOWS2.ec || []);

L.push({
  id: "ec-flow-thailand-1",
  order: 60,
  level: 3,
  parent: "ec-country-th",
  kind: "causal",
  title: "Thailand to 1957: never colonised, 1932 Revolution, Phibun",
  question: "Why did Thailand's private sector survive state intervention and economic nationalism before 1957?",
  intro: "Never colonised, Thailand grew an autonomous Chinese commercial class early. Phibun's nationalism and state enterprises did not displace it: private capital stayed resilient.",
  clusters: [
    {
      title: "Roots of private capital",
      summary: "No colonial rule left space for a Chinese commercial class.",
      steps: [
        {
          id: "th1-colonised",
          type: "context",
          t: "Never colonised",
          d: "Unlike most of SEA, Thailand was never colonised; this gave more economic space and shaped its entire development trajectory.",
          ev: ["Thailand was second only to Singapore in average GDP growth 1961–2001: 6.8% (8.2, 6.9, 7.9, 4.4 by decade) vs Singapore 8.3, Malaysia 6.7, Indonesia 5.7, Myanmar 4.3, Philippines 3.9 (Lim).", "Made a successful transition to EOI by the mid-1980s, similar to Malaysia.", "Private sector stayed resilient against both state intervention and foreign capital, unlike Indonesia and the Philippines.", "The autonomous bourgeoisie could fill the vacuum left by foreign firms after WWII and acted as a societal check: the state never overwhelmed private capital (unlike Indonesia); it later enabled EOI."],
          cards: ["ec-th-independence", "ec-th-overview", "ec-cl-growth"]
        },
        { link: "enabled", how: "More economic space let an autonomous, predominantly Chinese commerce class grow." },
        {
          id: "th1-chinese-class",
          type: "long_term_cause",
          t: "Active Chinese business class",
          date: "1910s–30s",
          d: "Predominantly Chinese businessmen such as Nai Lert (cars), Nai Boonrawd (brewery) and Nai Kokliang (cigarettes).",
          ev: ["Formed trade associations and petitioned the government against Western privileges."],
          cards: ["ec-th-chinese-early"]
        },
        { link: "led to", how: "Chinese traders and millers built a commercial economy unusual for an agrarian SEA state." },
        {
          id: "th1-commercial",
          type: "consequence",
          sign: "+",
          t: "Unusually commercialised economy",
          date: "1929",
          d: "1929 survey showed an extensive commercial economy, achieved early even without a fully capitalist system.",
          ev: ["1929 survey: 20,259 rice traders, 3,709 rice millers, 12,738 timber traders, 7,053 forestry traders (Pasuk & Baker).", "Typical SEA pattern: rice, teak, rubber, tin = 50–90% of exports, mid-1800s–early 1960s. The difference was the degree of commercialisation achieved early."],
          cards: ["ec-th-chinese-early"]
        }
      ]
    },
    {
      title: "Limits on industrialisation",
      link: "constrained",
      how: "But two brakes stopped commercial wealth becoming industry.",
      summary: "Remittances and free trade held industry back.",
      steps: [
        {
          row: [
            {
              id: "th1-remit",
              type: "long_term_cause",
              t: "Remittances",
              d: "Chinese remitted earnings home rather than investing in local industry.",
              cards: ["ec-th-chinese-early"]
            },
            {
              id: "th1-bowring",
              type: "long_term_cause",
              t: "Bowring Treaty",
              date: "1855",
              d: "Forced a liberal trade policy, so there was no tariff protection for local industry.",
              cards: ["ec-th-chinese-early"]
            }
          ]
        },
        { link: "constrained", how: "Capital left the country and infant industry had no tariff shelter, so industrialisation stayed limited." },
        {
          id: "th1-limited",
          type: "consequence",
          sign: "-",
          t: "Industrialisation stayed limited",
          d: "Despite early commercialisation, pre-war Thailand did not industrialise significantly.",
          cards: ["ec-th-chinese-early"]
        }
      ]
    },
    {
      title: "1932 Revolution and nationalism",
      link: "followed by",
      how: "The 1932 Revolution brought economic nationalism and a new state role in industry.",
      summary: "Phibun's 'Thai economy for the Thai people' created state enterprises.",
      steps: [
        {
          id: "th1-1932",
          type: "turning_point",
          t: "1932 Revolution",
          date: "1932",
          d: "Phibun Songkhram promulgated 'a Thai economy for the Thai people', driving out foreign (Western AND Chinese) economic influence.",
          ev: ["The Revolution brought a surge of Thai xenophobia, straining Chinese–elite relations."],
          cards: ["ec-th-1932", "ec-th-chinese"]
        },
        { link: "led to", how: "Nationalism led the government to start industrial enterprises as full or partial owner." },
        {
          id: "th1-soes",
          type: "policy",
          t: "30 state enterprises",
          date: "by 1945",
          d: "Cotton and paper mills, sugar factories, Thai Rice Company and a stake in Siam Steam Navigation.",
          ev: ["Cotton & paper mills (Defence Ministry), sugar factories (Economic Affairs), Thai Rice Company (70–80% of export rice by 1939), stake in Siam Steam Navigation.", "Mid-1930s to late 1940s: government was full or partial owner of public utilities, consumer goods and primary product trade companies (Pasuk & Baker)."],
          cards: ["ec-th-1932"]
        },
        { link: "followed by", how: "The war then passed Thailand by with little damage." },
        { id: "th1-wwii", type: "consequence", sign: "+", t: "Spared WWII devastation", d: "Little fighting took place on Thai soil.", cards: ["ec-th-1932"] }
      ]
    },
    {
      title: "Phibun's state-led phase",
      link: "followed by",
      how: "After the 1947 coup, Phibun's rule (1947–57) continued and widened the state's role.",
      summary: "Haphazard state intervention plus anti-Chinese measures.",
      steps: [
        {
          id: "th1-phibun",
          type: "policy",
          t: "Haphazard state-led development",
          date: "1947–57",
          d: "Hewison: no coherent central ISI plan, but Phibun kick-started industrialisation.",
          ev: ["Government share of domestic investment rose from 32% (1952) to 38% (1953–55)."],
          cards: ["ec-th-phibun"]
        },
        { link: "led to", how: "Without a coherent plan, the state took monopolies, reserved strategic sectors and targeted Chinese wealth." },
        {
          row: [
            { id: "th1-monopolies", type: "policy", t: "State monopolies", d: "Brewing, paper, sugar refining, gunny sacks.", cards: ["ec-th-phibun"] },
            {
              id: "th1-reserved",
              type: "policy",
              t: "Reserved strategic sectors",
              d: "Airlines (Communications), petroleum refineries and electricity (Industry), banks (Finance Ministry).",
              cards: ["ec-th-phibun"]
            },
            {
              id: "th1-antichinese",
              type: "policy",
              t: "Anti-Chinese economic nationalism",
              date: "1952",
              d: "1952 directive forced Chinese into centralised associations (gold, jewellery, banking) to control and tap their wealth.",
              ev: ["Pressure to assimilate; Western firms such as Shell Oil threatened with closure, government competition or non-renewable contracts (Hewison).", "Some petty trading and services reserved for Thai nationals."],
              cards: ["ec-th-anti-chinese"]
            }
          ]
        }
      ]
    },
    {
      title: "Private sector resilience",
      link: "followed by",
      how: "Yet in practice most state monopolies were joint ventures with influential Chinese businessmen.",
      summary: "Chinese capital survived and allied with the military.",
      steps: [
        {
          id: "th1-jv",
          type: "consequence",
          sign: "+",
          t: "Monopolies were joint ventures",
          d: "Most state monopolies were JOINT VENTURES with influential Chinese; the Sophonphanich family (Bangkok Bank) expanded rapidly despite nationalism.",
          cards: ["ec-th-anti-chinese", "ec-th-chinese"]
        },
        { link: "enabled", how: "The capital-short post-war military needed Chinese money, so it re-allied with Chinese businessmen." },
        {
          id: "th1-alliance",
          type: "event",
          t: "Chinese–coup group alliance",
          date: "mid-1950s",
          d: "Major Thai-Chinese groups from 1930s rice trade and banking forged alliances with the 1947 coup group.",
          cards: ["ec-th-anti-chinese", "ec-th-chinese"]
        },
        { link: "led to", how: "Allied with the rulers, private business kept its place instead of being replaced." },
        {
          id: "th1-verdict",
          type: "judgement",
          t: "State did not replace business",
          d: "Economic nationalism did NOT replace private business with the state; private capital survived and even grew.",
          cards: ["ec-th-anti-chinese"]
        }
      ]
    },
    {
      title: "Why coups didn't derail growth",
      link: "followed by",
      how: "Political instability recurred, but it did not turn into economic uncertainty.",
      summary: "Shared market commitment and the monarchy kept stability.",
      steps: [
        {
          row: [
            {
              id: "th1-market-consensus",
              type: "long_term_cause",
              t: "Shared market-economy commitment",
              d: "Overthrown governments AND coup leaders generally shared the same commitment to a market economy.",
              cards: ["ec-th-overview"]
            },
            {
              id: "th1-monarchy",
              type: "long_term_cause",
              t: "Balancing monarchy",
              d: "The monarchy, a traditional institution, balanced different groups and kept national conflict low.",
              cards: ["ec-th-overview"]
            }
          ]
        },
        { link: "prevented", how: "Because every faction backed markets and the monarchy limited conflict, coups did not unsettle economic policy." },
        {
          id: "th1-stability",
          type: "consequence",
          sign: "+",
          t: "Instability without economic uncertainty",
          d: "Political instability did not translate into economic uncertainty, so growth continued through coups.",
          cards: ["ec-th-overview"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which factor did most to let Thai private capital survive before 1957? Rank them.",
    factors: ["th1-colonised", "th1-chinese-class", "th1-jv", "th1-alliance", "th1-market-consensus"],
    notes_view: "The notes root Thailand's distinctiveness in never being colonised: an autonomous Chinese commerce class acted as a societal check, so the state never overwhelmed private capital."
  },
  historians: [
    {
      who: "Hewison",
      view: "Phibun's was 'haphazard state-led development': no coherent ISI plan, but it kick-started industrialisation.",
      nodes: ["th1-phibun"]
    },
    {
      who: "Pasuk & Baker",
      view: "1929 survey shows an extensive commercial economy; the state started many enterprises 1930s–40s.",
      nodes: ["th1-commercial", "th1-soes"]
    }
  ],
  takeaways: ["Never being colonised gave Thailand an autonomous Chinese bourgeoisie, the root of its later private-sector-led success.", "Phibun's state-led phase was 'haphazard' (Hewison): state enterprises were often joint ventures, so private capital survived and even grew.", "Coups did not derail growth because rival elites shared a market-economy commitment and the monarchy balanced groups."]
});
L.push({
  id: "ec-flow-thailand-2",
  order: 61,
  level: 3,
  parent: "ec-country-th",
  kind: "evaluation",
  title: "Sarit and kanphatthana, 1957–1977",
  question: "Why did Sarit shift the state's role in 1957, and how successful was kanphatthana?",
  intro: "Sarit switched the state from owner to enabler, backed by US Cold War aid. Growth and industrialisation followed, but so did cronyism and rising protection.",
  clusters: [
    {
      title: "Why Sarit changed course",
      summary: "International drivers and technocrats pushed a private-capital model.",
      steps: [
        {
          row: [
            {
              id: "th2-us",
              type: "long_term_cause",
              t: "US anti-communism",
              date: "from 1950",
              d: "Thailand was a domino to stabilise and a base for Vietnam War operations; the US favoured a private-capital economy.",
              ev: ["The US believed a private-capital-based economy was the best stabilising formula."],
              cards: ["ec-th-sarit"]
            },
            {
              id: "th2-wb",
              type: "short_term_cause",
              t: "World Bank IBRD report",
              date: "1959",
              d: "Recommended long-term planning, manufacturing via private initiative, and ISI via infrastructure and credit support.",
              cards: ["ec-th-sarit"]
            },
            {
              id: "th2-technocrats",
              type: "actor",
              t: "Sarit's technocrats",
              d: "Sarit appointed technocrats and was personally frugal and hardworking to set an example.",
              cards: ["ec-th-sarit"]
            }
          ]
        },
        {
          link: "led to",
          how: "External pressure and technocratic advice pushed the state toward promoting private and foreign investment rather than owning firms."
        },
        {
          id: "th2-shift",
          type: "turning_point",
          t: "State becomes enabler",
          date: "1957",
          d: "Decisive change to an INDIRECT role: promote private sector and foreign investment, not state-led growth.",
          ev: ["State focus: infrastructure, administration and planning machinery to enable long-term private and foreign investment expansion."],
          cards: ["ec-th-sarit"]
        }
      ]
    },
    {
      title: "Agriculture, aid and investment",
      link: "led to",
      how: "The enabling state built on comparative advantage in agriculture and welcomed aid and investment.",
      summary: "Farm expansion and Cold War money, yet domestic capital dominated.",
      steps: [
        {
          row: [
            {
              id: "th2-agri",
              type: "policy",
              t: "Agriculture: comparative advantage",
              d: "Irrigated land grew from 600,000 ha (1947) to 2.2m ha (1969) (Tarling).",
              ev: ["By 1968 export value of other crops (maize, kenaf, cassava) passed rice for the first time.", "Agricultural holdings nearly doubled 1950–80, to ~22m ha, as virgin land opened up."],
              cards: ["ec-th-agri"]
            },
            {
              id: "th2-aid",
              type: "policy",
              t: "US aid, Japanese ventures",
              date: "1951–69",
              d: "Over $900m in US aid and loans; Japanese joint ventures invited into agriculture and industry.",
              cards: ["ec-th-aid"]
            },
            {
              id: "th2-vietnam",
              type: "event",
              t: "Vietnam War windfall",
              date: "1950–75",
              d: "$650m economic aid, $1bn regular military aid, $1bn military operating and base costs.",
              ev: ["American servicemen on R&R boosted domestic demand."],
              cards: ["ec-th-aid"]
            }
          ]
        },
        { link: "followed by", how: "Despite large foreign inflows, domestic capital still dominated capital formation." },
        {
          id: "th2-domestic",
          type: "consequence",
          sign: "+",
          t: "Domestic capital stayed dominant",
          date: "1964–72",
          d: "KEY CONTRAST with Indonesia and Philippines: foreign capital only 12% of capital formation 1964–72.",
          ev: ["1979 survey of the 500 largest firms: 308 were fully Thai-owned (Pasuk & Baker)."],
          cards: ["ec-th-aid"]
        }
      ]
    },
    {
      title: "Institutions of the enabling state",
      link: "enabled",
      how: "New laws and bodies supplied the guarantees, credit and planning that private and foreign investors needed.",
      summary: "Investment law, BoI, IFCT and NESDB.",
      steps: [
        {
          split: [
            {
              steps: [
                {
                  id: "th2-pia",
                  type: "policy",
                  t: "Promotion of Investment Act",
                  date: "1960",
                  d: "Amended 1977. Guaranteed against nationalisation; tax holidays; conditional profit repatriation.",
                  cards: ["ec-th-institutions"]
                }
              ]
            },
            {
              steps: [
                { id: "th2-boi", type: "policy", t: "Board of Investment", date: "1959", d: "BoI oversaw investment promotion.", cards: ["ec-th-institutions"] }
              ]
            },
            {
              steps: [
                {
                  id: "th2-ifct",
                  type: "policy",
                  t: "IFCT",
                  date: "1959",
                  d: "Industrial Finance Corporation; dominated by directors from Lamsam/Sophonpanich-linked banks.",
                  cards: ["ec-th-institutions"]
                },
                { link: "led to", how: "Bank-linked directors steered finance to their own circle." },
                {
                  id: "th2-favour",
                  type: "consequence",
                  sign: "-",
                  t: "Favoured powerful bourgeoisie",
                  d: "Favoured powerful bourgeoisie fractions over small capitalists.",
                  cards: ["ec-th-institutions"]
                }
              ]
            },
            {
              steps: [
                {
                  id: "th2-nesdb",
                  type: "policy",
                  t: "NESDB",
                  date: "1959",
                  d: "Planning body producing National Economic & Social Development Plans; the 4th (1977–81) marked the ISI→EOI switch.",
                  cards: ["ec-th-institutions"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Gains",
      link: "led to",
      how: "Promoted private and foreign investment drove structural change and broader development.",
      summary: "Investment, manufactured exports and legitimacy rose.",
      steps: [
        {
          row: [
            {
              id: "th2-exports",
              type: "consequence",
              sign: "+",
              t: "Investment and exports up",
              date: "1960–80",
              d: "Foreign investment 1960–80: 6 million baht. Manufactured exports rose from 1.2% (1960) to 32.3% (1980) of total.",
              cards: ["ec-th-sarit-eval"]
            },
            {
              id: "th2-industry",
              type: "consequence",
              sign: "+",
              t: "Industry overtakes agriculture",
              date: "by 1971",
              d: "Manufacturing/industry overtook agriculture's GDP share by 1971: agriculture 29.8%, industry 25.7%, manufacturing 17.5%.",
              ev: ["Structure of Thai GDP, Agri/Manuf/Industry % (Hewison; Lim): 1951 50.1/10.3/–; 1960 39.8/12.5/19.0; 1971 29.8/17.5/25.7; 1980 24.9/20.7/30.1; 1990 12.7/27.2/37.2; 1993 10.0/28.5/–."],
              cards: ["ec-th-gdp"]
            },
            {
              id: "th2-legitimacy",
              type: "consequence",
              sign: "+",
              t: "Kanphatthana legitimacy",
              d: "Development ideology tied to national unity and legitimacy; infrastructure raised living standards beyond Bangkok.",
              cards: ["ec-th-sarit-eval"]
            }
          ]
        }
      ]
    },
    {
      title: "Costs and verdict",
      link: "followed by",
      how: "But gains were concentrated: state promotion also bred crony capitalism and over-protection.",
      summary: "Cronyism and rising protection seeded later inefficiency.",
      steps: [
        {
          row: [
            {
              id: "th2-families",
              type: "consequence",
              sign: "-",
              t: "15–20 families benefited",
              d: "Mostly Sino-Thai. Bangkok Bank alone was 1/3 of banking and financed 42% of Thai exports.",
              cards: ["ec-th-sarit-eval"]
            },
            {
              id: "th2-rulers",
              type: "consequence",
              sign: "-",
              t: "Rulers in business",
              date: "by 1973",
              d: "Sarit held stakes in many firms; Thanom, Praphas and Narong were involved in 137 firms by 1973.",
              cards: ["ec-th-sarit-eval"]
            },
            {
              id: "th2-protection",
              type: "consequence",
              sign: "-",
              t: "Protection doubled",
              date: "1970s",
              d: "Average protection level (tariffs, licenses) more than doubled in the 1970s.",
              cards: ["ec-th-sarit-eval"]
            }
          ]
        },
        { link: "led to", how: "Weighing structural change against concentrated gains and higher protection gives a mixed verdict." },
        {
          id: "th2-verdict",
          type: "judgement",
          t: "Growth with cronyism",
          d: "Sarit's indirect, private-sector model delivered structural change but concentrated gains in a Sino-Thai elite and raised protection.",
          ev: ["Seeds of later inefficiency. Sarit's model was systematic intervention that encouraged private enterprise."],
          cards: ["ec-th-sarit-eval"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which driver mattered most for Sarit's shift to an enabling state? Rank them.",
    factors: ["th2-us", "th2-wb", "th2-technocrats", "th2-aid", "th2-vietnam"],
    notes_view: ""
  },
  historians: [
    { who: "Pasuk & Baker", view: "Domestic capital dominated: 308 of the 500 largest firms fully Thai-owned in 1979.", nodes: ["th2-domestic"] },
    { who: "Tarling", view: "Irrigated land rose from 600,000 ha (1947) to 2.2m ha (1969).", nodes: ["th2-agri"] },
    { who: "Hewison", view: "GDP structure data show industry overtaking agriculture by 1971.", nodes: ["th2-industry"] }
  ],
  takeaways: ["International drivers (US Cold War aid, World Bank 1959) pushed Thailand toward a private-capital model: external factors shaped strategy.", "Unlike Indonesia/Philippines, domestic capital stayed dominant (foreign capital only 12% of capital formation 1964–72).", "Sarit's model was systematic intervention that encouraged private enterprise, but it bred crony capitalism and over-protection."]
});
L.push({
  id: "ec-flow-thailand-3",
  order: 62,
  level: 3,
  parent: "ec-country-th",
  kind: "causal",
  title: "Thailand's switch to EOI: the pressures",
  question: "Why did Thailand switch from ISI to EOI after 1977?",
  intro: "External shocks, political chaos and a widening income gap forced the 4th Plan's switch; 1980s debt then pushed the state into export incentives that drew FDI.",
  clusters: [
    {
      title: "Pressures forcing the switch",
      summary: "Three separate pressures made ISI unsustainable in the 1970s.",
      steps: [
        {
          split: [
            {
              h: "External",
              steps: [
                {
                  row: [
                    { id: "th3-oil", type: "short_term_cause", t: "1970s oil shocks", date: "1970s", d: "Oil price shocks hit the economy.", cards: ["thaieoi"] },
                    { id: "th3-us", type: "short_term_cause", t: "US withdraws from region", date: "1970s", d: "The US withdrew from the region.", cards: ["thaieoi"] }
                  ]
                },
                { link: "led to", how: "Oil shocks plus US withdrawal ended the regular aid Thailand had relied on." },
                { id: "th3-aid", type: "consequence", sign: "-", t: "Regular aid ends", d: "Thailand lost its regular US aid.", cards: ["thaieoi"] }
              ]
            },
            {
              h: "Political",
              steps: [
                { id: "th3-chaos", type: "short_term_cause", t: "Political chaos", date: "1973–76", d: "Three years of political chaos.", cards: ["thaieoi"] },
                { link: "led to", how: "Instability frightened investors, who moved capital out of Thailand." },
                { id: "th3-flight", type: "consequence", sign: "-", t: "Capital flight", d: "Capital left Thailand.", cards: ["thaieoi"] }
              ]
            },
            {
              h: "Social",
              steps: [
                { id: "th3-bkk", type: "long_term_cause", t: "Jobs concentrated around Bangkok", d: "Manufacturing jobs clustered around Bangkok.", cards: ["thaieoi"] },
                { link: "led to", how: "Industrial jobs stayed in the capital, so rural incomes fell behind." },
                { id: "th3-gap", type: "consequence", sign: "-", t: "Urban–rural gap widens", d: "The urban–rural income gap widened.", cards: ["thaieoi"] }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "The 4th Plan switch",
      link: "led to",
      how: "These pressures forced a new plan that ended ISI promotion and aimed at growth AND equity.",
      summary: "The plan split into a growth measure and an equity measure.",
      steps: [
        {
          id: "th3-plan4",
          type: "policy",
          t: "4th NESD Plan",
          date: "1977–81",
          d: "4th National Economic & Social Development Plan, aiming at growth AND equity.",
          cards: ["thaieoi", "ec-th-institutions"]
        },
        { link: "led to", how: "The plan set one measure for each aim: exports for growth, decentralisation for equity." },
        {
          row: [
            {
              id: "th3-eoi",
              type: "policy",
              t: "ISI ended, EOI promoted",
              date: "1977–81",
              d: "Ended ISI promotion and began EOI promotion (the growth aim).",
              cards: ["thaieoi", "ec-th-institutions"]
            },
            {
              id: "th3-decent",
              type: "policy",
              t: "Industry decentralised",
              date: "1977–81",
              d: "Decentralisation of industry away from Bangkok (the equity aim).",
              cards: ["thaieoi"]
            }
          ]
        }
      ]
    },
    {
      title: "1980s downturn and debt",
      link: "followed by",
      how: "In the 1980s two new shocks hit the economy and drove up foreign debt.",
      summary: "Two shocks pushed debt near the IMF danger point.",
      steps: [
        {
          row: [
            {
              id: "th3-agri",
              type: "short_term_cause",
              t: "Agri commodity prices fall",
              date: "1980s",
              d: "Falling agricultural commodity prices.",
              cards: ["thaieoi"]
            },
            { id: "th3-oil2", type: "short_term_cause", t: "2nd oil crisis", date: "1980s", d: "The second oil crisis.", cards: ["thaieoi"] }
          ]
        },
        { link: "led to", how: "Lower export earnings and dearer oil were covered by foreign borrowing." },
        {
          id: "th3-debt",
          type: "consequence",
          sign: "-",
          t: "External debt soars",
          date: "1973–86",
          d: "External debt rose from 0% to 38% of GDP (1973–86).",
          ev: ["Debt service ratio 19.7% in the mid-1980s, near the IMF's 20% danger point."],
          cards: ["thaieoi"]
        }
      ]
    },
    {
      title: "Export promotion",
      link: "provoked response",
      how: "With debt near the danger point, the state promoted foreign joint ventures and export incentives.",
      summary: "Four incentives drew foreign investment.",
      steps: [
        {
          row: [
            {
              id: "th3-jv",
              type: "policy",
              t: "BoI joint ventures",
              d: "BoI kept promoting joint ventures, mostly Japanese/American, e.g. Siam Motors (autos), Saha Union (textiles).",
              cards: ["ec-th-eoi-policies"]
            },
            { id: "th3-tax", type: "policy", t: "Export taxes abolished", date: "1985", d: "Several export taxes abolished.", cards: ["ec-th-eoi-policies"] },
            {
              id: "th3-credit",
              type: "policy",
              t: "Exporter credit",
              date: "1985",
              d: "Bank of Thailand created special exporter credit facilities.",
              cards: ["ec-th-eoi-policies"]
            },
            {
              id: "th3-own",
              type: "policy",
              t: "100% foreign ownership",
              date: "1985",
              d: "Allowed if firms exported all or most of their output.",
              cards: ["ec-th-eoi-policies"]
            }
          ]
        },
        { link: "led to", how: "Incentives and ownership rights attracted foreign firms into Thai manufacturing." },
        {
          id: "th3-fdi",
          type: "consequence",
          sign: "+",
          t: "FDI inflows surge",
          date: "1986–98",
          d: "Avg US$900m/yr (1986–89), US$2bn/yr (1990–96), US$5.1bn (1998) as foreign firms bought distressed Thai firms.",
          ev: ["1970–95 FDI sources: Japan 30%, US 17%, Hong Kong 16.3%, EU 10.6%, Singapore 10.4%, Taiwan 6%; 37.2% of FDI went into manufacturing."],
          cards: ["ec-th-eoi-policies"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which pressure did most to force Thailand's switch to EOI? Rank them.",
    factors: ["th3-aid", "th3-flight", "th3-gap", "th3-debt"],
    notes_view: ""
  },
  historians: [],
  takeaways: ["The switch to EOI was forced by external shocks (oil, US withdrawal), political chaos and a widening income gap, formalised in the 4th Plan (1977–81).", "The 4th Plan aimed at growth (EOI promotion) AND equity (decentralising industry).", "1980s debt (0% → 38% of GDP) provoked 1985 export incentives that drew FDI."]
});
L.push({
  id: "ec-flow-thailand-3b",
  order: 62.5,
  level: 3,
  parent: "ec-country-th",
  kind: "causal",
  title: "Why Thai EOI succeeded: baht, Plaza, state",
  question: "Why did EOI succeed in Thailand?",
  intro: "A low baht peg kept exports cheap; the strong dollar forced a basket peg; the Plaza Accord made exports cheaper still; the state stepped back as private exporters boomed.",
  clusters: [
    {
      title: "How the peg works",
      summary: "A pegged baht sets the dollar price of Thai goods.",
      steps: [
        {
          id: "th3-peg",
          type: "policy",
          t: "Low fixed baht peg",
          d: "Baht pegged at a fixed LOW rate to USD: fixed = stability; low = cheap, competitive exports.",
          ev: ["Example: a Thai good priced at 100 baht costs a US buyer US$4 at US$1 = 25 baht."],
          cards: ["ec-th-peg"]
        },
        { link: "enabled", how: "Under a peg, exchange-rate moves directly changed the dollar price US buyers paid for Thai goods." },
        {
          split: [
            {
              h: "Baht depreciates",
              steps: [
                { id: "th3-dep", type: "event", t: "US$1 = 50 baht", d: "The baht depreciates.", cards: ["ec-th-peg"] },
                { link: "led to", how: "The same 100-baht good now costs a US buyer only US$2." },
                { id: "th3-dep2", type: "evidence", t: "US buyer pays US$2", d: "Cheaper for US buyers, so they buy more.", cards: ["ec-th-peg"] },
                { link: "led to", how: "More sales at the same baht price raise total export earnings." },
                { id: "th3-dep3", type: "consequence", sign: "+", t: "Export revenue rises", d: "Thai export revenue RISES.", cards: ["ec-th-peg"] }
              ]
            },
            {
              h: "Baht appreciates",
              steps: [
                { id: "th3-app", type: "event", t: "US$1 = 10 baht", d: "The baht appreciates.", cards: ["ec-th-peg"] },
                { link: "led to", how: "The same 100-baht good now costs a US buyer US$10." },
                { id: "th3-app2", type: "evidence", t: "US buyer pays US$10", d: "Dearer for US buyers, so they buy less.", cards: ["ec-th-peg"] },
                { link: "led to", how: "Fewer sales cut total export earnings." },
                { id: "th3-app3", type: "consequence", sign: "-", t: "Export revenue falls", d: "Thai export revenue FALLS.", cards: ["ec-th-peg"] }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Strong dollar, 1978–85",
      link: "followed by",
      how: "In 1978–85 the appreciation case happened, as the pegged baht rose with the dollar.",
      summary: "A rising dollar dragged the baht up and forced a new peg.",
      steps: [
        { id: "th3-usd", type: "event", t: "USD appreciates", date: "1978–85", d: "The US dollar rose in value.", cards: ["ec-th-peg"] },
        { link: "led to", how: "Because the baht was pegged to the dollar, it rose too." },
        { id: "th3-bahtup", type: "event", t: "Pegged baht appreciates", date: "1978–85", d: "The baht rose with the dollar.", cards: ["ec-th-peg"] },
        { link: "led to", how: "A dearer baht raised the dollar price of Thai goods." },
        {
          id: "th3-dearer",
          type: "consequence",
          sign: "-",
          t: "Thai exports dearer",
          date: "1978–85",
          d: "Thai exports became more expensive.",
          cards: ["ec-th-peg"]
        },
        { link: "provoked response", how: "Dearer exports forced the government to cut the baht and loosen its tie to the dollar." },
        {
          row: [
            { id: "th3-deval", type: "policy", t: "1981 devaluation", date: "1981", d: "The baht was devalued.", cards: ["ec-th-peg"] },
            {
              id: "th3-basket",
              type: "policy",
              t: "Currency basket peg",
              date: "1984",
              d: "Switched to a currency BASKET peg: less dependence on one currency's fluctuations, a more stable average.",
              cards: ["ec-th-peg"]
            }
          ]
        }
      ]
    },
    {
      title: "Plaza Accord boom",
      link: "followed by",
      how: "The Plaza Accord then deliberately devalued the dollar, reversing the problem.",
      summary: "A cheaper dollar made Thai exports cheap and drew firms in.",
      steps: [
        {
          id: "th3-plaza",
          type: "turning_point",
          t: "Plaza Accord",
          date: "1985",
          d: "France, W. Germany, Japan, UK and US deliberately devalued the USD to help US exports and fix the US–Japan trade imbalance.",
          cards: ["ec-th-plaza"]
        },
        { link: "led to", how: "The baht, still tied mainly to the dollar, fell with it." },
        {
          id: "th3-bahtdown",
          type: "event",
          t: "Baht depreciates too",
          date: "mid/late 1980s",
          d: "The baht depreciated along with the USD.",
          cards: ["ec-th-plaza"]
        },
        { link: "led to", how: "A weaker baht cut the price of Thai goods in Japan." },
        { id: "th3-cheap", type: "consequence", sign: "+", t: "Exports to Japan cheap", d: "Thai exports to Japan became cheap.", cards: ["ec-th-plaza"] },
        { link: "led to", how: "Cheap exports brought a boom, and firms moved to Thailand for lower costs." },
        {
          row: [
            { id: "th3-boom", type: "consequence", sign: "+", t: "Economic boom", date: "mid/late 1980s", d: "Thailand's economy boomed.", cards: ["ec-th-plaza"] },
            {
              id: "th3-reloc",
              type: "consequence",
              sign: "+",
              t: "Firms relocate to Thailand",
              d: "Firms moved from Japan, Taiwan and Hong Kong to Thailand for lower costs.",
              cards: ["ec-th-plaza"]
            }
          ]
        },
        { link: "followed by", how: "Later the government tied the basket more closely to the dollar to keep gaining from its fall." },
        {
          id: "th3-usd90",
          type: "policy",
          t: "USD weighting back to 90%",
          d: "Government raised the USD weighting in its basket back to 90% to capture USD depreciation benefits.",
          cards: ["ec-th-plaza"]
        }
      ]
    },
    {
      title: "Scaling down the state",
      link: "followed by",
      how: "As private exporters boomed, the state redefined itself as facilitator and withdrew.",
      summary: "The 6th Plan made the state a facilitator.",
      steps: [
        {
          id: "th3-plan6",
          type: "policy",
          t: "6th Plan: state as facilitator",
          date: "1987",
          d: "Public sector to be 'planner, supporter and facilitator', withdrawing from what the private sector does better (Pasuk & Baker).",
          cards: ["ec-th-scaling"]
        },
        { link: "followed by", how: "The next year the planning board lost its supervisory role over big state projects." },
        {
          id: "th3-nesdb88",
          type: "policy",
          t: "NESDB supervision removed",
          date: "1988",
          d: "NESDB relieved of supervising all major government investment projects.",
          cards: ["ec-th-scaling"]
        }
      ]
    },
    {
      title: "Success of EOI",
      link: "led to",
      how: "Cheap exports, FDI and a private class filling the state's place produced rapid industrial growth.",
      summary: "Fastest export growth among capitalist SEA economies.",
      steps: [
        {
          row: [
            {
              id: "th3-success",
              type: "consequence",
              sign: "+",
              t: "Manufacturing and export boom",
              date: "1980–90",
              d: "Sharpest rise in manufacture/industry GDP share; export growth 14% in the 1980s, highest among capitalist SEA economies.",
              ev: ["Manufacturing share of GDP: 16.4% (1952) → 33.9% (2000).", "Morley: Thai export growth 10.3% (1970–80), 14.0% (1980–90), 18.6% (1990–95); primary exports 76.2% (1975) → 26.9% (1994).", "Comparison of primary exports 1975 → 1994: Indonesia 97.6 → 47.0, Malaysia 68.6 → 24.6."],
              cards: ["ec-th-eoi-success", "ec-morley-exports"]
            },
            {
              id: "th3-structure",
              type: "consequence",
              sign: "+",
              t: "Structural transformation",
              date: "by 2000",
              d: "By 2000 agriculture 10.9%, manufacturing 33.9%, services 39.7% of GDP.",
              ev: ["Mid-1980s agriculture was still ~25% of GDP, 75% of workforce, >60% of export value.", "Thai firms expanded overseas, e.g. Thaksin's Shin Corp into Indochina, Indonesia, India."],
              cards: ["ec-th-eoi-success"]
            }
          ]
        },
        { link: "supports", how: "The boom shows that pressure forced the switch but private capital and currency moves made it work." },
        {
          id: "th3-verdict",
          type: "judgement",
          t: "Shocks plus private class",
          d: "Pressure forced the switch, but a ready private business class and favourable currency movements made EOI succeed.",
          cards: ["ec-th-govt"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which factor mattered most for the success of Thai EOI? Rank them.",
    factors: ["th3-peg", "th3-basket", "th3-plaza", "th3-reloc", "th3-plan6"],
    notes_view: "The notes credit a resilient Chinese private sector, domestic capital dominance, currency peg management and a state that genuinely scaled back; only Thailand and Malaysia made a sustained EOI transition."
  },
  historians: [
    { who: "Pasuk & Baker", view: "The 6th Plan (1987) recast the state as planner, supporter and facilitator of private enterprise.", nodes: ["th3-plan6"] },
    { who: "Morley", view: "Thai export growth was 14.0% in the 1980s; primary exports fell to 26.9% by 1994.", nodes: ["th3-success"] }
  ],
  takeaways: ["Currency policy mattered: the low baht peg, basket peg (1984) and Plaza Accord (1985) made Thai exports cheap and drew relocating Japanese/East Asian firms.", "The state could scale back (6th Plan 1987) because private capital was ready to fill the gap."]
});
L.push({
  id: "ec-flow-thailand-4",
  order: 63,
  level: 3,
  parent: "ec-country-th",
  kind: "evaluation",
  title: "Evaluating Thailand: success, limits and the road to 1997",
  question: "How successful was Thailand's economic development, and why was it vulnerable by 1997?",
  intro: "Thailand industrialised rapidly, but growth bred inequality, concentrated wealth, over-protection and poorly regulated liberalisation that set up 1997. The Chinese business class was the distinctive factor.",
  clusters: [
    {
      title: "Quantitative success",
      summary: "Textbook industrialisation and export diversification.",
      steps: [
        {
          row: [
            {
              id: "th4-exports",
              type: "consequence",
              sign: "+",
              t: "Exports transformed and diversified",
              date: "1985–2000",
              d: "Exports shifted from rice, vegetables/roots, rubber (1985) to office machines, semiconductors, telecoms (2000): textbook industrialisation.",
              ev: ["Top-3 exports fell from 28.7% to 23.3% of total exports = diversification."],
              cards: ["ec-th-eoi-success"]
            },
            {
              id: "th4-industry",
              type: "consequence",
              sign: "+",
              t: "Industry overtook agriculture",
              date: "1970–90",
              d: "Agriculture fell from 29.8% to 12.7% and industry rose from 25.7% to 37.2% of GDP.",
              cards: ["ec-th-gdp"]
            }
          ]
        }
      ]
    },
    {
      title: "Inequality and concentration",
      link: "followed by",
      how: "But growth did not bring equity: gains concentrated in Bangkok and Sino-Thai groups.",
      summary: "Growth without equity.",
      steps: [
        {
          row: [
            {
              id: "th4-gini",
              type: "consequence",
              sign: "-",
              t: "Rising income inequality",
              date: "1965–2000",
              d: "Gini 0.41 (1965) → 0.52 (2000): growth ≠ equity. Poverty fell 88.3% → 9.8% (1962–2002), but rural rate stayed ~4x urban.",
              cards: ["ec-th-inequality"]
            },
            {
              id: "th4-regional",
              type: "consequence",
              sign: "-",
              t: "Bangkok versus the Northeast",
              d: "Bangkok: 16% of population, 48.2% (1989) → 55.4% (1993) of GDP; Northeast 34%+ of population, ~11% of GDP.",
              cards: ["ec-th-inequality"]
            },
            {
              id: "th4-wealth",
              type: "consequence",
              sign: "-",
              t: "Concentration of wealth",
              date: "mid-1980s",
              d: "Virtually all largest firms were Sino-Thai 'groups of companies'; only 3 of 70+ leading groups non-Chinese (one: Crown Property Bureau).",
              cards: ["ec-th-inequality"]
            }
          ]
        }
      ]
    },
    {
      title: "Over-protection and lost competitiveness",
      link: "followed by",
      how: "Long protection also left industry inefficient and uncompetitive.",
      summary: "No upgrading; competitiveness caught up in 1996.",
      steps: [
        {
          id: "th4-protection",
          type: "long_term_cause",
          t: "Over-protection without upgrading",
          date: "1985",
          d: "1985 effective protection for manufacturing 52%, nearly double Philippines/Malaysia; no tech upgrading (electronics institute only mooted 1997).",
          ev: ["Real wages rose 70% in the mid-1990s, eroding competitiveness: export growth fell from 28% to 0%."],
          cards: ["ec-th-protection"]
        },
        { link: "led to", how: "Protected firms stayed low-tech and high-cost in key industries." },
        {
          row: [
            {
              id: "th4-autos",
              type: "evidence",
              t: "Autos",
              d: "Protected since the 1970s, yet local firms stuck in low-tech components; OEM sector dominated by Japanese affiliates.",
              cards: ["ec-th-protection"]
            },
            {
              id: "th4-textiles",
              type: "evidence",
              t: "Textiles",
              d: "Upstream/midstream ISI firms: high costs, old machinery, low-quality cloth unusable by export garment makers; value-added lost to foreigners.",
              cards: ["ec-th-protection"]
            }
          ]
        },
        { link: "supports", how: "These sector cases support the view that failure to upgrade eroded Thai competitiveness." },
        {
          id: "th4-doner",
          type: "interpretation",
          t: "Upgrading failure caught up",
          date: "1996",
          d: "Doner & Ramsay: “Thailand's lack of industrial upgrading began to catch up with it in 1996.”",
          cards: ["ec-th-protection"]
        }
      ]
    },
    {
      title: "Road to the 1997 AFC",
      link: "followed by",
      how: "Meanwhile finance was liberalised faster than regulation could keep up.",
      summary: "Liberalisation, cronyism and short-term debt made Thailand the epicentre.",
      steps: [
        {
          row: [
            {
              id: "th4-liberal",
              type: "policy",
              t: "Liberalisation without regulation",
              date: "1990–93",
              d: "1990: IMF Article VIII, forex controls removed. 1993: BIBF, a “conduit for short-term foreign lending” (Akyuz).",
              ev: ["42 BIBF licenses were granted, facilitating a domestic lending boom."],
              cards: ["afcthai"]
            },
            {
              id: "th4-debt",
              type: "long_term_cause",
              t: "Debt, deficits, weak oversight",
              d: "External debt 16.6% → 51.3% of GNP by 2004; current account deficit 7.9% of GDP in 1996, a clear unsustainability signal.",
              ev: ["Weak financial oversight: banks could carry bad debt for 12 months without reporting to the central bank."],
              cards: ["afcthai"]
            },
            {
              id: "th4-bbc",
              type: "evidence",
              t: "Bangkok Bank of Commerce",
              date: "1996",
              d: "Loans funnelled into stock speculation and politicians (incl. via Rakesh Saxena, linked to the 'Group of 16'); collapsed 1996.",
              ev: ["The Bank of Thailand spent 120 billion baht on the bailout."],
              cards: ["afcthai"]
            }
          ],
          links: [
            { how: "BIBF licenses fuelled a lending boom funded by short-term foreign borrowing.", from: "th4-liberal", to: "th4-debt", label: "intensified" }
          ]
        },
        { link: "led to", how: "Mostly short-term foreign debt left Thailand acutely vulnerable to currency speculation once confidence broke." },
        {
          id: "th4-afc",
          type: "consequence",
          sign: "-",
          t: "Epicentre of the AFC",
          date: "1997",
          d: "Foreign bank debt US$29bn (1993) → US$69bn (mid-1997), 70% SHORT-TERM; Thailand became the crisis epicentre.",
          cards: ["afcthai", "ec-cl-afc-synthesis"]
        }
      ]
    },
    {
      title: "Role of the government",
      link: "followed by",
      how: "Overall, the nature of state intervention changed across regimes while private capital stayed central.",
      summary: "The market compensated for government failures.",
      steps: [
        {
          split: [
            {
              h: "Phibun",
              steps: [
                { id: "th4-phibun", type: "policy", t: "State-led", d: "Semi-government monopolies; haphazard state-led development.", cards: ["ec-th-phibun"] }
              ]
            },
            {
              h: "Sarit",
              steps: [
                {
                  id: "th4-sarit",
                  type: "policy",
                  t: "Systematic intervention",
                  d: "Systematic intervention BUT encouraged private enterprise; the nature of intervention differed significantly between regimes.",
                  cards: ["ec-th-sarit"]
                }
              ]
            },
            {
              h: "1980s",
              steps: [
                {
                  id: "th4-scaled",
                  type: "policy",
                  t: "State scaled back",
                  d: "Scaled back under international and domestic pressure; enabled by a private class ready to fill the gap.",
                  cards: ["ec-th-scaling"]
                }
              ]
            }
          ]
        },
        { link: "supports", how: "Across regimes, private enterprise rather than state guidance carried growth." },
        {
          id: "th4-market",
          type: "judgement",
          t: "Market compensated for government",
          d: "“Rather than…the state guiding the market…a case where the market has compensated for government failures” (quoted in Hewison).",
          cards: ["ec-th-govt"]
        }
      ]
    },
    {
      title: "Role of the Chinese",
      link: "enabled",
      how: "The state could step back because a capable Chinese private class was ready to fill the gap.",
      summary: "From royal partners to rivals to dominant allies.",
      steps: [
        {
          id: "th4-royal",
          type: "context",
          t: "Royal partners, then rivals",
          date: "1890s–1932",
          d: "Patron-client ties with the monarchy built royal monopolies in railways, shipping, banking; 1932 Revolution brought xenophobia and strained relations.",
          ev: ["Examples: Siam Commercial Bank (1906), Siam Cement (1913)."],
          cards: ["ec-th-chinese"]
        },
        { link: "followed by", how: "Post-WWII, capital-short military governments re-allied with Chinese businessmen." },
        {
          id: "th4-dominant",
          type: "consequence",
          sign: "±",
          t: "Re-allied and dominant",
          date: "1980s",
          d: "Strong international links (Siam Motors/Pornprapha; Sahapathanapibul). 10% of population but 81% of listed-firm capitalisation.",
          ev: ["Highest ratio of dominance to population share in the region, alongside Singapore."],
          cards: ["ec-th-chinese"]
        },
        { link: "led to", how: "This autonomous, internationally skilled class took over from foreign firms post-war and from the state post-1985." },
        {
          id: "th4-main",
          type: "judgement",
          t: "Main distinction from SEA",
          d: "A resilient, autonomous, internationally-skilled private business community, rooted in never being colonised, replaced foreign firms (post-war) and the state (post-1985).",
          cards: ["ec-th-govt", "ec-th-independence"]
        }
      ]
    }
  ],
  judge: {
    prompt: "Which weakness did most to make Thailand the epicentre of the 1997 crisis? Rank them.",
    factors: ["th4-liberal", "th4-debt", "th4-bbc", "th4-protection", "th4-wealth"],
    notes_view: "The notes call debt, deficits and crony capitalism the seeds of 1997, and argue the same aggressive liberalisation and short-term borrowing that drove explosive growth made Thailand vulnerable."
  },
  historians: [
    { who: "Doner & Ramsay", view: "Thailand's lack of industrial upgrading began to catch up with it in 1996.", nodes: ["th4-doner"] },
    { who: "Akyuz", view: "The BIBF became a conduit for short-term foreign lending.", nodes: ["th4-liberal"] },
    { who: "Hewison", view: "Thailand is a case where the market compensated for government failures.", nodes: ["th4-market"] }
  ],
  takeaways: ["Thailand shows growth without equity: Gini 0.41 → 0.52, Bangkok's GDP share rising while the Northeast lagged.", "Crony capitalism, over-protection and liberalisation without regulatory capacity (BIBF, short-term debt) were the seeds of the 1997 AFC.", "Government role was secondary: 'the market compensated for government failures'; the Chinese private class was the decisive factor.", "Use Thailand to argue domestic private capital (not state or foreign capital) explains success relative to Indonesia/Philippines."]
});
})();
