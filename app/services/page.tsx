import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";
import { FamilyCardCta } from "@/components/services/FamilyCardCta";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services | NexServe Pakistan",
  description:
    "Professional home maintenance services delivered by verified technicians — plumbing, electrical, AC, cleaning and more in Karachi.",
};

export default function ServicesPage() {
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <>
      <main className="relative isolate w-full bg-[#F6F8FB] py-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-20">
          <div className="flex w-full max-w-[1120px] flex-col items-center gap-20">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[69px] text-[#000E2B]">
                Our Services
              </h1>
              <p className="max-w-[960px] font-[family-name:var(--font-poppins)] text-lg leading-10 text-[#6B7280]">
                Professional home maintenance services delivered by verified
                technicians
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-[50px]">
              <div className="grid w-full grid-cols-1 justify-items-center gap-x-[42px] gap-y-[25px] md:grid-cols-2 xl:grid-cols-3">
                {firstRow.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>

              <div className="flex flex-wrap items-start justify-center gap-x-[42px] gap-y-[25px]">
                {secondRow.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </div>

            <FamilyCardCta />
          </div>
        </div>
      </main>
      <FloatingWhatsApp />
    </>
  );
}
