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
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="8" y="16" width="48" height="32" rx="4" stroke="#FDA400" strokeWidth="5.3" />
      <path d="M8 28H56" stroke="#FDA400" strokeWidth="5.3" />
    </svg>
  );
}

export function FamilyCardSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20">
      <div className="mx-auto flex max-w-[1211px] flex-col items-center gap-[50px]">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[57px] text-[#000E2B]">
            Get Premium Benefits with NexServe Family Card
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-lg leading-10 text-[#6B7280]">
            Enjoy exclusive discounts, priority booking, and free home
            checkups all year round.
          </p>
        </div>

        <Link
          href="/family-card"
          className="flex h-20 items-center justify-center rounded-[17px] bg-[#FDA400] px-16 font-[family-name:var(--font-poppins)] text-xl font-bold text-[#000E2B] transition-opacity hover:opacity-90"
        >
          Learn More About Family Card
        </Link>

        <div className="relative w-full max-w-[1120px] overflow-hidden rounded-[21px] bg-[#000E2B] p-10 shadow-[0px_33px_67px_-16px_rgba(0,0,0,0.25)]">
          <div className="absolute -right-[53px] -top-[106px] h-[213px] w-[213px] rounded-full bg-[#FDA400] opacity-10" />
          <div className="absolute -bottom-[85px] -left-[85px] h-[170px] w-[170px] rounded-full bg-[#FDA400] opacity-10" />

          <div className="relative flex flex-col gap-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="font-[family-name:var(--font-poppins)] text-[40px] font-bold leading-[48px] text-[#FDA400]">
                  NexServe Family Card
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-[21px] font-medium leading-8 text-white">
                  Premium Home Care Membership
                </p>
                <div className="mt-3 h-[3px] w-[369px] max-w-full bg-[#FDA400]" />
              </div>
              <CardIcon />
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex items-end gap-1.5">
                <span className="font-[family-name:var(--font-poppins)] text-[64px] font-bold leading-[64px] text-white">
                  Rs. 999
                </span>
                <span className="pb-1 font-[family-name:var(--font-poppins)] text-[21px] leading-8 text-[#D1D5DC]">
                  / Per Year
                </span>
              </div>
              <Link
                href="/family-card"
                className="flex h-14 items-center justify-center rounded-xl bg-[#FDA400] px-8 font-[family-name:var(--font-poppins)] text-base font-bold text-[#0B1F3A] transition-opacity hover:opacity-90"
              >
                Get Family Card
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {familyCardBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.1)] px-5 py-4"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FDA400]">
                    <CheckIcon />
                  </span>
                  <span className="font-[family-name:var(--font-poppins)] text-base font-semibold text-white">
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
