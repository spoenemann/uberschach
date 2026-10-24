// Checks a writer's, reviewer's or translator's file of new entries against its batch file
// (README.md, Named lines), or a translator's file of names against its names file.
// Usage: node scripts/content/validate-batch.mjs writer|review|translate <work>/out/<id>.<kind>.json
//        node scripts/content/validate-batch.mjs names <work>/out/<id>.names.json
// Prints OK or one line per problem, each saying what to fix; exits 1 on an error.
import { Buffer } from "node:buffer";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { workOf } from "./lib.mjs";

const [kind, file] = process.argv.slice(2);
if (!["writer", "review", "translate", "names"].includes(kind) || !file) {
  console.error("usage: node scripts/content/validate-batch.mjs writer|review|translate|names <work>/out/<file>.json");
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

const GERMAN_WITH_ENGLISH_LETTERS = /(?<![\p{L}\d])(?:\d+\.(?:\.\.)?|\.\.\.)?[QRBN][a-h]?[1-8]?x?[a-h][1-8]/u;
const words = (s) => s.trim().split(/\s+/).length;
const text = (value) => typeof value === "string" && value.trim() !== "";

function german(value, where) {
  const hit = value.replace(/„[^“]*“/g, "").match(GERMAN_WITH_ENGLISH_LETTERS);
  if (hit) errors.push(`${where}: German text has "${hit[0]}" with English piece letters; German writes K D T L S (Sf3, Lb5, Dd1, Te1)`);
  if (/Weiß'|Schwarz'/.test(value)) errors.push(`${where}: "Weiß'" or "Schwarz'"; write "des Weißen", "von Weiß"`);
  if (/[‘’]/.test(value)) errors.push(`${where}: curly apostrophe; use a straight one`);
}

function ratio(de, en, where) {
  const r = de.length / en.length;
  if (r < 0.6 || r > 2) errors.push(`${where}: the German is ${r.toFixed(2)} times the length of the English; check that neither is cut and that the German says the same, nothing more`);
}

const out = readJson(file, "the output file");

if (kind === "names") {
  const given = readJson(`${work}/names/${out.id}.json`, `the names file of id "${out.id}"`);
  const wanted = new Map(given.names.map((n) => [n.line, n]));
  const seen = new Set();
  for (const n of out.names ?? []) {
    const where = `name of "${n.line}"`;
    if (!wanted.has(n.line)) { errors.push(`${where}: not in the names file`); continue; }
    if (seen.has(n.line)) errors.push(`${where}: appears twice`);
    seen.add(n.line);
    if (n.en !== wanted.get(n.line).en) errors.push(`${where}: "en" must be the given name exactly, "${wanted.get(n.line).en}"`);
    if (!text(n.de)) errors.push(`${where}: "de" is missing or empty`);
    else german(n.de, where);
  }
  for (const line of wanted.keys()) if (!seen.has(line)) errors.push(`name of "${line}": missing`);
} else if (readJson(`${work}/batches/${out.id}.json`, `the batch file of id "${out.id}"; the output's "id" must be the batch's id:`).kind === "gaps") {
  gaps(readJson(`${work}/batches/${out.id}.json`));
} else {
  const batch = readJson(`${work}/batches/${out.id}.json`, `the batch file of id "${out.id}"; the output's "id" must be the batch's id:`);
  const writer = kind !== "writer" ? readJson(`${work}/out/${out.id}.writer.json`, "the writer's file") : null;
  const review = kind === "translate" ? readJson(`${work}/out/${out.id}.review.json`, "the reviewer's file") : null;
  const before = new Map((writer?.moves ?? []).map((m) => [`${m.from}|${m.san}`, m]));
  const beforePositions = new Map((writer?.positions ?? []).map((p) => [p.line, p]));
  const english = new Map((review?.moves ?? []).map((m) => [`${m.from}|${m.san}`, m]));
  const englishPositions = new Map((review?.positions ?? []).map((p) => [p.line, p]));
  const expected = new Map();
  const described = new Set();
  for (const p of batch.positions) {
    for (const m of p.moves) {
      expected.set(`${p.line}|${m.san}`, m);
      if (m.reaches.describe) described.add(m.reaches.line);
    }
  }
  const fetched = new Set(out.fetched ?? []);
  const seen = new Set();
  for (const m of out.moves ?? []) {
    const id = `${m.from}|${m.san}`;
    const where = `move ${m.san} from "${m.from}"`;
    if (!expected.has(id)) { errors.push(`${where}: not a move of the batch; "from" is the position's line exactly, "san" the move as the batch writes it`); continue; }
    if (seen.has(id)) errors.push(`${where}: appears twice`);
    seen.add(id);
    if (kind === "translate") {
      const en = english.get(id)?.en ?? "";
      if (!text(m.de)) errors.push(`${where}: "de" is missing or empty`);
      else { german(m.de, where); ratio(m.de, en, where); }
      continue;
    }
    if (![1, 2, 3, 4, 5].includes(m.rating)) errors.push(`${where}: "rating" must be 1 to 5`);
    if (!text(m.en)) { errors.push(`${where}: "en" is missing or empty`); continue; }
    const n = words(m.en);
    if (n < 12 || n > 70) warnings.push(`${where}: ${n} words; most notes are 20 to 55. Fine if the move needs it, otherwise tighten or say more.`);
    if (/[‘’]/.test(m.en)) errors.push(`${where}: curly apostrophe; use a straight one`);
    if (kind === "writer" && m.rating >= 4 && !(m.basis?.length > 0)) warnings.push(`${where}: rated ${m.rating} without a basis; name the page and section the outlook rests on, or "board"`);
    if (kind === "review") {
      const w = before.get(id);
      const differs = m.en !== w?.en || m.rating !== w?.rating;
      if (differs !== (m.changed === true)) errors.push(`${where}: "changed" is ${m.changed} but the note or rating ${differs ? "differs from" : "is"} the writer's; set it to ${differs}`);
      if (differs && !(m.findings?.length > 0)) errors.push(`${where}: changed without a finding; name the problem from the brief's list, or restore the writer's text and rating exactly`);
    }
  }
  for (const id of expected.keys()) if (!seen.has(id)) errors.push(`move ${id.split("|")[1]} from "${id.split("|")[0]}": missing; every move of the batch needs its entry`);

  const seenPositions = new Set();
  for (const p of out.positions ?? []) {
    const where = `background of "${p.line}"`;
    if (!described.has(p.line)) { errors.push(`${where}: not a position the batch describes (describe: true)`); continue; }
    if (seenPositions.has(p.line)) errors.push(`${where}: appears twice`);
    seenPositions.add(p.line);
    if (kind === "translate") translatedBackground(p, englishPositions.get(p.line)?.background ?? null, where);
    else await writtenBackground(p, beforePositions.get(p.line), fetched, where);
  }
  const wanted = kind === "translate" ? new Set(englishPositions.keys()) : described;
  for (const line of wanted) if (!seenPositions.has(line)) errors.push(`background of "${line}": missing; give it, or null`);
}

/** An English note: present, straight apostrophes, about the usual length. */
function note(en, where) {
  if (!text(en)) { errors.push(`${where}: "en" is missing or empty`); return; }
  const n = words(en);
  if (n < 12 || n > 70) warnings.push(`${where}: ${n} words; most notes are 20 to 55. Fine if the move needs it, otherwise tighten or say more.`);
  if (/[‘’]/.test(en)) errors.push(`${where}: curly apostrophe; use a straight one`);
}

/**
 * A gaps batch (README.md, Gaps): the writer's and the reviewer's added moves and revisions,
 * each position left with at least `need` more moves and a move rated 5; the translator's German
 * of every added move and every revised note.
 */
function gaps(batch) {
  if (kind === "translate") {
    gapsGerman(readJson(`${work}/out/${out.id}.review.json`, "the reviewer's file"));
    return;
  }
  const positions = new Map(batch.positions.map((p) => [p.line, p]));
  const added = gapsAdded(positions);
  const revised = gapsRevised(positions);
  for (const p of batch.positions) {
    const own = [...added.values()].filter((m) => m.from === p.line);
    const ratings = [...p.existing.map((e) => revised.get(`${p.line}|${e.san}`)?.rating ?? e.rating), ...own.map((m) => m.rating)];
    if (own.length < p.need.moves) errors.push(`position "${p.line}": ${own.length} move(s) added, ${p.need.moves} needed, so that it has at least ${p.existing.length + p.need.moves}`);
    if (!ratings.includes(5)) errors.push(`position "${p.line}": no move rated 5; add the move the sources treat as the main answer, or rate an existing move 5 under "revisions" if it is that move`);
  }
  if (kind === "review") gapsAgainstWriter(readJson(`${work}/out/${out.id}.writer.json`, "the writer's file"), added, revised);
}

/** A gaps entry's key. */
function gapId(m) {
  return `${m.from}|${m.san}`;
}

/** A gaps entry's place in a message. */
function gapWhere(m, what) {
  return `${what} ${m.san} from "${m.from}"`;
}

/** The translator's German: every added move and every revision with an English note, once. */
function gapsGerman(review) {
  const wanted = new Map([
    ...review.moves.map((m) => [`move|${gapId(m)}`, m.en]),
    ...review.revisions.filter((r) => r.en !== null).map((r) => [`revision|${gapId(r)}`, r.en]),
  ]);
  const seen = new Set();
  for (const [list, what] of [[out.moves ?? [], "move"], [out.revisions ?? [], "revision"]]) {
    for (const m of list) {
      const key = `${what}|${gapId(m)}`;
      const where = gapWhere(m, what);
      if (!wanted.has(key)) { errors.push(`${where}: not a ${what} of the reviewed file with an English note`); continue; }
      if (seen.has(key)) errors.push(`${where}: appears twice`);
      seen.add(key);
      if (!text(m.de)) errors.push(`${where}: "de" is missing or empty`);
      else { german(m.de, where); ratio(m.de, wanted.get(key), where); }
    }
  }
  for (const key of wanted.keys()) {
    const [what, from, san] = key.split("|");
    if (!seen.has(key)) errors.push(`${what} ${san} from "${from}": missing; every ${what} of the reviewed file with an English note needs its German`);
  }
}

/** The added moves: legal, new, once each, rated and explained; returns them by key. */
function gapsAdded(positions) {
  const added = new Map();
  for (const m of out.moves ?? []) {
    const p = positions.get(m.from);
    const where = gapWhere(m, "move");
    if (!p) { errors.push(`${where}: "from" is not a position of the batch; give its line exactly`); continue; }
    if (!p.legal.includes(m.san)) { errors.push(`${where}: not a legal move there, or not written as the batch's "legal" list writes it`); continue; }
    if (p.existing.some((e) => e.san === m.san)) { errors.push(`${where}: already in the book; change it under "revisions"`); continue; }
    if (added.has(gapId(m))) errors.push(`${where}: appears twice`);
    added.set(gapId(m), m);
    if (![1, 2, 3, 4, 5].includes(m.rating)) errors.push(`${where}: "rating" must be 1 to 5`);
    else if (m.rating < 3) warnings.push(`${where}: rated ${m.rating}, so it is not offered as a candidate; add a move below 3 only where the position has no third sound move`);
    note(m.en, where);
    if (kind === "writer" && !(m.basis?.length > 0)) warnings.push(`${where}: no basis; name the page and section the rating rests on, or "board"`);
  }
  return added;
}

/** The revisions: of existing moves, once each, changing something, the writer's with a reason; returns them by key. */
function gapsRevised(positions) {
  const revised = new Map();
  for (const r of out.revisions ?? []) {
    const old = positions.get(r.from)?.existing.find((e) => e.san === r.san);
    const where = gapWhere(r, "revision");
    if (!old) { errors.push(`${where}: not a move of the batch's "existing"; a new move goes under "moves"`); continue; }
    if (revised.has(gapId(r))) errors.push(`${where}: appears twice`);
    revised.set(gapId(r), r);
    gapRevision(r, old, where);
  }
  return revised;
}

/** One revision against the move it revises. */
function gapRevision(r, old, where) {
  if (![1, 2, 3, 4, 5].includes(r.rating)) errors.push(`${where}: "rating" must be 1 to 5`);
  if (r.en !== null) note(r.en, where);
  if (r.rating === old.rating && (r.en === null || r.en === old.en)) errors.push(`${where}: changes nothing; leave the move out of "revisions"`);
  if (r.rating !== old.rating && r.en === null) warnings.push(`${where}: rated ${r.rating} instead of ${old.rating} with the old note kept; check that the note still reads as the new rating`);
  if (kind === "writer" && !text(r.reason)) errors.push(`${where}: "reason" is missing; say why, from a source or the board`);
}

/** The reviewer's file against the writer's: "changed" and the findings true, nothing lost without a finding. */
function gapsAgainstWriter(writer, added, revised) {
  const dropped = new Map((out.dropped ?? []).map((d) => [gapId(d), d]));
  for (const d of dropped.values()) if (!text(d.finding)) errors.push(`${gapWhere(d, "dropped")}: give the "finding"`);
  for (const [list, mine, what] of [[writer.moves, added, "move"], [writer.revisions, revised, "revision"]]) {
    const theirs = new Map(list.map((m) => [gapId(m), m]));
    for (const [key, m] of mine) gapChanged(m, theirs.get(key), what);
    for (const [key, w] of theirs) {
      if (!mine.has(key) && !dropped.has(key)) errors.push(`${gapWhere(w, what)}: the writer's ${what} is missing; keep it, or list it under "dropped" with the finding`);
    }
  }
}

/** A reviewer's entry against the writer's: "changed" true exactly when it differs, and then with a finding. */
function gapChanged(m, w, what) {
  const differs = !w || m.rating !== w.rating || m.en !== w.en;
  if (differs !== (m.changed === true)) errors.push(`${gapWhere(m, what)}: "changed" is ${m.changed} but the ${what} ${differs ? "differs from" : "is"} the writer's; set it to ${differs}`);
  if (differs && !(m.findings?.length > 0)) errors.push(`${gapWhere(m, what)}: changed without a finding; name the problem from the brief's list, or restore the writer's text and rating exactly`);
}

/** The German of a background against its English. */
function translatedBackground(p, en, where) {
  if (en === null && p.background !== null) errors.push(`${where}: the English is null, so the German is null`);
  if (en === null) return;
  if (!text(p.background)) errors.push(`${where}: "background" is missing; the English has one`);
  else { german(p.background, where); ratio(p.background, en, where); }
}

/** A writer's or reviewer's background: a text with its sources, or null; the reviewer's with a quote per fact. */
async function writtenBackground(p, written, fetched, where) {
  if (p.background !== null && !text(p.background)) errors.push(`${where}: "background" is a text or null`);
  const sources = p.sources ?? [];
  if (p.background === null && sources.length > 0) errors.push(`${where}: null background with sources; empty the sources`);
  if (text(p.background)) backgroundSources(p, sources, fetched, where);
  if (kind !== "review") return;
  if (text(p.background)) await quotes(p, where);
  reviewed(p, written, where);
}

/** A reviewer's background says whether it differs from the writer's, and why. */
function reviewed(p, written, where) {
  const differs = p.background !== (written?.background ?? null);
  if (differs !== (p.changed === true)) errors.push(`${where}: "changed" is ${p.changed} but the background ${differs ? "differs from" : "is"} the writer's; set it to ${differs}`);
  if (differs && !(p.findings?.length > 0)) errors.push(`${where}: changed without a finding`);
}

/** A background's sources: at least one, each an https URL, each opened by the reviewer. */
function backgroundSources(p, sources, fetched, where) {
  if (sources.length === 0) errors.push(`${where}: a background needs the page(s) it rests on in "sources"`);
  for (const s of sources) {
    if (!/^https:\/\//.test(s)) errors.push(`${where}: source "${s}" is not an https URL`);
    if (kind === "review" && ![...fetched].some((f) => sameSource(f, s))) errors.push(`${where}: source ${s} is not among "fetched"; open it and check the background claim by claim`);
  }
  if (/[‘’]/.test(p.background)) errors.push(`${where}: curly apostrophe; use a straight one`);
}

/** Every fact a reviewer keeps comes with the sentence of its page, which must be on that page. */
async function quotes(p, where) {
  if (!(p.checks?.length > 0)) errors.push(`${where}: "checks" is empty; give each fact you keep with the sentence of the page that states it`);
  for (const c of p.checks ?? []) {
    if (!text(c.quote) || c.quote.length < 15) { errors.push(`${where}: the check of "${c.fact}" needs the page's sentence in "quote"`); continue; }
    const page = await pageText(c.source);
    if (page === null) errors.push(`${where}: the source ${c.source} of "${c.fact}" could not be fetched; give the page's URL as https://en.wikipedia.org/wiki/<Title> or the Wikibooks page`);
    else if (!page.includes(normal(c.quote))) errors.push(`${where}: the quote for "${c.fact}" is not on ${c.source}; copy the sentence word for word from the page, or drop the fact`);
  }
}

/** Text for comparing a quote with a page: wiki markup, references and templates out, spacing and quotes plain. */
function normal(value) {
  let t = value.replace(/<ref[^>]*\/>/g, "").replace(/<ref[^>]*>[\s\S]*?<\/ref>/g, "").replace(/<[^>]+>/g, "");
  for (let before = ""; before !== t; ) { before = t; t = t.replace(/\{\{[^{}]*\}\}/g, ""); }
  t = t.replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, "$1").replace(/'{2,}/g, "");
  return t.replace(/[“”„"]/g, '"').replace(/[‘’]/g, "'").replace(/[–—]/g, "-").replace(/\s+/g, " ").toLowerCase().trim();
}

/** The page a source names, as normalised text, fetched once per run of the work folder; null when it cannot be had. */
async function pageText(source) {
  if (typeof source !== "string") return null;
  const url = source.split("#")[0];
  const m = url.match(/^https:\/\/([a-z]+\.wiki(?:pedia|books)\.org)\/wiki\/(.+)$/);
  const raw = m ? `https://${m[1]}/w/index.php?title=${m[2]}&action=raw` : url;
  const cache = `${work}/cache/${Buffer.from(raw).toString("base64url").slice(0, 200)}.txt`;
  if (existsSync(cache)) return readFileSync(cache, "utf8");
  try {
    const response = await fetch(raw, { headers: { "User-Agent": "uberschach-content-check/1.0" } });
    if (!response.ok) return null;
    const page = normal(await response.text());
    mkdirSync(`${work}/cache`, { recursive: true });
    writeFileSync(cache, page);
    return page;
  } catch {
    return null;
  }
}

/** A fetched URL that opens the page a source names: the raw form of the same title counts. */
function sameSource(fetchedUrl, source) {
  const title = (u) => {
    const m = u.match(/[?&]title=([^&]+)/) ?? u.match(/\/wiki\/([^?#]+)/);
    return m ? decodeURIComponent(m[1]).replace(/_/g, " ").toLowerCase() : u;
  };
  return fetchedUrl === source || title(fetchedUrl) === title(source);
}

for (const w of warnings) console.log(`warning: ${w}`);
for (const e of errors) console.log(`ERROR: ${e}`);
if (errors.length) process.exit(1);
console.log(`OK${warnings.length ? `, ${warnings.length} warning(s)` : ""}`);
