import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { About } from "@/components/home/about";
import { Skills } from "@/components/home/skills";
import { Contact } from "@/components/home/contact";
import { SITE_CONFIG } from "@/lib/config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  jobTitle: "Full-Stack Developer & AI Systems Builder",
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
      <Contact />
    </>
  );
}
