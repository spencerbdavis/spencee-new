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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((src, i) => (
          <button key={src} onClick={() => setSelected(src)} className="group text-left">
            <span className="relative block aspect-video overflow-hidden border border-hairline">
              <Image
                src={src}
                alt={`${alt} screenshot ${i + 1}`}
                fill
                className="object-cover transition-opacity duration-100 group-hover:opacity-80"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </span>
            <span className="label-mono mt-2 block">Fig. {String(i + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-paper/70 transition-colors duration-100 hover:text-paper"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div className="relative max-h-[85vh] max-w-[90vw] border border-hairline">
            <Image
              src={selected}
              alt={alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
