// Writes reviewed notes into the prose modules: the "strategy" of each move, English and
// German (README.md). A note whose text is unchanged is left as it is written.
// Usage: node scripts/content/apply.mjs <work>/out/<id>.review.json [...]
import { readFileSync, writeFileSync } from "node:fs";
import { REPO, workOf } from "./lib.mjs";

const WIDTH = 100;
const INDENT = "      ";
const STRATEGY = /strategy:\s*((?:"(?:[^"\\]|\\.)*"\s*\+\s*)*"(?:[^"\\]|\\.)*"),/s;

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

function replaceStrategy(source, key, text, file) {
  const start = source.indexOf(`\n  ${JSON.stringify(key)}: {`);
  if (start < 0) throw new Error(`${file}: no entry for "${key}"`);
  const end = source.indexOf("\n  },", start);
  const block = source.slice(start, end);
  const match = STRATEGY.exec(block);
  if (!match) throw new Error(`${file}: entry "${key}" has no strategy`);
  const current = [...match[1].matchAll(/"(?:[^"\\]|\\.)*"/g)].map((m) => JSON.parse(m[0])).join("");
  if (current === text) return source;
  return source.slice(0, start) + block.replace(STRATEGY, () => `strategy:\n${format(text)},`) + source.slice(end);
}

for (const file of process.argv.slice(2)) {
  const review = JSON.parse(readFileSync(file, "utf8"));
  const node = JSON.parse(readFileSync(`${workOf(file)}/nodes/${review.id}.json`, "utf8"));
  const keyOf = new Map(node.moves.map((m) => [m.san, m.key]));
  for (const lang of ["en", "de"]) {
    const path = `${REPO}/${node.module.replace(/\.ts$/, `.${lang}.ts`)}`;
    let source = readFileSync(path, "utf8");
    let changed = 0;
    for (const m of review.moves) {
      const next = replaceStrategy(source, keyOf.get(m.san), m[lang], path);
      if (next !== source) changed++;
      source = next;
    }
    writeFileSync(path, source);
    console.log(`${path.replace(`${REPO}/`, "")}: ${changed} of ${review.moves.length} notes changed`);
  }
}
