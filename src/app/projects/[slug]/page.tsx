import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyHero } from "@/components/sections/casestudies/CaseStudyHero";
import { CaseStudyOverview } from "@/components/sections/casestudies/CaseStudyOverview";
import { CaseStudyChallenge } from "@/components/sections/casestudies/CaseStudyChallenge";
import { CaseStudyFeatures } from "@/components/sections/casestudies/CaseStudyFeatures";
import { CaseStudyCTA } from "@/components/sections/casestudies/CaseStudyCTA";
import { getCaseStudy, caseStudies } from "@/src/data/case-studies/index";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `Case Study: ${cs.category}`,
    description: cs.hero.sub,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <Navbar />
      <main id="main">
        <CaseStudyHero category={cs.category} tags={cs.tags} hero={cs.hero} image={cs.image} />
        <CaseStudyOverview overview={cs.overview} />
        <CaseStudyChallenge challenge={cs.challenge} />
        <CaseStudyFeatures features={cs.features} />
<CaseStudyCTA />
      </main>
      <Footer />
    </>
  );
}
