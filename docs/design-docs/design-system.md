# Design: the design system

## Context and scope

The visual language every screen is built from: the tokens (colour, type,
space, shape, motion), the board treatment, and the rules components follow.
It applies to `src/ui/` and `src/app/` (`docs/ARCHITECTURE.md`, Layers); the
other two layers render nothing. The direction and every choice marked
*chosen* below are the maintainer's, from the design interview on 2026-10-23
(two rounds; round two was decided on a preview page set in the proposed
system). Everything else is the design derived from those choices. Token
values live in `src/ui/theme.css` and nowhere else; this doc names tokens by
role.

Direction (chosen): light theme, minimalistic with no distractions, a balance
of modern looks and classic chess vibes (wood, tangible), kept simple.

## Goals and non-goals

- Goal: nothing competes with the board and the text. A screen shows the
  position, the explanation and the next action; nothing is decorated,
  animated or coloured unless that carries information.
- Goal: the board reads as a wooden object lying on a light page, not as a
  grid of coloured cells.
- Goal: one place per visual value, so a colour or size changes once and
  everywhere.
- Goal: the same design works at phone width without a second layout
  (chosen: desktop first, usable on a phone).
- Non-goal: a dark theme. Light only (chosen); `prefers-color-scheme` is
  ignored. A dark theme later is a new decision, recorded here as an
  amendment, not a quiet addition.
- Non-goal: the piece set and the board library. Deferred until the opening
  explainer is specified
  (`docs/exec-plans/completed/0001-agent-ready-setup.md`, decision log). This
  design constrains the choice: flat vector pieces in classic Staunton
  silhouettes, one light and one dark fill, no 3D, no textures.
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
  use `var(--…)`; spacing between siblings comes from `gap` and padding,
  never from margins (chosen: CSS custom properties and CSS Modules, no
  framework).
- **Colour** — warm neutrals that lean toward the maple of the board, one
  accent, three feedback colours.
  - `--color-bg`, the page, a warm white (chosen); `--color-surface`, cards
    and controls, pure white, a step lighter than the page.
  - `--color-ink` and `--color-ink-muted` for text; `--color-hairline` for
    borders and rules.
  - `--color-accent`, forest green (chosen), the only saturated colour outside
    the board and feedback: links, the primary action, the selected or
    current item. `--color-accent-strong` for hover and pressed;
    `--color-accent-tint` as the background of a selected row or the current
    move.
  - `--color-good`, `--color-bad` and `--color-note` for a correct answer, a
    mistake and a hint. `--color-good` shares the accent hue, so colour is
    never the only signal: a feedback colour always comes with a word
    ("Correct.", "Not quite.", "Hint.").
- **Board** — `--board-light`, maple, and `--board-dark`, walnut (chosen from
  three wood pairs), flat (chosen: no grain texture). Depth comes from
  `--board-edge`, a thin dark edge, and `--board-shadow`; the board is the
  only element with a shadow. `--board-highlight` marks the last move and
  the selected square, `--board-target` the legal-move dots; both are the
  accent at partial opacity, so they read by hue shift rather than
  brightness (measured on 2026-10-23: 2.0:1 against the light square, 1.2:1
  against the dark one), and the move list is what names the move.
  Coordinates sit outside the board, small and muted.
- **Type** — system faces only (chosen). `--font-heading`, a serif stack,
  for `h1` to `h3`; `--font-body`, a sans stack, for everything else
  including move notation, which is set with
  `font-variant-numeric: tabular-nums`. Scale: `--text-sm` 14px,
  `--text-md` 16px, `--text-lg` 20px, `--text-xl` 24px, `--text-2xl` 32px.
  Running text no wider than `--measure`; headings at weight 500, never
  bold-heavy.
- **Space** — a 4px grid, `--space-1` to `--space-12`.
- **Shape** — `--radius-control` 10px on controls and cards, `--radius-board`
  8px (chosen: rounded, over the recommended 4px and 2px). Border, fill,
  radius and shadow mark an element as an object; apply them by role, not to
  every block.
- **Motion** — pieces slide for `--duration-move`; hover and focus states
  change over `--duration-hover`; nothing else moves. `src/ui/theme.css`
  zeroes both under `prefers-reduced-motion`.
- **Layout** — one centred column up to `--content-max`, with a side gutter
  of at least `--space-4` that also clears the phone's safe-area inset. Board
  and text sit side by side on wide screens and stack to one column below
  40rem (640px), the board scaling to the viewport. Custom properties cannot
  be used in media queries, so `40rem` is written as a literal in each CSS
  Module that stacks.
- **Icons** — text first. An icon only where it is universally understood
  (next, previous, play), as inline SVG stroked in the current text colour,
  always with a visible label or an `aria-label`.
- **Key interfaces** — `src/ui/theme.css` (every token, by the names above);
  `*.module.css` (one per component); `src/app/App.module.css` (the page
  frame, the first user of the tokens).

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
- Text colours meet WCAG AA on their background. Measured on 2026-10-23
  against `--color-bg`: ink 16.1:1, muted ink 5.9:1, accent 6.3:1, bad
  6.2:1, note 5.1:1; white on the accent 6.6:1. A new text colour is
  measured the same way before it lands. (promotion candidate)

## Alternatives considered

- **Tailwind CSS** — a dependency and a build plugin; utility classes in the
  markup fight the minimalism goal; the tokens would live in a JavaScript
  config beside the CSS (round 1).
- **CSS-in-JS** (vanilla-extract, styled-components) — typed tokens at the
  cost of another dependency and a build or runtime integration the project
  does not need at this size (round 1).
- **Web fonts**, bundled via npm or from Google Fonts — 100 to 200 KB, or
  the site's first third-party request, to buy an identical face on every OS
  (round 1).
- **A grain texture on the board** — more tangible, more visual noise, one
  more asset to maintain (round 1).
- **A neutral grey UI around a wood board** — cleaner but colder; warm
  neutrals let the board sit in its world (round 1).
- **Accent: oxblood, amber, slate blue** — oxblood sits next to the mistake
  red; amber gives too little contrast for interactive elements; slate blue
  has no chess in it (round 1).
- **Board: birch and mahogany, or the familiar online brown** — the mahogany
  dark square sits close to the mistake red; the online brown is the least
  wood-like (round 2).
- **Page: warm paper or pure white** — the maintainer asked for something
  between the two: a very light background with a little warmth (round 2).
- **Corners: 4px and 2px (recommended), or sharp** — the maintainer chose
  rounded (round 2).
- **Desktop only, or mobile first** — desktop only is unusable on a phone;
  mobile first designs for the phone first, which nothing in the product
  brief asks for (round 2).

## Cross-cutting concerns

- Accessibility: text contrast as measured above; a visible focus ring on
  every focusable element; colour never the only signal for feedback;
  `prefers-reduced-motion` respected. Open: board highlights are low in
  luminance contrast by design; a selected-square cue beyond colour is
  decided with the board component.
- Performance and privacy: no web fonts, no images in the chrome, no
  third-party request.
- Print: not considered.

## Amendments

- (none yet)
