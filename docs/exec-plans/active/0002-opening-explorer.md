# Exec plan: the opening explorer

- **Status**: active, started 2026-10-23
- **Goal**: the opening explorer of `docs/product-specs/opening-explorer.md`
  is live with a book deep enough that the maintainer plays the lines they
  half remember and reads why each move is played. Done when every promise
  in the spec points at its test and the book follows each move rated 4 or
  5 to the depth the maintainer set on 2026-10-23: through White's second
  move and Black's reply to it (Decision log, Depth).

## Acceptance criteria

- [x] A book format: chess data once, prose per language, keyed by position,
      refusing a disagreement between data and prose at import
      (`src/content/book.ts`, `src/content/book.test.ts`).
- [x] The first move: all twenty legal moves rated and explained, the twenty
      positions named, each background verified and sourced, in English and
      German (`src/content/firstMoves*.ts`, `src/content/openings.test.ts`).
- [x] The explorer screen at `#/openings`: board with moves, panel,
      candidates, the line, the address, the flip control, game end
      (`src/ui/explorer/`, `src/app/route.ts`; tests named in the spec).
- [x] The entry page with the explorer card (`product-brief.md`;
      `src/ui/home/`).
- [x] Black's replies to the six first moves (ply 2): all legal moves rated
      and explained, in English and German, reviewed
      (`src/content/lines/`).
- [ ] White's second move after each reply rated 4 or 5 (ply 3).
- [ ] Black's replies to those (ply 4), where the book ends.
- [ ] Every promise in the spec names the test that keeps it.

## Content principles

Settled with the maintainer on 2026-10-23 and promised in the spec (The
database): from a book position every legal move is rated and explained;
only moves rated 4 and 5 are followed; backgrounds are verified against
public information and name their sources in the data file; a line is
followed only as deep as public usage still treats it as opening theory,
decided per line from its history and terminology. The depth decided for
each line is logged below when the line is written.

## Content review

How the first move was reviewed on 2026-10-23, and how every later batch
of content is, before it is committed:

1. The author, the maintainer or an agent session, drafts the ratings and
   texts and names a public source per position (the opening's Wikipedia
   article is the default; a specific claim may need a second page).
2. A separate agent reads each source page and gets, per position, the
   URL and the list of claims as flat statements, never the author's
   reasoning or confidence. It reports for each claim SUPPORTED,
   CONTRADICTED with what the page says instead, or NOT ON PAGE, and adds
   the page's own facts (names, nationalities, dates, games, tournaments,
   books) and its assessment of the move's merit. About ten positions per
   agent, several agents in parallel; a page that fails to load is tried
   under its other names before the claim is dropped.
3. The author's session corrects or drops every contradicted and
   unsupported claim, replaces vague statements with the page's dated
   ones, and changes a rating that disagrees with the sources' assessment
   or with its sibling moves, saying why in the decision log. A rating
   change the sources do not settle is a question to the maintainer, with
   a recommendation; everything else is decided in the review.
4. The second language follows the corrected first; both say the same
   facts in their own notation.
5. The findings go in the progress log below; the mechanical part (every
   legal move covered, ratings 4 and 5 only followed, every background
   sourced, English complete) is `src/content/openings.test.ts`.

## Decomposition

- [x] Verify the maintainer's German proposal for the first move against
      public sources; correct it; write the English.
- [x] Domain: export `positionKey` (9.2.3) from `src/domain/game.ts`.
- [x] Content: `book.ts` (types, loader, lookup), the `firstMoves` module,
      `openings.ts`, tests.
- [x] Docs: spec promises and pointers, localization (Opening content),
      architecture (content layer, invariant), rules doc amendment, indexes,
      AGENTS.md.
- [x] Explorer screen, spec section by spec section, with the design-system
      amendment for rating colours and arrows.
- [x] Entry page.
- [x] Content, ply 2: Black's replies to 1.e4, 1.d4, 1.Nf3, 1.c4, 1.g3, 1.b3.
- [ ] Content, ply 3: White's second move after each of the 33 replies rated 4 or 5.
- [ ] Content, ply 4: Black's replies to those, each position rated 4 or 5 that
      White's second move reaches.

## Progress log

- 2026-10-23: The maintainer's proposal (German, twenty moves with
  background and strategy, in tiers 5 to 1) checked against the English
  Wikipedia article of each opening, the Réti and Hypermodernism articles,
  and a ChessBase piece on Fischer's "best by test" (all read that day).
  Corrected: Barnes beat Morphy as Black with 1.e4 f6, not with 1.f3;
  Larsen played 1.b3 in 1968 to 1972 and lost to Spassky in 17 moves in
  1970, so "great success in the 1970s" went; 1.d4 was unusual in the 19th
  century, not popular; the Saragossa analysis was José Juncosa's in 1920,
  the club's fashion 1919; "oldest" dropped for 1.e4, "most popular" kept;
  Grob analysed 1.g4 and played it by correspondence, Ahlhausen played it
  first; Réti championed the hypermodern school, Nimzowitsch is counted its
  founder, and the Réti Opening proper is 1.Nf3 d5 2.c4; English Wikipedia
  names 1.h4 after Marcel Desprez, Kádas is the name chess sites use.
  Dates and games added where the sources gave them.
- 2026-10-23: The maintainer, reading `firstMoves.de.ts`, decided that
  reviewing every text by hand will not scale. The review promise in the
  spec is now the agentic review (Content review, above; decision log);
  AGENTS.md names it under the definition of done.
- 2026-10-23: Format and ratings decided (decision log). `positionKey`
  exported, `src/content/book.ts` and the `firstMoves` module written with
  the English and the corrected German, `src/content/book.test.ts` (loader
  behaviour and every refusal) and `src/content/openings.test.ts` (the
  shipped book against the content principles) added. `npm run check`
  green: typecheck, lint, 23 test files and 237 tests with the domain and
  i18n coverage thresholds held, build, visual check unchanged (nothing
  rendered changed).
- 2026-10-23: The explorer screen and the entry page built, every spec
  section covered and each promise now naming its test. Shape decided
  from the built screen's screenshots (decision log: act left, read
  right). Found on the way, each fixed in this change: Vitest's module
  cache (on by default) kept `src/i18n/catalogue.test.ts`'s glob at the
  file list of the last transform, so the explorer's new messages counted
  as stale and a new file's missing translation would not have been
  caught; the cache is off in `vite.config.ts` with the reason. A
  selection keyed by position reappeared when the line stepped back to
  that position; the selection is now reset on any change of line or
  move shown. jsdom turns an assignment to `location.hash` into a
  navigation whose hashchange fires later, so `src/app/App.test.tsx` sets
  the address through `replaceState`. `npm run check` green: 28 test
  files and 283 tests, coverage thresholds held, build, visual check on
  both screens green; a disposable module clicked through the board in
  Chrome at both widths (select, move, arrow, keys, candidate), its
  screenshots looked at.
- 2026-10-23: **Ply 2 written: Black's replies to the six first moves.** The
  maintainer set the depth (Decision log, Depth) and asked for the pipeline
  below. Six Sonnet researchers and six Opus reviewers, one pair per
  position, 120 moves in all; 1.35 million agent tokens, 17 minutes, about
  110,000 tokens per agent. The reviewers made 111 corrections and dropped
  23 claims, and changed one rating, 1.Nf3 f5 from 3 to 4 (Wikipedia's
  Zukertort article lists it among the six main replies). What they found,
  by kind: board claims in the strategy texts that were false or overstated
  on the board (a pawn that "hangs", a bishop that "loses its guard"), the
  most frequent by far; attributions the page does not make (1.e4 a5 "named
  after" Ware; the Borg's "hence"; 1.e4 b6 "in London"); a background that
  repeated one already told one move earlier (1.Nf3 d5); names in American
  spelling. Result: 33 replies rated 4 or 5 to follow; 1.e4 has 8, 1.d4 4,
  1.Nf3 6, 1.c4 6, 1.g3 5, 1.b3 4. `npm run check` green with the four UI
  tests that assumed the book ended after the first move reworded to stay
  true as it deepens.

## Decision log

- 2026-10-23: **Review by an agent that did not write the text, not by
  the maintainer.** The spec had promised that the maintainer reads and
  approves every rating and text; after the first move he judged that
  reading every text by hand will not scale to the book that follows.
  The first move's review (Content review, above) is the model. Why the
  reviewer gets claims and sources only: an agent handed the author's
  reasoning tends to confirm it. Cost: a wrong text the source does not
  contradict can ship; the maintainer reads what he chooses to.

- 2026-10-23: **Flat list of positions, each named by its canonical line**
  in English notation, prose keyed by the same lines, over a nested tree
  of moves. The maintainer's choice on recommendation. Why: a position is
  declared once and any line reaches it by transposition; nobody writes a
  FEN by hand; a key is greppable and reads as a chess player writes.
  Cost: deep lines make long keys.
- 2026-10-23: **1.h3 rated 2, not 1**, the other nineteen as proposed:
  e4, d4, Nf3, c4 = 5; g3, b3 = 4; f4, Nc3 = 3; b4, e3, d3, c3, a3, h3 = 2;
  g4, f3, h4, a4, Na3, Nh3 = 1. The maintainer's choice from three
  options; Wikipedia equates 1.h3 with 1.a3 as a time-wasting move with
  only a slight weakening. Also offered and declined: e3, d3, c3 to 3.
- 2026-10-23: **Names follow each language's usage**, not a translation:
  "Nimzowitsch–Larsen Attack" beside "Larsen-Eröffnung", "Kádas Opening"
  (the name chess sites use; Wikipedia's title is Desprez Opening) beside
  "Kádas-Eröffnung", "Sokolsky Opening" beside "Sokolski-Eröffnung". The
  other names appear in the background.
- 2026-10-23: **A text belongs with the module that declares what it
  describes**: name and background with the position's module, strategy
  with the move's. The loader refuses prose under a key the module neither
  declares nor reaches, and the wrong kind of field under a key it only
  reaches or only declares. Why: a text under a wrong key would otherwise
  be dropped silently, and nothing on screen would say so.
- 2026-10-23: **The loader throws at import**, not only in a test. Why: a
  content author sees the mistake in the dev server at once, and
  `src/content/openings.test.ts` imports the book so `npm run check` fails
  before the commit.
- 2026-10-23: **Types and loader in `src/content/`**, not `src/domain/`.
  Why: joining prose per language needs `Language` from `src/i18n/`, which
  the domain may not import; the domain gained only `positionKey`. No
  layer changed.
- 2026-10-23: **The initial position's introduction is its `background`**,
  shown without a name; no separate field. Why: one code path for the
  panel, one field fewer to explain.
- 2026-10-23: **The screen's shape: act on the left, read on the right.**
  The board column holds what the visitor does and where they are (the
  board; the line as one wrapping row of moves under it, the current one
  marked; a quiet row of controls: back, forward, Reset, Flip board); the
  panel holds what they read (one move's information, then the candidates
  as the one list). The candidates appear twice by design, as arrows where
  the visitor acts and as the list at the end of the reading, where the
  eye goes next; the list is the keyboard's and the screen reader's route.
  Considered and rejected: (a) everything in one panel beside a bare
  board, move list on top (the analysis-board shape): navigation and
  reading share one column, the move list pushes the reading down, and
  two lists of moves look alike; (b) board only, information on demand
  (popovers on arrows, a drawer for the line): hides what the spec
  promises after every move, and previews are not promised; (c) tabs in
  the panel: hides, and costs a click per move; (d) a scoresheet column
  beside the board with the panel below: the reading drops below the
  board on desktop, and a scoresheet records games rather than a line one
  walks into. Cost of the choice: at widths just above 40rem the panel
  column is narrow (16rem minimum); the breakpoint stays the design
  system's one.
- 2026-10-23: **Arrows in the accent hue, told apart by form and weight,
  not a second hue.** Rating 5 at 0.85 opacity and wider, rating 4 at 0.5
  and narrower; the last-move highlight is a fill, an arrow a line. Why:
  the accent is the colour of the next action, and the only other
  saturated colours are the feedback ones, which read poorly on walnut.
  Tokens `--board-arrow-strong`, `--board-arrow-light`.
- 2026-10-23: **Rating colours as five tokens**, 1 `--color-bad`, 3
  `--color-note`, 5 `--color-good`, with two new steps between (2 an
  orange-red, 4 a lighter green), each measured above 4.5:1 on the page;
  shown as a dot and the word, never a fill. Why: the spec asks for red
  through to green with the word always there; two literals are the
  smallest extension of the palette.
- 2026-10-23: **The address is `#/openings?line=1.e4+e5+2.Nf3&ply=2&side=black`**:
  the line in English notation as `formatLine` writes it (a `+` per space,
  as `URLSearchParams` writes it), `ply` the number of moves shown and
  absent for the end of the line, `side=black` for the turned board;
  parameters at their default are left out. Why: it reads as a chess
  player writes, pastes into any chess tool once the `+` are spaces, and
  a link to a line opens at its end. The explorer replaces the address on
  every change (`history.replaceState`), so the back button leaves the
  screen; the entry page and the explorer are hash routes because Pages
  serves no SPA fallback.
- 2026-10-23: **The board is pointer input; the keyboard gets the
  candidates.** Squares are not buttons: 64 tab stops would be noise, and
  the spec names the list as the keyboard's route. The board stays an
  image named by the position. A promotion is always to a queen, as the
  spec says, so no dialogue interrupts a move.
- 2026-10-23: **The state is the address.** The explorer is a controlled
  component of the route; its only own state is the selected square,
  reset whenever the line or the move shown changes. The whole line is
  replayed from the address with `playLine` on each change (about 50 ms
  at forty plies, measured in the notation doc), memoised by the line.
  Why: a reload, a shared link and the back button all follow from one
  mechanism, and no store exists to drift from the address.
- 2026-10-23: **Depth: every legal move through White's second move, and
  Black's reply to it.** The maintainer's choice, on recommendation, from
  three options. A followed position needs about 30 legal moves rated and
  explained in two languages, so the book multiplies about 30 times per
  ply: roughly 140 followed positions and 4,000 move texts through Black's
  second move, 700 and 25,000 through White's third. Positions after up to
  three plies are followed when a move rated 4 or 5 reaches them; the
  positions after four plies end the book. This replaces "as deep as public
  usage names the line" (spec, The database) as the book's bound, which on
  its own would have run to the ninth or tenth move; the spec says so. Not
  chosen: through White's third move (six times the work, tens of millions of
  agent tokens) and, below ply 4, only the moves the literature names (it
  amends the promise that every legal move of a known position is
  covered). Cost: the book stops at the family level (Open Game, Sicilian,
  French, Queen's Gambit, King's Indian, English), before the Ruy Lopez, the
  Najdorf or the Nimzo-Indian. `LAST_FOLLOWED_PLY` in `openings.test.ts`
  holds the depth and rises as each ply is written.
- 2026-10-23: **Research and review by position, not by move.** One Sonnet
  agent per followed position researches all its legal moves, and one Opus
  agent reviews and translates them, instead of an agent per move. Why: the
  review compares sibling ratings, so siblings belong in one hand; the pages
  of an opening family are read once, not thirty times. The briefs are the
  procedure above made concrete: the researcher gets the position, the
  legal moves, the names the Lichess chess-openings dataset (ECO) gives the
  positions after them as hints, never as sources, and the rating scale; the
  reviewer gets the research file and the node file, never the researcher's
  reasoning, reads each cited source, checks every board claim with the rules
  engine's board, re-judges ratings against siblings and sources, and
  translates. A researcher's file is also validated by a script (every legal
  move once, ratings, sources for every background, German piece letters in
  German text) before the reviewer starts.
- 2026-10-23: **A position reached by several lines is described once.** In
  the module and under the line of the first move, in breadth-first order,
  that reaches it; the other moves into it carry only their strategy. Why:
  the loader refuses a position declared twice, and a transposition shows
  the same information wherever it is reached.
- 2026-10-23: **Modules under `src/content/lines/`, one per followed first
  move and one per followed reply.** `e4` holds 1.e4 with Black's replies and
  the replies the book does not follow; `e4-e5` holds 1.e4 e5 with White's
  second moves and Black's replies after the ones rated 4 and 5. The
  position's name and background live in the module that declares it, a
  move's strategy in the module of the position it is played from, as
  `book.ts` demands. The six followed first moves leave `firstMoves` (their
  strategy texts stay, with the root's moves). `max-lines` is raised to 3,000
  for this folder (the guidance in `scripts/eslint-guidance.mjs` says so): a
  family's file is as long as its prose.
- 2026-10-23: **Names in British spelling** ("Defence"), whatever the
  Wikipedia title or the ECO hint says, as the book already writes "Dutch
  Defence"; German names follow German Wikipedia, and a name German does not
  translate keeps its English form with German grammar ("Alapin-Variante").
