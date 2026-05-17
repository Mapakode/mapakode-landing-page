"use client";

import { Zap, ShieldCheck, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  {
    icon: Layers,
    label: "11+ Projects",
    sub: "Shipped",
    position: "top-[22%] right-[5%] lg:right-[9%]",
    delay: "delay-600",
    float: "delay-0",
  },
  {
    icon: Zap,
    label: "Fast Delivery",
    sub: "No long waits",
    position: "bottom-[28%] left-[3%] lg:left-[7%]",
    delay: "delay-700",
    float: "delay-150",
  },
  {
    icon: ShieldCheck,
    label: "No Hidden Fees",
    sub: "Transparent pricing",
    position: "top-[54%] right-[2%] lg:right-[7%]",
    delay: "delay-800",
    float: "delay-300",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Dot-grid background */}
      <div
        className="hero-dot-grid absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      {/* Blue radial glow — top right */}
      <div
        className="absolute -top-40 -right-40 w-175 h-175 rounded-full pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(11,78,215,0.6) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Cyan radial glow — bottom left */}
      <div
        className="absolute -bottom-40 -left-40 w-150 h-150 rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(49,193,195,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Floating stat chips — hidden on mobile, visible sm+ */}
      {stats.map(({ icon: Icon, label, sub, position, delay, float }) => (
        <div
          key={label}
          className={`absolute ${position} hidden sm:block select-none z-10 animate-chip-bounce-in animate-float-chip ${delay} ${float}`}
          aria-hidden="true"
        >
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-chip glass-chip-hover">
            <span className="chip-icon w-8 h-8 flex items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0 transition-colors duration-200">
              <Icon size={15} strokeWidth={2.2} />
            </span>
            <div>
              <p className="text-xs font-semibold text-foreground leading-tight">
                {label}
              </p>
              <p className="text-[10px] text-muted leading-tight">{sub}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Agency badge */}
        <div className="animate-hero-fade-up delay-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-sm mb-8">
          <span
            className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot shrink-0"
            aria-hidden="true"
          />
          <span className="text-xs font-semibold text-muted tracking-wide uppercase">
            Software Agency
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black tracking-tight leading-[1.06]">
          <span className="animate-hero-fade-up delay-100 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-2">
            You do Your Business,
          </span>
          <span className="animate-hero-fade-up delay-200 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-muted font-bold mb-2">
            We do the Code.
          </span>
          <span
            className="animate-hero-fade-up delay-300 block text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              background:
                "linear-gradient(120deg, var(--accent) 0%, var(--accent-dim) 50%, var(--accent-sky) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Simple.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-hero-fade-up delay-400 mt-8 text-base md:text-lg text-muted max-w-xl leading-relaxed">
          Affordable, fast, and tailored software solutions — built to help your
          business launch and scale with confidence.
        </p>

        {/* CTAs */}
        <div className="animate-hero-fade-up delay-500 flex flex-col sm:flex-row items-center gap-3 mt-10">
          <Link href="/#projects">
            <Button className="h-12 px-8 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-dim transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              View Our Work
            </Button>
          </Link>
          <Link href="/#contact">
            <Button
              variant="outline"
              className="h-12 px-8 rounded-full border-border text-foreground font-semibold text-sm hover:border-accent hover:text-accent hover:bg-transparent bg-transparent transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Book Free Call
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-hero-fade-up delay-800"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted font-medium">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-accent/60 to-transparent rounded-full" />
      </div>
    </section>
  );
}
