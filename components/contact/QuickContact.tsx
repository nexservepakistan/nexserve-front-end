import { WHATSAPP_URL } from "@/lib/home-data";
import { WhatsAppIcon } from "./ContactIcons";

export function QuickContact() {
  return (
    <section className="w-full max-w-[1120px] rounded-[22.86px] bg-[linear-gradient(135deg,#0B1F3A_0%,#0C213D_14.29%,#0E233F_28.57%,#0F2642_42.86%,#112845_57.14%,#122A47_71.43%,#142D4A_85.71%,#152F4D_100%)] p-[46px]">
      <h2 className="font-[family-name:var(--font-poppins)] text-[34.29px] font-bold leading-[46px] text-white">
        Quick Contact
      </h2>
      <p className="py-5 font-[family-name:var(--font-poppins)] text-lg leading-[34px] text-[#D1D5DC]">
        For immediate assistance, chat with us directly on WhatsApp. Our team
        responds quickly to help you book services or answer your questions.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-[11px] rounded-[17.14px] bg-[#FDA400] px-[34px] py-[17px] font-[family-name:var(--font-poppins)] text-xl font-bold text-[#000E2B] transition-opacity hover:opacity-90"
      >
        <WhatsAppIcon />
        Chat on WhatsApp
      </a>
    </section>
  );
}
