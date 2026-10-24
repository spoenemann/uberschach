# Uberschach

A chess training app for the browser. Built first for the maintainer's own
training and published for anyone who finds it useful:
**https://spoenemann.github.io/uberschach/**

There is no account, no server and no tracking. The app is a static page that
runs entirely in your browser.

## Opening explorer

The first capability, and so far the only one. You learn an opening by walking
into it: you play every move, White's and Black's, and after each one the app
tells you what it knows about that move and what is worth playing next. It
never moves a piece for you and never refuses a legal move, so you can follow
the book, wander off it or try the dubious gambit to see why it is dubious.

### After every move

- **A rating**, as a word and a colour: Best, Good, Playable, Inaccuracy or
  Mistake. It is a judgement of the move for the side that played it, written
  for a club player, not an engine evaluation.
- **What the move is about**: what it wants, what it gives up or risks, and
  what kind of game it leads to.
- **The name** of the opening or variation you are in, with a short historical
  background where there is one (who played it first, who it is named after).
- **Candidates**: the moves worth knowing next, drawn as arrows on the board
  and listed beside it. Click an arrow or a list entry to play it.

Before the first move, the panel gives a short introduction to the choice of
first moves instead.

The line you play is kept in the address, so a link shares a position. The
texts and the piece letters are available in English and German.

### What is in the book

- **The first moves, completely.** In the opening's first moves, every legal
  move is rated and explained, the poor ones too, so nothing you try goes
  unexplained. Only the moves rated Best or Good are followed deeper.
- **The named openings, deeper.** Beyond that, the book follows the lines named
  in the [Lichess chess-openings dataset](https://github.com/lichess-org/chess-openings),
  with the dataset's names, as far as a move still counts as opening theory.
- Where the book ends, the panel says so, and you can keep playing on the board.

### About the texts

The ratings and strategy notes are written and reviewed with AI agents, not
copied from an engine or a book. A separate agent checks every historical claim
against a public source and every rating against its sibling moves. That
catches a lot, but it is not an editor's proofreading: if a text looks wrong to
you, it may well be, and an issue is welcome.

### Not (yet) there

No engine and no opponent, no quizzes or progress tracking, no drag and drop,
no under-promotion (a pawn reaching the last rank becomes a queen), no PGN or
FEN import or export, and no tree of variations: the explorer keeps one line at
a time. Nothing is stored in your browser except your language choice.

## Running it

```sh
npm install
npm run dev     # http://localhost:5173/uberschach/
npm run build   # the static site, in dist/
```

Both scripts first generate the opening book from the content in
`src/content/`. The Node version is in `.nvmrc`.

## For contributors and coding agents

Start at [AGENTS.md](AGENTS.md). What the app promises is in
[docs/product-specs/](docs/product-specs/), how it is built in
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) and [docs/design-docs/](docs/design-docs/),
and the progress of the opening book in [docs/exec-plans/](docs/exec-plans/).

## License

[MIT](LICENSE). The opening names and lines come from the
[Lichess chess-openings dataset](https://github.com/lichess-org/chess-openings),
which is CC0.
