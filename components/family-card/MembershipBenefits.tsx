import { familyCardPageBenefits } from "@/lib/family-card-data";
import { WHATSAPP_URL } from "@/lib/home-data";
import { BenefitCheckIcon } from "./FamilyCardIcons";

export function MembershipBenefits() {
  return (
    <div className="flex w-full max-w-[603px] flex-col">
      <h2 className="font-[family-name:var(--font-poppins)] text-[42.86px] font-bold leading-[51px] text-[#000E2B]">
        Membership Benefits
      </h2>

      <ul className="flex flex-col pt-[34px] pb-[46px]">
        {familyCardPageBenefits.map((benefit, index) => (
          <li
            key={benefit}
            className={[
              "flex items-start gap-[17px]",
              index > 0 ? "pt-[23px]" : "",
            ].join(" ")}
          >
            <div className="pt-[3px]">
              <BenefitCheckIcon />
            </div>
            <span className="font-[family-name:var(--font-poppins)] text-[25.71px] leading-10 text-[#000E2B]">
              {benefit}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-20 w-fit items-center justify-center rounded-[17.14px] bg-[#FDA400] px-16 font-[family-name:var(--font-poppins)] text-xl font-bold text-[#000E2B] transition-opacity hover:opacity-90"
      >
        Get Family Card on WhatsApp
      </a>
    </div>
  );
}
