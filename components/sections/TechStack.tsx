"use client";

import { useInView } from "@/hooks/useInView";
import {
  SiPython,
  SiNestjs,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiVercel,
  SiRender,
  SiMongodb,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

interface TechEntry {
  name: string;
  Icon: IconType;
}

const techRow1: TechEntry[] = [
  { name: "Python",     Icon: SiPython },
  { name: "NestJS",     Icon: SiNestjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Next.js",    Icon: SiNextdotjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker",     Icon: SiDocker },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "AWS",        Icon: FaAws },
  { name: "Vercel",     Icon: SiVercel },
  { name: "Render",     Icon: SiRender },
  { name: "MongoDB",    Icon: SiMongodb },
];

const techRow2: TechEntry[] = [
  { name: "Docker",     Icon: SiDocker },
  { name: "Next.js",    Icon: SiNextdotjs },
  { name: "AWS",        Icon: FaAws },
  { name: "Python",     Icon: SiPython },
  { name: "MongoDB",    Icon: SiMongodb },
  { name: "Vercel",     Icon: SiVercel },
  { name: "NestJS",     Icon: SiNestjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Render",     Icon: SiRender },
  { name: "JavaScript", Icon: SiJavascript },
];

const row1Items = [
  ...techRow1.map((t) => ({ ...t, key: `r1-a-${t.name}` })),
  ...techRow1.map((t) => ({ ...t, key: `r1-b-${t.name}` })),
];

const row2Items = [
  ...techRow2.map((t) => ({ ...t, key: `r2-a-${t.name}` })),
  ...techRow2.map((t) => ({ ...t, key: `r2-b-${t.name}` })),
];

function TechItem({ name, Icon }: Readonly<TechEntry>) {
  return (
    <span className="flex items-center gap-2.5 px-6 group/tech">
      <Icon className="w-4 h-4 text-muted group-hover/tech:text-accent transition-colors duration-200 shrink-0" aria-hidden="true" />
      <span className="font-display font-semibold text-sm text-muted whitespace-nowrap group-hover/tech:text-accent transition-colors duration-200 cursor-default">
        {name}
      </span>
    </span>
  );
}

export function TechStack() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="relative">
        {/* Left-aligned header */}
        <div className="mb-10 px-6 max-w-7xl mx-auto" ref={ref}>
          <p className={["text-accent text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}>
            <span className="w-6 h-px bg-accent" aria-hidden="true" /> Our Stack
          </p>
          <h2
            className={["font-display font-bold text-2xl md:text-3xl text-foreground leading-tight reveal delay-100", inView ? "in-view" : ""].join(" ")}
          >
            Tools we ship with.
          </h2>
        </div>

        {/* Row 1: left to right */}
        <div className={["overflow-hidden mb-4 reveal delay-200", inView ? "in-view" : ""].join(" ")}>
          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {row1Items.map(({ name, Icon, key }) => (
              <TechItem key={key} name={name} Icon={Icon} />
            ))}
          </div>
        </div>

        {/* Row 2: right to left */}
        <div className={["overflow-hidden reveal delay-300", inView ? "in-view" : ""].join(" ")}>
          <div className="flex animate-marquee-reverse" style={{ width: "max-content" }}>
            {row2Items.map(({ name, Icon, key }) => (
              <TechItem key={key} name={name} Icon={Icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
