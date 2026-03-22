"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ScreenshotGalleryProps {
  images: string[];
  alt: string;
}

export function ScreenshotGallery({ images, alt }: ScreenshotGalleryProps) {
  const [selected, setSelected] = useState<string | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setSelected(src)}
            className="relative aspect-video overflow-hidden rounded-lg border transition-opacity hover:opacity-90"
            style={{ borderColor: "var(--border)" }}
          >
            <Image
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-4 top-4 text-white/70 transition-colors hover:text-white"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div className="relative max-h-[85vh] max-w-[90vw]">
            <Image
              src={selected}
              alt={alt}
              width={1200}
              height={800}
              className="rounded-lg object-contain"
              style={{ maxHeight: "85vh", width: "auto" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
