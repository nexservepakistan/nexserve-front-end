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
  return (
    <>
      <main className="relative isolate w-full bg-[#F6F8FB] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="flex w-full max-w-[1120px] flex-col items-center gap-10 sm:gap-16 lg:gap-20">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[69px]">
                Our Services
              </h1>
              <p className="max-w-[960px] pt-3 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:pt-0 sm:text-lg sm:leading-10">
                Professional home maintenance services delivered by verified
                technicians
              </p>
            </div>

            <div className="grid w-full grid-cols-1 justify-items-center gap-5 sm:gap-6 md:grid-cols-2 md:gap-x-[42px] md:gap-y-[25px] xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>

            <FamilyCardCta />
          </div>
        </div>
      </main>
      <FloatingWhatsApp />
    </>
  );
}
