import Image from "next/image";

export function FamilyCardHeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] shrink-0 sm:max-w-[480px] lg:mx-0 lg:max-w-[522px]">
      <Image
        src="/images/service.png"
        alt="NexServe Family Card membership benefits"
        width={522}
        height={511}
        className="h-auto w-full object-contain"
        priority
      />
    </div>
  );
}
