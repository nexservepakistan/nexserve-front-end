import Link from "next/link";
import { familyCardBenefits } from "@/lib/home-data";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8L6.5 11.5L13 5"
        stroke="#0B1F3A"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="h-12 w-12 shrink-0 sm:h-16 sm:w-16"
    >
      <rect x="8" y="16" width="48" height="32" rx="4" stroke="#FDA400" strokeWidth="5.3" />
      <path d="M8 28H56" stroke="#FDA400" strokeWidth="5.3" />
    </svg>
  );
}

export function FamilyCardSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-[1211px] flex-col items-center gap-8 sm:gap-[50px]">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[57px]">
            Get Premium Benefits with NexServe Family Card
          </h2>
          <p className="pt-3 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:pt-0 sm:text-lg sm:leading-10">
            Enjoy exclusive discounts, priority booking, and free home
            checkups all year round.
          </p>
        </div>

        <Link
          href="/family-card"
          className="flex h-14 w-full items-center justify-center rounded-[17px] bg-[#FDA400] px-6 text-center font-[family-name:var(--font-poppins)] text-base font-bold text-[#000E2B] transition-opacity hover:opacity-90 sm:h-20 sm:w-auto sm:px-16 sm:text-xl"
        >
          Learn More About Family Card
        </Link>

        <div className="relative w-full max-w-[1120px] overflow-hidden rounded-[21px] bg-[#000E2B] p-5 shadow-[0px_33px_67px_-16px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10">
          <div className="absolute -right-[53px] -top-[106px] h-[213px] w-[213px] rounded-full bg-[#FDA400] opacity-10" />
          <div className="absolute -bottom-[85px] -left-[85px] h-[170px] w-[170px] rounded-full bg-[#FDA400] opacity-10" />

          <div className="relative flex flex-col gap-6 sm:gap-9">
            <div className="flex items-start justify-between gap-4 sm:gap-6">
              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#FDA400] sm:text-3xl md:text-[40px] md:leading-[48px]">
                  NexServe Family Card
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-base font-medium leading-7 text-white sm:text-[21px] sm:leading-8">
                  Premium Home Care Membership
                </p>
                <div className="mt-3 h-[3px] w-full max-w-[369px] bg-[#FDA400]" />
              </div>
              <CardIcon />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
              <div className="flex flex-wrap items-end gap-1.5">
                <span className="font-[family-name:var(--font-poppins)] text-4xl font-bold leading-none text-white sm:text-[64px] sm:leading-[64px]">
                  Rs. 999
                </span>
                <span className="pb-1 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#D1D5DC] sm:text-[21px] sm:leading-8">
                  / Per Year
                </span>
              </div>
              <Link
                href="/family-card"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#FDA400] px-8 font-[family-name:var(--font-poppins)] text-base font-bold text-[#0B1F3A] transition-opacity hover:opacity-90 sm:h-14 sm:w-auto"
              >
                Get Family Card
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              {familyCardBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.1)] px-4 py-3 sm:px-5 sm:py-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FDA400]">
                    <CheckIcon />
                  </span>
                  <span className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-white sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
