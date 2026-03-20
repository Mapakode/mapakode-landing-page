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
  url: "https://mapakode.onrender.com",
  description:
    "MapaKode is an affordable web & mobile agency building landing pages, responsive websites, and iOS/Android apps for startups and businesses.",
  email: "ivanandesramos.io@gmail.com",
  sameAs: ["https://facebook.com/mapakode"],
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

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Clients />
      <Services />
      <Projects />
      <Testimonials />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
