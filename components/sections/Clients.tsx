"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const clients = [
  { name: "Fillr", logo: "/clients/fillr.svg", link: "https://fillr.work" },
];

export function Clients() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="py-16 px-6 bg-[#345ec4] relative overflow-hidden">
      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Depth radials */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_100%_0%,rgba(108,212,254,0.22),transparent)]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,rgba(0,0,0,0.22),transparent)]" />

      <div className="relative max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-8 text-center">
          <p
            className={[
              "text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center justify-center gap-3 reveal",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            <span className="w-8 h-px bg-white/30" />{" "}
            Trusted By{" "}
            <span className="w-8 h-px bg-white/30" />
          </p>
          <h2
            className={[
              "font-display font-bold text-[clamp(2rem,5vw,2.5rem)] leading-tight text-white reveal",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            Businesses &amp; Startups{" "}
            <br className="hidden sm:block" />
            <span className="text-[#6cd4fe]">That Trust Us.</span>
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
                className={[
                  "group relative flex flex-col items-center gap-4 px-10 py-8 rounded-2xl border border-white/20 bg-white/8 backdrop-blur-sm hover:bg-white/14 hover:border-white/30 transition-all duration-300 card-lift reveal",
                  inView ? "in-view" : "",
                  delays[i] ?? "delay-400",
                ].join(" ")}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="text-center">
                  <p className="text-sm font-semibold text-white/80 tracking-wide">
                    {client.name}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
