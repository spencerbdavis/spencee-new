import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WeatherProvider } from "@/components/providers/weather-provider";
import { ElevationBar } from "@/components/layout/elevation-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spencer D'Avis | Full-Stack Developer & AI Systems Builder",
  description:
    "Self-taught full-stack developer with 2,600+ production commits across maintenance, billing, AI staging, an MCP server, an iOS app, and a Chrome extension for a 60+ property portfolio.",
  metadataBase: new URL("https://spenc.ee"),
  openGraph: {
    title: "Spencer D'Avis | Full-Stack Developer & AI Systems Builder",
    description:
      "Self-taught full-stack developer with 2,600+ production commits across maintenance, billing, AI staging, an MCP server, an iOS app, and a Chrome extension for a 60+ property portfolio.",
    url: "https://spenc.ee",
    siteName: "Spencer D'Avis",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://spenc.ee" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <WeatherProvider>
          <ElevationBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </WeatherProvider>
      </body>
    </html>
  );
}
