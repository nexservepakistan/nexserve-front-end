function LocationPinIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <path
        d="M12.5 2.5C8.91 2.5 6 5.41 6 9C6 13.75 12.5 22.5 12.5 22.5C12.5 22.5 19 13.75 19 9C19 5.41 16.09 2.5 12.5 2.5Z"
        fill="white"
      />
      <circle cx="12.5" cy="9" r="2.5" fill="white" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <circle cx="12.5" cy="12.5" r="10" fill="white" />
      <path d="M12.5 7V12.5H17" stroke="#FDA400" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="19" height="15" rx="2" fill="white" />
      <path d="M3 7L12.5 14L22 7" stroke="#FDA400" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <path
        d="M7 4H10L11.5 9L9.5 10.5C10.8 13.5 13.5 16.2 16.5 17.5L18 15.5L23 17V20C23 20.55 22.55 21 22 21C12.06 21 4 12.94 4 3C4 2.45 4.45 2 5 2H7"
        fill="white"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4L20 12L4 20V4Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M4 12H20" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="29" height="29" viewBox="0 0 34 35" fill="none" aria-hidden="true">
      <path
        d="M17 0.5C7.89 0.5 0.5 7.89 0.5 17C0.5 19.86 1.24 22.55 2.55 24.89L0.5 34.5L10.36 32.49C12.62 33.68 15.23 34.35 17.99 34.35C27.1 34.35 34.49 26.96 34.49 17.86C34.49 8.76 27.1 0.5 17 0.5Z"
        fill="white"
      />
      <path
        d="M13.2 10.5C12.85 9.95 12.45 9.93 11.7 9.93C11.35 9.93 10.95 9.93 10.5 9.93C10.05 9.93 9.45 10.08 8.95 10.63C8.45 11.18 7.1 12.43 7.1 14.98C7.1 17.53 8.98 19.98 9.25 20.38C9.53 20.78 12.65 25.78 17.55 27.68C21.65 29.23 22.55 28.93 23.45 28.83C24.35 28.73 26.25 27.68 26.65 26.58C27.05 25.48 27.05 24.53 26.95 24.33C26.85 24.13 26.55 24.03 26.15 23.83C25.75 23.63 23.85 22.73 23.5 22.58C23.15 22.43 22.9 22.38 22.65 22.73C22.4 23.08 21.65 23.93 21.45 24.18C21.25 24.43 21.05 24.48 20.65 24.28C20.25 24.08 19.05 23.68 17.65 22.48C16.55 21.53 15.8 20.33 15.6 19.98C15.4 19.63 15.55 19.43 15.7 19.28C15.85 19.13 16 18.93 16.15 18.73C16.3 18.53 16.35 18.43 16.45 18.23C16.55 18.03 16.5 17.88 16.4 17.73C16.3 17.58 15.55 15.53 15.25 14.73C14.95 13.98 14.65 14.08 14.45 14.08C14.25 14.08 14.05 14.08 13.8 14.08C13.55 14.08 13.2 14.18 13.2 10.5Z"
        fill="#25D366"
      />
    </svg>
  );
}

const iconMap = {
  location: LocationPinIcon,
  clock: ClockIcon,
  email: EmailIcon,
  phone: PhoneIcon,
} as const;

export function ContactIcon({
  type,
}: {
  type: keyof typeof iconMap;
}) {
  const Icon = iconMap[type];
  return <Icon />;
}

export { SendIcon, WhatsAppIcon };
