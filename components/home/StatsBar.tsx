import { stats } from "@/lib/home-data";

function UsersIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
    >
      <path d="M12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14Z" stroke="#0B1F3A" strokeWidth="2.67" />
      <path d="M6 26V23C6 20.79 7.79 19 10 19H14C16.21 19 18 20.79 18 23V26" stroke="#0B1F3A" strokeWidth="2.67" />
      <path d="M20 14C21.66 14 23 12.66 23 11C23 9.34 21.66 8 20 8" stroke="#0B1F3A" strokeWidth="2.67" />
      <path d="M24 26V24C24 21.79 22.54 20 20.5 20" stroke="#0B1F3A" strokeWidth="2.67" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
    >
      <rect x="4" y="10" width="24" height="18" rx="2" stroke="#0B1F3A" strokeWidth="2.67" />
      <path d="M12 10V8C12 6.9 12.9 6 14 6H18C19.1 6 20 6.9 20 8V10" stroke="#0B1F3A" strokeWidth="2.67" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
    >
      <path d="M16 4L6 8V15C6 21 10.5 26.5 16 28C21.5 26.5 26 21 26 15V8L16 4Z" stroke="#0B1F3A" strokeWidth="2.67" />
      <path d="M16 14V18" stroke="#0B1F3A" strokeWidth="2.67" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
    >
      <circle cx="16" cy="16" r="12" stroke="#0B1F3A" strokeWidth="2.67" />
      <path d="M16 10V16L20 18" stroke="#0B1F3A" strokeWidth="2.67" />
    </svg>
  );
}

const icons = [UsersIcon, BriefcaseIcon, ShieldIcon, ClockIcon];

export function StatsBar() {
  return (
    <section className="w-full bg-[#FDA400] px-4 sm:px-6">
      <div className="mx-auto grid max-w-[1116px] grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label }, index) => {
          const Icon = icons[index];
          return (
            <div
              key={label}
              className={[
                "flex items-center gap-3 px-3 py-4 sm:gap-4 sm:px-6 sm:py-5",
                index % 2 === 0
                  ? "border-r border-[rgba(11,31,58,0.2)]"
                  : "",
                index < 2
                  ? "border-b border-[rgba(11,31,58,0.2)] lg:border-b-0"
                  : "",
                index < stats.length - 1
                  ? "lg:border-r lg:border-[rgba(11,31,58,0.2)]"
                  : "",
              ].join(" ")}
            >
              <Icon />
              <div className="min-w-0">
                <p className="font-[family-name:var(--font-poppins)] text-lg font-black leading-6 text-[#0B1F3A] sm:text-2xl">
                  {value}
                </p>
                <p className="pt-0.5 font-[family-name:var(--font-poppins)] text-[11px] font-semibold leading-4 text-[rgba(11,31,58,0.7)] sm:text-xs">
                  {label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
