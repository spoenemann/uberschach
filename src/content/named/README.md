# Named lines

The five TSV files of the Lichess chess-openings dataset, as published at
<https://github.com/lichess-org/chess-openings> (commit `a6189a3`, 2026-10-06;
CC0-1.0): ECO code, name and moves of 3,865 named lines, one file per ECO
volume. They decide which moves the book follows beyond the breadth-first
plies and the names of the positions on the way
(`docs/product-specs/opening-explorer.md`, The database); `src/content/named.ts`
reads them, `src/content/openings.test.ts` holds the book to them. Update them
by copying the files of a later commit, then run the content tools for what
changed (`scripts/content/README.md`).
