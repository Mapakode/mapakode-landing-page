"use client";

import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    header: "Exceeded Expectations",
    quote:
      "MapaKode exceeded our expectations with their reliable service and rapid turnaround on revisions. Their team's professionalism and commitment to quality made a real difference for us. Highly recommended!",
    name: "P. Custodio",
    role: " ",
    company: " ",
    project: "Curriculum Advising Management System",
    initial: "C",
  },
  {
    header: "On Time & On Budget",
    quote:
      "MapaKode delivered exactly what we needed, on time and within budget. Their team was professional, responsive, and delivered a high-quality product that exceeded our expectations.",
    name: "S. Cruz",
    role: " ",
    company: " ",
    project: "Barangay Flood Evacuation Planning System",
    initial: "C",
  },
  {
    header: "Clear & Efficient",
    quote:
      "MapaKode worked closely with us to deliver exactly what we needed, communicating clearly and moving efficiently throughout the project. Overall, the system looks good, is functional, and meets our requirements.",
    name: "M. Tedeo",
    role: " ",
    company: " ",
    project: "SSC Project Management System",
    initial: "T",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="py-28 px-6 bg-[#f7f9fc] relative overflow-hidden">
      <div className="section-glow-right" />
      <div className="relative max-w-7xl mx-auto" ref={ref}>

        <div className="mb-16">
          <p className={["text-[#345ec4] text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}>
            <span className="w-6 h-px bg-[#345ec4]" /> Client Stories
          </p>
          <h2
            className={[
              "font-display font-bold text-[clamp(2rem,5vw,3.25rem)] leading-tight text-[#0d1117] reveal",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            What Clients Say About Us.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
          const delays = ["delay-100", "delay-200", "delay-300"];
          return (
            <div
              key={t.name}
              className={[
                "flex flex-col gap-5 p-8 rounded-xl border border-[#e2e6ef] bg-white card-lift reveal",
                inView ? "in-view" : "",
                delays[i] ?? "delay-300",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <span className="font-display font-black text-4xl text-[#345ec4]/15 leading-none select-none">
                  &ldquo;
                </span>
                <p className="font-display font-bold text-sm text-[#0d1117] leading-snug">
                  {t.header}
                </p>
              </div>

              <p className="text-[#64748b] text-sm leading-relaxed flex-1 -mt-3">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#e2e6ef]">
                <div className="w-9 h-9 rounded-full bg-[#eef2f8] flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-sm text-[#345ec4]">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0d1117]">{t.name}</p>
                  {[t.role?.trim(), t.company?.trim(), t.project?.trim()].some(Boolean) && (
                    <p className="text-xs text-[#64748b]">
                      {[t.role?.trim(), t.company?.trim(), t.project?.trim()].filter(Boolean).join(" · ")}
                    </p>
                  )}
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
