// Lines of moves with move numbers, written from a game and read into one
// through the rules engine (docs/design-docs/chess-notation.md).
import { describe, expect, test } from "vitest";
import { toFen } from "./fen.ts";
import { newGame, play, status, type Game } from "./game.ts";
import { formatLine, numberedSan, playLine, playSan } from "./line.ts";
import type { Move } from "./moves.ts";
import type { NotationLanguage } from "./san.ts";

const RUY_LOPEZ = "1.e4 e5 2.Nf3 Nc6 3.Bb5 a6";
const RUY_LOPEZ_FEN = "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4";
const FOOLS_MATE = "1.f3 e5 2.g4 Qh4#";
/** Morphy against the Duke of Brunswick and Count Isouard, Paris 1858. */
const OPERA_GAME =
  "1.e4 e5 2.Nf3 d6 3.d4 Bg4 4.dxe5 Bxf3 5.Qxf3 dxe5 6.Bc4 Nf6 7.Qb3 Qe7 8.Nc3 c6 " +
  "9.Bg5 b5 10.Nxb5 cxb5 11.Bxb5+ Nbd7 12.O-O-O Rd8 13.Rxd7 Rxd7 14.Rd1 Qe6 " +
  "15.Bxd7+ Nxd7 16.Qb8+ Nxb8 17.Rd8#";
/** After 1.e4, Black to move. */
const AFTER_E4 = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1";
/** Perft position 5: White to move at move 8, able to castle. */
const MOVE_8 = "rnbq1k1r/pp1Pbppp/2p5/8/2B5/8/PPP1NnPP/RNBQK2R w KQ - 1 8";

const E4: Move = { from: "e2", to: "e4" };
const E5: Move = { from: "e7", to: "e5" };
const NF3: Move = { from: "g1", to: "f3" };

/** The game after the line, which must read to the end. */
function line(text: string, language: NotationLanguage = "en", game: Game = newGame()): Game {
  const result = playLine(game, text, language);
  expect(result.failure).toBeNull();
  return result.game;
}

describe("numberedSan", () => {
  test("numbers White's move with a dot and Black's with three", () => {
    const game = newGame();
    expect(numberedSan(game.position, E4, "en")).toBe("1.e4");
    expect(numberedSan(play(game, E4).position, E5, "en")).toBe("1...e5");
  });

  test("uses the position's move number and the language's letters", () => {
    const game = line("1.e4 e5 2.Nf3 Nc6");
    expect(numberedSan(game.position, { from: "f1", to: "b5" }, "en")).toBe("3.Bb5");
    expect(numberedSan(game.position, { from: "f1", to: "b5" }, "de")).toBe("3.Lb5");
    const next = play(game, { from: "f1", to: "b5" });
    expect(numberedSan(next.position, { from: "a7", to: "a6" }, "en")).toBe("3...a6");
  });
});

describe("formatLine", () => {
  test("writes the moves with move numbers in the language", () => {
    const game = line(RUY_LOPEZ);
    expect(formatLine(game, "en")).toBe(RUY_LOPEZ);
    expect(formatLine(game, "de")).toBe("1.e4 e5 2.Sf3 Sc6 3.Lb5 a6");
  });

  test("is empty for a game without moves", () => {
    expect(formatLine(newGame(), "en")).toBe("");
  });

  test("starts with Black's number when the game starts with Black to move", () => {
    const game = line("1...e5 2.Nf3", "en", newGame(AFTER_E4));
    expect(formatLine(game, "en")).toBe("1...e5 2.Nf3");
  });

  test("counts from the start position's move number", () => {
    const game = line("8.O-O Nxd1", "en", newGame(MOVE_8));
    expect(formatLine(game, "en")).toBe("8.O-O Nxd1");
  });

  test("throws for a game whose positions do not match its moves", () => {
    const broken: Game = { ...newGame(), moves: [E4, E5] };
    expect(() => formatLine(broken, "en")).toThrow(/1 positions for 2 moves/);
  });
});

describe("playSan", () => {
  test("plays the move the text names", () => {
    const game = playSan(newGame(), "e4", "en");
    expect(game.moves).toEqual([E4]);
    expect(playSan(game, "e5", "en").moves).toEqual([E4, E5]);
    expect(playSan(game, "e5", "de").moves).toEqual([E4, E5]);
  });

  test("throws with the reason", () => {
    expect(() => playSan(newGame(), "e5", "en")).toThrow(/Cannot play "e5": no-such-move/);
    expect(() => playSan(newGame(), "Sf3", "en")).toThrow(/Cannot play "Sf3": malformed/);
  });
});

describe("playLine", () => {
  test("reads a line with glued move numbers", () => {
    const { game, failure } = playLine(newGame(), RUY_LOPEZ, "en");
    expect(failure).toBeNull();
    expect(game.moves).toHaveLength(6);
    expect(game.positions).toHaveLength(7);
    expect(toFen(game.position)).toBe(RUY_LOPEZ_FEN);
  });

  test("accepts move numbers on their own, missing, with an ellipsis, or on new lines", () => {
    for (const text of [
      "1. e4 e5 2. Nf3",
      "e4 e5 Nf3",
      "1.e4 1...e5 2.Nf3",
      "1.e4 1…e5 2.Nf3",
      "1.e4\n  e5\n2.Nf3\n",
    ]) {
      expect(playLine(newGame(), text, "en"), JSON.stringify(text)).toEqual({
        game: line("1.e4 e5 2.Nf3"),
        failure: null,
      });
    }
  });

  test("reads the language's letters", () => {
    const german = line("1.e4 e5 2.Sf3 Sc6 3.Lb5 a6", "de");
    expect(toFen(german.position)).toBe(RUY_LOPEZ_FEN);
    expect(playLine(newGame(), RUY_LOPEZ, "de").failure).toEqual({
      text: "2.Nf3",
      index: 2,
      reason: "malformed",
    });
  });

  test("an empty line changes nothing", () => {
    expect(playLine(newGame(), "", "en")).toEqual({ game: newGame(), failure: null });
    expect(playLine(newGame(), " \n ", "en")).toEqual({ game: newGame(), failure: null });
  });

  test("stops at the first move it cannot play and keeps the legal prefix", () => {
    const { game, failure } = playLine(newGame(), "1.e4 e5 2.Nf6 Nc6", "en");
    expect(failure).toEqual({ text: "2.Nf6", index: 2, reason: "no-such-move" });
    expect(game.moves).toEqual([E4, E5]);
    expect(playLine(newGame(), "1.e4 hello e5", "en").failure).toEqual({
      text: "hello",
      index: 1,
      reason: "malformed",
    });
    const knights = newGame("4k3/8/8/8/8/5N2/8/1N2K3 w - - 0 1");
    expect(playLine(knights, "Nd2 Kd8", "en")).toEqual({
      game: knights,
      failure: { text: "Nd2", index: 0, reason: "ambiguous" },
    });
  });

  test("stops when the game is over", () => {
    const { game, failure } = playLine(newGame(), `${FOOLS_MATE} 3.Kf2`, "en");
    expect(failure).toEqual({ text: "3.Kf2", index: 4, reason: "game-over" });
    expect(game.moves).toHaveLength(4);
  });

  test("writes back what it read", () => {
    for (const text of [RUY_LOPEZ, FOOLS_MATE, OPERA_GAME, `${RUY_LOPEZ} 4.Bxc6 dxc6 5.O-O`]) {
      expect(formatLine(line(text), "en")).toBe(text);
    }
    expect(status(line(OPERA_GAME))).toEqual({ kind: "checkmate", winner: "white" });
    expect(formatLine(line("1.e4 e5 2.Sf3 Sc6 3.Lb5", "de"), "de")).toBe("1.e4 e5 2.Sf3 Sc6 3.Lb5");
  });

  test("continues a game that has moves", () => {
    const game = line("2.Nf3 Nc6", "en", line("1.e4 e5"));
    expect(game.moves).toEqual([E4, E5, NF3, { from: "b8", to: "c6" }]);
  });
});
