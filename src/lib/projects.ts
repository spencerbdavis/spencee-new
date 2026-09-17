export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Applied AI" | "Production Systems" | "Integrations" | "Infrastructure" | "Web" | "Creative";
  outcome: string;
  problem?: string;
  techStack: string[];
  stats: { value: string; label: string }[];
  links: { label: string; url: string; icon?: string }[];
  screenshotDir: string;
  featured: boolean;
  badge?: string;
}

export interface SupportingProject {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "maintenance",
    title: "Bonavista Maintenance Suite",
    subtitle:
      "A field-operations platform spanning web, iOS, and browser automation, built from an original 14,000-line PHP application and scaled with contract developers.",
    category: "Production Systems",
    outcome: "10,334 work orders and 30,201 geofenced check-ins across 95 field staff.",
    problem:
      "The portfolio needed one system to coordinate maintenance work, field execution, resident communication, and write-back into a legacy property-management platform. Commercial tools imposed portfolio-wide pricing and still left integration gaps.",
    techStack: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Swift",
      "Microsoft Graph API",
      "MySQL",
      "Chrome Extension",
    ],
    stats: [
      { value: "10,334", label: "Work Orders" },
      { value: "2,601", label: "Unit Turns" },
      { value: "3,669", label: "Grounds Jobs" },
      { value: "30,201", label: "Geofenced Check-Ins" },
      { value: "95", label: "Field Staff" },
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/bonavista-maintenance/id6741757267",
        icon: "apple",
      },
      {
        label: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/bv-maintenance-tasks/dikbnfhicgldiccopnigjhfmedlfdaib",
        icon: "chrome",
      },
    ],
    screenshotDir: "maintenance",
    featured: true,
  },
  {
    slug: "admin-panel",
    title: "Expense Reconciliation System",
    subtitle:
      "A production pipeline that turns emailed receipts into coded, human-verified transactions and writes them back into Yardi through a browser extension.",
    category: "Production Systems",
    outcome: "$2.78M reconciled across 6,539 receipts, with 86.8% auto-matched.",
    problem:
      "Company-card reconciliation crossed email, spreadsheets, storage, accounting rules, and a legacy ERP with no suitable write API. The system had to automate the repetitive work without guessing when evidence was ambiguous.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "Cloudflare Workers",
      "MySQL",
      "Matterport API",
    ],
    stats: [
      { value: "$2.78M", label: "Spend Reconciled" },
      { value: "6,539", label: "Receipts" },
      { value: "86.8%", label: "Auto-Matched by Count" },
      { value: "95.3%", label: "Auto-Matched by Value" },
      { value: "319", label: "Production API Routes" },
    ],
    links: [],
    screenshotDir: "admin-panel",
    featured: true,
  },
  {
    slug: "rentcafe-mcp",
    title: "RentCafe MCP Server",
    subtitle:
      "An MCP server that lets AI agents read and act on live RentCafe leasing data for 60+ properties, despite RentCafe having no public API at this tier.",
    category: "Integrations",
    outcome: "Opened live leasing data to AI agents — no vendor API required.",
    problem:
      "RentCafe Site Manager has no public API for portfolios under enterprise tier, so leasing data is locked behind a session-authenticated UI. I built an MCP server that maintains a headless browser session and exposes RentCafe's Site Manager actions as MCP tools, so an agent can read and act on live portfolio data without scraping or vendor-side integrations.",
    techStack: [
      "Node.js",
      "TypeScript",
      "MCP SDK",
      "Anthropic SDK",
      "Puppeteer",
      "Headless Chrome",
    ],
    stats: [
      { value: "MCP", label: "Server Protocol" },
      { value: "9", label: "Agent Tools" },
      { value: "Browser", label: "Authenticated Session" },
      { value: "0", label: "Public API Required" },
    ],
    links: [],
    screenshotDir: "rentcafe-mcp",
    featured: true,
  },
  {
    slug: "wordpress-sites",
    title: "Web Estate & Property Sites",
    subtitle:
      "A mixed WordPress and Next.js estate spanning 73 Cloudflare zones, with 65 zones serving live traffic and shared operational tooling behind the portfolio.",
    category: "Infrastructure",
    outcome: "73 Cloudflare zones, 65 serving live traffic across the web estate.",
    techStack: ["WordPress", "Elementor", "Astra", "PHP", "Custom Themes", "VPS Hosting", "Vercel"],
    stats: [
      { value: "73", label: "Cloudflare Zones" },
      { value: "65", label: "Zones With Live Traffic" },
      { value: "17M", label: "Requests / 30 Days" },
    ],
    links: [],
    screenshotDir: "wordpress-sites",
    featured: true,
    badge: "Side Work Available",
  },
  {
    slug: "creative",
    title: "Creative Work",
    subtitle:
      "Large-format print and signage design (window clings, A-boards, yard signs) in Illustrator and Photoshop, plus a Pixabay Editor's Choice COVID vaccine photo set with 182K views and 126K downloads picked up by news outlets and research institutions.",
    category: "Creative",
    outcome: "Print, signage, and photography — 182K views on the strongest set.",
    techStack: ["Adobe Illustrator", "Adobe Photoshop", "Print Design", "Signage", "Photography", "Branding"],
    stats: [
      { value: "182K", label: "Pixabay Views" },
      { value: "126K", label: "Downloads" },
      { value: "1", label: "Editor's Choice" },
    ],
    links: [
      {
        label: "Pixabay Profile",
        url: "https://pixabay.com/users/spencerbdavis1-21090082/",
      },
    ],
    screenshotDir: "creative",
    featured: true,
  },
  {
    slug: "wordpress-plugin",
    title: "RentCafe × WordPress Plugin",
    subtitle:
      "A custom WordPress plugin syncing live RentCafe availability to 60+ property websites — including Seattle's MFTE affordable-housing filter that no commercial plugin supports.",
    category: "Integrations",
    outcome: "Live availability on 60+ sites, Seattle MFTE-compliant, $5,796/yr saved.",
    problem:
      "RentPress, the closest competing plugin, charges $75/month + $6/property/month. Across 60+ properties, that's $483/month ($5,796/year). More importantly, it doesn't support Seattle's MFTE (Multifamily Tax Exemption) program, which requires properties to surface income restricted units separately. Every Seattle plugin on the market failed this requirement.",
    techStack: ["PHP", "WordPress", "RentCafe API", "MySQL", "Next.js", "Cloudinary"],
    stats: [
      { value: "60+", label: "Properties" },
      { value: "$5,796/yr", label: "Saved" },
      { value: "MFTE", label: "Compliant" },
      { value: "15+", label: "Shortcodes" },
      { value: "0", label: "Vendor Dependency" },
    ],
    links: [],
    screenshotDir: "wordpress-plugin",
    featured: true,
  },
  {
    slug: "virtual-staging",
    title: "Structural Verification for Generated Images",
    subtitle:
      "A deterministic quality gate for generative image edits, using a hand-implemented Sobel edge detector and edge-overlap IoU scoring to flag structural changes.",
    category: "Applied AI",
    outcome: "Deterministic geometry checks around a non-deterministic staging model.",
    problem:
      "Generative staging can produce a plausible room while quietly moving a wall, window, or door. Visual quality alone is not enough for a listing image; the pipeline needs a deterministic check that can flag structural drift for human review.",
    techStack: ["TypeScript", "Computer Vision", "Sobel Operator", "IoU Scoring", "Vitest", "Google Gemini"],
    stats: [
      { value: "3×3", label: "Sobel Kernels" },
      { value: "IoU", label: "Edge-Overlap Score" },
      { value: "Fail Closed", label: "Ambiguous Results" },
      { value: "Tested", label: "Deterministic Gate" },
    ],
    links: [],
    screenshotDir: "virtual-staging",
    featured: true,
  },
  {
    slug: "vision-ocr-bench",
    title: "Vision Model Evaluation Harness",
    subtitle:
      "A cost-aware benchmark that compares nine vision models on extraction accuracy while fetching current per-token pricing at runtime.",
    category: "Applied AI",
    outcome: "Nine vision models evaluated on accuracy and real inference cost.",
    problem:
      "Model quality claims are hard to compare and pricing changes quickly. Selecting a production OCR model required a repeatable test set, a scored baseline, and the real cost of each run rather than a demo-driven choice.",
    techStack: ["TypeScript", "Model Evaluation", "Vision Models", "Structured Output", "Pricing APIs"],
    stats: [
      { value: "9", label: "Vision Models" },
      { value: "Live", label: "Pricing Lookup" },
      { value: "1", label: "Shared Baseline" },
      { value: "Repeatable", label: "Scoring Harness" },
    ],
    links: [],
    screenshotDir: "vision-ocr-bench",
    featured: true,
  },
  {
    slug: "yardi-integration",
    title: "Yardi Browser Integration",
    subtitle:
      "A Chrome extension that writes reconciled transactions into a legacy ERP through CSP restrictions, nested frames, and asynchronous batch workflows.",
    category: "Integrations",
    outcome: "Reliable write-back into a critical system with no suitable API.",
    problem:
      "Yardi Voyager is the accounting system of record, but the available integration surface could not complete this workflow. The extension had to operate through the authenticated browser UI, recover from partial batches, and preserve a manual path when OCR was uncertain.",
    techStack: ["Chrome Extension", "TypeScript", "React", "Tesseract.js", "Browser Automation", "Yardi"],
    stats: [
      { value: "3", label: "Fallback Stages" },
      { value: "MV3", label: "Chrome Extension" },
      { value: "CSP", label: "Constrained Runtime" },
      { value: "Fail Closed", label: "Ambiguous Matches" },
    ],
    links: [],
    screenshotDir: "yardi-integration",
    featured: true,
  },
  {
    slug: "archive",
    title: "archive.spenc.ee",
    subtitle:
      "A public deep-zoom archive for scanned paper ephemera — mid-century Pacific Northwest map covers, tourist pamphlets, and the illustration that filled the margins of working maps. Gigapixel tile viewing, full-text search, and AI-written backstories.",
    category: "Web",
    outcome: "A live gigapixel archive for scanned maps and paper ephemera.",
    problem:
      "High-resolution scans of paper ephemera are huge — a single map cover can be hundreds of megabytes — and there's no clean, fast way to browse and zoom them on the web without a heavyweight viewer or a slow full-download. I wanted a personal, well-crafted home for the collection that loads instantly, zooms to gigapixel detail, and reads like an editorial catalog rather than a file dump.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Drizzle",
      "Neon Postgres",
      "Cloudflare R2",
      "OpenSeadragon",
      "Sharp",
      "Google Gemini",
    ],
    stats: [
      { value: "64", label: "Scans Archived" },
      { value: "Gigapixel", label: "Deep-Zoom Viewer" },
      { value: "R2 + Neon", label: "Serverless Stack" },
      { value: "AI", label: "Generated Backstories" },
    ],
    links: [{ label: "Live", url: "https://archive.spenc.ee" }],
    screenshotDir: "archive",
    featured: true,
    badge: "Personal · Live",
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    slug: "property-sites",
    title: "Next.js Leasing Microsites",
    subtitle:
      "A fleet of bespoke Next.js 16 leasing sites for individual apartment properties — each wired to a shared in-house availability API that keeps floor plans, live pricing, and MFTE affordable-housing units in sync, with Matterport tours, Apple MapKit maps, and Mux video.",
    category: "Web",
    outcome: "A dozen bespoke leasing sites running on one live availability API.",
    problem:
      "The portfolio's property sites were aging WordPress builds — slow, hard to keep in sync with live leasing data, and tedious to update site by site. I've been migrating them to bespoke Next.js sites on Vercel, each fed by a single in-house API (api.bonavista.work) so pricing, availability, and unit data stay live without per-site edits, while preserving the old WordPress URLs so nothing drops in search rankings.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "ISR",
      "Apple MapKit",
      "Matterport",
      "Mux",
      "Resend",
    ],
    stats: [
      { value: "12", label: "Live Microsites" },
      { value: "1 API", label: "Live Availability Feed" },
      { value: "24h", label: "ISR Revalidation" },
      { value: "MFTE", label: "Affordable-Housing Filter" },
    ],
    links: [
      { label: "Alt Capitol Hill", url: "https://altapartments.com" },
      { label: "Rowlock", url: "https://rowlockseattle.com" },
      { label: "The Clarke", url: "https://www.theclarkegreenlake.com" },
    ],
    screenshotDir: "property-sites",
    featured: false,
    badge: "12 Sites · Live",
  },
  {
    slug: "floorplan-ai",
    title: "Floor Plan AI Extraction",
    subtitle:
      "A Python pipeline that extracts individual apartment units from architectural PDFs using Meta's SAM3, Gemini OCR, and OpenCV, with GPU inference on Modal H100s.",
    category: "Applied AI",
    outcome: "Unit floor plans extracted from architectural PDFs for marketing use.",
    problem:
      "Extracting individual unit floor plans from full building architectural PDFs is a manual, tedious process. Property managers need isolated unit images for marketing, leasing, and resident communication. No affordable existing tool handles this reliably for multi unit residential buildings.",
    techStack: ["Python", "PyTorch", "SAM3", "Gemini", "OpenCV", "Modal"],
    stats: [],
    links: [],
    screenshotDir: "floorplan-ai",
    featured: false,
    badge: "Exploration",
  },
  {
    slug: "tablo-news",
    title: "Tablo News",
    subtitle:
      "An AI powered local news search and archive interface for Seattle area TV broadcasts, transcribed with Whisper, indexed with ChromaDB, and searchable via natural language RAG queries.",
    category: "Applied AI",
    outcome: "A three-commit experiment in searching transcribed Seattle TV news.",
    problem: undefined,
    techStack: ["Next.js", "Python", "WhisperX", "ChromaDB", "Ollama", "Turso"],
    stats: [],
    links: [
      {
        label: "Source on GitHub",
        url: "https://github.com/spencerbdavis/tablo-news",
        icon: "github",
      },
    ],
    screenshotDir: "tablo-news",
    featured: false,
    badge: "Experiment · Not Live",
  },
  {
    slug: "business-card",
    title: "Auto-Generated Business Cards",
    subtitle:
      "A templating system that auto-generates branded business cards with dynamic QR codes, vCard downloads, and property assignments. Per employee, zero design work.",
    category: "Creative",
    outcome: "Branded, QR-coded cards auto-generated for every employee.",
    problem: undefined,
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "QR Code API"],
    stats: [],
    links: [
      {
        label: "Live",
        url: "https://cards.bonavistapm.com/SPNCE",
      },
    ],
    screenshotDir: "business-card",
    featured: false,
  },
];

export const SUPPORTING_PROJECTS: SupportingProject[] = [
  {
    title: "Apple Business Connect Automation",
    description:
      "Automated listings ops for 68 Apple Maps locations — property data, photos, and hours kept in sync. Apple offers no API below 500 locations.",
    techStack: ["TypeScript", "Puppeteer", "GraphQL"],
  },
  {
    title: "Brand Guidelines Hub",
    description:
      "Centralized brand asset management: logo variants, color palette (Hex/RGB/CMYK/PMS), typography standards, and batch asset downloads.",
    techStack: ["Next.js", "Sharp", "Tailwind CSS"],
    liveUrl: "https://brand.bonavistapm.com",
  },
  {
    title: "Employee Portal",
    description:
      "VPN-restricted internal tool directory organizing 9 SaaS platforms and in-house apps by employee role.",
    techStack: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Cloudflare Email Worker",
    description:
      "The generic inbound-email front door: receives mail, parses MIME and attachments with postal-mime, and normalizes each message to JSON for the Admin Panel to route — feeding the receipt-OCR pipeline and other flows without doing the OCR itself.",
    techStack: ["Cloudflare Workers", "postal-mime"],
  },
  {
    title: "Yardi Invoice Automation",
    description:
      "A Chrome extension that keys monthly credit-card reconciliations into Yardi Voyager's Invoice Register unattended — OCR-matching each cardholder and driving the legacy ASP.NET UI through the operator's own session, since Yardi exposes no API at our tier.",
    techStack: ["Chrome Extension", "TypeScript", "React", "Tesseract.js"],
  },
  {
    title: "Google Review Policy Reporter",
    description:
      "A Puppeteer bot that reads flagged policy-violating Google reviews from the admin dashboard and auto-reports each in Google Business Profile across 60+ locations, riding the operator's authenticated Chrome session over the DevTools protocol.",
    techStack: ["Node.js", "Puppeteer", "Google Business Profile"],
  },
  {
    title: "Email Transparency Site",
    description:
      "bonavistamail.com — the public page behind the portfolio's email-sending domain, explaining email types, privacy, and unsubscribe. Pairing a sending domain with a real transparency site improves deliverability and resident trust.",
    techStack: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://bonavistamail.com",
  },
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS, ...MORE_PROJECTS];
