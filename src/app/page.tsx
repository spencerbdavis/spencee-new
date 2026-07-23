import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { Services } from "@/components/home/services";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { GalleryBand } from "@/components/home/gallery-band";
import { About } from "@/components/home/about";
import { Skills } from "@/components/home/skills";
import { Contact } from "@/components/home/contact";
import { SITE_CONFIG } from "@/lib/config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  jobTitle: "Marketing Operations & Web Systems",
  knowsAbout: ["Marketing Operations", "Web Design", "WordPress", "Graphic Design", "Print Design", "SEO", "Marketing Automation", "AI Systems"],
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
      <Services />
      <FeaturedProjects />
      <GalleryBand />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
