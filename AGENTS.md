# Uberschach

Chess training app for the browser, built first for the maintainer's own
training and published on GitHub Pages for anyone who finds it useful. Static
single-page app: TypeScript 6 strict, Vite 8, React 19, Vitest 5, ESLint 10,
npm, Node 24. The first capability, an opening explorer, is specified in
`docs/product-specs/opening-explorer.md` and being built from
`docs/exec-plans/active/0002-opening-explorer.md`: the opening book and the
first move's content exist, the screen does not yet.

## Commands

Timings are warm runs on the empty scaffold.

```sh
npm install                          # bootstrap
npm run check                        # typecheck, lint, test --coverage, build, visual check; ~5 s
npm run typecheck                    # tsc -b
npm run lint                         # eslint, with why/fix/exception guidance under each failure
npm test                             # vitest run; `npm test -- --coverage` adds the domain threshold
npx vitest run src/app/App.test.tsx  # one test file
npm run build                        # vite build to dist/
npm run check:visual                 # renders dist/ in headless system Chrome, writes screenshots; needs the build
npm run check:visual -- / /tmp/x.mjs # the given routes, plus a disposable ad-hoc check module
npm run dev                          # http://localhost:5173/uberschach/ (the base path is part of the URL)
```

## Why and where

- `src/domain/` — chess and training logic in pure TypeScript; tests run in plain Node. The rules engine (FEN, legal moves, game end): `docs/design-docs/chess-rules-engine.md` holds its scope, its build and the test file per FIDE article; a rule change updates that doc and that test. Notation (`san.ts`, `line.ts`: moves and lines as text in English or German letters, the language an argument): `docs/design-docs/chess-notation.md`.
- `src/i18n/` — the languages, the German catalogue (`de.ts`) and which notation each language reads (`notation.ts`), pure TypeScript. Text a visitor sees or hears is `t("English text")` in the code, never a literal in JSX; its German line goes in `de.ts` in the same commit, and a test fails `npm run check` otherwise (`docs/localization.md`).
- `src/content/` — opening content as typed data files; prose once per language (`docs/localization.md`, Opening content). `book.ts` joins data and prose into the book keyed by position and refuses a disagreement at import; `openings.ts` is the shipped book; a content principle (all legal moves covered, only ratings 4 and 5 followed, sourced backgrounds) is held by `openings.test.ts`.
- `src/ui/` — React components.
- `src/ui/board/` — the board and the pieces; the piece drawings are path
  data in `pieceShapes.ts`, judged by eye at 44px (`docs/design-docs/design-system.md`,
  Pieces).
- `src/ui/theme.css` — every colour, type, space, radius, shadow and motion value, as CSS custom properties; a component's CSS Module uses them, never a literal (`docs/design-docs/design-system.md`).
- `src/app/` — entry point, wiring, browser storage.
- Layers import downward only, app → ui → content → i18n → domain. `eslint.config.js` enforces it and mirrors the table in `docs/ARCHITECTURE.md`.
- `scripts/eslint-guidance.mjs` — the why/fix/exception text printed under lint failures; every new lint rule gets an entry.
- `scripts/visual-check.mjs` — the universal rendering invariants and screenshots (`docs/visual-verification.md`); route- or feature-specific checks are disposable ad-hoc modules, never committed. `npm run check` needs Google Chrome installed, or `CHROME_PATH`.

## Boundaries and definition of done

- Commits land on `main` directly, without review. Run `npm run check` before every commit; nothing else gates it. CI re-runs the suite on `main`, and only a green run deploys.
- Agents commit; only the maintainer pushes, because a push to `main` deploys.
- `.github/workflows/ci.yml` is the deploy. A change there is a change to production.
- Never commit secrets. The app needs none: it has no backend.
- Done means `npm run check` passes, run in this session with its output shown.
- A change to anything rendered (`src/ui/`, `src/app/`, `index.html`) is looked at: open the screenshots `npm run check` writes, and check the specifics with a disposable ad-hoc module when looking is not enough (`docs/visual-verification.md`). Green checks do not see a blank or misaligned frame.
- A change to `src/domain/` or `src/i18n/` includes a test; the per-file coverage threshold in `vite.config.ts` enforces it.
- A change to intended behaviour updates its spec under `docs/product-specs/` in the same commit; a new capability gets its spec before its code.
- A change to the look (a token, a base style, a visual rule) updates `docs/design-docs/design-system.md` in the same commit, as a dated amendment.
- A structural change (a layer added or moved, a new allowed dependency) updates `docs/ARCHITECTURE.md`, `eslint.config.js` and `vite.config.ts` in the same commit.
- Work that spans sessions runs from a plan in `docs/exec-plans/active/`; its progress, decisions and verification output go there and nowhere else.
- A recurring agent mistake is engineered away in the same change as its fix: a line here, then a doc, then a lint rule or test. Never by repeating the instruction.
- If reality contradicts this file or `docs/`, fix the doc in the same change; never silently work around it.

## Pointers

- `docs/ARCHITECTURE.md` — where things live, what may depend on what, the stack and deploy shape, the invariants and the check that enforces each; names and points, never explains a reason.
- `docs/product-specs/index.md` — one spec per capability: intent, promises, non-promises; never restated code or task state.
- `docs/design-docs/index.md` — one doc per system: how it is built, its invariants, the alternatives it rejected; each with a trust label. The design system (tokens, board, type, layout) is the first.
- `docs/exec-plans/` — plans in `active/` with progress and decision logs, moved to `completed/` when done; single-session work gets none. Decision rationale goes in a plan's decision log, not in a separate records folder.
- `docs/visual-verification.md` — how rendered output is verified: running the visual check, what it checks, the disposable ad-hoc module pattern, when the check may grow.
- `docs/localization.md` — what the languages promise and how to write for them: `t()`, the German catalogue and its check, notation per language, per-language content, the switch. The guideline is the spec for this concern.
