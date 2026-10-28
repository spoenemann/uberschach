// Writes the batches of the gaps (README.md, Gaps): every position of the book that has moves
// but fewer than three, or none rated 5, with its moves, their ratings and notes, and its legal
// moves, grouped by family into <work>/batches/<id>.json, with <work>/ids.json for the workflow's
// args. A writer adds moves until the position has at least three (or every legal move, where
// fewer are legal) and one rated 5, and may revise the ratings and notes it has.
// Usage: node scripts/content/gaps.mjs <work> [--size <moves to add per batch>]
import { mkdirSync, writeFileSync } from "node:fs";
import { applyMove, engineBlock, engineOf, keyOf, legalMoves, loadBook, pathOf, plyOf, positionAt, positionKey, toSan, wikibooks } from "./lib.mjs";

/** The fewest moves a position with moves holds, and the rating one of them has. */
const LEAST_MOVES = 3;
const BEST = 5;

const args = process.argv.slice(2);
const work = args[0];
const size = args.includes("--size") ? Number(args[args.indexOf("--size") + 1]) : 30;
if (!work || work.startsWith("--")) {
  console.error("usage: node scripts/content/gaps.mjs <work> [--size <moves to add per batch>]");
  process.exit(1);
}

const book = await loadBook();

/** A position of the batch; the engine's view (lib.mjs, engineBlock) lets the validator hold the ratings to the bounds. */
async function entryOf(entry) {
  const line = entry.line;
  const position = positionAt(line);
  const path = pathOf(book, line);
  const legal = [];
  const transposes = {};
  for (const move of legalMoves(position)) {
    const san = toSan(position, move, "en");
    legal.push(san);
    const reached = book.get(positionKey(applyMove(position, move)));
    if (reached?.name && !entry.moves.some((m) => m.san === san)) transposes[san] = reached.name.en;
  }
  const existing = entry.moves.map((m) => ({ san: m.san, key: keyOf(line, m.san), rating: m.rating, en: m.strategy.en }));
  const atLeast = Math.min(LEAST_MOVES, legal.length);
  return {
    line,
    toMove: position.turn === "white" ? "White" : "Black",
    path,
    wikibooks: wikibooks(line),
    existing,
    legal,
    transposes,
    engine: engineBlock(await engineOf(position, work), entry.moves),
    need: { moves: Math.max(atLeast - existing.length, 0), best: !existing.some((m) => m.rating === BEST) },
  };
}

// The positions to fill, in the book's order of lines, grouped by their first four moves.
const gaps = [...book.values()]
  .filter((e) => e.moves.length > 0)
  .filter((e) => e.moves.length < Math.min(LEAST_MOVES, legalMoves(positionAt(e.line)).length) || !e.moves.some((m) => m.rating === BEST))
  .sort((a, b) => a.line.localeCompare(b.line));
const entries = [];
for (const gap of gaps) entries.push(await entryOf(gap));
const groups = new Map();
for (const p of entries) {
  const group = p.line.split(" ").slice(0, 4).join(" ");
  (groups.get(group) ?? groups.set(group, []).get(group)).push(p);
}

// Batches: consecutive groups with the same first move merged up to the batch size, a larger
// group split in order. A position's cost is the moves it needs, at least one.
const cost = (p) => Math.max(p.need.moves, p.need.best ? 1 : 0, 1);
const count = (b) => b.positions.reduce((n, p) => n + cost(p), 0);
const batches = [];
let current = null;
for (const [group, list] of groups) {
  const family = group.split(" ")[0];
  const total = list.reduce((n, p) => n + cost(p), 0);
  if (!current || current.family !== family || count(current) + total > size) {
    current = { family, group, positions: [] };
    batches.push(current);
  }
  for (const entry of list) {
    if (count(current) >= size * 1.3) {
      current = { family, group, positions: [] };
      batches.push(current);
    }
    current.positions.push(entry);
  }
}

mkdirSync(`${work}/batches`, { recursive: true });
const ids = batches.map((b, i) => {
  const id = `g${String(i + 1).padStart(3, "0")}-${b.group.replace(/\d+\./g, "").replace(/\s+/g, "-") || "root"}`;
  writeFileSync(`${work}/batches/${id}.json`, JSON.stringify({ id, kind: "gaps", positions: b.positions }, null, 2) + "\n");
  return id;
});
writeFileSync(`${work}/ids.json`, JSON.stringify(ids) + "\n");
const moves = entries.reduce((n, p) => n + cost(p), 0);
const byPly = {};
for (const p of entries) byPly[plyOf(p.line)] = (byPly[plyOf(p.line)] ?? 0) + 1;
console.log(`${batches.length} batches, ${gaps.length} positions, at least ${moves} moves to add`);
console.log(`positions by ply: ${JSON.stringify(byPly)}`);
