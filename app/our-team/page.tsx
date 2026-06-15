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
  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3);

  return (
    <>
      <main className="relative isolate w-full bg-[#F6F8FB] pt-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-20 px-20">
          <div className="flex w-full max-w-[1120px] flex-col items-center text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[69px] text-[#000E2B]">
              Our Team
            </h1>
            <p className="max-w-[613px] font-[family-name:var(--font-poppins)] text-lg leading-[27px] text-[#6B7280]">
              Meet our verified and experienced service providers dedicated to
              quality home care.
            </p>
          </div>

          <div className="flex w-full max-w-[1120px] flex-col gap-[50px]">
            <div className="grid grid-cols-1 justify-items-center gap-9 md:grid-cols-2 xl:grid-cols-3">
              {firstRow.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>

            <div className="flex justify-start">
              {secondRow.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>

          <TeamStandsOutSection />
        </div>
      </main>
      <FloatingWhatsApp />
    </>
  );
}
