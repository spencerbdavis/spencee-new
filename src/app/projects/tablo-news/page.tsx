import type { Metadata } from "next";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis — Tablo News",
  description:
    "An AI-powered local news search and archive for Seattle TV broadcasts — Whisper, ChromaDB, and RAG queries.",
  alternates: { canonical: "https://spenc.ee/projects/tablo-news" },
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.6, color: "var(--muted-foreground)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--border)", marginTop: 8, flexShrink: 0 }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TabloNewsPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "tablo-news")!;

  return (
    <ProjectLayout project={project}>
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          Overview
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: 640 }}>
          An automated pipeline that records Seattle local news from a Tablo
          DVR, transcribes with WhisperX, identifies speakers via voice
          fingerprinting, summarizes with Ollama, and indexes in ChromaDB for
          semantic search.
        </p>
      </div>

      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          Frontend
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)", marginBottom: 24 }}>
          Next.js 16 &middot; React 19 &middot; TypeScript &middot; Cloudinary
        </p>
        <FeatureList
          items={[
            "Featured story display with AI-generated summaries",
            "Paginated broadcast archive grouped by date",
            "Natural language search via RAG-powered semantic search",
            "Speaker filtering — query by specific anchors/reporters",
            "Full transcript viewer with timestamps and speaker ID",
            "Broadcast screenshots with AI-scored captions",
            "Speaker analytics: speaking time and segment counts",
            "Coverage stats dashboard",
          ]}
        />
      </div>

      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          Backend Pipeline
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)", marginBottom: 24 }}>
          Python &middot; WhisperX &middot; ChromaDB &middot; Ollama &middot;
          SQLite / Turso
        </p>
        <FeatureList
          items={[
            "WhisperX transcription pipeline for broadcast audio",
            "ChromaDB vector database for semantic indexing",
            "Ollama for local LLM summarization",
            "Voice fingerprint database for speaker identification",
            "SQLite (dev) / Turso (production) for structured data",
          ]}
        />
      </div>

      <div style={{ borderRadius: 12, padding: "16px 20px", backgroundColor: "var(--muted)" }}>
        <p style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
          <span style={{ fontWeight: 500, color: "var(--foreground)" }}>
            Coverage:
          </span>{" "}
          KING 5 News &middot; KOMO 4 News &middot; KIRO 7 News &middot; Local
          Programming
        </p>
      </div>
    </ProjectLayout>
  );
}
