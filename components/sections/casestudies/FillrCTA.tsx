import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FillrCTA() {
  return (
    <section className="py-24 px-6 bg-[#0b4ed7] relative overflow-hidden">
      {/* Subtle radial depth */}
      <div
        className="absolute -top-32 -right-32 w-120 h-120 rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-5">
          Ready to Build?
        </p>
        <h2 className="font-display font-black text-[clamp(2rem,5vw,3.5rem)] leading-[1.06] text-white mb-4">
          Have a project like this?
        </h2>
        <p className="text-white/70 text-base leading-relaxed max-w-md mx-auto mb-10">
          We build fast, fair, and tailored — just like Fillr. Let&apos;s talk about what you want to create.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/#contact">
            <Button className="h-12 px-8 rounded-full bg-white text-accent font-semibold text-sm hover:bg-white/90 transition-all duration-200 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent">
              Book a Free Call
            </Button>
          </Link>
          <Link href="/#projects">
            <Button
              variant="outline"
              className="h-12 px-8 rounded-full border-white/40 text-white font-semibold text-sm hover:border-white hover:bg-white/10 bg-transparent transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              <ArrowUpRight className="w-4 h-4 rotate-[-135deg] mr-1.5" aria-hidden="true" />
              All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
