import { commitmentItems } from "@/lib/about-data";

export function CommitmentSection() {
  return (
    <section className="w-full max-w-[1120px] rounded-[20px] bg-[linear-gradient(135deg,#0B1F3A_0%,#0C213D_14.29%,#0E233F_28.57%,#0F2642_42.86%,#112845_57.14%,#122A47_71.43%,#142D4A_85.71%,#152F4D_100%)] px-5 py-8 sm:px-8 sm:py-10 lg:px-[69px] lg:py-[50px]">
      <div className="mx-auto flex max-w-[1048px] flex-col items-center">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[57px]">
          Our Commitment to You
        </h2>

        <div className="grid w-full grid-cols-1 gap-x-12 gap-y-6 pt-6 sm:gap-y-8 sm:pt-[34px] md:grid-cols-2">
          {commitmentItems.map(({ title, description }) => (
            <div key={title}>
              <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold leading-8 text-[#FDA400] sm:text-xl sm:leading-10">
                {title}
              </h3>
              <p className="pt-3 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#D1D5DC] sm:pt-[17px] sm:text-lg sm:leading-[34px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
