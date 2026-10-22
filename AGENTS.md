# uberschach

Chess training app for the browser, built first for the maintainer's own
training and published on GitHub Pages for anyone who finds it useful. Static
single-page app: TypeScript 6 strict, Vite 8, React 19, Vitest 5, ESLint 10,
npm, Node 24. The first capability, an opening explainer, is not yet
specified: see `docs/product-specs/product-brief.md`.

## Commands

Timings are warm runs on the empty scaffold.

```sh
npm install                          # bootstrap
npm run check                        # typecheck, lint, test --coverage, build; ~4 s
npm run typecheck                    # tsc -b
npm run lint                         # eslint, with why/fix/exception guidance under each failure
npm test                             # vitest run; `npm test -- --coverage` adds the domain threshold
npx vitest run src/app/App.test.tsx  # one test file
npm run build                        # vite build to dist/
npm run dev                          # http://localhost:5173/uberschach/ (the base path is part of the URL)
```

## Why and where

- `src/domain/` — chess and training logic in pure TypeScript; tests run in plain Node.
- `src/content/` — opening content as typed data files.
- `src/ui/` — React components.
- `src/app/` — entry point, wiring, browser storage.
- Layers import downward only, app → ui → content → domain. `eslint.config.js` enforces it and mirrors the table in `docs/ARCHITECTURE.md`.
- `scripts/eslint-guidance.mjs` — the why/fix/exception text printed under lint failures; every new lint rule gets an entry.

## Boundaries and definition of done

- Commits land on `main` directly, without review. Run `npm run check` before every commit; nothing else gates it. CI re-runs the suite on `main`, and only a green run deploys.
- Agents commit; only the maintainer pushes, because a push to `main` deploys.
- `.github/workflows/ci.yml` is the deploy. A change there is a change to production.
- Never commit secrets. The app needs none: it has no backend.
- Done means `npm run check` passes, run in this session with its output shown.
- A change to `src/domain/` includes a test; the per-file coverage threshold in `vite.config.ts` enforces it.
- A change to intended behaviour updates its spec under `docs/product-specs/` in the same commit; a new capability gets its spec before its code.
- A structural change (a layer added or moved, a new allowed dependency) updates `docs/ARCHITECTURE.md`, `eslint.config.js` and `vite.config.ts` in the same commit.
- Work that spans sessions runs from a plan in `docs/exec-plans/active/`; its progress, decisions and verification output go there and nowhere else.
- A recurring agent mistake is engineered away in the same change as its fix: a line here, then a doc, then a lint rule or test. Never by repeating the instruction.
- If reality contradicts this file or `docs/`, fix the doc in the same change; never silently work around it.

## Pointers

- `docs/ARCHITECTURE.md` — where things live, what may depend on what, the stack and deploy shape, the invariants and the check that enforces each; names and points, never explains a reason.
- `docs/product-specs/index.md` — one spec per capability: intent, promises, non-promises; never restated code or task state.
- `docs/exec-plans/` — plans in `active/` with progress and decision logs, moved to `completed/` when done; single-session work gets none. Decision rationale goes in a plan's decision log, not in a separate records folder.
