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
      <div className="flex h-[91px] w-[91px] items-center justify-center rounded-full">
        <span className="font-[family-name:var(--font-poppins)] text-[40px] font-bold leading-[51px] text-[#FDA400]">
          {highlight}
        </span>
      </div>
      <h3 className="pt-[23px] font-[family-name:var(--font-poppins)] text-[25.71px] font-bold leading-[39px] text-[#000E2B]">
        {title}
      </h3>
      <p className="pt-[11px] font-[family-name:var(--font-poppins)] text-[22.86px] leading-[34px] text-[#6B7280]">
        {description}
      </p>
    </div>
  );
}

export function WhyChooseSection() {
  return (
    <section className="flex w-full max-w-[1211px] flex-col items-center gap-[50px] rounded-[22.86px] bg-white pb-20">
      <h2 className="text-center font-[family-name:var(--font-poppins)] text-[42.86px] font-bold leading-[51px] text-[#000E2B]">
        Why Choose Family Card?
      </h2>

      <div className="flex w-full max-w-[1120px] flex-col items-stretch justify-between gap-10 lg:flex-row lg:items-center lg:gap-2.5">
        <WhyChooseColumn {...whyChooseFamilyCard[0]} />
        <Divider />
        <WhyChooseColumn {...whyChooseFamilyCard[1]} />
        <Divider />
        <WhyChooseColumn {...whyChooseFamilyCard[2]} />
      </div>
    </section>
  );
}
