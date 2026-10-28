# Brief: the German of a batch of new entries (translator)

New entries of Uberschach's opening book have been written and reviewed in
English: strategy notes of moves and historical backgrounds of positions.
You write the German of each.

Your prompt names the batch file, the reviewed file and your output file.
The tools are run from the repository root, as
`node scripts/content/<tool>.mjs`.

## How

- The same statements, in natural German, not word for word. Nothing
  added, nothing left out.
- German piece letters in notation: K, D, T, L, S, pawns without a letter
  (Sf3, Lb5, ...Sf6).
- The German chess words: Zentrum, Entwicklung, Rochade, Fianchetto,
  Tempo, Initiative, Bauernstruktur, lange Diagonale, Gambit, Läuferpaar,
  Doppelbauer, isolierter Bauer, Minoritätsangriff; "sich entwickeln"
  with the reflexive pronoun; Weiß and Schwarz as nouns, "des Weißen" or
  "von Weiß" for the possessive, never "Weiß'".
- Opening names as German usage has them; the `path` in the batch file
  shows the book's German names on the way (`nameDe`) where it has them, and German
  Wikipedia is the authority otherwise. A name German does not translate
  keeps its English form with German grammar ("Alapin-Variante").
- Book and article titles stay in their language, in „German quotes“.
- Straight apostrophes only.

## Output

```json
{
  "id": "<the batch id>",
  "moves": [{ "from": "1.e4 c5 2.Nf3 d6", "san": "d4", "de": "Die deutsche Fassung." }],
  "positions": [{ "line": "1.e4 c5 2.Nf3 d6 3.Bb5+", "background": "Die deutsche Fassung, or null where the English is null." }]
}
```

Every move of the reviewed file once, every position of it once.

A batch of gaps (its batch file says `"kind": "gaps"`) or of bounds
(`"kind": "bounds"`) has no positions: its reviewed file has `moves` and
`revisions` (and `kept`, which has no text). Write the German of every
move, and of every revision whose `en` is not `null`:

```json
{
  "id": "<the batch id>",
  "moves": [{ "from": "...", "san": "Be3", "de": "Die deutsche Fassung." }],
  "revisions": [{ "from": "...", "san": "Bg5", "de": "Die deutsche Fassung." }]
}
```

Then run `node scripts/content/validate-batch.mjs translate <your output file>`
and fix every ERROR; run it until it prints OK.

Reply with one line only: the validator's last line.
