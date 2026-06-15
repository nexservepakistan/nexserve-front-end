import Image from "next/image";

export function FamilyCardHeroImage() {
  return (
    <div className="relative hidden w-full max-w-[522px] shrink-0 lg:block">
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
