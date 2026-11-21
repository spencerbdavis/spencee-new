import type { Metadata } from "next";
import { pageMetadata, projectJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ALL_PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = pageMetadata({
  title: "Spencer D'Avis | Design — Print, Signage, Brand & Photography",
  description:
    "A design portfolio: large-format signage and print, brand identity, and photography. Illustrator and Photoshop work produced for real Seattle properties, plus a Pixabay Editor's Choice photo set with 182K views used by news outlets and research institutions.",
  path: "/projects/creative",
  ogSlug: "creative",
});

interface PlateProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  sizes: string;
  span?: string;
  delay?: number;
  priority?: boolean;
}

function Plate({ src, alt, width, height, caption, sizes, span, delay = 0, priority }: PlateProps) {
  return (
    <Reveal className={`reveal-clip min-w-0 ${span ?? ""}`} delay={delay}>
      <figure>
        <div className="border border-hairline bg-paper p-2 md:p-3">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            className="block h-auto w-full"
          />
        </div>
        <figcaption className="label-mono mt-3">{caption}</figcaption>
      </figure>
    </Reveal>
  );
}

function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rule-thick pt-6">
      <p className="label-mono">{eyebrow}</p>
      <h2 className="text-h2 mt-3">{title}</h2>
      {children && <p className="mt-5 max-w-2xl text-ink-muted leading-relaxed">{children}</p>}
    </div>
  );
}

export default function CreativePage() {
  return (
    <div className="container-site py-28 md:py-36">
      <JsonLd data={projectJsonLd(ALL_PROJECTS.find((p) => p.slug === "creative")!)} />
      <Link href="/projects" className="nav-link inline-flex items-center gap-2 font-mono text-sm">
        <span aria-hidden="true">&larr;</span>
        All work
      </Link>

      <header className="mt-12 md:mt-16">
        <p className="label-mono">Design</p>
        <h1 className="text-display mt-4 font-extrabold">Made in Seattle</h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted leading-relaxed">
          Large-format signage, brand identity, and photography — the print-side
          counterpart to the systems work. Drawn in Illustrator and Photoshop,
          produced for real Seattle properties, and picked up well beyond them.
        </p>
      </header>

      {/* ===== Print & Signage ===== */}
      <section className="mt-24 md:mt-32">
        <SectionHead eyebrow="Print & Signage" title="Large-format leasing signage">
          Window clings, A-boards, banners, and yard signs for the Bonavista
          portfolio — designed with print bleeds, spot color, and
          production-ready vector files.
        </SectionHead>

        <div className="mt-12 md:mt-16">
          <Plate
            src="/screenshots/creative/print/alt-capitol-hill-banners.webp"
            alt="Alt Capitol Hill leasing banner system in two colorways"
            width={1794}
            height={1284}
            caption="Banner System · Alt Capitol Hill"
            sizes="(min-width: 1080px) 1024px, 100vw"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-12 md:grid-cols-4 md:gap-8">
          <Plate
            src="/screenshots/creative/print/509-1st-aboard.webp"
            alt="509 1st Now Leasing A-board sign"
            width={1144}
            height={1620}
            caption="A-Board · 509 1st"
            sizes="(min-width: 768px) 25vw, 50vw"
            delay={0}
          />
          <Plate
            src="/screenshots/creative/print/5902-ballard-aboard.webp"
            alt="5902 Ballard studios A-board sign"
            width={916}
            height={1376}
            caption="A-Board · 5902 Ballard"
            sizes="(min-width: 768px) 25vw, 50vw"
            delay={70}
          />
          <Plate
            src="/screenshots/creative/print/ondine-fremont-aboards.webp"
            alt="Ondine and Fremont Village Now Leasing A-board set"
            width={1380}
            height={1770}
            caption="A-Board Set · Ondine / Fremont Village"
            sizes="(min-width: 768px) 25vw, 50vw"
            delay={140}
          />
          <Plate
            src="/screenshots/creative/print/no-dumping-sign.webp"
            alt="No dumping high-report zone yard sign"
            width={1032}
            height={1514}
            caption="Yard Sign · No Dumping"
            sizes="(min-width: 768px) 25vw, 50vw"
            delay={210}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
          <Plate
            src="/screenshots/creative/print/fremont-village-book-a-tour.webp"
            alt="Fremont Village Book a Tour window cling"
            width={1412}
            height={1048}
            caption="Window Cling · Fremont Village"
            sizes="(min-width: 768px) 33vw, 100vw"
            delay={0}
          />
          <Plate
            src="/screenshots/creative/print/ondine-book-a-tour.webp"
            alt="Ondine Eastlake Book a Tour window cling"
            width={1166}
            height={870}
            caption="Window Cling · Ondine Eastlake"
            sizes="(min-width: 768px) 33vw, 100vw"
            delay={70}
          />
          <Plate
            src="/screenshots/creative/print/509-1st-month-free.webp"
            alt="509 1st one month free digital leasing ad"
            width={1758}
            height={1764}
            caption="Digital Ad · 509 1st"
            sizes="(min-width: 768px) 33vw, 100vw"
            delay={140}
          />
        </div>
      </section>

      {/* ===== In the wild: wayfinding, operations print, merch ===== */}
      <section className="mt-24 md:mt-32">
        <SectionHead eyebrow="In the wild" title="Wayfinding, operations print & merch">
          Photographed where it lives. A wayfinding system for VIVA&apos;s package
          lockers and amenity rooms on the building&apos;s lattice brand,
          after-hours emergency magnets for every resident, a parking and
          bulk-trash sign set that says no without scolding, and QR A-boards that
          send sidewalk traffic straight to the leasing sites. The backpacks and
          the bear are programs I started: every new hire gets an onboarding
          backpack, and every expecting employee gets a Bonavista bear.
        </SectionHead>

        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6">
          <Plate src="/photos/wayfinding/viva-packages-lockers.webp" alt="VIVA sign: Packages in the lockers, in the lobby not the garage" width={768} height={1024} caption="Carrier sign · VIVA" sizes="(min-width: 768px) 25vw, 50vw" />
          <Plate src="/photos/wayfinding/viva-this-way.webp" alt="VIVA floor decal arrow: Package lockers this way" width={768} height={1024} caption="Floor decal · VIVA" sizes="(min-width: 768px) 25vw, 50vw" delay={60} />
          <Plate src="/photos/wayfinding/viva-package-room.webp" alt="VIVA package room door sign and tap-to-enter sign" width={768} height={1024} caption="Door signs · VIVA" sizes="(min-width: 768px) 25vw, 50vw" delay={120} />
          <Plate src="/photos/wayfinding/viva-resident-lounge.webp" alt="VIVA resident lounge door sign" width={768} height={1024} caption="Amenity sign · VIVA" sizes="(min-width: 768px) 25vw, 50vw" delay={180} />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <Plate src="/photos/print/emergency-magnets.webp" alt="Bonavista after-hours emergency magnets with icons for leaks, fire, sewer and no heat" width={1024} height={768} caption="After-hours emergency magnets · Bonavista" sizes="(min-width: 768px) 50vw, 100vw" />
          <Plate src="/photos/print/no-furniture.webp" alt="No furniture sign with sad illustrated furniture in a dumpster, beside an authorized parking sign" width={1024} height={768} caption="Bulk-trash & parking signs · Bonavista" sizes="(min-width: 768px) 50vw, 100vw" delay={80} />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <Plate src="/photos/print/hawthorne-a-board.webp" alt="Hawthorne Capitol Hill A-board with a Book a Tour QR code" width={768} height={1024} caption="QR A-board · Hawthorne" sizes="(min-width: 768px) 25vw, 50vw" />
          <Plate src="/photos/print/fremont-place-a-board.webp" alt="Fremont Place A-board on the sidewalk at night with a Book a Tour QR code" width={768} height={1024} caption="QR A-board · Fremont Place" sizes="(min-width: 768px) 25vw, 50vw" delay={60} />
          <Plate src="/photos/print/parking-sign.webp" alt="Authorized parking only sign installed on a building" width={768} height={1024} caption="Parking sign, installed" sizes="(min-width: 768px) 25vw, 50vw" delay={120} />
          <Plate src="/photos/merch/backpacks.webp" alt="Rows of Bonavista-embroidered North Face backpacks" width={768} height={1024} caption="New-hire onboarding backpacks · Bonavista" sizes="(min-width: 768px) 25vw, 50vw" delay={180} />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <Plate src="/photos/merch/bear.webp" alt="Teddy bear wearing a Bonavista t-shirt" width={360} height={480} caption="Bear for expecting employees · Bonavista" sizes="(min-width: 768px) 25vw, 50vw" />
        </div>
      </section>

      {/* ===== Door decal (links to full case study) ===== */}
      <section className="mt-24 md:mt-32">
        <SectionHead eyebrow="Process" title="East Howe Steps front door">
          Nine versions, a six-font study and automated legibility checks to get
          one pane of glass right.
        </SectionHead>
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-12 md:items-end">
          <Plate src="/photos/decal/installed.webp" alt="The installed East Howe Steps door decal with logo, QR, phone number, door policy and emergency number" width={1350} height={1800} caption="Installed · white cut vinyl on glass" sizes="(min-width: 768px) 33vw, 100vw" span="md:col-span-4" />
          <div className="md:col-span-8">
            <Link href="/projects/door-decal" className="btn-solid">
              How we got to this design →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Event: 2026 cruise ===== */}
      <section className="mt-24 md:mt-32">
        <SectionHead eyebrow="Event" title="Bonavista 2026 Cruise, Lake Union">
          The company cruise, end to end: a sponsor step-and-repeat with every
          vendor partner, table signage on board, and the gift portal behind it,
          where each employee picked one gift with a validated shipping address
          before the deadline, built into the admin platform.
        </SectionHead>
        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-12 md:gap-6">
          <Plate src="/photos/print/cruise-step-and-repeat.webp" alt="Bonavista Management 2026 Cruise step-and-repeat banner with vendor sponsor logos" width={1024} height={768} caption="Sponsor step-and-repeat" sizes="(min-width: 768px) 58vw, 100vw" span="md:col-span-7" />
          <Plate src="/photos/print/cruise-table-signs.webp" alt="Table signs lined up along the boat windows" width={480} height={360} caption="Table signs on board" sizes="(min-width: 768px) 42vw, 100vw" span="md:col-span-5" delay={80} />
        </div>
      </section>

      {/* ===== Brand & Identity ===== */}
      <section className="mt-24 md:mt-32">
        <SectionHead eyebrow="Brand & Identity" title="Risdon Middle School">
          A wolf-motif identity for a new school in Renton, developed with
          district staff and built as a system — full color, single-color, and
          real-world application across signage, uniforms, and merchandise.
        </SectionHead>

        <div className="mt-12 flex flex-col gap-6 md:mt-16 md:gap-8">
          <Plate
            src="/screenshots/creative/risdon-full-color.webp"
            alt="Risdon Middle School full-color wolf logo lockup"
            width={2000}
            height={889}
            caption="Logo · Full Color"
            sizes="(min-width: 1080px) 1024px, 100vw"
            delay={0}
          />
          <Plate
            src="/screenshots/creative/risdon-grayscale.webp"
            alt="Risdon Middle School grayscale logo variant"
            width={2000}
            height={891}
            caption="Logo · Single Color"
            sizes="(min-width: 1080px) 1024px, 100vw"
            delay={70}
          />
          <Plate
            src="/screenshots/creative/risdon-application.webp"
            alt="Risdon Middle School logo shown in application"
            width={2000}
            height={907}
            caption="Logo · Application"
            sizes="(min-width: 1080px) 1024px, 100vw"
            delay={140}
          />
        </div>
      </section>

      {/* ===== Ingallina's ===== */}
      <section className="mt-24 md:mt-32">
        <SectionHead eyebrow="Brand & Campaign" title="Ingallina's Box Lunch">
          Social and promotional graphics for a Seattle catering brand — a
          cohesive campaign system built from a single visual identity.
        </SectionHead>

        <div className="mt-12 grid grid-cols-2 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map((n, i) => (
            <Plate
              key={n}
              src={`/screenshots/creative/ingallinas-${n}.webp`}
              alt={`Ingallina's Box Lunch promotional graphic ${n}`}
              width={1264}
              height={1266}
              caption="Promo Graphic · Ingallina's"
              sizes="(min-width: 768px) 33vw, 50vw"
              delay={(i % 3) * 70}
            />
          ))}
        </div>
      </section>

      {/* ===== Photography ===== */}
      <section className="mt-24 md:mt-32">
        <SectionHead eyebrow="Photography" title="COVID vaccine vial">
          Shot as a contact tracer to explain vaccine types, then released
          royalty-free on Pixabay and Unsplash. It was picked up by news outlets
          and research institutions, including the University of Arizona and the
          London School of Hygiene & Tropical Medicine.
        </SectionHead>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="min-w-0 md:col-span-8">
            <Plate
              src="/screenshots/creative/vaccine-pixabay.webp"
              alt="Gloved hand holding an mRNA COVID-19 vaccine vial"
              width={1824}
              height={1204}
              caption="mRNA Vaccine Vial · Pixabay Editor's Choice"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
          </div>

          <div className="min-w-0 md:col-span-4">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-1">
              <div>
                <dt className="font-mono text-4xl leading-none">182K</dt>
                <dd className="label-mono mt-2">Views on Pixabay</dd>
              </div>
              <div>
                <dt className="font-mono text-4xl leading-none">126K</dt>
                <dd className="label-mono mt-2">Downloads</dd>
              </div>
              <div>
                <dt className="font-mono text-4xl leading-none">1</dt>
                <dd className="label-mono mt-2">Editor&apos;s Choice</dd>
              </div>
            </dl>
            <Link
              href="https://pixabay.com/users/spencerbdavis1-21090082/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link mt-8 inline-flex items-center gap-2 font-mono text-sm underline underline-offset-4"
            >
              Pixabay profile
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-12 md:grid-cols-4 md:gap-8">
          <Plate
            src="/screenshots/creative/vaccine-london.webp"
            alt="London School of Hygiene & Tropical Medicine using the vaccine photo"
            width={1856}
            height={1716}
            caption="Press · London School of Hygiene & Tropical Medicine"
            sizes="(min-width: 768px) 25vw, 50vw"
            delay={0}
          />
          <Plate
            src="/screenshots/creative/vaccine-article-1.webp"
            alt="News article using the vaccine photo"
            width={2000}
            height={1093}
            caption="Press · Vaccine Inequity"
            sizes="(min-width: 768px) 25vw, 50vw"
            delay={70}
          />
          <Plate
            src="/screenshots/creative/vaccine-article-2.webp"
            alt="News article using the vaccine photo"
            width={2000}
            height={1624}
            caption="Press · Viral Vector Vaccine"
            sizes="(min-width: 768px) 25vw, 50vw"
            delay={140}
          />
          <Plate
            src="/screenshots/creative/vaccine-article-3.webp"
            alt="News article using the vaccine photo"
            width={2000}
            height={1586}
            caption="Press · Cancer Patients & COVID"
            sizes="(min-width: 768px) 25vw, 50vw"
            delay={210}
          />
        </div>
      
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="min-w-0 md:col-span-7">
            <Plate src="/photos/life/aurora.webp" alt="Green and purple aurora over Mukilteo Lighthouse and the keeper's house at night" width={480} height={360} caption="Aurora · Mukilteo Lighthouse · May 2024" sizes="(min-width: 768px) 58vw, 100vw" />
          </div>
          <p className="text-sm leading-relaxed text-ink-muted md:col-span-5">
            The May 2024 geomagnetic storm, when the aurora reached as far south as Puget Sound.
          </p>
        </div>
      </section>
    </div>
  );
}
