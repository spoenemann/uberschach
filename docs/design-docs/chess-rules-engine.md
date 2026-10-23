# Design: the chess rules engine

## Context and scope

`src/domain/` decides what is legal and whether a game is over, for every
capability that shows a position or lets the visitor move: the opening
explorer (`docs/product-specs/opening-explorer.md`) and whatever follows.
The authority is the FIDE Laws of Chess in force since 1 January 2023
(https://handbook.fide.com/chapter/E012023, read 2026-10-23). There is no
separate product spec: the Laws are the promise, the tests carry the
article numbers in their names, and a disagreement between the engine and
the Laws is a bug. This doc holds what the engine decides beyond the text,
what it deliberately leaves out, how it is built and what was rejected.
The layer and its import rules are in `docs/ARCHITECTURE.md`.

## Goals and non-goals

- Goal: a move is legal in the app exactly when it is legal over the
  board, and a game ends in the app exactly when the Laws end it: Articles
  1 (the objective, dead positions), 3 (the moves of the pieces), 5 (the
  end of the game) and 9 (the drawn game).
- Goal: a caller learns why a move is illegal, not only that it is.
- Goal: plain, immutable data, so a position can be held as React state,
  used as a key, compared and replayed.
- Non-goal: chess variants (Chess960, odds games).
- Non-goal: clocks and time controls (Article 6), the conduct rules
  (touch-move, Articles 4, 11, 12) and arbiter procedure (7, 8, 9.4, 9.5).
- Non-goal: resignation and draw by agreement (5.1.2, 5.2.3, 9.1). They
  are the players' actions, recorded by whatever shows the game.
- Non-goal: making a draw claim (9.2, 9.3). The engine reports which
  claims are available; the caller decides whether to offer them. The
  ends that happen by themselves (checkmate, stalemate, dead position,
  fivefold repetition, seventy-five moves) are the game's status.
- Non-goal: dead positions beyond material. Recognised: king against king;
  king and one bishop or one knight against king; any number of bishops on
  squares of one colour, on either side, with no other piece but the
  kings. A position dead by its blocked pawn structure reads as ongoing.
- Non-goal: validating that a FEN describes a reachable position (3.10.3).
  Checked: well-formed fields, exactly one king per side, an en passant
  square on the rank the side to move could capture on. Accepted beyond
  that (a side not to move in check, pawns on the first or last rank,
  castling rights without the pieces in place); the engine plays by the
  rules from there, needs king and rook in place to castle whatever the
  rights say, and never captures a king (1.4.1).
- Non-goal: notation other than FEN. Algebraic notation (SAN) and game
  records (PGN) come with the first capability that needs them.

## Design

- **Components**, each importing only from those before it:
  - `position.ts` — the vocabulary: `Color`, `Piece`, `Square`,
    `Placement` (a `ReadonlyMap<Square, Piece>` with empty squares absent,
    the type the board component renders), `Position` (placement, side to
    move, castling rights, en passant square, the two FEN clocks) and
    square geometry.
  - `fen.ts` — Forsyth-Edwards Notation in and out.
  - `attacks.ts` — which squares a side attacks; check.
  - `apply.ts` — `Move` (`from`, `to` and, for a pawn reaching the last
    rank, `promotion`) and the position after making one.
  - `pseudoMoves.ts` — where each piece may go (Articles 3.1 to 3.8,
    castling conditions included) before the king-safety test.
  - `moves.ts` — the legal moves and the validation of a proposed move.
  - `game.ts` — `Game`, every position from the start to now with the
    moves between them; status and claims.
- **Data flow**: a caller holds a `Position` or a `Game`. `legalMoves`
  takes the candidates from `pseudoMoves`, applies each with `applyMove`
  and keeps it when the mover's own king is not attacked afterwards (3.9).
  `play` validates, applies and appends to the game. `status` asks for
  legal moves and check first, then material, repetitions and the
  halfmove clock. Nothing is mutated; every function returns a new value.
- **Key interfaces**:

| Need                                  | Call                                                        | Module       |
| ------------------------------------- | ----------------------------------------------------------- | ------------ |
| Read or write a position              | `parseFen(fen)`, `toFen(position)`                          | `fen.ts`     |
| The legal moves, all or for one piece | `legalMoves(position, from?)`                               | `moves.ts`   |
| Whether a move is legal, and why not  | `validateMove(position, move)`                              | `moves.ts`   |
| The position after a legal move       | `playMove(position, move)`                                  | `moves.ts`   |
| Check and attacked squares            | `isInCheck(position)`, `isAttacked(placement, square, by)`  | `attacks.ts` |
| A game with history                   | `newGame(fen?)`, `play(game, move)`                         | `game.ts`    |
| How the game stands                   | `status(game)`: ongoing, checkmate with winner, draw with reason | `game.ts` |
| Draws the side to move may claim      | `claimableDraws(game)`                                      | `game.ts`    |
| Repetitions and dead material         | `repetitions(game)`, `isDeadPosition(placement)`            | `game.ts`    |

- **Mechanisms**:
  - *Legality by making the move.* No pin or discovered-check analysis:
    one rule, applied uniformly to every candidate, is what every test and
    perft count exercises.
  - *Castling is generated, not trusted.* The FEN right is necessary; the
    king must also stand on its original square and the rook on its, the
    squares between must be empty, and the king's square, crossing square
    and landing square must be unattacked. An attack on the rook or on a
    square only the rook crosses does not matter (3.8.2.2).
  - *Making a move* (`applyMove`) moves the piece, removes a captured
    piece (the pawn behind the landing square for en passant), moves the
    rook for castling, exchanges the pawn for the promotion piece, drops
    castling rights when a king moves or a rook leaves or loses its
    corner, sets the en passant square after a double pawn step, resets
    the halfmove clock on a pawn move or capture, and counts the full move
    after Black.
  - *Why a move is illegal.* `validateMove` answers `empty-square`,
    `wrong-colour`, `not-a-move` (the piece does not go there, is blocked,
    or the castling is not allowed), `exposes-king`, `promotion-required`
    or `promotion-not-allowed`; `playMove` and `play` throw with that
    reason, and `play` also refuses any move once the game is over.
  - *Repetition* compares positions by a key of placement, side to move,
    castling rights and the en passant square only when a pawn can legally
    capture there (9.2.3). The key is computed from the FEN writer.
  - *Status order*: no legal move decides checkmate or stalemate first, so
    a checkmate on the last move beats the seventy-five-move rule (9.6.2);
    then dead position, fivefold repetition, seventy-five moves. Claimable
    draws are reported only while the game is ongoing.

### Invariants

- The engine agrees with the Laws, article by article. Enforced by: the
  test named after each article — `src/domain/pieces.test.ts` (3.1 to
  3.6, 3.8.1), `src/domain/pawn.test.ts` (3.7),
  `src/domain/castling.test.ts` (3.8.2), `src/domain/check.test.ts`
  (3.1.3, 3.9, 3.10), `src/domain/game.test.ts` (1, 5, 9),
  `src/domain/fen.test.ts` (FEN). A rule found wrong or missing gets its
  test there, under its article, in the same change as the fix.
- Move generation reproduces the reference counts of
  https://www.chessprogramming.org/Perft_Results for all six positions at
  depth 1 and 2, with the depth-2 breakdown into captures, en passant,
  castlings, promotions, checks and checkmates for three of them.
  Enforced by: `src/domain/perft.test.ts`. Depth 3 on all six and depth 4
  on two were run by hand on 2026-10-23 and matched; the file's header
  says how to repeat that after a change to `pseudoMoves.ts`, `apply.ts`
  or `moves.ts`.
- A domain file without a test fails `npm run check`. Enforced by: the
  per-file coverage threshold in `vite.config.ts`.
- Every position the app plays has both kings, and no move ever captures
  one. Enforced by: `src/domain/fen.test.ts` (one king per side required),
  `src/domain/pieces.test.ts` (1.4.1).
- Domain code runs in plain Node with no React and no browser globals.
  Enforced by: the layer rules in `eslint.config.js`.

## Alternatives considered

- **A rules library (chess.js, chessops).** Rejected on 2026-10-23 with
  the maintainer. The rules are the product's subject matter and about 600
  lines; a library would still need a wrapper to give typed squares and
  immutable data, and its mutable game object fits React state badly. Cost
  accepted: algebraic notation and PGN are written here when needed.
- **Bitboards, 0x88 or a mailbox array.** Faster, but the app never
  searches; see Cross-cutting concerns for what the Map placement costs.
- **Pin-aware legality without making the move.** Fewer allocations, far
  more code paths; the make-and-test rule is correct by construction.
- **A mutable `Game` class** like chess.js. Rejected with the maintainer
  on 2026-10-23: pure functions over plain data fit the layer and React.
- **Claimable draws ending the game**, as online servers do. Rejected with
  the maintainer on 2026-10-23: the engine follows the Laws and reports
  the claims; whoever shows the game decides what to do with them.
- **Algebraic notation now.** Deferred with the maintainer on 2026-10-23
  until the opening explorer's content format is specified.

## Cross-cutting concerns

- Performance: perft 4 of the initial position (197 281 positions) takes
  0.7 s and the domain tests about 0.3 s, measured 2026-10-23. Enough for
  an app that never searches; a search would be a new design.
- Security, privacy, operability: nothing to decide. Pure functions, no
  input but the caller's data, no I/O, no storage.

## Amendments

- 2026-10-23: the product spec written with the engine the same day
  (chess-rules, under product-specs) is folded into this doc as Goals and
  non-goals, and removed. It paraphrased the Laws, which are the single
  source, and split the engine's scope from its design; one doc per
  concern, as `docs/localization.md` (maintainer's call).
