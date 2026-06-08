import type { Metadata, Viewport } from "next";
import { Syne, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";
import Container from "@/components/ui/Container";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b592ff",
};

const BASE_URL = "https://beni-homezy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Homezy | We help people to realize their dream property",
    template: "%s | Homezy",
  },
  description:
    "We are creative people who provide the best way to you who want to have a new comfortable and suitable place to live.",
  keywords: [
    "property",
    "real estate",
    "apartment",
    "house",
    "villa",
    "rent",
    "sale",
    "home",
    "property listing",
  ],
  authors: [{ name: "Homezy" }],
  creator: "Homezy",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Homezy",
    title: "Homezy | Find Your Dream Property",
    description:
      "Browse, search, and filter properties with interactive maps. Find apartments, houses, villas, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homezy | Find Your Dream Property",
    description:
      "Browse, search, and filter properties with interactive maps. Find apartments, houses, villas, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Container className="lg:py-20">{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
