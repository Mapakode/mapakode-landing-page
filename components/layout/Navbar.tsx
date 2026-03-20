"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-5xl flex flex-col">
        {/* Pill */}
        <div
          className={[
            "w-full flex items-center justify-between px-8 h-16 rounded-full transition-all duration-300",
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/6 border border-[#e2e6ef]"
              : "bg-white/70 backdrop-blur-sm border border-white/80 shadow-sm shadow-black/4",
          ].join(" ")}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image src="/mapakode.svg" alt="MapaKode" width={28} height={28} style={{ width: 28, height: "auto" }} />
            <span className="font-display text-base font-bold tracking-tight">
              <span className="text-[#345ec4]">Mapa</span>
              <span className="text-[#0d1117]">Kode</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#64748b] hover:text-[#0d1117] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="hidden md:block">
            <Button className="bg-[#345ec4] text-white font-semibold hover:bg-[#46a9fb] transition-colors duration-200 rounded-full px-5 h-9 text-sm">
              Book now
            </Button>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={[
                "w-5 h-px bg-[#0d1117] block transition-all duration-200 origin-center",
                menuOpen ? "translate-y-[5px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "w-5 h-px bg-[#0d1117] block transition-all duration-200",
                menuOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "w-3 h-px bg-[#345ec4] block transition-all duration-200 origin-center",
                menuOpen ? "w-5 -translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={[
            "md:hidden mt-2 rounded-2xl border border-[#e2e6ef] bg-white/95 backdrop-blur-md shadow-lg shadow-black/6 overflow-hidden transition-all duration-300",
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#64748b] hover:text-[#0d1117] hover:bg-[#f7f9fc] transition-colors duration-200 font-medium px-4 py-3 rounded-xl"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2">
              <Button className="w-full bg-[#345ec4] text-white font-semibold hover:bg-[#46a9fb] transition-colors duration-200 rounded-xl h-10 text-sm">
                Book now
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
