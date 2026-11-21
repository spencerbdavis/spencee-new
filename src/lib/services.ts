export interface Service {
  number: string; // "01"
  title: string;
  description: string;
  deliverables: string[];
  clients?: string[];
  relatedSlugs: string[]; // project slugs
  href?: string; // overrides the default /projects/<relatedSlugs[0]> link
  linkLabel?: string; // overrides the default "See work" label
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Web & WordPress",
    description:
      "Design, build, hosting, and maintenance for WordPress and Next.js sites, backed by the same infrastructure practice used across a 73-zone web estate.",
    deliverables: ["Custom themes", "Site builds & redesigns", "VPS & Vercel hosting", "Analytics & SEO setup"],
    clients: ["Bonavista (73 Cloudflare zones; 65 with live traffic)"],
    relatedSlugs: ["wordpress-sites", "wordpress-plugin"],
  },
  {
    number: "02",
    title: "Design & Brand",
    description:
      "Marketing graphics from concept to production: large-format print and signage, campaign creative, branded merchandise coordination, and photography.",
    deliverables: ["Print & signage", "Campaign graphics", "Branded merch coordination", "Photography"],
    clients: ["American Mary", "Ingallina's", "Bonavista"], // TODO(spencer): confirm American Mary can be named + add scope
    relatedSlugs: ["creative"],
  },
  {
    number: "03",
    title: "Marketing Systems & Automation",
    description:
      "The infrastructure behind the marketing: AI content engines, virtual staging, document automation, and reporting pipelines that replace five-figure vendor contracts.",
    deliverables: ["AI SEO content engine", "Virtual staging", "Document automation", "Reporting & analytics"],
    relatedSlugs: ["admin-panel", "virtual-staging", "maintenance"],
  },
  {
    number: "04",
    title: "Listings & Local Presence",
    description:
      "A custom AI engine that runs local search for 60+ communities — SEO and generative-engine optimization, Google and Apple listings, AI review responses, and the live Yardi/RentCafe data that keeps every surface consistent.",
    deliverables: [
      "AI SEO & GEO engine",
      "Google Business Profile",
      "Apple Maps listings",
      "Reviews & reputation",
    ],
    relatedSlugs: ["admin-panel", "wordpress-plugin"],
    href: "/services/local-seo",
    linkLabel: "Explore the system",
  },
];

/* ------------------------------------------------------------------ */
/* Service landing pages (local SEO). /services/local-seo has its own   */
/* hand-built page; the rest render from this data via [slug].          */
/* ------------------------------------------------------------------ */

export interface ServicePage {
  slug: string;
  name: string; // short nav name
  serviceType: string; // schema.org serviceType
  title: string; // <title>
  description: string; // meta description
  h1: string;
  lede: string;
  forWho: string[];
  deliverables: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  proof: string[]; // project slugs
  proofStats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "web-development",
    name: "Web design & development",
    serviceType: "Web design and development",
    title: "Web Developer in Seattle & Renton, WA — Fast Next.js & WordPress Sites | Spencer D'Avis",
    description:
      "Seattle-area web developer building fast, SEO-ready websites in Next.js and WordPress for small businesses, property managers and startups. Design, build, hosting, analytics and ongoing care.",
    h1: "Websites that load fast, rank, and turn visitors into calls.",
    lede:
      "I design and build sites for Seattle and Eastside businesses: modern Next.js when you want speed and flexibility, WordPress when your team needs to edit everything themselves. Every build ships with analytics, structured data and a Lighthouse pass.",
    forWho: [
      "Local businesses whose site is slow, dated or hard to update",
      "Property managers who need one site per building, wired to live availability",
      "Startups that need a marketing site and a few real integrations, fast",
    ],
    deliverables: [
      { title: "Design & build", desc: "Custom design, responsive from phone up, built in Next.js or WordPress." },
      { title: "SEO foundations", desc: "Clean URLs, metadata, schema.org JSON-LD, sitemaps, share images and Core Web Vitals." },
      { title: "Integrations", desc: "Booking, forms, CRMs, listings feeds, maps, video, payments. If there's no API, I can usually still connect it." },
      { title: "Hosting & care", desc: "Vercel or managed hosting behind Cloudflare, uptime checks, backups and small monthly updates." },
    ],
    process: [
      { title: "Call", desc: "30 minutes on goals, audience, and what's not working today." },
      { title: "Plan", desc: "A one-page scope with pages, integrations, timeline and a fixed quote." },
      { title: "Build", desc: "Weekly preview links; you comment on the real site, not mockups." },
      { title: "Launch", desc: "Redirects, analytics, Search Console, and a hand-off walkthrough." },
    ],
    proof: ["property-sites", "wordpress-sites", "raining-here", "rntwx"],
    proofStats: [
      { value: "73", label: "Cloudflare zones managed" },
      { value: "8+", label: "Next.js leasing sites live" },
      { value: "90+", label: "SEO place pages on raining.here" },
    ],
    faqs: [
      { q: "How much does a website cost?", a: "Most small-business sites land between a few thousand dollars for a focused 5–8 page site and more for custom integrations or many locations. You get a fixed quote after a short call." },
      { q: "Next.js or WordPress?", a: "WordPress if your team wants to edit every page themselves with familiar tools; Next.js if speed, custom features or many similar sites matter more. I build and maintain both." },
      { q: "Do you work with businesses outside Seattle?", a: "Yes. I'm based in Renton and work with clients across the Seattle area in person, and anywhere in the US remotely." },
      { q: "Can you take over and fix an existing site?", a: "Yes. I start with a speed, SEO and security audit and fix the highest-impact issues first." },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI integration & automation",
    serviceType: "AI integration and business process automation",
    title: "AI Automation & Integration Consultant in Seattle — Custom AI Tools, MCP, Data Pipelines | Spencer D'Avis",
    description:
      "Practical AI automation for Seattle businesses: document and receipt processing, AI agents with MCP, integrations with systems that have no API, and model evaluation so you pay for the right model.",
    h1: "AI that does real work, with a human check where it matters.",
    lede:
      "I build AI tools that sit inside the systems you already use: reading documents and receipts, filling in legacy software, answering from your own data, and flagging what needs a person. Built with evaluation and fail-closed checks, not demos.",
    forWho: [
      "Teams drowning in repetitive data entry between email, spreadsheets and legacy software",
      "Companies whose key system has no API (Yardi, RentCafe, older ERPs and portals)",
      "Startups choosing models and wanting real accuracy-per-dollar numbers",
    ],
    deliverables: [
      { title: "Document & receipt automation", desc: "Email in, structured data out, matched and coded, with a human-verification step for anything ambiguous." },
      { title: "Agents & MCP servers", desc: "Give Claude or other agents safe, scoped tools over your systems, including ones with no public API." },
      { title: "Browser automation", desc: "Chrome extensions and headless sessions that work through the UI of legacy systems, with recovery and audit logs." },
      { title: "Model evaluation", desc: "A repeatable test set scoring accuracy and real cost across models, so the choice is evidence-based." },
    ],
    process: [
      { title: "Map the workflow", desc: "Where the time goes, what errors cost, and where a person must stay in the loop." },
      { title: "Prove it on your data", desc: "A small evaluation on real samples before any build commitment." },
      { title: "Build & integrate", desc: "Production code with logging, fallbacks and fail-closed behaviour." },
      { title: "Measure", desc: "Match rates, time saved and model spend, reported against the baseline." },
    ],
    proof: ["admin-panel", "rentcafe-mcp", "yardi-integration", "traffic-cameras", "vision-ocr-bench"],
    proofStats: [
      { value: "$2.78M", label: "spend reconciled by AI pipeline" },
      { value: "86.8%", label: "receipts auto-matched" },
      { value: "$0.25/day", label: "LLM cap on 42-camera vision" },
    ],
    faqs: [
      { q: "Will AI make mistakes with our data?", a: "It can, which is why I design for it: confidence thresholds, deterministic checks, and a human verification step for anything ambiguous. The system fails closed instead of guessing." },
      { q: "Our software has no API. Can it still be automated?", a: "Usually. I've built integrations for Yardi and RentCafe through browser extensions and authenticated headless sessions, with recovery when the UI misbehaves." },
      { q: "Which AI model should we use?", a: "It depends on your documents and budget. I run a short benchmark on your own samples comparing accuracy and real per-call cost before recommending one." },
      { q: "Where does our data go?", a: "Wherever you're comfortable: your cloud, a provider with zero-retention terms, or on-device models for sensitive data. That's decided up front." },
    ],
  },
  {
    slug: "property-management-marketing",
    name: "Property management marketing",
    serviceType: "Apartment and property management marketing",
    title: "Apartment Marketing & Property Management Websites — Seattle | Spencer D'Avis",
    description:
      "Apartment websites, RentCafe and Yardi integrations, local SEO, Google Business Profile and Apple Maps listings, virtual staging and leasing funnels for property managers in Seattle and beyond.",
    h1: "Leasing marketing built by someone who runs it for 80 properties.",
    lede:
      "I've spent years running marketing and building the systems behind it for an 80-property Seattle portfolio: property websites with live availability, local SEO across 60+ communities, listings, reviews, virtual staging and the integrations that keep it all in sync with Yardi and RentCafe.",
    forWho: [
      "Property managers and owners with one to a few hundred buildings",
      "Lease-up and pre-leasing projects that need a site and a funnel fast",
      "Portfolios stuck paying per-property fees for plugins and listings tools",
    ],
    deliverables: [
      { title: "Property websites", desc: "Bespoke leasing sites with live floor plans, pricing, MFTE/affordable filters, tours, maps and video." },
      { title: "RentCafe & Yardi integration", desc: "Live availability feeds and automation without enterprise-tier API fees." },
      { title: "Local search", desc: "SEO and AI-answer optimization, Google Business Profile and Apple Maps listings, review responses." },
      { title: "Listing media", desc: "Virtual staging with structural checks, floor-plan extraction, photography direction." },
    ],
    process: [
      { title: "Audit", desc: "Sites, listings, reviews and lead flow for each property, prioritised by vacancy cost." },
      { title: "Fix the funnel", desc: "Fast site, accurate availability, clear tour booking." },
      { title: "Scale", desc: "One system that runs every property, not a template copied 60 times." },
      { title: "Report", desc: "Leads, tours and rankings per property, monthly." },
    ],
    proof: ["property-sites", "wordpress-plugin", "virtual-staging", "admin-panel"],
    proofStats: [
      { value: "60+", label: "communities on live availability" },
      { value: "$5,796/yr", label: "plugin fees replaced" },
      { value: "68", label: "Apple Maps locations automated" },
    ],
    faqs: [
      { q: "Do you work with RentCafe, Yardi or other PMS platforms?", a: "Yes, RentCafe and Yardi Voyager in depth, including where no public API is available at your tier. Other platforms are evaluated case by case." },
      { q: "Can you handle MFTE and affordable-housing listings?", a: "Yes. The availability plugin I built supports Seattle's MFTE filter, which off-the-shelf plugins didn't." },
      { q: "We're pre-leasing a new building. How fast can a site go live?", a: "A focused pre-leasing site with interest capture can launch in a couple of weeks once brand assets are ready." },
      { q: "Do you replace our marketing agency?", a: "It depends. I'm strongest on the systems: sites, data, listings and automation. Many clients pair that with their existing creative or ad partner." },
    ],
  },
];

export const LOCAL_SEO_SERVICE = {
  slug: "local-seo",
  name: "Local SEO & Google Business",
  blurb: "SEO and AI-answer optimization, Google Business Profile, Apple Maps and reviews, run as one system.",
};
