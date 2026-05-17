"use client";

import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/src/data/case-studies/index";

export function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="projects" className="py-28 px-6 bg-surface relative overflow-hidden">
      <div className="hero-dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-40 -right-40 w-175 h-175 rounded-full pointer-events-none opacity-55"
        style={{ background: "radial-gradient(circle, rgba(11,78,215,0.6) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <div className="mb-16">
          <p
            className={["text-accent text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}
          >
            <span className="w-6 h-px bg-accent" aria-hidden="true" /> Featured Work
          </p>
          <h2
            className={["font-display font-black text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.02] text-foreground reveal delay-100", inView ? "in-view" : ""].join(" ")}
          >
            Projects We&apos;ve{" "}
            <span
              style={{
                background: "linear-gradient(120deg, var(--accent) 0%, var(--accent-dim) 50%, var(--accent-sky) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built.
            </span>
          </h2>
        </div>

        <div className="flex flex-col">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/projects/${cs.slug}`}
              className={[
                "group relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-10 border-b border-border cursor-pointer reveal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm",
                i === 0 ? "border-t" : "",
                inView ? "in-view" : "",
                i === 0 ? "delay-100" : "delay-200",
              ].join(" ")}
            >
              <div className="flex items-center gap-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1 group-hover:text-accent transition-colors duration-200">
                    {cs.category}
                  </h3>
                  <p className="text-muted text-sm mb-3">{cs.hero.sub}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-background text-muted border border-border text-xs font-normal rounded-full px-3 group-hover:border-accent/30 group-hover:text-accent transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-semibold text-muted shrink-0 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/5 transition-all duration-200">
                Case Study
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
