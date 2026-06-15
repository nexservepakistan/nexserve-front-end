import Link from "next/link";
import { navItems } from "@/lib/navigation";
import { NexserveLogo } from "./NexserveLogo";

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M5.5 2.5H8.5L10 6.5L8 8C9.2 10.6 11.4 12.8 14 14L15.5 12L19.5 13.5V16.5C19.5 17.05 19.05 17.5 18.5 17.5C9.7 17.5 2.5 10.3 2.5 1.5C2.5 0.95 2.95 0.5 3.5 0.5H6.5"
        stroke="#D1D5DC"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="14"
        rx="1"
        stroke="#D1D5DC"
        strokeWidth="1.9"
      />
      <path
        d="M1 3L10 9L19 3"
        stroke="#D1D5DC"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M8 19C8 19 15 12.5 15 8C15 4.13 11.87 1 8 1C4.13 1 1 4.13 1 8C1 12.5 8 19 8 19Z"
        stroke="#D1D5DC"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="2.5" stroke="#D1D5DC" strokeWidth="1.9" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="2"
        y="2"
        width="16"
        height="16"
        rx="2"
        stroke="#D1D5DC"
        strokeWidth="1.5"
      />
      <path
        d="M6 9V14M6 6.5V6.51M10 14V11.25C10 10.15 10.9 9.25 12 9.25C13.1 9.25 14 10.15 14 11.25V14"
        stroke="#D1D5DC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M11.5 3H9.5C7.57 3 6 4.57 6 6.5V8H4V11H6V17H9V11H11.5L12 8H9V6.75C9 6.34 9.34 6 9.75 6H12V3H11.5Z"
        stroke="#D1D5DC"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="8" stroke="#D1D5DC" strokeWidth="1.5" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nexserve-pakistan/",
    icon: LinkedInIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/NexServe-Pakistan/61589648850762/",
    icon: FacebookIcon,
  },
] as const;

export function Footer() {
  return (
    <footer className="relative z-[3] w-full bg-[#000E2B] pt-12 pb-8 sm:pt-16 lg:pt-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-4 sm:px-6 md:px-10 lg:gap-4 lg:px-20">
        <div className="grid w-full max-w-[1120px] grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-[62px]">
          <div className="w-full lg:max-w-[360px]">
            <NexserveLogo variant="light" />

            <div className="pt-[18px]">
              <p className="font-[family-name:var(--font-poppins)] text-lg font-medium leading-[30px] text-[#FDA400] sm:text-[22.86px] sm:leading-[34px]">
                Ghar Ki Care, Ab Hogi Easy!
              </p>
              <p className="mt-0 font-[family-name:var(--font-poppins)] text-base font-normal leading-7 text-[#D1D5DC] sm:text-xl sm:leading-[29px]">
                Professional home services in Karachi for all your home care
                and maintenance needs.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 font-[family-name:var(--font-poppins)] text-base text-[#D1D5DC] transition-colors hover:text-[#FDA400] sm:text-lg"
                  >
                    <Icon />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-none lg:w-[220px]">
            <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-10">
              Quick Links
            </h3>

            <ul className="flex flex-col pt-[18px]">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block min-h-[35px] py-1 font-[family-name:var(--font-poppins)] text-base leading-[34px] text-[#D1D5DC] transition-colors hover:text-white sm:text-lg"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:col-span-2 lg:col-span-1 lg:max-w-[360px]">
            <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-10">
              Contact
            </h3>

            <ul className="flex flex-col gap-4 pt-[18px] sm:gap-[17.14px]">
              <li>
                <a
                  href="tel:+923151018419"
                  className="flex items-center gap-[11.43px] font-[family-name:var(--font-poppins)] text-base leading-7 text-[#D1D5DC] transition-colors hover:text-white sm:text-lg sm:leading-[34px]"
                >
                  <PhoneIcon />
                  0315-1018419
                </a>
              </li>
              <li>
                <a
                  href="mailto:nexserve.pakistan@gmail.com"
                  className="flex items-start gap-[11.43px] break-all font-[family-name:var(--font-poppins)] text-base leading-7 text-[#D1D5DC] transition-colors hover:text-white sm:items-center sm:text-lg sm:leading-[34px]"
                >
                  <EmailIcon />
                  nexserve.pakistan@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-[11.43px] font-[family-name:var(--font-poppins)] text-base leading-7 text-[#D1D5DC] sm:text-lg sm:leading-[34px]">
                  <LocationIcon />
                  Karachi, Pakistan
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-[1120px] border-t border-[#364153] pt-4">
          <p className="text-center font-[family-name:var(--font-poppins)] text-base leading-7 text-[#99A1AF] sm:text-xl sm:leading-[29px]">
            © 2026 NexServe Pakistan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
