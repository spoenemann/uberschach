// Writes the batches of the ratings outside the engine's bounds (README.md, Bounds): every
// position at BOUNDS_FROM_PLY or deeper with a move whose rating the engine's delta to the best
// move contradicts (lib.mjs, BOUNDS), or whose best-scoring move is far behind the engine's best,
// with its moves, their ratings, notes and scores, its legal moves and the engine's view of it,
// grouped by family into <work>/batches/<id>.json, with <work>/ids.json for the workflow's args.
// The engine's scores come from the cache cdb.mjs filled (<work>/cdb/cache/); a position not in
// it is fetched. A writer revises the ratings and notes, adds the main answer where it is
// missing, or keeps a rating with a reason; a reviewer checks; the validator holds both to the
// bounds.
// Usage: node scripts/content/bounds.mjs <work> [--size <flagged moves per batch>]
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import {
  BOUNDS,
  BOUNDS_FROM_PLY,
  ENGINE_NAME,
  applyMove,
  boundBroken,
  engineBlock,
  engineOf,
  keyOf,
  legalMoves,
  loadBook,
  pathOf,
  plyOf,
  positionAt,
  positionKey,
  toFen,
  toSan,
  uciOf,
  wikibooks,
} from "./lib.mjs";

/** The book's best-scoring move this far behind the engine's best puts the main answer in doubt. */
const MAIN_ANSWER_GAP = 50;
/** A sibling rated lower that scores this much better is named in the issues. */
const INVERTED = 30;

const args = process.argv.slice(2);
const work = args[0];
const size = args.includes("--size") ? Number(args[args.indexOf("--size") + 1]) : 20;
if (!work || work.startsWith("--")) {
  console.error("usage: node scripts/content/bounds.mjs <work> [--size <flagged moves per batch>]");
  process.exit(1);
}

const book = await loadBook();
const comparison = existsSync(`${work}/cdb/comparison.json`) ? JSON.parse(readFileSync(`${work}/cdb/comparison.json`, "utf8")) : { lines: [] };

/** The book's moves from the position beside the engine's view of each: rating, note, score, delta, depth and the bound it breaks. */
function existingOf(entry, known) {
  const byUci = new Map(known.moves.map((m) => [m.uci, m]));
  return entry.moves.map((m) => {
    const e = byUci.get(uciOf(m.move));
    return {
      san: m.san,
      key: keyOf(entry.line, m.san),
      rating: m.rating,
      en: m.strategy.en,
      engine: e ? { score: e.score, delta: e.delta, rank: e.rank, depth: e.depth } : null,
      bound: e ? boundBroken(m.rating, e.delta) : null,
    };
  });
}

/**
 * Whether the position is one the breadth-first plies follow (src/content/openings.test.ts): at
 * BOUNDS_FROM_PLY or before, reached from the start by moves rated 4 or 5 only. From such a
 * position every move rated 4 or 5 must reach a position the book has.
 */
function breadthFirst(line) {
  if (plyOf(line) > BOUNDS_FROM_PLY) return false;
  const tokens = line === "" ? [] : line.split(" ");
  return tokens.every((token, i) => {
    const parent = book.get(positionKey(positionAt(tokens.slice(0, i).join(" "))));
    const move = parent?.moves.find((m) => m.san === token.replace(/^\d+\./, ""));
    return move !== undefined && move.rating >= 4;
  });
}

/** The legal moves as the book writes them, those that transpose into a named position, and those whose position the book lacks. */
function legalOf(entry, position) {
  const inBook = new Set(entry.moves.map((m) => uciOf(m.move)));
  const legal = [];
  const transposes = {};
  const unfollowed = [];
  for (const move of legalMoves(position)) {
    const san = toSan(position, move, "en");
    legal.push(san);
    const reached = book.get(positionKey(applyMove(position, move)));
    if (reached?.name && !inBook.has(uciOf(move))) transposes[san] = reached.name.en;
    if (!reached) unfollowed.push(san);
  }
  return { legal, transposes, unfollowed };
}

/** What the engine questions, in words: each broken bound, the main answer in doubt, the siblings out of order. */
function issuesOf(existing, engine, gap) {
  const issues = [];
  for (const m of existing) if (m.bound) issues.push(`${m.san} rated ${m.rating}: ${m.bound}`);
  if (gap !== null && gap >= MAIN_ANSWER_GAP) {
    const best = engine.moves.filter((m) => m.delta === 0).map((m) => m.san);
    issues.push(`the main answer is in doubt: the book's best-scoring move is ${gap} centipawns behind the engine's best (${best.join(", ")})`);
  }
  const scored = existing.filter((m) => m.engine);
  for (const m of scored) {
    const better = scored.filter((o) => o.rating < m.rating && o.engine.score - m.engine.score >= INVERTED);
    if (better.length) issues.push(`${m.san} rated ${m.rating} scores at least ${INVERTED} centipawns worse than ${better.map((o) => `${o.san} rated ${o.rating}`).join(" and ")}`);
  }
  return issues;
}

/** The batch's entry for a book position, or null where the engine finds nothing to question. */
async function entryOf(entry) {
  const line = entry.line;
  const position = positionAt(line);
  const known = await engineOf(position, work);
  if (known.status !== "ok") return null;
  const existing = existingOf(entry, known);
  const scored = existing.filter((m) => m.engine);
  const gap = scored.length ? Math.min(...scored.map((m) => m.engine.delta)) : null;
  const inDoubt = gap !== null && gap >= MAIN_ANSWER_GAP;
  if (!existing.some((m) => m.bound) && !inDoubt) return null;
  const engine = engineBlock(known, entry.moves);
  const ply = plyOf(line);
  const { legal, transposes, unfollowed } = legalOf(entry, position);
  return {
    line,
    ply,
    toMove: position.turn === "white" ? "White" : "Black",
    fen: toFen(position),
    path: pathOf(book, line),
    wikibooks: wikibooks(line),
    sources: entry.sources,
    existing,
    legal,
    transposes,
    ...(breadthFirst(line) ? { unfollowed } : {}),
    engine,
    issues: issuesOf(existing, engine, gap),
    beyond: comparison.lines.filter((l) => l.from === line).map((l) => ({ missing: l.missing, line: l.line, ending: l.ending })),
    need: { moves: 0, best: !existing.some((m) => m.rating === 5) },
    cost: existing.filter((m) => m.bound).length + (inDoubt ? 1 : 0),
  };
}

const candidates = [...book.values()]
  .filter((e) => e.moves.length > 0 && plyOf(e.line) >= BOUNDS_FROM_PLY)
  .sort((a, b) => a.line.localeCompare(b.line));
const entries = [];
for (const candidate of candidates) {
  const entry = await entryOf(candidate);
  if (entry) entries.push(entry);
}

// Batches as gaps.mjs makes them: a family's groups (the first four moves) merged up to the size.
const groups = new Map();
for (const p of entries) {
  const group = p.line.split(" ").slice(0, 4).join(" ");
  (groups.get(group) ?? groups.set(group, []).get(group)).push(p);
}
const count = (b) => b.positions.reduce((n, p) => n + p.cost, 0);
const batches = [];
let current = null;
for (const [group, list] of groups) {
  const family = group.split(" ")[0];
  const total = list.reduce((n, p) => n + p.cost, 0);
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
for (const stale of readdirSync(`${work}/batches`).filter((f) => /^b\d{3}-.*\.json$/.test(f))) rmSync(`${work}/batches/${stale}`);
const ids = batches.map((b, i) => {
  const id = `b${String(i + 1).padStart(3, "0")}-${b.group.replace(/\d+\./g, "").replace(/\s+/g, "-")}`;
  const positions = b.positions.map(({ cost: _cost, ...p }) => p);
  const batch = { id, kind: "bounds", engine: { source: ENGINE_NAME, fromPly: BOUNDS_FROM_PLY, bounds: BOUNDS, mainAnswerGap: MAIN_ANSWER_GAP }, positions };
  writeFileSync(`${work}/batches/${id}.json`, JSON.stringify(batch, null, 2) + "\n");
  return id;
});
writeFileSync(`${work}/ids.json`, JSON.stringify(ids) + "\n");
const flagged = entries.reduce((n, p) => n + p.cost, 0);
const byPly = {};
for (const p of entries) byPly[p.ply] = (byPly[p.ply] ?? 0) + 1;
console.log(`${batches.length} batches, ${entries.length} positions, ${flagged} ratings or main answers to decide`);
console.log(`positions by ply: ${JSON.stringify(byPly)}`);
