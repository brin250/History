// SEA economic change flow charts, built only from SEA_Economic_Change_Study_Notes and checked section by section against the notes.
// Flow charts: framework (Part A), cross-country synthesis (Part F), comparative cluster analysis, glossary & exam notes — from SEA_Economic_Change_Study_Notes
(function(){
const F = (window.FLOWS = window.FLOWS || {}); const L = (F.ec = F.ec || []);

/* ---------- order 1: big picture ---------- */
L.push({
  id: "ec-flow-bigpicture", order: 1,
  title: "The big picture: aims → approaches → paths → outcomes",
  intro: "Every SEA state chased the same three aims, chose a broad approach (Owen), then followed its own path. Outcomes depended less on WHETHER the state intervened than on HOW and HOW WELL — and on transitioning from ISI to EOI in time.",
  steps: [
    { t: "Starting point: colonial vacuum", d: "Colonial powers were extractive, not developmental — no indigenous business class or planning institutions. Only the state had the capital and oversight, so government led everywhere.", tone: "context", cards: ["ec-why-govt"] },
    { row: [
      { t: "Aim 1: Growth", d: "GDP / productive capacity / national income, usually via industrialisation (ISI → EOI), agricultural modernisation, foreign investment.", tone: "policy", cards: ["ec-three-aims"] },
      { t: "Aim 2: Equity", d: "Fair distribution across population/ethnic groups: land reform, redistribution, affirmative action (NEP), welfare.", tone: "policy", cards: ["ec-three-aims"] },
      { t: "Aim 3: Economic nationalism", d: "Indigenising wealth & production; reducing foreign/minority control; self-sufficiency. Via nationalisation, restrictions on foreign investment & minorities, protectionism.", tone: "policy", cards: ["ec-three-aims"] } ] },
    { arrow: "aims conflict → pursued through" },
    { row: [
      { t: "Capitalist", d: "Philippines, Thailand, Malaysia, Singapore, Indonesia (New Order, post-1965), South Vietnam (1954–75). Still ran large SOEs.", tone: "context", cards: ["ec-owen"] },
      { t: "Socialist", d: "Burma (post-1962), North Vietnam (1954–75), Socialist Republic of Vietnam (post-1975). Central planning.", tone: "context", cards: ["ec-owen"] },
      { t: "'Third Way'", d: "Burma under U Nu (pre-1962), Indonesia's Guided Democracy (1957–65). Ideology over sound management.", tone: "context", cards: ["ec-owen"] } ] },
    { arrow: "each country's path" },
    { split: [
      { h: "Singapore", steps: [
        { t: "No resources; entrepot", d: "Almost no resources — relied on entrepot trade & human capital. ISI under Malaysia common market (1960–65).", tone: "context", cards: ["ec-sg-context"] },
        { t: "Forced EOI", d: "1965 Separation + 1971 British withdrawal → EOI; 100% foreign ownership allowed 1978.", tone: "event", cards: ["ec-sg-crisis"] },
        { t: "Tech → services → regional", d: "1979 Second Industrial Revolution → 1986 services → 1990s regionalisation.", tone: "policy", cards: ["ec-sg-sir"] },
        { t: "8.3% (1961–2001), highest", d: "Weathered 1997 well: surplus, low debt, strict MAS. Equity issue = income gap (Gini grew), not ethnic.", tone: "good", cards: ["ec-sg-1997"] } ] },
      { h: "Malaysia", steps: [
        { t: "Laissez-faire ISI 1957–71", d: "Non-discretionary ISI. Rich in tin, rubber, palm oil — could delay EOI.", tone: "context", cards: ["ec-my-colonial"] },
        { t: "1969 riots → NEP 1971", d: "Equity issue: ethnic (Malay vs Chinese/Indian) wealth gap. Bumiputera-focused redistribution: equity 2.4%→20.3%; poverty 40.3%→15%. Foreign capital restricted but FDI still courted.", tone: "policy", cards: ["nep"] },
        { t: "HICOM → privatisation → deepening", d: "Heavy industry, privatisation (1983), industrial deepening (1986+).", tone: "policy", cards: ["ec-my-hicom"] },
        { t: "6.7%; best balance of aims", d: "1997: DOMESTIC property/stock overheating, current account deficit.", tone: "mixed", cards: ["ec-my-afc"] } ] },
      { h: "Thailand", steps: [
        { t: "Never colonised", d: "Autonomous, mainly Chinese commercial class checked the state.", tone: "context", cards: ["ec-th-independence"] },
        { t: "Phibun → Sarit (1957)", d: "State-led nationalism, then kanphatthana; state scaled back.", tone: "policy", cards: ["ec-th-sarit"] },
        { t: "EOI switch (1977 Plan)", d: "Successful by mid-1980s; post-1985 boom.", tone: "good", cards: ["thaieoi"] },
        { t: "6.8%; AFC epicentre", d: "Baht floated 2 July 1997; Gini 0.41→0.52.", tone: "mixed", cards: ["afcthai"] } ] },
      { h: "Indonesia", steps: [
        { t: "Guided Economy 1957–65", d: "Nationalised Dutch firms; ISI failed under Nasakom inexperience.", tone: "bad", cards: ["ec-id-guided"] },
        { t: "New Order + oil boom", d: "1970s aid, oil windfall, state ISI corporations.", tone: "policy", cards: ["ec-id-oil"] },
        { t: "Oil glut → deregulation", d: "1980s reform captured by cronies; EOI only partial.", tone: "mixed", cards: ["ec-id-dereg-reality"] },
        { t: "5.7%; among worst hit 1997", d: "Political collapse, ethnic violence.", tone: "bad", cards: ["ec-id-financial"] } ] },
      { h: "Philippines", steps: [
        { t: "Regional ISI pioneer", d: "Manufacturing 8%→20% of GDP (1950–60); 'Asia's second NIC'.", tone: "good", cards: ["ec-ph-isi"] },
        { t: "Marcos: cronyism, debt", d: "300+ public enterprises; oil-importer hit by 1970s shocks.", tone: "bad", cards: ["crony"] },
        { t: "Failed ISI→EOI", d: "1981–90 growth only 1.8%; deregulation under Aquino/Ramos.", tone: "bad", cards: ["philfailure"] },
        { t: "3.9%; softer 1997 landing", d: "'Avoided the excesses' (Delhaise).", tone: "mixed", cards: ["ec-ph-delhaise"] } ] },
      { h: "Burma", steps: [
        { t: "Best endowed at independence", d: "Rice, teak, oil, minerals; U Nu's Third Way welfare plan (1948–62) fails.", tone: "context", cards: ["ec-bm-paradox"] },
        { t: "Burmese Way to Socialism 1962", d: "Total nationalisation; Chinese & Indian minorities expelled; almost all foreign trade/investment banned (1962–88) — autarky. Equity achieved, but at the cost of all growth.", tone: "bad", cards: ["burmeseway"] },
        { t: "8888 Uprising → SLORC", d: "Contradictory partial market opening from 1988.", tone: "mixed", cards: ["ec-bm-tucker"] },
        { t: "4.3%; insulated in 1997", d: "But for the wrong reasons (closed, pariah).", tone: "bad", cards: ["ec-bm-limits"] } ] },
      { h: "Vietnam", steps: [
        { t: "Split legacy; heavy industry", d: "Socialist North (rich in minerals), US-dependent South (fertile Mekong Delta); reunified 1975. Heavy industry prioritised in North pre-1975 and reunified Vietnam 1976–85.", tone: "context", cards: ["ec-vn-colonial"] },
        { t: "Disastrous 1976–85", d: "2nd FYP failed; southern collectivisation resisted; foreign & Hoa (Chinese) enterprises nationalised post-1975.", tone: "bad", cards: ["vietnamfyp"] },
        { t: "Doi Moi 1986", d: "Le Duan's death; Resolution 10 (1988); FDI from 1987; embargo lifted 1994.", tone: "policy", cards: ["ec-vn-doimoi"] },
        { t: "8–9.5% in 1990s", d: "Insulated in 1997 (less integrated); state still 50% of output. Equity issue: regional (south vs north) + ethnic minority poverty.", tone: "good", cards: ["ec-vn-1990s"] } ] } ] },
    { t: "What separated winners from losers", d: "Not ideology but governance quality and the NATURE (technocratic vs cronyist/dogmatic) and DIRECTION (market-stimulating vs market-replacing) of intervention; plus a timely ISI→EOI transition (Salvatore).", tone: "verdict", cards: ["ec-f1-paths", "ec-f1-capital", "ec-salvatore"] }
  ],
  takeaways: [
    "Government intervention was universal — argue about HOW and HOW WELL, not WHETHER.",
    "Ranking 1961–2001: Singapore > Malaysia > Thailand > Indonesia > Myanmar > Philippines.",
    "Success = weighing growth vs equity vs nationalism, not growth alone (Burma's hollow victory).",
    "Memory cues: Malaysia 'Race, Resources, Restructuring'; Singapore 'Entrepot, Expelled, Excellence'; Burma 'Best Endowed, Worst Outcome'; Vietnam 'Pragmatic Pivot'."
  ]
});

/* ---------- order 2: framework ---------- */
L.push({
  id: "ec-flow-framework", order: 2,
  title: "The analytical framework (Lecture 1)",
  intro: "Every country case is assessed against this framework: three conflicting aims, ISI vs EOI, why some became 'miracle economies', Tarling's two government roles and other shaping factors.",
  steps: [
    { t: "Three aims — often in conflict", d: "Growth, equity and economic nationalism. A strong essay always weighs how a country traded off between them.", tone: "context", cards: ["ec-three-aims"] },
    { row: [
      { t: "Growth tension", d: "Can be achieved while equity is sacrificed — benefits flow to a minority.", tone: "mixed", cards: ["ec-three-aims"] },
      { t: "Equity tension", d: "Equity over efficiency (quotas, collectivisation) often reduces productivity/growth.", tone: "mixed", cards: ["ec-three-aims"] },
      { t: "Nationalism tension", d: "Excluding foreign capital/expertise (e.g. Burma) starves economy of capital and competition.", tone: "mixed", cards: ["ec-three-aims"] } ] },
    { t: "Exam tip: Ne Win's hollow victory", d: "Burmese Way achieved equity (top 25% earned only 5× bottom 25%) and nationalism (foreign trade/investment banned, Indians/Chinese squeezed out) but failed on growth — so NOT a success overall.", tone: "verdict", cards: ["ec-newin-aims", "burmeseway"] },
    { t: "Owen's three approaches", d: "Capitalist (private property, but large SOEs); Socialist (eliminate private property, central planning); 'Third Way' (vaguely socialist, straddled methods — U Nu's Burma, Guided Democracy Indonesia 1957–65).", tone: "context", cards: ["ec-owen"] },
    { arrow: "industrialisation logic" },
    { t: "ISI first", d: "Produce goods domestically to replace imports. Diversifies from primary exports, creates non-agrarian jobs, builds base for EOI, addresses post-independence problems. Tariffs/import restrictions protect 'infant' industries.", tone: "policy", cards: ["ec-isi-eoi"] },
    { t: "ISI's problems", d: "Protection breeds complacency and inefficiency; harder as goods get more advanced (petrochemicals, steel); prone to cronyism (licences/quotas as political favours).", tone: "bad", cards: ["ec-isi-eoi"] },
    { arrow: "transition to" },
    { t: "EOI", d: "Produce comparative-advantage goods for export. Overcomes small domestic market; forces efficiency via competition. Loosen imports, incentivise FDI. Risks: hard to compete early; foreign dependence undermines nationalism.", tone: "policy", cards: ["ec-isi-eoi"] },
    { split: [
      { h: "Stuck in ISI", steps: [ { t: "Philippines & Indonesia", d: "Stuck too long → cronyism, inefficiency, foreign debt.", tone: "bad", cards: ["ec-isi-eoi"] } ] },
      { h: "Fast to EOI", steps: [ { t: "Singapore", d: "Skipped most of ISI; EOI fastest (from mid-1960s) → success.", tone: "good", cards: ["ec-isi-eoi"] } ] } ] },
    { t: "Salvatore: sequential, not alternatives", d: "ISI useful early (esp. larger nations), EOI necessary later. The differentiator is whether a country TRANSITIONED from ISI to EOI at the right time.", tone: "verdict", cards: ["ec-salvatore"] },
    { row: [
      { t: "Strong government commitment", d: "To economic development.", tone: "cause", cards: ["ec-miracle"] },
      { t: "Sound economic policies", d: "", tone: "cause", cards: ["ec-miracle"] },
      { t: "Controlled global integration", d: "", tone: "cause", cards: ["ec-miracle"] },
      { t: "Close US security/economic ties", d: "", tone: "cause", cards: ["ec-miracle"] } ] },
    { t: "World Bank 'recipe' (1993)", d: "The East Asian Miracle: high domestic savings/investment, pro-investment taxes, secure well-regulated bank-based finance, pro-export incentives, openness to foreign tech/investment.", tone: "context", cards: ["ec-miracle"] },
    { t: "Why government had to lead", d: "Colonial powers left no indigenous business class or planning institutions (extractive). Only the state could fill the vacuum — capitalist or socialist. Difference: HOW (SOE vs incentives) and HOW WELL.", tone: "cause", cards: ["ec-why-govt"] },
    { split: [
      { h: "Capitalist (Tarling)", steps: [
        { t: "Planning", d: "National development plans with growth targets (e.g. First Malaysia Plan 1969).", tone: "policy", cards: ["ec-tarling"] },
        { t: "Participation: indirect", d: "Stability, fiscal policy, pro-business climate, technocrats, FDI/aid + some SOEs (JTC, FELDA, Pertamina).", tone: "policy", cards: ["ec-tarling"] } ] },
      { h: "Socialist (Tarling)", steps: [
        { t: "Planning", d: "Centralised plans (Vietnam's 2nd FYP 1976; Burma's Four-Year Plans).", tone: "policy", cards: ["ec-tarling"] },
        { t: "Participation: direct & total", d: "State owns/runs virtually all production: nationalisation, state monopolies.", tone: "policy", cards: ["ec-tarling"] } ] } ] },
    { row: [
      { t: "Ethnic minorities", d: "Chinese/Indians dominated colonial trade, banking, capital → resentment → nationalism targeted them (Indians expelled from Burma; NEP vs Chinese corporate dominance).", tone: "cause", cards: ["ec-other-factors"] },
      { t: "Foreign aid & investment", d: "Cold War aid (US→Thailand; USSR/China via COMECON→Vietnam); Japanese aid/investment; World Bank, IMF, ADB.", tone: "cause", cards: ["ec-other-factors"] } ] },
    { row: [
      { t: "Green Revolution (1930s–70s)", d: "IR8 rice (IRRI, Philippines, mid-1960s) + fertilizers/irrigation/machinery → averted famine, exportable surplus.", tone: "good", cards: ["ec-green-rev"] },
      { t: "Electronics take-off (late 1970s–80s)", d: "Singapore's Second Industrial Revolution (1979) best; Philippines, Malaysia, Thailand less so. Burma, Vietnam, Indonesia struggled — outdated heavy industry, few skills.", tone: "event", cards: ["ec-green-rev"] } ] },
    { t: "GDP growth table (%)", d: "Decades 1961–70/71–80/81–90/91–2000, then 1961–2001: Singapore 10.0/9.0/7.4/7.0/8.3 · Malaysia 6.5/7.9/6.0/6.6/6.7 · Thailand 8.2/6.9/7.9/4.4/6.8 · Philippines 4.9/5.9/1.8/2.9/3.9 · Indonesia 4.2/7.9/6.4/4.3/5.7 · Myanmar 3.2/4.7/1.4/7.4/4.3", tone: "context", cards: ["ec-gdp-table"] },
    { t: "Reading the table", d: "Irony: Myanmar's best decade (1991–2000, 7.4%) followed SLORC's post-1988 market reforms — but off a tiny base, still lagging. Singapore leads in every decade.", tone: "verdict", cards: ["ec-gdp-table"] }
  ],
  takeaways: [
    "Weigh the three aims explicitly; growth absent = no overall success (Ne Win).",
    "Salvatore: the TIMELY transition from ISI to EOI, not the choice of strategy, separates winners from losers.",
    "State leadership was a necessity of the colonial vacuum; judge its nature and efficiency.",
    "Cite the GDP table figures to substantiate any comparative claim."
  ]
});

/* ---------- order 90: F2 three aims verdicts ---------- */
L.push({
  id: "ec-flow-f2-aims", order: 90,
  title: "Three aims verdicts: Malaysia, Singapore, Burma, Vietnam",
  intro: "How each core case scored on growth, equity and economic nationalism — and the overall verdict. Different mixes produced different kinds of 'success'.",
  steps: [
    { split: [
      { h: "Malaysia", steps: [
        { t: "Growth: strong", d: "Strong and diversified — NIC status by the Mahathir era.", tone: "good", cards: ["ec-f2-mysg"] },
        { t: "Equity: partial", d: "Poverty 40.3%→15%, but fell short of 30% target; benefits concentrated among connected elites.", tone: "mixed", cards: ["ec-my-eval-equity"] },
        { t: "Nationalism: partial", d: "Bumiputera equity 2.4%→20.3%, but FDI essential and courted throughout.", tone: "mixed", cards: ["ec-my-nep-fdi"] },
        { t: "Verdict: best BALANCE", d: "Reasonably successful — best balance of the three aims among the case studies.", tone: "verdict", cards: ["ec-f2-mysg"] } ] },
      { h: "Singapore", steps: [
        { t: "Growth: outstanding", d: "Region's top performer; ISI→EOI→tech/services.", tone: "good", cards: ["ec-f2-mysg"] },
        { t: "Equity: weakest priority", d: "Income inequality grew (deteriorating Gini) — a class, not ethnic, issue.", tone: "bad", cards: ["ec-sg-limits"] },
        { t: "Nationalism: sacrificed", d: "Heavy reliance on FDI/MNCs; pragmatic, not nationalist.", tone: "mixed", cards: ["ec-sg-fdi"] },
        { t: "Verdict: top by growth", d: "Achieved by deliberately NOT prioritising nationalism and only partly addressing equity.", tone: "verdict", cards: ["ec-f2-mysg"] } ] },
      { h: "Burma", steps: [
        { t: "Growth: catastrophic", d: "Lowest regional growth.", tone: "bad", cards: ["ec-f2-bmvn"] },
        { t: "Equity: achieved (1972)", d: "Narrow income gap — but achieved AMID poverty, so hollow.", tone: "mixed", cards: ["ec-bm-equity"] },
        { t: "Nationalism: extreme", d: "Autarky, minority expulsion — directly CAUSED the growth failure.", tone: "bad", cards: ["ec-bm-minorities"] },
        { t: "Verdict: overall failure", d: "Proves nationalism and equity without growth are not real success.", tone: "verdict", cards: ["ec-newin-aims"] } ] },
      { h: "Vietnam", steps: [
        { t: "Growth: fail → success", d: "Failure pre-1986; strong 1986–2000 (9.5% peak).", tone: "mixed", cards: ["ec-vn-1990s"] },
        { t: "Equity: worsened after 1986", d: "Low inequality under socialism; rising regional/ethnic gaps after Doi Moi.", tone: "mixed", cards: ["ec-vn-limits"] },
        { t: "Nationalism: diluted", d: "Full nationalisation pre-1986; deliberately diluted post-1986 for FDI.", tone: "mixed", cards: ["ec-f2-bmvn"] },
        { t: "Verdict: learning & adaptation", d: "Succeeded by re-balancing the aims when the original mix failed.", tone: "verdict", cards: ["ec-f2-bmvn"] } ] } ] },
    { t: "Pattern across the four", d: "No case maximised all three aims: growth came with diluted nationalism (Singapore, Vietnam post-1986) or partial equity (Malaysia); nationalism-first (Burma) killed growth.", tone: "verdict", cards: ["ec-f2-mysg", "ec-f2-bmvn"] }
  ],
  takeaways: [
    "Malaysia = best balance; Singapore = best growth; Vietnam = best adaptation; Burma = hollow equity/nationalism.",
    "Use these verdicts to show explicit weighing — examiners reward it over growth-only judgements."
  ]
});

/* ---------- order 91: F3 Burma vs Vietnam ---------- */
L.push({
  id: "ec-flow-f3-bmvn", order: 91,
  title: "Why Burma failed where Vietnam succeeded",
  intro: "Both began with near-identical socialist strategies and failed for similar reasons. The divergence lies in what happened NEXT: willingness, coherence of reform and international relations.",
  steps: [
    { t: "Same starting strategy", d: "Heavy industry first, agricultural collectivisation, nationalisation, minority expulsion.", tone: "policy", cards: ["burmavsvietnam"] },
    { t: "Same failure causes", d: "Foreign exchange shortages, agricultural disincentives, lack of expertise.", tone: "bad", cards: ["burmavsvietnam", "ec-bm-rice", "ec-vn-fyp-funds"] },
    { arrow: "then diverged" },
    { split: [
      { h: "Burma", steps: [
        { t: "Willingness: REACTIVE", d: "Ne Win clung to autarky until forced out by the 8888 Uprising (1988) — crisis-driven, decades too late.", tone: "bad", cards: ["burmavsvietnam"] },
        { t: "Coherence: contradictory", d: "SLORC: market rhetoric + continued state monopolies + export bans on 28 goods.", tone: "bad", cards: ["ec-bm-tucker", "fivepercent"] },
        { t: "International: pariah", d: "Brutal suppression of pro-democracy movement → pariah status, sanctions, MNC exodus.", tone: "bad", cards: ["ec-bm-asean"] },
        { t: "Result: stagnation", d: "Through the 1990s, despite statistically high 7.4% growth off a tiny base.", tone: "bad", cards: ["ec-bm-shallow"] } ] },
      { h: "Vietnam", steps: [
        { t: "Willingness: PROACTIVE", d: "Leadership transition (1986, Le Duan's death) enabled deliberate Doi Moi — reform from within, not regime collapse.", tone: "good", cards: ["ec-vn-doimoi"] },
        { t: "Coherence: consistent", d: "Decentralisation + agricultural privatisation (Resolution 10) + FDI law — mutually reinforcing.", tone: "good", cards: ["ec-vn-res10", "ec-vn-doimoi-measures"] },
        { t: "International: opening", d: "Improved relations → US embargo lifted (1994) → IMF/World Bank/ADB credit.", tone: "good", cards: ["ec-vn-integration"] },
        { t: "Result: sustained growth", d: "8–9.5% growth, major rice exporter, significant FDI.", tone: "good", cards: ["ec-vn-1990s"] } ] } ] },
    { t: "Verdict", d: "Socialism itself did not doom either; rigid, extreme implementation (Burma) vs pragmatic adaptation (Vietnam) decided outcomes.", tone: "verdict", cards: ["burmavsvietnam"] }
  ],
  takeaways: [
    "Explain the divergence with the three factors — don't just state the growth gap.",
    "Burma's failure is more damning because it was the best endowed at independence."
  ]
});

/* ---------- order 92: F4 Singapore vs Malaysia ---------- */
L.push({
  id: "ec-flow-f4-sgmy", order: 92,
  title: "Singapore vs Malaysia: same region, different outcomes",
  intro: "Resources, ethnic politics and governance quality explain why two neighbours with a shared past took different paths.",
  steps: [
    { t: "Shared base", d: "Both had relatively honest, technocratic governments — a key differentiator vs the Philippines/Indonesia.", tone: "context", cards: ["ec-sg-vs-my"] },
    { split: [
      { h: "Malaysia", steps: [
        { t: "Resource-rich", d: "Tin, rubber wealth allowed it to delay EOI (end of 1970s like most neighbours).", tone: "cause", cards: ["ec-my-colonial"] },
        { t: "Ethnic politics central", d: "Policy fundamentally shaped by Malay–Chinese inequality → NEP.", tone: "cause", cards: ["ec-my-chinese", "nep"] },
        { t: "Partial crony capture", d: "Privatisation contracts going to UMNO-linked firms.", tone: "bad", cards: ["ec-my-privatisation"] } ] },
      { h: "Singapore", steps: [
        { t: "No resources", d: "Forced EARLY, decisive EOI (mid-1960s).", tone: "cause", cards: ["ec-sg-context"] },
        { t: "No ethnic redistribution", d: "Ethnically diverse, but PAP governance not built around ethnic redistribution.", tone: "cause", cards: ["ec-sg-vs-my"] },
        { t: "Freedom from interest groups", d: "Faster, more consistent long-term planning; crony capture much more limited in state capitalism model.", tone: "good", cards: ["ec-sg-nature", "ec-sg-holdings"] } ] } ] },
    { t: "Outcome", d: "Singapore 8.3% vs Malaysia 6.7% (1961–2001). Singapore = most successful by growth; Malaysia = best balance of the three aims (F2).", tone: "verdict", cards: ["ec-gdp-table", "ec-sg-vs-my"] }
  ],
  takeaways: [
    "Resource endowment shaped timing of EOI; ethnic politics shaped priorities; governance quality shaped consistency.",
    "Pair with F2: Malaysia best balance, Singapore best growth."
  ]
});

/* ---------- order 93: F5 common pattern ---------- */
L.push({
  id: "ec-flow-f5-pattern", order: 93,
  title: "The common pattern: ISI → EOI → diversification",
  intro: "Capitalist economies broadly followed ISI → EOI → diversification at different speeds; socialist economies first had to pivot away from central planning altogether.",
  steps: [
    { split: [
      { h: "Malaysia", steps: [
        { t: "Stage 1: laissez-faire ISI", d: "1957–71.", tone: "policy", cards: ["ec-my-pioneer"] },
        { t: "Stage 2: NEP + FDI", d: "NEP restructuring + FDI (1971–90).", tone: "policy", cards: ["nep"] },
        { t: "Stage 3: heavy industry → deepening", d: "Heavy industry/privatisation (1980s) → industrial deepening (1986–90s).", tone: "good", cards: ["ec-my-deepening"] } ] },
      { h: "Singapore", steps: [
        { t: "Stage 1: ISI in Malaysia", d: "Under Malaysia common market (1960–65).", tone: "policy", cards: ["ec-sg-crisis"] },
        { t: "Stage 2: forced EOI", d: "After Separation/British withdrawal (1965–79).", tone: "policy", cards: ["ec-sg-levers"] },
        { t: "Stage 3: tech/services → regional", d: "Tech/services shift (1979) → regionalisation (1990s).", tone: "good", cards: ["ec-sg-services", "ec-sg-regional"] } ] },
      { h: "Burma", steps: [
        { t: "Stage 1: Third Way", d: "U Nu's welfare planning (1948–62).", tone: "policy", cards: ["ec-bm-pyidawtha"] },
        { t: "Stage 2: socialist autarky", d: "Ne Win (1962–88) — NO equivalent EOI stage.", tone: "bad", cards: ["burmeseway"] },
        { t: "Stage 3: incomplete opening", d: "SLORC's contradictory partial market opening (1988–).", tone: "mixed", cards: ["ec-bm-fil"] } ] },
      { h: "Vietnam", steps: [
        { t: "Stage 1: heavy industry", d: "Central planning, North then reunified (1955–86).", tone: "policy", cards: ["ec-vn-north"] },
        { t: "Stage 2: Doi Moi (1986–)", d: "Functional equivalent of an EOI pivot.", tone: "policy", cards: ["ec-vn-doimoi"] },
        { t: "Stage 3: high growth", d: "Sustained high growth, FDI and ASEAN integration (1990s).", tone: "good", cards: ["ec-vn-1990s"] } ] } ] },
    { t: "Contrast", d: "Capitalist (also Thailand/Philippines/Indonesia) broadly followed the track; socialist states needed a dramatic, externally-forced pivot from central planning before starting it.", tone: "verdict", cards: ["ec-f5-pattern"] }
  ],
  takeaways: [
    "Use the stage table to compare speed: Singapore fastest to EOI; Burma never had an EOI stage.",
    "Doi Moi can be argued as Vietnam's EOI-equivalent pivot."
  ]
});

/* ---------- order 94: cluster growth ---------- */
L.push({
  id: "ec-flow-cl-growth", order: 94,
  title: "Growth performance compared (cluster analysis)",
  intro: "Ranking the economies over 1961–2001 and explaining why the headline numbers differ in quality.",
  steps: [
    { t: "Ranking 1961–2001", d: "Singapore (8.3) > Malaysia (6.7) > Thailand (6.8) > Indonesia (5.7) > Myanmar (4.3) > Philippines (3.9).", tone: "context", cards: ["ec-cl-growth", "ec-gdp-table"] },
    { row: [
      { t: "Thailand & Malaysia", d: "Only two capitalist states with a SUCCESSFUL, sustained EOI transition by mid-1980s — key to stronger long-run performance.", tone: "good", cards: ["ec-cl-growth", "thaieoi"] },
      { t: "Indonesia", d: "Growth driven heavily by COMMODITY WINDFALL (1970s oil), not industrial transformation — less structurally robust.", tone: "mixed", cards: ["ec-id-oil"] },
      { t: "Philippines", d: "Clear underperformer — the only one of the three (Lecture 3) to fail the ISI→EOI transition convincingly; 1.8% in 1981–90.", tone: "bad", cards: ["philfailure"] } ] },
    { t: "Verdict", d: "The quality of growth (EOI transition vs windfall) matters as much as its rate.", tone: "verdict", cards: ["ec-cl-growth"] }
  ],
  takeaways: [
    "Distinguish structurally robust growth (Thailand, Malaysia) from windfall growth (Indonesia).",
    "Philippines is the cleanest failure case among capitalist economies."
  ]
});

/* ---------- order 95: ISI→EOI transition ---------- */
L.push({
  id: "ec-flow-cl-isieoi", order: 95,
  title: "ISI → EOI: why some succeeded and others didn't",
  intro: "Who managed the transition, and the enabling or disabling factor in each case.",
  steps: [
    { split: [
      { h: "Thailand: YES (mid-1980s)", steps: [
        { t: "Enablers", d: "Resilient autonomous private sector (Chinese bourgeoisie) + domestic capital dominance + currency peg management + state genuinely scaled back.", tone: "good", cards: ["ec-th-eoi-success", "ec-th-peg", "ec-th-scaling"] } ] },
      { h: "Malaysia: YES", steps: [
        { t: "Enablers", d: "NEP-guided but still attracted FDI-led EOI successfully.", tone: "good", cards: ["ec-my-nep-fdi"] } ] },
      { h: "Indonesia: PARTIAL", steps: [
        { t: "Disablers", d: "Oil dependence delayed urgency; deregulation captured by cronies; auto industry never built engine capacity.", tone: "mixed", cards: ["ec-id-dereg-reality", "ec-id-limits"] } ] },
      { h: "Philippines: FAILED", steps: [
        { t: "Disablers", d: "Protected ISI firms never became efficient; 1970s external shocks hit before adjustment; cronyism + cyclical instability interrupted reform.", tone: "bad", cards: ["ec-ph-isi-fail", "ec-ph-1970s"] } ] } ] },
    { row: [
      { t: "Common thread: failure", d: "Protection bred inefficiency; crony beneficiaries of protection had every incentive to resist its removal.", tone: "bad", cards: ["ec-cl-isi-eoi"] },
      { t: "Common thread: success", d: "A capable existing private business class (Thai Chinese bourgeoisie) OR a state willing to genuinely withdraw.", tone: "good", cards: ["ec-cl-isi-eoi"] } ] },
    { t: "Essay pairing", d: "'Compare ISI→EOI in two economies': Thailand (success) vs Philippines (failure) is the cleanest pairing; Indonesia = 'partial/oil-cushioned' middle case.", tone: "verdict", cards: ["ec-essay-isieoi"] }
  ],
  takeaways: [
    "Transition success depended on interest groups: cronies resisted ending protection.",
    "Links to Salvatore: the transition, not the strategy, is the differentiator."
  ]
});

/* ---------- order 96: role of state ---------- */
L.push({
  id: "ec-flow-cl-state", order: 96,
  title: "Role of the state: a spectrum",
  intro: "All three relied on heavy initial intervention out of necessity. The key difference is what happened AFTER — scaled back for efficiency, or captured for rent-extraction.",
  steps: [
    { t: "Necessity", d: "Weak/absent domestic bourgeoisie at independence → heavy initial state intervention.", tone: "context", cards: ["ec-cl-state", "ec-why-govt"] },
    { split: [
      { h: "Thailand", steps: [
        { t: "Initial: state-led (Phibun)", d: "Always checked by an autonomous private sector.", tone: "policy", cards: ["ec-th-phibun"] },
        { t: "Trajectory: genuinely scaled back", d: "From 1957 (Sarit — kanphatthana: growth tied to unity and his legitimacy) and especially 1985 onward.", tone: "good", cards: ["ec-th-sarit", "ec-th-scaling"] },
        { t: "Result: functioning EOI", d: "Market 'compensated for government failures' (Hewison).", tone: "good", cards: ["ec-th-govt"] } ] },
      { h: "Indonesia", steps: [
        { t: "Initial: dominant by necessity", d: "No domestic bourgeoisie; Berkeley Mafia technocrats mediated New Order and Western aid.", tone: "policy", cards: ["ec-id-weak", "ec-id-neworder"] },
        { t: "Trajectory: nominally scaled back", d: "1980s deregulation, but state role REINFORCED via cronyism.", tone: "bad", cards: ["ec-id-dereg-reality"] },
        { t: "Result: bureaucratic capitalism", d: "Robison: officials (esp. military) treat offices as personal fiefs for enrichment and political consolidation.", tone: "bad", cards: ["ec-id-robison"] } ] },
      { h: "Philippines", steps: [
        { t: "Initial: dominant from 1950s", d: "ISI pioneer in the region.", tone: "policy", cards: ["ec-ph-isi"] },
        { t: "Trajectory: intensified", d: "Hugely under Marcos martial law (300+ public enterprises).", tone: "bad", cards: ["ec-ph-agri", "crony"] },
        { t: "Result: patrimonialist plunder", d: "Rent-seeking — political criteria override economic ones.", tone: "bad", cards: ["ec-ph-govt"] } ] } ] },
    { t: "Essay: was intervention necessary?", d: "Indonesia/Philippines for NECESSITY (no domestic bourgeoisie); Thailand for LIMITS (private sector resilience meant less intervention needed).", tone: "verdict", cards: ["ec-essay-intervention"] }
  ],
  takeaways: [
    "Judge the state by its trajectory after the initial phase: withdrawal (Thailand) vs capture (Indonesia, Philippines).",
    "Link to Part F: nature and direction of intervention, not its existence, discriminates."
  ]
});

/* ---------- order 97: ethnic Chinese ---------- */
L.push({
  id: "ec-flow-cl-chinese", order: 97,
  title: "Role of ethnic Chinese communities",
  intro: "Disproportionate Chinese economic control was region-wide; what varied was the political response — stabilising or destabilising.",
  steps: [
    { t: "Rigg data (1980s)", d: "% of population / % of listed-firm capitalisation: Singapore 70.0/81% · Thailand 10.0/81% · Indonesia 3.8/73% · Malaysia 28.0/69% · Philippines 1.3/50–60%.", tone: "context", cards: ["chinesecapital"] },
    { split: [
      { h: "Thailand", steps: [
        { t: "Accommodated", d: "Allowed autonomy; periodically co-opted as allies (post-WWII, post-1985) — least fraught.", tone: "good", cards: ["ec-th-chinese"] } ] },
      { h: "Indonesia", steps: [
        { t: "Explicit, violent tension", d: "Malari riots (1974); cukong system (indigenous 'front' holds licences, Chinese partner runs business) failed; anti-Chinese violence after 1997.", tone: "bad", cards: ["ec-id-chinese"] } ] },
      { h: "Philippines", steps: [
        { t: "Moderate tension", d: "Smallest share (1.3%) but Marcos co-opted them (Lucio Tan) under martial law; 1990s backlash of kidnappings/robberies.", tone: "mixed", cards: ["ec-ph-chinese"] } ] },
      { h: "Malaysia", steps: [
        { t: "Restricted via NEP", d: "NEP quotas targeted Chinese corporate dominance — unlike Thailand, which largely did not restrict.", tone: "mixed", cards: ["ec-my-chinese", "ec-connect"] } ] } ] },
    { t: "Essay tip", d: "Dominance is a constant; arguable variable is whether it was STABILISING (Thailand) or a SOURCE OF INSTABILITY (Indonesia, Philippines). Use Rigg data plus contrasting political handling.", tone: "verdict", cards: ["ec-essay-chinese"] }
  ],
  takeaways: [
    "'Were ethnic Chinese essential?' — use the Rigg table and the different political responses.",
    "Malaysia–Thailand comparison: restriction (NEP) vs accommodation."
  ]
});

/* ---------- order 98: equity ---------- */
L.push({
  id: "ec-flow-cl-equity", order: 98,
  title: "Equity and income inequality compared",
  intro: "All three show aggregate growth with worsening or persistent inequality — growth and equity are not automatically compatible. The mechanisms differ.",
  steps: [
    { t: "Shared pattern", d: "Aggregate growth + worsening or persistent inequality.", tone: "context", cards: ["ec-cl-equity"] },
    { row: [
      { t: "Thailand: regional", d: "Gini 0.41→0.52 (1965–2000); Bangkok 48.2%→55.4% of GDP at a flat 16% of population.", tone: "bad", cards: ["ec-th-inequality"] },
      { t: "Indonesia: urban–rural", d: "Urban–rural income gap 42%→92% (1970–93); concentration on Java; transmigration failure.", tone: "bad", cards: ["ec-id-inequality"] },
      { t: "Philippines: land structure", d: "Colonial ilustrado–tenant system never resolved; every land reform diluted by landowner-dominated Congress.", tone: "bad", cards: ["ec-ph-colonial", "ec-ph-carp"] } ] },
    { t: "Key difference", d: "Thailand/Indonesia: mostly regional/urban–rural. Philippines: unresolved LAND OWNERSHIP STRUCTURE from colonial rule — structural.", tone: "verdict", cards: ["ec-cl-equity"] },
    { t: "Essay: growth at the cost of equity?", d: "Three DIFFERENT mechanisms of one tension: Gini (Thailand), urban–rural gap (Indonesia), ilustrado land issue (Philippines).", tone: "verdict", cards: ["ec-essay-equity"] },
    { t: "Cross-link", d: "Philippine land reform failures contrast with Vietnam's agricultural reorganisation — land policy as political control vs genuine equity measure.", tone: "context", cards: ["ec-connect"] }
  ],
  takeaways: [
    "Growth did not automatically bring equity anywhere in the cluster.",
    "Show different mechanisms of inequality to earn evaluative credit."
  ]
});

/* ---------- order 99: AFC roots ---------- */
L.push({
  id: "ec-flow-cl-afc", order: 99,
  title: "Roots of the 1997 Asian Financial Crisis",
  intro: "The mechanism was similar in Thailand and Indonesia; the Philippines is the deliberate contrast case showing a growth–stability trade-off.",
  steps: [
    { split: [
      { h: "Thailand", steps: [
        { t: "Liberalisation", d: "1990 Article VIII; 1993 BIBF (became a conduit for short-term foreign lending) — weak oversight.", tone: "cause", cards: ["afcthai"] },
        { t: "Short-term debt", d: "70% of US$69bn foreign bank debt (1997).", tone: "bad", cards: ["afccompare"] },
        { t: "Crony lending", d: "BBC case (Saxena, 'Group of 16'); NPLs 8%.", tone: "bad", cards: ["afcthai"] },
        { t: "Baht floated 2 July 1997", d: "Forced → epicentre of the crisis.", tone: "bad", cards: ["ec-th-peg"] } ] },
      { h: "Indonesia", steps: [
        { t: "Liberalisation", d: "Oct 1988 reform — banks 124→244 (1988–94); credit culture lagged.", tone: "cause", cards: ["ec-id-financial"] },
        { t: "Short-term debt", d: ">50% of foreign debt short-term (regional pattern).", tone: "bad", cards: ["afccompare"] },
        { t: "Crony lending", d: "Liem's Bank Central Asia — 60% of loans to other Liem firms; NPL build-up via moral hazard / expected bailouts.", tone: "bad", cards: ["ec-id-financial"] },
        { t: "Rupiah collapsed", d: "Amid political uncertainty (Suharto's health) → among worst hit: political collapse, ethnic violence.", tone: "bad", cards: ["ec-id-financial"] } ] },
      { h: "Philippines", steps: [
        { t: "Limited liberalisation", d: "Only ~5 new banks since 1980s (BSP conservatism).", tone: "good", cards: ["ec-ph-banks"] },
        { t: "Short-term debt low", d: "<20% of total debt; ~3% for top-tier banks.", tone: "good", cards: ["afccompare"] },
        { t: "DOSRI enforced", d: "Limits credit to directors, officers, stockholders, related interests — after crises 1970, 1984–85, 1990–91; NPLs 3%.", tone: "good", cards: ["ec-ph-banks"] },
        { t: "Peso floated 11 July 1997", d: "Deliberate, not forced → affected, not as severely.", tone: "mixed", cards: ["ec-ph-delhaise"] } ] } ] },
    { row: [
      { t: "Malaysia", d: "Domestic property/stock market overheating; large current account deficit.", tone: "bad", cards: ["ec-my-afc"] },
      { t: "Singapore", d: "Sound fundamentals (surplus, low debt, strict MAS) — weathered well.", tone: "good", cards: ["ec-sg-1997"] },
      { t: "Burma & Vietnam", d: "Largely insulated — Burma closed/pariah (wrong reasons); Vietnam less integrated.", tone: "mixed", cards: ["ec-f1-capital"] } ] },
    { t: "Measures of risk", d: "Debt service ratio: repayments as % of export earnings, IMF danger ~20%. Leverage ratio: bank liabilities/equity, below 12x strong.", tone: "context", cards: ["ec-glossary-2"] },
    { t: "Synthesis: growth vs stability", d: "The factors behind explosive growth (liberalisation, short-term borrowing, fast EOI) made Thailand/Indonesia vulnerable. Philippine conservatism — learned from earlier crises — meant slower growth but softer landing. Delhaise: 'missed the benefits', 'avoided the excesses'.", tone: "verdict", cards: ["ec-cl-afc-synthesis", "ec-ph-delhaise"] }
  ],
  takeaways: [
    "No SEA economy escaped the trade-off between growth speed (via liberalisation) and financial stability.",
    "'Evaluate the causes of the AFC': use the comparative table; the Philippines as contrast shows nuance over a single-cause narrative."
  ]
});

/* ---------- order 100: export diversification ---------- */
L.push({
  id: "ec-flow-cl-exports", order: 100,
  title: "Export diversification, 1985 vs 2000",
  intro: "Share of the three main exports in total exports: falling = diversifying. The Philippines moved the wrong way.",
  steps: [
    { row: [
      { t: "Thailand: 28.7% → 23.3%", d: "Diversifying — consistent with successful industrial transformation.", tone: "good", cards: ["ec-cl-exports"] },
      { t: "Indonesia: 69.3% → 30.2%", d: "Diversifying from a much higher base — partial transformation.", tone: "mixed", cards: ["ec-cl-exports"] },
      { t: "Philippines: 27.4% → 64.7%", d: "CONCENTRATING — reverse direction.", tone: "bad", cards: ["ec-ph-quant"] } ] },
    { arrow: "because" },
    { t: "The Philippine outlier", d: "Narrow reliance on electronics/semiconductor assembly — low value-added, easily disrupted — not a diversified base: fragile, not deep, industrialisation.", tone: "verdict", cards: ["ec-ph-quant", "ec-essay-exports"] }
  ],
  takeaways: [
    "Export structure is evidence for depth of industrialisation, not just growth.",
    "Use the Philippines as the counter-example in diversification essays."
  ]
});

/* ---------- order 101: how to argue ---------- */
L.push({
  id: "ec-flow-howtoargue", order: 101,
  title: "How to argue: pitfalls, essay angles and links",
  intro: "The essay pitfalls from Part F and the likely essay angles from the exam application notes, turned into a checklist.",
  steps: [
    { t: "Pitfall 1: growth isn't everything", d: "Weigh growth vs equity vs nationalism explicitly (Ne Win's hollow victory).", tone: "verdict", cards: ["ec-pitfalls", "ec-newin-aims"] },
    { t: "Pitfall 2: ideology ≠ outcome", d: "Singapore succeeded through GOVERNANCE QUALITY; Vietnam once it ADAPTED; Burma failed through EXTREME, rigid implementation.", tone: "verdict", cards: ["ec-pitfalls", "burmavsvietnam"] },
    { t: "Pitfall 3: remember starting points", d: "Burma's failure more damning (relative advantage); Singapore's success more impressive (almost nothing).", tone: "verdict", cards: ["ec-pitfalls", "ec-bm-paradox"] },
    { t: "Pitfall 4: cite data", d: "GDP growth, export %, equity ownership % — examiners expect quantitative substantiation.", tone: "verdict", cards: ["ec-pitfalls", "ec-gdp-table"] },
    { t: "Pitfall 5: intervention was universal", d: "Discriminate by NATURE (technocratic vs corrupt/dogmatic) and DIRECTION (market-stimulating vs market-replacing).", tone: "verdict", cards: ["ec-pitfalls", "ec-why-govt"] },
    { t: "Comparative > narration", d: "Cross-country comparison is usually worth more credit than single-country narration.", tone: "context", cards: ["ec-f1-paths"] },
    { row: [
      { t: "Intervention necessary?", d: "Indonesia/Philippines = necessity; Thailand = limits.", tone: "policy", cards: ["ec-essay-intervention"] },
      { t: "Chinese essential?", d: "Rigg data + Thai accommodation vs Indonesian violence vs Philippine moderate tension.", tone: "policy", cards: ["ec-essay-chinese"] },
      { t: "Growth at cost of equity?", d: "Gini, urban–rural gap, ilustrado land — three mechanisms.", tone: "policy", cards: ["ec-essay-equity"] } ] },
    { row: [
      { t: "Causes of the AFC?", d: "Comparative table; Philippines as contrast case.", tone: "policy", cards: ["ec-essay-afc"] },
      { t: "Compare ISI→EOI?", d: "Thailand vs Philippines; Indonesia middle case.", tone: "policy", cards: ["ec-essay-isieoi"] },
      { t: "Burma vs Vietnam?", d: "Willingness, coherence, international relations.", tone: "policy", cards: ["burmavsvietnam"] } ] },
    { t: "Cross-lecture links", d: "Thailand's 1977 EOI ≈ Malaysia's (both succeeded; NEP restricted Chinese, Thailand didn't); Indonesia's Article 33 statism vs Burma's extreme nationalisation (DEGREE); Philippine land reform vs Vietnam's.", tone: "context", cards: ["ec-connect"] }
  ],
  takeaways: [
    "Always weigh the three aims, compare countries, cite numbers and judge the nature of intervention.",
    "Use contrast cases (Philippines in AFC; Thailand in intervention) to show evaluative thinking."
  ]
});
/* ---------- order 102: F7 memory cues ---------- */
L.push({
  id: "ec-flow-f7-memory", order: 102,
  title: "One-page memory cues: four core cases",
  intro: "The F7 memory chains for Malaysia, Singapore, Burma and Vietnam — each slogan plus its sequence of turning points and key figures.",
  steps: [
    { split: [
      { h: "Malaysia: Race, Resources, Restructuring", steps: [
        { t: "1969 riots → NEP (1971–90)", d: "Bumiputera equity 2.4%→20.3%.", tone: "event", cards: ["ec-memory", "nep", "ec-my-nep-equity"] },
        { t: "Mahathir's heavy industry (HICOM)", d: "→ privatisation (1983) → tech/human capital deepening (1986+).", tone: "policy", cards: ["ec-my-hicom", "ec-my-privatisation", "ec-my-deepening"] },
        { t: "1997: domestic overheating", d: "Crisis came via DOMESTIC property/stock overheating, not foreign debt.", tone: "bad", cards: ["ec-my-afc"] } ] },
      { h: "Singapore: Entrepot, Expelled, Excellence", steps: [
        { t: "No resources → open from birth", d: "Entrepot-driven openness.", tone: "context", cards: ["ec-memory", "ec-sg-context"] },
        { t: "Separation + withdrawal FORCED EOI", d: "Separation (1965) + British withdrawal (1971) forced rapid EOI.", tone: "event", cards: ["ec-sg-crisis"] },
        { t: "Tech → services → regionalisation", d: "1979 'Second Industrial Revolution' (tech) → 1986 services pivot ('total business centre') → 1990s regionalisation.", tone: "policy", cards: ["ec-sg-sir", "ec-sg-services", "ec-sg-regional"] },
        { t: "Lim Chong Yah's 3 factors", d: "Success = honest/technocratic governance + free enterprise + outward orientation.", tone: "verdict", cards: ["ec-sg-lim"] } ] },
      { h: "Burma: Best Endowed, Worst Outcome", steps: [
        { t: "Resource-RICH at independence", d: "U Nu's pyidawtha welfare plan fails — state monopolies kill incentives.", tone: "bad", cards: ["ec-memory", "ec-bm-pyidawtha-fail"] },
        { t: "Burmese Way to Socialism (1962)", d: "Ne Win: total nationalisation, expelled Chinese/Indians, autarky.", tone: "policy", cards: ["burmeseway", "ec-bm-minorities"] },
        { row: [
          { t: "Rice exports collapse", d: "1,521k → 204k tons (1962–73).", tone: "bad", cards: ["ec-bm-rice"] },
          { t: "Black market", d: "Fills 70–80% of trade.", tone: "bad", cards: ["ec-bm-blackmarket"] } ] },
        { t: "1985/1987 demonetisations", d: "Wipe out savings → 8888 Uprising.", tone: "bad", cards: ["demonetisation"] },
        { t: "SLORC's CONTRADICTORY opening", d: "Market rhetoric vs continued state monopolies + export bans.", tone: "mixed", cards: ["ec-bm-tucker"] } ] },
      { h: "Vietnam: Pragmatic Pivot", steps: [
        { t: "Split colonial legacy", d: "Capitalist South / socialist North.", tone: "context", cards: ["ec-memory", "ec-vn-colonial"] },
        { t: "Reunification (1975)", d: "Failed socialist transformation imposed on the South (1978–80) — fierce peasant resistance.", tone: "bad", cards: ["ec-vn-stage2"] },
        { t: "2nd FYP fails completely", d: "12m vs 21m ton target.", tone: "bad", cards: ["vietnamfyp"] },
        { t: "Directive 100 (1981)", d: "Cracks the system.", tone: "event", cards: ["ec-vn-directive100"] },
        { t: "Le Duan's death (1986) → Doi Moi", d: "Resolution 10 (1988) privatises agriculture; US embargo lifted (1994).", tone: "policy", cards: ["ec-vn-doimoi", "ec-vn-res10", "ec-vn-integration"] },
        { t: "9.5% growth (1995–96)", d: "World's highest.", tone: "good", cards: ["ec-vn-1990s"] },
        { t: "BUT limits persist", d: "State sector still 50% of output even in 1997; corruption & regional inequity persist.", tone: "mixed", cards: ["ec-vn-limits"] } ] } ] }
  ],
  takeaways: [
    "Each chain gives the turning points and figures to cite in a comparative paragraph.",
    "Burma vs Vietnam: same socialist start, but Vietnam pivoted (Doi Moi) while Burma's opening stayed contradictory."
  ]
});
})();

// Flow charts: Malaysia (Part B) and Singapore (Part C) — from SEA_Economic_Change_Study_Notes
(function(){
const F = (window.FLOWS = window.FLOWS || {}); const L = (F.ec = F.ec || []);

/* ───────────── MALAYSIA ───────────── */

L.push({
  id: "ec-flow-my-1", order: 20,
  title: "Malaysia 1957–69: colonial legacy to the May 1969 riots",
  intro: "How a colonial ethnic division of labour and indiscriminate laissez-faire ISI left Malays economically behind, so that Separation and the 1969 riots made restructuring a political necessity.",
  steps: [
    { t: "Core narrative", d: "Laissez-faire ISI (1957–71) → 1969 riots → NEP (1971–90) → Mahathir heavy industry & privatisation (1980s) → deepening & widening (1986–90s). Average GDP growth 6.7% (1961–2001): solid but behind Singapore.", tone: "context", cards: ["ec-my-narrative"] },
    { t: "Colonial ethnic division of labour", d: "Europeans at top; Chinese (tin mining, middlemen) & Indians (rubber tappers, chettiars) in the middle; Malays in traditional agriculture.", tone: "context", cards: ["ec-my-colonial"] },
    { arrow: "reinforced by" },
    { row: [
      { t: "Chinese Protectorate (1877)", d: "Deliberate British administrative policy separating communities.", tone: "cause" },
      { t: "Malay land reservations", d: "Reserved land for padi, keeping Malays in agriculture.", tone: "cause" } ] },
    { t: "'Race became the leitmotiv' (Drabble)", d: "Race became the leitmotiv of Malaysian politics, with direct economic consequences.", tone: "verdict", cards: ["ec-my-colonial"] },
    { t: "Independence 1957: primary dependence", d: "Tin & rubber = 85% of export earnings: heavy dependence on primary products, so diversification was urgently needed.", tone: "bad", cards: ["ec-my-colonial"] },
    { t: "Social Contract (UMNO–MCA)", d: "Post-independence economic management stayed with the Chinese community.", tone: "context" },
    { t: "Pioneer Industries Programme (1958)", d: "Laissez-faire ISI backing processing of tin, rubber, timber + consumables (beverages, vegetable oil, biscuits). Pioneer-status firms 18 → 246 (1959–71). First Malaysia Plan (1966–70).", tone: "policy", cards: ["ec-my-pioneer", "ec-my-govt"] },
    { split: [
      { h: "Early gains", steps: [
        { t: "Consumer goods share up", d: "Consumption goods share of industrial output 21.9% → 31.2% in the same period: positive early results.", tone: "good" } ] },
      { h: "Critical flaw", steps: [
        { t: "Non-discretionary intervention", d: "All firms got incentives indiscriminately: no targeted strategy, reflecting lack of expertise.", tone: "bad" },
        { t: "Stagnation", d: "Domestic market saturated quickly; manufacturing stuck at 9% of GDP in the 1960s.", tone: "bad" } ] } ] },
    { t: "Merger: Malaysia formed (1963)", d: "Malaya + Singapore + Sabah + Sarawak. Rationale: Singapore as export outlet/entrepot; Sabah/Sarawak's natural resources. Brunei opted out over oil revenue-sharing disputes.", tone: "event", cards: ["ec-my-merger"] },
    { t: "Singapore's Separation (1965)", d: "Exposed the racial/economic inequity within Malaysia.", tone: "event", cards: ["ec-my-merger"] },
    { arrow: "contributed to" },
    { t: "13 May 1969 race riots", d: "Turning point: laissez-faire had left ethnic inequity untouched; the state now intervened intensively to restructure wealth.", tone: "bad", cards: ["ec-my-merger"] },
    { arrow: "in response" },
    { t: "New Economic Policy (1971)", d: "See next chart: NEP 1971–90.", tone: "policy", cards: ["nep"] }
  ],
  takeaways: [
    "Colonial policy created an ethnic division of labour; 'race became the leitmotiv' (Drabble), so Malaysian economic policy was always also ethnic policy.",
    "Laissez-faire ISI had early gains (pioneer firms 18 → 246) but was non-discretionary and stagnated at 9% of GDP: reflecting a lack of expertise and no targeted strategy in the 1960s.",
    "Separation (1965) and the 1969 riots are the turning point from laissez-faire to intensive, ethnically targeted intervention."
  ]
});

L.push({
  id: "ec-flow-my-nep", order: 21,
  title: "Malaysia's New Economic Policy, 1971–90",
  intro: "The NEP's rationale, targets and five strategies, including its deliberate contradiction of cutting foreign ownership while courting FDI.",
  steps: [
    { t: "1969 riots expose inequity", d: "Restructuring ethnic wealth becomes the state's priority.", tone: "context", cards: ["nep"] },
    { row: [
      { t: "Ownership 1970", d: "Corporate wealth: 63% foreign, 35% other Malaysians (mostly Chinese), only 2% Malay.", tone: "cause", cards: ["nep"] },
      { t: "Poverty 1970", d: "75% of households below the poverty line were Malay.", tone: "cause", cards: ["nep"] },
      { t: "Chinese dominance", d: "Chinese = 28% of population but 69% of listed-firm capitalisation (1980s): disproportionate, hence political urgency.", tone: "cause", cards: ["ec-my-chinese"] } ] },
    { t: "Primary objective: national unity", d: "Via (i) reducing poverty regardless of race and (ii) eliminating identification of race with economic function.", tone: "policy", cards: ["nep"] },
    { t: "NEP ownership targets", d: "Malay share of economy → 30%; foreign share down to 30%; Chinese share allowed to rise slightly to 40%.", tone: "policy", cards: ["nep"] },
    { arrow: "pursued through five strategies" },
    { t: "1. Poverty eradication", d: "State investment in agriculture/rural development for bumiputera: FELDA (1956) land schemes; RISDA financing rubber smallholders.", tone: "policy", cards: ["ec-my-nep-poverty"] },
    { t: "2. Bumiputera corporate equity", d: "Screening, state capital injections, joint ventures: Industrial Coordination Act (1975); PERNAS (1978 trading corp); PNB (1978 equity corp) bought Guthrie Corp (1981), Harrisons & Crossfield (1985).", tone: "policy", cards: ["ec-my-nep-equity"] },
    { t: "3. Education & employment", d: "Preferential access to higher education, scholarships, government jobs: created a new Malay middle class by the late 1970s.", tone: "policy", cards: ["ec-my-nep-poverty"] },
    { t: "4. FDI & manufacturing", d: "Incentives despite nationalist aims: Investment Incentives Act (1968); Free Trade Zone Act (1971, tariff-free for firms exporting ≥80%).", tone: "policy", cards: ["ec-my-nep-fdi"] },
    { t: "5. Economic nationalism", d: "State purchase of foreign assets: Petronas nationalised oil (1974); London Tin → Malaysian Mining Corp.", tone: "policy", cards: ["ec-my-nep-equity"] },
    { t: "The apparent contradiction", d: "NEP aimed to reduce foreign ownership yet actively courted FDI. Deliberate balance: FDI gave capital, expertise and competition bumiputera-focused capital alone could not.", tone: "mixed", cards: ["ec-my-nep-fdi"] },
    { arrow: "by 1990" },
    { split: [
      { h: "Achieved", steps: [
        { t: "Equity & poverty", d: "Bumiputera corporate equity 2.4% → 20.3% (1971–90); poverty 40.3% → 15%; bumiputera employment shifted to secondary/tertiary sectors; new Malay middle class.", tone: "good", cards: ["ec-my-eval-equity"] } ] },
      { h: "Fell short", steps: [
        { t: "Target missed, gains narrow", d: "Below 30% target; rewards concentrated in politically connected bumiputera 'oligopoly' (e.g. North-South Highway → United Engineers/UMNO).", tone: "bad", cards: ["ec-my-eval-equity"] } ] } ] },
    { t: "NEP formally ends 1990", d: "Growth now prioritised over equity (Rasiah): Mahathir would not sacrifice industrialisation to reach 30%.", tone: "verdict", cards: ["ec-my-rasiah"] }
  ],
  takeaways: [
    "The NEP was driven by political necessity (2% Malay ownership, 75% of poor households Malay) as much as economics: equity and national unity were the stated aims.",
    "Mechanisms were state agencies and trusts (FELDA, RISDA, PERNAS, PNB, Petronas), showing intensive intervention in the 1970s.",
    "Partial success: equity 2.4% → 20.3% and poverty 40.3% → 15%, but the 30% target was missed and gains went to a connected elite."
  ]
});

L.push({
  id: "ec-flow-my-mahathir", order: 22,
  title: "Malaysia 1980s–90s: Mahathir, HICOM, privatisation and deepening",
  intro: "State-led heavy industry ran into a debt crisis, forcing privatisation and devaluation; from 1986 the state shifted to technology and human capital, putting growth before equity.",
  steps: [
    { t: "'Look East' policy", d: "Mahathir modelled Malaysia on Japan/South Korea, not the West, admiring their work ethic as the basis of their economic miracles.", tone: "policy", cards: ["ec-my-hicom"] },
    { t: "HICOM (1981)", d: "Heavy Industry Corporation of Malaysia: state-led investment in cars, cement, steel, motorcycles (Kedah Cement, Perwaja Steel, Proton). Aim: build a bumiputera industrial/business class.", tone: "policy", cards: ["ec-my-hicom"] },
    { arrow: "backfired →" },
    { t: "Heavy losses & soaring debt", d: "Inefficient minimum-scale operations + government loan funding. Public enterprises = 64.3% of public-sector deficit (1980–85).", tone: "bad", cards: ["ec-my-privatisation"] },
    { arrow: "forced" },
    { t: "Privatisation (1983)", d: "Methods: sale of SOEs; private financing of state projects; contracting out services; introducing competition into state monopolies.", tone: "policy", cards: ["ec-my-privatisation"] },
    { row: [
      { t: "'Malaysia Incorporated' (1983)", d: "Public & private sectors as partners, not opposites. 13 SOEs privatised by 1992.", tone: "policy", cards: ["ec-my-privatisation"] },
      { t: "Deregulation & devaluation", d: "Reduced financial regulation; ringgit devalued (1985) to boost export competitiveness, as Thailand and Indonesia also did.", tone: "policy", cards: ["ec-my-privatisation", "ec-my-dereg"] } ] },
    { t: "1986 onward: priorities shift", d: "Industrialisation now mattered more than equity; less ethnically targeted, more growth-focused.", tone: "event", cards: ["ec-my-deepening", "ec-my-govt"] },
    { t: "Deepening: technology & human capital", d: "Promotion of Investments Act (1986, R&D incentives); Action Plan for Industrial Technology Development (1990, Vision 2020 target); Multimedia Super Corridor; Human Resource Development Act.", tone: "policy", cards: ["ec-my-deepening"] },
    { t: "Widening: localisation", d: "Malaysian Technology Development Corporation (MTDC, 1993) invested in 8 local tech firms (e.g. Proton, Sapura) by end of year.", tone: "policy", cards: ["ec-my-deepening"] },
    { t: "Results: industrial transformation", d: "Manufacturing = 60% of exports by 1990 (vs 20% a decade earlier); export growth 20% (1990–95); Malaysia became an NIC under Mahathir.", tone: "good", cards: ["ec-my-deepening", "ec-my-eval-growth"] },
    { t: "Rasiah: growth over equity", d: "Mahathir was sad bumiputeras missed 30% equity but 'not prepared to achieve it at the expense of checking the pace of industrialisation'.", tone: "verdict", cards: ["ec-my-rasiah"] }
  ],
  takeaways: [
    "HICOM shows the costs of state-led, bumiputera-focused heavy industry: losses and debt (64.3% of the public-sector deficit) forced a U-turn to privatisation.",
    "Government role shifted from owner (HICOM) to partner ('Malaysia Incorporated') to facilitator of technology and human capital after 1986.",
    "Rasiah: once the NEP ended in 1990, growth was prioritised over equity even though equity goals were unmet."
  ]
});

L.push({
  id: "ec-flow-my-finance", order: 23,
  title: "Malaysia's financial policy and the 1997 crisis",
  intro: "Deregulation, NPL crisis, re-regulation and then forgotten lessons: Malaysia's 1997 vulnerability came from domestic stock and property overheating, not foreign debt or poor governance.",
  steps: [
    { t: "Financial deregulation (mid-1980s)", d: "Attracted FDI and eased credit.", tone: "policy", cards: ["ec-my-dereg"] },
    { arrow: "but weak oversight →" },
    { t: "NPL build-up", d: "Non-performing loans reached ~30% of commercial bank loans by 1987–88.", tone: "bad", cards: ["ec-my-dereg"] },
    { arrow: "in response" },
    { t: "Banking & Financial Institutions Act (1989)", d: "Stringent regulation re-introduced: sound practices/cash reserves required; private foreign borrowing needed Bank Negara approval.", tone: "policy", cards: ["ec-my-dereg"] },
    { t: "Lessons forgotten by 1990s", d: "Easy credit returned → renewed NPL build-up.", tone: "bad", cards: ["ec-my-dereg"] },
    { row: [
      { t: "Property & stock overheating", d: "Property loans = 45–55% of lending; KLSE 3rd largest in Asia-Pacific; market capitalisation = 300% of GDP.", tone: "cause", cards: ["ec-my-afc"] },
      { t: "Bank–finance mergers", d: "E.g. Sime Darby + UMBC → Sime Bank: increased exposure to stock-market risk.", tone: "cause", cards: ["ec-my-afc"] },
      { t: "Current account deficit", d: "Large deficit plus a volatile stock market.", tone: "cause", cards: ["ec-my-afc"] } ] },
    { t: "1997 Asian Financial Crisis", d: "KLSE composite index 1,238 points (Dec 1996) → 594 points (Dec 1997).", tone: "event", cards: ["ec-my-afc"] },
    { split: [
      { h: "Different from Thailand/Indonesia", steps: [
        { t: "Not foreign debt", d: "No massive foreign debt build-up (unlike Indonesia); root cause was domestic property/stock overheating.", tone: "mixed", cards: ["ec-my-afc"] } ] },
      { h: "Less moral hazard", steps: [
        { t: "Relatively robust banks", d: "BNM had forced weak banks to take losses (mid-1980s); annual NPL disclosure; banking 'relatively robust' in 1996.", tone: "good", cards: ["ec-my-afc"] } ] } ] },
    { t: "Verdict", d: "Vulnerability stemmed from the current account deficit + volatile stock market, not poor governance. Transparent, quick to fix NPLs pre-1997, yet still exposed.", tone: "verdict", cards: ["ec-my-eval-growth"] }
  ],
  takeaways: [
    "Malaysia's financial story is cyclical: deregulation → NPLs (~30%) → 1989 re-regulation → easy credit again → 1997.",
    "Distinguish Malaysia's 1997 cause (domestic stock/property bubble, 300% of GDP market cap) from Indonesia's foreign-debt build-up.",
    "Good governance (transparency, BNM discipline) limited moral hazard, so vulnerability stemmed from the current account deficit and volatile stock market, not poor governance."
  ]
});

L.push({
  id: "ec-flow-my-eval", order: 24,
  title: "Evaluating Malaysia: successes, limits, state and ethnicity",
  intro: "Malaysia judged against equity, growth, unity and stability; how the state's role changed by period; and why ethnic Chinese dominance shaped everything.",
  steps: [
    { t: "Overall: 6.7% growth (1961–2001)", d: "Solid but behind Singapore (8.3%).", tone: "context", cards: ["ec-my-narrative"] },
    { split: [
      { h: "Successes", steps: [
        { t: "Equity (NEP)", d: "Bumiputera equity 2.4% → 20.3% (1971–90); poverty 40.3% → 15%; shift to secondary/tertiary jobs; new Malay middle class.", tone: "good", cards: ["ec-my-eval-equity"] },
        { t: "Growth & diversification", d: "Industry 24.7% → 41.7% of GDP (1970–90); 3 main exports 54.4% → 44.5% of total; export growth 20% (1990–95); became an NIC.", tone: "good", cards: ["ec-my-eval-growth"] },
        { t: "Financial stability", d: "Relatively transparent, well-regulated banks; quick to address NPL crises pre-1997.", tone: "good", cards: ["ec-my-eval-growth"] } ] },
      { h: "Limitations", steps: [
        { t: "Equity shortfall", d: "Missed 30% target; gains to a connected bumiputera 'oligopoly' (North-South Highway → United Engineers/UMNO).", tone: "bad", cards: ["ec-my-eval-equity"] },
        { t: "Early stagnation", d: "1960s manufacturing stuck at 9% under non-discretionary ISI.", tone: "bad", cards: ["ec-my-pioneer"] },
        { t: "National unity", d: "Affirmative action reinforced ethnicity as basis for privilege, divisive long-term; regional inequality (industrial west coast vs poorer Kedah/Kelantan).", tone: "bad", cards: ["ec-my-eval-growth"] },
        { t: "1997 vulnerability", d: "Domestic stock/property overheating and large current account deficit.", tone: "bad", cards: ["ec-my-afc"] } ] } ] },
    { t: "Role of government by period", d: "How the nature of intervention changed.", tone: "context", cards: ["ec-my-govt"] },
    { row: [
      { t: "1960s", d: "Laissez-faire, no long-term strategy: Pioneer Industries; First Malaysia Plan (1966–70).", tone: "policy", cards: ["ec-my-govt"] },
      { t: "1970s", d: "NEP-driven, intensive: rural development; FELDA, PERNAS, PNB restructure ownership.", tone: "policy", cards: ["ec-my-govt"] } ] },
    { row: [
      { t: "1980s", d: "State-led heavy industry (HICOM) → crisis → deregulation, devaluation, privatisation.", tone: "policy", cards: ["ec-my-govt"] },
      { t: "1986 onward", d: "Plans/institutions for technology & human capital; less ethnically targeted, more growth-focused.", tone: "policy", cards: ["ec-my-govt"] } ] },
    { t: "Role of ethnic communities", d: "Chinese share of listed-firm capitalisation (1980s): Singapore 81% (70% of pop.); Thailand 81% (10%); Indonesia 73% (3.8%); Malaysia 69% (28%); Philippines 50–60% (1.3%).", tone: "context", cards: ["ec-my-chinese"] },
    { t: "Why it mattered for Malaysia", d: "Even with a high Chinese population share, 69% control was very disproportionate, explaining the NEP's political urgency.", tone: "cause", cards: ["ec-my-chinese", "ec-my-colonial"] },
    { row: [
      { t: "Drabble", d: "'Race became the leitmotiv' of Malaysian politics, with economic consequences.", tone: "verdict", cards: ["ec-my-colonial"] },
      { t: "Rasiah", d: "Mahathir would not reach 30% equity 'at the expense of checking the pace of industrialisation'.", tone: "verdict", cards: ["ec-my-rasiah"] } ] },
    { t: "Overall judgement", d: "Strong on growth and diversification, partial on equity, weak on unity: ethnic politics shaped both the NEP's ambitions and its limits.", tone: "verdict" }
  ],
  takeaways: [
    "Use the criteria table: growth/diversification clearly succeeded; equity was partial; national unity arguably worsened.",
    "Government role was never constant: laissez-faire → NEP intensive → state heavy industry → privatisation → growth-focused facilitation.",
    "Ethnic community (Chinese dominance, 69% of listed capital) explains the political urgency of ethnically targeted NEP restructuring."
  ]
});

/* ───────────── SINGAPORE ───────────── */

L.push({
  id: "ec-flow-sg-1", order: 25,
  title: "Singapore 1950s–1971: from entrepot to forced EOI",
  intro: "A resource-less entrepot took foreign advice to industrialise, tried ISI under Malaysia, then Separation and British withdrawal forced a decisive turn to export-oriented industrialisation.",
  steps: [
    { t: "Core narrative", d: "Entrepot → brief ISI under Malaysia (1960–65) → forced EOI after 1965 & 1971 → 'Second Industrial Revolution' (1979) → services & regionalisation (1986+). Average growth 8.3% (1961–2001): region's top performer.", tone: "context", cards: ["ec-sg-narrative"] },
    { t: "British entrepot, not industrial centre", d: "1950s growth rate below 2%.", tone: "context", cards: ["ec-sg-context"] },
    { row: [
      { t: "No fallback", d: "No agrarian sector, no natural resources, tiny domestic market, unlike Malaysia, Thailand, Indonesia, Philippines.", tone: "cause", cards: ["ec-sg-context"] },
      { t: "Open from the start", d: "Entrepot trade gave exposure to a wide range of goods: inherently export-oriented, open economy.", tone: "cause", cards: ["ec-sg-context"] },
      { t: "Human capital", d: "1947 workforce: services 30.9%, commerce 23.2%, agriculture only 8.1%.", tone: "cause", cards: ["ec-sg-context"] } ] },
    { t: "Exports as % of GDP", d: "1950–60 vs 1990–2000: Singapore 126.7 → 177.4; Malaysia 53.3 → 94.4; Thailand 19.6 → 45.1; Philippines 12.0 → 39.7; Indonesia 25.0 → 30.8; Myanmar 21.0 → 1.3.", tone: "context", cards: ["ec-sg-exportgdp"] },
    { t: "Foreign advice (1955–61)", d: "Three reports recommend government-led industrialisation.", tone: "cause", cards: ["ec-sg-reports"] },
    { row: [
      { t: "IBRD Report (1955)", d: "Government plays infrastructural role + attracts FDI.", tone: "policy", cards: ["ec-sg-reports"] },
      { t: "Lyle Report (1959)", d: "Led to Pioneer Industries Ordinance & Industrial Expansion Ordinance.", tone: "policy", cards: ["ec-sg-reports"] },
      { t: "Winsemius Report (1961)", d: "Led to first Development Plan (1961–64) and the EDB (Aug 1961).", tone: "policy", cards: ["ec-sg-reports"] } ] },
    { t: "Economic Development Board", d: "'One-stop investment agency': loans, technical advice, industrial estates. Spawned DBS, National Productivity Board, Jurong Town Corporation by 1968.", tone: "policy", cards: ["ec-sg-reports"] },
    { t: "Merger with Malaysia (1963): ISI", d: "Malaysia to be hinterland (resources) + common market (demand). The common market never materialised: a source of tension.", tone: "event", cards: ["ec-sg-crisis"] },
    { arrow: "contributed to" },
    { t: "Separation (1965)", d: "Lost hinterland and common market; Malaysia now an economic competitor.", tone: "bad", cards: ["ec-sg-crisis"] },
    { t: "British military withdrawal", d: "Announced July 1967, completed Dec 1971: loss of 40,000 jobs = 10% of national income.", tone: "bad", cards: ["ec-sg-crisis"] },
    { arrow: "forced" },
    { split: [
      { h: "Short term", steps: [
        { t: "Continued ISI", d: "To absorb excess labour (e.g. textiles).", tone: "mixed", cards: ["ec-sg-crisis"] } ] },
      { h: "Decisive pivot", steps: [
        { t: "EOI under Goh Keng Swee", d: "Leveraging human capital, location and port status.", tone: "policy", cards: ["ec-sg-crisis"] } ] } ] },
    { t: "See next chart: the EOI levers", d: "Export incentives, manpower training, FDI policy, political stability.", tone: "context", cards: ["ec-sg-levers"] }
  ],
  takeaways: [
    "Singapore's starting conditions (no resources, entrepot openness, service-skilled workforce) made EOI both necessary and feasible.",
    "Foreign reports (IBRD, Lyle, Winsemius) and the EDB show the state's role was planned from the start.",
    "Separation (1965) and British withdrawal (10% of national income) were external shocks that forced the turn to EOI: crisis as catalyst."
  ]
});

L.push({
  id: "ec-flow-sg-eoi", order: 26,
  title: "Singapore 1965–79: the levers of export-oriented industrialisation",
  intro: "How the state used incentives, training, FDI policy and political stability to make MNC-led export manufacturing work, and the results by 1980.",
  steps: [
    { t: "Pivot to EOI (late 1960s)", d: "Under Goh Keng Swee, after Separation and British withdrawal.", tone: "context", cards: ["ec-sg-crisis"] },
    { t: "Lever 1: Export incentives", d: "Concessionary tax rates; lower MAS interest rates for export financing; Export Credit Insurance Scheme (1976); Small Industries Finance Scheme (1976).", tone: "policy", cards: ["ec-sg-levers"] },
    { t: "Lever 2: Manpower training", d: "Industrial training centres; 1968 education restructuring (technical/vocational): Ngee Ann College, Singapore Polytechnic reorganised 1968–69. Technical/vocational enrolment rose 8× (1966–76).", tone: "policy", cards: ["ec-sg-levers"] },
    { t: "Lever 3: Foreign investment policy", d: "Pioneer-status tax exemptions; free profit repatriation; simplified immigration for skilled/capital holders.", tone: "policy", cards: ["ec-sg-fdi"] },
    { t: "1978: 100% foreign ownership", d: "Allowed in full: a 'major turning point'.", tone: "event", cards: ["ec-sg-fdi"] },
    { t: "Lever 4: Stability & infrastructure", d: "PAP political stability: lost man-days 129,893 (1960) → 1,001 (1977), a 99% decline. Strong transport/communication legacy from entrepot history.", tone: "policy", cards: ["ec-sg-fdi"] },
    { row: [
      { t: "Tripartism", d: "NTUC + National Wages Council (1971) coordinate government, unions, employers.", tone: "policy", cards: ["ec-sg-boards"] },
      { t: "Statutory boards", d: "National Productivity Board (1972); JTC (1968, industrial land).", tone: "policy", cards: ["ec-sg-boards"] },
      { t: "State enterprises", d: "Neptune Orient Lines (1969), Singapore Petroleum Company (1969), Singapore Airlines (1972), Jurong/Keppel Shipyard.", tone: "policy", cards: ["ec-sg-holdings"] } ] },
    { arrow: "results" },
    { t: "MNC-led exports", d: "Foreign-affiliated firms = 71% of exports by 1976 (mainly US, UK, Japan).", tone: "good", cards: ["ec-sg-fdi"] },
    { t: "Manufacturing surge", d: "Manufacturing share of GDP 13.2% (1960) → 29.1% (1980): highest in the region.", tone: "good", cards: ["ec-sg-fdi", "ec-sg-indicators"] },
    { t: "But: labour shortage by late 1970s", d: "Low-value, labour-intensive model reaching its limit → Second Industrial Revolution (next chart).", tone: "mixed", cards: ["ec-sg-sir"] }
  ],
  takeaways: [
    "EOI succeeded because the state combined incentives, training and FDI-friendly policy with labour peace (lost man-days down 99%).",
    "Foreign-affiliated firms (71% of exports by 1976) drove export growth; manufacturing reached 29.1% of GDP by 1980, the highest in the region.",
    "Allowing 100% foreign ownership (1978) is the turning point to cite on Singapore's openness to FDI."
  ]
});

L.push({
  id: "ec-flow-sg-2", order: 27,
  title: "Singapore 1979–1990s: technology, services and regionalisation",
  intro: "Labour shortage drove a shift up the value chain; the 1985 recession exposed vulnerability and prompted the 'two engines' of manufacturing and services, then regionalisation.",
  steps: [
    { t: "Labour shortage (late 1970s)", d: "Low-value, labour-intensive industry no longer viable.", tone: "cause", cards: ["ec-sg-sir"] },
    { arrow: "led to" },
    { t: "'Second Industrial Revolution' (1979–81)", d: "Deliberate shift to technological sophistication: R&D, engineering design, computer software.", tone: "policy", cards: ["ec-sg-sir"] },
    { t: "Goh Chok Tong's 1981 Budget", d: "10-year Economic Development Plan for the Eighties: integrated circuits, computers, aircraft components, X-ray machines; more skilled labour; less exposed to tariffs than textiles.", tone: "policy", cards: ["ec-sg-sir"] },
    { row: [
      { t: "STC (1983)", d: "Singapore Technologies Corporation.", tone: "policy", cards: ["ec-sg-sir"] },
      { t: "GIC", d: "Government of Singapore Investment Corporation: invests in overseas high-tech MNCs.", tone: "policy", cards: ["ec-sg-sir"] },
      { t: "Trade Development Board (1983)", d: "Later IE Singapore → Enterprise Singapore.", tone: "policy", cards: ["ec-sg-boards"] } ] },
    { t: "Value-added per worker nearly doubled", d: "1979–84.", tone: "good", cards: ["ec-sg-sir"] },
    { row: [
      { t: "High-wage policy", d: "To attract skilled labour; with tight labour market, reduced investment attractiveness.", tone: "cause", cards: ["ec-sg-recession"] },
      { t: "Global slowdown", d: "Plus developed-world protectionism.", tone: "cause", cards: ["ec-sg-recession"] },
      { t: "Low oil prices", d: "Hurt shipbuilding/ship-repair (¼ of manufacturing).", tone: "cause", cards: ["ec-sg-recession"] } ] },
    { t: "1985 recession", d: "Part of 1981–86 difficulties: demonstrated Singapore's vulnerability to global trends.", tone: "bad", cards: ["ec-sg-recession"] },
    { arrow: "in response" },
    { t: "1986 Economic Committee", d: "Chaired by Lee Hsien Loong, included business representatives: TWO engines of growth, manufacturing AND services; Singapore as a 'total business centre' ('clusters' concept).", tone: "policy", cards: ["ec-sg-services", "ec-sg-holdings"] },
    { row: [
      { t: "Small Enterprise Bureau (1986)", d: "New statutory board, same year as the Economic Committee.", tone: "policy", cards: ["ec-sg-boards"] },
      { t: "Cluster Development Fund (1995)", d: "S$1 billion for strategic investments.", tone: "policy", cards: ["ec-sg-services"] } ] },
    { t: "Services grow", d: "Services share of GDP 16% (1965) → 24% (1985) → 28% (2010). Over 60 major TNCs made Singapore their Asia-Pacific HQ since 1986.", tone: "good", cards: ["ec-sg-services", "ec-sg-regional"] },
    { t: "1990s Regionalisation: 'second wing'", d: "'Singapore Inc.' integrated local firms with regional economies to transcend city-state limits: Johor-Riau Growth Triangle; Suzhou Industrial Park; 1994 Regional Business Forum (EDB).", tone: "policy", cards: ["ec-sg-regional", "ec-sg-holdings"] },
    { t: "Investment abroad soars", d: "Direct investment abroad S$8.7bn → S$16.9bn in one year (1989–90), S$28.2bn by 1993.", tone: "good", cards: ["ec-sg-regional"] },
    { t: "1997: weathered better", d: "MAS's strict regulation meant the financial sector withstood the Asian Financial Crisis far better than regional peers (see evaluation chart).", tone: "good", cards: ["ec-sg-services", "ec-sg-1997"] },
    { t: "Falling manufacturing share ≠ failure", d: "Manufacturing 29.1% (1980) → 27.1% (1990) reflects the deliberate, successful shift to higher-value technology and services.", tone: "verdict", cards: ["ec-sg-indicators"] }
  ],
  takeaways: [
    "The state deliberately restructured twice: the 1979 Second Industrial Revolution (response to labour shortage) and the 1986 'two engines' shift (after the 1985 recession).",
    "The 1985 recession (high-wage policy, global slowdown, protectionism, low oil prices) demonstrated Singapore's vulnerability to global trends.",
    "Regionalisation (Growth Triangle, Suzhou, S$28.2bn abroad by 1993) was the state's way to transcend city-state limitations."
  ]
});

L.push({
  id: "ec-flow-sg-eval", order: 28,
  title: "Evaluating Singapore: success, Achilles' heels and 1997",
  intro: "Quantitative indicators, Lim Chong Yah's three factors for success, the limitations that persisted, and why Singapore weathered 1997 better than its neighbours.",
  steps: [
    { t: "Region's top performer", d: "Average GDP growth 8.3% (1961–2001): the region's top performer.", tone: "good", cards: ["ec-sg-narrative"] },
    { t: "Quantitative indicators", d: "Industry % GDP 36.4 (1970), 38.8 (1980), 34.8 (1990); manufacturing 20.5, 29.1, 27.1; 3 main exports 39.8% (1985) → 50.2% (2000); primary exports 49.8% (1975) → 15.5% (1994).", tone: "context", cards: ["ec-sg-indicators"] },
    { t: "Reading the figures", d: "Falling industry share in the 1980s–90s reflects the successful shift to higher-value technology and services, not failure.", tone: "verdict", cards: ["ec-sg-indicators"] },
    { t: "Lim Chong Yah's three factors", d: "Why Singapore succeeded.", tone: "verdict", cards: ["ec-sg-lim"] },
    { row: [
      { t: "1. Free enterprise", d: "Bred efficiency while neighbours grappled with over-protectionism.", tone: "good", cards: ["ec-sg-lim"] },
      { t: "2. Outward-looking", d: "Natural extension of entrepot trade history.", tone: "good", cards: ["ec-sg-lim"] },
      { t: "3. Able, honest government", d: "'The leadership of the state was crucial, critical, and indispensable' (Lim).", tone: "good", cards: ["ec-sg-lim"] } ] },
    { t: "PAP's autonomy", d: "English-educated nationalists allied with Chinese-educated working class; relatively free of interest-group/crony pressure, unlike Philippines (Marcos cronies Benedicto, Cuenca) and Indonesia (military cooption).", tone: "verdict", cards: ["ec-sg-lim"] },
    { t: "Achilles' heels", d: "Limitations despite success.", tone: "mixed", cards: ["ec-sg-limits"] },
    { row: [
      { t: "Social inequality", d: "1990 census: 20% of households <$700/month; 50% <$2,100; top 10% $9,700+. Gini coefficient deteriorated over time.", tone: "bad", cards: ["ec-sg-limits"] },
      { t: "External vulnerability", d: "1985 recession; 1997–98 crisis (Straits Times Index −62%, Feb'97–Sep'98; 1998 growth 0.3%, still relatively strong); 2009 global crisis.", tone: "bad", cards: ["ec-sg-limits"] } ] },
    { row: [
      { t: "Resource dependence", d: "Imports nearly all essentials, especially food: drives emphasis on defence/regional diplomacy.", tone: "bad", cards: ["ec-sg-limits"] },
      { t: "Labour shortage", d: "Small population + falling birth rate → politically sensitive immigration; pro-family policies of limited success.", tone: "bad", cards: ["ec-sg-limits"] } ] },
    { t: "Why Singapore weathered 1997 better", d: "Sound fundamentals.", tone: "context", cards: ["ec-sg-1997"] },
    { row: [
      { t: "Current account", d: "15.4% surplus in 1997, vs deficits elsewhere.", tone: "good", cards: ["ec-sg-1997"] },
      { t: "No foreign borrowing", d: "No external debt since 1995; FDI-reliant, not foreign-loan-reliant.", tone: "good", cards: ["ec-sg-1997"] },
      { t: "Strict MAS regulation", d: "6% bank reserve requirement since 1975; 18%/10% liquid asset requirements for banks/finance companies.", tone: "good", cards: ["ec-sg-1997"] } ] },
    { t: "Conclusion on 1997", d: "'Economic openness and globalisation are not sufficient factors' to explain a crisis: sound domestic policy is what matters.", tone: "verdict", cards: ["ec-sg-1997"] }
  ],
  takeaways: [
    "Lim Chong Yah's three factors (free enterprise, outward orientation, able and honest government) structure a 'why Singapore succeeded' answer.",
    "Success had costs: inequality (rising Gini), external vulnerability (1985, 1997–98), resource and labour dependence.",
    "1997 proves domestic fundamentals matter more than openness: surplus, no external debt, strict MAS rules, unlike Malaysia's stock bubble or Indonesia's foreign loans."
  ]
});

L.push({
  id: "ec-flow-sg-govt", order: 29,
  title: "Singapore's state: mechanisms and the nature of intervention",
  intro: "The machinery of the developmental state (statutory boards, tripartism, state holding companies, cooption) and why its nature, not its extent, set Singapore apart.",
  steps: [
    { t: "Strong state, planned from 1961", d: "EDB and Development Plans built on foreign reports; PAP stability.", tone: "context", cards: ["ec-sg-reports"] },
    { t: "Statutory boards (~70 by 1990)", d: "EDB (FDI attraction), JTC (1968, industrial land), National Productivity Board (1972), Trade Development Board (1983, later IE Singapore → Enterprise Singapore), Small Enterprise Bureau (1986).", tone: "policy", cards: ["ec-sg-boards"] },
    { t: "Trade unions & tripartism", d: "NTUC + National Wages Council (1971): government/NTUC/employers coordination eliminated labour unrest almost entirely; last strike before 2012 was in 1986.", tone: "policy", cards: ["ec-sg-boards"] },
    { t: "State-owned holding companies", d: "Temasek Holdings, MND Holdings, Singapore Technologies: by 1990 sole shareholder of 50 companies + stakes in 566 subsidiaries.", tone: "policy", cards: ["ec-sg-holdings"] },
    { t: "Vital-sector SOEs", d: "Jurong/Keppel Shipyard, Neptune Orient Lines (1969), Singapore Airlines (1972), Singapore Petroleum Company (1969).", tone: "policy", cards: ["ec-sg-holdings"] },
    { t: "Cooption of private sector", d: "1986 Economic Committee included business; 1994 Regional Business Forum (EDB) coordinated regionalisation: 'institutionalisation of interaction between capital and state' (Rodan).", tone: "policy", cards: ["ec-sg-holdings"] },
    { arrow: "so the key distinction is" },
    { t: "Extent similar, nature different", d: "Singapore's intervention was comparable in extent to other SEA states but fundamentally different in nature.", tone: "verdict", cards: ["ec-sg-nature"] },
    { split: [
      { h: "Singapore", steps: [
        { t: "SOE purpose", d: "Stimulate & collaborate with private capital.", tone: "good", cards: ["ec-sg-nature"] },
        { t: "Decisions", d: "Economic efficiency given 'highest priority'.", tone: "good", cards: ["ec-sg-nature"] },
        { t: "Capital", d: "Channelled and directed local capital to productive investment.", tone: "good", cards: ["ec-sg-nature"] } ] },
      { h: "Indonesia / Philippines", steps: [
        { t: "SOE purpose", d: "State domination OVER private capital, or crony capture of it.", tone: "bad", cards: ["ec-sg-nature"] },
        { t: "Decisions", d: "Political considerations often replaced economic criteria.", tone: "bad", cards: ["ec-sg-nature"] },
        { t: "Capital", d: "Suppressed available capital; relied on foreign loans → severe vulnerability exposed in 1997.", tone: "bad", cards: ["ec-sg-nature"] } ] } ] },
    { t: "Ethnic dimension", d: "Chinese = 70% of population and 81% of listed capital (1980s); PAP relatively free of interest-group/crony pressure. Contrast Malaysia's ethnically targeted NEP.", tone: "context", cards: ["ec-my-chinese", "ec-sg-lim"] },
    { t: "Verdict", d: "Lim: state leadership 'crucial, critical, and indispensable'. Success came from efficient, autonomous, partnership-based intervention, not from less intervention.", tone: "verdict", cards: ["ec-sg-lim", "ec-sg-vs-my"] }
  ],
  takeaways: [
    "Name the mechanisms: ~70 statutory boards, tripartism (NWC 1971), Temasek and other holding companies, cooption of business (Rodan).",
    "Essay distinction: Singapore's intervention matched others in extent but differed in nature: efficiency-driven, collaborative with capital, free of cronyism.",
    "Contrast with Indonesia/Philippines, whose politicised SOEs and foreign-loan reliance left them exposed in 1997."
  ]
});

})();

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
    { t: "Verdict on 1948–62", d: "Modest state role (Pyidawtha, DSI, limited monopolies), but even limited monopolies hurt incentives; failure set the stage for Ne Win's extreme socialism from 1962.", tone: "verdict" }
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
    "Equity and nationalism were 'achieved' at the cost of growth — hard to credit as \"an achievement of any sort\" given the parlous economy."
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
    { t: "Stage II (Dec 1978): collectivisation", d: "'New Management System', gradualist: work-exchange teams (farmers keep land, contract production goals) → pilot cooperatives in receptive areas → large collectives. State seized equipment/livestock.", tone: "policy", cards: ["ec-vn-stage2"] },
    { t: "Fierce Southern resistance", d: "Southern peasants were freeholders (unlike Northern tenants): sold land back to owners, destroyed equipment/livestock, refused collective labour. Party used mass meetings, pressure, 'counterrevolutionary' threats.", tone: "bad", cards: ["ec-vn-stage2"] },
    { t: "Total failure", d: "By 1982 only 0.6% of Mekong households in cooperatives; 10 new cooperatives in HCMC since 1975. Rice 11.83m (1976) → 9.79m tons (1979); Mekong 950,000 → 398,000 tons.", tone: "bad", cards: ["ec-vn-stage2"] },
    { arrow: "why the 2nd FYP failed — four causes" },
    { row: [
      { t: "1. Lack of funds", d: "Soviet aid ~$1bn/yr (promised $2.7bn); China cancelled aid after Vietnam joined CMEA (1978) — Sino-Soviet rivalry; Carter administration never paid promised $3bn (1973 Paris Agreement); 1979 Cambodia invasion → US/allied embargo, 50% of spending on defence.", tone: "cause", cards: ["ec-vn-fyp-funds"] },
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
    { t: "3rd Five-Year Plan (1981–85)", d: "Food/consumer subsidies abolished; private sector allowed in forestry, fisheries, retail; HCMC, Hanoi, Haiphong, Da Nang got own import-export corporations; more Soviet aid sought (student/technician exchanges).", tone: "policy", cards: ["ec-vn-3rdfyp"] },
    { t: "3rd FYP results", d: "Industrial production +~10%/yr; grain +~5%/yr; 1983 agricultural export surplus.", tone: "good", cards: ["ec-vn-3rdfyp"] },
    { arrow: "pressures for deeper reform" },
    { row: [
      { t: "Soviet aid cut", d: "Gorbachev's reforms reduced Soviet support.", tone: "cause", cards: ["ec-vn-doimoi"] },
      { t: "US embargo", d: "Since 1964 (North), extended 1975: blocked IMF/World Bank/ADB and deterred Western/Japanese aid.", tone: "cause", cards: ["ec-vn-doimoi"] },
      { t: "Leadership change", d: "Le Duan died (1986) → Nguyen Van Linh, willing to experiment with capitalism, became General Secretary.", tone: "cause", cards: ["ec-vn-doimoi"] }
    ] },
    { t: "Doi Moi: 6th Congress (Dec 1986)", d: "'Renovation': 'market economy with socialist direction'. Modelled on Deng's China (1978) — gradualism and stability, unlike Gorbachev's USSR (economic AND political liberalisation). Party supremacy kept; liberalisation economic only.", tone: "policy", cards: ["ec-vn-doimoi", "ec-vn-theme"] },
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
    { t: "Hoa squeezed out", d: "Post-reunification nationalisation and persecution of ethnic Chinese (the Hoa), suspected capitalists and ex-South-government supporters → flight abroad.", tone: "bad", cards: ["ec-vn-hoa"] },
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
    { t: "Hla Myint (1971)", d: "Investors care less about tax 'handouts' than reduced bureaucracy and long-term political/security certainty. Contrast: Vietnam's sustained Doi Moi commitment vs Burma's 1988 coup.", tone: "verdict", cards: ["ec-bm-limits"] },
    { t: "Verdict", d: "Flexibility under one-party rule (Vietnam) beat ideological rigidity (Burma); yet both kept large state/military economic footprints.", tone: "verdict", cards: ["burmavsvietnam", "ec-f2-bmvn"] }
  ],
  takeaways: [
    "The Burma–Vietnam pair is the clearest test of 'government policy determined economic outcomes'.",
    "Political stability and credible commitment (not just incentives on paper) attracted investment.",
    "Both show limits: army-run enterprises in Burma (SLORC) and Vietnam (VPA)."
  ]
});

})();

// Flow charts: Thailand (Lecture 3) — from SEA_Economic_Change_Study_Notes
(function(){
const F = (window.FLOWS = window.FLOWS || {}); const L = (F.ec = F.ec || []);

L.push({
  id: "ec-flow-thailand-1", order: 60,
  title: "Thailand to 1957: never colonised, 1932 Revolution, Phibun",
  intro: "Why Thailand started differently: never colonised, so an autonomous Chinese commercial class grew early. Phibun's economic nationalism and state enterprises did not displace it — private capital stayed resilient against both state intervention and foreign capital, unlike Indonesia and the Philippines.",
  steps: [
    { t: "Overview: second only to Singapore", d: "Avg GDP growth 1961–2001: Thailand 6.8% (8.2, 6.9, 7.9, 4.4 by decade) vs Singapore 8.3, Malaysia 6.7, Indonesia 5.7, Myanmar 4.3, Philippines 3.9 (Lim). Successful EOI transition by mid-1980s, like Malaysia.", tone: "context", cards: ["ec-th-overview", "ec-cl-growth"] },
    { row: [
      { t: "Why coups didn't derail growth (1)", d: "Overthrown governments AND coup leaders shared the same commitment to a market economy → political instability did not become economic uncertainty.", tone: "context", cards: ["ec-th-overview"] },
      { t: "Why coups didn't derail growth (2)", d: "The monarchy, a traditional institution, balanced different groups and kept national conflict low.", tone: "context", cards: ["ec-th-overview"] } ] },
    { t: "What independence meant: never colonised", d: "More economic space → autonomous (mainly Chinese) commerce class; could fill vacuum left by foreign firms after WWII; a societal check so the state never overwhelmed private capital (unlike Indonesia); enabled later EOI.", tone: "context", cards: ["ec-th-independence"] },
    { arrow: "pre-WWII context" },
    { t: "Active Chinese business class, 1910s–30s", d: "Nai Lert (cars), Nai Boonrawd (brewery), Nai Kokliang (cigarettes). Formed trade associations; petitioned government against Western privileges.", tone: "context", cards: ["ec-th-chinese-early"] },
    { t: "1929 survey: a commercialised economy", d: "20,259 rice traders, 3,709 rice millers, 12,738 timber traders, 7,053 forestry traders (Pasuk & Baker) — unusual for an agrarian SEA state.", tone: "context", cards: ["ec-th-chinese-early"] },
    { t: "Typical SEA exports, unusual commercialisation", d: "Rice, teak, rubber, tin = 50–90% of exports, mid-1800s–early 1960s (typical SEA pattern). Difference: the degree of commercialisation achieved early, even without a fully capitalist system.", tone: "context", cards: ["ec-th-chinese-early"] },
    { row: [
      { t: "Limit: remittances", d: "Chinese remitted earnings home rather than investing in industry.", tone: "bad", cards: ["ec-th-chinese-early"] },
      { t: "Limit: Bowring Treaty (1855)", d: "Forced liberal trade policy → no tariff protection for local industry → industrialisation limited.", tone: "bad", cards: ["ec-th-chinese-early"] } ] },
    { t: "1932 Revolution & economic nationalism", d: "Phibun Songkhram: ‘a Thai economy for the Thai people’ — drove out foreign (Western AND Chinese) influence. Strained Chinese–elite relations (Thai xenophobia).", tone: "event", cards: ["ec-th-1932", "ec-th-chinese"] },
    { t: "30 state enterprises by 1945", d: "Cotton & paper mills (Defence), sugar factories (Economic Affairs), Thai Rice Company (70–80% of export rice by 1939), stake in Siam Steam Navigation. Mid-1930s–late 1940s: govt full/partial owner of public utilities, consumer goods, primary product trade firms (Pasuk & Baker).", tone: "policy", cards: ["ec-th-1932"] },
    { t: "Spared WWII devastation", d: "Little fighting took place on Thai soil.", tone: "good", cards: ["ec-th-1932"] },
    { arrow: "1947 coup →" },
    { t: "Phibun 1947–57: ‘haphazard state-led development’", d: "Hewison: no coherent central ISI plan, but Phibun kick-started industrialisation. Govt share of domestic investment 32% (1952) → 38% (1953–55).", tone: "policy", cards: ["ec-th-phibun"] },
    { row: [
      { t: "State monopolies", d: "Brewing, paper, sugar refining, gunny sacks.", tone: "policy", cards: ["ec-th-phibun"] },
      { t: "Reserved strategic sectors", d: "Airlines (Communications), petroleum refineries & electricity (Industry), banks (Finance Ministry).", tone: "policy", cards: ["ec-th-phibun"] } ] },
    { t: "Anti-Chinese economic nationalism", d: "1952 directive forced Chinese into centralised associations (gold, jewellery, banking) to tap their wealth; pressure to assimilate; Western firms e.g. Shell threatened (Hewison); some petty trades reserved for Thais.", tone: "policy", cards: ["ec-th-anti-chinese"] },
    { arrow: "but" },
    { t: "Private sector resilience", d: "Most state monopolies were JOINT VENTURES with influential Chinese — e.g. Sophonphanich family (Bangkok Bank) expanded rapidly. Post-war military, short of capital, re-allied with Chinese businessmen.", tone: "mixed", cards: ["ec-th-anti-chinese", "ec-th-chinese"] },
    { t: "Verdict: state did not replace business", d: "By mid-1950s major Thai-Chinese groups (from 1930s rice trade & banking) had allied with the 1947 coup group. Economic nationalism did NOT replace private business with the state.", tone: "verdict", cards: ["ec-th-anti-chinese"] }
  ],
  takeaways: [
    "Never being colonised gave Thailand an autonomous Chinese bourgeoisie — the root of its later private-sector-led success.",
    "Phibun's state-led phase was ‘haphazard’ (Hewison): state enterprises were often joint ventures, so private capital survived and even grew.",
    "Coups did not derail growth because rival elites shared a market-economy commitment and the monarchy balanced groups."
  ]
});

L.push({
  id: "ec-flow-thailand-2", order: 61,
  title: "Sarit and kanphatthana, 1957–1977",
  intro: "Sarit switched the state from owner to enabler: promoting private and foreign investment via infrastructure and planning bodies, boosted by US Cold War aid. Growth and industrialisation followed, but so did cronyism and rising protection.",
  steps: [
    { t: "The shift under Sarit (1957)", d: "Decisive change to an INDIRECT state role: promote private sector + foreign investment, not state-led growth. State focuses on infrastructure, administration, planning machinery.", tone: "event", cards: ["ec-th-sarit"] },
    { arrow: "because" },
    { row: [
      { t: "US anti-communism (from 1950)", d: "Thailand = domino to stabilise + military base for Vietnam War; US believed a private-capital economy was the best stabilising formula.", tone: "cause", cards: ["ec-th-sarit"] },
      { t: "World Bank IBRD report (1959)", d: "Recommended long-term planning; manufacturing via private initiative; ISI via infrastructure/credit support.", tone: "cause", cards: ["ec-th-sarit"] },
      { t: "Sarit's technocrats", d: "Appointed technocrats; personally frugal and hardworking to set an example.", tone: "cause", cards: ["ec-th-sarit"] } ] },
    { t: "Agriculture: comparative advantage", d: "Irrigated land 600,000 ha (1947) → 2.2m ha (1969) (Tarling). By 1968 other crops (maize, kenaf, cassava) passed rice in export value. Holdings nearly doubled 1950–80 to ~22m ha.", tone: "policy", cards: ["ec-th-agri"] },
    { t: "Foreign aid & investment", d: "1951–69: over $900m US aid/loans; Japanese joint ventures in agriculture/industry. Vietnam War 1950–75: $650m economic aid + $1bn military aid + $1bn base costs; GIs on R&R boosted demand.", tone: "policy", cards: ["ec-th-aid"] },
    { t: "KEY CONTRAST: domestic capital dominant", d: "Unlike Indonesia & Philippines: 1964–72 foreign capital only 12% of capital formation; 1979 survey of 500 largest firms — 308 fully Thai-owned (Pasuk & Baker).", tone: "good", cards: ["ec-th-aid"] },
    { arrow: "enabled by" },
    { row: [
      { t: "Promotion of Investment Act 1960", d: "Amended 1977. Guarantee against nationalisation; tax holidays; conditional profit repatriation.", tone: "policy", cards: ["ec-th-institutions"] },
      { t: "Board of Investment (1959)", d: "BoI oversaw investment promotion.", tone: "policy", cards: ["ec-th-institutions"] } ] },
    { row: [
      { t: "IFCT (1959)", d: "Industrial Finance Corporation — directors from Lamsam/Sophonpanich-linked banks → favoured powerful bourgeoisie over small capitalists.", tone: "mixed", cards: ["ec-th-institutions"] },
      { t: "NESDB (1959)", d: "Planning body producing National Economic & Social Development Plans; the 4th (1977–81) marked the ISI→EOI switch.", tone: "policy", cards: ["ec-th-institutions"] } ] },
    { arrow: "evaluation" },
    { split: [
      { h: "Positive", steps: [
        { t: "Investment & exports up", d: "Foreign investment 1960–80: 6 million baht. Manufactured exports 1.2% (1960) → 32.3% (1980) of total exports.", tone: "good", cards: ["ec-th-sarit-eval"] },
        { t: "Industry overtakes agriculture by 1971", d: "Notes: manufacturing/industry overtook agriculture's GDP share by 1971. Table, 1971: agriculture 29.8%, industry 25.7%, manufacturing 17.5%.", tone: "good", cards: ["ec-th-gdp"] },
        { t: "Kanphatthana legitimacy", d: "Development tied to national unity/legitimacy; infrastructure raised living standards beyond Bangkok.", tone: "good", cards: ["ec-th-sarit-eval"] } ] },
      { h: "Negative: over-protection / cronyism", steps: [
        { t: "15–20 families benefited", d: "Mostly Sino-Thai. Bangkok Bank alone = 1/3 of banking sector, financed 42% of Thai exports.", tone: "bad", cards: ["ec-th-sarit-eval"] },
        { t: "Rulers in business", d: "Sarit held stakes in many firms; Thanom/Praphas/Narong in 137 firms by 1973.", tone: "bad", cards: ["ec-th-sarit-eval"] },
        { t: "Protection doubled", d: "Average protection (tariffs, licenses) more than doubled in the 1970s.", tone: "bad", cards: ["ec-th-sarit-eval"] } ] } ] },
    { t: "Structure of Thai GDP (Hewison; Lim)", d: "Agri/Manuf/Industry %: 1951 50.1/10.3/–; 1960 39.8/12.5/19.0; 1971 29.8/17.5/25.7; 1980 24.9/20.7/30.1; 1990 12.7/27.2/37.2; 1993 10.0/28.5/–.", tone: "context", cards: ["ec-th-gdp"] },
    { t: "Verdict: growth with cronyism", d: "Sarit's indirect, private-sector model delivered structural change, but concentrated gains in a Sino-Thai elite and raised protection — seeds of later inefficiency.", tone: "verdict", cards: ["ec-th-sarit-eval"] }
  ],
  takeaways: [
    "International drivers (US Cold War aid, World Bank 1959) pushed Thailand toward a private-capital model — external factors shaped strategy.",
    "Unlike Indonesia/Philippines, domestic capital stayed dominant (foreign capital only 12% of capital formation 1964–72).",
    "Sarit's model was systematic intervention that encouraged private enterprise — but bred crony capitalism and over-protection."
  ]
});

L.push({
  id: "ec-flow-thailand-3", order: 62,
  title: "Thailand's switch to EOI from 1977",
  intro: "External shocks, political chaos and debt forced Thailand from ISI to EOI. Export promotion, the baht peg (and the Plaza Accord windfall) and a shrinking state produced a manufacturing export boom.",
  steps: [
    { t: "Pressures forcing the switch", d: "Domestic and external pressures in the 1970s–80s made ISI unsustainable.", tone: "context", cards: ["thaieoi"] },
    { row: [
      { t: "Oil shocks & US withdrawal", d: "1970s oil price shocks; US withdrawal from region → end of regular aid.", tone: "cause", cards: ["thaieoi"] },
      { t: "1973–76 political chaos", d: "Led to capital flight.", tone: "cause", cards: ["thaieoi"] },
      { t: "Urban–rural gap", d: "Manufacturing jobs concentrated around Bangkok → widening income gap.", tone: "cause", cards: ["thaieoi"] } ] },
    { t: "4th NESD Plan (1977–81)", d: "Decentralisation of industry; ended ISI promotion and began EOI promotion — aiming at growth AND equity.", tone: "policy", cards: ["thaieoi", "ec-th-institutions"] },
    { t: "1980s downturn deepens pressure", d: "Falling agri commodity prices + 2nd oil crisis → external debt 0% → 38% of GDP (1973–86); debt service ratio 19.7% mid-1980s, near IMF's 20% danger point.", tone: "bad", cards: ["thaieoi"] },
    { arrow: "in response" },
    { t: "Investment & export promotion", d: "BoI promoted joint ventures (mostly Japanese/American) — Siam Motors (autos), Saha Union (textiles). 1985: export taxes abolished; Bank of Thailand exporter credit; 100% foreign ownership if exporting all/most output.", tone: "policy", cards: ["ec-th-eoi-policies"] },
    { t: "FDI inflows", d: "Avg US$900m/yr (1986–89) → US$2bn/yr (1990–96) → US$5.1bn (1998) as foreign firms bought distressed Thai firms. 1970–95 sources: Japan 30%, US 17%, HK 16.3%, EU 10.6%, Singapore 10.4%, Taiwan 6%; 37.2% into manufacturing.", tone: "good", cards: ["ec-th-eoi-policies"] },
    { t: "The baht peg (KEY MECHANISM)", d: "Baht pegged at a fixed LOW rate to USD: fixed = stability; low = cheap, competitive exports.", tone: "policy", cards: ["ec-th-peg"] },
    { split: [
      { h: "Baht depreciates", steps: [
        { t: "100-baht good, US$1 = 50 baht", d: "US buyer pays US$2 (vs US$4 at 25 baht) → buys more → Thai export revenue RISES.", tone: "good", cards: ["ec-th-peg"] } ] },
      { h: "Baht appreciates", steps: [
        { t: "100-baht good, US$1 = 10 baht", d: "US buyer pays US$10 → buys less → Thai export revenue FALLS.", tone: "bad", cards: ["ec-th-peg"] } ] } ] },
    { t: "1978–85: strong USD hurts", d: "USD appreciated → pegged baht appreciated → exports dearer → 1981 devaluation + 1984 switch to a currency BASKET peg (less dependence on one currency, more stable average).", tone: "event", cards: ["ec-th-peg"] },
    { t: "Plaza Accord (1985) windfall", d: "France/W.Germany/Japan/UK/US devalued USD (help US exports, fix US–Japan imbalance) → baht depreciated → cheap exports to Japan → boom; firms relocated from Japan/Taiwan/HK. USD weighting in basket later raised back to 90%.", tone: "good", cards: ["ec-th-plaza"] },
    { t: "Scaling down the state", d: "6th Plan (1987): public sector to be “planner, supporter and facilitator”, withdrawing from what private sector does better (Pasuk & Baker). 1988: NESDB relieved of supervising major govt investment projects.", tone: "policy", cards: ["ec-th-scaling"] },
    { arrow: "result" },
    { t: "Success of EOI", d: "1980–90: sharpest rise in manufacture/industry GDP share; export growth 14% in 1980s — highest among capitalist SEA economies. Manufacturing 16.4% (1952) → 33.9% (2000) of GDP.", tone: "good", cards: ["ec-th-eoi-success"] },
    { t: "Structural transformation by 2000", d: "Agriculture 10.9%, manufacturing 33.9%, services 39.7% of GDP — vs mid-1980s agriculture ~25% of GDP, 75% of workforce, >60% of exports. Thai firms went abroad (Thaksin's Shin Corp: Indochina, Indonesia, India).", tone: "good", cards: ["ec-th-eoi-success"] },
    { t: "Export growth & composition (Morley)", d: "Thailand export growth 10.3% (1970–80), 14.0% (1980–90), 18.6% (1990–95); primary exports 76.2% (1975) → 26.9% (1994). Cf. Indonesia 97.6→47.0, Malaysia 68.6→24.6.", tone: "context", cards: ["ec-morley-exports"] },
    { t: "Verdict: shocks + private class = EOI success", d: "Pressure forced the switch, but a ready private business class and favourable currency movements made EOI succeed.", tone: "verdict", cards: ["ec-th-govt"] }
  ],
  takeaways: [
    "The switch to EOI was forced by external shocks (oil, US withdrawal) and debt, formalised in the 4th Plan (1977–81).",
    "Currency policy mattered: the low baht peg, basket peg (1984) and Plaza Accord (1985) made Thai exports cheap and drew relocating Japanese/East Asian firms.",
    "The state could scale back (6th Plan 1987) because private capital was ready to fill the gap."
  ]
});

L.push({
  id: "ec-flow-thailand-4", order: 63,
  title: "Evaluating Thailand: success, limits and the road to 1997",
  intro: "Thailand industrialised rapidly, but growth bred inequality, concentrated wealth, over-protection and a debt-fuelled, poorly regulated financial liberalisation that set up the 1997 crisis. The private Chinese business class was the key distinctive factor.",
  steps: [
    { t: "Quantitative success", d: "Exports shifted from rice, vegetables/roots, rubber (1985) to office machines, semiconductors, telecoms (2000). Top-3 exports fell 28.7% → 23.3% of total = diversification. Textbook industrialisation.", tone: "good", cards: ["ec-th-eoi-success"] },
    { t: "Industry overtook agriculture 1970–90", d: "Agriculture 29.8% → 12.7%; industry 25.7% → 37.2% of GDP.", tone: "good", cards: ["ec-th-gdp"] },
    { arrow: "BUT limitations" },
    { t: "(a) Income & urban–rural inequality", d: "Gini 0.41 (1965) → 0.52 (2000): growth ≠ equity. Poverty fell 88.3% → 9.8% (1962–2002), but rural rate stayed ~4x urban. Bangkok: 16% of population, 48.2% (1989) → 55.4% (1993) of GDP; Northeast 34%+ of population, ~11% of GDP.", tone: "bad", cards: ["ec-th-inequality"] },
    { t: "(b) Concentration of wealth", d: "By mid-1980s virtually all largest firms were Sino-Thai ‘groups of companies’; only 3 of 70+ leading groups non-Chinese (one = Crown Property Bureau).", tone: "bad", cards: ["ec-th-inequality"] },
    { t: "(c) Debt, deficits & crony capitalism", d: "External debt 16.6% → 51.3% of GNP by 2004; current account deficit 7.9% of GDP in 1996 — clear unsustainability signal. Weak oversight: banks could carry bad debt 12 months unreported.", tone: "bad", cards: ["afcthai"] },
    { t: "Case: Bangkok Bank of Commerce (BBC)", d: "Loans funnelled into stock speculation and to politicians (incl. via Rakesh Saxena, linked to the ‘Group of 16’); collapsed 1996; Bank of Thailand spent 120 billion baht on bailout.", tone: "bad", cards: ["afcthai"] },
    { t: "(d) Over-protection & lost competitiveness", d: "1985 effective protection for manufacturing 52%, ~double Philippines/Malaysia. No tech upgrading (electronics institute only mooted 1997). Real wages +70% mid-1990s → export growth 28% → 0%.", tone: "bad", cards: ["ec-th-protection"] },
    { row: [
      { t: "Autos", d: "Protected since 1970s, yet local firms stuck in low-tech components; OEM sector dominated by Japanese affiliates.", tone: "bad", cards: ["ec-th-protection"] },
      { t: "Textiles", d: "Upstream/midstream ISI firms: high costs, old machinery, low-quality cloth unusable by export garment makers → value-added lost to foreigners.", tone: "bad", cards: ["ec-th-protection"] } ] },
    { t: "Doner & Ramsay", d: "“Thailand's lack of industrial upgrading began to catch up with it in 1996.”", tone: "verdict", cards: ["ec-th-protection"] },
    { t: "(e) Financial liberalisation without regulation", d: "1990: IMF Article VIII — forex controls removed. 1993: BIBF — “conduit for short-term foreign lending” (Akyuz); 42 licenses fuelled a lending boom.", tone: "policy", cards: ["afcthai"] },
    { arrow: "made vulnerable →" },
    { t: "Short-term debt → 1997 AFC", d: "Foreign bank debt US$29bn (1993) → US$69bn (mid-1997), 70% SHORT-TERM → acutely vulnerable to currency speculation once confidence broke.", tone: "event", cards: ["afcthai", "ec-cl-afc-synthesis"] },
    { arrow: "overall: role of government" },
    { t: "Market compensated for government failures", d: "“Rather than…the state guiding the market…a case where the market has compensated for government failures” (quoted in Hewison).", tone: "verdict", cards: ["ec-th-govt"] },
    { split: [
      { h: "Phibun", steps: [ { t: "State-led", d: "Semi-government monopolies; haphazard state-led development.", tone: "policy", cards: ["ec-th-phibun"] } ] },
      { h: "Sarit", steps: [ { t: "Systematic intervention", d: "Systematic intervention BUT encouraged private enterprise — nature of intervention differed significantly between regimes.", tone: "policy", cards: ["ec-th-sarit"] } ] },
      { h: "1980s", steps: [ { t: "State scaled back", d: "International/domestic pressure; private class ready to fill the gap.", tone: "policy", cards: ["ec-th-scaling"] } ] } ] },
    { arrow: "role of the Chinese" },
    { t: "Chinese: from royal partners to rivals", d: "From 1890s patron-client ties with monarchy — built royal monopolies in railways, shipping, banking (Siam Commercial Bank 1906, Siam Cement 1913). 1932 Revolution → Thai xenophobia, strained relations.", tone: "context", cards: ["ec-th-chinese"] },
    { t: "Chinese: re-allied and dominant", d: "Post-WWII capital-short military re-allied with them. By 1980s strong international links (Siam Motors/Pornprapha; Sahapathanapibul). 10% of population but 81% of listed-firm capitalisation — highest ratio in region with Singapore.", tone: "mixed", cards: ["ec-th-chinese"] },
    { t: "MAIN DISTINCTION vs rest of SEA", d: "A resilient, autonomous, internationally-skilled private business community (rooted in never being colonised) took over from foreign firms (post-war) and from the state (post-1985).", tone: "verdict", cards: ["ec-th-govt", "ec-th-independence"] }
  ],
  takeaways: [
    "Thailand shows growth without equity: Gini 0.41 → 0.52, Bangkok's GDP share rising while the Northeast lagged.",
    "Crony capitalism, over-protection and liberalisation without regulatory capacity (BIBF, short-term debt) were the seeds of the 1997 AFC.",
    "Government role was secondary: ‘the market compensated for government failures’ — the Chinese private class was the decisive factor.",
    "Use Thailand to argue domestic private capital (not state or foreign capital) explains success relative to Indonesia/Philippines."
  ]
});
})();

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

// Section headings for the chart list: [first order in the group, heading]
(window.FLOWS = window.FLOWS || {}).ec_groups = [[0,"Big picture & framework"],[20,"Malaysia"],[25,"Singapore"],[40,"Burma"],[45,"Vietnam"],[60,"Thailand"],[70,"Indonesia"],[74,"Philippines"],[90,"Comparisons & exam technique"]];
// Where each detailed chart sits in the top-down tree (topic → cluster → country → detail).
(function(){
  const P = {}, F = window.FLOWS;
  const by = (prefix, parent) => F.ec.forEach(f => { if (f.id.startsWith(prefix)) P[f.id] = parent; });
  by("ec-flow-my-","ec-country-my"); by("ec-flow-sg-","ec-country-sg"); by("ec-flow-burma-","ec-country-bm");
  by("ec-flow-vietnam-","ec-country-vn"); by("ec-flow-thailand-","ec-country-th"); by("ec-flow-indonesia-","ec-country-id");
  by("ec-flow-philippines-","ec-country-ph"); by("ec-flow-cl-","ec-cluster-tip");
  Object.assign(P, { "ec-flow-bmvn-compare":"ec-cluster-bmvn", "ec-flow-f3-bmvn":"ec-cluster-bmvn", "ec-flow-f4-sgmy":"ec-cluster-sgmy",
    "ec-flow-bigpicture":"ec-top", "ec-flow-framework":"ec-top", "ec-flow-f2-aims":"ec-top", "ec-flow-f5-pattern":"ec-top",
    "ec-flow-howtoargue":"ec-top", "ec-flow-f7-memory":"ec-top" });
  F.ec_parent = P;
})();
