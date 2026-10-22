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
