import { howItWorksSteps } from "@/lib/home-data";

function StepIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="20" height="20" rx="3" stroke="#0B1F3A" strokeWidth="2.33" />
      <path d="M10 14H18" stroke="#0B1F3A" strokeWidth="2.33" />
    </svg>
  );
}

export function HowItWorksSection() {
  return (
    <section className="w-full bg-[#0B1F3A] py-10 sm:py-[40px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-4 sm:gap-[30px] sm:px-6 md:px-10 lg:px-20">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[48px]">
            How It Works
          </h2>
          <p className="pt-2 font-[family-name:var(--font-poppins)] text-xs font-bold uppercase tracking-[1.2px] text-[#FDA400] sm:text-sm sm:tracking-[1.4px]">
            Simple Process
          </p>
        </div>

        <div className="grid w-full max-w-[972px] grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {howItWorksSteps.map(({ step, title, description }) => (
            <article
              key={step}
              className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-5 sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FDA400] sm:h-14 sm:w-14">
                  <StepIcon />
                </div>
                <span className="font-[family-name:var(--font-poppins)] text-4xl font-black leading-none text-[rgba(255,255,255,0.1)] sm:text-5xl sm:leading-[48px]">
                  {step}
                </span>
              </div>
              <h3 className="pt-4 font-[family-name:var(--font-poppins)] text-lg font-bold leading-[27px] text-white sm:pt-5 sm:text-xl">
                {title}
              </h3>
              <p className="pt-2 font-[family-name:var(--font-poppins)] text-[15px] leading-[23px] text-[#99A1AF]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
