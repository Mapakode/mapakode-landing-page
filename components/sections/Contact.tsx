"use client";

import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" className="py-28 px-6 bg-[#345ec4] relative overflow-hidden">
      {/* Faint radial depth in bottom-left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none bg-[radial-gradient(ellipse_70%_70%_at_10%_100%,rgba(0,0,0,0.22),transparent)]" />
      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: headline */}
          <div>
            <p className={["text-white/60 text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-2 reveal", inView ? "in-view" : ""].join(" ")}>
              <span className="w-6 h-px bg-white/60" /> Get In Touch
            </p>
            <h2
              className={[
                "font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] text-white reveal",
                inView ? "in-view" : "",
              ].join(" ")}
            >
              Let&apos;s Build
              <br />
              <span className="text-[#6cd4fe]">Something</span>
              <br />
              Great.
            </h2>
            <div className="mt-8 w-12 h-px bg-white/30" />
          </div>

          {/* Right: contact options */}
          <div
            className={[
              "flex flex-col gap-5 reveal-right",
              inView ? "in-view" : "",
            ].join(" ")}
          >
            <p className="text-white/70 leading-relaxed text-sm">
              Ready to bring your idea to life? Whether you have a fully-formed
              plan or just a concept, we&apos;d love to hear from you.
            </p>

            <a
              href="mailto:hello@mapakode.com"
              className="group flex items-center gap-4 p-5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition-colors duration-200 card-lift"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200 shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/60 mb-0.5">Email us at</p>
                <p className="text-sm text-white font-medium">
                  hello@mapakode.com
                </p>
              </div>
            </a>

            <div className="p-5 rounded-xl border border-white/20 bg-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-0.5">Prefer a call?</p>
                  <p className="text-sm text-white font-medium">
                    Book a free discovery session
                  </p>
                </div>
              </div>
              <Button className="w-full bg-white text-[#345ec4] font-semibold hover:bg-[#6cd4fe] hover:text-[#0d1117] rounded-lg h-10 text-sm transition-all duration-200">
                Book a Meeting
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
