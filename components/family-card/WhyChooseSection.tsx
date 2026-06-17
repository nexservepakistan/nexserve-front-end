import { whyChooseFamilyCard } from "@/lib/family-card-data";

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="hidden h-[266px] w-0 self-center border-l-[3px] border-[#A8A8A8] lg:block"
    />
  );
}

function WhyChooseColumn({
  highlight,
  title,
  description,
}: (typeof whyChooseFamilyCard)[number]) {
  return (
    <div className="mx-auto flex w-full max-w-[328px] flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full sm:h-[91px] sm:w-[91px]">
        <span className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-none text-[#FDA400] sm:text-[40px] sm:leading-[51px]">
          {highlight}
        </span>
      </div>
      <h3 className="pt-4 font-[family-name:var(--font-poppins)] text-xl font-bold leading-8 text-[#000E2B] sm:pt-[23px] sm:text-2xl sm:leading-[39px] lg:text-[25.71px]">
        {title}
      </h3>
      <p className="pt-2 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:pt-[11px] sm:text-lg sm:leading-[34px] lg:text-[22.86px]">
        {description}
      </p>
    </div>
  );
}

export function WhyChooseSection() {
  return (
    <section className="flex w-full max-w-[1211px] flex-col items-center gap-8 rounded-[22.86px] bg-white pb-12 sm:gap-[50px] sm:pb-16 lg:pb-20">
      <h2 className="text-center font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42.86px] lg:leading-[51px]">
        Why Choose Family Card?
      </h2>

      <div className="flex w-full max-w-[1120px] flex-col items-stretch justify-between gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-2.5">
        <WhyChooseColumn {...whyChooseFamilyCard[0]} />
        <Divider />
        <WhyChooseColumn {...whyChooseFamilyCard[1]} />
        <Divider />
        <WhyChooseColumn {...whyChooseFamilyCard[2]} />
      </div>
    </section>
  );
}
