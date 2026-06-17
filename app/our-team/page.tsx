import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { TeamStandsOutSection } from "@/components/team/TeamStandsOutSection";
import { teamMembers } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "Our Team | NexServe Pakistan",
  description:
    "Meet our verified and experienced service providers dedicated to quality home care in Karachi.",
};

export default function OurTeamPage() {
  return (
    <>
      <main className="relative isolate w-full bg-[#F6F8FB] pt-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 sm:gap-16 sm:px-6 md:px-10 lg:gap-20 lg:px-20">
          <div className="flex w-full max-w-[1120px] flex-col items-center text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[69px]">
              Our Team
            </h1>
            <p className="max-w-[613px] pt-3 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:pt-0 sm:text-lg sm:leading-[27px]">
              Meet our verified and experienced service providers dedicated to
              quality home care.
            </p>
          </div>

          <div className="grid w-full max-w-[1120px] grid-cols-1 justify-items-center gap-6 sm:gap-9 md:grid-cols-2 md:justify-items-stretch xl:grid-cols-3 xl:justify-items-start">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>

          <TeamStandsOutSection />
        </div>
      </main>
      <FloatingWhatsApp />
    </>
  );
}
