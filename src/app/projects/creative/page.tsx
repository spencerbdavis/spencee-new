import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TechPills } from "@/components/projects/tech-pills";

export const metadata: Metadata = {
  title: "Spencer D'Avis — Creative Work",
  description:
    "Graphic design, photography, and branding work — including vaccine photos with 5.8M views and 80K downloads.",
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
          Graphic design, photography, and branding from before the dev era — proof that the visual eye came first.
        </p>
      </div>

      <div style={{ marginTop: 72, display: "flex", flexDirection: "column", gap: 80 }}>
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
            As a COVID-19 Contact Tracer, I was tasked with creating a presentation outlining the differences between each vaccine type. I took an expired Xylocaine vial, created labels for each vaccine, and photographed them — left hand holding the vial, right hand on the shutter.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginTop: 12 }}>
            I released the photos royalty-free on Pixabay and Unsplash. They were used in news articles and research papers, including by the University of Arizona and the London School of Hygiene & Tropical Medicine.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 28, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                5.8M
              </p>
              <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Views</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                80K+
              </p>
              <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Downloads</p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <TechPills items={["Photography", "Pixabay", "Unsplash", "Royalty-Free"]} />
          </div>

          <div style={{ marginTop: 32 }}>
            <ImageGrid
              alt="COVID vaccine vial"
              images={[
                { src: "/screenshots/creative/vaccine-pixabay.png", caption: "Pixabay stats — 5.8M views" },
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
            2019–2020 &middot; Social Media & Promotional Graphics
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
