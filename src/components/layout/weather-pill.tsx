"use client";

import { useWeather } from "@/components/providers/weather-provider";

/** Ambient live-weather readout for Seattle — pulsing accent dot + mono stats. */
export function WeatherPill() {
  const { weather, loaded } = useWeather();

  if (!loaded || !weather) return null;

  return (
    <div
      className="flex items-center gap-2 whitespace-nowrap"
      title={`Seattle · ${weather.temp}°F · ${weather.label}`}
    >
      <span aria-hidden className="live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      <span className="label-mono">
        <span className="text-ink">SEA · {weather.temp}&deg;F</span>
        <span className="hidden text-ink-muted sm:inline"> · {weather.label}</span>
      </span>
    </div>
  );
}
