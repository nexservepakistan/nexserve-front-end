import {
  contactInfo,
  KARACHI_MAP_EMBED_URL,
  KARACHI_MAP_LINK,
} from "@/lib/contact-data";
import { ContactIcon } from "./ContactIcons";

function MapCard() {
  return (
    <div className="relative h-[304px] w-full overflow-hidden rounded-[9px] border-[1.87px] border-[#0B1F3A] bg-[#E8EDF3]">
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
        className="absolute inset-x-[19px] bottom-[19px] flex items-center gap-4 rounded-[9px] bg-white px-7 py-5 shadow-[0px_4.68px_46.82px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-95"
      >
        <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] shadow-[0px_4.68px_58.53px_rgba(37,180,248,0.2)]">
          <ContactIcon type="location" />
        </div>
        <div>
          <p className="font-[family-name:var(--font-poppins)] text-[17px] font-medium leading-[26px] tracking-[0.015em] text-[#011632]">
            Coverage Area
          </p>
          <p className="font-[family-name:var(--font-poppins)] text-[15px] leading-[23px] tracking-[0.015em] text-[#3C4959]">
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
    <div className="flex items-start gap-4 rounded-[9px] bg-white px-[19px] py-5 shadow-[0px_4.68px_46.82px_rgba(0,0,0,0.08)]">
      <div
        className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full shadow-[0px_4.68px_58.53px_rgba(37,180,248,0.2)]"
        style={{ backgroundColor: iconBg }}
      >
        <ContactIcon type={icon} />
      </div>
      <div>
        <p className="font-[family-name:var(--font-poppins)] text-[17px] font-medium leading-[26px] tracking-[0.015em] text-[#011632]">
          {title}
        </p>
        <p className="whitespace-pre-line font-[family-name:var(--font-poppins)] text-[15px] leading-[23px] tracking-[0.015em] text-[#3C4959]">
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
    <div className="flex w-full max-w-[471px] flex-col gap-[19px]">
      <MapCard />
      {contactInfo.map((item) => (
        <InfoCard key={item.title} {...item} />
      ))}
    </div>
  );
}
