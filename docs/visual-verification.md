# Visual verification

`npm run check:visual` (`scripts/visual-check.mjs`, the last step of
`npm run check`) renders the built app in headless Chrome at the GitHub
Pages project path, applies universal invariants, and writes screenshots. It
exists because typecheck, lint, the jsdom tests and the build all stay green
over wrong rendered output: jsdom computes no layout, so a blank page or a
misaligned board passes every other check. A change is verified at the
pixels it ships, not at the code that produces it.

## Running it

1. `npm run build` — the check renders the production build in `dist/`,
   which is what Pages deploys, never the dev server. It fails with
   instructions if `dist/` is missing.
2. `npm run check:visual` — the root route; or
   `npm run check:visual -- / '#/openings'` for given routes, relative to
   the project path. Arguments ending in `.mjs` plug in ad-hoc check modules
   (below). It serves `dist/` itself on an ephemeral port; nothing else
   needs to run. About 2 s for one route.

Every route is visited at a desktop and a phone viewport (the layout stacks
below 40rem: `design-docs/design-system.md`, Layout), and each visit writes
a full-page screenshot to
`<tmpdir>/uberschach-visual-check/<route>-<viewport>.png`; the run prints
the directory. Open the PNG files and look.

It uses the **locally installed Google Chrome** (override with
`CHROME_PATH=/path/to/chrome`) through `playwright-core` and deliberately
downloads no browser: no `playwright install`, no browser cache in CI.
GitHub's `ubuntu-latest` image ships Google Chrome (checked 2026-10-23 in
the Ubuntu 24.04 image readme, Chrome 155; `ubuntu-latest` moves to Ubuntu
26.04 in November 2026:
https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md),
so CI needs no setup step. If a CI run cannot launch Chrome after an image
change, add a setup-chrome step to `.github/workflows/ci.yml` rather than
taking the check out of `npm run check`.

## What it checks: universal invariants only

On every visit:

- no console error (`console-errors`);
- no uncaught exception (`uncaught-exception`), which Chrome reports
  separately from console errors;
- every same-origin request resolves (`broken-resources`), the route
  itself included;
- no request off the origin (`third-party-request`): the design system's
  "no web fonts, no third-party request" (`design-docs/design-system.md`,
  Cross-cutting concerns) as a check;
- React mounted into `#root` (`not-mounted`), so a blank page fails instead
  of being left to eyeballing;
- every image loads and carries an `alt` attribute (`images`).

That is the complete list, by design: the script holds only invariants
that hold on every route, never a check about a specific route, feature or
content (see Extending it).

**It serves the build under `/uberschach/`, the Pages project path, written
in the script and not read from `vite.config.ts`.** A wrong `base` there
builds fine, and the deployed page then requests its script from a path
that does not exist; here that is a `broken-resources` failure. The first
version read the base from the Vite config and agreed with a deliberately
wrong value instead of catching it (found while proving the check on
2026-10-23). The server has no SPA fallback either, because Pages has none:
a route must exist as a file in `dist/`, or be a hash route.

**External requests are blocked** during the run, so it is deterministic
and works offline; each one is also reported as `third-party-request`.

## Verifying a specific change: ad-hoc, disposable checks

Task-specific assertions (the board has 64 squares, the move list shows the
move, a font applies) are **not** added to the script: that would grow a
rendering test suite, written mostly by agents verifying their own changes,
for the maintainer to review. Component behaviour is tested in Vitest with
jsdom. For rendering:

1. Run the check on the affected routes and **look at the screenshots**. A
   blank frame, an overlapping layout or wrong styling passes every
   programmatic check and is still a failure.
2. Where looking is not enough, write a **disposable module** and pass its
   path; any argument ending in `.mjs` is loaded as one, so the serve,
   launch and visit plumbing is reused:

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

   The default export runs after every visit with the page loaded; `page`
   is the Playwright page, so the module may click, type and take its own
   screenshots into `shotDir`. Report findings through
   `fail(rule, message)` so they reach the output and the exit code; a
   thrown error is reported too. Keep the module in a temp directory, cite
   the run's output as evidence in the commit message or the conversation,
   and throw it away. Never commit it.

No pixel comparison against stored baselines: the type is system faces,
which render differently on macOS and on CI's Linux, so a baseline fails on
every machine that did not record it.

## Exceptions

A genuinely expected console error on a route goes into `EXPECTED_CONSOLE`
at the top of `scripts/visual-check.mjs`, as `{ route, pattern, reason }`:
a reviewable suppression, never a weakened or removed check.

## Extending it

Only for a new *universal* invariant, driven by a defect that shipped or
nearly shipped, added in the same change as the fix with the incident cited
in the check's comment, never speculatively, and never for a route, a
feature or content. Failure messages follow the existing pattern: what is
wrong, why the rule exists, what to do, how to record a legitimate
exception.
