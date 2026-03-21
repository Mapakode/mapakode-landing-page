"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function Hero() {
  const mounted = useIsMounted();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle background gradient — top-right blue tint */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_80%_10%,rgba(70,169,251,0.26),transparent)]" />
      {/* Bottom fade to surface */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-linear-to-b from-transparent to-[#f7f9fc]/90" />

      {/* Thin right-column rule */}
      <div
        className="absolute top-0 bottom-0 w-px bg-[#e2e6ef] pointer-events-none hidden lg:block"
        style={{ right: "28%" }}
      />

      {/* Corner accent — top right */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-32 bg-[#345ec4]/20" />
        <div className="absolute top-0 right-0 h-px w-32 bg-[#345ec4]/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        {/* Tag line */}
        <div
          className={[
            "inline-flex items-center gap-2.5 mb-10 transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="w-6 h-px bg-[#345ec4]" />
          <span className="text-xs font-semibold text-[#345ec4] tracking-widest uppercase">
            Web &amp; Mobile Agency
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-black leading-[0.92] mb-10 max-w-5xl">
          <span
            className={[
              "block text-[clamp(2.5rem,7vw,5rem)] text-[#0d1117] transition-all duration-700",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
            style={{ transitionDelay: "200ms" }}
          >
            We handle the tech,
          </span>
          <span
            className={[
              "block text-[clamp(2.5rem,7vw,4rem)] text-[#345ec4] transition-all duration-700",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
            style={{ transitionDelay: "350ms" }}
          >
            you focus on growth.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={[
            "text-[#64748b] text-lg max-w-md leading-relaxed mb-10 transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
          style={{ transitionDelay: "500ms" }}
        >
          Affordable, fast, and tailored web &amp; mobile solutions built for your business.
        </p>

        {/* CTAs */}
        <div
          className={[
            "flex flex-wrap gap-3 transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
          style={{ transitionDelay: "600ms" }}
        >
          <a href="#projects">
            <Button className="bg-[#345ec4] text-white font-semibold hover:bg-[#46a9fb] rounded-full px-8 h-12 text-sm transition-all duration-200">
              View Our Work
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              className="border-[#e2e6ef] bg-transparent text-[#0d1117] hover:border-[#345ec4] hover:text-[#345ec4] rounded-full px-8 h-12 text-sm transition-all duration-200"
            >
              Schedule a Meeting
            </Button>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={[
            "absolute bottom-10 left-6 flex items-center gap-3 transition-all duration-700",
            mounted ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="w-px h-10 bg-linear-to-b from-[#345ec4] to-transparent" />
          <span className="text-xs text-[#64748b] tracking-widest uppercase">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
