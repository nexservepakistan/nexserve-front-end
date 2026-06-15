import { teamHighlights } from "@/lib/team-data";

function ShieldCheckIcon() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      aria-hidden="true"
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
      <div className="flex h-[91px] w-[91px] items-center justify-center rounded-full bg-[#000E2B]">
        {item.type === "icon" ? (
          <ShieldCheckIcon />
        ) : (
          <span className="font-[family-name:var(--font-poppins)] text-[30px] font-bold leading-[46px] text-[#FDA400]">
            {item.highlight}
          </span>
        )}
      </div>
      <h3 className="pt-[23px] font-[family-name:var(--font-poppins)] text-xl font-bold leading-[39px] text-[#000E2B]">
        {item.title}
      </h3>
      <p className="pt-[11px] font-[family-name:var(--font-poppins)] text-[15px] leading-[34px] text-[#6B7280]">
        {item.description}
      </p>
    </div>
  );
}

export function TeamStandsOutSection() {
  return (
    <section className="flex w-full max-w-[1211px] flex-col items-center gap-[50px] rounded-[22.86px] bg-white p-[50px] mb-10">
      <h2 className="text-center font-[family-name:var(--font-poppins)] text-[42.86px] font-bold leading-[51px] text-[#000E2B]">
        Why Our Team Stands Out
      </h2>

      <div className="grid w-full max-w-[1120px] grid-cols-1 gap-10 md:grid-cols-3">
        {teamHighlights.map((item) => (
          <HighlightColumn key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
