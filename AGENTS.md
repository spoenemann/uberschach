# Uberschach

Chess training app for the browser, built first for the maintainer's own
training and published on GitHub Pages for anyone who finds it useful. Static
single-page app: TypeScript 6 strict, Vite 8, React 19, Vitest 5, ESLint 10,
npm, Node 24. The first capability, an opening explorer, is live: what it
promises and how deep its book is written is
`docs/product-specs/opening-explorer.md`; how it was built, and why, is the
history in `docs/exec-plans/completed/0002-opening-explorer.md`.

## Commands

Timings are warm runs, measured 2026-10-28; the tests play the whole book,
so they grow with it.

```sh
npm install                          # bootstrap
npm run check                        # typecheck, lint, test --coverage, build, visual check; ~27 s
npm run typecheck                    # tsc -b; ~1 s
npm run lint                         # eslint, with why/fix/exception guidance under each failure; ~3.5 s
npm test                             # vitest run, ~9 s; `npm test -- --coverage` adds the domain threshold, ~15 s
npx vitest run src/app/App.test.tsx  # one test file; ~6 s, most of it importing the book
npm run build                        # writes the served book (build:openings), then vite build to dist/; ~5 s
npm run build:openings               # builds and verifies the book, writes public/openings/; ~5 s
npm run check:visual                 # renders every screen of dist/ in headless system Chrome, writes screenshots, needs the build; ~1.5 s
npm run check:visual -- '#/openings?line=1.e4' /tmp/x.mjs # the given routes, plus a disposable ad-hoc check module
npm run dev                          # build:openings, then http://localhost:5173/uberschach/ (the base path is part of the URL)
```

## Why and where

- `src/domain/` — chess logic in pure TypeScript; tests run in plain Node. The rules engine (FEN, legal moves, game end): `docs/design-docs/chess-rules-engine.md`, a test file per FIDE article. Notation (`san.ts`, `line.ts`: moves and lines as text in English or German letters, the language an argument): `docs/design-docs/chess-notation.md`.
- `src/i18n/` — the languages, the German catalogue (`de.ts`) and which notation each language reads (`notation.ts`), pure TypeScript. Text a visitor sees or hears is `t("English text")` in the code, never a literal in JSX; its German line goes in `de.ts` in the same commit, and a test fails `npm run check` when code and catalogue disagree; a literal that bypasses `t()` has no sensor (`docs/localization.md`).
- `src/content/` — the opening book: JSON modules under `lines/`, one per subtree of the book, `<id>.json` the chess data and `<id>.en.json`, `<id>.de.json` the prose; `named/` the Lichess chess-openings dataset, which decides what the book follows beyond its first plies. `files.ts` reads the modules and `named.ts` the dataset, `book.ts` builds the book keyed by position and refuses a disagreement between data and prose, `serve.ts` is the served form, `loader.ts` the book as the app fetches it chunk by chunk, `openings.ts` the whole book for the tests. The app never imports the content (lint): `npm run build:openings` writes the served form into `public/openings/`, and `src/app/openings.ts` fetches it (`docs/adr/0002-opening-modules-folded-to-a-size-budget.md`). What the book covers and how deep is the spec, The database; `openings.test.ts` holds it. Writing content: `scripts/content/README.md`.
- `src/ui/` — React components.
- `src/ui/board/` — the board and the pieces: a position, highlights, target
  marks and candidate arrows (`arrows.ts`), reporting clicks by square and by
  arrow, what a click means being the screen's; the piece drawings are path
  data in `pieceShapes.ts`, judged by eye at 44px (`docs/design-docs/design-system.md`,
  Pieces).
- `src/ui/explorer/` — the opening explorer screen: `Explorer.tsx` holds the
  board with moves and the state as the address carries it (line, move
  shown, side), `Line.tsx` the move list and controls, `Panel.tsx` the
  reading and the candidates, `view.ts` the pure view at a point of the
  line. What it promises, the address included, is the spec; its look is
  the design system's amendments of 2026-10-23 and 2026-10-24; the
  explorer plan's decision log is the history.
- `src/ui/home/` — the entry page: one card per capability.
- `src/ui/theme.css` — every colour, type, space, radius, shadow and motion value, as CSS custom properties; a component's CSS Module uses them, never a literal (`docs/design-docs/design-system.md`).
- `src/app/` — entry point, wiring, browser storage, the address and the
  book's source: `route.ts` reads and writes the hash (`#/`,
  `#/openings?line=…`), `App.tsx` keeps the route in step with it,
  `openings.ts` fetches the served book.
- Layers import downward only, app → ui → content → i18n → domain. `eslint.config.js` enforces it and mirrors the table in `docs/ARCHITECTURE.md`.
- `scripts/eslint-guidance.mjs` — the why/fix/exception text printed under lint failures; every new lint rule gets an entry.
- `scripts/visual-check.mjs` — the universal rendering invariants and screenshots (`docs/visual-verification.md`); route- or feature-specific checks are disposable ad-hoc modules, never committed. `npm run check` needs Google Chrome installed, or `CHROME_PATH`.
- `scripts/content/` — the serve step (`serve.mjs`) and the content agents' tools and briefs: the board tool for checking a claim about a position, the strategy-note standard, the briefs, validators and module writers of the named lines and of the gaps, and the module folder (`scripts/content/README.md`).

## Boundaries and definition of done

- Commits land on `main` directly, without review. Run `npm run check` before every commit; nothing else gates it. CI re-runs the suite on `main`, and only a green run deploys.
- Agents commit; only the maintainer pushes, because a push to `main` deploys.
- `.github/workflows/ci.yml` is the deploy. A change there is a change to production.
- The oldest supported browser is Safari 15 (iPhone SE 1st generation, iOS 15). A "change your target library" type error, for `toSorted`, `at`, `findLast`, `Object.hasOwn`, means use the older API; never raise `lib` in `tsconfig.app.json`. CSS: `min-width` media queries, never the range syntax `(width < 40rem)`.
- Never commit secrets. The app needs none: it has no backend.
- Done means `npm run check` passes, run in this session with its output shown.
- A change to anything rendered (`src/ui/`, `src/app/`, `index.html`) is looked at: open the screenshots `npm run check` writes, and check the specifics with a disposable ad-hoc module when looking is not enough (`docs/visual-verification.md`). Green checks do not see a blank or misaligned frame.
- A change to `src/domain/` or `src/i18n/` includes a test; the per-file coverage threshold in `vite.config.ts` enforces it.
- A change to intended behaviour updates its spec under `docs/product-specs/` in the same commit; a new capability gets its spec before its code.
- Opening content ships after the review the spec promises (`docs/product-specs/opening-explorer.md`, The database): an agent that did not write it checks every historical claim against its source and every rating against the sources and its sibling moves. The procedure, the briefs and the tools are `scripts/content/README.md`; a run's findings go into its plan under `docs/exec-plans/active/`. The maintainer does not read every text.
- A change to the look (a token, a base style, a visual rule) updates `docs/design-docs/design-system.md` in the same commit, as a dated amendment.
- A structural change (a layer added or moved, a new allowed dependency) updates `docs/ARCHITECTURE.md`, `eslint.config.js` and `vite.config.ts` in the same commit.
- Work that spans sessions runs from a plan in `docs/exec-plans/active/`; its progress, decisions and verification output go there and nowhere else.
- A recurring agent mistake is engineered away in the same change as its fix: a line here, then a doc, then a lint rule or test. Never by repeating the instruction.
- If reality contradicts this file or `docs/`, fix the doc in the same change; never silently work around it.

## Pointers

- `docs/ARCHITECTURE.md` — where things live, what may depend on what, the stack and deploy shape, the invariants and the check that enforces each; names and points, never explains a reason.
- `docs/product-specs/index.md` — one spec per capability: intent, promises, non-promises; never restated code or task state.
- `docs/design-docs/index.md` — one doc per system: how it is built, its invariants, the alternatives it rejected; each with a trust label. The design system (tokens, board, type, layout) is the first.
- `docs/exec-plans/` — plans in `active/` with progress and decision logs, moved to `completed/` when done; single-session work gets none. A plan's decisions go in its decision log.
- `docs/adr/` — one record per decision that shapes the structure (a layer, a format, a build step), accepted records immutable and superseded by a new one; do not contradict an accepted record. ADR-0002: the book is JSON, served in chunks generated at build and fetched on demand, a module one subtree folded up to a size budget; it carries its predecessor's decision forward.
- `docs/visual-verification.md` — how rendered output is verified: running the visual check, what it checks, the disposable ad-hoc module pattern, when the check may grow.
- `docs/localization.md` — what the languages promise and how to write for them: `t()`, the German catalogue and its check, notation per language, per-language content, the switch. The guideline is the spec for this concern.
