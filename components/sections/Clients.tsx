"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const clients = [
  { name: "Fillr", logo: "/images/fillr.svg", link: "https://fillr.work" },
];

export function Clients() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="py-16 px-6 bg-surface relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-8 text-center">
          <p
            className={[
              "text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center justify-center gap-3 reveal",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            <span className="w-8 h-px bg-border" aria-hidden="true" />
            {" "}Trusted By{" "}
            <span className="w-8 h-px bg-border" aria-hidden="true" />
          </p>
          <h2
            className={[
              "font-display font-bold text-[clamp(2rem,5vw,2.5rem)] leading-tight text-foreground reveal delay-100",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            Businesses &amp; Startups{" "}
            <br className="hidden sm:block" />
            <span className="text-accent">That Trust Us.</span>
          </h2>
        </div>

        {/* Client logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {clients.map((client, i) => {
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
            return (
              <a
                key={client.name}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${client.name}`}
                className={[
                  "group relative flex flex-col items-center gap-4 px-10 py-8 rounded-2xl border border-border bg-background/80 backdrop-blur-sm hover:bg-white hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 reveal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                  inView ? "in-view" : "",
                  delays[i] ?? "delay-400",
                ].join(" ")}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <p className="text-sm font-semibold text-muted tracking-wide group-hover:text-foreground transition-colors duration-300">
                  {client.name}
                </p>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
