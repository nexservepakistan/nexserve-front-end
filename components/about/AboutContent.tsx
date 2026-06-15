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
    <div className="flex w-full max-w-[1120px] flex-col gap-10 lg:flex-row lg:items-start">
      <div className="flex w-full max-w-[564px] flex-col justify-center gap-[25px]">
        <div className="flex flex-col gap-2.5">
          <AboutSectionHeading icon={<MissionIcon />} title="Our Mission" />
          <p className="font-[family-name:var(--font-poppins)] text-lg leading-[34px] text-[#6B7280]">
            To provide reliable and affordable home service support with a
            professional customer experience.
          </p>
        </div>

        <div className="flex flex-col gap-[15px]">
          <AboutSectionHeading icon={<VisionIcon />} title="Our Vision" />
          <p className="font-[family-name:var(--font-poppins)] text-lg leading-[34px] text-[#6B7280]">
            To become Karachi&apos;s trusted home care service partner for
            families, apartments, and homeowners.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <AboutSectionHeading icon={<WhyChooseIcon />} title="Why Choose Us?" />
          <ul className="flex flex-col gap-[5px]">
            {whyChooseUsItems.map((item) => (
              <li key={item} className="flex items-center gap-[11.43px]">
                <ListCheckIcon />
                <span className="font-[family-name:var(--font-poppins)] text-lg leading-[34px] text-[#6B7280]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[562px] shrink-0 overflow-hidden rounded-[20px] p-2.5">
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
