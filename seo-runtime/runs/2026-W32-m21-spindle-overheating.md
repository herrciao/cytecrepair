# SEO Run: 2026-W32 — M21 spindle overheating

## Control

- Run ID: `2026-W32`
- Week: 2026-W32
- Owner: 5 Axis Head Repair
- Status: `validated`
- Selected brief: `seo-runtime/briefs/2026-W32-m21-spindle-overheating.md`
- Working branch: `codex/seo-runtime-v0.1`
- Production URL: not created
- Commit: pending

## Inputs

- Search Console period/file: `https://www.5axisheadrepair.com/`, previous 3 months export; actual daily data 2026-07-19 through 2026-08-02.
- Existing site inventory checked: 7 M21 articles, M21 pillar, 3 service pages.
- Owner repair evidence: after-sales engineer interview supplied by the owner on 2026-08-05, followed by owner corrections and publication approval.
- Enquiry/customer-language evidence: interview described customer-facing bearing/motor temperature alarms and the field questions used to isolate the issue.
- SERP research date and market: 2026-08-04, English-language web results without a country filter.
- Missing inputs: disclosed GSC queries and Domain-property data. The technical sequence is now owner-confirmed.

Search Console Baseline 0: 0 clicks, 13 property-level impressions, 0% CTR, average position 6.8. No query rows were disclosed. These values are not estimates.

## Five candidates

| # | Query/cluster | Intent | Existing competing page | SERP/content gap | Technical evidence | Commercial fit 0–3 | Site gap 0–3 | Evidence 0–3 | Link value 0–3 | Cannibalization risk 0–3 | Claim risk 0–3 | Total |
|---|---|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | Cytec M21 spindle overheating / temperature rising | Diagnostic/repair | `/spindle-repair-rebuild` mentions thermal symptoms | Results are generic spindle services or general CNC discussions; no focused independent M21 symptom workflow was found | Owner confirmation pending | 3 | 3 | 1 | 3 | 1 | 2 | 7 |
| 2 | Cytec M21 encoder alarm / intermittent encoder signal | Diagnostic/repair | `/spindle-repair-rebuild` already covers encoder issues | Search results skew toward controller manuals and generic encoder alarms rather than M21-specific evidence collection | Owner confirmation pending | 3 | 2 | 1 | 3 | 2 | 2 | 5 |
| 3 | Cytec spindle vibration / bearing noise | Diagnostic/repair | `/spindle-repair-rebuild` directly covers vibration/noise | Competing spindle-service pages cover vibration, noise, temperature and rebuild together; likely better as a service-page expansion first | Owner confirmation pending | 3 | 1 | 1 | 3 | 3 | 2 | 3 |
| 4 | M21 A/C axis clamping or positioning instability | Diagnostic/repair | No dedicated page; hydraulic pages are adjacent | Official technical results describe axes and clamping, but safe fault-isolation content requires exact model knowledge | No owner evidence yet | 3 | 3 | 0 | 2 | 1 | 3 | 4 |
| 5 | M21 CTS filtration / ceramic seal failure prevention | Preventive/repair | Existing CTS case plus two rotary-union maintenance articles | Existing site already has strong coverage; improvement/consolidation may be better than a new URL | Existing case evidence, further confirmation needed | 2 | 2 | 2 | 3 | 2 | 2 | 5 |

Scoring formula: commercial fit + site gap + evidence + link value − cannibalization risk − claim risk. Search volume is deliberately absent because no reliable volume or disclosed GSC query data was available.

## Selection

- Selected candidate: Cytec M21 spindle overheating / temperature rising.
- Why selected: it is a high-intent symptom, fills a clear spoke gap, and can connect naturally to the spindle repair/rebuild service without duplicating the entire service page.
- Why the other four were deferred: encoder and vibration overlap the service page; A/C axis clamping lacks verified evidence; CTS filtration already has substantial site coverage.
- Create new URL or update existing URL: provisionally new symptom spoke, `/knowledge/cytec-m21/spindle-overheating`, only if technical review confirms a distinct M21-specific diagnostic workflow.
- Cannibalization decision: target observable overheating diagnosis and evidence collection; keep repair/rebuild options on the existing service page.

## Technical review

- Claims reviewed:
  1. What real M21 overheating or abnormal-temperature cases have you handled?
  2. What did the customer first observe: temperature, alarm, noise, vibration, accuracy drift, shutdown, or another pattern?
  3. Which systems do you actually isolate first: coolant/chiller flow, spindle cooling circuit, bearings, lubrication, motor/load, sensor, or something else?
  4. Which checks are safe for an operator to perform without disassembly?
  5. What data should the customer send: temperature trend, RPM/load, warm-up duration, alarm code, chiller readings, video/audio, thermal image, or photos?
  6. What are the stop-operation signs? Avoid exact temperature limits unless you can verify them for the relevant M21 configuration.
  7. Do you have anonymized photos, measurements, or a completed repair outcome that may be published?
- Evidence supplied: owner interview with an after-sales engineer experienced in Cytec fault handling; owner clarified that the public wording should use "bearing damage," that sensor values are approximate and manual-dependent, and that the runout reference is 20 μm.
- Reviewer: owner.
- Decision: `approved` for English publication with a prominent safety disclaimer.
- Approval date: 2026-08-05.
- Required corrections: do not name the engineer; state that PT100, KTY84, and other sensors may differ; require the correct manual; present approximately 125 Ω/65°C and 20 μm only as contextual field references; advise qualified assistance and conservative shutdown.

The required human technical-review gate was satisfied before page creation.

## SERP evidence log

- Official M21 technical data: `https://www.cytec.de/en/products/cymill-fraskopfe/universal-heads-technical-data.html`
- Official Cytec service overview: `https://www.cytec.de/en/service.html`
- M21 technical PDF surfaced for model context: `https://www.cytec-systems.fr/en/machining_equipment/milling_spindles/milling_spindle_CST-42-180-S.pdf`
- Competing Cytec spindle repair coverage: `https://bmsspindleservice.com/cytec-spindle-repair/`
- Competing repair/rebuild coverage: `https://www.mtt.uk.com/cytec-spindle-repair-rebuild-services/`

These sources establish result types and topic coverage. They do not replace owner confirmation of this business's repair method or outcomes.

## Build and validation

- Registry entry: created in `content/knowledge-articles.json`.
- Hub discovery: generated from registry.
- Sitemap: generated from registry with 2026-08-05 modification date.
- Related links: three explicit knowledge links plus inline spindle-repair service link.
- Structured data: `TechArticle` generated from registry.
- `npm run seo:check`: passed for 8 published articles.
- `npm run build`: passed; 21 static pages generated.
- Manual review: local DOM and visual review passed; one H1, canonical correct, TechArticle present, no broken images or horizontal overflow.

## Publication

- Owner authorized publication: yes, 2026-08-05.
- Merge/publish date: pending.
- Production URL verified: pending.
- Index request/status: pending.

## Feedback

| Checkpoint | Impressions | Clicks | CTR | Average position | Organic enquiries | Index status | Decision/notes |
|---|---:|---:|---:|---:|---:|---|---|
| 7 days | | | | | | | |
| 28 days | | | | | | | |
| 90 days | | | | | | | |

## Next action

- Decision: wait for human technical review.
- Evidence: seven owner questions above.
- Next step: owner answers from real M21 experience; revise the brief, then request explicit approval before drafting/building.
