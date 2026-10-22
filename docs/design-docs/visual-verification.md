# Design: visual verification

## Context and scope

`npm run check:visual` (harness: `scripts/visual-check.mjs`, run last by
`npm run check`) renders the built app in headless Chrome at the GitHub
Pages project path, applies universal invariants, and writes screenshots.
It exists because typecheck, lint, the jsdom tests and the build all stay
green over wrong rendered output: jsdom computes no layout, so a blank page
or a misaligned board passes every other check. A change is verified at the
pixels it ships, not at the code that produces it. Adopted on 2026-10-23,
ported from a harness in another of the maintainer's repositories to a
single-page app.

## Goals and non-goals

- Goal: one reproducible way, for agents and the maintainer alike, to see
  the app as deployed. The same run gates every commit and every CI run.
- Goal: the harness holds only what is true of every route, so a feature
  change never touches it and the maintainer never reviews a growing
  rendering test suite.
- Non-goal: a committed suite of visual or end-to-end assertions. Component
  behaviour is tested in Vitest with jsdom; anything task-specific about
  rendering is checked ad hoc and thrown away (see Design).
- Non-goal: pixel comparison against stored baselines. The type is system
  faces, which render differently on macOS and on CI's Linux, so a baseline
  fails on every machine that did not record it. Screenshots are for
  looking, never for comparing.

## Design

- **Mechanism** — the harness serves `dist/` with Vite's preview server,
  started programmatically under the GitHub Pages project path,
  `/uberschach/`, with `appType: "mpa"`. That is what Pages does: the app
  under the project path, a directory resolving to its `index.html`, a 404
  for anything else, no SPA fallback. The path is written in the harness on
  purpose rather than read from `vite.config.ts`: a wrong `base` there
  builds fine, and here it fails the way the deployed page would, requesting
  its script from a path that does not exist. `playwright-core` drives the
  locally installed Google Chrome (`CHROME_PATH` overrides the lookup) and
  downloads nothing; GitHub's `ubuntu-latest` runners ship Chrome, so CI
  needs no extra step. Routes are arguments, relative to the project path;
  without any, the root. Every route is visited at a desktop and a phone
  viewport, because the layout stacks below 40rem (`design-system.md`,
  Layout). Each visit writes a full-page screenshot to
  `<tmpdir>/uberschach-visual-check/<route>-<viewport>.png`; the run prints
  the directory.
- **Universal invariants**, checked on every visit. This is the complete
  list, by design:
  - no console error (`console-errors`); a genuinely expected one goes into
    the reviewable suppression list `EXPECTED_CONSOLE` at the top of the
    script, with a reason;
  - no uncaught exception (`uncaught-exception`), which Chrome reports on a
    separate channel from console errors;
  - every same-origin request resolves (`broken-resources`), including the
    route itself: the sensor for a wrong `base` in `vite.config.ts`, and for
    a route Pages would answer with a 404;
  - no request off the origin (`third-party-request`): the design system's
    "no web fonts, no third-party request" as a check. Such requests are
    also blocked, so the run is deterministic and works offline;
  - React mounted into `#root` (`not-mounted`), so a blank page is a
    failure rather than something left to eyeballing;
  - every image loads and carries an `alt` attribute (`images`).
- **Failure messages** say what is wrong, why the rule exists, what to do
  and how to record a legitimate exception, like the lint guidance.
- **Ad-hoc, disposable checks** — a task-specific assertion (the board has
  64 squares, the move list shows the move, a font applies) is written as a
  throwaway module, passed to the harness so the serve, launch and visit
  plumbing is reused, run, cited as evidence in the commit message or the
  conversation, and discarded:

  ```js
  // /tmp/check-board.mjs: disposable, never committed
  export default async ({ page, route, viewport, fail }) => {
    if (route !== "/" || viewport.name !== "desktop") return;
    const squares = await page.locator("[data-square]").count();
    if (squares !== 64) fail("board", `expected 64 squares, found ${squares}`);
  };
  ```

  ```sh
  npm run check:visual -- / /tmp/check-board.mjs
  ```

  The module's default export runs after every visit with the page loaded;
  `page` is the Playwright page, so it may click, type and take its own
  screenshots into `shotDir`. Findings go through `fail(rule, message)` so
  they reach the output and the exit code; a thrown error is reported too.
- **Key interfaces** — `scripts/visual-check.mjs` (the harness, its
  `PAGES_BASE`, `VIEWPORTS` and `EXPECTED_CONSOLE`); `npm run check:visual
  [routes...] [modules.mjs...]`; `CHROME_PATH`.

### Invariants

- The harness contains only checks that hold on every route. It grows only
  for a new universal invariant, driven by a defect that shipped or nearly
  shipped, added in the same change as the fix with the incident cited in
  the amendments below; never speculatively, never for a route or a
  feature.
- Ad-hoc modules are never committed. Their value is the evidence they
  produce, not the code.
- A legitimate exception to an invariant goes through `EXPECTED_CONSOLE`
  with a reason, never through weakening or removing a check.
- `npm run check` runs the harness after the build, so the invariants gate
  every commit and every CI run (AGENTS.md, Boundaries).

## Alternatives considered

- **A hand-rolled static server**, as in the harness this was ported from
  — the same behaviour in forty more lines; Vite's preview server does it
  in five.
- **`vite preview` as is** (`appType: "spa"`) — falls back to `index.html`
  for any path, so a route that Pages would answer with a 404 looks fine.
- **Taking the base path from `vite.config.ts`** — the first version did,
  and the harness then agreed with a deliberately wrong `base` instead of
  catching it (found while proving the sensor, 2026-10-23).
- **Vitest browser mode** — renders components in isolation in a real
  browser, not the built app at its base path, and its screenshot matchers
  are stored baselines (see non-goals).
- **A Playwright Test suite** — a second test runner and a growing,
  agent-written suite for the maintainer to review; exactly what the
  non-goals exclude.
- **Downloading a Playwright browser** — over 100 MB per machine and per
  CI run, to render in a browser that is installed anyway.
- **The agent's own browser tools against `npm run dev`** — good for a
  look, not reproducible, and never in CI.

## Cross-cutting concerns

- Routing: Pages has no SPA fallback. If the app ever uses path routes,
  each route needs a file in `dist/`, or the app uses hash routes; the
  harness fails on any route Pages would 404, which is the point.
- Chrome: `npm run check` needs Google Chrome installed, or `CHROME_PATH`.
  The failure message says so.
- Time: about 2 s for one route at two viewports.

## Amendments

- (none yet)
