"use client";

import { useInView } from "@/hooks/useInView";

const briefs = [
  {
    title: "The Problem",
    body: "Filipino freelancers faced a broken marketplace experience — competing with hundreds of applicants, low trust in payments, and no way to build a reputation that followed them across gigs.",
  },
  {
    title: "The Solution",
    body: "A platform where AI does the heavy lifting: intelligent matching sends only the top 5 candidates to clients, while a gamified reputation system and escrow payments build sustainable trust on both sides.",
  },
  {
    title: "The Outcome",
    body: "A fully shipped freelance marketplace with AI-powered matching, milestone tracking, an escrow payment engine, and a live community — built from zero to launch.",
  },
];

export function FillrOverview() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-24 px-6 bg-surface relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Label */}
        <p
          className={[
            "text-accent text-xs font-semibold tracking-widest uppercase mb-14 flex items-center gap-2 reveal",
            inView ? "in-view" : "",
          ].join(" ")}
        >
          <span className="w-6 h-px bg-accent" aria-hidden="true" /> The Brief
        </p>

        {/* 3-col grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {briefs.map((brief, i) => {
            const delays = ["delay-100", "delay-200", "delay-300"] as const;
            return (
              <div
                key={brief.title}
                className={[
                  "reveal",
                  inView ? "in-view" : "",
                  delays[i],
                ].join(" ")}
              >
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  {brief.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{brief.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
