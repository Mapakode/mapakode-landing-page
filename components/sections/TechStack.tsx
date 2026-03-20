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
      <Icon className="w-4 h-4 text-[#64748b] group-hover/tech:text-[#345ec4] transition-colors duration-200 shrink-0" />
      <span className="font-display font-semibold text-sm text-[#64748b] whitespace-nowrap group-hover/tech:text-[#345ec4] transition-colors duration-200 cursor-default">
        {name}
      </span>
    </span>
  );
}

export function TechStack() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-20 bg-white border-y border-[#e2e6ef] relative overflow-hidden">
      <div className="mb-8 text-center" ref={ref}>
        <p className={["text-xs text-[#64748b] tracking-widest uppercase reveal", inView ? "in-view" : ""].join(" ")}>
          Tech Stack
        </p>
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
    </section>
  );
}
