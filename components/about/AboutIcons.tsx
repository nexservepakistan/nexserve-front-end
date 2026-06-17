import type { ReactNode } from "react";

function MissionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.33" stroke="#000E2B" strokeWidth="1.67" />
      <circle cx="10" cy="10" r="5" stroke="#000E2B" strokeWidth="1.67" />
      <circle cx="10" cy="10" r="1.67" stroke="#000E2B" strokeWidth="1.67" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3.33 5.83H16.67V14.17H3.33V5.83Z"
        stroke="#000E2B"
        strokeWidth="1.67"
        strokeLinejoin="round"
      />
      <rect
        x="7.5"
        y="7.5"
        width="5"
        height="5"
        stroke="#000E2B"
        strokeWidth="1.67"
      />
    </svg>
  );
}

function WhyChooseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect
        x="1.67"
        y="1.67"
        width="16.67"
        height="16.67"
        rx="2"
        stroke="#000E2B"
        strokeWidth="1.67"
      />
      <path
        d="M7.5 10L9.17 11.67L12.5 8.33"
        stroke="#000E2B"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ListCheckIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 sm:h-[23px] sm:w-[23px]"
    >
      <rect
        x="1.9"
        y="1.9"
        width="19.2"
        height="19.2"
        rx="2"
        stroke="#FDA400"
        strokeWidth="1.9"
      />
      <path
        d="M7 11.5L10 14.5L16 8.5"
        stroke="#FDA400"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDA400]">
      {children}
    </div>
  );
}

export function AboutSectionHeading({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <SectionIcon>{icon}</SectionIcon>
      <h2 className="font-[family-name:var(--font-alatsi)] text-xl leading-7 text-[#214169] sm:text-2xl sm:leading-[33px] lg:text-[26px]">
        {title}
      </h2>
    </div>
  );
}

export { MissionIcon, VisionIcon, WhyChooseIcon, ListCheckIcon };
