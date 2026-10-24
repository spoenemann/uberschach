// The named lines (src/content/named.ts): the dataset's rows read, its names in
// the book's spelling, and what the lines play and name, cut at a length.
import { describe, expect, test } from "vitest";
import { newGame, positionKey } from "../domain/game.ts";
import { playLine } from "../domain/line.ts";
import { britishName, namedBook, parseNamedLines, readNamedLines } from "./named.ts";

const keyAfter = (line: string) => positionKey(playLine(newGame(), line, "en").game.position);

const TSV = [
  "eco\tname\tpgn",
  "C20\tKing's Pawn Game\t1. e4 e5",
  "C40\tKing's Knight Opening\t1. e4 e5 2. Nf3",
  "C44\tKing's Pawn Game: Tayler Opening\t1. e4 e5 2. Nf3 Nc6 3. Be2",
  "B20\tSicilian Defense\t1. e4 c5",
].join("\n");

describe("parseNamedLines", () => {
  test("reads eco, name and the moves without their numbers, under a header", () => {
    expect(parseNamedLines(TSV, "c.tsv")[2]).toEqual({
      eco: "C44",
      name: "King's Pawn Game: Tayler Opening",
      moves: ["e4", "e5", "Nf3", "Nc6", "Be2"],
    });
  });

  test("refuses a row without its three fields, naming file and row", () => {
    expect(() => parseNamedLines("eco\tname\tpgn\nC20\tKing's Pawn Game", "c.tsv")).toThrow("c.tsv, row 2");
  });
});

describe("britishName", () => {
  test("writes Defence and Centre", () => {
    expect(britishName("Center Game: Defense")).toBe("Centre Game: Defence");
  });
});

describe("namedBook", () => {
  const lines = parseNamedLines(TSV, "c.tsv");

  test("collects the moves played from each position, once per move", () => {
    const { moves } = namedBook(lines, 10);
    expect([...(moves.get(keyAfter("")) ?? [])]).toEqual(["e4"]);
    expect([...(moves.get(keyAfter("1.e4")) ?? [])]).toEqual(["e5", "c5"]);
  });

  test("names the position each line ends at, in British spelling", () => {
    const { names } = namedBook(lines, 10);
    expect(names.get(keyAfter("1.e4 c5"))?.name).toBe("Sicilian Defence");
    expect(names.get(keyAfter("1.e4 e5 2.Nf3"))?.eco).toBe("C40");
  });

  test("cuts every line at the length, and gives no name to a line longer than it", () => {
    const { moves, names } = namedBook(lines, 3);
    expect(moves.has(keyAfter("1.e4 e5 2.Nf3"))).toBe(false);
    expect(names.has(keyAfter("1.e4 e5 2.Nf3 Nc6 3.Be2"))).toBe(false);
    expect(names.get(keyAfter("1.e4 e5 2.Nf3"))?.name).toBe("King's Knight Opening");
  });

  test("writes the moves as the book does, whatever the dataset's spelling", () => {
    const { moves } = namedBook([{ eco: "C60", name: "Ruy Lopez", moves: ["e4", "e5", "Nf3", "Nc6", "Bb5"] }], 10);
    expect([...(moves.get(keyAfter("1.e4 e5 2.Nf3 Nc6")) ?? [])]).toEqual(["Bb5"]);
  });

  test("refuses a move that cannot be played, naming the line", () => {
    expect(() => namedBook([{ eco: "A00", name: "Nonsense", moves: ["e4", "e4"] }], 10)).toThrow('"e4 e4"');
  });

  test("refuses two names for one position", () => {
    const twice = [...lines, { eco: "B20", name: "Another Name", moves: ["e4", "c5"] }];
    expect(() => namedBook(twice, 10)).toThrow("names a position once");
  });
});

describe("the dataset in src/content/named/", () => {
  test("plays every line and names every position once", () => {
    const lines = readNamedLines();
    expect(lines.length).toBeGreaterThan(3000);
    expect(() => namedBook(lines, Infinity)).not.toThrow();
  });
});
