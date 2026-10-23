# Content tools

Tools and briefs for agents that rewrite the opening book's strategy
notes: one writer and one reviewer per followed position, as the
explorer plan's decision log describes
(`docs/exec-plans/active/0002-opening-explorer.md`, Strategy notes). They
run under plain Node from the repository root; Node runs the TypeScript
sources of `src/domain/` and `src/content/` directly, so nothing is built
first. The working files (node files, agent output) go in a working folder
outside the repository, named `<work>` below.

| File | What it is |
|---|---|
| `standard.md` | What a strategy note says and avoids, with examples; both briefs point to it. |
| `brief-writer.md` | The writer's brief: lift, trim or keep each note of a position, in English. |
| `brief-reviewer.md` | The reviewer's brief: approve or correct each note, then write the German. |
| `board.mjs` | The board after a line, what attacks a square, what a piece attacks: for checking a note's claims. |
| `node-file.mjs` | Writes `<work>/nodes/<id>.json` per followed position: moves, ratings, treatment, current notes, names and sources. |
| `validate.mjs` | Checks a writer's or reviewer's file against its node file; both agents run it until it prints OK. |
| `apply.mjs` | Writes reviewed notes into the prose modules, leaving unchanged notes as they are. Writes nothing while a German note is still the old text under a changed English (set `"deUnchanged": true` on a note whose German already fits) or is under 0.6 or over 2 times the length of its English. |
| `compare.mjs` | Old and new notes of a position side by side, with the reviewer's findings. |
| `lib.mjs` | Shared: the rules engine, the content modules as data, keys and ids. |

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
