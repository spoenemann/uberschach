// Shared by the content tools: the rules engine, and the content modules read as data.
// Node runs the TypeScript sources directly (type stripping), so nothing is built first.
import { readdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const REPO = path.resolve(import.meta.dirname, "../..");

const domain = (name) => import(pathToFileURL(`${REPO}/src/domain/${name}.ts`).href);
export const { newGame } = await domain("game");
export const { playLine } = await domain("line");
export const { legalMoves } = await domain("moves");
export const { toSan } = await domain("san");

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

/** A short file-safe id for a position's line: "" is "root". */
export function idOf(line) {
  return line === "" ? "root" : line.replace(/\d+\./g, "").trim().replace(/\s+/g, "-");
}

/** The working folder of an output file: <work>/out/<id>.<kind>.json. */
export function workOf(file) {
  return path.dirname(path.dirname(path.resolve(file)));
}

/** Every module: its data file, its prose files, its positions and its prose. */
export async function loadModules() {
  const dir = `${REPO}/src/content/lines`;
  const files = [
    `${REPO}/src/content/firstMoves.ts`,
    ...readdirSync(dir)
      .filter((f) => /^[^.]+\.ts$/.test(f) && f !== "index.ts")
      .map((f) => `${dir}/${f}`),
  ];
  const modules = [];
  for (const file of files) {
    const data = Object.values(await import(pathToFileURL(file).href))[0];
    modules.push({ file, positions: data.positions, texts: data.texts });
  }
  return modules;
}

/** The followed positions (those with moves), module by module, each with its module. */
export async function followedPositions() {
  const modules = await loadModules();
  const positions = [];
  for (const m of modules) {
    for (const p of m.positions) if (p.moves?.length) positions.push({ ...p, module: m });
  }
  return { modules, positions };
}
