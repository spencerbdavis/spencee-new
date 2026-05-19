import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ScrollingSiteTile } from "@/components/projects/scrolling-site-tile";

export const metadata: Metadata = {
  title: "WordPress Sites | Spencer D'Avis — Elementor, Astra & Custom Themes",
  description:
    "14+ live WordPress sites I've built, designed, hosted, and maintained — Elementor, Astra, and bespoke custom themes. Available for new projects.",
  keywords: [
    "WordPress developer Seattle",
    "Elementor developer",
    "Astra WordPress",
    "WordPress maintenance",
    "WordPress hosting",
    "custom WordPress theme",
    "freelance WordPress",
  ],
  alternates: { canonical: "https://spenc.ee/projects/wordpress-sites" },
  openGraph: {
    title: "WordPress Sites | Spencer D'Avis",
    description:
      "14+ live WordPress sites — Elementor, Astra, and bespoke custom themes. Available for new projects.",
    url: "https://spenc.ee/projects/wordpress-sites",
    type: "website",
    images: [
      {
        url: "https://spenc.ee/screenshots/wordpress-sites/arbor-village.png",
        width: 1440,
        alt: "WordPress sites portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Sites | Spencer D'Avis",
    description:
      "14+ live WordPress sites — Elementor, Astra, and bespoke custom themes.",
    images: ["https://spenc.ee/screenshots/wordpress-sites/arbor-village.png"],
  },
};

const SITES = [
  {
    name: "Harbor Flats Seattle",
    url: "https://harborflatsseattle.com/",
    image: "/screenshots/wordpress-sites/harbor-flats.png",
    tags: ["Custom Theme", "Property", "Hosted"],
  },
  {
    name: "Vibe Fremont",
    url: "https://vibefremont.com/",
    image: "/screenshots/wordpress-sites/vibe-fremont.png",
    tags: ["Custom Theme", "Property", "Hosted"],
  },
  {
    name: "Bonavista Property Management",
    url: "https://bonavistapm.com/",
    image: "/screenshots/wordpress-sites/bonavista-pm.png",
    tags: ["Elementor", "Corporate"],
  },
  {
    name: "Arbor Village Apartments",
    url: "https://arborvillageapts.com/",
    image: "/screenshots/wordpress-sites/arbor-village.png",
    tags: ["Elementor", "Bespoke", "Community"],
  },
  {
    name: "Wallingford Studios",
    url: "https://wallingfordstudios.com/",
    image: "/screenshots/wordpress-sites/wallingford-studios.png",
    tags: ["Custom Theme", "Property"],
  },
  {
    name: "Ludwig Seattle",
    url: "https://ludwigseattle.com/",
    image: "/screenshots/wordpress-sites/ludwig-seattle.png",
    tags: ["Elementor", "Property"],
  },
  {
    name: "4400 Alaska",
    url: "https://4400alaska.com/",
    image: "/screenshots/wordpress-sites/4400-alaska.png",
    tags: ["Elementor", "Property"],
  },
  {
    name: "Ballinger Living",
    url: "https://ballingerliving.com/",
    image: "/screenshots/wordpress-sites/ballinger-living.png",
    tags: ["Astra", "Property"],
  },
  {
    name: "Cedar Lane Pacific",
    url: "https://cedarlanepacific.com/",
    image: "/screenshots/wordpress-sites/cedar-lane-pacific.png",
    tags: ["Astra", "Property"],
  },
  {
    name: "Chelsea by the Bay",
    url: "https://chelseabythebay.com/",
    image: "/screenshots/wordpress-sites/chelsea-by-the-bay.png",
    tags: ["Astra", "Property"],
  },
  {
    name: "Chianti Apartments",
    url: "https://chiantiapartments.com/",
    image: "/screenshots/wordpress-sites/chianti.png",
    tags: ["Property"],
  },
  {
    name: "Courtyard Ballard",
    url: "https://courtyardballard.com/",
    image: "/screenshots/wordpress-sites/courtyard-ballard.png",
    tags: ["Property"],
  },
  {
    name: "Cubix Apartments",
    url: "https://cubixapartments.com/",
    image: "/screenshots/wordpress-sites/cubix.png",
    tags: ["Elementor", "Property"],
  },
  {
    name: "East Highland Apartments",
    url: "https://easthighlandapts.com/",
    image: "/screenshots/wordpress-sites/east-highland.png",
    tags: ["Property"],
  },
];

export default function WordPressSitesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "WordPress Sites by Spencer D'Avis",
    description:
      "14+ live WordPress sites built, designed, hosted, and maintained — Elementor, Astra, and bespoke custom themes.",
    url: "https://spenc.ee/projects/wordpress-sites",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SITES.map((site, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          image: `https://spenc.ee${site.image}`,
        },
      })),
    },
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 32px 128px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/projects"
        className="nav-link"
        style={{ fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}
      >
        <ArrowLeft size={14} /> All Projects
      </Link>

      <div style={{ marginTop: 48, marginBottom: 56 }}>
        <span
          className="pill"
          style={{
            display: "inline-block",
            marginBottom: 16,
            fontSize: 10,
            fontWeight: 600,
            background: "var(--accent-soft)",
            color: "var(--accent)",
            borderColor: "transparent",
          }}
        >
          ● Available for new projects
        </span>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "var(--foreground)",
          }}
        >
          WordPress Sites
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--muted-foreground)",
            maxWidth: 640,
            marginTop: 20,
          }}
        >
          Sites I&apos;ve built, designed, hosted, and maintained, from
          Elementor builds to bespoke custom themes. Hover any tile to scroll
          through the full page, or click to open the live site.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: 24,
        }}
      >
        {SITES.map((site) => (
          <ScrollingSiteTile key={site.url} {...site} />
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: 80,
          padding: 32,
          borderRadius: 16,
          background: "var(--accent-soft)",
          border: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
        }}
      >
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
            Side Work
          </p>
          <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Need a WordPress site built or maintained?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: 540 }}>
            Elementor builds, custom themes, migrations, hosting setup, ongoing
            edits and maintenance. Available evenings and weekends.
          </p>
        </div>
        <a
          href="mailto:spencer.davis@bonavistamgmt.com?subject=WordPress%20project"
          className="btn-secondary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 20px",
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Get in touch <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
