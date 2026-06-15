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
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-20 px-20">
          <div className="flex w-full max-w-[1211px] flex-col items-center text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[69px] text-[#000E2B]">
              NexServe Family Card
            </h1>
            <p className="max-w-[960px] font-[family-name:var(--font-poppins)] text-lg leading-10 text-[#6B7280]">
              Premium home care membership for your family. Get exclusive
              benefits and savings all year round.
            </p>
          </div>

          <div className="flex w-full max-w-[1120px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
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
