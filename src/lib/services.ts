export interface Service {
  number: string; // "01"
  title: string;
  description: string;
  deliverables: string[];
  clients?: string[];
  relatedSlugs: string[]; // project slugs
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Web & WordPress",
    description:
      "Design, build, hosting, and maintenance for marketing websites — from Elementor and Astra builds to bespoke custom themes, hosted in-house on a self-managed VPS or Vercel depending on stack. WPEngine eliminated across the portfolio.",
    deliverables: ["Custom themes", "Site builds & redesigns", "VPS & Vercel hosting", "Analytics & SEO setup"],
    clients: ["Bonavista (55 of 60 sites hosted in-house)"],
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
      "Keeping 60+ locations accurate and competitive everywhere renters look: listing syndication, Google Business Profile, Apple Maps, and Seattle MFTE compliance.",
    deliverables: ["Listing syndication", "Google Business Profile", "Apple Business Connect", "MFTE compliance"],
    relatedSlugs: ["rentcafe-mcp", "wordpress-plugin"],
  },
];
