export interface CaseStudyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudyData {
  slug: string;
  category: string;
  tags: string[];
  image: string;
  hero: {
    headline: string;
    sub: string;
  };
  overview: Array<{ title: string; body: string }>;
  challenge: {
    heading: string;
    paragraphs: string[];
  };
  features: CaseStudyFeature[];
}
