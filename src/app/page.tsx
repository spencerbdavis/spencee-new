import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { Services } from "@/components/home/services";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { GalleryBand } from "@/components/home/gallery-band";
import { About } from "@/components/home/about";
import { Skills } from "@/components/home/skills";
import { Engagements } from "@/components/home/engagements";
import { Contact } from "@/components/home/contact";
import { SITE_CONFIG } from "@/lib/config";
import { FREELANCE_MODE } from "@/lib/config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  jobTitle: "Applied AI & Integrations Engineer",
  knowsAbout: ["Applied AI", "Model Evaluation", "API Integration", "Internal Tools", "TypeScript", "Next.js", "Browser Automation", "MCP"],
  sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <About />
      <Skills />
      <GalleryBand />
      {FREELANCE_MODE === "secondary" && <Services />}
      {FREELANCE_MODE === "secondary" && <Engagements />}
      <Contact />
    </>
  );
}
