import type { MetadataRoute } from "next";
import { caseStudies } from "@/src/data/case-studies/index";

const BASE_URL = "https://mapakode.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE_URL}/projects/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...projectEntries,
  ];
}
