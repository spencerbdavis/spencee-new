import type { Metadata } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import { WeatherProvider } from "@/components/providers/weather-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Spencer D'Avis — Marketing Operations: Strategy, Design, Web & Systems";
const DESCRIPTION =
  "Seattle marketing operations specialist. Strategy, design, web, and the systems behind them — WordPress builds, print & brand design, SEO and marketing automation for a 60-property portfolio and freelance clients.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://spenc.ee"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spenc.ee",
    siteName: "Spencer D'Avis",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://spenc.ee" },
  other: { "color-scheme": "light" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script in <body> adds the "js"
    // class to <html> before hydration — an intentional mutation.
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${geistMono.variable}`}>
      <body>
        {/* Scopes entrance-animation hiding to JS-capable browsers */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <WeatherProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </WeatherProvider>
        <Analytics />
      </body>
    </html>
  );
}
