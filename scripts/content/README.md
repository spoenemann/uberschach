# Content tools

The serve step that `npm run build` and `npm run dev` run, and the tools and
briefs for agents that write the opening book: new entries along the named
lines, and the gaps, more moves for the positions along them that have
fewer than three or none rated 5 (both below; the explorer plan's decision
log, `docs/exec-plans/completed/0002-opening-explorer.md`, Named lines; Gaps);
and the comparison of the finished book with an engine's opening database
(Against the cloud database, below).
They run under plain Node from the repository root; Node runs the
TypeScript sources of `src/domain/` and `src/content/` directly, so nothing
is built first. The content itself is JSON under `src/content/lines/`, one
module per subtree of the book: `<id>.json` the data, `<id>.en.json` and
`<id>.de.json` the prose (`docs/localization.md`, Opening content). The
working files (batches, agent output) go in a working folder outside the
repository, named `<work>` below. The tools of the strategy notes' rework
of 2026-10-23 are in the history (the plan's progress log).

| File | What it is |
|---|---|
| `serve.mjs` | `npm run build:openings`: builds the book with every check and writes the served form into `public/openings/` (`docs/adr/0001-opening-book-as-fetched-json.md`). |
| `standard.md` | What a strategy note says and avoids, with examples; every brief points to it. |
| `board.mjs` | The board after a line, what attacks a square, what a piece attacks: for checking a note's claims. |
| `frontier.mjs` | Writes the batches of new content (Named lines, below): the named moves the book lacks, grouped by family, with the names the book lacks. |
| `brief-new-writer.md`, `brief-new-reviewer.md`, `brief-translator.md` | The briefs of a batch: rate and explain its moves and write the backgrounds; check them against the sources and the board; write the German. |
| `brief-names.md` | The brief for the German of the new names, a family at a time, against the book's glossary. |
| `gaps.mjs` | Writes the batches of the gaps (Gaps, below): each position with moves but fewer than three, or none rated 5, with its moves, notes and legal moves, grouped by family. |
| `brief-gap-writer.md`, `brief-gap-reviewer.md` | The briefs of a gaps batch: add the main answer and the alternatives, revise what no longer fits; check them. The German is `brief-translator.md`'s. |
| `validate-batch.mjs` | Checks a batch's writer, reviewer or translator file, or a names file, against its input; the agents run it until it prints OK. |
| `add.mjs` | Writes the finished batches and names into the modules, moving a position that gains moves two plies below its module's root into a module of its own; a gaps batch's moves and revisions go into the module of their position. |
| `merge-modules.mjs` | Folds small modules into the modules above them, up to the size the layout test allows (`docs/adr/0002-opening-modules-folded-to-a-size-budget.md`); with `--refold`, takes the whole book apart first and folds it again, for modules grown wider than the budget. |
| `cdb.mjs` | Compares the book with the Chinese Chess Cloud Database (Against the cloud database, below): every rating beside the engine's score of its move, the sound moves the book lacks, the engine's line beyond the book; writes `<work>/cdb/comparison.json`, caching the responses in `<work>/cdb/cache/`. |
| `lib.mjs` | Shared: the rules engine, the content modules as data (through `src/content/files.ts`), the named lines (`src/content/named.ts`), keys, ids and file paths. |

## Procedure

Every batch is written by one agent, checked by another that did not write
it, and put into German by a third, as the explorer spec promises (The
database): the reviewer reads the sources and the board, claim by claim,
and corrects or drops what they do not bear. The workflows below run the
three per batch; `validate-batch.mjs` refuses an output file that does not
match its input, and an agent runs it until it prints OK. A run that spans
sessions has a plan under `docs/exec-plans/active/`, and its findings (what
the reviewers changed and why) go there; the first runs' are in the
explorer plan's progress log. A rating the sources do not settle is a
question to the maintainer, with a recommendation; everything else is
decided in the review.

## Named lines

Beyond the breadth-first plies the book follows the lines of the Lichess
dataset in `src/content/named/`, cut at `NAMED_LINE_PLIES`
(`src/content/named.ts`; the spec, The database). New content for them is
written in batches of about 35 moves, a family's positions together, each
by a Sonnet writer at high effort, then checked by a Sonnet reviewer and put
into German by a Sonnet translator, both at medium effort; the new names
are put into German beside them, a family at a time.

```sh
node scripts/content/frontier.mjs <work>          # batches/, ids.json, names/, name-ids.json, glossary.json
# the workflow below, with args { repo, work, ids, nameIds } from ids.json and name-ids.json
node scripts/content/add.mjs <work>               # writes every finished batch and name into src/content/lines/
node scripts/content/merge-modules.mjs            # folds the small modules add.mjs made
npm run check
```

```js
export const meta = {
  name: 'named-lines',
  description: 'New book entries for the named lines: per batch a Sonnet writer (high), then a Sonnet reviewer and a Sonnet translator (medium)',
  phases: [{ title: 'Names', model: 'sonnet' }, { title: 'Write', model: 'sonnet' }, { title: 'Review', model: 'sonnet' }, { title: 'Translate', model: 'sonnet' }],
}
const { repo, work, ids, nameIds = [] } = args
const shell = `Run the tools from the repository root ${repo}; the shell does not keep a working directory between commands, so give paths in full and do not cd elsewhere. Write only your output file; change nothing in the repository.`
const ok = (reply) => typeof reply === 'string' && /\bOK\b/.test(reply)
const names = parallel(nameIds.map((id) => () => agent(
  `You translate names. Read ${repo}/scripts/content/brief-names.md and follow it for the names file ${work}/names/${id}.json; the glossary is ${work}/glossary.json, your output ${work}/out/${id}.names.json. ${shell}`,
  { label: `names:${id}`, phase: 'Names', model: 'sonnet', effort: 'medium' },
).then((reply) => ({ id, reply }))))
const batches = pipeline(
  ids,
  (id) => agent(
    `You are the writer. Read ${repo}/scripts/content/brief-new-writer.md and follow it for the batch with id "${id}": its batch file is ${work}/batches/${id}.json, your output ${work}/out/${id}.writer.json. ${shell}`,
    { label: `write:${id}`, phase: 'Write', model: 'sonnet', effort: 'high' },
  ),
  (written, id) => ok(written)
    ? agent(
        `You are the reviewer. Read ${repo}/scripts/content/brief-new-reviewer.md and follow it for the batch with id "${id}": its batch file is ${work}/batches/${id}.json, the writer's file ${work}/out/${id}.writer.json, your output ${work}/out/${id}.review.json. ${shell}`,
        { label: `review:${id}`, phase: 'Review', model: 'sonnet', effort: 'medium' },
      ).then((reviewed) => ({ written, reviewed }))
    : { written, reviewed: null },
  (r, id) => ok(r.reviewed)
    ? agent(
        `You are the translator. Read ${repo}/scripts/content/brief-translator.md and follow it for the batch with id "${id}": its batch file is ${work}/batches/${id}.json, the reviewed file ${work}/out/${id}.review.json, your output ${work}/out/${id}.de.json. ${shell}`,
        { label: `translate:${id}`, phase: 'Translate', model: 'sonnet', effort: 'medium' },
      ).then((translated) => ({ id, ...r, translated }))
    : { id, ...r, translated: null },
)
const [batchResults, nameResults] = await Promise.all([batches, names])
return { batches: batchResults, names: nameResults }
```

## Gaps

The named lines leave many positions with the one or two moves they play,
sometimes none of them the best. Every position with moves gets at least
three (every legal move where fewer are legal) and one rated 5, the main
answer, the alternatives rated 3 to 5 where the position has them; the
moves added are not followed. A batch holds a family's positions, about 25
moves to add; per batch a Sonnet writer at high effort adds the moves and
revises ratings and notes that no longer fit, a Sonnet reviewer and a
Sonnet translator at medium effort check them and write the German.

```sh
node scripts/content/gaps.mjs <work> --size 25        # batches/, ids.json
# the workflow below, with args { repo, work, ids } from ids.json
node scripts/content/add.mjs <work>                   # writes every finished batch into src/content/lines/
node scripts/content/merge-modules.mjs --refold       # folds the widened book again within the budget
npm run check
```

```js
export const meta = {
  name: 'gaps',
  description: 'More moves for thin positions: per batch a Sonnet writer (high), then a Sonnet reviewer and a Sonnet translator (medium)',
  phases: [{ title: 'Write', model: 'sonnet' }, { title: 'Review', model: 'sonnet' }, { title: 'Translate', model: 'sonnet' }],
}
const { repo, work, ids } = args
const shell = `Run the tools from the repository root ${repo}; the shell does not keep a working directory between commands, so give paths in full and do not cd elsewhere. Write only your output file; change nothing in the repository.`
const ok = (reply) => typeof reply === 'string' && /\bOK\b/.test(reply)
return pipeline(
  ids,
  (id) => agent(
    `You are the writer. Read ${repo}/scripts/content/brief-gap-writer.md and follow it for the batch with id "${id}": its batch file is ${work}/batches/${id}.json, your output ${work}/out/${id}.writer.json. ${shell}`,
    { label: `write:${id}`, phase: 'Write', model: 'sonnet', effort: 'high' },
  ),
  (written, id) => ok(written)
    ? agent(
        `You are the reviewer. Read ${repo}/scripts/content/brief-gap-reviewer.md and follow it for the batch with id "${id}": its batch file is ${work}/batches/${id}.json, the writer's file ${work}/out/${id}.writer.json, your output ${work}/out/${id}.review.json. ${shell}`,
        { label: `review:${id}`, phase: 'Review', model: 'sonnet', effort: 'medium' },
      ).then((reviewed) => ({ written, reviewed }))
    : { written, reviewed: null },
  (r, id) => ok(r.reviewed)
    ? agent(
        `You are the translator. Read ${repo}/scripts/content/brief-translator.md and follow it for the batch with id "${id}": its batch file is ${work}/batches/${id}.json, the reviewed file ${work}/out/${id}.review.json, your output ${work}/out/${id}.de.json. ${shell}`,
        { label: `translate:${id}`, phase: 'Translate', model: 'sonnet', effort: 'medium' },
      ).then((translated) => ({ id, ...r, translated }))
    : { id, ...r, translated: null },
)
```

## Against the cloud database

The ratings are the sources' judgements for a club player, not an engine's
(the spec, The database), but an engine's opening database is an independent
check on them: a move rated 5 that the engine finds half a pawn worse than
the position's best, a move rated 1 that it finds as good as the best, a best
move the book lacks, are questions for a reviewer. `cdb.mjs` asks the Chinese
Chess Cloud Database (chessdb.cn, "CDB"), the public engine-scored database
that the open source lichess-bot plays its openings from: for every position
of the book that has moves, CDB's known moves with their score in centipawns
for the side to move (its `queryall` API; no key, about a second a request,
the responses cached so a second run costs seconds). The Lichess opening
explorer, the other public source, answers anonymous requests with 401 since
2026-10-28 and would need a token (the plan,
`docs/exec-plans/active/0003-book-against-chessdb.md`, Decision log).

```sh
node scripts/content/cdb.mjs <work>              # <work>/cdb/comparison.json; --limit <n> for a sample, --no-follow to skip the lines beyond
```

The comparison, per position: each book move with its rating, CDB's score,
its delta to the best move and the rating that delta implies; the flags
`overrated`, `underrated` and `inverted` (a sibling rated lower scores
clearly better); whether a move of the book ties CDB's best; and the sound
moves (within 30 centipawns of the best) the book lacks. Then the lines
beyond the book: from each best move the book lacks, CDB's top move at each
step to the depth the book follows (`NAMED_LINE_PLIES`), ending early where
the line transposes into a position the book has moves at. The thresholds
are constants at the top of the script and repeated in the file's `method`,
so a follow-up step can judge the flags on the raw deltas. An engine finds
nearly every first move equal, so the flags at the shallowest plies say
less than at the deeper ones; what a run found, and what was done about it,
goes into its plan.
