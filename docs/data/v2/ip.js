// v2 flow charts: the Indo-Pakistani conflict, 1947–1972 (cards in data/ip.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).ip = window.FLOWS2.ip || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "ip-top", order: 1, level: 0, kind: "causal",
  title: "The Indo-Pakistani conflict, 1947–1972",
  question: "Why did conflicts occur and how effective were the attempts to manage them?",
  intro: "Partition left Kashmir — ¾ Muslim, ruled by a Hindu Maharaja — contested by both states. Three wars followed; each ended in an agreement, none settled Kashmir.",
  clusters: [
    { title: "Causes", summary: "Six interlocking causes.",
      steps: [
        N("ip-t-causes", "ltc", "Six interlocking causes", "1947", "Decolonisation, security, sovereignty, nationalism, religion, economic interests — converging on Kashmir.", ["ip-overview", "ip-causes-synth"], { go: "ip-causes" }),
        K("triggered", "Partition and a contested accession sparked war."),
        N("ip-t-partition", "trig", "Partition and accession", "Aug–Oct 1947", "Rushed partition; tribal invasion; Hari Singh accedes to India.", ["ip-timeline-a", "accession"], { go: "ip-partition" })
      ] },
    { link: "led to", how: "Three wars followed, each ended by an agreement.",
      title: "Three wars", summary: "1947, 1965, 1971.",
      steps: [
        { split: [
          { h: "1947–49", steps: [
            N("ip-t-w1", "evt", "First War", "1947–49", "Stalemate splits J&K; UN ceasefire.", ["ip-w1-war"], { go: "ip-war1" }),
            K("followed by", "UN machinery and a ceasefire line."),
            N("ip-t-karachi", "pol", "Karachi Agreement; UNMOGIP", "1949", "Ceasefire line; unarmed observers.", ["ip-karachi", "unmogip"], { go: "ip-karachi" })
          ] },
          { h: "1965–66", steps: [
            N("ip-t-w2", "evt", "Second War", "Aug–Sep 1965", "Operation Gibraltar; Grand Slam; stalemate.", ["gibraltar", "ip-timeline-b"], { go: "ip-war2" }),
            K("followed by", "UN resolutions and Soviet mediation."),
            N("ip-t-tashkent", "pol", "Tashkent Declaration", "Jan 1966", "Back to pre-war positions.", ["tashkent"], { go: "ip-tashkent" })
          ] },
          { h: "1971–72", steps: [
            N("ip-t-w3", "evt", "Third War", "Dec 1971", "Bangladesh formed after 13 days.", ["ip-w3-outcomes"], { go: "ip-bangla" }),
            K("followed by", "A bilateral settlement."),
            N("ip-t-simla", "pol", "Simla Agreement", "Jul 1972", "LoC; bilateral talks only.", ["simla"], { go: "ip-simla" })
          ] }
        ] }
      ] },
    { link: "supports", how: "Judging management.",
      title: "Verdict", summary: "Tactical success, strategic failure.",
      steps: [
        N("ip-t-actors", "int", "Actors across three wars", "1947–71", "Combatants, superpowers and the UN shifted roles.", ["ip-macro-external", "ip-macro-domestic", "ip-cm-grid"], { go: "ip-actors" }),
        K("supports", "Weighing the record."),
        N("ip-t-verdict", "judg", "Ceasefires, not settlements", null, "Effective at ending hostilities; no agreement resolved Kashmir's sovereignty — leading to the 1989 insurgency.", ["ip-verdict"], { go: "ip-arg" })
      ] }
  ],
  judge: { prompt: "What was the most important cause of the Indo-Pakistani conflict? Rank them.", factors: ["ip-t-causes", "ip-t-partition", "ip-t-w2", "ip-t-w3"],
           notes_view: "The causes compound: Britain's rushed partition left the princely states' status ambiguous; the accession became the legal flashpoint; rival nationalisms and Kashmir's strategic value made it a zero-sum prize." },
  historians: [ { who: "Ganguly (2001)", view: "The two states were 'already locked into a potential collision course' when the British Indian Empire ended.", nodes: ["ip-t-causes"] } ],
  takeaways: [
    "Six causes converged on Kashmir; partition and accession triggered the First War.",
    "Three wars (1947, 1965, 1971) ended with Karachi, Tashkent and Simla.",
    "Management was tactically effective but strategically ineffective — Kashmir stayed unresolved."
  ]
});

L.push({
  id: "ip-causes", order: 2, level: 1, parent: "ip-top", kind: "causal",
  title: "Causes of the conflict",
  question: "Why did the Indo-Pakistani conflict occur?",
  intro: "Six causes compounded: decolonisation created the ambiguity that security and sovereignty concerns exploited, while religion and nationalism reinforced each other.",
  clusters: [
    { title: "Six causes", summary: "All converging on Kashmir.",
      steps: [
        { row: [
          N("ip-c-decol", "ltc", "Decolonisation", "1947", "Rushed Radcliffe Line; princely-state ambiguity.", ["ip-grid-a"], { go: "ip-partition" }),
          N("ip-c-sov", "ltc", "Territorial sovereignty", "1947", "Contested legality of the Instrument of Accession.", ["ip-grid-a"], { go: "ip-accession" }),
          N("ip-c-sec", "ltc", "Security", "1947–70", "Kashmir as strategic buffer and launchpad.", ["ip-grid-a"], { go: "ip-ideas" })
        ] },
        K("intensified", "Rival identities raised the stakes."),
        { row: [
          N("ip-c-nat", "ltc", "Nationalism", "1947", "'One Nation' vs 'Two Nations'.", ["ip-grid-b"], { go: "ip-ideas" }),
          N("ip-c-rel", "ltc", "Religion", "1947 onward", "¾ Muslim with a Hindu Maharaja — the core anomaly.", ["ip-grid-b"], { go: "ip-ideas" }),
          N("ip-c-econ", "ltc", "Economic interests", "1947–60", "India controls upstream Indus barrages.", ["ip-grid-b"], { go: "ip-indus" })
        ] }
      ] },
    { link: "led to", how: "The causes compounded rather than stood alone.",
      title: "Compounding", summary: "A zero-sum prize.",
      steps: [
        N("ip-c-compound", "int", "Causes compound", null, "Decolonisation created the ambiguity that security and sovereignty concerns exploited; religion and nationalism reinforced each other.", ["ip-causes-synth"]),
        K("led to", "Kashmir became a prize, not a negotiable border."),
        N("ip-c-prize", "res-", "Collision course", "1947", "Three wars, 1947–1971.", ["ip-overview"])
      ] }
  ],
  judge: { prompt: "Which cause mattered most? Rank them.", factors: ["ip-c-decol", "ip-c-sov", "ip-c-sec", "ip-c-nat", "ip-c-rel", "ip-c-econ"],
           notes_view: "A strong essay shows how causes compound rather than a simple list: decolonisation created the ambiguity that security and sovereignty concerns exploited; religion and nationalism reinforced each other." },
  historians: [ { who: "Ganguly", view: "The First War had four sources: competing ideologies, Pakistani irredentism, Kashmir's strategic location, and Britain's insufficient arrangements for the transfer of power.", nodes: ["ip-c-compound"] } ],
  takeaways: [
    "Six causes: decolonisation, security, sovereignty, nationalism, religion, economics.",
    "Decolonisation created the ambiguity; security and sovereignty exploited it.",
    "Religion and nationalism reinforced each other."
  ]
});

L.push({
  id: "ip-partition", order: 3, level: 3, parent: "ip-causes", kind: "causal",
  title: "Partition and the Radcliffe Line, 1947",
  question: "How did Britain's partition of India create the Kashmir problem?",
  intro: "Britain's 'cut and run' departure set a rushed deadline, hastily drawn borders and no method for integrating the princely states.",
  clusters: [
    { title: "The road to partition", summary: "Irreconcilable parties.",
      steps: [
        N("ip-p-raj", "ltc", "Nationalist pressure on the Raj", "1858–1947", "Non-cooperation; 1930 Purna Swaraj; growing support for a Muslim homeland.", ["ip-raj"]),
        K("led to", "Attlee pledged independence; Mountbatten judged partition the only path."),
        N("ip-p-mount", "pol", "Mountbatten opts for partition", "Mar 1947", "Congress–Muslim League differences judged irreconcilable.", ["ip-raj"])
      ] },
    { link: "led to", how: "A rushed deadline and hasty borders.",
      title: "Rushed partition", summary: "Radcliffe's line.",
      steps: [
        N("ip-p-act", "pol", "Independence Act", "18 Jul 1947", "Deadline of midnight 14–15 Aug 1947.", ["ip-radcliffe"]),
        K("constrained", "The commission worked under severe time pressure."),
        N("ip-p-radcliffe", "pol", "Radcliffe Commission", "Jul–Aug 1947", "4 Congress + 4 League members; Radcliffe had never visited India.", ["ip-radcliffe"]),
        K("led to", "Borders published after independence."),
        { split: [
          { steps: [
            N("ip-p-borders", "res-", "Borders published late", "17 Aug 1947", "Two days after the transfer of power (14 and 15 Aug).", ["partitionindia"]),
            K("triggered", "Mass flight across the new borders."),
            N("ip-p-flight", "res-", "Mass displacement", "1947", "~15 million crossed; 200,000 to 2 million dead.", ["partitionindia"])
          ] },
          { steps: [
            N("ip-p-princely", "ltc", "Princely states left ambiguous", "15 Aug 1947", "565 states 'recovered independence'; partition logic did not apply to them.", ["ip-princely"]),
            K("led to", "Kashmir was contiguous to both, with a Hindu ruler and Muslim majority."),
            N("ip-p-dilemma", "res-", "Kashmir's dilemma", "1947", "Hari Singh sought independence, buying time.", ["ip-princely"], { go: "ip-accession" })
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "How far was Britain responsible for the Kashmir conflict? Rank the factors.", factors: ["ip-p-mount", "ip-p-radcliffe", "ip-p-borders", "ip-p-princely"],
           notes_view: "Core evidence for decolonisation as a cause: Britain's 'cut and run' departure and failure to devise a method for integrating princely states." },
  historians: [ { who: "Burke (1974)", view: "Britain's 'cut and run' departure left inadequate arrangements for population transfer, so civil order collapsed.", nodes: ["ip-p-flight"] } ],
  takeaways: [
    "Mountbatten judged partition the only path; the Act set a 14–15 Aug deadline.",
    "Radcliffe drew borders in haste; ~15 million crossed them.",
    "Princely states like Kashmir were left without a clear method of accession."
  ]
});

L.push({
  id: "ip-accession", order: 4, level: 3, parent: "ip-causes", kind: "causal",
  title: "Invasion and accession, 1947",
  question: "How did Kashmir's accession to India become the flashpoint?",
  intro: "A Pakistan-backed tribal invasion forced Hari Singh to accede to India on conditions; both sides then disputed the accession's legality.",
  clusters: [
    { title: "Invasion", summary: "Poonch to Muzaffarabad.",
      steps: [
        N("ip-a-standstill", "ctx", "Standstill with Pakistan only", "Aug 1947", "Hari Singh prevaricated, hoping for independence; none concluded with India.", ["ip-poonch", "ip-w1-timeline-a"]),
        K("followed by", "Revolt broke out in Poonch."),
        N("ip-a-poonch", "evt", "Poonch revolt", "Aug–Sep 1947", "Azad Kashmir organised; Pathan raiders armed and transported by the Pakistani Army.", ["ip-poonch", "ip-w1-players"]),
        K("intensified", "The invasion advanced on Srinagar."),
        N("ip-a-muzaff", "trig", "Muzaffarabad captured", "22 Oct 1947", "State Forces' Muslim troops defect; raiders advance on Srinagar.", ["ip-poonch", "accession"])
      ] },
    { link: "provoked response", how: "Hari Singh appealed to India.",
      title: "Accession", summary: "Aid for accession.",
      steps: [
        N("ip-a-appeal", "pol", "Nehru's two conditions", "25–26 Oct 1947", "Sheikh Abdullah's support; provisional Instrument of Accession.", ["ip-road-accession", "accession"]),
        K("led to", "The Instrument was signed, subject to a 'reference to the people'."),
        N("ip-a-sign", "tp", "Instrument of Accession", "26–27 Oct 1947", "Provisional accession; accepted next day.", ["ip-road-accession", "ip-w1-timeline-a"]),
        K("triggered", "Indian troops were airlifted in."),
        N("ip-a-airlift", "evt", "Indian airlift to Srinagar", "27 Oct 1947", "161st Infantry Brigade; full-scale war begins.", ["ip-w1-timeline-a"], { go: "ip-war1" })
      ] },
    { link: "provoked response", how: "Both sides disputed the accession.",
      title: "Rival claims", summary: "Legal flashpoint.",
      steps: [
        { split: [
          { h: "Pakistan", steps: [
            N("ip-a-pak", "int", "'Fraudulent' accession", "1947", "Jinnah: signed under duress; Standstill breached.", ["ip-accession-claims", "ip-road-accession"]),
            K("supports", "Pakistan needed Kashmir for 'completeness'."),
            N("ip-a-irred", "int", "Irredentist claim", "1947", "Muslim-majority Kashmir rightfully Pakistan's.", ["ip-irredentism"])
          ] },
          { h: "India", steps: [
            N("ip-a-india", "int", "Accession legally valid", "1947", "The invasion was illegal and voided the Standstill Agreement.", ["ip-accession-claims", "ip-road-accession"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "Who was most responsible for the outbreak of the First War? Rank the factors.", factors: ["ip-a-standstill", "ip-a-poonch", "ip-a-sign", "ip-a-airlift"],
           notes_view: "Pakistan's irredentism and backing of the invasion forced the accession; Hari Singh's prevarication and Britain's ambiguous framework left the legal question open." },
  historians: [ { who: "Ganguly (2019)", view: "Kashmir was contiguous to both dominions, so the partition's own accession logic created a genuine dilemma.", nodes: ["ip-a-irred", "ip-a-india"] } ],
  takeaways: [
    "Pakistan backed the Poonch revolt and tribal invasion (22 Oct 1947).",
    "India made aid conditional on accession; the Instrument was provisional.",
    "Pakistan called it 'fraudulent'; India held it legal — the sovereignty flashpoint."
  ]
});

L.push({
  id: "ip-ideas", order: 5, level: 3, parent: "ip-causes", kind: "causal",
  title: "Nationalism, religion and security",
  question: "Why did both states see Kashmir as essential?",
  intro: "Rival visions of nationhood and Hindu–Muslim distrust gave Kashmir symbolic value; its location gave it strategic value.",
  clusters: [
    { title: "Rival nations", summary: "One Nation vs Two Nations.",
      steps: [
        { split: [
          { h: "Congress", steps: [
            N("ip-i-one", "ltc", "'One Nation'", "1947", "Secular state; Kashmir's integration would prove secularism.", ["ip-nationalism", "ip-religion"])
          ] },
          { h: "Muslim League", steps: [
            N("ip-i-two", "ltc", "'Two Nations'", "1947", "Muslim homeland; Pakistan 'incomplete' without Kashmir.", ["ip-nationalism", "ip-religion"])
          ] }
        ] },
        K("intensified", "Mutual distrust deepened the clash."),
        N("ip-i-distrust", "ltc", "Mutual distrust", "1947 onward", "Hinduism and Islam seen as antithetical.", ["ip-religion"])
      ] },
    { link: "intensified", how: "Kashmir's make-up let both claim it.",
      title: "Kashmir itself", summary: "Diverse and strategic.",
      steps: [
        N("ip-i-ethno", "ctx", "Ethno-religious mosaic", "1947", "Buddhist Ladakh; mixed Jammu; Muslim Valley with Pandits; Shi'a Gilgit and Baltistan.", ["ip-ethno"]),
        K("intensified", "Its frontiers made it a security prize."),
        { row: [
          N("ip-i-nehru", "evid", "India's buffer", "1947", "Nehru: frontiers 'marching with three countries' — USSR, China, Afghanistan.", ["ip-security"]),
          N("ip-i-akbar", "evid", "Pakistan's vulnerability", "1970", "Akbar Khan: Indian troops could cut the 180-mile Lahore–Rawalpindi route.", ["ip-security"])
        ] },
        K("led to", "Whoever held Kashmir held decisive advantage."),
        N("ip-i-zero", "res-", "Zero-sum prize", null, "Not a negotiable border dispute.", ["ip-security"])
      ] }
  ],
  judge: { prompt: "Were ideas or security the bigger reason Kashmir mattered? Rank the factors.", factors: ["ip-i-one", "ip-i-two", "ip-i-distrust", "ip-i-nehru", "ip-i-akbar"],
           notes_view: "Rival nationalisms and religion gave Kashmir symbolic weight for both states; its strategic location made it a zero-sum security prize." },
  historians: [
    { who: "Ganguly (2001)", view: "Diametrically opposed bases meant the two states were 'already locked into a potential collision course'.", nodes: ["ip-i-one", "ip-i-two"] },
    { who: "Hewitt (1997)", view: "India and Pakistan shared a deep 'mutual distrust' from partition onward.", nodes: ["ip-i-distrust"] },
    { who: "Burke (1974)", view: "The distrust stemmed from the antithetical nature of Hinduism and Islam.", nodes: ["ip-i-distrust"] }
  ],
  takeaways: [
    "Congress needed Kashmir to prove secularism; the League to complete Pakistan.",
    "Kashmir's mixed make-up let both states claim it.",
    "Its frontiers made it a zero-sum security prize."
  ]
});

L.push({
  id: "ip-indus", order: 6, level: 3, parent: "ip-causes", kind: "causal",
  title: "The Indus waters",
  question: "How did economic interests shape the conflict?",
  intro: "Partition gave India upstream control of rivers Pakistan depended on; the 1960 treaty contained the dispute.",
  clusters: [
    { title: "Tension", summary: "Upstream–downstream asymmetry.",
      steps: [
        N("ip-w-border", "ltc", "Upstream control", "1947", "Borders gave India the barrages regulating flow into Pakistan.", ["ip-indus-tension"]),
        K("intensified", "Pakistan depended on the Indus."),
        N("ip-w-depend", "ctx", "Pakistan's dependence", "1947", "~90% of food, 65% of employment.", ["ip-indus-tension"]),
        K("triggered", "India showed it could cut supplies."),
        N("ip-w-cut", "evt", "Canal supplies cut", "Apr 1948", "East Punjab engineers; fuelled anti-Indian sentiment.", ["ip-indus-tension"])
      ] },
    { link: "provoked response", how: "A World Bank-brokered treaty divided the rivers.",
      title: "Treaty", summary: "Resource cooperation.",
      steps: [
        N("ip-w-treaty", "pol", "Indus Waters Treaty", "1960", "Western rivers to Pakistan, eastern to India; Tarbela and Mangla Dams.", ["induswaters"]),
        K("prevented", "Water did not cause war."),
        N("ip-w-nowar", "res+", "No 'water wars'", "1960 onward", "Cooperation persisted despite multiple conflicts.", ["induswaters"])
      ] }
  ],
  judge: { prompt: "How important were economic interests as a cause? Weigh them.", factors: ["ip-w-border", "ip-w-depend", "ip-w-cut", "ip-w-treaty"],
           notes_view: "Indus dependency created an upstream–downstream power asymmetry and tension, but the 1960 treaty contained it — a counterpoint showing cooperation amid hostility." },
  historians: [ { who: "Wirsing & Jasparro (2006)", view: "Control of the Indus River system has been a persistent source of tension.", nodes: ["ip-w-border"] } ],
  takeaways: [
    "Partition gave India upstream control; Pakistan depended on the Indus.",
    "Apr 1948 supply cut fuelled anti-Indian sentiment.",
    "The 1960 treaty contained it: no water wars."
  ]
});

L.push({
  id: "ip-war1", order: 7, level: 1, parent: "ip-top", kind: "chain",
  title: "The First War and the UN, 1947–49",
  question: "How did the First War develop, and how did the UN respond?",
  intro: "The war stalemated within months; India's referral brought the UNSC in, which proposed withdrawal then plebiscite.",
  clusters: [
    { title: "The war", summary: "Stalemate.",
      steps: [
        N("ip-1-fight", "evt", "Indian Army vs Azad forces", "1947–48", "Poonch rebels and Pathans, increasingly reinforced by Pakistani regulars.", ["ip-w1-war"]),
        K("led to", "Pakistan's northern offensive failed."),
        N("ip-1-north", "evt", "Battle for the Northern Areas", "1948", "Gilgit offensive failed to take Kargil; later Aksai Chin link to 1962.", ["ip-w1-war"]),
        K("led to", "Neither side could win outright."),
        N("ip-1-stale", "res±", "Stalemate splits J&K", "end-Dec 1947", "India lacked resources and will to force full Pakistani withdrawal.", ["ip-w1-war", "ip-consol-w1"])
      ] },
    { link: "provoked response", how: "India referred the dispute to the UNSC.",
      title: "The UN steps in", summary: "Referral to resolutions.",
      steps: [
        N("ip-1-refer", "pol", "UNSC referral", "1 Jan 1948", "Articles 34 and 35; Res. 38 and 39.", ["ip-res38-39", "ip-w1-timeline-b"], { go: "ip-un48" }),
        K("followed by", "A plebiscite plan and ceasefire."),
        N("ip-1-cease", "tp", "UN ceasefire", "1 Jan 1949", "Helped by British officers commanding both armies.", ["unmogip", "ip-w1-timeline-b"], { go: "ip-karachi" })
      ] },
    { link: "led to", how: "The plebiscite was never held.",
      title: "Unresolved", summary: "Pause, not settlement.",
      steps: [
        N("ip-1-unres", "res-", "Plebiscite never held", "1949–57", "Superpower influence grew in each country.", ["ip-consol-w1"], { go: "ip-pleb" })
      ] }
  ],
  judge: { prompt: "Why did the First War end in stalemate? Rank the factors.", factors: ["ip-1-fight", "ip-1-north", "ip-1-stale", "ip-1-cease"],
           notes_view: "Neither side could force victory; India lacked resources and political will; UN intervention and British officers commanding both armies helped the ceasefire." },
  historians: [],
  takeaways: [
    "Pakistani regulars reinforced Azad forces; the war stalemated by end-1947.",
    "India referred the dispute to the UNSC (1 Jan 1948).",
    "Ceasefire 1 Jan 1949; plebiscite never held."
  ]
});

L.push({
  id: "ip-un48", order: 8, level: 3, parent: "ip-war1", kind: "chain",
  title: "UNSC resolutions and UNCIP, 1948",
  question: "How effective was UN mediation in 1948–49?",
  intro: "The UNSC created a commission and proposed a withdrawal-then-plebiscite plan, but could persuade, not compel.",
  clusters: [
    { title: "Resolutions", summary: "38 → 39 → 47 → 51.",
      steps: [
        N("ip-u-38", "pol", "Res. 38 and 39", "17–20 Jan 1948", "Refrain from aggravation; a 3-member commission.", ["ip-res38-39"]),
        K("followed by", "No action until Res. 47."),
        N("ip-u-47", "pol", "Res. 47 and UNCIP", "21 Apr 1948", "Pakistan withdraws, India reduces forces, UN plebiscite.", ["ip-res47", "ip-w1-timeline-b"]),
        K("followed by", "Res. 51 sent the Commission to the disputed areas."),
        N("ip-u-51", "pol", "Res. 51", "3 Jun 1948", "Reaffirmed earlier resolutions.", ["ip-res47"]),
        K("followed by", "UNCIP proposed a two-part withdrawal."),
        N("ip-u-aug", "pol", "UNCIP Resolution", "13 Aug 1948", "Accepted by India, effectively rejected by Pakistan.", ["ip-res47"])
      ] },
    { link: "supports", how: "Weighing the UN's record.",
      title: "Effectiveness", summary: "Forum, not enforcer.",
      steps: [
        { split: [
          { h: "Achievements", steps: [
            N("ip-u-forum", "evid", "Forum and missions", "1948–49", "Peaceful forum; Res. 47 proposed a plebiscite; UNCIP formed UNMOGIP's nucleus.", ["ip-eval-unsc48", "ip-eval-uncip"])
          ] },
          { h: "Limitations", steps: [
            N("ip-u-limit", "evid", "Persuade, not compel", "1948–49", "Art. 2(1); UNCIP could only 'investigate and mediate'.", ["ip-eval-unsc48", "ip-eval-uncip"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "How effective was UN mediation in 1948–49? Weigh the evidence.", factors: ["ip-u-38", "ip-u-47", "ip-u-aug", "ip-u-forum", "ip-u-limit"],
           notes_view: "Gave an international forum and a proposed solution, but the UNSC could persuade not compel (Art. 2(1)); the plebiscite required mutual withdrawal neither side completed." },
  historians: [],
  takeaways: [
    "Res. 38/39 → Res. 47 (UNCIP; plebiscite plan) → Res. 51.",
    "UNCIP's two-part withdrawal: India accepted, Pakistan effectively rejected.",
    "Limited by sovereign equality — it could persuade, not compel."
  ]
});

L.push({
  id: "ip-karachi", order: 9, level: 3, parent: "ip-war1", kind: "chain",
  title: "Karachi Agreement and UNMOGIP, 1949",
  question: "How effective were the Karachi Agreement and UNMOGIP?",
  intro: "The ceasefire line and unarmed observers kept the peace for 17 years but left Kashmir's status unresolved.",
  clusters: [
    { title: "Ceasefire machinery", summary: "Observers and a line.",
      steps: [
        N("ip-k-unmogip", "pol", "UNMOGIP arrives", "Jan 1949", "Observe, gather information, report — no direct intervention.", ["unmogip"]),
        K("followed by", "The ceasefire line was fixed."),
        N("ip-k-line", "pol", "Karachi Agreement", "27 Jul 1949", "830 km line from Manawar to the glacier; disputes to UNCIP's Military Adviser.", ["ip-karachi", "ip-karachi-2"]),
        K("followed by", "UNMOGIP continued after UNCIP."),
        N("ip-k-91", "pol", "Res. 91", "30 Mar 1951", "UNMOGIP continued post-UNCIP.", ["unmogip"])
      ] },
    { link: "supports", how: "Weighing the record.",
      title: "Effectiveness", summary: "Peace without settlement.",
      steps: [
        { split: [
          { h: "Achievements", steps: [
            N("ip-k-peace", "evid", "17 years without full war", "1948–65", "Halted escalation; UN backing legitimised the line.", ["ip-eval-karachi", "ip-eval-unmogip"])
          ] },
          { h: "Limitations", steps: [
            N("ip-k-weak", "evid", "~45 unarmed observers", "1949–65", "Observation only; could not stop shelling.", ["ip-eval-unmogip"]),
            K("led to", "The core issue stayed open."),
            N("ip-k-unres", "res-", "Kashmir unresolved", "1965", "Failed to prevent renewed war.", ["ip-eval-karachi", "ip-eval-unmogip"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "How effective were Karachi and UNMOGIP? Weigh the evidence.", factors: ["ip-k-unmogip", "ip-k-line", "ip-k-peace", "ip-k-weak", "ip-k-unres"],
           notes_view: "Prevented full-scale war for 17 years (1948–1965) but left Kashmir's status unresolved — the classic 'ceasefire not settlement' evidence." },
  historians: [],
  takeaways: [
    "UNMOGIP observed and reported; Karachi fixed an 830 km line.",
    "Kept the peace 1948–65.",
    "Unarmed, ~45 observers, status unresolved — war resumed in 1965."
  ]
});

L.push({
  id: "ip-pleb", order: 10, level: 3, parent: "ip-war1", kind: "chain",
  title: "Plebiscite stalemate, 1949–1957",
  question: "Why was the plebiscite never held?",
  intro: "Each side demanded the other withdraw first, while India integrated its part of Kashmir.",
  clusters: [
    { title: "Stalemate", summary: "Who withdraws first.",
      steps: [
        N("ip-l-stale", "evt", "Withdrawal deadlock", "1949", "India: Pakistani forces out first; Pakistan: only if India withdrew too.", ["ip-plebiscite"]),
        K("enabled", "India claimed legal possession."),
        N("ip-l-legal", "int", "Legal possession claimed", "1949–57", "India denied the need for third-party mediation.", ["ip-plebiscite", "ip-w1-impact"])
      ] },
    { link: "followed by", how: "India integrated its part of Kashmir.",
      title: "Integration", summary: "1951 → 1957.",
      steps: [
        N("ip-l-1951", "pol", "NC wins; own constitution", "1951–52", "India's jurisdiction limited to foreign affairs, defence, communications; Delhi Accords.", ["ip-plebiscite"]),
        K("followed by", "Accession ratified."),
        N("ip-l-1954", "pol", "Accession ratified", "1954", "By the state's constituent assembly.", ["ip-timeline-a"]),
        K("followed by", "Kashmir treated as integral."),
        N("ip-l-1957", "res-", "State of J&K in the Union", "1957", "India treats Kashmir as integral.", ["ip-plebiscite", "ip-timeline-a"])
      ] },
    { link: "intensified", how: "Patronage would embolden both.",
      title: "Legacy", summary: "Toward 1965.",
      steps: [
        N("ip-l-patron", "res-", "Superpower patronage grows", "1950s", "Emboldened both to take risky action — setting the stage for 1965.", ["ip-w1-impact"], { go: "ip-cw" })
      ] }
  ],
  judge: { prompt: "Why did the plebiscite fail? Rank the factors.", factors: ["ip-l-stale", "ip-l-legal", "ip-l-1951", "ip-l-1957"],
           notes_view: "Mutual withdrawal conditions deadlocked; India claimed legal possession via the Instrument and integrated Kashmir. The unheld plebiscite connects all three wars." },
  historians: [ { who: "Ganguly", view: "The First War's four sources: competing ideologies, irredentism, strategic location, Britain's inadequate arrangements.", nodes: ["ip-l-legal"] } ],
  takeaways: [
    "Both agreed to a plebiscite in principle; neither would withdraw first.",
    "India integrated Kashmir: 1951 constitution, 1954 ratification, 1957 state.",
    "The unheld plebiscite connects all three wars."
  ]
});

L.push({
  id: "ip-cw", order: 11, level: 1, parent: "ip-top", kind: "causal",
  title: "Cold War alignments and 1962",
  question: "How did the superpowers and China reshape the conflict before 1965?",
  intro: "Pakistan joined US alliances; non-aligned India drifted toward Moscow; the 1962 war rebuilt India's army and drew Pakistan to China.",
  clusters: [
    { title: "Alignments", summary: "Two patrons.",
      steps: [
        { split: [
          { h: "US–Pakistan", steps: [
            N("ip-s-mdaa", "pol", "US alliance", "1954–55", "MDAA ~US$80m/year; SEATO and CENTO — part of the ring around the USSR.", ["ip-us-pak"])
          ] },
          { h: "USSR–India", steps: [
            N("ip-s-nam", "ctx", "Non-aligned India", "1961", "NAM founder; seen by the West as 'soft on communism'.", ["ip-us-pak"]),
            K("led to", "The US tilt pushed India toward Moscow."),
            N("ip-s-ussr", "pol", "Soviet backing", "1951–58", "Wheat (1951); Khrushchev recognised the accession (1955); 1958 veto.", ["ip-ussr-india"])
          ] }
        ] }
      ] },
    { link: "intensified", how: "The 1962 war changed the balance.",
      title: "The 1962 shock", summary: "Context only.",
      steps: [
        N("ip-s-1962", "ctx", "Sino-Indian War", "Oct–Nov 1962", "China took Aksai Chin and NEFA, then ceasefire.", ["ip-sinoindian"]),
        K("led to", "Two contrary effects."),
        { split: [
          { steps: [
            N("ip-s-mod", "res±", "Indian modernisation", "1962–71", "World's 3rd-largest military; aligned with USSR against China.", ["ip-sinoindian-sig"])
          ] },
          { steps: [
            N("ip-s-china", "res±", "Pakistan–China ties", "1963", "Border Treaty and trade agreements.", ["ip-sinoindian-sig"])
          ] }
        ] },
        K("led to", "Pakistan misjudged India's strength."),
        N("ip-s-miscalc", "res-", "Pakistan's miscalculation", "1965", "Believed India still weakened — triggered 1965.", ["ip-sinoindian-sig"], { go: "ip-1965" })
      ] }
  ],
  judge: { prompt: "How far did the Cold War cause the 1965 war? Weigh it.", factors: ["ip-s-mdaa", "ip-s-ussr", "ip-s-1962", "ip-s-miscalc"],
           notes_view: "The Cold War internationalised the dispute and patronage emboldened both sides; 1962 made India stronger, but Pakistan wrongly believed it still weakened." },
  historians: [],
  takeaways: [
    "Pakistan joined US-led alliances; India drifted toward the USSR.",
    "1962 rebuilt India's army and brought Pakistan closer to China.",
    "Pakistan wrongly thought India weak — helping trigger 1965."
  ]
});

L.push({
  id: "ip-1965", order: 12, level: 3, parent: "ip-cw", kind: "causal",
  title: "Why Pakistan went to war, 1965",
  question: "Why did Pakistan launch the Second War?",
  intro: "Other avenues seemed exhausted and India's build-up threatened to close the window, producing a 'now or never' mentality.",
  clusters: [
    { title: "Pressures", summary: "Window closing.",
      steps: [
        { row: [
          N("ip-m-talks", "stc", "Diplomacy exhausted", "1963–64", "Talks failed; great powers tiring; UNSC referral 1964.", ["ip-pak-motives", "ip-timeline-b"]),
          N("ip-m-integ", "stc", "Kashmir integrated", "1960s", "New Delhi dismantling special-status protections.", ["ip-pak-motives"]),
          N("ip-m-buildup", "stc", "Indian build-up", "post-1962", "Threatened to close Pakistan's window.", ["ip-pak-motives"])
        ] },
        K("intensified", "The Rann of Kutch seemed to confirm Indian weakness."),
        N("ip-m-kutch", "evt", "Rann of Kutch", "Apr 1965", "Pakistan seized posts; India retreated due to poor logistics.", ["ip-kutch"])
      ] },
    { link: "led to", how: "Rawalpindi gambled.",
      title: "Gamble", summary: "Now or never.",
      steps: [
        N("ip-m-now", "int", "'Now or never'", "1965", "Mistaken belief Indian morale was low; hope of Western intervention.", ["ip-kutch", "ip-pak-motives"], { go: "ip-war2" })
      ] }
  ],
  judge: { prompt: "Why did Pakistan go to war in 1965? Rank the factors.", factors: ["ip-m-talks", "ip-m-integ", "ip-m-buildup", "ip-m-kutch"],
           notes_view: "A strategic gamble based on miscalculation: diplomacy exhausted, Kashmir being integrated, India rearming — and the Rann of Kutch misread as low Indian morale." },
  historians: [ { who: "Schofield (2010)", view: "Pakistan hoped reactivating Kashmir through rebellion would oblige Western intervention, and believed Indian morale was low after the Rann of Kutch.", nodes: ["ip-m-kutch", "ip-m-now"] } ],
  takeaways: [
    "Diplomacy had failed and Kashmir was being integrated.",
    "India's build-up threatened to close the window.",
    "Rann of Kutch misread as low morale → 'now or never'."
  ]
});

L.push({
  id: "ip-war2", order: 13, level: 1, parent: "ip-top", kind: "chain",
  title: "The Second War, 1965",
  question: "How did the Second War develop and end?",
  intro: "Operation Gibraltar failed to spark a rising; India counter-attacked, Grand Slam stalled when India opened a Punjab front, and the war ended in stalemate.",
  clusters: [
    { title: "Outbreak", summary: "Gibraltar.",
      steps: [
        N("ip-2-gib", "trig", "Operation Gibraltar", "5 Aug 1965", "Infiltrators (Indian estimate 30,000–40,000) to incite an 'armed insurrection'.", ["gibraltar", "ip-w2-timeline-aug"]),
        K("undermined", "Locals did not rise."),
        N("ip-2-fail", "res-", "No uprising", "Aug 1965", "Locals reticent; infiltrators detected.", ["gibraltar", "ip-consol-w2"])
      ] },
    { link: "provoked response", how: "India counter-attacked across the ceasefire line.",
      title: "Escalation", summary: "Haji Pir to Punjab.",
      steps: [
        N("ip-2-hajipir", "evt", "Haji Pir Pass taken", "15 Aug–late Aug", "Infiltrators' supply route; Independence Day victory.", ["ip-grandslam", "ip-w2-timeline-aug"]),
        K("provoked response", "Pakistan tried to contain the fallout."),
        N("ip-2-slam", "evt", "Operation Grand Slam", "1 Sep 1965", "Targeted the Akhnoor Bridge; Jaurian captured 5 Sep.", ["ip-grandslam", "ip-w2-timeline-sep"]),
        K("provoked response", "India opened a new front."),
        N("ip-2-punjab", "tp", "Punjab front", "6 Sep 1965", "Attacks toward Lahore and Sialkot forced withdrawal from Akhnur.", ["ip-grandslam", "ip-w2-timeline-sep"])
      ] },
    { link: "led to", how: "Neither side could win.",
      title: "End", summary: "Stalemate and cost.",
      steps: [
        N("ip-2-stale", "res±", "Stalemate; ceasefire", "21–22 Sep 1965", "Largest tank battle since WWII; Res. 211.", ["ip-w2-timeline-sep", "ip-w2-cost"]),
        K("provoked response", "Outside powers and the UN pressed for peace."),
        { row: [
          N("ip-2-powers", "act", "Superpowers and others", "Sep 1965", "US embargo; Soviet good offices; China's ultimatum.", ["ip-eval-sp65"], { go: "ip-powers65" }),
          N("ip-2-un", "pol", "UN resolutions", "Sep 1965", "Res. 209 → 210 → 211; UNIPOM.", ["ip-res209-211"], { go: "ip-un65" })
        ] }
      ] }
  ],
  judge: { prompt: "Why did the Second War end in stalemate? Rank the factors.", factors: ["ip-2-fail", "ip-2-hajipir", "ip-2-punjab", "ip-2-stale"],
           notes_view: "Clear evidence of Pakistan triggering the outbreak; the failed uprising and India's Punjab front stalled it; the war ended in stalemate without resolving Kashmir." },
  historians: [],
  takeaways: [
    "Gibraltar (5 Aug) failed to spark a rising.",
    "India took Haji Pir; Grand Slam stalled when India opened a Punjab front.",
    "Costly stalemate; ceasefire 21–22 Sep."
  ]
});

L.push({
  id: "ip-powers65", order: 14, level: 3, parent: "ip-war2", kind: "causal",
  title: "Superpowers and others in 1965",
  question: "How far did outside powers end the 1965 war?",
  intro: "Both superpowers wanted the war ended quickly to keep China out; military exhaustion after the embargo mattered more than mediation.",
  clusters: [
    { title: "Pressure", summary: "Embargo and good offices.",
      steps: [
        { split: [
          { h: "US", steps: [
            N("ip-p5-embargo", "pol", "Arms embargo on both", "Sep 1965", "A major blow to Pakistan; Rusk backed UN action.", ["ip-us-1965"])
          ] },
          { h: "USSR", steps: [
            N("ip-p5-obstruct", "act", "Early obstruction", "late Aug 1965", "Opposed UNSC involvement, tilting to India.", ["ip-ussr-1965"]),
            K("followed by", "Kosygin offered good offices."),
            N("ip-p5-kosygin", "pol", "Kosygin's offers", "4–17 Sep 1965", "Third offer led to Tashkent.", ["ip-ussr-1965"], { go: "ip-tashkent" })
          ] },
          { h: "Others", steps: [
            N("ip-p5-china", "act", "China's ultimatum", "18 Sep 1965", "India to dismantle works on the Sikkim border.", ["ip-others-1965"]),
            K("followed by", "Others urged peace."),
            N("ip-p5-others", "act", "UK, Turkey, Iran, NAM", "Sep 1965", "Ceasefire appeals; troop offers for a UN force.", ["ip-others-1965"])
          ] }
        ] }
      ] },
    { link: "supports", how: "Weighing their role.",
      title: "Effectiveness", summary: "Exhaustion mattered more.",
      steps: [
        N("ip-p5-motive", "int", "Self-interested motives", "1965", "Keep China out; avoid superpower confrontation.", ["ip-us-1965", "ip-ussr-1965"]),
        K("contradicts", "Pressure helped but was not decisive."),
        N("ip-p5-verdict", "judg", "Exhaustion was decisive", "1965", "Mediation built trust, but Pakistan's exhaustion after the embargo mattered more.", ["ip-eval-sp65"])
      ] }
  ],
  judge: { prompt: "How far did the superpowers end the 1965 war? Weigh the evidence.", factors: ["ip-p5-embargo", "ip-p5-kosygin", "ip-p5-china", "ip-p5-motive"],
           notes_view: "Superpower motives were self-interested — chiefly excluding China; military exhaustion after the embargo mattered more than mediation." },
  historians: [],
  takeaways: [
    "US embargoed both; USSR moved from obstruction to good offices.",
    "China threatened India; others urged peace.",
    "Motive: exclude China; exhaustion mattered more than mediation."
  ]
});

L.push({
  id: "ip-un65", order: 15, level: 3, parent: "ip-war2", kind: "chain",
  title: "U Thant, Res. 211 and UNIPOM",
  question: "How effective was the UN in 1965?",
  intro: "U Thant's personal mediation failed; escalating resolutions culminating in Res. 211 secured a ceasefire, supervised by an undermanned UNIPOM.",
  clusters: [
    { title: "Mediation", summary: "Secretary-General.",
      steps: [
        N("ip-n-thant", "pol", "U Thant's mission", "31 Aug–15 Sep 1965", "Warned the Council; visited both capitals.", ["ip-uthant"]),
        K("undermined", "Both sides attached conditions."),
        N("ip-n-fail", "res-", "Appeals rejected", "12–14 Sep 1965", "SG lacked authority to give undertakings.", ["ip-uthant", "ip-eval-sg"])
      ] },
    { link: "followed by", how: "The Council escalated.",
      title: "Resolutions", summary: "209 → 210 → 211.",
      steps: [
        N("ip-n-209", "pol", "Res. 209 and 210", "4–6 Sep 1965", "209 ignored — 'a scrap of paper'; 210 widened the SG's mandate.", ["ip-res209-211"]),
        K("followed by", "Major-power unity produced a firmer demand."),
        N("ip-n-211", "tp", "Res. 211", "20 Sep 1965", "Ceasefire effective 22 Sep 0700 GMT.", ["ip-res209-211", "ip-eval-unsc65"]),
        K("led to", "UNIPOM supervised it."),
        N("ip-n-unipom", "pol", "UNIPOM", "23 Sep 1965", "~90 observers beyond the J&K line.", ["ip-unipom"])
      ] },
    { link: "supports", how: "Weighing the record.",
      title: "Effectiveness", summary: "Firmer, still toothless.",
      steps: [
        { split: [
          { h: "Achievements", steps: [
            N("ip-n-good", "evid", "Swift, pivotal", "1965–66", "Res. 211 pivotal; UNIPOM deployed the day the ceasefire took effect.", ["ip-eval-unsc65", "ip-eval-unipom", "ip-eval-sg"])
          ] },
          { h: "Limitations", steps: [
            N("ip-n-bad", "evid", "Unenforceable, undermanned", "1965–66", "Art. 2(1); ≤100 officers for 1,000+ miles.", ["ip-eval-unsc65", "ip-eval-unipom"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "How effective was the UN in 1965? Weigh the evidence.", factors: ["ip-n-thant", "ip-n-209", "ip-n-211", "ip-n-unipom", "ip-n-bad"],
           notes_view: "Firmer UN action backed by rare major-power unity, yet still unable to compel compliance (Art. 2(1)) and badly under-resourced." },
  historians: [],
  takeaways: [
    "U Thant's appeals failed; Res. 209 was ignored.",
    "Res. 211 (20 Sep) secured the ceasefire; UNIPOM supervised it.",
    "Could not compel; UNIPOM under-resourced."
  ]
});

L.push({
  id: "ip-tashkent", order: 16, level: 3, parent: "ip-war2", kind: "chain",
  title: "Tashkent and its aftermath, 1966",
  question: "How significant was the Tashkent Declaration?",
  intro: "Soviet-mediated, it restored pre-war positions and renounced force, but left Kashmir unresolved and bitterness on both sides.",
  clusters: [
    { title: "Declaration", summary: "Kosygin mediates.",
      steps: [
        N("ip-d-sign", "pol", "Tashkent Declaration", "10 Jan 1966", "Shastri and Ayub Khan; renounce force; pre-5 Aug positions by 25 Feb.", ["tashkent", "ip-timeline-b"]),
        K("followed by", "Further pledges normalised ties."),
        N("ip-d-pledge", "pol", "Further pledges", "Jan 1966", "High commissioners restored; POWs repatriated; trade ties considered.", ["ip-tashkent-2"])
      ] },
    { link: "supports", how: "Weighing it.",
      title: "Effectiveness", summary: "Little substance.",
      steps: [
        { split: [
          { h: "Achievements", steps: [
            N("ip-d-good", "evid", "De-escalation", "1966", "Non-use of force precedent; withdrawal by end-March.", ["ip-eval-tashkent"])
          ] },
          { h: "Limitations", steps: [
            N("ip-d-bad", "evid", "No war aims won", "1966", "Pakistan gained nothing; student riots after Ayub returned.", ["ip-eval-tashkent"])
          ] }
        ] }
      ] },
    { link: "led to", how: "The war's impact reshaped alignments.",
      title: "Impact", summary: "Toward 1971.",
      steps: [
        { split: [
          { h: "India", steps: [
            N("ip-d-india", "res±", "Closer to the USSR", "1965–71", "Saw US policy as biased; defence spending rose.", ["ip-w2-impact"])
          ] },
          { h: "Pakistan", steps: [
            N("ip-d-pak", "res-", "Turn to China; East resents", "1965–71", "Backlash vs Ayub; East Pakistan felt unprotected.", ["ip-w2-impact"], { go: "ip-bangla" })
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "How significant was Tashkent? Weigh the evidence.", factors: ["ip-d-sign", "ip-d-pledge", "ip-d-good", "ip-d-bad"],
           notes_view: "Enshrined non-use of force but had limited substantive significance — Kashmir's status remained unresolved." },
  historians: [],
  takeaways: [
    "Pre-war positions by 25 Feb 1966; force renounced.",
    "Pakistan won none of its war aims; riots followed.",
    "India moved toward the USSR; Pakistan toward China; East Pakistan resented."
  ]
});

L.push({
  id: "ip-bangla", order: 17, level: 1, parent: "ip-top", kind: "chain",
  title: "East Pakistan to Bangladesh, 1966–71",
  question: "How did Pakistan's internal crisis lead to the 1971 war?",
  intro: "West Pakistan failed to accommodate the East; the blocked 1970 election, repression and India's backing led to war.",
  clusters: [
    { title: "Dissatisfaction", summary: "Unravelling.",
      steps: [
        N("ip-b-div", "ltc", "Divided Pakistan", "1947–71", "Shared Islam; differed in language and culture; gross economic disparities.", ["bangladesh"]),
        K("intensified", "1965 left the East feeling exposed."),
        N("ip-b-1965", "stc", "A 'West Pakistani cause'", "1966–71", "East made 'needlessly vulnerable' over Kashmir.", ["ip-eastpak"])
      ] },
    { link: "triggered", how: "The 1970 result was blocked.",
      title: "Crisis", summary: "Election to exodus.",
      steps: [
        N("ip-b-1970", "trig", "1970 election blocked", "1970–71", "Awami League won 167 of 169 seats; Army and Bhutto blocked it; Mujib jailed.", ["bangladesh"]),
        K("provoked response", "Protests were brutally crushed."),
        N("ip-b-indep", "evt", "Independence declared", "27 Mar 1971", "Ziaur Rahman; Indira Gandhi's full support.", ["ip-india-1971", "bangladesh"]),
        K("led to", "Refugees flooded India."),
        N("ip-b-refugee", "res-", "~10 million refugees", "1971", "Camps used to train the Mukti Bahini.", ["ip-india-1971"])
      ] },
    { link: "enabled", how: "India prepared diplomatically.",
      title: "Indian diplomacy", summary: "Blocking the UNSC.",
      steps: [
        N("ip-b-dip", "pol", "UNSC action blocked", "autumn 1971", "UK and French cooperation; Soviet veto of the US resolution.", ["ip-india-1971"], { go: "ip-powers71" }),
        K("followed by", "Pakistan struck first."),
        N("ip-b-war", "trig", "Operation Chengiz Khan", "3 Dec 1971", "Pre-emptive air strikes.", ["ip-chengiz"], { go: "ip-war3" })
      ] }
  ],
  judge: { prompt: "What caused the 1971 war? Rank the factors.", factors: ["ip-b-div", "ip-b-1965", "ip-b-1970", "ip-b-refugee", "ip-b-dip"],
           notes_view: "The 1971 war arose from Pakistan's internal crisis and India's intervention — the unravelling of Pakistan's raison d'être." },
  historians: [ { who: "Ganguly (1998)", view: "Post-1965 developments represent 'the unravelling of the fabric of Pakistan's Islamic ideology, the very raison d'etre'.", nodes: ["ip-b-1965"] } ],
  takeaways: [
    "West Pakistan failed to accommodate the East.",
    "The blocked 1970 election and repression drove ~10 million refugees to India.",
    "India backed the Mukti Bahini and blocked UNSC action."
  ]
});

L.push({
  id: "ip-war3", order: 18, level: 3, parent: "ip-bangla", kind: "chain",
  title: "The Third War, December 1971",
  question: "How did the Third War unfold, and what did it change?",
  intro: "Pakistan's air strikes brought India formally in; in 13 days Pakistan's Eastern Command surrendered and Bangladesh was formed.",
  clusters: [
    { title: "War", summary: "13 days.",
      steps: [
        N("ip-3-chengiz", "trig", "Chengiz Khan", "3 Dec 1971", "Strikes on eight Indian air stations; ground attacks in Kashmir and Punjab.", ["ip-chengiz", "ip-w3-timeline"]),
        K("provoked response", "India declared war."),
        N("ip-3-iaf", "evt", "Indian counterattack", "4 Dec 1971", "IAF hit Peshawar and Karachi; air superiority.", ["ip-w3-timeline", "ip-consol-w3"]),
        K("led to", "Pakistan's eastern forces collapsed."),
        N("ip-3-dhaka", "tp", "Surrender in Dhaka", "16 Dec 1971", "Bangladesh formed; Indian ceasefire 17 Dec.", ["ip-w3-timeline", "ip-chengiz"])
      ] },
    { link: "led to", how: "The defeat changed the region.",
      title: "Outcomes", summary: "Asymmetry.",
      steps: [
        { split: [
          { steps: [
            N("ip-3-human", "res-", "Human cost", "1971", "~93,000 POWs; 300,000–3,000,000 civilians killed.", ["ip-w3-consequences"])
          ] },
          { steps: [
            N("ip-3-raison", "res-", "Raison d'être undermined", "1971", "Bangladesh challenged the single Muslim homeland.", ["ip-w3-outcomes"])
          ] },
          { steps: [
            N("ip-3-asym", "res±", "Power asymmetry", "1971–89", "Pakistan unable to challenge the Kashmir status quo.", ["ip-w3-outcomes", "ip-consol-w3"], { go: "ip-simla" })
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "How significant was the Third War? Rank its outcomes.", factors: ["ip-3-dhaka", "ip-3-human", "ip-3-raison", "ip-3-asym"],
           notes_view: "Comprehensive Pakistani defeat created a power asymmetry and undermined the idea of Pakistan as a single Muslim homeland." },
  historians: [],
  takeaways: [
    "Chengiz Khan (3 Dec) brought India in; Dhaka surrendered 16 Dec.",
    "~93,000 POWs; huge civilian toll.",
    "Bangladesh undermined Pakistan's rationale; asymmetry froze Kashmir."
  ]
});

L.push({
  id: "ip-powers71", order: 19, level: 3, parent: "ip-bangla", kind: "causal",
  title: "Superpowers and China in 1971",
  question: "Did the superpowers restrain or embolden the combatants in 1971?",
  intro: "Rival blocs formed — the US and China behind Pakistan, the USSR behind India — and Cold War rivalry paralysed the UNSC.",
  clusters: [
    { title: "Blocs", summary: "Two camps.",
      steps: [
        { split: [
          { h: "US and China", steps: [
            N("ip-q-nixon", "pol", "Nixon backs Pakistan", "1971", "Feared Soviet expansion; routed arms via Jordan and Iran.", ["ip-us-1971"]),
            K("enabled", "Courting Beijing shaped US policy."),
            N("ip-q-china", "act", "China's limited aid", "1971", "Lesser-quality aid; no military intervention.", ["ip-china-1971"])
          ] },
          { h: "USSR", steps: [
            N("ip-q-treaty", "pol", "Indo-Soviet Treaty", "9 Aug 1971", "20 years; arms worth ~$730 million.", ["ip-ussr-1971"]),
            K("prevented", "Soviet vetoes blocked UN peace moves."),
            N("ip-q-veto", "res-", "UNSC paralysed", "Dec 1971", "Every peace resolution blocked until East Pakistan fell.", ["ip-ussr-1971", "ip-eval-71"])
          ] }
        ] }
      ] },
    { link: "intensified", how: "Both made naval shows of force.",
      title: "Brinkmanship", summary: "Bay of Bengal.",
      steps: [
        N("ip-q-ent", "evt", "USS Enterprise", "11 Dec 1971", "India saw a nuclear threat; Soviet ships and a submarine followed.", ["ip-enterprise"]),
        K("supports", "Patrons emboldened, not restrained."),
        N("ip-q-verdict", "judg", "Not neutral mediators", "1971", "Rivalry emboldened allies to escalate.", ["ip-eval-71"])
      ] }
  ],
  judge: { prompt: "Did the superpowers restrain or embolden the combatants? Weigh the evidence.", factors: ["ip-q-nixon", "ip-q-treaty", "ip-q-veto", "ip-q-ent"],
           notes_view: "Superpowers were not neutral mediators: Cold War rivalry emboldened allies to escalate and paralysed the UNSC (Mahmood's three Soviet motives)." },
  historians: [ { who: "Mahmood", view: "The USSR backed Bangladesh's independence to strengthen India against China, pursue Indian Ocean naval bases, and gain a South Asian foothold.", nodes: ["ip-q-treaty"] } ],
  takeaways: [
    "US and China behind Pakistan; USSR behind India.",
    "USS Enterprise and Soviet ships in the Bay of Bengal.",
    "Rivalry emboldened escalation and paralysed the UNSC."
  ]
});

L.push({
  id: "ip-simla", order: 20, level: 3, parent: "ip-bangla", kind: "chain",
  title: "Simla and after, 1972–1989",
  question: "How effective was the Simla Agreement?",
  intro: "Simla made Kashmir bilateral and fixed the LoC, bringing relative peace — but no mechanism for a settlement, so the dispute re-emerged in 1989.",
  clusters: [
    { title: "Agreement", summary: "Bilateralism.",
      steps: [
        N("ip-z-simla", "pol", "Simla Agreement", "2 Jul 1972", "Pakistan recognised Bangladesh; India returned territory and 93,000 POWs.", ["simla"]),
        K("led to", "Third parties were excluded."),
        N("ip-z-bilat", "res±", "Bilateral only; LoC", "1972", "1948 and 1971 lines recognised as the LoC.", ["simla", "ip-eval-71"]),
        K("undermined", "UNMOGIP's role was disputed."),
        N("ip-z-unmogip", "res-", "UNMOGIP mandate disputed", "1972 onward", "India: lapsed; no complaints since Jan 1972. Pakistan still complains.", ["ip-unmogip-simla"])
      ] },
    { link: "supports", how: "Weighing Simla.",
      title: "Effectiveness", summary: "Peace without settlement.",
      steps: [
        { split: [
          { h: "Achievements", steps: [
            N("ip-z-good", "evid", "Relative peace", "1972 onward", "POWs repatriated; missions reopened; LoC reaffirmed.", ["ip-eval-71", "simla"])
          ] },
          { h: "Limitations", steps: [
            N("ip-z-bad", "evid", "No mechanism", "1972", "No timeline, no enforcement for LoC violations.", ["ip-eval-71"])
          ] }
        ] },
        K("led to", "Clumsy policy revived the dispute."),
        N("ip-z-1989", "res-", "1989 insurgency", "Dec 1989", "After 'extraordinary clumsiness' from 1984; symptoms treated, not the cause.", ["ip-epilogue"])
      ] }
  ],
  judge: { prompt: "How effective was Simla? Weigh the evidence.", factors: ["ip-z-simla", "ip-z-bilat", "ip-z-good", "ip-z-bad", "ip-z-1989"],
           notes_view: "Brought a longer period of relative peace but no mechanism or timeline for Kashmir — which re-emerged as the 1989 insurgency (Ganguly, 2001)." },
  historians: [ { who: "Ganguly (2001)", view: "Uneven Indian policy after 1984 culminated in the 1989 insurgency.", nodes: ["ip-z-1989"] } ],
  takeaways: [
    "Simla: Bangladesh recognised, POWs returned, LoC fixed, bilateral talks only.",
    "UNMOGIP's mandate disputed by India.",
    "No mechanism for Kashmir → 1989 insurgency."
  ]
});

L.push({
  id: "ip-actors", order: 21, level: 1, parent: "ip-top", kind: "matrix",
  title: "Actors and management across three wars",
  question: "How did the role of each actor change, 1947–1972?",
  intro: "The macro-organiser and conflict-management grid from the notes.",
  matrix: {
    cols: ["1947–49", "1965–66", "1971–72"],
    rows: [
      { h: "India", cells: ["Airlifts troops; UNSC referral", "Counter-attacks; Punjab front", "Backs Mukti Bahini; unilateral ceasefire"] },
      { h: "Pakistan", cells: ["Backs tribal invasion", "Gibraltar → Grand Slam", "Chengiz Khan; surrender in Dhaka"] },
      { h: "Kashmir", cells: ["Maharaja accedes under duress", "Populace refuses to rise", "LoC reaffirmed at Simla"] },
      { h: "Superpowers", cells: ["Limited direct role", "US embargo; USSR at Tashkent", "Bloc alignment; USS Enterprise"] },
      { h: "UN", cells: ["Res. 38/39/47/51; UNCIP; UNMOGIP", "Res. 209–211; UNIPOM", "Paralysed by Soviet veto"] },
      { h: "Diplomacy", cells: ["Karachi: line, no status", "Tashkent: pre-war positions", "Simla: bilateral only"] },
      { h: "Unresolved", cells: ["Plebiscite never held", "East Pakistani resentment", "Kashmir; 1989 insurgency"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "Superpowers: minimal (1947) → self-interested mediation (1965) → bloc alignment (1971).",
    "UN: limited machinery → firmer but unenforceable → paralysis.",
    "The unheld plebiscite connects all three wars."
  ]
});

L.push({
  id: "ip-arg", order: 22, level: 1, parent: "ip-top", kind: "argument",
  title: "Was conflict management effective?",
  question: "'Attempts to manage the Indo-Pakistani conflict were effective.' How far do you agree?",
  intro: "Weigh tactical success in ending each war against strategic failure to settle Kashmir.",
  clusters: [
    { title: "Claim", summary: "Management effective.",
      steps: [ N("ip-x-claim", "judg", "Management was effective", null, "Attempts to manage the conflict were effective.", ["ip-essay-phase"]) ] },
    { link: "supports", how: "Test the claim.",
      title: "For and against", summary: "Tactical vs strategic.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("ip-x-agree", "evid", "Each war ended by agreement", "1949–72", "Karachi, Tashkent, Simla halted fighting and set ceasefire lines.", ["ip-eval-diplomacy"]),
            K("supports", "Observers kept wars rare."),
            N("ip-x-pk", "evid", "Only three wars in 25 years", "1947–72", "UNMOGIP and UNIPOM despite chronic tension.", ["ip-eval-peacekeeping"]),
            K("supports", "Superpowers sped endings."),
            N("ip-x-sp", "evid", "Superpower pressure", "1965", "Embargoes and Tashkent ended wars faster than the UN alone.", ["ip-eval-superpowers"])
          ] },
          { h: "Against", steps: [
            N("ip-x-sov", "evid", "Sovereignty never addressed", "1949–72", "Ceasefires held only until the next window; exhaustion, not reconciliation.", ["ip-eval-diplomacy"]),
            K("contradicts", "The UN lacked teeth."),
            N("ip-x-tooth", "evid", "Toothless, under-resourced", "1949–71", "Unarmed observers; Art. 2(1); Soviet veto in 1971.", ["ip-eval-peacekeeping"]),
            K("contradicts", "Patrons emboldened escalation."),
            N("ip-x-patron", "evid", "Patronage emboldened both", "1965–71", "Arms and alliances; motives rarely altruistic.", ["ip-eval-superpowers"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both.",
      title: "Judgement", summary: "Pauses, not settlements.",
      steps: [ N("ip-x-judge", "judg", "Tactically effective only", null, "Ended hostilities and set lines, but each ceasefire was a pause — explaining recurrence (1947 → 1965 → 1971 → 1989).", ["ip-verdict", "ip-essay-lens"]) ] }
  ],
  judge: { prompt: "How effective was conflict management? Rank the evidence.", factors: ["ip-x-agree", "ip-x-pk", "ip-x-sp", "ip-x-sov", "ip-x-tooth", "ip-x-patron"],
           notes_view: "Reasonably effective at the tactical level (ended hostilities, set ceasefire lines, withdrawals and POW exchanges); largely ineffective at the strategic level — none resolved Kashmir's sovereignty." },
  historians: [],
  takeaways: [
    "For: agreements ended each war; only three wars; superpowers sped endings.",
    "Against: sovereignty unaddressed; UN toothless; patronage emboldened escalation.",
    "Best answer: tactically effective, strategically not."
  ]
});
})();
