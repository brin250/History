// v2 flow charts: Inter-state tensions in SEA — Konfrontasi, Sabah, Third Indochina War, Preah Vihear (cards in data/it.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).it = window.FLOWS2.it || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "it-top", order: 1, level: 0, kind: "causal",
  title: "Inter-state tensions in Southeast Asia",
  question: "What caused inter-state tensions in SEA — structural factors or triggers and leaders — and with what consequences?",
  intro: "Underlying factors made some pairs of states prone to clash; triggers and leaders explain when. Four cases: Konfrontasi, Sabah, the Third Indochina War, Preah Vihear.",
  clusters: [
    { title: "The framework", summary: "Underlying vs immediate; leaders.",
      steps: [
        N("it-t-frame", "ctx", "Underlying vs immediate factors", null, "Six structural causes explain propensity; triggers explain timing; 'statesmen' decide.", ["it-underlying-immediate", "it-leaders"], { go: "it-framework" })
      ] },
    { link: "supports", how: "Four case studies test the framework.",
      title: "The four cases", summary: "Konfrontasi, Sabah, Third Indochina War, Preah Vihear.",
      steps: [
        { split: [
          { h: "Konfrontasi", steps: [
            N("it-t-konf1", "ltc", "Why Konfrontasi", "1950–63", "Superiority complex, West Irian success, the Brunei Revolt.", ["konfrontasi", "it-west-irian", "bruneirevolt"], { go: "it-konf-causes" }),
            K("led to", "Indonesia declared confrontation and fought until Sukarno fell."),
            N("it-t-konf2", "evt", "Course and end", "1963–67", "Raids and bombing; ended by Suharto's rise.", ["it-konf-escalation", "it-konf-resolution"], { go: "it-konf-course" })
          ] },
          { h: "Sabah", steps: [
            N("it-t-sabah1", "ltc", "The claim", "1878–1966", "Ambiguous 1878 pajakan; Macapagal's 1962 claim.", ["sabah", "it-macapagal"], { go: "it-sabah-claim" }),
            K("intensified", "Marcos revived and inflamed the claim."),
            N("it-t-sabah2", "evt", "Marcos years", "1968–80", "Corregidor, 1968–69 rupture, Moro rebels.", ["corregidor", "sabahmindanao"], { go: "it-sabah-marcos" }),
            K("followed by", "New leaders held it in abeyance."),
            N("it-t-sabah3", "pol", "Held in abeyance", "1986–2013", "Ramos–Mahathir shelving; Lahad Datu.", ["it-sabah-abeyance", "it-lahad-datu"], { go: "it-sabah-manage" })
          ] },
          { h: "Third Indochina War", steps: [
            N("it-t-tiw1", "ltc", "Vietnam–Kampuchea roots", "1620s–1978", "Superiority, expansionism, Khmer Rouge attacks.", ["it-viet-superiority", "it-viet-security"], { go: "it-tiw-roots" }),
            K("intensified", "Great-power rivalry raised the stakes."),
            N("it-t-tiw2", "stc", "Sino-Soviet layer", "1968–78", "Sino-Vietnamese split; Soviet treaty 'green light'.", ["sinoviet79", "it-soviet-treaty"], { go: "it-tiw-sino" }),
            K("led to", "Vietnam invaded; China struck back."),
            N("it-t-tiw3", "tp", "Invasion and border war", "1978–79", "25 Dec 1978 invasion; Feb 1979 Chinese attack.", ["it-invasion-1978", "it-china-war"], { go: "it-tiw-war" }),
            K("followed by", "Thailand and Vietnam later reconciled."),
            N("it-t-tiw4", "res±", "Thailand–Vietnam", "1979–95", "Frontline hostility, then rapprochement.", ["it-thai-viet", "it-thai-viet-thaw"], { go: "it-thaiviet" })
          ] },
          { h: "Preah Vihear", steps: [
            N("it-t-pv1", "ltc", "Roots of the dispute", "1904–1959", "Treaty vs map; Phibun's myth; 1954 occupation; Cold War suspicion.", ["pv-1904-1907", "pv-phibun-1941", "pv-1953"], { go: "it-pv-causes" }),
            K("led to", "Sihanouk took the dispute to the ICJ."),
            N("it-t-pv2", "evt", "Height of the dispute", "1958–62", "Thai nationalist fury; relations broken twice.", ["pv-icj-why", "pv-thai-public", "pv-relations"], { go: "it-pv-crisis" }),
            K("followed by", "The ICJ ruled; the dispute persisted."),
            N("it-t-pv3", "res±", "ICJ ruling and after", "1962–2011", "Cambodia wins; Thailand complies; 4.6 km² unsettled.", ["pv-verdict", "pv-compliance", "pv-limits"], { go: "it-pv-manage" })
          ] }
        ] }
      ] },
    { link: "supports", how: "Comparing the cases shows the patterns.",
      title: "Comparison and verdict", summary: "Leaders vs structure.",
      steps: [
        N("it-t-compare", "int", "Comparing the cases", null, "Causes and resolution across all three cases.", ["it-compare-causes-1", "it-compare-resolution"], { go: "it-compare" }),
        K("supports", "The comparison points to leaders as decisive in timing and resolution."),
        N("it-t-verdict", "judg", "Structure sets propensity; leaders decide", null, "De-escalation tracked a change of leader, not of the structural facts.", ["it-links-1", "it-consequences"], { go: "it-arg" })
      ] }
  ],
  judge: { prompt: "Which factor best explains inter-state tension in SEA? Rank them.",
           factors: ["it-t-konf1", "it-t-sabah2", "it-t-tiw1", "it-t-tiw2", "it-t-pv1"],
           notes_view: "Underlying factors explain propensity, immediate factors the timing; leaders matter separately ('States do not make policies, statesmen do') — de-escalation tracked leadership change." },
  historians: [],
  takeaways: [
    "Underlying factors (animosity, colonial borders, ethnicity, ideology, borders, economics) explain propensity; triggers explain timing.",
    "Leaders externalised domestic discontent (Sukarno, Marcos); resolution came with leadership change.",
    "Peacefully managed disputes barely hurt ASEAN; spats and wars were deleterious."
  ]
});

L.push({
  id: "it-framework", order: 2, level: 1, parent: "it-top", kind: "causal",
  title: "Framework: causes and consequences",
  question: "How should causes and consequences of inter-state tension be analysed?",
  intro: "Six underlying causes create propensity; immediate triggers and leaders explain outbreaks; outcomes depend on whether tension is managed peacefully.",
  clusters: [
    { title: "Six underlying causes", summary: "Why some pairs clash.",
      steps: [
        { row: [
          N("it-f-hist", "ltc", "Historical animosities", null, "Past subjugation is most deeply imprinted on national memory.", ["it-hist-animosity"]),
          N("it-f-col", "ltc", "Colonial legacy", null, "Vague treaties (1878 Sabah term) give overlapping claims; borders split ethnic communities.", ["it-colonial-legacy"]),
          N("it-f-eth", "ltc", "Ethnic-religious rifts", null, "Largely primordial; no SEA tension broke out purely over them.", ["it-ethnic-religious"]),
          N("it-f-ideo", "ltc", "Ideology", null, "Systems and leaders' worldviews (Sukarno); also bonds (anti-communism, 1967).", ["it-ideology"]),
          N("it-f-border", "ltc", "Borders and economics", null, "Border infringements read as threats; economics matters most in the SCS.", ["it-borders-econ"])
        ] },
        K("led to", "These create a propensity for tension between particular states."),
        N("it-f-prop", "int", "Propensity for tension", null, "Explains why some pairs are prone to clash, independent of any trigger.", ["it-underlying-immediate"])
      ] },
    { link: "triggered", how: "Specific events turn propensity into open disputes.",
      title: "Triggers and leaders", summary: "Why now, and who decided.",
      steps: [
        { row: [
          N("it-f-imm", "trig", "Immediate factors", null, "Explain why tension escalated at a specific point in time.", ["it-underlying-immediate"]),
          N("it-f-lead", "act", "Leaders", null, "'States do not make policies, statesmen do' — Suharto, LKY, Tunku, Mahathir.", ["it-leaders"])
        ] },
        K("supports", "Sources must be read against the context leaders faced."),
        N("it-f-ctx", "ctx", "Four-part context check", null, "Pattern of interaction; domestic challenges; immediate bilateral issues; geopolitics (Cold War, 1975).", ["it-source-context"])
      ] },
    { link: "led to", how: "How tension was handled decided its consequences.",
      title: "Consequences", summary: "Managed vs fought.",
      steps: [
        { split: [
          { h: "Managed peacefully", steps: [ N("it-f-peace", "res+", "Minimal harm to cooperation", null, "ASEAN Way conflict avoidance or definitive resolution: minimal or even beneficial effect.", ["it-consequences"]) ] },
          { h: "Spats or war", steps: [ N("it-f-war", "res-", "Deleterious to cooperation", null, "Diplomatic spats and armed conflict damaged regional cooperation.", ["it-consequences"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "Which underlying cause matters most across SEA tensions? Rank them.",
           factors: ["it-f-hist", "it-f-col", "it-f-eth", "it-f-ideo", "it-f-border"],
           notes_view: "A strong answer shows both the deep structural reason and the proximate trigger; ethnic-religious rifts never caused a dispute alone, and a shared border alone cannot explain tension." },
  historians: [ { who: "William J. Duiker", view: "The border dispute alone could have been resolved without violence; behind it lay Cambodian fear of Vietnamese domination.", nodes: ["it-f-imm"] } ],
  takeaways: [
    "Six underlying causes: animosity, colonial legacy, ethnic-religious rifts, ideology, borders/security, economics.",
    "Immediate factors explain timing; leaders decide ('statesmen do').",
    "Peacefully managed disputes barely hurt cooperation; spats and war were deleterious."
  ]
});

L.push({
  id: "it-konf-causes", order: 3, level: 3, parent: "it-top", kind: "causal",
  title: "Causes of Konfrontasi, 1963",
  question: "Why did Indonesia launch Konfrontasi against Malaysia in 1963?",
  intro: "A long-nursed superiority complex, emboldened by victory over West Irian and triggered by the Brunei Revolt, combined with ideological and domestic motives.",
  clusters: [
    { title: "Superiority complex", summary: "Indonesia as 'first among equals'.",
      steps: [
        { row: [
          N("it-k-size", "ltc", "Size and revolution", "1945–49", "Sheer size; armed independence struggle against the Dutch.", ["konfrontasi"]),
          N("it-k-raya", "ltc", "Indonesia Raya", "pre-war", "'Greater Indonesia', pursued more fervently by Indonesia.", ["konfrontasi"]),
          N("it-k-platter", "ltc", "Malaya's independence 'on a platter'", "1957", "Peaceful, British-managed independence looked down on.", ["konfrontasi", "it-jeshurun"])
        ] },
        K("led to", "Together these bred a sense of superiority over maritime neighbours."),
        N("it-k-super", "int", "Superiority complex", null, "Expanded Malaysia an affront to Indonesia's self-image as 'first among equals'.", ["konfrontasi"])
      ] },
    { link: "intensified", how: "Winning West Irian showed that pressure plus threat of force worked.",
      title: "West Irian precedent", summary: "A winning formula.",
      steps: [
        N("it-k-wi", "evt", "West Irian dispute", "1950–62", "Dutch resisted; Sukarno threatened force with Soviet arms.", ["it-west-irian"]),
        K("constrained", "While it was unresolved, Indonesia needed goodwill and stayed quiet on Malaysia."),
        N("it-k-subandrio", "evid", "Subandrio: 'no objections'", "Nov 1961", "UN speeches disclaimed any claim to Borneo.", ["it-west-irian", "it-konf-chron-1"]),
        K("followed by", "Then the Dutch gave way."),
        N("it-k-nya", "tp", "New York Agreement", "15 Aug 1962", "West Irian to UN administration, then Indonesia (1 May 1963).", ["it-west-irian", "it-konf-chron-1"]),
        K("led to", "Victory emboldened Jakarta to use the same formula against Malaysia."),
        N("it-k-bold", "res-", "Indonesia emboldened", "1962", "Diplomatic pressure plus threat of force would be tried again.", ["it-west-irian"])
      ] },
    { link: "intensified", how: "Several further motives pushed Sukarno toward confrontation.",
      title: "Further motives", summary: "Strategy, suspicion, ideology, diversion.",
      steps: [
        { row: [
          N("it-k-strat", "stc", "Strategic threat", null, "Expanded Malaysia challenged Indonesian regional leadership.", ["it-konf-motives"]),
          N("it-k-1958", "stc", "1958 rebellion suspicion", "1958", "Malaya suspected of harbouring Outer Island rebels; no extradition treaty.", ["it-konf-motives", "it-legge-jones"]),
          N("it-k-ideo", "stc", "Sukarno vs Tunku", null, "Ultra-nationalist, PKI-aligned vs pro-Western, anti-communist.", ["it-konf-motives"]),
          N("it-k-pki", "stc", "PKI pressure", null, "Saw anti-communist Malaysia as a threat; Aidit: 'neo-colonialism' citing AMDA.", ["it-konf-motives"]),
          N("it-k-divert", "stc", "Domestic diversion", null, "Distraction from a deteriorating economy.", ["it-konf-motives"])
        ] }
      ] },
    { link: "triggered", how: "A revolt in Brunei gave Indonesia a grievance and showed it had local allies.",
      title: "The trigger", summary: "Brunei, Dec 1962.",
      steps: [
        N("it-k-azahari", "act", "Azahari's party", "1962", "Proposed a North Borneo Federation; won all 16 elected seats but was outvoted by the Sultan's nominees.", ["bruneirevolt"]),
        K("led to", "Blocked politically, Azahari's allies took up arms."),
        N("it-k-revolt", "trig", "Brunei Revolt", "Dec 1962", "Indonesian-backed rising, rapidly crushed by British forces.", ["bruneirevolt", "it-konf-chron-1"]),
        K("led to", "It gave Indonesia a grievance and showed sympathisers existed."),
        N("it-k-declare", "tp", "Confrontation declared", "late Jan 1963", "Subandrio: Indonesia could not but adopt confrontation.", ["it-konf-escalation", "it-konf-chron-2"])
      ] }
  ],
  judge: { prompt: "What was the most important cause of Konfrontasi? Rank them.",
           factors: ["it-k-super", "it-k-bold", "it-k-ideo", "it-k-divert", "it-k-revolt"],
           notes_view: "Tension is not mono-causal: historical animosity, ideology and leaders combined; leaders were 'decisive' (Sukarno/Suharto)." },
  historians: [
    { who: "Chandran Jeshurun", view: "Postwar evolution of British-influenced Malaya and revolutionary Indonesia predetermined an uneasy relationship.", nodes: ["it-k-platter"] },
    { who: "J.D. Legge", view: "As the major regional power, Indonesia felt entitled to consultation on territories near its borders.", nodes: ["it-k-strat"] },
    { who: "Matthew Jones", view: "Animosity fed by 1958 rebellion refugees and suspicion of designs on Sumatra.", nodes: ["it-k-1958"] }
  ],
  takeaways: [
    "Underlying: a superiority complex (size, revolution, Indonesia Raya; Malaya's independence 'on a platter').",
    "West Irian (1962) emboldened Indonesia to use pressure plus threat of force again.",
    "Trigger: the Brunei Revolt (Dec 1962); motives also included ideology, PKI pressure and diversion."
  ]
});

L.push({
  id: "it-konf-course", order: 4, level: 3, parent: "it-top", kind: "chain",
  title: "Konfrontasi: course, end and consequences",
  question: "How did Konfrontasi escalate and end, and what were its consequences?",
  intro: "Raids and bombings achieved little militarily; the conflict ended only when Suharto displaced Sukarno — opening the way to ASEAN.",
  clusters: [
    { title: "Escalation", summary: "Raids to bombing.",
      steps: [
        N("it-c-tebedu", "evt", "First raid at Tebedu", "12 Apr 1963", "Cross-border raid on a police post in Sarawak.", ["it-konf-escalation", "it-konf-chron-2"]),
        K("followed by", "Malaysia was formed regardless."),
        N("it-c-malaysia", "evt", "Malaysia formed", "16 Sep 1963", "Maphilindo collapsed.", ["it-konf-chron-2"]),
        K("intensified", "Indonesia widened the campaign."),
        N("it-c-raids", "evt", "Raids, incursions, sabotage", "1963–65", "Across Borneo, attempted landings in Peninsular Malaysia, sabotage in Singapore.", ["it-konf-escalation"]),
        K("followed by", "Indonesia left the UN and struck Singapore."),
        { row: [
          N("it-c-un", "evt", "Indonesia quits the UN", "Jan 1965", "Over Malaysia's seat on the Security Council.", ["it-konf-chron-2"]),
          N("it-c-mh", "evt", "MacDonald House bombing", "10 Mar 1965", "3 killed, 33 wounded.", ["it-konf-escalation"])
        ] }
      ] },
    { link: "constrained", how: "Commonwealth forces under AMDA blunted Indonesia's military effort.",
      title: "Military stalemate", summary: "AMDA holds the line.",
      steps: [
        N("it-c-amda", "pol", "AMDA in force", "1957", "Britain, Australia, New Zealand drawn in.", ["it-konf-escalation"]),
        K("led to", "Indonesia could not win on the battlefield."),
        N("it-c-little", "res-", "Little achieved militarily", null, "The costly Borneo campaign worsened Indonesia's economy.", ["it-konf-escalation", "it-konf-resolution"])
      ] },
    { link: "followed by", how: "A failed coup transformed Indonesian politics.",
      title: "Leadership change", summary: "Sukarno to Suharto.",
      steps: [
        N("it-c-gestapu", "trig", "Gestapu coup", "1965", "Failed coup; PKI destroyed.", ["it-konf-resolution", "it-konf-chron-2"]),
        K("led to", "The anti-communist army gradually displaced Sukarno."),
        N("it-c-suharto", "act", "Suharto displaces Sukarno", "1965–67", "Needed to mend relations and repair an economy in shambles.", ["it-konf-resolution"]),
        K("led to", "The new leader ended the conflict."),
        N("it-c-end", "tp", "Konfrontasi ends", "Aug 1966", "Sukarno ceded his position in Feb 1967.", ["it-konf-resolution", "it-konf-chron-2"])
      ] },
    { link: "led to", how: "The end of conflict reshaped the region.",
      title: "Consequences", summary: "ASEAN, and long memories.",
      steps: [
        { row: [
          N("it-c-asean", "res+", "Space for ASEAN", "1967", "Normalisation under the New Order; only after 1966 could ASEAN form.", ["it-konf-consequences"]),
          N("it-c-scar", "res-", "Durable wounds", "2014", "Indonesian warship named after the MacDonald House bombers; Singapore barred it.", ["it-konf-consequences"]),
          N("it-c-1975", "res±", "Realignment after 1975", "1975", "Malaysia and Indonesia saw Vietnam as a bulwark against China — at odds with Thailand.", ["it-realign-1975"])
        ] },
        K("supports", "Underlying causes remained, yet the conflict ended when the leader changed."),
        N("it-c-verdict", "judg", "Leaders decisive", null, "Strong evidence for the weight of individual leaders in SEA inter-state relations.", ["it-konf-resolution"])
      ] }
  ],
  judge: { prompt: "Why did Konfrontasi end? Rank the factors.", factors: ["it-c-little", "it-c-gestapu", "it-c-suharto"],
           notes_view: "Underlying causes could persist, yet the conflict ended once the leadership variable changed — strong evidence for the role of leaders." },
  historians: [],
  takeaways: [
    "First raid Tebedu (Apr 1963); MacDonald House (Mar 1965); Indonesia left the UN (Jan 1965).",
    "AMDA forces meant Indonesia achieved little militarily.",
    "Ended Aug 1966 after Suharto displaced Sukarno — opening the way to ASEAN; wounds lasted (2014 warship)."
  ]
});

L.push({
  id: "it-sabah-claim", order: 5, level: 3, parent: "it-top", kind: "causal",
  title: "The Sabah claim, 1878–1966",
  question: "What was the basis of the Philippine claim to Sabah, and why was it raised in 1962?",
  intro: "A genuine but contested colonial-era basis was activated in 1962 by Macapagal's domestic and international motives.",
  clusters: [
    { title: "The legal basis", summary: "Pajakan: cede or lease?",
      steps: [
        N("it-s-sulu", "ctx", "Sulu Sultanate rule", "1704–1877", "Sabah held part of the Sulu Sultanate (Brunei having ceded it).", ["sabah", "it-sabah-chron-1"]),
        K("followed by", "A British company then made an agreement with Sulu."),
        N("it-s-1878", "tp", "1878 agreement", "1878", "Annual payment; pajakan meant 'grant/cede' to the British but 'lease' to Sulu.", ["sabah", "it-sabah-chron-1"]),
        K("led to", "The ambiguous term produced overlapping claims."),
        { split: [
          { h: "Philippines", steps: [ N("it-s-ph", "int", "Lease; Manila is successor", null, "Britain never had valid title to give Malaysia.", ["sabah"]) ] },
          { h: "Malaysia", steps: [ N("it-s-my", "int", "Cession; payment as purchase", null, "Annual payment (made until 2013) evidence of purchase.", ["sabah"]) ] }
        ] }
      ] },
    { link: "followed by", how: "The claim lay dormant for decades.",
      title: "A dormant claim", summary: "The timing needs explaining.",
      steps: [
        N("it-s-colony", "evt", "British colony", "1888", "US filed pro forma claims in 1906 and 1920, ignored by Britain.", ["it-sabah-chron-1"]),
        K("supports", "Since the claim predated 1962, its timing needs explaining."),
        N("it-s-timing", "int", "Why 1962?", null, "Domestic political motivation was decisive.", ["it-macapagal"])
      ] },
    { link: "provoked response", how: "Macapagal had reasons to press the claim.",
      title: "Macapagal's claim", summary: "Motives and trigger.",
      steps: [
        { row: [
          N("it-s-brown", "stc", "Shed 'little brown brother'", null, "Frustration over US$73m unpaid war-damage compensation.", ["it-macapagal"]),
          N("it-s-profile", "stc", "Raise international profile", null, "Boost the Philippines' standing.", ["it-macapagal"]),
          N("it-s-cede", "trig", "Sultan of Sulu cedes rights", "1962", "Conditional cession to Manila — a fresh trigger.", ["it-macapagal", "it-sabah-chron-1"])
        ] },
        K("led to", "Macapagal formally claimed Sabah."),
        N("it-s-claim", "tp", "Philippines claims Sabah", "1962", "Under Macapagal.", ["it-macapagal", "it-sabah-chron-1"])
      ] },
    { link: "led to", how: "The claim ruptured relations as Malaysia formed.",
      title: "Consequences", summary: "Ties broken; ASA frozen.",
      steps: [
        N("it-s-un", "evt", "UN mission rejected", "1963", "Sabah joined Malaysia; Philippines rejected the UN findings.", ["it-macapagal", "it-sabah-chron-1", "it-soliven"],
          { ev: ["Soliven (1968): the 'free' elections were run by the British and Malaysians, who 'ran circles around' a handful of UN observers."] }),
        K("led to", "Relations broke off."),
        N("it-s-break", "res-", "Ties broken; ASA frozen", "1963–66", "No recognition of Malaysia until 1966; a main reason for ASA's demise.", ["it-macapagal"])
      ] }
  ],
  judge: { prompt: "Why did the Philippines claim Sabah in 1962? Rank the factors.", factors: ["it-s-1878", "it-s-brown", "it-s-profile", "it-s-cede"],
           notes_view: "A genuine colonial-legacy basis activated by domestic political motives and leaders; Leifer called Macapagal's public reasons 'implausible'." },
  historians: [
    { who: "Michael Leifer", view: "Macapagal's public grounds 'implausible' but with 'mythological credence' in the Philippines.", nodes: ["it-s-claim"] },
    { who: "Maximo V. Soliven", view: "The Sabah 'free' elections were run by the British and Malaysians.", nodes: ["it-s-un"] }
  ],
  takeaways: [
    "Crux: the 1878 pajakan — 'cede' (Britain/Malaysia) or 'lease' (Sulu/Philippines).",
    "The claim predated 1962 (1906, 1920 US claims), so Macapagal's domestic motives explain the timing.",
    "It broke relations, froze ASA and delayed recognition of Malaysia until 1966."
  ]
});

L.push({
  id: "it-sabah-marcos", order: 6, level: 3, parent: "it-top", kind: "causal",
  title: "Sabah under Marcos, 1968–1980",
  question: "How did Marcos's revival of the Sabah claim affect relations?",
  intro: "Marcos used Sabah to divert domestic anger; Malaysia replied through the Moro rebels — two disputes locked into one bargaining dynamic.",
  clusters: [
    { title: "Corregidor", summary: "A plot exposed.",
      steps: [
        N("it-m-misrule", "stc", "Domestic discontent", "1968", "Aquino: 'after 1,000 days of misrule' public wrath had to be diverted.", ["it-aquino-diversion"]),
        K("led to", "Marcos prepared a pretext to seize Sabah."),
        N("it-m-corr", "trig", "Corregidor Incident", "Mar 1968", "Covert commando unit trained to infiltrate Sabah; trainees killed (mutiny or murder — unresolved).", ["corregidor"]),
        K("led to", "Exposure ruptured relations months after ASEAN's founding."),
        N("it-m-susp", "res-", "Relations suspended", "1968", "Severe strain on ASEAN, founded the year before.", ["corregidor"])
      ] },
    { link: "intensified", how: "Talks failed and the claim was written into law.",
      title: "Diplomatic confrontation", summary: "Bangkok to RA 5446.",
      steps: [
        N("it-m-bkk", "evt", "Bangkok talks collapse", "Jun–Jul 1968", "Philippines demanded the ICJ; Ghazali walked out — 'nothing more to talk about'.", ["it-sabah-1968-69", "it-sabah-chron-2"]),
        K("followed by", "The Philippines legislated its claim."),
        N("it-m-ra", "pol", "Republic Act 5446", "Sep 1968", "Affirmed sovereignty over Sabah; still in force.", ["it-sabah-1968-69", "it-sabah-chron-2"]),
        K("provoked response", "Malaysia boycotted ASEAN meetings."),
        N("it-m-boycott", "res-", "Malaysia boycotts ASEAN", "1968–69", "Until the Philippines stopped publicising the dispute; ties restored Dec 1969.", ["it-sabah-1968-69"])
      ] },
    { link: "provoked response", how: "Malaysia's Sabah gave Philippine Moro rebels a base.",
      title: "The Moro linkage", summary: "Arms for leverage.",
      steps: [
        N("it-m-split", "ltc", "Muslim community split", "1898", "US colonisation split Mindanao's Muslims (tied to Sulu) from Sabah.", ["sabahmindanao"]),
        K("enabled", "Shared identity let Sabah support the Moro revolt."),
        N("it-m-mustapha", "act", "Tun Mustapha's support", "1972–76", "Sabah a training camp, supply depot and sanctuary; ≥200,000 rounds and 5,407 weapons.", ["sabahmindanao", "it-cheman-st"]),
        K("followed by", "Support fell away when Mustapha lost power."),
        N("it-m-stop", "evt", "Arms flow stops", "Dec 1976", "After Mustapha's defeat (Apr 1976); 1980 Philippine claims of camps called 'preposterous'.", ["sabahmindanao", "it-sabah-chron-2"])
      ] },
    { link: "led to", how: "Each side used one dispute as leverage in the other.",
      title: "Bargaining", summary: "One interlocking dynamic.",
      steps: [
        N("it-m-1977", "pol", "Marcos promises to drop claim", "Aug 1977", "At the KL ASEAN summit — partly to make Malaysia cut ties with the MNLF; never followed through.", ["it-sabah-linkage", "it-sabah-chron-2"]),
        K("supports", "The episode shows both disputes as bargaining chips."),
        N("it-m-verdict", "judg", "Diversion and leverage", null, "Marcos used Sabah as a 'foreign devil' like Sukarno; Malaysia was not innocent either.", ["it-aquino-diversion", "it-sabah-linkage"])
      ] }
  ],
  judge: { prompt: "What did most to inflame the Sabah dispute under Marcos? Rank the factors.", factors: ["it-m-misrule", "it-m-corr", "it-m-ra", "it-m-mustapha"],
           notes_view: "Key evidence of domestic diversion (Aquino links Marcos to Sukarno); Malaysia's support for the Moros shows the disputes were inter-related bargaining chips." },
  historians: [
    { who: "Benigno Aquino Jr.", view: "Like Sukarno, Marcos would 'conjure a foreign devil' — 'Why not Sabah?'", nodes: ["it-m-misrule"] },
    { who: "W.K. Che Man", view: "Tun Mustapha used Sabah as a training camp, supply depot and sanctuary (1972–76).", nodes: ["it-m-mustapha"] }
  ],
  takeaways: [
    "Corregidor (Mar 1968) exposed a plot to destabilise Sabah — domestic diversion.",
    "Bangkok talks failed; RA 5446 (Sep 1968); Malaysia boycotted ASEAN until Dec 1969.",
    "Malaysia's Sabah aided the Moros; Marcos's 1977 promise aimed to stop that."
  ]
});

L.push({
  id: "it-sabah-manage", order: 7, level: 3, parent: "it-top", kind: "chain",
  title: "Sabah held in abeyance, 1986–2013",
  question: "How was the Sabah dispute managed after Marcos?",
  intro: "New leaders shelved the claim and cooperated on separate tracks — the ASEAN Way — which held even through the 2013 Lahad Datu standoff.",
  clusters: [
    { title: "After Marcos", summary: "A chance to repair ties.",
      steps: [
        N("it-a-fall", "tp", "Marcos falls", "1986", "Opened an opportunity to repair ties.", ["it-sabah-chron-3"]),
        K("followed by", "Aquino tried to drop the claim."),
        N("it-a-aquino", "evt", "Aquino fails with Congress", "1987", "Could not convince Congress to drop the claim.", ["it-sabah-chron-3"])
      ] },
    { link: "followed by", how: "Ramos and Mahathir built ties around the dispute.",
      title: "Ramos and Mahathir", summary: "Visits, commission, pact.",
      steps: [
        N("it-a-ramos", "pol", "Ramos's state visit", "Feb 1993", "First since 1968; Joint Commission set up.", ["it-sabah-abeyance", "it-sabah-chron-3"]),
        K("led to", "Malaysia reciprocated."),
        N("it-a-mahathir", "pol", "Mahathir's return visit", "Feb 1994", "Trade delegation; blamed the Philippine Senate, not the President — face-saving.", ["it-sabah-abeyance", "it-sabah-chron-3"]),
        K("led to", "Security cooperation followed."),
        N("it-a-pact", "pol", "Defence pact", "Sep 1994", "Joint training and technical exchange.", ["it-sabah-abeyance"]),
        K("followed by", "Congress finally agreed to shelve the claim."),
        N("it-a-shelve", "res+", "Dispute shelved", "1998", "Ramos convinced Congress to refocus on economic cooperation.", ["it-sabah-chron-3"])
      ] },
    { link: "constrained", how: "Both sides' domestic politics kept the claim alive but frozen.",
      title: "Why abeyance, not resolution", summary: "Status quo suits both.",
      steps: [
        { row: [
          N("it-a-ph", "ltc", "Filipino nationalism", null, "Including Sulu descendants; prevents formal renunciation.", ["it-sabah-abeyance"]),
          N("it-a-my", "ltc", "Malaysia refuses ICJ, cession", null, "Never cede Sabah; consistently refuses ICJ arbitration.", ["it-sabah-abeyance"])
        ] }
      ] },
    { link: "followed by", how: "Non-state actors tested the framework in 2013.",
      title: "Lahad Datu", summary: "The framework holds.",
      steps: [
        N("it-a-ld", "trig", "Lahad Datu standoff", "Feb–Mar 2013", "200–300 men of the 'Royal Army of Sulu' landed for Jamalul Kiram III.", ["it-lahad-datu"]),
        K("led to", "A month of clashes followed."),
        N("it-a-ld2", "res-", "80 dead", "2013", "68 militants, 10 Malaysian security personnel, 2 civilians.", ["it-lahad-datu"]),
        K("contradicts", "Yet Manila refused to back Kiram."),
        N("it-a-holds", "res+", "Management framework holds", "2013", "Manila told militants to stand down; Malaysia halted the annual Sulu payment (revealed Jul 2020).", ["it-lahad-datu", "it-sabah-chron-3"])
      ] }
  ],
  historians: [ { who: "Isagani de Castro Jr.", view: "Ramos and Mahathir agreed to shelve the dispute so it would not obstruct economic ties.", nodes: ["it-a-shelve"] } ],
  takeaways: [
    "De-escalation tracked leadership change: Marcos → Aquino → Ramos.",
    "1993 Ramos visit, 1994 Mahathir visit and defence pact, 1998 shelving: the ASEAN Way.",
    "Lahad Datu (2013, 80 dead) showed the framework holding — Manila did not back Kiram."
  ]
});

L.push({
  id: "it-tiw-roots", order: 8, level: 3, parent: "it-top", kind: "causal",
  title: "Third Indochina War: Vietnam–Kampuchea roots",
  question: "Why did Vietnam and Democratic Kampuchea come to war?",
  intro: "Centuries of Vietnamese superiority and expansion met Khmer Rouge fear and attacks; Vietnam's December 1977 incursion closed off diplomacy.",
  clusters: [
    { title: "Historical layer", summary: "Superiority and expansion.",
      steps: [
        { row: [
          N("it-r-namtien", "ltc", "Nam tien", "1620s", "'March to the south': Vietnamese occupation of the Mekong delta; Khmers removed.", ["it-viet-expansion"]),
          N("it-r-minh", "ltc", "Minh Mang's 'Vietnamisation'", "1830s", "Direct rule and cultural reform of Cambodia.", ["it-viet-expansion"]),
          N("it-r-super", "ltc", "Cultural superiority", null, "Sinic vs Indic frontier; Vietnamese as 'civilisers'; reinforced by French Indochina and the Vietminh.", ["it-viet-superiority"])
        ] },
        K("led to", "Vietnam came to see Cambodia as a ward."),
        N("it-r-child", "evid", "'Maintain it as a child'", null, "Vietnamese annals: 'We will be its mother; its father will be Siam' (Chandler).", ["it-viet-expansion", "it-viet-superiority"])
      ] },
    { link: "provoked response", how: "The Khmer Rouge saw Vietnam as an existential threat.",
      title: "Security layer", summary: "Khmer Rouge fear and attacks.",
      steps: [
        N("it-r-special", "int", "'Special relationship' feared", "1975–77", "Seen as a first step to an Indochinese Federation; Ieng Sary: enemies 'must be progressively wiped out'.", ["it-special-relationship", "it-viet-security"]),
        K("led to", "The Khmer Rouge attacked across the border."),
        N("it-r-attacks", "evt", "Khmer Rouge attacks", "Apr–Sep 1977", "Killed Vietnamese civilians; Vietnamese border troops rose from 60,000 to 100,000.", ["it-viet-security"]),
        K("provoked response", "Vietnam struck back in force."),
        N("it-r-incursion", "trig", "Vietnam's incursion", "16 Dec 1977", "~50,000 troops (30,000–60,000) occupy a 450 km strip.", ["it-special-relationship", "it-tiw-chron-1"])
      ] },
    { link: "led to", how: "Phnom Penh broke off relations and rejected compromise.",
      title: "Diplomacy fails", summary: "Proposals rejected.",
      steps: [
        N("it-r-break", "evt", "Relations suspended", "31 Dec 1977", "Radio Phnom Penh calls for 'people's war'.", ["it-special-relationship", "it-tiw-chron-1"]),
        K("followed by", "Vietnam offered terms."),
        { row: [
          N("it-r-plan", "pol", "Three-point plan", "5 Feb 1978", "End hostilities; treaty; international guarantee — ignored.", ["it-special-relationship"]),
          N("it-r-dmz", "pol", "Demilitarised zone offer", "Feb 1978", "Rejected by the China-backed Khmer Rouge.", ["it-viet-security", "it-tiw-chron-2"])
        ] },
        K("supports", "The rejected DMZ complicates a story of pure Vietnamese aggression."),
        N("it-r-verdict", "judg", "Old feud plus real threat", null, "Historical animosity combined with genuine security threats; the border dispute alone could have been settled (Duiker).", ["it-duiker", "it-tiw-synthesis"])
      ] }
  ],
  judge: { prompt: "Why did Vietnam and Kampuchea go to war? Rank the factors.", factors: ["it-r-super", "it-r-namtien", "it-r-special", "it-r-attacks", "it-r-incursion"],
           notes_view: "Combines deep historical animosity with genuine security threats; Duiker: the border dispute alone 'could have been resolved without recourse to violence'." },
  historians: [
    { who: "William J. Duiker", view: "Rooted in centuries of Khmer–Vietnamese animosity since the 'march to the South'.", nodes: ["it-r-namtien", "it-r-verdict"] },
    { who: "David Chandler", view: "Records Vietnamese condescension and the annals' view of Cambodia as a 'child'.", nodes: ["it-r-child"] }
  ],
  takeaways: [
    "Historical: nam tien (1620s), Minh Mang (1830s), Vietnamese cultural superiority.",
    "Security: Khmer Rouge attacks (1977) led to Vietnam's Dec 1977 incursion.",
    "Phnom Penh rejected the Feb 1978 plan and DMZ — not purely Vietnamese aggression."
  ]
});

L.push({
  id: "it-tiw-sino", order: 9, level: 3, parent: "it-top", kind: "causal",
  title: "Third Indochina War: the great-power layer",
  question: "How did Sino-Soviet rivalry turn a Vietnam–Kampuchea dispute into war?",
  intro: "The Sino-Soviet split broke the Sino-Vietnamese alliance; China backed the Khmer Rouge, and the Soviet treaty gave Vietnam its 'green light'.",
  clusters: [
    { title: "Alliance breaks down", summary: "From rear base to rival.",
      steps: [
        N("it-g-split", "ltc", "Sino-Soviet split", "1960s", "China feared Hanoi tilting to Moscow as Soviet aid grew.", ["it-sino-soviet", "it-gilks"]),
        K("intensified", "Post-Tet diplomacy deepened Chinese suspicion."),
        N("it-g-tet", "evt", "Hanoi talks with the US", "1968–73", "Diverged from Chinese wishes; Zhou: encirclement complete 'except Vietnam'.", ["sinoviet79"]),
        K("led to", "Rivalry over Indochina turned violent."),
        N("it-g-clash", "evt", "Border and SCS clashes", "1973", "After the Paris Accords.", ["sinoviet79", "it-tiw-chron-1"]),
        K("led to", "China sought an anti-Vietnamese buffer."),
        N("it-g-kr", "tp", "China backs the Khmer Rouge", "1974", "The decisive move placing China and Vietnam at war.", ["sinoviet79", "it-tiw-chron-1"])
      ] },
    { link: "intensified", how: "In 1978 new disputes poisoned Sino-Vietnamese ties further.",
      title: "1978 escalation", summary: "Refugees and arms.",
      steps: [
        { row: [
          N("it-g-hoa", "evt", "Ethnic Chinese exodus", "1975–78", "Accelerated in 1978; China claimed 70,000 refugees and called Vietnam an 'Asian Cuba'.", ["it-ethnic-chinese", "it-tiw-chron-2"]),
          N("it-g-arms", "evt", "Chinese arms to Kampuchea", "1 Feb 1978", "Hanoi blamed 'international reactionaries'.", ["it-china-war", "it-tiw-chron-2"])
        ] }
      ] },
    { link: "provoked response", how: "Vietnam sought Soviet protection before acting.",
      title: "The 'green light'", summary: "Soviet reinsurance.",
      steps: [
        N("it-g-treaty", "tp", "Soviet-Vietnamese Treaty", "3 Nov 1978", "Article 6: consultation/action if either is attacked.", ["it-soviet-treaty", "it-tiw-chron-2"]),
        K("enabled", "The treaty insured Vietnam against Chinese retaliation."),
        N("it-g-green", "res-", "Final permissive condition", "Nov 1978", "'Strategic reinsurance'; convinced China Vietnam was a Soviet client.", ["it-soviet-treaty", "it-china-war"]),
        K("supports", "Vietnam's aims were also geopolitical."),
        N("it-g-sat", "int", "Kampuchea as satellite", null, "Leifer: Vietnam determined on geopolitical grounds that Kampuchea be its satellite.", ["it-leifer-satellite"])
      ] }
  ],
  judge: { prompt: "How important was the great-power layer? Rank the factors.", factors: ["it-g-split", "it-g-kr", "it-g-hoa", "it-g-treaty"],
           notes_view: "Great-power patronage was enabling, not merely context: the Soviet treaty — not the border clashes — was the final permissive condition for invasion." },
  historians: [
    { who: "Chang Pao-Min", view: "The Soviet-Vietnamese Treaty 'gave the final green light'.", nodes: ["it-g-treaty"] },
    { who: "Anne Gilks", view: "After the war the danger of Soviet encirclement through Vietnam became more real.", nodes: ["it-g-split"] },
    { who: "Michael Leifer", view: "Vietnam was determined that Kampuchea be its satellite.", nodes: ["it-g-sat"] }
  ],
  takeaways: [
    "The Sino-Soviet split and Hanoi's US talks broke the Sino-Vietnamese alliance; by 1974 China backed the Khmer Rouge.",
    "1978: ethnic Chinese exodus ('Asian Cuba') and Chinese arms to Kampuchea.",
    "The 3 Nov 1978 Soviet treaty was the 'green light' for invasion."
  ]
});

L.push({
  id: "it-tiw-war", order: 10, level: 3, parent: "it-top", kind: "causal",
  title: "Invasion and the Sino-Vietnamese war, 1978–79",
  question: "How did the invasion of Kampuchea and China's war unfold, and how was it seen?",
  intro: "Vietnam overran Kampuchea in two weeks; China launched a punitive war; the US saw it all through a Cold War lens.",
  clusters: [
    { title: "Invasion", summary: "Two weeks to Phnom Penh.",
      steps: [
        N("it-w-knufns", "pol", "KNUFNS sponsored", "3 Dec 1978", "Cover for the invasion.", ["it-tiw-chron-2"]),
        K("followed by", "Vietnam invaded."),
        N("it-w-invade", "tp", "Vietnam invades", "25 Dec 1978", "150,000 troops; DK forces overrun within two weeks.", ["it-invasion-1978", "it-tiw-chron-2"]),
        K("led to", "A pro-Vietnamese government was installed."),
        N("it-w-prk", "res±", "PRK installed", "8 Jan 1979", "Genocide halted (Pol Pot's regime killed nearly a quarter of Cambodians); UN still recognised DK.", ["it-invasion-1978", "thirdindochina"])
      ] },
    { link: "provoked response", how: "China punished Vietnam for invading its ally.",
      title: "China's border war", summary: "A limited, punitive strike.",
      steps: [
        N("it-w-china", "evt", "China invades northern Vietnam", "17 Feb 1979", "~200,000 PLA troops — its first major combat since 1953.", ["it-china-war", "thirdindochina"]),
        K("followed by", "China withdrew after about a month."),
        N("it-w-withdraw", "res±", "PLA withdraws", "Mar 1979", "Punitive, limited — showed Vietnamese aggression carried a cost.", ["it-china-war"])
      ] },
    { link: "followed by", how: "Vietnam consolidated its Indochinese bloc.",
      title: "Indochinese Federation", summary: "'Big powerism'.",
      steps: [
        N("it-w-fed", "res-", "'Indochinese Federation' realised", "1979", "Vietnam–PRK treaty (18 Feb); Lao-Kampuchea Agreement (22 Mar); troops and advisers — 'big powerism'.", ["it-leifer-satellite", "thirdindochina"])
      ] },
    { link: "supports", how: "Outsiders read events through the Cold War.",
      title: "The US view", summary: "Bloc logic over humanitarian facts.",
      steps: [
        N("it-w-us", "int", "Cold War containment lens", "1979", "Vietnam seen as a Soviet proxy; Deng warned Carter of Soviet bases.", ["it-us-view"]),
        K("led to", "The West backed the genocidal regime's UN seat."),
        N("it-w-paradox", "res-", "Khmer Rouge kept UN seat", "1979", "Oksenberg called Hanoi's policy 'genocidal' — bloc logic over the record.", ["it-us-view"])
      ] }
  ],
  judge: { prompt: "Which best explains the scale of the 1978–79 wars? Rank the factors.", factors: ["it-w-invade", "it-w-china", "it-w-fed", "it-w-us"],
           notes_view: "Layered causation: historical propensity + security threats + collapse of the Sino-Vietnamese alliance + Cold War enabling (Soviet treaty, Sino-American/Sino-Thai alignment)." },
  historians: [
    { who: "Michel Oksenberg", view: "Hanoi must face protracted resistance, Chinese pressure and isolation — calling its policy 'genocidal'.", nodes: ["it-w-paradox"] },
    { who: "Michael Leifer", view: "Vietnam's aims extended to regional hegemony.", nodes: ["it-w-fed"] }
  ],
  takeaways: [
    "25 Dec 1978: 150,000 troops; PRK installed 8 Jan 1979; UN kept recognising DK.",
    "17 Feb 1979: ~200,000 PLA troops in a punitive month-long war.",
    "The US Cold War lens meant the West effectively backed the Khmer Rouge's UN seat."
  ]
});

L.push({
  id: "it-thaiviet", order: 11, level: 3, parent: "it-top", kind: "causal",
  title: "Thailand–Vietnam: frontline to rapprochement",
  question: "How did the Third Indochina War affect Thailand–Vietnam relations and ASEAN?",
  intro: "Thailand became a frontline state and split ASEAN over Vietnam, until Doi Moi and economic interest turned a battlefield into a marketplace.",
  clusters: [
    { title: "Frontline Thailand", summary: "Fear and confrontation.",
      steps: [
        N("it-v-hist", "ltc", "Anti-communist Thailand", null, "Aided the US in Vietnam; aligned with China against the USSR.", ["it-thai-viet"]),
        K("intensified", "The conquest of Kampuchea brought Vietnamese troops to Thailand's border."),
        N("it-v-fear", "res-", "Thai fear of subversion", "1979–80s", "Feared ethnic Vietnamese and the Thai Communist Party — though Hanoi had cut ties with it in 1978.", ["it-thai-viet"]),
        K("led to", "Troops clashed along the border."),
        N("it-v-clash", "evt", "Border clashes", "1980s", "Vietnamese forces pursued resistance fighters across the Thai-Kampuchean border.", ["it-thai-viet"])
      ] },
    { link: "led to", how: "Members disagreed on how to treat Vietnam.",
      title: "ASEAN divided", summary: "Hardliners vs moderates.",
      steps: [
        { split: [
          { h: "Hardline", steps: [ N("it-v-hard", "act", "Thailand and Singapore", null, "Insisted on total Vietnamese withdrawal.", ["it-thai-viet"]) ] },
          { h: "Moderate", steps: [ N("it-v-soft", "act", "Malaysia and Indonesia", null, "Favoured dialogue; saw Vietnam as a bulwark against China.", ["it-thai-viet", "it-realign-1975", "it-links-2"]) ] }
        ] }
      ] },
    { link: "followed by", how: "Vietnam's reforms changed its priorities.",
      title: "Rapprochement", summary: "Battlefield to marketplace.",
      steps: [
        N("it-v-doimoi", "tp", "Doi Moi", "1986", "Began winding down the occupation.", ["it-thai-viet-thaw", "thirdindochina"]),
        K("led to", "Hanoi formally ended its confrontation with ASEAN."),
        N("it-v-13", "pol", "Thirteenth Politburo Resolution", "May 1988", "End confrontation between socialist Indochina and capitalist ASEAN.", ["it-thai-viet-thaw"]),
        K("enabled", "Thailand responded with an economic opening."),
        N("it-v-chat", "pol", "Chatichai: 'battlefield to market place'", "Aug 1988", "Shared economic interest as a route out of ideological conflict.", ["it-thai-viet-thaw"]),
        K("followed by", "A comprehensive settlement followed."),
        N("it-v-paris", "tp", "Paris Peace Conference", "Oct 1991", "Comprehensively resolved the crisis.", ["it-thai-viet-thaw", "thirdindochina"]),
        K("led to", "Former enemies became partners."),
        N("it-v-join", "res+", "Vietnam joins ASEAN", "1995", "Yesterday's frontline adversary became a member.", ["it-thai-viet-thaw"])
      ] }
  ],
  historians: [],
  takeaways: [
    "Thailand became a frontline state; with Singapore it demanded total withdrawal, against moderate Malaysia/Indonesia.",
    "Doi Moi (1986), the May 1988 resolution and Chatichai's 'battlefield to market place' turned the tide.",
    "Paris (1991) settled the crisis; Vietnam joined ASEAN in 1995."
  ]
});

L.push({
  id: "it-pv-causes", order: 12, level: 3, parent: "it-top", kind: "causal",
  title: "Causes of the Preah Vihear dispute, to 1959",
  question: "Why did a Khmer temple become the subject of a dispute between Cambodia and Thailand?",
  intro: "Old animosity set the tone, colonial maps gave the legal basis, Thai military nationalism made the temple a symbol, and the Cold War explains why the dispute erupted in 1953–59.",
  clusters: [
    { title: "Historical animosities", summary: "Centuries of mutual distrust.",
      steps: [
        { row: [
          N("it-pv-siam", "ltc", "Siamese incursions", "15th–19th c.", "Angkor Wat captured 1421; provinces ceded 1794; Phnom Penh burned.", ["pv-hist"]),
          N("it-pv-betray", "ltc", "Cambodian 'betrayals'", "16th c.–1861", "King Satha's attack; King Norodom turned to the French.", ["pv-hist"])
        ] },
        K("led to", "Each side built a hostile image of the other."),
        N("it-pv-tropes", "int", "Mutual tropes", null, "'Preah Ko Preah Keo' vs Cambodia as Siam's 'younger sibling'.", ["pv-perceptions"]),
        K("constrained", "Animosity explains endurance, not timing."),
        N("it-pv-deth", "evid", "Deth: pattern of relations", "1940s–80s", "Dispute absent until the 1940s and in the anti-communist 1970s–80s.", ["pv-deth-pattern"])
      ] },
    { link: "intensified", how: "French colonial cartography created an ambiguous border.",
      title: "Colonial legacy", summary: "Treaty vs map.",
      steps: [
        N("it-pv-1893", "evt", "Franco-Siamese Crisis", "1893", "Siam cedes Lao and Khmer regions — a symbol of lost status.", ["pv-1893"]),
        K("led to", "A new border had to be drawn."),
        N("it-pv-1904", "ltc", "1904 watershed treaty", "13 Feb 1904", "Border along the Dangrek watershed — most of the temple in Siam.", ["pv-1904-1907"]),
        K("contradicts", "The French survey drew a different line."),
        N("it-pv-1907", "ltc", "1907 French map", "Mar 1907", "Placed all of Preah Vihear in Cambodia.", ["pv-1904-1907"]),
        K("followed by", "Siam never objected."),
        N("it-pv-silence", "evid", "Siamese silence", "1930–34", "Damrong saw a French flag (1930); 1934 survey found the discrepancy — no protest.", ["pv-dejure"])
      ] },
    { link: "intensified", how: "Military governments turned lost territory into a nationalist cause.",
      title: "Thai nationalism", summary: "The myth of Preah Vihear.",
      steps: [
        N("it-pv-humil", "ctx", "'National Humiliation' discourse", "1932–38", "Military blamed the monarchy for 1893 losses to build legitimacy.", ["pv-humiliation"]),
        K("led to", "Phibun launched an irredentist campaign."),
        N("it-pv-phibun", "pol", "Phibun's irredentism", "1938–41", "Invaded French Cambodia; Angkor Wat the main goal.", ["pv-phibun-1941"]),
        K("led to", "Japan refused Angkor, so Preah Vihear was publicised instead."),
        N("it-pv-tokyo", "tp", "Tokyo Peace Accord", "Mar 1941", "Preah Vihear hailed as \"just as important as Angkor Wat\".", ["pv-phibun-1941"]),
        K("followed by", "Thailand had to give it back."),
        N("it-pv-1946", "res-", "The 'partition'", "1946", "Washington Accord restored the 1907 line; the temple now a national symbol.", ["pv-1946"])
      ] },
    { link: "triggered", how: "France's withdrawal and Cold War suspicion gave Thailand a reason and an opening.",
      title: "Occupation and the Cold War", summary: "Why 1953–59.",
      steps: [
        N("it-pv-seato", "stc", "Cambodia refuses SEATO", "1953", "Thai police post near the temple; Thai flag raised.", ["pv-1953"]),
        K("led to", "With France gone, Thailand moved in."),
        N("it-pv-occupy", "trig", "Thai troops occupy the temple", "1 Aug 1954", "Exploited a newly independent Cambodia after Geneva.", ["pv-1953", "pv-chron-1"]),
        K("intensified", "Cold War suspicions poisoned the talks that followed."),
        { row: [
          N("it-pv-neutral", "stc", "Neutrality vs anti-communism", "1955–58", "Thailand saw Sihanouk's neutrality as a communist façade.", ["pv-coldwar"]),
          N("it-pv-prc", "stc", "Cambodia recognises the PRC", "Jul 1958", "After South Vietnamese incursions; Thailand saw a Chinese proxy.", ["pv-prc"]),
          N("it-pv-diss", "stc", "Thai-backed dissidents", "1955–59", "Son Ngoc Thanh, Dap Chhuon; Sam Sary suspected.", ["pv-dissidents"])
        ] },
        K("led to", "Sihanouk concluded he was surrounded by US-backed enemies."),
        N("it-pv-plot", "tp", "'Bangkok Plot' accusation", "Jan 1959", "Sihanouk accused Thailand of plotting to overthrow him.", ["pv-dissidents"])
      ] }
  ],
  judge: { prompt: "What best explains the Preah Vihear dispute? Rank the factors.",
           factors: ["it-pv-tropes", "it-pv-1907", "it-pv-1946", "it-pv-occupy", "it-pv-prc"],
           notes_view: "Layer the causes: animosity explains propensity and endurance, colonial maps the legal basis, Thai military nationalism the temple's symbolism, and the Cold War the timing of 1953–62." },
  historians: [
    { who: "Sok Udom Deth", view: "The antagonistic pattern explains why the conflict endured; rhetoric mattered when the two states lacked shared interests and ideology.", nodes: ["it-pv-deth", "it-pv-neutral"] },
    { who: "Shane Strate", view: "Phibun turned Preah Vihear from an anonymous site into a national memorial.", nodes: ["it-pv-phibun", "it-pv-tokyo"] },
    { who: "Maurizio Peleggi", view: "Phibun funded restoration to appropriate royal prerogatives.", nodes: ["it-pv-tokyo"] }
  ],
  takeaways: [
    "Animosity explains propensity and endurance, not timing — the dispute began only in the 1940s.",
    "The 1907 map contradicted the 1904 watershed treaty; Siam's silence was its undoing.",
    "Phibun's 1941 campaign created the Thai myth; the Cold War and France's exit explain 1953–59."
  ]
});

L.push({
  id: "it-pv-crisis", order: 13, level: 3, parent: "it-top", kind: "causal",
  title: "Height of the Preah Vihear dispute, 1958–1962",
  question: "How did the Preah Vihear dispute escalate between 1958 and 1962?",
  intro: "Sihanouk internationalised the dispute; Thai crowds and press reacted with nationalist fury; relations broke down twice — though Thai elites stayed more restrained than the public.",
  clusters: [
    { title: "Why go to the ICJ", summary: "Cambodia's reasons.",
      steps: [
        { row: [
          N("it-pv-adv", "stc", "Thai advantage in talks", "1954–58", "Stronger Thailand; deadlocked talks; Mar 1958 protests in Phnom Penh.", ["pv-icj-why"]),
          N("it-pv-1961", "stc", "1961 deadline", null, "Fear Thailand would stall until its ICJ commitment lapsed.", ["pv-icj-why"]),
          N("it-pv-sih", "act", "Sihanouk's motives", null, "Rally ordinary people, mask his colonial past, justify non-alignment (Strate).", ["pv-icj-why"])
        ] },
        K("led to", "Sihanouk announced the move in Bangkok itself."),
        N("it-pv-ann", "trig", "Sihanouk's announcement", "4 Sep 1958", "Withdrew from two-party talks; formal submission 6 Oct 1959.", ["pv-icj-why", "pv-chron-2"])
      ] },
    { link: "led to", how: "For the first time Thais faced losing the temple.",
      title: "Thai public response", summary: "Rallies, press, donations.",
      steps: [
        N("it-pv-rally", "evt", "Sanam Luang rally", "7 Sep 1958", "10,000 marched on the Cambodian embassy; clashes with police.", ["pv-thai-public"]),
        K("intensified", "The press framed it as a fight against imperialism."),
        N("it-pv-press", "int", "Press framing", "1958–62", "Thailand as victim; Sihanouk as ungrateful and duplicitous.", ["pv-thai-public"]),
        K("led to", "Thais were mobilised to pay for the case."),
        { row: [
          N("it-pv-baht", "evt", "'One person, one baht'", "Oct–Nov 1959", "Defence fund passed 1 million baht — a symbol of resolve.", ["pv-donations"]),
          N("it-pv-irred", "evt", "Renewed irredentism", "1959", "Editorials demanded Lan Na, Champassak, Battambang, Siem Reap.", ["pv-sarit-rhetoric"])
        ] }
      ] },
    { link: "constrained", how: "Thai leaders were harsher in word than in deed.",
      title: "Elites vs masses", summary: "Rhetoric vs restraint.",
      steps: [
        N("it-pv-sarit", "act", "Sarit's rhetoric", "1959", "Blamed 'corrupt leaders' in Phnom Penh; called Sihanouk an opportunist.", ["pv-sarit-rhetoric"]),
        K("contradicts", "But he did not want war."),
        N("it-pv-restraint", "evid", "Elite restraint", "1958–62", "Sarit had bigger worries (Laos, PRC, Vietnam); press as symptom and cause.", ["pv-elites-masses"])
      ] },
    { link: "led to", how: "Relations broke down at state and personal level.",
      title: "Diplomatic breakdown", summary: "Two ruptures.",
      steps: [
        N("it-pv-break1", "res-", "Relations suspended", "24 Nov 1958", "Thailand closed the border and suspended air service.", ["pv-relations", "pv-prc"]),
        K("followed by", "The UN stepped in."),
        N("it-pv-un", "pol", "UN envoy restores ties", "6 Feb 1959", "Hammarskjold's envoy; Cambodia's joint-administration offer unanswered.", ["pv-relations"]),
        K("followed by", "Cambodia went to the Court alone."),
        N("it-pv-submit", "tp", "Case submitted to the ICJ", "6 Oct 1959", "With the Annex I (1907) map.", ["pv-relations", "pv-icj-case"]),
        K("followed by", "Leaders' personal hostility broke ties again."),
        N("it-pv-break2", "res-", "'A pig challenging a lion'", "Oct 1961", "Sarit's insult; Sihanouk severed relations on 23 Oct 1961.", ["pv-relations"])
      ] }
  ],
  judge: { prompt: "Who did most to escalate the dispute in 1958–62? Rank them.",
           factors: ["it-pv-sih", "it-pv-press", "it-pv-sarit", "it-pv-break2"],
           notes_view: "Distinguish elites from masses and rhetoric from action: the public and press multiplied tension, while Sarit's government still honoured the ICJ process." },
  historians: [
    { who: "Shane Strate", view: "Sihanouk escalated for domestic and foreign-policy reasons; the ICJ made Thailand confront losing the temple.", nodes: ["it-pv-sih", "it-pv-rally"] }
  ],
  takeaways: [
    "Sihanouk's 4 Sep 1958 announcement internationalised the dispute; formal submission 6 Oct 1959.",
    "Thai crowds, press and donors (1 million baht) framed it as anti-imperialist; elites were more restrained.",
    "Relations broken 24 Nov 1958 and 23 Oct 1961."
  ]
});

L.push({
  id: "it-pv-manage", order: 14, level: 3, parent: "it-top", kind: "chain",
  title: "Preah Vihear: the ICJ ruling and after",
  question: "How was the Preah Vihear dispute managed, and why did it persist?",
  intro: "The ICJ ruled for Cambodia in 1962 and Thailand complied grudgingly, but the ruling left the land around the temple unsettled — so the dispute returned whenever relations soured.",
  clusters: [
    { title: "The ICJ case", summary: "Jurisdiction, then merits.",
      steps: [
        N("it-pv-obj", "evt", "Thai preliminary objections", "23 May 1960", "Argued the Court lacked jurisdiction.", ["pv-icj-case"]),
        K("followed by", "The Court rejected them."),
        N("it-pv-jur", "tp", "Jurisdiction upheld", "26 May 1961", "Thailand's 1950 declaration could only mean the ICJ.", ["pv-icj-case"]),
        K("led to", "The Court ruled on the merits."),
        N("it-pv-verdict", "tp", "ICJ rules for Cambodia, 9–3", "15 Jun 1962", "Siam's silence meant acceptance of the 1907 map.", ["pv-verdict"])
      ] },
    { link: "led to", how: "Thais erupted, but leaders weighed the costs.",
      title: "Thai response", summary: "Outrage, then compliance.",
      steps: [
        N("it-pv-outrage", "res-", "Mass outrage", "Jun 1962", "50,000 students; ICJ called neo-imperialist and communist.", ["pv-thai-verdict"]),
        K("contradicts", "Leaders had reasons to comply."),
        { row: [
          N("it-pv-king", "act", "The King's caution", null, "Bhumibol advised the government to proceed carefully.", ["pv-compliance"]),
          N("it-pv-fear", "stc", "Fear of the PRC", null, "Cambodia's ties with China could tip the regional balance.", ["pv-compliance"]),
          N("it-pv-intl", "stc", "UN prestige", null, "Defying the ICJ would damage Thailand's standing.", ["pv-compliance"])
        ] },
        K("led to", "Sarit accepted the ruling."),
        N("it-pv-comply", "pol", "Sarit complies", "7 Jul 1962", "Grudgingly — flagpole removed standing; barbed-wire fence.", ["pv-compliance"])
      ] },
    { link: "followed by", how: "The ruling left the land around the temple unsettled.",
      title: "Limits and persistence", summary: "Dormant, then revived.",
      steps: [
        N("it-pv-limit", "res-", "Limits of the ruling", "1962–68", "4.6 km² unsettled; 1963 Thai raid; de Ribbing's mission failed.", ["pv-limits"]),
        K("followed by", "Aligned interests kept the dispute dormant."),
        N("it-pv-dormant", "ctx", "Dormant decades", "1970–2000", "Ideology and security outweighed animosity; 2000 MoU and JBC.", ["pv-later"]),
        K("triggered", "The UNESCO listing revived it."),
        N("it-pv-2008", "res-", "Re-emergence", "2008–11", "26 killed in 2011; ASEAN urged restraint; ICJ demilitarised zone.", ["pv-2008", "pv-chron-3"])
      ] }
  ],
  judge: { prompt: "Why did Thailand comply with the ICJ in 1962? Rank the reasons.",
           factors: ["it-pv-king", "it-pv-fear", "it-pv-intl"],
           notes_view: "The King's opinion, fear of retaliation given Cambodia's PRC ties, and international prestige; compliance was real but grudging." },
  historians: [
    { who: "Shane Strate", view: "Thai newspapers functioned as an echo chamber, making confrontation seem universal rather than radical.", nodes: ["it-pv-outrage"] },
    { who: "Pou Sothirak", view: "The JBC was hampered by terrain, survey problems and mutual mistrust.", nodes: ["it-pv-dormant"] }
  ],
  takeaways: [
    "ICJ ruled 9–3 for Cambodia (15 Jun 1962) because Siam never protested the 1907 map.",
    "Sarit complied (7 Jul 1962) for the King, fear of the PRC and UN prestige — grudgingly.",
    "The ruling left 4.6 km² unsettled; the dispute returned in 2008–11 (26 killed)."
  ]
});

L.push({
  id: "it-compare", order: 15, level: 1, parent: "it-top", kind: "matrix",
  title: "Comparing the four cases",
  question: "How do the causes and resolution of the four disputes compare?",
  intro: "Each cause and the route to resolution, case by case, from the notes' cross-case synthesis and the Preah Vihear lecture.",
  matrix: {
    cols: ["Konfrontasi", "Sabah", "Third Indochina War", "Preah Vihear"],
    rows: [
      { h: "Historical animosity", cells: ["Strong (superiority complex)", "Moderate (Sulu legacy)", "Very strong (centuries of expansion)", "Strong (Siamese incursions; mutual tropes)"] },
      { h: "Colonial borders", cells: ["Present (Borneo territories)", "Central (1878 ambiguity)", "Present (French Indochina unity)", "Central (1904 treaty vs 1907 map)"] },
      { h: "Ethnic-religious rift", cells: ["Minor", "Significant (Moro/Sabah Muslims)", "Significant (Sinic vs Indic)", "Not stressed in notes"] },
      { h: "Ideology", cells: ["Central (communism vs anti-communism)", "Minor", "Central (Sino-Soviet split)", "Significant (neutral Cambodia vs anti-communist Thailand)"] },
      { h: "Border / security", cells: ["Present", "Not contiguous (maritime)", "Central trigger", "Present (1954 occupation; fear of communist infiltration)"] },
      { h: "Role of leaders", cells: ["Decisive (Sukarno/Suharto)", "Decisive (Macapagal/Marcos)", "Significant (Pol Pot/Hanoi)", "Significant (Phibun, Sihanouk, Sarit)"] },
      { h: "Great powers", cells: ["Moderate (UK/Aus/NZ via AMDA)", "Minimal", "Decisive (USSR/China/US)", "Indirect (France; Cold War backdrop of US and PRC)"] },
      { h: "Resolution", cells: ["Regime change; ASEAN co-founding (1965–67)", "Abeyance; 1993 visit, 1998 shelving", "Doi Moi + Paris Conference (1991)", "ICJ ruling (1962) and Thai compliance; 4.6 km² still contested"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "Leaders were decisive in Konfrontasi and Sabah; great powers decisive in the Third Indochina War.",
    "Domestic diversion links Sukarno and Marcos; resolution came with leadership change.",
    "Colonial borders splitting communities recur (Borneo; Moro/Sabah)."
  ]
});

L.push({
  id: "it-arg", order: 16, level: 1, parent: "it-top", kind: "argument",
  title: "Leaders or structure?",
  question: "'Leaders, rather than underlying factors, were the main cause of inter-state tension in SEA.' How far do you agree?",
  intro: "Weigh leaders' decisions against the structural factors that made particular pairs of states prone to conflict.",
  clusters: [
    { title: "Claim", summary: "Leaders mattered most.",
      steps: [ N("it-x-claim", "judg", "Leaders were the main cause", null, "Leaders, rather than underlying factors, were the main cause of inter-state tension.", ["it-leaders"]) ] },
    { link: "supports", how: "Test the claim against all three cases.",
      title: "For and against", summary: "Statesmen vs structures.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("it-x-divert", "evid", "Diversion by Sukarno and Marcos", null, "Both externalised domestic discontent (Aquino's 1968 parallel).", ["it-links-1", "it-aquino-diversion"]),
            K("supports", "Resolution followed changes of leader."),
            N("it-x-change", "evid", "Leadership change ended disputes", null, "Sukarno to Suharto; Marcos to Aquino to Ramos — structure unchanged.", ["it-links-1", "it-konf-resolution"]),
            K("supports", "Timing of the Sabah claim needs a leader's motive."),
            N("it-x-timing", "evid", "Macapagal's timing", "1962", "The claim predated 1962; domestic motives decided when it was raised.", ["it-macapagal"])
          ] },
          { h: "Against", steps: [
            N("it-x-tiw", "evid", "Third Indochina War layered", null, "Animosity, security, Sino-Soviet rivalry, Soviet 'green light' — no single factor.", ["it-tiw-synthesis"]),
            K("contradicts", "Colonial ambiguities gave leaders their material."),
            N("it-x-colonial", "evid", "Colonial legacies", null, "1878 pajakan; borders splitting the Moro community.", ["it-colonial-legacy", "it-links-2"]),
            K("contradicts", "Great powers enabled the gravest conflict."),
            N("it-x-powers", "evid", "Great-power 'green lights'", null, "AMDA in Konfrontasi; Soviet treaty for Vietnam.", ["it-links-2", "it-soviet-treaty"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both sides.",
      title: "Judgement", summary: "Structure sets propensity; leaders decide timing and outcome.",
      steps: [
        N("it-x-judge", "judg", "Leaders decisive within structures", null, "Underlying factors explain propensity; leaders explain timing and resolution — strongest in Konfrontasi and Sabah, weakest in the Third Indochina War.", ["it-compare-causes-2", "it-compare-resolution", "it-key-dates"])
      ] }
  ],
  judge: { prompt: "How far were leaders the main cause? Rank the evidence.", factors: ["it-x-divert", "it-x-change", "it-x-timing", "it-x-tiw", "it-x-colonial", "it-x-powers"],
           notes_view: "Leaders decisive in Konfrontasi and Sabah, significant in the Third Indochina War; de-escalation tracked a change of leader, not of the underlying structural facts." },
  historians: [ { who: "Benigno Aquino Jr.", view: "Marcos, like Sukarno, would 'conjure a foreign devil'.", nodes: ["it-x-divert"] } ],
  takeaways: [
    "For: Sukarno and Marcos diverted domestic discontent; leadership change ended disputes.",
    "Against: the Third Indochina War needs layered causes; colonial borders and great powers mattered.",
    "Best answer: structure sets propensity, leaders decide timing and resolution."
  ]
});
})();
