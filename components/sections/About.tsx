"use client";

import { useInView } from "@/hooks/useInView";

const whyUs = [
  {
    title: "Fast, Reliable Development",
    description:
      "Quick turnaround times so your website or app launches without unnecessary delays.",
  },
  {
    title: "Budget-Friendly Pricing",
    description:
      "Quality solutions at fair prices — no bloated agencies, no hidden fees.",
  },
  {
    title: "Tailored Just for You",
    description:
      "Custom-built solutions that fit your specific needs, not cookie-cutter templates.",
  },
  {
    title: "Ongoing Support",
    description:
      "Post-launch support so you're never left figuring things out alone.",
  },
];

const FOUNDING_YEAR = 2022;

const stats = [
  { value: "11+", label: "Projects Completed" },
  {
    value: `${new Date().getFullYear() - FOUNDING_YEAR}+`,
    label: "Years of Experience",
  },
];

export function About() {
  const { ref: leftRef, inView } = useInView<HTMLDivElement>();
  const { ref: rightRef, inView: rightInView } = useInView<HTMLDivElement>({
    threshold: 0.05,
  });

  return (
    <section
      id="about"
      className="py-28 px-6 bg-surface relative overflow-hidden"
    >
      <div
        className="hero-dot-grid absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left col */}
        <div ref={leftRef}>
          <p
            className={[
              "text-accent text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-2 reveal",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            <span className="w-6 h-px bg-accent" aria-hidden="true" /> About Us
          </p>

          <h2
            className={[
              "font-display font-black text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.02] text-foreground reveal delay-100",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            More Productivity,{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, var(--accent) 0%, var(--accent-dim) 50%, var(--accent-sky) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Less Time.
            </span>
          </h2>

          <div
            className={[
              "mt-6 w-12 h-px bg-border reveal-fade delay-200",
              inView ? "in-view" : "",
            ].join(" ")}
            aria-hidden="true"
          />

          <p
            className={[
              "mt-6 text-muted leading-relaxed text-base reveal delay-200",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            We streamline the development process so you can focus on what
            matters most — running your business. From ideation to launch and
            beyond, MapaKode is your dedicated technical partner.
          </p>

          {/* Stats — plain accent color, no gradient */}
          <div className="mt-10 flex gap-12">
            {stats.map((stat, i) => {
              const delays = ["delay-300", "delay-400"];
              return (
                <div
                  key={stat.label}
                  className={[
                    "reveal",
                    inView ? "in-view" : "",
                    delays[i],
                  ].join(" ")}
                >
                  <p className="font-display font-black text-5xl text-accent">
                    {stat.value}
                  </p>
                  <p className="text-muted text-sm mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right col: definition list — no numbered cards, no borders */}
        <div ref={rightRef} className="md:pt-16">
          <dl className="flex flex-col divide-y divide-border">
            {whyUs.map((item, i) => {
              const delays = [
                "delay-100",
                "delay-200",
                "delay-300",
                "delay-400",
              ];
              return (
                <div
                  key={item.title}
                  className={[
                    "flex gap-4 py-6 reveal",
                    rightInView ? "in-view" : "",
                    delays[i] ?? "delay-400",
                  ].join(" ")}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </dt>
                    <dd className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
