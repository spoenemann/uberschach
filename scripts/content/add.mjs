// Writes reviewed and translated batches of new entries into the content modules
// (README.md, Named lines): each move with its rating and notes into the module of the
// position it is played from, each new position, its name and background into the module of
// the move along the line it is declared under. A position that gains moves two plies below
// its module's root moves out into a module of its own, which the layout test allows
// (src/content/openings.test.ts); merge-modules.mjs folds such small modules afterwards.
// A batch of gaps (README.md, Gaps) or of bounds (README.md, Bounds) adds moves to positions the
// book has and revises the ratings and notes of their moves; the moves of every position it touches are then ordered by
// rating. Writes nothing while an output file is missing.
// Usage: node scripts/content/add.mjs <work> [<batch id> ...]   (no id: every batch of ids.json)
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { REPO, fileOf, idOf, keyOf } from "./lib.mjs";

const [work, ...wanted] = process.argv.slice(2);
if (!work) {
  console.error("usage: node scripts/content/add.mjs <work> [<batch id> ...]");
  process.exit(1);
}
const readJson = (file) => JSON.parse(readFileSync(file, "utf8"));
const ids = wanted.length ? wanted : readJson(`${work}/ids.json`);
const missing = [];
const need = (file) => (existsSync(file) ? readJson(file) : (missing.push(file), null));

// The names, English and German, by line.
const names = new Map((existsSync(`${work}/names.json`) ? readJson(`${work}/names.json`) : []).map((n) => [n.line, { en: n.en, de: null, inBook: n.inBook }]));
for (const file of readdirSync(`${work}/out`).filter((f) => f.endsWith(".names.json"))) {
  for (const n of readJson(`${work}/out/${file}`).names) if (names.has(n.line)) names.get(n.line).de = n.de;
}

// The moves by the position they are played from, the described positions by line.
const moves = new Map();
const described = new Map();
const filled = new Map(); // a gaps batch's work by the position's line: added moves and revisions
for (const id of ids) {
  const batch = need(`${work}/batches/${id}.json`);
  const review = need(`${work}/out/${id}.review.json`);
  const german = need(`${work}/out/${id}.de.json`);
  if (!batch || !review || !german) continue;
  const de = new Map(german.moves.map((m) => [`${m.from}|${m.san}`, m.de]));
  if (batch.kind === "gaps" || batch.kind === "bounds") {
    const deRevised = new Map(german.revisions.map((r) => [`${r.from}|${r.san}`, r.de]));
    const at = (line) => filled.get(line) ?? filled.set(line, { added: [], revised: [] }).get(line);
    for (const m of review.moves) at(m.from).added.push({ ...m, de: de.get(`${m.from}|${m.san}`) });
    for (const r of review.revisions) at(r.from).revised.push({ ...r, de: r.en === null ? null : deRevised.get(`${r.from}|${r.san}`) });
    continue;
  }
  const deBackground = new Map(german.positions.map((p) => [p.line, p.background]));
  const reviewed = new Map(review.moves.map((m) => [`${m.from}|${m.san}`, m]));
  for (const p of batch.positions) {
    for (const m of p.moves) {
      const r = reviewed.get(`${p.line}|${m.san}`);
      const list = moves.get(p.line) ?? moves.set(p.line, []).get(p.line);
      list.push({ san: m.san, key: m.key, reaches: m.reaches, rating: r.rating, en: r.en, de: de.get(`${p.line}|${m.san}`) });
    }
  }
  for (const p of review.positions) {
    if (p.background !== null) described.set(p.line, { en: p.background, de: deBackground.get(p.line), sources: p.sources });
  }
}
const stop = () => {
  for (const m of missing) console.log(`missing: ${m}`);
  console.log("Nothing written.");
  process.exit(1);
};
if (missing.length) stop();

// The modules as they are on disk.
const LINES = `${REPO}/src/content/lines`;
const modules = new Map();
for (const file of readdirSync(LINES).filter((f) => /^[^.]+\.json$/.test(f))) {
  const id = file.slice(0, -".json".length);
  const prose = (lang) => (existsSync(fileOf(id, lang)) ? readJson(fileOf(id, lang)) : {});
  modules.set(id, { data: readJson(fileOf(id)), en: prose("en"), de: prose("de"), changed: false });
}
const plyOf = (line) => (line === "" ? 0 : line.split(" ").length);
const declaredIn = new Map();
const rootPly = new Map();
for (const [id, m] of modules) {
  for (const p of m.data.positions) declaredIn.set(p.line, id);
  rootPly.set(id, Math.min(...m.data.positions.map((p) => plyOf(p.line))));
}
const prose = (module, lang, key) => (module[lang][key] ??= {});

/** Moves the position at `line` out of its module into one rooted at it, with its name and background. */
function split(line) {
  const from = modules.get(declaredIn.get(line));
  const index = from.data.positions.findIndex((p) => p.line === line);
  const [entry] = from.data.positions.splice(index, 1);
  const id = idOf(line);
  const module = {
    data: {
      about: `After ${line}: the moves the named lines play from here (src/content/named/) and the positions they reach, written and reviewed as the explorer plan's Named lines section describes (docs/exec-plans/completed/0002-opening-explorer.md).`,
      positions: [entry],
    },
    en: {},
    de: {},
    changed: true,
  };
  for (const lang of ["en", "de"]) {
    const text = from[lang][line];
    if (!text) continue;
    for (const field of ["name", "background"]) {
      if (text[field] !== undefined) {
        module[lang][line] = { ...module[lang][line], [field]: text[field] };
        delete text[field];
      }
    }
    if (Object.keys(text).length === 0) delete from[lang][line];
  }
  from.changed = true;
  modules.set(id, module);
  rootPly.set(id, plyOf(line));
  declaredIn.set(line, id);
  return id;
}

let added = 0;
let declared = 0;
for (const line of [...moves.keys()].sort((a, b) => plyOf(a) - plyOf(b))) {
  let id = declaredIn.get(line);
  if (id === undefined) throw new Error(`"${line}" has moves but is declared nowhere: a batch is missing the move into it`);
  if (plyOf(line) - rootPly.get(id) >= 2) id = split(line);
  const module = modules.get(id);
  module.changed = true;
  const entry = module.data.positions.find((p) => p.line === line);
  const list = moves.get(line).sort((a, b) => b.rating - a.rating);
  entry.moves = [...(entry.moves ?? []), ...list.map((m) => ({ san: m.san, rating: m.rating }))];
  for (const m of list) {
    added += 1;
    prose(module, "en", m.key).strategy = m.en;
    prose(module, "de", m.key).strategy = m.de;
    const child = m.reaches.line;
    if (m.reaches.inBook || child !== m.key || declaredIn.has(child)) continue;
    declared += 1;
    const position = { line: child };
    const background = described.get(child);
    if (background) position.sources = background.sources;
    module.data.positions.push(position);
    declaredIn.set(child, id);
    const name = names.get(child);
    if (name?.de === null) missing.push(`the German name of "${child}" (${name.en})`);
    for (const lang of ["en", "de"]) {
      if (name) prose(module, lang, child).name = name[lang];
      if (background) prose(module, lang, child).background = background[lang];
    }
  }
}

// The gaps: moves added to positions the book has, revisions of the moves they had.
for (const [line, { added: list, revised }] of filled) {
  const id = declaredIn.get(line);
  if (id === undefined) throw new Error(`"${line}" is filled but declared nowhere`);
  const module = modules.get(id);
  module.changed = true;
  const entry = module.data.positions.find((p) => p.line === line);
  for (const r of revised) {
    const move = entry.moves.find((m) => m.san === r.san);
    if (move === undefined) throw new Error(`a revision of ${r.san} from "${line}", which the book does not have`);
    move.rating = r.rating;
    if (r.en === null) continue;
    prose(module, "en", keyOf(line, r.san)).strategy = r.en;
    prose(module, "de", keyOf(line, r.san)).strategy = r.de;
  }
  for (const m of list) {
    added += 1;
    entry.moves.push({ san: m.san, rating: m.rating });
    prose(module, "en", keyOf(line, m.san)).strategy = m.en;
    prose(module, "de", keyOf(line, m.san)).strategy = m.de;
  }
  entry.moves.sort((a, b) => b.rating - a.rating);
}

// Names the dataset gives positions the book already has, with the whole run only.
for (const [line, n] of names) {
  if (!n.inBook || wanted.length) continue;
  if (n.de === null) missing.push(`the German name of "${line}" (${n.en})`);
  const module = modules.get(declaredIn.get(line));
  prose(module, "en", line).name = n.en;
  prose(module, "de", line).name = n.de;
  module.changed = true;
}

if (missing.length) stop();
let written = 0;
for (const [id, m] of modules) {
  if (!m.changed) continue;
  written += 1;
  writeFileSync(fileOf(id), JSON.stringify(m.data, null, 2) + "\n");
  for (const lang of ["en", "de"]) writeFileSync(fileOf(id, lang), JSON.stringify(m[lang], null, 2) + "\n");
}
console.log(`${added} moves and ${declared} positions added, ${written} modules written`);
