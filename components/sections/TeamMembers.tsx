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
    bio: "Ivan is where your journey with MapaKode begins. Driven by a passion for solving real-world problems, he handles the entire business front and strategic alignment of your project. From your very first meeting, Ivan takes full ownership of client relations, project scoping, and business strategy. Because he has absolute autonomy over project management, you get fast, decisive answers without corporate red tape. But he doesn't just strategize—Ivan also builds the underlying engine, managing the backend development to ensure that your business requirements are perfectly translated into robust, logical code. He is your champion for growth, making sure your product aligns with your market goals.",
    linkedIn: "https://www.linkedin.com/in/sovanreign/",
  },
  {
    imageSrc: "/images/members/emman-image.png",
    name: "Emmanuel Enalpe III",
    title: "Co-Founder & CTO",
    bio: "Once the strategic blueprint is set, Emmanuel takes the wheel to bring it to life. A full-stack engineer with an obsession for rapid deployment, he commands the entire technical infrastructure at MapaKode. Emmanuel owns the frontend experience that your users will interact with, alongside the DevOps and cloud pipelines that keep the application stable and secure. With total autonomy over our tech stack and technical hiring recommendations, he enforces strict code quality standards and deployment processes. Emmanuel ensures that your product is not just built fast, but engineered to scale seamlessly as your user base grows.",
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
                  <p className="text-muted text-sm leading-relaxed max-w-2xl mb-5">
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
