// The checks of a gaps or bounds batch's output (README.md, Gaps; Bounds), called by
// validate-batch.mjs with its context: the kind of file, the output, the work folder, the error
// and warning lists and the shared text helpers. A gaps batch adds moves and revises ratings
// and notes; a bounds batch does the same where the engine's bounds (lib.mjs, BOUNDS) question
// a rating, and may keep a rating outside its bound with a reason.
import { BOUNDS_FROM_PLY, boundBroken } from "./lib.mjs";

let kind;
let out;
let work;
let errors;
let warnings;
let readJson;
let text;
let note;
let german;
let ratio;

/**
 * A gaps batch (README.md, Gaps): the writer's and the reviewer's added moves and revisions,
 * each position left with at least `need` more moves and a move rated 5; the translator's German
 * of every added move and every revised note.
 */
export function validateGaps(batch, context) {
  ({ kind, out, work, errors, warnings, readJson, text, note, german, ratio } = context);
  if (kind === "translate") {
    gapsGerman(readJson(`${work}/out/${out.id}.review.json`, "the reviewer's file"));
    return;
  }
  const positions = new Map(batch.positions.map((p) => [p.line, p]));
  const added = gapsAdded(positions);
  const revised = gapsRevised(positions);
  const kept = gapsKept(positions, revised);
  for (const p of batch.positions) {
    const own = [...added.values()].filter((m) => m.from === p.line);
    if (p.engine) {
      for (const e of p.existing) boundOfExisting(p, e, revised, kept);
      for (const m of own) boundOfAdded(p, m);
      breadthFirstRaise(p, own, revised);
    }
    const ratings = [...p.existing.map((e) => revised.get(`${p.line}|${e.san}`)?.rating ?? e.rating), ...own.map((m) => m.rating)];
    if (own.length < p.need.moves) errors.push(`position "${p.line}": ${own.length} move(s) added, ${p.need.moves} needed, so that it has at least ${p.existing.length + p.need.moves}`);
    if (!ratings.includes(5)) errors.push(`position "${p.line}": no move rated 5; add the move the sources treat as the main answer, or rate an existing move 5 under "revisions" if it is that move`);
  }
  if (kind === "review") gapsAgainstWriter(readJson(`${work}/out/${out.id}.writer.json`, "the writer's file"), added, revised, kept);
}

/** The moves kept outside the engine's bounds, each an existing move with the reason, not also revised; by key. */
function gapsKept(positions, revised) {
  const kept = new Map();
  for (const k of out.kept ?? []) {
    const where = gapWhere(k, "kept");
    const old = positions.get(k.from)?.existing.find((e) => e.san === k.san);
    if (!old) { errors.push(`${where}: not a move of the batch's "existing"`); continue; }
    if (kept.has(gapId(k))) errors.push(`${where}: appears twice`);
    kept.set(gapId(k), k);
    if (revised.has(gapId(k))) errors.push(`${where}: also under "revisions"; a move is revised or kept, not both`);
    if (!text(k.reason)) errors.push(`${where}: "reason" is missing; say, from a source or the board, why the rating stands against the engine`);
  }
  return kept;
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

/** The engine's delta of a move of the position, or undefined where the engine does not know the move. */
function deltaOf(p, san) {
  return p.engine.moves.find((m) => m.san === san)?.delta;
}

/**
 * An existing move's final rating against its bound (lib.mjs, BOUNDS): outside it, the move is
 * revised with the reason in "engine", or kept under "kept" with the reason.
 */
function boundOfExisting(p, e, revised, kept) {
  const key = `${p.line}|${e.san}`;
  const r = revised.get(key);
  const rating = r?.rating ?? e.rating;
  const broken = boundBroken(rating, deltaOf(p, e.san));
  const where = gapWhere({ from: p.line, san: e.san }, r ? "revision" : "move");
  if (!broken) {
    if (!r && kept.has(key)) warnings.push(`${where}: under "kept", but rated ${e.rating} it is within the engine's bound; leave it out of "kept"`);
  } else if (r) {
    if (!text(r.engine)) errors.push(`${where}: rated ${rating}, ${broken}; rate it within the bound, or say in "engine" why the rating stands against the engine`);
  } else if (!kept.has(key)) {
    errors.push(`${where}: rated ${e.rating}, ${broken}; revise it under "revisions", or keep it under "kept" with the reason`);
  }
}

/** An added move's rating against its bound: outside it only with the reason in "engine". */
function boundOfAdded(p, m) {
  const broken = boundBroken(m.rating, deltaOf(p, m.san));
  if (broken && !text(m.engine)) errors.push(`${gapWhere(m, "move")}: rated ${m.rating}, ${broken}; rate it within the bound, or say in "engine" why the rating stands against the engine`);
}

/** At a breadth-first position (the batch lists its "unfollowed" moves) a move rated 4 or 5 reaches a position the book has. */
function breadthFirstRaise(p, own, revised) {
  if (!p.unfollowed) return;
  const final = [...p.existing.map((e) => ({ san: e.san, rating: revised.get(`${p.line}|${e.san}`)?.rating ?? e.rating })), ...own];
  for (const m of final) {
    if (m.rating >= 4 && p.unfollowed.includes(m.san)) {
      errors.push(`${gapWhere({ from: p.line, san: m.san }, "move")}: rated ${m.rating}, but the position after it is not in the book, which the breadth-first plies require of a move rated 4 or 5 (ply ${BOUNDS_FROM_PLY} and before); rate it 3 at most`);
    }
  }
}

/** The reviewer's file against the writer's: "changed" and the findings true, nothing lost without a finding. */
function gapsAgainstWriter(writer, added, revised, kept) {
  keptAgainstWriter(writer, revised, kept);
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


/** Every move the writer kept is kept by the reviewer too, or revised with a finding. */
function keptAgainstWriter(writer, revised, kept) {
  for (const k of writer.kept ?? []) {
    if (!kept.has(gapId(k)) && !revised.has(gapId(k))) errors.push(`${gapWhere(k, "kept")}: the writer kept it; keep it too, or revise it with a finding`);
  }
}
