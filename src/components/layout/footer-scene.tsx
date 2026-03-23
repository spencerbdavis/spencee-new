"use client";

import { useEffect, useRef, useState } from "react";
import { useWeather } from "@/components/providers/weather-provider";

export function FooterScene() {
  const { weather, rainEnabled } = useWeather();
  const isRaining = rainEnabled;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hornActive, setHornActive] = useState(false);
  const [coffeeActive, setCoffeeActive] = useState(false);

  const handleCoffeeClick = () => {
    if (coffeeActive) return;
    setCoffeeActive(true);
    setTimeout(() => setCoffeeActive(false), 2500);
  };

  const handleHornClick = () => {
    if (hornActive) return;
    setHornActive(true);
    setTimeout(() => setHornActive(false), 3000);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        height: 320,
        overflow: "hidden",
        marginLeft: -32,
        marginRight: -32,
        marginBottom: 0,
      }}
    >
      {/* ===== Full scene background — sky to water ===== */}
      <svg
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMax slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      >
        <defs>
          {/* Sky — light mode: soft blue; dark mode via CSS media query isn't possible in SVG,
              so we use class-based approach with two gradient sets */}
          <linearGradient id="sky-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C5D5E5" />
            <stop offset="40%" stopColor="#D0DDEA" />
            <stop offset="70%" stopColor="#D6E2EC" />
            <stop offset="100%" stopColor="#B4C8D8" />
          </linearGradient>
          <linearGradient id="sky-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#141E22" />
            <stop offset="40%" stopColor="#182630" />
            <stop offset="70%" stopColor="#1C2E3A" />
            <stop offset="100%" stopColor="#14222C" />
          </linearGradient>
          {/* Water */}
          <linearGradient id="water-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6898B8" />
            <stop offset="30%" stopColor="#5888AA" />
            <stop offset="100%" stopColor="#48789A" />
          </linearGradient>
          <linearGradient id="water-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A3848" />
            <stop offset="30%" stopColor="#152E3C" />
            <stop offset="100%" stopColor="#102430" />
          </linearGradient>
          {/* Mountain body */}
          <linearGradient id="mtn-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8898B0" />
            <stop offset="100%" stopColor="#788CA4" />
          </linearGradient>
          <linearGradient id="mtn-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A3A48" />
            <stop offset="100%" stopColor="#223040" />
          </linearGradient>
          {/* Snow */}
          <linearGradient id="snow-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EEF2F6" />
            <stop offset="100%" stopColor="#D5DFEB" />
          </linearGradient>
          <linearGradient id="snow-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7A8EA0" />
            <stop offset="100%" stopColor="#5A6E80" />
          </linearGradient>
          {/* Use CSS media to swap — SVG supports this via <style> */}
          <style>{`
            .sky-fill { fill: url(#sky-light); }
            .water-fill { fill: url(#water-light); }
            .mtn-fill { fill: url(#mtn-light); }
            .snow-fill { fill: url(#snow-light); }
            .glacier-fill { fill: #D8E5EE; }
            .snowline-fill { fill: #CCDBEA; }
            .shadow-fill { fill: #68809A; }
            .haze-fill { fill: #8EA0B0; }
            .ridge-fill { fill: #3A5860; }
            .shimmer { stroke: #88B5D0; }
            .wave-overlay { fill: #5888AA; }
            .wave-overlay-2 { fill: #48789A; }
            .fog-wisp { background: #C5D5E5; }
            @media (prefers-color-scheme: dark) {
              .sky-fill { fill: url(#sky-dark); }
              .water-fill { fill: url(#water-dark); }
              .mtn-fill { fill: url(#mtn-dark); }
              .snow-fill { fill: url(#snow-dark); }
              .glacier-fill { fill: #3A5068; }
              .snowline-fill { fill: #304560; }
              .shadow-fill { fill: #18283A; }
              .haze-fill { fill: #222E38; }
              .ridge-fill { fill: #1A2E30; }
              .shimmer { stroke: #2A5070; }
              .wave-overlay { fill: #152E3C; }
              .wave-overlay-2 { fill: #102430; }
              .fog-wisp { background: #1A2830; }
            }
          `}</style>
        </defs>

        {/* Sky */}
        <rect width="1200" height="320" className="sky-fill" />

        {/* ===== Mt. Rainier — wide stratovolcano, right of center ===== */}
        {/* Mountain body — very wide gentle slopes like real Rainier seen from distance */}
        <path
          d="M300,225 Q400,210 460,190 Q500,175 540,155 Q570,140 590,125 Q600,115 610,108 Q620,102 630,100 Q640,98 650,100 Q660,102 670,108 Q680,115 690,125 Q710,140 740,155 Q780,175 820,190 Q880,210 980,225 Z"
          className="mtn-fill"
        />
        {/* Left face — slightly darker for depth */}
        <path
          d="M300,225 Q400,210 460,190 Q500,175 540,155 Q570,140 590,125 Q600,115 610,108 Q620,102 630,100 Q640,99 640,100 Q625,110 605,125 Q580,145 550,165 Q510,190 450,210 Q380,222 300,225 Z"
          className="shadow-fill"
          opacity="0.2"
        />
        {/* Snow cap — smooth glaciated summit, not jagged */}
        <path
          d="M600,118 Q610,110 620,104 Q630,100 640,98 Q650,100 660,104 Q670,110 680,118 Q670,122 660,116 Q650,120 640,117 Q630,120 620,116 Q610,122 600,118 Z"
          className="snow-fill"
        />
        {/* Glacier tongues — gentle curves */}
        <path d="M615,120 Q612,132 618,128 Q620,138 625,125" className="glacier-fill" opacity="0.5" />
        <path d="M660,118 Q663,130 658,126 Q656,135 652,122" className="glacier-fill" opacity="0.4" />
        {/* Snow line variation */}
        <path d="M595,125 Q610,118 625,112 Q640,108 655,112 Q670,118 685,125" className="snowline-fill" opacity="0.25" />

        {/* ===== Distant hazy hills — smooth rolling ===== */}
        <path
          d="M0,222 Q100,214 200,218 Q350,210 500,215 Q650,208 800,213 Q950,206 1100,212 L1200,216 L1200,228 L0,228 Z"
          className="haze-fill"
          opacity="0.35"
        />

        {/* ===== Foreground island ridge — smooth, dark, natural ===== */}
        <path
          d="M0,225 Q60,220 120,222 Q180,217 240,220 Q300,215 360,218 Q420,213 480,216 Q540,211 600,214 Q660,210 720,213 Q780,208 840,212 Q900,215 960,211 Q1020,214 1080,210 Q1140,215 1200,212 L1200,228 L0,228 Z"
          className="ridge-fill"
          opacity="0.65"
        />

        {/* Water — solid with slight shimmer lines */}
        <rect x="0" y="225" width="1200" height="95" className="water-fill" />
        {/* Water shimmer highlights */}
        <line x1="50" y1="245" x2="120" y2="245" className="shimmer" strokeWidth="0.5" opacity="0.3" />
        <line x1="200" y1="255" x2="290" y2="255" className="shimmer" strokeWidth="0.4" opacity="0.25" />
        <line x1="400" y1="248" x2="480" y2="248" className="shimmer" strokeWidth="0.5" opacity="0.3" />
        <line x1="600" y1="260" x2="700" y2="260" className="shimmer" strokeWidth="0.4" opacity="0.2" />
        <line x1="800" y1="250" x2="880" y2="250" className="shimmer" strokeWidth="0.5" opacity="0.25" />
        <line x1="950" y1="265" x2="1050" y2="265" className="shimmer" strokeWidth="0.4" opacity="0.2" />
        <line x1="100" y1="275" x2="200" y2="275" className="shimmer" strokeWidth="0.3" opacity="0.15" />
        <line x1="500" y1="280" x2="620" y2="280" className="shimmer" strokeWidth="0.3" opacity="0.15" />

        {/* Mountain reflection in water — very subtle */}
        <path
          d="M480,230 L520,245 L560,255 L600,260 L640,255 L680,245 L720,230"
          fill="none" stroke="#7A9AB5" strokeWidth="0.8" opacity="0.1"
        />
      </svg>

      {/* ===== Animated wave overlays ===== */}
      <div style={{ position: "absolute", bottom: 0, left: "-5%", right: "-5%", height: 95, overflow: "hidden", zIndex: 1 }}>
        <svg
          viewBox="0 0 2400 100"
          preserveAspectRatio="none"
          style={{
            position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%",
            animationName: visible ? "wave-drift-1" : "none",
            animationDuration: isRaining ? "7s" : "12s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <path d="M0,40 C150,52 300,28 600,40 C750,48 900,32 1200,40 C1350,52 1500,28 1800,40 C1950,48 2100,32 2400,40 L2400,100 L0,100 Z" className="wave-overlay" opacity="0.12" />
        </svg>
        <svg
          viewBox="0 0 2400 100"
          preserveAspectRatio="none"
          style={{
            position: "absolute", bottom: 0, left: 0, width: "200%", height: "80%",
            animationName: visible ? "wave-drift-2" : "none",
            animationDuration: isRaining ? "5s" : "9s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <path d="M0,45 C200,32 400,55 600,42 C800,30 1000,50 1200,45 C1400,32 1600,55 1800,42 C2000,30 2200,50 2400,45 L2400,100 L0,100 Z" className="wave-overlay-2" opacity="0.15" />
        </svg>
      </div>

      {/* ===== Fog wisps ===== */}
      <div
        style={{
          position: "absolute", top: 60, left: "-8%", width: "55%", height: 30,
          borderRadius: "50%", background: "var(--fog-color)", opacity: 0.35, filter: "blur(16px)",
          zIndex: 2, pointerEvents: "none",
          animationName: visible ? "fog-drift-1" : "none",
          animationDuration: "25s", animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite", animationDirection: "alternate",
        }}
      />
      <div
        style={{
          position: "absolute", top: 75, right: "-6%", width: "45%", height: 25,
          borderRadius: "50%", background: "var(--fog-color)", opacity: 0.25, filter: "blur(14px)",
          zIndex: 2, pointerEvents: "none",
          animationName: visible ? "fog-drift-2" : "none",
          animationDuration: "20s", animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite", animationDirection: "alternate",
        }}
      />

      {/* ===== Rain ===== */}
      {isRaining && (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 2 }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${(i / 24) * 100 + Math.random() * 4}%`,
                top: -10, width: 1, height: 14 + Math.random() * 8,
                background: "var(--rain-color)", opacity: 0.2 + Math.random() * 0.1,
                animationName: visible ? "rain-fall" : "none",
                animationDuration: `${0.5 + Math.random() * 0.4}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationDelay: `${Math.random() * 2}s`,
                transform: "rotate(8deg)",
              }}
            />
          ))}
        </div>
      )}

      {/* ===== Ferry ===== */}
      <div
        style={{
          position: "absolute", bottom: 52, zIndex: 4,
          animationName: visible ? "ferry-cross" : "none",
          animationDuration: "50s", animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        <div onClick={handleHornClick} style={{ position: "relative", cursor: "pointer" }} title="Click for fog horn!">
          <svg width="150" height="56" viewBox="0 0 150 56" fill="none">
            {/* Hull — dark navy-green like real WSF */}
            <path d="M3,40 L16,50 L134,50 L147,40 L144,38 L6,38 Z" fill="#1B4332" />
            <path d="M16,48 L134,48 L138,45 L12,45 Z" fill="#0E2E1F" />
            {/* Car deck openings */}
            <rect x="6" y="38" width="16" height="10" rx="1" fill="#0E2E1F" opacity="0.8" />
            <rect x="8" y="39.5" width="12" height="7" rx="0.5" fill="#071810" opacity="0.6" />
            <rect x="128" y="38" width="16" height="10" rx="1" fill="#0E2E1F" opacity="0.8" />
            <rect x="130" y="39.5" width="12" height="7" rx="0.5" fill="#071810" opacity="0.6" />
            {/* Life preservers */}
            <circle cx="126" cy="41" r="2.2" fill="#E85D35" />
            <circle cx="24" cy="41" r="2.2" fill="#E85D35" />
            {/* Main deck — crisp white */}
            <rect x="6" y="26" width="138" height="12" rx="1.5" fill="#F5F5F0" />
            {/* Main windows */}
            {[14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126].map((x) => (
              <rect key={`m${x}`} x={x} y="28" width="5" height="6.5" rx="0.5" fill="#2C4050" opacity="0.55" />
            ))}
            {/* Upper deck */}
            <rect x="16" y="16" width="118" height="10" rx="1.5" fill="#F5F5F0" />
            {[20,27,34,41,48,55,62,69,76,83,90,97,104,111,118,125].map((x) => (
              <rect key={`u${x}`} x={x} y="18" width="4.5" height="5" rx="0.5" fill="#2C4050" opacity="0.4" />
            ))}
            {/* Green roof */}
            <rect x="15" y="14" width="120" height="3" rx="1" fill="#1B4332" />
            {/* Wheelhouses */}
            <rect x="22" y="6" width="26" height="8" rx="1" fill="#F5F5F0" />
            <rect x="21" y="4" width="28" height="3" rx="0.8" fill="#1B4332" />
            <rect x="24" y="7.5" width="22" height="4.5" rx="0.5" fill="#6A9BB5" opacity="0.5" />
            <rect x="90" y="6" width="34" height="8" rx="1" fill="#F5F5F0" />
            <rect x="89" y="4" width="36" height="3" rx="0.8" fill="#1B4332" />
            <rect x="92" y="7.5" width="30" height="4.5" rx="0.5" fill="#6A9BB5" opacity="0.5" />
            <text x="107" y="5.8" textAnchor="middle" fontSize="3" fill="#F5F5F0" fontFamily="var(--font-mono)" fontWeight="600">HYAK</text>
            {/* Masts */}
            <rect x="35" y="0" width="1.2" height="5" fill="#8A9AA5" />
            <rect x="108" y="0" width="1.2" height="5" fill="#8A9AA5" />
            <rect x="33" y="1.5" width="5.5" height="0.6" fill="#8A9AA5" />
            <rect x="106" y="1.5" width="5.5" height="0.6" fill="#8A9AA5" />
            <line x1="16" y1="15" x2="134" y2="15" stroke="#8A9AA5" strokeWidth="0.4" />
            {/* Wake */}
            <path d="M3,48 Q10,44 18,48" className="shimmer" strokeWidth="0.8" fill="none" opacity="0.4" />
            <path d="M0,50 Q8,45 16,50" className="shimmer" strokeWidth="0.5" fill="none" opacity="0.3" />
          </svg>

          {/* Sound waves on horn */}
          {hornActive && (
            <>
              {[0,1,2].map((i) => (
                <div key={i} style={{
                  position: "absolute", top: -2 + i*3, left: 28 + i*6, pointerEvents: "none",
                  animationName: "sound-wave", animationDuration: "1.5s",
                  animationTimingFunction: "ease-out", animationIterationCount: "2",
                  animationDelay: `${i*0.15}s`, animationFillMode: "both",
                }}>
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <path d={`M2,14 Q${6+i*2},${9-i*2} 2,4`} stroke="#F5F5F0" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity={0.6 - i*0.15} />
                  </svg>
                </div>
              ))}
            </>
          )}

          {/* BWAAAAH */}
          {hornActive && (
            <div style={{
              position: "absolute", top: -36, left: "30%", transform: "translateX(-50%)",
              whiteSpace: "nowrap", animationName: "horn-blast", animationDuration: "2.8s",
              animationTimingFunction: "ease-out", animationFillMode: "forwards",
            }}>
              <p style={{ fontSize: 18, fontWeight: 800, fontStyle: "italic", color: "#F5F5F0", letterSpacing: "0.2em", textTransform: "uppercase", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
                BWAAAAH!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ===== Go Kraken! ===== */}
      {hornActive && (
        <div style={{
          position: "absolute", top: 30, left: "50%", transform: "translateX(-50%)", zIndex: 10,
          animationName: "kraken-pop", animationDuration: "2.5s",
          animationTimingFunction: "ease-out", animationFillMode: "forwards",
          animationDelay: "0.6s", opacity: 0,
        }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: "#F5F5F0", whiteSpace: "nowrap", letterSpacing: "-0.02em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
            🦑 Go Kraken!
          </p>
        </div>
      )}

      {/* ===== Coffee popup ===== */}
      {coffeeActive && (
        <div style={{
          position: "absolute", bottom: 75, left: "50%", transform: "translateX(-50%)", zIndex: 10,
          animationName: "kraken-pop", animationDuration: "2.2s",
          animationTimingFunction: "ease-out", animationFillMode: "forwards",
        }}>
          <p style={{ fontSize: 20, fontWeight: 700, color: "#F5F5F0", whiteSpace: "nowrap", textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}>
            ☕ ...and coffee
          </p>
        </div>
      )}

      {/* ===== "Made with love in Seattle" ===== */}
      <div style={{ position: "absolute", bottom: 16, left: 0, right: 0, textAlign: "center", zIndex: 5 }}>
        <p style={{ fontSize: 13, color: "#F5F5F0", letterSpacing: "0.02em", textShadow: "0 1px 4px rgba(0,0,0,0.25)" }}>
          Made with{" "}
          <span onClick={handleCoffeeClick} style={{ color: "#E8927C", cursor: "pointer" }}>love</span>{" "}
          in{" "}
          <span style={{ color: "#8DDBC8" }}>Seattle</span>
        </p>
      </div>
    </div>
  );
}
