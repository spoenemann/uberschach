# Chess rules

What counts as a legal move and how a game ends, as the app decides it. The
source is the FIDE Laws of Chess in force since 1 January 2023
(https://handbook.fide.com/chapter/E012023, read 2026-10-23); each promise
names its article, and the tests in `src/domain/` carry the same numbers in
their names, one or more tests per promise.

## Intent

Every capability that shows a position, replays an opening or lets the
visitor try a move asks one engine what is legal and whether the game is
over, so a move is legal in the app exactly when it is legal over the board.
The engine decides rules; it does not play, judge or explain moves.

## Promises

### Positions

- A position is read from and written to Forsyth-Edwards Notation (FEN),
  all six fields; missing trailing fields take the values of a game start.
- A FEN is rejected when a field is malformed, when a side does not have
  exactly one king, or when the en passant square is not on the rank the
  side to move could capture on.

### Moves of the pieces (Article 3)

- 3.1: no piece moves to a square occupied by a piece of its own colour;
  moving to a square occupied by an opponent's piece captures it (3.1.1).
- 3.1.2, 3.1.3: a piece attacks a square if it could capture there, even when
  moving there would leave or place its own king in check.
- 3.2 to 3.5: the bishop moves along its diagonals, the rook along its file
  and rank, the queen along both; none of them moves over a piece.
- 3.6: the knight moves to the nearest squares not on its rank, file or
  diagonal, over anything in between.
- 3.7: a pawn moves one square forward onto an empty square; two squares
  from its starting rank when both are empty; captures one square
  diagonally forward; captures en passant a pawn that has just advanced two
  squares past it, on the very next move only (3.7.3.1, 3.7.3.2); on
  reaching the last rank it becomes a queen, rook, bishop or knight of the
  player's choice, as part of the same move and with immediate effect,
  whether or not such a piece was captured before (3.7.3.3 to 3.7.3.5).
- 3.8.1: the king moves one square in any direction.
- 3.8.2: castling moves the king two squares towards a rook on its original
  square and that rook to the square the king crossed. It is no longer
  possible once the king has moved or with a rook that has moved (3.8.2.1),
  and not possible for now while the king is in check, while the square it
  crosses or lands on is attacked, or while any piece stands between king
  and rook (3.8.2.2). An attack on the rook or on a square only the rook
  crosses does not matter.
- 3.9: a king is in check when attacked, even by a piece that could not
  legally move there; no move may leave or place the mover's own king in
  check.
- 1.4.1: the opponent's king is never captured, whatever position a FEN
  describes.
- 3.10: the engine says of any proposed move whether it is legal and, if
  not, why: no piece on the square, the opponent's piece, a square the piece
  cannot reach, a move exposing the own king, a missing or superfluous
  promotion piece.

### How a game ends (Articles 1, 5, 9)

- 1.2: White moves first; then the players alternate.
- 1.4, 5.1.1: checkmate ends the game, won by the player who gave it.
- 5.2.1: stalemate ends the game as a draw.
- 1.5, 5.2.2: a dead position ends the game as a draw. Recognised as such:
  king against king; king and one bishop or one knight against king; and
  any number of bishops on squares of one colour, on either side, with no
  other piece but the kings.
- 9.6.1: the fifth appearance of the same position ends the game as a draw.
- 9.6.2: seventy-five moves by each player without a pawn move or a capture
  end the game as a draw, unless the last move gave checkmate.
- 9.2, 9.3: after the third appearance of the same position, or fifty moves
  by each player without a pawn move or a capture, a draw may be claimed.
  The engine reports which claims are available; it does not make them.
- 9.2.3: positions are the same when the same side has the move, the same
  pieces stand on the same squares, the same castling rights exist, and a
  pawn can be captured en passant in both or in neither.
- Once a game has ended, no further move is accepted.

## Non-promises

- No chess variant: no Chess960, no odds games.
- No clocks or time controls (Article 6), no touch-move or other conduct
  rules (Articles 4, 11, 12), no arbiter procedures (Articles 7, 8, 9.4,
  9.5).
- Resignation and draw by agreement (5.1.2, 5.2.3, 9.1) are the players'
  actions, recorded by whatever shows the game, not decided by the engine.
- A dead position is recognised by material only. A position that is dead
  because of a blocked pawn structure is reported as ongoing.
- A FEN that describes an unreachable position (3.10.3) is accepted beyond
  the checks listed above: a side not to move in check, pawns on the first
  or last rank, castling rights without the king or rook in place. The
  engine then plays by the rules from there; castling needs the king and
  rook on their squares regardless of the rights.
- No notation besides FEN. Algebraic notation (SAN) and game records (PGN)
  come with the first capability that needs them.
