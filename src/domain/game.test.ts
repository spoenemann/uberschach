// The game and its end: FIDE 1.2, 1.4, 5.1, 5.2 and 9.
import { describe, expect, test } from "vitest";
import { toFen } from "./fen.ts";
import {
  claimableDraws,
  isDeadPosition,
  newGame,
  play,
  repetitions,
  status,
  type Game,
} from "./game.ts";
import { legalMoves, type Move } from "./moves.ts";
import { parsePlacement } from "./position.ts";

function playAll(game: Game, moves: readonly Move[]): Game {
  return moves.reduce(play, game);
}

/** Both kings step aside and back: four moves that return to the position. */
const KING_SHUFFLE: readonly Move[] = [
  { from: "e1", to: "d1" },
  { from: "e8", to: "d8" },
  { from: "d1", to: "e1" },
  { from: "d8", to: "e8" },
];

describe("a game", () => {
  test("1.2: starts with White to move, then the players alternate", () => {
    const game = newGame();
    expect(game.position.turn).toBe("white");
    expect(game.positions).toHaveLength(1);
    expect(game.moves).toEqual([]);
    const next = play(game, { from: "e2", to: "e4" });
    expect(next.position.turn).toBe("black");
    expect(next.positions).toHaveLength(2);
    expect(next.moves).toEqual([{ from: "e2", to: "e4" }]);
    expect(toFen(next.position)).toBe("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1");
  });

  test("starts from a FEN", () => {
    const game = newGame("4k3/8/8/8/8/8/8/R3K3 b - - 3 7");
    expect(game.position.turn).toBe("black");
    expect(status(game)).toEqual({ kind: "ongoing" });
  });

  test("rejects an illegal move", () => {
    expect(() => play(newGame(), { from: "e2", to: "e5" })).toThrow(/not-a-move/);
  });
});

describe("FIDE 1.4 and 5.1.1: checkmate", () => {
  test("the fool's mate ends the game, won by Black", () => {
    const game = playAll(newGame(), [
      { from: "f2", to: "f3" },
      { from: "e7", to: "e5" },
      { from: "g2", to: "g4" },
      { from: "d8", to: "h4" },
    ]);
    expect(status(game)).toEqual({ kind: "checkmate", winner: "black" });
    expect(legalMoves(game.position)).toEqual([]);
    expect(claimableDraws(game)).toEqual([]);
  });

  test("no move can be played once the game is over", () => {
    const game = newGame("k7/8/1K6/8/8/8/8/7R w - - 0 1");
    const mated = play(game, { from: "h1", to: "h8" });
    expect(status(mated)).toEqual({ kind: "checkmate", winner: "white" });
    expect(() => play(mated, { from: "a8", to: "a7" })).toThrow(/game is over \(checkmate\)/);
  });

  test("a king in check with a legal reply is not mated", () => {
    expect(status(newGame("k7/8/8/8/8/8/8/K6r w - - 0 1"))).toEqual({ kind: "ongoing" });
  });
});

describe("FIDE 5.2.1: stalemate", () => {
  test("no legal move and not in check is a draw", () => {
    expect(status(newGame("7k/5Q2/6K1/8/8/8/8/8 b - - 0 1"))).toEqual({
      kind: "draw",
      reason: "stalemate",
    });
    // Reached by a move: the queen steps to f7.
    const game = play(newGame("7k/8/5QK1/8/8/8/8/8 w - - 0 1"), { from: "f6", to: "f7" });
    expect(status(game)).toEqual({ kind: "draw", reason: "stalemate" });
    expect(() => play(game, { from: "h8", to: "g8" })).toThrow(/game is over \(draw\)/);
  });
});

describe("FIDE 1.5 and 5.2.2: dead position", () => {
  test.each([
    ["king against king", "4k3/8/8/8/8/8/8/4K3"],
    ["king and bishop against king", "4k3/8/8/8/8/8/8/2B1K3"],
    ["king and knight against king", "4k3/8/8/8/8/8/8/1N2K3"],
    ["bishops of one colour on both sides", "2b1k3/8/8/8/8/8/8/4KB2"],
    ["two bishops of one colour against a king", "4k3/8/8/8/8/8/8/B1B1K3"],
  ])("%s is dead", (_name, placement) => {
    expect(isDeadPosition(parsePlacement(placement))).toBe(true);
    expect(status(newGame(`${placement} w - - 0 1`))).toEqual({ kind: "draw", reason: "dead-position" });
  });

  test.each([
    ["a pawn", "4k3/8/8/8/8/8/4P3/4K3"],
    ["a rook", "4k3/8/8/8/8/8/8/R3K3"],
    ["a queen", "4k3/8/8/8/8/8/8/3QK3"],
    ["two knights", "4k3/8/8/8/8/8/8/1N1NK3"],
    ["a knight on each side", "1n2k3/8/8/8/8/8/8/1N2K3"],
    ["a bishop against a knight", "1n2k3/8/8/8/8/8/8/2B1K3"],
    ["bishops of different colours", "2b1k3/8/8/8/8/8/8/2B1K3"],
  ])("%s on the board is not dead", (_name, placement) => {
    expect(isDeadPosition(parsePlacement(placement))).toBe(false);
    expect(status(newGame(`${placement} w - - 0 1`))).toEqual({ kind: "ongoing" });
  });

  test("a capture into a dead position ends the game", () => {
    const game = newGame("4k3/8/8/8/8/8/r7/1K6 w - - 0 1");
    expect(status(game)).toEqual({ kind: "ongoing" });
    const captured = play(game, { from: "b1", to: "a2" });
    expect(status(captured)).toEqual({ kind: "draw", reason: "dead-position" });
    expect(() => play(captured, { from: "e8", to: "e7" })).toThrow(/game is over/);
  });
});

describe("FIDE 9.2 and 9.6.1: repetition", () => {
  const fen = "r3k2r/8/8/8/8/8/8/R3K2R w - - 0 1";

  test("counts how often the current position has appeared, this time included", () => {
    const game = newGame(fen);
    expect(repetitions(game)).toBe(1);
    expect(repetitions(playAll(game, KING_SHUFFLE))).toBe(2);
  });

  test("9.2: the third appearance may be claimed, and the game goes on", () => {
    const twice = playAll(newGame(fen), KING_SHUFFLE);
    expect(claimableDraws(twice)).toEqual([]);
    const thrice = playAll(twice, KING_SHUFFLE);
    expect(repetitions(thrice)).toBe(3);
    expect(claimableDraws(thrice)).toEqual(["threefold-repetition"]);
    expect(status(thrice)).toEqual({ kind: "ongoing" });
  });

  test("9.6.1: the fifth appearance ends the game", () => {
    const four = playAll(newGame(fen), [...KING_SHUFFLE, ...KING_SHUFFLE, ...KING_SHUFFLE]);
    expect(status(four)).toEqual({ kind: "ongoing" });
    const five = playAll(four, KING_SHUFFLE);
    expect(status(five)).toEqual({ kind: "draw", reason: "fivefold-repetition" });
    expect(claimableDraws(five)).toEqual([]);
  });

  test("9.2.3: the same pieces on the same squares with the other side to move is a different position", () => {
    const game = playAll(newGame("r3k3/8/8/8/8/8/8/R3K3 w - - 0 1"), [
      { from: "a1", to: "a2" },
      { from: "a8", to: "a7" },
      { from: "a2", to: "a3" },
      { from: "a7", to: "a8" },
      { from: "a3", to: "a1" },
    ]);
    expect(toFen(game.position)).toBe("r3k3/8/8/8/8/8/8/R3K3 b - - 5 3");
    expect(repetitions(game)).toBe(1);
  });

  test("9.2.3.2: a position with castling rights differs from the same one without", () => {
    const withRights = newGame("r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1");
    const lost = playAll(withRights, KING_SHUFFLE);
    expect(toFen(lost.position)).toBe("r3k2r/8/8/8/8/8/8/R3K2R w - - 4 3");
    expect(repetitions(lost)).toBe(1);
    expect(repetitions(playAll(lost, KING_SHUFFLE))).toBe(2);
  });

  test("9.2.3.1: a position in which a pawn could be captured en passant differs from the same one later", () => {
    const game = playAll(newGame("4k3/8/8/8/3p4/8/4P3/4K3 w - - 0 1"), [
      { from: "e2", to: "e4" },
      { from: "e8", to: "d8" },
      { from: "e1", to: "d1" },
      { from: "d8", to: "e8" },
      { from: "d1", to: "e1" },
    ]);
    expect(toFen(game.position)).toBe("4k3/8/8/8/3pP3/8/8/4K3 b - - 4 3");
    expect(repetitions(game)).toBe(1);
  });

  test("an en passant square no pawn can use does not make the position different", () => {
    const game = playAll(newGame("4k3/8/8/8/8/8/4P3/4K3 w - - 0 1"), [
      { from: "e2", to: "e4" },
      { from: "e8", to: "d8" },
      { from: "e1", to: "d1" },
      { from: "d8", to: "e8" },
      { from: "d1", to: "e1" },
    ]);
    expect(repetitions(game)).toBe(2);
  });
});

describe("FIDE 9.3 and 9.6.2: moves without a pawn move or capture", () => {
  test("9.3: after fifty such moves by each player the draw may be claimed", () => {
    const game = newGame("4k3/8/8/8/8/8/8/R3K3 w - - 99 60");
    expect(claimableDraws(game)).toEqual([]);
    const hundred = play(game, { from: "a1", to: "a2" });
    expect(hundred.position.halfmoveClock).toBe(100);
    expect(claimableDraws(hundred)).toEqual(["fifty-moves"]);
    expect(status(hundred)).toEqual({ kind: "ongoing" });
  });

  test("a pawn move or a capture starts the count again", () => {
    const pawn = play(newGame("4k3/8/8/8/8/8/4P3/R3K3 w - - 99 60"), { from: "e2", to: "e3" });
    expect(claimableDraws(pawn)).toEqual([]);
    const capture = play(newGame("r3k3/8/8/8/8/8/8/R3K3 w - - 99 60"), { from: "a1", to: "a8" });
    expect(claimableDraws(capture)).toEqual([]);
  });

  test("9.6.2: after seventy-five such moves by each player the game is drawn", () => {
    const game = play(newGame("k7/8/1K6/8/8/8/8/7R w - - 149 100"), { from: "h1", to: "h2" });
    expect(game.position.halfmoveClock).toBe(150);
    expect(status(game)).toEqual({ kind: "draw", reason: "seventy-five-moves" });
  });

  test("9.6.2: a checkmate on the last move takes precedence", () => {
    const game = play(newGame("k7/8/1K6/8/8/8/8/7R w - - 149 100"), { from: "h1", to: "h8" });
    expect(game.position.halfmoveClock).toBe(150);
    expect(status(game)).toEqual({ kind: "checkmate", winner: "white" });
  });

  test("both claims can be available at once", () => {
    const game = playAll(newGame("r3k2r/8/8/8/8/8/8/R3K2R w - - 92 60"), [
      ...KING_SHUFFLE,
      ...KING_SHUFFLE,
    ]);
    expect(claimableDraws(game)).toEqual(["threefold-repetition", "fifty-moves"]);
  });
});
