/// <reference types="node" />
// The authored content on disk: src/content/lines/<id>.json holds a module's
// chess data, <id>.en.json and <id>.de.json its prose, one module per subtree
// of the book, <id> its root's line without move numbers ("root", "e4",
// "e4-e5"; docs/localization.md, Opening content). Read by openings.ts for the
// tests, by scripts/content/serve.mjs when the app is built, and by the
// content tools; never by the app, which fetches the served form (loader.ts).
// Hence node:fs, and hence the rule that src/ui and src/app do not import this
// file (eslint.config.js, no-restricted-imports). Each file is parsed at this
// boundary, so a wrong shape names its file and field instead of failing
// somewhere inside the book.

import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SUPPORTED_LANGUAGES, type Language } from "../i18n/language.ts";
import type { LineTexts, MoveData, OpeningModule, OpeningTexts, PositionData } from "./book.ts";

// Beside this file. fileURLToPath gets the string, not a URL object: under
// Vitest's jsdom environment `URL` is jsdom's, which Node refuses (found 2026-10-24).
export const LINES_DIR = `${path.join(path.dirname(fileURLToPath(import.meta.url)), "lines")}/`;

/** The id of the module rooted at the line: the line without move numbers, spaces as dashes; "" is "root". */
export function moduleId(line: string): string {
  return line === "" ? "root" : line.replace(/\d+\./g, "").trim().replace(/\s+/g, "-");
}

/** The path of a module's data file, or of its prose file in the language. */
export function moduleFile(id: string, language?: Language, dir: string = LINES_DIR): string {
  return `${dir}${language === undefined ? id : `${id}.${language}`}.json`;
}

/** Every module in the folder, in the order of their ids. A prose file without its data file is refused. */
export function readModules(dir: string = LINES_DIR): OpeningModule[] {
  const files = readdirSync(dir).filter((file) => file.endsWith(".json"));
  const ids = files
    .filter((file) => !/\.\w+\.json$/.test(file))
    .map((file) => file.slice(0, -".json".length))
    .sort();
  for (const file of files) {
    const stem = file.replace(/(\.\w+)?\.json$/, "");
    if (!ids.includes(stem)) {
      throw new Error(`${file} has no data file ${stem}.json beside it; every prose file belongs to a module`);
    }
  }
  return ids.map((id) => {
    const texts = Object.fromEntries(
      SUPPORTED_LANGUAGES.map((language) => [language, readJson(moduleFile(id, language, dir), true)]),
    ) as Record<Language, unknown>;
    return parseModule(id, readJson(moduleFile(id, undefined, dir), false), texts);
  });
}

/** The file parsed, or {} for a prose file that does not exist (a language may lag). */
function readJson(file: string, optional: boolean): unknown {
  let text: string;
  try {
    text = readFileSync(file, "utf8");
  } catch (error) {
    if (optional && (error as NodeJS.ErrnoException).code === "ENOENT") return {};
    throw error;
  }
  try {
    return JSON.parse(text) as unknown;
  } catch (error) {
    throw new Error(`${file} is not valid JSON: ${(error as Error).message}`, { cause: error });
  }
}

const RATINGS: readonly unknown[] = [1, 2, 3, 4, 5];

/**
 * The module's files as the book's types, or an error naming the file and
 * the field. `data` is the data file ({ about?, positions }), `texts` each
 * language's prose file ({ "<line>": { name?, background?, strategy? } }).
 */
export function parseModule(id: string, data: unknown, texts: Readonly<Record<Language, unknown>>): OpeningModule {
  const file = `${id}.json`;
  const top = record(data, file, "");
  allowKeys(top, ["about", "positions"], file, "");
  if (top.about !== undefined && typeof top.about !== "string") {
    throw new Error(`${file}: "about" must be a string`);
  }
  const positions = list(top.positions, file, "positions").map((entry, index) =>
    parsePosition(entry, file, `positions[${index}]`),
  );
  const parsedTexts = Object.fromEntries(
    SUPPORTED_LANGUAGES.map((language) => [language, parseTexts(texts[language], `${id}.${language}.json`)]),
  ) as Record<Language, OpeningTexts>;
  return { id, positions, texts: parsedTexts };
}

function parsePosition(value: unknown, file: string, at: string): PositionData {
  const entry = record(value, file, at);
  allowKeys(entry, ["line", "sources", "moves"], file, at);
  const line = string(entry.line, file, `${at}.line`);
  const position: { line: string; sources?: string[]; moves?: MoveData[] } = { line };
  if (entry.sources !== undefined) {
    position.sources = list(entry.sources, file, `${at}.sources`).map((source, index) =>
      string(source, file, `${at}.sources[${index}]`),
    );
  }
  if (entry.moves !== undefined) {
    position.moves = list(entry.moves, file, `${at}.moves`).map((move, index) =>
      parseMove(move, file, `${at}.moves[${index}]`),
    );
  }
  return position;
}

function parseMove(value: unknown, file: string, at: string): MoveData {
  const move = record(value, file, at);
  allowKeys(move, ["san", "rating"], file, at);
  if (!RATINGS.includes(move.rating)) {
    throw new Error(`${file}: ${at}.rating must be 1 to 5, found ${JSON.stringify(move.rating)}`);
  }
  return { san: string(move.san, file, `${at}.san`), rating: move.rating as MoveData["rating"] };
}

function parseTexts(value: unknown, file: string): OpeningTexts {
  const texts = record(value, file, "");
  const parsed: Record<string, LineTexts> = {};
  for (const [line, entry] of Object.entries(texts)) {
    const fields = record(entry, file, JSON.stringify(line));
    allowKeys(fields, ["name", "background", "strategy"], file, JSON.stringify(line));
    const text: { name?: string; background?: string; strategy?: string } = {};
    for (const field of ["name", "background", "strategy"] as const) {
      if (fields[field] !== undefined) text[field] = string(fields[field], file, `${JSON.stringify(line)}.${field}`);
    }
    parsed[line] = text;
  }
  return parsed;
}

function record(value: unknown, file: string, at: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`${file}: ${at === "" ? "the file" : at} must be an object`);
  }
  return value as Record<string, unknown>;
}

function list(value: unknown, file: string, at: string): unknown[] {
  if (!Array.isArray(value)) throw new Error(`${file}: ${at} must be a list`);
  return value;
}

function string(value: unknown, file: string, at: string): string {
  if (typeof value !== "string") throw new Error(`${file}: ${at} must be a string`);
  return value;
}

function allowKeys(value: Record<string, unknown>, allowed: readonly string[], file: string, at: string): void {
  for (const key of Object.keys(value)) {
    if (!allowed.includes(key)) {
      throw new Error(
        `${file}: ${at === "" ? "the file" : at} has an unknown field "${key}"; the fields are ${allowed.join(", ")}`,
      );
    }
  }
}
