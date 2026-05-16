"use client";

import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: headline */}
          <div>
            <p
              className={[
                "text-accent text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-2 reveal",
                inView ? "in-view" : "",
              ].join(" ")}
            >
              <span className="w-6 h-px bg-accent" aria-hidden="true" /> Get In
              Touch
            </p>
            <h2
              className={[
                "font-display font-black text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] text-foreground reveal delay-100",
                inView ? "in-view" : "",
              ].join(" ")}
            >
              Let&apos;s Build
              <br />
              <span className="text-accent">Something</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(120deg, var(--accent) 0%, var(--accent-dim) 50%, var(--accent-sky) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Great.
              </span>
            </h2>
            <p
              className={[
                "mt-4 text-muted text-sm reveal delay-200",
                inView ? "in-view" : "",
              ].join(" ")}
            >
              We&apos;ll take it from here.
            </p>
            <div className="mt-6 w-12 h-px bg-border" />
          </div>

          {/* Right: contact options */}
          <div className="flex flex-col gap-8 p-8 rounded-2xl border border-border bg-surface/60 shadow-[0_4px_24px_rgba(11,78,215,0.07)]">
            <p
              className={[
                "text-muted leading-relaxed text-sm reveal-right",
                inView ? "in-view" : "",
              ].join(" ")}
            >
              Ready to bring your idea to life? Whether you have a fully-formed
              plan or just a concept, we&apos;d love to hear from you.
            </p>

            {/* Email */}
            <a
              href="mailto:hello@mapakode.com"
              className={[
                "group flex items-center gap-4 reveal-right delay-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                inView ? "in-view" : "",
              ].join(" ")}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200 shrink-0">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">Email us at</p>
                <p className="text-sm text-foreground font-medium group-hover:text-accent transition-colors duration-200">
                  hello@mapakode.com →
                </p>
              </div>
            </a>

            {/* Book a call */}
            <div
              className={[
                "reveal-right delay-200",
                inView ? "in-view" : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Prefer a call?</p>
                  <p className="text-sm text-foreground font-medium">
                    Book a free discovery session
                  </p>
                </div>
              </div>
              <Button className="bg-accent text-white font-semibold hover:bg-accent-dim rounded-full h-10 px-6 text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-accent/20">
                Book a Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
