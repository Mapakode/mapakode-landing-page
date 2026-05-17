import type { CaseStudyData } from "./types";

export const signLanguageTranslator: CaseStudyData = {
  slug: "sign-language-translator",
  category: "Sign Language Translator",
  image: "/images/casestudies/sign-language.png",
  tags: [
    "Mobile App",
    "Sign Language",
    "Computer Vision",
    "Accessibility",
    "Android",
  ],
  hero: {
    headline: "Speaking the Language of Hands.",
    sub: "A motion-based Android app that bridges real-time communication between deaf and non-deaf individuals — no interpreter required.",
  },
  overview: [
    {
      title: "The Problem",
      body: "Communication between deaf individuals and those unfamiliar with sign language remains a persistent barrier — no accessible, real-time tool existed to bridge the gap in everyday interactions.",
    },
    {
      title: "The Solution",
      body: "A two-way Android translator: type text and receive sign language image sequences, or perform sign language in front of your camera and get an instant text transcript.",
    },
    {
      title: "The Outcome",
      body: "A fully functional mobile app enabling bidirectional, real-time communication between deaf and non-deaf users without requiring either party to learn a new language.",
    },
  ],
  challenge: {
    heading: "Two languages. One seamless conversation.",
    paragraphs: [
      "For deaf individuals, everyday communication with non-signers requires a human interpreter or constant back-and-forth via written notes — slow, inaccessible, and often unavailable at the moment it's needed most.",
      "Building a translator posed a dual challenge: the app had to work in both directions simultaneously. Text-to-sign required generating accurate, recognizable sign language image sequences from arbitrary input. Sign-to-text required interpreting live hand motion — a computer vision problem where lighting, angle, and speed all affect accuracy.",
      "The goal was an app simple enough for anyone to pick up and use without training, yet powerful enough to handle real-world signing — making genuine, fluid conversation between deaf and non-deaf users possible for the first time.",
    ],
  },
  features: [
    {
      icon: "Keyboard",
      title: "Text-to-Sign Translation",
      description:
        "Type any message and the app generates the corresponding sign language image sequence — giving non-signers an instant, visual way to communicate with deaf individuals without knowing a single sign.",
    },
    {
      icon: "Video",
      title: "Sign-to-Text Translation",
      description:
        "Point the camera and perform sign language — the motion recognition engine captures hand gestures in real time and outputs a readable text transcript, removing the need for a human interpreter.",
    },
    {
      icon: "Zap",
      title: "Real-Time Motion Recognition",
      description:
        "Powered by a computer vision model trained on sign language gesture datasets, the app processes motion frame-by-frame to deliver fast, accurate translations with minimal latency on standard Android hardware.",
    },
    {
      icon: "Accessibility",
      title: "Accessibility-First Design",
      description:
        "Built with deaf users as the primary audience — high-contrast UI, large touch targets, no audio dependencies, and an interface that works entirely through vision and gesture without any prior technical knowledge.",
    },
  ],
};
