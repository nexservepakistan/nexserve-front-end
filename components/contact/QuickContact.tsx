import { WHATSAPP_URL } from "@/lib/home-data";
import { WhatsAppIcon } from "./ContactIcons";

export function QuickContact() {
  return (
    <section className="w-full max-w-[1120px] rounded-[22.86px] bg-[linear-gradient(135deg,#0B1F3A_0%,#0C213D_14.29%,#0E233F_28.57%,#0F2642_42.86%,#112845_57.14%,#122A47_71.43%,#142D4A_85.71%,#152F4D_100%)] p-5 sm:p-8 lg:p-[46px]">
      <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[34.29px] lg:leading-[46px]">
        Quick Contact
      </h2>
      <p className="py-4 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#D1D5DC] sm:py-5 sm:text-lg sm:leading-[34px]">
        For immediate assistance, chat with us directly on WhatsApp. Our team
        responds quickly to help you book services or answer your questions.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-[11px] rounded-[17.14px] bg-[#FDA400] px-6 py-3.5 font-[family-name:var(--font-poppins)] text-base font-bold text-[#000E2B] transition-opacity hover:opacity-90 sm:w-auto sm:px-[34px] sm:py-[17px] sm:text-xl"
      >
        <WhatsAppIcon />
        Chat on WhatsApp
      </a>
    </section>
  );
}
