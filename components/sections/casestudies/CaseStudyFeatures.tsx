"use client";

import { useInView } from "@/hooks/useInView";
import {
  Sparkles,
  Star,
  ShieldCheck,
  ListChecks,
  BookOpen,
  CalendarCheck,
  BellRing,
  BarChart3,
  Keyboard,
  Video,
  Zap,
  Accessibility,
  type LucideIcon,
} from "lucide-react";
import type { CaseStudyData } from "@/src/data/case-studies/types";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Star,
  ShieldCheck,
  ListChecks,
  BookOpen,
  CalendarCheck,
  BellRing,
  BarChart3,
  Keyboard,
  Video,
  Zap,
  Accessibility,
};

interface Props {
  features: CaseStudyData["features"];
}

export function CaseStudyFeatures({ features }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="py-28 px-6 bg-surface relative overflow-hidden">
      <div className="hero-dot-grid absolute inset-0 opacity-[0.35]" aria-hidden="true" />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className="mb-16">
          <p
            className={["text-accent text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}
          >
            <span className="w-6 h-px bg-accent" aria-hidden="true" /> What We Built
          </p>
          <h2 className={["font-display font-black text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.02] text-foreground reveal delay-100", inView ? "in-view" : ""].join(" ")}>
            {features.length} systems.{" "}
            <span
              style={{
                background: "linear-gradient(120deg, var(--accent) 0%, var(--accent-dim) 50%, var(--accent-sky) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One platform.
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const delays = ["delay-100", "delay-200", "delay-100", "delay-200"] as const;
            const Icon = iconMap[feature.icon] ?? Sparkles;
            return (
              <div
                key={feature.title}
                className={["card-lift bg-background rounded-2xl border border-border p-6 flex flex-col gap-5 cursor-default reveal", inView ? "in-view" : "", delays[i % 4]].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
