"use client";

import { useInView } from "@/hooks/useInView";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "From pixel-perfect landing pages to fully responsive, performant websites that convert visitors into customers.",
    tags: ["Landing Pages", "Responsive Design", "Performance"],
  },
  {
    number: "02",
    title: "Tailored Solutions",
    description:
      "Custom features, integrations, and workflows designed around the way you actually work — not the other way around.",
    tags: ["Custom Features", "API Integrations", "Automation"],
  },
  {
    number: "03",
    title: "Mobile App Development",
    description:
      "Native and cross-platform iOS and Android apps built for speed, reliability, and a great user experience.",
    tags: ["iOS", "Android", "Cross-Platform"],
  },
];

export function Services() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="services"
      className="py-28 px-6 bg-background relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto" ref={ref}>
        {/* Left-aligned header */}
        <div className="mb-16 max-w-xl">
          <p
            className={[
              "text-accent text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            <span className="w-6 h-px bg-accent" aria-hidden="true" /> What We Do
          </p>
          <h2
            className={[
              "font-display font-black text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.02] text-foreground reveal delay-100",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            Services built to ship.
          </h2>
          <p
            className={[
              "mt-4 text-muted text-sm leading-relaxed reveal delay-200",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            Every project is a collaboration. We listen, plan, and execute with
            precision.
          </p>
        </div>

        {/* Service rows */}
        <div className="flex flex-col">
          {services.map((service, i) => {
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <div
                key={service.title}
                className={[
                  "group relative flex flex-col sm:flex-row sm:items-center gap-6 py-10 border-b border-border transition-colors duration-200 hover:bg-surface reveal",
                  i === 0 ? "border-t" : "",
                  inView ? "in-view" : "",
                  delays[i] ?? "delay-300",
                ].join(" ")}
                style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
              >
                {/* Large typographic number */}
                <span className="font-display font-black text-4xl text-border group-hover:text-accent/30 transition-colors duration-200 select-none shrink-0 w-14">
                  {service.number}
                </span>

                {/* Title + description */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-foreground text-lg mb-1 group-hover:text-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:justify-end sm:shrink-0 sm:max-w-55">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted group-hover:border-accent/30 group-hover:text-accent transition-colors duration-200"
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
