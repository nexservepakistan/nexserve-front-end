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
    <article className="relative mx-auto w-full max-w-[355px] overflow-hidden rounded-[21px] border border-[#E3E3E1] bg-white shadow-[0px_5.33px_9.77px_rgba(0,0,0,0.1)] xl:mx-0">
      <div className="relative h-[180px] w-full sm:h-[207px]">
        <Image
          src={image}
          alt={name}
          width={355}
          height={207}
          className="h-full w-full rounded-t-[21px] object-cover"
        />
        {showBadge && (
          <div className="absolute top-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FDA400] p-2 sm:top-[9px] sm:right-[9px] sm:h-[45px] sm:w-[45px] sm:p-2.5">
            <VerifiedIcon className="h-4 w-4 [&_rect]:stroke-[#000E2B] [&_path]:stroke-[#000E2B] sm:h-auto sm:w-auto" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-0 px-3 pb-3 pl-4 sm:px-[9px] sm:pl-6 sm:pb-[14px]">
        <div className="pt-1">
          <h3 className="font-[family-name:var(--font-poppins)] text-base font-bold leading-8 text-[#000E2B] sm:text-[18.76px] sm:leading-[38px]">
            {name}
          </h3>
          <p className="font-[family-name:var(--font-poppins)] text-sm leading-7 text-[#6B7280] sm:text-[14.07px] sm:leading-8">
            {role}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-1 sm:gap-[10.72px]">
          <VerifiedIcon className="h-4 w-4 shrink-0 sm:h-auto sm:w-auto" />
          <span className="font-[family-name:var(--font-poppins)] text-sm font-medium leading-6 text-[#FDA400] sm:text-[18.76px] sm:leading-[27px]">
            Verified Provider
          </span>
        </div>
      </div>
    </article>
  );
}
