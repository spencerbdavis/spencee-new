"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchSeattleWeather, type WeatherData } from "@/lib/weather";

interface WeatherState {
  weather: WeatherData | null;
  loaded: boolean;
}

const WeatherContext = createContext<WeatherState>({
  weather: null,
  loaded: false,
});

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchSeattleWeather().then((data) => {
      setWeather(data);
      setLoaded(true);
    });
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, loaded }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
