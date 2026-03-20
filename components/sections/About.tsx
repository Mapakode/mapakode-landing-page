"use client";

import { useInView } from "@/hooks/useInView";

const whyUs = [
  {
    number: "01",
    title: "Fast, Reliable Development",
    description:
      "Quick turnaround times so your website or app launches without unnecessary delays.",
  },
  {
    number: "02",
    title: "Budget-Friendly Pricing",
    description:
      "Quality solutions at fair prices — no bloated agencies, no hidden fees.",
  },
  {
    number: "03",
    title: "Tailored Just for You",
    description:
      "Custom-built solutions that fit your specific needs, not cookie-cutter templates.",
  },
  {
    number: "04",
    title: "We've Got Your Back",
    description:
      "Ongoing support after launch so you're never left figuring things out alone.",
  },
];

const FOUNDING_YEAR = 2022;

const stats = [
  { value: "11+", label: "Projects Completed" },
  { value: `${new Date().getFullYear() - FOUNDING_YEAR}+`, label: "Years of Experience" },
];

export function About() {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>();
  const { ref: cardsRef, inView: cardsInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="about" className="py-28 px-6 bg-white relative overflow-hidden">
      <div className="section-glow-right" />
      <div className="relative max-w-7xl mx-auto" ref={sectionRef}>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <p className={["text-[#345ec4] text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}>
              <span className="w-6 h-px bg-[#345ec4]" /> About Us
            </p>
            <h2
              className={[
                "font-display font-bold text-[clamp(2rem,5vw,3.25rem)] leading-tight text-[#0d1117] reveal",
                inView ? "in-view" : "",
              ].join(" ")}
            >
              More Productivity,{" "}
              <span className="text-[#345ec4]">Less Time.</span>
            </h2>
          </div>
          <p
            className={[
              "text-[#64748b] leading-relaxed text-base reveal delay-200",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            We streamline the development process so you can focus on what
            matters most — running your business. From ideation to launch and
            beyond, MapaKode is your dedicated technical partner.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-x-16 gap-y-8 mb-20 pb-20 border-b border-[#e2e6ef]">
          {stats.map((stat, i) => {
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <div
                key={stat.label}
                className={["reveal", inView ? "in-view" : "", delays[i] ?? "delay-300"].join(" ")}
              >
                <p className="font-display font-black text-5xl text-[#345ec4]">
                  {stat.value}
                </p>
                <p className="text-[#64748b] text-sm mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Why us cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((item, i) => {
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
            return (
              <div
                key={item.number}
                className={[
                  "p-6 rounded-xl border border-[#e2e6ef] bg-white card-lift reveal",
                  cardsInView ? "in-view" : "",
                  delays[i] ?? "delay-400",
                ].join(" ")}
              >
                <p className="font-display font-black text-4xl text-[#345ec4] mb-5 select-none">
                  {item.number}
                </p>
                <h3 className="font-semibold text-[#0d1117] mb-2 text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
