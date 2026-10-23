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
- [x] White's second move after each reply rated 4 or 5 (ply 3): 33 positions,
      803 moves.
- [x] Black's replies to those (ply 4), where the book ends: 81 positions,
      1,975 moves. The breadth-first search has nothing left to follow: 121
      positions have moves (the root, 6, 33 and 81), every move rated 4 or 5
      from them reaches a position that has moves or is at the depth, and the
      1,832 positions after Black's reply have none
      (`src/content/openings.test.ts`).
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
of the modules to the repository, with its briefs (`scripts/content/`).

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

**Open: the next two plies (White's third move and Black's reply)**

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
variant. Start-up grows with the positions, 0.35 s now for 2,721, about
three seconds on this machine for 21,000: the extension needs the book split by family and
loaded on demand, and an index of keys that does not replay lines, before
it ships; a family's files would also outgrow the 3,000 lines of the raised
`max-lines`. The briefs and the scripts are to be committed before that
work, or rebuilt from this section: the board tool and the shared module
reader are in `scripts/content/`, and its node-file writer, validator and
module writer are the strategy rework's, to be extended for new positions
(the frontier from the ratings, ratings and backgrounds in the validator,
new entries in the module writer).

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
- [ ] Open, for the maintainer: the entry page pays for the book (Progress log,
      ply 4).
- [x] Strategy notes reworked to the spec's definition of 2026-10-23
      (Decision log, Strategy notes): all 2,918, in English and German
      (Progress log).

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
