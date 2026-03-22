
Claude Code Project Brief: Spencer D'Avis Portfolio — spenc.ee
Overview
Build a production-quality personal portfolio site for Spencer D'Avis, a self-taught full-stack developer and AI systems builder based in the Seattle metro. The site must work as both a technical portfolio for engineering roles and a proof-of-work document for SE/TAM roles. It replaces a CS degree with concrete, numbered evidence of production systems.
Live URL: spenc.ee
Timeline: Weekend build — clean and shippable over polish
Stack: Next.js 15 (App Router), TypeScript, ShadCN UI, Tailwind CSS, deployed to Vercel

Design Direction
Aesthetic: Apple meets Anthropic — 2026 modern. Think San Francisco typeface energy, generous whitespace, subtle depth, confident minimalism. No gimmicks. No particle effects. No typewriter animations.
Color system:

System default (respects prefers-color-scheme)
Light: near-white backgrounds (#FAFAFA), near-black text, single accent color — a cool slate-blue (think Anthropic's palette, not a saturated primary)
Dark: deep neutral backgrounds (not pure black), soft white text, same accent
Use ShadCN's zinc as the neutral base with a custom accent

Typography:

Display: Inter or Geist (Vercel's typeface — modern, clean, technical)
Mono: Geist Mono for code snippets, tech stack tags, stat callouts
Scale: Large, confident headings. Body text that breathes.

Layout principles:

Mobile-first, fully responsive
Max content width: 1100px, centered
Sections separated by whitespace, not dividers
Cards with very subtle border and shadow — not heavy drop shadows
Stat callouts in monospace to feel like data

Do NOT include:

Parallax scrolling
Canvas animations
Testimonials section
Blog section
Fancy page transitions


Headline Options (pick one, make it switchable via a constant at the top of the file)
Three options — Spencer can swap them out:
Option A: "I build production systems that replace six-figure vendor contracts."
Option B: "Full-stack developer. AI integrations. 68 properties. Zero vendors."
Option C: "I build the infrastructure. Then I deploy the AI on top of it."
Sub-headline (same for all):

Seattle-based developer with 1,670+ production commits across billing, maintenance, staging, and AI automation systems. No CS degree — just shipped code.


Site Architecture
/                          → Hero, About, Skills, Contact
/projects                  → Project grid (7 featured projects + supporting projects section)
/projects/maintenance      → Bonavista Maintenance Suite (Panel + App + Extension)
/projects/admin-panel      → Bonavista Admin Panel
/projects/wordpress-plugin → RentCafe WordPress Plugin & Property Websites
/projects/virtual-staging  → Virtual Staging App
/projects/floorplan-ai     → Floor Plan AI Extraction (bv_sam)
/projects/tablo-news       → Tablo News — AI Local News Archive (in progress)
/projects/business-card    → 3D Digital Business Card
No blog. No separate resume page — resume is a one-click PDF download from the nav.

Navigation
Desktop: Sticky top nav, minimal. Logo/name left, links right.
Links: Projects · About · Skills · Resume ↓ · Contact
Mobile: Hamburger menu using ShadCN Sheet component.
Resume ↓ triggers a direct PDF download — no new tab, no page navigation. File lives in /public/spencer-davis-resume.pdf.

Page: / (Home)
Hero Section
Full-viewport-height hero. Centered or left-aligned depending on what looks better with the headshot.

Name: Spencer D'Avis
Headline: [chosen option from above]
Sub-headline: as written above
CTA buttons: View Projects → (links to /projects) and Download Resume (PDF download)
Headshot: Circular or slightly rounded square, right side on desktop, centered above text on mobile. Spencer will provide the image file — use /public/headshot.jpg as placeholder path.
Ambient background: Very subtle — a barely-visible grid or grain texture, not animated

Stats Bar
A horizontal strip of 4–5 key numbers, displayed in monospace font. Subtle background differentiation from hero.
1,670+        5,000+         1,000/mo        68            $88K+
Git Commits   Work Orders    Receipts OCR'd  Properties    Annual Savings
About Section
Short, human. Two paragraphs max. Mirrors the resume profile but warmer.

Self-taught developer who started as a marketing manager and ended up building the entire technical infrastructure for a 68-property portfolio — from scratch, solo, in production.
I shipped an iOS app to the App Store, replaced $88K in annual vendor contracts with in-house systems, and deployed ChatGPT Enterprise to 48 users across a company with no prior AI adoption. Currently looking for my next challenge: a role where I can keep building — whether that's customer-facing as an SE or TAM, or heads-down as an engineer.

Skills Section
Visual grid of tech stack tags. Group them by category with small category labels.
Languages: Python · TypeScript · JavaScript · Swift · PHP · SQL · Bash
Frontend: React · Next.js · React Native · WordPress · ShadCN · Tailwind CSS
Backend: Node.js · FastAPI · REST APIs · OAuth 2.0 · Webhooks · Cloudflare Workers
Databases: MySQL · SQLite · ChromaDB · Turso
Infrastructure: Cloudflare · Vercel · AWS S3 · NGINX · Ubuntu/Linux · Git · Docker
AI & Automation: Google Gemini · OpenAI API · Whisper · SAM3 (Meta) · PyTorch · Prompt Engineering · MCP · Modal (GPU Compute)
Integrations: Yardi · RentCafe · Matterport · Microsoft Graph API · Google Business Profile · Apple Business Connect · Apple MapKit · Foursquare · PostHog
Render as pill badges using ShadCN Badge component. Grouped under small section labels.
Contact Section
Dead simple. Three links:

Email: [Spencer to provide — use placeholder hello@spenc.ee]
LinkedIn: https://www.linkedin.com/in/spencerbdavis/
GitHub: https://github.com/spencerbdavis

Icons from lucide-react. No contact form.

Page: /projects
Grid of project cards. On desktop: responsive grid. On mobile: single column stack.

Top section: 4 featured project cards (2×2 grid on desktop):
1. Bonavista Maintenance Suite
2. Bonavista Admin Panel
3. RentCafe WordPress Plugin & Property Websites
4. Virtual Staging App

Second section: "More Projects" — smaller cards or a compact list:
5. Floor Plan AI Extraction
6. Tablo News (badge: "In Progress")
7. 3D Digital Business Card

Third section: "Supporting Tools" — compact horizontal list with icons, no detail pages:
- Apple Business Connect Automation
- Brand Guidelines Hub (link: https://brand.bonavistapm.com)
- Employee Portal
- Cloudflare Email Worker (part of receipt pipeline)

Each featured card contains:

Project name
One-line description
2–3 tech stack pills
One key impact stat (bold, monospace)
Arrow link → to the project detail page


Page: /projects/maintenance
Title: Bonavista Maintenance Suite
Subtitle: Work order management, mobile execution, and Yardi integration — built in-house to replace a $30K/year vendor.
Problem Section

HappyCo — the industry standard for property maintenance — charges ~$1/unit/month for their suite, plus $7/unit per inspection walk. Across 5,000 units with 2,000+ annual inspection walks, that's over $74,000/year. And they require full portfolio enrollment, even for small properties. We built our own.

Three Sub-Systems (use tabs or an accordion — ShadCN Tabs component recommended)
Tab 1: Maintenance Panel
The supervisor's command center. 1,295 commits. 252 API routes. 207 React components.

Tech: Next.js 15, TypeScript, Microsoft Graph API, MySQL, FullCalendar, Resend + Mailgun, AWS S3, Cloudflare Images, Puppeteer, Apple Push Notifications
What it does:

Supervisors authenticate via Microsoft 365 OAuth (Azure AD / MSAL) with delegated access to their team's calendars
Work orders, unit turns, move-out inspections, and grounds submissions are managed from a single dashboard
Supervisors select a work order and a time slot — the system auto-generates a calendar event and places it on the assigned technician's Outlook calendar via Graph API
FullCalendar-based drag-and-drop rescheduling with resource views
Export PDF reports (work orders, turns, move-outs, grounds) via Puppeteer headless rendering with direct upload to Yardi
15+ automated email notification templates (task assigned, reassigned, resident scheduling, equipment reminders, grounds day-of, work order summaries)
Equipment checkout system with NFC tag tracking, cost calculation, and overdue reminders
Weekly performance review system with questionnaires, scoring, and bonus period calculations
GPS radius tracking and location discrepancy detection during work hours
Clothing/uniform request and inventory management
Analytics dashboard with performance metrics and activity feed
User management, property details, and multi-technician assignment support
5 Vercel cron jobs (notifications every 12h, day-of reminders at 9AM, grounds reminders hourly, equipment checks every 10min, incomplete WO summary weekdays at 4PM)


GitHub: https://github.com/spencerbdavis/maintenance-panel (private)
Screenshot slot: placeholder for 2–3 screenshots

Tab 2: Maintenance App
The technician's field tool. Published on the App Store. 108 commits. 34 screens.

Tech: React Native 0.76, TypeScript, Swift (native iOS modules), SQLite, PostHog Analytics
What it does:

Technicians receive assigned work orders, turns, move-outs, and grounds jobs
Submit after-action reports that route to property manager and supervisor for review
Residents are notified at each stage: initial scheduling, technician arrival, and job completion
Geofenced check-in with GPS property radius validation (configurable 1–5 miles per property)
NFC equipment checkout/check-in with offline-first local SQLite storage and background sync
iOS Live Activities via native Swift ActivityKit bridge — Dynamic Island and Lock Screen countdown for active tasks, welcome banners on geofence entry
Weekly performance review submissions with question snapshot locking
Receipt capture and OCR submission (camera + document scanner)
Mileage entry and tracking
Offline-first architecture: SQLite property cache (500+ properties), AsyncStorage action queue, background sync on reconnect
Deep linking for direct check-in navigation
Rage shake bug reporting with console log capture and device screenshots


App Store: https://apps.apple.com/us/app/bonavista-maintenance/id6741757267
GitHub: https://github.com/spencerbdavis/BVMaintenance (private)
Screenshot slot: 2–3 screenshots, App Store badge linking to listing

Tab 3: Maintenance Extension
The Yardi bridge. Chrome Extension (Manifest V3) built with React 19 + Vite + CRXJS.

Tech: React 19, Vite, CRXJS, Zustand, TanStack React Query, Zod, Chrome Extension APIs (Manifest V3)
What it does:

Yardi has no public API — so this extension injects into Yardi's web interface via content scripts, reads work order and property data from the DOM, and pushes it directly into the Maintenance Panel and App
Supervisors can schedule work orders, turns, and move-out inspections from within Yardi without any manual re-entry
Calendar preview with real-time technician availability and busy-time percentage calculations
Automated PDF download from employee portal and upload to Yardi work orders via background service worker orchestration
Property autocomplete search and invitee management with role-based controls
ASP.NET WebForms automation via __doPostBack for Yardi form field manipulation
Multi-phase OAuth authentication flow with Microsoft Graph integration
Published to Chrome Web Store (internal distribution)


Chrome Web Store: https://chromewebstore.google.com/detail/bv-maintenance-tasks/dikbnfhicgldiccopnigjhfmedlfdaib
GitHub: https://github.com/spencerbdavis/maintenance-ext (private)
Screenshot slot: 1–2 screenshots

Impact Bar (displayed prominently, monospace stat style)
5,000+        1,500         2,000          500           $30K+
Work Orders   Unit Turns    Grounds Jobs   Move-Outs     Annual Savings vs. HappyCo

Page: /projects/admin-panel
Title: Bonavista Admin Panel
Subtitle: The operations backbone for a 68-property portfolio — receipts, mileage, Matterport, SEO, Google Reviews, and live property data, all in one place. 224 commits. 239 API routes. 20+ cron jobs.
Modules (use ShadCN Tabs or section anchors)
Module 1: Receipt Processor

Tech: Cloudflare Email Workers, Cloudflare Browser Rendering, Cloudflare R2, Google Gemini Flash (OCR), MySQL, Next.js 14, Vercel, Resend
Pipeline flow (render as a simple horizontal flow diagram using SVG or a styled div chain):

  Email to receipts@ → Cloudflare Email Worker (bv-email: postal-mime parsing)
    ├── PDF → Gemini Flash OCR
    ├── Image (HEIC) → Sharp conversion to JPEG → Gemini Flash OCR
    └── Text-only email (e.g. Amazon) → Cloudflare Browser Rendering → PDF → Gemini Flash OCR

  Gemini returns JSON: { total, merchant, description, GL_code, date, OCR_text }
  → Stored in MySQL → Files to Cloudflare R2 → Email confirmation sent via Resend
Also accepts direct upload via Admin Panel UI (same pipeline).
Rule-based learning engine: patterns from past receipts improve future merchant recognition and GL code assignment.
Accuracy tracking system measures extraction quality over time.

Stats: 1,000 receipts/month · <60 second processing · Gemini-extracted GL codes for accounting

Module 2: Mileage Tracking

User inputs property origin and destination, the system calculates distance and logs it
End-of-month automated mileage report generated per user
CSV export for payroll integration

Module 3: Matterport Integration

Bonavista-owned iPhones are checked out by property managers; they capture 3D tours using the Matterport iOS app
Matterport GraphQL API integration auto-categorizes scans to the correct Yardi/RentCafe property ID
Billing automation: reminders on day 10, approval on day 15, billing on day 1 (via cron jobs)
Global billing settings management

Module 4: Google Business Profile & SEO Engine

20+ automated cron jobs running on Vercel keep property data, media, reviews, SEO content, and listings in sync across Google Business Profile, Foursquare, Google Places, and ILS platforms
Syncs: property details, photos (weekly rotation with scored image selection), review retrieval and AI response generation (Gemini 3.1 Pro), GBP posts, product listings, SEO keyword tracking, SERP screenshots, WalkScore data
Full SEO content pipeline: biweekly plans generated by Gemini 3.1 Pro with keyword strategy, meta descriptions, FAQ content, internal linking, competitor analysis, and portfolio-level keyword deconfliction
SERP monitoring dashboard with automated rank-tracking screenshots
Google Reviews dashboard with AI-powered response drafts
Neighborhood profile generation: walkability scores, nearby amenities, cuisine data via Foursquare and Google Places
HelloData integration for property comparables and market insights
Runs 24/7 — nightly, hourly, and weekly schedules depending on data type

Module 5: Google Reviews Management

Automated review retrieval from Google Business Profile
AI-generated response drafts using Gemini (tone-appropriate, brand-consistent)
Employee name extraction and sentiment analysis
Review engagement tracking and export

Impact Bar
1,000/mo      <60 sec       20+           68             239
Receipts OCR  Processing    Cron Jobs     Properties     API Routes

Page: /projects/wordpress-plugin
Title: RentCafe × WordPress Plugin & Property Websites
Subtitle: A custom WordPress plugin that syncs live RentCafe data to 68 property websites — plus standalone Next.js marketing sites powered by the same API — including Seattle's MFTE affordable housing filter that no existing plugin supports.
Content
The Problem:

RentPress, the closest competing plugin, charges $75/month + $6/property/month. Across 68 properties, that's $483/month — $5,796/year. More importantly, it doesn't support Seattle's MFTE (Multifamily Tax Exemption) program, which requires properties to surface income-restricted units separately. Every Seattle plugin on the market failed this requirement.

What I Built:

WordPress Plugin (floorplan-tool v1.7.7):
Custom WordPress plugin that pulls live availability, floor plans, pricing, and unit details directly from RentCafe
Full MFTE filter support — income-restricted units are correctly flagged, categorized, and displayed per Seattle housing requirements
15+ shortcodes: [FloorplanTool], [FloorplanOverview], [ContactForm], [WalkScore], [Amenities], [NearbyPlaces], and more
Full-page output caching for performance
SEO management with centralized Gemini AI content engine and sitemap generation with daily availability updates
Contact forms with Akismet spam verification and Mailgun SMTP
Photo management with scored images from Cloudinary
Deployed across all 68 property websites — zero licensing cost

Standalone Next.js Marketing Sites (Cortina, Noco):
Some properties needed faster, more modern single-page marketing sites beyond WordPress
Built with Next.js 16, consuming the same Bonavista property API that powers the WordPress plugin
Features: hero sections, photo galleries, floor plan displays, amenity showcases, neighborhood exploration with WalkScore/Transit scores, embedded maps
Cortina (Eastlake, Seattle): mid-century modern aesthetic — https://cortinaeastlake.com
Noco (property #178): gradient warm design with wave dividers and sticky mobile CTAs

Tech: PHP, WordPress Plugin API, RentCafe REST API, MySQL, Next.js 16, Cloudinary, Mailgun
Impact:
68            $5,796/yr     MFTE          15+           0
Properties    Saved         Compliant     Shortcodes    Vendor Dependency

Page: /projects/virtual-staging
Title: Virtual Staging App
Subtitle: An in-house AI staging tool that generates furnished room images using Gemini — with Google Search grounding to reflect current furniture trends from real Seattle retailers.
Content
The Problem:

virtualstaging.ai was costing $500+/year for a workflow that could be automated. More importantly, it generated generic staged rooms that didn't reflect what real furniture actually looks like — making the staged images feel artificial to prospective residents.

What I Built:

Internal web app at staging.bonavista.work
Uses Gemini Flash with built-in Google Search grounding — the model searches current furniture trends and popular retailers in the Seattle area to select realistic, purchasable furniture for each staged room
Multiple styling options including "Pacific Northwest" aesthetic
Lighting mode selection: morning, noon, or evening ambiance
Automatic room type classification and identification
Batch photo processing with real-time progress tracking and cost summary
Before/after photo comparison showcase
Drag-and-drop photo upload with property selector
ZIP export for batch download of results
Recent jobs history for reviewing past staging work
AWS S3 storage with presigned URLs for secure image delivery

Tech: Next.js 16, React 19, Google Gemini (3.1 with grounding), AWS S3, Vercel
Before/After Section:

Two-image side-by-side or slider component showing an empty room vs. staged output
Spencer to provide real before/after images

Live Demo: staging.bonavista.work (internal — note in UI that access is restricted)
Impact:
$500/yr       Google         Real          68
Saved         Grounded AI    Furniture     Properties

Page: /projects/floorplan-ai
Title: Floor Plan AI Extraction
Subtitle: A Python pipeline that extracts individual apartment units from architectural PDFs using Meta's SAM3, Gemini OCR, and OpenCV — with GPU inference on Modal H100s. An exploration in ML/computer vision.
Content
The Problem:

Extracting individual unit floor plans from full-building architectural PDFs is a manual, tedious process. Property managers need isolated unit images for marketing, leasing, and resident communication. No affordable off-the-shelf tool handles this reliably for multi-unit residential buildings.

What I Built (Exploration — work in progress):

A 5-stage Python pipeline for automated unit extraction:

Stage 0 — PDF Rasterization: Converts architectural PDFs to 300 DPI images, detects scale indicators (e.g., 1/8" = 1'-0"), calculates pixels-per-foot
Stage 1 — Tiled Gemini OCR: Adaptive tiling (768–1536px based on text density) with Gemini Flash Lite. Extracts and categorizes text elements: unit labels, unit numbers, sqft, room labels, dimensions, window callouts. Deduplicates across tile overlaps (40px radius). Assembles per-unit seed records
Stage 2 — Wall Detection & Boundaries: Adaptive thresholding + morphological operations via OpenCV. Ray-casting algorithm from OCR seed points to find wall boundaries. Flood fill segmentation for complex unit shapes. Area validation against labeled sqft (flags TOO_LARGE, TOO_SMALL, OK)
Stage 3 — Crop & Export: RGBA transparent-background unit crops. Bedroom classification from label text or area. Dimension calculation with 15% tolerance validation. Structured output: per-unit raw_crop.png + metadata.json
Stage 4 — Gemini Image Polish: Gemini Flash Image model redraws extracted units as clean technical line drawings with standardized architectural symbols
Optional — SAM3 Refinement: Deploys to Modal H100 GPU for expensive refinement of flagged units using Meta's Segment Anything 3 with point-based and text-based prompting

Note: This project represents an exploration into ML and computer vision. The pipeline works but proved extremely challenging — the variety of architectural drawing styles makes reliable extraction a hard problem. Included in the portfolio to show willingness to tackle difficult technical challenges.

Tech: Python 3.12, PyTorch (CUDA 12.6), SAM3 (Meta Segment Anything 3), Google Gemini (Flash Lite + Flash Image), OpenCV, Pillow, NumPy, Modal (H100 GPU serverless compute), HuggingFace Hub
GitHub: https://github.com/spencerbdavis/bv_sam (private)
Screenshot slot: before/after showing PDF → extracted unit crops

Page: /projects/tablo-news
Title: Tablo News — AI Local News Archive
Subtitle: An AI-powered local news search and archive interface for Seattle-area TV broadcasts — transcribed with Whisper, indexed with ChromaDB, and searchable via natural language RAG queries. In progress.
Badge: "In Progress" — display prominently
Content
What I'm Building:

Automated pipeline that records Seattle local news broadcasts from a Tablo DVR, transcribes them with WhisperX, identifies speakers via voice fingerprinting, generates summaries with Ollama, and indexes everything in ChromaDB for semantic search.

Frontend (Next.js 16):
Featured story display with full AI-generated summaries and coverage highlights
Paginated broadcast archive grouped by date with section browsing
Natural language search interface using RAG-powered semantic search (ChromaDB + Python backend)
Speaker filtering — query news by specific anchors/reporters
Full transcript viewer with timestamps and speaker identification
Broadcast screenshots with AI-scored captions and importance ranking
Speaker analytics: per-broadcast speaking time and segment counts
Scheduled recordings display for upcoming DVR captures
Coverage stats dashboard: total broadcasts, weather segments, sports segments, geographic mentions

Backend (Python):
WhisperX transcription pipeline
ChromaDB vector database for semantic search
Ollama for local LLM summarization
Voice fingerprint database for speaker identification
SQLite (local dev) / Turso (production) for structured data

Covers: KING 5 News, KOMO 4 News, KIRO 7 News, local programming

Tech: Next.js 16, React 19, TypeScript, Python, WhisperX, ChromaDB, Ollama, SQLite, Turso, Cloudinary
Screenshot slot: search interface + transcript view

Page: /projects/business-card
Title: 3D Digital Business Card
Subtitle: A spinning 3D business card with vCard download — live at cards.bonavistapm.com.
Content
What I Built:

Digital business card system for Bonavista employees with a 3D spinning card animation
Each employee gets a unique URL (e.g., cards.bonavistapm.com/SPNCE)
vCard (.vcf) download for one-tap contact saving
Property listing integration showing assigned properties
Dark/light theme support
Responsive mobile-first design

Use Spencer's own card as the showcase: display Spencer_Davis_business_card.pdf as a 3D spinning card element on the project page.

Live: https://cards.bonavistapm.com/SPNCE
Tech: Next.js 14, React 18, TypeScript, Tailwind CSS
Screenshot slot: 3D card animation screenshot or embed

Supporting Projects Section (on /projects page, compact display — no detail pages)

Apple Business Connect Automation
Apple doesn't offer a Business Connect API for portfolios under 500 locations. Built a Puppeteer-based automation tool with GraphQL integration and session management to sync property data, photos, showcases, hours, and business info across all 68 listings — what would take hours manually runs in minutes.
Tech: TypeScript, Puppeteer (stealth plugin), GraphQL, session state persistence

Brand Guidelines Hub
Centralized brand asset management for Bonavista — logo variants with usage guidelines, full color palette (Hex, RGB, CMYK, HSL, PMS), typography standards, wallpaper gallery, and batch asset downloads.
Live: https://brand.bonavistapm.com
Tech: Next.js 16, Sharp (image processing), Tailwind CSS

Employee Portal
VPN-restricted internal tool directory organizing 9 SaaS platforms and in-house apps by employee role (Property Managers, Maintenance, All Tools). IP whitelist middleware, dark/light theme, staggered card animations.
Tech: Next.js 14, Tailwind CSS, middleware-based VPN enforcement

Cloudflare Email Worker
The intake layer for the receipt processing pipeline (Admin Panel Module 1). Parses incoming emails via postal-mime, extracts attachments, converts to binary, and forwards to the Admin Panel API for Gemini OCR processing. Fire-and-forget with structured logging.
Tech: Cloudflare Workers, postal-mime, Wrangler CLI


Component Specifications
Project Card (used on /projects grid)
```tsx
interface ProjectCard {
  title: string
  description: string
  stack: string[]        // max 4 pills shown, "+N more" if overflow
  statLabel: string      // e.g. "$30K+ Saved"
  statSub: string        // e.g. "vs. HappyCo annually"
  href: string
  links?: { label: string; url: string }[]  // App Store, Chrome Store etc
  badge?: string         // e.g. "In Progress"
}
```
Stat Block (reusable across project pages)
```tsx
// Horizontal strip of 4–5 stats
// Monospace font for numbers, small label below
// Subtle background, full-width
interface StatBlock {
  stats: { value: string; label: string }[]
}
```

### Tech Stack Pills
ShadCN `Badge` variant `outline` with hover state. Small, compact. Use `Geist Mono` or monospace font.

### Screenshot Gallery
Simple lightbox-style image gallery. On click, image opens in a modal (ShadCN Dialog). No carousel needed — just a grid of thumbnails that expand. Spencer will drop screenshots into `/public/screenshots/[project-name]/`.

---

## File & Asset Structure
```
/public
  /headshot.jpg                          ← Spencer provides
  /spencer-davis-resume.pdf              ← Spencer provides (SE/TAM version)
  /Spencer_Davis_business_card.pdf       ← For 3D card display
  /screenshots
    /maintenance/                        ← panel, app, extension screenshots
    /admin-panel/                        ← receipt processor, matterport, SEO etc
    /wordpress-plugin/                   ← frontend screenshots + cortina/noco
    /virtual-staging/                    ← before/after images
    /floorplan-ai/                       ← PDF → extracted unit crops
    /tablo-news/                         ← search interface, transcripts
    /business-card/                      ← 3D card animation

/app
  /page.tsx                              ← home (hero, about, skills, contact)
  /projects/page.tsx                     ← project grid (featured + more + supporting)
  /projects/maintenance/page.tsx
  /projects/admin-panel/page.tsx
  /projects/wordpress-plugin/page.tsx
  /projects/virtual-staging/page.tsx
  /projects/floorplan-ai/page.tsx
  /projects/tablo-news/page.tsx
  /projects/business-card/page.tsx

/components
  /ui/                                   ← ShadCN components
  /layout/
    navbar.tsx
    footer.tsx
  /home/
    hero.tsx
    stats-bar.tsx
    about.tsx
    skills.tsx
    contact.tsx
  /projects/
    project-card.tsx
    stat-block.tsx
    screenshot-gallery.tsx
    tech-pills.tsx
    supporting-project.tsx               ← compact card for supporting tools
  /shared/
    section-header.tsx

/lib
  /projects.ts                           ← all project data as typed constants
  /skills.ts                             ← skills data
  /stats.ts                              ← portfolio-wide stats
```

Data Architecture
All project content lives in /lib/projects.ts as typed objects — no hardcoded strings in JSX. This makes it easy for Spencer to update numbers, add screenshots, or change copy without touching component code.
```ts
export interface Project {
  slug: string
  title: string
  subtitle: string
  problem?: string
  techStack: string[]
  stats: { value: string; label: string }[]
  links: { label: string; url: string; icon?: string }[]
  screenshotDir: string
  featured: boolean
  badge?: string                         // e.g. "In Progress"
}

export interface SupportingProject {
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
}
```

SEO & Meta

Next.js metadata API on every page
title: Spencer D'Avis — [Page Title]
description: role-appropriate blurb (different per page)
og:image: headshot or project screenshot
canonical: https://spenc.ee/[path]
robots: index, follow
Structured data (application/ld+json) on homepage: Person schema with name, url, jobTitle, sameAs (LinkedIn, GitHub)


Performance Requirements

Lighthouse score target: 95+ on all four metrics
Images: Next.js <Image> component with proper width, height, and priority on hero
No external font CDN calls — use next/font with Inter and Geist_Mono
No analytics scripts (Spencer's call to add later)
Screenshot images: provide WebP with JPEG fallback via Next.js Image


What Claude Code Should NOT Do

Do not add a blog section
Do not add testimonials
Do not add a contact form — links only
Do not use any animation libraries (Framer Motion, GSAP) — CSS transitions only
Do not install any UI library other than ShadCN
Do not create a separate /resume page — PDF download only


Deployment Notes

Target: Vercel (free tier is fine)
Domain: spenc.ee — Spencer will point DNS to Vercel after build
Environment variables: none needed for v1 (no API calls, static content)
next.config.ts: enable image domains if any external image sources are used


Handoff Checklist for Spencer Before Launch

 Drop headshot.jpg into /public/
 Drop spencer-davis-resume.pdf into /public/
 Drop Spencer_Davis_business_card.pdf into /public/
 Drop screenshots into /public/screenshots/[project]/
 Drop before/after staging images into /public/screenshots/virtual-staging/
 Drop floorplan PDF → extracted unit screenshots into /public/screenshots/floorplan-ai/
 Confirm email address for contact section
 Choose headline option (A, B, or C) in /lib/config.ts
 Point spenc.ee DNS to Vercel deployment
