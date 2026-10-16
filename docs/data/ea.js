// P1 Theme II · Economic transformation of Japan and China — from Japan_Economic_Transformation_Study_Notes
// and China_Economic_Transformation_Study_Notes.
(function(){
const SJ = "Japan Economic Transformation study notes", SC = "China Economic Transformation study notes";
const S = SJ;
const add = (sec, o) => CASES.push(Object.assign({ t:"ea", sec, src:S, qs:"me" }, o));

/* ══════════════════════ JAPAN ══════════════════════ */

/* ── Japan · Overview ── */
add("Japan · Overview", { id:"ea-jp-eq", title:"Japan: essential question & factor clusters", when:"1947–1991", qs:"notes",
  q:"What led to the rise of the Japanese economy from 1947 to 1991?",
  pts:["Four domestic/international factor clusters: Government intervention (public)",
    "Keiretsu system (private)",
    "Socio-economic changes (people)",
    "International developments (Cold War + global economy)",
    "Always argue interaction across time, not factors in silos — different factors dominate at different phases"] });

add("Japan · Overview", { id:"ea-jp-phases", title:"Japan: two broad phases of growth", when:"1945–1991",
  q:"What were the two broad phases of Japan's postwar economic growth?",
  pts:["1945–1973 — Rapid growth",
    "1945–52: Recovery under Allied Occupation, accelerated by Korean War",
    "1952–73: High-growth period",
    "1974–1991 — Stable growth: slower but still robust growth (~4% avg. p.a.)",
    "By then Japan had caught up with the West; ability to pivot despite oil shocks"] });

add("Japan · Overview", { id:"ea-jp-timeline1", title:"Japan timeline, 1945–1955", when:"1945–1955",
  q:"Outline the key events in Japan's economy from 1945 to 1955.",
  pts:["1945: Japan surrenders; Allied/US Occupation begins",
    "1947: Reverse Course begins; new Constitution in effect; land reform commences",
    "1949: Dodge Line (fiscal austerity); MITI created; Communists win China's civil war",
    "1950: Korean War begins — major stimulus; 1951: JDB established",
    "1952: Occupation ends (San Francisco Treaty); yen pegged 350:$1",
    "1955: Japan joins GATT; era of high-speed growth begins"] });

add("Japan · Overview", { id:"ea-jp-timeline2", title:"Japan timeline, 1960–1990", when:"1960–1990",
  q:"Outline the key events in Japan's economy from 1960 to 1990.",
  pts:["1960: Ikeda's Income Doubling Plan announced",
    "1964: Tokyo Olympics; Japan enters IMF — symbolic reintegration",
    "1968: Japan's GNP ranks 2nd in the world",
    "1971: Nixon Shock — end of Gold-Dollar convertibility; 1973: OPEC oil crisis triggers global slowdown",
    "1978: ‘Voluntary’ export restraints on cars to US (trade friction)",
    "1985: Plaza Accord → endaka (sharp yen appreciation); privatisation of telecoms/railways",
    "1990: Bubble bursts (stock & land prices implode); prolonged recession begins"] });

add("Japan · Overview", { id:"ea-jp-miracle-gnp", title:"Indicators of the ‘economic miracle’: GNP growth", when:"1950–1973",
  q:"What statistics show the scale of Japan's GNP growth, 1950–1973?",
  pts:["1950–1973: GNP expanded at an average annual rate of 10%, doubling roughly every seven years",
    "Growth by sub-period: 7.5% (1950–55) → 9.1% (1955–60) → 9.8% (1960–65) → 12.1% (1965–70) → 8.6% (1970–73)",
    "GNP in US$: $11bn (1950) → $25bn (1955) → $320bn (1973) — a 13-fold increase from 1955 to 1973",
    "Japan's GNP: 7% of the US in 1955 → nearly one-third of the US by 1973",
    "World's 3rd-largest economy after the US and USSR"] });

add("Japan · Overview", { id:"ea-jp-miracle-other", title:"Indicators: post-1973 growth & capital formation", when:"1955–1980s",
  q:"How did Japan's growth compare after 1973, and what does gross capital formation show?",
  pts:["Post-1973: growth slowed but stayed above 4% p.a. through the late 1970s–80s",
    "Still outpacing other advanced economies (US/Europe grappled with stagflation)",
    "Gross capital formation averaged >22% p.a. from 1955–1973 — historically and comparatively unparalleled",
    "Beckley, Horiuchi and Miller (2018): one of the most dramatic cases of rapid economic development in modern history",
    "Growth even accelerated after the initial recovery period: 7.1% p.a. 1945–58 vs. 9.5% p.a. 1959–70"] });

add("Japan · Overview", { id:"ea-jp-interaction", title:"Japan: snapshot & interaction of factors", when:"1947–1991",
  q:"How should the factors behind Japan's growth be shown to interact, and how did their weighting shift over time?",
  pts:["Domestic: government intervention (public), keiretsu system (private), socio-economic changes (people); International: the Cold War, global economic development",
    "Do NOT treat factors in silos — MITI's industrial policy worked because keiretsu firms responded to its signals (Ozkan 2011: ‘symbiotic relationship’)",
    "Cold War geopolitics gave the government room to focus resources on economic growth instead of defence",
    "Government-led industrial policy dominant in 1950s–60s",
    "International/US factors (market access, technology transfer, defence subsidy) especially critical 1950s–60s",
    "Socio-cultural factors (savings, education) are constants that magnify other factors' effects"] });

/* ── Japan · Government intervention ── */
add("Japan · Government intervention", { id:"ea-jp-devstate", title:"The developmental state (Johnson)", when:"1982/1995",
  q:"What is a ‘developmental state’ (Johnson), and how did Gordon characterise Japan's state management?",
  pts:["A state that gives priority to economic growth, productivity and technological competitiveness",
    "Led by a small elite bureaucracy that formulates industrial policy through a coordinating ‘pilot agency’",
    "Without displacing market rationality (Johnson, 1982/1995)",
    "Gordon (2003): the government did not run a ‘command economy’ on the Soviet model",
    "But Japan's postwar economic story is not a simple tale of a free market miracle — state management was extensive"] });

add("Japan · Government intervention", { id:"miti", title:"MITI", when:"est. 1949",
  q:"What was MITI's role in Japan's postwar economy?",
  clue:"Ministry created in 1949 that acted as the architect of industrial policy and steered firms through gyosei shido.",
  pts:["MITI established 1949",
    "Architect of industrial policy, arbiter of disputes, regulator",
    "Provided ‘administrative guidance’ (gyosei shido)",
    "Informal but powerful direction on modernisation, tech, investment, competition"] });

add("Japan · Government intervention", { id:"ea-jp-agencies", title:"JDB, EPA & Economic Deliberation Council", when:"1948–1952",
  q:"What roles did the Japan Development Bank, Economic Planning Agency and Economic Deliberation Council play?",
  pts:["Japan Development Bank (est. 1951): below-market loans to priority industries (coal, steel, electric, shipping) to fund ‘rationalisation’",
    "JDB also financed infrastructure & regional development",
    "Economic Planning Agency (EPA): non-binding ‘five-year plans’ (from 1948) signalling state confidence in target industries",
    "EPA acted as ‘economic cheerleader and sign-painter’ (Gordon, 2003)",
    "Economic Deliberation Council (est. 1952): advisory body of businessmen, bankers, academics; deliberated on long-range economic plans at PM's request"] });

add("Japan · Government intervention", { id:"ea-jp-incomedoubling", title:"National Income Doubling Plan", when:"1960",
  q:"What were the aims, elements and results of Ikeda's National Income Doubling Plan?",
  clue:"1960 plan under PM Ikeda to raise national income twofold in 10 years, with exports focused on machinery for North American/European markets.",
  pts:["Aimed to double national income within 10 years; exports to expand ~10% p.a., focused on machinery and North American/European markets",
    "Five elements: (1) expand social overhead capital; (2) strengthen industrial structure (shift to heavy/chemical industries)",
    "(3) promote trade & international cooperation; (4) improve labour quality/science & tech; (5) raise living standards of low-income groups",
    "Result: growth in the plan's first year hit ~10% vs. the 7.2% p.a. envisaged",
    "Export success now rested on efficiency, not low wages"] });

add("Japan · Government intervention", { id:"ea-jp-indpolicy-tools", title:"Industrial policy: tools & mechanisms", when:"1950s–1970s",
  q:"What were the four categories of tools in Japan's industrial policy?",
  pts:["1. Creating infrastructure: funded roads, industrial ports, water supplies, power plants for all industries",
    "2. Allocating resources among industries: subsidies + import protection to targeted industries until internationally competitive",
    "Import bans lifted only once domestic industry matured: buses/trucks 1961, colour TVs 1964, computers 1975",
    "3. Industrial restructuring: cartelisation during depressions/for ‘rationalisation’; coordinated capacity cuts and plant investment",
    "4. Support for SMEs: measures to protect small/medium firms most exposed to structural change and business cycles"] });

add("Japan · Government intervention", { id:"ea-jp-infant", title:"Protection of infant industries", when:"1950s–1960s",
  q:"How did Japan protect its infant industries?",
  pts:["Quotas & high tariffs shielded the domestic market while allowing domestic firms to compete within it",
    "E.g. automobile industry — near-total import ban for a decade+ from the 1950s",
    "Tariffs rose with technological sophistication: virtually 0% on raw materials → over 60% on finished goods like automobiles",
    "1960s: ~400 product categories under import restriction; until 1962 the default was ‘banned unless listed’ rather than ‘allowed unless listed’",
    "Strategy: import substitution → export promotion once increasing returns to scale lowered costs (most visible in steel & shipbuilding)"] });

add("Japan · Government intervention", { id:"ea-jp-pickwinners", title:"‘Picking winners’: targeted industries over time", when:"1950s–1980s",
  q:"How did Japan's targeted (‘picking winners’) industries change from the 1950s to the 1980s?",
  pts:["From 1950s: labour-intensive manufactures (coal-mining, ship-building, textiles) — exploited Japan's cheap-labour comparative advantage",
    "From 1960s: capital/technology-intensive industries (petrochemicals, steel, automobiles, oil-refining) as wage advantage eroded and other Asian economies undercut Japan on labour costs",
    "From 1970s: technology-intensive/knowledge industries (semiconductors, computers) — leveraging skilled scientists/engineers after oil shocks reduced demand for heavy industry",
    "From 1980s: high-quality technology (electronics, memory chips, supercomputers) — e.g. VLSI cooperative R&D programme (Toshiba, Hitachi, Mitsubishi)",
    "Ito (1996): exports shifted from textiles and toys (1950s) to consumer electronics, steel, ships (1960s–70s) to automobiles and semiconductors (1980s)"] });

add("Japan · Government intervention", { id:"ea-jp-vlsi", title:"VLSI case study (semiconductors)", when:"1970s–1987",
  q:"How did the VLSI programme illustrate MITI's industrial policy, and what did it achieve?",
  clue:"MITI compelled Toshiba, Hitachi and Mitsubishi into a cooperative R&D laboratory backed by $116m in subsidies.",
  pts:["MITI compelled reluctant national champions (Toshiba, Hitachi, Mitsubishi) into a cooperative R&D laboratory",
    "Backed by $116m in subsidies",
    "Japan's semiconductor equipment market share grew from 10% (1970s) to 35% (1987)",
    "Produced 1,000+ patents",
    "Helped Japanese firms catch up with IBM in IC production"] });

add("Japan · Government intervention", { id:"ea-jp-fiscal", title:"Fiscal tools: FILP, tax incentives, rationalisation", when:"1948–1964",
  q:"What fiscal tools did the Japanese government use to promote industry?",
  pts:["FILP (Fiscal Investment and Loan Program, from 1948): channelled tax revenue + repayable funds into long-term, low-interest loans for firms, hospitals, infrastructure, SMEs",
    "Number of FILP agencies grew from 14 (1953) to 52 (1975)",
    "Effective corporate tax rate 19–22% (vs. 27–31% in the US); larger/faster-growing firms enjoyed lower effective rates via depreciation allowances",
    "Enterprise Rationalization Promotion Law (1952): tax relief for firms investing in productivity-boosting equipment; subsidies for R&D",
    "Special Measures Law for Promotion of Designated Industries (1964): MITI reorganised ‘excess capacity’ sectors (e.g. textiles) via subsidised consolidation"] });

add("Japan · Government intervention", { id:"ea-jp-monetary", title:"Monetary policy & managing external shocks", when:"1949–1985",
  q:"How did Japanese monetary policy manage inflation and external shocks from 1949 to 1985?",
  pts:["Postwar policy of ‘cheap money’ — low, tightly managed interest rates gave growing industries access to low-cost funds",
    "Bretton Woods era (1949–71): monetary policy subordinated to defending the fixed exchange rate; inflation kept under 5% despite ~10% growth",
    "1972–75: inflation spiked to 25% (oil shock); sharp 1974 recession + tightening brought it down",
    "1975–85: BOJ began announcing money-supply forecasts (from 1975)",
    "Inflation fell to <3% by mid-1980s without sacrificing growth"] });

add("Japan · Government intervention", { id:"ea-jp-liberalisation", title:"Gradual economic liberalisation", when:"1970s–c.1990",
  q:"Why and how did Japan gradually liberalise its economy from the 1970s?",
  pts:["From the 1970s–80s: gradual economic liberalisation",
    "Trade imbalances with the US (exports $666m→$9.6bn, 1958–73) forced Japan to open markets",
    "Capital controls lifted in the first half of the 1980s",
    "Interest rate regulations fully lifted by ~1990"] });

add("Japan · Government intervention", { id:"ea-jp-gov-eval", title:"Evaluating government intervention (Japan)", when:"1947–1991",
  q:"Evaluate the role of government intervention in Japan's economic miracle.",
  pts:["Strength: MITI's coordinated ‘picking winners’ strategy (steel, autos, semiconductors) gave Japan a first-mover advantage",
    "It matched investment to genuine comparative-advantage trajectories",
    "Limitation: industrial policy alone cannot explain the miracle — private firms (keiretsu) sometimes acted against MITI advice (e.g. Honda's entry into autos)",
    "Government protection also entrenched inefficient ‘sunset’ industries needing costly adjustment support later",
    "Counter-argument: some scholars (e.g. revisionists) argue market forces and firm-level dynamism did more work than the state"] });

/* ── Japan · Keiretsu system ── */
add("Japan · Keiretsu system", { id:"keiretsu", title:"Keiretsu", when:"1950s",
  q:"What was a keiretsu, and which were the ‘Big Six’?",
  clue:"Interdependent groups of 20–40 companies across industries, each with a main bank and cross-shareholdings; Mitsui, Mitsubishi and Sumitomo led the Big Six.",
  pts:["An interdependent group of 20–40 companies across industries",
    "Each with a main bank, cross-shareholdings, and coordinated group strategy",
    "The ‘Big Six’ horizontal keiretsu formed in the 1950s",
    "Big Six: Mitsui, Mitsubishi, Sumitomo, Fuyo, Sanwa, Dai-Ichi Kangyo"] });

add("Japan · Keiretsu system", { id:"ea-jp-horizontal", title:"Horizontal keiretsu", when:"1950s–1970s",
  q:"How did horizontal keiretsu work and what benefits did they bring?",
  pts:["Firms across different industries, linked by cross-shareholding + a group bank (which mobilised financing)",
    "And a trading company (key in the 1950s when forex controls were tight)",
    "Provided mutual insurance in crises — e.g. Sumitomo Bank rescued Mazda in the 1970s with a new CEO + financial guidance",
    "Rarely oligopolistic — member firms still competed, increasing efficiency"] });

add("Japan · Keiretsu system", { id:"ea-jp-vertical", title:"Vertical keiretsu", when:"1950s–1980s",
  q:"How did vertical keiretsu work and what benefits did they bring?",
  pts:["A pyramidal chain — an apex firm holding controlling shares in tiers of subsidiaries",
    "Three types: production (e.g. Toyota's supplier network), distribution (e.g. Matsushita), capital (e.g. Tokyu)",
    "High branch specialisation; core firms often spun off new businesses via subsidiaries (e.g. Toyota & Matsushita both entered prefab housing)",
    "Reduced production costs via economies of scale",
    "Built trust/reputation through repeated manufacturer–supplier transactions"] });

add("Japan · Keiretsu system", { id:"ea-jp-keiretsu-functions", title:"Keiretsu functions: R&D, financing, symbiosis with MITI", when:"1950s–1980s",
  q:"How did keiretsu support R&D and financing, and how were they linked to MITI?",
  pts:["R&D: vertical keiretsu gave low-cost internal equity finance, freeing cash flow for R&D; apex firms coordinated/outsourced product development for faster, cheaper innovation",
    "Indirect financing: the nucleus bank coordinated credit needs across the group, reducing total risk",
    "Bank bundled capital requirements to access international markets that smaller members alone could not reach",
    "Ozkan (2011): MITI aided keiretsu firms in ‘strategic industries’ with R&D subsidies, capital access and trade protection",
    "Strong positive correlation between MITI-designated strategic industries and keiretsu investment",
    "McGuire (2002): structural autonomy and group connection gave each member firm a competitive edge — in-group loans from main banks, domestic markets, international marketing capabilities"] });

add("Japan · Keiretsu system", { id:"ea-jp-lifetime", title:"Lifetime employment & labour relations", when:"1950s–1980s",
  q:"How did lifetime employment work, and how did it benefit Japanese firms?",
  pts:["Regular workers guaranteed a job for life; firms don't lay off — low involuntary job-change rates",
    "Because workers rarely quit, firms could invest in costly on-the-job training and job rotation (firm-specific human capital and versatility)",
    "Deferred payment (steep seniority-based wage/severance curve) discourages shirking or quitting",
    "Via enterprise unions, secured a flexible, cooperative multi-skilled workforce enabling Just-In-Time production and kaizen (continuous improvement)",
    "Self-sustaining cycle: lifetime employment → higher firm growth → enables continued lifetime employment"] });

add("Japan · Keiretsu system", { id:"ea-jp-keiretsu-eval", title:"Evaluating the keiretsu system", when:"1950s–1991",
  q:"Evaluate the role of the keiretsu system in Japan's growth.",
  pts:["Strength: kept Japan's largest firms internationally competitive by pooling capital, sharing R&D/technology costs",
    "Insulated firms from short-termist equity-market pressure",
    "Limitation: cheap, guaranteed intra-keiretsu capital could encourage excessive debt/risk-taking",
    "Size/opacity of keiretsu networks reduced market transparency (‘the whole of Japan is one big keiretsu’ — Kensy, 2001)",
    "Link to government: keiretsu strategy tracked MITI's designated ‘strategic industries’ — factors reinforcing each other"] });

/* ── Japan · Socio-economic factors ── */
add("Japan · Socio-economic factors", { id:"ea-jp-education", title:"Education reform & workforce", when:"1946–1980s",
  q:"How did education contribute to Japan's economic growth?",
  pts:["Compulsory education extended to 9 years (6 elementary + 3 junior high), modelled on the US system (Education Reform Council, Aug 1946)",
    "Progression to senior high school: 43% (1950) → 55% (1960) → 82% (1970) → 94% (1980)",
    "By 1971, 91% of the workforce had high-school education — the world's highest at the time",
    "~400 universities by 1965, ~500 by the 1980s, enrolling ~2 million students (~40% of the age cohort)",
    "A well-educated, disciplined workforce allowed flexible adaptation to new technologies and smooth transition into higher-value industries"] });

add("Japan · Socio-economic factors", { id:"ea-jp-savings", title:"Frugality & high savings rate", when:"1950s–1970s",
  q:"What do the statistics show about Japan's savings rate, and why was it significant?",
  pts:["Household savings rate: <10% (early 1950s) → 15% (1960) → >20% (1970 onward)",
    "National savings peaked at 31% in the early 1970s",
    "1959–70 average (personal savings/disposable income): Japan 18.3% vs. Germany 12% vs. US 7%",
    "Household savings, channelled through banks, funded capital investment domestically",
    "Crucial given heavy capital controls restricting foreign fund inflows"] });

add("Japan · Socio-economic factors", { id:"ea-jp-savings-reasons", title:"Reasons for high savings (Yamamura)", when:"1976",
  q:"Why did Japanese households save so much (Yamamura, 1976 — background only)?",
  pts:["Rapidly rising income outpacing consumption habits",
    "Semi-annual bonuses viewed as ‘transitory’ income; seniority-based wages",
    "Low financial-asset-to-income ratio; target savings for housing/education",
    "Weak social welfare provision; tax incentives for savings; cultural thrift",
    "Notes flag this as background only, not required for exam"] });

add("Japan · Socio-economic factors", { id:"ea-jp-consensus", title:"Consensus-building culture", when:"1960s",
  q:"How did Japan's consensus-building culture aid economic adaptation?",
  pts:["Decision-making by consensus — the crucial step is defining the question/problem",
    "Once consensus is reached, implementation faces minimal resistance",
    "Toyo Rayon closed its entire rayon-making operation overnight to pivot to synthetic fibres (rather than gradually phasing out, as Western firms would)",
    "Toyo Rayon retained all employees under lifetime employment norms",
    "MITI reversed its opposition to Japanese firms ‘going multinational’ within just three years (1966–69) once consensus shifted"] });

add("Japan · Socio-economic factors", { id:"ea-jp-socio-eval", title:"Evaluating socio-economic factors", when:"1947–1991",
  q:"How should socio-economic factors be evaluated in explaining Japan's growth?",
  pts:["Best framed as enabling/multiplier factors rather than standalone drivers",
    "High savings fed capital to banks/keiretsu",
    "Education produced the skilled labour MITI's targeted industries needed",
    "For ‘to what extent was government intervention the most important factor’: argue socio-cultural factors were the precondition that made government and keiretsu strategies effective"] });

/* ── Japan · International developments ── */
add("Japan · International developments", { id:"ea-jp-occupation", title:"Allied Occupation phases", when:"1945–1952",
  q:"What were the three phases of the Allied Occupation of Japan?",
  pts:["1945–47 Punish & reform: war crimes trials; SCAP dismantled the military; land reform; attempted zaibatsu break-up",
    "1947 Constitution: Art. 9 pacifism, parliamentary power, women's rights",
    "1947/48–50 ‘Reverse Course’: fear of a weak economy boosting domestic communism (esp. after Chinese Civil War) shifted focus to economic rehabilitation",
    "Korean War (1950) let Japan become the UN forces' ‘supply depot’",
    "1950–52 Formal peace: San Francisco Peace Treaty (Sept 1951, 49/52 nations signed — USSR, Poland, Czechoslovakia held out)",
    "US kept bases in Japan in exchange for a bilateral security pact"] });

add("Japan · International developments", { id:"ea-jp-security", title:"US security guarantee & the Yoshida Doctrine", when:"1951–1970",
  q:"How did the US security guarantee benefit Japan's economy?",
  clue:"1951 treaty (revised 1960) letting US bases stay in Japan in return for American defence; Japan could pour resources into rebuilding.",
  pts:["US-Japan Mutual Security Treaty (1951, revised 1960): allowed US bases in Japan in exchange for a US defence commitment",
    "The ‘Yoshida Doctrine’ let Japan rely on the US for security and focus resources on economic rebuilding",
    "Japan's defence spending as % of GDP fell 20% between 1958–60 (sharpest shift of the postwar era)",
    "Below 1% of GDP by 1970",
    "Patrick and Rosovsky (1976): Japan's economy would have been 30 percent smaller by 1976 if it had shouldered its own defence burden (cited in Beckley et al., 2018)"] });

add("Japan · International developments", { id:"ea-jp-techtransfer", title:"US technology transfer", when:"1950–1962",
  q:"What was the scale and effect of US technology transfer to Japan?",
  pts:["1950–62: 1,998 technical cooperation contracts signed, ~2/3 with American firms",
    "Concentrated in iron & steel, petrochemicals, electronics, motor manufacturing",
    "By the early 1960s the technology gap had virtually closed in most industries",
    "Imported tech was often made ~20% more ‘efficient’ than in its country of origin"] });

add("Japan · International developments", { id:"ea-jp-toyota", title:"Toyota case study (Fujimoto)", when:"1951–1959",
  q:"How does Toyota illustrate the impact of US technology transfer (Fujimoto, 1998)?",
  clue:"Carmaker's leaders toured Ford's River Rouge plant in the early 1950s and launched a Five-Year Modernization Plan.",
  pts:["Toyota leaders visited Ford's River Rouge plant (early 1950s)",
    "Launched a Five-Year Modernization Plan (1951–55)",
    "Adopted conveyor-belt lines, standardised pallettes, the suggestion-box system, and TWI (Training Within Industry)",
    "Built Japan's first high-volume passenger-car plant (Motomachi, 1959)",
    "Output reached 100,000 units/year by decade's end"] });

add("Japan · International developments", { id:"ea-jp-usmarket", title:"Access to the US market & GATT", when:"1955–1960s",
  q:"How did Cold War logic give Japan access to the US market?",
  pts:["Japan joined GATT in 1955, but 14/32 members initially refused ‘most-favoured-nation’ status",
    "Balance-of-payments crisis followed the end of the Korean War boom",
    "Fear of Japan ‘falling to the communist bloc’ led Eisenhower/Kennedy/Johnson administrations to resist US protectionist pressure and open the US market",
    "US purchases from Japan rose >150% (1958–60), giving Japan its first-ever trade surplus",
    "The US absorbed >30% of Japan's exports over the following decade",
    "Forsberg (2000): the US desire to consolidate the Cold War alliance let Japan crack the lucrative American market, and Japanese industry seized the moment"] });

add("Japan · International developments", { id:"ea-jp-nixonshock", title:"Nixon Shock", when:"1971",
  q:"What was the impact of the Nixon Shock on Japan?",
  clue:"1971 US decision ending Gold-Dollar convertibility; the yen appreciated 16% by year's end.",
  pts:["Ended Gold-Dollar convertibility",
    "Yen appreciated 16% by end-1971",
    "Japan's balance of payments swung from +$4.6bn (1971) to –$10bn (1973)",
    "Growth fell from ~10% (1960s avg.) to 3% (1971)",
    "Shows US goodwill was not unconditional"] });

add("Japan · International developments", { id:"koreaprocurement", title:"Korean War special procurements (tokuju)", when:"1950–1953",
  q:"How did the Korean War stimulate the Japanese economy?",
  clue:"Japan became the staging/supply base for UN forces, earning ‘special procurements’ for trucks, ships, tanks and aircraft repair.",
  pts:["Japan became the staging/supply base for UN forces — ‘special procurements’ (tokuju) for trucks, ships, tanks, aircraft repair",
    "Boosted textile, metal, chemical, transport, electricity industries",
    "June 1950–June 1951: manufacturing production rose 50%, productivity 30%, wholesale prices 52%",
    "Manufacturing production index: 68.9 (1949) → 189.4 (1955)",
    "Special procurement income: $149m (1950) → $824m (1952); averaged ~$500m p.a. through 1961",
    "Plus US troop/dependent spending = 37% of all foreign exchange receipts (1952–53)",
    "Roughly doubled import capacity for raw materials — funded expansion in bottleneck industries (electric power, steel, marine transport, coal)"] });

add("Japan · International developments", { id:"ea-jp-vietnam", title:"Vietnam War stimulus", when:"1965–1972",
  q:"How did the Vietnam War benefit Japan's economy?",
  pts:["Japan earned ~$1bn/year (Schaller, 1997)",
    "Via military procurement, ship-repair contracts, and exports to a US-backed South Vietnamese market",
    "Japan's share of world GDP: 5.7% (1964, below France/W. Germany/Britain)",
    "→ 12.9% (1973, equal to Britain + France combined)"] });

add("Japan · International developments", { id:"ea-jp-oil", title:"Impact of the 1970s oil crises", when:"1973–1989",
  q:"How did Japan respond to the 1970s oil crises?",
  pts:["Brief recession after the first oil shock; Japan recovered faster from the second shock than the first",
    "Partly via nuclear power (producing 25% of electricity by 1985)",
    "1975–89: Japan grew 4–5% p.a. — roughly double the pace of major European economies; the US suffered stagflation",
    "Trade reoriented: imports from the Middle East ~20x higher in 1980 than 1970 to offset oil costs",
    "Southeast Asia & Europe remained key partners for raw materials and emerging consumer-goods markets"] });

add("Japan · International developments", { id:"ea-jp-intl-eval", title:"Evaluating international developments (Japan)", when:"1945–1991",
  q:"Evaluate the importance of international developments in Japan's economic rise.",
  pts:["Arguably the precondition for the other three factors: without US security guarantees, technology transfer and market access, savings, education and MITI's policy would have had far less to work with",
    "‘Privileged geopolitical environment’ (Beckley et al., 2018): Japan's timing (rebuilding during the Cold War, when the US needed a strong ally) was fortune, not policy choice",
    "This complicates narratives crediting Japanese agency alone",
    "Counter: Japan still had to convert US support into productive capacity — contrast other US Cold War allies that did not achieve comparable growth",
    "Domestic factors mattered for exploiting the opportunity"] });

/* ── Japan · Conclusion ── */
add("Japan · Conclusion", { id:"ea-jp-beckley", title:"Beckley, Horiuchi & Miller (2018) verdict", when:"2018",
  q:"What is Beckley, Horiuchi and Miller's (2018) overall verdict on Japan's rise?",
  pts:["Japan rose in part because of its institutions and policies",
    "The effectiveness of those institutions and policies was enhanced by Japan's privileged geopolitical environment",
    "Without such advantages, Japan might still have achieved solid economic growth, but probably not an economic miracle"] });

add("Japan · Conclusion", { id:"ea-jp-theses", title:"Japan essay toolkit: thesis options", when:"1947–1991",
  q:"What thesis options can be argued on the rise of the Japanese economy?",
  pts:["(a) International factors were necessary but not sufficient — domestic institutions converted opportunity into growth",
    "(b) Government intervention was the primary coordinating factor that harnessed keiretsu capital, socio-cultural savings/education, AND international opportunity",
    "(c) No single factor dominates — argue via phases",
    "Occupation/Korean War era = international; 1955–73 high growth = government + keiretsu",
    "1974–91 stable growth = adaptive resilience across all factors"] });

add("Japan · Conclusion", { id:"ea-jp-linkages", title:"Japan: cross-factor linkages & limitations", when:"1947–1991",
  q:"What cross-factor linkages and limitations should be cited in a Japan essay?",
  pts:["MITI ↔ keiretsu (strategic industry correlation)",
    "Household savings → bank lending → keiretsu investment",
    "US security umbrella → low defence spending → resources for MITI-directed industrial investment",
    "Education → skilled labour for MITI's targeted high-tech industries",
    "Limitations: trade friction with the US (autos, steel, semiconductors), sunset-industry adjustment costs",
    "1990 bubble collapse as evidence the ‘miracle’ had structural fragilities (Great Leap-style social costs are absent)"] });

/* ══════════════════════ CHINA ══════════════════════ */

/* ── China · Overview ── */
add("China · Overview", { id:"ea-cn-eq", src:SC, title:"China: essential question & factor clusters", when:"1978–2000", qs:"notes",
  q:"What led to the rise of the Chinese economy from 1978 to 2000?",
  pts:["Problems of the Maoist economy (push factor)",
    "State intervention (Deng's leadership & institutions)",
    "Market-oriented reforms (HRS, SOE/TVE reform)",
    "Open door policy (SEZs, FDI, WTO); International developments (Sino-US rapprochement, regional ties)",
    "Distinctive vs. Japan: a transition from a command to a market economy, not merely industrial catch-up — always situate reforms against the Maoist baseline"] });

add("China · Overview", { id:"ea-cn-timeline1", src:SC, title:"China timeline, 1949–1978", when:"1949–1978",
  q:"Outline the key events in China from 1949 to 1978.",
  pts:["1949: Mao declares the PRC; 1953: First Five Year Plan begins",
    "1958: Great Leap Forward formally adopted; 1966: Cultural Revolution launched",
    "1971–72: PRC admitted to UN; Nixon visits China (Shanghai Communiqué)",
    "1976: Death of Mao Zedong",
    "1978: Deng becomes paramount leader (3rd Plenum, 11th Central Cttee, Dec)"] });

add("China · Overview", { id:"ea-cn-timeline2", src:SC, title:"China timeline, 1979–2001", when:"1979–2001",
  q:"Outline the key events in China from 1979 to 2001.",
  pts:["1979: US recognises Beijing; Household Responsibility System introduced",
    "1989: Tiananmen Square demonstrations → Rectification period",
    "1992: Deng's Southern Tour — reignites reform & opening-up",
    "1997: Death of Deng Xiaoping",
    "2000–01: US grants permanent normal trade relations; China accedes to WTO (Nov 2001)"] });

add("China · Overview", { id:"ea-cn-phases", src:SC, title:"Phases of economic policy", when:"1978–1996",
  q:"What were the four phases of Chinese economic policy, 1978–1996?",
  pts:["1978–82 Readjustment: industrial liberalisation; fiscal readjustment; state price-structure changes; SEZs established",
    "1982–89 Beginnings of market socialism: decollectivisation; further industrial liberalisation; early market-based pricing",
    "1989–91 Rectification (post-Tiananmen): suppression of dissent; spending cuts; reform/opening paused",
    "1991–96 Completion of market socialism: price liberalisation completed; faster opening-up; stock markets introduced; fiscal/monetary expansion"] });

add("China · Overview", { id:"ea-cn-players", src:SC, title:"Key players in China's reform", when:"1976–1997",
  q:"Who were the key players in China's economic reform and what were their roles?",
  pts:["Deng Xiaoping (1904–1997): ‘paramount leader’ from 1978; Long March survivor; launched reform & opening-up (‘Socialism with Chinese Characteristics’)",
    "Zhao Ziyang (Premier, 1980–89): handpicked by Deng; reformed the commune system; introduced the contract responsibility system",
    "Hu Yaobang (Gen. Sec., 1980s): chosen by Deng to inaugurate reforms in government/CCP",
    "Mao Zedong (1893–1976): founding CCP Chairman; his death (1976) and the discrediting of the Cultural Revolution created the political opening for reform"] });

add("China · Overview", { id:"ea-cn-indicators", src:SC, title:"Indicators of China's transformation", when:"1954–2001",
  q:"What statistics indicate the scale of China's economic transformation?",
  pts:["Pre-reform growth (1954–77) highly volatile: from +21.3% (1958) to –27.3% (1961)",
    "Post-1978: sustained growth averaging 9.2% p.a., rising to 12.1% p.a. in the 1990s; still 7% in 2001",
    "Exports rose 14-fold: $10bn (1978, 0.8% of world exports) → $148.8bn (1995, ~3.5% of world exports)",
    "Total trade $509.8bn (2001) — 6th largest in the world",
    "Labour productivity rose across the economy 1978–2001, driven mainly by the secondary (industrial) sector"] });

add("China · Overview", { id:"ea-cn-causalchain", src:SC, title:"China: snapshot of factors & causal chain", when:"1978–2000",
  q:"What is the causal chain linking the factors behind China's rise?",
  pts:["Domestic: (1) Problems of the Maoist economy (2) State intervention (3) Market-oriented reforms (4) Open door policy",
    "International: Sino-US rapprochement, Japan/Asian Tigers, ASEAN, FDI",
    "Maoist economic failure created the political case for reform → Deng's state intervention set the direction",
    "→ market reforms + opening-up delivered growth",
    "→ international factors provided capital, technology and market access to sustain it"] });

/* ── China · Problems of the Maoist economy ── */
add("China · Problems of the Maoist economy", { id:"maoistfail", src:SC, title:"Structural weaknesses of the Maoist economy", when:"1949–1976",
  q:"What were the structural weaknesses of the Maoist economy?",
  clue:"Autarchy, a US-led embargo and the Third Front Programme left late-1970s industry too small and inefficient (Bramall, 2009).",
  pts:["Bramall (2009): late Maoist industry too small to supply the producer goods needed, and inefficient",
    "Autarchic tendencies + US-led partial trade embargo cut producers off from international competition, information, and comparative-advantage-based specialisation",
    "Output skewed toward military production (Third Front Programme, 1964) — shortages in agricultural inputs (chemicals) and consumer goods",
    "No competition: state-owned/collective sector profit rates inflated by absent import competition and non-existent FDI",
    "Factory directors' autonomy undermined by interference from Party secretaries, local government, and ministries"] });

add("China · Problems of the Maoist economy", { id:"ea-cn-command", src:SC, title:"Command-economy macro features", when:"1949–1978",
  q:"What were the macroeconomic features of China's command economy?",
  pts:["Household income <60% of national income",
    "Household savings small (state enterprises did most saving)",
    "State carried out most investment",
    "Bank lending largely restricted to short-term trade finance",
    "Persistent shortages"] });

add("China · Problems of the Maoist economy", { id:"ea-cn-glf", src:SC, title:"Great Leap Forward: aims & methods", when:"1958–1962",
  q:"What were the aims of the Great Leap Forward, and what went wrong in agriculture and industry?",
  clue:"Mao's 1958 campaign of mass rural communes aiming to double grain and steel output; backyard furnaces produced unusable pig iron.",
  pts:["Aim: bypass gradual industrialisation via mass rural communes and labour-intensive methods; targets — double grain and steel output",
    "Private plots abolished; poorly planned irrigation projects",
    "Anti-sparrow campaign caused locust swarms and crop failure",
    "Inflated harvest reports led to over-taxation even as real output collapsed",
    "‘Backyard steel furnaces’ produced low-quality unusable pig iron; millions of farm labourers diverted to steelmaking, straining food supply"] });

add("China · Problems of the Maoist economy", { id:"ea-cn-glf-impact", src:SC, title:"Impact of the Great Leap: ‘Three Bitter Years’", when:"1959–1962",
  q:"What was the impact of the Great Leap Forward?",
  pts:["The ‘Three Bitter Years’",
    "An estimated 30 million deaths (Becker, 1996)",
    "30–40% of housing stock demolished for raw materials",
    "Industrial investment cut 82% (1960–62) amid fiscal crisis"] });

add("China · Problems of the Maoist economy", { id:"ea-cn-culturalrev", src:SC, title:"Cultural Revolution", when:"1966–1976",
  q:"What were Mao's goals in the Cultural Revolution and what was its economic cost?",
  clue:"Decade of Red Guard persecution of ‘bourgeois’ individuals launched in 1966; Lamb (2005) says it ironically led to capitalism.",
  pts:["Mao's goals: replace successors with loyalists; rectify the CCP; give youth a ‘revolutionary experience’; reduce elitism in education/health/culture",
    "Red Guards persecuted ‘bourgeois’/‘insufficiently revolutionary’ individuals — an estimated 0.5–2 million deaths from torture, beatings, forced suicide",
    "Economic cost: urban production fell as workers engaged in political struggle; agricultural output dropped; incomes stagnated",
    "Lamb (2005): Mao intended it to strengthen communism, but it ironically had the opposite effect, leading to China's embrace of capitalism"] });

add("China · Problems of the Maoist economy", { id:"ea-cn-pressures", src:SC, title:"Pressures for reform (Naughton)", when:"1977–1978",
  q:"What pressures for reform existed by 1977, and how did the leadership initially respond?",
  pts:["By 1977, planners confronted an economy not under their control, consistently missing priority output targets",
    "Agriculture identified as the key bottleneck",
    "Initial instinct was NOT reform but to rebuild the planned economy",
    "Only after further crisis did the leadership shift toward a genuinely different economic system (Naughton, 2010)"] });

add("China · Problems of the Maoist economy", { id:"ea-cn-push-eval", src:SC, title:"Evaluating ‘push’ factors", when:"1978",
  q:"How should the failure of the Maoist economy be evaluated as a factor in China's rise?",
  pts:["A necessary but not sufficient condition",
    "Explains WHY reform was politically possible/urgent in 1978, but not HOW the specific reform path (gradualist, dual-track) succeeded",
    "Contrast: unlike the USSR/Eastern Europe's ‘big bang’ transitions, China's leadership retained tight political control (one-party state)",
    "While gradually introducing market mechanisms — this hybrid approach is central to any ‘how far’ evaluation"] });

/* ── China · State intervention ── */
add("China · State intervention", { id:"ea-cn-3rdplenum", src:SC, title:"Deng & the 3rd Plenum", when:"Dec 1978",
  q:"What did the 3rd Plenum of December 1978 change, and what challenges did Deng face?",
  clue:"December 1978 Party meeting where class struggle was replaced by modernisation and development as the primary objective.",
  pts:["Deng replaced ‘class struggle’ with modernisation & development as the Party's primary objective",
    "‘Socialism with Chinese Characteristics’ (per Zhao Ziyang)",
    "Scale of the challenge: 6.5bn yuan government deficit; 20 million unemployed",
    "~100 million undernourished; outdated military and science/tech base"] });

add("China · State intervention", { id:"ea-cn-fourmods", src:SC, title:"The Four Modernisations", when:"1963 / 1978",
  q:"What were the Four Modernisations and their aims?",
  pts:["Originally announced by Zhou Enlai (1963); championed by Deng from 1978 as the basis for 1980s–90s growth",
    "Agriculture: raise productivity via new methods/technology; address food shortages first, since overall production growth depended on securing the food supply",
    "Industry: shift focus from heavy industry to light industry/consumer goods, building on agricultural reform successes",
    "National defence: modernise the military (Maoist ‘people's war’ seen as redundant post-Vietnam war debacle and given developing detente with the US)",
    "Science & technology: reverse Cultural-Revolution-era stagnation (the ‘Lost Generation’); crash-trained 800,000+ researchers; sent students abroad"] });

add("China · State intervention", { id:"ea-cn-socialismcc", src:SC, title:"‘Socialism with Chinese Characteristics’", when:"1978–2000",
  q:"What did ‘Socialism with Chinese Characteristics’ mean in practice?",
  pts:["Pragmatic blend: market-oriented policies (FDI, private entrepreneurship, market pricing)",
    "Coexisting with CCP political monopoly and state control of key sectors (banking, energy, telecoms)",
    "Gradual, incremental reform (unlike Soviet/Eastern European ‘shock therapy’) — designed to avoid societal chaos while still transforming the economy",
    "Deng: ‘It does not matter if a cat is black or white; as long as it catches mice, it is a good cat.’"] });

add("China · State intervention", { id:"ea-cn-banking", src:SC, title:"Building a modern banking system", when:"1978–1990",
  q:"How did China build a modern banking system after 1978?",
  pts:["Pre-1978: single bank (PBOC) controlled ~93% of financial assets and handled nearly all transactions",
    "1978–84: PBOC became the central bank; four specialised state banks created",
    "Bank of China (foreign trade), PCBC (fixed investment), ABC (rural banking), ICBC (1984, remaining commercial business)",
    "1980s: growth of regional banks, Rural/Urban Credit Cooperatives, Trust & Investment Corporations",
    "1990: two stock exchanges established (Shanghai SHSE, Shenzhen SZSE) — grew rapidly through the 1990s"] });

add("China · State intervention", { id:"ea-cn-1984lending", src:SC, title:"1984 bank incentive rule & lending surge", when:"1984",
  q:"How did the 1984 bank asset-allocation rule show institutional reform reshaping bank behaviour?",
  pts:["1984 rule based local-bank asset allocation on year-end loan/deposit balances",
    "Triggered a lending surge",
    "Rural Credit Cooperatives' loans outstanding doubled in a single year (1984)",
    "Illustrates how institutional reform reshaped bank behaviour and fuelled credit-driven growth"] });

add("China · State intervention", { id:"ea-cn-education", src:SC, title:"Education reform", when:"1978–2000",
  q:"How did China reform education after 1978?",
  pts:["Shift from radical socialist agenda to: (1) quality/labour-market relevance, (2) efficient/private resource use, (3) tolerance of disparities in pursuit of quality (later tempered by rural access efforts)",
    "Higher education (shut for 6 years in the Cultural Revolution) reinvigorated",
    "National university entrance exam resumed; administration decentralised across government tiers",
    "Overseas study: 2,124 students sent abroad (1980) → 38,989 (2000)",
    "Deng personally pushed overseas study as key to scientific modernisation"] });

add("China · State intervention", { id:"ea-cn-inflation1", src:SC, title:"Inflation control cycles, 1979–1985", when:"1979–1985",
  q:"How did the Chinese government manage overheating during rural and urban reform (1979–85)?",
  pts:["1979–83 (rural reform): inflation 2%→6% (1980)",
    "Government cut budget deficit by 2/3, halved money growth → inflation fell to 1.9% avg. (1981–83)",
    "1984–85 (urban reform): inflation rose to 8.8% (1985) as household income outran consumer-goods supply",
    "Credit controls, higher interest rates → credit growth fell 31%→22%"] });

add("China · State intervention", { id:"ea-cn-inflation2", src:SC, title:"Inflation control cycles, 1986–1995", when:"1986–1995",
  q:"How did the Chinese government manage the inflation spikes of 1988 and 1994?",
  pts:["1986–90: inflation hit 27% (1988)",
    "September 1988 tightening + price controls → inflation fell to 0.6% (1990)",
    "1994 (yuan devaluation): inflation soared to 24% → credit/investment curtailed",
    "CPI growth fell from 24.1% (1994) to 17.1% (1995); growth only dipped slightly, to 10.2%"] });

add("China · State intervention", { id:"southerntour", src:SC, title:"Deng's Southern Tour", when:"1992",
  q:"Why did Deng make the Southern Tour, and what was its impact?",
  clue:"Retired leader's 1992 trip to Shenzhen, Zhuhai and Shanghai calling for bolder liberalisation after post-Tiananmen stagnation.",
  pts:["Context: post-Tiananmen economic sluggishness and political caution had stalled reform (1989–91 Rectification)",
    "Deng (retired from formal posts) toured Shenzhen, Zhuhai, Shanghai, calling for bolder liberalisation, FDI, and entrepreneurship",
    "Revitalised reform momentum; boosted reformist allies (e.g. Zhu Rongji)",
    "Oct 1992 — 14th Party Congress formally adopted the concept of a ‘socialist market economy’",
    "Deng: Shenzhen should be bolder in Reforms and Opening-up, dare to make experiments, and ‘should not act as women with bound feet’"] });

add("China · State intervention", { id:"ea-cn-state-eval", src:SC, title:"Evaluating state intervention (China)", when:"1978–2000",
  q:"Evaluate the role of state intervention in China's economic rise.",
  pts:["Deng's role often framed as the catalyst/coordinator factor — comparable to MITI's role in Japan",
    "Distinctive in that Deng also had to preserve one-party political control while liberalising economically",
    "Southern Tour shows state intervention was not linear — reform paused (1989–91) and needed a deliberate political relaunch",
    "Unlike Japan's comparatively steady postwar trajectory"] });

/* ── China · Market-oriented reforms ── */
add("China · Market-oriented reforms", { id:"hrs", src:SC, title:"Household Responsibility System (HRS)", when:"from Dec 1978",
  q:"How did the Household Responsibility System work, and what were its results?",
  clue:"Rural reform where the state kept land ownership but families contracted plots, met quotas and kept the surplus.",
  pts:["State retained land ownership; households contracted plots, decided planting/cultivation, met state tax/purchase quotas, kept the remainder",
    "Adoption: 1% (1979) → 45% (1981) → 98% (1983) → 99% (1984)",
    "Agricultural output grew ~9% p.a. through the 1980s",
    "1984 grain output hit a record 407 million tonnes (+33.6% vs. 1978)",
    "Cotton output nearly doubled; meat output +156% by 1988",
    "Naughton (2010): return to household farming was one of the main causes, if not the main cause, of output acceleration — a powerful support for reform in the non-agricultural economy"] });

add("China · Market-oriented reforms", { id:"ea-cn-soe-stages", src:SC, title:"SOE reform: dual-track system stages", when:"1978–1998",
  q:"What were the three stages of state-owned enterprise reform?",
  pts:["1. Management reform (1978–84): pilot autonomy for select enterprises (Sichuan, 1978) to retain a share of profits above quota",
    "Expanded to 6,600 large/medium SOEs by 1980 (60% of budgeted industrial output)",
    "2. Dual-track (1984–92): enterprises could sell above-quota output at up to 20% above the state price; more personnel autonomy; profit tax replaced profit remittance",
    "3. Ownership reform (post-1992): Southern Tour reignited reform; 1995 ‘zhuada fangxiao’ — retain ~500–1,000 large SOEs, lease/sell smaller ones",
    "By 1998, 1/4 of SOEs had restructured (60–70% partly/fully privatised)"] });

add("China · Market-oriented reforms", { id:"ea-cn-soe-effect", src:SC, title:"Effect of SOE reform on ownership", when:"1983–2003",
  q:"What was the effect of SOE reform on China's ownership structure?",
  pts:["Private enterprise numbers rose from 440,000 (1996) to 1.32 million (2001)",
    "Private share: 16.9% → 43.7% of all enterprises",
    "Public sector's share of industrial output fell from 73.4% (1983) to 11.1% (2003)"] });

add("China · Market-oriented reforms", { id:"tves", src:SC, title:"Township & Village Enterprises (TVEs)", when:"1978–2000",
  q:"What were TVEs, and what was their scale?",
  clue:"Small, autonomous, outward-oriented public enterprises owned by local rural governments, subject to hard budget constraints.",
  pts:["Market-oriented public enterprises owned/controlled by local township & village governments/residents",
    "Small, autonomous, outward-oriented, and subject to hard budget constraints (unlike SOEs)",
    "Origins in Great Leap Forward-era ‘commune and brigade enterprises’; gained autonomy once HRS replaced the people's commune system",
    "Generated RMB 3,918bn (30% of gross domestic output) by 1994",
    "Industrial value-added reached 47% of China's total industrial output by 2000"] });

add("China · Market-oriented reforms", { id:"ea-cn-tve-exports", src:SC, title:"TVE exports & employment", when:"1978–1999",
  q:"What do export and employment statistics show about TVEs?",
  pts:["~80,000 export-oriented TVEs by the mid-1990s, accounting for >40% of China's total exports",
    "TVE exports grew at 28% p.a. (1988–99) vs. 13% for China's total exports",
    "127 million workers by end-1994 (18% of national labour force, 25% of rural labour force)",
    "Up from 28.3 million in 1978"] });

add("China · Market-oriented reforms", { id:"ea-cn-tve-success1", src:SC, title:"Reasons for TVE success (I)", when:"1980s–1990s",
  q:"Why were TVEs successful? (structure, technology, prices, tax)",
  pts:["Small, flexible, market-driven — quick to fill gaps where SOEs were weak or shortages severe",
    "Appropriate (labour-intensive) technology matching China's factor endowments",
    "Benefited from carried-over price distortions (high profitability in manufacturing under state price controls) and market niches SOEs had neglected",
    "Low taxation (6% of profits in 1980, rising to 20% after 1985) — policy-driven to foster rural industrialisation",
    "Shorter/simpler decision chains with local government than SOEs had with central bureaucracy"] });

add("China · Market-oriented reforms", { id:"ea-cn-tve-success2", src:SC, title:"Reasons for TVE success (II)", when:"1980s–1990s",
  q:"Why were TVEs successful? (talent, international links, HRS linkage)",
  pts:["Actively recruited talent from SOEs/research institutes",
    "Strong links to research institutions (~60% of Chinese scientific innovations were commercialised via TVEs)",
    "International orientation — joint ventures with foreign firms, especially in coastal provinces",
    "Mutual reinforcement with HRS: HRS-generated farmer savings capitalised TVEs",
    "TVE income raised farmers' bargaining power, helping entrench favourable agricultural policy (long-term land contracts, free markets, labour mobility)"] });

add("China · Market-oriented reforms", { id:"ea-cn-wages", src:SC, title:"Wage system reform", when:"1956–2000",
  q:"How was China's wage system reformed from the Maoist model?",
  pts:["Maoist wage system: low monetary wage + comprehensive in-kind welfare, frozen on an egalitarian 8-grade scale from 1956–77",
    "1978–84: wage catch-up rounds + revival of bonus/piece-rate systems; profit-retention (from Sept 1980) let firms fund bonuses/welfare",
    "Bonuses reached 9% of total state wages by 1980, driving much of the 14% real urban wage increase (1978–80)",
    "1985–91 (‘gong xiao gua gou’): wage bill directly linked to enterprise tax/economic performance",
    "1992–2000: state shifted from direct control to guidance/regulation; SOEs gained autonomy in individual wage-setting via collective bargaining",
    "Real monthly wages rose 1.9x (1992–97, inflation-adjusted) — supported rising living standards and domestic demand"] });

add("China · Market-oriented reforms", { id:"ea-cn-market-eval", src:SC, title:"Evaluating market-oriented reforms", when:"1978–2000",
  q:"Evaluate the role of market-oriented reforms in China's rise.",
  pts:["HRS usually credited as the reform that built political momentum for wider liberalisation by delivering immediate, visible gains",
    "TVEs are a distinctively Chinese institutional innovation",
    "Unlike Japan's keiretsu (large, established private conglomerates), TVEs show growth driven by small, decentralised, hybrid public/market entities",
    "Gradualism/dual-track pricing allowed reform without a sudden shock to the planned economy",
    "But dual-track also created corruption/arbitrage risks between plan and market prices"] });

/* ── China · Open door policy ── */
add("China · Open door policy", { id:"sezs", src:SC, title:"Special Economic Zones (SEZs)", when:"1980–1988",
  q:"What were SEZs, and how were they created and expanded?",
  clue:"Areas with tax incentives and lower tariffs set up in Shenzhen, Zhuhai, Shantou and Xiamen in Aug 1980 to attract FDI.",
  pts:["An area with more favourable economic regulations (tax incentives, lower tariffs) than the rest of the country, to attract FDI and generate export-oriented growth",
    "May 1980: special policies for Guangdong & Fujian; Aug 1980: 4 SEZs — Shenzhen, Zhuhai, Shantou, Xiamen",
    "May 1984: 14 additional coastal port cities opened (Dalian, Tianjin, Shanghai, Guangzhou, etc.)",
    "Feb 1985: Yangtze/Pearl River Deltas and other regions designated ‘open economic regions’; Apr 1988: Hainan SEZ opened",
    "Rationale (Wu, 2005): with a vast territory and long planned-economy history, China could not open nationwide at once — SEZs created a ‘micro climate’ to attract capital, technology, and management before scaling up"] });

add("China · Open door policy", { id:"ea-cn-sez-impact", src:SC, title:"Impact of coastal opening (by 1990)", when:"1985–1990",
  q:"What was the impact of coastal opening by 1990?",
  pts:["Accumulated capital construction investment in the first 4 SEZs exceeded RMB 30bn (~$6bn)",
    "FDI in the 14 coastal cities exceeded $10bn",
    "Coastal provinces' exports made up ~2/3 of China's total export volume (1990)",
    "Gross industrial output of the first 4 SEZs rose 8-fold in 5 years (1985–90) — avg. 50% annual growth",
    "SEZs served as testing grounds for reform, later transferring lessons/experience inland"] });

add("China · Open door policy", { id:"ea-cn-fdi-tax", src:SC, title:"Tax incentives for FDI", when:"1980s–1990s",
  q:"What tax incentives did China offer foreign-funded enterprises?",
  pts:["Standard: FFEs taxed at 33% (like domestic firms) but with a 2-year exemption + 3-year 50% reduction after first profit",
    "Export-oriented/advanced-tech FFEs got further reductions",
    "SEZ rate: 18% (vs. 33% standard); export/tech FFEs paid just 10% after the initial exemption period",
    "FDI ventures allowed to target the domestic market: Schindler Elevators (Switzerland), Pilkington Glass (UK), Bell Telephone (Belgium), Volkswagen Santana (Germany)"] });

add("China · Open door policy", { id:"ea-cn-fouralong", src:SC, title:"The ‘Four-Along’ strategy", when:"1990s",
  q:"What was the ‘Four-Along’ strategy of the 1990s?",
  pts:["Along the coast: Bohai Sea to the Beibu Gulf",
    "Along the border: Xinjiang/Inner Mongolia/Heilongjiang (trade with CIS states); Yunnan/Guangxi (routes to South/Southeast Asia)",
    "Along the river: Yangtze River Valley, with Pudong (Shanghai) as flagship, linking east and west",
    "Along the railway: ports in East China to Xinjiang, part of the Eurasian ‘continental bridge’"] });

add("China · Open door policy", { id:"ea-cn-wto", src:SC, title:"WTO accession", when:"Applied 1986, acceded Nov 2001",
  q:"What commitments did China make in acceding to the WTO, and what domestic reforms complemented it?",
  clue:"Fifteen years of negotiation ended in Nov 2001 with industrial tariffs cut to an average of 8.9%.",
  pts:["15 years of negotiation; industrial tariffs lowered to an average of 8.9% (vs. India 32.4%, Brazil 27%, Indonesia 36.9%)",
    "Committed to liberalising services (GATS) across financial, telecom, distribution and legal sectors; eliminated most agricultural quotas/export subsidies",
    "Accepted transparency obligations (publishing WTO-related law, judicial review)",
    "Accepted a 12-year ‘transitional product-specific safeguard’ allowing other members to restrict Chinese goods more easily",
    "Complemented by 1998 State Council reform (reduced State Planning Commission's mandate, expanded State Economic and Trade Commission under Premier Zhu Rongji) and SOE restructuring after the 1997 Asian Financial Crisis"] });

add("China · Open door policy", { id:"ea-cn-fdi-scale", src:SC, title:"FDI: scale & sectoral distribution", when:"late 1970s–late 1990s",
  q:"How large were FDI inflows into China, and where did they go?",
  pts:["FDI inflows: near-nil (late 1970s) → $40–50bn/year (late 1990s), ~5% of GDP",
    "China became the 2nd-largest FDI recipient globally (after the US)",
    "Largest among developing countries (~25–30% of developing-world FDI flows)",
    "~60% of contracted FDI into manufacturing (labour-intensive and capital-intensive roughly evenly split), 24% real estate, 6% distribution"] });

add("China · Open door policy", { id:"ea-cn-fdi-impact", src:SC, title:"FDI: impact on growth, jobs & trade", when:"1985–1999",
  q:"Through what channels did FDI contribute to China's growth, employment and trade?",
  pts:["Capital formation: +0.4 pts/year to GDP growth in the 1990s; total factor productivity: +2.5 pts/year in the 1990s",
    "Spillovers from FFEs to domestic firms via new tech/management practices",
    "FFE urban employment quadrupled 1991–99 to 6 million (3% of urban employment; >10% in coastal provinces)",
    "FFEs' share of exports rose from 1% (1985) to 45% (1999)",
    "FFEs accounted for half of overall export growth and a third of import growth over the period"] });

add("China · Open door policy", { id:"ea-cn-fdi-sources", src:SC, title:"Sources of FDI (1999)", when:"1999",
  q:"Where did China's FDI come from in 1999?",
  pts:["Hong Kong SAR (41%)",
    "Japan (7.2%), Taiwan (6.5%), Singapore (6.2%)",
    "US (9.9%), EU (11%)",
    "Note the dominant role of overseas Chinese/regional capital"] });

add("China · Open door policy", { id:"ea-cn-open-eval", src:SC, title:"Evaluating the open door policy", when:"1978–2001",
  q:"Evaluate the role of the open door policy in China's rise.",
  pts:["SEZs functioned as controlled experiments — comparable to Japan's MITI-directed ‘infant industry protection’: both used geography/sequencing to manage exposure to international competition",
    "WTO accession (2001) often treated as the culmination of the open-door process",
    "Careful with dates: it falls just outside the 1978–2000 syllabus window but appears as the natural endpoint/legacy of 1990s policy",
    "FDI source data (Hong Kong/Taiwan/Singapore dominance) supports the argument that overseas Chinese/regional diaspora capital, not just Western FDI, was central",
    "A useful nuance against a purely ‘the West opened China up’ narrative"] });

/* ── China · International developments ── */
add("China · International developments", { id:"ea-cn-rapprochement", src:SC, title:"Sino-American rapprochement", when:"1972–1982",
  q:"How did Sino-American rapprochement develop from 1972 to 1982, and what drove it?",
  clue:"Feb 1972 presidential visit producing the Shanghai Communiqué; ‘Ping Pong Diplomacy’ was its public face.",
  pts:["Feb 1972: Nixon visits China; Shanghai Communiqué — both sides sought ‘normalisation’, people-to-people contacts, and trade; neither would ‘seek hegemony’ in Asia-Pacific",
    "Drivers: US sought to exploit the Sino-Soviet split and gain leverage in Vietnam; China sought a counterweight to Soviet pressure (‘Ping Pong Diplomacy’ the public face)",
    "Jan 1979: Carter grants full diplomatic recognition",
    "Taiwan Relations Act (Apr 1979) preserved unofficial US-Taiwan ties without violating the One-China policy",
    "1982: Reagan's third joint communiqué reaffirmed One-China policy amid shared concern over Soviet expansionism"] });

add("China · International developments", { id:"ea-cn-rapprochement-econ", src:SC, title:"Economic impact of rapprochement", when:"1979–1980s",
  q:"What was the economic impact of Sino-American rapprochement?",
  pts:["US lifted its 20-year trade embargo — surge in economic activity",
    "China gained access to US capital/technology/markets; the US gained a vast new market and cheap labour",
    "Enabled Deng's broader opening: dispatching students abroad, promoting trade with the West, welcoming FDI, establishing SEZs",
    "And cutting support for foreign communist insurgencies",
    "Deng (per Jian, 2019): countries with the United States have been rich, those against it remained poor — ‘We shall be with the United States.’"] });

add("China · International developments", { id:"ea-cn-flyinggeese", src:SC, title:"Japan & the ‘Flying Geese’ paradigm", when:"1962 / 1978–1985",
  q:"What is the ‘Flying Geese’ paradigm, and how did Japan contribute to China's development?",
  clue:"Akamatsu's 1962 model of industrial dynamism cascading from more to less advanced economies via FDI-driven relocation.",
  pts:["Akamatsu (1962): industrial dynamism cascades from more to less advanced economies (Japan → Asian NIEs → ASEAN → China) via FDI-driven relocation of industries, each upgrading over time",
    "1978: Sino-Japanese Treaty of Peace & Friendship + Long-Term Trade Agreement (target: $20bn two-way trade, 1978–85)",
    "Japan exported industrial plants/equipment/technology (over $6bn, 52% of China's total tech imports 1978–84) for Chinese oil, coal and primary products"] });

add("China · International developments", { id:"ea-cn-sinojapan-trade", src:SC, title:"Sino-Japanese trade & aid", when:"1977–1984",
  q:"How significant were Sino-Japanese trade and Japanese aid by 1984?",
  pts:["Sino-Japanese trade: $3.5bn (1977) → $13.2bn (1984, record high)",
    "Japan was China's largest trading partner (~26% of total external trade, 1984)",
    "1984: Japan pledged a second aid package of ¥470bn (~$2.1bn) for infrastructure projects",
    "E.g. Baoshan steel mill near Shanghai"] });

add("China · International developments", { id:"ea-cn-asean", src:SC, title:"ASEAN & regional trade", when:"1990–1997",
  q:"How did China's relations and trade with ASEAN develop in the 1990s?",
  pts:["Post-Tiananmen outreach: normalised relations with Indonesia (Aug 1990), Singapore (Oct 1990); Sino-Vietnamese normalisation (1991); constructive role in the Cambodian peace settlement (post-1992)",
    "Trade with ASEAN: $14.29bn (1994) → $25.04bn (1997)",
    "ASEAN's share of China's total trade rose from 6.04% to 7.70%",
    "ASEAN FDI into China: $1.21bn (1993) → $3.62bn (1997) — 77.5% of which came from Singapore alone"] });

add("China · International developments", { id:"ea-cn-diaspora", src:SC, title:"Overseas Chinese communities & Western FDI", when:"1990s",
  q:"What roles did overseas Chinese capital and Western FDI play?",
  pts:["Hong Kong, Taiwan, and Singapore together supplied the largest share of FDI (Hong Kong alone ~41–55% across the 1990s)",
    "Diaspora/ethnic-Chinese capital was central to bridging China's technology and management gap",
    "Western FDI (US, EU) contributed a smaller but strategically significant share",
    "Often bringing more advanced technology and management practices, especially in manufacturing and, later, services"] });

add("China · International developments", { id:"ea-cn-intl-eval", src:SC, title:"Evaluating international developments (China)", when:"1972–2000",
  q:"Evaluate the role of international developments in China's rise, compared with Japan.",
  pts:["China's tailwind (Sino-US detente, ‘flying geese’ transfer from Japan/NIEs, overseas Chinese capital) parallels Japan's Cold War-era US backing",
    "Both suggest East Asian ‘miracles’ depended partly on geopolitical timing, not domestic policy alone",
    "Distinctive: unlike Japan (which relied heavily on the US), China diversified across the US, Japan, ASEAN, and the overseas Chinese diaspora",
    "Useful for an essay on breadth vs. depth of international support"] });

/* ── China · Conclusion ── */
add("China · Conclusion", { id:"ea-cn-theses", src:SC, title:"China essay toolkit: thesis options", when:"1978–2000",
  q:"What thesis options can be argued on the rise of the Chinese economy?",
  pts:["Naughton (2010): gradual change of a command economy is feasible — and resilient, a ‘natural’ way to transform an economic system",
    "(a) Failure of the Maoist economy was the necessary precondition, but Deng's political leadership converted crisis into sustained reform",
    "(b) Market-oriented reforms (HRS, TVEs, SOE reform) were the primary engine — they generated the growth and savings that funded further opening",
    "(c) Open door policy + international developments were decisive — without FDI/technology/market access, domestic reforms alone could not have sustained 9%+ growth"] });

add("China · Conclusion", { id:"ea-cn-linkages", src:SC, title:"China: cross-factor linkages & limitations", when:"1978–2000",
  q:"What cross-factor linkages and limitations should be cited in a China essay?",
  pts:["HRS savings → capitalised TVEs",
    "Sino-US rapprochement → enabled SEZs/FDI inflows",
    "Deng's political authority → protected market reforms from ideological reversal (esp. after Tiananmen, via the Southern Tour)",
    "Limitations: Tiananmen (1989) and the Rectification period show reform was not linear",
    "Growing inequality between coastal/inland regions was a direct cost of the SEZ-led opening-up strategy"] });

add("China · Conclusion", { id:"ea-compare", src:SC, title:"Comparing Japan's and China's transformations", when:"1947–2000",
  q:"How did the economic transformations of Japan and China compare?",
  pts:["Both combined strong state direction with private-sector/market dynamism and favourable international conditions",
    "China's transition was from a command economy (structural transformation)",
    "Japan's was postwar reconstruction/catch-up (industrial transformation) within an already-market economy"] });
})();
