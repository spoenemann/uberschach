---
status: accepted
date: 2026-10-24
supersedes: 0001-opening-book-as-fetched-json.md
---

# ADR-0002: The opening modules are subtrees of the book, folded up to a size budget

## Context

ADR-0001 made the book JSON, served one chunk per module and fetched as the
visitor's line walks into them, and it set the layout of a module: its root
and at most two plies below it, so that a chunk grows with the branching and
never with the depth. That was written for the breadth-first plies, where
every legal move from a followed position is in the book.

The named lines (`docs/exec-plans/completed/0002-opening-explorer.md`, Decision
log, Named lines) changed the shape of the book below them: from the fifth
half move on, a position holds only the moves of the Lichess dataset's
lines, mostly one or two. Under the two-ply rule every such position that
gains moves two plies below its module's root became a module of its own:
1,692 modules, 5,076 files under `src/content/lines/`, the median module
2.1 kB on disk and its chunk 0.9 kB gzipped. A visitor playing a main line
to its twelfth move fetched seven chunks, most of them a few hundred bytes,
and the repository's history and every content tool walked five thousand
files. The maintainer asked to merge the modules mechanically, for a good
balance between the size of a file and the number of files.

## Options considered

1. **Keep the two-ply rule.** Small, deep chains of one-move modules, as
   measured above.
2. **A deeper fixed rule** (four or six plies below the root). Simple to
   state, but it balances nothing: the breadth-first modules would grow
   with every ply, the named-line chains would stay small.
3. **Modules as subtrees, folded bottom-up to a size budget.** A module
   takes in its child modules, smallest first, while its three files stay
   within the budget together. Chosen.
4. **Several roots per module** (siblings packed together). Fewer small
   modules still, but a module is no longer named after the position it
   starts at, and the ids, the tools and the chunk a line enters stop being
   readable from the line.

For the budget, the size of the largest module of the breadth-first plies
(`lines/e4-e5`, 98,675 bytes on disk, 26.1 kB gzipped as a chunk), rounded
up to 100,000 bytes: folding never makes a chunk larger than the book
already serves. Measured at other budgets: 16 kB leaves 739 modules, 48 kB
405, 64 kB 337, 100 kB 194, 128 kB 131 with chunks up to 45 kB gzipped.

## Decision

Everything ADR-0001 decided stands except the module layout: the content is
JSON under `src/content/lines/`, one module per id with its data and prose
files, served one chunk per module by `npm run build:openings`, with an
index from position to chunk fetched at the start.

A module is one subtree of the book: its root, named by its id, and
positions each a move away from another of its positions. Up to two plies
below its root it grows with the branching, as before. A module that
reaches deeper holds at most 100,000 bytes in its three files together.
`src/content/openings.test.ts` holds both. The 1,692 modules were folded
into 194 by `scripts/content/merge-modules.mjs`, once, bottom-up: each
module took in its child modules (those rooted a move away from one of its
positions), smallest first, while it stayed within the budget. The book
built from them is the same position for position, with every name, note,
rating and source.

## Consequences

- 582 files under `src/content/lines/` instead of 5,076; the median module
  is 21 kB on disk, the largest 99.6 kB. Served: 194 chunks, the median
  5.7 kB gzipped and the largest 26.3 kB (it was 26.1 kB); the index
  shrinks from 59.4 to 49.7 kB gzipped, the root chunk grows from 17.7 to
  24.9 kB, since it now holds the named lines after the first moves the
  book does not follow.
- A visitor playing a main line to its twelfth move (the Najdorf, the
  closed Ruy Lopez, the King's Indian, the Winawer) fetches four to six
  chunks instead of seven.
- A module's depth no longer says where its content ends: `lines/e4` reaches
  eleven plies below its root. The chunk a line enters is still the module
  of the longest prefix of the line that roots one, and the index says so
  for every position.
- `scripts/content/add.mjs` still moves a position that gains moves two
  plies below its module's root into a module of its own, which the layout
  allows; a later run of new content makes small modules again, which
  `merge-modules.mjs` folds if it is run again.
