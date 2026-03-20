import type { Metadata } from "next";
import { Unbounded, Figtree } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://mapakode.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "MapaKode — Web & Mobile Development Agency",
    template: "%s | MapaKode",
  },
  description:
    "MapaKode is an affordable web & mobile agency building landing pages, responsive websites, and iOS/Android apps. We handle the tech — you focus on growth.",
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
    "affordable web agency",
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

  icons: {
    icon: "/mapakode.svg",
    shortcut: "/mapakode.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${figtree.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
