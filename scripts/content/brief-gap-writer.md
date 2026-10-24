# Brief: filling the gaps of a position (writer)

Uberschach's opening book follows the named lines of the Lichess dataset,
and from many positions on them it has only the one or two moves those
lines play, sometimes none of them the best. You fill such positions: each
gets at least three moves, one of them rated 5 (Best), so that the reader
sees the main answer and the alternatives worth knowing, not only the move
the dataset happens to name. You may also correct the ratings and notes the
position already has. A separate agent reviews your work, another writes
the German, so write English only.

Your prompt names the batch file and your output file. The tools are run
from the repository root, as `node scripts/content/<tool>.mjs`.

## Read first

1. `scripts/content/standard.md`: what a strategy note says and avoids,
   with examples. This is the rule you write to; read the part on moves
   deep in a named line twice.
2. The batch file. Its `positions` are a family's positions, each with:
   - `line`: the moves leading to it, and `toMove`, the side whose moves
     you write;
   - `path`: the names and backgrounds the reader has been shown on the
     way here;
   - `wikibooks`: the raw Wikibooks page of this position, which may not
     exist;
   - `existing`: the moves the book has from here, with `rating` and note
     (`en`);
   - `legal`: every legal move, written as you must write it;
   - `transposes`: legal moves that reach a named position of the book,
     with its name (a move order that transposes into known theory);
   - `need`: `moves`, how many moves to add at least, and `best`, true
     where no existing move is rated 5.

Read the whole batch before writing: the family's pages are read once for
all of its positions.

## Per position

1. **Find the main answer.** Which move do the sources treat as the main
   line or the principal reply here? If it is among `existing`, it is
   rated 5 (a revision if it is not). If it is not, add it, rated 5. A
   position always has a best move, however poor the line that reached it:
   after a dubious move of the opponent's, the best move is often the one
   that punishes it. That a named line plays a move, or that the book
   follows it, is no ground for its rating: the dataset names lines for
   their names, gambits and traps, not for their merit, and the moves it
   names are why these positions need you. A named move the sources do not
   treat as the main answer is rated what it is, beside the main answer
   you add.
2. **Add alternatives** until the position has at least
   `existing.length + need.moves` moves: the respected alternatives (4)
   and sound second-rate moves (3) the sources name, the most instructive
   first. Choose moves a reader would meet or consider, not legal oddities.
   Add a move rated below 3 only where the position has no third sound
   move (a forced recapture, a single defence against a threat), and
   then the natural mistake a reader might make. You may add more than
   needed, up to five in all, where the position has several moves worth
   knowing.
3. **Check the existing ratings** against the sources and against your
   new siblings: a move the sources prefer is not rated below one they
   rate lower; two moves are not both "the main line". Revise a rating
   only for a reason you can name from a source or the board.
4. **Check the existing notes** where your additions or revisions make
   them false: a note that calls its move "the main line" or "the only
   way" beside the main line you added, or that no longer reads as its
   new rating. Rewrite such a note to the standard; leave every other
   note as it is (`en: null` in a revision keeps it).

Ratings, from 1 to 5, the judgement of the move for the side that plays
it, as the sources assess it:

- 5 Best: the main line, the move the sources treat as the principal answer;
- 4 Good: a respected alternative that strong players choose;
- 3 Playable: sound but second-rate, offbeat or merely harmless;
- 2 Inaccuracy: gives something away, a dubious gambit, a "?!" move;
- 1 Mistake: gives a lot away, is refuted, or falls into a trap.

Wikibooks's move tables and symbols (!, ?!, ?, =, ±) and Wikipedia's
wording ("the main line", "dubious", "refuted") are the ground for a
rating; the board decides where a move simply hangs material.

**Strategy note** of each move you add, to the standard: for a move worth
learning, the assessment of the strategic approach it takes, what it
answers, what it commits to, what it means for the game; for a weak move,
what it gives away and why, with the refutation named where that is the
point. Do not compare it with the move the named line plays ("unlike
6.Be2, ..."), unless the comparison is the point; each note is read on
its own.

## Research

- Fetch pages as raw wikitext with curl; it is small and reliable:
  - the position's `wikibooks` URL first: many pages list the main moves
    with an assessment and a move table; the parent position's page (one
    move shorter) often discusses the move that leads here and its
    alternatives.
  - Wikipedia: for `https://en.wikipedia.org/wiki/<Title>` fetch
    `https://en.wikipedia.org/w/index.php?title=<Title>&action=raw`; a
    variation without an article is a section of the family's
    (`grep -n "^=="` lists the sections).
  - To find an article, Wikipedia's search:
    `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=<words>`.
- Budget: at most 40 fetches for the batch. A page that fails to load is
  tried once under another title, then the rating rests on the board, on
  the principles the family's pages state and on what you have read.
- A source's view of an opening's character may go into a note in your own
  words; no history in a note.
- No web search beyond Wikipedia's own, and no engine.

## The board

Check every concrete claim with the board tool before you write it:

```sh
node scripts/content/board.mjs show "<line>"            # board, side to move, legal moves
node scripts/content/board.mjs square "<line>" e5       # what stands there, who attacks it
node scripts/content/board.mjs piece "<line>" f1        # what the piece on f1 attacks
```

The line is in English notation as the keys write it, e.g.
`"1.e4 e5 2.Nf3"`. A move you consider is played out first: `show` the
line with the move added, and with the opponent's natural reply, and look
at what stands where. A move that hangs a piece or walks into a known
tactic is not the best move, whatever its name. In earlier rounds the most
frequent error by far was a note false on the board: a pawn that "hangs"
and does not, a bishop that "pins" a piece it does not reach.

## Output

Write your output file:

```json
{
  "id": "<the batch id>",
  "moves": [
    {
      "from": "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6",
      "san": "Be3",
      "rating": 5,
      "en": "The note.",
      "basis": ["https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._e4/1...c5/2._Nf3/2...d6/3._d4/3...cxd4/4._Nxd4/4...Nf6/5._Nc3/5...a6, section Theory"]
    }
  ],
  "revisions": [
    {
      "from": "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6",
      "san": "Bg5",
      "rating": 4,
      "en": null,
      "reason": "Wikibooks names 6.Be3 the most popular reply and 6.Bg5 the classical alternative."
    }
  ],
  "fetched": ["every URL you fetched"]
}
```

`moves` are the moves you add, `from` the position's `line` exactly and
`san` as `legal` writes it. `revisions` are existing moves you change: the
new `rating` (the old one if only the note changes), the new note in `en`
or `null` to keep the old one, and the `reason`. `basis` names the page and
section a rating rests on, or `"board"`.

Then run `node scripts/content/validate-batch.mjs writer <your output file>`
and fix every ERROR; a warning is a prompt to look again. Run it until it
prints OK.

Reply with one line only: the validator's last line, how many moves you
added, how many revisions you made and how many board commands you ran.
