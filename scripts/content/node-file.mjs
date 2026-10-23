// Writes the node file of each followed position, <work>/nodes/<id>.json: the
// position, the names and backgrounds on the way, and per move its rating,
// treatment, the position it reaches and its current notes, and <work>/ids.json, the
// ids of the positions written, for the workflow's args (README.md).
// Usage: node scripts/content/node-file.mjs <work> [<line> ...]   (no line: every followed position)
import { mkdirSync, writeFileSync } from "node:fs";
import { followedPositions, idOf, keyOf } from "./lib.mjs";

const [work, ...wanted] = process.argv.slice(2);
if (!work) {
  console.error("usage: node scripts/content/node-file.mjs <work> [<line> ...]");
  process.exit(1);
}
const { modules, positions } = followedPositions();
const texts = {};
const sources = {};
for (const m of modules) {
  for (const lang of ["en", "de"]) {
    for (const [key, t] of Object.entries(m.texts[lang] ?? {})) {
      texts[key] ??= { en: {}, de: {} };
      Object.assign(texts[key][lang], t);
    }
  }
  for (const p of m.positions) if (p.sources) sources[p.line] = p.sources;
}

/** The keys of the positions on the way to `line`. */
function pathKeys(line) {
  const tokens = line === "" ? [] : line.split(" ");
  return tokens.map((_, i) => tokens.slice(0, i + 1).join(" "));
}

/** Lift: moves rated 4 and 5, and moves rated 3 that reach a named, sourced opening. */
function treatment(rating, reaches) {
  const sourced = reaches.background !== null && reaches.sources.length > 0;
  return rating >= 4 || (rating === 3 && sourced) ? "lift" : "trim";
}

function moveEntry(line, { san, rating }) {
  const key = keyOf(line, san);
  const t = texts[key] ?? { en: {}, de: {} };
  const reaches = {
    name: t.en.name ?? null,
    nameDe: t.de.name ?? null,
    background: t.en.background ?? null,
    sources: sources[key] ?? [],
  };
  return { san, key, rating, treatment: treatment(rating, reaches), reaches, en: t.en.strategy, de: t.de.strategy ?? null };
}

mkdirSync(`${work}/nodes`, { recursive: true });
const chosen = wanted.length ? positions.filter((p) => wanted.includes(p.line)) : positions;
for (const p of chosen) {
  const trail = pathKeys(p.line)
    .map((key) => ({ key, name: texts[key]?.en.name ?? null, background: texts[key]?.en.background ?? null }))
    .filter((e) => e.name || e.background);
  const moves = p.moves.map((m) => moveEntry(p.line, m));
  const node = {
    id: idOf(p.line),
    line: p.line,
    module: p.module.id,
    path: trail,
    sources: sources[p.line] ?? [],
    moves,
  };
  writeFileSync(`${work}/nodes/${node.id}.json`, JSON.stringify(node, null, 2) + "\n");
  console.log(`${node.id}: ${moves.length} moves, ${moves.filter((m) => m.treatment === "lift").length} lift`);
}
// The workflow's ids, to be passed as they are: an id typed by hand names no node file.
writeFileSync(`${work}/ids.json`, JSON.stringify(chosen.map((p) => idOf(p.line))) + "\n");
