import { freelanceMarketplace } from "./freelance-marketplace";
import { curriculumAdvising } from "./curriculum-advising";
import { signLanguageTranslator } from "./sign-language-translator";
import type { CaseStudyData } from "./types";

export const caseStudies: CaseStudyData[] = [
  freelanceMarketplace,
  curriculumAdvising,
  signLanguageTranslator,
];

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export type { CaseStudyData } from "./types";
