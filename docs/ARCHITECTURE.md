# Architecture

Where things live, what may depend on what, and the invariants the checks
enforce. Why it is built this way lives in the decision log of the setup plan
under `docs/exec-plans/`; what the product promises lives in
`docs/product-specs/`.

## Shape

- A static single-page app in one npm package. No backend, no database, no
  secrets: opening content ships as files in the repository, and training
  progress lives in the visitor's browser storage.
- TypeScript in strict mode (with `noUncheckedIndexedAccess`), Vite for the
  dev server and build, React for the UI, Vitest for tests, ESLint for lint
  and layer rules, npm, Node 24 (`.nvmrc`).
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
| `src/content/` | Opening content as typed data files, and the book keyed by position.           | `domain`, `i18n`                  |
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
  `buildBook` in `src/content/book.ts`, which throws at import, and
  `src/content/openings.test.ts`, which imports the shipped book and holds
  the content principles of `docs/product-specs/opening-explorer.md` (The
  database).
- The built app, served under the Pages base path, mounts into `#root` with
  no console error, no uncaught exception, no failed same-origin request and
  no third-party request, at a desktop and a phone width. Enforced by:
  `scripts/visual-check.mjs`, run last by `npm run check`
  (`docs/visual-verification.md`).

## Where everything else lives

- `docs/` — the system of record: this file, `design-docs/`, `exec-plans/`,
  `product-specs/`, and per-concern guidelines (`visual-verification.md`,
  `localization.md`).
- `.github/workflows/` — CI and the Pages deploy. A push to `main` that
  passes CI deploys, so changes here are sensitive.
- `scripts/` — plain Node scripts the checks use: the lint guidance
  formatter and the visual check.
