"use client";

import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "[X]+", label: "Freelancers Onboarded" },
  { value: "[X]+", label: "Projects Matched" },
  { value: "[X] Wks", label: "Time to Launch" },
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "OpenAI",
  "Tailwind CSS",
  "Vercel",
];

export function FillrResults() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-28 px-6 bg-background relative overflow-hidden">
      <div className="section-glow-right" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Label */}
        <p
          className={[
            "text-accent text-xs font-semibold tracking-widest uppercase mb-14 flex items-center gap-2 reveal",
            inView ? "in-view" : "",
          ].join(" ")}
        >
          <span className="w-6 h-px bg-accent" aria-hidden="true" /> The Results
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, i) => {
            const delays = ["delay-100", "delay-200", "delay-300"] as const;
            return (
              <div
                key={stat.label}
                className={[
                  "reveal",
                  inView ? "in-view" : "",
                  delays[i],
                ].join(" ")}
              >
                <p className="font-display font-black text-[clamp(3rem,6vw,4.5rem)] text-accent leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-muted text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className={[
            "accent-line w-full mb-12 reveal",
            inView ? "in-view" : "",
          ].join(" ")}
          aria-hidden="true"
        />

        {/* Tech stack */}
        <div
          className={[
            "reveal delay-200",
            inView ? "in-view" : "",
          ].join(" ")}
        >
          <p className="text-xs font-semibold text-muted tracking-widest uppercase mb-5">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                className="bg-surface text-foreground border border-border text-xs font-medium rounded-full px-4 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
