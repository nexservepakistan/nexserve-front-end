import { serviceAreas, WHATSAPP_URL } from "@/lib/home-data";

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 14C8 14 13 10 13 6.5C13 4.01 10.76 2 8 2C5.24 2 3 4.01 3 6.5C3 10 8 14 8 14Z"
        stroke="#FDA400"
        strokeWidth="1.33"
      />
      <circle cx="8" cy="6.5" r="1.5" stroke="#FDA400" strokeWidth="1.33" />
    </svg>
  );
}

export function AreasSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1232px] flex-col items-center gap-6 sm:gap-[30px]">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#0B1F3A] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-10">
            Areas We Serve
          </h2>
          <p className="max-w-[672px] pt-3 font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:pt-4 sm:text-lg">
            We currently serve major residential and commercial areas across
            Karachi with fast, reliable home services.
          </p>
        </div>

        <div className="flex w-full max-w-[924px] flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3 py-2 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] sm:px-5 sm:py-2.5"
              >
                <PinIcon />
                <span className="font-[family-name:var(--font-poppins)] text-sm font-medium leading-5 text-[#0B1F3A] sm:text-lg">
                  {area}
                </span>
              </span>
            ))}
          </div>

          <p className="pt-2 text-center font-[family-name:var(--font-poppins)] text-sm leading-6 text-[#6B7280] sm:pt-3 sm:text-base">
            Don&apos;t see your area?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#0B1F3A] underline-offset-2 hover:underline"
            >
              Ask us on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
