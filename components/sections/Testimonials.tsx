"use client";

import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    header: "Exceeded Expectations",
    quote:
      "MapaKode exceeded our expectations with their reliable service and rapid turnaround on revisions. Their team's professionalism and commitment to quality made a real difference for us. Highly recommended!",
  },
  {
    header: "On Time & On Budget",
    quote:
      "MapaKode delivered exactly what we needed, on time and within budget. Their team was professional, responsive, and delivered a high-quality product that exceeded our expectations.",
  },
  {
    header: "Clear & Efficient",
    quote:
      "MapaKode worked closely with us to deliver exactly what we needed, communicating clearly and moving efficiently throughout the project. The system looks good, is functional, and meets our requirements.",
  },
];

function TestimonialCard({
  t,
  className,
  delay,
  inView,
}: {
  t: (typeof testimonials)[number];
  className?: string;
  delay: string;
  inView: boolean;
}) {
  return (
    <div
      className={[
        "flex flex-col gap-5 p-8 rounded-2xl border border-border bg-background shadow-[0_4px_24px_rgba(11,78,215,0.07)] reveal",
        inView ? "in-view" : "",
        delay,
        className ?? "",
      ].join(" ")}
    >
      {/* Typographic quote mark */}
      <span
        className="font-display font-black text-5xl leading-none text-accent/25 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote */}
      <div className="-mt-4">
        <p className="font-display font-bold text-sm text-foreground leading-snug mb-3">
          {t.header}
        </p>
        <p className="text-muted text-sm leading-relaxed">{t.quote}</p>
      </div>

    </div>
  );
}

export function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="py-28 px-6 bg-surface relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto" ref={ref}>

        <div className="mb-16">
          <p className={["text-accent text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}>
            <span className="w-6 h-px bg-accent" aria-hidden="true" /> Client Stories
          </p>
          <h2
            className={[
              "font-display font-bold text-[clamp(2rem,5vw,3.25rem)] leading-tight text-foreground reveal delay-100",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            What clients say.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <TestimonialCard key={i} t={t} delay={delays[i]} inView={inView} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
