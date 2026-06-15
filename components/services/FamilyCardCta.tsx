import Link from "next/link";

export function FamilyCardCta() {
  return (
    <section className="w-full max-w-[1120px] rounded-[22.86px] bg-[#000E2B] px-[68.57px] py-[30px]">
      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-[42.86px] font-bold leading-[51px] text-white">
            Need Multiple Services?
          </h2>
          <p className="max-w-[960px] font-[family-name:var(--font-poppins)] text-lg leading-10 text-[#D1D5DC]">
            Get the NexServe Family Card and save 15% on all services
          </p>
        </div>

        <Link
          href="/family-card"
          className="flex h-20 items-center justify-center rounded-[17.14px] bg-[#FDA400] px-16 font-[family-name:var(--font-poppins)] text-xl font-bold text-[#000E2B] transition-opacity hover:opacity-90"
        >
          Get Family Card - Rs. 999/Year
        </Link>
      </div>
    </section>
  );
}
