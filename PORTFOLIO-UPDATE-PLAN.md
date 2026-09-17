# spenc.ee — engineering portfolio and Swiss Grid implementation plan

Prepared September 17, 2026. Planning deliverable; application code and production are unchanged.

## Objective

Position Spencer D’Avis for fully remote US individual-contributor roles in applied AI, integrations, forward-deployed engineering, and internal systems. Within the first screen, establish what he builds, who depends on it, and where to inspect the work.

## Review findings

Reviewed the live homepage at https://www.spenc.ee/, the Poster House reference at https://swissgrid.posterhouse.org/, the supplied proposal, local application components, the evidence index, and the LinkedIn draft.

- The live homepage leads with “Marketing, engineered.” Its services precede selected work; marketing categories, availability copy, and page metadata reinforce that positioning.
- Existing design has useful foundations: Archivo, cream/ink/blue tokens, large left-aligned type, square controls, hairline rules, and a 12-column hero. Extend these into a shared page-wide grid rather than treating the redesign as a font swap.
- Detail pages already contain substantial material. The admin page includes pipeline steps and module descriptions; virtual staging includes before/after images. Refactor and deepen these, rather than rebuilding every case study from nothing.
- The current project category type only permits Web, Design, Marketing Systems, and Listings & Local. Filters and skills need coordinated changes with the content.
- App Store and Chrome Web Store links already exist. Keep them prominent and distinguish the published maintenance extension from the separate Yardi accounting extension.

## 1. Establish a reliable content baseline

Create a private claim ledger before replacing public numbers. Each entry needs value, unit, scope, time window, source, confidence, last verified date, approved public wording, and publication status. Keep source paths and audit details out of public assets.

The supplied proposal describes newer production verification, but `~/career-audit-output/12-evidence-index.md` still contains older receipt and infrastructure figures and unresolved caveats. Treat new proposal figures as supplied claims pending reconciliation, not as freshly verified by this review. No production database queries were performed for this plan.

| Claim | Planned treatment |
|---|---|
| 2,600+ commits | Correct to 2,100+. Verify author and repository scope before calling all of these Spencer’s “production commits”; the index describes an all-repository count. |
| $103K/year | Retain the existing headline; reconcile the approximate $51,480 maintenance and $52,000 expense components. Describe vendor replacement/avoided spend accurately, without implying independently audited net savings. Remove conflicting $74K/$30K maintenance framing once resolved. |
| 80 properties | Use for overall portfolio scope. Do not globally replace every historical or subsystem-specific 60-property count. |
| $2.78M / 6,539 receipts | Proposed lifetime reconciliation totals, dated September 17, 2026; confirm source and public release. |
| 86.8% / 95.3% | Label explicitly as auto-match by receipt count / dollar value. Confirm population and period; these are not OCR accuracy scores. |
| 319 API routes / 41 cron jobs | Use those exact labels. Route-file count does not necessarily equal endpoint count; cron jobs do not necessarily all run daily. |
| 10,334 work orders / 2,601 turns / 3,669 grounds jobs | Proposed maintenance totals; retain distinct units and confirm publication. |
| 73 Cloudflare zones / 65 with traffic | Describe the web estate. Zones are not necessarily distinct WordPress sites or sites hosted in-house. |
| 17M requests / 474K blocked threats | Dated 30-day snapshot; no “live” label. |
| 463 of 464 commits / 17 months | Scope to the admin platform. Index says activity in 16 of 17 months; avoid “17 continuous months.” |

Keep ownership explicit: Spencer built the original PHP maintenance application, founded the successor projects, architected the rewrite, and directed contractors through later build-out. Limit sole-author claims to the supported project. Exclude the unrelated third-party Outlook MCP repository.

## 2. Apply one Swiss design system throughout

Direction: an editorial engineering portfolio with asymmetric composition, prominent grotesk typography, precise alignment, strong hierarchy, and restrained imagery. Poster House informs the grid and typographic principles; do not copy its exhibition assets or full-screen presentation behavior.

| Element | Implementation specification |
|---|---|
| Grid | Shared 12-column desktop, 8-column tablet, 4-column mobile grid. Maximum container approximately 1200px; 24px desktop gutters and 16px mobile gutters. |
| Composition | Desktop section number/label in columns 1–2, primary content in 3–9, evidence or captions in 10–12. Hero may use an 8/4 split. Mobile follows semantic reading order. |
| Typeface | Retain Archivo as the available grotesk family, primarily weights 400/500/700. Use sans-serif for navigation and labels; reserve mono for code and technical identifiers. No licensed font dependency required. |
| Scale | Fluid hero 48–112px; section titles 32–56px; body 17–20px with 1.5–1.65 leading; labels at least 12px. Check long titles at narrow widths and 200% zoom. |
| Rhythm | 8px spacing base; consistent 24/32px component spacing and 64–112px section spacing. Shared alignment for titles, rules, images, and captions. |
| Color | Retain warm paper and near-black with a single blue accent. Verify every text/background pairing; darken blue if needed for small text. |
| Structure | Numbered sections, thin dividers, a strong opening rule, square image plates, restrained controls, tabular numerals for metrics. |
| Images | Purposeful screenshots and diagrams, consistent captions, readable crops. Keep a modest portrait; move the large creative gallery below engineering work. |
| Motion | Short state transitions. Remove blinking punctuation and avoid hiding essential content behind entrance animations. Respect reduced motion, including smooth scrolling. |

Create shared grid, section, metric, figure/caption, evidence link, and case-study components. Apply them to the homepage, project index and filters, every project detail, About, retained service pages, navigation, footer, galleries, tables, and empty states. Audit exceptional layouts such as business-card, archive, property-sites, and creative pages individually.

## 3. Rebuild the homepage hierarchy

Recommended headline: **“I build the systems businesses run on.”**

Alternatives:

- “Production systems. Applied AI. Real business outcomes.”
- “From business problems to production software.”

Draft supporting copy: “I’m Spencer D’Avis, a Seattle-based engineer building applied AI, integrations, and internal tools for an 80-property business. I own the work from architecture through production support.” Scope final ownership language against the ledger.

Keep “No CS degree. I learned by shipping.” as a secondary biographical line. Availability should emphasize fully remote US IC engineering roles. Primary links: Selected work and Résumé; retain clear contact access.

Homepage sequence:

1. Identity, engineering headline, concise scope, availability, and primary links.
2. A compact evidence grid: $2.78M reconciled, 86.8% auto-match by count, and 319 API routes, subject to release approval. Pair 95.3% by value with the match-rate explanation. Put other metrics beside relevant projects instead of seven equally weighted hero statistics.
3. Three featured stories: expense reconciliation, structural verification for generated images, and integrations without a vendor API.
4. Secondary work: OCR benchmark, maintenance platform, and web infrastructure. Include visible store links with accurate attribution.
5. Short About preview, linked to a full About page.
6. Capabilities organized around applied AI/evaluation, integrations, production systems, and infrastructure.
7. Compact creative/freelance section if retained, then hiring-focused contact.

Introduce `FREELANCE_MODE: "secondary" | "hidden"` in `config.ts`. Plan default: secondary, preserving the existing offering below engineering work until Spencer decides to hide it. Apply the mode consistently to navigation, homepage services, engagements, footer, and associated calls to action; preserve existing service URLs.

## 4. Build case studies around engineering judgment

Every featured story uses: outcome → constraint → personal role → architecture → decision/tradeoff → failure and remediation → measured result → evidence and limitations.

**Expense reconciliation — evolve `/projects/admin-panel`.** Lead with receipt processing rather than SEO savings. Diagram email ingestion → parsing/content routing → extraction → property/GL classification → storage → signed-link human verification → extension write-back → correction loop. Describe the 359-receipt misclassification incident, signature-address ambiguity, regression test, and fail-closed behavior. Clarify where human review remains necessary. Move other admin modules below this narrative.

**Structural verification — evolve `/projects/virtual-staging`.** Make the Sobel/edge-IoU gate the central case study while retaining the existing URL and staging examples. Show original/generated images → edge maps → score → pass/flag/fail. Confirm actual threshold behavior from the implementation. Explain sensitivity to furniture, lighting, and occlusion; an edge score is a heuristic, not proof that geometry cannot change. Use approved images and real outputs, without inventing scores.

**Integrations — promote `/projects/rentcafe-mcp`, add `/projects/yardi-integration`.** Explain nine MCP tools, stdio transport, and Puppeteer-managed sessions after source inspection. Cover the Yardi extension’s CSP constraints, nested frames, async batches, recovery behavior, and barcode/OCR/manual fallback. Link the two stories, keeping their implementations and artifacts distinct.

**Model evaluation — add `/projects/vision-ocr-bench`.** Explain the nine-model harness, baseline, scoring, and runtime pricing lookup. Publish a dated benchmark table only from actual results, with model version, sample size, accuracy definition, and cost basis. If no publishable run exists, show methodology and omit fabricated rankings.

**Maintenance — deepen `/projects/maintenance`.** Tell the PHP-to-Next.js/React Native progression, accurate authorship, mobile constraints, deployment, and adoption. Preserve store evidence and reconcile cost claims.

**About — add `/about`.** Adapt the LinkedIn narrative selectively: marketing remit → unmet systems needs → original PHP application → production platform ownership → verification philosophy → desired IC work. Do not copy conflicting tenure, ad-spend, or unverified infrastructure assertions from the draft.

Move `tablo.news` to explicitly labeled experiments and remove any claim that it is currently in production. Preserve or redirect its existing route intentionally.

## 5. Implementation sequence and files

| Phase | Work | Main files | Completion check |
|---|---|---|---|
| A — evidence and copy | Claim ledger, corrected counts, scoped ownership, headline and availability | `src/lib/{config,stats,projects,skills,services}.ts` | Proposed claims reconcile; publication status recorded. |
| B — visual foundation | Grid, type, spacing, figures, metrics, links, reduced motion | `src/app/globals.css`, `src/app/layout.tsx`, shared/layout components | Homepage and one case study demonstrate the system at mobile and desktop widths. |
| C — homepage/index | Reorder sections, feature three stories, revise categories and filters, demote freelance | `src/app/page.tsx`, home components, `src/app/projects/page.tsx`, project components | Engineering story is clear in first screen; filters and skill deep links work. |
| D — editorial pages | Deepen existing cases; add benchmark, Yardi, About | `src/components/projects/project-layout.tsx`, project routes, new About route | Each featured case includes role, tradeoff, evidence, and limitation. |
| E — full-site consistency | Migrate remaining pages, metadata, JSON-LD, social cards, sitemap, navigation | Remaining routes, `src/app/sitemap.ts`, layout/config | No stale marketing-first metadata, broken anchors, inconsistent metrics, or orphaned routes. |
| F — verification/release | Build, accessibility, responsive review, link and artifact checks | Existing scripts; focused browser checks | Acceptance criteria below pass; approved publication scope is explicit. |

Keep the existing Next.js/React/Tailwind stack and routing. No framework migration is needed. Check the current lint command and ESLint configuration before relying on them; `next lint` is declared but no usable lint workflow was established during this planning review.

## 6. Acceptance criteria

- Production build and TypeScript checks pass; establish and run a working lint command.
- Playwright smoke checks cover navigation, mobile menu, project/skill filters, résumé, store links, new routes, and legacy URLs.
- Run axe-core on homepage, index, About, and every detail-page template; resolve serious/critical issues and manually check keyboard flow, visible focus, skip link, headings, contrast, and 200% zoom.
- Inspect at 320, 375, 768, 1024, and 1440px. No clipped headlines or page-wide horizontal overflow; tables scroll within labeled regions; diagrams remain understandable as stacked steps.
- Essential content remains visible with JavaScript unavailable and with reduced motion enabled. Images have dimensions, meaningful alternatives, and suitable responsive sizing.
- Compare mobile performance before and after. Target Lighthouse performance ≥90, LCP ≤2.5s, CLS ≤0.1 under a documented test setup; report lab results as lab results, not field guarantees.
- Search the entire source for stale metrics, marketing-first copy, and contradictory ownership. Check screenshots for sensitive company details before release.
- Verify live pages after deployment, including social metadata and résumé access. A local preview does not constitute publication approval.

## 7. Follow-on work and release decisions

Prepare the redesign and copy locally for review. Before publicly releasing new company operational figures, obtain Spencer’s approval for the exact final claims, as requested in the supplied proposal. Keep freelance secondary unless he chooses hidden.

Open-source extraction is a separate track: confirm rights to release company-owned material, isolate generic modules, remove company dependencies and data, add fixtures/tests/README/examples, choose a permitted license, and then publish `structure-verify` and `vision-ocr-bench`. Do not publish company platforms or imply repositories are public before they exist. Technical posts and portfolio links follow actual release.

Defer live telemetry until the static portfolio is complete. If later authorized, use only approved aggregates from a cached server endpoint, with stale-state handling and no employee/property detail or client credentials.

## Scope of this review

Live homepage content and desktop appearance were inspected, and the reference was read and visually sampled. Repository review covered shared styling, layout, content configuration, and representative case studies. Full mobile, accessibility, performance, benchmark, production-data, and external-artifact validation remain implementation tasks. No application changes or deployment were made.
