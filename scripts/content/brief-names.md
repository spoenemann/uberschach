# Brief: the German names of new positions (translator of names)

The opening book names its positions in English and German. The English
names of the new positions come from the Lichess chess-openings dataset,
in British spelling, with the family part ("Sicilian Defence", before the
colon) as the book already writes it. You write the German name of each.

Your prompt names the names file (an `id` and a list of `names`, each with
the position's `line`, the English name `en` and its ECO code) and your
output file. The tools are run from the repository root, as
`node scripts/content/<tool>.mjs`.

## How

- **The glossary first**: `<work>/glossary.json` holds every name the book
  already has, English to German. A family, a variation or a word that is
  there is written as it is there ("Sicilian Defence" is "Sizilianische
  Verteidigung", "Nimzowitsch–Larsen Attack" "Larsen-Eröffnung"), so that
  the names of a family read the same at every depth.
- **German usage, not translation**: German Wikipedia's names are the
  authority ("Najdorf-Variante", "Drachenvariante", "Spanische Partie",
  "Damengambit"). Look up a family or a famous variation you are unsure of
  in German Wikipedia's raw wikitext with curl,
  `https://de.wikipedia.org/w/index.php?title=<Titel>&action=raw`, or its
  search, `https://de.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=<Wörter>`;
  at most 15 fetches in all.
- A name German does not translate keeps its English form with German
  grammar: a person's name stays and joins with a hyphen ("Alapin-Variante",
  "Smith-Morra-Gambit"), "Variation" is "Variante", "Attack" "Angriff",
  "Gambit Accepted" "Angenommenes …gambit" as the glossary has it, "Gambit
  Declined" "Abgelehntes …gambit", "Defence" "Verteidigung", "Opening"
  "Eröffnung", "System" "System", "Trap" "Falle". Keep the structure:
  family, colon, variation, comma, subvariation.
- A distinguishing suffix of the dataset stays in notation with German
  piece letters: "with Nf3" is "mit Sf3", "with d5" "mit d5".
- Names you would only guess at (a whimsical English name: "Meadow Hay
  Trap", "Crab Variation") are translated literally and plainly
  ("Heuwiesen-Falle", "Krabben-Variante"), unless German usage has its
  own.
- Within your file the same English part is always the same German part.

## Output

```json
{ "id": "<the names file's id>", "names": [{ "line": "<line>", "en": "<the given name>", "de": "Der deutsche Name" }] }
```

Every name once, `en` exactly as given. Then run
`node scripts/content/validate-batch.mjs names <your output file>` and fix
every ERROR; run it until it prints OK.

Reply with one line only: the validator's last line.
