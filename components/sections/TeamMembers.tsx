"use client";

import { useInView } from "@/hooks/useInView";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    imageSrc: "/images/members/ivan-image.png",
    name: "Ivan Ramos",
    title: "Founder & CEO",
    bio: "Passionate about building products that solve real problems. Leads business strategy, client relations, and product direction at MapaKode.",
    linkedIn: "https://www.linkedin.com/in/sovanreign/",
  },
  {
    imageSrc: "/images/members/emman-image.png",
    name: "Emmanuel Enalpe III",
    title: "Co-Founder & CTO",
    bio: "Full-stack engineer with a love for clean architecture and fast delivery. Leads engineering, infrastructure, and technical decisions at MapaKode.",
    linkedIn: "https://www.linkedin.com/in/eenlpe1/",
  },
];

export function TeamMembers() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="flex flex-col">
          {founders.map((person, i) => {
            const delays = ["delay-100", "delay-200"];
            const isReversed = i % 2 !== 0;

            return (
              <div
                key={`${person.title}-${i}`}
                className={[
                  "group flex flex-col sm:flex-row sm:items-center gap-10 py-16 border-b border-border reveal",
                  i === 0 ? "border-t" : "",
                  isReversed ? "sm:flex-row-reverse" : "",
                  inView ? "in-view" : "",
                  delays[i] ?? "delay-200",
                ].join(" ")}
              >
                {/* Photo */}
                <div className="w-52 h-52 rounded-2xl border border-border overflow-hidden shrink-0 group-hover:border-accent/30 transition-colors duration-200">
                  <Image
                    src={person.imageSrc}
                    alt={person.name}
                    width={176}
                    height={170}
                    quality={90}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Info */}
                <div className={isReversed ? "sm:text-right" : ""}>
                  <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">
                    {person.title}
                  </p>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-3">
                    {person.name}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed max-w-md mb-5">
                    {person.bio}
                  </p>
                  <Link
                    href={person.linkedIn}
                    aria-label={`${person.name} on LinkedIn`}
                    className={[
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted hover:text-accent hover:border-accent text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                      isReversed ? "flex-row-reverse" : "",
                    ].join(" ")}
                  >
                    <Linkedin size={13} strokeWidth={2} aria-hidden="true" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={["mt-16 reveal delay-300", inView ? "in-view" : ""].join(
            " ",
          )}
        >
          <p className="text-muted text-sm mb-4">Want to work with us?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dim transition-colors duration-200 shadow-lg shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
