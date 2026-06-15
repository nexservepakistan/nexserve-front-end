import { familyCardDetails } from "@/lib/family-card-data";
import { CardIcon } from "./FamilyCardIcons";

export function FamilyCardPreview() {
  return (
    <div className="relative w-full max-w-[1042px] overflow-hidden rounded-[18px] bg-[#000E2B] p-10 shadow-[0px_28px_56px_-13px_rgba(0,0,0,0.25)]">
      <div className="absolute -right-[45px] -top-[90px] h-[179px] w-[179px] rounded-full bg-[#FDA400] opacity-10" />
      <div className="absolute -bottom-[72px] -left-[72px] h-[143px] w-[143px] rounded-full bg-[#FDA400] opacity-10" />

      <div className="relative flex flex-col gap-[30px]">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <h2 className="font-[family-name:var(--font-poppins)] text-[33.56px] font-bold leading-10 text-[#FDA400]">
              NexServe Family Card
            </h2>
            <p className="font-[family-name:var(--font-poppins)] text-[17.9px] font-medium leading-[27px] text-white">
              Premium Home Care Membership
            </p>
            <div className="h-[3px] w-[310px] max-w-full bg-[#FDA400]" />
          </div>
          <CardIcon />
        </div>

        <div className="flex flex-wrap items-end gap-2">
          <span className="font-[family-name:var(--font-poppins)] text-[53.7px] font-bold leading-[54px] text-white">
            Rs. 999
          </span>
          <span className="pb-1 font-[family-name:var(--font-poppins)] text-lg leading-[27px] text-[#D1D5DC]">
            Per Year
          </span>
        </div>

        <div className="flex flex-col gap-[30px]">
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
            {familyCardDetails.slice(0, 2).map(({ label, value }) => (
              <div key={label} className="flex items-start gap-[15px]">
                <span className="font-[family-name:var(--font-poppins)] text-lg leading-[22px] text-[#FDA400]">
                  {label}
                </span>
                <span className="font-[family-name:var(--font-poppins)] text-lg font-medium leading-[22px] text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
            {familyCardDetails.slice(2).map(({ label, value }) => (
              <div key={label} className="flex items-start gap-[15px]">
                <span className="font-[family-name:var(--font-poppins)] text-lg leading-[22px] text-[#FDA400]">
                  {label}
                </span>
                <span className="font-[family-name:var(--font-poppins)] text-lg font-medium leading-[22px] text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
