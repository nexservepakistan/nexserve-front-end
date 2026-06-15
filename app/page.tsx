import { AreasSection } from "@/components/home/AreasSection";
import { FamilyCardSection } from "@/components/home/FamilyCardSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { StatsBar } from "@/components/home/StatsBar";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";

export default function Home() {
  return (
    <>
      <main className="relative isolate w-full bg-[#F6F8FB]">
        <HeroSection />
        <StatsBar />
        <WhoWeAreSection />
        <ProblemsSection />
        <HowItWorksSection />
        <FamilyCardSection />
        <AreasSection />
        <ReviewsSection />
        <FaqSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
