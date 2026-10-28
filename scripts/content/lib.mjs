// Shared by the content tools: the rules engine, and the content modules read as data.
// Node runs the TypeScript sources directly (type stripping), so nothing is built first.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const REPO = path.resolve(import.meta.dirname, "../..");

const domain = (name) => import(pathToFileURL(`${REPO}/src/domain/${name}.ts`).href);
export const { newGame, positionKey } = await domain("game");
export const { playLine } = await domain("line");
export const { legalMoves } = await domain("moves");
export const { toFen } = await domain("fen");
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

/** How many moves a line plays. */
export function plyOf(line) {
  return line === "" ? 0 : line.split(" ").length;
}

/** The Wikibooks page of the position after the line, as raw wikitext: Chess_Opening_Theory/1._e4/1...c5/2._Nf3. */
export function wikibooks(line) {
  const steps = line === "" ? [] : line.split(" ").map((token, i) => {
    const san = token.replace(/^\d+\.+/, "");
    const n = Math.floor(i / 2) + 1;
    return i % 2 === 0 ? `${n}._${san}` : `${n}...${san}`;
  });
  const title = ["Chess_Opening_Theory", ...steps].join("/");
  return `https://en.wikibooks.org/w/index.php?title=${encodeURIComponent(title).replace(/%2F/g, "/")}&action=raw`;
}

/** The names and backgrounds the reader has been shown on the way to the line: the book's entries along it that have one. */
export function pathOf(book, line) {
  const tokens = line === "" ? [] : line.split(" ");
  return tokens
    .map((_, i) => tokens.slice(0, i + 1).join(" "))
    .map((l) => book.get(positionKey(positionAt(l))))
    .filter((e) => e && (e.name || e.background))
    .map((e) => ({ line: e.line, name: e.name?.en ?? null, nameDe: e.name?.de ?? null, background: e.background?.en ?? null }));
}

/** The move a UCI string names, as the rules engine takes it: "e2e4", "e7e8q". */
export function moveFromUci(uci) {
  const piece = { q: "queen", r: "rook", b: "bishop", n: "knight" }[uci[4]];
  return { from: uci.slice(0, 2), to: uci.slice(2, 4), ...(piece ? { promotion: piece } : {}) };
}

/** A move as a UCI string. */
export function uciOf(move) {
  return `${move.from}${move.to}${move.promotion ? move.promotion[0].replace("k", "n") : ""}`;
}

// The engine's opening database: the Chinese Chess Cloud Database (chessdb.cn, "CDB"), which
// scores every move it knows in centipawns for the side to move (README.md, Against the cloud
// database). No key; about a second a request.
export const ENGINE_NAME = "Chinese Chess Cloud Database (chessdb.cn)";
const ENGINE_API = "https://www.chessdb.cn/cdb.php";
const ENGINE_AGENT = "uberschach content tools (https://github.com/spoenemann/uberschach)";

/**
 * The engine's bounds on a rating, in centipawns behind the position's best move, from
 * BOUNDS_FROM_PLY on (docs/product-specs/opening-explorer.md, The database): what a rating of
 * 1 or 2 must at least give away, what one of 3, 4 or 5 may at most. Within the bounds the
 * sources and the review decide; the engine does not say what is worth learning.
 */
export const BOUNDS_FROM_PLY = 3;
export const BOUNDS = { 5: { most: 25 }, 4: { most: 60 }, 3: { most: 100 }, 2: { least: 20 }, 1: { least: 100 } };

/** Why the rating breaks its bound at this delta, or null: within it, no bound, or no delta. */
export function boundBroken(rating, delta) {
  if (typeof delta !== "number") return null;
  const bound = BOUNDS[rating];
  if (bound?.most !== undefined && delta > bound.most) return `a move rated ${rating} is at most ${bound.most} centipawns behind the best move, this one is ${delta} behind`;
  if (bound?.least !== undefined && delta < bound.least) return `a move rated ${rating} is at least ${bound.least} centipawns behind the best move, this one is ${delta} behind`;
  return null;
}

/** The depth CDB's note states, "! (27-08)" being 27, or null. */
export function depthOf(note) {
  const m = /\((\d+)-/.exec(note ?? "");
  return m ? Number(m[1]) : null;
}

/** One CDB query, parsed, retried on a failure; null when it fails four times. */
export async function engineQuery(action, position) {
  const url = `${ENGINE_API}?action=${action}&board=${encodeURIComponent(toFen(position))}&json=1`;
  for (const wait of [0, 2000, 5000, 15000]) {
    if (wait) await new Promise((resolve) => setTimeout(resolve, wait));
    try {
      const response = await fetch(url, { headers: { "User-Agent": ENGINE_AGENT }, signal: AbortSignal.timeout(30000) });
      const text = await response.text();
      if (!response.ok || text.trim() === "") continue;
      return JSON.parse(text);
    } catch {
      continue;
    }
  }
  return null;
}

/**
 * CDB's known moves of the position, cached in <work>/cdb/cache/ by position:
 * { status, fetched, best?, moves?: [{ uci, san, score, delta, rank, depth, note }] }, the moves
 * by score, `san` as the book writes it, `delta` the best move's score minus the move's.
 */
export async function engineOf(position, work) {
  const dir = `${work}/cdb/cache`;
  const key = toFen(position).split(" ").slice(0, 4).join(" ");
  const file = `${dir}/${createHash("sha1").update(key).digest("hex")}.json`;
  let known;
  if (existsSync(file)) {
    known = JSON.parse(readFileSync(file, "utf8"));
  } else {
    const body = await engineQuery("queryall", position);
    if (body === null) return { status: "error", fetched: new Date().toISOString() };
    known = { status: body.status, fetched: new Date().toISOString() };
    if (body.status === "ok") {
      known.moves = body.moves.map((m) => ({ uci: m.uci, san: m.san, score: m.score, rank: m.rank, note: m.note, winrate: Number(m.winrate) }));
    }
    mkdirSync(dir, { recursive: true });
    writeFileSync(file, JSON.stringify(known) + "\n");
  }
  if (known.status !== "ok") return known;
  const best = Math.max(...known.moves.map((m) => m.score));
  const moves = known.moves.map((m) => ({
    uci: m.uci,
    san: toSan(position, moveFromUci(m.uci), "en"),
    score: m.score,
    delta: best - m.score,
    rank: m.rank,
    depth: depthOf(m.note),
    note: m.note,
  }));
  return { ...known, best, moves };
}

/**
 * The engine's view of a position as a batch carries it: the best score and every known move
 * with its score, delta, rank, depth and the book's rating of it (null when the book lacks it);
 * null when CDB does not know the position.
 */
export function engineBlock(known, bookMoves) {
  if (known.status !== "ok") return null;
  const ratingOf = new Map(bookMoves.map((m) => [uciOf(m.move), m.rating]));
  return {
    best: known.best,
    moves: known.moves.map((m) => ({ san: m.san, score: m.score, delta: m.delta, rank: m.rank, depth: m.depth, rating: ratingOf.get(m.uci) ?? null })),
  };
}
