import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import { WeatherProvider } from "@/components/providers/weather-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";
import { UmamiEvents } from "@/components/analytics/umami-events";
import { ogImageUrl } from "@/lib/seo";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Spencer D'Avis — Applied AI, Integrations & Internal Systems";
const DESCRIPTION =
  "Seattle-based engineer building applied AI, integrations, and production systems for an 80-property real estate business.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://spenc.ee"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spenc.ee",
    siteName: "Spencer D'Avis",
    locale: "en_US",
    type: "website",
    images: [{ url: ogImageUrl(), width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl()],
  },
  // Canonical is set per page (lib/seo.ts pageMetadata); a root canonical here
  // would leak onto pages that forget theirs.
  other: { "color-scheme": "light" },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f4",
};

// Umami (self-hosted, cookieless). data-domains keeps dev and preview hosts out of the stats.
const UMAMI_WEBSITE_ID = "f9276e91-8d3c-41b0-8694-85697885c5fe";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script in <body> adds the "js"
    // class to <html> before hydration — an intentional mutation.
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${geistMono.variable}`}>
      <head>
        <script
          defer
          src="https://stats.spenc.ee/script.js"
          data-website-id={UMAMI_WEBSITE_ID}
          data-domains="spenc.ee,www.spenc.ee"
        />
      </head>
      <body>
        {/* Scopes entrance-animation hiding to JS-capable browsers */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <WeatherProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </WeatherProvider>
        <Analytics />
        <UmamiEvents />
      </body>
    </html>
  );
}
