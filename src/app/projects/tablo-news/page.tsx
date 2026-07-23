import type { Metadata } from "next";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Tablo News",
  description:
    "An AI-powered local news search and archive for Seattle TV broadcasts. Whisper, ChromaDB, and RAG queries.",
  alternates: { canonical: "https://spenc.ee/projects/tablo-news" },
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-hairline border-t border-hairline">
      {items.map((item) => (
        <li key={item} className="py-3 text-sm leading-relaxed text-ink-muted">
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
        <p className="label-mono mb-6">Overview</p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
          An automated pipeline that records Seattle local news from a Tablo DVR, transcribes with WhisperX,
          identifies speakers via voice fingerprinting, summarizes with Ollama, and indexes in ChromaDB for
          semantic search.
        </p>
      </div>

      <div>
        <p className="label-mono mb-6">Frontend</p>
        <p className="label-mono mb-6">Next.js 16 &middot; React 19 &middot; TypeScript &middot; Cloudinary</p>
        <FeatureList
          items={[
            "Featured story display with AI-generated summaries",
            "Paginated broadcast archive grouped by date",
            "Natural language search via RAG-powered semantic search",
            "Speaker filtering: query by specific anchors/reporters",
            "Full transcript viewer with timestamps and speaker ID",
            "Broadcast screenshots with AI-scored captions",
            "Speaker analytics: speaking time and segment counts",
            "Coverage stats dashboard",
          ]}
        />
      </div>

      <div>
        <p className="label-mono mb-6">Backend Pipeline</p>
        <p className="label-mono mb-6">Python &middot; WhisperX &middot; ChromaDB &middot; Ollama &middot; SQLite / Turso</p>
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

      <div className="border border-hairline p-5">
        <p className="text-sm leading-relaxed text-ink-muted">
          <span className="font-semibold text-ink">Coverage:</span> KING 5 News &middot; KOMO 4 News &middot; KIRO
          7 News &middot; Local Programming
        </p>
      </div>
    </ProjectLayout>
  );
}
