import { Hero } from "@/components/Hero";
import { OfferingsGrid } from "@/components/OfferingsGrid";
import { ResearchPapers } from "@/components/ResearchPapers";
import { FounderSection } from "@/components/FounderSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import offerings from "@/content/offerings.json";
import researchPapers from "@/content/research-papers.json";
import type { Offering, ResearchPaper } from "@/types/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OfferingsGrid offerings={offerings as Offering[]} />
      <ResearchPapers papers={researchPapers as ResearchPaper[]} />
      <FounderSection />
      <ArchitectureSection />
    </>
  );
}
