import Link from "next/link";

export function FamilyCardCta() {
  return (
    <section className="w-full max-w-[1120px] rounded-[22.86px] bg-[#000E2B] px-5 py-6 sm:px-8 sm:py-[30px] lg:px-[68.57px]">
      <div className="flex flex-col items-center gap-5 sm:gap-[30px]">
        <div className="flex flex-col items-center gap-2 text-center sm:gap-2.5">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[42.86px] lg:leading-[51px]">
            Need Multiple Services?
          </h2>
          <p className="max-w-[960px] font-[family-name:var(--font-poppins)] text-base leading-7 text-[#D1D5DC] sm:text-lg sm:leading-10">
            Get the NexServe Family Card and save 15% on all services
          </p>
        </div>

        <Link
          href="/family-card"
          className="flex h-14 w-full items-center justify-center rounded-[17.14px] bg-[#FDA400] px-6 text-center font-[family-name:var(--font-poppins)] text-base font-bold text-[#000E2B] transition-opacity hover:opacity-90 sm:h-20 sm:w-auto sm:px-16 sm:text-xl"
        >
          Get Family Card - Rs. 999/Year
        </Link>
      </div>
    </section>
  );
}
