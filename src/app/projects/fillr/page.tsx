import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FillrHero } from "@/components/sections/casestudies/FillrHero";
import { FillrOverview } from "@/components/sections/casestudies/FillrOverview";
import { FillrChallenge } from "@/components/sections/casestudies/FillrChallenge";
import { FillrFeatures } from "@/components/sections/casestudies/FillrFeatures";
import { FillrResults } from "@/components/sections/casestudies/FillrResults";
import { FillrCTA } from "@/components/sections/casestudies/FillrCTA";

export const metadata: Metadata = {
  title: "Case Study: Fillr",
  description:
    "How MapaKode built Fillr — an AI-powered creative supernetwork for Filipino freelancers, with AI matching, gamified reputation, and escrow payments.",
  openGraph: {
    images: [
      {
        url: "/images/casestudies/fillr/fillr-screenshot-hero.png",
        width: 1200,
        height: 630,
        alt: "Fillr — AI-powered creative supernetwork",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fillr",
  description:
    "AI-powered creative supernetwork for Filipino freelancers, with AI matching, gamified reputation, and escrow payments.",
  image:
    "https://mapakode.com/images/casestudies/fillr/fillr-screenshot-hero.png",
  author: {
    "@type": "Organization",
    name: "MapaKode",
    url: "https://mapakode.com",
  },
  applicationCategory: "BusinessApplication",
};

export default function FillrCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <FillrHero />
        <FillrOverview />
        <FillrChallenge />
        <FillrFeatures />
        <FillrResults />
        <FillrCTA />
      </main>
      <Footer />
    </>
  );
}
