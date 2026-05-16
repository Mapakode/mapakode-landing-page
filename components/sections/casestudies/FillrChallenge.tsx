"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";

export function FillrChallenge() {
  const { ref: leftRef, inView: leftInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const { ref: rightRef, inView: rightInView } = useInView<HTMLDivElement>({
    threshold: 0.05,
  });

  return (
    <section className="py-28 px-6 bg-background relative overflow-hidden">
      <div className="section-glow-left" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: narrative */}
        <div ref={leftRef}>
          <p
            className={[
              "text-accent text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-2 reveal-left",
              leftInView ? "in-view" : "",
            ].join(" ")}
          >
            <span className="w-6 h-px bg-accent" aria-hidden="true" /> The
            Challenge
          </p>

          <h2
            className={[
              "font-display font-black text-[clamp(2rem,4vw,3rem)] leading-[1.06] text-foreground mb-6 reveal-left delay-100",
              leftInView ? "in-view" : "",
            ].join(" ")}
          >
            A marketplace built on{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, var(--accent) 0%, var(--accent-dim) 50%, var(--accent-sky) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              trust and intelligence.
            </span>
          </h2>

          <div className="flex flex-col gap-5">
            <p
              className={[
                "text-muted text-sm leading-relaxed reveal-left delay-200",
                leftInView ? "in-view" : "",
              ].join(" ")}
            >
              The freelance market in the Philippines was growing fast, but the
              tools hadn&apos;t kept up. Clients were drowning in applications —
              sometimes hundreds for a single post — with no reliable way to
              find the right fit quickly.
            </p>
            <p
              className={[
                "text-muted text-sm leading-relaxed reveal-left delay-300",
                leftInView ? "in-view" : "",
              ].join(" ")}
            >
              Freelancers faced the opposite problem: spending hours crafting
              proposals with no guarantee of fairness, and no persistent
              reputation that could follow them from one platform to another.
            </p>
            <p
              className={[
                "text-muted text-sm leading-relaxed reveal-left delay-400",
                leftInView ? "in-view" : "",
              ].join(" ")}
            >
              Our goal was to flip the script — let AI handle the matching, let
              escrow handle the trust, and let a gamified score system give
              freelancers a career asset they actually own.
            </p>
          </div>
        </div>

        {/* Right: screenshot */}
        <div ref={rightRef}>
          <div
            className={[
              "reveal-right delay-100",
              rightInView ? "in-view" : "",
            ].join(" ")}
          >
            <Image
              src="/images/casestudies/fillr/fillr-screenshot-challenge.png"
              alt="Fillr job posting interface"
              width={1920}
              height={1080}
              className="w-full rounded-2xl border border-border shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
