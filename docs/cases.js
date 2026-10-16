// Topic list for the H2 History recall drill.
// The cards themselves live in data/<topic>.js, one file per topic, each built line by line
// from the study notes in the "History" Drive folder. Nothing has been added from outside those notes.
// Card schema: id, t (topic key), sec (section of the notes), src (source file), qs ("notes" if the
//   question wording comes from the notes, "me" if written for the drill), title, when, q, pts,
//   exp (explanation shown after answering, from the notes), clue?

window.TOPICS = [
  { key: "cw1", paper: "P1", theme: "Theme I", name: "Origins of the Cold War", src: "Cold_War_Study_Notes_Theme1" },
  { key: "cw2", paper: "P1", theme: "Theme I", name: "Korea, Cuba, Vietnam", src: "Cold_War_Study_Notes_Theme1" },
  { key: "cw3", paper: "P1", theme: "Theme I", name: "End of the Cold War", src: "Cold_War_Study_Notes_Theme1" },
  { key: "ge",  paper: "P1", theme: "Theme II", name: "Global economy", src: "Growth_and_Challenges_Global_Economy_Notes" },
  { key: "ea",  paper: "P1", theme: "Theme II", name: "Japan & China", src: "Japan / China Economic Transformation notes" },
  { key: "ai",  paper: "P1", theme: "Theme III", name: "Arab–Israeli conflict", src: "Arab-Israeli_Conflict_Study_Guide" },
  { key: "ip",  paper: "P1", theme: "Theme III", name: "Indo–Pakistani conflict", src: "Indo-Pakistani_Conflict_Study_Notes" },
  { key: "cg",  paper: "P1", theme: "Theme III", name: "Congo Crisis", src: "Congo_Crisis_1960-1965_Study_Guide" },
  { key: "bs",  paper: "P1", theme: "Theme III", name: "Bosnian War", src: "Bosnian_War_Study_Notes" },
  { key: "ns",  paper: "P2", theme: "Theme I", name: "Forming nation-states", src: "Theme_I_Forming_Nation_States_Study_Notes + compilation" },
  { key: "nu",  paper: "P2", theme: "Theme I", name: "National unity", src: "Pursuit_of_National_Unity_Study_Notes + compendium" },
  { key: "ec",  paper: "P2", theme: "Theme II", name: "SEA economic change", src: "SEA_Economic_Change_Study_Notes + compendium & compilation" },
  { key: "as",  paper: "P2", theme: "Theme III", name: "ASEAN", src: "ASEAN_Study_Notes" },
  { key: "it",  paper: "P2", theme: "Theme III", name: "Inter-state tensions", src: "Inter-State Tensions in SEA notes" },
  { key: "wd",  paper: "P2", theme: "Theme III", name: "Singapore–Malaysia water", src: "Water_Dispute_Study_Guide" }
];

window.CASES = [];
