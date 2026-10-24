# Decision records

One decision per file: its context, the options, the choice and its
consequences, frozen when made. An accepted record is not edited; a change
of mind is a new record that supersedes it (`status: superseded`,
`superseded-by:` in the frontmatter). A decision that shapes the structure
(a layer, a format, a build step) gets a record here; a plan's own
decisions stay in its decision log under `docs/exec-plans/`.

- [0001-opening-book-as-fetched-json.md](0001-opening-book-as-fetched-json.md) —
  accepted 2026-10-24: the opening content is JSON, served in chunks
  generated at build time and fetched as the visitor's line walks into them;
  superseded by 0002 in its module layout, the rest standing.
- [0002-opening-modules-folded-to-a-size-budget.md](0002-opening-modules-folded-to-a-size-budget.md) —
  accepted 2026-10-24: a module is a subtree of the book, two plies deep or
  folded up to 100 kB on disk; the rest of 0001 stands.
