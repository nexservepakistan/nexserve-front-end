import Image from "next/image";
import type { ServiceItem } from "@/lib/services-data";

export function ServiceCard({ title, description, icon }: ServiceItem) {
  return (
    <article className="flex w-full max-w-[306px] flex-col rounded-[5px] border-b-[3px] border-[#FDA400] bg-white px-[15px] pt-[15px] pb-5 shadow-[0px_3.33px_3.33px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col items-center gap-5">
        <div className="flex h-[63px] w-[63px] items-center justify-center rounded-[6.66px] bg-[#F5F8FD] p-[6.66px]">
          <Image
            src={icon}
            alt={title}
            width={46}
            height={46}
            className="h-[46px] w-[46px] object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold leading-[17px] tracking-[-0.017px] text-[#0A090B]">
            {title}
          </h3>
          <p className="font-[family-name:var(--font-poppins)] text-[15px] leading-[22px] text-[#4F4D55]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
