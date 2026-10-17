# H2 History Case Drill

An installable study app for H2 History (9174) case studies, built from the
study notes in the "History" Google Drive folder (Paper 1 and Paper 2).

- **Learn**: work through each topic in the order of the notes, one section at a time, reading every card's
  points and explanation, then do a quick check on that section. Only learned cards come up in review rounds.
- **Recall**: see a case study, write what you remember, mark it against the key points.
- **Name it**: read a description and name the case.
- **Apply**: plan an essay/SBCS answer and check which cases the notes would use.

Cards move through five review boxes (spaced repetition). Progress is stored on
the device and can be moved between devices with a backup code.

The app lives in `docs/`. The card bank is one file per topic in `docs/data/` (1,290 cards),
built line by line from every study-notes file in the Drive folder. Each card records its
source file, the section of the notes it comes from, and whether the question wording is
taken from the notes or was written for the drill. Topics are listed in `docs/cases.js`;
essay prompts are in `docs/essays.js`.

## Hosting

GitHub Pages → Source: "Deploy from a branch" → branch `ccr-2c2c9165-5024uh`,
folder `/docs`. The app is then at https://brin250.github.io/History/
