"use client";

import { useInView } from "@/hooks/useInView";
import type { CaseStudyData } from "@/src/data/case-studies/types";

interface Props {
  overview: CaseStudyData["overview"];
}

export function CaseStudyOverview({ overview }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-24 px-6 bg-surface relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p
          className={["text-accent text-xs font-semibold tracking-widest uppercase mb-14 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}
        >
          <span className="w-6 h-px bg-accent" aria-hidden="true" /> The Brief
        </p>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {overview.map((brief, i) => {
            const delays = ["delay-100", "delay-200", "delay-300"] as const;
            return (
              <div key={brief.title} className={["reveal", inView ? "in-view" : "", delays[i]].join(" ")}>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{brief.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{brief.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
