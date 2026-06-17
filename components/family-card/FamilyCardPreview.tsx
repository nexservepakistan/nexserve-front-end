import { familyCardDetails } from "@/lib/family-card-data";
import { CardIcon } from "./FamilyCardIcons";

export function FamilyCardPreview() {
  return (
    <div className="relative w-full max-w-[1042px] overflow-hidden rounded-[18px] bg-[#000E2B] p-5 shadow-[0px_28px_56px_-13px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10">
      <div className="absolute -right-[45px] -top-[90px] h-[179px] w-[179px] rounded-full bg-[#FDA400] opacity-10" />
      <div className="absolute -bottom-[72px] -left-[72px] h-[143px] w-[143px] rounded-full bg-[#FDA400] opacity-10" />

      <div className="relative flex flex-col gap-5 sm:gap-[30px]">
        <div className="flex items-start justify-between gap-4 sm:items-center sm:gap-6">
          <div className="flex min-w-0 flex-col gap-2 sm:gap-2.5">
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#FDA400] sm:text-3xl sm:leading-10 lg:text-[33.56px]">
              NexServe Family Card
            </h2>
            <p className="font-[family-name:var(--font-poppins)] text-base font-medium leading-6 text-white sm:text-[17.9px] sm:leading-[27px]">
              Premium Home Care Membership
            </p>
            <div className="h-[3px] w-full max-w-[310px] bg-[#FDA400]" />
          </div>
          <CardIcon size={44} />
        </div>

        <div className="flex flex-wrap items-end gap-2">
          <span className="font-[family-name:var(--font-poppins)] text-4xl font-bold leading-none text-white sm:text-[53.7px] sm:leading-[54px]">
            Rs. 999
          </span>
          <span className="pb-1 font-[family-name:var(--font-poppins)] text-base leading-6 text-[#D1D5DC] sm:text-lg sm:leading-[27px]">
            Per Year
          </span>
        </div>

        <div className="flex flex-col gap-5 sm:gap-[30px]">
          <div className="grid grid-cols-1 gap-4 sm:gap-[18px] md:grid-cols-2">
            {familyCardDetails.slice(0, 2).map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-[15px]">
                <span className="shrink-0 font-[family-name:var(--font-poppins)] text-base leading-[22px] text-[#FDA400] sm:text-lg">
                  {label}
                </span>
                <span className="font-[family-name:var(--font-poppins)] text-base font-medium leading-[22px] text-white sm:text-lg">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-[18px] md:grid-cols-2">
            {familyCardDetails.slice(2).map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-[15px]">
                <span className="shrink-0 font-[family-name:var(--font-poppins)] text-base leading-[22px] text-[#FDA400] sm:text-lg">
                  {label}
                </span>
                <span className="font-[family-name:var(--font-poppins)] text-base font-medium leading-[22px] text-white sm:text-lg">
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
