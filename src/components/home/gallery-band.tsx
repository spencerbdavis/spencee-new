import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

type Plate = { src: string; alt: string; w: number; h: number; caption: string; href: string };

/** Ordered for CSS columns: items fill column by column, so alternate tall and wide. */
const PLATES: Plate[] = [
  { src: "/photos/brochure/ehs-side-2.webp", alt: "East Howe Steps brochure inside spread with floor plans and a neighborhood map", w: 2112, h: 1632, caption: "Tri-fold brochure · East Howe Steps", href: "/projects/creative" },
  { src: "/photos/decal/installed.webp", alt: "East Howe Steps front-door decal installed on glass", w: 1350, h: 1800, caption: "Front-door decal · East Howe Steps", href: "/projects/door-decal" },
  { src: "/photos/life/aurora.webp", alt: "Aurora over Mukilteo Lighthouse, May 2024", w: 1400, h: 1050, caption: "Photography · Aurora, Mukilteo", href: "/projects/creative" },
  { src: "/photos/wayfinding/viva-packages-lockers.webp", alt: "VIVA wayfinding sign: Packages in the lockers", w: 1350, h: 1800, caption: "Wayfinding · VIVA", href: "/projects/creative" },
  { src: "/photos/print/cruise-step-and-repeat.webp", alt: "Bonavista 2026 Cruise sponsor step-and-repeat", w: 1800, h: 1350, caption: "Event · 2026 Cruise backdrop", href: "/projects/creative" },
  { src: "/photos/lobby/ehs-tv-hero.webp", alt: "East Howe Steps lobby TV poster", w: 1350, h: 1800, caption: "Lobby TV · East Howe Steps", href: "/projects/lobby-displays" },
  { src: "/photos/print/emergency-magnets.webp", alt: "Bonavista after-hours emergency magnets", w: 1800, h: 1350, caption: "Resident magnets · Bonavista", href: "/projects/creative" },
  { src: "/photos/print/fremont-place-a-board.webp", alt: "Fremont Place QR A-board on the sidewalk", w: 1350, h: 1800, caption: "QR A-board · Fremont Place", href: "/projects/creative" },
  { src: "/screenshots/creative/vaccine-pixabay.webp", alt: "Gloved hand holding an mRNA COVID-19 vaccine vial", w: 1824, h: 1204, caption: "Photography · Pixabay Editor's Choice, 182K views", href: "/projects/creative" },
  { src: "/photos/wayfinding/viva-this-way.webp", alt: "VIVA floor decal arrow pointing to the package lockers", w: 1350, h: 1800, caption: "Floor decal · VIVA", href: "/projects/creative" },
  { src: "/photos/print/no-furniture.webp", alt: "No furniture sign with illustrated sad furniture", w: 1800, h: 1350, caption: "Bulk-trash & parking signs", href: "/projects/creative" },
  { src: "/photos/print/hawthorne-a-board.webp", alt: "Hawthorne Capitol Hill QR A-board", w: 1350, h: 1800, caption: "QR A-board · Hawthorne", href: "/projects/creative" },
  { src: "/screenshots/creative/risdon-full-color.webp", alt: "Risdon Middle School wolf logo", w: 2000, h: 889, caption: "Brand · Risdon Middle School", href: "/projects/creative" },
  { src: "/screenshots/creative/print/509-1st-aboard.webp", alt: "509 1st Now Leasing A-board", w: 1144, h: 1620, caption: "A-board · 509 1st", href: "/projects/creative" },
];

export function GalleryBand() {
  return (
    <section id="design" className="py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="label-mono">Design</p>
            <h2 className="text-h2 mt-3">Design you can walk past, scan, and pick up.</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Brochures, door decals, wayfinding, A-boards, lobby screens, event signage and photography, designed for
              real buildings and photographed where they live.
            </p>
          </div>
          <Link href="/projects/creative" className="btn-outline">
            Full design portfolio <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-10 columns-2 gap-3 md:mt-12 md:columns-3 md:gap-4 lg:columns-4">
          {PLATES.map((p, i) => (
            <Reveal key={p.src} className="reveal-rise mb-3 break-inside-avoid md:mb-4" delay={(i % 4) * 60}>
              <Link href={p.href} className="group relative block overflow-hidden rounded-2xl bg-surface-2">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 1024px) 19rem, (min-width: 768px) 33vw, 50vw"
                  className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-3 pt-10 pb-2.5 text-xs font-medium text-white">
                  {p.caption}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
