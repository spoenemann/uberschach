// One-time migration of the opening content from TypeScript modules to JSON
// (docs/adr/0001-opening-book-as-fetched-json.md). Imports every module under
// src/content/ as it stood on 2026-10-24, firstMoves.ts and lines/*.ts with
// their .en.ts and .de.ts prose, and writes src/content/lines/<id>.json,
// <id>.en.json and <id>.de.json, where <id> is the module's file stem and
// firstMoves becomes root (the id of the initial position's line). The
// header comment of a data module, its provenance, becomes the "about" field
// of its JSON, with the old file names rewritten; the prose modules' header
// comments describe the format and are not carried over (the format is
// documented once, in docs/localization.md). Nothing is edited: the data and
// the prose are written as the modules export them, keys in their order.
// Also writes <out>/before.json, a normalised dump of the TypeScript modules,
// so the JSON can be compared with it after the switch. Deleted in the commit
// after the migration; the history keeps it.
// Usage: node scripts/content/migrate-ts-to-json.mjs <out-dir-for-before.json>
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const REPO = path.resolve(import.meta.dirname, "../..");
const CONTENT = `${REPO}/src/content`;
const LINES = `${CONTENT}/lines`;
const [out] = process.argv.slice(2);
if (!out) {
  console.error("usage: node scripts/content/migrate-ts-to-json.mjs <out-dir>");
  process.exit(1);
}

/** The header comment of a module: the // lines before its first import, as one paragraph. */
function header(file) {
  const lines = [];
  for (const line of readFileSync(file, "utf8").split("\n")) {
    if (line.startsWith("import ")) break;
    if (line.startsWith("//")) lines.push(line.replace(/^\/\/ ?/, ""));
  }
  return lines
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
    .replaceAll("firstMoves.en.ts, firstMoves.de.ts", "root.en.json, root.de.json")
    .replaceAll("firstMoves", "root")
    .replaceAll(/\b([A-Za-z0-9-]+)\.ts\b/g, "$1.json");
}

const sources = [
  { file: `${CONTENT}/firstMoves.ts`, id: "root" },
  ...readdirSync(LINES)
    .filter((f) => /^[^.]+\.ts$/.test(f) && f !== "index.ts")
    .sort()
    .map((f) => ({ file: `${LINES}/${f}`, id: f.replace(/\.ts$/, "") })),
];

const write = (file, value) => writeFileSync(file, JSON.stringify(value, null, 2) + "\n");
const before = [];
for (const { file, id } of sources) {
  const exported = Object.values(await import(pathToFileURL(file).href));
  if (exported.length !== 1) throw new Error(`${file}: expected one export, found ${exported.length}`);
  const [module] = exported;
  const data = { about: header(file), positions: module.positions };
  write(`${LINES}/${id}.json`, data);
  for (const lang of Object.keys(module.texts)) write(`${LINES}/${id}.${lang}.json`, module.texts[lang]);
  before.push({ id, positions: module.positions, texts: module.texts });
  console.log(`${id}: ${module.positions.length} positions, ${Object.keys(module.texts).map((l) => `${l} ${Object.keys(module.texts[l]).length}`).join(", ")}`);
}
write(`${out}/before.json`, before);
console.log(`${sources.length} modules written to src/content/lines/; ${out}/before.json holds the TypeScript modules as data`);
