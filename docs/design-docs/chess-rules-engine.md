# Chess rules engine

Verified 2026-10-23.

How `src/domain/` delivers the promises of `docs/product-specs/chess-rules.md`:
pure TypeScript over immutable plain data, no dependency, verified by rule
tests and reference move counts.

## Entry points

| Need                                  | Call                                             | Module         |
| ------------------------------------- | ------------------------------------------------ | -------------- |
| Read or write a position              | `parseFen(fen)`, `toFen(position)`               | `fen.ts`       |
| The legal moves, all or for one piece | `legalMoves(position, from?)`                    | `moves.ts`     |
| Whether a move is legal, and why not  | `validateMove(position, move)`                   | `moves.ts`     |
| The position after a legal move       | `playMove(position, move)`                       | `moves.ts`     |
| Check and attacked squares            | `isInCheck(position)`, `isAttacked(placement, square, by)` | `attacks.ts` |
| A game with history                   | `newGame(fen?)`, `play(game, move)`              | `game.ts`      |
| How the game stands                   | `status(game)`: ongoing, checkmate with winner, or draw with its reason | `game.ts` |
| Draws the side to move may claim      | `claimableDraws(game)`                           | `game.ts`      |
| Repetitions and dead material         | `repetitions(game)`, `isDeadPosition(placement)` | `game.ts`      |

The data types are in `position.ts` (`Square`, `Piece`, `Placement`,
`Position`, `CastlingRights`) and `apply.ts` (`Move`, `PromotionPiece`);
`game.ts` adds `Game`, `GameStatus`, `DrawReason`, `DrawClaim`. A `Move` is
`from`, `to` and, for a pawn reaching the last rank, `promotion`.

## How it is built

- **Plain, immutable data.** A `Placement` is a `ReadonlyMap<Square, Piece>`
  with empty squares absent, the same type the board component renders. A
  `Position` adds side to move, castling rights, en passant square and the
  two FEN clocks. A `Game` is every position from the start plus the moves
  between them. Functions return new values; nothing is mutated, so a
  position can be React state, a Map key or a test fixture.
- **Modules import downward**: `position` ← `fen`, `attacks` ← `apply` ←
  `pseudoMoves` ← `moves` ← `game`. Each stays under the lint size limits
  by holding one concern: vocabulary, notation, attacks, making a move,
  where pieces may go, legality, the game.
- **Legality by making the move.** `pseudoMoves.ts` lists where each piece
  may go given the pieces on the board (Articles 3.1 to 3.8, castling
  conditions included); `moves.ts` applies each candidate and keeps it when
  the mover's own king is not attacked afterwards (3.9). No pin or
  discovered-check analysis: one rule, applied uniformly, is what every
  test and perft count exercises.
- **Castling is generated, not trusted.** The FEN right is necessary; the
  king must also stand on its original square and the rook on its, the
  squares between must be empty, and the king's square, crossing square
  and landing square must be unattacked.
- **Making a move** (`apply.ts`) moves the piece, removes a captured piece
  (the pawn behind the landing square for en passant), moves the rook for
  castling, exchanges the pawn for the promotion piece, drops castling
  rights when a king moves or a rook leaves or loses its corner, sets the
  en passant square after a double pawn step, resets the halfmove clock on
  a pawn move or capture, and counts the full move after Black.
- **Repetition** compares positions by a key of placement, side to move,
  castling rights and the en passant square only when a pawn can legally
  capture there (9.2.3.1). The key is computed from the FEN writer.
- **Status order**: no legal move decides checkmate or stalemate first, so
  a checkmate on the last move beats the seventy-five-move rule (9.6.2);
  then dead position, fivefold repetition, seventy-five moves. Claimable
  draws are reported only while the game is ongoing.

## Invariants

- Every promise in the spec has a test named with its article:
  `pieces.test.ts` (3.1 to 3.6, 3.8.1), `pawn.test.ts` (3.7),
  `castling.test.ts` (3.8.2), `check.test.ts` (3.1.3, 3.9, 3.10),
  `game.test.ts` (1, 5, 9), `fen.test.ts`. Enforced by: the per-file
  coverage threshold in `vite.config.ts` for the existence of tests; the
  spec's article list for their content, read when the spec changes.
- Move generation reproduces the reference counts of
  https://www.chessprogramming.org/Perft_Results for all six positions at
  depth 1 and 2, with the depth-2 breakdown into captures, en passant,
  castlings, promotions, checks and checkmates for three of them. Enforced
  by: `perft.test.ts`. Depth 3 on all six and depth 4 on two were run by
  hand on 2026-10-23 and matched; the file's header says how to repeat
  that after a change to `pseudoMoves.ts`, `apply.ts` or `moves.ts`.
- The engine never captures a king and never needs one: `findKing` may
  return undefined for an arbitrary placement, and `parseFen` requires
  exactly one king per side so that every position the app plays has
  them. Enforced by: `fen.test.ts`, `pieces.test.ts`.
- Domain code runs in plain Node with no React and no browser globals.
  Enforced by: the layer rules in `eslint.config.js`.

## Alternatives rejected

- **A rules library (chess.js, chessops).** Rejected on 2026-10-23 with
  the maintainer. The rules are the product's subject matter and about 600
  lines; a library would still need a wrapper to give typed squares and
  immutable data, and its mutable game object fits React state badly. Cost
  accepted: algebraic notation and PGN are written here when needed.
- **Bitboards, 0x88 or a mailbox array.** Faster, but the app never
  searches. With the Map placement, perft 4 of the initial position takes
  0.7 s and the whole suite well under a second.
- **Pin-aware legality without making the move.** Fewer allocations, far
  more code paths; the make-and-test rule is correct by construction.
- **A mutable `Game` class** like chess.js. Rejected with the maintainer
  on 2026-10-23: pure functions over plain data fit the layer and React.
- **Claimable draws ending the game**, as online servers do. Rejected with
  the maintainer on 2026-10-23: the engine follows the Laws and reports
  the claims; whoever shows the game decides what to do with them.
- **Algebraic notation now.** Deferred with the maintainer on 2026-10-23
  until the opening explorer's content format is specified.
