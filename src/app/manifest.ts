import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "spenc.ee",
    description: "Applied AI, integrations and internal systems by Spencer D'Avis.",
    start_url: "/",
    display: "browser",
    background_color: "#f5f4f0",
    theme_color: "#f5f4f0",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
