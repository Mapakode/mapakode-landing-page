"use client";

import { useInView } from "@/hooks/useInView";
import { Sparkles, Star, ShieldCheck, ListChecks } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Matching Engine",
    description:
      "Instead of open bidding, our AI scores freelancers against each job — skills, portfolio fit, collaboration style, and track record — then surfaces only the top 5. Clients decide faster. Freelancers compete smarter.",
    image: "matching.png",
    alt: "AI matching interface screenshot",
  },
  {
    icon: Star,
    title: "Fillr Score System",
    description:
      "A gamified reputation engine that tracks delivery consistency, client ratings, and revision rates. Higher scores unlock priority matching — giving top freelancers a compounding career advantage.",
    image: "score.png",
    alt: "Fillr score leaderboard screenshot",
  },
  {
    icon: ShieldCheck,
    title: "Escrow Payments",
    description:
      "Funds are locked at project start and released on milestone approval. Budget surplus is automatically refunded. No payment disputes, no chasing invoices — trust baked into every transaction.",
    image: "escrow.png",
    alt: "Escrow payment flow screenshot",
  },
  {
    icon: ListChecks,
    title: "Milestone Tracking",
    description:
      "Projects are broken into milestones with built-in revision rounds. Both parties see progress in real time, with a structured approval flow that keeps work moving without miscommunication.",
    image: "milestones.png",
    alt: "Milestone tracker screenshot",
  },
];

export function FillrFeatures() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="py-28 px-6 bg-surface relative overflow-hidden">
      {/* Dot-grid */}
      <div className="hero-dot-grid absolute inset-0 opacity-[0.35]" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className={[
              "text-accent text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            <span className="w-6 h-px bg-accent" aria-hidden="true" /> What We Built
          </p>
          <h2
            className={[
              "font-display font-black text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.02] text-foreground reveal delay-100",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            Four systems.{" "}
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

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const delays = ["delay-100", "delay-200", "delay-100", "delay-200"] as const;
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={[
                  "card-lift bg-background rounded-2xl border border-border p-6 flex flex-col gap-5 cursor-default reveal",
                  inView ? "in-view" : "",
                  delays[i],
                ].join(" ")}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>

                {/* Image placeholder */}
                {/* Replace with <Image> once screenshots are ready */}
                {/* Place image at: public/images/casestudies/fillr/{feature.image} (400×240) */}
                <div className="w-full aspect-[5/3] rounded-xl border border-border bg-surface-2 flex items-center justify-center mt-auto">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-accent/40" aria-hidden="true" />
                    </div>
                    <p className="text-[10px] text-border">
                      fillr/{feature.image} · 400×240
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
