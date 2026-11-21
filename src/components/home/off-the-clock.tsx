import Image from "next/image";
import Link from "next/link";

type Photo = { src: string; alt: string; caption: string; w: number; h: number };

const GARDEN: Photo[] = [
  { src: "/photos/life/raspberry-canes.webp", alt: "Spencer's forehead at the bottom of the frame, raspberry canes towering overhead", caption: "The raspberries won", w: 768, h: 1024 },
  { src: "/photos/life/tomatoes.webp", alt: "A steel bowl overflowing with cherry tomatoes", caption: "One picking of cherry tomatoes…", w: 360, h: 480 },
  { src: "/photos/life/tomato-scale.webp", alt: "Kitchen scale reading 4 lb 0 3/8 oz", caption: "…weighed, because of course", w: 768, h: 1024 },
  { src: "/photos/life/peach.webp", alt: "A ripe peach on a netted tree", caption: "Peaches under netting", w: 360, h: 480 },
  { src: "/photos/life/dahlia.webp", alt: "A coral dahlia held in a hand", caption: "Dahlia", w: 360, h: 480 },
  { src: "/photos/life/berries.webp", alt: "Pints of raspberries and blueberries", caption: "A morning's berries", w: 360, h: 480 },
  { src: "/photos/life/garlic.webp", alt: "A bundle of freshly pulled garlic against a blue sky", caption: "Garlic harvest", w: 360, h: 480 },
  { src: "/photos/life/pumpkins.webp", alt: "Two small white pumpkins on the vine", caption: "Mini pumpkins on the fence", w: 360, h: 480 },
  { src: "/photos/life/blueberries.webp", alt: "Blueberries ripening on the bush", caption: "Blueberries, mid-ripen", w: 360, h: 480 },
  { src: "/photos/life/strawberries.webp", alt: "A pint of strawberries held over grass", caption: "Strawberries", w: 360, h: 480 },
  { src: "/photos/life/cutting-1.webp", alt: "A rooted cutting in a black nursery pot", caption: "Cuttings, rooted", w: 360, h: 480 },
  { src: "/photos/life/raccoon.webp", alt: "A raccoon napping in the fork of a tree", caption: "The garden's other regular", w: 360, h: 480 },
];

const LINKS = [
  { text: "The garden has a microphone", href: "/projects/overhead-journal", sub: "BirdNET logs every bird that visits" },
  { text: "The wall display tracks the watering", href: "/projects/wall-display", sub: "Minutes, gallons and start time, every morning" },
  { text: "Aurora nights are on the forecast", href: "/projects/rntwx", sub: "RntWx shows the Kp index for tonight" },
];

function Tile({ p, className = "" }: { p: Photo; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl bg-surface-2 ${className}`}>
      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 20rem, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-8 pb-2.5 text-xs font-medium text-white">
        {p.caption}
      </figcaption>
    </figure>
  );
}

/** Personal band. `full` shows the whole garden grid (About); default is a compact strip (home). */
export function OffTheClock({ full = false }: { full?: boolean }) {
  const photos = full ? GARDEN : GARDEN.slice(0, 6);
  return (
    <section id="off-the-clock" className={full ? "" : "py-20 md:py-24"}>
      <div className={full ? "" : "container-site"}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono">Off the clock</p>
            <h2 className="text-h2 mt-3">I grow things, then I measure them.</h2>
            <p className="mt-5 leading-relaxed text-ink-muted">
              Most of my side projects started in the backyard in Renton: a garden that keeps outgrowing its plan, a
              window antenna listening for planes, a microphone listening for birds. I&apos;d rather build the tool than
              wonder what flew over.
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group flex items-baseline justify-between gap-3 py-3">
                    <span>
                      <span className="font-semibold">{l.text}</span>
                      <span className="block text-sm text-ink-muted">{l.sub}</span>
                    </span>
                    <span aria-hidden className="text-accent transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <figure className="relative mb-3 aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2 sm:aspect-[16/9]">
              <Image
                src="/photos/life/aurora.webp"
                alt="Green and purple aurora over Mukilteo Lighthouse and the keeper's house at night, May 2024"
                fill
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 tag !border-transparent !bg-black/55 !text-white">
                Aurora over Mukilteo Lighthouse · May 2024
              </figcaption>
            </figure>
            <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${full ? "lg:grid-cols-4" : ""}`}>
              {photos.map((p, i) => (
                <Tile key={p.src} p={p} className={`aspect-[3/4] ${!full && i > 3 ? "hidden sm:block" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
