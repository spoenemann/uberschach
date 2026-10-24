// Writes the batches of new content: the moves the named lines play (src/content/named/,
// cut at NAMED_LINE_PLIES) that the book does not have yet, grouped by family into
// <work>/batches/<id>.json, with <work>/ids.json for the workflow's args and
// <work>/names.json, every name the book still lacks (README.md, Named lines).
// Usage: node scripts/content/frontier.mjs <work> [--plies <n>] [--size <moves per batch>]
import { mkdirSync, writeFileSync } from "node:fs";
import {
  NAMED_LINE_PLIES, keyOf, loadBook, namedBook, parseSan, positionAt, positionKey, readNamedLines, toSan,
} from "./lib.mjs";

const args = process.argv.slice(2);
const work = args[0];
const option = (name, fallback) => (args.includes(name) ? Number(args[args.indexOf(name) + 1]) : fallback);
const plies = option("--plies", NAMED_LINE_PLIES);
const size = option("--size", 35);
if (!work || work.startsWith("--")) {
  console.error("usage: node scripts/content/frontier.mjs <work> [--plies <n>] [--size <moves per batch>]");
  process.exit(1);
}

const book = await loadBook();
const lines = readNamedLines();
const named = namedBook(lines, plies);

// The family part of a name ("Sicilian Defence" of "Sicilian Defence: Najdorf Variation") follows
// the book where the book names the same family otherwise, so that a family reads the same at
// every depth (the maintainer, 2026-10-24). Learned from the positions both name: a variation
// counts one, the family's own position half, so it decides a tie or a family named nowhere else.
const votes = new Map();
for (const [key, { name }] of named.names) {
  const ours = book.get(key)?.name?.en;
  if (ours === undefined || ours.includes(":") !== name.includes(":")) continue;
  const [theirs, mine] = [name.split(":")[0], ours.split(":")[0]];
  const tally = votes.get(theirs) ?? votes.set(theirs, new Map()).get(theirs);
  tally.set(mine, (tally.get(mine) ?? 0) + (name.includes(":") ? 1 : 0.5));
}
const family = new Map([...votes].map(([theirs, tally]) => [theirs, [...tally].sort((a, b) => b[1] - a[1])[0][0]]));
const bookName = (name) => {
  const cut = name.search(/[:,]/);
  if (cut < 0) return family.get(name) ?? name;
  const [head, rest] = [name.slice(0, cut), name.slice(cut)];
  const ours = family.get(head) ?? head;
  // "Kangaroo Defence: Keres Defence, ..." stays: the book's family name is the variation here.
  return rest.includes(ours) ? name : `${ours}${rest}`;
};

// Every position on a named line, under the line the book declares it with, or else the first
// line that reaches it in the dataset's order of moves.
const declared = new Map(); // key -> line
for (const [key, entry] of book) declared.set(key, entry.line);
const order = [...lines].sort((a, b) => a.moves.join(" ").localeCompare(b.moves.join(" ")));
const fresh = []; // positions with new moves, in order of first appearance
const seen = new Set();
for (const l of order) {
  let line = "";
  for (const text of l.moves.slice(0, plies)) {
    const key = positionKey(positionAt(line));
    const position = positionAt(line);
    const san = toSan(position, parseSan(position, text, "en").move, "en");
    const own = book.get(key);
    if (!seen.has(key) && !own?.moves.some((m) => m.san === san) && named.moves.get(key)?.has(san)) {
      seen.add(key);
      fresh.push(key);
    }
    line = declared.get(key) ?? line;
    const next = keyOf(line, san);
    const childKey = positionKey(positionAt(next));
    if (!declared.has(childKey)) declared.set(childKey, next);
    line = declared.get(childKey);
  }
}

const textOf = (key) => {
  const entry = book.get(key);
  if (entry) return { name: entry.name?.en ?? null, nameDe: entry.name?.de ?? null, background: entry.background?.en ?? null };
  return { name: named.names.has(key) ? bookName(named.names.get(key).name) : null, nameDe: null, background: null };
};
const plyOf = (line) => (line === "" ? 0 : line.split(" ").length);
const owner = new Map(); // a new position is described by the batch of the first move into it

function positionEntry(key) {
  const line = declared.get(key);
  const tokens = line === "" ? [] : line.split(" ");
  const path = tokens
    .map((_, i) => tokens.slice(0, i + 1).join(" "))
    .map((l) => ({ line: l, ...textOf(positionKey(positionAt(l))) }))
    .filter((e) => e.name || e.background);
  const existing = book.get(key)?.moves.map((m) => ({ san: m.san, rating: m.rating })) ?? [];
  const moves = [...named.moves.get(key)]
    .filter((san) => !existing.some((m) => m.san === san))
    .map((san) => {
      const childKey = positionKey(positionAt(keyOf(line, san)));
      const reached = book.get(childKey);
      return {
        san,
        key: keyOf(line, san),
        reaches: {
          line: declared.get(childKey),
          inBook: reached !== undefined,
          name: textOf(childKey).name,
          nameDe: textOf(childKey).nameDe,
          eco: named.names.get(childKey)?.eco ?? null,
          background: reached?.background?.en ?? null,
          sources: reached?.sources ?? [],
          describe: false,
          childKey,
        },
      };
    });
  return { line, path, existing, moves };
}

// Batches: the positions grouped by the first four moves of their line, consecutive groups
// with the same first move merged up to the batch size, a larger group split in order.
const groups = new Map();
for (const key of fresh) {
  const line = declared.get(key);
  const group = line.split(" ").slice(0, 4).join(" ");
  (groups.get(group) ?? groups.set(group, []).get(group)).push(positionEntry(key));
}
const batches = [];
let current = null;
const count = (b) => b.positions.reduce((n, p) => n + p.moves.length, 0);
for (const [group, entries] of [...groups].sort((a, b) => a[0].localeCompare(b[0]))) {
  const family = group.split(" ")[0];
  if (!current || current.family !== family || count(current) + entries.reduce((n, p) => n + p.moves.length, 0) > size) {
    current = { family, group, positions: [] };
    batches.push(current);
  }
  for (const entry of entries) {
    if (count(current) >= size * 1.3) {
      current = { family, group, positions: [] };
      batches.push(current);
    }
    current.positions.push(entry);
  }
}

mkdirSync(`${work}/batches`, { recursive: true });
const ids = [];
const names = [];
batches.forEach((b, i) => {
  const id = `b${String(i + 1).padStart(3, "0")}-${b.group.replace(/\d+\./g, "").replace(/\s+/g, "-") || "root"}`;
  for (const p of b.positions) {
    for (const m of p.moves) {
      const r = m.reaches;
      if (!r.inBook && !owner.has(r.childKey)) {
        owner.set(r.childKey, id);
        r.describe = r.name !== null;
        if (r.name !== null) names.push({ line: r.line, en: r.name, eco: r.eco, inBook: false });
      }
      delete r.childKey;
    }
  }
  writeFileSync(`${work}/batches/${id}.json`, JSON.stringify({ id, positions: b.positions }, null, 2) + "\n");
  ids.push(id);
});
// Positions the book already has, without the name the dataset gives them.
for (const [key, { name, eco }] of named.names) {
  const entry = book.get(key);
  if (entry && !entry.name) names.push({ line: entry.line, en: bookName(name), eco, inBook: true });
}
writeFileSync(`${work}/ids.json`, JSON.stringify(ids) + "\n");
writeFileSync(`${work}/names.json`, JSON.stringify(names, null, 2) + "\n");

// The names to translate, by family, about a hundred to a file, and the book's names in both
// languages as the glossary every translator of names reads (brief-names.md).
mkdirSync(`${work}/names`, { recursive: true });
const byFamily = new Map();
for (const n of names) {
  const head = n.en.split(/[:,]/)[0];
  (byFamily.get(head) ?? byFamily.set(head, []).get(head)).push(n);
}
const nameIds = [];
let pack = [];
const flush = () => {
  if (pack.length === 0) return;
  const id = `n${String(nameIds.length + 1).padStart(2, "0")}`;
  writeFileSync(`${work}/names/${id}.json`, JSON.stringify({ id, names: pack }, null, 2) + "\n");
  nameIds.push(id);
  pack = [];
};
for (const family of [...byFamily.keys()].sort()) {
  const list = byFamily.get(family);
  if (pack.length > 0 && pack.length + list.length > 120) flush();
  pack.push(...list);
}
flush();
writeFileSync(`${work}/name-ids.json`, JSON.stringify(nameIds) + "\n");
const glossary = new Map();
for (const entry of book.values()) if (entry.name?.de) glossary.set(entry.name.en, entry.name.de);
writeFileSync(`${work}/glossary.json`, JSON.stringify(Object.fromEntries([...glossary].sort()), null, 2) + "\n");
writeFileSync(`${work}/families.json`, JSON.stringify(Object.fromEntries(family), null, 2) + "\n");
const moves = batches.reduce((n, b) => n + count(b), 0);
const described = names.filter((n) => !n.inBook).length;
console.log(`${plies} plies: ${batches.length} batches, ${fresh.length} positions, ${moves} moves, ${names.length} names (${described} on new positions)`);
const byPly = {};
for (const b of batches) for (const p of b.positions) byPly[plyOf(p.line) + 1] = (byPly[plyOf(p.line) + 1] ?? 0) + p.moves.length;
console.log(`moves by the ply they play: ${JSON.stringify(byPly)}`);
