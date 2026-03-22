"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { fetchSeattleWeather, type WeatherData } from "@/lib/weather";

interface WeatherState {
  weather: WeatherData | null;
  loaded: boolean;
  rainEnabled: boolean;
  toggleRain: () => void;
}

const WeatherContext = createContext<WeatherState>({
  weather: null,
  loaded: false,
  rainEnabled: false,
  toggleRain: () => {},
});

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [rainOverride, setRainOverride] = useState<boolean | null>(null);

  useEffect(() => {
    fetchSeattleWeather().then((data) => {
      setWeather(data);
      setLoaded(true);
    });
  }, []);

  const toggleRain = useCallback(() => {
    setRainOverride((prev) => {
      if (prev === null) return !(weather?.isRaining ?? false);
      return !prev;
    });
  }, [weather]);

  const rainEnabled =
    rainOverride !== null ? rainOverride : (weather?.isRaining ?? false);

  return (
    <WeatherContext.Provider value={{ weather, loaded, rainEnabled, toggleRain }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
