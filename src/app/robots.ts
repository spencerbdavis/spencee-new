import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://spenc.ee/sitemap.xml",
    host: "https://spenc.ee",
  };
}
