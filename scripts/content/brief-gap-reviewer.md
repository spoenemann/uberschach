# Brief: reviewing the filled gaps (reviewer)

Uberschach's opening book had positions with only one or two moves, or none
rated 5 (Best). Another agent has filled a batch of them: it added moves,
each with a rating and a strategy note, so that every position has at least
three moves and one rated 5, and it revised some of the ratings and notes
the positions had. You did not write any of it. Check every added move and
every revision, and correct what has a problem. English only; another
agent writes the German after you.

Your prompt names the batch file, the writer's file and your output file.
The tools are run from the repository root, as
`node scripts/content/<tool>.mjs`.

**Approving is the expected outcome for a note.** A note with no problem
from the list below is approved exactly as written. A note you would have
phrased differently is not a problem. Change it only for a listed problem,
with the smallest change that fixes it, and name the problem in the
findings; the validator refuses a change without a finding.

## Read first

1. `scripts/content/standard.md`: what a note says and avoids.
2. The batch file: per position its `line` and `toMove`, the `path` the
   reader has been shown, its `wikibooks` page, the moves the book has
   (`existing`, with ratings and notes), the `legal` moves and `need`.
3. The writer's file: `moves` (added: `rating`, `en`, `basis`) and
   `revisions` (existing moves with a new `rating`, a new note in `en` or
   `null` for the old one, and the `reason`).

## Check

1. **The main answer.** Per position, the move rated 5 is the move the
   sources treat as the main line or principal reply here. If the writer
   rated another move 5, or the main answer is missing, correct it: rate
   the moves as the sources do, and replace an added move that is not
   worth knowing with the one that is (list the replaced move under
   `dropped`). That a named line plays a move, or that the book follows
   it, is no ground for its rating: the dataset names lines for their
   names, gambits and traps, not for their merit. A rating argued only
   from the named line is a finding.
2. **Ratings.** Check each added and revised rating against the sources
   (the Wikibooks page and move table, Wikipedia's wording: open the pages
   in `basis` and the position's `wikibooks`) and against all its
   siblings, existing ones included: a move the sources prefer is not
   rated below one they rate lower; a move that hangs material on the
   board is not rated 3 or better. Change a rating only for a reason you
   can name from a source or the board. An existing rating the writer
   left alone is not yours to change unless it now contradicts a sibling;
   then add a revision.
3. **The alternatives.** Each added move is one a reader would meet or
   consider here, not a legal oddity; a move rated below 3 is added only
   where the position has no third sound move.
4. **The standard**: a note on a move worth learning assesses its
   strategic approach (what it answers, what it commits to, what it means
   for the game) rather than only describing it; no note tours the moves
   that follow, in notation or as a list of openings; a concrete reply is
   named only where it is the reason a move is weak, or what the move
   prepares or prevents.
5. **The rating comes through**: a note on a move rated 1 or 2 reads as
   giving something away and says what; one rated 4 or 5 reads as worth
   learning. A revision that keeps the old note (`en: null`) under a new
   rating: read the old note in `existing`; if it no longer fits, write
   the note.
6. **True on the board**: check every concrete claim with the board tool:

   ```sh
   node scripts/content/board.mjs show "<line>"
   node scripts/content/board.mjs square "<line>" e5
   node scripts/content/board.mjs piece "<line>" f1
   ```

   Play a tactic out by adding its moves to the line. Run the tool for
   every added note and every rewritten one that makes a concrete claim (a
   square attacked or guarded, a piece that hangs, a pin, a check, a
   reply that wins something): a claim checked by reasoning alone is not
   checked, and in earlier rounds most corrections were of such claims.
7. **Supported by its basis**: the characterisation (the kind of game, the
   plans, the trade-off) is what the page says; soften or drop what it
   does not support.
8. **No history in a note**: names, dates and games belong in backgrounds.
9. **Form**: plain words, British spelling, about 20 to 55 words.

Fetch raw wikitext with curl as the writer did
(`https://en.wikipedia.org/w/index.php?title=<Title>&action=raw`, the
position's `wikibooks` URL); at most 30 fetches, every one listed in
`fetched`.

## Output

```json
{
  "id": "<the batch id>",
  "moves": [
    { "from": "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6", "san": "Be3", "rating": 5, "en": "The note.", "changed": false, "findings": [] }
  ],
  "revisions": [
    { "from": "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6", "san": "Bg5", "rating": 4, "en": null, "changed": false, "findings": [] }
  ],
  "dropped": [
    { "from": "...", "san": "...", "finding": "alternatives: a legal oddity no source names; replaced with ..." }
  ],
  "fetched": ["every URL you fetched"]
}
```

`moves` and `revisions` are the final ones: the writer's, corrected, and
any you add. `changed` says whether yours differs from the writer's (true
for one you add); `findings` names each correction in one line, its kind
first (main answer, rating, alternatives, standard, board, basis, history,
form). A writer's move or revision you remove goes under `dropped`.

Then run `node scripts/content/validate-batch.mjs review <your output file>`
and fix every ERROR; run it until it prints OK.

Reply with one line only: the validator's last line, how many moves,
ratings and notes you changed or dropped, and how many board commands you
ran.
