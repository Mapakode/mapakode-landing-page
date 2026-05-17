"use client";

import { useInView } from "@/hooks/useInView";
import type { CaseStudyData } from "@/src/data/case-studies/types";

interface Props {
  challenge: CaseStudyData["challenge"];
}

export function CaseStudyChallenge({ challenge }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-28 px-6 bg-background relative overflow-hidden">
      <div className="section-glow-left" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto">
        <div ref={ref}>
          <p
            className={["text-accent text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-2 reveal-left", inView ? "in-view" : ""].join(" ")}
          >
            <span className="w-6 h-px bg-accent" aria-hidden="true" /> The Challenge
          </p>
          <h2
            className={["font-display font-black text-[clamp(2rem,4vw,3rem)] leading-[1.06] text-foreground mb-8 reveal-left delay-100", inView ? "in-view" : ""].join(" ")}
            style={{
              background: "linear-gradient(120deg, var(--accent) 0%, var(--accent-dim) 50%, var(--accent-sky) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {challenge.heading}
          </h2>
          <div className="flex flex-col gap-5">
            {challenge.paragraphs.map((para, i) => (
              <p
                key={i}
                className={[
                  "text-muted text-sm leading-relaxed reveal-left",
                  inView ? "in-view" : "",
                  i === 0 ? "delay-200" : i === 1 ? "delay-300" : "delay-400",
                ].join(" ")}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
