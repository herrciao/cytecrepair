# SEO Runtime v0.1

## Runtime loop

```text
Collect → Discover → Select → Brief → Draft → Technical Review
→ Build → SEO Validate → Commit → Publish → Measure → Repeat
```

## Weekly cadence

### 1. Collect

Read the current article registry, previous run records, Search Console export, enquiry notes, and owner-supplied repair evidence. Missing Search Console access must be recorded; it must not be replaced with invented metrics.

### 2. Discover

Produce exactly five candidates. For each, record query/cluster, intent, affected component, evidence available, current competing site page, SERP gap, commercial relevance, and risks.

### 3. Select

Select one candidate using the score defined in `docs/SEO-STRATEGY.md`. State why the other four were not selected.

### 4. Brief

Create a brief in `seo-runtime/briefs/`. It must include target intent, reader problem, unique evidence, outline, internal links, CTA, claims requiring confirmation, and acceptance criteria.

### 5. Draft and technical review

AI may prepare a draft, but its run status must become `waiting-technical-review`. Only the owner can approve technical claims. Required corrections and the approval date are recorded in the run.

### 6. Build and validate

After approval, create or update the page. Update the canonical registry, intentional related links, and any relevant navigation. Run:

```bash
npm run seo:check
npm run build
```

### 7. Commit and publish

Commit on a working branch with the Run ID in the message or body. Publishing/merging remains a separate owner-authorized action.

### 8. Measure

Record index status, impressions, clicks, average position, queries, organic conversions, and observations at 7, 28, and 90 days. Recommend one of: keep, improve, consolidate, or investigate.

## States

```text
discovered
selected
brief-ready
drafting
waiting-technical-review
approved
built
validated
committed
published
measuring
completed
```

No state may skip `waiting-technical-review` and `approved`. `published` means the production URL is verified, not merely committed.

## Definition of done for one run

- Five candidates and one justified selection exist.
- Technical claims have explicit human approval.
- The page satisfies the selected search intent without cannibalization.
- Registry, canonical, Hub discovery, sitemap, related links, and schema are consistent.
- SEO check and production build pass.
- Commit and measurement checkpoints are recorded.

## Pilot and automation gate

Run this workflow manually for four consecutive weeks, targeting one approved publication per week. Only after the four-week review may a separate approved phase add persistent scheduling. Scheduling must retain the human technical and publishing gates.
