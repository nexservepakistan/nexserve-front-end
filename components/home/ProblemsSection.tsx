import { problemCards } from "@/lib/home-data";

function ProblemIcon({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 4V24M4 14H24"
        stroke={color}
        strokeWidth="2.33"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="2.33" />
    </svg>
  );
}

export function ProblemsSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pb-12 sm:px-6 sm:pb-16 md:px-10 lg:px-20 lg:pb-20">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 sm:gap-[50px]">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#0B1F3A] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-10">
            Common Home Problems We Solve
          </h2>
          <p className="max-w-[672px] pt-3 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:pt-4 sm:text-lg">
            From small leaks to full electrical overhauls — our verified
            technicians handle every home problem with care and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-[31px] md:grid-cols-2 xl:grid-cols-3">
          {problemCards.map(({ title, description, bg, iconBg, iconColor }) => (
            <article
              key={title}
              className={`rounded-2xl border border-white p-5 sm:p-6 ${bg}`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
              >
                <ProblemIcon color={iconColor} />
              </div>
              <h3 className="pt-4 font-[family-name:var(--font-poppins)] text-lg font-bold leading-[27px] text-[#0B1F3A] sm:text-xl">
                {title}
              </h3>
              <p className="pt-2 font-[family-name:var(--font-poppins)] text-[15px] leading-[23px] text-[#6B7280]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
