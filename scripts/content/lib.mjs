// Shared by the content tools: the rules engine, and the content modules read as data.
// Node runs the TypeScript sources directly (type stripping), so nothing is built first.
import path from "node:path";
import { pathToFileURL } from "node:url";

export const REPO = path.resolve(import.meta.dirname, "../..");

const domain = (name) => import(pathToFileURL(`${REPO}/src/domain/${name}.ts`).href);
export const { newGame, positionKey } = await domain("game");
export const { playLine } = await domain("line");
export const { legalMoves } = await domain("moves");
export const { parseSan, toSan } = await domain("san");
export const { applyMove } = await domain("apply");
const content = (name) => import(pathToFileURL(`${REPO}/src/content/${name}.ts`).href);
const files = await content("files");
export const { NAMED_LINE_PLIES, britishName, namedBook, readNamedLines } = await content("named");

/** The book built from the modules on disk, with every check, keyed by position. */
export async function loadBook() {
  return (await content("book")).buildBook(files.readModules());
}

/** The position after the line, played once per line and kept: for tools that visit thousands. */
const positions = new Map();
export function positionAt(line) {
  if (positions.has(line)) return positions.get(line);
  const cut = line.lastIndexOf(" ");
  const before = line === "" ? null : positionAt(line.slice(0, Math.max(cut, 0)));
  if (before === null) return positions.set(line, newGame().position).get(line);
  const san = line.slice(cut + 1).replace(/^\d+\.+/, "");
  const parsed = parseSan(before, san, "en");
  if (!parsed.ok) throw new Error(`Line "${line}" fails at ${san}: ${parsed.reason}`);
  return positions.set(line, applyMove(before, parsed.move)).get(line);
}

export function gameAt(line) {
  const { game, failure } = playLine(newGame(), line, "en");
  if (failure) throw new Error(`Line "${line}" fails at ${failure.text}: ${failure.reason}`);
  return game;
}

/** The key of the move played from the position at `line`, as the prose files write it. */
export function keyOf(line, san) {
  const plies = line === "" ? 0 : line.split(" ").filter((t) => !/^\d+\.$/.test(t)).length;
  const prefix = plies % 2 === 0 ? `${plies / 2 + 1}.` : "";
  return (line === "" ? "" : `${line} `) + prefix + san;
}

/** A short file-safe id for a position's line, and of the module rooted there: "" is "root". */
export const idOf = files.moduleId;

/** The path of a module's data file (no language) or prose file: src/content/lines/<id>[.<lang>].json. */
export const fileOf = files.moduleFile;

/** The working folder of an output file: <work>/out/<id>.<kind>.json. */
export function workOf(file) {
  return path.dirname(path.dirname(path.resolve(file)));
}

/** Every module, parsed from src/content/lines/: its id, its positions and its prose per language. */
export function loadModules() {
  return files.readModules();
}

/** The followed positions (those with moves), module by module, each with its module. */
export function followedPositions() {
  const modules = loadModules();
  const positions = [];
  for (const m of modules) {
    for (const p of m.positions) if (p.moves?.length) positions.push({ ...p, module: m });
  }
  return { modules, positions };
}
