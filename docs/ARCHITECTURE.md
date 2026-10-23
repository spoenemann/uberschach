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

Four layers, settled in the project interview on 2026-10-22. Each layer may
import only from itself and from the layers listed in its "may import" column.
Nothing imports upward.

| Layer          | Holds                                                                 | May import from           |
| -------------- | --------------------------------------------------------------------- | ------------------------- |
| `src/domain/`  | Pure TypeScript: chess and training logic. No React, no browser APIs. | nothing in `src/`         |
| `src/content/` | Opening content as typed data files.                                  | `domain`                  |
| `src/ui/`      | React components, their CSS Modules, and the design tokens.           | `domain`, `content`       |
| `src/app/`     | Composition root: entry point, routing, browser storage, wiring.      | `domain`, `content`, `ui` |

Enforced by: `boundaries/dependencies` and `boundaries/no-unknown-files` in
`eslint.config.js`. The lint output explains each violation
(`scripts/eslint-guidance.mjs`).

## Invariants

- `src/domain/` and `src/content/` run without a DOM: no `window`,
  `document`, `localStorage`, `fetch`, and no React. Their tests run in
  Vitest's `node` environment. Enforced by: `no-restricted-globals` and the
  React policy in `eslint.config.js`; the `node` test project in
  `vite.config.ts`.
- Only `src/app/` touches browser storage (`localStorage`, `sessionStorage`,
  `indexedDB`). Enforced by: `no-restricted-globals` in `eslint.config.js`
  for the other three layers.
- The built app, served under the Pages base path, mounts into `#root` with
  no console error, no uncaught exception, no failed same-origin request and
  no third-party request, at a desktop and a phone width. Enforced by:
  `scripts/visual-check.mjs`, run last by `npm run check`
  (`docs/visual-verification.md`).

## Where everything else lives

- `docs/` — the system of record: this file, `design-docs/`, `exec-plans/`,
  `product-specs/`.
- `.github/workflows/` — CI and the Pages deploy. A push to `main` that
  passes CI deploys, so changes here are sensitive.
- `scripts/` — plain Node scripts the checks use: the lint guidance
  formatter and the visual check.
