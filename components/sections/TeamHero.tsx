"use client";

import { useInView } from "@/hooks/useInView";

export function TeamHero() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="pt-40 pb-20 px-6 bg-background relative overflow-hidden">
      {/* Blue radial glow — top right */}
      <div
        className="absolute -top-40 -right-40 w-175 h-175 rounded-full pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(11,78,215,0.5) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <p className={["text-accent text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}>
          <span className="w-6 h-px bg-accent" aria-hidden="true" /> The People
        </p>
        <h1
          className={[
            "font-display font-black text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] text-foreground mb-6 reveal delay-100",
            inView ? "in-view" : "",
          ].join(" ")}
        >
          Meet the{" "}
          <span className="text-accent">Team.</span>
        </h1>
        <p
          className={[
            "text-muted text-lg max-w-xl leading-relaxed reveal delay-200",
            inView ? "in-view" : "",
          ].join(" ")}
        >
          The minds behind MapaKode — engineers who ship fast and care deeply about quality.
        </p>
        <div className={["mt-8 w-12 h-px bg-border reveal-fade delay-300", inView ? "in-view" : ""].join(" ")} aria-hidden="true" />
      </div>
    </section>
  );
}
