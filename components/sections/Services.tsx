"use client";

import { useInView } from "@/hooks/useInView";
import { Globe, Layers, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "From pixel-perfect landing pages to fully responsive, performant websites that convert visitors into customers.",
    tags: ["Landing Pages", "Responsive Design", "Performance"],
  },
  {
    icon: Layers,
    title: "Tailored Solutions",
    description:
      "Custom features, integrations, and workflows designed around the way you actually work — not the other way around.",
    tags: ["Custom Features", "API Integrations", "Automation"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform iOS and Android apps built for speed, reliability, and a great user experience.",
    tags: ["iOS", "Android", "Cross-Platform"],
  },
];

export function Services() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="services" className="py-28 px-6 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className={["text-[#345ec4] text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}>
              <span className="w-6 h-px bg-[#345ec4]" /> What We Do
            </p>
            <h2
              className={[
                "font-display font-bold text-[clamp(2rem,5vw,3.25rem)] leading-tight text-[#0d1117] reveal",
                inView ? "in-view" : "",
              ].join(" ")}
            >
              Services Built for Results.
            </h2>
          </div>
          <p
            className={[
              "text-[#64748b] text-sm max-w-xs leading-relaxed reveal delay-200",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            Every project is a collaboration. We listen, plan, and execute with precision.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <div
                key={service.title}
                className={[
                  "group p-8 rounded-xl border border-[#e2e6ef] bg-white card-lift flex flex-col gap-5 reveal",
                  inView ? "in-view" : "",
                  delays[i] ?? "delay-300",
                ].join(" ")}
              >
                <div className="w-11 h-11 rounded-lg bg-[#eef2f8] flex items-center justify-center group-hover:bg-[#345ec4]/10 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#345ec4]" strokeWidth={1.5} />
                </div>

                <div className="flex-1">
                  <h3 className="font-display font-bold text-[#0d1117] text-base mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e2e6ef]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-[#e2e6ef] text-[#64748b] group-hover:border-[#345ec4]/20 group-hover:text-[#345ec4] transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
