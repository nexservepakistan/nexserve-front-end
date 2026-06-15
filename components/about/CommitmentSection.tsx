import { commitmentItems } from "@/lib/about-data";

export function CommitmentSection() {
  return (
    <section className="w-full max-w-[1120px] rounded-[20px] bg-[linear-gradient(135deg,#0B1F3A_0%,#0C213D_14.29%,#0E233F_28.57%,#0F2642_42.86%,#112845_57.14%,#122A47_71.43%,#142D4A_85.71%,#152F4D_100%)] px-[69px] py-[50px]">
      <div className="mx-auto flex max-w-[1048px] flex-col items-center">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[57px] text-white">
          Our Commitment to You
        </h2>

        <div className="grid w-full grid-cols-1 gap-x-12 gap-y-8 pt-[34px] md:grid-cols-2">
          {commitmentItems.map(({ title, description }) => (
            <div key={title}>
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold leading-10 text-[#FDA400]">
                {title}
              </h3>
              <p className="pt-[17px] font-[family-name:var(--font-poppins)] text-lg leading-[34px] text-[#D1D5DC]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
