export interface Project {
  slug: string;
  title: string;
  subtitle: string;
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
      "Work order management, mobile execution, and Yardi integration — built in-house to replace a $30K/year vendor.",
    problem:
      "HappyCo — the industry standard for property maintenance — charges ~$1/unit/month for their suite, plus $7/unit per inspection walk. Across 5,000 units with 2,000+ annual inspection walks, that's over $74,000/year. And they require full portfolio enrollment, even for small properties. We built our own.",
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
      "The operations backbone for a 60+ property portfolio — receipts, mileage, Matterport, SEO, Google Reviews, and live property data, all in one place.",
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
      { value: "1,000/mo", label: "Receipts OCR" },
      { value: "<60 sec", label: "Processing" },
      { value: "20+", label: "Cron Jobs" },
      { value: "60+", label: "Properties" },
      { value: "239", label: "API Routes" },
    ],
    links: [],
    screenshotDir: "admin-panel",
    featured: true,
  },
  {
    slug: "wordpress-plugin",
    title: "RentCafe × WordPress Plugin",
    subtitle:
      "A custom WordPress plugin that syncs live RentCafe data to 60+ property websites — including Seattle's MFTE affordable housing filter that no existing plugin supports.",
    problem:
      "RentPress, the closest competing plugin, charges $75/month + $6/property/month. Across 60+ properties, that's $483/month — $5,796/year. More importantly, it doesn't support Seattle's MFTE (Multifamily Tax Exemption) program, which requires properties to surface income-restricted units separately. Every Seattle plugin on the market failed this requirement.",
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
      "An in-house AI staging tool that generates furnished room images using Gemini — with Google Search grounding to reflect current furniture trends from real Seattle retailers.",
    problem:
      "virtualstaging.ai was costing $500+/year for a workflow that could be automated. More importantly, it generated generic staged rooms that didn't reflect what real furniture actually looks like — making the staged images feel artificial to prospective residents.",
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
];

export const MORE_PROJECTS: Project[] = [
  {
    slug: "floorplan-ai",
    title: "Floor Plan AI Extraction",
    subtitle:
      "A Python pipeline that extracts individual apartment units from architectural PDFs using Meta's SAM3, Gemini OCR, and OpenCV — with GPU inference on Modal H100s.",
    problem:
      "Extracting individual unit floor plans from full-building architectural PDFs is a manual, tedious process. Property managers need isolated unit images for marketing, leasing, and resident communication. No affordable off-the-shelf tool handles this reliably for multi-unit residential buildings.",
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
      "An AI-powered local news search and archive interface for Seattle-area TV broadcasts — transcribed with Whisper, indexed with ChromaDB, and searchable via natural language RAG queries.",
    problem: undefined,
    techStack: ["Next.js", "Python", "WhisperX", "ChromaDB", "Ollama", "Turso"],
    stats: [],
    links: [],
    screenshotDir: "tablo-news",
    featured: false,
    badge: "In Progress",
  },
  {
    slug: "business-card",
    title: "Auto-Generated Business Cards",
    subtitle:
      "A templating system that auto-generates branded business cards with dynamic QR codes, vCard downloads, and property assignments — per employee, zero design work.",
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
  {
    slug: "creative",
    title: "Creative Work",
    subtitle:
      "Photography, graphic design, and branding — including vaccine photos with 5.8M views and 80K downloads on Pixabay & Unsplash.",
    problem: undefined,
    techStack: ["Photography", "Graphic Design", "Branding", "Marketing"],
    stats: [
      { value: "5.8M", label: "Views" },
      { value: "80K+", label: "Downloads" },
    ],
    links: [],
    screenshotDir: "creative",
    featured: false,
  },
];

export const SUPPORTING_PROJECTS: SupportingProject[] = [
  {
    title: "Apple Business Connect Automation",
    description:
      "Puppeteer-based automation for syncing property data, photos, and listings across 68 Apple Maps locations — Apple doesn't offer an API for portfolios under 500 locations.",
    techStack: ["TypeScript", "Puppeteer", "GraphQL"],
  },
  {
    title: "Brand Guidelines Hub",
    description:
      "Centralized brand asset management — logo variants, color palette (Hex/RGB/CMYK/PMS), typography standards, and batch asset downloads.",
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
      "Intake layer for the receipt processing pipeline — parses incoming emails, extracts attachments, and forwards to the Admin Panel for Gemini OCR.",
    techStack: ["Cloudflare Workers", "postal-mime"],
  },
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS, ...MORE_PROJECTS];
