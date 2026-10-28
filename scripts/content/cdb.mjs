// Compares the book with the Chinese Chess Cloud Database (chessdb.cn, "CDB"; README.md, Against
// the cloud database): the engine-scored opening database that the open source lichess-bot plays
// its openings from. For every position of the book that has moves it fetches CDB's known moves,
// each with its score in centipawns for the side to move, and writes the comparison: each book
// move's rating beside the engine's delta to the best move, the sound moves CDB knows that the
// book lacks, and from each best move the book lacks the engine's line beyond the book, to the
// depth the book follows. The ratings are the sources' judgements, not an engine's (the spec, The
// database), so a disagreement is a question for a reviewer, never a correction in itself.
// Responses are cached in <work>/cdb/cache/, so a second run costs seconds; the comparison is
// <work>/cdb/comparison.json.
// Usage: node scripts/content/cdb.mjs <work> [--concurrency 3] [--limit <positions>] [--no-follow]
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { NAMED_LINE_PLIES, applyMove, loadBook, parseSan, positionAt, positionKey, toFen, toSan } from "./lib.mjs";

const API = "https://www.chessdb.cn/cdb.php";
const USER_AGENT = "uberschach content tools (https://github.com/spoenemann/uberschach)";

/** A CDB move within this many centipawns of the best is sound: the book lacking it is listed. */
const SOUND_MARGIN = 30;
/** The rating a delta implies: 5 up to IMPLIED[0], 4 up to IMPLIED[1], ... 1 beyond the last. */
const IMPLIED = [9, 24, 59, 119];
/** The flags: a move the book recommends that the engine finds this much worse, and the reverse. */
const OVERRATED_DELTA = 50;
const UNDERRATED_DELTA = 10;
/** A sibling rated lower that scores at least this much better. */
const INVERTED_DELTA = 30;

const args = process.argv.slice(2);
const work = args[0];
const option = (name, fallback) => (args.includes(name) ? Number(args[args.indexOf(name) + 1]) : fallback);
const concurrency = option("--concurrency", 3);
const limit = option("--limit", Infinity);
const follow = !args.includes("--no-follow");
if (!work || work.startsWith("--")) {
  console.error("usage: node scripts/content/cdb.mjs <work> [--concurrency 3] [--limit <positions>] [--no-follow]");
  process.exit(1);
}
const cacheDir = `${work}/cdb/cache`;
mkdirSync(cacheDir, { recursive: true });

const book = await loadBook();
const plyOf = (line) => (line === "" ? 0 : line.split(" ").length);
const uciOf = (move) => `${move.from}${move.to}${move.promotion ? move.promotion[0].replace("k", "n") : ""}`;
const implied = (delta) => 5 - IMPLIED.filter((bound) => delta > bound).length;

/** CDB's known moves of the position, from the cache or fetched: { status, moves?, fetched }. */
async function cdb(position) {
  const fen = toFen(position);
  const key = fen.split(" ").slice(0, 4).join(" ");
  const file = `${cacheDir}/${createHash("sha1").update(key).digest("hex")}.json`;
  if (existsSync(file)) return JSON.parse(readFileSync(file, "utf8"));
  const url = `${API}?action=queryall&board=${encodeURIComponent(fen)}&json=1`;
  let last;
  for (const wait of [0, 2000, 5000, 15000]) {
    if (wait) await new Promise((resolve) => setTimeout(resolve, wait));
    try {
      const response = await fetch(url, { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(30000) });
      const text = await response.text();
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      if (text.trim() === "") throw new Error("empty body");
      const body = JSON.parse(text);
      const result = { status: body.status, fetched: new Date().toISOString() };
      if (body.status === "ok") {
        result.moves = body.moves.map((m) => ({ uci: m.uci, san: m.san, score: m.score, rank: m.rank, note: m.note, winrate: Number(m.winrate) }));
      }
      writeFileSync(file, JSON.stringify(result) + "\n");
      return result;
    } catch (error) {
      last = error;
    }
  }
  return { status: "error", error: String(last), fetched: new Date().toISOString() };
}

/** `fn` over the items, at most `n` at a time, in order of the result. */
async function pool(items, n, fn) {
  const results = new Array(items.length);
  let next = 0;
  let done = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
      done++;
      if (done % 100 === 0) process.stderr.write(`  ${done}/${items.length}\n`);
    }
  };
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, worker));
  return results;
}

/** The comparison of one book position: its moves against CDB's, and the sound moves it lacks. */
async function compare(entry) {
  const position = positionAt(entry.line);
  const known = await cdb(position);
  const result = { line: entry.line, module: entry.module, ply: plyOf(entry.line), fen: toFen(position), status: known.status };
  if (known.status !== "ok") {
    result.moves = entry.moves.map((m) => ({ san: m.san, rating: m.rating }));
    return result;
  }
  const byUci = new Map(known.moves.map((m) => [m.uci, m]));
  const best = Math.max(...known.moves.map((m) => m.score));
  result.best = best;
  result.moves = entry.moves.map((m) => {
    const scored = byUci.get(uciOf(m.move));
    if (!scored) return { san: m.san, rating: m.rating, unknown: true };
    const delta = best - scored.score;
    const flags = [];
    if (m.rating >= 4 && delta >= OVERRATED_DELTA) flags.push("overrated");
    if (m.rating <= 2 && delta <= UNDERRATED_DELTA) flags.push("underrated");
    return { san: m.san, rating: m.rating, score: scored.score, delta, implied: implied(delta), rank: scored.rank, winrate: scored.winrate, note: scored.note, flags };
  });
  const scoredMoves = result.moves.filter((m) => m.score !== undefined);
  for (const m of scoredMoves) {
    const better = scoredMoves.filter((o) => o.rating < m.rating && o.score - m.score >= INVERTED_DELTA);
    if (better.length) m.flags.push(`inverted:${better.map((o) => o.san).join(",")}`);
  }
  const inBook = new Set(entry.moves.map((m) => uciOf(m.move)));
  result.bestInBook = known.moves.some((m) => m.score === best && inBook.has(m.uci));
  result.missing = known.moves
    .filter((m) => !inBook.has(m.uci) && best - m.score <= SOUND_MARGIN)
    .map((m) => ({ san: m.san, uci: m.uci, score: m.score, delta: best - m.score, rank: m.rank, winrate: m.winrate, note: m.note }));
  return result;
}

/**
 * The engine's line from the position after a best move the book lacks: CDB's top move at each
 * step, until the book's depth, a position the book has moves at (a transposition) or a position
 * CDB does not know. Each step's score is for the side that plays it.
 */
async function beyond(entry, missing) {
  let position = positionAt(entry.line);
  let line = entry.line;
  const steps = [];
  const parsed = parseSan(position, missing.san, "en");
  if (!parsed.ok) throw new Error(`CDB's move ${missing.san} after "${entry.line}" is ${parsed.reason}`);
  const played = (san, score) => {
    const number = position.turn === "white" ? `${position.fullmoveNumber}.` : "";
    line = `${line} ${number}${san}`.trim();
    steps.push({ san, score });
    position = applyMove(position, parseSan(position, san, "en").move);
  };
  played(toSan(position, parsed.move, "en"), missing.score);
  let ending = "depth";
  while (plyOf(line) < NAMED_LINE_PLIES) {
    const reached = book.get(positionKey(position));
    if (reached?.moves.length) {
      ending = `book:${reached.line}`;
      break;
    }
    const known = await cdb(position);
    if (known.status !== "ok" || known.moves.length === 0) {
      ending = known.status;
      break;
    }
    const top = known.moves.reduce((a, b) => (b.score > a.score ? b : a));
    const san = toSan(position, parseSan(position, top.san, "en").move, "en");
    played(san, top.score);
  }
  if (ending === "depth") {
    const reached = book.get(positionKey(position));
    if (reached) ending = `book:${reached.line}`;
  }
  return { from: entry.line, missing: missing.san, line, steps, ending };
}

const entries = [...book.values()].filter((e) => e.moves.length > 0).sort((a, b) => a.line.localeCompare(b.line)).slice(0, limit);
process.stderr.write(`comparing ${entries.length} positions with CDB, ${concurrency} requests at a time\n`);
const positions = await pool(entries, concurrency, compare);

let lines = [];
if (follow) {
  const starts = positions.flatMap((p) =>
    (p.missing ?? []).filter((m) => m.delta === 0 && p.ply < NAMED_LINE_PLIES).map((m) => [p, m]),
  );
  process.stderr.write(`following the engine beyond the book from ${starts.length} best moves the book lacks\n`);
  const byLine = new Map(entries.map((e) => [e.line, e]));
  lines = await pool(starts, concurrency, ([p, m]) => beyond(byLine.get(p.line), m));
}

const summary = { positions: positions.length, byStatus: {}, moves: 0, scored: 0, matrix: {}, flags: {}, bestMissing: 0, missing: 0, linesBeyond: lines.length };
for (const p of positions) {
  summary.byStatus[p.status] = (summary.byStatus[p.status] ?? 0) + 1;
  summary.moves += p.moves.length;
  for (const m of p.moves) {
    if (m.score === undefined) continue;
    summary.scored++;
    const row = (summary.matrix[m.rating] ??= {});
    row[m.implied] = (row[m.implied] ?? 0) + 1;
    for (const flag of m.flags) {
      const kind = flag.split(":")[0];
      summary.flags[kind] = (summary.flags[kind] ?? 0) + 1;
    }
  }
  if (p.status === "ok" && !p.bestInBook) summary.bestMissing++;
  summary.missing += p.missing?.length ?? 0;
}

const output = {
  source: {
    name: "Chinese Chess Cloud Database (chessdb.cn)",
    api: `${API}?action=queryall&json=1&board=<fen>`,
    run: new Date().toISOString(),
    book: execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim(),
  },
  method: {
    score: "CDB's score in centipawns for the side to move; delta is the best move's score minus the move's; a move ties the best at delta 0",
    rank: "CDB's own bucket: 2 within a few centipawns of the best, 1 within about ten, 0 beyond, and 0 throughout a position it has not analysed deeply; the note's first number appears to be the depth",
    implied: `the rating a delta implies: 5 up to ${IMPLIED[0]}, 4 up to ${IMPLIED[1]}, 3 up to ${IMPLIED[2]}, 2 up to ${IMPLIED[3]}, 1 beyond`,
    flags: {
      overrated: `rated 4 or 5 with a delta of at least ${OVERRATED_DELTA}`,
      underrated: `rated 1 or 2 with a delta of at most ${UNDERRATED_DELTA}`,
      inverted: `a sibling rated lower scores at least ${INVERTED_DELTA} better; the siblings follow the colon`,
    },
    bestInBook: "whether a move of the book ties CDB's best score",
    missing: `CDB's moves within ${SOUND_MARGIN} of the best that the book lacks`,
    lines: `from each missing move that ties the best, CDB's top move at each step to ${NAMED_LINE_PLIES} plies, a position the book has moves at, or one CDB does not know`,
  },
  summary,
  positions,
  lines,
};
writeFileSync(`${work}/cdb/comparison.json`, JSON.stringify(output, null, 1) + "\n");
console.log(JSON.stringify(summary, null, 2));
console.log(`written to ${work}/cdb/comparison.json`);
