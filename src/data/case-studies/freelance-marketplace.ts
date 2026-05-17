import type { CaseStudyData } from "./types";

export const freelanceMarketplace: CaseStudyData = {
  slug: "freelance-marketplace",
  category: "Freelance Marketplace",
  tags: ["AI", "Freelancing", "Marketplace", "Matchmaking"],
  image: "/images/casestudies/freelancing.png",
  hero: {
    headline: "AI-Powered Creative Marketplace.",
    sub: "Freelancing made fast, fair, and easy — matched by AI, protected by escrow.",
  },
  overview: [
    {
      title: "The Problem",
      body: "Freelancers faced a broken marketplace experience — competing with hundreds of applicants, low trust in payments, and no way to build a reputation that followed them across gigs.",
    },
    {
      title: "The Solution",
      body: "A platform where AI does the heavy lifting: intelligent matching sends only the top 5 candidates to clients, while a gamified reputation system and escrow payments build sustainable trust on both sides.",
    },
    {
      title: "The Outcome",
      body: "A fully shipped freelance marketplace with AI-powered matching, milestone tracking, an escrow payment engine, and a live community — built from zero to launch.",
    },
  ],
  challenge: {
    heading: "A marketplace built on trust and intelligence.",
    paragraphs: [
      "The freelance market was growing fast, but the tools hadn't kept up. Clients were drowning in applications — sometimes hundreds for a single post — with no reliable way to find the right fit quickly.",
      "Freelancers faced the opposite problem: spending hours crafting proposals with no guarantee of fairness, and no persistent reputation that could follow them from one platform to another.",
      "The goal was to flip the script — let AI handle the matching, let escrow handle the trust, and let a gamified score system give freelancers a career asset they actually own.",
    ],
  },
  features: [
    {
      icon: "Sparkles",
      title: "AI Matching Engine",
      description:
        "Instead of open bidding, our AI scores freelancers against each job — skills, portfolio fit, collaboration style, and track record — then surfaces only the top 5. Clients decide faster. Freelancers compete smarter.",
    },
    {
      icon: "Star",
      title: "Reputation Score System",
      description:
        "A gamified reputation engine that tracks delivery consistency, client ratings, and revision rates. Higher scores unlock priority matching — giving top freelancers a compounding career advantage.",
    },
    {
      icon: "ListChecks",
      title: "Milestone Tracking",
      description:
        "Projects are broken into milestones with built-in revision rounds. Both parties see progress in real time, with a structured approval flow that keeps work moving without miscommunication.",
    },
  ],
};
