// P1 Theme III · Indo–Pakistani conflict — from Indo-Pakistani_Conflict_Study_Notes
(function(){
const S = "Indo-Pakistani Conflict study notes";
const add = (sec, o) => CASES.push(Object.assign({ t:"ip", sec, src:S, qs:"me" }, o));

/* ── Overview ── */
add("Overview", { id:"ip-overview", title:"Topic framework: Indo-Pakistani conflict", when:"1947–1972",
  q:"Why did conflicts occur and how did they affect the international order? How effective were the attempts to manage these conflicts? (Set out the topic framework.)", qs:"notes",
  pts:["Topic 1: Causes, Development and Management of Inter-State Conflicts: Indo-Pakistani Conflict (1947–1972)",
       "Causes: decolonisation, security, territorial sovereignty, nationalism, religion, economic interests",
       "Actors: combatant states, the superpowers, the United Nations",
       "Management: diplomacy and peacekeeping",
       "Conflict arose from the 1947 partition of British India: Muslim-majority Pakistan and Hindu-majority India",
       "1947–1972: three wars (1947, 1965, 1971) plus clashes on other occasions"] });
add("Overview", { id:"ip-timeline-a", title:"Master timeline 1947–1957", when:"1947–1957",
  q:"Outline the key developments in India–Pakistan relations from 1947 to 1957.",
  pts:["Aug 1947: Britain partitions the subcontinent (14–15 Aug); mass migration and communal riots follow",
       "22 Oct 1947: First Indo-Pakistani War breaks out over Kashmir after a tribal invasion from Pakistan",
       "26 Oct 1947: Maharaja Hari Singh signs the Instrument of Accession to India",
       "Jan 1949: First War ends with a UN-mediated ceasefire along the Line of Control",
       "1954: J&K's accession to India ratified by the state's constituent assembly",
       "1957: J&K constituent assembly approves a constitution; India begins treating Kashmir as an integral part of the Union"] });
add("Overview", { id:"ip-timeline-b", title:"Master timeline 1962–1972", when:"1962–1972",
  q:"Outline the key developments in India–Pakistan relations from 1962 to 1972.",
  pts:["Oct 1962: Sino-Indian War over the disputed Indo-Chinese border (incl. Indian-administered Ladakh)",
       "1963: UK/US-brokered Indo-Pakistani talks on Kashmir fail to reach agreement",
       "1964: Pakistan refers the Kashmir case to the UNSC after talks fail",
       "Aug 1965: Second War after Operation Gibraltar; Sep ceasefire (India 21 Sep, Pakistan 22 Sep)",
       "Jan 1966: Tashkent Declaration (Shastri–Ayub Khan), mediated by the USSR",
       "Dec 1971: Third War; East Pakistan becomes independent Bangladesh",
       "Jul–Aug 1972: Simla Agreement commits both sides to peaceful dispute resolution"] });

/* ── Causes: Decolonisation ── */
add("Causes: Decolonisation", { id:"ip-raj", title:"India under colonial rule", when:"1858–1947",
  q:"How did British rule in India move toward independence and partition?",
  clue:"Direct rule began after the 1857 Mutiny; Purna Swaraj in 1930; the last Viceroy concluded differences were irreconcilable.",
  pts:["Direct British rule (the Raj) began in 1858 after the Indian Mutiny against the East India Company",
       "By the 1920s non-cooperation and civil disobedience pressured Britain toward self-governance",
       "1930: Indian National Congress (Nehru) passed the Purna Swaraj resolution demanding complete independence",
       "Many Muslim leaders (initially incl. Jinnah) envisaged a single federation, but support grew for a separate Muslim homeland",
       "Post-WWII, Attlee's Labour government pledged Indian independence",
       "Mountbatten arrived as last Viceroy in Mar 1947; concluded Congress–Muslim League differences were irreconcilable, making partition the only viable path"] });
add("Causes: Decolonisation", { id:"ip-radcliffe", title:"Independence Act and Radcliffe Commission", when:"Jul–Aug 1947",
  q:"How were the partition boundaries drawn, and why did they satisfy no one?",
  clue:"A chairman who had never visited the subcontinent drew Punjab and Bengal borders under severe time pressure.",
  pts:["Indian Independence Act (18 Jul 1947) set the deadline of midnight 14–15 Aug 1947",
       "Boundary Commission: 4 Congress + 4 Muslim League members, chaired by Cyril Radcliffe",
       "Radcliffe had never visited India",
       "Drew the Punjab/Bengal borders under severe time pressure — satisfying no one"] });
add("Causes: Decolonisation", { id:"partitionindia", title:"Impact of the British Partition Plan", when:"Aug 1947",
  q:"What was the impact of the British Partition Plan of 1947?",
  clue:"Staggered transfer of power, borders published two days late, and some 15 million people crossing new lines amid mass violence.",
  pts:["Transfer of power: 14 Aug (Pakistan), 15 Aug (India) — staggered so Mountbatten could attend both ceremonies",
       "Borders not published until 17 Aug, two days after independence",
       "~15 million Hindus, Sikhs and Muslims crossed the hastily drawn borders; 14–16 million eventually displaced",
       "Death toll estimates range from 200,000 to 2 million",
       "Both states faced enormous strain absorbing refugees — numbers swelled further once war broke out over Kashmir in 1947–48"] });
add("Causes: Decolonisation", { id:"ip-princely", title:"Kashmir's position and decolonisation", when:"1947",
  q:"Why did decolonisation create a unique dilemma for Kashmir?",
  pts:["One of 565 princely states that “recovered independence” with Britain's lapse of paramountcy on 15 Aug 1947",
       "Mountbatten pressured them to accede to India or Pakistan by that date",
       "Partition logic (Muslim-majority to Pakistan, Hindu/Sikh-majority to India) did not apply to princely states",
       "Dilemma: Hindu monarch (Maharaja Hari Singh) ruling a Muslim-majority population, contiguous to both dominions",
       "Hari Singh initially sought to remain independent, buying time given religious make-up and chaos of partition",
       "The Pakistan-backed tribal invasion (Oct 1947) forced his hand: he acceded to India in exchange for military assistance"] });
add("Causes: Decolonisation", { id:"ip-accession-claims", title:"Rival claims over the accession", when:"1947",
  q:"How did Jinnah and India respond to Kashmir's accession, and what is the key takeaway about decolonisation?",
  pts:["Jinnah branded the accession “fraudulent”",
       "Accused India of conspiring to deny Pakistan its “natural” territorial inheritance; argued the Maharaja breached the Standstill Agreement",
       "India: the Pakistan-backed tribal invasion was itself illegal and voided the Standstill Agreement; Instrument of Accession legally valid",
       "Key takeaway: Kashmir tensions are a direct consequence of the Partition Plan — Britain's failure to devise a satisfactory method for integrating princely states into the new dominions"] });

/* ── Causes: Security ── */
add("Causes: Security", { id:"ip-security", title:"Kashmir's strategic value", when:"1947–1970",
  q:"Why was Kashmir a security concern for both India and Pakistan?",
  pts:["Kashmir bordered Afghanistan, China and the USSR — major strategic value as a buffer zone for both",
       "Nehru (1947): Kashmir's frontiers “marching with three countries… the Soviet Union, China and Afghanistan” made it “intimately connected with the security and international contacts of India”",
       "Maj. Gen. Akbar Khan (1970): Indian troops on Kashmir's western border could threaten the vital 180-mile Lahore–Rawalpindi road/rail route at any time, in war or peace",
       "Akbar Khan: Pakistan's independence would then “never… be a reality”",
       "Significance: whoever controlled Kashmir held decisive military advantage — a zero-sum security prize, not a negotiable border dispute"] });

/* ── Causes: Territorial Sovereignty ── */
add("Causes: Territorial Sovereignty", { id:"accession", title:"Kashmir's accession to India", when:"Aug–Oct 1947",
  q:"How did Kashmir come to accede to India?",
  clue:"A Maharaja who chose neither dominion signed a standstill with one side, then appealed for help when tribesmen neared Srinagar.",
  pts:["Hari Singh: autocratic monarch (Council of Ministers since 1939), given until 15 Aug 1947 to choose — chose neither",
       "Signed a Standstill Agreement with Pakistan; India deferred (States Ministry preoccupied with Hyderabad)",
       "22 Oct 1947: tribal invasion reaches the Jhelum Valley Road towards Srinagar",
       "25 Oct: Maharaja appeals to India; India makes aid conditional on accession",
       "Hari Singh accedes 27 Oct → Indian troops airlifted in, triggering the First War"] });
add("Causes: Territorial Sovereignty", { id:"ip-irredentism", title:"Pakistan's irredentist claim", when:"1947",
  q:"What was the basis of Pakistan's irredentist claim to Kashmir?",
  pts:["Pakistan, as self-conceived homeland for subcontinental Muslims, viewed Kashmir's Muslim-majority population as rightfully its own",
       "Kashmir necessary for the state's “completeness”",
       "Kashmir contiguous to both dominions — a genuine dilemma under partition's own logic (Ganguly, 2019)",
       "Accession criteria (geography + religion) pointed in different directions for different actors"] });

/* ── Causes: Nationalism ── */
add("Causes: Nationalism", { id:"ip-nationalism", title:"Competing visions of nationhood", when:"1947",
  q:"How did competing nationalisms contribute to the Indo-Pakistani conflict?",
  pts:["Congress (Nehru): One Nation — unity and cohesion across communities",
       "Muslim League (Jinnah): Two Nations — separate homelands for Muslims and Hindus",
       "Congress aim: secular, democratic state representing all segments of Indian society",
       "League aim: religiously-based state as an effective guarantee of Muslim rights and privileges",
       "Kashmir: for Congress, integration = proof secularism could accommodate all faiths; for League, Muslim majority + historical ties = basis for claim",
       "Ganguly (2001): diametrically opposed organisational and ideological bases meant the two states were “already locked into a potential collision course” when the British Indian Empire ended"] });

/* ── Causes: Religion ── */
add("Causes: Religion", { id:"ip-religion", title:"Religion and mutual distrust", when:"1947 onward",
  q:"How did religion contribute to the Indo-Pakistani conflict, according to historians?",
  pts:["Hewitt (1997): India and Pakistan shared a deep “mutual distrust” from partition onward",
       "Burke (1974) cause 1: the antithetical nature of Hinduism and Islam",
       "Burke cause 2: Britain's “cut and run” departure left inadequate arrangements for population transfer, so civil order collapsed",
       "Ganguly (1998): for Nehru, integrating Kashmir would show all faiths could live under the aegis of a secular state",
       "Ganguly (1998): Jinnah saw absorbing Kashmir as equally critical for opposite reasons — Pakistan would be “incomplete” without Kashmir"] });
add("Causes: Religion", { id:"ip-ethno", title:"Ethno-religious diversity within Kashmir", when:"1947",
  q:"Describe the ethno-religious make-up of Kashmir's regions.",
  pts:["Ladakh: culturally/ethnically closer to Tibet; Buddhist",
       "Jammu: mixed Hindu, Sunni Muslim and Sikh",
       "Kashmir Valley: majority Muslim, significant Hindu minority — the Pandits (Kashmiri Brahmins) and Dogras",
       "Gilgit, Baltistan, Poonch: predominantly Shi'a Muslim",
       "Overall roughly ¾ Muslim but ruled by a Hindu Maharaja — both states could plausibly claim it on different grounds"] });

/* ── Causes: Economic Interests ── */
add("Causes: Economic Interests", { id:"ip-indus-tension", title:"Indus waters as a source of tension", when:"1947–1948",
  q:"Why was control of the Indus River system a source of Indo-Pakistani tension?",
  pts:["Persistent source of tension (Wirsing & Jasparro, 2006)",
       "Partition drew borders along the “Indus watershed”, giving India control of upstream barrages regulating flow into Pakistan",
       "Created a structural upstream–downstream power imbalance",
       "Indus floodplain supports ~90% of Pakistan's food and 65% of its employment",
       "Fears India could weaponise upstream control fuelled anti-Indian sentiment",
       "Apr 1948: East Punjab engineers cut water supplies to a key Pakistani canal"] });
add("Causes: Economic Interests", { id:"induswaters", title:"Indus Waters Treaty", when:"1960",
  q:"What did the 1960 Indus Waters Treaty provide, and what does it show?",
  clue:"World Bank-brokered 1960 deal splitting western and eastern rivers and funding Tarbela and Mangla dams.",
  pts:["Gave Pakistan the western rivers (Indus, Jhelum, Chenab)",
       "Gave India the eastern rivers (Ravi, Beas, Sutlej)",
       "Funded dam/canal infrastructure (e.g. Tarbela, Mangla Dams)",
       "World Bank-brokered",
       "No “water wars” since, despite multiple military conflicts — resource cooperation persisted amid broader hostility"] });
add("Causes: Synthesis", { id:"ip-causes-synth", title:"How the six causes interlock", when:"framework",
  q:"State the core tension behind each of the six causes and explain how they interlock.",
  pts:["Decolonisation: Britain's rushed, inadequate framework for integrating princely states (esp. Kashmir)",
       "Security: Kashmir as strategic buffer/launchpad — whoever held it held military advantage",
       "Territorial sovereignty: contested legality of the Instrument of Accession; competing claims to legitimate rule",
       "Nationalism: secular “One Nation” vs religiously-defined “Two Nation”; Religion: Hindu–Muslim distrust, Muslim-majority/Hindu-ruler anomaly",
       "Economic interests: Indus water dependency creating upstream–downstream asymmetry",
       "Exam tip: religion and nationalism reinforced each other; decolonisation created the ambiguity that security and sovereignty concerns exploited",
       "Strong essay shows how causes compound rather than a simple list"] });

/* ── First War: Timeline & Players ── */
add("First War (1947–48)", { id:"ip-w1-timeline-a", title:"First War timeline: 1947", when:"Aug–Oct 1947",
  q:"Outline the key events of 1947 in the First Indo-Pakistani (First Kashmir) War.",
  pts:["First of three wars fought over the princely state of Kashmir; also called the First Kashmir War",
       "14–15 Aug 1947: Partition; Kashmir signs a Standstill Agreement with Pakistan, none concluded with India",
       "22 Oct 1947: war breaks out after invasion by Pakistan-backed tribesmen",
       "26 Oct 1947: Hari Singh signs the Instrument of Accession",
       "27 Oct 1947: Indian 161st Infantry Brigade airlifted into Srinagar; full-scale war begins"] });
add("First War (1947–48)", { id:"ip-w1-timeline-b", title:"First War timeline: UN phase", when:"Jan 1948 – Jan 1949",
  q:"Outline the UN-related milestones of the First War, 1948–49.",
  pts:["1 Jan 1948: India refers the Kashmir question to the UNSC",
       "17 & 20 Jan 1948: UNSC Resolutions 38 and 39",
       "21 Apr 1948: Resolution 47; UNCIP established",
       "13 Aug 1948: UNCIP Resolution proposing a two-part troop withdrawal",
       "3 Jun 1948: Resolution 51; 1 Jan 1949: war ends with UN-mediated ceasefire (becomes LoC)",
       "5 & 24 Jan 1949: UNCIP ceasefire terms finalised; UNMOGIP arrives to supervise"] });
add("First War (1947–48)", { id:"ip-w1-players", title:"Key players after partition", when:"1947–48",
  q:"Who were the key Indian, Pakistani and Kashmiri players after partition?",
  pts:["India: Nehru — first PM (1947–1964); Congress — secular, catch-all party dominating Indian politics",
       "Pakistan: Jinnah — first Governor-General (1947–48); Liaquat Ali Khan — first PM; Muslim League — chief governing party",
       "Kashmir: Maharaja Hari Singh — last ruling Maharaja of J&K",
       "Sheikh Mohammad Abdullah — first PM of J&K; led the J&K National Conference (pro-accession to India)",
       "‘Azad Kashmir’ Government — est. 1947; nominally independent but economically/administratively tied to Pakistan"] });
add("First War (1947–48)", { id:"ip-poonch", title:"Pakistan's role in the Poonch rebellion", when:"Aug–Oct 1947",
  q:"What was Pakistan's role in the tribal rebellion of Poonch?",
  clue:"Revolt and Pathan raids backed with Pakistani arms and transport, culminating in the capture of Muzaffarabad.",
  pts:["Kashmir offered standstill agreements to both; Pakistan accepted immediately, India asked for further negotiations — none concluded",
       "Hari Singh prevaricated despite Mountbatten's explicit injunction to choose, hoping for independence",
       "Aug 1947: open revolt in Poonch; first Muslim militia raised; Azad Kashmir government organisation begins",
       "Early Sep 1947: Pathan raiders attack from Pakistani territory; Pakistani Army supplied arms, ammunition, communications, transport; its patrols entered Kashmir",
       "Pakistan: spontaneous uprising against an unjust Hindu King; India: instigated by Pakistan",
       "22 Oct: column (Pathan tribals + Pakistani regulars in mufti) captures Muzaffarabad; Muslim J&K State Forces troops defect and massacre Dogra counterparts; raiders advance on Srinagar"] });
add("First War (1947–48)", { id:"ip-road-accession", title:"The road to accession and its legality", when:"Oct 1947",
  q:"On what conditions did India accept Kashmir's accession, and why was its legality disputed?",
  pts:["Hari Singh first appealed to Patiala — inadequate; then to India",
       "Nehru's two conditions: (1) support of Sheikh Abdullah's National Conference; (2) provisional signing of the Instrument of Accession",
       "26 Oct: Instrument signed; accepted by the Governor-General next day",
       "Proviso: accession confirmed by a “reference to the people” once cleared of invaders — a provisional accession",
       "Pakistan: Maharaja signed under duress; Standstill Agreement (violated by India) rendered accession invalid",
       "India: Pakistan-backed invasion was illegal, voiding the Standstill Agreement; Instrument legally signed per Partition-era processes"] });
add("First War (1947–48)", { id:"ip-w1-war", title:"Course of the First War", when:"1947–48",
  q:"How did the fighting in the First War develop and end in stalemate?",
  pts:["Indian Army vs “Azad Kashmir” forces (Poonch rebels + Pathan tribesmen, increasingly reinforced by Pakistani regulars)",
       "Battle for Northern Areas (Ladakh, Baltistan): territory Pakistan failed to hold later gave India access to disputed Aksai Chin — feeding into the 1962 Sino-Indian War",
       "Pakistan's Gilgit-based offensive along the Indus failed to take Kargil or hold Ladakh/Baltistan against Indian tank counter-offensives",
       "End-Dec 1947: stalemate splitting J&K roughly in two",
       "Pakistan held Gilgit, Baltistan and a strip of Kashmir Province/Poonch/Jammu along the West Punjab border; India held Ladakh, bulk of Kashmir Province, and Jammu",
       "India lacked military resources and political will to force a complete Pakistani withdrawal"] });

/* ── First War: UN ── */
add("First War: UN intervention", { id:"ip-res38-39", title:"UNSC referral and Resolutions 38–39", when:"Jan 1948",
  q:"How did the UN become involved in Kashmir, and what did Resolutions 38 and 39 do?",
  pts:["India referred the dispute to the UNSC on 1 Jan 1948",
       "Invoked Articles 34 and 35 of the UN Charter (disputes threatening international peace and security)",
       "Res. 38 (17 Jan 1948): both governments to refrain from aggravating the situation and report material changes",
       "Res. 39 (20 Jan 1948): 3-member commission (one chosen by each side, third by the other two) to advise the Council",
       "No action taken under Res. 39 until Res. 47"] });
add("First War: UN intervention", { id:"ip-res47", title:"Resolution 47, UNCIP Resolution and Res. 51", when:"Apr–Aug 1948",
  q:"What did UNSC Resolution 47 and the UNCIP Resolution propose?",
  pts:["Res. 47 (21 Apr 1948): expanded the Commission to 5 members → UNCIP established",
       "3-step process: (i) Pakistan withdraws all nationals/fighters; (ii) India reduces forces to law-and-order minimum; (iii) UN-appointed administrator conducts a plebiscite",
       "UNCIP Resolution (13 Aug 1948): two-part withdrawal — Pakistan first, then India withdraws bulk of forces; plebiscite follows",
       "Accepted by India, effectively rejected by Pakistan",
       "Res. 51 (3 Jun 1948): reaffirmed earlier resolutions; directed the Commission to move to the disputed areas and complete its mandate"] });
add("First War: UN intervention", { id:"unmogip", title:"Ceasefire and UNMOGIP", when:"1949",
  q:"Why did the 1949 ceasefire take hold, and what was UNMOGIP's mandate?",
  clue:"UN observer group whose first members arrived Jan 1949 to supervise the Kashmir ceasefire and assist UNCIP's Military Adviser.",
  pts:["UN-sponsored ceasefire took effect 1 Jan 1949",
       "Helped by both armies still being commanded by British officers; neither Nehru nor Liaquat Ali Khan (Jinnah's successor after his Sep 1948 death) wanted mutual destruction",
       "UN Military Observer Group in India and Pakistan: first observers arrived Jan 1949 to supervise ceasefire and assist UNCIP's Military Adviser",
       "Mandate: accompany local authorities, gather information, report impartially — explicitly avoiding direct intervention",
       "Formalised by the 27 Jul 1949 Karachi Agreement; continued post-UNCIP under UNSC Res. 91 (30 Mar 1951)"] });
add("First War: Karachi Agreement", { id:"ip-karachi", title:"Karachi Agreement: ceasefire line", when:"27 Jul 1949",
  q:"What were the key provisions of the 1949 Karachi Agreement regarding the ceasefire line?",
  clue:"Signed 27 Jul 1949, it fixed an 830 km line from Manawar through Keran to the glacier area that held until 1965.",
  pts:["Formally established the ceasefire line (precursor to the LoC) that held until the 1965 war",
       "830 km line from Manawar (south) through Keran to the glacier area",
       "Drawn on a one-inch map, verified in field by local commanders with UN assistance; disputes to UNCIP Military Adviser (final decision)",
       "No troops in the Burzil Nullah area (south of Minimarg to the line); elsewhere troops ≥500 yards from the line",
       "Defensive positions allowed behind the line, but no wire/mines for new bunkers and no force increases where no major adjustment involved"] });
add("First War: Karachi Agreement", { id:"ip-karachi-2", title:"Karachi Agreement: other provisions", when:"Jul 1949",
  q:"What other arrangements did the Karachi Agreement make?",
  pts:["UNCIP authorised to station observers wherever deemed fit",
       "Ratification: documents deposited with UNCIP by 31 Jul 1949",
       "30-day window to vacate areas beyond the agreed ceasefire line",
       "No further advances permitted in that period"] });
add("First War: Aftermath", { id:"ip-plebiscite", title:"Kashmir's position after the First War", when:"1949–1957",
  q:"Why was the plebiscite never held, and how was Kashmir's status settled within India after 1949?",
  pts:["Both agreed in principle to a plebiscite — never held: India insisted on full Pakistani/tribal withdrawal first; Pakistan refused unless India withdrew too → stalemate",
       "India considered itself in legal possession via the Instrument of Accession, denying need for third-party mediation",
       "1951: J&K Constituent Assembly elections won by Sheikh Abdullah's National Conference",
       "1951 constitution stripped the Maharaja of power; limited India's jurisdiction to foreign affairs, defence, communications — only Indian state with its own constitution",
       "Ratified in the 1952 Delhi Accords, to the displeasure of Hindu nationalists",
       "India 54% of land area, Pakistan 46% — India kept the wealthier, more populous Valley; ~2,000 casualties each side",
       "1957: Indian-held area became the state of Jammu and Kashmir within the Indian Union"] });

/* ── First War: Effectiveness ── */
add("First War: Effectiveness", { id:"ip-eval-karachi", title:"Effectiveness: Karachi Agreement", when:"1949",
  q:"Evaluate the effectiveness of the 1949 Karachi Agreement.",
  pts:["Achievement: ceasefire halted hostilities and prevented further escalation along what became the LoC",
       "Achievement: monitoring mechanisms — truce commission with UN observers to monitor and report violations",
       "Achievement: international recognition — UN backing legitimised the ceasefire line and peaceful-resolution effort",
       "Achievement: initiated diplomatic dialogue — starting point for later negotiations",
       "Limitation: status of Kashmir remained unresolved — sowing the seeds of future conflict"] });
add("First War: Effectiveness", { id:"ip-eval-unsc48", title:"Effectiveness: UNSC mediation 1948–49", when:"1948–49",
  q:"How effective was UN Security Council mediation in the First War?",
  pts:["Achievement: international forum for peaceful settlement without intensifying violence",
       "Achievement: created UN missions — Res. 39 → UNCIP; Res. 47 → basis for UNMOGIP, expanded UNCIP to 5 members",
       "Achievement: proposed a solution — Res. 47 let Kashmiris decide via plebiscite",
       "Limitation: could not enforce the plebiscite — required mutual troop withdrawal, which neither side completed",
       "Limitation: mandate limited by sovereign equality principle (Art. 2(1)) — could persuade but not compel"] });
add("First War: Effectiveness", { id:"ip-eval-uncip", title:"Effectiveness: UNCIP", when:"1948",
  q:"Evaluate the effectiveness of UNCIP.",
  pts:["Achievement: dispatched the first observer team, forming the nucleus of UNMOGIP",
       "Achievement: continued enforcement role — post-Karachi disputes referred to its Military Adviser, whose decision was final",
       "Limitation: no mandate to intervene militarily — limited to “investigate and mediate”"] });
add("First War: Effectiveness", { id:"ip-eval-unmogip", title:"Effectiveness: UNMOGIP", when:"1949–1965",
  q:"Evaluate the effectiveness of UNMOGIP after the First War.",
  pts:["Achievement: minimal peace — prevented full-scale war for 17 years (1948–1965) despite skirmishes",
       "Achievement: conflict-resolution avenue per Art. 2(3), though never able to “enforce a settlement beyond the power lent it by world opinion”",
       "Limitation: never more than ~45 observers for the entire ceasefire line",
       "Limitation: unarmed — could not stop shelling or prevent civilian casualties; lacked the Art. 42 mandate given to the UNSC",
       "Limitation: failed to prevent renewed conflict in 1965 — could not secure total troop withdrawal",
       "Limitation: minimalist — observation and reporting only, no power to intervene in army orders"] });

/* ── Superpower influence after First War ── */
add("Superpower influence after 1949", { id:"ip-us-pak", title:"US–Pakistan alliance", when:"1947–1961",
  q:"How did the US–Pakistan alliance develop after the First War?",
  clue:"A 1954 defence assistance agreement worth about US$80 million a year, plus membership of SEATO and CENTO.",
  pts:["US and Pakistan established relations 15 Aug 1947 (US among first to recognise Pakistan)",
       "14 May 1954 Mutual Defense Assistance Agreement: US military equipment/training; aid ~US$80 million/year",
       "Pakistan joined SEATO (1954) and the Baghdad Pact/CENTO (1955)",
       "Valued by US/UK for strategic location in an “encirclement” ring around the USSR",
       "India: founding member of NAM (1961 Belgrade; Nehru, Tito, Nasser, Nkrumah, Sukarno); seen by the West as “soft on communism”"] });
add("Superpower influence after 1949", { id:"ip-ussr-india", title:"Soviet–Indian alignment", when:"1951–1958",
  q:"How did India move closer to the USSR after the First War?",
  pts:["US tilt toward Pakistan pushed India closer to the USSR despite non-alignment",
       "1951: USSR sent 50,000 tonnes of wheat during a harvest failure while the West deliberated",
       "1955: Khrushchev publicly recognised Kashmir's accession to India on a state visit — said the USSR could not say the same of relations with Pakistan",
       "1956: India supported Egypt in Suez and stayed ambiguous on the Soviet invasion of Hungary",
       "Late 1958: USSR vetoed a UNSC resolution on the crisis, showing its tilt toward India"] });
add("Superpower influence after 1949", { id:"ip-w1-impact", title:"Impact of the First War on relations", when:"1949–1965",
  q:"What were the origins and impact of the First War on India–Pakistan relations?",
  pts:["Ganguly's four sources: (1) two competing ideological forces; (2) Pakistani irredentism; (3) Kashmir's strategic location; (4) Britain's insufficient institutional arrangements for transfer of power",
       "Failure to hold a plebiscite remained the core unresolved issue",
       "India claimed legal possession via the Instrument; Pakistan contested its legitimacy, needing Kashmir for the Muslim nation's “completeness”",
       "Growing superpower patronage would embolden both to take more decisive (risky) action — setting the stage for 1965"] });

/* ── Sino-Indian War (context) ── */
add("Sino-Indian War 1962 (context)", { id:"ip-sinoindian", title:"Sino-Indian War", when:"20 Oct – 20 Nov 1962",
  q:"What was the Sino-Indian War of 1962 and why is it relevant to Kashmir?",
  clue:"A month-long Himalayan border war, triggered north of the McMahon Line, ending in a unilateral Chinese ceasefire.",
  pts:["Context only — not examinable; relevant because disputed Aksai Chin lay within Indian-controlled Kashmir",
       "20 Oct – 20 Nov 1962, over the Himalayan border: Arunachal Pradesh/“South Tibet” (NEFA) and Aksai Chin",
       "Aksai Chin strategic to China as a Tibet–Xinjiang link",
       "Triggered by a Chinese attack on an Indian patrol north of the McMahon Line",
       "Ended with a unilateral Chinese ceasefire after capturing both disputed areas",
       "China retained de facto control of Aksai Chin; border stabilised along the Line of Actual Control"] });
add("Sino-Indian War 1962 (context)", { id:"ip-sinoindian-sig", title:"Significance of 1962 for Indo-Pakistani relations", when:"1962–1971",
  q:"How did the Sino-Indian War affect Indo-Pakistani relations?",
  pts:["India's major military modernisation (doctrine, training, organisation, equipment) — became world's 3rd-largest military; crucial in 1965 and 1971",
       "Ended Nehru's hopes of a Sino-Indian “Asian Axis” against Cold War superpower influence",
       "India aligned with the USSR to encircle China through the 1960s–70s",
       "Pakistan–China relations improved (1963 China–Pakistan Border Treaty + trade agreements)",
       "Pakistan's miscalculation: believed India still weakened from 1962, triggered 1965 war — but India was stronger, leading to Pakistan's defeat",
       "1971: Pakistan expected Chinese military support — not provided, showing limits of the alliance"] });

/* ── Second War ── */
add("Second War (1965)", { id:"ip-w2-timeline-aug", title:"Second War timeline: August 1965", when:"Aug 1965",
  q:"Outline the course of the Second War in August 1965.",
  pts:["Did not resolve the dispute but drew the US and USSR into the region with lasting implications",
       "5 Aug: war breaks out after Operation Gibraltar — infiltration to spark insurgency in J&K",
       "6–7 Aug: skirmishes with Pakistani guerrillas; 14 Aug: first major engagement of regular forces",
       "15 Aug: India captures three key mountain positions after prolonged artillery barrage (Independence Day)",
       "Late Aug: Pakistani counter-attack near Tithwal, Uri, Poonch; India thrusts into ‘Azad Kashmir’ and takes the Haji Pir Pass"] });
add("Second War (1965)", { id:"ip-w2-timeline-sep", title:"Second War timeline: September 1965", when:"Sep 1965",
  q:"Outline the course of the Second War in September 1965.",
  pts:["1 Sep: Operation Grand Slam in the southern sector; India calls in air support — first strike within 90 minutes",
       "2 Sep: Pakistan retaliates with air strikes; airpower used by both for rest of war",
       "5 Sep: Pakistan captures Jaurian (14 miles inside India), threatening Akhnur and the J&K supply link",
       "6 Sep: India attacks toward Lahore and Sialkot, forcing withdrawal from Akhnur; Pakistan counter-attacks at Khem Karan, Punjab",
       "Mid-Sep: stalemate; 20 Sep: UNSC Res. 211 demands unconditional ceasefire",
       "21–22 Sep: ceasefire accepted by India (21st) and Pakistan (22nd)"] });
add("Second War (1965)", { id:"ip-w2-cost", title:"Cost of the Second War", when:"1965",
  q:"What were the material costs of the 1965 war to each side?",
  pts:["India: 65–70 aircraft, 175–190 tanks, ~3,000 casualties, ~300 sq. miles of territory",
       "Pakistan: ~20 aircraft, 200 tanks, ~3,800 men, ~720 sq. miles of territory",
       "More costly than the first war",
       "Caused the largest tank battle since WWII (described as a 17-week war)"] });
add("Second War (1965)", { id:"ip-pak-motives", title:"Pakistani motivations in 1965", when:"1965",
  q:"Why did Pakistan believe it had to act in 1965?",
  pts:["Multilateral/bilateral negotiations had yielded little",
       "Great powers were tiring of the dispute",
       "Kashmir progressively integrated into India (New Delhi legislatively dismantling its special-status protections)",
       "India's post-1962 military build-up threatened to close the window for Pakistani action",
       "Produced a “now or never” mentality in Rawalpindi (Pakistani army HQ)"] });
add("Second War (1965)", { id:"gibraltar", title:"Operation Gibraltar", when:"Aug 1965",
  q:"What was Operation Gibraltar and why did it fail?",
  clue:"Covert August 1965 infiltration across the ceasefire line by disguised soldiers meant to manufacture an armed insurrection.",
  pts:["Strategy: covertly cross the LoC and incite a Kashmiri Muslim uprising, giving international justification for war",
       "First week Aug 1965: disguised soldiers/guerrillas infiltrate J&K (Indian estimate 30,000–40,000; Pakistani 5,000–7,000)",
       "Plan: incite rebellion; guerrilla attacks on bridges, highways, communications, airfields to manufacture an “armed insurrection”",
       "Failed: locals showed unexpected reticence; Indian authorities detected infiltrators and counter-attacked with minor victories",
       "Significance: first large-scale military engagement between the two since 1947"] });
add("Second War (1965)", { id:"ip-kutch", title:"Rann of Kutch and Pakistani reasoning", when:"Apr 1965",
  q:"How did the Rann of Kutch affair shape Pakistan's calculations in 1965?",
  clue:"Pakistan seized posts in an un-demarcated boundary area in April 1965 and India retreated through poor logistics.",
  pts:["Apr 1965: Pakistan seized posts in this disputed, un-demarcated boundary area",
       "India retreated due to poor logistics",
       "Reinforced Pakistan's mistaken belief that Indian morale was low",
       "Schofield (2010): reactivating the dispute via rebellion would create a situation “sufficient to oblige the western countries to intervene”",
       "Schofield: they deduced that after the Rann of Kutch affair, Indian morale was low"] });
add("Second War (1965)", { id:"ip-grandslam", title:"Development: Haji Pir and Operation Grand Slam", when:"Aug–Sep 1965",
  q:"How did the 1965 conflict develop after Gibraltar's failure?",
  pts:["India counter-attacked across the ceasefire line into Azad Kashmir, capturing posts that sheltered infiltrators",
       "15 Aug: major Indian victory on Independence Day — morale boost",
       "India took the Haji Pir Pass — the infiltrators' logistical supply route",
       "Operation Grand Slam (1 Sep): Pakistan's panicked attempt to contain Gibraltar's fallout, targeting the Akhnoor Bridge (lifeline of an Indian infantry division; threat to Jammu city)",
       "Initial success but aborted when India opened a new front in Punjab, forcing Pakistan to divert resources — failed its objectives"] });

/* ── Second War: International players ── */
add("Second War: International players", { id:"ip-us-1965", title:"US role in 1965", when:"1965",
  q:"What role did the United States play in the 1965 war?",
  pts:["As primary arms supplier (esp. to Pakistan), imposed a military embargo on both — alarmed weapons for fighting communism were used in an intra-allied war",
       "Other NATO states followed suit",
       "Major blow to Pakistan (hardware mostly US-supplied); contributed to its assessment it could not fight beyond mid-September",
       "Dean Rusk (8 Sep 1965): US “welcomes Soviet support for the efforts of UN” and “would go to extreme limits” to have it dealt with by the Security Council",
       "Underlying US–USSR motive: keep China out and avoid direct superpower confrontation, not permanently resolving the conflict"] });
add("Second War: International players", { id:"ip-ussr-1965", title:"Soviet role in 1965", when:"Aug–Sep 1965",
  q:"How did the Soviet stance on the 1965 war evolve?",
  pts:["Initially opposed UNSC involvement (late Aug 1965): India confident, Pakistan wrongly believed it could win, USSR tilted toward India",
       "From 4 Sep: Kosygin advised both to negotiate, offering Soviet “good offices”",
       "Motive: keep China from gaining influence — Chinese intervention could push the US toward India, threatening Soviet–Indian relations",
       "Kosygin (4 Sep 1965): first step after cessation — reciprocal withdrawal behind the ceasefire line, then negotiations",
       "17 Sep: Kosygin's third offer — host talks on Soviet territory → Tashkent meeting (4–10 Jan 1966)"] });
add("Second War: International players", { id:"ip-others-1965", title:"Other countries in 1965", when:"Sep 1965",
  q:"How did China and other states respond to the 1965 war?",
  pts:["China (strong Pakistani ally): ultimatum 18 Sep 1965 demanding India dismantle military works on the China–Sikkim boundary",
       "Both superpowers motivated to end the war quickly partly to deny China regional influence",
       "UK: PM Wilson expressed concern (6 Sep); Commonwealth appealed for ceasefire compliance",
       "Turkey & Iran: jointly offered (10 Sep) troops for a UN peace force in Kashmir",
       "Arab states (Casablanca, 17 Sep), Tito, Nasser, Nkrumah: called for peaceful resolution per UN principles"] });

/* ── Second War: UN ── */
add("Second War: UN intervention", { id:"ip-uthant", title:"U Thant's mission", when:"Aug–Sep 1965",
  q:"What did UN Secretary-General U Thant do during the 1965 war?",
  clue:"The UN Secretary-General visited Rawalpindi and New Delhi in mid-September 1965 and returned dejected.",
  pts:["31 Aug: confidential paper to the Council warning the conflict could widen beyond Kashmir",
       "9–15 Sep: visits Rawalpindi and New Delhi for direct talks",
       "12 Sep: requests unconditional ceasefire effective 14 Sep — rejected; both attached conditions and SG lacked authority to give undertakings",
       "14 Sep: second appeal also fails; returns to New York 15 Sep, dejected"] });
add("Second War: UN intervention", { id:"ip-unipom", title:"UNIPOM", when:"Sep 1965 – 1966",
  q:"What was UNIPOM and why was it created?",
  clue:"Observation mission created under Res. 211 to supervise the ceasefire beyond the J&K line; first observers came on 23 Sep 1965.",
  pts:["UN India-Pakistan Observation Mission, set up by U Thant under Res. 211",
       "Supervised the ceasefire outside the J&K ceasefire line, since hostilities spread beyond Kashmir",
       "First observers arrived 23 Sep — the day the ceasefire took effect",
       "~90 observers assigned"] });
add("Second War: UN intervention", { id:"ip-res209-211", title:"UNSC Resolutions 209, 210, 211", when:"Sep 1965",
  q:"What did UNSC Resolutions 209, 210 and 211 demand?",
  pts:["Res. 209 (4 Sep): unanimous call for immediate ceasefire, respect for ceasefire line, withdrawal, cooperation with UNMOGIP",
       "209 ignored by both — “a scrap of paper”",
       "Res. 210 (6 Sep): after India's three-pronged armour offensive across the international border; widened SG's mandate to exert every effort to secure compliance, not merely report",
       "Res. 211 (20 Sep): firmer, backed by rare major-power unity; ceasefire effective 22 Sep 0700 GMT; SG assistance for supervision; all states to avoid aggravating situation",
       "Hostilities ended following Res. 211, US and USSR diplomatic intervention, and the Tashkent Declaration (1966)"] });

/* ── Tashkent ── */
add("Tashkent Declaration (1966)", { id:"tashkent", title:"Tashkent Declaration", when:"10 Jan 1966",
  q:"Who signed the Tashkent Declaration, and what were its main pledges?",
  clue:"Shastri and Ayub Khan signed in Soviet Central Asia under Kosygin's mediation in January 1966.",
  pts:["Signed 10 Jan 1966 by PM Lal Bahadur Shastri and President Ayub Khan; mediated by Kosygin at Tashkent; registered with UN 22 Mar 1966",
       "Exert all efforts toward good neighbourly relations per the UN Charter",
       "Settle disputes peacefully; renounce use of force",
       "Withdraw all armed personnel to pre-5 Aug 1965 positions by 25 Feb 1966, observing ceasefire terms",
       "Relations based on non-interference in internal affairs; discourage hostile propaganda"] });
add("Tashkent Declaration (1966)", { id:"ip-tashkent-2", title:"Tashkent Declaration: further pledges", when:"Jan 1966",
  q:"What further pledges on diplomatic, economic and humanitarian matters did Tashkent contain?",
  pts:["Restore high commissioners and normal diplomatic functioning (Vienna Convention 1961)",
       "Consider restoring economic, trade, communications and cultural ties",
       "Repatriate prisoners of war",
       "Continue discussions on refugees/illegal immigration and property/assets disputes",
       "Continue high-level and other meetings on matters of mutual concern"] });

/* ── Second War: Effectiveness ── */
add("Second War: Effectiveness", { id:"ip-eval-sp65", title:"Effectiveness: superpower mediation 1965", when:"1965",
  q:"Evaluate the effectiveness of superpower mediation in the 1965 war.",
  pts:["Achievement: USSR's repeated mediation (Kosygin, 3 occasions) built trust via declared neutrality and “good offices”",
       "Achievement: US embargo a bold attempt to restrain its own ally; public solidarity with Soviet ceasefire efforts",
       "Achievement: US, as UNSC President that month, convened the first meeting on the conflict",
       "Limitation: superpower pressure contributed to Res. 211 acceptance but not immediately, and was not most decisive",
       "Military exhaustion (esp. Pakistan's after the US embargo) mattered more"] });
add("Second War: Effectiveness", { id:"ip-eval-tashkent", title:"Effectiveness: Tashkent Declaration", when:"1966",
  q:"How effective was the Tashkent Declaration?",
  pts:["Achievement: de-escalated tensions; ended a costly war that exposed both sides' military inexperience",
       "Achievement: enshrined non-use of force as precedent",
       "Achievement: enabled UNIPOM/UNMOGIP to supervise withdrawal at accelerated speed (finished by end-March 1966)",
       "Limitation: India gained only a tacit Pakistani concession that Indian Kashmir was “sovereign and independent”, in exchange for giving up captured strategic positions",
       "Limitation: Pakistan achieved none of its war aims (possession of Kashmir)",
       "Limitation: student riots in major Pakistani cities after Ayub Khan's return"] });
add("Second War: Effectiveness", { id:"ip-eval-sg", title:"Effectiveness: Secretary-General's mission", when:"1965",
  q:"Evaluate the effectiveness of U Thant's peacekeeping mission in 1965.",
  pts:["Achievement: “good offices” diplomacy — extensive meetings with both leaderships",
       "Achievement: brought crisis to UNSC attention; recommendations largely adopted",
       "Achievement: 16 Sep report to the Council guided further action",
       "Achievement: initiative to establish UNIPOM under Res. 211",
       "Limitation: failed to secure compliance on own authority — no enforcement power; depended on parties' (initially absent) willingness"] });
add("Second War: Effectiveness", { id:"ip-eval-unsc65", title:"Effectiveness: UNSC and Res. 211", when:"1965",
  q:"Evaluate the effectiveness of UNSC mediation and Resolution 211 in 1965.",
  pts:["Achievement: discharged Chapter V duties, urging negotiated settlement and an environment for dialogue",
       "Achievement: UN presence (UNIPOM, UNMOGIP) reduced tensions, maintained ceasefire, supported Tashkent talks",
       "Achievement: Res. 211's clear, unconditional demand pivotal in halting hostilities; expanded SG's role to pursue compliance and supervise withdrawal",
       "Limitation: early Soviet obstruction — USSR refused to convene the Council in late August",
       "Limitation: escalating resolutions (209 → 210 → 211) needed; could not compel compliance due to sovereign equality (Art. 2(1))"] });
add("Second War: Effectiveness", { id:"ip-eval-unipom", title:"Effectiveness: UNIPOM", when:"1965–66",
  q:"Evaluate the effectiveness of UNIPOM.",
  pts:["Achievement: swift deployment — first observers arrived 23 Sep, day ceasefire took effect",
       "Achievement: ~90–100 personnel plus a Royal Canadian Air Force unit at Lahore",
       "Achievement: negotiated mid-December agreement limiting air activity",
       "Limitation: over 1,000 miles of border with ≤100 officers from 10 countries of varying training",
       "Limitation: relied on combatants' communications early on — undermining accurate, timely reporting",
       "Limitation: both sides jockeyed for tactical positions before lines froze, amid mutual distrust"] });

/* ── Second War: Impact ── */
add("Second War: Impact", { id:"ip-w2-impact", title:"Impact of the Second War", when:"1965–1971",
  q:"What was the impact of the 1965 war on India and Pakistan?",
  pts:["India: outrage it ceded the upper hand by accepting ceasefire; continued rise in defence spending",
       "Pakistan: backlash vs Ayub Khan for failing military aims; army's invincibility challenged",
       "East Pakistan resentment over inadequate wartime security despite heavy wartime taxation",
       "Pakistan: war a major financial burden, undoing early-1960s economic progress",
       "India saw US policy as biased (failed to restrain aggressor Pakistan); deepened alignment with USSR",
       "Pakistan resentful US did not aid its ally; turned increasingly to China for hardware and political support"] });
add("Second War: Impact", { id:"ip-eastpak", title:"Growing dissatisfaction in East Pakistan", when:"1966–1971",
  q:"Why did East Pakistani dissatisfaction grow after 1965?",
  pts:["Ganguly (1998): post-1965 developments represent “the unravelling of the fabric of Pakistan's Islamic ideology, the very raison d'etre”",
       "Ganguly: East Pakistani leaders realised Kashmir was “essentially a West Pakistani cause” for which East Pakistan was made “needlessly vulnerable”",
       "1966–1971: fundamental inability of West Pakistani leadership to accommodate the East Pakistani majority",
       "Set the direct trajectory toward the 1971 war"] });

/* ── Third War ── */
add("Third War (1971)", { id:"ip-w3-timeline", title:"Third War timeline", when:"3–17 Dec 1971",
  q:"Outline the key events of the Third Indo-Pakistani War.",
  pts:["Fought during the Bangladesh Liberation War, 3 Dec to Pakistani capitulation in Dhaka 16 Dec 1971",
       "3 Dec: Pakistani air attack (Operation Chengiz Khan) on Indian bases in the northwest; ground operations in Kashmir and Punjab",
       "4 Dec: IAF hits Pakistani airbases incl. Peshawar (PAF HQ) and Karachi (with naval bombardment); India keeps air superiority",
       "16 Dec: Pakistan's Eastern Command signs instrument of surrender in Dhaka — Bangladesh formed",
       "17 Dec: Indira Gandhi orders unilateral ceasefire; Yahya Khan reciprocates",
       "Jul–Aug 1972: Simla Agreement"] });
add("Third War (1971)", { id:"bangladesh", title:"The Bangladesh Liberation War: background", when:"1947–1971",
  q:"Why did East Pakistan break away in 1971?",
  clue:"After the Awami League won 167 of 169 eastern seats in 1970, the Army and Bhutto blocked it from power and Mujib was jailed.",
  pts:["Partition created non-contiguous West and East Pakistan — shared Islam, differed sharply in language, ethnicity, culture",
       "West treated the East paternalistically at best, exploitatively at worst; gross economic disparities",
       "1970 elections: Awami League won 167 of 169 East Pakistani seats and a simple majority nationally",
       "Blocked from forming government by the Army and PPP leader Zulfikar Ali Bhutto; Sheikh Mujibur Rahman jailed",
       "Mass protests brutally suppressed by the Army, triggering a massive refugee exodus into India"] });
add("Third War (1971)", { id:"ip-india-1971", title:"India's role in the roots of the Third War", when:"Mar–Dec 1971",
  q:"What role did India play in the build-up to the 1971 war?",
  pts:["27 Mar 1971: rebel major Ziaur Rahman declares Bangladeshi independence on Mujibur's behalf; Indira Gandhi expresses full support same day",
       "~10 million refugees flee to India; India opens border and sets up camps",
       "Exiled Bangladeshi officers use camps to recruit/train the Mukti Bahini",
       "Autumn 1971: Indira Gandhi's European tour secures UK and French cooperation in blocking pro-Pakistan UNSC action",
       "US-sponsored ceasefire/withdrawal resolution (introduced by Amb. George H.W. Bush) vetoed by the USSR despite Nixon–Kissinger pressure"] });
add("Third War (1971)", { id:"ip-chengiz", title:"Operation Chengiz Khan", when:"3 Dec 1971",
  q:"What was Operation Chengiz Khan and what did it lead to?",
  clue:"Pre-emptive Pakistani air strikes on eight Indian air stations that opened full war on 3 December 1971.",
  pts:["Indian-backed East Pakistani guerrillas fought the Army through autumn 1971; West Pakistan responded with air attacks, opening full war on 3 Dec",
       "Pre-emptive aerial strikes on eight Indian air stations",
       "Triggered India's formal declaration of war and entry on the side of Bengali nationalists",
       "Expanded conflict to eastern and western fronts",
       "13 days later India had the upper hand; Eastern Command surrendered 16 Dec 1971"] });
add("Third War (1971)", { id:"ip-w3-consequences", title:"Human consequences of the 1971 war", when:"1971",
  q:"What were the human consequences of the 1971 war?",
  pts:["~93,000 Pakistani servicemen taken prisoner",
       "79,676–81,000 uniformed personnel (incl. some loyalist Bengali soldiers); remaining 10,324–12,500 civilians/collaborators (Razakars)",
       "Pakistani military and allied Islamist militias estimated to have killed 300,000–3,000,000 civilians in Bangladesh",
       "A further 8–10 million fled to India"] });

/* ── Third War: Superpowers and PRC ── */
add("Third War: Superpowers & PRC", { id:"ip-us-1971", title:"American involvement in 1971", when:"1971",
  q:"Why and how did the US support Pakistan in 1971?",
  pts:["By late summer 1971: West Pakistan with China and US; (East) Pakistan with India and USSR",
       "US kept shipping arms; Nixon feared Soviet expansion into South/Southeast Asia if Pakistan disintegrated",
       "Kissinger: India would “completely dominate the sub-continent, Soviet influence would skyrocket… a major war could erupt”",
       "Nixon negotiating rapprochement with China (planned Feb 1972 visit)",
       "Violating Congressional sanctions, routed supplies via Jordan and Iran; encouraged China to increase arms to Pakistan",
       "Gave Yahya Khan illusory assurance the US would intervene to stop India in East Pakistan"] });
add("Third War: Superpowers & PRC", { id:"ip-enterprise", title:"USS Enterprise to the Bay of Bengal", when:"11 Dec 1971",
  q:"Why did Nixon send the USS Enterprise to the Bay of Bengal, and how did the USSR respond?",
  clue:"A US carrier sent on 11 Dec 1971 that India saw as a nuclear threat; Moscow answered with a nuclear submarine.",
  pts:["11 Dec 1971: Nixon dispatched the USS Enterprise to the Bay of Bengal",
       "India saw it as a nuclear threat",
       "Kissinger (memoirs): meant to deter Indian action on the western border while demonstrating US reliability to China",
       "6 & 13 Dec: Soviet Navy sent nuclear-missile-armed ships from Vladivostok to monitor the US Navy",
       "A Soviet nuclear submarine was sent in response to the Enterprise"] });
add("Third War: Superpowers & PRC", { id:"ip-ussr-1971", title:"Soviet involvement in 1971", when:"1971",
  q:"Why and how did the USSR back India in 1971?",
  pts:["Mahmood's three motives: strengthen India as counterweight to China; naval bases in the Indian Ocean; foothold in South Asia with East Pakistan's fall",
       "Pledged countermeasures if India faced confrontation with the US or China",
       "Indo-Soviet Friendship Treaty (9 Aug 1971): 20-year treaty; alienated the US and reduced likelihood of Chinese involvement",
       "Supplied tanks, aircraft, missiles, submarines, missile boats worth ~$730 million, with Soviet instructors",
       "Soviet personnel reportedly manned Indian missile boats and flew Indian Army planes",
       "Blocked every UNSC resolution aimed at peace until East Pakistan's fall"] });
add("Third War: Superpowers & PRC", { id:"ip-china-1971", title:"Chinese involvement in 1971", when:"1971",
  q:"What role did China play in the 1971 war?",
  pts:["Pre-war: advised Pakistan to reach a peaceful settlement with East Pakistani leaders, fearing Indian interference",
       "Gave moral and military aid during the war, of lesser quality than Soviet aid to India",
       "Alarmed at prospect of Indian integration of Pakistan-administered Kashmir",
       "Nixon encouraged China to mobilise along the Indian border — but China did not intervene militarily"] });
add("Third War (1971)", { id:"ip-w3-outcomes", title:"Outcomes of the Third War", when:"1971",
  q:"What were the outcomes of the 1971 war?",
  pts:["Pakistan's land, air and sea forces comprehensively defeated",
       "Creation of independent Bangladesh, challenging Pakistan's founding rationale as a single Muslim homeland — a major blow to its raison d'être",
       "Power asymmetry left Pakistan temporarily unable to challenge the Kashmir status quo",
       "India unsettled by the precedent of further fragmentation"] });

/* ── Simla ── */
add("Simla Agreement (1972)", { id:"simla", title:"Simla Agreement", when:"2 Jul 1972",
  q:"What were the terms and significance of the Simla Agreement?",
  clue:"1972 accord in which Pakistan recognised Bangladesh and both sides committed to bilateral negotiations only.",
  pts:["Signed 2 Jul 1972 to “put an end to the conflict and confrontation that have hitherto marred their relations”",
       "Pakistan to recognise Bangladesh; India to return captured territories and the 93,000 POWs without war-crimes trials",
       "At India's insistence, differences settled “by peaceful means through bilateral negotiations” — excluding third-party (incl. UN) mediation",
       "Both recognised the 1948 and 1971 ceasefire lines as the LoC and committed to refraining from force",
       "Followed by longer relative peace: India dominant South Asian power; Pakistan's attention shifted toward the Muslim Arab world"] });
add("Simla Agreement (1972)", { id:"ip-unmogip-simla", title:"UNMOGIP after Simla", when:"1972 onward",
  q:"Why was UNMOGIP's mandate disputed after Simla?",
  pts:["India: mandate lapsed (it related to the 1949 Karachi ceasefire line specifically); Pakistan disagreed",
       "SG: UNMOGIP can only be terminated by UNSC decision — continued on same arrangements since Dec 1971 ceasefire",
       "SG's last formal report on UNMOGIP to the Council was in 1972",
       "India has not recognised third-party involvement over J&K; no complaints to UNMOGIP since Jan 1972",
       "India still provides UNMOGIP security/transport/logistics on its side; Pakistan continues to lodge complaints"] });
add("Third War: Effectiveness", { id:"ip-eval-71", title:"Effectiveness of conflict management 1971–72", when:"1971–72",
  q:"Evaluate superpower mediation, the Simla Agreement and UN peacekeeping in the Third War.",
  pts:["Superpowers: limited role — not neutral; rivalry emboldened allies (US–Pakistan–China vs USSR–India) to escalate rather than restrain",
       "Simla achievement: reaffirmed LoC and peaceful resolution of Kashmir",
       "Simla achievement: POW/internee repatriation; normalised relations, reopening missions and high-level talks",
       "Simla limitation: Kashmir unresolved — no mechanism or timeline for final settlement",
       "Simla limitation: no enforcement — nothing to monitor LoC violations or handle reneging",
       "UN: failed to prevent war — Soviet veto of US-sponsored ceasefire resolution paralysed the UNSC"] });
add("Third War: Epilogue", { id:"ip-epilogue", title:"Epilogue: road to the 1989 insurgency", when:"1972–1989",
  q:"How did Ganguly (2001) characterise New Delhi's Kashmir policy after 1971, and what does this suggest about conflict management?",
  pts:["Euphoria of India's victory lasted a considerable time",
       "1972–1983: governments showed “skill, tact, and intelligence” on internal Kashmir problem",
       "From 1984: returned to “extraordinary clumsiness, thoughtlessness and downright deceit” of the 1950s–60s",
       "Culminated in an ethno-religious insurgency in Dec 1989, again giving Pakistan a chance to pry Kashmir out of the union",
       "Suggests management treated symptoms (ceasefires, withdrawals) not the cause (sovereignty over Kashmir)"] });

/* ── Consolidation ── */
add("Consolidation: actors across three wars", { id:"ip-consol-w1", title:"Consolidation: First War", when:"1947–49",
  q:"Summarise the outbreak, development/end and unresolved tensions of the First War.",
  pts:["Dispute over Kashmir",
       "Outbreak: British Partition Plan and competing nationalisms; Pakistani troops in Poonch rebellion; accession and Indian airlift",
       "Development: both sides contributed to violence; India's formal UNSC referral",
       "End: UN intervention (UNSC + UNCIP resolutions) → UN-sponsored ceasefire (UNCIP, UNMOGIP, 1949 Karachi Agreement)",
       "Unresolved: plebiscite never held; growing superpower influence in each country"] });
add("Consolidation: actors across three wars", { id:"ip-consol-w2", title:"Consolidation: Second War", when:"1965–66",
  q:"Summarise the outbreak, development/end and unresolved tensions of the Second War.",
  pts:["Dispute over Kashmir",
       "Outbreak: Operation Gibraltar — covert infiltration to incite a Kashmiri Muslim rebellion",
       "Development: India's counterattack intensifies the conflict",
       "End: UNSC Res. 211; US military embargo; USSR-mediated Tashkent Declaration",
       "Unresolved: increasing East Pakistani resentment of West Pakistan's perceived military neglect"] });
add("Consolidation: actors across three wars", { id:"ip-consol-w3", title:"Consolidation: Third War", when:"1971–72",
  q:"Summarise the outbreak, development/end and unresolved tensions of the Third War.",
  pts:["Dispute over East Pakistan/Bangladesh",
       "Outbreak: India's support for the independence struggle; Operation Chengiz Khan (air attack + ground assault on Kashmir/Punjab); superpowers backing allies",
       "Development: India's counterattack intensifies the conflict",
       "End: India's unilateral ceasefire; Pakistani surrender in East Pakistan → 1972 Simla Agreement",
       "Unresolved: power asymmetry leaves Pakistan unable to challenge the Kashmir status quo; sets up the 1989 insurgency"] });

/* ── Exam synthesis: macro-organiser ── */
add("Exam synthesis: role of players", { id:"ip-macro-domestic", title:"Macro-organiser: domestic players", when:"1947–1971",
  q:"Trace the roles of India, Pakistan and the Kashmiris across the three wars.",
  pts:["India: 1947 airlifts troops after conditional accession, refers to UNSC; 1965 counter-attacks across LoC, opens Punjab front",
       "India 1971: backs Mukti Bahini; declares war after Chengiz Khan; unilateral ceasefire after victory",
       "Pakistan: 1947 backs tribal invasion via Azad Kashmir forces; 1965 Gibraltar → Grand Slam (Akhnoor)",
       "Pakistan 1971: Chengiz Khan air strikes; surrenders in Dhaka after 13 days",
       "Kashmir: 1947 Maharaja accedes under duress, Sheikh Abdullah's NC backs India; 1965 populace refuses to join uprising; 1971 not primary theatre but LoC reaffirmed at Simla"] });
add("Exam synthesis: role of players", { id:"ip-macro-external", title:"Macro-organiser: external players", when:"1947–1971",
  q:"Trace the roles of the superpowers and the UN across the three wars.",
  pts:["Superpowers 1947: limited direct role; British officers still command both armies",
       "Superpowers 1965: US embargo on both; USSR mediates Tashkent; both seek to exclude China",
       "Superpowers 1971: US backs Pakistan (USS Enterprise); USSR backs India (vetoes, arms); China backs Pakistan but doesn't intervene",
       "UN 1947: Res. 38/39/47/51; UNCIP; UNMOGIP; Karachi Agreement",
       "UN 1965: Res. 209/210/211; UNIPOM created; U Thant's personal mediation",
       "UN 1971: UNSC paralysed by Soviet veto; minimal effective role"] });
add("Exam synthesis: reasons grid", { id:"ip-grid-a", title:"Reasons grid: decolonisation, security, sovereignty", when:"framework",
  q:"Link decolonisation, security and territorial sovereignty to the actions of each actor.",
  pts:["Decolonisation: India accepted provisional accession under Nehru's two conditions; Pakistan pressured Kashmir via tribal proxies",
       "Decolonisation: Hari Singh's failed independence bid; Britain/Mountbatten's rushed Radcliffe Line and princely-state ambiguity",
       "Security: India saw Kashmir as buffer vs USSR/China/Afghanistan; Pakistan feared Indian troops on the Lahore–Pindi corridor",
       "Security: strategic location made Kashmir a prize, not a negotiable border",
       "Sovereignty: India claimed legal possession via Instrument; Pakistan disputed legality (duress, Standstill breach)",
       "Sovereignty: Maharaja's accession is the contested legal act; UN never adjudicated it conclusively"] });
add("Exam synthesis: reasons grid", { id:"ip-grid-b", title:"Reasons grid: nationalism, religion, economics", when:"framework",
  q:"Link nationalism, religion and economic interests to the actions of each actor.",
  pts:["Nationalism: India secular “One Nation” — Kashmir as proof of pluralism; Pakistan “Two Nation” — Kashmir needed for “completeness”",
       "Nationalism: Kashmir's Muslim-majority population caught between rival nationalisms",
       "Religion: India Hindu-majority state ruled secularly; Pakistan Muslim homeland rationale",
       "Religion: Kashmir ¾ Muslim with Hindu Maharaja — the core anomaly",
       "Economic: India controls upstream Indus barrages; Pakistan dependent on Indus for 90% of food, 65% of employment",
       "Economic: 1960 Indus Waters Treaty (World Bank-brokered)"] });
add("Exam synthesis: conflict management grid", { id:"ip-cm-grid", title:"Conflict management quick-reference grid", when:"1949–1972",
  q:"For each war, summarise the diplomatic efforts, peacekeeping efforts and unresolved issues.",
  pts:["1st War diplomacy: 1949 Karachi Agreement — ceasefire line, no resolution of status; peacekeeping: UNCIP, UNMOGIP — observation only",
       "1st War unresolved: plebiscite never held; accession legality disputed; superpower patronage begins",
       "2nd War diplomacy: Tashkent (USSR-mediated) — pre-war positions, no substantive gain; peacekeeping: Res. 209/210/211, UNIPOM (temporary, undermanned)",
       "2nd War unresolved: Kashmir status; East Pakistani resentment intensifies, setting up 1971",
       "3rd War diplomacy: Simla — bilateral-only clause excludes third-party mediation; peacekeeping: UNSC paralysed by veto, UNMOGIP mandate disputed",
       "3rd War unresolved: Kashmir; sets stage for 1989 insurgency; Pakistan's raison d'être undermined"] });

/* ── Overall evaluation ── */
add("Overall evaluation", { id:"ip-eval-diplomacy", title:"Overall evaluation: diplomacy", when:"1947–1972",
  q:"How effective was conflict management, 1947–1972? Evaluate diplomacy.", qs:"notes",
  pts:["Achievement: each war followed by a negotiated agreement (Karachi 1949, Tashkent 1966, Simla 1972) halting fighting and re-establishing a ceasefire line",
       "Achievement: agreements progressively narrowed third-party involvement — Simla's bilateral clause made relations more “normal” interstate relations than an internationalised dispute",
       "Limitation: none addressed the core sovereignty question over Kashmir — ceasefire/status-quo arrangements, not resolutions",
       "Limitation: credibility depended on relative military exhaustion, not reconciliation",
       "Ceasefires held only until the next perceived window (Pakistan in 1965, India's overwhelming advantage in 1971)"] });
add("Overall evaluation", { id:"ip-eval-peacekeeping", title:"Overall evaluation: peacekeeping", when:"1947–1972",
  q:"How effective was UN peacekeeping in managing the Indo-Pakistani conflict, 1947–1972?",
  pts:["Achievement: UNMOGIP/UNIPOM prevented more frequent or larger wars — only three in 25 years despite chronic tension",
       "Limitation: structurally toothless — unarmed observers, no Article 42-style mandate; could only report",
       "Consequence of sovereign equality (Art. 2(1)), which the UNSC could not override without Great Power consensus",
       "Great Power consensus undermined by Cold War rivalry (e.g. Soviet veto in 1971)",
       "Limitation: under-resourced — UNMOGIP's ~45 and UNIPOM's ~90–100 observers inadequate for a 1,000+ mile border"] });
add("Overall evaluation", { id:"ip-eval-superpowers", title:"Overall evaluation: role of the superpowers", when:"1947–1972",
  q:"Was superpower involvement helpful or harmful in managing the Indo-Pakistani conflict?",
  pts:["Double-edged: US/Soviet mediation (embargoes, Tashkent, pressure) ended each war faster than UN action alone",
       "But patronage and arms (US–Pakistan, USSR–India) emboldened both to escalate",
       "1965: Pakistan's belief in eventual Western intervention; 1971: both sides confident in their patrons",
       "Motives rarely altruistic: main driver of 1965 US–USSR cooperation was excluding China",
       "Cold War geopolitics subordinated conflict resolution to strategic competition"] });
add("Overall evaluation", { id:"ip-verdict", title:"Overall verdict on conflict management", when:"1947–1972",
  q:"What is the overall verdict on conflict management in the Indo-Pakistani conflict?",
  pts:["Reasonably effective at the tactical level: ended hostilities, set ceasefire lines, facilitated withdrawals and POW exchanges",
       "Largely ineffective at the strategic level: none resolved the core dispute over Kashmir's sovereignty",
       "Each ceasefire a pause rather than a settlement",
       "Explains recurrence of conflict (1947 → 1965 → 1971) and re-emergence as the 1989 Kashmir insurgency"] });

/* ── Essay frameworks ── */
add("Suggested essay frameworks", { id:"ip-essay-phase", title:"Essay framework: phase of conflict", when:"framework",
  q:"How can an essay on the Indo-Pakistani conflict be structured by phase of conflict?",
  pts:["Outbreak: what specific actor/decision triggered the move from tension to open war?",
       "Escalation: how did counter-attacks, superpower involvement or domestic pressures widen the conflict?",
       "De-escalation/resolution: which diplomatic/peacekeeping mechanisms were used, and how effective relative to material factors (e.g. military exhaustion, embargoes)?"] });
add("Suggested essay frameworks", { id:"ip-essay-lens", title:"Essay frameworks: management lens and actor-centred", when:"framework",
  q:"Outline the conflict-management-lens and actor-centred essay frameworks.",
  pts:["Diplomacy: Karachi (1949) → Tashkent (1966) → Simla (1972)",
       "Peacekeeping: UNCIP/UNMOGIP (1948–49) → UNSC resolutions + UNIPOM (1965) → UNSC paralysis (1971)",
       "Unresolved: the plebiscite question (never held) connects all three wars",
       "Combatant states: trace India's and Pakistan's shifting strategic calculations",
       "Superpowers: minimal involvement (1947) → active but self-interested mediation (1965) → committed bloc alignment (1971)",
       "UN: declining effectiveness — meaningful (if limited) machinery 1947–49 → firmer but unenforceable resolutions 1965 → paralysis by veto 1971"] });
})();
