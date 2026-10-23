// Checks a writer's or reviewer's output file against its node file (README.md).
// Usage: node scripts/content/validate.mjs writer|review <work>/out/<id>.<kind>.json
// Prints OK or one line per problem, each saying what to fix; exits 1 on an error.
import { readFileSync } from "node:fs";
import { workOf } from "./lib.mjs";

const [kind, file] = process.argv.slice(2);
if (!["writer", "review"].includes(kind) || !file) {
  console.error("usage: node scripts/content/validate.mjs writer|review <work>/out/<id>.<kind>.json");
  process.exit(1);
}
const work = workOf(file);
const errors = [];
const warnings = [];

function readJson(name, what) {
  try {
    return JSON.parse(readFileSync(name, "utf8"));
  } catch (e) {
    console.log(`ERROR: cannot read ${what} ${name} (${e.message}). Fix it and run again.`);
    process.exit(1);
  }
}

const out = readJson(file, "the output file");
const node = readJson(`${work}/nodes/${out.id}.json`, `the node file of id "${out.id}"; the output's "id" must be the node file's id:`);
const writer = kind === "review" ? readJson(`${work}/out/${out.id}.writer.json`, "the writer's file") : null;
const written = new Map((writer?.moves ?? []).map((m) => [m.san, m]));
const expected = new Map(node.moves.map((m) => [m.san, m]));
const seen = new Set();
const GERMAN_WITH_ENGLISH_LETTERS = /(?<![\p{L}\d])(?:\d+\.(?:\.\.)?|\.\.\.)?[QRBN][a-h]?[1-8]?x?[a-h][1-8]/u;
const words = (s) => s.trim().split(/\s+/).length;

function checkWriter(m, old, where) {
  if (!["lift", "trim", "keep"].includes(m.treatment)) errors.push(`${where}: "treatment" must be lift, trim or keep`);
  if (m.treatment === "keep" && m.en !== old.en) errors.push(`${where}: marked keep but the text differs from the current note; copy it exactly or mark it ${old.treatment}`);
  if (old.treatment === "lift" && m.treatment === "trim") errors.push(`${where}: the node file assigns lift; use lift (or keep if the note already meets the standard)`);
  if (m.treatment === "lift" && !(m.basis?.length > 0)) warnings.push(`${where}: lift without a basis; name the page and section the outlook rests on, or "board"`);
}

function checkReview(m, where) {
  if (typeof m.de !== "string" || m.de.trim() === "") errors.push(`${where}: "de" is missing or empty`);
  else {
    const hit = m.de.replace(/„[^“]*“/g, "").match(GERMAN_WITH_ENGLISH_LETTERS);
    if (hit) errors.push(`${where}: German text has "${hit[0]}" with English piece letters; German writes K D T L S (Sf3, Lb5, Dd1, Te1)`);
  }
  if (!Array.isArray(m.findings)) errors.push(`${where}: "findings" must be a list (empty when the note is approved as written)`);
  const differs = m.en !== written.get(m.san)?.en;
  if (differs !== (m.changed === true)) errors.push(`${where}: "changed" is ${m.changed} but the English ${differs ? "differs from" : "is"} the writer's; set it to ${differs}`);
  if (differs && !(m.findings?.length > 0)) errors.push(`${where}: the English was changed without a finding; name the problem from the brief's list, or restore the writer's text exactly`);
}

for (const m of out.moves ?? []) {
  const where = `move ${m.san}`;
  const old = expected.get(m.san);
  if (!old) {
    errors.push(`${where}: not a move of this position; the node file lists ${[...expected.keys()].join(" ")}`);
    continue;
  }
  if (seen.has(m.san)) errors.push(`${where}: appears twice; give each move exactly once`);
  seen.add(m.san);
  if (typeof m.en !== "string" || m.en.trim() === "") {
    errors.push(`${where}: "en" is missing or empty`);
    continue;
  }
  const n = words(m.en);
  if (n < 12 || n > 70) warnings.push(`${where}: ${n} words; most notes are 20 to 55. Fine if the move needs it, otherwise tighten or say more.`);
  if (kind === "writer") checkWriter(m, old, where);
  else checkReview(m, where);
}
for (const san of expected.keys()) if (!seen.has(san)) errors.push(`move ${san}: missing; every move of the node file needs its note`);
if (kind === "review" && node.moves.some((m) => m.treatment === "lift") && !(out.fetched?.length > 0)) {
  errors.push(`"fetched" is empty, but this position has lifted notes: open the page in each lifted note's basis, check the note against it (brief, item 4) and list the page in "fetched"`);
}

for (const w of warnings) console.log(`warning: ${w}`);
for (const e of errors) console.log(`ERROR: ${e}`);
if (errors.length) process.exit(1);
console.log(`OK: ${out.moves.length} moves${warnings.length ? `, ${warnings.length} warning(s)` : ""}`);
