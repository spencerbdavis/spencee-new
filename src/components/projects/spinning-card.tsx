"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function SpinningCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateY, setRotateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoSpin, setAutoSpin] = useState(true);
  const lastX = useRef(0);
  const animRef = useRef(0);
  const prefersReducedMotion = useRef(false);

  // Check reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    if (mq.matches) setAutoSpin(false);
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
      if (e.matches) setAutoSpin(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Auto-spin animation
  useEffect(() => {
    if (!autoSpin || isDragging) return;
    let angle = rotateY;
    const spin = () => {
      angle += 0.4;
      setRotateY(angle);
      animRef.current = requestAnimationFrame(spin);
    };
    animRef.current = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(animRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSpin, isDragging]);

  // Mouse drag
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setAutoSpin(false);
    lastX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastX.current;
    setRotateY((prev) => prev + dx * 0.5);
    lastX.current = e.clientX;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    // Resume auto-spin after 3 seconds if not reduced motion
    if (!prefersReducedMotion.current) {
      setTimeout(() => setAutoSpin(true), 3000);
    }
  };

  // Determine which side is showing
  const normalizedAngle = ((rotateY % 360) + 360) % 360;
  const showingBack = normalizedAngle > 90 && normalizedAngle < 270;

  return (
    <div
      className="w-full max-w-[30rem] select-none [perspective:800px]"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative aspect-[3.5/2] w-full [transform-style:preserve-3d]"
        style={{
          transform: `rotateY(${rotateY}deg)`,
          transition: isDragging ? "none" : undefined,
        }}
      >
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden border border-hairline [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
          <Image
            src="/screenshots/business-card/card-1.webp"
            alt="Business card front"
            fill
            sizes="480px"
            className="object-cover"
            priority
          />
        </div>

        {/* Back */}
        <div className="absolute inset-0 overflow-hidden border border-hairline [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src="/screenshots/business-card/card-2.webp"
            alt="Business card back with QR code"
            fill
            sizes="480px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Hint text */}
      <p
        className={`label-mono mt-4 text-center transition-opacity duration-100 ${
          showingBack ? "opacity-70" : "opacity-50"
        }`}
      >
        {isDragging ? "Drag to spin" : showingBack ? "QR code side" : "Drag to flip"}
      </p>
    </div>
  );
}
