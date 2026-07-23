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
    category: "Design & Creative",
    items: ["Adobe Illustrator", "Adobe Photoshop", "Print & Signage", "Photography", "Branding"],
  },
  {
    category: "Web & CMS",
    items: ["WordPress", "Elementor", "Next.js", "React", "Tailwind CSS", "PHP", "TypeScript"],
  },
  {
    category: "Marketing & Listings",
    items: ["SEO", "RentCafe", "Google Business Profile", "Apple Business Connect", "Yardi", "PostHog", "Matterport"],
  },
  {
    category: "AI & Automation",
    items: ["Google Gemini", "OpenAI API", "Whisper", "MCP", "Prompt Engineering", "Puppeteer", "Cloudflare Workers"],
  },
  {
    category: "Engineering",
    items: ["Python", "Node.js", "Swift", "React Native", "MySQL", "REST APIs", "AWS S3", "Vercel", "Git"],
  },
];

/** Maps each skill name to the projects where it's used */
export const SKILL_PROJECTS: Record<string, SkillProject[]> = {
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
