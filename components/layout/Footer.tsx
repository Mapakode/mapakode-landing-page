"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Projects", href: "/#projects" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Book a Call", href: "/#contact" },
      { label: "hello@mapakode.com", href: "mailto:hello@mapakode.com" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <footer className="bg-[#0b4ed7]">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8" ref={ref}>
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div
            className={["space-y-4 reveal-left", inView ? "in-view" : ""].join(
              " ",
            )}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            >
              <Image
                src="/images/mapakode-dark-mode.svg"
                alt="MapaKode logo"
                width={28}
                height={28}
                style={{ width: 28, height: "auto" }}
              />
              <span className="font-display text-lg font-black tracking-tight text-white">
                MapaKode
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-60">
              We handle the tech — you focus on growth. Web &amp; mobile
              solutions for startups and businesses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/mapakode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MapaKode on Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/30 text-white/70 hover:text-white hover:border-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaFacebook size={14} />
              </a>
              <a
                href="mailto:hello@mapakode.com"
                aria-label="Email MapaKode"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/30 text-white/70 hover:text-white hover:border-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Mail size={14} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col, i) => {
            const delays = ["delay-100", "delay-200"];
            return (
              <div
                key={col.title}
                className={["reveal", inView ? "in-view" : "", delays[i]].join(
                  " ",
                )}
              >
                <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm inline-flex items-center gap-1"
                      >
                        {link.label}
                        {link.href.startsWith("mailto:") && (
                          <ExternalLink
                            size={10}
                            className="opacity-50"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className={[
            "accent-line mb-6 reveal-fade delay-300",
            inView ? "in-view" : "",
          ].join(" ")}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div
          className={[
            "flex flex-col sm:flex-row items-center justify-between gap-2 text-xs reveal-fade delay-300",
            inView ? "in-view" : "",
          ].join(" ")}
        >
          <p className="text-white/60">© {year} MapaKode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
