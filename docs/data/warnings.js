// Places where the study notes disagree with themselves. Each card keeps both versions;
// this file adds a visible warning so you can check the right one with your lecture slides or teacher.
(function(){
const W = {
  "accession": "Your notes give two dates. The timelines say the Instrument of Accession was signed on 26 Oct 1947; the Kashmir section says Hari Singh acceded on 27 Oct. Another passage reconciles them: signed 26 Oct, accepted by the Governor-General the next day.",
  "simla": "Your notes date this two ways: “Jul–Aug 1972” in the timelines and “signed 2 Jul 1972” in the main text.",
  "cg-mnc": "Your notes give two different figures for MNC-L's 1960 result: 23% of the vote (Lecture 10) and 36 of 137 Chamber seats (Lecture 9). They don't say how the two relate.",
  "cg-conakat": "Your notes give two founding dates for CONAKAT: Nov 1958 and Oct 1958 (in the ethnic-tensions section).",
  "cg-katanga-strangers": "Your notes give two founding dates for CONAKAT: Oct 1958 here and Nov 1958 in the actor profile.",
  "lumumba": "Your notes date Lumumba's dismissal 5 Sep 1960 in most places but 5 Oct 1960 in Lecture 9.",
  "cg-kasavubu": "Your notes date Lumumba's dismissal 5 Sep 1960 in most places but 5 Oct 1960 in Lecture 9.",
  "cg-mobutu": "Your notes date Mobutu's second coup 24 Nov 1965 in most places but 25 Nov 1965 in one account.",
  "cg-dragon-rouge": "Your notes date Mobutu's second coup 24 Nov 1965 in most places but 25 Nov 1965 in this account.",
  "cg-us-johnson": "Your notes date Mobutu's second coup 24 Nov 1965 in most places but 25 Nov 1965 here.",
  "cg-1965-elections": "Your notes date Mobutu's second coup 24 Nov 1965 here but 25 Nov 1965 in another account.",
  "srebrenica": "Your notes give the Srebrenica death toll three ways: “about 8,000”, “nearly 8,000” and “upwards of 7,000”.",
  "bs-tl-1995": "Your notes give the Srebrenica death toll three ways: “about 8,000”, “nearly 8,000” and “upwards of 7,000”.",
  "bs-vrs": "Your notes give the Srebrenica death toll three ways: “about 8,000”, “nearly 8,000” and “upwards of 7,000”.",
  "bs-us-phase3": "Your notes give the Srebrenica death toll three ways: “about 8,000”, “nearly 8,000” and “upwards of 7,000”.",
  "ec-cl-growth": "Your notes disagree on the growth ranking. The cluster section puts Malaysia ahead of Thailand, but the GDP table gives Thailand 6.8% and Malaysia 6.7% (1961–2001), and the Thailand section calls it “second only to Singapore”.",
  "ec-th-overview": "Your notes disagree here. The Thailand section and GDP table put Thailand second (6.8% vs Malaysia 6.7%), but the cluster section ranks Malaysia ahead of Thailand."
};
for (const c of CASES) if (W[c.id]) c.warn = W[c.id];
})();
