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
      "Work order management, mobile execution, and Yardi integration, built internally to replace a $30K/year vendor.",
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
      "Operations platform with a custom AI powered SEO engine that replaced a $400/month vendor at $0.50/run, plus receipt automation, Google Reviews, Matterport, and mileage tracking across 60+ properties.",
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
      "A Model Context Protocol server that lets Claude (or any MCP client) query RentCafe Site Manager directly. Built on Anthropic's MCP SDK with a browser-authenticated headless Puppeteer session, because RentCafe doesn't expose a public API.",
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
      "14+ live sites I've built, designed, hosted, and maintained, from Elementor and Astra builds to bespoke custom themes. Available for new WordPress projects.",
    techStack: ["WordPress", "Elementor", "Astra", "PHP", "Custom Themes", "Hosting"],
    stats: [
      { value: "14+", label: "Live Sites" },
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
      "A custom WordPress plugin that syncs live RentCafe data to 60+ property websites, including Seattle's MFTE affordable housing filter that no existing plugin supports.",
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
];

export const MORE_PROJECTS: Project[] = [
  {
    slug: "floorplan-ai",
    title: "Floor Plan AI Extraction",
    subtitle:
      "A Python pipeline that extracts individual apartment units from architectural PDFs using Meta's SAM3, Gemini OCR, and OpenCV, with GPU inference on Modal H100s.",
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
      "Puppeteer-based automation for syncing property data, photos, and listings across 68 Apple Maps locations. Apple doesn't offer an API for portfolios under 500 locations.",
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
      "Intake layer for the receipt processing pipeline. Parses incoming emails, extracts attachments, and forwards to the Admin Panel for Gemini OCR.",
    techStack: ["Cloudflare Workers", "postal-mime"],
  },
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS, ...MORE_PROJECTS];
