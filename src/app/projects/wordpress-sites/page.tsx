import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScrollingSiteTile } from "@/components/projects/scrolling-site-tile";

export const metadata: Metadata = {
  title: "WordPress Sites | Spencer D'Avis — Elementor, Astra & Custom Themes",
  description:
    "55 of 60 Bonavista property websites hosted and managed in-house — self-hosted WordPress on our own VPS or Vercel by stack. Elementor, Astra, and bespoke custom themes. Available for new projects.",
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
      "55 of 60 property sites hosted & managed in-house — Elementor, Astra, and bespoke custom themes. Available for new projects.",
    url: "https://spenc.ee/projects/wordpress-sites",
    type: "website",
    images: [
      {
        url: "https://spenc.ee/screenshots/wordpress-sites/arbor-village.webp",
        width: 1440,
        alt: "WordPress sites portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Sites | Spencer D'Avis",
    description:
      "55 of 60 property sites hosted & managed in-house — Elementor, Astra, and bespoke custom themes.",
    images: ["https://spenc.ee/screenshots/wordpress-sites/arbor-village.webp"],
  },
};

const SITES = [
  {
    name: "Harbor Flats Seattle",
    url: "https://harborflatsseattle.com/",
    image: "/screenshots/wordpress-sites/harbor-flats.webp",
    tags: ["Custom Theme", "Property", "Hosted"],
  },
  {
    name: "Vibe Fremont",
    url: "https://vibefremont.com/",
    image: "/screenshots/wordpress-sites/vibe-fremont.webp",
    tags: ["Custom Theme", "Property", "Hosted"],
  },
  {
    name: "Bonavista Property Management",
    url: "https://bonavistapm.com/",
    image: "/screenshots/wordpress-sites/bonavista-pm.webp",
    tags: ["Elementor", "Corporate"],
  },
  {
    name: "Arbor Village Apartments",
    url: "https://arborvillageapts.com/",
    image: "/screenshots/wordpress-sites/arbor-village.webp",
    tags: ["Elementor", "Bespoke", "Community"],
  },
  {
    name: "Wallingford Studios",
    url: "https://wallingfordstudios.com/",
    image: "/screenshots/wordpress-sites/wallingford-studios.webp",
    tags: ["Custom Theme", "Property"],
  },
  {
    name: "Ludwig Seattle",
    url: "https://ludwigseattle.com/",
    image: "/screenshots/wordpress-sites/ludwig-seattle.webp",
    tags: ["Elementor", "Property"],
  },
  {
    name: "4400 Alaska",
    url: "https://4400alaska.com/",
    image: "/screenshots/wordpress-sites/4400-alaska.webp",
    tags: ["Elementor", "Property"],
  },
  {
    name: "Ballinger Living",
    url: "https://ballingerliving.com/",
    image: "/screenshots/wordpress-sites/ballinger-living.webp",
    tags: ["Astra", "Property"],
  },
  {
    name: "Cedar Lane Pacific",
    url: "https://cedarlanepacific.com/",
    image: "/screenshots/wordpress-sites/cedar-lane-pacific.webp",
    tags: ["Astra", "Property"],
  },
  {
    name: "Chelsea by the Bay",
    url: "https://chelseabythebay.com/",
    image: "/screenshots/wordpress-sites/chelsea-by-the-bay.webp",
    tags: ["Astra", "Property"],
  },
  {
    name: "Chianti Apartments",
    url: "https://chiantiapartments.com/",
    image: "/screenshots/wordpress-sites/chianti.webp",
    tags: ["Property"],
  },
  {
    name: "Courtyard Ballard",
    url: "https://courtyardballard.com/",
    image: "/screenshots/wordpress-sites/courtyard-ballard.webp",
    tags: ["Property"],
  },
  {
    name: "Cubix Apartments",
    url: "https://cubixapartments.com/",
    image: "/screenshots/wordpress-sites/cubix.webp",
    tags: ["Elementor", "Property"],
  },
  {
    name: "East Highland Apartments",
    url: "https://easthighlandapts.com/",
    image: "/screenshots/wordpress-sites/east-highland.webp",
    tags: ["Property"],
  },
];

export default function WordPressSitesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "WordPress Sites by Spencer D'Avis",
    description:
      "55 of 60 Bonavista property websites hosted and managed in-house — Elementor, Astra, and bespoke custom themes.",
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
    <div className="container-site rule-thick pt-16 pb-28 md:pt-20 md:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/projects" className="nav-link label-mono inline-flex items-center gap-2">
        <ArrowLeft size={14} /> All work
      </Link>

      <div className="mt-12 mb-14 md:mb-16">
        <p className="label-mono">Web</p>
        <h1 className="mt-4 text-h2">WordPress Sites</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
          I host and manage 55 of the 60 property websites in Bonavista&apos;s portfolio
          in-house — self-hosted WordPress on our own VPS (WPEngine eliminated) or Vercel,
          depending on stack. Below is a selection: Elementor builds through bespoke custom
          themes. Hover any tile to scroll through the full page, or click to open the live
          site.
        </p>
        <p className="label-mono mt-6 inline-flex items-center gap-2">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for new projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SITES.map((site) => (
          <ScrollingSiteTile key={site.url} {...site} />
        ))}
      </div>

      {/* CTA — mirrors the site contact section's oversized mailto */}
      <div className="rule-thick mt-20 pt-10 md:mt-24 md:pt-12">
        <p className="label-mono">Side Work</p>
        <h2 className="mt-4 max-w-xl text-h2">Need a WordPress site built or maintained?</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
          Elementor builds, custom themes, migrations, hosting setup, ongoing edits and
          maintenance. Available evenings and weekends.
        </p>
        <a
          href="mailto:hello@spenc.ee?subject=WordPress%20project"
          className="mt-8 block w-fit text-h2 text-ink underline-offset-4 hover:underline"
        >
          hello@spenc.ee
        </a>
      </div>
    </div>
  );
}
