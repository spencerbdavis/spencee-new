// =============================================
// HEADLINE OPTION - swap A, B, or C
// =============================================
export const HEADLINE_OPTION: "A" | "B" | "C" = "A";

export const HEADLINES = {
  A: "I build production systems that replace six-figure vendor contracts.",
  B: "Full stack developer. AI integrations. 60+ properties. Zero vendors.",
  C: "I build the infrastructure. Then I deploy the AI on top of it.",
} as const;

export const SUB_HEADLINE =
  "Seattle-based developer with 2,600+ production commits across maintenance, billing, AI staging, an MCP server, an iOS app, and a Chrome extension. No CS degree, just shipped code.";

export const HERO_PILLS = [
  "2,600+ commits shipped",
  "18+ APIs integrated",
  "iOS · Chrome ext · MCP",
] as const;

export const AVAILABILITY = "Open to SE / FDE / AI Agent Ops · Seattle or remote";

export const SITE_CONFIG = {
  name: "Spencer D'Avis",
  url: "https://spenc.ee",
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
