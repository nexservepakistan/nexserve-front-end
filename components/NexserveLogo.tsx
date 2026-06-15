import Image from "next/image";
import Link from "next/link";

type NexserveLogoProps = {
  variant?: "dark" | "light";
};

export function NexserveLogo({ variant = "dark" }: NexserveLogoProps) {
  const src =
    variant === "light" ? "/images/footerlogo.png" : "/images/logo.png";

  return (
    <Link href="/" aria-label="Nexserve Pakistan home" className="shrink-0">
      <Image
        src={src}
        alt="NexServe Pakistan"
        width={210}
        height={53}
        className="h-8 w-auto max-w-[160px] object-contain object-left sm:h-10 sm:max-w-[190px] md:h-[53px] md:w-[210px]"
        priority={variant === "dark"}
      />
    </Link>
  );
}
