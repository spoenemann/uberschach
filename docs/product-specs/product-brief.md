# Product brief: Uberschach

Intent, users, success criteria and v1 scope, from the project interview with
the maintainer on 2026-10-22, audience corrected on 2026-10-23, entry page
and title settled on 2026-10-23. Every statement here is the maintainer's
answer; nothing is inferred from code. Per-capability specs appear in this
folder spec-first, as features are built.

## What is being built

Uberschach, a chess training app that runs in the browser.

It may eventually train several things. v1 starts with just one capability:
an **opening explorer**, specified in `opening-explorer.md` and not yet
built.

## Entry page

The app opens on a feature selector: every capability is a card with its
name and a one-sentence description, and choosing a card opens the
capability. The app name in the header leads back to the selector from
anywhere. Only capabilities that exist get a card; nothing planned is
announced or greyed out. Initially there is one card, the opening explorer,
and the page shows it rather than skipping ahead, so the shape of the app is
visible from the first visit.

## Users

Built first for the maintainer's own training, and published on GitHub Pages,
so it is open to anyone who finds it useful. No accounts and no server-side
user data: whatever the app stores stays in the visitor's browser.

## Success in 6 months

The maintainer uses it for their own training.

## Out of scope for v1

- Playing against humans online.
- Native or mobile packaging. The browser is the only target.
- Accounts and cloud sync.

## Open questions

- Which capabilities follow the opening explorer.
