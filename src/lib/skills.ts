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
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Swift", "PHP", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "Capacitor", "WordPress", "ShadCN", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs", "OAuth 2.0", "Webhooks", "Cloudflare Workers"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLite", "ChromaDB", "Turso"],
  },
  {
    category: "Infrastructure",
    items: ["Cloudflare", "Vercel", "AWS S3", "NGINX", "Ubuntu/Linux", "Git", "Docker"],
  },
  {
    category: "AI & Automation",
    items: [
      "Google Gemini",
      "OpenAI API",
      "Whisper",
      "SAM3 (Meta)",
      "PyTorch",
      "Prompt Engineering",
      "MCP",
      "ChatGPT Enterprise",
      "Modal (GPU Compute)",
    ],
  },
  {
    category: "Integrations",
    items: [
      "Yardi",
      "RentCafe",
      "Matterport",
      "Microsoft Graph API",
      "Google Business Profile",
      "Apple Business Connect",
      "Apple MapKit",
      "Foursquare",
      "PostHog",
    ],
  },
];

/** Maps each skill name to the projects where it's used */
export const SKILL_PROJECTS: Record<string, SkillProject[]> = {
  // Languages
  Python: [
    { name: "Floor Plan AI Extraction", slug: "floorplan-ai" },
    { name: "Tablo News", slug: "tablo-news" },
  ],
  TypeScript: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Business Cards", slug: "business-card" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "Tablo News", slug: "tablo-news" },
  ],
  JavaScript: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  Swift: [
    { name: "Maintenance Suite", slug: "maintenance" },
  ],
  PHP: [
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  SQL: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  Bash: [
    { name: "Floor Plan AI Extraction", slug: "floorplan-ai" },
  ],

  // Frontend
  React: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "Business Cards", slug: "business-card" },
  ],
  "Next.js": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
    { name: "Business Cards", slug: "business-card" },
    { name: "Tablo News", slug: "tablo-news" },
  ],
  "React Native": [
    { name: "Maintenance Suite", slug: "maintenance" },
  ],
  WordPress: [
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  ShadCN: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  "Tailwind CSS": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "Business Cards", slug: "business-card" },
    { name: "Tablo News", slug: "tablo-news" },
  ],

  // Backend
  "Node.js": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  "REST APIs": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  "OAuth 2.0": [
    { name: "Maintenance Suite", slug: "maintenance" },
  ],
  Webhooks: [
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Maintenance Suite", slug: "maintenance" },
  ],
  "Cloudflare Workers": [
    { name: "Admin Panel", slug: "admin-panel" },
  ],

  // Databases
  MySQL: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  SQLite: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Tablo News", slug: "tablo-news" },
  ],
  ChromaDB: [
    { name: "Tablo News", slug: "tablo-news" },
  ],
  Turso: [
    { name: "Tablo News", slug: "tablo-news" },
  ],

  // Infrastructure
  Cloudflare: [
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  Vercel: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
    { name: "Business Cards", slug: "business-card" },
  ],
  "AWS S3": [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
    { name: "Virtual Staging", slug: "virtual-staging" },
  ],
  Git: [
    { name: "Maintenance Suite", slug: "maintenance" },
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
  "SAM3 (Meta)": [
    { name: "Floor Plan AI Extraction", slug: "floorplan-ai" },
  ],
  PyTorch: [
    { name: "Floor Plan AI Extraction", slug: "floorplan-ai" },
  ],
  "Modal (GPU Compute)": [
    { name: "Floor Plan AI Extraction", slug: "floorplan-ai" },
  ],

  // Integrations
  Yardi: [
    { name: "Maintenance Suite", slug: "maintenance" },
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  RentCafe: [
    { name: "WordPress Plugin", slug: "wordpress-plugin" },
  ],
  Matterport: [
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  "Microsoft Graph API": [
    { name: "Maintenance Suite", slug: "maintenance" },
  ],
  "Google Business Profile": [
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  "Apple Business Connect": [
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  Foursquare: [
    { name: "Admin Panel", slug: "admin-panel" },
  ],
  PostHog: [
    { name: "Maintenance Suite", slug: "maintenance" },
  ],
};
