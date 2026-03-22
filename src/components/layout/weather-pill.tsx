"use client";

import { useState } from "react";
import { useWeather } from "@/components/providers/weather-provider";
import { CloudRain, CloudOff } from "lucide-react";

export function WeatherPill() {
  const { weather, loaded, rainEnabled, toggleRain } = useWeather();
  const [expanded, setExpanded] = useState(false);

  if (!loaded) return null;

  const timeHour = new Date().getHours();
  const isNight = timeHour >= 20 || timeHour < 6;
  const tagline = isNight
    ? "Spencer builds day and night"
    : "Spencer builds rain or shine";

  return (
    <div style={{ position: "relative" }}>
      {/* Main pill button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 100,
          padding: "6px 14px",
          fontSize: 12,
          fontFamily: "var(--font-mono)",
          color: "var(--foreground)",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          transition: "all 0.2s",
          whiteSpace: "nowrap",
          boxShadow: expanded ? "var(--card-shadow-hover)" : "var(--card-shadow)",
        }}
      >
        {weather ? (
          <>
            <span style={{ fontSize: 14, lineHeight: 1 }}>{weather.icon}</span>
            <span>{weather.temp}°F</span>
          </>
        ) : (
          <>
            <span style={{ fontSize: 14, lineHeight: 1 }}>🌲</span>
            <span>Seattle</span>
          </>
        )}
      </button>

      {/* Expanded dropdown */}
      {expanded && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 20,
            boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
            zIndex: 200,
            minWidth: 240,
            animationName: "tooltip-in",
            animationDuration: "0.2s",
            animationTimingFunction: "ease",
          }}
        >
          {/* Tagline */}
          <p style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", lineHeight: 1.3 }}>
            {tagline}
          </p>

          {/* Weather details */}
          <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 6 }}>
            {weather
              ? `${weather.label} in Seattle · ${weather.temp}°F`
              : "Weather data unavailable"}
          </p>

          {/* Divider */}
          <div style={{ height: 1, background: "var(--border)", margin: "14px 0" }} />

          {/* Rain toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleRain();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "8px 12px",
              borderRadius: 10,
              border: "none",
              background: rainEnabled ? "var(--accent-soft)" : "var(--muted)",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {rainEnabled ? (
              <CloudRain size={16} style={{ color: "var(--accent)" }} />
            ) : (
              <CloudOff size={16} style={{ color: "var(--muted-foreground)" }} />
            )}
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: "var(--foreground)" }}>
                Rain effect {rainEnabled ? "on" : "off"}
              </p>
              <p style={{ fontSize: 11, color: "var(--muted-foreground)", marginTop: 1 }}>
                {rainEnabled ? "Rain falls in the footer scene" : "Toggle rain in the footer"}
              </p>
            </div>
          </button>

          {/* Close area */}
          <button
            onClick={() => setExpanded(false)}
            style={{
              display: "block",
              width: "100%",
              marginTop: 10,
              padding: "6px 0",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 12,
              color: "var(--muted-foreground)",
              textAlign: "center",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Click-away overlay */}
      {expanded && (
        <div
          onClick={() => setExpanded(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 199,
          }}
        />
      )}
    </div>
  );
}
