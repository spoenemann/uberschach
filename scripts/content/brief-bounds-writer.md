# Brief: ratings against the engine's bounds (writer)

Uberschach's opening explorer teaches openings to club players: after each
move the panel shows the move's rating (5 Best, 4 Good, 3 Playable, 2
Inaccuracy, 1 Mistake) and its strategy note, and the moves rated 4 and 5
are drawn as arrows, the ones to learn. The book's ratings were written
from Wikibooks and Wikipedia and reviewed, without an engine. The whole
book has now been compared with an engine's opening database, the Chinese
Chess Cloud Database ("CDB"), which scores every move of a position in
centipawns for the side to move, and the ratings are now held to bounds
from the engine's delta to the best move. You decide a batch of positions
where a rating breaks its bound or the main answer is in doubt: revise the
rating and its note, add the main answer where the book lacks it, or keep a
rating against the engine with a reason. A separate agent reviews your
work, another writes the German, so write English only.

What the reader must not meet: a move that loses material under "Best" or
"Good", so that they play it and are punished; a sound move called a
"Mistake", so that they avoid it and distrust the app; a position whose
real main answer is not on the board. A note that argues a rating the move
does not deserve is the same error in words.

Your prompt names the batch file and your output file. The tools are run
from the repository root, as `node scripts/content/<tool>.mjs`.

## The bounds

The delta is the engine's score of the position's best move minus the
move's, in centipawns, both for the side that plays the move. From ply 3 on
(the batch has no earlier positions):

| Rating | Bound |
|---|---|
| 5 Best | at most 25 behind the best move |
| 4 Good | at most 60 behind |
| 3 Playable | at most 100 behind |
| 2 Inaccuracy | at least 20 behind |
| 1 Mistake | at least 100 behind |

The bounds say what the ratings' words already say: a 1 or 2 gives
something away, which the engine can measure; a 3, 4 or 5 is sound. They
do not say what is worth learning. Among sound moves the engine finds many
equal, and it does not know which of them a club player should learn, which
the sources treat as the main line, which is a respected alternative and
which merely harmless: between 3 and 5, and between 1 and 2, the sources and
your judgement decide, as before. A rating within its bound is not
questioned by the engine, whatever the delta.

A rating outside its bound stands only with a reason, which the validator
demands and the reviewer tests. The reasons that hold: the engine's depth
for that move is shallow (`depth` under about 18) and the sources support
the rating; the move is a sacrifice or gambit whose compensation the
sources describe and the engine's line shows to be real, or a defence the
sources call necessary. "The named line plays it", "the sources do not
mention the engine's move" and "the old note says so" are not reasons.

## Read first

1. `scripts/content/standard.md`: what a strategy note says and avoids,
   with examples. Every note you write or rewrite follows it.
2. The batch file. Its `positions` are a family's positions, each with:
   - `line`, `ply`, `toMove` (the side whose moves you judge), `fen`;
   - `path`: the names and backgrounds the reader has been shown on the
     way here;
   - `wikibooks`: the raw Wikibooks page of the position, which may not
     exist; `sources`: the pages the position's background rests on;
   - `existing`: the moves the book has from here, each with its `rating`,
     its note `en`, the engine's view (`engine`: `score`, `delta`, `rank`,
     `depth`; null where the engine does not know the move) and `bound`,
     the bound the rating breaks, or null;
   - `legal`: every legal move, written as you must write it;
     `transposes`: legal moves that reach a named position of the book;
   - `unfollowed`, only at ply 3: moves whose position the book does not
     have. The book follows every move rated 4 or 5 at that depth, so a
     move listed here is rated 3 at most;
   - `engine`: the engine's whole view of the position: `best`, the best
     move's score, and `moves`, every move it knows with `score`, `delta`,
     `rank` (2 within a few centipawns of the best, 1 within about ten, 0
     beyond; 0 throughout a position analysed shallowly), `depth`, and the
     book's `rating` of it, null where the book lacks it;
   - `issues`: what the engine questions, in words: each broken bound,
     whether the main answer is in doubt (the book's best-scoring move is
     50 or more behind the engine's best), siblings whose ratings and
     scores point opposite ways;
   - `beyond`: the engine's lines from moves the book lacks here, where
     they were followed; `need`, as the validator reads it.

Read the whole batch before writing: the family's pages are read once for
all of its positions.

## Per position

1. **Understand the engine's verdict before you judge it.** For a move far
   behind the best, see why: the engine tool shows the position after the
   move from the opponent's side, with the replies scored and the main
   line, which is usually the refutation:

   ```sh
   node scripts/content/board.mjs engine "<line> <move>"
   ```

   Play the main line's first moves with the board tool and look at what
   stands where. For a move rated 1 or 2 that the engine finds close to
   the best, look at the main line after it as well: what the book says it
   gives away may not be there. A delta measured at depth 10 is weaker
   evidence than one at depth 30; the depths are in the batch.
2. **Decide each move the issues name**, one of:
   - *revise* the rating within its bound, and the note with it (below).
     A 4 or 5 that is 60 to 100 behind is usually a 3; one 100 or more
     behind a 2, or a 1 when it is refuted outright or loses material for
     nothing. A 2 that is within 20 of the best is usually a 3, or a 4
     where the sources treat it as a respected alternative; a 1 within 100
     is a 2 when it still gives something away, else a 3;
   - *keep* the rating, under `kept`, with a reason of the kind the bounds
     section allows. This is the exception, and the reviewer will test it.
3. **The main answer.** Where the issues say it is in doubt, or where your
   revisions leave the position without a move rated 5 within 25 of the
   best, find the real main answer: the sources' principal reply, which
   here is usually among the engine's best moves (`engine.moves` with
   `delta` 0, `rating` null where the book lacks it). Add it rated 5 with
   a note and its `basis`; a position always has a best move, and after
   a dubious move of the opponent's it is often the one that punishes it.
   Where the sources are silent, the board and the engine's line decide,
   and the note says what the move does. Rate the former best move what
   it deserves. Every position ends with a move rated 5.
4. **Siblings.** After your changes the ratings read coherently: a move
   the sources prefer is not rated below one they rate lower; two moves
   are not both "the main line"; a lower rating does not score 30 or more
   better than a higher one without a reason you can name. An existing
   rating within its bound that now contradicts a sibling you changed is
   revised too.
5. **Notes.** A rating is an argument, and its note makes it: a note on a
   move rated 1 or 2 says what the move gives away and why, with the
   refutation named where that is its point; one rated 3 says what is
   sound about it and why it is second-rate; one rated 4 or 5 assesses
   the approach the move takes, what it answers, what it commits to, what
   it means for the game. A rating that crosses the line between 3 and 2,
   or between 4 and 3, almost always needs its note rewritten, since the
   old note argues the old rating; `en: null` keeps the old note and is
   right only where it already reads as the new rating. Write to the
   standard: plain words, British spelling, about 20 to 55 words, no tour
   of the moves that can follow, no history, no comparison with a sibling
   unless the comparison is the point.
6. **Do not** remove a move; change a move the issues do not name except
   for sibling coherence; rate a move in `unfollowed` 4 or 5; add more
   than the main answer and at most one alternative the position needs.

## Research

- Fetch pages as raw wikitext with curl; it is small and reliable:
  - the position's `wikibooks` URL first, and the parent position's page
    (one move shorter), which often discusses the move that leads here
    and its alternatives;
  - Wikipedia: for `https://en.wikipedia.org/wiki/<Title>` fetch
    `https://en.wikipedia.org/w/index.php?title=<Title>&action=raw`; a
    variation without an article is a section of the family's
    (`grep -n "^=="` lists the sections). Wikipedia's search:
    `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=<words>`.
- Where these do not settle a rating, another public source may: the
  Wikibooks page of a neighbouring move order, an article on a
  reputable chess site, a database's statistics on the position. Name it
  in `basis` or `reason` with its URL. A source you cannot open is not a
  source; invent none.
- Budget: at most 40 page fetches and 30 engine calls for the batch.
- A source's view of an opening's character may go into a note in your own
  words; no history in a note.

## The board

Check every concrete claim with the board tool before you write it:

```sh
node scripts/content/board.mjs show "<line>"            # board, side to move, legal moves
node scripts/content/board.mjs square "<line>" e5       # what stands there, who attacks it
node scripts/content/board.mjs piece "<line>" f1        # what the piece on f1 attacks
node scripts/content/board.mjs engine "<line>"          # the engine's scores of the moves, and its main line
```

The line is in English notation as the keys write it, e.g.
`"1.e4 e5 2.Nf3"`. A move you consider is played out first: `show` the
line with the move added, and with the opponent's natural reply, and look
at what stands where. In earlier rounds the most frequent error by far was
a note false on the board: a pawn that "hangs" and does not, a bishop that
"pins" a piece it does not reach.

## Output

Write your output file:

```json
{
  "id": "<the batch id>",
  "moves": [
    {
      "from": "1.e4 e5 2.Nf3 d5 3.Nxe5 dxe4 4.Bc4",
      "san": "Nh6",
      "rating": 5,
      "en": "The note.",
      "basis": ["https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._e4/1...e5/2._Nf3/2...d5/3._Nxe5/3...dxe4/4._Bc4, section Theory", "the engine's main line"]
    }
  ],
  "revisions": [
    {
      "from": "1.e4 e5 2.Nf3 d5 3.Nxe5 dxe4 4.Bc4",
      "san": "Qg5",
      "rating": 3,
      "en": "The new note, or null to keep the old one.",
      "reason": "Wikibooks calls 4...Qg5 the traditional try and notes that 5.Bxf7+ Ke7 6.d4 leaves White better; the engine's main line confirms it, 175 centipawns behind 4...Nh6."
    }
  ],
  "kept": [
    {
      "from": "1.e4 e5 2.f4 exf4 3.Nf3 g5",
      "san": "h4",
      "reason": "The engine's depth here is 12; Wikibooks gives 4.h4 as the main line against 3...g5 and the book's siblings agree."
    }
  ],
  "fetched": ["every URL you fetched"]
}
```

`moves` are the moves you add, `from` the position's `line` exactly and
`san` as `legal` writes it, with `basis`, the pages and sections the
rating rests on, or `"board"` or `"the engine's main line"`. `revisions`
are existing moves you change: the new `rating` (the old one if only the
note changes), the new note in `en` or `null` to keep the old one, and
the `reason`, which names the source, the board or the engine's line.
`kept` are existing moves whose rating you keep outside its bound, each
with its `reason`. A move or revision whose rating is outside its bound
carries the reason in a field `engine` as well.

Then run `node scripts/content/validate-batch.mjs writer <your output file>`
and fix every ERROR; a warning is a prompt to look again. Run it until it
prints OK.

Reply with one line only: the validator's last line, how many moves you
added, how many revisions you made, how many ratings you kept and how many
board and engine commands you ran.
