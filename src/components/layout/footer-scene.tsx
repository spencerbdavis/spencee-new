"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useWeather } from "@/components/providers/weather-provider";

/**
 * Sky palettes by time of day.
 * `sky` has 6 stops for a smooth gradient (top → horizon).
 * The last sky stop should blend naturally into the water top.
 */
function getSkyPalette(hour: number) {
  // Night: 9pm – 5am
  if (hour >= 21 || hour < 5) {
    return {
      label: "night" as const,
      sky: {
        light: ["#151D2E", "#182435", "#1C2B3E", "#1F3248", "#233A50", "#284058"],
        dark:  ["#080C14", "#0A1018", "#0C141E", "#0E1822", "#101C28", "#12202E"],
      },
      water: {
        light: ["#243850", "#1E3048", "#182840"],
        dark:  ["#0E1820", "#0C141C", "#0A1018"],
      },
      shimmer: { light: "#3A5878", dark: "#1A2838" },
      fog: { light: "#2A3858", dark: "#101820" },
      text: "#C8D8F0",
      love: "#C88A7A",
      seattle: "#6AACB8",
    };
  }
  // Sunrise: 5am – 8am
  if (hour >= 5 && hour < 8) {
    return {
      label: "sunrise" as const,
      sky: {
        light: ["#354060", "#3E4868", "#4D506E", "#6A5872", "#8A6870", "#B8887A"],
        dark:  ["#141822", "#181C28", "#1E2030", "#282438", "#322838", "#3E2E38"],
      },
      water: {
        light: ["#506878", "#486070", "#405868"],
        dark:  ["#162028", "#121C24", "#0E1820"],
      },
      shimmer: { light: "#7A98B0", dark: "#2A4858" },
      fog: { light: "#A09088", dark: "#2A2028" },
      text: "#F0E8E0",
      love: "#E8927C",
      seattle: "#8DDBC8",
    };
  }
  // Golden hour / sunset: 5pm – 9pm
  if (hour >= 17 && hour < 21) {
    return {
      label: "sunset" as const,
      sky: {
        light: ["#2E3B58", "#384462", "#48506A", "#5E5868", "#785E60", "#A07058"],
        dark:  ["#121620", "#161A26", "#1C1E2E", "#242030", "#2E2228", "#382820"],
      },
      water: {
        light: ["#485E70", "#405668", "#384E60"],
        dark:  ["#141E28", "#121A22", "#10161E"],
      },
      shimmer: { light: "#7A7068", dark: "#2A3040" },
      fog: { light: "#907868", dark: "#221A18" },
      text: "#F0E8E0",
      love: "#E0906A",
      seattle: "#7AC8B8",
    };
  }
  // Day: 8am – 5pm
  return {
    label: "day" as const,
    sky: {
      light: ["#B8CAD8", "#BED0DE", "#C5D5E2", "#CCDAE6", "#D0DDE8", "#B8CCD8"],
      dark:  ["#141E22", "#161F26", "#18222A", "#1A2630", "#1C2A36", "#14222C"],
    },
    water: {
      light: ["#6898B8", "#5888AA", "#48789A"],
      dark:  ["#1A3848", "#152E3C", "#102430"],
    },
    shimmer: { light: "#88B5D0", dark: "#2A5070" },
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

  const p = useMemo(() => getSkyPalette(hour), [hour]);

  useEffect(() => {
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

  return (
    <>
      {/* Long gradient fade from page content into sky — no hard edge */}
      <div
        className="footer-fade"
        style={{
          height: 120,
          background: `linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, ${p.sky.light[0]} 100%)`,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @media (prefers-color-scheme: dark) {
          .footer-fade {
            background: linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, ${p.sky.dark[0]} 100%) !important;
          }
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
            {/* 6-stop sky gradient for smooth blending */}
            <linearGradient id="sky-l" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={p.sky.light[0]} />
              <stop offset="20%" stopColor={p.sky.light[1]} />
              <stop offset="40%" stopColor={p.sky.light[2]} />
              <stop offset="60%" stopColor={p.sky.light[3]} />
              <stop offset="80%" stopColor={p.sky.light[4]} />
              <stop offset="100%" stopColor={p.sky.light[5]} />
            </linearGradient>
            <linearGradient id="sky-d" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={p.sky.dark[0]} />
              <stop offset="20%" stopColor={p.sky.dark[1]} />
              <stop offset="40%" stopColor={p.sky.dark[2]} />
              <stop offset="60%" stopColor={p.sky.dark[3]} />
              <stop offset="80%" stopColor={p.sky.dark[4]} />
              <stop offset="100%" stopColor={p.sky.dark[5]} />
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
            {/* Horizon glow — radial, subtle warmth at sunset/sunrise */}
            <radialGradient id="horizon-glow" cx="50%" cy="100%" r="60%" fx="50%" fy="100%">
              <stop offset="0%" stopColor={
                p.label === "sunset" ? "#C08050" :
                p.label === "sunrise" ? "#C09060" :
                "#889AB0"
              } stopOpacity={p.label === "sunset" || p.label === "sunrise" ? "0.18" : "0"} />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <style>{`
              .s-sky { fill: url(#sky-l); }
              .s-water { fill: url(#water-l); }
              .s-shimmer { stroke: ${p.shimmer.light}; }
              .s-wave-a { fill: ${p.water.light[1]}; }
              .s-wave-b { fill: ${p.water.light[2]}; }
              @media (prefers-color-scheme: dark) {
                .s-sky { fill: url(#sky-d); }
                .s-water { fill: url(#water-d); }
                .s-shimmer { stroke: ${p.shimmer.dark}; }
                .s-wave-a { fill: ${p.water.dark[1]}; }
                .s-wave-b { fill: ${p.water.dark[2]}; }
              }
            `}</style>
          </defs>

          {/* Sky */}
          <rect width="1200" height="130" className="s-sky" />

          {/* Horizon glow overlay — soft radial, not a circle */}
          <rect width="1200" height="130" fill="url(#horizon-glow)" />

          {/* Distant hazy treeline — softens sky→water transition */}
          <path
            d="M0,125 Q60,119 120,122 Q200,116 280,120 Q360,114 440,118 Q520,112 600,116 Q680,111 760,115 Q840,109 920,114 Q1000,109 1080,113 Q1140,117 1200,113 L1200,132 L0,132 Z"
            className="s-water"
            opacity="0.3"
          />

          {/* Water */}
          <rect x="0" y="128" width="1200" height="92" className="s-water" />

          {/* Shimmer highlights on water */}
          <line x1="80" y1="148" x2="150" y2="148" className="s-shimmer" strokeWidth="0.5" opacity="0.25" />
          <line x1="280" y1="158" x2="370" y2="158" className="s-shimmer" strokeWidth="0.4" opacity="0.2" />
          <line x1="500" y1="150" x2="580" y2="150" className="s-shimmer" strokeWidth="0.5" opacity="0.25" />
          <line x1="700" y1="162" x2="790" y2="162" className="s-shimmer" strokeWidth="0.4" opacity="0.18" />
          <line x1="900" y1="152" x2="970" y2="152" className="s-shimmer" strokeWidth="0.5" opacity="0.2" />
          <line x1="150" y1="178" x2="250" y2="178" className="s-shimmer" strokeWidth="0.3" opacity="0.12" />
          <line x1="600" y1="185" x2="710" y2="185" className="s-shimmer" strokeWidth="0.3" opacity="0.12" />

          {/* Moon — night only, small and subtle */}
          {p.label === "night" && (
            <circle cx="880" cy="35" r="8" fill="#D8D0C4" opacity="0.18" />
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
            <path d="M0,40 C150,52 300,28 600,40 C750,48 900,32 1200,40 C1350,52 1500,28 1800,40 C1950,48 2100,32 2400,40 L2400,100 L0,100 Z" className="s-wave-a" opacity="0.1" />
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
            <path d="M0,45 C200,32 400,55 600,42 C800,30 1000,50 1200,45 C1400,32 1600,55 1800,42 C2000,30 2200,50 2400,45 L2400,100 L0,100 Z" className="s-wave-b" opacity="0.12" />
          </svg>
        </div>

        {/* ===== Fog wisps ===== */}
        <div
          style={{
            position: "absolute", top: 40, left: "-8%", width: "55%", height: 22,
            borderRadius: "50%", background: `var(--fog-color, ${p.fog.light})`, opacity: 0.25, filter: "blur(16px)",
            zIndex: 2, pointerEvents: "none",
            animationName: visible ? "fog-drift-1" : "none",
            animationDuration: "25s", animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite", animationDirection: "alternate",
          }}
        />
        <div
          style={{
            position: "absolute", top: 55, right: "-6%", width: "45%", height: 18,
            borderRadius: "50%", background: `var(--fog-color, ${p.fog.light})`, opacity: 0.18, filter: "blur(14px)",
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
            position: "absolute", bottom: 44, zIndex: 4,
            animationName: visible ? "ferry-cross" : "none",
            animationDuration: "50s", animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <div onClick={handleHornClick} style={{ position: "relative", cursor: "pointer" }} title="Click for fog horn!">
            {/* Animated water waves at hull waterline */}
            <div style={{ position: "absolute", bottom: -6, left: -10, right: -10, height: 18, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>
              {/* Wave layer 1 — repeating jagged pattern (first 150 = second 150 for seamless loop) */}
              <svg
                viewBox="0 0 300 18"
                preserveAspectRatio="none"
                style={{
                  position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%",
                  animationName: visible ? "hull-wave" : "none",
                  animationDuration: "4s", animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                }}
              >
                <path d="M0,5 L6,8 L12,4 L20,9 L28,3 L34,7 L42,2 L50,7 L56,4 L64,8 L72,3 L78,7 L86,2 L94,8 L100,4 L108,7 L114,3 L122,8 L130,4 L138,7 L144,3 L150,5 L156,8 L162,4 L170,9 L178,3 L184,7 L192,2 L200,7 L206,4 L214,8 L222,3 L228,7 L236,2 L244,8 L250,4 L258,7 L264,3 L272,8 L280,4 L288,7 L294,3 L300,5 L300,18 L0,18 Z" className="s-wave-a" opacity="0.55" />
              </svg>
              {/* Wave layer 2 — different wave spacing, slower */}
              <svg
                viewBox="0 0 300 18"
                preserveAspectRatio="none"
                style={{
                  position: "absolute", bottom: 0, left: 0, width: "200%", height: "100%",
                  animationName: visible ? "hull-wave" : "none",
                  animationDuration: "5.5s", animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDirection: "reverse",
                }}
              >
                <path d="M0,7 L8,4 L16,9 L26,5 L34,10 L44,4 L52,8 L62,3 L70,8 L78,5 L88,9 L96,4 L106,8 L114,3 L124,9 L132,5 L142,8 L150,7 L158,4 L166,9 L176,5 L184,10 L194,4 L202,8 L212,3 L220,8 L228,5 L238,9 L246,4 L256,8 L264,3 L274,9 L282,5 L292,8 L300,7 L300,18 L0,18 Z" className="s-wave-b" opacity="0.4" />
              </svg>
            </div>
            <div style={{
              animationName: visible ? "ferry-bob" : "none",
              animationDuration: "3s", animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}>
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
            </svg>
            </div>

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
