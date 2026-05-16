import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TeamHero } from "@/components/sections/TeamHero";
import { TeamMembers } from "@/components/sections/TeamMembers";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the co-founders behind MapaKode — engineers who ship fast and care deeply about quality.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MapaKode",
  url: "https://mapakode.com",
  member: [
    {
      "@type": "Person",
      name: "Ivan Ramos",
      jobTitle: "Co-Founder",
      image: "https://mapakode.com/images/members/ivan-image.png",
    },
    {
      "@type": "Person",
      name: "Emmanuel Enalpe III",
      jobTitle: "Co-Founder",
      image: "https://mapakode.com/images/members/emman-image.png",
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <TeamHero />
        <TeamMembers />
      </main>
      <Footer />
    </>
  );
}
