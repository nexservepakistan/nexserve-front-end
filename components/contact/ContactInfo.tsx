import {
  contactInfo,
  KARACHI_MAP_EMBED_URL,
  KARACHI_MAP_LINK,
} from "@/lib/contact-data";
import { ContactIcon } from "./ContactIcons";

function MapCard() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-[9px] border-[1.87px] border-[#0B1F3A] bg-[#E8EDF3] sm:h-[260px] lg:h-[304px]">
      <iframe
        title="NexServe coverage area map - Karachi, Pakistan"
        src={KARACHI_MAP_EMBED_URL}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={KARACHI_MAP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-[9px] bg-white px-4 py-3 shadow-[0px_4.68px_46.82px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-95 sm:inset-x-[19px] sm:bottom-[19px] sm:gap-4 sm:px-7 sm:py-5"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] shadow-[0px_4.68px_58.53px_rgba(37,180,248,0.2)] sm:h-[50px] sm:w-[50px]">
          <ContactIcon type="location" />
        </div>
        <div className="min-w-0">
          <p className="font-[family-name:var(--font-poppins)] text-sm font-medium leading-6 tracking-[0.015em] text-[#011632] sm:text-[17px] sm:leading-[26px]">
            Coverage Area
          </p>
          <p className="font-[family-name:var(--font-poppins)] text-xs leading-5 tracking-[0.015em] text-[#3C4959] sm:text-[15px] sm:leading-[23px]">
            Karachi, Pakistan
          </p>
        </div>
      </a>
    </div>
  );
}

function InfoCard({
  title,
  value,
  icon,
  iconBg,
  href,
}: (typeof contactInfo)[number]) {
  const content = (
    <div className="flex items-start gap-3 rounded-[9px] bg-white px-4 py-4 shadow-[0px_4.68px_46.82px_rgba(0,0,0,0.08)] sm:gap-4 sm:px-[19px] sm:py-5">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-[0px_4.68px_58.53px_rgba(37,180,248,0.2)] sm:h-[50px] sm:w-[50px]"
        style={{ backgroundColor: iconBg }}
      >
        <ContactIcon type={icon} />
      </div>
      <div className="min-w-0">
        <p className="font-[family-name:var(--font-poppins)] text-sm font-medium leading-6 tracking-[0.015em] text-[#011632] sm:text-[17px] sm:leading-[26px]">
          {title}
        </p>
        <p className="break-words whitespace-pre-line font-[family-name:var(--font-poppins)] text-xs leading-5 tracking-[0.015em] text-[#3C4959] sm:text-[15px] sm:leading-[23px]">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}

export function ContactInfo() {
  return (
    <div className="flex w-full max-w-[471px] flex-col gap-4 sm:gap-[19px] lg:max-w-none">
      <MapCard />
      {contactInfo.map((item) => (
        <InfoCard key={item.title} {...item} />
      ))}
    </div>
  );
}
