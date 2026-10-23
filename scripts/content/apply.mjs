// Writes reviewed notes into the prose modules: the "strategy" of each move, English and
// German (README.md). A note whose text is unchanged is left as it is written. Nothing is
// written while a note fails the language checks below.
// Usage: node scripts/content/apply.mjs <work>/out/<id>.review.json [...]
import { readFileSync, writeFileSync } from "node:fs";
import { REPO, workOf } from "./lib.mjs";

const WIDTH = 100;
const INDENT = "      ";
const STRATEGY = /strategy:\s*((?:"(?:[^"\\]|\\.)*"\s*\+\s*)*"(?:[^"\\]|\\.)*"),/s;
// German notes run 0.9 to 1.5 times the length of their English; outside this band one
// language is cut or still carries text the other dropped.
const RATIO = [0.6, 2];

/** The text as the modules write it: string pieces of at most WIDTH columns, joined by +. */
function format(text) {
  const max = WIDTH - INDENT.length - 4;
  const pieces = [];
  let current = "";
  for (const word of text.split(" ")) {
    const next = current === "" ? word : `${current} ${word}`;
    if (JSON.stringify(next + " ").length - 2 > max && current !== "") {
      pieces.push(current + " ");
      current = word;
    } else current = next;
  }
  pieces.push(current);
  return pieces.map((p) => INDENT + JSON.stringify(p)).join(" +\n");
}

/** Where the entry of `key` sits in `source`, and its current strategy text. */
function locate(source, key, file) {
  const start = source.indexOf(`\n  ${JSON.stringify(key)}: {`);
  if (start < 0) throw new Error(`${file}: no entry for "${key}"`);
  const end = source.indexOf("\n  },", start);
  const match = STRATEGY.exec(source.slice(start, end));
  if (!match) throw new Error(`${file}: entry "${key}" has no strategy`);
  const text = [...match[1].matchAll(/"(?:[^"\\]|\\.)*"/g)].map((m) => JSON.parse(m[0])).join("");
  return { start, end, text };
}

function replaceStrategy(source, key, text, file) {
  const { start, end, text: current } = locate(source, key, file);
  if (current === text) return source;
  const block = source.slice(start, end);
  return source.slice(0, start) + block.replace(STRATEGY, () => `strategy:\n${format(text)},`) + source.slice(end);
}

const errors = [];
const sources = new Map(); // path -> source, shared by the review files of one module
const read = (path) => sources.get(path) ?? sources.set(path, readFileSync(path, "utf8")).get(path);
const counts = new Map();
for (const file of process.argv.slice(2)) {
  const review = JSON.parse(readFileSync(file, "utf8"));
  const node = JSON.parse(readFileSync(`${workOf(file)}/nodes/${review.id}.json`, "utf8"));
  const keyOf = new Map(node.moves.map((m) => [m.san, m.key]));
  const path = (lang) => `${REPO}/${node.module.replace(/\.ts$/, `.${lang}.ts`)}`;

  for (const m of review.moves) {
    const key = keyOf.get(m.san);
    const [en, de] = ["en", "de"].map((lang) => locate(read(path(lang)), key, path(lang)).text);
    if (m.en !== en && m.de === de && m.deUnchanged !== true) {
      errors.push(`${key}: the English changed but the German is still the old note; write the German from the new English, or set "deUnchanged": true if the old German already says the same`);
    }
    const ratio = m.de.length / m.en.length;
    if (ratio < RATIO[0] || ratio > RATIO[1]) {
      errors.push(`${key}: the German is ${ratio.toFixed(2)} times the length of the English; check that neither is cut and that the German carries nothing the English dropped`);
    }
  }
  for (const lang of ["en", "de"]) {
    let source = read(path(lang));
    for (const m of review.moves) {
      const next = replaceStrategy(source, keyOf.get(m.san), m[lang], path(lang));
      if (next !== source) counts.set(path(lang), (counts.get(path(lang)) ?? 0) + 1);
      source = next;
    }
    sources.set(path(lang), source);
  }
}
if (errors.length) {
  for (const e of errors) console.log(`ERROR: ${e}`);
  console.log("Nothing written.");
  process.exit(1);
}
for (const [path, source] of sources) {
  writeFileSync(path, source);
  console.log(`${path.replace(`${REPO}/`, "")}: ${counts.get(path) ?? 0} notes changed`);
}
