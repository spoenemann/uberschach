# Brief: writing the moves of a named line (writer)

You write new entries for Uberschach's opening book: the moves the named
lines play (the Lichess chess-openings dataset decides which) from a group
of positions, each with its rating and strategy note, and a short
historical background for the named positions they reach. A separate agent
reviews your work, another writes the German, so write English only.

Your prompt names the batch file and your output file. The tools are run
from the repository root, as `node scripts/content/<tool>.mjs`.

## Read first

1. `scripts/content/standard.md`: what a strategy note says and avoids,
   with examples. This is the rule you write to; read the part on moves
   deep in a named line twice.
2. The batch file. Its `positions` are the positions you write moves from,
   each with:
   - `line`: the moves leading to it;
   - `path`: the names and backgrounds the reader has already been shown
     on the way here;
   - `existing`: moves from here that the book already has, with their
     ratings (siblings of yours; do not write them);
   - `moves`: the moves you write, each with its `key` (the line after the
     move) and what it `reaches`: that position's `line`, its `name` (given
     by the dataset; you do not write names), its ECO code, and `describe`,
     true where you write that position's background.

Read the whole batch before writing: the positions are a family's lines,
and their pages are read once for all of them.

## Per move

- **Rating**, from 1 to 5, the judgement of the move for the side that
  plays it, as the sources assess it:
  - 5 Best: the main line, the move the sources treat as the principal
    answer here;
  - 4 Good: a respected alternative that strong players choose;
  - 3 Playable: sound but second-rate, offbeat or merely harmless;
  - 2 Inaccuracy: gives something away, a dubious gambit, a "?!" move;
  - 1 Mistake: gives a lot away, is refuted, or falls into a trap.

  A move is in the dataset because it has a name or leads to one, not
  because it is good: named gambits, traps and curiosities are rated as
  what they are. The other side's moves in a trap line are rated too: the
  move that falls into the trap is a 1, the move that springs it a 5. Rate
  in relation to the siblings (`existing` and your other moves from the
  same position): of two moves, the one the sources prefer is not rated
  lower. Wikibooks's move tables and symbols (!, ?!, ?, =, ±) and
  Wikipedia's wording ("the main line", "dubious", "refuted") are the
  ground for a rating; the board decides where a move simply hangs
  material.
- **Strategy note**, to the standard: for a move worth learning, the
  assessment of the strategic approach it takes, what it answers, what it
  commits to, what it means for the game; for a weak move, what it gives
  away and why, with the refutation named where that is the point.

## Per position described

Where `describe` is true, write the reached position's **background**: one
to three sentences of history, who introduced, analysed, played or named
the variation, when, and its standing in practice, each fact from a page
you read, which you list in `sources`. No strategy (that is the note), and
nothing the `path` already says. Most named variations have no history in
the sources: then the background is `null`, which is correct and expected.
Never write a fact you did not read on a page you list. The background is
about that position's own variation: a fact a page states about a parent
line (a game with 4...f5 in general, under the position after 5.exf5) does
not belong to it, nor a detail the page does not give ("in the early
1960s" where the page says only that he played it often).

## Research

- Fetch pages as raw wikitext with curl; it is small and reliable:
  - Wikipedia: for `https://en.wikipedia.org/wiki/<Title>` fetch
    `https://en.wikipedia.org/w/index.php?title=<Title>&action=raw`; a
    variation without an article of its own is a section of the family's
    (`grep -n "^=="` lists the sections).
  - Wikibooks, Chess Opening Theory, one page per position:
    `https://en.wikibooks.org/w/index.php?title=Chess_Opening_Theory/1._e4/1...c5/2._Nf3&action=raw`
    (the line's moves joined by `/`, White's as `2._Nf3`, Black's as
    `2...Nc6`). Many deep positions have a page with the ideas and a move
    table; many have none.
  - To find an article, Wikipedia's search:
    `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=<words>`.
- Budget: at most 30 fetches for the batch. Read the family article once,
  then the Wikibooks pages of the positions that matter most (the moves
  rated 4 and 5, the named gambits). A page that fails to load is tried
  once under another title, then the note rests on the board and on what
  you have read.
- A source's view of an opening's character may go into a note in your own
  words; no history in a note.
- No web search beyond Wikipedia's own.

## The board

Check every concrete claim with the board tool before you write it:

```sh
node scripts/content/board.mjs show "<line>"            # board, side to move, legal moves
node scripts/content/board.mjs square "<line>" e5       # what stands there, who attacks it
node scripts/content/board.mjs piece "<line>" f1        # what the piece on f1 attacks
```

The line is in English notation as the keys write it, e.g.
`"1.e4 e5 2.Nf3"`; a move's `key` is the position after that move. A
tactic you describe is played out first: `show` the line with the moves of
the tactic added, and look at what stands where after each one. In
earlier rounds the most frequent error by far was a note false on the
board: a pawn that "hangs" and does not, a bishop that "pins" a piece it
does not reach.

## Output

Write your output file:

```json
{
  "id": "<the batch id>",
  "moves": [
    {
      "from": "1.e4 c5 2.Nf3 d6",
      "san": "d4",
      "rating": 5,
      "en": "The note.",
      "basis": ["https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._e4/1...c5/2._Nf3/2...d6, section Theory"]
    }
  ],
  "positions": [
    {
      "line": "1.e4 c5 2.Nf3 d6 3.Bb5+",
      "background": "Sourced history, or null.",
      "sources": ["https://en.wikipedia.org/wiki/Sicilian_Defence"]
    }
  ],
  "fetched": ["every URL you fetched"]
}
```

Every move of the batch once (`from` is its position's `line`); every
position with `describe: true` once in `positions`, its `sources` empty
when the background is `null`. `basis` names the page and section a note's
outlook rests on, or `"board"`.

Then run `node scripts/content/validate-batch.mjs writer <your output file>`
and fix every ERROR; a warning is a prompt to look again. Run it until it
prints OK.

Reply with one line only: the validator's last line, and how many
backgrounds you wrote.
