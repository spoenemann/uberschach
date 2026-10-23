# Exec plan: the opening explorer

- **Status**: active, started 2026-10-23
- **Goal**: the opening explorer of `docs/product-specs/opening-explorer.md`
  is live with a book deep enough that the maintainer plays the lines they
  half remember and reads why each move is played. Done when every promise
  in the spec points at its test and the book follows each move rated 4 or
  5 to where public usage stops calling the line an opening.

## Acceptance criteria

- [x] A book format: chess data once, prose per language, keyed by position,
      refusing a disagreement between data and prose at import
      (`src/content/book.ts`, `src/content/book.test.ts`).
- [x] The first move: all twenty legal moves rated and explained, the twenty
      positions named, each background verified and sourced, in English and
      German (`src/content/firstMoves*.ts`, `src/content/openings.test.ts`).
- [ ] The explorer screen at `#/openings`: board with moves, panel,
      candidates, the line, the address, the flip control, game end.
- [ ] The entry page with the explorer card (`product-brief.md`).
- [ ] Content for Black's replies to the six first moves rated 4 and 5, then
      onward along moves rated 4 and 5, each line's depth decided and
      recorded here.
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
- [ ] Explorer screen, spec section by spec section, with the design-system
      amendment for rating colours and arrows.
- [ ] Entry page.
- [ ] Content depth: Black's replies to 1.e4, 1.d4, 1.Nf3, 1.c4, 1.g3, 1.b3,
      then onward.

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
