# Codex Project Rules — 5 Axis Head Repair

## Mission

This site generates qualified repair enquiries for independent aftermarket service of machines equipped with Cytec M21 and G30 two-axis milling heads. It is not a general-purpose blog. Preserve its high-intent service pages and grow the M21 Knowledge Center as a technical authority.

The SEO Runtime v0.1 goal is:

> Publish at least one technically human-reviewed, high-intent M21 article per week and grow non-branded organic discovery and qualified repair enquiries.

## Non-negotiable safeguards

- Do not change, move, redirect, merge, or delete an existing public URL without explicit owner approval and a documented redirect plan.
- Preserve unique metadata, canonical URLs, crawlability, sitemap inclusion, breadcrumbs, structured data, and internal links.
- Never invent repair cases, customer outcomes, test readings, specifications, experience claims, timelines, or technical facts.
- A new technical article must stop at `waiting-technical-review` until the owner confirms its technical claims. AI approval is not human technical approval.
- Anonymize all case material. Remove customer names, logos, faces, serial numbers, locations, identifying labels, and documents.
- Do not publish thin, generic, or keyword-stuffed content. Avoid creating a new page when updating an existing page better satisfies the same search intent.
- Never claim that the business is official, authorized, certified, OEM-approved, endorsed by, or affiliated with an OEM.
- Use accurate positioning such as `independent`, `aftermarket`, `non-OEM`, and `for machines equipped with ...`.
- Do not reproduce OEM manuals, proprietary drawings, OEM part-number lists, or copyrighted technical material.
- Do not criticize or make unsupported comparisons with OEM services.

## Content architecture

- Homepage: business positioning and conversion.
- Service pages: high-intent repair enquiries.
- `/knowledge/cytec-m21`: M21 pillar hub.
- Knowledge articles: symptom, component, maintenance, guide, and real anonymized case-study spokes.
- Every spoke should link back to the hub, to intentionally related content, and to a relevant assessment path.

The canonical knowledge article registry is `content/knowledge-articles.json`. Do not create a published knowledge page without registering it there. Do not manually duplicate knowledge URLs in the sitemap.

## Required workflow for a new article

1. Create a run record from `seo-runtime/templates/run-template.md`.
2. Check the proposed search intent against all existing pages.
3. Record evidence needs and facts requiring owner confirmation.
4. Create a brief from `seo-runtime/templates/brief-template.md`.
5. Draft the content and set the run to `waiting-technical-review`.
6. Obtain explicit human technical approval before marking it `approved`.
7. Build the page, register its metadata, and add intentional related slugs.
8. Run `npm run seo:check` and `npm run build`.
9. Record the commit and published URL. Measure at 7, 28, and 90 days.

## Verification before handoff

- `npm run seo:check`
- `npm run build`
- Review `git diff` for accidental URL, metadata, legal, form, analytics, and content changes.
- Never push, merge, deploy, schedule, email, or publish unless the owner has authorized that action.

## Runtime v0.1 scope

Included: opportunity research, five candidates, SERP/content-gap notes, one selected brief, human technical gate, page generation, SEO validation, Git record, and measurement record.

Excluded: CRM, supplier agent, cold-call agent, dashboard, multi-agent orchestration, unattended publishing, email automation, Mac mini scheduling, GPU infrastructure, and daily mass publishing.
