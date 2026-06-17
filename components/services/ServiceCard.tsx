import Image from "next/image";
import type { ServiceItem } from "@/lib/services-data";

export function ServiceCard({ title, description, icon }: ServiceItem) {
  return (
    <article className="flex w-full max-w-[306px] flex-col rounded-[5px] border-b-[3px] border-[#FDA400] bg-white px-4 pt-4 pb-5 shadow-[0px_3.33px_3.33px_rgba(0,0,0,0.25)] sm:px-[15px] sm:pt-[15px]">
      <div className="flex flex-col items-center gap-4 sm:gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-[6.66px] bg-[#F5F8FD] p-2 sm:h-[63px] sm:w-[63px] sm:p-[6.66px]">
          <Image
            src={icon}
            alt={title}
            width={46}
            height={46}
            className="h-10 w-10 object-contain sm:h-[46px] sm:w-[46px]"
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-center sm:gap-3">
          <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold leading-snug tracking-[-0.017px] text-[#0A090B] sm:text-xl sm:leading-[17px]">
            {title}
          </h3>
          <p className="font-[family-name:var(--font-poppins)] text-sm leading-[22px] text-[#4F4D55] sm:text-[15px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
