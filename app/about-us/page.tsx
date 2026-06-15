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
      <main className="relative isolate w-full bg-[#F6F8FB] pt-20 pb-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-20 px-20">
          <div className="flex w-full max-w-[1120px] flex-col items-center text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[69px] text-[#000E2B]">
              About Us
            </h1>
            <p className="max-w-[920px] font-[family-name:var(--font-poppins)] text-lg leading-[27px] text-[#6B7280]">
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
