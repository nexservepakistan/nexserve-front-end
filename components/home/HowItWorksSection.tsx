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
    <section className="w-full bg-[#0B1F3A] py-[40px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[30px] px-6">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-[42px] font-black leading-[48px] text-white">
            How It Works
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-sm font-bold uppercase tracking-[1.4px] text-[#FDA400]">
            Simple Process
          </p>
        </div>

        <div className="grid max-w-[972px] grid-cols-1 gap-6 md:grid-cols-2">
          {howItWorksSteps.map(({ step, title, description }) => (
            <article
              key={step}
              className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDA400]">
                  <StepIcon />
                </div>
                <span className="font-[family-name:var(--font-poppins)] text-5xl font-black leading-[48px] text-[rgba(255,255,255,0.1)]">
                  {step}
                </span>
              </div>
              <h3 className="pt-5 font-[family-name:var(--font-poppins)] text-xl font-bold leading-[27px] text-white">
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
