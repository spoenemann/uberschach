// Writes reviewed notes into the prose modules: the "strategy" of each move, English and
// German (README.md). A note whose text is unchanged is left as it is written. Nothing is
// written while a note fails the language checks below.
// Usage: node scripts/content/apply.mjs <work>/out/<id>.review.json [...]
import { readFileSync, writeFileSync } from "node:fs";
import { REPO, fileOf, workOf } from "./lib.mjs";

// German notes run 0.9 to 1.5 times the length of their English; outside this band one
// language is cut or still carries text the other dropped.
const RATIO = [0.6, 2];

const errors = [];
const texts = new Map(); // path -> the prose file parsed, shared by the review files of one module
const read = (path) => texts.get(path) ?? texts.set(path, JSON.parse(readFileSync(path, "utf8"))).get(path);
const counts = new Map();
for (const file of process.argv.slice(2)) {
  const review = JSON.parse(readFileSync(file, "utf8"));
  const node = JSON.parse(readFileSync(`${workOf(file)}/nodes/${review.id}.json`, "utf8"));
  const keyOf = new Map(node.moves.map((m) => [m.san, m.key]));
  const path = (lang) => fileOf(node.module, lang);

  for (const m of review.moves) {
    const key = keyOf.get(m.san);
    const current = (lang) => {
      const entry = read(path(lang))[key];
      if (!entry || typeof entry.strategy !== "string") throw new Error(`${path(lang)}: no strategy for "${key}"`);
      return entry.strategy;
    };
    const [en, de] = ["en", "de"].map(current);
    if (m.en !== en && m.de === de && m.deUnchanged !== true) {
      errors.push(`${key}: the English changed but the German is still the old note; write the German from the new English, or set "deUnchanged": true if the old German already says the same`);
    }
    const ratio = m.de.length / m.en.length;
    if (ratio < RATIO[0] || ratio > RATIO[1]) {
      errors.push(`${key}: the German is ${ratio.toFixed(2)} times the length of the English; check that neither is cut and that the German carries nothing the English dropped`);
    }
  }
  for (const lang of ["en", "de"]) {
    const prose = read(path(lang));
    for (const m of review.moves) {
      const entry = prose[keyOf.get(m.san)];
      if (entry.strategy === m[lang]) continue;
      entry.strategy = m[lang];
      counts.set(path(lang), (counts.get(path(lang)) ?? 0) + 1);
    }
  }
}
if (errors.length) {
  for (const e of errors) console.log(`ERROR: ${e}`);
  console.log("Nothing written.");
  process.exit(1);
}
for (const [path, prose] of texts) {
  writeFileSync(path, JSON.stringify(prose, null, 2) + "\n");
  console.log(`${path.replace(`${REPO}/`, "")}: ${counts.get(path) ?? 0} notes changed`);
}
