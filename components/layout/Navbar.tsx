"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      if (isScrolled) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-5xl flex flex-col animate-nav-enter">
        {/* Pill */}
        <div
          className={[
            "w-full flex items-center justify-between px-6 h-16 rounded-full transition-all duration-300",
            scrolled
              ? "bg-background/90 backdrop-blur-md shadow-lg shadow-black/6 border border-border"
              : "bg-background/70 backdrop-blur-sm border border-border/60 shadow-sm shadow-black/4",
          ].join(" ")}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <Image
              src="/images/mapakode-light-mode.svg"
              alt="MapaKode logo"
              width={28}
              height={28}
              style={{ width: 32, height: "auto" }}
              loading="eager"
              priority
            />
            <span className="font-display text-base font-bold tracking-tight">
              <span className="text-accent">Mapa</span>
              <span className="text-foreground">Kode</span>
            </span>
          </Link>

          {/* Nav links */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/#contact">
              <Button className="bg-accent text-white font-semibold hover:bg-accent-dim transition-colors duration-200 rounded-full px-5 h-9 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                Book now
              </Button>
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="flex flex-col gap-1.5 p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span
                className={[
                  "w-5 h-px bg-foreground block transition-all duration-200 origin-center",
                  menuOpen ? "translate-y-1.25 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "w-5 h-px bg-foreground block transition-all duration-200",
                  menuOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "w-3 h-px bg-accent block transition-all duration-200 origin-center",
                  menuOpen ? "w-5 -translate-y-1.75 -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          id="mobile-menu"
          className={[
            "md:hidden mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-md shadow-lg shadow-black/6 overflow-hidden transition-all duration-300",
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col p-4 gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted hover:text-foreground hover:bg-surface transition-colors duration-200 font-medium px-4 py-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2"
            >
              <Button className="w-full bg-accent text-white font-semibold hover:bg-accent-dim transition-colors duration-200 rounded-xl h-10 text-sm cursor-pointer">
                Book now
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
