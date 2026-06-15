import Image from "next/image";

function VerifiedIcon({ className }: { className?: string }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="1.75"
        y="1.75"
        width="17.5"
        height="17.5"
        rx="2"
        stroke="#FDA400"
        strokeWidth="1.79"
      />
      <path
        d="M6.5 10.5L9 13L14.5 7.5"
        stroke="#FDA400"
        strokeWidth="1.79"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TeamMemberCard({
  name,
  role,
  image,
  showBadge,
}: {
  name: string;
  role: string;
  image: string;
  showBadge?: boolean;
}) {
  return (
    <article className="relative w-full max-w-[355px] overflow-hidden rounded-[21px] border border-[#E3E3E1] bg-white shadow-[0px_5.33px_9.77px_rgba(0,0,0,0.1)]">
      <div className="relative h-[207px] w-full">
        <Image
          src={image}
          alt={name}
          width={355}
          height={207}
          className="h-full w-full rounded-t-[21px] object-cover"
        />
        {showBadge && (
          <div className="absolute top-[9px] right-[9px] flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#FDA400] p-2.5">
            <VerifiedIcon className="[&_rect]:stroke-[#000E2B] [&_path]:stroke-[#000E2B]" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-0 px-[9px] pl-6 pb-[14px]">
        <div className="pt-1">
          <h3 className="font-[family-name:var(--font-poppins)] text-[18.76px] font-bold leading-[38px] text-[#000E2B]">
            {name}
          </h3>
          <p className="font-[family-name:var(--font-poppins)] text-[14.07px] leading-8 text-[#6B7280]">
            {role}
          </p>
        </div>

        <div className="flex items-center gap-[10.72px] pt-1">
          <VerifiedIcon />
          <span className="font-[family-name:var(--font-poppins)] text-[18.76px] font-medium leading-[27px] text-[#FDA400]">
            Verified Provider
          </span>
        </div>
      </div>
    </article>
  );
}
