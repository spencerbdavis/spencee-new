import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Design — Print, Signage, Brand & Photography",
  description:
    "A design portfolio: large-format signage and print, brand identity, and photography. Illustrator and Photoshop work produced for real Seattle properties, plus a Pixabay Editor's Choice photo set with 182K views used by news outlets and research institutions.",
  alternates: { canonical: "https://spenc.ee/projects/creative" },
};

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
      </section>
    </div>
  );
}
