# Design: the design system

## Context and scope

The visual language every screen is built from: the tokens (colour, type,
space, shape, motion), the board treatment, and the rules components follow.
It applies to `src/ui/` and `src/app/` (`docs/ARCHITECTURE.md`, Layers); the
other two layers render nothing. Token values live in `src/ui/theme.css` and
nowhere else; this doc names tokens by role and states the rules for using
them.

Direction: a light theme, minimalistic with no distractions, balancing modern
looks with classic chess vibes: wood, tangible, kept simple.

## Goals and non-goals

- Goal: nothing competes with the board and the text. A screen shows the
  position, the explanation and the next action; nothing is decorated,
  animated or coloured unless that carries information.
- Goal: the board reads as a wooden object lying on a light page, not as a
  grid of coloured cells.
- Goal: one place per visual value, so a colour or size changes once and
  everywhere.
- Goal: one layout serves desktop and phone. Desktop first; at phone width
  the same screen stacks, without a second design.
- Non-goal: a dark theme. Light only; `prefers-color-scheme` is ignored. A
  dark theme later is a new decision, recorded here as an amendment, not a
  quiet addition.
- Non-goal: a board library. The board is a plain component of this
  project (`src/ui/board/`): it draws a position, highlights, target marks
  and candidate arrows, and reports pointer input by square and by arrow;
  what a click means is the screen's. The rules are the project's own
  engine (`chess-rules-engine.md`).
- Non-goal: a component library. Shared Button or Card components appear
  when a second screen needs them, not before.
- Non-goal: branding. No logo, illustration or marketing page; the app name
  set in the heading face is the wordmark.

## Design

- **Mechanism** — every value is a CSS custom property declared on `:root`
  in `src/ui/theme.css`, which also holds the base element styles (page,
  headings, links, focus ring, reduced motion). `src/app/main.tsx` imports it
  once. Each component has one CSS Module next to it, named after the
  component (`src/app/App.module.css` beside `src/app/App.tsx`), whose rules
  use `var(--…)`. Spacing between siblings comes from `gap` and padding,
  never from margins. No CSS framework, no CSS-in-JS.
- **Colour** — warm neutrals that lean toward the maple of the board, one
  accent, three feedback colours.
  - `--color-bg`, the page: a warm white, very light with a little warmth.
    `--color-surface`, cards and controls: pure white, a step lighter than
    the page.
  - `--color-ink` and `--color-ink-muted` for text; `--color-hairline` for
    borders and rules.
  - `--color-accent`, forest green, the only saturated colour outside the
    board and feedback: links, the primary action, the selected or current
    item. `--color-accent-strong` for hover and pressed; `--color-accent-tint`
    as the background of a selected row or the current move.
  - `--color-good`, `--color-bad` and `--color-note` for a correct answer, a
    mistake and a hint. `--color-good` shares the accent hue, so colour is
    never the only signal: a feedback colour always comes with a word
    ("Correct.", "Not quite.", "Hint.").
- **Board** — `--board-light`, maple, and `--board-dark`, walnut: flat
  colour, no grain. Depth comes from `--board-edge`, a thin dark edge, and
  `--board-shadow`; the board is the only element with a shadow.
  `--board-highlight` marks the last move and the selected square,
  `--board-target` the legal-move dots; both are the accent at partial
  opacity, so they read by hue shift rather than brightness (2.0:1 against
  the light square, 1.2:1 against the dark one), and the move list is what
  names the move. Coordinates sit outside the board, small and muted.
  Built as `src/ui/board/Board.tsx`: an 8 × 8 grid filling its container's
  width, the edge a 1px border and the radius on the grid, the ranks in a
  column on the left and the files in a row below, in `--text-sm` muted ink.
  A highlight is an overlay between the square and its piece. The
  legal-move dot has its token and no renderer yet; it comes with
  interaction.
- **Pieces** — drawn for this design, as inline SVG from path data in
  `src/ui/board/pieceShapes.ts`, rendered by `Piece.tsx`: classic Staunton
  silhouettes simplified to what a 44px square can show, no 3D, no texture,
  no ornament. A piece is a few closed parts (plinth, stem, collar, head)
  painted in order, each filled with the piece colour and outlined; a later
  part's outline draws the joint, which is how a collar sits on a stem.
  Detail lines (the bishop's slit, the knight's eye, nostril and mouth, the
  crown and base lines) are stroked in the other colour. Two tokens:
  `--piece-light`, white, and `--piece-dark`, the ink. A white piece is
  light, outlined in dark; a black piece is dark, outlined in itself, with
  light lines, and those lines are what give it structure on walnut (fill
  against the dark square 3.7:1, lines against the fill 17:1; the white
  fill against walnut 4.6:1). Readability first: a dark piece never gets a
  lighter fill or a rim, and a notch cut into a silhouette (the rook's) is
  12 drawing units wide, since the outline takes 2 from each side. Drawing
  units: a 100 × 100
  square, the outline 4 units centred on the edge (4% of the square: about
  1.8px on a phone), lines 3.5, round joins and caps; the stroke widths are
  part of the drawing and live with it, not in `theme.css`. The king is the
  tallest at 86% of the square, the pawn the shortest at 73%; queen and
  knight are the widest at about 70%; the knight faces left. A piece fills
  its square; the square's size is the only scaling.
- **Type** — system faces only; no web fonts. `--font-heading`, a serif
  stack, for `h1` to `h3`; `--font-body`, a sans stack, for everything else
  including move notation, which is set with
  `font-variant-numeric: tabular-nums`. Scale: `--text-sm` 14px,
  `--text-md` 16px, `--text-lg` 20px, `--text-xl` 24px, `--text-2xl` 32px;
  `--text-xs` 11px is the footer notice's alone (Amendments, 2026-10-24).
  Running text no wider than `--measure`; headings at weight 500, never
  bold-heavy.
- **Space** — a 4px grid, `--space-1` to `--space-12`.
- **Shape** — rounded: `--radius-control` 10px on controls and cards,
  `--radius-board` 8px. Border, fill, radius and shadow mark an element as an
  object; apply them by role, not to every block.
- **Motion** — pieces slide for `--duration-move`; hover and focus states
  change over `--duration-hover`; nothing else moves. `src/ui/theme.css`
  zeroes both under `prefers-reduced-motion`.
- **Layout** — one centred column up to `--content-max`, with a side gutter
  of at least `--space-4` that also clears the phone's safe-area inset. Board
  and text sit side by side on wide screens and stack to one column below
  40rem (640px), the board scaling to the viewport. Custom properties cannot
  be used in media queries, so `40rem` is written as a literal in each CSS
  Module that stacks, as a plain `min-width` query with the stacked layout
  as the base, never in the range syntax `(width < 40rem)` (Safari 16.4;
  Safari 15 drops the whole rule).
- **Icons** — text first. An icon only where it is universally understood
  (next, previous, play), as inline SVG stroked in the current text colour,
  always with a visible label or an `aria-label`.
- **Key interfaces** — `src/ui/theme.css` (every token, by the names above);
  `*.module.css` (one per component); `src/app/App.module.css` (the page
  frame, the first user of the tokens); `src/ui/board/Board.tsx` (the
  board: position, orientation, highlighted squares); `src/ui/board/Piece.tsx`
  and `pieceShapes.ts` (one piece, and the drawings it renders).

### Invariants

- Every colour, font, size, radius, shadow and duration under `src/ui/` and
  `src/app/` is a `var(--…)` from `src/ui/theme.css`; no CSS Module contains
  a literal colour. (promotion candidate: no sensor yet; the first literal
  colour an agent ships is the incident that adds a stylelint rule)
- `src/ui/theme.css` is imported exactly once, in `src/app/main.tsx`.
  (promotion candidate)
- Nothing under `src/` queries `prefers-color-scheme`. (promotion candidate)
- Styles live in CSS Modules; an inline `style` prop carries only a value
  computed at runtime, such as a square's position. (promotion candidate)
- The piece drawings carry no colour; a piece's colours are the two
  `--piece-*` tokens, applied in `Piece.module.css`, and the pieces are
  inline SVG, never an image file or a font glyph. (promotion candidate:
  the visual check's images rule would see an `<img>`; a colour in
  `pieceShapes.ts` has no sensor)
- Text colours meet WCAG AA on their background. Against `--color-bg`: ink
  16.1:1, muted ink 5.9:1, accent 6.3:1, bad 6.2:1, note 5.1:1; white on the
  accent 6.6:1. A new text colour is measured the same way before it lands.
  The one exception is `--color-ink-faint`, 2.75:1, used by the footer
  notice and nothing else (Amendments, 2026-10-24). (promotion candidate)

## Alternatives considered

- **Tailwind CSS** — a dependency and a build plugin; utility classes in the
  markup fight the minimalism goal; the tokens would live in a JavaScript
  config beside the CSS.
- **CSS-in-JS** (vanilla-extract, styled-components) — typed tokens at the
  cost of another dependency and a build or runtime integration the project
  does not need at this size.
- **Web fonts**, bundled via npm or from Google Fonts — 100 to 200 KB, or
  the site's first third-party request, to buy an identical face on every OS.
- **A grain texture on the board** — more tangible, more visual noise, one
  more asset to maintain.
- **A neutral grey UI around a wood board** — cleaner but colder; warm
  neutrals let the board sit in its world.
- **Other accents: oxblood, amber, slate blue** — oxblood sits next to the
  mistake red; amber gives too little contrast for interactive elements;
  slate blue has no chess in it.
- **Other wood pairs: birch and mahogany, or the familiar online brown** —
  the mahogany dark square sits close to the mistake red; the online brown is
  the least wood-like.
- **Warm paper or pure white for the page** — warm paper is not light enough;
  pure white has no warmth. The warm white keeps a very light page with a
  little of it.
- **Sharp or near-sharp corners** — more classic and stricter; rounded
  corners read friendlier and more app-like.
- **Desktop only, or mobile first** — desktop only is unusable on a phone;
  mobile first designs for the phone first, which nothing in the product
  brief asks for.
- **An existing open piece set (cburnett, Merida, Alpha, as on lichess)** —
  proven drawings, each under its own licence, with its own line weight and
  colouring tuned to another board; none takes the tokens, and the
  readability of a black piece on this walnut was not theirs to solve.
- **Unicode chess glyphs or a piece web font** — the glyphs differ by OS and
  font; a web font is the request or bundle the design excludes.
- **Raster sprites** — soft at arbitrary sizes, one more asset to maintain,
  no token colouring.
- **A light rim around dark pieces** — the strongest separation on walnut,
  but it reads as a sticker and the dark pieces look thinner on maple; the
  light detail lines give the structure instead. A half-transparent rim was
  offered too and not chosen.
- **Ivory light pieces** — warmer against maple, but 3.8:1 against walnut
  where white gives 4.6:1.
- **A lighter (3.5%) or heavier (4.5%) outline** — the lighter weakens
  white pieces on maple at phone size; the heavier fills the rook's notches
  and the queen's crown.

## Cross-cutting concerns

- Accessibility: text contrast as measured above; a visible focus ring on
  every focusable element; colour never the only signal for feedback;
  `prefers-reduced-motion` respected. The board is an image named by the
  position in words (`describeBoard` in `src/ui/board/describe.ts`), and
  each piece names itself ("white knight"), both in the visitor's language
  (`docs/localization.md`). Board highlights are low in luminance contrast
  by design; the selected square's cue beyond colour is the target marks on
  the squares its piece can reach (Amendments, 2026-10-23, the explorer).
  Moving a piece on the board is pointer input; the keyboard and screen
  readers reach the candidates through the panel's list, as the explorer
  spec promises, and every other control is a button.
- Performance and privacy: no web fonts, no images in the chrome, no
  third-party request.
- Print: not considered.

## Amendments

- 2026-10-23: the no-third-party-request rule under Cross-cutting concerns
  gained a sensor: `scripts/visual-check.mjs` fails `npm run check` on any
  request off the origin (`docs/visual-verification.md`).
- 2026-10-23: the piece set and the board component (Board, Pieces).
  Decided with the maintainer from a preview of the set on both square
  colours at 44, 64 and 100px: ink outline on dark pieces, not a light rim;
  white light pieces, not ivory; outline at 4% of the square, not 3.5 or
  4.5. The board's position model is a small domain module
  (`src/domain/position.ts`) rather than a chess library adopted now; the
  library choice stays with the opening explorer. Tokens added:
  `--piece-light`, `--piece-dark`. The non-goal on the piece set and the
  board library is replaced by the one on a board library and rules engine.
- 2026-10-23: a footer (Layout). The page column ends in a footer row
  under a hairline, pinned to the bottom of the viewport on tall screens,
  in `--text-sm` muted ink. It holds the language switch
  (`src/ui/language/LanguageSwitch.tsx`): text buttons styled as links, the
  current language in ink and not underlined, each language named in
  itself. Came with the localization work (`docs/localization.md`); no
  token added.
- 2026-10-23: the opening explorer and the entry page (Layout, Board,
  Colour, Icons). Decided from the screenshots of the built screen at both
  widths, over four other shapes recorded in the explorer plan's decision
  log. *Layout*: the explorer puts what the visitor does on the left (the
  board; under it the line as one wrapping row of moves, the current one
  on `--color-accent-tint` in `--color-accent-strong` at weight 500, move
  numbers muted; under that one quiet row of controls: back and forward as
  chevrons with an accessible name, Reset and Flip board as text, in muted
  ink, disabled at 0.35 opacity) and what they read on the right (one
  move's information, then the candidates as the one list); below 40rem it
  stacks, board first. The page frame gained a header row: the wordmark as
  a link home in `--text-xl` ink, the screen's name beside it in muted ink.
  The entry page is a grid of cards, each an object (hairline border,
  surface, `--radius-control`): the name in the heading face, one sentence
  in muted ink, the accent on the border on hover. A candidate in the list
  is a button of the same make: the move, where it leads in muted ink, the
  rating. *Board*: candidate arrows (`src/ui/board/arrows.ts`), one filled
  polygon each from 0.36 squares off the centre of the piece's square to
  the centre of the target, so the piece stays visible and clickable; two
  tokens, `--board-arrow-strong` for a rating of 5 and `--board-arrow-light`
  for 4, the `--color-accent-strong` hue at 0.85 and 0.5 opacity and the
  lighter one narrower, so a candidate is told from the last-move highlight
  by form (a line, not a fill) and the two ratings by weight; an arrow
  turns opaque on hover. A second hue for the arrows was rejected: the
  accent is the colour of the next action, and `--color-note` reads 1.3:1
  on walnut. Legal targets: `--board-target` as a dot filling 28% of an
  empty square and a ring around a piece that can be captured, above the
  piece; the selected square takes `--board-highlight`. *Ratings*: five
  tokens `--rating-1` to `--rating-5`, red through to green: 1 is
  `--color-bad`, 3 `--color-note`, 5 `--color-good`; 2 is `#ad4e1c` (5.2:1
  on the page) and 4 `#557a27` (4.8:1), measured as the invariant asks.
  Shown as a dot and the word in that colour at `--text-sm`, never a fill,
  so the word is always there. *Icons*: the chevrons are the first use of
  the two icons the rule allows.
- 2026-10-23: the candidate under the pointer, on the board and in the
  list (Board, Layout). An arrow and its row in the candidate list take
  their hover look together: the pointer on either lights both. The row
  keeps the look it had, the accent border on `--color-accent-tint`. The
  arrow turns opaque in `--color-accent-strong` and gains a light rim,
  `--board-arrow-rim` (white at 0.9), at 4% of the square as the piece
  outlines are, painted under the fill so the arrow keeps its width:
  opacity alone, 0.85 to 1, did not tell the lit arrow from its siblings
  on the walnut (the maintainer, on the screen). Rejected on screenshots:
  dimming the other arrows while one is lit (the whole board changes
  under a pointer that only crossed the list) and a brighter green (a
  luminous colour the palette has nowhere else). The highlight is a
  `data-highlighted` attribute beside `:hover`, set from the one candidate
  the explorer holds as under the pointer. Token added: `--board-arrow-rim`.
- 2026-10-24: the order of the arrows (Board). The longest arrow is drawn
  first, so a shorter one lying on a longer one, a pawn's single step on
  its double step, is on top and stays reachable by hover and click; it
  was drawn under it whenever the double step came first in the list.
- 2026-10-24: a third arrow strength (Board). When a position has fewer
  than three candidates rated 4 and 5, its moves rated 3 are offered too
  (the explorer spec, Candidates), drawn as a faint arrow: narrower than
  the light one (shaft 0.08, head 0.32 of a square) in the accent hue at
  0.3 opacity, so the three ratings read by weight. Hover and the
  highlight are as for the others. Token added: `--board-arrow-faint`.
- 2026-10-24: a link to the source (Layout). The footer holds, right-aligned
  on the language switch's line, a text link "GitHub" to the repository,
  in the accent colour as every link; no icon, the rule being text first.
  The two wrap onto two lines where the column is too narrow for both. No
  token added.
- 2026-10-24: the AI notice (Layout, Type, Colour). The footer carries, on
  a line of its own under the switch and the link, one sentence that the
  texts are AI-generated and may contain errors, for the transparency the
  maintainer wants to meet under EU rules. The maintainer asked for it
  unobtrusive: a really small size and low contrast. Tokens added:
  `--text-xs` (11px) and `--color-ink-faint` (`#a39787`, 2.75:1 against
  `--color-bg`). That is below AA, a decision of the maintainer's and the
  one exception to the contrast rule (Cross-cutting concerns); both tokens
  are for this sentence alone, no other text uses them.
- 2026-10-24: the stacked layout is the base (Layout). The explorer's two
  columns were written as the base with `@media (width < 40rem)` stacking
  them; Safari 15, the last iOS of the iPhone SE (1st generation), does not
  read the range syntax and dropped the rule, so the two columns never
  stacked on that phone. They are now written the other way round: stacked
  as the base, `@media (min-width: 40rem)` for the two columns. The look at
  both widths is unchanged; no token added.
