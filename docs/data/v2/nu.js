// v2 flow charts: Pursuit of national unity in SEA (from Pursuit_of_National_Unity_Study_Notes; cards in data/nu.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).nu = window.FLOWS2.nu || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "nu-top", order: 1, level: 0, kind: "causal",
  title: "National unity in Southeast Asia",
  question: "Why was national unity needed, how was it pursued, and how successful were SEA states?",
  intro: "Indigenous and immigrant minorities made unity a necessity; states chose assimilation or multiculturalism; outcomes ranged from Burma's failure to Singapore's stability.",
  clusters: [
    { title: "Why unity was needed", summary: "Minorities and colonial legacies.",
      steps: [
        N("nu-t-need", "ltc", "Minorities and colonial immigration", null, "Indigenous minorities with separate histories; Chinese and Indians brought in under colonial rule — feared and depended on.", ["nu-define", "nu-immigrants"], { go: "nu-frame" }),
        K("provoked response", "Governments chose an approach and tools to build unity."),
        N("nu-t-approach", "pol", "Assimilation or multiculturalism", null, "Dominant culture (Burma, Indonesia, Thailand, Philippines) vs integration (Singapore, Malaysia); tools: ideology, religion, language, education.", ["nu-approaches"], { go: "nu-frame" })
      ] },
    { link: "led to", how: "Each state applied its approach with very different results.",
      title: "Country outcomes", summary: "Seven paths.",
      steps: [
        { split: [
          { h: "Assimilation", steps: [
            { row: [
              N("nu-t-bm", "res-", "Burma: failure", "1947–2001", "Force bred the world's longest-running ethnic insurgencies.", ["nu-burmaeval"], { go: "nu-bm1" }),
              N("nu-t-id", "res±", "Indonesia: containment", "1945–1998", "New Order stability contained tensions that unravelled in 1997–98.", ["nu-indoeval"], { go: "nu-id1" })
            ] },
            K("followed by", "Other assimilating states did better where barriers were lower."),
            { row: [
              N("nu-t-ph", "res±", "Philippines: class divide", "1946–1998", "Class and patronage, not ethnicity, the deeper cleavage.", ["nu-philctx", "nu-philchinese"], { go: "nu-ph1" }),
              N("nu-t-th", "res+", "Thailand: relative success", "1851–2004", "Continuous independence and the monarchy; Chinese fully integrated.", ["thaiunity"], { go: "nu-th1" })
            ] }
          ] },
          { h: "Other paths", steps: [
            N("nu-t-vn", "res±", "Vietnam: geopolitics", "1945–2002", "Policy shifted with the Cold War and China; stable, late fault-lines.", ["nu-vietminorities"], { go: "nu-vn1" }),
            K("followed by", "Multicultural states managed co-existence."),
            { row: [
              N("nu-t-my", "res±", "Malaysia: managed co-existence", "1945–2000", "Stable since 1969, but not integrated.", ["nu-msiaeval"], { go: "nu-my1" }),
              N("nu-t-sg", "res+", "Singapore: most stable", "1961–2001", "No racial violence since independence; identity contested.", ["nu-sgeval"], { go: "nu-sg" })
            ] }
          ] }
        ] }
      ] },
    { link: "supports", how: "Comparing the cases reveals common patterns.",
      title: "Patterns and verdict", summary: "Force fails; settlements last.",
      steps: [
        N("nu-t-compare", "int", "Cross-cutting patterns", null, "Different anchors; force counter-productive; Chinese integration easiest without religious barriers.", ["nu-patterns", "nu-compare"], { go: "nu-compare" }),
        K("supports", "The patterns favour inclusive, negotiated approaches."),
        N("nu-t-verdict", "judg", "Inclusion outlasted coercion", null, "Negotiated settlements proved more durable than force; development was double-edged.", ["nu-patterns"], { go: "nu-arg" })
      ] }
  ],
  judge: { prompt: "Which state was most successful in building national unity? Rank them.",
           factors: ["nu-t-bm", "nu-t-id", "nu-t-ph", "nu-t-th", "nu-t-vn", "nu-t-my", "nu-t-sg"],
           notes_view: "Burma failed; Indonesia contained tensions; the Philippines' cleavage was class; Thailand comparatively successful; Vietnam externally driven; Malaysia managed co-existence; Singapore most stable, identity contested." },
  historians: [],
  takeaways: [
    "Unity was needed because of indigenous minorities and colonial-era Chinese and Indian immigrants.",
    "Assimilation (Burma, Indonesia, Thailand, Philippines) vs multiculturalism (Singapore, Malaysia).",
    "Force was counter-productive; negotiated settlements and inclusion lasted longer."
  ]
});

L.push({
  id: "nu-frame", order: 2, level: 1, parent: "nu-top", kind: "causal",
  title: "Framework: need, approaches, assessment",
  question: "What is national unity, why was it needed, and how should success be judged?",
  intro: "Unity has tangible and intangible sides; colonial legacies created the need; approaches and tools differed; five questions test success.",
  clusters: [
    { title: "What unity means", summary: "Tangible and intangible.",
      steps: [
        { row: [
          N("nu-f-tang", "ctx", "Tangible unity", null, "Territorial integrity and social stability.", ["nu-define"]),
          N("nu-f-intang", "ctx", "Intangible unity", null, "Social cohesion and a national identity from disparate groups; nations as 'imagined communities'.", ["nu-define"])
        ] }
      ] },
    { link: "constrained", how: "Two kinds of minority made unity hard.",
      title: "The minorities", summary: "Indigenous and immigrant.",
      steps: [
        { split: [
          { h: "Indigenous", steps: [ N("nu-f-indig", "ltc", "Indigenous minorities", null, "Separate histories: Karens, Moros, Pattani Malays, Acehnese, Orang Asli.", ["nu-define"]) ] },
          { h: "Immigrant", steps: [
            N("nu-f-colimm", "ltc", "Colonial immigration", "colonial era", "Chinese and Indians brought in as labourers, middlemen, capital-providers.", ["nu-immigrants"]),
            K("led to", "Immigrant economic dominance bred resentment."),
            N("nu-f-ethnat", "res-", "Ethnic-economic nationalism", null, "Governments both feared and depended on these minorities.", ["nu-immigrants"])
          ] }
        ] }
      ] },
    { link: "provoked response", how: "Governments chose an approach and used four tools.",
      title: "Approaches and tools", summary: "Assimilate or integrate.",
      steps: [
        { split: [
          { h: "Dominant culture", steps: [ N("nu-f-assim", "pol", "Assimilation", null, "Minorities adopt the dominant language/religion; coercive, exclusionary — Burma, Indonesia, Thailand, Philippines.", ["nu-approaches"]) ] },
          { h: "Multiculturalism", steps: [ N("nu-f-integ", "pol", "Integration", null, "New culture from all groups; less coercive — Singapore, Malaysia (with exceptions).", ["nu-approaches"]) ] }
        ] },
        K("enabled", "Both approaches worked through the same tools."),
        N("nu-f-tools", "pol", "Four tools", null, "Ideology (Pancasila, Rukunegara, Shared Values), religion, language, education.", ["nu-approaches"])
      ] },
    { link: "supports", how: "Success is judged by stability and identity.",
      title: "Assessing success", summary: "Five questions.",
      steps: [
        N("nu-f-assess", "judg", "Stability and shared identity", null, "Minorities integral? Equitable representation and wealth? Cultures free? All see one nation?", ["nu-assess"])
      ] }
  ],
  historians: [ { who: "Brown", view: "British divide-and-rule fostered stereotypes of 'Malay laziness, Indian docility, Chinese enterprise'.", nodes: ["nu-f-colimm"] } ],
  takeaways: [
    "Tangible (territory, stability) and intangible (cohesion, identity) unity.",
    "Indigenous minorities and colonial-era immigrants created the need; ethnic-economic nationalism followed.",
    "Assimilation vs integration; tools: ideology, religion, language, education; judged by stability and identity."
  ]
});

L.push({
  id: "nu-bm1", order: 3, level: 3, parent: "nu-top", kind: "causal",
  title: "Burma: Panglong to U Nu's Burmanization",
  question: "Why did Burma's early union collapse into civil war?",
  intro: "Colonial divide-and-rule left minorities apart; Panglong promised autonomy, but Aung San's death and U Nu's Burmanization drove the minorities to revolt.",
  clusters: [
    { title: "Roots of division", summary: "Lowland vs upland.",
      steps: [
        { row: [
          N("nu-b-lowland", "ltc", "Burmans vs hill peoples", "1752–1885", "Lowland Theravada Burmans vs upland Karens, Kachins, Chins, Shans; borders from the Konbaung dynasty.", ["nu-burmactx"]),
          N("nu-b-karen", "ltc", "Christian Karens fight for Britain", "1810s–1852", "Baptist conversion; Karens fought for the British; Burmans burnt Karen villages (1852).", ["nu-burmactx"]),
          N("nu-b-split", "ltc", "Divide and rule", "colonial", "Ministerial Burma split from Frontier Areas (~40% of land).", ["nu-burmactx"])
        ] }
      ] },
    { link: "provoked response", how: "At independence Aung San sought a federal union to hold the minorities.",
      title: "Panglong union", summary: "Autonomy promised.",
      steps: [
        N("nu-b-panglong", "tp", "Panglong Agreement", "Feb 1947", "'Full autonomy in internal administration for the frontier areas'; 12 Feb still Union Day.", ["nu-panglong"]),
        K("led to", "The 1947 Constitution built a federal union."),
        N("nu-b-1947", "pol", "1947 union constitution", "1947", "Shan, Kachin, Karenni States; Chamber of Nationalities; Shan/Karen could secede after a decade.", ["nu-panglong"]),
        K("undermined", "Weak institutions, elite chauvinism and Aung San's death hollowed it out."),
        N("nu-b-rebels", "res-", "Rebels hold the country", "1949", "By end-1949 'almost the whole of the country' held by rebels (Kingsbury).", ["nu-panglong"])
      ] },
    { link: "intensified", how: "U Nu tried to unify through Buddhism and Burmese.",
      title: "Burmanization", summary: "Religion and language.",
      steps: [
        { row: [
          N("nu-b-buddh", "pol", "Buddhism promoted", "1951–61", "State Buddhist agency (1951); Sixth Buddhist Council (1954–56); 1961 State Religion Bill.", ["burmanization"]),
          N("nu-b-lang", "pol", "Burmese imposed", "1952 onwards", "Obligatory in government; sole medium from Standard Three; Burman-nationalist history.", ["burmanization"])
        ] },
        K("provoked response", "Minorities rose in revolt."),
        N("nu-b-revolts", "res-", "Minority uprisings", "1958–61", "Shan secession bid (1958); minority–communist alliance (1959); Shan (1960) and Kachin (1961) uprisings.", ["burmanization"],
          { ev: ["A pluralist concession (teaching Christianity/Islam) provoked an 8,000-monk protest in Mandalay — politicising the Sangha."], go: "nu-bm2" })
      ] }
  ],
  judge: { prompt: "Why did Burma's early union fail? Rank the factors.", factors: ["nu-b-split", "nu-b-panglong", "nu-b-rebels", "nu-b-buddh", "nu-b-lang"],
           notes_view: "Colonial divide-and-rule and Aung San's death undermined unity; U Nu's religious Burmanization alienated minorities and politicised the Sangha." },
  historians: [ { who: "Kingsbury", view: "By end-1949 'almost the whole of the country was in the hands of one rebel group or another'.", nodes: ["nu-b-rebels"] } ],
  takeaways: [
    "Divide-and-rule split Ministerial Burma from the Frontier Areas.",
    "Panglong (1947) promised autonomy, but by 1949 rebels held most of the country.",
    "U Nu's Buddhism and Burmese language policies drove Shans and Kachins to revolt (1958–61)."
  ]
});

L.push({
  id: "nu-bm2", order: 4, level: 3, parent: "nu-top", kind: "causal",
  title: "Burma: Ne Win's Tatmadaw and assimilation",
  question: "How did Ne Win pursue unity, and with what results?",
  intro: "Ne Win made the army the 'defender of national unity', imposed socialism and xenophobia, and met insurgencies with force — a self-perpetuating cycle.",
  clusters: [
    { title: "The army as unifier", summary: "Tatmadaw and BSPP.",
      steps: [
        N("nu-n-coup", "tp", "Ne Win's coup", "1962", "Tatmadaw claims legitimacy from independence; Ne Win as 'Great Unifier' beside Aung San.", ["nu-tatmadaw"]),
        K("led to", "One party and one ideology were imposed."),
        N("nu-n-bspp", "pol", "Burmese Way to Socialism, BSPP", "1962", "Published 30 Apr; BSPP (4 Jul) sole legal party.", ["nu-tatmadaw"])
      ] },
    { link: "intensified", how: "Unity was defined against foreigners.",
      title: "Xenophobia", summary: "Foreigners out.",
      steps: [
        N("nu-n-anti", "pol", "Anti-foreign measures", "1962–79", "Foreign firms nationalised; English and beauty contests banned; missionaries barred.", ["nu-xenophobia"]),
        K("led to", "Minorities of foreign origin were driven out or attacked."),
        { row: [
          N("nu-n-indians", "res-", "~300,000 Indians expelled", "1960s", "Indians/Pakistanis forced out with their capital.", ["nu-xenophobia"]),
          N("nu-n-1967", "res-", "1967 anti-Chinese riot", "1967", "Military-instigated; hundreds killed.", ["nu-xenophobia"])
        ] }
      ] },
    { link: "provoked response", how: "Ethnic insurgents fought on; the state answered with force.",
      title: "Force and control", summary: "Insurgency meets force.",
      steps: [
        N("nu-n-force", "pol", "Force against insurgents", "1961–80", "KNU, Kachin Independence Army (1961), Shan State Army (1964); KNU ceasefire only in 2012.", ["nu-burmaforce"]),
        K("followed by", "Control extended to monks, students and schools."),
        N("nu-n-depol", "pol", "Depoliticisation", "1965–80", "Sangha barred from politics; 1966 Basic Education Law; minority languages home-only.", ["nu-burmaforce"]),
        K("followed by", "A new constitution formalised Burman dominance."),
        N("nu-n-1974", "pol", "1974 Constitution", "1974", "7 non-autonomous minority states, 7 Burman divisions; Citizenship Act excluded Indians/Chinese from the ruling party.", ["nu-1974const"])
      ] },
    { link: "led to", how: "Force bred more resentment and revolt.",
      title: "Result", summary: "A self-perpetuating cycle.",
      steps: [
        N("nu-n-cycle", "res-", "Insurgency–force cycle", null, "Insurgency, force, resentment, insurgency; development stayed around Rangoon ('Burmese way to development… an oxymoron').", ["nu-1974const", "nu-burmaeval"], { go: "nu-bm3" })
      ] }
  ],
  judge: { prompt: "Why did Ne Win's policies deepen disunity? Rank the factors.", factors: ["nu-n-bspp", "nu-n-anti", "nu-n-force", "nu-n-1974"],
           notes_view: "The clearest example of a dominant-culture approach enforced by the military; force created a self-perpetuating cycle — 'generating rather than healing' divisions (Tucker)." },
  historians: [
    { who: "Cambridge History", view: "Ne Win cast Aung San as the 'fourth Great Unifier', implying himself as unifier too.", nodes: ["nu-n-coup"] },
    { who: "David Steinberg", view: "The 1974 minority states consolidated Burman dominance.", nodes: ["nu-n-1974"] },
    { who: "Lambrecht", view: "'The Burmese way to development… is an oxymoron.'", nodes: ["nu-n-cycle"] }
  ],
  takeaways: [
    "Ne Win made the Tatmadaw and BSPP the anchors of unity (1962).",
    "Xenophobia: ~300,000 Indians expelled; 1967 anti-Chinese riot.",
    "Force against insurgents and the 1974 Constitution created a cycle of revolt."
  ]
});

L.push({
  id: "nu-bm3", order: 5, level: 3, parent: "nu-top", kind: "evaluation",
  title: "Burma: SLORC, ceasefires and verdict",
  question: "Did SLORC's approach bring unity, and how should Burma be judged?",
  intro: "SLORC kept coercion through the USDA and a stage-managed convention; ceasefires were military deals, and separatism persisted.",
  clusters: [
    { title: "SLORC's coercion", summary: "Mass organisation and loyalty tests.",
      steps: [
        N("nu-s-usda", "pol", "USDA", "1993", "Modelled on Golkar; 17.7m members by 2001; 'non-disintegration of the Union'.", ["nu-slorc"]),
        K("followed by", "Political life was tightly policed."),
        N("nu-s-loyal", "pol", "Loyalty tests", "1991", "300+ loyalty questions; ~15,000 civil servants dismissed.", ["nu-slorc"]),
        K("followed by", "A convention was staged to write a constitution."),
        N("nu-s-conv", "pol", "National Convention", "1993", "Only 99 of 702 delegates elected; NLD walked out (1995).", ["nu-slorc"])
      ] },
    { link: "followed by", how: "SLORC also struck deals with ethnic armies.",
      title: "Ceasefires", summary: "Military, not political.",
      steps: [
        N("nu-s-roots", "ltc", "Karen and Shan grievances", "1948–62", "1948 sacking of Karen Rangoon led to the KNU; Shan Sawbwas lost powers; 1962 coup escalated revolt.", ["nu-karenshan"]),
        K("provoked response", "SLORC negotiated with many groups."),
        N("nu-s-cease", "pol", "Ceasefires", "from 1989", "17 of 21 groups by the late 1990s — military, not political deals.", ["nu-karenshan"]),
        K("undermined", "Deals were self-serving and fragile."),
        N("nu-s-fragile", "res-", "Fragile peace", "1999", "Khun Sa bargained for himself; 5 groups formed a new anti-government alliance by 1999.", ["nu-karenshan"])
      ] },
    { link: "supports", how: "Weighing the whole record.",
      title: "Verdict", summary: "Failure.",
      steps: [
        N("nu-s-verdict", "judg", "Generating, not healing", null, "24+ separatist factions since the 1980s; the Karen revolt 'oldest continuous ethnic revolt in the world'.", ["nu-burmaeval"])
      ] }
  ],
  judge: { prompt: "Why did Burma fail to achieve national unity? Rank the factors.", factors: ["nu-s-usda", "nu-s-conv", "nu-s-cease", "nu-s-fragile"],
           notes_view: "Burma failed outright: the state's penetrations 'succeeded in provoking rebellion' (David Brown); anti-foreign insularity heightened sub-nationalisms." },
  historians: [
    { who: "Thomson", view: "The Karen revolt is the 'oldest continuous ethnic revolt in the world'.", nodes: ["nu-s-roots"] },
    { who: "Tucker", view: "Burma generated rather than healed social and ethnic divisions.", nodes: ["nu-s-verdict"] },
    { who: "David Brown", view: "The state's penetrations succeeded in provoking rebellion.", nodes: ["nu-s-verdict"] }
  ],
  takeaways: [
    "SLORC: USDA (17.7m members), loyalty tests, a stage-managed National Convention.",
    "Ceasefires with 17 of 21 groups were military deals; new alliances formed by 1999.",
    "Verdict: failure — 24+ separatist factions; the world's oldest continuous ethnic revolt."
  ]
});

L.push({
  id: "nu-id1", order: 6, level: 3, parent: "nu-top", kind: "causal",
  title: "Indonesia: Youth Oath to Guided Democracy",
  question: "How did Sukarno try to unify Indonesia, and why did divisions persist?",
  intro: "The Youth Oath and Pancasila gave an inclusive ideology, but the Jakarta Charter row and regional revolts exposed Islamic and regional divisions.",
  clusters: [
    { title: "Ideology of unity", summary: "Oath and Pancasila.",
      steps: [
        N("nu-i-oath", "pol", "Youth Oath", "1928", "One fatherland, one nation, one language (Bahasa Indonesia).", ["pancasila"]),
        K("followed by", "Sukarno built a unifying ideology."),
        N("nu-i-panc", "pol", "Pancasila", "1 Jun 1945", "God, nationalism, humanitarianism, social justice, democracy.", ["pancasila"])
      ] },
    { link: "provoked response", how: "Islamists wanted more than 'belief in God'.",
      title: "The Islamic challenge", summary: "Seven words removed.",
      steps: [
        N("nu-i-charter", "evt", "Jakarta Charter's 7 words dropped", "18 Aug 1945", "Muslims' obligation to follow Islamic law removed.", ["nu-jakartacharter"]),
        K("led to", "Politicised Muslims felt betrayed."),
        N("nu-i-di", "res-", "Darul Islam rebellion", "1948–62", "West Java; suppressed under Suharto, resurfaced after 1998.", ["nu-jakartacharter"])
      ] },
    { link: "intensified", how: "A sprawling, diverse state struggled to hold together.",
      title: "A fractious republic", summary: "Regions revolt.",
      steps: [
        N("nu-i-ctx", "ctx", "Diverse archipelago", null, "Javanese 40% on 6.6% of land; 600+ groups; unitary republic (17 Aug 1950) intolerant of regionalism.", ["nu-indoctx"]),
        K("led to", "Unstable cabinets and regional grievances erupted."),
        N("nu-i-1958", "res-", "Regional revolts", "1958–61", "Sumatra and Sulawesi; 5 cabinets 1949–55; defeated by 1961 with amnesty.", ["nu-indoctx"])
      ] },
    { link: "provoked response", how: "Sukarno made himself the symbol of unity.",
      title: "Guided Democracy", summary: "Sukarno as 'social cement'.",
      steps: [
        N("nu-i-gotong", "pol", "Gotong royong", "1957–60", "Javanese mutual aid as state ideal; Gotong Royong Cabinet (1957), Parliament (1960).", ["nu-gotong"]),
        K("led to", "Unity rested on Sukarno balancing army, Islam and PKI."),
        N("nu-i-nasakom", "act", "'I am NASAKOM'", "1963", "Sukarno as 'social cement' holding 10,000 islands together.", ["nu-gotong"], { go: "nu-id2" })
      ] }
  ],
  judge: { prompt: "What most threatened Indonesian unity under Sukarno? Rank them.", factors: ["nu-i-charter", "nu-i-di", "nu-i-ctx", "nu-i-1958"],
           notes_view: "Ideology was the main unity tool — Pancasila 'a vague philosophical rationalization of a plural society' (Vatikiotis) — with persistent risk of Islamic and regional disunity." },
  historians: [
    { who: "Vatikiotis", view: "Pancasila is 'a vague philosophical rationalization of a plural society'.", nodes: ["nu-i-panc"] },
    { who: "Adams", view: "Sukarno positioned himself as the 'social cement' of the nation.", nodes: ["nu-i-nasakom"] }
  ],
  takeaways: [
    "Youth Oath (1928) and Pancasila (1945) gave an inclusive ideology.",
    "Dropping the Jakarta Charter's 7 words fed Darul Islam (1948–62).",
    "Regional revolts (1958) and Sukarno's NASAKOM balancing show fragile unity."
  ]
});

L.push({
  id: "nu-id2", order: 7, level: 3, parent: "nu-top", kind: "causal",
  title: "Indonesia: Suharto's New Order",
  question: "How did the New Order pursue unity, and did it succeed?",
  intro: "Suharto turned Pancasila into rigid uniformity, spread Bahasa and development, and pushed assimilation of minorities — stability that only contained tensions.",
  clusters: [
    { title: "Uniformity", summary: "Pancasila enforced.",
      steps: [
        N("nu-o-bapak", "act", "Suharto as 'bapak'", "1966–98", "Javanese ruler style; 'rigid ideological uniformity' (Vatikiotis).", ["nu-neworderideology"]),
        K("led to", "Ideology was enforced through law and careers."),
        { row: [
          N("nu-o-p4", "pol", "P4 Pancasila courses", "1978", "Needed for civil-service promotion; 1985 Ormas decree aimed at Islamic parties.", ["nu-neworderideology"]),
          N("nu-o-parties", "pol", "Parties merged", "1973", "Opposition forced into secular PDI and Islamic PPP.", ["nu-neworderideology"])
        ] }
      ] },
    { link: "followed by", how: "Schools, language and development spread the national identity.",
      title: "Development and language", summary: "'Father of Development'.",
      steps: [
        { row: [
          N("nu-o-dev", "res+", "Rising incomes", "1970s", "Per-capita income US$260 to over US$500.", ["nu-neworderideology"]),
          N("nu-o-lang", "res+", "Bahasa Indonesia spreads", "1971–90", "Speakers 40.8% to 61.4% to over 80%.", ["nu-indoedu"]),
          N("nu-o-relig", "pol", "Six recognised religions", null, "~90% Muslim but secular; ICMI (1990) to co-opt Islam.", ["nu-indoedu"])
        ] }
      ] },
    { link: "intensified", how: "Minorities were pushed to assimilate.",
      title: "Assimilating minorities", summary: "PKAT, land, transmigration.",
      steps: [
        N("nu-o-pkat", "pol", "PKAT", "1960s–", "Sedentarisation and forced conversion of 'isolated' peoples; corrupt.", ["nu-pkat"]),
        K("followed by", "Land was taken for the state."),
        N("nu-o-forest", "pol", "75%+ land made 'State Forest'", "1980s", "'One of the largest land grabs in history' (Duncan).", ["nu-pkat"]),
        K("followed by", "Javanese were moved to the outer islands."),
        N("nu-o-trans", "pol", "Transmigration", "1969–89", "~730,000 families moved, partly to 'improve' minorities.", ["transmigration"]),
        K("led to", "Resentment exploded after Suharto fell."),
        N("nu-o-dayak", "res-", "Dayak–Madurese clashes", "2001", "Kalimantan; hundreds killed.", ["transmigration"])
      ] },
    { link: "supports", how: "Weighing stability against what lay beneath.",
      title: "Verdict", summary: "Containment, not unity.",
      steps: [
        N("nu-o-verdict", "judg", "Contained latent forces", null, "Three decades of stability, but a mono-ethnic state in a multi-ethnic society; unravelled in 1997–98.", ["nu-indoeval"], { go: "nu-id3" })
      ] }
  ],
  judge: { prompt: "How far did the New Order achieve unity? Rank the evidence.", factors: ["nu-o-p4", "nu-o-dev", "nu-o-lang", "nu-o-forest", "nu-o-trans"],
           notes_view: "The New Order gave stability but only 'contained latent forces'; officially accommodative but Javanese-centred and assimilative in practice." },
  historians: [
    { who: "Vatikiotis", view: "Suharto turned Pancasila into 'rigid ideological uniformity'.", nodes: ["nu-o-bapak"] },
    { who: "Duncan", view: "Classifying 75%+ of land as State Forest was 'one of the largest land grabs in history'.", nodes: ["nu-o-forest"] }
  ],
  takeaways: [
    "P4 courses (1978), party mergers (1973): ideological uniformity.",
    "Development and Bahasa Indonesia (over 80% by 1990) spread a national identity.",
    "PKAT, land seizures and transmigration (~730,000 families) bred violence after 1998."
  ]
});

L.push({
  id: "nu-id3", order: 8, level: 3, parent: "nu-top", kind: "causal",
  title: "Indonesia: East Timor and Aceh",
  question: "Why did separatism grow in East Timor and Aceh, and how were the conflicts resolved?",
  intro: "Distinct histories plus military repression deepened separatism; after Suharto, a referendum freed East Timor and a peace deal settled Aceh.",
  clusters: [
    { title: "Distinct origins", summary: "Different histories.",
      steps: [
        { split: [
          { h: "East Timor", steps: [ N("nu-e-port", "ltc", "Portuguese, Catholic", null, "Portuguese colony; Catholic, Portuguese-speaking.", ["nu-easttimor"]) ] },
          { h: "Aceh", steps: [ N("nu-e-sultan", "ltc", "Independent sultanate", null, "Dutch conquest (1873–1914) incomplete; oil/gas ~11% of national wealth while Aceh stayed poor.", ["aceh"]) ] }
        ] }
      ] },
    { link: "provoked response", how: "Jakarta answered with annexation and force.",
      title: "Repression", summary: "Invasion and military operations.",
      steps: [
        { split: [
          { h: "East Timor", steps: [
            N("nu-e-annex", "evt", "Invaded and annexed", "1975–76", "After Portuguese withdrawal, despite an independence declaration.", ["nu-easttimor"]),
            K("led to", "Military occupation brought atrocities."),
            N("nu-e-dili", "res-", "Dili massacre", "Nov 1991", "200+ killed; Xanana Gusmao's resistance.", ["nu-easttimor"])
          ] },
          { h: "Aceh", steps: [
            N("nu-e-1953", "evt", "1953 rebellion", "1953", "Part of Darul Islam; ended by 'special territory' status (1959).", ["aceh"]),
            K("followed by", "Suharto re-centralised, and a new movement arose."),
            N("nu-e-gam", "act", "GAM founded", "1976", "Hasan di Tiro; Libyan support (1985).", ["aceh"]),
            K("provoked response", "Jakarta declared a military operation."),
            N("nu-e-dom", "res-", "Military Operations Area", "1989", "Repression deepened separatism.", ["aceh"])
          ] }
        ] }
      ] },
    { link: "followed by", how: "After Suharto, international pressure and negotiation ended both conflicts.",
      title: "Resolution", summary: "Referendum and peace deal.",
      steps: [
        { split: [
          { h: "East Timor", steps: [ N("nu-e-ref", "tp", "UN referendum; independence", "1999–2002", "After Suharto's fall and post-Cold War UN pressure; independent 2002.", ["nu-easttimor"]) ] },
          { h: "Aceh", steps: [ N("nu-e-peace", "tp", "Peace agreement", "Aug 2005", "After the 2004 tsunami; local elections 2006.", ["aceh"]) ] }
        ] },
        K("supports", "Both show force failing and negotiation succeeding."),
        N("nu-e-verdict", "judg", "Force counter-productive", null, "International pressure and negotiated settlements decisive; di Tiro called Indonesia a cloak for 'Javanese colonialism'.", ["aceh", "nu-patterns"], { go: "nu-id4" })
      ] }
  ],
  judge: { prompt: "What did most to resolve the East Timor and Aceh conflicts? Rank the factors.", factors: ["nu-e-dili", "nu-e-dom", "nu-e-ref", "nu-e-peace"],
           notes_view: "Force is counter-productive; international pressure (UN, end of the Cold War) and negotiated settlements proved decisive." },
  historians: [],
  takeaways: [
    "Both had distinct origins: Portuguese Catholic East Timor; independent Aceh rich in oil/gas.",
    "Annexation, the Dili massacre (1991) and Aceh's military operations (1989) deepened separatism.",
    "Resolved after Suharto: East Timor independent (2002); Aceh peace deal (2005)."
  ]
});

L.push({
  id: "nu-id4", order: 9, level: 3, parent: "nu-top", kind: "causal",
  title: "Indonesia: the Chinese minority",
  question: "Why did forced assimilation of the Indonesian Chinese fail?",
  intro: "A small, wealthy, vulnerable minority was forced to assimilate yet co-opted economically — until the 1998 pogrom exposed total failure.",
  clusters: [
    { title: "Vulnerable wealth", summary: "Under 4%, much of the economy.",
      steps: [
        N("nu-c-wealth", "ltc", "Small, wealthy minority", null, "Under 4% of the population; ~75% of the economy by the 1980s.", ["nu-indochinese", "nu-indoeval"]),
        K("led to", "Wealth made them a target."),
        N("nu-c-pogrom", "res-", "Pogroms", "1965, 1967", "Violent attacks on the Chinese.", ["nu-indochinese"])
      ] },
    { link: "provoked response", how: "The New Order chose forced assimilation.",
      title: "Forced assimilation", summary: "Erasing Chinese identity.",
      steps: [
        N("nu-c-1967", "pol", "1967 'Basic Policy'", "1967", "Chinese schools shut (last 1974), script banned, Indonesian names forced, ethnic ID cards.", ["nu-indochinese"]),
        K("contradicts", "Yet the regime relied on Chinese tycoons."),
        N("nu-c-coopt", "pol", "Economic co-optation", "1970s–90", "Patron-client ties (Liem Sioe Liong); 1990 tycoons told to hand 25% equity to co-operatives.", ["nu-indochinese"])
      ] },
    { link: "led to", how: "When the economy collapsed, resentment turned violent.",
      title: "1998 and after", summary: "Failure exposed; reform.",
      steps: [
        N("nu-c-1998", "res-", "1998 pogrom", "1998", "During the AFC: organised pogroms and mass rape — forced assimilation a total failure.", ["nu-indochinese"]),
        K("provoked response", "Post-Suharto governments lifted restrictions."),
        N("nu-c-reform", "res+", "Restrictions lifted", "1998–2017", "Habibie lifted the Mandarin ban; Lunar New Year a holiday (2003); Ahok Jakarta governor (2014–17).", ["nu-indochinese"])
      ] }
  ],
  judge: { prompt: "Why did assimilation of the Indonesian Chinese fail? Rank the factors.", factors: ["nu-c-wealth", "nu-c-1967", "nu-c-coopt", "nu-c-1998"],
           notes_view: "The 1998 pogrom revealed forced assimilation as a total failure — in contrast with integrated Thai Chinese; development was double-edged." },
  historians: [],
  takeaways: [
    "Under 4% of the population held ~75% of the economy — a vulnerable minority.",
    "The 1967 Basic Policy erased Chinese identity while tycoons were co-opted.",
    "The 1998 pogrom showed total failure; restrictions lifted after 1998."
  ]
});

L.push({
  id: "nu-ph1", order: 10, level: 3, parent: "nu-top", kind: "causal",
  title: "Philippines: class, land, language, Chinese",
  question: "Why was class, rather than ethnicity, the main barrier to Philippine unity?",
  intro: "With no clear colonial enemy and politics run on patronage, class was the deepest cleavage; land reform, a national language and an official history achieved little.",
  clusters: [
    { title: "Context", summary: "Gratitude, not struggle.",
      steps: [
        N("nu-p-us", "ltc", "US legacy", "1898–1946", "Catholic majority (80%+), democratic culture; no clear anti-colonial adversary.", ["nu-philctx"]),
        K("led to", "Politics ran on personality and patronage, not ideology."),
        N("nu-p-patron", "res-", "Patronage politics", null, "Inconsistent policy; class, not ethnicity, the main source of disunity.", ["nu-philctx"])
      ] },
    { link: "provoked response", how: "Peasant rebellion forced land reform onto the agenda.",
      title: "Land reform", summary: "Promised, blocked.",
      steps: [
        N("nu-p-huk", "evt", "Huk Rebellion", "1946–54", "Reflected the elite–mass cleavage.", ["nu-landreform"]),
        K("provoked response", "Governments promised reform."),
        N("nu-p-laws", "pol", "Land reform laws", "1955–94", "Magsaysay (1955), Marcos PD 27 (1972), Aquino CARP (1988), Ramos (1994).", ["nu-landreform"]),
        K("undermined", "Congress, corruption and cronies blocked enforcement."),
        N("nu-p-limited", "res-", "Only 4.6m of 8.1m ha", "by 1998", "Central Luzon tenancy stayed at 70–80%.", ["nu-landreform"])
      ] },
    { link: "followed by", how: "Language and history were also used.",
      title: "Language and history", summary: "Limited success.",
      steps: [
        { row: [
          N("nu-p-pilipino", "pol", "Pilipino national language", "1959", "1974 Bilingual Education Policy a failure: Tagalog first language of only 28% (1970).", ["nu-philang"]),
          N("nu-p-tadhana", "pol", "Marcos's Tadhana history", "1970s", "Only 5 of 19 volumes completed; curriculum Christian-biased.", ["nu-philang"])
        ] }
      ] },
    { link: "followed by", how: "The Chinese were first excluded, then absorbed.",
      title: "The Chinese", summary: "Discrimination to integration.",
      steps: [
        N("nu-p-ff", "pol", "'Filipino First'", "1954", "Garcia's Retail Trade Nationalization Act.", ["nu-philctx", "nu-philchinese"]),
        K("followed by", "Marcos co-opted and naturalised them."),
        N("nu-p-nat", "pol", "1975 Naturalization Law", "1975", "Co-optation (Lucio Tan); assimilation via intermarriage.", ["nu-philchinese"]),
        K("led to", "With no religious barrier, the Chinese integrated."),
        N("nu-p-integ", "res+", "Chinese integrated", null, "1.3% of population, ~60% of the economy, yet integrated.", ["nu-philchinese"])
      ] },
    { link: "supports", how: "Unity peaked only against the regime.",
      title: "Verdict", summary: "Anti-regime unity.",
      steps: [
        N("nu-p-verdict", "judg", "Patronage undermined unity", null, "Greatest unity moments were anti-regime (1983 assassination, 1986 EDSA).", ["nu-philchinese"], { go: "nu-ph2" })
      ] }
  ],
  judge: { prompt: "What did most to undermine Philippine unity? Rank the factors.", factors: ["nu-p-patron", "nu-p-limited", "nu-p-pilipino", "nu-p-ff"],
           notes_view: "Patronage and personality politics undermined unity more than ethnicity; the two moments of greatest unity were anti-regime (1983, 1986)." },
  historians: [ { who: "Claro Recto", view: "Other nations' victories 'were not diluted by sentiments of gratitude', unlike the Philippines.", nodes: ["nu-p-us"] } ],
  takeaways: [
    "No clear colonial enemy; patronage politics; class the main cleavage.",
    "Land reform repeatedly blocked: only 4.6m of 8.1m ha redistributed by 1998.",
    "Language policy failed, but the Chinese integrated (no religious barrier)."
  ]
});

L.push({
  id: "nu-ph2", order: 11, level: 3, parent: "nu-top", kind: "causal",
  title: "Philippines: Moros and Cordillerans",
  question: "Why did the Moros and Cordillerans resist, and how were their grievances handled?",
  intro: "Land seizures and Christian dominance turned Moro grievance into armed separatism after Jabidah; Cordillerans protested crony projects; accommodation came under Aquino and Ramos.",
  clusters: [
    { title: "Moro grievances", summary: "Land and Christian dominance.",
      steps: [
        N("nu-m-orig", "ltc", "Never fully colonised", "1898", "Independent sultanates ceded to the US; 5–6% of population.", ["nu-moros"]),
        K("followed by", "US land laws favoured Christian settlers."),
        N("nu-m-land", "ltc", "Ancestral lands seized", "1910s", "Public Land Acts; 24 ha for Christians vs 10 for non-Christians.", ["nu-moros"]),
        K("led to", "Moros rejected inclusion."),
        N("nu-m-1946", "evid", "1946 memorandum", "1946", "'We do not want to be included in the Philippines Independence'.", ["nu-moros"])
      ] },
    { link: "triggered", how: "The Jabidah Massacre turned grievance into armed struggle.",
      title: "Armed separatism", summary: "Jabidah to the MNLF.",
      steps: [
        N("nu-m-jabidah", "trig", "Jabidah Massacre", "1968", "Muslim trainees killed at Corregidor.", ["mindanao"]),
        K("led to", "Separatist movements formed."),
        N("nu-m-mnlf", "act", "MIM, then MNLF", "1968–72", "Nur Misuari's MNLF sought a Bangsa Moro nation.", ["mindanao"]),
        K("provoked response", "Marcos accepted OIC mediation."),
        N("nu-m-tripoli", "pol", "Tripoli Agreement", "23 Dec 1976", "Autonomy incl. sharia for dropping independence; collapsed within a year; MILF split 1981.", ["mindanao"])
      ] },
    { link: "followed by", how: "After Marcos, governments turned to autonomy.",
      title: "Accommodation", summary: "ARMM and 1996.",
      steps: [
        N("nu-m-armm", "pol", "ARMM", "1989", "Aquino reopened talks.", ["mindanao"]),
        K("led to", "Ramos reached a fuller deal, with outside help."),
        N("nu-m-1996", "tp", "1996 Peace Agreement", "1996", "Misuari became governor; Malaysian mediation and OIC recognition (1975) drove it; MILF deal only 2012/2014.", ["mindanao", "nu-philchinese"])
      ] },
    { link: "followed by", how: "A smaller highland minority protested too.",
      title: "Cordillerans", summary: "Not secessionist.",
      steps: [
        N("nu-m-dam", "trig", "Chico dam, Cellophil logging", "1970s", "Crony projects threatened ancestral land of the ~2% Cordillerans.", ["nu-cordillera"]),
        K("provoked response", "Cordillerans resisted Manila."),
        N("nu-m-cpdf", "act", "Cordillera People's Democratic Front", "1970s–80s", "Fanned by CPP-NPA; retaliation, not secession.", ["nu-cordillera"]),
        K("provoked response", "Aquino and Ramos offered autonomy."),
        N("nu-m-car", "res±", "Autonomy promised", "1986–2005", "Talks with CPLA (1986); EO 220 (1997) region never implemented by 2005.", ["nu-cordillera"])
      ] }
  ],
  judge: { prompt: "What drove Moro separatism? Rank the factors.", factors: ["nu-m-land", "nu-m-jabidah", "nu-m-tripoli", "nu-m-1996"],
           notes_view: "Autonomy solved the problem of violence, not of a broad national identity; international pressure (OIC, Malaysian mediation) drove accommodation, paralleling East Timor." },
  historians: [],
  takeaways: [
    "Land laws favouring Christians (24 vs 10 ha) bred Moro grievance.",
    "Jabidah (1968) led to the MNLF; Tripoli (1976) collapsed; ARMM (1989) and the 1996 agreement followed.",
    "Cordillerans protested crony projects but were not secessionist."
  ]
});

L.push({
  id: "nu-th1", order: 12, level: 3, parent: "nu-top", kind: "causal",
  title: "Thailand: Nation, Religion, King to Phibun",
  question: "How did Thai rulers build a national identity before 1945?",
  intro: "Chakri kings built a territorial state and the triad of Nation, Religion, King; Phibun forced Thai-ness — and the Chinese still integrated fully.",
  clusters: [
    { title: "Chakri foundations", summary: "A territorial Thai state.",
      steps: [
        N("nu-h-chul", "pol", "Territorial state", "1851–1911", "Chulalongkorn's reforms; 1902 Sangha Act; 1911 Nationality Act: born within borders = Thai.", ["nu-thaiearly"]),
        K("followed by", "Vajiravudh supplied an ideology."),
        N("nu-h-triad", "pol", "'Nation, Religion, King'", "1910–25", "Chat, Satsana, Kasat; Buddhism in schools; called the Chinese 'Jews of the East'.", ["nu-thaiearly"])
      ] },
    { link: "intensified", how: "Phibun pushed Thai-ness to extremes.",
      title: "Phibun's Thai-ness", summary: "Forced assimilation.",
      steps: [
        N("nu-h-rename", "pol", "Siam renamed Thailand", "1939", "Cultural Assimilation Policy: southern Malays to adopt Thai-ness except religion.", ["nu-phibun"]),
        K("followed by", "Directives regulated daily life."),
        N("nu-h-ratt", "pol", "Ratthaniyom directives", "1939–44", "Banned ethnic references; 'modern Thai' dress; Buddhism = patriotism.", ["nu-phibun"]),
        K("followed by", "The Chinese were targeted."),
        N("nu-h-chinese", "pol", "1939 anti-Chinese laws", "1939", "Thai names and language; Chinese teaching limited to 2 hrs/week; state monopolies.", ["thaiunity"])
      ] },
    { link: "followed by", how: "After the war, alliances and intermarriage absorbed the Chinese.",
      title: "Chinese integration", summary: "The region's success story.",
      steps: [
        N("nu-h-alliance", "evt", "Military–Chinese business alliances", "post-war", "Intermarriage produced a Sino-Thai middle class.", ["thaiunity"]),
        K("led to", "With no religious barrier, the Chinese became Thai."),
        N("nu-h-integ", "res+", "Chinese fully integrated", "1980s", "~10% of population, ~81% of the economy, as integrated Thai nationals.", ["thaiunity"], { go: "nu-th2" })
      ] }
  ],
  judge: { prompt: "What best explains Thai success in integrating the Chinese? Rank the factors.", factors: ["nu-h-triad", "nu-h-chinese", "nu-h-alliance", "nu-h-integ"],
           notes_view: "A long-standing dominant-culture ideology; Chinese integration via intermarriage and the absence of a religious/cultural barrier is the region's success story." },
  historians: [ { who: "Keyes", view: "Thai effectiveness came partly from NOT basing policy on explicit recognition of ethnic difference.", nodes: ["nu-h-integ"] } ],
  takeaways: [
    "Chakri kings built a territorial state; Vajiravudh coined Nation, Religion, King.",
    "Phibun (1939) forced Thai-ness, including anti-Chinese laws.",
    "Yet the Chinese integrated fully (~81% of the economy by the 1980s) — no religious barrier."
  ]
});

L.push({
  id: "nu-th2", order: 13, level: 3, parent: "nu-top", kind: "causal",
  title: "Thailand: Sarit, the monarchy and the NIB",
  question: "How did Sarit and later governments keep the triad relevant?",
  intro: "Sarit revived the monarchy, centralised Buddhism and used development as a mantra; the NIB later adapted the triad to democracy.",
  clusters: [
    { title: "Sarit's revival", summary: "King, Sangha, development.",
      steps: [
        { row: [
          N("nu-r-king", "pol", "Monarchy revived", "1957–", "Bhumibol toured provinces, reaching minorities; revered as semi-divine.", ["nu-sarit"]),
          N("nu-r-sangha", "pol", "Sangha centralised", "1962", "Sangha Act under a Bangkok Supreme Patriarch; Thammathut/Thammacarik missions to rural and tribal areas.", ["nu-sarit"]),
          N("nu-r-dev", "pol", "Kanphatthana", "1957–", "'Development' as rallying mantra: highways, provincial universities, US aid.", ["nu-sarit"])
        ] },
        K("led to", "The monarchy became the unifying anchor in place of a factional military."),
        N("nu-r-anchor", "res+", "Monarchy as anchor", null, "Allegiance to the monarchy held Thai-ness together.", ["nu-sarit", "thaiunity"])
      ] },
    { link: "followed by", how: "Buddhism was also mobilised against communism.",
      title: "Polarisation", summary: "1976.",
      steps: [
        N("nu-r-kitti", "evt", "'Killing Communists not Demeritorious'", "1976", "Monk Kitthiwuttho's sermon amid polarisation.", ["nu-sarit"]),
        K("provoked response", "The state reframed national identity."),
        N("nu-r-nib", "pol", "National Identity Board", "post-1976", "Melded nation, religion, king with democracy and development.", ["nu-nib"])
      ] },
    { link: "supports", how: "Adaptability kept the triad alive.",
      title: "Verdict", summary: "Adaptable ideology.",
      steps: [ N("nu-r-verdict", "judg", "Adaptability the key", null, "Adapting the triad explains its longevity; unity held by allegiance to the monarchy.", ["nu-nib", "thaiunity"], { go: "nu-th3" }) ] }
  ],
  historians: [ { who: "Streckfuss", view: "Thai unity rests on not being colonised and allegiance to the monarchy — 'or rather that the lese majeste law compels it'.", nodes: ["nu-r-anchor"] } ],
  takeaways: [
    "Sarit revived the monarchy, centralised the Sangha (1962) and preached development.",
    "The monarchy replaced a factional military as the unifying anchor.",
    "The NIB (post-1976) adapted the triad — adaptability explains its longevity."
  ]
});

L.push({
  id: "nu-th3", order: 14, level: 3, parent: "nu-top", kind: "causal",
  title: "Thailand: hill tribes and Pattani Muslims",
  question: "Why did Thai assimilation fail with the hill tribes and Pattani Muslims?",
  intro: "Forced resettlement provoked the Meo Revolt; assimilating the Malay-Muslim south bred separatism — limits of Thai-ness where religion divided.",
  clusters: [
    { title: "Northern hill tribes", summary: "Resettlement and revolt.",
      steps: [
        N("nu-q-neglect", "ltc", "Neglected north-east", "1976", "34% of population, 18% of the budget; Thai-only schools (1967).", ["nu-hilltribes"]),
        K("intensified", "Forest law and resettlement hit small farmers."),
        N("nu-q-resettle", "pol", "Forced resettlement", "1967–73", "1968 National Reserved Forests Act punished farmers, not loggers.", ["nu-hilltribes"]),
        K("provoked response", "The Hmong rose up."),
        N("nu-q-meo", "evt", "Meo (Hmong) Revolt", "1968", "Met with bombing and napalm until 1973; ~15,000 refugees.", ["nu-hilltribes"]),
        K("followed by", "Policy turned to recognition."),
        N("nu-q-sammuen", "res+", "Post-1976 recognition", "post-1976", "Sam Muen project.", ["nu-hilltribes"])
      ] },
    { link: "followed by", how: "In the south, religion was a barrier assimilation could not cross.",
      title: "Pattani Muslims", summary: "Assimilation to separatism.",
      steps: [
        N("nu-q-pattani", "ctx", "Malay-Muslim south", "1909", "Restored to Thailand (1909); ~7% of Thais, ~78% Muslim locally.", ["nu-pattani"]),
        K("provoked response", "Assimilation met resistance."),
        N("nu-q-assim", "pol", "Assimilation", "1921–60", "Ratthaniyom bans; 1923 riots; Haji Sulong's demands rejected (1948).", ["nu-pattani"]),
        K("led to", "Resistance turned violent."),
        N("nu-q-dusun", "res-", "Dusun Nyiur Incident", "1948", "~400 Malay Muslims and 30 police killed.", ["nu-pattani"]),
        K("followed by", "Policy swung between accommodation and control."),
        { row: [
          N("nu-q-accom", "pol", "Accommodation", "1961–80", "Sarit let pondoks register; Muslim quotas; Thai Muslim Center (1980).", ["nu-pattani"]),
          N("nu-q-transm", "pol", "Buddhist transmigration", "1961–69", "100,000 families from 1961, 60,000 more in 1969 — deepened mistrust.", ["nu-pattani"])
        ] },
        K("led to", "Separatism grew."),
        N("nu-q-pulo", "res-", "PULO and escalating violence", "1967–2004", "Of 2,593 incidents 1993–2004, only 18% by 2000.", ["nu-pattani"])
      ] }
  ],
  judge: { prompt: "Why did Thai assimilation fail in the south? Rank the factors.", factors: ["nu-q-assim", "nu-q-dusun", "nu-q-accom", "nu-q-transm"],
           notes_view: "The limits of Thai assimilation where a religious barrier existed; force entrenches grievances while accommodation is more durable." },
  historians: [],
  takeaways: [
    "Forced resettlement provoked the 1968 Meo Revolt; recognition came after 1976.",
    "Assimilating the Malay-Muslim south bred resistance (Dusun Nyiur 1948).",
    "Mixed accommodation and Buddhist transmigration led to PULO and post-2000 violence."
  ]
});

L.push({
  id: "nu-vn1", order: 15, level: 3, parent: "nu-top", kind: "causal",
  title: "Vietnam: North unified, South fractured",
  question: "Why was North Vietnam more unified than the South?",
  intro: "The VCP's anti-colonial legitimacy, Uncle Ho and mass organisations unified the North despite brutal land reform; Diem's personalist, Catholic regime fractured the South.",
  clusters: [
    { title: "North: foundations", summary: "Anti-colonial legitimacy.",
      steps: [
        N("nu-v-vcp", "ltc", "VCP legitimacy", "1945–75", "Anti-French and anti-US struggles as one endeavour; stable Politburo; Confucian collectivism (Duiker).", ["nu-vietctx"]),
        K("enabled", "Legitimacy let the party remake rural society."),
        N("nu-v-land", "pol", "Land reform", "1953–56", "Chinese-trained cadres classified peasants; ~1.6m households (~8m peasants) got land.", ["nu-landreformnv"]),
        K("led to", "It spiralled into terror."),
        N("nu-v-excess", "res-", "Excesses and revolt", "1956", "30% of 'landlord' convictions wrong; Nghe An rebellion (Nov 1956); 'mistakes correction'.", ["nu-landreformnv"])
      ] },
    { link: "followed by", how: "The North then built unity through tools and concessions.",
      title: "North: unity tools", summary: "Uncle Ho and the Front.",
      steps: [
        { row: [
          N("nu-v-ho", "pol", "Cult of 'Uncle Ho'", null, "Preserved in a mausoleum.", ["nu-northtools"]),
          N("nu-v-front", "pol", "Fatherland Front", "1955", "Endorsement needed to stand for office.", ["nu-northtools"]),
          N("nu-v-edu", "pol", "Patriotic education", null, "9-year schooling; Trung Sisters, Tran Hung Dao narratives.", ["nu-northtools"]),
          N("nu-v-auto", "pol", "Minority autonomy", "1960", "Constitution Art. 3; Tay Bac/Viet Bac regions — needed for wartime support.", ["nu-northtools", "nu-vietminorities"])
        ] }
      ] },
    { link: "contradicts", how: "The South had no such basis of unity.",
      title: "South: Diem", summary: "Personalism and the Buddhist Crisis.",
      steps: [
        N("nu-v-diem", "act", "Diem's Personalism", "1955–63", "Nepotism, Catholic bias; National Revolutionary Movement sole party; Strategic Hamlets failed.", ["buddhistcrisis"]),
        K("led to", "His policies alienated Chinese and Buddhists."),
        N("nu-v-chinese", "pol", "300,000 Chinese forced to register", "1950s", "Become citizens or lose business rights.", ["buddhistcrisis"]),
        K("triggered", "A flag ban sparked a religious crisis."),
        N("nu-v-vesak", "trig", "Vesak flag ban", "May 1963", "Hue: 9 killed; Thich Quang Duc's self-immolation (June); pagoda raids (Aug).", ["buddhistcrisis"]),
        K("led to", "The US approved a coup."),
        N("nu-v-coup", "res-", "Diem executed", "2 Nov 1963", "Religious divisiveness destroyed the regime.", ["buddhistcrisis"], { go: "nu-vn2" })
      ] }
  ],
  judge: { prompt: "Why was the North more unified than the South? Rank the factors.", factors: ["nu-v-vcp", "nu-v-ho", "nu-v-auto", "nu-v-diem", "nu-v-vesak"],
           notes_view: "A unifying decolonisation narrative unmatched elsewhere plus Confucianist collectivism unified the North; the personalistic South had no basis of unity." },
  historians: [ { who: "Duiker", view: "Confucianist subordination of individual to community made Marxist discipline more resonant.", nodes: ["nu-v-vcp"] } ],
  takeaways: [
    "The VCP's anti-colonial legitimacy unified the North despite brutal land reform (1953–56).",
    "Uncle Ho, the Fatherland Front and minority autonomy (1960) built support.",
    "Diem's personalist, Catholic-biased rule ended in the 1963 Buddhist Crisis and his execution."
  ]
});

L.push({
  id: "nu-vn2", order: 16, level: 3, parent: "nu-top", kind: "causal",
  title: "Vietnam after 1975: minorities and geopolitics",
  question: "How did geopolitics shape Vietnam's minority policy after 1975?",
  intro: "Reunification brought assimilation and anti-Chinese campaigns; Doi Moi and shifting geopolitics brought accommodation, with new fault-lines by 2001.",
  clusters: [
    { title: "Assimilation after 1975", summary: "Unify by force.",
      steps: [
        { row: [
          N("nu-w-collect", "pol", "Southern collectivisation", "1976–80", "Resisted; national income fell 2%/yr; Southern schools closed for retraining.", ["nu-srvunity"]),
          N("nu-w-dismantle", "pol", "Autonomous regions dismantled", "1975", "Directive 214 labelled minority rites 'superstitious'; Kinh moved into the Central Highlands.", ["nu-vietminorities"])
        ] },
        K("intensified", "War with China turned policy against the Hoa."),
        N("nu-w-hoa", "pol", "Anti-Chinese campaign", "1978", "Anti-capitalist campaign against the Hoa.", ["nu-vietminorities"]),
        K("led to", "Chinese fled in large numbers."),
        N("nu-w-boat", "res-", "Boat people", "1978–80", "~75,000/month; ~two-thirds of 545,000 boat people Chinese.", ["nu-srvunity", "nu-vietminorities"])
      ] },
    { link: "followed by", how: "Reform and changing geopolitics brought accommodation.",
      title: "Doi Moi accommodation", summary: "Growth and representation.",
      steps: [
        N("nu-w-doimoi", "tp", "Doi Moi", "1986", "GNP growth averaged 8.2% in the 1990s; accommodation of Chinese from 1984.", ["nu-srvunity", "nu-vietminorities"]),
        K("led to", "Minorities gained a voice."),
        N("nu-w-rep", "res+", "Minority representation", "by 2000", "17% of the Assembly (13% of population); CEMMA (1993).", ["nu-vietminorities"])
      ] },
    { link: "contradicts", how: "Growth also opened new divides.",
      title: "Late fault-lines", summary: "Inequality and protest.",
      steps: [
        { row: [
          N("nu-w-gap", "res-", "Widening inequality", "1996–2002", "Richest decile 10.6× poorest (1996), 12.5× (2001–02).", ["nu-srvunity"]),
          N("nu-w-highland", "res-", "Central Highlands protests", "2001", "Kinh migration (420,000 in 1926 to 4m+ in 2001); ~30,000 land conflicts (1988–92); minorities 29% of the poor.", ["nu-vietminorities"])
        ] },
        K("supports", "Policy tracked external conditions more than principle."),
        N("nu-w-verdict", "judg", "Geopolitics drove policy", null, "Comparatively stable, but fault-lines emerged late; most political prisoners were Buddhist monks (Clarke).", ["nu-vietminorities", "nu-srvunity"])
      ] }
  ],
  judge: { prompt: "What most shaped Vietnam's unity policy after 1975? Rank the factors.", factors: ["nu-w-dismantle", "nu-w-hoa", "nu-w-doimoi", "nu-w-gap"],
           notes_view: "The clearest case of national unity policy driven by external Cold War/Sino-Vietnamese dynamics; comparatively stable, but fault-lines emerged late." },
  historians: [ { who: "Gerard Clarke", view: "Most of Vietnam's political prisoners were reportedly Buddhist monks.", nodes: ["nu-w-verdict"] } ],
  takeaways: [
    "Post-1975 assimilation: autonomous regions dismantled; 1978 anti-Chinese campaign; boat people.",
    "Doi Moi brought accommodation and minority representation (17% of Assembly).",
    "Inequality and 2001 Central Highlands protests: late fault-lines."
  ]
});

L.push({
  id: "nu-my1", order: 17, level: 3, parent: "nu-top", kind: "causal",
  title: "Malaysia: Malayan Union to Separation",
  question: "How did colonial divisions and the Social Contract shape Malaysian unity to 1965?",
  intro: "A colonial racial division of labour left deep divides; Malays defeated the Malayan Union; the Social Contract enshrined Malay special position; Malaysia 1963–65 ended in riots and Separation.",
  clusters: [
    { title: "Colonial divisions", summary: "Race and occupation.",
      steps: [
        N("nu-y-labour", "ltc", "Racial division of labour", "colonial", "Chinese tin, Indian plantations, Malay peasants; 1957: 97.5% of rice farmers Malay, 66% of commerce Chinese.", ["nu-msiadivide"]),
        K("intensified", "Japanese occupation deepened the divides."),
        N("nu-y-japan", "evt", "Occupation and riots", "1942–45", "Groups treated differently (genocide against Chinese); post-surrender riots.", ["nu-msiadivide"])
      ] },
    { link: "followed by", how: "Britain proposed equal citizenship.",
      title: "Malayan Union", summary: "Rejected by Malays.",
      steps: [
        N("nu-y-mu", "pol", "Malayan Union", "22 Jan 1946", "Centralised; jus soli citizenship — 2.5m Chinese (38%) would qualify.", ["malayanunion"]),
        K("provoked response", "Malays organised against it."),
        N("nu-y-umno", "act", "UMNO formed", "May 1946", "Onn bin Jaafar.", ["malayanunion"]),
        K("led to", "Britain backed down."),
        N("nu-y-fed", "pol", "Federation of Malaya", "1 Feb 1948", "Sultans restored; Agong always Malay; citizenship restricted.", ["malayanunion"])
      ] },
    { link: "followed by", how: "An inter-communal alliance led Malaya to independence.",
      title: "The Social Contract", summary: "Malay special position.",
      steps: [
        N("nu-y-alliance", "act", "Alliance (UMNO–MCA–MIC)", "1949–55", "Won 51 of 52 seats (1955).", ["malayanunion"]),
        K("led to", "Independence enshrined a bargain."),
        N("nu-y-153", "pol", "Section 153", "1957", "Malay special position, Islam, Malay language; dominance 'more symbolic than real' (freedom of worship, English).", ["nu-socialcontract"])
      ] },
    { link: "followed by", how: "Merger with Singapore challenged the bargain.",
      title: "Malaysia 1963–65", summary: "Riots and Separation.",
      steps: [
        N("nu-y-merger", "pol", "Malaysia formed", "1963", "Sabah/Sarawak brought in partly to dilute Singapore's Chinese.", ["nu-socialcontract"]),
        K("provoked response", "The PAP challenged Malay primacy."),
        N("nu-y-mm", "evt", "'Malaysian Malaysia'", "1964–65", "PAP's challenge.", ["nu-socialcontract"]),
        K("led to", "Communal tension exploded."),
        N("nu-y-riots", "res-", "1964 riots, Separation", "1964–65", "21 Jul 1964 riots; Separation Aug 1965.", ["nu-socialcontract"], { go: "nu-my2" })
      ] }
  ],
  judge: { prompt: "What most threatened Malaysian unity before 1969? Rank the factors.", factors: ["nu-y-labour", "nu-y-mu", "nu-y-153", "nu-y-mm"],
           notes_view: "The colonial roots of ethnic division and a Malay dominance 'more symbolic than real' before 1969 built Malay discontent." },
  historians: [ { who: "Brown", view: "Divide-and-rule fostered stereotypes of 'Malay laziness, Indian docility, Chinese enterprise'.", nodes: ["nu-y-labour"] } ],
  takeaways: [
    "Colonial division of labour: Malay farmers, Chinese commerce.",
    "Malays defeated the Malayan Union (1946); the Federation (1948) restored Malay primacy.",
    "Section 153 and the Social Contract; 'Malaysian Malaysia' led to the 1964 riots and Separation."
  ]
});

L.push({
  id: "nu-my2", order: 18, level: 3, parent: "nu-top", kind: "causal",
  title: "Malaysia: 13 May, the NEP and the Orang Asli",
  question: "How did Malaysia achieve stability after 1969, and at what cost?",
  intro: "After the 1969 riots UMNO built a Malay-centred order — BN, sensitive-issue bans, Rukunegara, the NEP — giving managed co-existence, not integration.",
  clusters: [
    { title: "13 May 1969", summary: "Riots and control.",
      steps: [
        N("nu-z-election", "trig", "Alliance loses 2/3 majority", "May 1969", "Opposition processions and UMNO counter-demonstrations.", ["nu-13may"]),
        K("led to", "Communal violence broke out."),
        N("nu-z-riots", "evt", "13 May riots", "13 May 1969", "Four days of riots; NOC 'maximum government'.", ["nu-13may"]),
        K("provoked response", "UMNO restructured politics."),
        { row: [
          N("nu-z-bn", "pol", "Barisan Nasional", "1973", "Co-opted the opposition.", ["nu-13may"]),
          N("nu-z-amend", "pol", "1971 Amendment Act", "1971", "Criminalised questioning citizenship, language, Malay position, rulers.", ["nu-13may"]),
          N("nu-z-rukun", "pol", "Rukunegara", "31 Aug 1970", "National ideology — at cross-purposes with pro-Malay policy.", ["nu-13may"])
        ] }
      ] },
    { link: "led to", how: "Economic restructuring aimed to remove the cause of resentment.",
      title: "The NEP", summary: "Restructuring wealth.",
      steps: [
        N("nu-z-nep", "pol", "New Economic Policy", "1971–90", "Eradicate poverty; end identification of race with function.", ["nu-nep"]),
        K("led to", "Malay economic position improved."),
        N("nu-z-results", "res±", "Partial results", "1990", "Malays ~20% (target 30%); poverty 49% to 15%; bumiputera degree share 35.6% to 66.7%.", ["nu-nep", "nu-msiaculture"])
      ] },
    { link: "followed by", how: "Language, culture and religion were reshaped too.",
      title: "Culture and religion", summary: "Malay-centred.",
      steps: [
        { row: [
          N("nu-z-lang", "pol", "Malay medium", "by 1982", "All state schools and universities; vernacular schools allowed — segregation in practice.", ["nu-msiaculture"]),
          N("nu-z-ncp", "pol", "National Cultural Policy", "1971", "Malay-based with Islam; rejected by non-Malays.", ["nu-msiaculture"]),
          N("nu-z-bangsa", "pol", "Bangsa Malaysia", "1991", "Vision 2020 — uneasy with Islamisation (ABIM, Islamic Bank 1983).", ["nu-msiaculture"])
        ] }
      ] },
    { link: "contradicts", how: "One minority was pushed to assimilate.",
      title: "Orang Asli", summary: "Assimilation fails.",
      steps: [
        N("nu-z-oa", "pol", "Regroupment and Islamisation", "late 1970s", "Citizens but not bumiputera; covert Islamisation with incentives.", ["nu-orangasli"]),
        K("led to", "Assimilation strengthened a separate identity."),
        N("nu-z-oares", "res-", "Separate identity grows", "1989–97", "80.8% in poverty (1993); Association grew from 277 to ~15,000.", ["nu-orangasli"])
      ] },
    { link: "supports", how: "Weighing stability against integration.",
      title: "Verdict", summary: "Managed co-existence.",
      steps: [
        N("nu-z-verdict", "judg", "Stable, not integrated", null, "No violence since 1969; 'the politics rather than the economics of the NEP' stabilised; groups 'neither assimilated nor integrated'.", ["nu-msiaeval"],
          { ev: ["Officially assimilative but accommodative in practice — the reverse of Indonesia.", "A 'not-so-large' Malay majority and 'not-so-small' Chinese minority discouraged violence (Mohamad).", "2000 survey: 'very little inter-ethnic mixing'."] })
      ] }
  ],
  judge: { prompt: "What best explains Malaysia's stability after 1969? Rank the factors.", factors: ["nu-z-bn", "nu-z-amend", "nu-z-nep", "nu-z-lang"],
           notes_view: "Stability since 1969 via managed co-existence, not integration — 'the politics rather than the economics of the NEP' stabilised Malaysia (Mohamad)." },
  historians: [
    { who: "Mohamad", view: "'It was the politics rather than the economics of the NEP which stabilized Malaysian ethnic disequilibrium'.", nodes: ["nu-z-verdict"] },
    { who: "Ahmad and Kadir", view: "Malaysia's ethnic groups 'have neither become assimilated nor integrated'.", nodes: ["nu-z-verdict"] },
    { who: "Lee", view: "Vernacular schools were multicultural in form but reinforced segregation.", nodes: ["nu-z-lang"] },
    { who: "Endicott and Dentan", view: "'When all Orang Asli have become Malays, then Malays will become Orang Asli.'", nodes: ["nu-z-oa"] }
  ],
  takeaways: [
    "13 May 1969 led to BN, sensitive-issue bans and Rukunegara.",
    "The NEP cut poverty (49% to 15%) but Malays reached ~20%, not 30%.",
    "Managed co-existence, not integration; Orang Asli assimilation failed."
  ]
});

L.push({
  id: "nu-sg", order: 19, level: 3, parent: "nu-top", kind: "causal",
  title: "Singapore: survival and multiculturalism",
  question: "How did Singapore build national unity, and how successful was it?",
  intro: "Forced independence created a survival narrative; the PAP engineered integration through CMIO multiculturalism, English, National Service and housing quotas.",
  clusters: [
    { title: "Survival", summary: "A Chinese state in a Malay sea.",
      steps: [
        N("nu-g-sep", "tp", "Forced independence", "1965", "LKY: a 'moment of anguish'; a Chinese-majority state in a Malay region.", ["nu-survival"]),
        K("led to", "Survival became the national narrative."),
        N("nu-g-survive", "int", "Survival narrative", "1961–", "EDB (1961), DBS, JTC (1968); multiculturalism driven by geopolitics and an 'identity deficit'.", ["nu-survival"])
      ] },
    { link: "provoked response", how: "The PAP depoliticised society while keeping elections.",
      title: "Political control", summary: "Depoliticised, but democratic forms.",
      steps: [
        N("nu-g-ntuc", "pol", "Labour and politics controlled", "1961–82", "NTUC displaced the STUC; ISA; 1982 Trade Union Act.", ["nu-survival"]),
        K("followed by", "Democratic forms were kept and adapted."),
        N("nu-g-grc", "pol", "NCMP, NMP, GRC, Elected President", "1984–93", "GRCs (1988) guarantee minority MPs.", ["nu-survival", "sporeunity"])
      ] },
    { link: "followed by", how: "Multiculturalism was engineered through policy.",
      title: "Engineering integration", summary: "CMIO, English, NS, housing.",
      steps: [
        { row: [
          N("nu-g-cmio", "pol", "CMIO and meritocracy", "1965–", "Four official languages; meritocracy to look fair after Malaysia's 1969 pro-Malay turn.", ["sporeunity"]),
          N("nu-g-biling", "pol", "Bilingual policy", "1969", "English common; Mother Tongue as 'cultural ballast'; Nantah merged into NUS (1980).", ["nu-sglang"]),
          N("nu-g-ns", "pol", "National Service", "1967", "Compulsory, to erode barriers; Malay-Muslims under-represented in sensitive roles.", ["nu-sgns"]),
          N("nu-g-hdb", "pol", "HDB ethnic quotas", "1959–", "Max ~87% Chinese, 25% Malay, 13% Indian/Others per block.", ["nu-sgns"])
        ] },
        K("followed by", "Values and self-help groups were added."),
        { row: [
          N("nu-g-selfhelp", "pol", "Self-help groups", "1981–92", "MENDAKI (1981), SINDA (1991), CDAC (1992).", ["sporeunity"]),
          N("nu-g-shared", "pol", "Shared Values", "15 Jan 1991", "Nation before community; family; consensus; racial and religious harmony; Religious Harmony Act (1990).", ["sporeunity", "nu-sgns"])
        ] }
      ] },
    { link: "supports", how: "Weighing stability against identity.",
      title: "Verdict", summary: "Most stable; identity contested.",
      steps: [
        { split: [
          { h: "Success", steps: [ N("nu-g-stable", "res+", "No racial violence", "1965–", "Most socially stable case study.", ["nu-sgeval"]) ] },
          { h: "Limits", steps: [ N("nu-g-limits", "res-", "Contested identity", "1980–90", "Synthetic identity resonates with few; Malay household income fell 74% to 70% of Chinese.", ["nu-sgeval", "sporeunity"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "What did most to build unity in Singapore? Rank the policies.", factors: ["nu-g-cmio", "nu-g-biling", "nu-g-ns", "nu-g-hdb", "nu-g-shared"],
           notes_view: "Most socially stable case study, but ethnic income gaps and contested identity show co-existence is not the same as a common Singaporean identity." },
  historians: [ { who: "Ang & Stratton", view: "Singapore suffers an 'identity deficit' and 'ambivalent cultural status'.", nodes: ["nu-g-survive", "nu-g-limits"] } ],
  takeaways: [
    "Forced independence created a survival narrative in a Malay region.",
    "CMIO, bilingualism, National Service, HDB quotas and Shared Values engineered integration.",
    "No racial violence since independence, but identity remains contested."
  ]
});

L.push({
  id: "nu-compare", order: 20, level: 1, parent: "nu-top", kind: "matrix",
  title: "National unity compared",
  question: "How did approach, anchor and outcome differ across the seven states?",
  intro: "Approach, unifying anchor and outcome by country, from the notes' synthesis.",
  matrix: {
    cols: ["Approach", "Unifying anchor", "Outcome"],
    rows: [
      { h: "Burma", cells: ["Assimilation by force", "Tatmadaw", "Failure; longest-running insurgencies"] },
      { h: "Indonesia", cells: ["Officially accommodative, assimilative in practice", "ABRI (military)", "Containment; unravelled 1997–98"] },
      { h: "Philippines", cells: ["Assimilation; later autonomy", "Patronage politics", "Class divide; violence, not identity, solved"] },
      { h: "Thailand", cells: ["Assimilation; later accommodation", "Monarchy", "Comparatively successful; south unresolved"] },
      { h: "Vietnam", cells: ["Shifted with geopolitics", "VCP", "Stable; late fault-lines"] },
      { h: "Malaysia", cells: ["Officially assimilative, accommodative in practice", "UMNO/BN", "Managed co-existence since 1969"] },
      { h: "Singapore", cells: ["Multiculturalism (CMIO)", "PAP", "Most stable; identity contested"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "Force was consistently counter-productive; negotiated settlements more durable.",
    "Chinese integration succeeded where there was no religious or cultural barrier (Thailand, Philippines).",
    "External geopolitics drove policy (Vietnam, Singapore, East Timor/Aceh); development was double-edged."
  ]
});

L.push({
  id: "nu-arg", order: 21, level: 1, parent: "nu-top", kind: "argument",
  title: "Was multiculturalism more successful?",
  question: "'Multiculturalism was more successful than assimilation in building national unity in SEA.' How far do you agree?",
  intro: "Weigh multicultural Singapore and Malaysia against assimilationist states, including Thailand's success.",
  clusters: [
    { title: "Claim", summary: "Integration beats assimilation.",
      steps: [ N("nu-x-claim", "judg", "Multiculturalism worked better", null, "Multiculturalism was more successful than assimilation in building national unity.", ["nu-approaches"]) ] },
    { link: "supports", how: "Test the claim across the cases.",
      title: "For and against", summary: "Evidence both ways.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("nu-x-sg", "evid", "Singapore most stable", null, "No racial violence since independence.", ["nu-sgeval"]),
            K("supports", "Forced assimilation often failed."),
            N("nu-x-force", "evid", "Assimilation by force failed", null, "Burma's insurgencies; Indonesia's 1998 pogrom, East Timor and Aceh.", ["nu-burmaeval", "nu-indochinese"]),
            K("supports", "Negotiated accommodation lasted."),
            N("nu-x-settle", "evid", "Settlements durable", null, "Aceh 2005, ARMM, Thai accommodation in the north.", ["nu-patterns"])
          ] },
          { h: "Against", steps: [
            N("nu-x-thai", "evid", "Thailand's assimilation worked", null, "Chinese fully integrated without recognising difference (Keyes).", ["thaiunity"]),
            K("contradicts", "Multicultural states were not truly integrated."),
            N("nu-x-my", "evid", "Malaysia only co-existence", null, "Groups 'neither assimilated nor integrated'; Orang Asli assimilation.", ["nu-msiaeval", "nu-orangasli"]),
            K("contradicts", "Singapore's identity is synthetic."),
            N("nu-x-sgid", "evid", "Singapore's identity contested", null, "'Identity deficit'; income gaps.", ["nu-sgeval"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing the evidence.",
      title: "Judgement", summary: "Inclusion, not label, mattered.",
      steps: [
        N("nu-x-judge", "judg", "Inclusion and barriers mattered", null, "Coercion failed under either label; success came with inclusion, negotiated settlements and no religious barrier.", ["nu-patterns", "nu-compare"])
      ] }
  ],
  judge: { prompt: "How far was multiculturalism more successful? Rank the evidence.", factors: ["nu-x-sg", "nu-x-force", "nu-x-settle", "nu-x-thai", "nu-x-my", "nu-x-sgid"],
           notes_view: "Force was consistently counter-productive while negotiated settlements proved more durable; Chinese integration succeeded where there were no religious or cultural barriers." },
  historians: [ { who: "Keyes", view: "Thai effectiveness came from not recognising ethnic difference.", nodes: ["nu-x-thai"] } ],
  takeaways: [
    "For: Singapore's stability; forced assimilation failed in Burma and Indonesia.",
    "Against: Thailand's assimilation worked; Malaysia and Singapore show co-existence, not one identity.",
    "Coercion failed under either label; inclusion and settlements mattered most."
  ]
});
})();
