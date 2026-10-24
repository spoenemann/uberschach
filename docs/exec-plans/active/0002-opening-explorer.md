# Exec plan: the opening explorer

- **Status**: active, started 2026-10-23
- **Goal**: the opening explorer of `docs/product-specs/opening-explorer.md`
  is live with a book deep enough that the maintainer plays the lines they
  half remember and reads why each move is played. Done when every promise
  in the spec points at its test and the book follows each move rated 4 or
  5 to the depth the maintainer set on 2026-10-23, through White's second
  move and Black's reply to it (Decision log, Depth), and beyond it every
  named line of the Lichess dataset to its twelfth move (Decision log,
  2026-10-24, Named lines).

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
- [x] White's second move after each reply rated 4 or 5 (ply 3): 33 positions,
      803 moves.
- [x] Black's replies to those (ply 4), where the book ends: 81 positions,
      1,975 moves. The breadth-first search has nothing left to follow: 121
      positions have moves (the root, 6, 33 and 81), every move rated 4 or 5
      from them reaches a position that has moves or is at the depth, and the
      1,832 positions after Black's reply have none
      (`src/content/openings.test.ts`).
- [x] The named lines (Decision log, 2026-10-24): every move the Lichess
      dataset's lines play through the twelfth move, beyond the
      breadth-first plies or after a move rated 1 to 3, rated and explained
      in English and German, reviewed, and every position the dataset names
      named (`src/content/openings.test.ts`): 5,317 moves and 5,136
      positions, 7,857 positions in the book (Progress log, 2026-10-24).
- [x] The gaps (Decision log, 2026-10-24, Gaps): every position with moves
      holds at least three, or every legal move where fewer are legal, and
      one rated 5, in English and German, reviewed
      (`src/content/openings.test.ts`): 5,790 moves added and 527 revised,
      14,025 moves in the book (Progress log, 2026-10-24).
- [ ] Every promise in the spec names the test that keeps it.

## Content principles

Settled with the maintainer on 2026-10-23 and promised in the spec (The
database): from a book position every legal move is rated and explained;
only moves rated 4 and 5 are followed; backgrounds are verified against
public information and name their sources in the data file; a line is
followed only as deep as the depth the maintainer set for the whole book
(Decision log, Depth), and no deeper than public usage still treats it as
opening theory.

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

## Gathering the information: sources and subagents

What the three levels (240 agents, 2,918 moves) taught, for whoever writes
the next batch. The numbers are measured on 2026-10-23 on a ten-core
machine; the briefs and the scripts named here were scratch files of that
session and are not in the repository (Open, below). The strategy notes'
rework added the board tool, a node-file writer, a validator and a writer
of the modules to the repository, with its briefs; the named lines and the
gaps replaced all but the board tool with their own (`scripts/content/`),
and the rework's are in the history.

**Sources, in the order they proved useful**

- *English Wikipedia*, the opening's article: history, names, standing in
  theory. The article for the family covers its variations; a variation
  with no article is a section of the parent's. Where the rendered page was
  ambiguous the reviewers read its wikitext. Titles are case- and
  apostrophe-sensitive (`King%27s_Pawn_Game`); a page that fails to load is
  tried under its other names before the claim is dropped.
- *Wikibooks, Chess Opening Theory*: move-by-move assessments with the
  symbols (?, ?!, ±), the best ground for rating a sideline 2 or 3. Its
  pages failed to load in some reviews; the reviewer then says that a rating
  rests on a table it could not open.
- *German Wikipedia*: the authority for the German names (Sizilianische
  Verteidigung, Spanische Partie, Mittelgambit im Nachzug) and for some
  history English lacks (the origin of the Grand Prix Attack).
- *The Lichess chess-openings dataset* (`lichess-org/chess-openings` on
  GitHub, five TSV files, 3,869 named lines): the ECO code and name of
  every position it names, matched to a position by its key. It tells which
  positions carry a name in public usage. American spelling and informal
  names ("Hippopotamus Defense"): a hint for the researcher, a weak source
  for a name, none for a historical claim. Names are written "Defence".
- *Popularity*: the game counts in the chessgames.com explorer settled one
  rating (1.e4 d6 2.f4 against its siblings); Chessiverse once. Lichess's
  own explorer API answers 401 without a token, so unattended agents
  cannot use it.
- Authorities that Wikipedia quotes (Modern Chess Openings, Kasparov and
  Keene) are quoted as such, "in the words of", never as a fact of the text.
- No engine: the spec says so and the ratings are judgements from the
  sources. Most of the 2,000 corrections the reviewers' notes describe
  were board claims, which the board shows without an engine (below).

**Subagents**

- *Pilot a ply before scaling.* Six positions, 17 minutes, found the two
  changes that every later brief carries (British spelling of names; do not
  repeat a background already told on the way, which is why a node file
  lists the names and backgrounds of its path).
- *Briefs in files, prompts short.* The prompt names two files, the brief
  and the position's node file (position, legal moves, hints), and the
  output path. Content goes to files and is validated there; the reply is a
  small structured status. Three levels put only the short reports into the
  orchestrating session; the texts were read by sampling.
- *One researcher and one reviewer per followed position*, Sonnet then
  Opus (decision log). The researcher gets a budget (6 to 12 page fetches
  for the whole position, no search per move: the family's pages carry the
  main ratings, the many weak moves need the board, not a source); the
  reviewer gets the output file and never the researcher's reasoning, opens
  every cited source, re-checks every concrete claim on the board, compares
  the siblings' ratings, and then translates.
- *A validation script both agents run*, because it turns the rules into an
  error message they can act on: every legal move once, ratings 1 to 5, a
  source for every background, no English piece letters in German text.
  Test it on a known-bad file before the first run. Two defects cost
  content: it rejected English words in German text, so a book title was
  left out (it now ignores a „quoted title“), and it missed moves written
  with their number ("2.Nf3") until the level-1 files were checked again.
- *A board tool* (`show "1.e4 e5 2.Nf3"`): the most frequent correction at
  every level was a strategy text that was false on the board (a pawn that
  "hangs" and does not, a bishop that "guards" what it does not, a move
  that is illegal). Ask for the board check in the researcher's brief, not
  only in the reviewer's.
- *What a reviewer drops*: 340 claims in all, of three kinds: an
  attribution the page does not make ("named after", "hence"), a superlative
  with no source ("the most popular reply"), and a detail that is not on the
  page at all. Dropping is the intended outcome; a background left `null`
  is correct, and most positions have none.
- *Ratings*: the reviewers changed 126 of 2,898 (4.3 %), within one
  position. After each level the orchestrator tabulates every recurring move's
  rating over all positions and reads the outliers' texts, which no single
  agent sees; that pass changed nothing at levels 2 and 3, and it is
  cheap (one script).
- *Level by level, the next level's positions from the verified ratings*,
  never earlier: a reviewer changes ratings, and a rating decides what is
  followed. A position reached by several lines is researched once under the
  first line in breadth-first order (Decision log).
- *Throughput and cost*, for planning: about one agent finished per minute
  at level 3 (the cap on agents at once is the cores less two: eight here);
  about 108,000 tokens per agent, 216,000 per
  position, 9,000 per move written. Level 1: 12 agents, 17 minutes; level 2:
  66, 68 minutes; level 3: 162, 163 minutes. A workflow may start at most a
  thousand agents, so a level of more than 500 positions is run in batches
  (`resumeFromRunId` replays finished agents from its journal). The
  orchestrator waits for the completion notice instead of polling; a level
  needs no attention in between.
- *Estimates ran high*: the depth decision estimated 140 followed positions
  and 4,000 moves for what became 121 and 2,918. Expect the same bias.

**Superseded: the next two plies (White's third move and Black's reply)**

What follows was the estimate for going on breadth first; the named lines
replaced it (Decision log, 2026-10-24, Named lines).

Level 4 is known exactly from the ratings, level 5 extrapolated at the
rate of 3.2 moves rated 4 or 5 per position and 0.76 distinct positions per
move. Level 4: 197 positions, 5,403 moves, 5,092 new positions. Level 5:
about 480 positions and 14,000 moves. Together about 20,000 moves, 150
million tokens (nearly six times everything so far) and about 22 hours of
agent time, level 5 starting when level 4 ends. Following only moves rated 5
below the present depth: 102 and about 125 positions, 6,600 moves, about 50
million tokens, 8 hours. The book would grow about 570 bytes per move
minified, 157 gzipped (the measure of the present 2.05 MB): to about 11 to
13 MB and 3 to 3.7 MB gzipped, or about 6 MB and 1.6 MB for the 5-only
variant. Start-up grew with the positions, 0.35 s for 2,721 and about
three seconds projected for 21,000, which is why the book is now fetched
chunk by chunk from a served form generated at build
(`docs/adr/0001-opening-book-as-fetched-json.md`, 2026-10-24): the bundle
no longer grows with it, and a chunk is bounded by the module layout the
test holds (one root, two plies below it), so the next two plies go into
modules rooted at the followed ply-4 positions. The named lines' frontier,
validator and module writer in `scripts/content/` are the ones to extend
for that (the frontier from the ratings instead of the dataset).

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
- [x] Content, ply 3: White's second move after each of the 33 replies rated 4 or 5.
- [x] Content, ply 4: Black's replies to the 81 positions rated 4 or 5 that
      White's second move reaches.
- [x] Loader: the shipped book starts in half a second, not six (Decision log,
      Loader).
- [x] The entry page pays for the book (Progress log, ply 4): the book is
      JSON fetched chunk by chunk, generated at build
      (`docs/adr/0001-opening-book-as-fetched-json.md`; Progress log,
      2026-10-24).
- [x] Strategy notes reworked to the spec's definition of 2026-10-23
      (Decision log, Strategy notes): all 2,918, in English and German
      (Progress log).
- [x] Named lines, tooling: the dataset and its reader (`src/content/named.ts`),
      the frontier, the briefs, the validator and the module writer
      (`scripts/content/`), the content test held to the dataset.
- [x] Named lines, content: 163 batches and 24 name files (Progress log).
- [x] Gaps, tooling: `gaps.mjs`, the gap briefs, the validator and the
      module writer for a gaps batch, `merge-modules.mjs --refold`, the
      content test; the rework's tools dropped (`scripts/content/`).
- [x] Gaps, content: 234 batches, then the modules folded again (Progress
      log).

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
- 2026-10-23: **Ply 3 written: White's second move after the 33 replies.**
  Level 2 of the pipeline: 33 researchers and 33 reviewers, 66 agents, 7.1
  million tokens, 68 minutes. The reviewers made 580 corrections, dropped 81
  claims and changed 29 ratings. The rating changes are consistency, not
  taste: a rook-pawn move that costs a tempo and nothing else is 2 in every
  position (four 1s became 2s), a sound slow move that gives nothing concrete
  away is 3 (2.f4 against 1.e4 d6, 1.e4 c5 and others rose from 2 to 3), and
  one was settled by Wikipedia's wording (1.e4 d5 2.Nf3 is "dubious", so 3
  became 2). After the review the ratings were compared across positions, which
  no single agent sees: the same pointless moves (a3, a4, h3, Na3, Nh3, f3)
  are 2 in 24 to 31 of 33 positions, the exceptions each have their reason
  in the text (a rook-pawn move that leaves e4 hanging is 1). 105 moves are
  rated 4 or 5; transpositions (1.d4 Nf6 2.c4 and 1.c4 Nf6 2.d4, and the like)
  leave 81 positions to follow. One defect of the tooling cost content: the
  validator rejected English words in German text, so a reviewer left an
  English book title out of a German background; it now ignores a „quoted
  title“. `npm run check` green; the explorer looked at after 1.e4 e5 at
  desktop and phone width. Found: the bundle is 892 kB (256 kB gzipped) with
  889 positions and Vite warns about the chunk size; the book will be about
  three times that at the planned depth, and only the explorer needs it
  (open item: load it with the explorer, not with the entry page).
- 2026-10-23: **Ply 4 written: Black's reply to White's second move; the
  book is complete at its depth.** Level 3 of the pipeline: 81 researchers
  and 81 reviewers, 162 agents, 17.5 million tokens, 2 hours 43 minutes. The
  reviewers made 1,322 corrections, dropped 236 claims and changed 96
  ratings (21 from 2 to 1, 17 from 1 to 2, 17 from 3 to 4, 13 from 3 to 2,
  13 from 4 to 3, 8 from 2 to 3, 5 from 4 to 5, one each from 5 to 4 and 3 to
  5), mostly to the sources' wording (2...Qe7 and 2...f5 in the Open Game are
  "dubious" in Wikipedia, so 3 became 2). Compared across positions the
  ratings are coherent: the pointless moves (a6, a5, h6, h5, Na6, Nh6, f6) are
  2 in 74 to 78 of 81 positions, king walks and Ba3 and Bh3 are 1 every time,
  and the 1s among natural developing moves (every one of them a hung pawn,
  a lost knight or a rook on h8 in the bishop's line, as its text says) were
  each read. Final book: 2,721 positions, 2,918 moves (196 rated 5, 208 rated
  4, 609 rated 3, 1,436 rated 2, 469 rated 1), 346 names, 216 backgrounds on
  284 source URLs; 676,000 characters of English and 768,000 of German. All of
  the pipeline cost, three levels: about 26 million agent tokens, 240 agents.
  Found while integrating: building the book at import took 5.7 seconds in
  Node (the loader replayed every line from the start and checked every move
  with the game machinery, which runs legal-move generation several times
  per move); see the Loader decision for the fix. Measured in Chrome on the
  built app: the page mounts in about 0.5 seconds on this machine and 1.5
  seconds with the CPU slowed fourfold, on the entry page as much as on the
  explorer, because both import the book; the bundle is 2.05 MB (576 kB
  gzipped). Open, and the maintainer's to decide because it changes the app's
  structure: load the explorer, and the book with it, on demand
  (`React.lazy` in `src/app/App.tsx`, a loading state, async tests), which
  returns the entry page to its former 0.4 MB, before any content, and
  takes the book's share (about 0.35 seconds here) off its start. `npm run
  check` green; the explorer looked at after 1.e4, 1.e4 e5 and 1.d4 Nf6 2.c4
  e6, at desktop and phone width.
- 2026-10-23: **Strategy notes, test run on the first move** (20 notes,
  one writer and one reviewer as in the decision log). The writer lifted 8
  from 8 Wikipedia articles, trimmed 4 and kept 8: the first-move notes,
  begun from the maintainer's own text, were the nearest to the standard.
  Review round 1 opened no page, so no lifted note was checked against its
  source, and five of its six changes reworded a clear sentence only to set
  it apart from a sibling, three for the worse (1.d4 clumsy, 1.h4
  exaggerated, 1.Nf3 vaguer). The reviewer's brief now requires the source
  check and the validator refuses a review of lifted notes that fetched no
  page; a change for the siblings' sake is for interchangeable notes or a
  near-verbatim repeat only; the standard says clarity comes before variety
  and a note says no more than the board and the sources bear. Round 2 read
  all 8 pages, softened three claims to what they say (1.e4 "tactical", 1.b3
  "balanced", 1.f4 "sharp"), fixed a board error (1.Na3: the f8-bishop
  cannot take on a3 before the e-pawn moves) and changed seven notes. Cost:
  about 235,000 tokens and 9 minutes for the writer and both review rounds.
  Two explorer tests pinned the wording of the 1.e4 note; they now compare
  with the shipped text, so a rewrite does not break them. `npm run check`
  green.
- 2026-10-23: **Strategy notes reworked: all 2,918, in English and
  German.** Three runs after the test. The first, one writer and one
  reviewer per position, was stopped after 105 writers and 11 reviews: the
  writers had kept about 530 notes on weak moves that still listed the
  opponent's next moves ("White builds the centre with Nc3, d4 and e4 at
  leisure"), and the reviewers approved them; and 15 of the 120 ids had
  been typed from memory in the orchestrating session, so 15 positions
  were never written. Since then the standard says the same of moves
  rated 1 to 3, the reviewer's brief names it as the change it expects
  often, `node-file.mjs` writes the ids the workflow is passed, and the
  reviewer approves by default: the validator refuses an English change
  without a finding, and a `changed` flag that does not match the text.
  The second run wrote the 15 positions and reviewed all 120 (135 agents,
  8.4 million tokens, 25 minutes): 624 notes changed, 510 of them for the
  standard, 42 for the board, 38 against the source. A sweep then read the
  1,424 notes that name two or more other moves, one agent per position
  deciding for each whether the moves are the note's point (a refutation,
  a threat, what the move prepares) or a tour (121 agents, 5.6 million
  tokens, 12 minutes): 801 changed, 599 tours put in words and 143 opening
  labels described ("transposes into a Slav", "Benko style"). Notes rated
  3 had escaped the weak-move rule, which now covers them, and labels used
  as shorthand are in the standard. The orchestrating session took out 23
  move-order clauses the sweep had made awkward ("the same position arises
  if the moves are played in the other order"; the explorer shows a
  transposed position with the same entry), kept the old German of 5 notes
  whose English had not changed (one new version was ungrammatical, one
  lost "hängen"), and corrected 1.Nf3, where the reviewer had softened
  "rules out 1...e5" although the pawn is simply lost. Result: 2,118
  English notes changed (all 404 rated 4 and 5, 590 of 609 rated 3,
  1,124 of 1,905 rated 1 and 2; first reported as 2,104, a count that
  missed six first moves) and 2,112 German, 34 words on average
  where they had 38.5. No rating changed, and no agent doubted one. All of
  it about 21 million tokens and 400 agents, the stopped run counted from
  its transcripts. The sweep's candidate filter and brief stayed scratch
  files: the maintainer wants no mechanical check for notation, and the
  filter only chose what an agent re-read. `npm run check` green; the
  explorer looked at after 1.e4 e5 2.Nf3 Nc6 and 1.d4 Nf6 2.c4 c6, at
  desktop and phone width.
- 2026-10-23: **Final check of the rework, at the maintainer's request:**
  the orchestrating session read every note old against new, English and
  German, in one sitting. The chess held: refutations, threats and square
  claims kept or rightly simplified, a few old errors gone. Found and
  fixed: four German notes never updated (1.d4 Nf6 2.c4, 2.Nf3, 2.Nc3;
  1.c4 g6 2.d4 c5) and one cut to its last sentence (1.e4 c5 2.d4), both
  from the sweep's merge, which took the sweep's English without checking
  the German; one German note keeping labels its English dropped; four
  English claims wrong (1.b3 e5 2.Bb2 d6 "blocks the c8-bishop"; 1.Nf3 f5
  2.g3 g6 "the dark squares" for e6; 1.e4 g6 2.Nf3 c5 c4 "clamps d4";
  1.d4 f5 2.e4 contradicting itself); four German mistranslations ("bind"
  as "Fesselung", a reversed attack, a rook "in the way" for exposed,
  "Damengambit-Abstand"); two typos; 32 phrasings made vague by the
  rework ("a pawn move by Black" where only the e-pawn opens the
  diagonal) or overstated. Clean-up: 21 "Weiß'"/"Schwarz'" possessives,
  26 "entwickelt" without "sich", 19 curly apostrophes, 6 "setup". In
  all 60 English and 102 German notes changed. Engineered away:
  `scripts/content/apply.mjs` now writes nothing while a German note is
  the old text under a changed English or lies outside 0.6 to 2 times the
  English length (all notes now lie between 0.92 and 1.47). `npm run
  check` green.
- 2026-10-23: **The candidate under the pointer is lit in both places**, at
  the maintainer's request: the pointer on an arrow lights its row in the
  list, the pointer on a row lights its arrow. The explorer holds the
  hovered move beside the selected square, dropped with the line, the move
  shown and the selection; the board reports the pointer entering and
  leaving an arrow as it reports a click, the panel the same for a row,
  and each draws the one move highlighted with the look it has under the
  pointer. The arrow's hover look, opacity alone, was too subtle on the
  walnut (the maintainer, on the screen); it gained a light rim, chosen
  over dimmed siblings and a brighter green from screenshots of all three
  (design system, Amendments). Also at his request, the German for "Good"
  became "Guter Zug", beside "Bester Zug". Spec (Candidates) and design
  system (Amendments) say so. `npm run check` green; a disposable module
  hovered the e2–e4 arrow and the Nf3 row in Chrome at both widths and
  read the row's background and the arrow's fill on the other side; the
  screenshots of both states looked at.

- 2026-10-24: **The book is JSON, served in chunks and fetched on demand**
  (`docs/adr/0001-opening-book-as-fetched-json.md`; the maintainer asked for
  the format and the lazy loading, asked that the approach be challenged, and
  took both recommendations: the served form generated at build, the index
  fetched with the explorer). A one-time script imported the 40 TypeScript
  modules and wrote `src/content/lines/<id>.json` with `<id>.en.json` and
  `<id>.de.json`, `firstMoves` becoming `root`; the data read back from the
  JSON was compared with a dump of the TypeScript modules, all 40 identical.
  New in `src/content/`: `files.ts` (reads and parses the modules, naming
  file and field on a wrong shape), `serve.ts` (the served form) and
  `loader.ts` (the book as the app fetches it); `book.ts` builds eagerly and
  always verifies, and a move carries the name of the position it leads to,
  so the candidate list needs no other chunk. `scripts/content/serve.mjs`
  writes `public/openings/` before every build. The explorer takes the book
  as a prop, waits for a chunk without calling the line off the book, and
  says when the book cannot be fetched; `src/app/openings.ts` holds the one
  fetch. The content tools read and write JSON (`apply.mjs` lost its
  TypeScript formatting). Measured: the bundle 1,911 kB (535 kB gzipped) to
  252 kB (80 kB); the served book 1,978 kB in 41 files, the index 184 kB
  (14.5 kB gzipped), the root chunk 8 kB gzipped, the largest chunk (1.d4 d5,
  133 positions) 23.7 kB gzipped; the verified build 0.94 s, `npm run build`
  1.5 s in all; the test suite faster than before (the content no longer
  passes through the TypeScript transform). Lint: the `max-lines` override
  for `src/content/lines/` is gone with the TypeScript, `src/ui` and
  `src/app` may not import the authored content, and Node's own modules are
  allowed in `src/content` only. `npm run check` green; a disposable module
  on the built app read the fetches and their timings, checked a deep link,
  a transposition from outside the book and an off-book line, and the
  screenshots were looked at (its output is in the commit message).

- 2026-10-24: **The first visit to the explorer showed the bare board in
  development** (the maintainer, on the dev server: reload, open the
  explorer, nothing but the board; home and back, the book). StrictMode runs
  the explorer's effect twice, so two `ensure` calls overlapped; the second
  saw the root chunk as already requested, skipped it and reported the book
  ready while the chunk was still on its way, and nothing re-rendered when
  it arrived. The same would have happened in production on a move made
  while a chunk was loading. `loader.ts` now waits for every chunk the game
  needs, pending ones included; a loader test with a chunk held back and an
  explorer test under StrictMode with a source that answers a tick later
  both failed before the fix and pass after it, and the maintainer's steps
  were replayed on the dev server in headless Chrome, without the fix (first
  visit: no introduction) and with it (shown). `npm run check` green.

- 2026-10-24: **Rating 2 in German: "Zweifelhaft"**, not "Ungenauigkeit",
  which read oddly to the maintainer. The German annotation vocabulary
  calls a "?!" move "zweifelhaft" (a move of doubtful value), which is what
  the rating means (gives something away, not yet a mistake), and it reads
  as a verdict beside "Spielbar" and "Fehler" rather than as a measurement.
  Offered beside it: "Fragwürdig" (harsher) and "Ungenau".

- 2026-10-24: **Named lines: the tooling and the pilot.** The dataset's five
  TSV files (commit `a6189a3`) are in `src/content/named/`, read by
  `src/content/named.ts`, which plays them as a tree (each move once: 0.7
  seconds for all 3,865 lines, where replaying each line through the game
  took 30) and returns the named moves and names by position key. In
  `scripts/content/`: `frontier.mjs` writes the batches, the names to put
  into German and the glossary; three briefs for a batch and one for the
  names; `validate-batch.mjs`; `add.mjs`, which writes finished batches into
  the modules and moves a position out when the layout test demands it. A
  dry run with dummy texts for all 4,191 moves of the ten-ply variant passed
  every layout and coverage test, and the served form built in 2.9 seconds.
  The pilot (four batches: the Open Sicilian with 2...d6, the Ruy Lopez
  after 3...a6, the Queen's Gambit Declined, the Grob; 12 agents, 1.23
  million tokens, 15 minutes) wrote notes that assess the move rather than
  tour the next ones, and the reviewers corrected 31 notes, most of them
  claims false on the board. Read in full, it still showed four faults,
  each now engineered away: notes that cite the sources as speakers ("the
  sources prefer"), plans written as pawn moves ("the c3 and d4 centre"), a
  tactic misnamed (a "pin" that is a discovered attack waiting), all three
  now in `standard.md` with the instruction to play a tactic out on the
  board tool; and backgrounds with a detail the page does not give ("in the
  early 1960s") or a fact about the parent line, which no reviewer had
  changed. The reviewer now gives every fact it keeps with the sentence of
  the page that states it, and the validator fetches the page and refuses a
  quote it does not find there. The pilot's outputs were not used; the full
  run writes those batches again with the corrected briefs.

- 2026-10-24: **Named lines: the content.** One workflow ran the 163
  batches and the 24 name files: 513 agents, none failed, 47.0 million
  tokens, 3 hours 18 minutes. Every output passed `validate-batch.mjs`
  again afterwards, and `add.mjs` wrote 5,317 moves and 5,136 positions
  into 1,686 modules (1,692 in all; the served index is 654 kB, 58 kB
  gzipped). The ratings: 2,392 rated 5, 1,515 rated 4, 980 rated 3, 383
  rated 2, 47 rated 1. The reviewers changed 758 notes (480 findings were
  claims false on the board, 194 claims the basis did not support, 40
  breaches of the standard, 16 history in a note, 27 form) and 17 ratings,
  and of 566 backgrounds kept 556 and changed 137, each fact kept with the
  sentence of its page, 1,108 such quotes found by the validator on the
  page; 1,939 described positions have no background, since the pages give
  none. 2,522 names were put into German against the glossary. Read
  afterwards: 4,732 of the notes (89 %) name no move at all, and the 65
  that name three or more are, read one by one, the reply that refutes a
  weak move or the trap a move sets, which the standard keeps; none cites
  the sources as speakers. Main lines (the Najdorf with 6.Be3, the closed
  Ruy Lopez, the Queen's Gambit Declined with 4.Bg5, the King's Indian with
  6.Be2 e5, the Winawer, the Caro-Kann with 4...Bf5) are 5 throughout. Two
  faults were found and fixed by hand: the only legal move (1.e4 b6 2.d4
  Bb7 3.Bd3 f5 4.exf5 Bxg2 5.Qh5+ g6) was rated 2, now 5; a note had the
  knight take on e4 "with a discovered check", where the check comes when
  it jumps on (one of 30 deep notes read at random, so some claims false on
  the board are likely still in the book). Two explorer tests used 1.g4 as
  the move after which the book ends; the named lines go on from it, so
  they use 1.c3, after which none does.

- 2026-10-24: **The modules folded.** `scripts/content/merge-modules.mjs`
  folded the 1,692 modules into 194 (ADR-0002, and the decision below):
  582 files under `src/content/lines/` instead of 5,076. The book built
  before and after, compared position by position with every name, note,
  rating and source, is the same; only the module of each position moved.
  Served: 194 chunks, the median 5.7 kB gzipped (0.9 kB before), the
  largest 26.3 kB (`e4-e5`, 26.1 kB before), the index 49.7 kB gzipped
  (59.4 kB), the root chunk 24.9 kB (17.7 kB). A main line to its twelfth
  move fetches four to six chunks instead of seven (the Najdorf four, the
  closed Ruy Lopez six, the King's Indian and the Winawer five).

- 2026-10-24: **Gaps: the pilot.** `gaps.mjs` found 3,067 positions with
  moves but fewer than three or none rated 5 (at least 5,592 moves to add)
  and wrote them into 234 batches of about 25 positions, a family's
  together. Four batches ran first: 12 agents, 14 minutes, 1.2 million
  tokens, 134 moves added and 15 revised, every output valid. Two faults,
  fixed in the briefs before the full run: a writer rated a move 5 because
  the book follows it on a named line (the dataset names lines for their
  names, gambits and traps, not their merit; both briefs now say so, and
  the reviewer counts such a rating as a finding), and a reviewer checked
  the concrete claims by reasoning without running the board tool (the
  brief now asks for the tool on every concrete claim, and every reply
  reports how many board commands were run). The pilot's outputs were not
  used.

- 2026-10-24: **Gaps: the content.** One workflow ran the 234 batches: 702
  agents, none failed, 66.7 million tokens, 6 hours 31 minutes (the
  projection from the pilot was about 70 million and six to seven hours;
  the writers took 8.8 minutes each on average, the reviewers 3.6, the
  translators 0.8). Every output passed `validate-batch.mjs` again
  afterwards, and no reviewer reported running no board command. Added:
  5,790 moves, rated 5 678 times, 4 1,711, 3 2,680, 2 407 and 1 314.
  Revised: 527 existing moves, 126 with a new note; 414 went from 4 to 5
  and 41 from 3 to 5, which supplies most of the missing main answers. The
  reviewers changed 983 moves or revisions (710 findings were claims false
  on the board, 89 claims the basis did not support, 70 ratings, 54
  breaches of the standard, 25 main answers, 21 alternatives, 32 form)
  and dropped 34 added moves for better ones. Read afterwards: of the 721
  added moves rated 1 or 2, 713 are in positions with fewer than three
  sound moves (a forced recapture, an answer to a check), as the brief
  allows; the other 8 are a natural mistake beside three sound moves. The
  15 swings between 1 or 2 and 4 or 5 each rest on a named page or a line
  played out on the board (1.e4 e5 2.f4 Qh4+ 3.g3 Qe7 now 5, Keene's
  defence on Wikibooks; the Allgaier's 6.Ng5 now 2, unsound in modern
  theory on Wikipedia; 6.Be2 in the Alekhine with 4...Bg4 now 2, "?!" on
  Wikibooks). 14 positions have two moves rated 5, four of them existing
  moves, the others co-main lines the sources treat alike (5.Bh4 and 5.Bxf6
  in the Queen's Gambit Declined with 5.Bg5 h6, 4...Nf6 and 4...c6 in the
  Scandinavian with 3...Qa5); the rule asks for one at least, so they
  stay. 14 notes drawn across the batches and read with the board: true,
  a few clumsily put; the German uses German piece letters throughout.
  `add.mjs` wrote the moves into the 192 modules; the book built before
  and after, compared position by position, differs only by the added
  moves and the revisions. Ten positions keep fewer than three moves,
  having fewer legal ones.

- 2026-10-24: **The modules folded again.** The wider positions grew one
  module past the budget (`Nf3-Nf6`, 119,507 bytes), so
  `merge-modules.mjs --refold` took the book apart, one unit per position
  with moves, and folded it again at the same 100,000 bytes (ADR-0002
  holds unchanged): 174 modules, 522 files under `src/content/lines/`
  (582 before), the median module 68 kB, the largest 99.9 kB. The book is
  the same before and after the refold, position by position. Served: 174
  chunks, 9.7 MB (2.7 MB gzipped), the median chunk 15.5 kB gzipped, the
  largest 24.3 kB (`Nf3-d5`), the index 49.8 kB gzipped. A budget of
  128 kB would have given 135 modules, 180 kB 94; the present one keeps
  every chunk below the largest the book served before.

- 2026-10-24: **Gaps: the moves raised from 1 or 2 to 5, checked.** The
  maintainer asked whether the nine are right. Each is the best reply in
  a position an earlier move spoiled, and that move keeps its 1 or 2
  (5...Qh4+ in the Würzburger Trap, 3...fxe5 in the Damiano, 3.Nxe5 in
  the Irish Gambit): the old ratings judged the line, not the move (the
  spec: a rating is the judgement of the move). Read against the pages:
  3...Qe7 after 2.f4 Qh4+ 3.g3 is Keene's Defence in Wikibooks' table;
  6...Nxg3 is the line of both Wikipedia and Wikibooks after 6.g3 in the
  Würzburger Trap; 3...c6 heads Wikibooks' table of 2...b5; 4...g6 in the
  Damiano loses the exchange "though other options are worse"
  (Wikipedia); 6...d5 is Wikibooks' Corkscrew Gambit; 4.d4 is the Irish
  Gambit's line on Wikipedia; 3...f6 against the Mokele Mbembe is the
  line Watson and Schiller analyse (Wikipedia). 4...Qg5 in the Elephant
  Gambit rests on one game (Lob–Eliskases, Wikipedia) and 5...O-O after
  1.e4 g6 2.d4 Nh6 3.Nc3 f5 4.Bxh6 Bxh6 5.exf5 on the board alone (no
  page exists); both stay. One fault found beside them: after 2.Bc4 b5
  3.Bxb5, Wikibooks gives 3...f5 (Thorold Gambit) and 3...c6 as
  Anderssen's two choices, both ±, yet 3...f5 was rated 2 for a later
  mistake (4.d4 fxe4?) and 3...Nf6, which no page names, 4. Now 3...f5
  is 4 with a new note in both languages, and 3...Nf6 is 3.

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
- 2026-10-23: **The candidate under the pointer is one state of the
  explorer, not a CSS link.** The board and the panel cannot see each
  other's `:hover`, so the explorer holds the hovered move and passes it
  down; each component draws it with the look it already has for the
  pointer, through an attribute beside `:hover`. Dropped with the
  selection as well as with the position, since the arrows give way to a
  selected piece and a stale row would stay lit. Pointer events, not mouse
  events: a touch that scrolls away cancels and leaves nothing lit, where
  the mouse compatibility events would never report the leave.
- 2026-10-23: **The board is pointer input; the keyboard gets the
  candidates.** Squares are not buttons: 64 tab stops would be noise, and
  the spec names the list as the keyboard's route. The board stays an
  image named by the position. A promotion is always to a queen, as the
  spec says, so no dialogue interrupts a move.
- 2026-10-23: **The state is the address.** The explorer is a controlled
  component of the route; its only own state is the selected square,
  reset whenever the line or the move shown changes (and, since the
  hover work below, the candidate under the pointer). The whole line is
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
- 2026-10-23: **Loader: verify on request, play from the parent's game, read
  a position's moves when first asked for.** `buildBook` keeps every check it
  had and stays strict by default (`book.test.ts` is unchanged); the app
  builds the shipped book with `{ verify: false }`, and `openings.test.ts`
  builds it again strictly, which is where all 2,721 lines and 2,918 moves
  are checked for legality, canonical spelling, an English strategy and
  declaration once. Without verifying, a line is played one move from its
  parent's cached game with the position-level `applyMove`, not replayed
  from the start with the game-level `play` and `status`; a position's moves
  are parsed when its `moves` is first read (the explorer reads one
  position's thirty or so), not for all 2,900 at import. 5.7 seconds became
  0.5, about 0.35 of it the book. Why not more: the key of every declared
  position must exist for a transposition to find it, and a key costs one
  legal-move generation. Considered: keys stored beside each line (a second
  copy of the chess data that a content author cannot write by hand, though
  the loader could name the right one in its error); an index generated at
  build time (a generation step and a generated file to keep fresh); index
  by ply on first use (more code for a gain only a shallow visitor sees).
  Cost of the choice: a content error in a position's moves throws when that
  position is first shown, not at import; the test makes that a failure of
  `npm run check`, which every commit runs.
- 2026-10-23: **Strategy notes: reworked before the book goes deeper.** The
  maintainer, reading the book: many notes tour the follow-up moves in
  notation ("White then picks the battleground: 3.Bb5 (the Ruy Lopez),
  3.Bc4 ..."), where the explorer shows each of those moves as its own
  entry; a note should say what the move wants, what it gives up and what
  kind of game it leads to, in words a club player understands. Measured:
  2,830 of the 2,918 notes name other moves in notation, every note on a
  move rated 4 or 5 among them. Notation is not banned and no test looks for
  it, because whether a move belongs in a note depends on what the sentence
  says (the maintainer); the spec's definition of the text says so. First,
  because the next level's 5,400 notes are then written to the new
  definition from the start.
- 2026-10-23: **Strategy notes: one Sonnet writer and one Sonnet reviewer
  per followed position, both at medium effort** (the maintainer's choice;
  the content levels had Opus reviewers). The node file sets each move's
  treatment: *lift* (moves rated 4 and 5, and moves rated 3 that reach a
  named, sourced opening, about 460 notes) is written anew from the
  opening's Wikipedia and Wikibooks pages, at most twelve fetches per
  position; *trim* (the rest) is reworded without research, its reasoning
  kept, and the writer may mark a note *keep* and copy it unchanged. The
  reviewer gets the node file and the writer's notes with the page each
  outlook rests on, checks every note against the standard, the board and
  that page, restores a correct point the rewrite dropped, and writes the
  German from the corrected English. Why no separate triage pass: the
  writer reads every note of the position anyway, and a pattern match
  selects nothing when 97 % of the notes match it. Ratings stay; a writer's
  or reviewer's doubt is reported, not acted on. After the first full run
  (Progress log), the maintainer: the reviewer approves a note that needs
  no change and only translates it.
- 2026-10-24: **The book is JSON, served in chunks generated at build and
  fetched as the line walks into them**: `docs/adr/0001-opening-book-as-fetched-json.md`
  holds the decision, the options and the costs. It replaces the Loader
  decision of 2026-10-23 above (verify on request, play from the parent's
  game, read moves when first asked): the app builds no book any more, so
  `buildBook` verifies always and reads every move, and the start-up cost
  that decision bought down is gone with the import. Of the alternatives
  that decision listed, "an index generated at build time" is now the
  choice, because the index is what lazy loading cannot do without. The
  `max-lines` override of the Modules decision is gone with the TypeScript
  modules; the layout rule (one root per module, two plies below it) is now
  a test, since a chunk's size is a module's size.
- 2026-10-24: **Named lines: beyond the breadth-first plies the Lichess
  dataset decides what the book follows, each line cut at its twelfth move
  played.** The maintainer: the breadth-first search does not scale past
  Black's second move (every legal move from every followed position
  multiplies the book about thirty times a ply, Open below), while many
  openings need more moves to be explained at all; so from the fifth half
  move on, and after a move rated 1 to 3 before it, the book writes the
  moves the dataset's 3,865 named lines play and nothing else, whatever
  their rating, with the dataset's names, and the research and review stay
  as they were. The maintainer chose to keep the book's spelling of a
  family (the dataset's "Nimzo-Larsen Attack: ..." is written under the
  book's "Nimzowitsch–Larsen Attack"), and to cap the line length so that
  the run takes under six hours. Measured on the full dataset: 7,728 new
  moves to line ends as deep as the 36th ply; a pilot of four batches (175
  moves, below) took 15 seconds of agent time per move in sequence, 20 for
  the deepest, and 7,000 tokens a move. Through the twelfth move (Black's
  sixth) that is 5,317 moves, 3,469 positions and 2,522 names in 163
  batches and 24 name files, about four hours with eight agents at once;
  through the fourteenth it would have been 6,201 moves and close to six
  hours, too close for the margin a long run needs. The cap reaches the
  defining move of most named systems (the Najdorf at the tenth, the
  closed Ruy Lopez at the tenth) and stops before their deep theory.
  The breadth-first part is unchanged: through White's second move every
  legal move from a followed position. A position on a named line beyond
  it holds only its named moves, and another move there leaves the book,
  as an off-book move did before. Not chosen: every legal move from every
  position on a named line (179,980 moves, not finishable); the named moves
  only where the move into the position was rated 4 or 5 (drops the named
  gambits and traps the maintainer wanted covered). The dataset is
  committed (`src/content/named/`, CC0) so that `openings.test.ts` holds
  the book to it, and `NAMED_LINE_PLIES` in `src/content/named.ts` is the
  cap. The work runs in batches of about 35 moves, a family's positions
  together, so the family's pages are read once: a Sonnet writer at high
  effort rates and explains the moves and writes the backgrounds, a Sonnet
  reviewer and a Sonnet translator at medium effort check them and write
  the German (the maintainer's choice of models and efforts), and the new
  names are put into German a family at a time against the book's
  glossary (`scripts/content/README.md`, Named lines). The layout of the
  modules stays as ADR-0001 set it: a position that gains moves two plies
  below its module's root moves into a module of its own, so the book goes
  from 40 modules to 1,692, and the served index from 14.5 kB to 58 kB
  gzipped (measured after the run).
- 2026-10-24: **The modules are subtrees, folded up to 100 kB.** The
  maintainer asked to merge the 1,692 modules of the named-lines run
  mechanically, for a balance between file size and the number of files.
  `docs/adr/0002-opening-modules-folded-to-a-size-budget.md` holds the
  decision and the options; it supersedes the layout rule of ADR-0001 and
  the paragraph above that keeps it. A module is now one subtree of the
  book, two plies deep as before or, deeper, at most 100,000 bytes on disk,
  the size of the largest breadth-first module rounded up, so no chunk is
  larger than one the book already served. `add.mjs` still splits new
  depth into modules of its own; `merge-modules.mjs` folds them again.
- 2026-10-24: **Gaps: every position with moves holds at least three, or
  every legal move where fewer are legal, and one of them rated 5.** The
  maintainer: positions along the named lines had one or two moves, some
  with none rated 5, and a reader learns more from the main answer beside
  a good or playable alternative than from a single move. The maintainer
  chose, from the options put to them: only the positions that already
  have moves get more (3,067 of them; the positions without moves stay
  where the book ends), and the moves added are leaves, rated and
  explained but not followed, so the book gains no positions; the writer
  may revise an existing rating and rewrite a note it makes false, under
  review; a pilot of four batches, then the rest in one run. The rule
  replaces "a position on a named line holds only its named moves" of the
  Named lines decision above: such a position holds its named moves and
  beside them the main answer and the alternatives the sources name, and
  a move off the named lines still leaves the book. Per batch of about 25
  positions, a family's together, a Sonnet writer at high effort finds the
  main answer, adds alternatives rated 3 to 5 up to five moves in all (a
  move rated below 3 only where no third sound move exists) and checks the
  existing ratings and notes; a Sonnet reviewer and a Sonnet translator at
  medium effort check it and write the German (the maintainer's choice of
  models and efforts). `openings.test.ts` holds the rule, and the test of
  the named moves now asks that a position off the named lines holds none,
  rather than exactly the named ones. The strategy rework's node-file
  writer, validator, applier, comparer and briefs were dropped from
  `scripts/content/`; the gaps extend the named lines' validator and module
  writer, and `merge-modules.mjs` gained `--refold` for modules grown wider
  than the budget. Not chosen: also giving moves to the positions where
  the book ends (about 4,300 more positions, and a deeper book).
