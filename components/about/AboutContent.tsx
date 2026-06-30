import Image from "next/image";
import { whyChooseUsItems } from "@/lib/about-data";
import {
  AboutSectionHeading,
  ListCheckIcon,
  MissionIcon,
  VisionIcon,
  WhyChooseIcon,
} from "./AboutIcons";

export function AboutContent() {
  return (
    <div className="flex w-full max-w-[1120px] flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start">
      <div className="flex w-full max-w-[564px] flex-col justify-center gap-5 sm:gap-[25px]">
        <div className="flex flex-col gap-2.5">
          <AboutSectionHeading icon={<MissionIcon />} title="Our Mission" />
          <p className="font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:text-lg sm:leading-[34px]">
            To deliver reliable, affordable, and professional home maintenance services with a customer-first experience.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-[15px]">
          <AboutSectionHeading icon={<VisionIcon />} title="Our Vision" />
          <p className="font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:text-lg sm:leading-[34px]">
            To become one of Pakistan&apos;s most trusted home service brands by building long-term customer trust, fast response systems, and professional service standards.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <AboutSectionHeading icon={<WhyChooseIcon />} title="Why Choose Us?" />
          <ul className="flex flex-col gap-1 sm:gap-[5px]">
            {whyChooseUsItems.map((item) => (
              <li key={item} className="flex items-start gap-2 sm:items-center sm:gap-[11.43px]">
                <span className="pt-0.5 sm:pt-0">
                  <ListCheckIcon />
                </span>
                <span className="font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:text-lg sm:leading-[34px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[562px] shrink-0 overflow-hidden rounded-[20px] p-1 sm:p-2.5 lg:mx-0">
        <Image
          src="/images/about.png"
          alt="NexServe home service team at work"
          width={562}
          height={494}
          className="h-auto w-full rounded-[20px] object-cover"
          priority
        />
      </div>
    </div>
  );
}
