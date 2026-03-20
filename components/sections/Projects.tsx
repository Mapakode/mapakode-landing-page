"use client";

import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Fillr",
    subtitle: "AI-powered creative supernetwork. Freelancing made fast, fair, and easy  for Filipino freelancers.",
    tags: ["AI", "Freelancing", "Marketplace", "Matchmaking"],
    link: "https://fillr.work",
  }
];

export function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="projects" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="mb-16">
          <p className={["text-[#345ec4] text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}>
            <span className="w-6 h-px bg-[#345ec4]" /> Featured Work
          </p>
          <h2
            className={[
              "font-display font-bold text-[clamp(2rem,5vw,3.25rem)] leading-tight text-[#0d1117] reveal",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            Projects We&apos;re Proud Of.
          </h2>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "group relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-b border-[#e2e6ef] cursor-pointer reveal",
                i === 0 ? "border-t" : "",
                inView ? "in-view" : "",
                i === 0 ? "delay-100" : "delay-200",
              ].join(" ")}
            >
              <div className="flex items-center gap-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#0d1117] mb-1 group-hover:text-[#345ec4] transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-[#64748b] text-sm">{project.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 sm:shrink-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-[#f7f9fc] text-[#64748b] border border-[#e2e6ef] text-xs font-normal rounded-full px-3 group-hover:border-[#345ec4]/30 group-hover:text-[#345ec4] transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="w-9 h-9 rounded-full border border-[#e2e6ef] flex items-center justify-center shrink-0 group-hover:border-[#345ec4] group-hover:bg-[#345ec4] transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 text-[#64748b] group-hover:text-white transition-colors duration-200" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
