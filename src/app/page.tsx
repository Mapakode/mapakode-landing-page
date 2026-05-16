import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MapaKode",
  url: "https://mapakode.com",
  description:
    "MapaKode is an affordable web & mobile agency building landing pages, responsive websites, and iOS/Android apps for startups and businesses.",
  email: "ivanandesramos.io@gmail.com",
  image: "https://mapakode.com/images/mapakode-light-mode.svg",
  foundingDate: "2024",
  sameAs: ["https://facebook.com/mapakode", "https://github.com/mapakode"],
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "Landing Page Design",
    "Custom Software Solutions",
    "API Integration",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Vercel",
    "Render",
  ],
  areaServed: "Worldwide",
  priceRange: "$$",
};

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="w-full h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, var(--border) 20%, rgba(11,78,215,0.25) 50%, var(--border) 80%, transparent 100%)",
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Clients />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
