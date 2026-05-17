"use client";

import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { CaseStudyData } from "@/src/data/case-studies/types";

interface Props {
  category: CaseStudyData["category"];
  tags: CaseStudyData["tags"];
  hero: CaseStudyData["hero"];
  image: CaseStudyData["image"];
}

export function CaseStudyHero({ category, tags, hero, image }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="relative min-h-[85dvh] flex flex-col justify-center overflow-hidden bg-background pt-32 pb-20 px-6">
      <div className="hero-dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-40 -right-40 w-175 h-175 rounded-full pointer-events-none opacity-55"
        style={{ background: "radial-gradient(circle, rgba(11,78,215,0.6) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-150 h-150 rounded-full pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(49,193,195,0.5) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto w-full">
        <div className={["flex items-center justify-between mb-10 reveal", inView ? "in-view" : ""].join(" ")}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-accent transition-colors duration-200"
          >
            <ArrowUpRight className="w-3.5 h-3.5 rotate-[-135deg]" aria-hidden="true" />
            Back to Projects
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
            <span className="text-xs font-semibold text-muted tracking-wide uppercase">Case Study</span>
          </div>
        </div>

        <h1 className="font-display font-black tracking-tight leading-[1.04] mb-6">
          <span
            className={["block text-[clamp(2rem,5vw,3.5rem)] text-muted font-bold reveal delay-100", inView ? "in-view" : ""].join(" ")}
          >
            {category}
          </span>
          <span
            className={["block text-[clamp(2rem,5vw,3.5rem)] reveal delay-200", inView ? "in-view" : ""].join(" ")}
            style={{
              background: "linear-gradient(120deg, var(--accent) 0%, var(--accent-dim) 50%, var(--accent-sky) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {hero.headline}
          </span>
        </h1>

        <p className={["text-base md:text-lg text-muted max-w-xl leading-relaxed mb-8 reveal delay-300", inView ? "in-view" : ""].join(" ")}>
          {hero.sub}
        </p>

        <div className={["flex flex-wrap gap-2 mb-12 reveal delay-400", inView ? "in-view" : ""].join(" ")}>
          {tags.map((tag) => (
            <Badge key={tag} className="bg-background text-muted border border-border text-xs font-normal rounded-full px-3">
              {tag}
            </Badge>
          ))}
        </div>

        <div
          className={["w-full aspect-video rounded-2xl border border-border bg-surface-2 overflow-hidden reveal delay-400", inView ? "in-view" : ""].join(" ")}
        >
          <Image
            src={image}
            alt={`${category} platform overview`}
            width={1920}
            height={1080}
            loading="eager"
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
