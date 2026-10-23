# Brief: reviewing the strategy notes of one position (reviewer)

Another agent has rewritten the English strategy notes of every move from
one position of Uberschach's opening book. You did not write them: check
each one, correct the English only where it has a problem, and then write
the German.

Your prompt names the node file, the writer's file and your output file.
The tools are run from the repository root, as
`node scripts/content/<tool>.mjs`.

**Approving is the expected outcome.** Most notes need no change: a note
with no problem from the list below is approved exactly as the writer
wrote it, and you only translate it. A note you would have phrased
differently is not a problem. Change the English only for a problem from
the list, with the smallest change that fixes it, and name the problem in
the findings; the validator refuses a change without a finding.

## Read first

1. `scripts/content/standard.md`: what a note says, what it avoids, its
   form, examples.
2. The node file: the position (`line`), the names and backgrounds on the
   way (`path`), and for every move its `rating`, its `treatment`, the name
   and background of the position it `reaches`, the current notes `en` and
   `de`.
3. The writer's file: the new English notes, and for lifted ones the
   `basis`, the page and section their outlook rests on.

## Check every note

1. **The standard**: it says what the move wants, what it gives up, what
   kind of game it leads to; it does not tour the follow-up moves or list
   the openings that can follow; a concrete reply is named only where it
   is the reason the move is weak, or what the move prepares or prevents.
   This includes the notes on weak moves and the notes the writer kept:
   "White continues with Nc3 and d4 at leisure" lists follow-up moves and
   becomes "White takes the centre at leisure" (the standard, The same on
   weak moves). It is the one change the brief expects often; the reply
   that refutes a weak move stays.
2. **The rating comes through**: a note on a move rated 1 or 2 reads as
   giving something away and says what; a note on a move rated 4 or 5
   reads as worth learning.
3. **True on the board**: check every concrete claim (attacks, defends,
   blocks, hangs, opens) with the board tool:

   ```sh
   node scripts/content/board.mjs show "<line>"            # board, side to move, legal moves
   node scripts/content/board.mjs square "<line>" e5       # what stands there, who attacks it
   node scripts/content/board.mjs piece "<line>" f1        # what the piece on f1 attacks
   ```

   A piece that is attacked, undefended and can be taken by the side to
   move is lost: saying so is not an overstatement.
4. **Supported by its basis**: for each lifted note, open the page in its
   `basis` and check that the page supports the characterisation (the
   kind of game, the plans, the trade-off). Soften or drop what it does
   not support. This check is required: every page you open goes in
   `fetched`, and the validator refuses a review of lifted notes that
   opened none. Fetch raw wikitext with curl, as
   `https://en.wikipedia.org/w/index.php?title=<Title>&action=raw` or
   `https://en.wikibooks.org/w/index.php?title=Chess_Opening_Theory/1._e4&action=raw`;
   at most twelve fetches in all, no web search.
5. **Nothing right was lost**: compare with the current note `en`. If it
   made a correct and important point about this move (a weakness, the
   only cost, what the move rules out) that the new note dropped without
   reason, bring it back, in the new style. A dropped list of follow-up
   moves is not a loss.
6. **No history, no repetition**: no names, dates or games; nothing that
   repeats the name or background of the position it reaches or of the
   path.
7. **Siblings**: read the notes side by side. Act only when two notes are
   interchangeable or a phrase repeats nearly word for word; then change
   the weaker note, and only that phrase. Do not reword a clear sentence
   to make it read differently, and do not vary how notes begin.
8. **Form**: plain words, British spelling, about 20 to 55 words.

Do not change ratings; if one looks wrong, say so in that move's findings.

## Then the German

Write the German note from the English as approved or corrected:

- the same statements, in natural German, not word for word;
- German piece letters in notation: K, D, T, L, S, pawns without a letter
  (Sf3, Lb5, ...Sf6);
- the German chess words (Zentrum, Entwicklung, Rochade, Fianchetto,
  Tempo, Initiative, Bauernstruktur, lange Diagonale); opening names as
  German usage has them, as the node file's `nameDe` and the current
  German notes show;
- the current German note `de` shows the established wording; reuse it
  where the statement is the same.

## Output

Write your output file:

```json
{
  "id": "<id>",
  "moves": [
    {
      "san": "e4",
      "en": "The English note, as approved or corrected.",
      "de": "Die deutsche Fassung.",
      "changed": false,
      "findings": []
    }
  ],
  "fetched": ["every URL you fetched"]
}
```

`changed` says whether your English differs from the writer's; for an
approved note it is `false`, `en` is the writer's text exactly, and
`findings` is empty. Otherwise `findings` lists each correction in one
line, what was wrong and what you did, with its kind first (standard,
rating, board, basis, lost, history, siblings, form).

Then run `node scripts/content/validate.mjs review <your output file>` and
fix every ERROR; a warning is a prompt to look again, not an error. Run it
until it prints OK.

Reply with one line only: the validator's last line, and how many notes
you changed.
