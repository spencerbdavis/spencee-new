import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { GalleryBand } from "@/components/home/gallery-band";
import { TwoPaths } from "@/components/home/two-paths";
import { OffTheClock } from "@/components/home/off-the-clock";
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
  alternateName: ["Spencer Davis", "spencerbdavis"],
  description:
    "Seattle-area software engineer building applied AI, integrations and internal tools for an 80-property real estate company, plus independent weather, radar, flight-tracking and iOS products.",
  email: `mailto:${SITE_CONFIG.email}`,
  image: `${SITE_CONFIG.url}/headshot.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
  jobTitle: "Software Engineer — Applied AI, Integrations & Web",
  worksFor: { "@type": "Organization", name: "Bonavista Management" },
  homeLocation: { "@type": "Place", name: "Renton, WA" },
  knowsAbout: ["Applied AI", "Model Evaluation", "API Integration", "Internal Tools", "TypeScript", "Next.js", "Python", "Browser Automation", "MCP", "Computer Vision", "Weather Radar", "ADS-B", "Android", "iOS", "Swift", "SwiftUI", "HealthKit", "Bluetooth Low Energy", "Reverse Engineering", "Local SEO", "Web Development"],
  sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github, SITE_CONFIG.pixabay],
  subjectOf: [
    { "@type": "SoftwareSourceCode", name: "Weigh (Wyze Scale Ultra iPhone app)", codeRepository: "https://github.com/spencerbdavis/wyze-scale-ultra-ios" },
    { "@type": "SoftwareSourceCode", name: "Overhead flight tracker", codeRepository: "https://github.com/spencerbdavis/sky-over-renton" },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <TwoPaths />
      <About />
      <OffTheClock />
      <Skills />
      <GalleryBand />
      {FREELANCE_MODE === "secondary" && <Engagements />}
      <Contact />
    </>
  );
}
