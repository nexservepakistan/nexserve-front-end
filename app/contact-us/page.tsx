import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { QuickContact } from "@/components/contact/QuickContact";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Contact Us | NexServe Pakistan",
  description:
    "Get in touch with NexServe Pakistan for inquiries or to book home services in Karachi. Call, email, or chat on WhatsApp.",
};

export default function ContactUsPage() {
  return (
    <>
      <main className="relative isolate w-full bg-[#F6F8FB] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 sm:gap-16 sm:px-6 md:px-10 lg:gap-20 lg:px-20">
          <div className="flex w-full max-w-[1120px] flex-col items-center gap-8 sm:gap-12 lg:gap-[61px]">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[69px]">
                Contact Us
              </h1>
              <p className="max-w-[664px] pt-3 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:pt-0 sm:text-[17px] sm:leading-[37px]">
                Get in touch with us for any inquiries or to book our services.
                We&apos;re here to help!
              </p>
            </div>

            <div className="flex w-full flex-col items-stretch justify-between gap-8 sm:gap-12 lg:flex-row lg:gap-[97px]">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>

          <QuickContact />
        </div>
      </main>
      <FloatingWhatsApp />
    </>
  );
}
