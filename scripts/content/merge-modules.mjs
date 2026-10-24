// Folds small modules into the modules above them (docs/adr/0002-opening-modules-folded-to-a-size-budget.md):
// written for the 1,692 modules of the named-lines run, one per position that gained moves two
// plies below its module's root, and run on them once on 2026-10-24; it folds the small modules
// a later add.mjs run makes the same way. Bottom-up, each module takes in
// its child modules, smallest first, while its three files stay within BUDGET bytes together;
// a child module is one whose root is a move away from a position of this one. A module that
// takes nothing in is left as it is. The sizes are those of the files on disk, which bound the
// merged files: merging only drops the child's "about" and shares the root line's prose entry.
// With --refold, the modules are first taken apart into the finest subtrees, one per position
// with moves holding the positions it reaches that have none, and the whole book is folded
// again from those: for a book whose modules have grown wider than the budget, as after the
// gaps run (README.md, Gaps). --budget sets the budget for a measurement with --dry-run.
// Usage: node scripts/content/merge-modules.mjs [--refold] [--budget <bytes>] [--dry-run]
import { Buffer } from "node:buffer";
import { existsSync, readFileSync, readdirSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { REPO, fileOf, idOf } from "./lib.mjs";

const args = process.argv.slice(2);
/** The size of the largest module of the breadth-first plies (lines/e4-e5, 98,675 bytes), rounded up. */
const BUDGET = args.includes("--budget") ? Number(args[args.indexOf("--budget") + 1]) : 100_000;
const LANGUAGES = ["en", "de"];
const FIELDS = ["name", "background", "strategy"];
const dryRun = args.includes("--dry-run");
const refold = args.includes("--refold");

const readJson = (file) => JSON.parse(readFileSync(file, "utf8"));
const LINES = `${REPO}/src/content/lines`;
const plyOf = (line) => (line === "" ? 0 : line.split(" ").length);
/** The line one move shorter: "1.e4 e5 2.Nf3" → "1.e4 e5", "1.e4 e5" → "1.e4". */
const parentOf = (line) => line.replace(/\s*\S+$/, "");

const onDisk = new Map();
for (const file of readdirSync(LINES).filter((f) => /^[^.]+\.json$/.test(f))) {
  const id = file.slice(0, -".json".length);
  const files = [fileOf(id), ...LANGUAGES.map((lang) => fileOf(id, lang))];
  const prose = (lang) => (existsSync(fileOf(id, lang)) ? readJson(fileOf(id, lang)) : {});
  const data = readJson(fileOf(id));
  const root = data.positions.reduce((a, b) => (plyOf(b.line) < plyOf(a.line) ? b : a)).line;
  const bytes = files.filter(existsSync).reduce((sum, f) => sum + statSync(f).size, 0);
  onDisk.set(id, { id, root, data, en: prose("en"), de: prose("de"), bytes, children: [], absorbed: [] });
}

/** The size of a module's three files as written. */
const sizeOf = (m) =>
  [m.data, m.en, m.de].reduce((sum, value) => sum + Buffer.byteLength(JSON.stringify(value, null, 2) + "\n"), 0);

/**
 * The finest subtrees: a module per position with moves (and the initial position), holding it
 * and the positions without moves that its moves reach, each with its prose; a strategy goes
 * with the position the move is played from. A module root keeps its "about".
 */
function takeApart(modules) {
  const positions = new Map([...modules.values()].flatMap((m) => m.data.positions.map((p) => [p.line, p])));
  const about = new Map([...modules.values()].map((m) => [m.root, m.data.about]));
  const owner = (line) => (line === "" || positions.get(line)?.moves?.length ? line : parentOf(line));
  const units = new Map();
  const unitOf = (line) => {
    const root = owner(line);
    if (!units.has(root)) {
      const text = about.get(root) ?? `After ${root}: its moves and the positions they reach (docs/adr/0002-opening-modules-folded-to-a-size-budget.md).`;
      units.set(root, { id: idOf(root), root, data: { about: text, positions: [] }, en: {}, de: {}, children: [], absorbed: [] });
    }
    return units.get(root);
  };
  for (const m of modules.values()) for (const p of m.data.positions) unitOf(p.line).data.positions.push(p);
  for (const unit of units.values()) unit.data.positions.sort((a, b) => (a.line === unit.root ? -1 : b.line === unit.root ? 1 : 0));
  for (const m of modules.values()) for (const lang of LANGUAGES) distributeProse(m[lang], lang, unitOf);
  for (const unit of units.values()) {
    for (const lang of LANGUAGES) {
      for (const [line, entry] of Object.entries(unit[lang])) unit[lang][line] = inFieldOrder(entry);
    }
    unit.bytes = sizeOf(unit);
  }
  return new Map([...units.values()].map((u) => [u.id, u]));
}

/** A module's prose in one language, field by field to the unit that declares it: a strategy to its move's. */
function distributeProse(prose, lang, unitOf) {
  for (const [line, entry] of Object.entries(prose)) {
    for (const field of FIELDS.filter((f) => entry[f] !== undefined)) {
      const unit = field === "strategy" ? unitOf(parentOf(line)) : unitOf(line);
      unit[lang][line] = { ...unit[lang][line], [field]: entry[field] };
    }
  }
}

/** A prose entry with its fields in the order the modules write them. */
const inFieldOrder = (entry) => Object.fromEntries(FIELDS.filter((f) => entry[f] !== undefined).map((f) => [f, entry[f]]));

const modules = refold ? takeApart(onDisk) : onDisk;
const declaredIn = new Map();
for (const m of modules.values()) for (const p of m.data.positions) declaredIn.set(p.line, m.id);
for (const m of modules.values()) {
  if (m.root === "") continue;
  const parent = declaredIn.get(parentOf(m.root));
  if (parent === undefined) throw new Error(`lines/${m.id}.json: no module declares "${parentOf(m.root)}"`);
  modules.get(parent).children.push(m);
}

/** Folds the module's children into it, theirs first; returns its size afterwards. */
function fold(m) {
  for (const child of m.children) fold(child);
  for (const child of [...m.children].sort((a, b) => a.bytes - b.bytes || a.id.localeCompare(b.id))) {
    if (m.bytes + child.bytes > BUDGET) continue;
    m.bytes += child.bytes;
    m.absorbed.push(child);
  }
}
fold(modules.get("root"));

/** The module's positions and prose with those of every module it took in, in tree order. */
function merged(m) {
  const positions = [...m.data.positions];
  const prose = Object.fromEntries(LANGUAGES.map((lang) => [lang, { ...m[lang] }]));
  for (const child of [...m.absorbed].sort((a, b) => a.root.localeCompare(b.root))) {
    const inner = merged(child);
    positions.push(...inner.positions);
    for (const lang of LANGUAGES) {
      for (const [line, entry] of Object.entries(inner.prose[lang])) {
        const both = { ...prose[lang][line], ...entry };
        prose[lang][line] = Object.fromEntries(FIELDS.filter((f) => both[f] !== undefined).map((f) => [f, both[f]]));
      }
    }
  }
  return { positions, prose };
}

/** The parent's "about", said of what it now holds; one that says so already is kept, so a refold does not repeat it. */
function about(m) {
  const text = m.data.about;
  if (m.absorbed.length === 0 || text === undefined) return text;
  if (/where they fit|play from here on/.test(text)) return text;
  const own = "The replies it follows (rated 4 and 5) have their own modules in this folder.";
  if (text.includes(own)) {
    return text.replace(own, "The replies it follows (rated 4 and 5) and the named lines beyond its replies are in this module where they fit, in modules of their own in this folder otherwise.");
  }
  if (text.includes("the named lines play from here")) return text.replace("play from here", "play from here on");
  return `${text} The named lines below it (src/content/named/) are folded in where they fit (docs/adr/0002-opening-modules-folded-to-a-size-budget.md).`;
}

let kept = 0;
let removed = 0;
const write = (file, value) => dryRun || writeFileSync(file, JSON.stringify(value, null, 2) + "\n");
const remove = (id) => {
  removed += 1;
  for (const file of [fileOf(id), ...LANGUAGES.map((lang) => fileOf(id, lang))]) {
    if (!dryRun && existsSync(file)) unlinkSync(file);
  }
};
/** Writes the module if it took any in, and goes on below it; a module taken in is written by its parent. */
const keptIds = new Set();
const visit = (m, own) => {
  if (own) kept += 1;
  if (own) keptIds.add(m.id);
  if (own && (refold || m.absorbed.length > 0)) {
    const { positions, prose } = merged(m);
    const text = about(m);
    write(fileOf(m.id), text === undefined ? { positions } : { about: text, positions });
    for (const lang of LANGUAGES) write(fileOf(m.id, lang), prose[lang]);
    const drop = (child) => (refold || remove(child.id), child.absorbed.forEach(drop));
    m.absorbed.forEach(drop);
  }
  for (const child of m.children) visit(child, !m.absorbed.includes(child));
};
visit(modules.get("root"), true);
if (refold) for (const id of onDisk.keys()) if (!keptIds.has(id)) remove(id);
const sizes = [...keptIds].map((id) => modules.get(id)).map((m) => m.bytes).sort((a, b) => a - b);
console.log(`${modules.size} modules: ${kept} kept, ${refold ? `${removed} old ones removed` : `${removed} folded into them`}${dryRun ? " (dry run, nothing written)" : ""}`);
console.log(`at most ${BUDGET} bytes: the median kept module ${sizes[Math.floor(sizes.length / 2)]} bytes, the largest ${sizes[sizes.length - 1]}`);
