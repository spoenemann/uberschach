# Content tools

The serve step that `npm run build` and `npm run dev` run, and the tools and
briefs for agents that write the opening book: new entries along the named
lines (below), and the rework of the strategy notes, one writer and one
reviewer per followed position, as the explorer plan's decision log
describes (`docs/exec-plans/active/0002-opening-explorer.md`, Named lines;
Strategy notes). They run under plain Node from the repository root; Node runs the
TypeScript sources of `src/domain/` and `src/content/` directly, so nothing
is built first. The content itself is JSON under `src/content/lines/`, one
module per followed position: `<id>.json` the data, `<id>.en.json` and
`<id>.de.json` the prose (`docs/localization.md`, Opening content). The
working files (node files, agent output) go in a working folder outside the
repository, named `<work>` below.

| File | What it is |
|---|---|
| `serve.mjs` | `npm run build:openings`: builds the book with every check and writes the served form into `public/openings/` (`docs/adr/0001-opening-book-as-fetched-json.md`). |
| `standard.md` | What a strategy note says and avoids, with examples; both briefs point to it. |
| `brief-writer.md` | The writer's brief: lift, trim or keep each note of a position, in English. |
| `brief-reviewer.md` | The reviewer's brief: approve or correct each note, then write the German. |
| `board.mjs` | The board after a line, what attacks a square, what a piece attacks: for checking a note's claims. |
| `node-file.mjs` | Writes `<work>/nodes/<id>.json` per followed position: moves, ratings, treatment, current notes, names and sources. |
| `validate.mjs` | Checks a writer's or reviewer's file against its node file; both agents run it until it prints OK. |
| `apply.mjs` | Writes reviewed notes into the prose files (`<id>.<lang>.json`, two-space JSON), leaving unchanged notes as they are. Writes nothing while a German note is still the old text under a changed English (set `"deUnchanged": true` on a note whose German already fits) or is under 0.6 or over 2 times the length of its English. |
| `compare.mjs` | Old and new notes of a position side by side, with the reviewer's findings. |
| `frontier.mjs` | Writes the batches of new content (Named lines, below): the named moves the book lacks, grouped by family, with the names the book lacks. |
| `brief-new-writer.md`, `brief-new-reviewer.md`, `brief-translator.md` | The briefs of a batch: rate and explain its moves and write the backgrounds; check them against the sources and the board; write the German. |
| `brief-names.md` | The brief for the German of the new names, a family at a time, against the book's glossary. |
| `validate-batch.mjs` | Checks a batch's writer, reviewer or translator file, or a names file, against its input; the agents run it until it prints OK. |
| `add.mjs` | Writes the finished batches and names into the modules, moving a position that gains moves two plies below its module's root into a module of its own. |
| `lib.mjs` | Shared: the rules engine, the content modules as data (through `src/content/files.ts`), the named lines (`src/content/named.ts`), keys, ids and file paths. |

## A run

```sh
node scripts/content/node-file.mjs <work>                  # every followed position; or name lines
# the workflow below: writer, then reviewer, per position
node scripts/content/apply.mjs <work>/out/*.review.json
node scripts/content/compare.mjs <work> e4-e5 > /tmp/e4-e5.md
npm run check
```

The workflow, for Claude Code's Workflow tool, with
`args: { repo, work, ids }`. The ids are the content of `<work>/ids.json`,
which `node-file.mjs` writes, passed as they are: the first full run lost
15 positions to ids typed from memory.

```js
export const meta = {
  name: 'strategy-notes',
  description: 'Rework the strategy notes: per position a Sonnet writer, then a Sonnet reviewer',
  phases: [{ title: 'Write', model: 'sonnet' }, { title: 'Review', model: 'sonnet' }],
}
const { repo, work, ids } = args
const shell = `Run the tools from the repository root ${repo}; the shell does not keep a working directory between commands, so give paths in full and do not cd elsewhere.`
return pipeline(
  ids,
  (id) => agent(
    `You are the writer. Read ${repo}/scripts/content/brief-writer.md and follow it for the position with id "${id}": its node file is ${work}/nodes/${id}.json, your output ${work}/out/${id}.writer.json. ${shell}`,
    { label: `write:${id}`, phase: 'Write', model: 'sonnet', effort: 'medium' },
  ),
  (written, id) => typeof written === 'string' && written.includes('OK')
    ? agent(
        `You are the reviewer. Read ${repo}/scripts/content/brief-reviewer.md and follow it for the position with id "${id}": its node file is ${work}/nodes/${id}.json, the writer's file ${work}/out/${id}.writer.json, your output ${work}/out/${id}.review.json. ${shell}`,
        { label: `review:${id}`, phase: 'Review', model: 'sonnet', effort: 'medium' },
      ).then((reviewed) => ({ id, written, reviewed }))
    : { id, written, reviewed: null },
)
```

The rework of 2026-10-23 is in the plan's progress log: the test run on
the first move, the full run, and what each changed in these briefs.

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
