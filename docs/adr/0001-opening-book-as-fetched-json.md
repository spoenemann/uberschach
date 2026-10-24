---
status: superseded
date: 2026-10-24
superseded-by: 0002-opening-modules-folded-to-a-size-budget.md
---

# ADR-0001: The opening book is JSON, served in chunks generated at build time and fetched as the line walks into them

## Context

The opening book was TypeScript data imported by the app: 40 modules,
2,721 positions and 2,918 moves in two languages after the first four plies,
all in the JavaScript bundle (1,911 kB, 535 kB gzipped) and all built into a
Map keyed by position when the page loaded, 0.33 s of replaying every line
through the rules engine before the entry page showed. The plan for the
book (`docs/exec-plans/completed/0002-opening-explorer.md`, Gathering the
information) projects about 21,000 positions two plies deeper, so the
bundle would have reached about 12 MB and the start about three seconds,
and the question was how the book should be stored and loaded before more
content is written.

Three things decide the shape, and none of them is solved by loading files
on demand alone:

- **Keys.** The book is keyed by position, so a transposition finds the
  same entry wherever it is reached. The key of a position is only known
  after its line is played, and playing every line is what the start-up
  time was.
- **Transpositions across chunks.** Chunked by line, a position's chunk is
  not derivable from the line that reaches it: 1.Nf3 d5 2.d4 is declared
  under 1.d4 d5, and 1.e4 Nc6 2.Nf3 e5 re-enters the book from outside it.
  Both are promised by the spec (The database; After every move). Finding
  the chunk needs an index from key to chunk, which only a pass over the
  whole book can produce, never the browser.
- **Candidate names at chunk boundaries.** The candidate list names the
  position each move leads to. At 1.e4 those are eight positions in eight
  other chunks, about 500 kB to fetch for eight names.

The maintainer asked for JSON, so that the content is data the tools read
and write without parsing TypeScript, and for the migration to be done by
a script.

## Options considered

1. **Keep the content in the bundle.** Grows 570 bytes per move minified,
   and the start replays every line; the projected book does not fit.
2. **Code-split the TypeScript modules with dynamic imports.** The same
   locality as chunks and no fetch code, but the content stays code that
   the type checker, the linter and the bundler process on every run, and
   the content tools keep rewriting TypeScript with regular expressions;
   the index question is the same.
3. **Authored JSON served as it is, keys computed in the browser per
   chunk.** No build step. The replay per chunk would be bounded, but the
   index and the candidate names need a whole-book pass and would have to
   be committed as generated files that a content tool regenerates and a
   test checks for freshness.
4. **Authored JSON, served form generated at build time.** A script reads
   every module, builds and verifies the book as the test does, and writes
   one chunk per module with precomputed keys, both languages and the name
   each move leads to, plus the index. The browser does no chess
   computation to show a position. Chosen.
5. **Chunks by a hash of the position key** instead of by line. No index
   at all and every transposition free, but each move lands in another
   chunk, so every move fetches and the candidates' targets are scattered.
   Rejected for locality: in the chosen layout a family is one or two
   fetches for a whole session.

For the index, the maintainer chose to fetch it with the explorer at the
start (one mechanism, 14.5 kB gzipped today) over fetching it on the first
transposition or off-book move behind a manifest of chunk roots and a
longest-prefix rule (nothing linear at the start, two mechanisms).

## Decision

The opening content is JSON under `src/content/lines/`, one module per
followed position: `<id>.json` holds the chess data, `<id>.en.json` and
`<id>.de.json` the prose, `<id>` the module's line without move numbers
and `root` for the initial position. `npm run build:openings`
(`scripts/content/serve.mjs`), run by `npm run build` and `npm run dev`,
builds the book with every check and writes the served form
(`src/content/serve.ts`) into `public/openings/`: `index.json` from every
position's key to its chunk, and one `<id>.json` per module with keys,
texts in both languages and the name each move leads to. The app fetches
the index and the root chunk when the explorer opens and one chunk per
family the line enters (`src/content/loader.ts`, `src/app/openings.ts`),
and never imports the content (`eslint.config.js`,
`no-restricted-imports`). A module holds its root and at most two plies
below it, so a chunk grows with the branching and the number of followed
moves, never with the depth (`src/content/openings.test.ts`).

The decisive argument: the one derived artifact that lazy loading cannot
do without, the index, has to be produced by a pass over the whole book,
and once that pass exists at build time it also takes the keys and the
candidate names off the browser and makes the build the sensor for a
content error.

## Consequences

- The bundle is 252 kB (80 kB gzipped) and no longer grows with the book.
  The explorer fetches the index (184 kB, 14.5 kB gzipped) and the root
  chunk (8 kB gzipped) at the start, then about 10 to 25 kB gzipped per
  family entered; a German visitor downloads the English too.
- The index grows about 5 bytes gzipped per position, so about 110 kB at
  the projected 21,000 positions. Should that become too much, the loader
  keeps its interface and fetches the index only when a position is not
  in the chunk its line's longest followed prefix names (option 4's
  alternative above); that is a change to `loader.ts` and `serve.ts`,
  not to the content or the app.
- A content error fails `npm run build` and the test, not a test alone;
  the build takes about a second longer for the verified build of the
  book, and grows with it. `npm run dev` runs the step at start and does
  not see a content edit until it is restarted.
- The served files carry no content hash in their names, so a visitor's
  cached chunk can lag a deploy for as long as the host caches it.
- Deeper content gets modules rooted at the followed positions two plies
  down (`lines/e4-e5-Nf3-Nc6.json`), and the position moves out of the
  module that declared it as a leaf; the test says so when a module grows
  past its two plies.
- The content tools read and write JSON (`scripts/content/lib.mjs`,
  `apply.mjs`), and a module's provenance comment became its `about`
  field. The UI tests build the whole book in memory, about a second per
  test file; the suite as a whole got faster, since the content no longer
  passes through the TypeScript transform.
- The panel waits for an entry on its way instead of saying the line has
  left the book, and says when the book could not be fetched; the board
  and the line never wait.
