import type { CaseStudyData } from "./types";

export const curriculumAdvising: CaseStudyData = {
  slug: "curriculum-advising",
  category: "Curriculum Advising System",
  image: "/images/casestudies/curriclum.png",
  tags: [
    "EdTech",
    "Academic Advising",
    "Curriculum Management",
    "Dashboard / Analytics",
    "SaaS",
  ],
  hero: {
    headline: "Keeping Every Student On Track.",
    sub: "A smarter advising system that closes gaps before they become dropouts.",
  },
  overview: [
    {
      title: "The Problem",
      body: "Students were falling behind without knowing it — misaligned course plans, missed advising sessions, and no early warning system meant issues were caught too late to fix.",
    },
    {
      title: "The Solution",
      body: "A unified platform giving instructors and academic advisors real-time visibility into every student's curriculum progress — with scheduling tools, progress alerts, and analytics built in.",
    },
    {
      title: "The Outcome",
      body: "A fully operational advising system that transformed reactive support into proactive guidance, keeping students aligned with curriculum goals from enrollment to graduation.",
    },
  ],
  challenge: {
    heading: "Advising students before the damage is done.",
    paragraphs: [
      "Students often discover they're off-track too late — a misaligned elective, a skipped prerequisite, a missed advising appointment. By the time the problem surfaces, fixing it means lost time, added costs, or worse, dropping out.",
      "Instructors and academic advisors faced the same struggle from the other side. Without a centralized view of student progress, advising was reactive — driven by students who sought help, not those who needed it most.",
      "The goal was to flip the model entirely: give instructors the tools to monitor curriculum alignment across every student, surface at-risk cases early, and make advising sessions structured, scheduled, and data-informed.",
    ],
  },
  features: [
    {
      icon: "BookOpen",
      title: "Curriculum Mapping",
      description:
        "A visual map of every student's course plan against curriculum requirements — instructors see alignment gaps, prerequisite issues, and off-track electives at a glance, before they become academic problems.",
    },
    {
      icon: "CalendarCheck",
      title: "Advising Session Scheduling",
      description:
        "Students book advising sessions directly through the platform. Instructors manage availability, set session agendas, and keep a structured record of every advising interaction — no more lost emails or missed appointments.",
    },
    {
      icon: "BellRing",
      title: "Student Progress Monitoring",
      description:
        "Automated alerts flag students who fall below progress thresholds or miss key curriculum milestones. Instructors get a prioritized list of who needs outreach — turning reactive advising into proactive intervention.",
    },
    {
      icon: "BarChart3",
      title: "Analytics & Reports",
      description:
        "Institution-wide dashboards track curriculum alignment trends, advising session volumes, and student outcome metrics. Administrators get the data they need to make informed decisions about curriculum design and resource allocation.",
    },
  ],
};
