// v2 flow charts: Singapore–Malaysia water dispute (from Water_Dispute_Study_Guide; cards in data/wd.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).wd = window.FLOWS2.wd || []);
// N(id, type, title, date, detail, cards, extra). A type ending in + − ± is a result with that sign.
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "wd-top", order: 1, level: 0, kind: "causal",
  title: "Water dispute: symptom or cause?",
  question: "Was the water dispute a symptom or a cause of changes in Singapore–Malaysia relations?",
  intro: "Legally guaranteed water became a flashpoint whenever other disputes arose, yet also a vehicle for cooperation. Tap a box with a stack edge to open its chart.",
  clusters: [
    { title: "The legal basis", summary: "Long-term agreements, guaranteed at Separation.",
      steps: [
        N("wd-t-agree", "ctx", "1961 and 1962 agreements", "1961–62", "Tebrau & Scudai (to 2011) and Johor River (to 2061); price review possible after 25 years.", ["water6162"], { go: "wd-agree" }),
        K("followed by", "At Separation the agreements were written into the 1965 Separation Agreement."),
        N("wd-t-sep", "tp", "Separation and its guarantee", "1965", "Bitter Merger ended in Separation; water guarantee put in the Malaysian Constitution and registered with the UN.", ["wd-sep-agreement", "wd-sep-legacy"], { go: "wd-sep" })
      ] },
    { link: "led to", how: "Separation left deep distrust and a Singapore dependent on Malaysian water.",
      title: "Why water became a dispute", summary: "Survival for Singapore; politics for Malaysia.",
      steps: [
        { row: [
          N("wd-t-sg", "ltc", "Singapore: water is survival", null, "Scarcity, WWII memory and sovereignty: the agreements' sanctity is non-negotiable.", ["wd-scarcity", "wd-sanctity"], { go: "wd-sg" }),
          N("wd-t-my", "ltc", "Malaysia: domestic politics", null, "Own water insecurity, 'cheap' sales optics, race and Mahathir's confrontational diplomacy.", ["wd-my-optics", "wd-mahathir"], { go: "wd-my" })
        ] }
      ] },
    { link: "led to", how: "Dependence made water a leverage point whenever other disputes arose.",
      title: "Water as flashpoint", summary: "Unrelated disputes kept dragging water in.",
      steps: [
        { row: [
          N("wd-t-herzog", "trig", "1986 Herzog visit", "Nov 1986", "Malaysia threatened, among other things, to cut off water.", ["herzog"], { go: "wd-herzog" }),
          N("wd-t-pedra", "stc", "Pedra Branca claim", "1979–2008", "Territorial dispute that soured relations; settled by the ICJ.", ["pedrabranca", "wd-pb-icj"], { go: "wd-pedra" }),
          N("wd-t-malindo", "stc", "Malindo exercise", "Aug 1991", "Simulated assault near Woodlands on National Day; Singapore put the SAF on alert.", ["malindo", "wd-defence"], { go: "wd-malindo" }),
          N("wd-t-afc", "trig", "Post-AFC disputes", "1997–98", "CIQ, CLOB, interest rates, CPF and RSAF airspace: one of the worst periods since Separation.", ["afcwater"], { go: "wd-afc" })
        ] }
      ] },
    { link: "provoked response", how: "Both sides also used water to de-escalate, and Singapore cut its dependence.",
      title: "Managing the dispute", summary: "Cooperation deals and self-sufficiency.",
      steps: [
        { row: [
          N("wd-t-funds", "pol", "Funds for water, the package", "1998–2000", "Loans for guaranteed supply, then all issues negotiated together.", ["wd-funds-water", "wd-package"], { go: "wd-funds" }),
          N("wd-t-self", "pol", "Self-sufficiency drive", "1963–2011", "Catchments, demand measures, desalination, NEWater and an attempt to buy Indonesian water.", ["wd-catchments", "newater"], { go: "wd-self" })
        ] }
      ] },
    { link: "followed by", how: "After 2000 the dispute resurfaced under Mahathir before subsiding.",
      title: "Verdict", summary: "Both symptom and cause.",
      steps: [
        N("wd-t-post", "ctx", "Resurfaces under Mahathir", "2001–2020", "Context only: price demands, the package collapses (2002), renewed renegotiation calls (2018).", ["wd-post2000-tl", "wd-2018"], { go: "wd-post" }),
        K("supports", "Escalation tracked Mahathir's terms and other disputes, while calm periods brought cooperation."),
        N("wd-t-verdict", "judg", "Both symptom and cause", null, "A symptom of Separation distrust, a cause of deterioration as a flashpoint, and a vehicle for cooperation.", ["wd-essay-synth", "wd-framing"], { go: "wd-arg" })
      ] }
  ],
  judge: { prompt: "What did most to make water a flashpoint in Singapore–Malaysia relations? Rank them.",
           factors: ["wd-t-sep", "wd-t-sg", "wd-t-my", "wd-t-afc"],
           notes_view: "Root cause: the Separation legacy plus Singapore's structural water dependence created a persistent flashpoint; Malaysian domestic politics drove periodic escalation." },
  historians: [],
  takeaways: [
    "Water is best understood as BOTH a symptom of, and a cause of, changes in bilateral relations.",
    "Flashpoint: water threats used as leverage in unrelated disputes (Herzog, post-AFC CLOB/CPF/CIQ/RSAF).",
    "Cooperation: 'funds for water' (1998) and the 'package'; self-sufficiency reduced Malaysia's leverage over time."
  ]
});

L.push({
  id: "wd-agree", order: 2, level: 1, parent: "wd-top", kind: "chain",
  title: "The water agreements, 1927–2000",
  question: "What did the water agreements provide, and why did the price become contentious?",
  intro: "From the 1927 Gunong Pulai scheme to the 2000 price request: how Singapore's supply from Johor was set, guaranteed and renegotiated.",
  clusters: [
    { title: "Early supply", summary: "Local catchments gave way to Johor water.",
      steps: [
        N("wd-a-catch", "ctx", "Local catchments", "to 1920s", "Thomson/MacRitchie, Pearl's Hill, Lower Pierce.", ["wd-background", "wd-1927"]),
        K("led to", "Rapid 1920s population growth outstripped local catchments, so the colonial government looked to Johor."),
        N("wd-a-1927", "pol", "Gunong Pulai agreement", "5 Dec 1927", "Singapore municipal commissioners and Sultan Ibrahim of Johor; 30 sen/acre rent, water otherwise free.", ["wd-1927", "wd-tl-early"]),
        K("followed by", "Supply then grew through a new pipeline."),
        N("wd-a-1953", "evt", "Sungei Tebrau Scheme", "1953", "1,600mm pipeline through the Causeway.", ["wd-tl-early"])
      ] },
    { link: "followed by", how: "Droughts then exposed how vulnerable Singapore was.",
      title: "The 1961 and 1962 agreements", summary: "Droughts produced long-term deals with a review clause.",
      steps: [
        N("wd-a-drought", "stc", "Droughts", "1961–62, 1963–64", "Exposed Singapore's vulnerability.", ["wd-background", "water6162"]),
        K("led to", "The droughts directly motivated long-term agreements."),
        { row: [
          N("wd-a-61", "pol", "Tebrau & Scudai Agreement", "1961", "Exclusive right for 50 years (to 2011); rent RM5/acre + 3 sen/1,000 gallons raw; Malaysia pays 50 cents/1,000 gallons treated.", ["water6162"],
            { ev: ["Singapore supplies Johor treated water up to 12% of raw water drawn (min. 4 million gallons/day).", "Takes effect 1 Sep, signed 2 Oct 1961."] }),
          N("wd-a-62", "pol", "Johor River Agreement", "28 Sep 1962", "All water in a designated area for 99 years (to 2061); up to 250 million gallons/day.", ["water6162"],
            { ev: ["Rent at the standard rate for town building lots; Johor entitled to treated water up to 2% of raw water drawn; price unchanged."] })
        ] },
        K("led to", "Both agreements allowed the price to be reviewed later."),
        N("wd-a-review", "ctx", "25-year price review clause", "1986/1987", "Review possible after 25 years; arbitration if negotiation fails.", ["water6162", "wd-tl-exam"])
      ] },
    { link: "followed by", how: "When Merger broke down, the agreements were written into Separation.",
      title: "The Separation guarantee", summary: "Guaranteed by treaty; the review was never used.",
      steps: [
        N("wd-a-sepag", "pol", "Separation Agreement", "7 Aug 1965", "Incorporated the 1961/62 agreements; guarantee in the Malaysian Constitution; registered with the UN.", ["wd-sep-agreement"]),
        K("followed by", "When the review window came, Johor stayed silent, probably because a higher raw price would also raise what Malaysia paid for treated water."),
        N("wd-a-noreview", "evt", "No review in 1986/87", "1986–87", "Johor did NOT request a review.", ["wd-sanctity"])
      ] },
    { link: "followed by", how: "After six years of negotiation (from 1982) the two sides reached new deals.",
      title: "Cooperation agreements", summary: "An MoU and a dam built at Singapore's cost.",
      steps: [
        N("wd-a-mou", "pol", "1988 MoU", "27–28 Jun 1988", "Sale of water and gas; Changi Point–SE Johor ferry; a new bridge proposed but undecided.", ["wd-1988-mou"]),
        K("led to", "The MoU became the basis for a supplementary agreement."),
        N("wd-a-supp", "pol", "1990 Supplementary Agreement", "24 Nov 1990", "Singapore may build the Linggiu Dam at its own cost; RM320m compensation + RM30/1,000 sq ft rent for ~21,600 ha.", ["wd-1990-supp"],
          { ev: ["Supplements the 1962 Johor River Agreement; Singapore may also buy Linggiu-generated treated water."] }),
        K("followed by", "The reservoir was finished three years later."),
        N("wd-a-linggiu", "evt", "Linggiu Reservoir completed", "1993", "The Linggiu Reservoir Project was completed.", ["wd-1990-supp", "wd-tl-mid"])
      ] },
    { link: "followed by", how: "In 2000 the price itself came onto the table.",
      title: "The 2000 price request", summary: "45 sen requested; never adopted.",
      steps: [
        N("wd-a-2000", "evt", "45 sen price request", "Aug 2000", "Malaysia asks to raise raw water from 3 sen to 45 sen/1,000 gallons as part of the 'package'.", ["wd-2000-request", "wd-package"]),
        K("followed by", "Further unilateral revisions in the early 2000s stopped it being adopted."),
        N("wd-a-notadopt", "res-", "Never formally adopted", "early 2000s", "Singapore still buys raw water at 3 sen and sells treated water to Johor at 50 sen/1,000 gallons.", ["wd-package"])
      ] }
  ],
  historians: [],
  takeaways: [
    "The 1961 (to 2011) and 1962 (to 2061) agreements, motivated by droughts, are the legal core of the dispute.",
    "The 25-year review clause (1986/87) went unused — central to the later argument over Malaysia's 'right to review'.",
    "The 1988 MoU and 1990 Supplementary Agreement (Linggiu Dam) show water cooperation in calmer times."
  ]
});

L.push({
  id: "wd-sep", order: 3, level: 3, parent: "wd-top", kind: "causal",
  title: "Merger, Separation and distrust",
  question: "How did Merger and Separation create the distrust behind the water dispute?",
  intro: "PAP–Alliance rivalry ended in Separation; the water guarantee and Tunku's threat on the same day show water was tied to distrust from the start.",
  clusters: [
    { title: "Root divergence", summary: "Rival visions and economic competition.",
      steps: [
        { row: [
          N("wd-s-pap", "ltc", "PAP meritocracy", "1963–65", "Multicultural meritocracy; the 'Malaysian Malaysia' vision angered Malay ultras.", ["wd-sep-legacy"]),
          N("wd-s-all", "ltc", "Alliance communalism", "1963–65", "UMNO's Social Contract: Chinese economic primacy in exchange for Malay bumiputera privileges.", ["wd-sep-legacy"]),
          N("wd-s-econ", "ltc", "Economic rivalry", "1963–65", "KL saw Singapore as a competitor; disputes over a common market, Bank of China closure, Treasury contributions.", ["wd-sep-legacy"]),
          N("wd-s-geo", "ctx", "Geography binds them", null, "1km-wide Johor Strait; cross-Causeway kinship; FPDA (1971): defence indivisible, and a barometer of relations.", ["wd-geography"],
            { ev: ["Singapore's split was the only non-violent split of a minority region from a dominant one in SEA."] })
        ] }
      ] },
    { link: "intensified", how: "These differences turned into open electoral rivalry.",
      title: "Escalating rivalry", summary: "Elections, then race riots.",
      steps: [
        N("wd-s-63", "evt", "PAP wins Malay seats", "1963", "In the Singapore state election.", ["wd-merger-politics"]),
        K("followed by", "The PAP then contested federal seats."),
        N("wd-s-64", "evt", "PAP's federal bid fails", "1964", "Contested 9 seats, won only 1; escalated rivalry.", ["wd-merger-politics"]),
        K("followed by", "A press campaign and inflammatory speech followed."),
        N("wd-s-utusan", "stc", "Utusan campaign, Albar speech", "Jul 1964", "Utusan Melayu campaign and Syed Jaafar Albar's speech.", ["wd-merger-politics"]),
        K("led to", "Racial tension erupted after the Prophet Muhammad's birthday procession."),
        N("wd-s-riots", "res-", "1964 race riots", "Jul 1964", "21 deaths, 460 injuries (official figures).", ["wd-merger-politics", "wd-race"])
      ] },
    { link: "followed by", how: "In May 1965 the PAP formed an opposition front across Malaysia.",
      title: "Separation", summary: "The 'final straw' and the water guarantee.",
      steps: [
        N("wd-s-msc", "trig", "Malaysian Solidarity Convention", "9 May 1965", "The 'final straw'; UMNO accused Lee of wanting to be PM of Malaysia.", ["wd-merger-politics"]),
        K("led to", "The rivalry became unworkable and Singapore left the federation."),
        N("wd-s-sep", "tp", "Separation", "9 Aug 1965", "Singapore independent within the Commonwealth; admitted to the UN in Sep 1965.", ["wd-merger-politics", "wd-tl-early"]),
        K("led to", "Separation turned the water agreements into a binding, international guarantee."),
        N("wd-s-ag", "pol", "Water guarantee", "7 Aug 1965", "Separation Agreement incorporates the 1961/62 agreements; written into the Malaysian Constitution; UN-registered.", ["wd-sep-agreement"])
      ] },
    { link: "led to", how: "The bitterness left lasting distrust, with water as Malaysia's lever.",
      title: "The legacy", summary: "Water as leverage; an abang-adik relationship.",
      steps: [
        { row: [
          N("wd-s-tunku", "evid", "Tunku's water threat", "9 Aug 1965", "Malaysia could pressure Singapore 'by threatening to turn off the water in Johor'.", ["wd-leverage"]),
          N("wd-s-abang", "int", "Abang-adik syndrome", "post-1965", "Irvin Lim: Malaysia's perennial attempt to put Singapore in its place, with 'heavy historical baggage'.", ["wd-abang-adik"])
        ] },
        K("supports", "Water became a recurring leverage point whenever other disputes arose."),
        N("wd-s-verdict", "judg", "Water dispute as symptom", null, "The dispute reflects deep distrust from Merger and Separation — a long-term 'pervasive overhang'.", ["wd-sep-legacy", "wd-summary-causes"])
      ] }
  ],
  judge: { prompt: "Which did most to create the distrust behind the water dispute? Rank them.",
           factors: ["wd-s-all", "wd-s-econ", "wd-s-riots", "wd-s-msc"],
           notes_view: "The notes call the bitterness of Merger (1963–65) and Separation a long-term 'pervasive overhang', rooted in PAP meritocracy vs Alliance communalism." },
  historians: [
    { who: "Irvin Lim Fang Jau", view: "Malaysia's perennial attempt to put Singapore in its place is an abang-adik syndrome with heavy historical baggage.", nodes: ["wd-s-abang"] },
    { who: "Tunku Abdul Rahman", view: "Malaysia could pressure Singapore by threatening to turn off the water in Johor.", nodes: ["wd-s-tunku"] }
  ],
  takeaways: [
    "PAP–Alliance rivalry (1963 election, failed 1964 federal bid, 1964 riots, 1965 MSC) ended in Separation on 9 Aug 1965.",
    "The Separation Agreement guaranteed the 1961/62 water agreements — so Singapore links them to sovereignty.",
    "Tunku's threat on Separation day shows water was a lever from the start: the dispute as a symptom of distrust."
  ]
});

L.push({
  id: "wd-sg", order: 4, level: 3, parent: "wd-top", kind: "causal",
  title: "Singapore's perspective: water as survival",
  question: "Why did Singapore treat the water agreements as a matter of survival and sovereignty?",
  intro: "Scarcity and the memory of 1942 made water existential; so Singapore insisted on the agreements' sanctity and built the SAF as insurance.",
  clusters: [
    { title: "Scarcity", summary: "Few sources, fast-rising demand.",
      steps: [
        { row: [
          N("wd-g-ground", "ltc", "Few natural freshwater sources", null, "Scarce groundwater and few freshwater bodies, despite abundant rainfall.", ["wd-scarcity"]),
          N("wd-g-pop", "ltc", "Rising demand", "1963–1999", "Population 1.8m to 3.9m; per capita use 154 to 327 litres; total consumption up 4.7x.", ["wd-scarcity"])
        ] },
        K("led to", "Limited supply and soaring demand left Singapore critically short of water."),
        N("wd-g-stress", "res-", "Severe water stress", null, "Among the 8 worst water-stressed countries in Asia; the only ASEAN country facing severe scarcity.", ["wd-scarcity"])
      ] },
    { link: "intensified", how: "War memory turned scarcity into a question of survival.",
      title: "The memory of 1942", summary: "Cutting the Causeway helped Singapore fall.",
      steps: [
        N("wd-g-ww2", "evt", "Causeway destroyed", "WWII", "The British destroyed the Causeway to delay the Japanese, severing Johor's water supply.", ["wd-scarcity"]),
        K("led to", "Without Johor water, and once the Japanese took the reservoirs, Singapore could not hold out."),
        N("wd-g-fall", "res-", "Fall of Singapore accelerated", "1942", "Especially after Japanese forces took Singapore's reservoirs.", ["wd-scarcity"]),
        K("led to", "The lesson tied water to the nation's survival."),
        N("wd-g-exist", "int", "Water = existential security", null, "Water is tied to the nation-state's existential security narrative.", ["wd-scarcity"])
      ] },
    { link: "led to", how: "Because survival was at stake, Singapore insisted the agreements be honoured to the letter.",
      title: "Sanctity of the agreements", summary: "The agreements stand for sovereignty.",
      steps: [
        N("wd-g-sanct", "ctx", "Agreements = sovereignty", null, "Guarantee enacted in the Malaysian Constitution and annexed to the UN-registered Separation Agreement.", ["wd-sanctity"]),
        K("supports", "Malaysia's own UN representative once said such treaties could not be dispensed with."),
        N("wd-g-ariff", "evid", "Ariff's statement", "1968", "Some treaties are 'so fundamental to existence of States' they cannot be dispensed with — citing the water treaty.", ["wd-sanctity"]),
        K("supports", "Johor's failure to request a review in 1986/87 strengthened Singapore's legal case."),
        N("wd-g-noreview", "evid", "No review requested", "1986–87", "Singapore argues Malaysia therefore lost the right to review later.", ["wd-sanctity", "wd-review-right"])
      ] },
    { link: "led to", how: "Fear of a cut-off shaped defence policy.",
      title: "Deterrence", summary: "The SAF as insurance.",
      steps: [
        N("wd-g-saf", "pol", "SAF as insurance", "1965–2000s", "'Credible insurance against a cut of supply of water' (Irvin Lim); ~5% of GDP on defence until the 2000s.", ["wd-saf"]),
        K("supports", "Lee Kuan Yew told Mahathir what the SAF was for."),
        N("wd-g-lky", "evid", "LKY: 'random act of madness'", null, "In an emergency Singapore would 'go in, forcibly if need be' to restore the water flow.", ["wd-saf"])
      ] }
  ],
  judge: { prompt: "Which best explains why Singapore treats water as a sovereignty issue? Rank them.",
           factors: ["wd-g-stress", "wd-g-ww2", "wd-g-sanct", "wd-g-saf"],
           notes_view: "Jayakumar: the significance of the water price is Singapore's existence as a sovereign nation separate from Malaysia, and the sanctity of the most solemn agreements." },
  historians: [
    { who: "S Jayakumar", view: "The water price signifies Singapore's existence as a sovereign nation and the sanctity of solemn agreements.", nodes: ["wd-g-sanct"] },
    { who: "M.O. Ariff", view: "Some treaties, explicitly the water treaty, are 'so fundamental to existence of States' they cannot be dispensed with.", nodes: ["wd-g-ariff"] },
    { who: "Lee Kuan Yew", view: "Singapore feared 'a random act of madness like cutting off our water supplies'.", nodes: ["wd-g-lky"] },
    { who: "Irvin Lim Fang Jau", view: "The SAF was 'credible insurance against a cut of supply of water'.", nodes: ["wd-g-saf"] }
  ],
  takeaways: [
    "Scarcity (population 1.8m to 3.9m, consumption up 4.7x) and the WWII Causeway memory made water existential.",
    "Sanctity of the agreements = sovereignty; Johor's unused 1986/87 review strengthens Singapore's case.",
    "The SAF (~5% of GDP) was built partly as insurance against a water cut-off."
  ]
});

L.push({
  id: "wd-my", order: 5, level: 3, parent: "wd-top", kind: "causal",
  title: "Malaysia's domestic politics and leaders",
  question: "Why did Malaysian leaders repeatedly threaten Singapore's water supply?",
  intro: "Malaysia's own water troubles, the optics of 'cheap' sales, race and Mahathir's confrontational diplomacy drove periodic escalation.",
  clusters: [
    { title: "Malaysia's own water problems", summary: "Insecure supply, locked price.",
      steps: [
        N("wd-m-insec", "ltc", "Malaysia's water insecurity", null, "Population and economic growth, plus pollution and urbanisation.", ["wd-my-optics"]),
        K("constrained", "The agreements barred a unilateral price rise, so the price couldn't reflect scarcity."),
        N("wd-m-locked", "res-", "Price locked by contract", null, "Contractually unable to raise the raw water price unilaterally.", ["wd-my-optics"])
      ] },
    { link: "intensified", how: "Rationing at home made cheap sales to Singapore look unfair.",
      title: "The optics of 'cheap' water", summary: "Rationing at home, sales abroad.",
      steps: [
        N("wd-m-ration", "evt", "Rationing in Johor and Malacca", "1990, 1991", "Malaysian states underwent water rationing.", ["wd-my-optics", "wd-tl-mid"]),
        K("led to", "Selling water to Singapore while rationing at home was politically unpopular."),
        N("wd-m-optics", "res-", "Selling water 'cheaply'", null, "Kog Yue Choong: Johor 'seemed to put Singaporean needs before those of the state'.", ["wd-my-optics"]),
        K("contradicts", "Yet PUB granted extra treated water during Malaysian shortages."),
        N("wd-m-pub", "evid", "PUB's ad-hoc extra supply", null, "Suggests Malaysia's threats were more SYMBOLIC (asserting 'abang' status) than practical.", ["wd-my-optics"])
      ] },
    { link: "intensified", how: "Singapore's identity made it an easy political target.",
      title: "Race as a political tool", summary: "Singapore as scapegoat.",
      steps: [
        N("wd-m-race", "ltc", "Majority-Chinese Singapore", null, "A successful Chinese city-state: a convenient scapegoat; riots began in Singapore (1964) and Malaysia (1969).", ["wd-race"]),
        K("led to", "Attacking Singapore had emotional appeal for Malaysian politicians."),
        N("wd-m-badawi", "evid", "Badawi's 1990 speech", "1990", "An anti-Singapore bandwagon is popular because it involves race and religion; government must be seen to act.", ["wd-race"])
      ] },
    { link: "intensified", how: "Mahathir's style turned these pressures into open threats.",
      title: "Mahathir", summary: "Threats track his time in office.",
      steps: [
        { row: [
          N("wd-m-abang", "stc", "Asserting 'abang' status", null, "Possible motive (not officially confirmed): historical baggage; resentment of Singapore's success.", ["wd-mahathir"]),
          N("wd-m-pas", "stc", "Appeasing PAS", null, "Possible motive: appeasing conservative parties like PAS on Malay rights.", ["wd-mahathir"]),
          N("wd-m-anwar", "stc", "Diverting from Anwar row", "1998", "Possible motive: distraction from his falling-out with Anwar over the AFC and corruption allegations.", ["wd-mahathir"])
        ] },
        K("led to", "These pressures shaped a consistently antagonistic approach."),
        N("wd-m-mah", "act", "Mahathir's confrontational diplomacy", "1981–2003, 2018–20", "Najib's term for Mahathir's consistently antagonistic stance toward Singapore.", ["wd-mahathir"]),
        K("led to", "Under Mahathir, water became a recurring threat."),
        N("wd-m-threat", "res-", "Water cut-off threats", null, "Threats correlate specifically with Mahathir's terms in office.", ["wd-mahathir"])
      ] }
  ],
  judge: { prompt: "What drove Malaysia's periodic escalation over water? Rank them.",
           factors: ["wd-m-locked", "wd-m-optics", "wd-m-race", "wd-m-mah"],
           notes_view: "Malaysian domestic politics — Mahathir's 'confrontational diplomacy', water optics and economic pressures — drove periodic escalation." },
  historians: [
    { who: "Kog Yue Choong", view: "Water is emotive because some states suffer shortages while Johor seemed to put Singapore first.", nodes: ["wd-m-optics"] },
    { who: "Abdullah Ahmad Badawi", view: "An anti-Singapore bandwagon is popular because it involves race and religion.", nodes: ["wd-m-badawi"] },
    { who: "Najib Razak", view: "Termed Mahathir's approach 'confrontational diplomacy'.", nodes: ["wd-m-mah"] }
  ],
  takeaways: [
    "Malaysia had its own water insecurity but could not raise the price unilaterally.",
    "Optics: selling 'cheap' water while Johor (1990) and Malacca (1991) rationed; yet PUB's extra supply shows threats were symbolic.",
    "Water-cutoff threats correlate with Mahathir's terms (1981–2003, 2018–2020)."
  ]
});

L.push({
  id: "wd-herzog", order: 6, level: 3, parent: "wd-top", kind: "causal",
  title: "The 1986 Herzog visit",
  question: "How did the Herzog visit show water being used as leverage?",
  intro: "An Israeli presidential visit, unrelated to water, provoked Malaysian threats that included cutting Singapore's supply.",
  clusters: [
    { title: "Background", summary: "Israeli help and an anti-Zionist speech.",
      steps: [
        { row: [
          N("wd-h-israel", "ctx", "Israeli help for the SAF", null, "Israelis code-named 'Mexicans' for secrecy; sensitive given Malaysia's Malay-Muslim identity.", ["herzog"]),
          N("wd-h-speech", "ctx", "Mahathir's anti-Zionist speech", "Nov 1986", "Aimed at outflanking PAS; two weeks before the visit was announced.", ["herzog"])
        ] },
        K("provoked response", "Mahathir took the visit as a personal affront and demanded cancellation."),
        N("wd-h-demand", "evt", "Malaysia demands cancellation", null, "Mahathir demanded the visit be cancelled.", ["herzog"]),
        K("provoked response", "Singapore refused, on grounds of sovereignty."),
        N("wd-h-refuse", "pol", "Singapore refuses", null, "Cancelling would have compromised Singapore's sovereignty.", ["herzog"])
      ] },
    { link: "followed by", how: "The visit went ahead.",
      title: "The visit and backlash", summary: "Threats, including water.",
      steps: [
        N("wd-h-visit", "trig", "Herzog visits Singapore", "18–20 Nov 1986", "Visit went ahead amid protests.", ["herzog", "wd-tl-mid"]),
        K("provoked response", "Malaysia retaliated diplomatically and with threats."),
        { row: [
          N("wd-h-recall", "pol", "High Commissioner recalled", null, "Malaysia recalled its High Commissioner.", ["herzog"]),
          N("wd-h-threats", "pol", "Threats incl. water cut-off", null, "Threats to sever transport ties, expel Singapore from ASEAN, even cut off water.", ["herzog"])
        ] }
      ] },
    { link: "followed by", how: "Both sides then stepped back.",
      title: "De-escalation", summary: "Blame shifted; Suharto mediated.",
      steps: [
        { row: [
          N("wd-h-blame", "evt", "Mahathir blames opponents", null, "Blamed political opponents for exploiting the issue.", ["herzog"]),
          N("wd-h-lky", "evt", "LKY: learnt from newspapers", null, "Lee Kuan Yew claimed he learnt of the visit from the newspapers.", ["herzog"])
        ] },
        K("followed by", "Indonesia's president then mediated."),
        N("wd-h-suharto", "evt", "Suharto mediates", "Feb 1987", "Symbolically crossing the Causeway.", ["herzog"]),
        K("supports", "The episode shows water threats in a dispute that had nothing to do with water."),
        N("wd-h-verdict", "judg", "Water as leverage", null, "Water threats used as leverage in an unrelated dispute, shaped by Malaysian domestic politics.", ["herzog", "wd-summary-dynamics"])
      ] }
  ],
  judge: { prompt: "Why did the Herzog visit escalate into threats over water? Rank the factors.",
           factors: ["wd-h-israel", "wd-h-speech", "wd-h-refuse", "wd-h-visit"],
           notes_view: "The notes present it as the flashpoint dynamic: water used as leverage in an unrelated dispute, shaped by Mahathir's domestic need to outflank PAS." },
  historians: [],
  takeaways: [
    "Mahathir's anti-Zionist speech (to outflank PAS) preceded the visit; Singapore refused to cancel on sovereignty grounds.",
    "Malaysia recalled its High Commissioner and threatened transport ties, ASEAN membership and water.",
    "Suharto mediated in Feb 1987 — water as leverage in an unrelated dispute."
  ]
});

L.push({
  id: "wd-pedra", order: 7, level: 3, parent: "wd-top", kind: "causal",
  title: "Pedra Branca, 1979–2008",
  question: "How did the Pedra Branca dispute affect relations, and how was it resolved?",
  intro: "Malaysia's 1979 map claim turned a quiet lighthouse rock into a dispute that soured relations until the ICJ decided it in 2008.",
  clusters: [
    { title: "Singapore's long control", summary: "A lighthouse and 130 years of silence.",
      steps: [
        N("wd-p-light", "ctx", "Horsburgh Lighthouse", "1851", "2,000m² reef where the Singapore Strait meets the South China Sea; maintained by Britain, then Singapore.", ["pedrabranca"]),
        K("followed by", "For over a century no one challenged Singapore's control."),
        N("wd-p-quiet", "evid", "No challenge 1847–1979", null, "Singapore held de facto sovereignty; in 1953 the Johor government itself disclaimed ownership.", ["pedrabranca"])
      ] },
    { link: "followed by", how: "Ahead of UNCLOS, Malaysia defined its territory on a map.",
      title: "Malaysia's claim", summary: "A map, a rejection, rival arguments.",
      steps: [
        N("wd-p-map", "trig", "Malaysian map claim", "1979", "Pedra Branca shown as part of Johor; tied to defining territory ahead of UNCLOS (1973–82).", ["pedrabranca", "wd-tl-mid"]),
        K("provoked response", "Singapore objected to unilateral map-making."),
        N("wd-p-reject", "pol", "Singapore rejects claim", "Feb 1980", "Diplomatic note noting unilateral map-making.", ["pedrabranca"]),
        K("followed by", "Each side then set out its case."),
        { split: [
          { h: "Malaysia's case", steps: [ N("wd-p-mycase", "int", "Historically Johor's", null, "Singapore only administered the lighthouse; the island was historically part of the Sultanate of Johor.", ["pedrabranca"]) ] },
          { h: "Singapore's case", steps: [ N("wd-p-sgcase", "int", "Continuous occupation", null, "Occupation since the mid-19th century; EIC–Johor treaties; 1824 Anglo-Dutch Treaty; no challenge for 130+ years.", ["pedrabranca"]) ] }
        ] }
      ] },
    { link: "intensified", how: "Malaysian media and opposition parties exploited the issue.",
      title: "Escalation", summary: "Flags, patrols and press attacks.",
      steps: [
        N("wd-p-media", "evt", "Media and opposition exploit it", null, "UMNO and PAS; a plan to plant a Malaysian flag; Singapore warned of arrest.", ["pedrabranca"]),
        K("led to", "Tension spilled into incidents at sea."),
        N("wd-p-1992", "evt", "Fishing-vessel incidents", "May 1992", "Reports of Singapore patrol craft harassing fishing vessels; diplomatic exchanges.", ["pedrabranca"]),
        K("led to", "With other issues, it soured relations."),
        N("wd-p-backdrop", "res-", "Backdrop to water tensions", "1990s", "Escalated via 1990s press attacks; set the backdrop for deteriorating water relations in the 2000s.", ["pedrabranca"])
      ] },
    { link: "provoked response", how: "Leaders turned to international law rather than bilateral talks.",
      title: "Legal settlement", summary: "Referred to the ICJ.",
      steps: [
        N("wd-p-refer", "pol", "ICJ referral agreed", "Sep 1994", "Goh–Mahathir; Jun 1995 talks on referral failed; case only submitted in 2005.", ["wd-pb-icj"]),
        K("led to", "The court ruled after years of delay."),
        N("wd-p-icj", "tp", "ICJ ruling", "May 2008", "Pedra Branca to Singapore; Middle Rocks to Malaysia; South Ledge unresolved.", ["wd-pb-icj"],
          { ev: ["Johor held original sovereignty, but Singapore's long administration and Malaysia's non-response meant sovereignty had passed to Singapore by 1980."] }),
        K("followed by", "Malaysia later tried to reopen the case."),
        N("wd-p-2017", "evt", "Najib's reversal bid", "Feb 2017", "Cited new British archive documents; Singapore called the ruling final; withdrawn after 2018.", ["wd-pb-icj"],
          { ev: ["Feb 2019: Singapore added Pedra Branca to East Coast GRC — a symbolic affirmation of sovereignty."] })
      ] }
  ],
  historians: [],
  takeaways: [
    "Singapore administered Pedra Branca since the 1840s; Malaysia raised no challenge until its 1979 map.",
    "Media and opposition exploitation escalated it in the 1990s, souring relations alongside water.",
    "Settled by legal means: ICJ (May 2008) awarded Pedra Branca to Singapore, Middle Rocks to Malaysia."
  ]
});

L.push({
  id: "wd-malindo", order: 8, level: 3, parent: "wd-top", kind: "causal",
  title: "Malindo Darsasa and Singapore's defence",
  question: "What does Operation Malindo Darsasa show about Singapore's insecurity?",
  intro: "A small state's insecurity produced SEA's biggest defence budget; a Malaysia–Indonesia exercise on National Day triggered a full SAF alert.",
  clusters: [
    { title: "Insecurity and doctrine", summary: "From 'Poisonous Shrimp' to 'Swift and Decisive Victory'.",
      steps: [
        N("wd-l-small", "ltc", "Small and vulnerable", null, "Small relative to Malaysia and Indonesia; independence-era Malay–Chinese tensions.", ["wd-defence"]),
        K("led to", "Insecurity drove heavy defence spending."),
        N("wd-l-budget", "pol", "Highest defence budget in SEA", null, "~5% of GDP, 25–30% of the annual budget.", ["wd-defence", "wd-saf"]),
        K("followed by", "Its first doctrine relied on deterrence."),
        N("wd-l-shrimp", "pol", "'Poisonous Shrimp'", "1970s–80s", "Deterrence by being 'small but indigestible'.", ["wd-defence"]),
        K("led to", "It implied an unwinnable war fought only on home soil, so the doctrine changed."),
        N("wd-l-swift", "pol", "'Swift and Decisive Victory'", "1990s", "Added offensive and power-projection capability.", ["wd-defence"])
      ] },
    { link: "followed by", how: "In 1991 a joint exercise tested Singapore's nerves.",
      title: "The exercise", summary: "A simulated assault 18km away.",
      steps: [
        N("wd-l-ex", "trig", "Operation Malindo Darsasa 3AB", "9 Aug 1991", "Malaysia–Indonesia exercise on Singapore's National Day: simulated airborne assault 18km from Woodlands.", ["malindo", "wd-tl-mid"]),
        K("provoked response", "Singapore saw it as highly provocative: the timing, offensive nature and proximity."),
        N("wd-l-trojan", "pol", "Operation Trojan", "Aug 1991", "Full SAF alert, partial reserve mobilisation (incl. an armoured brigade), live ammunition issued.", ["malindo"])
      ] },
    { link: "intensified", how: "Some Malaysian politicians responded by raising territorial claims.",
      title: "Spillover", summary: "Disputes fed one another.",
      steps: [
        N("wd-l-takeback", "evt", "'Take back' threats", null, "Threats to 'take back' Pedra Branca and even Singapore itself.", ["malindo"]),
        K("supports", "Security, territory and water disputes fed into and amplified one another."),
        N("wd-l-verdict", "judg", "Disputes amplified each other", null, "Shows Singapore's insecurity and how disputes fed into one another.", ["malindo", "wd-defence"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Insecurity gave Singapore SEA's highest defence budget (~5% of GDP); doctrine moved from 'Poisonous Shrimp' to 'Swift and Decisive Victory'.",
    "Malindo Darsasa 3AB (9 Aug 1991) simulated an assault 18km from Woodlands; Singapore responded with Operation Trojan.",
    "Malaysian 'take back' threats show disputes amplifying one another."
  ]
});

L.push({
  id: "wd-afc", order: 9, level: 3, parent: "wd-top", kind: "causal",
  title: "Post-AFC disputes, 1997–98",
  question: "Why did water become a flashpoint after the Asian Financial Crisis?",
  intro: "Old and new disputes piled up during the AFC — CIQ, CLOB, interest rates, CPF, remarks, airspace — and water took on a strategic dimension.",
  clusters: [
    { title: "Disputes before the crisis", summary: "CIQ and CLOB.",
      steps: [
        { split: [
          { h: "CIQ", steps: [
            N("wd-f-ciq", "pol", "CIQ moved to Woodlands", "1989", "From Tanjong Pagar, to curb drug smuggling; Singapore wanted Malaysia to co-locate.", ["wd-ciq"]),
            K("followed by", "The two sides then signed an agreement."),
            N("wd-f-poa", "pol", "Points of Agreement", "27 Nov 1990", "Signed by LKY and Daim Zainuddin.", ["wd-ciq", "wd-tl-mid"]),
            K("followed by", "Malaysia later backed out."),
            N("wd-f-renege", "evt", "Malaysia reneges", "1997", "Stayed at Tanjong Pagar; the timing fuelled Malaysian suspicion of Singapore.", ["wd-ciq", "wd-tl-late"])
          ] },
          { h: "CLOB", steps: [
            N("wd-f-clob", "evt", "CLOB set up", "1990", "When the SES split from the KLSE; mostly Malaysian shares traded; KLSE warned of an 'unrecognised market'.", ["wd-clob"])
          ] }
        ] }
      ] },
    { link: "intensified", how: "The AFC turned these and new issues into one of the worst periods since Separation.",
      title: "The crisis disputes", summary: "Economic and mixed disputes.",
      steps: [
        { split: [
          { h: "CLOB", steps: [
            N("wd-f-short", "evt", "Shorting allegation", "1998", "Malaysia alleged CLOB shares were used to short the KLSE, hitting shares and the ringgit.", ["wd-clob"]),
            K("provoked response", "Malaysia moved to shut the market."),
            N("wd-f-ban", "pol", "CLOB trading banned", "31 Aug 1998", "National Economic Action Council called for closure and transfer of shares to KLSE.", ["wd-clob"])
          ] },
          { h: "Interest rates", steps: [
            N("wd-f-ctrl", "pol", "Mahathir's capital controls", "1998", "Cut rates; banned offshore ringgit exchange; pegged the ringgit to USD.", ["wd-interest"]),
            K("led to", "With Malaysian rates cut, Singapore's high ringgit deposit rates looked like sabotage."),
            N("wd-f-sabot", "res-", "Singapore accused of sabotage", "1998", "Richard Hu: Singapore's rates were market-determined, not managed.", ["wd-interest"])
          ] },
          { h: "CPF", steps: [
            N("wd-f-cpf", "evt", "CPF withdrawal request", "Jul 1998", "Retrenched West Malaysians sought early withdrawal; law allowed it only at 55, disability or permanent departure.", ["wd-cpf"])
          ] }
        ] }
      ] },
    { link: "intensified", how: "Leaders' remarks and a security move added fuel.",
      title: "Remarks and airspace", summary: "Insults and a revoked airspace.",
      steps: [
        { row: [
          N("wd-f-lky", "evt", "LKY's remarks", "1996–98", "Re-merger 'easier' if meritocratic (1996); Johor 'crime-ridden' (1997, apologised); The Singapore Story (1998).", ["wd-lky-remarks"],
            { ev: ["The memoirs angered the Malaysian elite and contributed to Malaysia skipping an Oct 1998 FPDA exercise."] }),
          N("wd-f-lim", "evt", "Lim Hng Kiang on water quality", "May 1998", "Questioned the quality of Malaysian treated water; taken as an insult.", ["wd-lim-hng-kiang"]),
          N("wd-f-rsaf", "pol", "RSAF airspace revoked", "Sep 1998", "Southern Johor airspace; both worsened and reflected existing mistrust.", ["wd-rsaf"])
        ] }
      ] },
    { link: "led to", how: "Parallel disputes gave water a strategic dimension.",
      title: "Water becomes strategic", summary: "Calls to dissolve the agreements.",
      steps: [
        { row: [
          N("wd-f-calls", "res-", "Calls to dissolve agreements", "1998", "Lim's remarks amplified Malaysian calls to dissolve the water agreements entirely.", ["wd-lim-hng-kiang"]),
          N("wd-f-ambig", "evt", "Mahathir's ambiguous statement", "Jul 1998", "A week after the CPF request; Mahathir denied any link.", ["wd-cpf", "wd-tl-late"])
        ] },
        K("supports", "Water became a bargaining chip amid economic, mixed and circumstantial disputes."),
        N("wd-f-verdict", "judg", "Water as flashpoint", null, "One of the worst periods of tension since Separation, with water taking on a strategic dimension.", ["afcwater", "wd-conseq-sgmy"])
      ] }
  ],
  judge: { prompt: "Which dispute did most to turn water into a flashpoint in 1997–98? Rank them.",
           factors: ["wd-f-renege", "wd-f-ban", "wd-f-sabot", "wd-f-cpf", "wd-f-lim", "wd-f-rsaf"],
           notes_view: "The notes classify CLOB and interest rates as economic (directly AFC-related), CPF as mixed and the CIQ as circumstantial; together they made water strategic." },
  historians: [],
  takeaways: [
    "Post-AFC 1997–98 was one of the worst periods of tension since Separation.",
    "Economic (CLOB, interest rates), mixed (CPF) and circumstantial (CIQ) disputes, plus remarks and RSAF airspace, piled up.",
    "Water took on a strategic dimension: calls to dissolve the agreements; Mahathir's ambiguous statement a week after the CPF request."
  ]
});

L.push({
  id: "wd-funds", order: 10, level: 3, parent: "wd-top", kind: "chain",
  title: "Funds for water and the 'package'",
  question: "How was water used to mend relations in 1998–2000?",
  intro: "Loans for guaranteed water, then a 'package' of every issue: water as a vehicle for cooperation — until the deal collapsed in the early 2000s.",
  clusters: [
    { title: "Funds for water", summary: "Loans in return for guaranteed supply.",
      steps: [
        N("wd-u-visit", "evt", "Goh visits KL", "Nov 1998", "On Mahathir's invitation, to discuss water, RSAF airspace and CIQ together.", ["wd-funds-water"]),
        K("led to", "Each side put an offer on the table."),
        { row: [
          N("wd-u-loans", "pol", "Singapore agrees to loans", "Nov 1998", "For the depreciating ringgit; goodwill despite the market risk.", ["wd-funds-water"]),
          N("wd-u-supply", "pol", "Singapore seeks guaranteed supply", "Nov 1998", "Long-term water supply with no price review under current agreements.", ["wd-funds-water"])
        ] },
        K("led to", "The two requests were drafted as parallel agreements."),
        N("wd-u-parallel", "evt", "Parallel agreements negotiated", "late Nov 1998", "Loan and water agreements for both Parliaments' approval.", ["wd-funds-water"])
      ] },
    { link: "followed by", how: "As Malaysia's economy recovered, the loan was no longer needed.",
      title: "The 'package' approach", summary: "Everything negotiated together.",
      steps: [
        N("wd-u-recover", "evt", "Malaysia's economy recovers", "1999", "Malaysia's economy recovered from the AFC.", ["wd-funds-water"]),
        K("led to", "Mahathir no longer needed Singapore's money."),
        N("wd-u-drop", "pol", "Mahathir drops loan request", null, "The financial-loan request was dropped.", ["wd-funds-water"]),
        K("followed by", "He proposed linking every outstanding issue instead."),
        N("wd-u-package", "pol", "'Package' approach", "1998–2000", "Water discussed alongside all bilateral issues; eased tensions via mutual concessions and predictability.", ["wd-package"])
      ] },
    { link: "led to", how: "The package widened to cover every outstanding issue.",
      title: "What the package covered", summary: "Price, land, airspace, CPF, a bridge.",
      steps: [
        { row: [
          N("wd-u-price", "evt", "Raw water at 45 sen", "Aug 2000", "From 3 sen (the 1961 rate) to 45 sen/1,000 gallons.", ["wd-2000-request"]),
          N("wd-u-other", "evt", "Supply, airspace, land, CPF", "2000", "Post-2061 supply, RSAF airspace, KTM land at Bukit Timah, up to RM3bn early CPF withdrawals.", ["wd-2000-request", "wd-package"]),
          N("wd-u-bridge", "evt", "Causeway-replacement bridge", "2000", "Mahathir's proposal; not on Singapore's agenda, but SM Lee agreed to include it.", ["wd-bridge"])
        ] },
        K("led to", "Both sides agreed a common list of issues."),
        N("wd-u-agreed", "res+", "Agreed list of issues", "2000", "Including raising the price to 45 sen; ended the syllabus period on a broadly positive note.", ["wd-2000-request", "wd-package"])
      ] },
    { link: "followed by", how: "Further unilateral revisions in the early 2000s undid the deal.",
      title: "Collapse and verdict", summary: "Positive in 2000, collapsed later.",
      steps: [
        N("wd-u-collapse", "res-", "Package collapses", "early 2000s", "Never formally adopted.", ["wd-package"]),
        K("supports", "While it lasted, both sides had reasons to de-escalate and water helped them do so."),
        N("wd-u-verdict", "judg", "Water as vehicle for cooperation", null, "Water could mend relations when both sides had incentives to de-escalate (the AFC period).", ["wd-mgmt-exam", "wd-essay-synth"])
      ] }
  ],
  judge: { prompt: "What made water a vehicle for cooperation in 1998–2000? Rank the factors.",
           factors: ["wd-u-loans", "wd-u-supply", "wd-u-package", "wd-u-bridge"],
           notes_view: "Key evidence that water could be a vehicle for cooperation when both sides had incentives to de-escalate; the package eased tensions via mutual concessions and predictability." },
  historians: [],
  takeaways: [
    "Nov 1998 'funds for water': Singapore agreed to loans in return for guaranteed supply with no price review.",
    "As Malaysia recovered, Mahathir proposed a 'package' of all issues (45 sen price, airspace, land, CPF, bridge).",
    "Ends the syllabus period positively, though it collapsed in the early 2000s."
  ]
});

L.push({
  id: "wd-self", order: 11, level: 3, parent: "wd-top", kind: "causal",
  title: "Self-sufficiency: reducing dependence",
  question: "How did Singapore reduce its dependence on Malaysian water, and with what effect?",
  intro: "Catchments, a failed Indonesian option, demand measures, desalination and NEWater cut dependence — and with it Malaysia's leverage.",
  clusters: [
    { title: "Local catchments", summary: "Half of supply from Singapore's own land.",
      steps: [
        N("wd-c-pub", "pol", "PUB established", "post-1963", "Public Utilities Ordinance.", ["wd-catchments"]),
        K("led to", "PUB built new local sources."),
        N("wd-c-dams", "pol", "Dams and stormwater collection", "1963–1993", "7 rivers dammed; SEA's first stormwater collection system; S$1.9bn capex.", ["wd-catchments"],
          { ev: ["Also river clean-up and sewerage/drainage improvements."] }),
        K("led to", "Catchments grew to cover much of the island."),
        N("wd-c-half", "res+", "Half of supply from catchments", "by 2002", "Half of Singapore's land area used for catchment.", ["wd-catchments"])
      ] },
    { link: "followed by", how: "Singapore also looked for a second foreign supplier.",
      title: "The Indonesian option", summary: "Signed, but never delivered.",
      steps: [
        N("wd-c-lky", "evt", "LKY seeks Indonesian water", "1987", "Publicly expressed interest in a geographically viable alternative.", ["wd-indonesia-water"]),
        K("led to", "Talks produced formal agreements."),
        N("wd-c-agree", "pol", "Indonesia water agreements", "1990–91", "Signed 28 Aug 1990; 1991: 1,000 million gallons/day for 100 years from Sungei Kampar.", ["wd-indonesia-water"]),
        K("prevented", "Post-AFC instability (Suharto to Habibie) derailed the scheme."),
        N("wd-c-never", "res-", "Never materialised", null, "Indonesia also resented potential ecological damage and accused Singapore of 'exploiting' it.", ["wd-indonesia-water", "wd-conseq-indo"]),
        K("followed by", "Indonesia's president then hinted at joint pressure on Singapore."),
        N("wd-c-wahid", "evt", "Wahid's remarks", "Nov 2000", "Called Singapore profit-minded; revealed talk with Mahathir of jointly restricting water to 'teach Singapore a lesson'.", ["wd-conseq-indo"])
      ] },
    { link: "intensified", how: "Threats from both neighbours stiffened Singapore's resolve; in 1997 it announced new measures.",
      title: "Demand cuts and new 'taps'", summary: "Pricing, desalination, NEWater.",
      steps: [
        { row: [
          N("wd-c-demand", "pol", "Demand measures", "10 Jun 1997", "Tariffs reflecting scarcity; 'Save Water' campaigns; industrial recycling incentives.", ["wd-demand"]),
          N("wd-c-desal", "pol", "Desalination", "1997", "Plans announced 1997; 20-year contract tenders in the early 2000s.", ["newater"]),
          N("wd-c-newater", "pol", "NEWater", "9 Aug 2002", "Launched at the NDP, rolled out 2003; goal of 55 mgd by 2010.", ["newater"])
        ] },
        K("led to", "New sources meant the first agreement was no longer needed."),
        N("wd-c-norenew", "res+", "1961 agreement not renewed", "2002–2011", "Declared by 2002; it duly expired in 2011.", ["newater"])
      ] },
    { link: "led to", how: "Less dependence meant less Malaysian leverage.",
      title: "The effect", summary: "Less leverage, but interdependence kept.",
      steps: [
        N("wd-c-lever", "res+", "Malaysia's leverage reduced", "post-2003", "Explains why tensions eased after 2003.", ["wd-mgmt-exam", "wd-summary-dynamics"]),
        K("contradicts", "Yet Goh argued Singapore should not aim for full self-reliance."),
        N("wd-c-goh", "int", "Goh: keep interdependence", "5 Apr 2002", "Water a 'symbol' of the 'interlocking relationship'.", ["wd-conseq-sgmy"])
      ] }
  ],
  judge: { prompt: "Which measure did most to reduce Malaysia's leverage over water? Rank them.",
           factors: ["wd-c-half", "wd-c-agree", "wd-c-demand", "wd-c-newater"],
           notes_view: "Alternative sources (NEWater, desalination, Indonesia, catchments) explain why tensions eased after 2003: reduced dependence = reduced Malaysian leverage." },
  historians: [
    { who: "Goh Chok Tong", view: "Water sales signal the two will be 'interdependent forever' and must co-exist happily.", nodes: ["wd-c-goh"] }
  ],
  takeaways: [
    "By 2002 catchments supplied about half of Singapore's water (7 rivers dammed, S$1.9bn).",
    "The Indonesian option (1990–91) never materialised; Wahid's 2000 remarks stiffened Singapore's resolve.",
    "Demand measures, desalination and NEWater (2002) meant the 1961 agreement lapsed in 2011, reducing Malaysia's leverage."
  ]
});

L.push({
  id: "wd-post", order: 12, level: 3, parent: "wd-top", kind: "chain",
  title: "Context only: re-emergence, 2001–2020",
  question: "How did the dispute develop after 2000 (for source provenance)?",
  intro: "Context for SBQ provenance: escalating price demands, the package's collapse, Singapore's release of documents, and Mahathir's 2018 return.",
  clusters: [
    { title: "Rising price demands", summary: "45 sen to 60 sen to RM6.25.",
      steps: [
        N("wd-o-60", "evt", "60 sen requested", "21 Feb 2001", "Malaysia asks to raise the price from 45 to 60 sen.", ["wd-post2000-tl"]),
        K("followed by", "Mahathir then attacked the agreements themselves."),
        N("wd-o-unequal", "evt", "'Unequal treaties'", "early 2002", "Mahathir frames the agreements as imposed by the British; draws Malaysian media in.", ["wd-post2000-tl", "wd-framing-2002"]),
        K("followed by", "The demand jumped again."),
        N("wd-o-625", "evt", "RM6.25 requested", "Sep 2002", "Malaysia asks to raise the price from 60 sen to RM6.25.", ["wd-post2000-tl"])
      ] },
    { link: "followed by", how: "Within weeks Mahathir ended the package.",
      title: "The package collapses", summary: "Water decoupled; voiding threatened.",
      steps: [
        N("wd-o-off", "tp", "Mahathir calls off package", "7 Oct 2002", "Unilaterally ended the 'package' approach.", ["wd-post2000-tl"]),
        K("led to", "Mahathir sought to treat water separately."),
        N("wd-o-decouple", "evt", "Water decoupled", "8 Oct 2002", "Goh warned this reduced Singapore's flexibility on other issues.", ["wd-post2000-tl"]),
        K("followed by", "A minister then threatened legislation."),
        N("wd-o-rais", "evt", "Rais Yatim: legislate to void", "24 Oct 2002", "Malaysia could pass domestic law to void the agreements — a challenge to Singapore's sovereignty framing.", ["wd-framing-2002"])
      ] },
    { link: "intensified", how: "Each side set out its case on price and the right to review.",
      title: "The arguments", summary: "Profiteering vs subsidy; review right.",
      steps: [
        { split: [
          { h: "Malaysia", steps: [
            N("wd-o-profit", "int", "'Profiteering' charge", null, "Singapore buys raw water at 3 sen and sells treated water at 50 sen.", ["wd-profiteer"]),
            K("supports", "Malaysia also claimed the 2000 talks conceded a right to review."),
            N("wd-o-myreview", "int", "Review right conceded", null, "SM Lee's Aug 2000 negotiation (to 45 sen) implicitly conceded Malaysia's right to review.", ["wd-review-right"])
          ] },
          { h: "Singapore", steps: [
            N("wd-o-rebut", "int", "Treatment costs RM2.40", null, "Singapore absorbs a RM1.90 subsidy per 1,000 gallons; Malaysia sells to Johor residents at RM3.95.", ["wd-profiteer"]),
            K("supports", "Singapore also argued the review window had passed."),
            N("wd-o-sgreview", "int", "Review right expired 1987", null, "Malaysia's formal review right expired unused in 1987; further revisions are provocative.", ["wd-review-right"])
          ] }
        ] }
      ] },
    { link: "provoked response", how: "Faced with what it called misinformation, Singapore published the record.",
      title: "Release and calm", summary: "Documents released; Mahathir leaves.",
      steps: [
        N("wd-o-release", "pol", "Singapore releases correspondence", "25 Jan 2003", "A deliberate, defensive act — an SBQ provenance point on purpose and bias.", ["wd-framing-2002"],
          { ev: ["Jayakumar: reluctant to release 'because we hoped for a win-win outcome', but 'so much misinformation… needs to be rebutted by conclusive evidence'."] }),
        K("followed by", "The dispute subsided when Mahathir left office."),
        N("wd-o-stepdown", "evt", "Mahathir steps down", "31 Oct 2003", "The dispute subsides.", ["wd-post2000-tl", "wd-framing-2002"])
      ] },
    { link: "followed by", how: "It flared again when Mahathir returned in 2018.",
      title: "2018 renewed disagreement", summary: "Reaffirmed, then challenged again.",
      steps: [
        N("wd-o-najib", "evt", "Najib reaffirms 1962 Agreement", "Dec 2016–Jan 2018", "Affirmed 1962-level supply; Jan 2018 Leaders' Retreat joint statement.", ["wd-2018"]),
        K("followed by", "Mahathir returned as PM."),
        N("wd-o-ridic", "evt", "Mahathir: price 'ridiculous'", "Jul 2018", "Sought renegotiation; Singapore MFA: guaranteed by the UN-registered Separation Agreement.", ["wd-2018"]),
        K("followed by", "The push stalled."),
        N("wd-o-stall", "evt", "Talks stall", "Feb 2020", "After Mahathir's resignation and the onset of COVID-19.", ["wd-2018"])
      ] }
  ],
  historians: [
    { who: "S Jayakumar", view: "Singapore released the documents only when a win-win outcome was no longer realistic.", nodes: ["wd-o-release"] }
  ],
  takeaways: [
    "For SBQ provenance only: price demands rose from 45 sen to RM6.25; Mahathir called off the package (7 Oct 2002).",
    "Singapore's 25 Jan 2003 release of correspondence was a deliberate, defensive act.",
    "The dispute subsided after Mahathir stepped down and resurfaced on his 2018 return — correlating with his leadership."
  ]
});

L.push({
  id: "wd-arg", order: 13, level: 1, parent: "wd-top", kind: "argument",
  title: "Symptom or cause? The argument",
  question: "'The water dispute was a symptom rather than a cause of changes in Singapore–Malaysia relations.' How far do you agree?",
  intro: "Weigh the evidence that water reflected deeper distrust against the evidence that it drove and mended relations itself.",
  clusters: [
    { title: "Claim", summary: "Water as a symptom.",
      steps: [
        N("wd-r-claim", "judg", "Water dispute a symptom", null, "The water dispute was a symptom, rather than a cause, of changes in Singapore–Malaysia relations.", ["wd-framing"])
      ] },
    { link: "supports", how: "Test the claim against the evidence on each side.",
      title: "For and against", summary: "Symptom vs cause.",
      steps: [
        { split: [
          { h: "For: symptom", steps: [
            N("wd-r-sep", "evid", "Separation legacy", null, "Distrust from Merger and Separation; Irvin Lim's abang-adik syndrome.", ["wd-sep-legacy", "wd-abang-adik"]),
            K("supports", "Water was dragged into disputes about other issues."),
            N("wd-r-herz", "evid", "Threats in unrelated disputes", null, "Herzog (1986) and the post-AFC CLOB/CPF/CIQ/RSAF disputes.", ["herzog", "afcwater"]),
            K("supports", "Agreements came when relations were already calm."),
            N("wd-r-calm", "evid", "Deals in calm periods", null, "1988 MoU and 1990 Supplementary Agreement (Linggiu Dam).", ["wd-1988-mou", "wd-1990-supp"])
          ] },
          { h: "Against: cause", steps: [
            N("wd-r-flash", "evid", "Flashpoint worsened relations", null, "Water disputes as a flashpoint (CIQ, CLOB, CPF period) led to deterioration.", ["wd-conseq-sgmy"]),
            K("contradicts", "Water itself touched Singapore's sovereignty and survival."),
            N("wd-r-sanct", "evid", "Sovereignty at stake", null, "Price signifies Singapore's sovereignty (Jayakumar); SAF built as insurance against a cut-off.", ["wd-sanctity", "wd-saf"]),
            K("contradicts", "Water deals also improved relations in their own right."),
            N("wd-r-vehicle", "evid", "Vehicle for cooperation", null, "'Funds for water' (1998) and the 'package' eased tensions.", ["wd-funds-water", "wd-package"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both sides gives a three-part answer.",
      title: "Judgement", summary: "Symptom, cause and vehicle.",
      steps: [
        N("wd-r-judge", "judg", "Both symptom and cause", null, "A symptom of distrust, a cause of deterioration as a flashpoint, and a vehicle for cooperation when both sides wanted to de-escalate.", ["wd-essay-synth"],
          { ev: ["Malaysia vs Indonesia: both show 'abang/kakak' dynamics, but only Malaysia had contractual leverage, so only it could escalate.", "Goh (2001): continued sales mean 'we are going to be interdependent forever'."] })
      ] }
  ],
  judge: { prompt: "How far was the water dispute a symptom rather than a cause? Rank the evidence by weight.",
           factors: ["wd-r-sep", "wd-r-herz", "wd-r-calm", "wd-r-flash", "wd-r-sanct", "wd-r-vehicle"],
           notes_view: "Essay synthesis: (a) a SYMPTOM of deeper distrust/Separation legacy; (b) a CAUSE of further deterioration via its flashpoint role; (c) a VEHICLE for cooperation when both sides had incentive to de-escalate." },
  historians: [
    { who: "Irvin Lim Fang Jau", view: "An abang-adik syndrome with heavy historical baggage.", nodes: ["wd-r-sep"] },
    { who: "S Jayakumar", view: "The water price signifies Singapore's existence as a sovereign nation.", nodes: ["wd-r-sanct"] },
    { who: "Goh Chok Tong", view: "The two will be 'interdependent forever' and must co-exist happily.", nodes: ["wd-r-judge"] }
  ],
  takeaways: [
    "Argue all three: symptom (Separation distrust), cause (flashpoint), vehicle (funds for water, package).",
    "Only Malaysia had contractual leverage — Indonesia's plans were never formalised.",
    "Self-sufficiency reduced leverage over time, explaining why tensions eased after 2003."
  ]
});
})();
