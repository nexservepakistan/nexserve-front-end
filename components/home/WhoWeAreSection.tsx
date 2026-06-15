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
    <section className="mx-auto w-full max-w-[1280px] px-[34px] py-20">
      <div className="mx-auto flex max-w-[1220px] flex-col gap-[50px]">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[57px] text-[#000E2B]">
            Who We Are
          </h2>
          <p className="mt-0 max-w-[858px] font-[family-name:var(--font-poppins)] text-lg leading-10 text-[#6B7280]">
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
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[12.6px] bg-[#285389]">
                    <FeatureIcon />
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold leading-[30px] text-[#214169]">
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
