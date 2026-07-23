import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";

const PLATES = [
  {
    src: "/screenshots/creative/vaccine-pixabay.webp",
    alt: "Gloved hand holding an mRNA COVID-19 vaccine vial",
    width: 1824,
    height: 1204,
    caption: "Photography · Pixabay Editor's Choice",
    span: "md:col-span-5",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  {
    src: "/screenshots/creative/print/509-1st-aboard.webp",
    alt: "509 1st Now Leasing A-board sign",
    width: 1144,
    height: 1620,
    caption: "Signage · 509 1st",
    span: "md:col-span-3",
    sizes: "(min-width: 768px) 25vw, 100vw",
  },
  {
    src: "/screenshots/creative/risdon-full-color.webp",
    alt: "Risdon Middle School full-color wolf logo lockup",
    width: 2000,
    height: 889,
    caption: "Brand · Risdon Middle School",
    span: "md:col-span-4",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
];

export function GalleryBand() {
  return (
    <section id="design" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeader
          eyebrow="Design"
          title="Print, brand & photography"
          action={
            <Link
              href="/projects/creative"
              className="nav-link inline-flex items-center gap-2 whitespace-nowrap font-mono text-sm"
            >
              Design portfolio
              <span aria-hidden="true">&rarr;</span>
            </Link>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 md:grid-cols-12 md:items-start md:gap-10">
          {PLATES.map((plate, i) => (
            <Reveal key={plate.src} className={`reveal-clip min-w-0 ${plate.span}`} delay={i * 80}>
              <figure>
                <div className="border border-hairline bg-paper p-2 md:p-3">
                  <Image
                    src={plate.src}
                    alt={plate.alt}
                    width={plate.width}
                    height={plate.height}
                    sizes={plate.sizes}
                    className="block h-auto w-full"
                  />
                </div>
                <figcaption className="label-mono mt-3">{plate.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
