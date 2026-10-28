# Exec plan: the book against an engine's opening database

- **Status**: completed on 2026-10-28, started 2026-10-28
- **Goal**: an independent check of the book's ratings and of its coverage
  against a public engine-scored opening database, as a file a follow-up
  step can process: every rating beside the engine's score of its move, the
  sound moves the book lacks, the engine's lines beyond the book to the
  depth the book follows (six moves a side). Done when the comparison has
  been processed: its flags judged position by position by a reviewer that
  reads the sources and the board, the ratings and moves that need it
  changed through the content tools, and the findings logged here.

## Acceptance criteria

- [x] A tool that fetches the database's moves for every position of the
      book that has moves, caches them, and writes the comparison
      (`scripts/content/cdb.mjs`; `scripts/content/README.md`, Against the
      cloud database).
- [x] The comparison of the whole book written and summarised (Progress
      log, 2026-10-28).
- [x] The policy: the engine's bounds on the ratings, in the spec, held by
      the validator on every batch that carries the engine's view
      (Decision log, 2026-10-28, The bounds).
- [x] The ratings outside the bounds decided: 962 positions, 1,393 ratings
      or main answers, through the bounds workflow; the findings logged
      (Progress log, 2026-10-28, The bounds run).

## Where the results are

The working folder is `/Users/spoenemann/OpenSource/uberschach-work/` (the
content tools' `<work>`, outside the repository): the comparison is
`cdb/comparison.json`, the cached responses `cdb/cache/` (one file per
position, so a rerun of `node scripts/content/cdb.mjs <work>` costs seconds
and a changed book fetches only its new positions), the run's log
`cdb/run.log`. The file's `method` repeats the thresholds; `summary` the
counts below; `positions` the comparison per position; `lines` the engine's
lines beyond the book.

## Progress log

- 2026-10-28: The tool, `scripts/content/cdb.mjs`, and its first run over
  the book at b397244 (3,590 positions with moves, 14,025 moves). Every
  position was known to CDB; 14,015 moves got a score, the 10 that did not
  are rated 1 to 3 and are moves CDB never analysed (1...Bxb1 lines and the
  like). The first run fetched 14,113 positions in about 40 minutes at
  three requests at a time; the walk beyond the book added 280 more.
  - *Ratings against the engine's delta to the best move* (the matrix in
    `summary`, rows the rating, columns the rating the delta implies): exact
    agreement 38.0 %, within one step 73.5 %; at ply 3 and deeper 39.0 % and
    75.2 % of 12,764 moves. The ends agree: 3,335 of 3,716 moves rated 5
    (89.7 %) are within 9 centipawns of the best and 751 of 821 rated 1
    (91.5 %) at least 120 behind. The middle does not, by design: 2,075 of
    4,228 moves rated 3 tie or nearly tie the best, because "playable, not
    recommended" is a judgement the engine does not make, and the engine
    finds nearly every first and second move equal (at ply 1 and 2, 213
    moves rated 1 or 2 are within 10 centipawns of the best; those ratings
    say what is worth learning, and are expected to stand).
  - *Flags at ply 3 and deeper*: 346 moves rated 4 or 5 at least 50
    centipawns behind the best (`overrated`), 203 rated 1 or 2 within 10 of
    it (`underrated`), 408 with a sibling rated lower that scores at least
    30 better (`inverted`). The worst overrated: 1.d4 Nf6 2.Nf3 b6 3.g3 Bb7
    4.Bg2 c5 5.c4 cxd4 6.Nxd4 rated 5 at 502 behind (CDB's note says depth
    13, so the score may not hold), 1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 Bb4
    5.d5 Nd4 rated 4 at 381, 1.e4 e5 2.f4 Qf6 3.Nc3 Qxf4 4.Nf3 Bb4 5.d3
    rated 5 at 307 behind the book's own 5.Bc4, rated 2, which CDB finds
    best by far (an `inverted` flag as well).
  - *The best move*: in 304 positions no book move ties CDB's best score,
    but the book's best is within 9 centipawns in 3,369 of the 3,466
    positions at ply 3 and deeper (97.2 %); 25 to 49 behind in 25, 50 to 99
    in 18, 100 or more in 5. Those 23 are where the book's main answer is
    in doubt, among them 1.e4 e5 2.Nf3 d5 3.Nxe5 dxe4 4.Bc4 (the book's best
    175 behind; CDB plays 4...Nh6), 1.d4 d5 2.c4 e5 3.dxe5 d4 4.Nf3 Nc6 5.g3
    (152; 5...Nge7) and 1.e4 e5 2.f4 exf4 3.Nf3 Nc6 4.Nc3 g5 (117; 5.g3).
  - *Coverage*: 21,286 CDB moves within 30 centipawns of the best are not
    in the book, almost all quiet alternatives at the named-line positions
    that hold three moves, which the spec does not promise; 1,569 of them
    tie the best. From each of those the engine's line beyond the book was
    followed: 92 transpose into a position the book has moves at, 1,477
    run to the twelfth ply; by first move 570 after 1.d4, 546 after 1.e4,
    195 after 1.Nf3, 141 after 1.c4, the rest in the sidelines. They leave
    the book mostly at plies 4, 6, 8 and 10, that is, after a Black move
    the book answers with its three. These are engine lines, not lines of
    public usage; whether any of them belongs in a book that follows the
    named lines is the maintainer's call (the spec, The database).
  - *Caveats for the follow-up*: CDB's depth differs by position (the
    note's first number, 10 to 30 here), and its `rank` is 0 for every move
    of a position it has not analysed deeply (255 of 14,113 positions have
    no rank-2 move), so the deltas, not the ranks, carry the comparison; a
    delta measures the engine's view, which the spec says a rating is not,
    so a flag is a question for a reviewer that reads the sources and the
    board, never a correction in itself.

- 2026-10-28, *the bounds run*: `bounds.mjs` wrote 85 batches of the
  962 positions at ply 3 and deeper with a rating outside its bound or a
  main answer in doubt, 1,393 decisions in all (1,370 ratings, 23 main
  answers). A pilot of one batch (the Elephant Gambit family) was read
  before the rest ran: the writer cited scores with depths and Wikibooks,
  rewrote each note to its new rating, added 4...Nh6 as the main answer
  after 1.e4 e5 2.Nf3 d5 3.Nxe5 dxe4 4.Bc4, and the reviewer caught two
  board errors in the notes. The whole run: 291 Sonnet agents (writer and
  reviewer at high effort, translator at medium), about 30 million tokens,
  about three and a half hours.
  - *Decided*: 1,557 revisions (8 of them note only), 65 moves added (12
    by reviewers), 8 ratings kept outside their bound with a reason, 7
    writer entries dropped by reviewers. Reviewers changed 166 revisions
    (10.7 %), 103 for a claim false on the board and 56 for the standard;
    4 for the decision itself. Down: 3→2 500, 3→1 80, 4→2 99, 4→3 80,
    4→1 10, 5→4 84, 5→3 56, 5→2 55, 5→1 5, 2→1 23. Up: 2→3 367, 1→2 23,
    1→3 7, 2→4 5, 2→5 14, 3→4 17, 3→5 53, 4→5 71. The book now holds
    14,090 moves: 917 rated 1, 2,498 rated 2, 4,089 rated 3, 2,870 rated 4,
    3,716 rated 5 (before: 829, 2,230, 4,229, 3,021, 3,716).
  - *Against the engine afterwards* (`cdb.mjs` from the cache): at ply 3
    and deeper exact agreement with the implied rating rose from 39.0 % to
    43.1 % and agreement within one step from 75.2 % to 83.9 %; ratings
    outside their bound fell from 1,370 to 10, the 8 kept with a reason and
    2 revised with one (3.f4 after 1.e4 e5 2.Bc4 f5 as a gambit whose
    compensation the engine's line shows, and 5.Bf7+ after 1.e4 e5 2.Nf3 f5
    3.Bc4 fxe4 4.Nxe5 Nf6, whose batch delta rested on a depth of 1);
    positions whose best book move is 50 or more behind the engine's best
    fell from 23 to 0.
  - *The kept reasons* that held: a shallow depth with the sources behind
    the rating (6...h6 in the Caro-Kann at depth 12, where Wikibooks marks
    ...h6?! Ne6!; 4...b5 in the Bishop's Gambit at depth 10; 6.Nf3 in the
    Allgaier at depth 9); compensation the sources describe and the
    engine's line shows (the Muzio's 5.O-O, 34 behind 5.Nc3); and the
    Philidor Countergambit after 4.Bc4, where every Black move is about
    three pawns down, so the delta separates nothing and the sources'
    concrete refutations carry the 1s and 2s. A limit of the measure worth
    knowing: in a lost position the delta to the best move says nothing
    about which bad move is worse.
  - *A false constraint, found and corrected*: the first batches listed
    `unfollowed` moves (those a move rated 4 or 5 must not lead to, since
    the breadth-first plies follow such moves) for every position at ply
    3, but the test applies it only to positions reached by moves rated 4
    or 5 all the way; 39 positions under a weak second move carried the
    list wrongly, two writers stopped at the validator (2...Bxb4 after
    1.b4 e5 2.Bb2, 2...d6 after 1.Nf3 e5 2.Nxe5) and 16 best moves in
    other batches were capped at 3. `bounds.mjs` now lists the moves only
    for breadth-first positions; the 12 batches concerned were rerun. No
    writer met the constraint where it is real.
  - *What the writers reported*: Wikibooks has no page for many sideline
    positions (404), so those ratings rest on the board and the engine's
    line; CDB's depth varies from 1 to 60 and a shallow figure was treated
    as weaker evidence, as the brief asks; the engine's main line, through
    `board.mjs engine`, was the tool most used (about 25 calls a batch).
    No note names the engine.

## Decision log

- 2026-10-28, *the database*: the Chinese Chess Cloud Database (chessdb.cn,
  "CDB"), queried by `queryall` with the position's FEN, no key, about a
  second a request. The reasons: it rates every move of a position with an
  engine score, the Lichess opening explorer, the other public database
  with per-move data (master practice, win rates), answered anonymous
  requests with 401 on 2026-10-28, with or without a User-Agent, and would
  need an OAuth token; the open source engines themselves ship no book
  (Stockfish, Leela), and the Polyglot books GUIs give them carry frequency
  weights, not ratings, under unclear licences. The open source lichess-bot
  plays its openings from CDB and the Lichess explorer alike. A Lichess
  masters comparison (how often masters play each move, how they score)
  would be the complementary check, closer to what a rating means, and
  needs a token; left for later.
- 2026-10-28, *ties the best by score, not by CDB's rank*: the first run
  took CDB's rank 2 for "ties the best" and found 255 positions with no
  rank-2 move at all (positions CDB has not analysed deeply have rank 0
  throughout), so a book move at delta 0 was flagged as missing the best.
  `bestInBook` and the starts of the lines beyond the book now use a delta
  of 0; the rank is kept in the file as CDB's own bucket.
- 2026-10-28, *what the walk follows*: from a missing move that ties the
  best, CDB's single top move at each step, to the depth the book follows,
  stopping where the book has moves (a transposition) or CDB knows nothing;
  one line per missing move keeps the fetches bounded (280 beyond the
  book's own positions). Following every near-best move would have been
  thousands of lines of equal-looking engine moves.
- 2026-10-28, *thresholds*: the implied rating's bands (9, 24, 59, 119
  centipawns), the flags (50 and 10 centipawns, 30 between siblings) and
  the sound margin (30) are constants at the top of the script and
  repeated in the file's `method`; the file carries the raw scores and
  deltas, so the follow-up can redraw them without a fetch.
- 2026-10-28, *where the results live*: outside the repository, in the
  content tools' working folder (Where the results are), as the other
  working files do; the cache makes them reproducible in seconds from the
  same book, and this plan records what they said.

- 2026-10-28, *the bounds*: the maintainer took the recommendation that the
  engine bounds the ratings instead of making them. The ratings' words for
  1 and 2 ("gives something away", "gives a lot away") are claims an engine
  can test; those for 3 to 5 ("sound", "worth learning", "the main line")
  are a recommendation among sound moves, which an engine cannot make: it
  finds 1.e4 and 1.a3 equal and half the moves rated 3 tie its best. So,
  from ply 3 on: 5 at most 25 centipawns behind the best move, 4 at most
  60, 3 at most 100, 2 at least 20, 1 at least 100 (`scripts/content/lib.mjs`,
  `BOUNDS`; the spec, The database). The bound on 3 came from the batches:
  440 moves rated 3 were 120 or more behind, "playable" moves that lose a
  pawn or more. The first two plies stay as they are. Enforced where
  ratings are written: `validate-batch.mjs` refuses a rating outside its
  bound without a reason on every batch that carries the engine's view,
  the gaps batches now included (`gaps.mjs`), so the book cannot drift
  back; the bounds batches (`bounds.mjs`) carry each position's moves,
  notes, legal moves, the engine's whole view with depths, and the issues
  in words, so that an agent judges a verdict it understands, with
  `board.mjs engine` to see the engine's main line from any position.
- 2026-10-28, *not mechanically*: a rating change almost always needs its
  note changed, since the old note argues the old rating, and the spec
  promises a reviewer who did not write it; so the decisions go through
  the writer, reviewer, translator workflow, Sonnet at high effort for the
  two judgements (the maintainer's instruction), with the briefs
  `brief-bounds-writer.md` and `brief-bounds-reviewer.md`. The writer may
  keep a rating against the engine with a reason the reviewer tests; the
  reasons that hold are a shallow depth with the sources behind the
  rating, or compensation the sources describe and the engine's line
  shows. Other public sources are allowed where Wikibooks and Wikipedia
  do not settle a rating, named by URL.

## Open

- The 1,569 engine lines beyond the book (`comparison.json`, `lines`): a
  question to the maintainer, since the book follows the named lines and
  these are the engine's; none was written.
- The Lichess masters comparison, what masters play and how they score,
  which is closer to what a rating means between 3 and 5; it needs a token.
- The frontier batches (`frontier.mjs`) do not yet carry the engine's view,
  so the validator holds only the gaps and bounds batches to the bounds;
  the named lines are written through to their depth, so no frontier
  batch is due.
