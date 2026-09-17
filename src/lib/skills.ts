export interface SkillProject {
  name: string;
  slug: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: "Applied AI & Evaluation",
    items: ["Google Gemini", "OpenAI API", "Computer Vision", "Model Evaluation", "MCP"],
  },
  {
    category: "Systems & Integrations",
    items: ["API Integration", "Browser Automation", "Chrome Extensions", "Cloudflare Workers", "Yardi", "RentCafe"],
  },
  {
    category: "Application Engineering",
    items: ["TypeScript", "Next.js", "React", "Node.js", "Python", "PHP", "React Native", "Swift"],
  },
  {
    category: "Data & Infrastructure",
    items: ["MySQL", "REST APIs", "AWS S3", "Cloudflare", "Vercel", "Git", "Puppeteer"],
  },
  {
    category: "Design & Publishing",
    items: ["WordPress", "Adobe Illustrator", "Adobe Photoshop", "Print & Signage", "Photography", "Branding"],
  },
];

/** Maps each skill name to the projects where it's used */
export const SKILL_PROJECTS: Record<string, SkillProject[]> = {
  "Computer Vision": [{ name: "Structural Verification", slug: "virtual-staging" }],
  "Model Evaluation": [{ name: "Vision OCR Benchmark", slug: "vision-ocr-bench" }],
  "API Integration": [
    { name: "Expense Reconciliation", slug: "admin-panel" },
    { name: "RentCafe MCP Server", slug: "rentcafe-mcp" },
    { name: "Yardi Integration", slug: "yardi-integration" },
  ],
  "Browser Automation": [
    { name: "RentCafe MCP Server", slug: "rentcafe-mcp" },
    { name: "Yardi Integration", slug: "yardi-integration" },
  ],
  "Chrome Extensions": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Yardi Integration", slug: "yardi-integration" },
  ],
  Cloudflare: [
    { name: "Expense Reconciliation", slug: "admin-panel" },
    { name: "Property Sites", slug: "property-sites" },
  ],
  // Design & Creative
  "Adobe Illustrator": [{ name: "Creative Work", slug: "creative" }],
  "Adobe Photoshop": [{ name: "Creative Work", slug: "creative" }],
  "Print & Signage": [{ name: "Creative Work", slug: "creative" }],
  Photography: [{ name: "Creative Work", slug: "creative" }],
  Branding: [{ name: "Creative Work", slug: "creative" }],

  // Web & CMS
  WordPress: [
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  "Next.js": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
    { name: "Business Cards", slug: "business-card" },
    { name: "Tablo News", slug: "tablo-news" },
  ],
  React: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "Business Cards", slug: "business-card" },
  ],
  "Tailwind CSS": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "Business Cards", slug: "business-card" },
    { name: "Tablo News", slug: "tablo-news" },
  ],
  PHP: [
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  TypeScript: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Business Cards", slug: "business-card" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "Tablo News", slug: "tablo-news" },
  ],

  // Marketing & Listings
  SEO: [{ name: "Admin Panel", slug: "admin-panel" }],
  RentCafe: [
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
    { name: "RentCafe MCP Server", slug: "rentcafe-mcp" },
  ],
  "Google Business Profile": [
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  "Apple Business Connect": [
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  Yardi: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  PostHog: [
    { name: "Maintenance Suite", slug: "maintenance" },
  ],
  Matterport: [
    { name: "Admin Panel", slug: "admin-panel" },
  ],

  // AI & Automation
  "Google Gemini": [
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "Floor Plan AI Extraction", slug: "floorplan-ai" },
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  "OpenAI API": [
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  Whisper: [
    { name: "Tablo News", slug: "tablo-news" },
  ],
  MCP: [
    { name: "RentCafe MCP Server", slug: "rentcafe-mcp" },
  ],
  Puppeteer: [
    { name: "RentCafe MCP Server", slug: "rentcafe-mcp" },
  ],
  "Cloudflare Workers": [
    { name: "Admin Panel", slug: "admin-panel" },
  ],

  // Engineering
  Python: [
    { name: "Floor Plan AI Extraction", slug: "floorplan-ai" },
    { name: "Tablo News", slug: "tablo-news" },
  ],
  "Node.js": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  Swift: [
    { name: "Maintenance Suite", slug: "maintenance" },
  ],
  "React Native": [
    { name: "Maintenance Suite", slug: "maintenance" },
  ],
  MySQL: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  "REST APIs": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  "AWS S3": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
  ],
  Vercel: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "Business Cards", slug: "business-card" },
  ],
  Git: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
  ],
};
