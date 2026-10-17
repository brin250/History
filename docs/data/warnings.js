// Places where the study notes contradict themselves in a way that could change an exam answer
// (different years, very different figures, opposite claims). Small differences (a day or two,
// rounding, "about 8,000" vs "upwards of 7,000") are left alone. Found by reading every notes file
// in full; each card keeps the notes as written and shows these warnings so you can check the
// right version with your lecture slides or teacher.
(function(){
const W = {
 "it-konf-chron-1": [
  "Your notes disagree: the Inter-State notes (B.1 Chronology) say the Malaysia idea was proposed in May 1961, but the ASEAN notes timeline (1.1) puts it in late 1961–62."
 ],
 "as-timeline-1954-63": [
  "Your notes disagree: the Inter-State notes (B.1 Chronology) say the Malaysia idea was proposed in May 1961, but the ASEAN notes timeline (1.1) puts it in late 1961–62.",
  "Your notes disagree: the ASEAN timeline says Malaysia–Philippines ties were severed in Sep 1963 when Malaysia was formed, but the ASA section of the ASEAN notes and Inter-State notes C.3 say the 1962 Sabah claim itself caused the break."
 ],
 "as-asa": [
  "Your notes disagree: the ASEAN timeline says Malaysia–Philippines ties were severed in Sep 1963 when Malaysia was formed, but the ASA section of the ASEAN notes and Inter-State notes C.3 say the 1962 Sabah claim itself caused the break."
 ],
 "it-macapagal": [
  "Your notes disagree: the ASEAN timeline says Malaysia–Philippines ties were severed in Sep 1963 when Malaysia was formed, but the ASA section of the ASEAN notes and Inter-State notes C.3 say the 1962 Sabah claim itself caused the break."
 ],
 "it-sabah-chron-1": [
  "Your notes disagree: the ASEAN timeline says Malaysia–Philippines ties were severed in Sep 1963 when Malaysia was formed, but the ASA section of the ASEAN notes and Inter-State notes C.3 say the 1962 Sabah claim itself caused the break."
 ],
 "corregidor": [
  "Your notes disagree: the Inter-State notes say diplomatic relations were suspended when the Corregidor operation was exposed (Mar 1968), but the ASEAN notes link the withdrawal of ambassadors to Republic Act 5446 (Sep 1968)."
 ],
 "it-sabah-chron-2": [
  "Your notes disagree: the Inter-State notes say diplomatic relations were suspended when the Corregidor operation was exposed (Mar 1968), but the ASEAN notes link the withdrawal of ambassadors to Republic Act 5446 (Sep 1968)."
 ],
 "as-sabah-asean": [
  "Your notes disagree: the Inter-State notes say diplomatic relations were suspended when the Corregidor operation was exposed (Mar 1968), but the ASEAN notes link the withdrawal of ambassadors to Republic Act 5446 (Sep 1968)."
 ],
 "as-regional-env": [
  "Your notes disagree: section 1.3 gives the Jan 1968 East of Suez announcement, the 1969 Nixon Doctrine and Sino-US rapprochement (dated 1971 in 4.1) as reasons ASEAN was formed, but ASEAN was founded on 8 Aug 1967, before all of these. Be careful using them as causes of ASEAN's formation."
 ],
 "as-security-motive": [
  "Your notes disagree: section 1.3 gives the Jan 1968 East of Suez announcement, the 1969 Nixon Doctrine and Sino-US rapprochement (dated 1971 in 4.1) as reasons ASEAN was formed, but ASEAN was founded on 8 Aug 1967, before all of these. Be careful using them as causes of ASEAN's formation."
 ],
 "as-security-context": [
  "Your notes disagree: section 1.3 gives the Jan 1968 East of Suez announcement, the 1969 Nixon Doctrine and Sino-US rapprochement (dated 1971 in 4.1) as reasons ASEAN was formed, but ASEAN was founded on 8 Aug 1967, before all of these. Be careful using them as causes of ASEAN's formation."
 ],
 "as-phases": [
  "Your notes disagree: the 2.1 phases table names the 1978–79 Vietnamese invasion of Cambodia as the trigger for the phase starting in 1976, but section 2.4 credits the 1976 turning point to the Fall of Saigon and the communist victories of 1975."
 ],
 "bali76": [
  "Your notes disagree: the 2.1 phases table names the 1978–79 Vietnamese invasion of Cambodia as the trigger for the phase starting in 1976, but section 2.4 credits the 1976 turning point to the Fall of Saigon and the communist victories of 1975.",
  "Your notes disagree: sections 2.4 and 3.1 say the AEMM was set up at the Feb 1976 Bali Summit, but section 3.5 says “First AEMM (1978)”."
 ],
 "as-econ-timeline-2": [
  "Your notes disagree: the 3.1 timeline dates the Chiang Mai Initiative to 1998, but section 3.4 dates it to 2000.",
  "Your notes disagree: the 3.1 timeline puts the ASEAN Surveillance Process in the 1997 row, but section 3.4 dates it to 1999."
 ],
 "as-afc": [
  "Your notes disagree: the 3.1 timeline dates the Chiang Mai Initiative to 1998, but section 3.4 dates it to 2000.",
  "Your notes disagree: the 3.1 timeline puts the ASEAN Surveillance Process in the 1997 row, but section 3.4 dates it to 1999."
 ],
 "as-econ-timeline-1": [
  "Your notes disagree: sections 2.4 and 3.1 say the AEMM was set up at the Feb 1976 Bali Summit, but section 3.5 says “First AEMM (1978)”."
 ],
 "as-external-econ": [
  "Your notes disagree: sections 2.4 and 3.1 say the AEMM was set up at the Feb 1976 Bali Summit, but section 3.5 says “First AEMM (1978)”."
 ],
 "wd-tl-late": [
  "Your notes disagree: the Section II timeline says the Pedra Branca case was brought to the ICJ in 1994, but the Annex (VIII.1.3) and the IV.4.2 table say only the referral was agreed in 1994 and the case was not submitted until 2005."
 ],
 "wd-pb-icj": [
  "Your notes disagree: the Section II timeline says the Pedra Branca case was brought to the ICJ in 1994, but the Annex (VIII.1.3) and the IV.4.2 table say only the referral was agreed in 1994 and the case was not submitted until 2005.",
  "Your notes disagree: Annex VIII.1.3 says the ICJ based the award on the 1824 Anglo-Dutch Treaty and official legal ownership, but the same bullet says the Court found Johor held original sovereignty, which passed to Singapore through long administration and Malaysia's non-response."
 ],
 "pedrabranca": [
  "Your notes disagree: the Section II timeline says the Pedra Branca case was brought to the ICJ in 1994, but the Annex (VIII.1.3) and the IV.4.2 table say only the referral was agreed in 1994 and the case was not submitted until 2005.",
  "Your notes disagree: Annex VIII.1.3 says the ICJ based the award on the 1824 Anglo-Dutch Treaty and official legal ownership, but the same bullet says the Court found Johor held original sovereignty, which passed to Singapore through long administration and Malaysia's non-response."
 ],
 "cw1-players-europe": [
  "Your notes disagree: §2, §3.1 and §18.1 say the USSR was created in 1924, but the §4 Master Timeline says it was formed in 1922.",
  "Your notes disagree: §2 dates Tito's break from Stalin to 1947, but the §4 Master Timeline puts the split (Yugoslavia's expulsion from COMINFORM) in June 1948."
 ],
 "cw1-ussr-actions-1917": [
  "Your notes disagree: §2, §3.1 and §18.1 say the USSR was created in 1924, but the §4 Master Timeline says it was formed in 1922."
 ],
 "cw1-tl-1917-44": [
  "Your notes disagree: §2, §3.1 and §18.1 say the USSR was created in 1924, but the §4 Master Timeline says it was formed in 1922."
 ],
 "cw3-ussr-what": [
  "Your notes disagree: §2, §3.1 and §18.1 say the USSR was created in 1924, but the §4 Master Timeline says it was formed in 1922."
 ],
 "cw3-structure": [
  "Your notes disagree: §2, §3.1 and §18.1 say the USSR was created in 1924, but the §4 Master Timeline says it was formed in 1922."
 ],
 "cw1-tl-1947-48": [
  "Your notes disagree: §2 dates Tito's break from Stalin to 1947, but the §4 Master Timeline puts the split (Yugoslavia's expulsion from COMINFORM) in June 1948."
 ],
 "sovietisation": [
  "Your notes disagree: §2 dates Tito's break from Stalin to 1947, but the §4 Master Timeline puts the split (Yugoslavia's expulsion from COMINFORM) in June 1948."
 ],
 "marshall": [
  "Your notes disagree: the same §4.3 paragraph gives the Marshall Plan as $17 billion over 4 years and then as $13 billion for 1948–1952. Check which figure your lecture uses."
 ],
 "cw1-periodisation": [
  "Your notes disagree: §2 (and §12.8 and §23.3) start Peaceful Coexistence in 1953, but the §16.1 table ends Cold War I in 1955 and starts Peaceful Coexistence in 1955."
 ],
 "cw2-cmc-detente": [
  "Your notes disagree: §2 (and §12.8 and §23.3) start Peaceful Coexistence in 1953, but the §16.1 table ends Cold War I in 1955 and starts Peaceful Coexistence in 1955.",
  "Your notes disagree: §12.8 says the US went to DEFCON 3 in the 1973 Yom Kippur War, but §23.3(c) says DEFCON 2 was raised then."
 ],
 "cw2-rt-korea-impact": [
  "Your notes disagree: §2 (and §12.8 and §23.3) start Peaceful Coexistence in 1953, but the §16.1 table ends Cold War I in 1955 and starts Peaceful Coexistence in 1955."
 ],
 "renewedcontainment": [
  "Your notes disagree: §2 (and §12.8 and §23.3) start Peaceful Coexistence in 1953, but the §16.1 table ends Cold War I in 1955 and starts Peaceful Coexistence in 1955."
 ],
 "cw2-korea-tl-war": [
  "Your notes disagree: the §11.3 and §23.3 timelines say Chinese troops crossed the Yalu and pushed UN forces south on 25 Oct 1950, but §11.7 dates China's entry into the war to 25 Nov 1950."
 ],
 "chinakorea": [
  "Your notes disagree: the §11.3 and §23.3 timelines say Chinese troops crossed the Yalu and pushed UN forces south on 25 Oct 1950, but §11.7 dates China's entry into the war to 25 Nov 1950."
 ],
 "cw2-rollback": [
  "Your notes disagree: the §11.3 and §23.3 timelines say Chinese troops crossed the Yalu and pushed UN forces south on 25 Oct 1950, but §11.7 dates China's entry into the war to 25 Nov 1950."
 ],
 "cw2-us-disregard-geneva": [
  "Your notes disagree: §13.5 says the ARVN grew from 243,000 to 514,000 (about +271,000) in the Kennedy years, but §13.10 says it grew by only 20,000 men over the same period."
 ],
 "cw2-flexible-response": [
  "Your notes disagree: §13.5 says the ARVN grew from 243,000 to 514,000 (about +271,000) in the Kennedy years, but §13.10 says it grew by only 20,000 men over the same period."
 ],
 "cw2-search-destroy": [
  "Your notes disagree: §13.10 puts the US troop peak (543,000) in 1969, but §23.3(b) puts it in 1968 (536,000). The drawdown is given as 540,000 (1968) to 24,000 by 1972 in §13.10 and as 480,000 to 23,000 by 1973 in §23.3(b)."
 ],
 "vietnamisation": [
  "Your notes disagree: §13.10 puts the US troop peak (543,000) in 1969, but §23.3(b) puts it in 1968 (536,000). The drawdown is given as 540,000 (1968) to 24,000 by 1972 in §13.10 and as 480,000 to 23,000 by 1973 in §23.3(b)."
 ],
 "cw2-rt-viet-tl2": [
  "Your notes disagree: §13.10 puts the US troop peak (543,000) in 1969, but §23.3(b) puts it in 1968 (536,000). The drawdown is given as 540,000 (1968) to 24,000 by 1972 in §13.10 and as 480,000 to 23,000 by 1973 in §23.3(b)."
 ],
 "cmcimpact": [
  "Your notes disagree: §12.8 dates the Moscow–Washington Hot Line to 1962, but the §23.3(c) revision timeline says it was set up in Jun–Aug 1963."
 ],
 "cw2-rt-cmc-tl2": [
  "Your notes disagree: §12.8 dates the Moscow–Washington Hot Line to 1962, but the §23.3(c) revision timeline says it was set up in Jun–Aug 1963."
 ],
 "cw2-rt-cmc-impact": [
  "Your notes disagree: §12.8 says the US went to DEFCON 3 in the 1973 Yom Kippur War, but §23.3(c) says DEFCON 2 was raised then."
 ],
 "cw3-military-buildup": [
  "Your notes disagree: §16.3 gives the US defence budget as $171bn (1981) rising to $376bn (1986), but the §20 historiography table gives $134bn rising to $253bn (1980–89).",
  "Your notes disagree: §16.3(a) says the 1972 MBFR conventional-arms talks collapsed, but the SDI impact table describes a “1972 MBFR treaty” whose limits SDI made obsolete."
 ],
 "cw3-triumphalist": [
  "Your notes disagree: §16.3 gives the US defence budget as $171bn (1981) rising to $376bn (1986), but the §20 historiography table gives $134bn rising to $253bn (1980–89).",
  "Your notes disagree: §16.4 and §20 say Soviet defence spending rose from 22% to 27% of GDP in 1980–85, but §16.3 (SDI) and §18.3/§18.5 put it at about 15–17% in 1983–85 (25% only as the highest estimate).",
  "Your notes disagree: §16.3 gives total US aid to the Mujahedeen as $2bn+ over 1979–89, but §16.4 and §20 give about $1bn a year. The Soviet cost is given as about $8bn/yr in one place and about $20bn/yr in another."
 ],
 "cw3-rv-thesis": [
  "Your notes disagree: §16.4 and §20 say Soviet defence spending rose from 22% to 27% of GDP in 1980–85, but §16.3 (SDI) and §18.3/§18.5 put it at about 15–17% in 1983–85 (25% only as the highest estimate).",
  "Your notes disagree: §16.3 gives total US aid to the Mujahedeen as $2bn+ over 1979–89, but §16.4 and §20 give about $1bn a year. The Soviet cost is given as about $8bn/yr in one place and about $20bn/yr in another."
 ],
 "cw3-sdi-impact-ussr": [
  "Your notes disagree: §16.4 and §20 say Soviet defence spending rose from 22% to 27% of GDP in 1980–85, but §16.3 (SDI) and §18.3/§18.5 put it at about 15–17% in 1983–85 (25% only as the highest estimate)."
 ],
 "cw3-external-causes": [
  "Your notes disagree: §16.4 and §20 say Soviet defence spending rose from 22% to 27% of GDP in 1980–85, but §16.3 (SDI) and §18.3/§18.5 put it at about 15–17% in 1983–85 (25% only as the highest estimate)."
 ],
 "cw3-nt-historians": [
  "Your notes disagree: §16.4 and §20 say Soviet defence spending rose from 22% to 27% of GDP in 1980–85, but §16.3 (SDI) and §18.3/§18.5 put it at about 15–17% in 1983–85 (25% only as the highest estimate)."
 ],
 "cw3-sbcs-2025b": [
  "Your notes disagree: §16.4 and §20 say Soviet defence spending rose from 22% to 27% of GDP in 1980–85, but §16.3 (SDI) and §18.3/§18.5 put it at about 15–17% in 1983–85 (25% only as the highest estimate)."
 ],
 "cw3-rd-afghan-nicaragua": [
  "Your notes disagree: §16.3 gives total US aid to the Mujahedeen as $2bn+ over 1979–89, but §16.4 and §20 give about $1bn a year. The Soviet cost is given as about $8bn/yr in one place and about $20bn/yr in another."
 ],
 "cw3-soviet-counter": [
  "Your notes disagree: §16.3 gives total US aid to the Mujahedeen as $2bn+ over 1979–89, but §16.4 and §20 give about $1bn a year. The Soviet cost is given as about $8bn/yr in one place and about $20bn/yr in another."
 ],
 "cw3-summits": [
  "Your notes disagree: the §17.2 summits table says Malta 1989 signed no agreements and puts the CFE Treaty and Chemical Weapons Accord in 1990 (Washington/Paris), but the §17.2 treaties table and §22 checklist date both to Malta, 1989."
 ],
 "cw3-cfe-cw-start": [
  "Your notes disagree: the §17.2 summits table says Malta 1989 signed no agreements and puts the CFE Treaty and Chemical Weapons Accord in 1990 (Washington/Paris), but the §17.2 treaties table and §22 checklist date both to Malta, 1989."
 ],
 "cw3-checklist": [
  "Your notes disagree: the §17.2 summits table says Malta 1989 signed no agreements and puts the CFE Treaty and Chemical Weapons Accord in 1990 (Washington/Paris), but the §17.2 treaties table and §22 checklist date both to Malta, 1989."
 ],
 "cw3-milestones-85-89": [
  "Your notes disagree: the §18.2 milestones table lists German unification under 1989, but §19.4 says Germany was formally reunited on 3 Oct 1990.",
  "Your notes disagree: the §18.2 milestones table dates glasnost to 1987, but §18.4 says glasnost began in 1986."
 ],
 "berlinwall": [
  "Your notes disagree: the §18.2 milestones table lists German unification under 1989, but §19.4 says Germany was formally reunited on 3 Oct 1990.",
  "Your notes disagree: §17.3 says the Wall fell 10 months after Reagan's June 1987 speech, but §19.2, §19.4 and §16.1 date the fall of the Wall to 9 Nov 1989, more than two years later."
 ],
 "cw3-milestones-90-91": [
  "Your notes disagree: §18.2 says Yeltsin was elected President of Russia on 12 June 1991, but §18.6 says he was elected President of Russia in 1990.",
  "Your notes disagree: the §18.1 table says Byelorussia, Ukraine and Georgia led the declaration ending the USSR, but §18.2 and §18.7 say the Minsk Declaration was signed by Belarus, Russia and Ukraine."
 ],
 "cw3-coup-context": [
  "Your notes disagree: §18.2 says Yeltsin was elected President of Russia on 12 June 1991, but §18.6 says he was elected President of Russia in 1990."
 ],
 "cw3-republics": [
  "Your notes disagree: the §18.1 table says Byelorussia, Ukraine and Georgia led the declaration ending the USSR, but §18.2 and §18.7 say the Minsk Declaration was signed by Belarus, Russia and Ukraine."
 ],
 "cw3-dissolution": [
  "Your notes disagree: the §18.1 table says Byelorussia, Ukraine and Georgia led the declaration ending the USSR, but §18.2 and §18.7 say the Minsk Declaration was signed by Belarus, Russia and Ukraine."
 ],
 "cw3-glasnost": [
  "Your notes disagree: the §18.2 milestones table dates glasnost to 1987, but §18.4 says glasnost began in 1986."
 ],
 "cw3-sdi-impact-cw-us": [
  "Your notes disagree: §16.3(a) says the 1972 MBFR conventional-arms talks collapsed, but the SDI impact table describes a “1972 MBFR treaty” whose limits SDI made obsolete."
 ],
 "cw3-econ-coop": [
  "Your notes disagree: §17.3 says the Wall fell 10 months after Reagan's June 1987 speech, but §19.2, §19.4 and §16.1 date the fall of the Wall to 9 Nov 1989, more than two years later."
 ],
 "cw3-brezhnev-carter": [
  "Your notes disagree: §16.2 dates the Brezhnev Doctrine to the 1960s–70s and links it to Czechoslovakia 1968, but §18.5 says it also justified the 1956 intervention in Hungary."
 ],
 "cw3-sinatra": [
  "Your notes disagree: §16.2 dates the Brezhnev Doctrine to the 1960s–70s and links it to Czechoslovakia 1968, but §18.5 says it also justified the 1956 intervention in Hungary."
 ],
 "ge-gatt-rounds": [
  "Your notes disagree: the GATT Rounds table (E5) and the master timeline give the Uruguay Round as 1986–93, but the H4 cooperation table says the “Uruguay Round (1994) created the WTO”."
 ],
 "ge-timeline-2": [
  "Your notes disagree: the GATT Rounds table (E5) and the master timeline give the Uruguay Round as 1986–93, but the H4 cooperation table says the “Uruguay Round (1994) created the WTO”."
 ],
 "ge-coop-g7-wef": [
  "Your notes disagree: the GATT Rounds table (E5) and the master timeline give the Uruguay Round as 1986–93, but the H4 cooperation table says the “Uruguay Round (1994) created the WTO”."
 ],
 "ge-phases": [
  "Your notes disagree: the A2 periodisation ends the Golden Age in the late 1960s and treats late 1960s–1973 as a separate phase of reversal, but the B2 heading (and the A4 table) run the Golden Age through to 1973."
 ],
 "ge-liberalisation-def": [
  "Your notes disagree: the A2 periodisation ends the Golden Age in the late 1960s and treats late 1960s–1973 as a separate phase of reversal, but the B2 heading (and the A4 table) run the Golden Age through to 1973."
 ],
 "ge-boom-scale": [
  "Your notes disagree: the A2 periodisation ends the Golden Age in the late 1960s and treats late 1960s–1973 as a separate phase of reversal, but the B2 heading (and the A4 table) run the Golden Age through to 1973."
 ],
 "ge-golden-features": [
  "Your notes disagree: the A2 periodisation ends the Golden Age in the late 1960s and treats late 1960s–1973 as a separate phase of reversal, but the B2 heading (and the A4 table) run the Golden Age through to 1973."
 ],
 "ge-indicators": [
  "Your notes disagree: the A2 periodisation ends the Golden Age in the late 1960s and treats late 1960s–1973 as a separate phase of reversal, but the B2 heading (and the A4 table) run the Golden Age through to 1973."
 ],
 "ai-1930s-mandate": [
  "Your notes disagree: section 1.3 says the 1939 White Paper pacified the Arabs for a while, but section 1.7 says the Arabs rejected it because it postponed independence and did not fully stop Jewish immigration."
 ],
 "ai-1930s-religion": [
  "Your notes disagree: section 1.3 says the 1939 White Paper pacified the Arabs for a while, but section 1.7 says the Arabs rejected it because it postponed independence and did not fully stop Jewish immigration."
 ],
 "ai-declaration": [
  "Your notes disagree: sections 1.3 and 1.5 say Plan Dalet aimed to take land beyond the UN partition lines, but the 2.2 table says it aimed to secure Jewish areas and control the territory the UN gave the Jewish state."
 ],
 "ai-civil-war-4748": [
  "Your notes disagree: sections 1.3 and 1.5 say Plan Dalet aimed to take land beyond the UN partition lines, but the 2.2 table says it aimed to secure Jewish areas and control the territory the UN gave the Jewish state."
 ],
 "ai-1948-leadup": [
  "Your notes disagree: sections 1.3 and 1.5 say Plan Dalet aimed to take land beyond the UN partition lines, but the 2.2 table says it aimed to secure Jewish areas and control the territory the UN gave the Jewish state."
 ],
 "ai-eval-armistice": [
  "Your notes disagree: the 2.5 armistice table calls the 1949 armistices “separate peace agreements”, but the Camp David section says the 1979 Egypt–Israel treaty was the first Arab–Israeli peace treaty and ended a state of war going back to 1948."
 ],
 "ai-eval-camp-david": [
  "Your notes disagree: the 2.5 armistice table calls the 1949 armistices “separate peace agreements”, but the Camp David section says the 1979 Egypt–Israel treaty was the first Arab–Israeli peace treaty and ended a state of war going back to 1948."
 ],
 "campdavid": [
  "Your notes disagree: the 2.5 armistice table calls the 1949 armistices “separate peace agreements”, but the Camp David section says the 1979 Egypt–Israel treaty was the first Arab–Israeli peace treaty and ended a state of war going back to 1948.",
  "Your notes disagree: the 4.6 evaluation says Resolution 242 was not seriously acted on until the 1991 Madrid Conference, but sections 4.5, 5.4 and 5.7 say Resolution 338 (1973) and the Camp David framework (1978) were built on 242."
 ],
 "ai-1967-aftermath": [
  "Your notes disagree: the 4.7 aftermath table says a further 1 million Palestinians came under Israeli rule after 1967, but section 5.1 says 665,000."
 ],
 "ai-palestinian-extremism": [
  "Your notes disagree: the 4.7 aftermath table says a further 1 million Palestinians came under Israeli rule after 1967, but section 5.1 says 665,000."
 ],
 "ai-eval-242": [
  "Your notes disagree: the 4.6 evaluation credits Resolution 242 (November 1967) with ending the war, but the 4.3 timeline shows the fighting ended on 7–10 June 1967 through the Resolution 234 ceasefires.",
  "Your notes disagree: the 4.6 evaluation says Resolution 242 was not seriously acted on until the 1991 Madrid Conference, but sections 4.5, 5.4 and 5.7 say Resolution 338 (1973) and the Camp David framework (1978) were built on 242."
 ],
 "res242": [
  "Your notes disagree: the 4.6 evaluation credits Resolution 242 (November 1967) with ending the war, but the 4.3 timeline shows the fighting ended on 7–10 June 1967 through the Resolution 234 ceasefires.",
  "Your notes disagree: the 4.6 evaluation says Resolution 242 was not seriously acted on until the 1991 Madrid Conference, but sections 4.5, 5.4 and 5.7 say Resolution 338 (1973) and the Camp David framework (1978) were built on 242."
 ],
 "ai-1967-timeline": [
  "Your notes disagree: the 4.6 evaluation credits Resolution 242 (November 1967) with ending the war, but the 4.3 timeline shows the fighting ended on 7–10 June 1967 through the Resolution 234 ceasefires."
 ],
 "ai-res-338-unef2": [
  "Your notes disagree: the 4.6 evaluation says Resolution 242 was not seriously acted on until the 1991 Madrid Conference, but sections 4.5, 5.4 and 5.7 say Resolution 338 (1973) and the Camp David framework (1978) were built on 242."
 ],
 "ea-jp-timeline2": [
  "Your notes disagree: the Japan timeline says Japan's GNP ranked 2nd in the world by 1968, but the Indicators section calls Japan the world's 3rd-largest economy (after the US and USSR) as late as 1973."
 ],
 "ea-jp-miracle-gnp": [
  "Your notes disagree: the Japan timeline says Japan's GNP ranked 2nd in the world by 1968, but the Indicators section calls Japan the world's 3rd-largest economy (after the US and USSR) as late as 1973."
 ],
 "ea-cn-banking": [
  "Your notes disagree: the banking section says China's two stock exchanges opened in 1990, but the Phases table puts the introduction of stock markets in the 1991–96 phase."
 ],
 "ea-cn-phases": [
  "Your notes disagree: the banking section says China's two stock exchanges opened in 1990, but the Phases table puts the introduction of stock markets in the 1991–96 phase."
 ],
 "ip-w2-cost": [
  "Your notes disagree: the UN section calls 1965 a “17-week war”, but the Part C timeline runs it from 5 Aug to 21–22 Sep 1965, which is about 7 weeks."
 ],
 "ip-w2-timeline-aug": [
  "Your notes disagree: the UN section calls 1965 a “17-week war”, but the Part C timeline runs it from 5 Aug to 21–22 Sep 1965, which is about 7 weeks."
 ],
 "ip-w2-timeline-sep": [
  "Your notes disagree: the UN section calls 1965 a “17-week war”, but the Part C timeline runs it from 5 Aug to 21–22 Sep 1965, which is about 7 weeks."
 ],
 "ip-sinoindian-sig": [
  "Your notes disagree: the Sino-Indian War section says China did not give Pakistan the military support it expected in 1971, but the Part D Chinese Involvement section says China gave Pakistan moral and military aid during the war (though it did not intervene directly)."
 ],
 "ip-china-1971": [
  "Your notes disagree: the Sino-Indian War section says China did not give Pakistan the military support it expected in 1971, but the Part D Chinese Involvement section says China gave Pakistan moral and military aid during the war (though it did not intervene directly)."
 ],
 "ip-timeline-a": [
  "Your notes disagree: the Master Timeline says the J&K constituent assembly approved its constitution in 1957, but Part B (Kashmir's Position After the War) refers to a 1951 constitution that stripped the Maharaja of power."
 ],
 "ip-plebiscite": [
  "Your notes disagree: the Master Timeline says the J&K constituent assembly approved its constitution in 1957, but Part B (Kashmir's Position After the War) refers to a 1951 constitution that stripped the Maharaja of power."
 ],
 "cg-mulele": [
  "Your notes disagree: the Mulele profile and the Kwilu section say the rebellion was suppressed by early 1965, but the Master Timeline says it ended in Dec 1965."
 ],
 "cg-kwilu-course": [
  "Your notes disagree: the Mulele profile and the Kwilu section say the rebellion was suppressed by early 1965, but the Master Timeline says it ended in Dec 1965.",
  "Your notes disagree: the Phase 2 actors table says Mulele led the rebellions in Kwilu and Orientale, and the Kwilu section has the Kwilu rebels taking Stanleyville, but the Simba section says Gizenga, Gbenye and Soumialot led the Orientale (Simba) revolt and took Stanleyville."
 ],
 "cg-tl-1963-65": [
  "Your notes disagree: the Mulele profile and the Kwilu section say the rebellion was suppressed by early 1965, but the Master Timeline says it ended in Dec 1965.",
  "Your notes disagree: the Phase 2 actors table says Mulele led the rebellions in Kwilu and Orientale, and the Kwilu section has the Kwilu rebels taking Stanleyville, but the Simba section says Gizenga, Gbenye and Soumialot led the Orientale (Simba) revolt and took Stanleyville."
 ],
 "cg-onuc-phase2": [
  "Your notes disagree: the ONUC phase table ends Phase II (the fight for Katanga) in Dec 1964, but the same table starts Phase III in Jan 1964 and says Katanga was defeated in Jan 1963."
 ],
 "cg-onuc-phase3": [
  "Your notes disagree: the ONUC phase table ends Phase II (the fight for Katanga) in Dec 1964, but the same table starts Phase III in Jan 1964 and says Katanga was defeated in Jan 1963."
 ],
 "cg-domestic-p2": [
  "Your notes disagree: the Phase 2 actors table says Mulele led the rebellions in Kwilu and Orientale, and the Kwilu section has the Kwilu rebels taking Stanleyville, but the Simba section says Gizenga, Gbenye and Soumialot led the Orientale (Simba) revolt and took Stanleyville."
 ],
 "simba": [
  "Your notes disagree: the Phase 2 actors table says Mulele led the rebellions in Kwilu and Orientale, and the Kwilu section has the Kwilu rebels taking Stanleyville, but the Simba section says Gizenga, Gbenye and Soumialot led the Orientale (Simba) revolt and took Stanleyville."
 ],
 "cg-dragon-rouge": [
  "Your notes disagree: the Phase 2 actors table says Mulele led the rebellions in Kwilu and Orientale, and the Kwilu section has the Kwilu rebels taking Stanleyville, but the Simba section says Gizenga, Gbenye and Soumialot led the Orientale (Simba) revolt and took Stanleyville."
 ],
 "sarajevo": [
  "Your notes disagree: the Key Military Developments table gives 5,434 civilians killed in the siege of Sarajevo (13,952 in total), but section 5.3 on Republika Srpska says the siege caused 12,000 civilian casualties.",
  "Your notes disagree: the Siege of Sarajevo heading runs the siege to 29 Feb 1996, but the Master Timeline and the same table's text say it was lifted on 14 Dec 1995."
 ],
 "bs-vrs": [
  "Your notes disagree: the Key Military Developments table gives 5,434 civilians killed in the siege of Sarajevo (13,952 in total), but section 5.3 on Republika Srpska says the siege caused 12,000 civilian casualties."
 ],
 "bs-tl-1995": [
  "Your notes disagree: the Siege of Sarajevo heading runs the siege to 29 Feb 1996, but the Master Timeline and the same table's text say it was lifted on 14 Dec 1995."
 ],
 "croatbosniak": [
  "Your notes disagree: the Master Timeline and the 5.2 heading start the Croat–Bosniak War on 18 Oct 1992, but another timeline entry (and a line in 5.2) say war between Muslims and Croats broke out in Jan 1993 / early 1993."
 ],
 "bs-tl-1993-94": [
  "Your notes disagree: the Master Timeline and the 5.2 heading start the Croat–Bosniak War on 18 Oct 1992, but another timeline entry (and a line in 5.2) say war between Muslims and Croats broke out in Jan 1993 / early 1993.",
  "Your notes disagree: section 6.3 says the US and NATO began military intervention in 1995, but the NATO table puts NATO's first combat action in Feb 1994 (Banja Luka) and its first close air support in Apr 1994, and the Key Players summary says armed intervention started in 1994–95."
 ],
 "bs-nato-1992": [
  "Your notes disagree: the NATO table's 1992 row has Operation Sharp Guard already running in July 1992, but its next row says Sharp Guard was created on 15 Jun 1995 by merging Maritime Guard with WEU naval activities."
 ],
 "bs-nato-enforce": [
  "Your notes disagree: the NATO table's 1992 row has Operation Sharp Guard already running in July 1992, but its next row says Sharp Guard was created on 15 Jun 1995 by merging Maritime Guard with WEU naval activities."
 ],
 "referendum92": [
  "Your notes disagree: section 1.3 says the Bosnian Serbs declared independence and took the name Republika Srpska on 6 Apr 1992, but the Master Timeline and 5.3 say they declared independence on 7 Apr and were only renamed Republika Srpska on 12 Aug 1992."
 ],
 "bs-tl-1991-92": [
  "Your notes disagree: section 1.3 says the Bosnian Serbs declared independence and took the name Republika Srpska on 6 Apr 1992, but the Master Timeline and 5.3 say they declared independence on 7 Apr and were only renamed Republika Srpska on 12 Aug 1992."
 ],
 "bs-tl-1992": [
  "Your notes disagree: section 1.3 says the Bosnian Serbs declared independence and took the name Republika Srpska on 6 Apr 1992, but the Master Timeline and 5.3 say they declared independence on 7 Apr and were only renamed Republika Srpska on 12 Aug 1992."
 ],
 "bs-rs-formation": [
  "Your notes disagree: section 1.3 says the Bosnian Serbs declared independence and took the name Republika Srpska on 6 Apr 1992, but the Master Timeline and 5.3 say they declared independence on 7 Apr and were only renamed Republika Srpska on 12 Aug 1992."
 ],
 "bs-us-overview": [
  "Your notes disagree: section 6.3 says the US and NATO began military intervention in 1995, but the NATO table puts NATO's first combat action in Feb 1994 (Banja Luka) and its first close air support in Apr 1994, and the Key Players summary says armed intervention started in 1994–95."
 ],
 "bs-us-phase3": [
  "Your notes disagree: section 6.3 says the US and NATO began military intervention in 1995, but the NATO table puts NATO's first combat action in Feb 1994 (Banja Luka) and its first close air support in Apr 1994, and the Key Players summary says armed intervention started in 1994–95."
 ],
 "bs-nato-combat": [
  "Your notes disagree: section 6.3 says the US and NATO began military intervention in 1995, but the NATO table puts NATO's first combat action in Feb 1994 (Banja Luka) and its first close air support in Apr 1994, and the Key Players summary says armed intervention started in 1994–95."
 ],
 "bs-players-summary": [
  "Your notes disagree: section 6.3 says the US and NATO began military intervention in 1995, but the NATO table puts NATO's first combat action in Feb 1994 (Banja Luka) and its first close air support in Apr 1994, and the Key Players summary says armed intervention started in 1994–95."
 ],
 "vietnamindep": [
  "Your notes disagree: §3.3 says Ho dissolved the ICP in Nov 1945, but §5.1 says the ICP was dissolved in 1951 when the Lao Dong Party replaced it."
 ],
 "ns-drv": [
  "Your notes disagree: §3.3 says Ho dissolved the ICP in Nov 1945, but §5.1 says the ICP was dissolved in 1951 when the Lao Dong Party replaced it."
 ],
 "ns-failure": [
  "Your notes disagree: §4 says every other early democracy had turned authoritarian “by 1970”, but the same sentence and §4.2 date the Philippines' shift to martial law in 1972.",
  "Your notes disagree: §4 dates Indonesia's shift to authoritarian rule to 1959, but the timeline and §4.3 say Sukarno imposed Guided Democracy in 1957."
 ],
 "ns-guideddem": [
  "Your notes disagree: §4 dates Indonesia's shift to authoritarian rule to 1959, but the timeline and §4.3 say Sukarno imposed Guided Democracy in 1957."
 ],
 "ns-sukarnogd": [
  "Your notes disagree: §4 dates Indonesia's shift to authoritarian rule to 1959, but the timeline and §4.3 say Sukarno imposed Guided Democracy in 1957."
 ],
 "ns-clusters": [
  "Your notes disagree: the §1.4 table dates Thailand's second return to democracy to 1992, but the Cluster A intro dates it to “post-1980”."
 ],
 "ns-thai76": [
  "Your notes disagree: the §1.4 table dates Thailand's second return to democracy to 1992, but the Cluster A intro dates it to “post-1980”."
 ],
 "ns-prem": [
  "Your notes disagree: the §1.4 table dates Thailand's second return to democracy to 1992, but the Cluster A intro dates it to “post-1980”."
 ],
 "nu-indoctx": [
  "Your notes disagree: §3.1 says the Javanese are 40% of Indonesia's population, but the same sentence says Java holds about 60% of the population.",
  "Your notes disagree: §3.1 says Indonesia spans 18,000 islands, but §3.2 (quoting Adams) says 10,000 islands."
 ],
 "nu-gotong": [
  "Your notes disagree: §3.1 says Indonesia spans 18,000 islands, but §3.2 (quoting Adams) says 10,000 islands."
 ],
 "nu-landreform": [
  "Your notes disagree on the order of events: §4.2 says the 1955 Land Reform Act helped defeat the Huks, yet it also says the Huks were defeated by 1954, a year before the Act."
 ],
 "nu-srvunity": [
  "Your notes disagree: §6.3 gives about 75,000 boat people a month in 1978–79 (900,000+ a year), but §6.4 gives 545,000 boat people in total over 1978–80."
 ],
 "nu-vietminorities": [
  "Your notes disagree: §6.3 gives about 75,000 boat people a month in 1978–79 (900,000+ a year), but §6.4 gives 545,000 boat people in total over 1978–80."
 ],
 "nu-nep": [
  "Your notes disagree: §7.4 puts the non-Malay share at 34% at the start of the NEP (rising to 47%), but §7.7 puts the starting non-Malay share capital at 23.5% (rising to 40% by 1980)."
 ],
 "nu-msiaeval": [
  "Your notes disagree: §7.4 puts the non-Malay share at 34% at the start of the NEP (rising to 47%), but §7.7 puts the starting non-Malay share capital at 23.5% (rising to 40% by 1980).",
  "Your notes disagree: the §1.3 table classes Malaysia as multiculturalism/integration, but §7 and the §9 table say Malaysia was officially assimilative (Malay pre-eminence), though accommodating in practice."
 ],
 "nu-approaches": [
  "Your notes disagree: the §1.3 table classes Malaysia as multiculturalism/integration, but §7 and the §9 table say Malaysia was officially assimilative (Malay pre-eminence), though accommodating in practice."
 ],
 "ec-tarling": [
  "Your notes disagree: Part A dates the First Malaysia Plan to 1969, but the B8 table dates it to 1966–70."
 ],
 "ec-my-govt": [
  "Your notes disagree: Part A dates the First Malaysia Plan to 1969, but the B8 table dates it to 1966–70."
 ],
 "ec-bm-paradox": [
  "Your notes disagree: Part D and the F1/F2 tables call Burma's 4.3% (1961–2001) the lowest growth in the region, but your own GDP table (and the cluster ranking) shows the Philippines lower at 3.9%."
 ],
 "ec-bm-snapshot": [
  "Your notes disagree: Part D and the F1/F2 tables call Burma's 4.3% (1961–2001) the lowest growth in the region, but your own GDP table (and the cluster ranking) shows the Philippines lower at 3.9%."
 ],
 "ec-f1-paths": [
  "Your notes disagree: Part D and the F1/F2 tables call Burma's 4.3% (1961–2001) the lowest growth in the region, but your own GDP table (and the cluster ranking) shows the Philippines lower at 3.9%."
 ],
 "ec-gdp-table": [
  "Your notes disagree: Part D and the F1/F2 tables call Burma's 4.3% (1961–2001) the lowest growth in the region, but your own GDP table (and the cluster ranking) shows the Philippines lower at 3.9%."
 ],
 "ec-cl-growth": [
  "Your notes disagree: Part D and the F1/F2 tables call Burma's 4.3% (1961–2001) the lowest growth in the region, but your own GDP table (and the cluster ranking) shows the Philippines lower at 3.9%.",
  "Your notes disagree: the cluster analysis says Thailand and Malaysia were the only capitalist SEA states to make a successful EOI transition, but Part A lists Singapore as capitalist and says it moved to EOI fastest and most successfully (from the mid-1960s)."
 ],
 "ec-sg-reports": [
  "Your notes disagree: §C2 says the EDB had spawned the National Productivity Board by 1968, but §C7 dates the Board to 1972."
 ],
 "ec-sg-boards": [
  "Your notes disagree: §C2 says the EDB had spawned the National Productivity Board by 1968, but §C7 dates the Board to 1972."
 ],
 "ec-vn-results": [
  "Your notes disagree: §E3 says Vietnam's trade had already doubled to $2bn by 1986–90, but §E4 says trade was still $1bn in 1990 and reached $2bn only in 1991."
 ],
 "ec-vn-1990s": [
  "Your notes disagree: §E3 says Vietnam's trade had already doubled to $2bn by 1986–90, but §E4 says trade was still $1bn in 1990 and reached $2bn only in 1991."
 ],
 "ec-th-sarit-eval": [
  "Your notes disagree: §6.6 says manufacturing/industry overtook agriculture by 1971, but the table right below it shows agriculture still ahead in 1971 (29.8% vs 17.5%/25.7%), and §8.1 says the overtaking came between 1970 and 1990."
 ],
 "ec-th-gdp": [
  "Your notes disagree: §6.6 says manufacturing/industry overtook agriculture by 1971, but the table right below it shows agriculture still ahead in 1971 (29.8% vs 17.5%/25.7%), and §8.1 says the overtaking came between 1970 and 1990.",
  "Your notes disagree: the Thai GDP table puts manufacturing at 10.3% of GDP in 1951, but §7.5 puts it at 16.4% in 1952."
 ],
 "ec-th-eoi-success": [
  "Your notes disagree: §6.6 says manufacturing/industry overtook agriculture by 1971, but the table right below it shows agriculture still ahead in 1971 (29.8% vs 17.5%/25.7%), and §8.1 says the overtaking came between 1970 and 1990.",
  "Your notes disagree: the Thai GDP table puts manufacturing at 10.3% of GDP in 1951, but §7.5 puts it at 16.4% in 1952."
 ],
 "ec-th-chinese": [
  "Your notes disagree: Thailand §10 says Thailand and Singapore had the highest Chinese dominance relative to population, but your own table shows Singapore (70% of population, 81% of capital) with the lowest ratio, while Indonesia (3.8%, 73%) and the Philippines (1.3%, 50–60%) have far higher ratios."
 ],
 "chinesecapital": [
  "Your notes disagree: Thailand §10 says Thailand and Singapore had the highest Chinese dominance relative to population, but your own table shows Singapore (70% of population, 81% of capital) with the lowest ratio, while Indonesia (3.8%, 73%) and the Philippines (1.3%, 50–60%) have far higher ratios."
 ],
 "ec-sg-vs-my": [
  "Your notes disagree: the cluster analysis says Thailand and Malaysia were the only capitalist SEA states to make a successful EOI transition, but Part A lists Singapore as capitalist and says it moved to EOI fastest and most successfully (from the mid-1960s)."
 ],
 "ec-vn-diversify": [
  "Your notes disagree: §E5 says Vietnam's exports “DID diversify” even though its top-3 share rose (43.0% to 54.5%), while the Philippines and cluster sections treat exactly that kind of rise as export concentration, the opposite of diversification."
 ]
};
for (const c of CASES) if (W[c.id]) c.warn = W[c.id];
})();
