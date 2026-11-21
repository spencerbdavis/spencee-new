import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { WeatherProvider } from "@/components/providers/weather-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";
import { UmamiEvents } from "@/components/analytics/umami-events";
import { ogImageUrl } from "@/lib/seo";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Spencer D'Avis — Software Engineer, Applied AI & Web Development · Seattle";
const DESCRIPTION =
  "Seattle-area engineer building applied AI, integrations, production systems and fast marketing websites. Open to remote engineering roles and select web, SEO and AI automation projects.";

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
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0f" },
  ],
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
    <html lang="en" suppressHydrationWarning className={`${interTight.variable} ${jetbrains.variable}`}>
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
