import { whoWeAreCards } from "@/lib/home-data";

function FeatureIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 4L4 8V14C4 19.5 8.5 24.5 14 26C19.5 24.5 24 19.5 24 14V8L14 4Z"
        stroke="white"
        strokeWidth="2.8"
      />
    </svg>
  );
}

export function WhoWeAreSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-[1220px] flex-col gap-8 sm:gap-[50px]">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[57px]">
            Who We Are
          </h2>
          <p className="mt-3 max-w-[858px] font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:mt-0 sm:text-lg sm:leading-10">
            NexServe Pakistan is a Karachi-based home service company dedicated
            to making home care simple, reliable, and affordable for every
            household.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {whoWeAreCards.map(({ title, description }) => (
            <article
              key={title}
              className="rounded-[22px] bg-white p-2.5 shadow-[0px_4px_14px_rgba(0,0,0,0.12)]"
            >
              <div className="flex flex-col gap-[18px] p-2.5">
                <div className="flex items-center gap-[15px]">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[12.6px] bg-[#285389] sm:h-20 sm:w-20">
                    <FeatureIcon />
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold leading-7 text-[#214169] sm:text-xl sm:leading-[30px]">
                    {title}
                  </h3>
                </div>
                <p className="font-[family-name:var(--font-poppins)] text-[15px] leading-[22px] text-[#6B7280]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
