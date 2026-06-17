import { familyCardPageBenefits } from "@/lib/family-card-data";
import { WHATSAPP_URL } from "@/lib/home-data";
import { BenefitCheckIcon } from "./FamilyCardIcons";

export function MembershipBenefits() {
  return (
    <div className="flex w-full max-w-[603px] flex-col">
      <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42.86px] lg:leading-[51px]">
        Membership Benefits
      </h2>

      <ul className="flex flex-col pt-6 pb-8 sm:pt-[34px] sm:pb-[46px]">
        {familyCardPageBenefits.map((benefit, index) => (
          <li
            key={benefit}
            className={[
              "flex items-start gap-3 sm:gap-[17px]",
              index > 0 ? "pt-4 sm:pt-[23px]" : "",
            ].join(" ")}
          >
            <div className="pt-0.5 sm:pt-[3px]">
              <BenefitCheckIcon />
            </div>
            <span className="font-[family-name:var(--font-poppins)] text-base leading-7 text-[#000E2B] sm:text-xl sm:leading-9 lg:text-[25.71px] lg:leading-10">
              {benefit}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-14 w-full items-center justify-center rounded-[17.14px] bg-[#FDA400] px-6 text-center font-[family-name:var(--font-poppins)] text-base font-bold text-[#000E2B] transition-opacity hover:opacity-90 sm:h-20 sm:w-fit sm:px-16 sm:text-xl"
      >
        Get Family Card on WhatsApp
      </a>
    </div>
  );
}
