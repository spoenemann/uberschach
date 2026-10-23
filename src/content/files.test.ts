// The authored files on disk and their parsing at the boundary
// (docs/localization.md, Opening content): every module read with its id, a
// wrong shape refused with its file and field named.
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, test } from "vitest";
import { LINES_DIR, moduleFile, moduleId, parseModule, readModules } from "./files.ts";

/** A folder with the given files, each a JSON value or raw text. */
function folder(files: Record<string, unknown>): string {
  const dir = `${mkdtempSync(path.join(tmpdir(), "uberschach-lines-"))}/`;
  for (const [name, value] of Object.entries(files)) {
    writeFileSync(`${dir}${name}`, typeof value === "string" ? value : JSON.stringify(value));
  }
  return dir;
}

const ROOT = { positions: [{ line: "", moves: [{ san: "e4", rating: 5 }] }, { line: "1.e4" }] };

describe("readModules", () => {
  test("reads every module in src/content/lines/ with its id, its data and its prose, in file order", () => {
    const modules = readModules();
    const ids = modules.map((module) => module.id);
    expect(ids).toContain("root");
    expect(ids).toContain("e4-e5");
    expect(ids).toEqual([...ids].sort());
    expect(new Set(ids).size).toBe(ids.length);
    for (const module of modules) {
      expect(module.positions.length, `positions of ${module.id}`).toBeGreaterThan(0);
      expect(Object.keys(module.texts.en).length, `English of ${module.id}`).toBeGreaterThan(0);
    }
    expect(LINES_DIR.endsWith("/src/content/lines/")).toBe(true);
  });

  test("a module whose German file is missing has empty German, since a language may lag", () => {
    const dir = folder({ "root.json": ROOT, "root.en.json": { "1.e4": { strategy: "e4" } } });
    const [root] = readModules(dir);
    expect(root?.id).toBe("root");
    expect(root?.texts.en["1.e4"]?.strategy).toBe("e4");
    expect(root?.texts.de).toEqual({});
  });

  test("refuses a prose file without its data file", () => {
    const dir = folder({ "e4.en.json": {} });
    expect(() => readModules(dir)).toThrow("e4.en.json has no data file e4.json beside it");
  });

  test("names a file that is not JSON", () => {
    const dir = folder({ "root.json": "{ positions: [] }" });
    expect(() => readModules(dir)).toThrow(/root\.json is not valid JSON/);
  });
});

describe("parseModule refuses, naming the file and the field", () => {
  const texts = { en: {}, de: {} };
  const parse = (data: unknown, en: unknown = {}) => () => parseModule("e4", data, { en, de: {} });

  test("a shape that is not the module's", () => {
    expect(parse([])).toThrow("e4.json: the file must be an object");
    expect(parse({ positions: {} })).toThrow("e4.json: positions must be a list");
    expect(parse({ positions: [], about: 3 })).toThrow('e4.json: "about" must be a string');
    expect(parse({ positions: [], extra: 1 })).toThrow('e4.json: the file has an unknown field "extra"; the fields are about, positions');
  });

  test("a position or a move that is not written as the book reads it", () => {
    expect(parse({ positions: [{ line: 1 }] })).toThrow("e4.json: positions[0].line must be a string");
    expect(parse({ positions: [{ line: "1.e4", sourcs: [] }] })).toThrow(
      'e4.json: positions[0] has an unknown field "sourcs"; the fields are line, sources, moves',
    );
    expect(parse({ positions: [{ line: "1.e4", sources: "x" }] })).toThrow("positions[0].sources must be a list");
    expect(parse({ positions: [{ line: "1.e4", moves: [{ san: "e5", rating: 7 }] }] })).toThrow(
      "e4.json: positions[0].moves[0].rating must be 1 to 5, found 7",
    );
    expect(parse({ positions: [{ line: "1.e4", moves: [{ san: "e5", rating: "5" }] }] })).toThrow(
      'rating must be 1 to 5, found "5"',
    );
    expect(parse({ positions: [{ line: "1.e4", moves: [{ rating: 5 }] }] })).toThrow("positions[0].moves[0].san must be a string");
  });

  test("prose that is not keyed by line with the three fields", () => {
    expect(parse({ positions: [] }, [])).toThrow("e4.en.json: the file must be an object");
    expect(parse({ positions: [] }, { "1.e4": "text" })).toThrow('e4.en.json: "1.e4" must be an object');
    expect(parse({ positions: [] }, { "1.e4": { strategie: "x" } })).toThrow(
      'e4.en.json: "1.e4" has an unknown field "strategie"; the fields are name, background, strategy',
    );
    expect(parse({ positions: [] }, { "1.e4": { name: 1 } })).toThrow('e4.en.json: "1.e4".name must be a string');
  });

  test("but accepts the module's shape and keeps the order of the positions and the keys", () => {
    const module = parseModule("e4", { about: "After 1.e4.", positions: ROOT.positions }, { ...texts, en: { "1.e4": { strategy: "e4" } } });
    expect(module.id).toBe("e4");
    expect(module.positions.map((position) => position.line)).toEqual(["", "1.e4"]);
    expect(module.positions[0]?.moves).toEqual([{ san: "e4", rating: 5 }]);
    expect(module.texts).toEqual({ en: { "1.e4": { strategy: "e4" } }, de: {} });
  });
});

describe("moduleId and moduleFile", () => {
  test("the id is the line without move numbers, and the initial position is root", () => {
    expect(moduleId("")).toBe("root");
    expect(moduleId("1.e4")).toBe("e4");
    expect(moduleId("1.e4 e5 2.Nf3 Nc6")).toBe("e4-e5-Nf3-Nc6");
  });

  test("the files are <id>.json and <id>.<language>.json under lines/", () => {
    expect(moduleFile("e4-e5")).toBe(`${LINES_DIR}e4-e5.json`);
    expect(moduleFile("e4-e5", "de")).toBe(`${LINES_DIR}e4-e5.de.json`);
    expect(moduleFile("root", "en", "/elsewhere/")).toBe("/elsewhere/root.en.json");
  });
});
