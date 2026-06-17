function BenefitCheckIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7 shrink-0 sm:h-[34px] sm:w-[34px]"
    >
      <rect
        x="2.83"
        y="2.83"
        width="28.33"
        height="28.33"
        rx="2"
        stroke="#FDA400"
        strokeWidth="2.86"
      />
      <path
        d="M12.75 17L15.58 19.83L21.25 14.17"
        stroke="#FDA400"
        strokeWidth="2.86"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CardIcon({ size = 54 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="8"
        y="16"
        width="48"
        height="32"
        rx="4"
        stroke="#FDA400"
        strokeWidth="4.5"
      />
      <path d="M8 28H56" stroke="#FDA400" strokeWidth="4.5" />
    </svg>
  );
}

export { BenefitCheckIcon };
