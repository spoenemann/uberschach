# Brief: reviewing the ratings decided against the engine's bounds (reviewer)

Uberschach's opening book has been compared with an engine's opening
database, the Chinese Chess Cloud Database ("CDB"), and its ratings are now
held to bounds from the engine's delta to the position's best move (the
table below). Another agent has decided a batch of positions where a rating
broke its bound or the main answer was in doubt: it revised ratings and
notes, added the main answer where the book lacked it, and kept some
ratings against the engine with a reason. You did not write any of it.
Check every revision, every added move and every kept rating, and correct
what has a problem. English only; another agent writes the German after
you.

The reader is a club player learning openings. The errors that hurt them:
a move that loses material under "Best" or "Good"; a sound move called a
"Mistake"; a position whose real main answer is missing; a note that argues
a rating the move does not deserve.

Your prompt names the batch file, the writer's file and your output file.
The tools are run from the repository root, as
`node scripts/content/<tool>.mjs`.

**Approving is the expected outcome.** A decision with no problem from the
list below is approved exactly as written, note included. A note you would
have phrased differently is not a problem. Change something only for a
listed problem, with the smallest change that fixes it, and name the
problem in the findings; the validator refuses a change without a finding.

## The bounds

The delta is the engine's score of the best move minus the move's, in
centipawns, for the side that plays it.

| Rating | Bound |
|---|---|
| 5 Best | at most 25 behind the best move |
| 4 Good | at most 60 behind |
| 3 Playable | at most 100 behind |
| 2 Inaccuracy | at least 20 behind |
| 1 Mistake | at least 100 behind |

Within the bounds the engine has no say: it does not know what is worth
learning, which the sources and the judgement of a club player's needs
decide. Outside them a rating stands only with a reason: the engine's
`depth` for the move is shallow (under about 18) and the sources support
the rating; or the move is a sacrifice, gambit or necessary defence whose
compensation the sources describe and the engine's own line shows. "The
named line plays it", "the sources do not mention the engine's move" and
"the old note says so" are not reasons.

## Read first

1. `scripts/content/standard.md`: what a note says and avoids.
2. The batch file: per position `line`, `ply`, `toMove`, `fen`, the `path`
   the reader has been shown, `wikibooks` and `sources`, `existing` (the
   book's moves with `rating`, note `en`, the engine's `score`, `delta`,
   `rank`, `depth`, and the `bound` the rating breaks), `legal`,
   `transposes`, `unfollowed` (at ply 3: moves that may not be rated 4 or
   5), `engine` (every move the engine knows, with the book's rating of
   it), `issues` (what the engine questions, in words) and `beyond`.
3. The writer's file: `moves` (added: `rating`, `en`, `basis`),
   `revisions` (existing moves with a new `rating`, a new note in `en` or
   `null` for the old one, and the `reason`) and `kept` (ratings kept
   outside their bound, with the `reason`); a move or revision outside its
   bound carries its reason in `engine`.

## Check

1. **Each decision is right.** For every revision, added move and kept
   rating, judge the rating yourself from three sides: the sources (open
   the position's `wikibooks` page and the pages in `basis` and `reason`;
   Wikipedia's wording and Wikibooks's move tables and symbols are the
   ground), the board (play the engine's main line after the move with
   the board tool; see what the move loses or wins), and the engine's
   view in the batch. A rating within its bound that the sources
   contradict is a finding; so is a rating the writer put at the edge of
   its bound when the sources and the board say the move is simply bad.
   Rate the moves as the sources do, within the bounds.
2. **Kept ratings.** A kept rating needs a reason of the kind the bounds
   section allows, true in the batch's data: a claimed shallow depth is
   the `depth` the batch shows; claimed compensation is visible in the
   engine's line and described by a source. A reason that does not hold
   is a finding: revise the rating within its bound (and the note with
   it) and list the kept move no longer; the validator checks that every
   move the writer kept is kept by you or revised.
3. **The main answer.** The move rated 5 is the move the sources treat as
   the principal reply here, and it is within 25 of the engine's best. If
   the writer rated another move 5, or the main answer is missing,
   correct it: add the move that is (an added move of your own, with
   `changed: true`), rate the others as the sources do, and list a
   writer's added move that is not worth knowing under `dropped`. That a
   named line plays a move, or that the book follows it, is no ground for
   its rating.
4. **Siblings.** All the position's ratings, the untouched ones included,
   read coherently after the changes: a move the sources prefer is not
   rated below one they rate lower; two moves are not both "the main
   line"; a lower rating does not score 30 or more better than a higher
   one without a reason. An existing rating the writer left alone that
   now contradicts a sibling is yours to revise, with a finding.
5. **The rating comes through**: a note on a move rated 1 or 2 reads as
   giving something away and says what, with the refutation named where
   that is the point; one rated 3 reads as sound but second-rate; one
   rated 4 or 5 reads as worth learning and assesses the approach rather
   than describing the move. A revision that keeps the old note
   (`en: null`) under a new rating: read the old note in `existing`; if
   it argues the old rating, write the note.
6. **True on the board**: check every concrete claim with the board tool:

   ```sh
   node scripts/content/board.mjs show "<line>"
   node scripts/content/board.mjs square "<line>" e5
   node scripts/content/board.mjs piece "<line>" f1
   node scripts/content/board.mjs engine "<line>"       # the engine's scores and main line from here
   ```

   Play a tactic out by adding its moves to the line. Run the tool for
   every written or rewritten note that makes a concrete claim (a square
   attacked or guarded, a piece that hangs, a pin, a check, a reply that
   wins something): a claim checked by reasoning alone is not checked, and
   in earlier rounds most corrections were of such claims.
7. **The standard**: no note tours the moves that follow, in notation or
   as a list of openings; a concrete reply is named only where it is the
   reason a move is weak, or what the move prepares or prevents; no
   history in a note; plain words, British spelling, about 20 to 55 words.
8. **Supported by its basis**: the characterisation (the kind of game, the
   plans, the trade-off) is what the page says; soften or drop what it
   does not support.
9. **Nothing beyond the task**: at a position with `unfollowed`, no move
   in it is rated 4 or 5; no move was removed; a change the issues do not
   call for and sibling coherence does not need is reverted, with a
   finding.

Fetch raw wikitext with curl as the writer did
(`https://en.wikipedia.org/w/index.php?title=<Title>&action=raw`, the
position's `wikibooks` URL); other public sources as the writer's brief
allows them. At most 30 page fetches and 30 engine calls, every URL listed
in `fetched`.

## Output

```json
{
  "id": "<the batch id>",
  "moves": [
    { "from": "...", "san": "Nh6", "rating": 5, "en": "The note.", "changed": false, "findings": [] }
  ],
  "revisions": [
    { "from": "...", "san": "Qg5", "rating": 3, "en": null, "changed": false, "findings": [] }
  ],
  "kept": [
    { "from": "...", "san": "h4", "reason": "The writer's reason, or yours." }
  ],
  "dropped": [
    { "from": "...", "san": "...", "finding": "main answer: not the sources' reply; replaced with ..." }
  ],
  "fetched": ["every URL you fetched"]
}
```

`moves`, `revisions` and `kept` are the final ones: the writer's,
corrected, and any you add. `changed` says whether yours differs from the
writer's (true for one you add); `findings` names each correction in one
line, its kind first (decision, kept, main answer, siblings, rating comes
through, board, standard, basis, beyond the task). A move or revision
whose rating is outside its bound carries its reason in `engine`. A
writer's move or revision you remove goes under `dropped`; a writer's
kept rating you revise instead goes under `revisions` with `changed: true`.

Then run `node scripts/content/validate-batch.mjs review <your output file>`
and fix every ERROR; run it until it prints OK.

Reply with one line only: the validator's last line, how many ratings,
notes and kept reasons you changed or dropped, and how many board and
engine commands you ran.
