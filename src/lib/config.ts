export const HEADLINE = "I build the systems businesses run on.";

export const SUB_HEADLINE =
  "I'm Spencer D'Avis, a Seattle-area engineer. By day I build applied AI, integrations and internal tools for an 80-property real estate company. On my own I run live weather, radar, traffic-vision and flight-tracking products, and I build websites and automation for local businesses.";

export const HERO_META = [
  "Applied AI",
  "Integrations",
  "Internal systems",
  "Data pipelines",
  "Web & SEO",
  "Hardware & IoT",
] as const;

export const AVAILABILITY =
  "Open to fully remote US individual-contributor engineering roles. No CS degree — I learned by shipping.";

export const FREELANCE_MODE: "secondary" | "hidden" = "secondary";

export const SITE_CONFIG = {
  name: "Spencer D'Avis",
  // Canonical host: spenc.ee redirects to www, so canonicals/sitemap must use www.
  url: "https://www.spenc.ee",
  email: "hello@spenc.ee",
  linkedin: "https://www.linkedin.com/in/spencerbdavis/",
  github: "https://github.com/spencerbdavis",
  githubSourceRepo: "https://github.com/spencerbdavis/spencee",
  tabloNewsRepo: "https://github.com/spencerbdavis/tablo-news",
  pixabay: "https://pixabay.com/users/spencerbdavis1-21090082/",
  appStore:
    "https://apps.apple.com/us/app/bonavista-maintenance/id6741757267",
  chromeStore:
    "https://chromewebstore.google.com/detail/bv-maintenance-tasks/dikbnfhicgldiccopnigjhfmedlfdaib",
} as const;
