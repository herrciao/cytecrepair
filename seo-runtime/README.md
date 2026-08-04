# SEO Runtime v0.1 Workspace

This directory stores the operational memory for the supervised weekly SEO loop. Strategy and policy live in `docs/SEO-STRATEGY.md`, `docs/SEO-RUNTIME.md`, and root `AGENTS.md`.

## Directory roles

- `config/runtime.json`: goal, cadence, gates, scope, and measurement checkpoints.
- `runs/`: one factual execution record per weekly cycle.
- `briefs/`: the selected content brief linked from a run.
- `reports/`: baseline and periodic performance reviews.
- `templates/`: copy-first templates; do not overwrite them with run data.

## Naming

- Run: `runs/YYYY-WNN-topic.md`
- Brief: `briefs/YYYY-WNN-topic.md`
- Review: `reports/YYYY-MM-DD-description.md`

## Start a weekly run

1. Copy the run template and assign a Run ID.
2. Verify inputs and explicitly mark missing data.
3. Research five candidates; never invent keyword volume, rank, or Search Console data.
4. Select one candidate and create its brief.
5. Stop at `waiting-technical-review` until the owner approves technical claims.
6. After approval, build and run `npm run seo:check` plus `npm run build`.
7. Record publication and 7/28/90-day measurements.

Creating these records is not permission to merge or publish.
