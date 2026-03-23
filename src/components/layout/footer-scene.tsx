"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useWeather } from "@/components/providers/weather-provider";

/** Returns a sky palette based on the user's local hour */
function getSkyPalette(hour: number) {
  // Night: 9pm – 5am
  if (hour >= 21 || hour < 5) {
    return {
      label: "night",
      light: ["#1A2238", "#1E2D48", "#243858", "#1A2844"],
      dark: ["#0A0E18", "#0E1420", "#121C2A", "#0C1218"],
      water: { light: ["#12203A", "#0E1A30", "#0A1428"], dark: ["#080E1A", "#060C16", "#050A12"] },
      shimmer: { light: "#3A5878", dark: "#1A2838" },
      waveA: { light: "#0E1A30", dark: "#060C16" },
      waveB: { light: "#0A1428", dark: "#050A12" },
      fog: { light: "#2A3858", dark: "#101820" },
      text: "#C8D8F0",
      love: "#C88A7A",
      seattle: "#6AACB8",
    };
  }
  // Sunrise: 5am – 8am
  if (hour >= 5 && hour < 8) {
    return {
      label: "sunrise",
      light: ["#2A3050", "#4A3858", "#8A5060", "#D09070"],
      dark: ["#141822", "#22202E", "#3A2030", "#5A3838"],
      water: { light: ["#4A6880", "#3A5870", "#2A4860"], dark: ["#162838", "#12222E", "#0E1C28"] },
      shimmer: { light: "#7A98B0", dark: "#2A4858" },
      waveA: { light: "#3A5870", dark: "#12222E" },
      waveB: { light: "#2A4860", dark: "#0E1C28" },
      fog: { light: "#C0A090", dark: "#2A2028" },
      text: "#F5F0E8",
      love: "#E8927C",
      seattle: "#8DDBC8",
    };
  }
  // Golden hour / sunset: 5pm – 9pm
  if (hour >= 17 && hour < 21) {
    return {
      label: "sunset",
      light: ["#2A3858", "#4A3050", "#9A4840", "#E8985A"],
      dark: ["#141820", "#201828", "#3A1820", "#5A3028"],
      water: { light: ["#4A6078", "#3A5068", "#2A4058"], dark: ["#142028", "#101A22", "#0E161E"] },
      shimmer: { light: "#8A7868", dark: "#2A3040" },
      waveA: { light: "#3A5068", dark: "#101A22" },
      waveB: { light: "#2A4058", dark: "#0E161E" },
      fog: { light: "#D0A888", dark: "#281E1A" },
      text: "#F5F0E8",
      love: "#F0A070",
      seattle: "#7AC8B8",
    };
  }
  // Day: 8am – 5pm
  return {
    label: "day",
    light: ["#C5D5E5", "#D0DDEA", "#D6E2EC", "#B4C8D8"],
    dark: ["#141E22", "#182630", "#1C2E3A", "#14222C"],
    water: { light: ["#6898B8", "#5888AA", "#48789A"], dark: ["#1A3848", "#152E3C", "#102430"] },
    shimmer: { light: "#88B5D0", dark: "#2A5070" },
    waveA: { light: "#5888AA", dark: "#152E3C" },
    waveB: { light: "#48789A", dark: "#102430" },
    fog: { light: "#C5D5E5", dark: "#1A2830" },
    text: "#F5F5F0",
    love: "#E8927C",
    seattle: "#8DDBC8",
  };
}

export function FooterScene() {
  const { rainEnabled } = useWeather();
  const isRaining = rainEnabled;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hornActive, setHornActive] = useState(false);
  const [coffeeActive, setCoffeeActive] = useState(false);
  const [hour, setHour] = useState(() => new Date().getHours());

  const palette = useMemo(() => getSkyPalette(hour), [hour]);

  useEffect(() => {
    // Update hour every 5 minutes
    const id = setInterval(() => setHour(new Date().getHours()), 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

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

  const p = palette;

  return (
    <>
      {/* Gradient fade from page background into sky */}
      <div
        className="footer-fade"
        style={{
          height: 80,
          background: `linear-gradient(to bottom, var(--background), ${p.light[0]})`,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @media (prefers-color-scheme: dark) {
          .footer-fade { background: linear-gradient(to bottom, var(--background), ${p.dark[0]}) !important; }
        }
      `}</style>

      <div
        ref={ref}
        style={{
          position: "relative",
          height: 220,
          overflow: "hidden",
        }}
      >
        {/* ===== Sky + Water ===== */}
        <svg
          viewBox="0 0 1200 220"
          preserveAspectRatio="xMidYMax slice"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
        >
          <defs>
            <linearGradient id="sky-l" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={p.light[0]} />
              <stop offset="35%" stopColor={p.light[1]} />
              <stop offset="65%" stopColor={p.light[2]} />
              <stop offset="100%" stopColor={p.light[3]} />
            </linearGradient>
            <linearGradient id="sky-d" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={p.dark[0]} />
              <stop offset="35%" stopColor={p.dark[1]} />
              <stop offset="65%" stopColor={p.dark[2]} />
              <stop offset="100%" stopColor={p.dark[3]} />
            </linearGradient>
            <linearGradient id="water-l" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={p.water.light[0]} />
              <stop offset="40%" stopColor={p.water.light[1]} />
              <stop offset="100%" stopColor={p.water.light[2]} />
            </linearGradient>
            <linearGradient id="water-d" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={p.water.dark[0]} />
              <stop offset="40%" stopColor={p.water.dark[1]} />
              <stop offset="100%" stopColor={p.water.dark[2]} />
            </linearGradient>
            <style>{`
              .s-sky { fill: url(#sky-l); }
              .s-water { fill: url(#water-l); }
              .s-shimmer { stroke: ${p.shimmer.light}; }
              .s-wave-a { fill: ${p.waveA.light}; }
              .s-wave-b { fill: ${p.waveB.light}; }
              @media (prefers-color-scheme: dark) {
                .s-sky { fill: url(#sky-d); }
                .s-water { fill: url(#water-d); }
                .s-shimmer { stroke: ${p.shimmer.dark}; }
                .s-wave-a { fill: ${p.waveA.dark}; }
                .s-wave-b { fill: ${p.waveB.dark}; }
              }
            `}</style>
          </defs>

          {/* Sky */}
          <rect width="1200" height="220" className="s-sky" />

          {/* Distant hazy treeline */}
          <path
            d="M0,125 Q60,118 120,122 Q200,115 280,120 Q360,113 440,118 Q520,111 600,116 Q680,110 760,115 Q840,108 920,114 Q1000,108 1080,113 Q1140,117 1200,112 L1200,132 L0,132 Z"
            className="s-water"
            opacity="0.25"
          />

          {/* Water */}
          <rect x="0" y="128" width="1200" height="92" className="s-water" />

          {/* Shimmer lines */}
          <line x1="80" y1="185" x2="160" y2="185" className="s-shimmer" strokeWidth="0.5" opacity="0.3" />
          <line x1="280" y1="195" x2="380" y2="195" className="s-shimmer" strokeWidth="0.4" opacity="0.25" />
          <line x1="500" y1="188" x2="590" y2="188" className="s-shimmer" strokeWidth="0.5" opacity="0.3" />
          <line x1="700" y1="200" x2="800" y2="200" className="s-shimmer" strokeWidth="0.4" opacity="0.2" />
          <line x1="900" y1="190" x2="980" y2="190" className="s-shimmer" strokeWidth="0.5" opacity="0.25" />
          <line x1="150" y1="215" x2="260" y2="215" className="s-shimmer" strokeWidth="0.3" opacity="0.15" />
          <line x1="600" y1="222" x2="720" y2="222" className="s-shimmer" strokeWidth="0.3" opacity="0.15" />

          {/* Sun/moon glow */}
          {(p.label === "sunset" || p.label === "sunrise") && (
            <circle cx="600" cy="155" r="60" fill="#F0C880" opacity="0.12" />
          )}
          {p.label === "night" && (
            <circle cx="900" cy="50" r="12" fill="#E8E0D0" opacity="0.2" />
          )}
        </svg>

        {/* ===== Animated wave overlays ===== */}
        <div style={{ position: "absolute", bottom: 0, left: "-5%", right: "-5%", height: 92, overflow: "hidden", zIndex: 1 }}>
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
            <path d="M0,40 C150,52 300,28 600,40 C750,48 900,32 1200,40 C1350,52 1500,28 1800,40 C1950,48 2100,32 2400,40 L2400,100 L0,100 Z" className="s-wave-a" opacity="0.12" />
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
            <path d="M0,45 C200,32 400,55 600,42 C800,30 1000,50 1200,45 C1400,32 1600,55 1800,42 C2000,30 2200,50 2400,45 L2400,100 L0,100 Z" className="s-wave-b" opacity="0.15" />
          </svg>
        </div>

        {/* ===== Fog wisps ===== */}
        <div
          style={{
            position: "absolute", top: 50, left: "-8%", width: "55%", height: 25,
            borderRadius: "50%", background: `var(--fog-color, ${p.fog.light})`, opacity: 0.3, filter: "blur(16px)",
            zIndex: 2, pointerEvents: "none",
            animationName: visible ? "fog-drift-1" : "none",
            animationDuration: "25s", animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite", animationDirection: "alternate",
          }}
        />
        <div
          style={{
            position: "absolute", top: 65, right: "-6%", width: "45%", height: 20,
            borderRadius: "50%", background: `var(--fog-color, ${p.fog.light})`, opacity: 0.2, filter: "blur(14px)",
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
            position: "absolute", bottom: 48, zIndex: 4,
            animationName: visible ? "ferry-cross" : "none",
            animationDuration: "50s", animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <div onClick={handleHornClick} style={{ position: "relative", cursor: "pointer" }} title="Click for fog horn!">
            <svg width="150" height="56" viewBox="0 0 150 56" fill="none">
              {/* Hull */}
              <path d="M3,40 L16,50 L134,50 L147,40 L144,38 L6,38 Z" fill="#1B4332" />
              <path d="M16,48 L134,48 L138,45 L12,45 Z" fill="#0E2E1F" />
              <rect x="6" y="38" width="16" height="10" rx="1" fill="#0E2E1F" opacity="0.8" />
              <rect x="8" y="39.5" width="12" height="7" rx="0.5" fill="#071810" opacity="0.6" />
              <rect x="128" y="38" width="16" height="10" rx="1" fill="#0E2E1F" opacity="0.8" />
              <rect x="130" y="39.5" width="12" height="7" rx="0.5" fill="#071810" opacity="0.6" />
              <circle cx="126" cy="41" r="2.2" fill="#E85D35" />
              <circle cx="24" cy="41" r="2.2" fill="#E85D35" />
              {/* Main deck */}
              <rect x="6" y="26" width="138" height="12" rx="1.5" fill="#F5F5F0" />
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
              <path d="M3,48 Q10,44 18,48" className="s-shimmer" strokeWidth="0.8" fill="none" opacity="0.4" />
              <path d="M0,50 Q8,45 16,50" className="s-shimmer" strokeWidth="0.5" fill="none" opacity="0.3" />
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
                      <path d={`M2,14 Q${6+i*2},${9-i*2} 2,4`} stroke={p.text} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity={0.6 - i*0.15} />
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
                <p style={{ fontSize: 18, fontWeight: 800, fontStyle: "italic", color: p.text, letterSpacing: "0.2em", textTransform: "uppercase", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
                  BWAAAAH!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ===== Go Kraken! ===== */}
        {hornActive && (
          <div style={{
            position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", zIndex: 10,
            animationName: "kraken-pop", animationDuration: "2.5s",
            animationTimingFunction: "ease-out", animationFillMode: "forwards",
            animationDelay: "0.6s", opacity: 0,
          }}>
            <p style={{ fontSize: 24, fontWeight: 800, color: p.text, whiteSpace: "nowrap", letterSpacing: "-0.02em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
              🦑 Go Kraken!
            </p>
          </div>
        )}

        {/* ===== Coffee popup ===== */}
        {coffeeActive && (
          <div style={{
            position: "absolute", bottom: 65, left: "50%", transform: "translateX(-50%)", zIndex: 10,
            animationName: "kraken-pop", animationDuration: "2.2s",
            animationTimingFunction: "ease-out", animationFillMode: "forwards",
          }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: p.text, whiteSpace: "nowrap", textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}>
              ☕ ...and coffee
            </p>
          </div>
        )}

        {/* ===== "Made with love in Seattle" ===== */}
        <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, textAlign: "center", zIndex: 5 }}>
          <p style={{ fontSize: 13, color: p.text, letterSpacing: "0.02em", textShadow: "0 1px 4px rgba(0,0,0,0.25)" }}>
            Made with{" "}
            <span onClick={handleCoffeeClick} style={{ color: p.love, cursor: "pointer" }}>love</span>{" "}
            in{" "}
            <span style={{ color: p.seattle }}>Seattle</span>
          </p>
        </div>
      </div>
    </>
  );
}
