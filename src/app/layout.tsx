import type { Metadata, Viewport } from "next";
import { Epilogue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://mapakode.com";

export const viewport: Viewport = {
  themeColor: "#0b4ed7",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  icons: {
    icon: [
      {
        url: "/images/mapakode-dark-mode.svg",
      },
    ],
    shortcut: "/images/mapakode-dark-mode.svg",
    apple: "/apple-touch-icon.png",
  },

  title: {
    default: "MapaKode — Software Agency",
    template: "%s | MapaKode",
  },
  description:
    "MapaKode is a software agency. We handle the tech — you focus on growth.",

  keywords: [
    "web development",
    "mobile app development",
    "landing page",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Vercel",
    "affordable software agency",
    "MapaKode",
    "custom software",
    "startup development",
    "API integration",
    "cross-platform app",
  ],
  authors: [{ name: "MapaKode" }],
  creator: "MapaKode",

  alternates: { canonical: BASE_URL },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "MapaKode",
    title: "MapaKode — We Handle the Tech, You Focus on Growth",
    description:
      "Affordable, fast, and tailored web & mobile solutions for startups and businesses. Landing pages, responsive websites, and iOS/Android apps — built to perform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MapaKode — Web & Mobile Solutions",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "MapaKode — We Handle the Tech, You Focus on Growth",
    description:
      "Affordable web & mobile solutions for startups and businesses. We build fast — you grow faster.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={epilogue.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
