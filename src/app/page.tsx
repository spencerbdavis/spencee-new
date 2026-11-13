import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { Services } from "@/components/home/services";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { GalleryBand } from "@/components/home/gallery-band";
import { About } from "@/components/home/about";
import { Skills } from "@/components/home/skills";
import { Engagements } from "@/components/home/engagements";
import { Contact } from "@/components/home/contact";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import { FREELANCE_MODE } from "@/lib/config";
import { JsonLd } from "@/components/seo/json-ld";
import { PERSON_REF } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: SITE_CONFIG.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  ...PERSON_REF,
  alternateName: "Spencer Davis",
  image: `${SITE_CONFIG.url}/headshot.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
  jobTitle: "Applied AI & Integrations Engineer",
  knowsAbout: ["Applied AI", "Model Evaluation", "API Integration", "Internal Tools", "TypeScript", "Next.js", "Browser Automation", "MCP"],
  sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github, SITE_CONFIG.pixabay],
};

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
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
