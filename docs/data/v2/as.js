// v2 flow charts: ASEAN (from ASEAN_Study_Notes; cards in data/as.js)
(function(){ const L = ((window.FLOWS2 = window.FLOWS2 || {}).as = window.FLOWS2.as || []);
const TY = { ctx:"context", ltc:"long_term_cause", stc:"short_term_cause", trig:"trigger", pol:"policy", evt:"event", act:"actor", tp:"turning_point", res:"consequence", evid:"evidence", int:"interpretation", judg:"judgement" };
const N = (id, ty, t, date, d, cards, x) => { const m = /^(\w+)([+\-±])?$/.exec(ty), o = { id, type: TY[m[1]], t, d, cards }; if (m[2]) o.sign = m[2]; if (date) o.date = date; return Object.assign(o, x || {}); };
const K = (link, how) => ({ link, how });

L.push({
  id: "as-top", order: 1, level: 0, kind: "causal",
  title: "ASEAN: formation and effectiveness",
  question: "Why was ASEAN formed in 1967, and how effective was it in economic cooperation and regional security?",
  intro: "Failed precursors and a transformed region produced ASEAN; it grew in three phases, with mixed results in economics and security. Tap a stacked box to open its chart.",
  clusters: [
    { title: "Why ASEAN was formed", summary: "Failed precursors, a new regional environment, mixed motives.",
      steps: [
        N("as-t-pre", "ltc", "Failed precursors", "1954–63", "SEATO (external), ASA (Sabah dispute) and Maphilindo (stillborn).", ["precursors"], { go: "as-precursors" }),
        K("followed by", "After 1965 the region changed enough for a lasting grouping."),
        N("as-t-form", "tp", "ASEAN founded", "8 Aug 1967", "Bangkok Declaration by Indonesia, Malaysia, Philippines, Singapore, Thailand.", ["aseanformation", "as-regional-env"], { go: "as-formation" }),
        K("supports", "Its real motives are debated."),
        N("as-t-motive", "int", "Security or economics?", null, "Official aims economic; founders privately stress security; the two were interlinked.", ["as-primary-motive"], { go: "as-arg-motive" })
      ] },
    { link: "followed by", how: "ASEAN then developed in three phases.",
      title: "How ASEAN developed", summary: "Three phases; the ASEAN Way.",
      steps: [
        N("as-t-phases", "ctx", "Three phases and the ASEAN Way", "1967–1992+", "Loose cooperation, then formalisation after 1976, then institutionalisation after 1992; informality and consensus throughout.", ["as-phases", "as-asean-way"], { go: "as-growth" }),
        K("followed by", "The 1976 summit marked the move to formal structures."),
        N("as-t-bali", "tp", "Bali Summit and TAC", "Feb 1976", "First summit; TAC principles and an (unused) High Council.", ["bali76", "as-tac-highcouncil"], { go: "as-bali" })
      ] },
    { link: "led to", how: "ASEAN's record can be judged in two fields.",
      title: "Effectiveness", summary: "Security and economics, with mixed results.",
      steps: [
        { split: [
          { h: "Security", steps: [
            { row: [
              N("as-t-early", "evt", "Early intra-ASEAN tensions", "1968–69", "Sabah and Singapore–Indonesia rows managed without war.", ["as-sabah-asean", "as-sg-indon-1968"], { go: "as-early" }),
              N("as-t-zopfan", "pol", "ZOPFAN", "1971", "A neutral zone that stayed aspirational.", ["zopfan"], { go: "as-zopfan" })
            ] },
            K("followed by", "Vietnam's invasion of Cambodia tested ASEAN most."),
            N("as-t-cambodia", "tp", "Cambodian Crisis", "1978–91", "Unity and standing, but division and marginalisation at the end.", ["cambodiacrisis", "as-cambodia-eval"], { go: "as-cambodia" }),
            K("followed by", "After the Cold War, ASEAN led wider security dialogue."),
            { row: [
              N("as-t-arf", "pol", "ARF", "1994", "Convening power, limited leverage.", ["arf"], { go: "as-arf" }),
              N("as-t-scs", "evt", "South China Sea", "1974–2018", "Disputes persist; China prefers bilateral talks.", ["scs"], { go: "as-scs" })
            ] }
          ] },
          { h: "Economics", steps: [
            N("as-t-econ1", "res-", "Early schemes fail", "1977–83", "PTA, AIP, AIC, AIJV undone by the ISI mindset.", ["earlyecon"], { go: "as-econ-early" }),
            K("followed by", "After the Cold War ASEAN made economics its priority."),
            N("as-t-afta", "pol", "AFTA", "1992", "Tariffs cut sharply; NTBs rose and trade share stagnated.", ["afta", "as-afta-eval"], { go: "as-afta" }),
            K("followed by", "The 1997 crisis tested the new cooperation."),
            N("as-t-afc", "evt", "AFC and ASEAN+3", "1997–2000", "Surveillance, ASEAN+3 and the Chiang Mai Initiative.", ["as-afc"], { go: "as-afc" })
          ] }
        ] }
      ] },
    { link: "followed by", how: "Expansion completed 'one Southeast Asia' but strained non-interference.",
      title: "Expansion and verdict", summary: "Bigger, more diverse, harder to unite.",
      steps: [
        N("as-t-expand", "evt", "Expansion to ten", "1984–1999", "Brunei, Vietnam, Laos, Myanmar, Cambodia; non-interference applied inconsistently.", ["expansion", "as-noninterference"], { go: "as-expansion" }),
        K("supports", "Weighing all areas gives a mixed verdict."),
        N("as-t-verdict", "judg", "Effective at managing, not solving", null, "Sustained indigenous cooperation and kept disputes from war, but the ASEAN Way limited decisive action.", ["as-sum-formation-inst", "as-sum-security-econ", "as-sum-external-ni"], { go: "as-eval" })
      ] }
  ],
  judge: { prompt: "In which area was ASEAN most effective? Rank them.",
           factors: ["as-t-early", "as-t-cambodia", "as-t-arf", "as-t-afta", "as-t-afc"],
           notes_view: "Security: managed disputes without armed conflict and won standing over Cambodia, but ZOPFAN aspirational, High Council unused, SCS unresolved. Economics: AFTA met targets early but NTBs rose and trade share stagnated." },
  historians: [],
  takeaways: [
    "Founded 8 Aug 1967 after SEATO, ASA and Maphilindo failed, in a region transformed after 1965.",
    "Three phases: loose cooperation (1967–76), formalisation and security (1976–92), institutionalisation with economics (1992+).",
    "The ASEAN Way — informality, consensus, non-interference — was both its strength and its limit."
  ]
});

L.push({
  id: "as-precursors", order: 2, level: 3, parent: "as-top", kind: "causal",
  title: "Failed precursors: SEATO, ASA, Maphilindo",
  question: "Why did earlier attempts at regional cooperation fail?",
  intro: "An external alliance, a local association without Indonesia, and a confederation born amid Konfrontasi all failed — but ASA laid ASEAN's foundations.",
  clusters: [
    { title: "SEATO", summary: "An outsider's alliance.",
      steps: [
        N("as-p-seato", "pol", "SEATO formed", "Sep 1954", "US/John Foster Dulles' anti-communist alliance modelled on NATO; only 2 SEA members (Thailand, Philippines) of 8.", ["as-seato", "as-timeline-1954-63"]),
        K("constrained", "Members joined for different reasons, so it had no common purpose."),
        N("as-p-diverge", "res-", "Divergent interests", null, "Pakistan joined to counter India; Philippines cared about internal security; Thailand saw itself as frontline.", ["as-seato"]),
        K("followed by", "The US then pulled back from the region."),
        N("as-p-usout", "evt", "US disengages", "1968–73", "After the Tet Offensive (1968) and Paris Peace Accords (1973).", ["as-seato"]),
        K("led to", "Without US commitment SEATO could not stop communist victories."),
        N("as-p-paper", "res-", "A 'paper tiger'", "1975–77", "Pathet Lao took Laos, Khmer Rouge took Cambodia (1975); dissolved 1977.", ["as-seato"])
      ] },
    { link: "followed by", how: "Southeast Asians then tried a local grouping.",
      title: "ASA", summary: "Local initiative without Indonesia.",
      steps: [
        N("as-p-asa", "pol", "ASA formed", "Jul 1961", "Tunku's 'Asian solutions to Asian problems'; Malaya, Thailand, Philippines.", ["as-asa", "as-timeline-1954-63"]),
        K("undermined", "Sukarno's Indonesia stayed out, calling it 'anti-this and anti-that'."),
        N("as-p-noindo", "res-", "Indonesia absent", null, "Its absence was fatal.", ["as-asa"]),
        K("followed by", "Then a territorial claim split two members."),
        N("as-p-sabah", "trig", "Philippine Sabah claim", "1962", "Caused a Malaysia–Philippines diplomatic rupture.", ["as-asa", "as-timeline-1954-63"]),
        K("led to", "ASA was paralysed, though revived in 1966 as ASEAN's base."),
        N("as-p-asabase", "res±", "ASA sabotaged, then revived", "Mar 1966", "Revived March 1966; ASEAN built on its foundations.", ["as-asa"])
      ] },
    { link: "followed by", how: "In 1963 a confederation was attempted during Konfrontasi.",
      title: "Maphilindo", summary: "Stillborn amid Konfrontasi.",
      steps: [
        N("as-p-konf", "ctx", "Konfrontasi begins", "Apr 1963", "Indonesia vs Malaysia.", ["as-timeline-1954-63"]),
        K("followed by", "The Philippines convened a loose confederation."),
        N("as-p-maph", "pol", "Maphilindo (Manila Accord)", "31 Jul 1963", "Loose confederation of Malaya, Philippines, Indonesia.", ["as-maphilindo"]),
        K("undermined", "Malaysia's creation in September broke it apart."),
        N("as-p-collapse", "res-", "Collapses in 2 months", "Sep 1963", "Malaysia formed; Malaysia–Philippines ties severed.", ["as-maphilindo", "as-timeline-1954-63"])
      ] },
    { link: "supports", how: "The failures showed what a lasting grouping needed.",
      title: "Lessons", summary: "Indigenous, inclusive, after Konfrontasi.",
      steps: [
        N("as-p-lesson", "judg", "Conditions for success", null, "Cooperation needed local initiative, Indonesia's inclusion and an end to bilateral disputes.", ["precursors"],
          { ev: ["Chin Kin Wah: ASEAN more promising 'in view of the transformed regional environment following the end of Confrontation and the inclusion of Indonesia'."] })
      ] }
  ],
  judge: { prompt: "What was the main reason the precursors failed? Rank them.",
           factors: ["as-p-diverge", "as-p-noindo", "as-p-sabah", "as-p-collapse"],
           notes_view: "SEATO failed as externally initiated; ASA was sabotaged by the Sabah dispute and Indonesia's absence; Maphilindo was stillborn amid Confrontation." },
  historians: [
    { who: "Chin Kin Wah", view: "Maphilindo was stillborn given its hasty conception amid Confrontation.", nodes: ["as-p-collapse"] },
    { who: "Mary Turnbull", view: "ASA was a 'new and significant step' arising from local initiatives.", nodes: ["as-p-asa"] }
  ],
  takeaways: [
    "SEATO (1954): externally initiated, divergent interests, a 'paper tiger' dissolved in 1977.",
    "ASA (1961): local, but without Indonesia and wrecked by the Sabah claim; revived 1966 as ASEAN's base.",
    "Maphilindo (1963): stillborn amid Konfrontasi."
  ]
});

L.push({
  id: "as-formation", order: 3, level: 1, parent: "as-top", kind: "causal",
  title: "Why ASEAN was formed in 1967",
  question: "Why was ASEAN formed in 1967?",
  intro: "Separation, Suharto and Marcos removed the old flashpoints; British and US withdrawal and communist threats created urgency; each member brought its own motive.",
  clusters: [
    { title: "A transformed region", summary: "Old flashpoints removed.",
      steps: [
        { row: [
          N("as-f-sep", "trig", "Singapore separates", "Aug 1965", "Removed the main intra-regional flashpoint; bilateral tensions dissipated.", ["as-regional-env", "as-timeline-1965-67"]),
          N("as-f-suharto", "trig", "Suharto's New Order", "1965–66", "Replaced Sukarno; Indonesia abandoned Konfrontasi (ended Aug 1966).", ["as-regional-env", "as-timeline-1965-67"]),
          N("as-f-marcos", "trig", "Marcos recognises Malaysia", "Jun 1966", "Moderate stance from Dec 1965; ties restored.", ["as-regional-env", "as-timeline-1965-67"])
        ] },
        K("enabled", "With Konfrontasi over and Indonesia willing, sustainable cooperation became possible.")
        ,
        N("as-f-possible", "res+", "Cooperation possible", "1966–67", "Indonesia eager to join as a platform for legitimate leadership and recovery.", ["as-regional-env", "as-tensions-motive"], { ev: ["ASEAN gave a framework to 'bury the hatchet', esp. Indonesia–Malaysia and Malaysia–Philippines; failed precedents showed bilateral conflict was unsustainable."] })
      ] },
    { link: "intensified", how: "Outside powers' retreat made a regional platform urgent.",
      title: "External uncertainty", summary: "Britain and the US pull back.",
      steps: [
        { row: [
          N("as-f-suez", "stc", "British 'East of Suez' withdrawal", "Jan 1968", "SEA states must provide their own security.", ["as-regional-env", "as-security-context"]),
          N("as-f-nixon", "stc", "Nixon Doctrine", "1969", "US military disengagement; 'Vietnamisation'.", ["as-regional-env", "as-security-context"])
        ] },
        K("led to", "Uncertainty created urgency for a collective platform."),
        N("as-f-urgent", "res±", "Urgency to hang together", null, "'Hang together or hang separately' (Rajaratnam).", ["as-security-motive", "as-rajaratnam-fear"])
      ] },
    { link: "intensified", how: "Communist pressure gave the strongest unspoken motive.",
      title: "Communist threat", summary: "Fear of falling dominoes.",
      steps: [
        { row: [
          N("as-f-nv", "ltc", "Communist movements backed", "1960s", "North Vietnam and the PRC backed the CPT, BCP, MCP; PKI recently crushed.", ["as-security-motive"]),
          N("as-f-cr", "stc", "Cultural Revolution", "Aug 1966–", "'Dominated the consciousness of Asia' (Hagiwara).", ["as-security-motive"])
        ] },
        K("led to", "Leaders feared communist Indochina would spread south."),
        N("as-f-domino", "int", "Domino Theory fears", null, "Fear of US abandonment as Sino-US ties improved.", ["as-security-motive"])
      ] },
    { link: "led to", how: "Founders combined these pressures with economic and diplomatic aims.",
      title: "Founding and aims", summary: "A deliberately vague declaration.",
      steps: [
        N("as-f-bangkok", "tp", "Bangkok Declaration", "8 Aug 1967", "'To accelerate economic growth, social progress and cultural development'.", ["aseanformation", "as-econ-motive", "as-bangkok-decl"],
          { ev: ["Vague wording deliberate: keep it inclusive and avoid antagonising any party.", "Seven aims include peace and stability under the UN Charter, collaboration, training, agriculture and trade, SEA studies."] }),
        K("led to", "Each member joined with its own primary aim."),
        { row: [
          N("as-f-indo", "act", "Indonesia: leadership", null, "Regional leadership and credibility after Konfrontasi; Western aid to fix Sukarno's economic mess.", ["as-member-motives", "as-econ-motive"]),
          N("as-f-my", "act", "Malaysia: disputes, development", null, "Resolve Konfrontasi fallout and Sabah; economic development.", ["as-member-motives"]),
          N("as-f-ph", "act", "Philippines: Sabah forum", null, "A forum for the Sabah claim; 'destiny to the East' (1968).", ["as-member-motives"]),
          N("as-f-sg", "act", "Singapore: a 'cage'", null, "Constrain larger neighbours; stability.", ["as-member-motives"]),
          N("as-f-th", "act", "Thailand: communist threat", null, "Frontline vs Vietnam; disappointed by SEATO.", ["as-member-motives"])
        ] }
      ] }
  ],
  judge: { prompt: "What was the most important reason for ASEAN's formation? Rank them.",
           factors: ["as-f-possible", "as-f-urgent", "as-f-domino", "as-f-bangkok"],
           notes_view: "Security and economic aims were interlinked — neither alone is sufficient; each member had its own primary motivation (Leifer: security 'even if only as a condition for development')." },
  historians: [
    { who: "S. Rajaratnam", view: "Born 'out of fear'; 'hang together or hang separately'.", nodes: ["as-f-urgent"] },
    { who: "Hagiwara", view: "The Cultural Revolution 'dominated the consciousness of Asia'.", nodes: ["as-f-cr"] },
    { who: "Estrella Solidum", view: "The Philippines' destiny shifted from West to East.", nodes: ["as-f-ph"] }
  ],
  takeaways: [
    "Catalysts: Separation (1965), Suharto ending Konfrontasi, Marcos recognising Malaysia (Jun 1966).",
    "Urgency: British withdrawal (1968), Nixon Doctrine (1969), communist movements and the Domino Theory.",
    "Each member had its own primary motive; the Bangkok Declaration was deliberately vague."
  ]
});

L.push({
  id: "as-arg-motive", order: 4, level: 1, parent: "as-top", kind: "argument",
  title: "Was ASEAN formed mainly for security?",
  question: "'ASEAN was formed primarily for politico-security reasons.' How far do you agree?",
  intro: "The official aims were economic, but founders privately stressed security; the notes conclude the two were interlinked.",
  clusters: [
    { title: "Claim", summary: "Security first.",
      steps: [ N("as-m-claim", "judg", "Security was primary", null, "ASEAN was formed primarily for politico-security reasons.", ["as-primary-motive"]) ] },
    { link: "supports", how: "Test the claim against both sides.",
      title: "For and against", summary: "Founders' words vs official aims.",
      steps: [
        { split: [
          { h: "For", steps: [
            N("as-m-lky", "evid", "LKY: political objectives", null, "'We were banding together more for political objectives, stability and security.'", ["as-primary-motive"]),
            K("supports", "Other founders said the same."),
            N("as-m-raj", "evid", "Rajaratnam: born of fear", "1992", "'Born… out of fear rather than idealistic convictions'; fear of falling dominoes.", ["as-rajaratnam-fear"]),
            K("supports", "Scholars agree security came first."),
            N("as-m-leifer", "evid", "Leifer and Shee", null, "Security the 'central preoccupation'; 'common fears and weaknesses'.", ["as-scholars-1", "as-scholars-2", "aseanformation"])
          ] },
          { h: "Against", steps: [
            N("as-m-decl", "evid", "Bangkok Declaration's aims", null, "Economic growth, social progress and cultural development stressed.", ["as-econ-motive", "as-bangkok-decl"]),
            K("contradicts", "Indonesia needed economic help."),
            N("as-m-aid", "evid", "Indonesia needed aid", null, "Suharto needed Western aid and investment; membership boosted credibility.", ["as-econ-motive"]),
            K("contradicts", "A founder denied any military purpose."),
            N("as-m-thanat", "evid", "Thanat: no military entanglement", null, "Cooperative security was a means, not an end.", ["as-primary-motive"])
          ] }
        ] }
      ] },
    { link: "led to", how: "Weighing both sides.",
      title: "Judgement", summary: "Interlinked aims.",
      steps: [
        N("as-m-judge", "judg", "Interlinked; varied by member", null, "Security and economics were interlinked — development denied communists fertile ground; each member had its own priority.", ["as-primary-motive", "as-member-motives"],
          { ev: ["Official stance stressed economics partly so ASEAN would not look like a military bloc (Indonesia feared Soviet/Chinese reaction)."] })
      ] }
  ],
  judge: { prompt: "How far was ASEAN formed for security reasons? Rank the evidence.",
           factors: ["as-m-lky", "as-m-raj", "as-m-leifer", "as-m-decl", "as-m-aid", "as-m-thanat"],
           notes_view: "Security and economic aims were interlinked — neither alone is sufficient; each member had its own primary motivation." },
  historians: [
    { who: "Lee Kuan Yew", view: "ASEAN's real purpose was political and security.", nodes: ["as-m-lky"] },
    { who: "Michael Leifer", view: "Central preoccupation was regional security, even if only as a condition for development.", nodes: ["as-m-leifer"] },
    { who: "Thanat Khoman", view: "ASEAN deliberately excluded military entanglement.", nodes: ["as-m-thanat"] }
  ],
  takeaways: [
    "Founders (LKY, Rajaratnam, Malik) privately confirm security was central.",
    "Official aims were economic, partly to avoid looking like a military bloc.",
    "Best answer: interlinked aims, with different priorities per member."
  ]
});

L.push({
  id: "as-growth", order: 5, level: 1, parent: "as-top", kind: "chain",
  title: "ASEAN's growth and the ASEAN Way",
  question: "How did ASEAN develop, and what were the strengths and weaknesses of the ASEAN Way?",
  intro: "Loose cooperation, formalisation, then institutionalisation — held together by informality and consensus that also made it slow.",
  clusters: [
    { title: "Phase 1: loose cooperation", summary: "1967–1976.",
      steps: [
        N("as-g-ph1", "ctx", "Confidence-building", "1967–1976", "Minimal institutional progress; aim to stabilise post-Konfrontasi relations.", ["as-phases"]),
        K("constrained", "Weak machinery limited what it could do."),
        N("as-g-mach", "res-", "Weak early machinery", "1967–1976", "Foreign ministers' AMM; 5 understaffed national secretariats; only ~1/5 of committee suggestions implemented.", ["as-early-machinery"])
      ] },
    { link: "followed by", how: "Communist victories in Indochina prompted formalisation.",
      title: "Phase 2: formalisation", summary: "1976–1992, security to the fore.",
      steps: [
        N("as-g-ph2", "tp", "Bali Summit", "1976", "TAC, Concord, central Secretariat; Vietnam's invasion of Cambodia (1978–79) drove security activity.", ["as-phases", "bali76"])
      ] },
    { link: "followed by", how: "The end of the Cold War and rival blocs shifted the focus to economics.",
      title: "Phase 3: institutionalisation", summary: "1992 onwards.",
      steps: [
        N("as-g-ph3", "tp", "1992 Singapore Summit", "Jan 1992", "AFTA agreed; Secretariat upgraded; from confidence-building to problem-solving.", ["as-phases", "as-singapore92"])
      ] },
    { link: "enabled", how: "Throughout, a distinctive style held members together.",
      title: "The ASEAN Way", summary: "Informality, consensus, non-interference.",
      steps: [
        N("as-g-way", "ctx", "The ASEAN Way", "1967 onwards", "Informality, personal relations among leaders, consensus rather than binding commitments (Severino).", ["as-asean-way"]),
        K("led to", "The style had clear benefits and costs."),
        { split: [
          { h: "Strengths", steps: [
            N("as-g-str", "res+", "Diversity accommodated", null, "Preserved sovereignty of ex-colonial states; leaders' personal ties eased compromise; kept all parties at the table.", ["as-asean-way-eval"])
          ] },
          { h: "Weaknesses", steps: [
            N("as-g-weak", "res-", "'Plans more than action'", null, "Vague agreements (Tay); slow consensus; no enforcement; inaction on haze, Myanmar, SCS.", ["as-asean-way-eval"])
          ] }
        ] }
      ] }
  ],
  judge: { prompt: "Was the ASEAN Way more a strength or a weakness? Rank the factors.",
           factors: ["as-g-mach", "as-g-way", "as-g-str", "as-g-weak"],
           notes_view: "The ASEAN Way was both its strength and its limit: it accommodated diversity and kept parties talking, but produced vague, slow, unenforceable agreements." },
  historians: [
    { who: "Rodolfo Severino", view: "Informality and consensus are the ASEAN Way's defining feature.", nodes: ["as-g-way"] },
    { who: "Tay", view: "The ASEAN Way produces 'plans more than action'.", nodes: ["as-g-weak"] }
  ],
  takeaways: [
    "Three phases: 1967–76 loose; 1976–92 formalisation (security); 1992+ institutionalisation (economics).",
    "The ASEAN Way: informality, personal ties, consensus, non-interference.",
    "Strength (diversity, sovereignty) and weakness (vague, slow, unenforceable)."
  ]
});

L.push({
  id: "as-early", order: 6, level: 3, parent: "as-top", kind: "causal",
  title: "Early tensions: Sabah and Singapore–Indonesia",
  question: "How did ASEAN cope with intra-ASEAN tensions in 1968–69?",
  intro: "Months after founding, members clashed over Sabah and the MacDonald House bombers; ASEAN could not resolve these but kept them from war.",
  clusters: [
    { title: "The Sabah crisis", summary: "Corregidor to Cameron Highlands.",
      steps: [
        N("as-e-corr", "trig", "Corregidor Affair", "1968", "Philippines secretly trained Sabah operatives (Jabidah Massacre) — 7 months after ASEAN's founding.", ["as-sabah-asean"]),
        K("followed by", "The Philippines then legislated its claim."),
        N("as-e-ra", "evt", "Republic Act 5446", "Sep 1968", "Asserted Philippine sovereignty over Sabah.", ["as-sabah-asean"]),
        K("led to", "Both sides withdrew ambassadors and ASEAN activities stopped."),
        N("as-e-susp", "res-", "ASEAN activities suspended", "1968–69", "Ambassadors withdrawn.", ["as-sabah-asean"]),
        K("followed by", "ASEAN meetings became a place to cool off."),
        N("as-e-restore", "res+", "Ties restored", "Dec 1969", "At the 3rd AMM in Cameron Highlands; informal diplomacy prevented armed hostilities.", ["as-sabah-asean"])
      ] },
    { link: "followed by", how: "Another pair of members clashed the same year.",
      title: "Singapore–Indonesia", summary: "Executions and an embassy ransacked.",
      steps: [
        N("as-e-exec", "trig", "MacDonald House bombers executed", "Oct 1968", "Singapore executed the Indonesian marines.", ["as-sg-indon-1968"]),
        K("provoked response", "Indonesians retaliated against Singapore's mission."),
        N("as-e-embassy", "res-", "Jakarta embassy ransacked", "Oct 1968", "Tensions lasted years.", ["as-sg-indon-1968"])
      ] },
    { link: "supports", how: "Both cases show what early ASEAN could and could not do.",
      title: "Verdict", summary: "Managed, not resolved.",
      steps: [
        N("as-e-verdict", "judg", "Early ASEAN Way of conflict management", null, "ASEAN could not resolve disputes but managed them without armed conflict (Acharya).", ["as-sabah-asean", "as-sum-security-econ"])
      ] }
  ],
  historians: [ { who: "Amitav Acharya", view: "ASEAN managed Sabah through conflict avoidance — an 'early ASEAN Way of conflict management'.", nodes: ["as-e-verdict"] } ],
  takeaways: [
    "Corregidor (1968) and Republic Act 5446 suspended ASEAN activities; ties restored Dec 1969.",
    "Oct 1968 executions led to the Jakarta embassy being ransacked: tensions persisted after 1967.",
    "ASEAN meetings acted as 'cooling-off' platforms: managed, not resolved."
  ]
});

L.push({
  id: "as-bali", order: 7, level: 3, parent: "as-top", kind: "causal",
  title: "The 1976 Bali Summit and the TAC",
  question: "Why was the Bali Summit held, and how significant was the TAC?",
  intro: "Communist victories in 1975 forced ASEAN's first summit; the TAC set lasting norms but its High Council was never used.",
  clusters: [
    { title: "Why 1976", summary: "Indochina falls; protectors leave.",
      steps: [
        { row: [
          N("as-b-saigon", "trig", "Communist victories", "1975", "Fall of Saigon; Pathet Lao in Laos; Khmer Rouge in Cambodia.", ["bali76", "as-security-context"]),
          N("as-b-withdraw", "stc", "US and British withdrawal", "1971–73", "US after the Paris Accords; British military gone from SEA.", ["bali76"])
        ] },
        K("led to", "ASEAN needed to show solidarity."),
        N("as-b-summit", "tp", "Bali Summit", "Feb 1976", "First time the 5 heads of government met together.", ["bali76"])
      ] },
    { link: "led to", how: "The summit produced new principles and structures.",
      title: "Outputs", summary: "Concord, TAC, Secretariat.",
      steps: [
        { row: [
          N("as-b-concord", "pol", "Declaration of ASEAN Concord", "1976", "Reaffirmed aims and ZOPFAN; improved structure.", ["bali76"]),
          N("as-b-tac", "pol", "Treaty of Amity and Cooperation", "1976", "Six principles incl. non-interference, peaceful settlement, renouncing force.", ["as-tac-principles", "as-tac-highcouncil"]),
          N("as-b-sec", "pol", "Central Secretariat, AEMM", "1976", "One Secretariat replaced 5 national ones; Economic Ministers Meeting set up.", ["bali76", "as-early-machinery"])
        ] },
        K("supports", "Observers saw the effect as psychological as much as structural."),
        N("as-b-atmos", "evid", "'Atmospherics of great consequence'", null, "An Australian DFA officer's verdict.", ["bali76"])
      ] },
    { link: "followed by", how: "The TAC's dispute machinery was then tested.",
      title: "The High Council in practice", summary: "Never used.",
      steps: [
        N("as-b-hc", "pol", "High Council", "1976", "Could recommend mediation, conciliation, good offices; non-binding.", ["as-tac-highcouncil"]),
        K("undermined", "Members would not sit in judgement on each other."),
        N("as-b-unused", "res-", "Never used", "to 2001", "Rules of procedure only adopted 2001; Sipadan-Ligitan went to the ICJ instead.", ["as-tac-highcouncil"]),
        K("contradicts", "Yet the TAC spread far beyond ASEAN."),
        N("as-b-export", "res+", "TAC norms exported", "1992 onwards", "Vietnam and Laos acceded 1992; then China, Russia, the US.", ["as-tac-export"])
      ] }
  ],
  judge: { prompt: "How significant was the Bali Summit? Rank its outcomes.",
           factors: ["as-b-tac", "as-b-sec", "as-b-unused", "as-b-export"],
           notes_view: "A watershed of formalisation that set norms widely adopted, but the unused High Council shows reluctance to judge fellow members." },
  historians: [ { who: "Amitav Acharya", view: "TAC/High Council a progressive step even if unproven.", nodes: ["as-b-hc"] } ],
  takeaways: [
    "Called after 1975's communist victories: the first meeting of the 5 heads of government.",
    "Produced the Concord, the TAC (six principles) and a central Secretariat.",
    "High Council never used (Sipadan-Ligitan went to the ICJ), but TAC norms spread to China, Russia, the US."
  ]
});

L.push({
  id: "as-zopfan", order: 8, level: 3, parent: "as-top", kind: "causal",
  title: "ZOPFAN, 1971",
  question: "How effective was ZOPFAN?",
  intro: "Malaysia's plan for a neutral Southeast Asia split the members and stayed aspirational; the Cambodian Crisis undermined it further.",
  clusters: [
    { title: "The declaration", summary: "Malaysia's neutrality plan.",
      steps: [
        N("as-z-decl", "pol", "ZOPFAN declared", "27 Nov 1971", "Championed by Tun Razak/Tun Ismail; SEA 'free from any form or manner of interference by outside Powers'.", ["zopfan"]),
        K("provoked response", "Members reacted according to their security needs.")
        ,
        { split: [
          { h: "Supportive", steps: [ N("as-z-indo", "act", "Indonesia: strong supporter", null, "Full self-reliance; wanted all foreign bases out.", ["as-zopfan-stances"]), K("supports", "Malaysia designed it."), N("as-z-my", "act", "Malaysia: architect", null, "Neutralisation guaranteed by the major powers.", ["as-zopfan-stances"]) ] },
          { h: "Wary", steps: [ N("as-z-phth", "act", "Philippines, Thailand: cautious", null, "US bases; frontline Thailand needed outside support.", ["as-zopfan-stances"]), K("supports", "Singapore was most doubtful."), N("as-z-sg", "act", "Singapore: sceptical", null, "Wanted all powers engaged; balance of power; relied on FPDA.", ["as-zopfan-stances"]) ] }
        ] }
      ] },
    { link: "led to", how: "Without common security interests, ZOPFAN was never implemented.",
      title: "Outcome", summary: "Aspiration, not reality.",
      steps: [
        N("as-z-never", "res-", "Never fully implemented", "1971–95", "Indochinese wars continued with US, USSR and China involved.", ["as-zopfan-eval"]),
        K("intensified", "ASEAN then took sides in a great-power conflict."),
        N("as-z-cambodia", "res-", "Undermined by Cambodia", "1979–91", "ASEAN sided with the US and China against Vietnam.", ["as-zopfan-eval"]),
        K("followed by", "A nuclear-free zone came 24 years later."),
        N("as-z-seanwfz", "evt", "SEANWFZ", "1995", "Codified a nuclear-free zone; the 24-year lag shows no common security interest.", ["as-zopfan-eval"])
      ] },
    { link: "supports", how: "Weighing failure against its value as a norm.",
      title: "Verdict", summary: "Long-term aspiration.",
      steps: [ N("as-z-verdict", "judg", "Aspiration that kept contact", null, "Leifer: always a long-term aspiration that permitted regular contact and reaffirmed principles.", ["as-zopfan-eval"]) ] }
  ],
  judge: { prompt: "Why did ZOPFAN fail? Rank the reasons.", factors: ["as-z-sg", "as-z-phth", "as-z-never", "as-z-cambodia"],
           notes_view: "The 24-year lag to SEANWFZ demonstrates the absence of common security interests; Narine says Cambodia symbolically undermined ZOPFAN, while Leifer sees a long-term aspiration." },
  historians: [
    { who: "Shaun Narine", view: "The Cambodian Crisis 'symbolically undermined ZOPFAN'.", nodes: ["as-z-cambodia"] },
    { who: "Michael Leifer", view: "ZOPFAN was a long-term aspiration.", nodes: ["as-z-verdict"] }
  ],
  takeaways: [
    "Malaysia's ZOPFAN (1971) sought freedom from outside interference.",
    "Members split: Indonesia keen; Philippines/Thailand cautious; Singapore sceptical.",
    "Never implemented; SEANWFZ only in 1995 — evidence of no common security interest."
  ]
});

L.push({
  id: "as-cambodia", order: 9, level: 3, parent: "as-top", kind: "evaluation",
  title: "The Cambodian Crisis, 1978–1991",
  question: "How effective was ASEAN in the Cambodian Crisis?",
  intro: "ASEAN responded swiftly and won international backing, but split over strategy, backed the Khmer Rouge and was sidelined in the final settlement.",
  clusters: [
    { title: "Invasion", summary: "Vietnam installs Heng Samrin.",
      steps: [
        N("as-c-rival", "ltc", "Sino-Soviet rivalry", null, "USSR–Vietnam vs China–Cambodia; Vietnam feared encirclement by pro-Chinese forces.", ["cambodiacrisis"]),
        K("triggered", "Vietnam struck first."),
        N("as-c-invade", "trig", "Vietnam invades Cambodia", "25 Dec 1978", "Deposed the Khmer Rouge; installed Heng Samrin.", ["cambodiacrisis"])
      ] },
    { link: "provoked response", how: "ASEAN reacted within days.",
      title: "ASEAN's response", summary: "Swift condemnation, UN action, the CGDK.",
      steps: [
        N("as-c-condemn", "pol", "Swift condemnation", "9–12 Jan 1979", "Indonesian FM condemned Vietnam; Bangkok meeting demanded withdrawal.", ["cambodiacrisis", "as-cambodia-unity"]),
        K("led to", "ASEAN took the issue to the UN."),
        N("as-c-un", "pol", "UN resolution", "Nov 1979", "Adopted by the General Assembly; Heng Samrin denied the UN seat.", ["cambodiacrisis"]),
        K("led to", "To keep the seat from Heng Samrin, ASEAN built a coalition."),
        N("as-c-cgdk", "pol", "CGDK coalition", "1982", "FUNCINPEC, KPNLF and the Khmer Rouge: 'morality versus realism'.", ["as-cgdk"])
      ] },
    { link: "followed by", how: "Members then disagreed about how to deal with Vietnam.",
      title: "Disunity", summary: "Thailand vs Indonesia/Malaysia.",
      steps: [
        { row: [
          N("as-c-kuantan", "evt", "Kuantan Declaration", "Mar 1980", "Indonesia and Malaysia sought to 'meet Vietnam halfway'; Thailand rejected it.", ["as-cambodia-disunity"]),
          N("as-c-52", "evt", "5+2 Talks blocked", "Mar 1983", "Thailand and China blocked ASEAN + Vietnam + Laos talks.", ["as-cambodia-disunity"]),
          N("as-c-chat", "evt", "'Battlefields to Marketplaces'", "1988", "Chatichai's unilateral economic links with Vietnam; others forced Thailand to qualify.", ["as-cambodia-disunity"])
        ] }
      ] },
    { link: "followed by", how: "A softer line eventually brought Vietnam to talks.",
      title: "Towards settlement", summary: "JIM, then the P5.",
      steps: [
        N("as-c-appeal", "pol", "ASEAN Appeal", "Sep 1983", "Conciliatory evolution; Thailand softened; unity improved.", ["as-cambodia-unity"]),
        K("led to", "Informal meetings followed."),
        N("as-c-jim", "tp", "JIM I", "Jul 1988", "Brought Vietnam to the table for the first time; 6 settlement elements.", ["as-cambodia-unity"]),
        K("followed by", "The great powers and UN took over."),
        N("as-c-p5", "res-", "Settled by P5 / UNTAC", "1991", "ASEAN marginalised in the final resolution.", ["as-cambodia-eval"])
      ] },
    { link: "supports", how: "Weighing unity and standing against division and moral cost.",
      title: "Verdict", summary: "Remarkable solidarity, limited control.",
      steps: [
        { split: [
          { h: "Success", steps: [ N("as-c-succ", "res+", "Credible regional actor", null, "Kept Cambodia on the agenda; mobilised global opposition; 'remarkable solidarity' (Severino).", ["as-cambodia-eval"]) ] },
          { h: "Limits", steps: [ N("as-c-moral", "res-", "Division and moral failure", null, "Internal splits; backing the genocidal Khmer Rouge as legitimate.", ["as-cambodia-eval"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "How effective was ASEAN in the Cambodian Crisis? Rank the factors.",
           factors: ["as-c-condemn", "as-c-un", "as-c-cgdk", "as-c-kuantan", "as-c-jim", "as-c-p5"],
           notes_view: "'Remarkable solidarity' as a community-building exercise and international standing, but internal divisions, moral failure and marginalisation in the final settlement." },
  historians: [
    { who: "Rodolfo Severino", view: "ASEAN showed 'remarkable solidarity' over Cambodia.", nodes: ["as-c-succ"] },
    { who: "Shaun Narine", view: "ASEAN took sides in a great-power conflict, undermining ZOPFAN.", nodes: ["as-c-cgdk"] }
  ],
  takeaways: [
    "Swift condemnation (Jan 1979), UN resolution (Nov 1979) and the CGDK (1982) — including the Khmer Rouge.",
    "Disunity: Kuantan (1980), 5+2 Talks (1983), Chatichai (1988).",
    "JIM I (1988) brought Vietnam to talks, but the P5/UNTAC settled it."
  ]
});

L.push({
  id: "as-econ-early", order: 10, level: 3, parent: "as-top", kind: "causal",
  title: "Early economic schemes, 1977–1983",
  question: "Why did ASEAN's early economic schemes fail?",
  intro: "PTA, AIP, AIC and AIJV promised integration but delivered little, because members still saw each other as competitors.",
  clusters: [
    { title: "Root cause", summary: "The ISI mindset.",
      steps: [
        N("as-x-isi", "ltc", "ISI mindset", null, "Import-substituting economies saw each other as COMPETITORS; national interest over regional.", ["earlyecon"]),
        K("intensified", "Their trade also faced outward."),
        N("as-x-exports", "ltc", "Exports went outside ASEAN", null, "Rubber, tin, timber, palm oil sold to developed markets (UNIDO 1983).", ["earlyecon"])
      ] },
    { link: "constrained", how: "Each scheme was hollowed out by these competing interests.",
      title: "The schemes", summary: "Four attempts.",
      steps: [
        N("as-x-pta", "pol", "PTA", "Feb 1977", "Tariff preferences — including 'snow ploughs and nuclear reactors'.", ["as-pta", "as-econ-timeline-1"]),
        K("led to", "Preferences on goods no one traded changed nothing."),
        N("as-x-ptares", "res-", "Trade share stuck at ~15%", null, "Intra-ASEAN trade stagnant; later replaced by CEPT.", ["as-pta"]),
        K("followed by", "Industrial projects were tried next."),
        { row: [
          N("as-x-aip", "pol", "AIP", "Mar 1980", "Members refused to limit competing production; Singapore withdrew.", ["as-aip-aic-aijv"]),
          N("as-x-aic", "pol", "AIC", "1981", "No projects found where all could benefit.", ["as-aip-aic-aijv"]),
          N("as-x-aijv", "pol", "AIJV", "Nov 1983", "Governments reluctant to cut tariffs; only ~23 projects approved.", ["as-aip-aic-aijv"])
        ] }
      ] },
    { link: "supports", how: "The record before 1992 was poor.",
      title: "Verdict", summary: "'Dismal'.",
      steps: [ N("as-x-verdict", "judg", "Record 'dismal'", "1991", "Mahathir: ASEAN's economic cooperation record 'has been dismal'.", ["earlyecon"]) ] }
  ],
  judge: { prompt: "Why did early economic cooperation fail? Rank the reasons.", factors: ["as-x-isi", "as-x-exports", "as-x-aip"],
           notes_view: "Root cause: the ISI mindset — members saw each other as competitors not partners; exports went to the developed world." },
  historians: [ { who: "Mahathir", view: "ASEAN's economic cooperation record 'has been dismal' (1991).", nodes: ["as-x-verdict"] } ],
  takeaways: [
    "ISI economies were competitors whose exports went outside the region.",
    "PTA ('snow ploughs and nuclear reactors'), AIP, AIC and AIJV (~23 projects) achieved little.",
    "Intra-ASEAN trade stuck at ~15% — Mahathir: 'dismal'."
  ]
});

L.push({
  id: "as-afta", order: 11, level: 3, parent: "as-top", kind: "evaluation",
  title: "The 1992 Summit and AFTA",
  question: "Why was AFTA created, and how successful was it?",
  intro: "The end of the Cold War and rival blocs pushed ASEAN to free trade; tariffs fell early, but NTBs rose and the intra-ASEAN trade share barely moved.",
  clusters: [
    { title: "Why 1992", summary: "New glue needed.",
      steps: [
        { row: [
          N("as-a-cw", "stc", "End of the Cold War", "1989–91", "Removed ASEAN's security glue; Cambodia resolved.", ["afta", "as-singapore92"]),
          N("as-a-blocs", "stc", "Rival trade blocs", "1989–92", "EU integrating, NAFTA, MERCOSUR; APEC created (1989).", ["afta", "as-singapore92"]),
          N("as-a-eoi", "ltc", "All members now EOI", null, "Economies complementary, not just competing.", ["afta"])
        ] },
        K("led to", "ASEAN needed new relevance and economic glue."),
        N("as-a-summit", "tp", "1992 Singapore Summit", "Jan 1992", "AFTA agreed; Secretary-General upgraded; focus shifts from security to economics.", ["as-singapore92", "as-econ-timeline-2"])
      ] },
    { link: "led to", how: "The summit created a tariff-cutting mechanism.",
      title: "AFTA", summary: "CEPT, then acceleration.",
      steps: [
        N("as-a-cept", "pol", "CEPT scheme", "1992", "Tariffs to 0–5% within 15 years (2008); own pace; CLMV given longer.", ["afta", "as-econ-timeline-2"]),
        K("accelerated", "Members then sped up the timetable."),
        N("as-a-accel", "pol", "Timetable accelerated", "Sep 1994", "AICO (1996): companies choose products for concessions.", ["as-econ-timeline-2"])
      ] },
    { link: "led to", how: "Tariffs fell, but other barriers grew.",
      title: "Results", summary: "Tariffs down; integration limited.",
      steps: [
        { split: [
          { h: "Successes", steps: [
            N("as-a-tariff", "res+", "Tariffs cut 6 years early", "1993–2003", "Average 12.76% (1993) → 3.2% (2002) → 2.36% (2003); near zero by 2015.", ["as-afta-eval"]),
            K("led to", "Lower tariffs boosted trade within the region."),
            N("as-a-trade", "res+", "Intra-ASEAN trade doubled", "1993–2000", "US$44.2bn to US$97.8bn; ASEAN the largest market for ASEAN goods (24% by 2015).", ["as-afta-eval"])
          ] },
          { h: "Limits", steps: [
            N("as-a-ntb", "res-", "NTBs surged", "2000–2015", "1,634 to 5,975.", ["as-afta-eval"]),
            K("constrained", "Barriers held integration back."),
            N("as-a-share", "res-", "Trade share stuck at 23–30%", null, "Banking, regulation, tax unresolved; CLMV two-speed ASEAN.", ["as-afta-eval"])
          ] }
        ] }
      ] },
    { link: "followed by", how: "ASEAN also widened its external economic links.",
      title: "External relations", summary: "Dialogue Partners, APEC, EU.",
      steps: [
        N("as-a-ext", "ctx", "External economic relations", "1977 onwards", "Dialogue Partners from 1977; joined APEC reluctantly (1989); ASEAN–EU ties strained by Myanmar.", ["as-external-econ"])
      ] }
  ],
  judge: { prompt: "How successful was AFTA? Rank the evidence.", factors: ["as-a-tariff", "as-a-trade", "as-a-ntb", "as-a-share"],
           notes_view: "Main evidence of economic success after 1992 (targets met 6 years early, trade doubled), qualified by NTBs, a stagnant trade share and the CLMV two-tier problem." },
  historians: [],
  takeaways: [
    "AFTA (1992) driven by the end of the Cold War, rival blocs and the shift to EOI.",
    "Tariffs 12.76% → 2.36% (2003); intra-ASEAN trade US$44.2bn → US$97.8bn (1993–2000).",
    "But NTBs 1,634 → 5,975 and the trade share stuck at 23–30%."
  ]
});

L.push({
  id: "as-afc", order: 12, level: 3, parent: "as-top", kind: "causal",
  title: "The AFC and ASEAN+3, 1997–2000",
  question: "How did ASEAN respond to the Asian Financial Crisis?",
  intro: "The AFC exposed ASEAN's weakness against capital flows; it responded with surveillance and wider cooperation with China, Japan and Korea.",
  clusters: [
    { title: "The shock", summary: "Volatile capital flows.",
      steps: [
        N("as-k-afc", "trig", "Asian Financial Crisis", "1997", "Exposed ASEAN's inability to manage volatile capital flows independently.", ["as-afc"])
      ] },
    { link: "provoked response", how: "ASEAN built new financial cooperation.",
      title: "Responses", summary: "Surveillance, ASEAN+3, swaps.",
      steps: [
        N("as-k-asp", "pol", "ASEAN Surveillance Process", "1999", "Twice-yearly finance minister meetings; early warning; monitoring units at ADB.", ["as-afc"]),
        K("followed by", "Cooperation widened to North-East Asia."),
        N("as-k-apt", "pol", "ASEAN+3 formalised", "1999", "China, Japan, South Korea; replaced Mahathir's EAEC concept.", ["as-afc", "as-econ-timeline-2"]),
        K("led to", "ASEAN+3 pooled reserves."),
        N("as-k-cmi", "pol", "Chiang Mai Initiative", "2000", "Bilateral currency swap network.", ["as-afc", "as-econ-timeline-2"])
      ] },
    { link: "constrained", how: "Non-interference limited how deep cooperation could go.",
      title: "Limits", summary: "Sovereignty vs surveillance.",
      steps: [
        N("as-k-limit", "res-", "Surveillance vs non-interference", null, "Surveillance violates non-interference; poor data transparency; no common currency.", ["as-afc"])
      ] }
  ],
  historians: [],
  takeaways: [
    "The AFC exposed ASEAN's weakness against capital flows.",
    "Responses: Surveillance Process (1999), ASEAN+3 (1999), Chiang Mai Initiative (2000).",
    "Limited by non-interference: surveillance clashes with sovereignty."
  ]
});

L.push({
  id: "as-arf", order: 13, level: 3, parent: "as-top", kind: "evaluation",
  title: "The ASEAN Regional Forum, 1994",
  question: "How effective was the ARF?",
  intro: "ASEAN filled the post-Cold War vacuum with a forum of all the major powers — strong at keeping rivals talking, weak at solving real problems.",
  clusters: [
    { title: "Why the ARF", summary: "A power vacuum.",
      steps: [
        { row: [
          N("as-r-ussr", "stc", "USSR dissolved", "1991", "End of the Cold War.", ["arf"]),
          N("as-r-us", "stc", "US bases closed", "1992", "US cut Asia-Pacific forces; Philippine bases closed.", ["arf"])
        ] },
        K("led to", "The vacuum created uncertainty that ASEAN moved to fill."),
        N("as-r-arf", "pol", "ARF established", "Jul 1994", "Bangkok; 18 founding states incl. China, US, Russia, Japan; confidence-building, preventive diplomacy, conflict resolution — in that order.", ["arf"])
      ] },
    { link: "led to", how: "Its record was mixed.",
      title: "Assessment", summary: "Talking shop or real forum?",
      steps: [
        { split: [
          { h: "Strengths", steps: [
            N("as-r-only", "res+", "Only forum with all powers", null, "Both Koreas; rivals at one table.", ["as-arf-eval"]),
            K("supports", "Small states led it."),
            N("as-r-small", "res+", "'Small powers steering large'", null, "No single power dominates; 'sui generis' (Caballero-Anthony).", ["as-arf-eval"])
          ] },
          { h: "Weaknesses", steps: [
            N("as-r-slow", "res-", "Slow consensus", "2001", "'Preventive diplomacy' only defined at the 8th ARF.", ["as-arf-eval"]),
            K("constrained", "China kept key issues off the agenda."),
            N("as-r-china", "res-", "China blocks the SCS", null, "Refuses SCS on the agenda; ASEAN unwilling to press.", ["as-arf-eval"])
          ] }
        ] }
      ] },
    { link: "supports", how: "Weighing convening power against leverage.",
      title: "Verdict", summary: "Convening power, limited leverage.",
      steps: [ N("as-r-verdict", "judg", "Talks, but cannot act", null, "Promotes understanding (Severino) but 'insufficient to address real security problems'; Leifer: 'confuses power and responsibility'.", ["as-arf-eval"]) ] }
  ],
  judge: { prompt: "How effective was the ARF? Rank the evidence.", factors: ["as-r-only", "as-r-small", "as-r-slow", "as-r-china"],
           notes_view: "Shows ASEAN's convening power ('small powers steering large powers') but limited effectiveness (Leifer: 'confuses power and responsibility')." },
  historians: [
    { who: "Caballero-Anthony", view: "The ARF is 'sui generis' but 'insufficient to address real security problems'.", nodes: ["as-r-small"] },
    { who: "Michael Leifer", view: "The ARF 'confuses power and responsibility' (1996).", nodes: ["as-r-verdict"] },
    { who: "Rodolfo Severino", view: "The ARF keeps rivals talking.", nodes: ["as-r-only"] }
  ],
  takeaways: [
    "Founded Jul 1994 with 18 states after the USSR's collapse and US base closures.",
    "Strength: the only Asia-Pacific forum with all powers, steered by small states.",
    "Weakness: slow, and China keeps the SCS off its agenda."
  ]
});

L.push({
  id: "as-scs", order: 14, level: 3, parent: "as-top", kind: "causal",
  title: "The South China Sea disputes",
  question: "Why has ASEAN been unable to resolve the South China Sea disputes?",
  intro: "Overlapping claims and China's growing assertion met an ASEAN that was divided and could only manage behaviour, not settle sovereignty.",
  clusters: [
    { title: "Claims and stakes", summary: "Overlapping claims.",
      steps: [
        N("as-s-claims", "ltc", "Overlapping claims", "1947 onwards", "China and Vietnam claim all Spratlys and Paracels; Malaysia, Philippines, Brunei parts; Indonesia's Natuna EEZ.", ["scs"],
          { ev: ["Nine-Dash Line inherited from the 1947 Nationalist government; claims ~90% of the SCS; most SEA states reject it under UNCLOS.", "Stakes: oil/gas, fishing, sea lanes between the Indian Ocean and West Pacific."] })
      ] },
    { link: "led to", how: "China used force and law to press its claims.",
      title: "Chinese assertion", summary: "1974–1995.",
      steps: [
        N("as-s-paracel", "evt", "China seizes the Paracels", "1974", "From South Vietnam; still holds them.", ["as-scs-events-1"]),
        K("followed by", "Clashes spread to the Spratlys."),
        N("as-s-johnson", "evt", "Johnson South Reef", "Mar 1988", "China sank 3 Vietnamese ships, killing 64.", ["as-scs-events-1"]),
        K("followed by", "China then wrote its claims into law."),
        N("as-s-law", "pol", "China's Territorial Sea law", "1992", "Asserted Spratlys and Paracels as sovereign territory.", ["as-scs-events-1"]),
        K("provoked response", "ASEAN responded with a joint declaration."),
        N("as-s-asdecl", "pol", "ASEAN SCS Declaration", "Jul 1992", "Called for peaceful resolution; a united front.", ["as-scs-events-1"]),
        K("followed by", "China moved closer to ASEAN members."),
        N("as-s-mischief", "evt", "Mischief Reef occupied", "Jan 1995", "In the Philippines' EEZ — a shock; in May China rejected an ARF role.", ["as-scs-events-1"])
      ] },
    { link: "provoked response", how: "ASEAN turned to codes of conduct.",
      title: "Diplomacy", summary: "Declaration to draft code.",
      steps: [
        N("as-s-doc", "pol", "Declaration of Conduct", "2002", "Commits parties to an eventual binding code; sovereignty unresolved.", ["as-scs-events-2"]),
        K("followed by", "ASEAN's own unity then broke."),
        N("as-s-2012", "res-", "No joint communiqué", "2012", "For the FIRST TIME — Cambodia blocked SCS language.", ["as-scs-events-2", "as-expansion-eval"]),
        K("followed by", "Talks continued slowly."),
        N("as-s-sdnt", "pol", "Single Draft Negotiating Text", "Aug 2018", "Draft Code of Conduct text agreed.", ["as-scs-events-2"])
      ] },
    { link: "supports", how: "These show why ASEAN cannot settle the disputes.",
      title: "Why unresolved", summary: "Power, disunity, limited aims.",
      steps: [
        { row: [
          N("as-s-bilat", "int", "China prefers bilateral talks", null, "Asymmetric power lets it dominate members one by one.", ["as-scs-analysis"]),
          N("as-s-disunity", "int", "ASEAN disunity", null, "Cambodia blocks statements; rival Philippine/Malaysian claims; not all are claimants.", ["as-scs-analysis"]),
          N("as-s-us", "int", "US–China rivalry", "~2015", "US Freedom of Navigation exercises risk dragging ASEAN in.", ["as-scs-analysis"])
        ] },
        K("led to", "A code can manage conduct but not ownership."),
        N("as-s-verdict", "judg", "Managed, not resolved", null, "A Code of Conduct manages behaviour, not sovereignty; ASEAN diplomacy raises China's cost of force.", ["as-scs-analysis"])
      ] }
  ],
  judge: { prompt: "Why has ASEAN failed to resolve the SCS disputes? Rank the reasons.", factors: ["as-s-bilat", "as-s-disunity", "as-s-us", "as-s-2012"],
           notes_view: "China prefers bilateral talks; ASEAN is disunited; a Code of Conduct manages behaviour rather than settling sovereignty — the disputes will persist." },
  historians: [],
  takeaways: [
    "China seized the Paracels (1974), sank Vietnamese ships (1988), occupied Mischief Reef (1995).",
    "ASEAN: 1992 Declaration, 2002 DoC, 2018 SDNT — but in 2012 failed to issue a communiqué.",
    "China's bilateral preference and ASEAN disunity mean management, not resolution."
  ]
});

L.push({
  id: "as-expansion", order: 15, level: 3, parent: "as-top", kind: "evaluation",
  title: "Expansion and non-interference, 1984–1999",
  question: "Did expansion strengthen or weaken ASEAN?",
  intro: "Taking in Vietnam, Laos, Myanmar and Cambodia completed 'one Southeast Asia', but strained non-interference and created a two-tier ASEAN.",
  clusters: [
    { title: "Vietnam joins", summary: "Both sides gained.",
      steps: [
        { split: [
          { h: "Vietnam's reasons", steps: [ N("as-v-doimoi", "stc", "Doi Moi needs", "1986 onwards", "Stable surroundings for reform; declining USSR aid; non-interference useful on the SCS; ARF to manage China and US.", ["as-vietnam-join"]) ] },
          { h: "ASEAN's reasons", steps: [ N("as-v-buffer", "stc", "Buffer and market", null, "Vietnam stood up to China (1979); a large market; 'one Southeast Asia'.", ["as-vietnam-join"]) ] }
        ] },
        K("led to", "Shared interests brought Vietnam in."),
        N("as-v-join", "tp", "Vietnam joins", "Jul 1995", "'Final closure to political gulf between communist and non-communist SEA'.", ["as-vietnam-join", "expansion"])
      ] },
    { link: "followed by", how: "Expansion continued to the rest of the region.",
      title: "Myanmar and Cambodia", summary: "Constructive engagement.",
      steps: [
        N("as-v-my", "pol", "Laos and Myanmar join", "Jul 1997", "'Constructive engagement' over isolation, despite the military junta.", ["as-myanmar-join", "expansion"]),
        K("contradicts", "Cambodia was treated differently."),
        N("as-v-cam", "evt", "Cambodia's entry delayed", "1997–99", "Delayed over its domestic politics — arguably violating non-interference; joined Apr 1999.", ["as-noninterference", "expansion"])
      ] },
    { link: "provoked response", how: "Members began to question strict non-interference.",
      title: "Non-interference debated", summary: "Bending the rule.",
      steps: [
        N("as-v-badawi", "evt", "Badawi advises Myanmar", "Jun 1997", "Urged the regime to talk to the opposition.", ["as-noninterference"]),
        K("followed by", "Thailand proposed a formal change."),
        N("as-v-surin", "pol", "'Flexible engagement'", "1998", "Thai FM Surin's idea; only the Philippines backed it; became 'enhanced interaction'.", ["as-noninterference"]),
        K("followed by", "A rights body came a decade later."),
        N("as-v-aichr", "pol", "AICHR under the Charter", "2008", "Human rights body; non-interference still paramount.", ["as-noninterference"])
      ] },
    { link: "led to", how: "Expansion had costs and benefits.",
      title: "Verdict", summary: "Two-tier but united region.",
      steps: [
        { split: [
          { h: "Costs", steps: [ N("as-v-cost", "res-", "Weaker cohesion", null, "No ideological cement; CLMV less developed; EU/US ties damaged; Cambodia blocks SCS statements.", ["as-expansion-eval", "as-myanmar-join"]) ] },
          { h: "Benefits", steps: [ N("as-v-benefit", "res+", "One Southeast Asia", null, "Severino: better a two-tiered ASEAN than a divided region with a rival bloc.", ["as-expansion-eval"]) ] }
        ] }
      ] }
  ],
  judge: { prompt: "Did expansion weaken ASEAN? Rank the evidence.", factors: ["as-v-join", "as-v-my", "as-v-cam", "as-v-surin", "as-v-cost", "as-v-benefit"],
           notes_view: "Non-interference was applied pragmatically but inconsistently; Severino counters that a two-tiered ASEAN beats a divided Southeast Asia." },
  historians: [ { who: "Rodolfo Severino", view: "Better a two-tiered ASEAN than a divided Southeast Asia.", nodes: ["as-v-benefit"] } ],
  takeaways: [
    "Vietnam (1995) closed the communist/non-communist gulf; Laos, Myanmar (1997) and Cambodia (1999) followed.",
    "Myanmar admitted under 'constructive engagement'; Cambodia delayed — non-interference applied inconsistently.",
    "Costs: no ideological cement, a two-tier ASEAN; benefit: one Southeast Asia."
  ]
});

L.push({
  id: "as-eval", order: 16, level: 1, parent: "as-top", kind: "matrix",
  title: "How effective was ASEAN? A summary table",
  question: "How effective has ASEAN been, area by area?",
  intro: "Successes and limitations in each area, from the notes' master summary.",
  matrix: {
    cols: ["Success", "Limitation"],
    rows: [
      { h: "Formation", cells: ["Sustainable indigenous cooperation; Indonesia brought in", "Economic aims secondary; security motive concealed"] },
      { h: "Institutions", cells: ["Formalised from 1976; Secretariat upgraded; Charter 2008", "First summit took 9 years; ASEAN Way slow"] },
      { h: "Security", cells: ["Sabah managed without war; Cambodia standing; TAC adopted", "High Council unused; ZOPFAN aspirational; SCS persists"] },
      { h: "Economics", cells: ["AFTA targets 6 years early; trade doubled 1993–2000", "NTBs rose; trade share stuck at 23–30%; CLMV gap"] },
      { h: "External relations", cells: ["ARF; ASEAN+3; Dialogue Partners", "Myanmar hurt EU/US ties; China dominates SCS agenda"] },
      { h: "Non-interference", cells: ["Protected sovereignty; enabled Vietnam/Myanmar entry", "Hampered action on haze, Myanmar, SCS; inconsistent"] }
    ]
  },
  clusters: [],
  historians: [],
  takeaways: [
    "ASEAN was most effective at sustaining cooperation and keeping disputes from war.",
    "Its weakest areas: binding dispute settlement, economic integration beyond tariffs, the SCS.",
    "Non-interference both protected members and limited ASEAN's action."
  ]
});
})();
