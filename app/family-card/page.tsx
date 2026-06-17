import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";
import { FamilyCardHeroImage } from "@/components/family-card/FamilyCardHeroImage";
import { FamilyCardPreview } from "@/components/family-card/FamilyCardPreview";
import { MembershipBenefits } from "@/components/family-card/MembershipBenefits";
import { WhyChooseSection } from "@/components/family-card/WhyChooseSection";

export const metadata: Metadata = {
  title: "NexServe Family Card | NexServe Pakistan",
  description:
    "Premium home care membership for your family. Get 15% off all services, no visiting charges, priority booking, and more for Rs. 999/year.",
};

export default function FamilyCardPage() {
  return (
    <>
      <main className="relative isolate w-full bg-white pt-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 sm:gap-16 sm:px-6 md:px-10 lg:gap-20 lg:px-20">
          <div className="flex w-full max-w-[1211px] flex-col items-center text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[69px]">
              NexServe Family Card
            </h1>
            <p className="max-w-[960px] pt-3 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:pt-0 sm:text-lg sm:leading-10">
              Premium home care membership for your family. Get exclusive
              benefits and savings all year round.
            </p>
          </div>

          <div className="flex w-full max-w-[1120px] flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between">
            <MembershipBenefits />
            <FamilyCardHeroImage />
          </div>

          <FamilyCardPreview />

          <WhyChooseSection />
        </div>
      </main>
      <FloatingWhatsApp />
    </>
  );
}
