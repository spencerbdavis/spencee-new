import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TechPills } from "@/components/projects/tech-pills";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Creative Work — Print, Signage & Photography",
  description:
    "Large-format print and signage design (window clings, A-boards, yard signs) in Adobe Illustrator and Photoshop, plus royalty-free COVID vaccine photography used by news outlets and research institutions.",
  alternates: { canonical: "https://spenc.ee/projects/creative" },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
      {children}
    </p>
  );
}

function ImageGrid({ images, alt }: { images: { src: string; caption?: string }[]; alt: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
      {images.map((img, i) => (
        <div key={img.src} style={{ position: "relative", borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
          <Image
            src={img.src}
            alt={`${alt} ${i + 1}`}
            width={600}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          {img.caption && (
            <p style={{ fontSize: 11, color: "var(--muted-foreground)", padding: "8px 12px", fontStyle: "italic" }}>
              {img.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CreativePage() {
  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "120px 32px 128px" }}>
      <Link
        href="/projects"
        className="nav-link"
        style={{ fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}
      >
        <ArrowLeft size={14} /> All Projects
      </Link>

      <div style={{ marginTop: 48 }}>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "var(--foreground)",
          }}
        >
          Creative Work
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
          Large-format print and signage design alongside photography and
          branding work. Adobe Illustrator and Photoshop, applied to real
          properties across Seattle.
        </p>
      </div>

      <div style={{ marginTop: 72, display: "flex", flexDirection: "column", gap: 80 }}>
        {/* ===== Print & Signage Design ===== */}
        <section>
          <SectionLabel>Print & Signage Design</SectionLabel>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Window Clings, A-Boards & Yard Signs
          </h2>
          <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 4 }}>
            Ongoing &middot; Bonavista Property Management portfolio
          </p>

          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginTop: 20 }}>
            Large-format print design for the 60+ property portfolio: window
            clings, A-board sandwich signs, yard signs, leasing banners, and
            digital ad creative. Designed in Adobe Illustrator and Photoshop,
            prepped for print with proper bleeds, color profiles, and
            production-ready vector files.
          </p>

          <div style={{ marginTop: 28 }}>
            <TechPills
              items={[
                "Adobe Illustrator",
                "Adobe Photoshop",
                "Window Clings",
                "A-Boards",
                "Yard Signs",
                "Large-Format Print",
                "Brand Identity",
              ]}
            />
          </div>

          <div style={{ marginTop: 32 }}>
            <ImageGrid
              alt="Print and signage design"
              images={[
                { src: "/screenshots/creative/print/fremont-village-book-a-tour.png", caption: "Fremont Village — Book a Tour window cling" },
                { src: "/screenshots/creative/print/ondine-book-a-tour.png", caption: "Ondine Eastlake — Book a Tour window cling" },
                { src: "/screenshots/creative/print/ondine-fremont-aboards.png", caption: "Ondine & Fremont Village — A-board / banner set" },
                { src: "/screenshots/creative/print/5902-ballard-aboard.png", caption: "5902 Ballard — Studios A-board" },
                { src: "/screenshots/creative/print/509-1st-aboard.png", caption: "509 1st — Now Leasing A-board" },
                { src: "/screenshots/creative/print/alt-capitol-hill-banners.png", caption: "Alt Capitol Hill — banner system" },
                { src: "/screenshots/creative/print/509-1st-month-free.png", caption: "509 1st — 1 Month Free digital ad" },
                { src: "/screenshots/creative/print/no-dumping-sign.png", caption: "No Dumping — High-Report Zone yard sign" },
              ]}
            />
          </div>
        </section>

        {/* ===== COVID Vaccine Vial Photos ===== */}
        <section>
          <SectionLabel>Photography</SectionLabel>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            COVID Vaccine Vial Photos
          </h2>
          <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 4 }}>
            2021 &middot; COVID-19 Contact Tracer, Department of Health
          </p>

          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginTop: 20 }}>
            As a COVID-19 Contact Tracer, I was tasked with creating a presentation outlining the differences between each vaccine type. I took an expired Xylocaine vial, created labels for each vaccine, and photographed them, left hand holding the vial, right hand on the shutter.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginTop: 12 }}>
            I released the photos royalty-free on{" "}
            <a
              href="https://pixabay.com/users/spencerbdavis1-21090082/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)", textDecoration: "underline", textDecorationThickness: 1, textUnderlineOffset: 3 }}
            >
              Pixabay
            </a>{" "}
            and Unsplash. They were used in news articles and research papers, including by the University of Arizona and the London School of Hygiene & Tropical Medicine. One image was named a Pixabay Editor&apos;s Choice.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 28, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                182K
              </p>
              <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Views on Pixabay</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                126K
              </p>
              <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Downloads</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                146
              </p>
              <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Likes</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                1
              </p>
              <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Editor&apos;s Choice</p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <TechPills items={["Photography", "Pixabay", "Unsplash", "Royalty-Free"]} />
          </div>

          <div style={{ marginTop: 32 }}>
            <ImageGrid
              alt="COVID vaccine vial"
              images={[
                { src: "/screenshots/creative/vaccine-pixabay.png", caption: "Pixabay portfolio: 182K views, 126K downloads" },
                { src: "/screenshots/creative/vaccine-london.png", caption: "London School of Hygiene & Tropical Medicine" },
                { src: "/screenshots/creative/vaccine-article-1.png", caption: "Vaccine inequity article" },
                { src: "/screenshots/creative/vaccine-article-2.png", caption: "Viral Vector Vaccine article" },
                { src: "/screenshots/creative/vaccine-article-3.png", caption: "Cancer patients & COVID vaccine" },
              ]}
            />
          </div>
        </section>

        {/* ===== Ingallina's Box Lunch ===== */}
        <section>
          <SectionLabel>Graphic Design</SectionLabel>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Ingallina&apos;s Box Lunch
          </h2>
          <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 4 }}>
            2019 to 2020 &middot; Social Media & Promotional Graphics
          </p>

          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginTop: 20 }}>
            Developed graphic design elements for Ingallina&apos;s Box Lunch including social media and promotional graphics. Transformed initial ideas into marketable campaigns through visually appealing designs, establishing a cohesive visual identity across all marketing platforms.
          </p>

          <div style={{ marginTop: 28 }}>
            <TechPills items={["Graphic Design", "Social Media", "Brand Identity", "Marketing"]} />
          </div>

          <div style={{ marginTop: 32 }}>
            <ImageGrid
              alt="Ingallina's Box Lunch"
              images={[
                { src: "/screenshots/creative/ingallinas-1.png" },
                { src: "/screenshots/creative/ingallinas-2.png" },
                { src: "/screenshots/creative/ingallinas-3.png" },
                { src: "/screenshots/creative/ingallinas-4.png" },
                { src: "/screenshots/creative/ingallinas-5.png" },
                { src: "/screenshots/creative/ingallinas-6.png" },
              ]}
            />
          </div>
        </section>

        {/* ===== Risdon Middle School Logo ===== */}
        <section>
          <SectionLabel>Branding</SectionLabel>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Risdon Middle School
          </h2>
          <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 4 }}>
            2018 &middot; Logo Design &middot; Renton, WA
          </p>

          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginTop: 20 }}>
            Designed the logo for Risdon Middle School, a new school in Renton, WA. Through consultation with district staff and future administration, created a wolf-motif logo embodying the school&apos;s values of integrity, collaboration, and resilience. The logo was implemented across signage, uniforms, digital media, and merchandise.
          </p>

          <div style={{ marginTop: 28 }}>
            <TechPills items={["Logo Design", "Branding", "Print", "Signage"]} />
          </div>

          <div style={{ marginTop: 32 }}>
            <ImageGrid
              alt="Risdon Middle School"
              images={[
                { src: "/screenshots/creative/risdon-full-color.png", caption: "Full color logo" },
                { src: "/screenshots/creative/risdon-grayscale.png", caption: "Grayscale variant" },
                { src: "/screenshots/creative/risdon-application.png", caption: "Logo application" },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
