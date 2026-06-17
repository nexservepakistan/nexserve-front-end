import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { CommitmentSection } from "@/components/about/CommitmentSection";
import { ReadyCta } from "@/components/about/ReadyCta";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "About Us | NexServe Pakistan",
  description:
    "NexServe Pakistan is built to make home maintenance simple, reliable, and affordable for every household in Karachi.",
};

export default function AboutUsPage() {
  return (
    <>
      <main className="relative isolate w-full bg-[#F6F8FB] pt-20 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 sm:gap-16 sm:px-6 md:px-10 lg:gap-20 lg:px-20">
          <div className="flex w-full max-w-[1120px] flex-col items-center text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[69px]">
              About Us
            </h1>
            <p className="max-w-[920px] pt-3 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:pt-0 sm:text-lg sm:leading-[27px]">
              NexServe Pakistan is built to make home maintenance simple,
              reliable, and affordable for every household in Karachi.
            </p>
          </div>

          <AboutContent />

          <CommitmentSection />

          <ReadyCta />
        </div>
      </main>
      <FloatingWhatsApp />
    </>
  );
}
