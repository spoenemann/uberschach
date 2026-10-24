# Architecture

Where things live, what may depend on what, and the invariants the checks
enforce. Why it is built this way lives in the decision log of the setup plan
under `docs/exec-plans/`; what the product promises lives in
`docs/product-specs/`.

## Shape

- A static single-page app in one npm package. No backend, no database, no
  secrets: opening content is JSON in the repository, published beside the
  app as files the browser fetches on demand (`docs/adr/0001-opening-book-as-fetched-json.md`),
  and training progress lives in the visitor's browser storage.
- TypeScript in strict mode (with `noUncheckedIndexedAccess`), Vite for the
  dev server and build, React for the UI, Vitest for tests, ESLint for lint
  and layer rules, npm, Node 24 (`.nvmrc`).
- The oldest browser supported is Safari 15, the last iOS of the iPhone SE
  (1st generation). Vite's `build.target` and the `lib` of `tsconfig.app.json`
  say so (Invariants).
- Deployed to GitHub Pages by `.github/workflows/ci.yml`: every push to
  `main` that passes `npm run check` publishes to
  https://spoenemann.github.io/uberschach/. Vite's `base` is `/uberschach/`
  to match. A wrong base still builds, but the published page would request
  its script from the wrong path.

## Layers under `src/`

Five layers: four settled in the project interview on 2026-10-22, `i18n`
added on 2026-10-23 (`docs/localization.md`, Decisions). Each layer may
import only from itself and from the layers listed in its "may import"
column. Nothing imports upward.

| Layer          | Holds                                                                          | May import from                   |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------- |
| `src/domain/`  | Pure TypeScript: chess rules, notation, training. No React, no browser APIs.   | nothing in `src/`                 |
| `src/i18n/`    | Pure TypeScript: the languages, the catalogues, each language's notation.      | `domain`                          |
| `src/content/` | Opening content as JSON modules, the named lines that decide what it follows, the book keyed by position, its served form and the loader that fetches it. | `domain`, `i18n`; Node's own modules, to read the modules from disk |
| `src/ui/`      | React components, their CSS Modules, and the design tokens.                    | `domain`, `i18n`, `content`       |
| `src/app/`     | Composition root: entry point, routing, browser storage, wiring.               | `domain`, `i18n`, `content`, `ui` |

Enforced by: `boundaries/dependencies` and `boundaries/no-unknown-files` in
`eslint.config.js`. The lint output explains each violation
(`scripts/eslint-guidance.mjs`).

## Invariants

- `src/domain/`, `src/i18n/` and `src/content/` run without a DOM: no
  `window`, `document`, `localStorage`, `fetch`, and no React. Their tests
  run in Vitest's `node` environment. Enforced by: `no-restricted-globals`
  and the React policy in `eslint.config.js`; the `node` test project in
  `vite.config.ts`.
- Only `src/app/` touches browser storage (`localStorage`, `sessionStorage`,
  `indexedDB`). Enforced by: `no-restricted-globals` in `eslint.config.js`
  for the other four layers.
- Every message the code passes to `t()` or `msg()` has an entry in each
  translation catalogue (`src/i18n/de.ts`), no catalogue has an entry the
  code does not use, and message and translation carry the same
  placeholders. Enforced by: `src/i18n/catalogue.test.ts`
  (`docs/localization.md`).
- Every content line and move plays legally from the initial position and
  is written canonically, every move has an English text, and no prose is
  keyed to a line its module neither declares nor reaches. Enforced by:
  `buildBook` in `src/content/book.ts`, which throws, run by
  `scripts/content/serve.mjs` before every build (`npm run build:openings`)
  and by `src/content/openings.test.ts`, which also holds the content
  principles of `docs/product-specs/opening-explorer.md` (The database),
  the named lines of `src/content/named/` beyond the breadth-first plies,
  and the module layout the chunking relies on: one root per module and
  one subtree below it, two plies deep or within 100 kB on disk
  (`docs/adr/0002-opening-modules-folded-to-a-size-budget.md`).
- The app never bundles the book: `src/ui` and `src/app` do not import the
  authored content (`src/content/openings.ts`, `files.ts`, `lines/`,
  `named.ts`, `named/`); the
  explorer fetches `public/openings/`, written at build, chunk by chunk.
  Enforced by: `no-restricted-imports` in `eslint.config.js`; the bundle
  size `npm run build` prints is the measure (252 kB on 2026-10-24).
- The code calls no built-in newer than Safari 15 (ES2021) and writes no
  media query in the range syntax. Enforced by: `lib` and `target` in
  `tsconfig.app.json`, which `npm run typecheck` applies (its hint to raise
  `lib` is the wrong fix); `build.target` in `vite.config.ts` lowers syntax
  and CSS. The range syntax is a convention only (design system, Layout).
- The built app, served under the Pages base path, mounts into `#root` with
  no console error, no uncaught exception, no failed same-origin request and
  no third-party request, at a desktop and a phone width. Enforced by:
  `scripts/visual-check.mjs`, run last by `npm run check`
  (`docs/visual-verification.md`).

## Where everything else lives

- `docs/` — the system of record: this file, `adr/`, `design-docs/`,
  `exec-plans/`, `product-specs/`, and per-concern guidelines
  (`visual-verification.md`, `localization.md`).
- `public/openings/` — the served book, generated by `npm run build:openings`
  and ignored by git; Vite copies it into `dist/` and serves it in
  development.
- `.github/workflows/` — CI and the Pages deploy. A push to `main` that
  passes CI deploys, so changes here are sensitive.
- `scripts/` — plain Node scripts: the lint guidance formatter, the visual
  check, and under `scripts/content/` the serve step that `npm run build`
  runs and the tools and briefs for agents that write the opening book's
  prose, which read `src/domain/` and `src/content/` as data and are run by
  hand, not by a check (`scripts/content/README.md`).
