// Old and new notes side by side, as Markdown, with the reviewer's findings (README.md).
// Usage: node scripts/content/compare.mjs <work> <id> [de]
import { readFileSync } from "node:fs";
const [work, id, lang = "en"] = process.argv.slice(2);
const node = JSON.parse(readFileSync(`${work}/nodes/${id}.json`, "utf8"));
const writer = JSON.parse(readFileSync(`${work}/out/${id}.writer.json`, "utf8"));
const review = JSON.parse(readFileSync(`${work}/out/${id}.review.json`, "utf8"));
const by = (list) => new Map(list.map((m) => [m.san, m]));
const w = by(writer.moves), r = by(review.moves);
const words = (s) => s.trim().split(/\s+/).length;
for (const m of node.moves) {
  const wm = w.get(m.san), rm = r.get(m.san);
  console.log(`### ${m.key} (rating ${m.rating}, ${m.treatment} → ${wm.treatment}${rm.changed ? ", reviewer changed" : ""})\n`);
  console.log(`- old (${words(m[lang])}): ${m[lang]}`);
  console.log(`- new (${words(rm[lang])}): ${rm[lang]}`);
  if (rm.findings.length) console.log(`- findings: ${rm.findings.join(" | ")}`);
  if (wm.ratingDoubt) console.log(`- rating doubt: ${wm.ratingDoubt}`);
  console.log();
}
console.log(`fetched: writer ${writer.fetched?.length ?? 0}, reviewer ${review.fetched?.length ?? 0}`);
