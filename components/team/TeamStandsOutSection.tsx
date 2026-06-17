import { teamHighlights } from "@/lib/team-data";

function ShieldCheckIcon() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      aria-hidden="true"
      className="h-9 w-9 sm:h-[46px] sm:w-[46px]"
    >
      <rect
        x="3.81"
        y="3.81"
        width="38.38"
        height="38.38"
        rx="2"
        stroke="#FDA400"
        strokeWidth="3.81"
      />
      <path
        d="M14 23L19 28L32 15"
        stroke="#FDA400"
        strokeWidth="3.81"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HighlightColumn({
  item,
}: {
  item: (typeof teamHighlights)[number];
}) {
  return (
    <div className="mx-auto flex w-full max-w-[328px] flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#000E2B] sm:h-[91px] sm:w-[91px]">
        {item.type === "icon" ? (
          <ShieldCheckIcon />
        ) : (
          <span className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-none text-[#FDA400] sm:text-[30px] sm:leading-[46px]">
            {item.highlight}
          </span>
        )}
      </div>
      <h3 className="pt-4 font-[family-name:var(--font-poppins)] text-lg font-bold leading-8 text-[#000E2B] sm:pt-[23px] sm:text-xl sm:leading-[39px]">
        {item.title}
      </h3>
      <p className="pt-2 font-[family-name:var(--font-poppins)] text-sm leading-7 text-[#6B7280] sm:pt-[11px] sm:text-[15px] sm:leading-[34px]">
        {item.description}
      </p>
    </div>
  );
}

export function TeamStandsOutSection() {
  return (
    <section className="mb-6 flex w-full max-w-[1211px] flex-col items-center gap-8 rounded-[22.86px] bg-white p-5 sm:mb-10 sm:gap-[50px] sm:p-8 lg:p-[50px]">
      <h2 className="text-center font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42.86px] lg:leading-[51px]">
        Why Our Team Stands Out
      </h2>

      <div className="grid w-full max-w-[1120px] grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
        {teamHighlights.map((item) => (
          <HighlightColumn key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
