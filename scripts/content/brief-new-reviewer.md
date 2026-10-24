# Brief: reviewing the moves of a named line (reviewer)

Another agent has written new entries for Uberschach's opening book: the
moves from a group of positions, each with a rating and a strategy note,
and historical backgrounds for some of the positions they reach. You did
not write them. Check every rating, note and background, and correct what
has a problem. English only; another agent writes the German after you.

Your prompt names the batch file, the writer's file and your output file.
The tools are run from the repository root, as
`node scripts/content/<tool>.mjs`.

**Approving is the expected outcome for a note.** A note with no problem
from the list below is approved exactly as written. A note you would have
phrased differently is not a problem. Change it only for a listed problem,
with the smallest change that fixes it, and name the problem in the
findings; the validator refuses a change without a finding. Backgrounds
are different: every fact in them is checked against its page, and a fact
the page does not state goes.

## Read first

1. `scripts/content/standard.md`: what a note says and avoids.
2. The batch file: per position its `line`, the `path` the reader has
   already been shown, the sibling moves already in the book (`existing`,
   with ratings), and per move what it `reaches`.
3. The writer's file: per move `rating`, `en`, `basis`; per described
   position `background` and `sources`.

## Check

1. **Backgrounds, claim by claim.** Open every page in `sources`. Split
   the background into its facts (a name, a date, a player, a game, a
   book, an attribution such as "named after" or "introduced by", a
   superlative such as "the most popular"). For each: supported by the
   page, contradicted (correct it to what the page says), or not on the
   page (drop it). A fact the page states about another line (the parent
   variation, a different move order) is not on the page for this
   position, and neither is a detail the page does not give (a decade, a
   nationality, "much older"). What remains is the background; if nothing
   remains, it is `null` with no sources. Also drop what repeats the
   `path`. For every fact you keep, put in `checks` the sentence of the
   page that states it, copied word for word from the article text (the
   validator fetches the page and looks for it; wiki markup such as
   `[[...]]` and `''` need not be copied).
2. **Ratings.** Check each against the sources (the Wikibooks move table
   and symbols, Wikipedia's wording: open the pages in `basis`) and
   against its siblings: the main line is 5, a move the sources prefer is
   not rated below one they rate lower, a named gambit or trap is rated as
   what it is, and a move that falls into a trap is a 1. Change a rating
   only for a reason you can name from a source or the board.
3. **The standard**: a note on a move worth learning assesses its
   strategic approach (what it answers, what it commits to, what it means
   for the game) rather than only describing it; no note tours the moves
   that follow, in notation or as a list of openings; a concrete reply is
   named only where it is the reason a move is weak, or what the move
   prepares or prevents.
4. **The rating comes through**: a note on a move rated 1 or 2 reads as
   giving something away and says what; one rated 4 or 5 reads as worth
   learning. If you changed the rating, the note follows it.
5. **True on the board**: check every concrete claim with the board tool:

   ```sh
   node scripts/content/board.mjs show "<line>"
   node scripts/content/board.mjs square "<line>" e5
   node scripts/content/board.mjs piece "<line>" f1
   ```

6. **Supported by its basis**: the characterisation (the kind of game, the
   plans, the trade-off) is what the page says; soften or drop what it
   does not support.
7. **No history in a note, no repetition**: names, dates and games belong
   in backgrounds.
8. **Form**: plain words, British spelling, about 20 to 55 words.

Fetch raw wikitext with curl as the writer did
(`https://en.wikipedia.org/w/index.php?title=<Title>&action=raw`,
`https://en.wikibooks.org/w/index.php?title=Chess_Opening_Theory/1._e4/1...c5&action=raw`);
at most 30 fetches, every one listed in `fetched`. Every source of every
background must be among them.

## Output

```json
{
  "id": "<the batch id>",
  "moves": [
    { "from": "1.e4 c5 2.Nf3 d6", "san": "d4", "rating": 5, "en": "The note.", "changed": false, "findings": [] }
  ],
  "positions": [
    {
      "line": "1.e4 c5 2.Nf3 d6 3.Bb5+",
      "background": "Checked text, or null.",
      "sources": ["https://en.wikipedia.org/wiki/Sicilian_Defence"],
      "checks": [{ "fact": "One fact of the background", "source": "https://en.wikipedia.org/wiki/Sicilian_Defence", "quote": "The sentence of the page that states it." }],
      "changed": false,
      "findings": []
    }
  ],
  "fetched": ["every URL you fetched"]
}
```

`changed` says whether your text or rating differs from the writer's;
`findings` names each correction in one line, its kind first (background,
rating, standard, board, basis, history, form).

Then run `node scripts/content/validate-batch.mjs review <your output file>`
and fix every ERROR; run it until it prints OK.

Reply with one line only: the validator's last line, and how many notes,
ratings and backgrounds you changed.
