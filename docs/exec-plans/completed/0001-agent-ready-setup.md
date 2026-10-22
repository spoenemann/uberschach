# Exec plan: day-one agent-ready (AX) setup

- **Status**: completed on 2026-10-23
- **Goal**: the empty repo becomes a scaffold an agent can bootstrap, change,
  and verify with one command each, with the project's foundations recorded
  in durable docs. Done when every check fires on a deliberate failure and
  AGENTS.md cites every command and check.

## Acceptance criteria

- [x] Product brief and ARCHITECTURE.md exist and contain only the
      maintainer's answers or verified facts; this plan's decision log holds
      the reasons.
- [x] One command bootstraps a fresh checkout; one command runs every check.
- [x] Typecheck, lint (with module-boundary rules) and unit tests each fail
      on a deliberate violation, with a self-correction message.
- [x] The check suite runs on `main` in CI (first run green, 39 s, run
      39863700074).
- [x] AGENTS.md (with a pure-import CLAUDE.md) cites every verified command
      and every check.
- [x] No chess logic, screens, or seeded content beyond a smoke-tested
      placeholder.

## Decomposition

- [x] Interview round 1: intent, users, platform, fluency, success,
      out-of-scope, agent tools, workflow.
- [x] Interview round 2: stack, topology, hosting, risk profile.
- [x] Interview round 3: module boundaries, change couplings, constraints.
- [x] ARCHITECTURE.md with the layers and import rules.
- [x] Scaffold on the chosen stack; bootstrap and task-runner commands.
- [x] Sensors wired: typecheck, lint, boundaries, tests, CI.
- [x] AGENTS.md + CLAUDE.md projection.
- [x] Proof: every sensor fires on a deliberate failure; claim check; roadmap.
- [x] Maintainer review before the first commit: decision records folded
      into this log, audience corrected, setup simplified.
- [x] First push: CI green and the Pages deploy live.

## Progress log

- 2026-10-22: Round 1 answered. Product brief written.
- 2026-10-22: Round 2 answered. Stack, topology and hosting decided (see
  the decision log). Risk profile: "nothing much", pragmatic bar.
- 2026-10-22: Round 3 answered. ARCHITECTURE.md written with the four
  layers. Interview complete; scaffolding and sensors next.
- 2026-10-23: Scaffold, sensors, CI workflow and AGENTS.md written. Proof by
  deliberate violations, all captured: tsc (TS2322), lint (layer import,
  React in domain, browser global in domain, storage in ui, file outside the
  layers, undescribed suppression, complexity on the formatter itself),
  Vitest (DOM access fails in the node project; per-file coverage threshold
  fails on an untested and on a test-less domain file). `npm run check`
  green in ~4 s warm.
- 2026-10-23: Maintainer review before the first commit. Four decision
  records removed and folded into the decision log below; the maintainer's
  name removed from the repo; audience corrected in the product brief and
  AGENTS.md; Prettier, secretlint and the git hooks removed.
- 2026-10-23: First commit pushed by the maintainer. CI run 39863700074
  green in 39 s; https://spoenemann.github.io/uberschach/ serves the page
  and its script (both HTTP 200, checked with curl). Plan completed.

## Decision log

- 2026-10-22: Workflow: agents commit directly to `main` once
  `npm run check` is green; only the maintainer pushes, and a push deploys.
  Chosen by the maintainer over the recommended pull-request review.
  Consequence: the check suite is the only thing between a change and
  `main`, so a defect class no check observes ships, and widening check
  coverage comes before any further loosening.
- 2026-10-22: Stack: TypeScript strict, Vite, React, Vitest, ESLint, npm.
  Rejected: Svelte and Vue (thinner training-data coverage), no framework
  (more hand-rolled UI code for agents to get wrong). Decisive: strict
  TypeScript is a free always-on check, and the most common browser stack
  keeps agent output predictable. Installed locally: Node 24, npm 12.
- 2026-10-22: Topology: static single-page app in one npm package, no
  backend. Rejected: SPA plus a Node API, a full-stack framework, a monorepo
  (nothing in v1 needs any of them). A backend or a second package later is
  a new decision here, not a quiet addition.
- 2026-10-22: Hosting: GitHub Pages published by GitHub Actions on `main`.
  Rejected: local only, Vercel/Netlify/Cloudflare (another account). Pages
  was already enabled with Actions as the source (checked with
  `gh api repos/spoenemann/uberschach/pages` on 2026-10-22).
- 2026-10-22: Agent tools in play: Claude Code only. CLAUDE.md is the only
  projection of AGENTS.md needed.
- 2026-10-22: Layers domain -> content -> ui -> app, downward imports only
  (recorded in ARCHITECTURE.md).
- 2026-10-22: Definition of done: a test with every domain change, and the
  capability's spec updated in the same change. "A decision record proposed
  before architectural changes" was offered and not selected.
- 2026-10-22: No constraints beyond the Pages workflow being sensitive.
- 2026-10-22: Chess rules and board libraries are not chosen until the
  opening explainer is specified; nothing in the scaffold depends on them.
- 2026-10-23: ESLint instead of the Vite template's oxlint: the layer rules,
  type-aware rules and the guidance formatter need ESLint's plugin API.
- 2026-10-23: `npm audit` reports a high advisory in `braces` (via
  micromatch, via eslint-plugin-boundaries 7.2.1), a stack-exhaustion DoS
  on deeply nested glob patterns. Tolerated: dev-only, patterns come from
  our own config, and npm's only fix is downgrading the plugin to 1.1.1.
  `npm audit` is therefore not in the check suite; see the roadmap.
- 2026-10-23: The boundaries `dependencies` rule needs `checkAllOrigins:
  true` to see external packages; without it the React policy was silent
  (found during the proof, fixed in eslint.config.js).
- 2026-10-23: No separate decision-record folder at this stage of the
  project (maintainer's call); decisions and their reasons live in this log.
- 2026-10-23: Audience: built first for the maintainer's own training, and
  published on GitHub Pages for anyone who finds it useful; "single user"
  was wrong (maintainer's correction).
- 2026-10-23: Prettier, secretlint and the git hooks removed to simplify
  the setup (maintainer's call). Consequence: no formatter, so style is
  whatever each change leaves; no secrets scan, which the app does not need
  since it has no backend; and no pre-commit gate, so "run `npm run check`
  before every commit" is an instruction in AGENTS.md, with CI on `main` as
  the mechanical backstop before a deploy.

## Open questions

- Opening explainer specification (owner: the maintainer; blocks feature
  work, not this setup).

## Roadmap (deferred, foundational first)

Item 1 is done. Each remaining item becomes its own plan when picked up.

1. ~~Push, watch the CI run and the Pages deploy, then move this plan to
   `completed/`.~~ Done 2026-10-23.
2. When the opening explainer is specified: its product spec first, then an
   exec plan; the chess rules and board library choice is logged there.
3. A browser-level smoke test (Playwright against `vite preview`) once a
   real screen exists: it is the only check that sees a blank page.
4. Dependency audit as a scheduled check once the `braces` advisory is
   resolvable without a downgrade; until then review `npm audit` by hand.
5. Re-audit routine: after the first capability ships, re-run the AX
   doc-freshness check and the litmus test over AGENTS.md, and prune.
6. Mutation testing over `src/domain/` once agent-written tests accumulate;
   coverage says a line ran, not that its effect was asserted.
