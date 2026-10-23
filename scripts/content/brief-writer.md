# Brief: rewriting the strategy notes of one position (writer)

You rewrite the English strategy notes of every move from one position of
Uberschach's opening book. A separate agent reviews your work and writes
the German, so write English only.

Your prompt names the node file and your output file. The tools are run
from the repository root, as `node scripts/content/<tool>.mjs`.

## Read first

1. `scripts/content/standard.md`: what a note says, what it avoids, its
   form, examples. This is the rule you write to.
2. The node file:
   - `line`: the position, as the moves leading to it ("" is the starting
     position);
   - `path`: the names and backgrounds shown on the way here;
   - `sources`: pages about this position;
   - `moves`: every legal move from here, each with its `rating` (5 Best,
     4 Good, 3 Playable, 2 Inaccuracy, 1 Mistake), its `treatment`, the
     name and background of the position it `reaches` with that position's
     `sources`, and the current note `en`.

Read all current notes of the position before writing any: they are read
side by side.

## Per move

- **lift** (assigned by the node file: moves rated 4 and 5, and moves rated
  3 that reach a named, sourced opening): write the note anew. Read what
  the sources say about the opening's ideas, plans and character, and lift
  the note to that level: what the move wants, what it gives up, what kind
  of game it leads to. Name the page and section the outlook rests on in
  `basis`. If the current note already meets the standard, mark it `keep`.
- **trim** (all other moves): no research. Keep what the current note gets
  right, drop the tour of follow-up moves, and say it in plain words. If
  the note already meets the standard, mark it `keep` and copy it exactly.

Do not change ratings. If a rating looks wrong to you, say why in
`ratingDoubt`; otherwise leave it `null`.

## Research

- Fetch pages as raw wikitext with curl; it is small and reliable:
  - Wikipedia: for `https://en.wikipedia.org/wiki/<Title>` fetch
    `https://en.wikipedia.org/w/index.php?title=<Title>&action=raw`;
  - Wikibooks, Chess Opening Theory, one page per position:
    `https://en.wikibooks.org/w/index.php?title=Chess_Opening_Theory/1._e4/1...e5/2._Nf3&action=raw`
    (the line's moves joined by `/`, White's as `2._Nf3`, Black's as `2...Nc6`).
  List a page's sections first (`grep -n "^=="`) and read the ones about
  ideas, strategy and the main lines; skip history, references and lists
  of games.
- Budget: at most one page per lift move plus two for the position, and
  never more than twelve fetches in all. No web search. A page that fails
  to load is tried once under another title, then the note rests on the
  board and the current note.
- What a source says about an opening's character may go into the note in
  your own words. No historical facts: no names, dates or games.

## The board

Check every concrete claim with the board tool before you write it:

```sh
node scripts/content/board.mjs show "<line>"            # board, side to move, legal moves
node scripts/content/board.mjs square "<line>" e5       # what stands there, who attacks it
node scripts/content/board.mjs piece "<line>" f1        # what the piece on f1 attacks
```

The line is in English notation as the keys write it, e.g.
`"1.e4 e5 2.Nf3"`; a move's `key` in the node file is the position after
that move.

## Output

Write your output file:

```json
{
  "id": "<id>",
  "moves": [
    {
      "san": "e4",
      "treatment": "lift",
      "en": "The new note.",
      "basis": ["https://en.wikipedia.org/wiki/King%27s_Pawn_Game, section Principles"],
      "ratingDoubt": null
    }
  ],
  "fetched": ["every URL you fetched"]
}
```

`basis` lists the page and section for a lifted note, or `"board"` when
the note rests on the board alone; it may be empty for trim and keep.

Then run `node scripts/content/validate.mjs writer <your output file>` and
fix every ERROR; a warning is a prompt to look again, not an error. Run it
until it prints OK.

Reply with one line only: the validator's last line, and how many notes
you lifted, trimmed and kept.
