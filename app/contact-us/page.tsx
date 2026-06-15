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
      <main className="relative isolate w-full bg-[#F6F8FB] py-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-20 px-20">
          <div className="flex w-full max-w-[1120px] flex-col items-center gap-[61px]">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[69px] text-[#000E2B]">
                Contact Us
              </h1>
              <p className="max-w-[664px] font-[family-name:var(--font-poppins)] text-[17px] leading-[37px] text-[#6B7280]">
                Get in touch with us for any inquiries or to book our services.
                We&apos;re here to help!
              </p>
            </div>

            <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:gap-[97px]">
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
