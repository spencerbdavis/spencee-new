export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Web" | "Design" | "Marketing Systems" | "Listings & Local";
  outcome: string; // one-line marketing-ops outcome for the work index
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
      "Work order management, mobile execution, and Yardi integration — built in-house to replace a $74K/yr vendor across 5,000 units.",
    category: "Marketing Systems",
    outcome: "Replaced a $74K/yr vendor with an in-house platform across 5,000 units.",
    problem:
      "HappyCo (the industry standard for property maintenance) charges ~$1/unit/month for their suite, plus $7/unit per inspection walk. Across 5,000 units with 2,000+ annual inspection walks, that's over $74,000/year. And they require full portfolio enrollment, even for small properties. We built our own.",
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
      { value: "5,000+", label: "Work Orders" },
      { value: "1,500", label: "Unit Turns" },
      { value: "2,000", label: "Grounds Jobs" },
      { value: "500", label: "Move-Outs" },
      { value: "$30K+", label: "Annual Savings vs. HappyCo" },
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
    title: "Bonavista Admin Panel",
    subtitle:
      "Marketing operations platform: an AI-powered SEO engine that replaced a $400/month vendor at $0.50/run, plus Google Reviews, Matterport, receipt automation, and mileage tracking for 60+ properties.",
    category: "Marketing Systems",
    outcome: "Cut SEO content costs 99.7% across 60+ property websites.",
    problem: undefined,
    techStack: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "Cloudflare Workers",
      "MySQL",
      "Matterport API",
    ],
    stats: [
      { value: "99.7%", label: "SEO Cost Reduction" },
      { value: "1,000/mo", label: "Receipts Auto-Processed" },
      { value: "60+", label: "Properties Managed" },
      { value: "20+", label: "Automated Cron Jobs" },
      { value: "6", label: "Integrated Modules" },
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
    category: "Listings & Local",
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
      { value: "60+", label: "Properties Accessible" },
      { value: "Browser", label: "Authenticated Session" },
      { value: "0", label: "Public API Required" },
    ],
    links: [],
    screenshotDir: "rentcafe-mcp",
    featured: true,
  },
  {
    slug: "wordpress-sites",
    title: "WordPress Sites",
    subtitle:
      "55 of the 60 property websites we manage are hosted and run in-house — self-hosted WordPress on our own VPS (WPEngine eliminated) or Vercel, depending on stack. From Elementor and Astra builds to bespoke custom themes. Available for new WordPress projects.",
    category: "Web",
    outcome: "55 of 60 property sites hosted and managed in-house — WPEngine eliminated.",
    techStack: ["WordPress", "Elementor", "Astra", "PHP", "Custom Themes", "VPS Hosting", "Vercel"],
    stats: [
      { value: "55/60", label: "Sites Hosted In-House" },
      { value: "Elementor", label: "Astra · Bespoke" },
      { value: "Available", label: "For Side Work" },
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
    category: "Design",
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
    category: "Listings & Local",
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
    title: "Virtual Staging App",
    subtitle:
      "An internal AI staging tool that generates furnished room images using Gemini, with Google Search grounding to reflect current furniture trends from real Seattle retailers.",
    category: "Marketing Systems",
    outcome: "AI-staged listing photos grounded in real Seattle furniture.",
    problem:
      "virtualstaging.ai was costing $500+/year for a workflow that could be automated. More importantly, it generated generic staged rooms that didn't reflect what real furniture actually looks like, making the staged images feel artificial to prospective residents.",
    techStack: ["Next.js", "React", "Google Gemini", "AWS S3", "Vercel"],
    stats: [
      { value: "$500/yr", label: "Saved" },
      { value: "Google", label: "Grounded AI" },
      { value: "Real", label: "Furniture" },
      { value: "60+", label: "Properties" },
    ],
    links: [],
    screenshotDir: "virtual-staging",
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
    category: "Marketing Systems",
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
    category: "Marketing Systems",
    outcome: "A searchable AI archive of Seattle TV news.",
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
    badge: "In Progress",
  },
  {
    slug: "business-card",
    title: "Auto-Generated Business Cards",
    subtitle:
      "A templating system that auto-generates branded business cards with dynamic QR codes, vCard downloads, and property assignments. Per employee, zero design work.",
    category: "Design",
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
