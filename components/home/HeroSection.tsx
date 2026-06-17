import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/home-data";

const heroImages = [
  { src: "/images/one.png", alt: "Plumbing service technician" },
  { src: "/images/two.png", alt: "AC repair service" },
  { src: "/images/three.png", alt: "Electrical service technician" },
  { src: "/images/four.png", alt: "Home cleaning service" },
] as const;

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#0B1F3A_0%,#0C213D_14.29%,#0E233F_28.57%,#0F2642_42.86%,#112845_57.14%,#122A47_71.43%,#142D4A_85.71%,#152F4D_100%)] py-8 sm:py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex w-full max-w-[1120px] flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex w-full max-w-[636px] flex-col gap-8 sm:gap-12 lg:gap-[68px]">
            <div className="flex flex-col gap-6 sm:gap-[30px]">
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-col gap-2.5">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(253,164,0,0.3)] bg-[rgba(253,164,0,0.15)] px-3 py-1.5 sm:px-4">
                    <span className="h-2 w-2 rounded-full bg-[#FFC928] opacity-90" />
                    <span className="font-[family-name:var(--font-poppins)] text-xs font-semibold tracking-[0.35px] text-[#FFC928] sm:text-sm">
                      Karachi&apos;s Trusted Home Services
                    </span>
                  </span>

                  <h1 className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[52px] md:text-5xl lg:text-[58px] lg:leading-[69px]">
                    Ghar Ki Care, Ab Hogi Easy!
                  </h1>
                </div>

                <p className="max-w-[532px] font-[family-name:var(--font-poppins)] text-base leading-7 text-[#D1D5DC] sm:text-lg sm:leading-10">
                  NexServe Pakistan provides trusted home services in Karachi
                  for all your cleaning, plumbing, electrical, AC, and
                  maintenance needs — delivered by verified professionals.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-[22.86px]">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[50px] w-full items-center justify-center rounded-[10px] bg-[#FDA400] px-5 font-[family-name:var(--font-poppins)] text-base font-semibold text-black shadow-[0px_4px_4px_rgba(255,255,255,0.25)] transition-opacity hover:opacity-90 sm:h-[54px] sm:w-auto sm:text-xl"
                >
                  Book on WhatsApp
                </a>
                <Link
                  href="/services"
                  className="flex h-[50px] w-full items-center justify-center rounded-[10px] bg-white px-5 font-[family-name:var(--font-poppins)] text-base font-semibold text-black shadow-[0px_4px_4px_rgba(255,255,255,0.25)] transition-opacity hover:opacity-90 sm:h-[54px] sm:w-auto sm:text-xl"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>

          <div className="grid w-full max-w-[496px] grid-cols-2 gap-3 sm:gap-4 lg:hidden">
            {heroImages.map(({ src, alt }) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={238}
                height={176}
                priority={src === "/images/one.png"}
                className="aspect-[4/3] w-full rounded-2xl object-cover sm:rounded-[25px]"
              />
            ))}
          </div>

          <div className="relative hidden h-[586px] w-[496px] shrink-0 lg:block">
            <Image
              src="/images/one.png"
              alt="Plumbing service technician"
              width={238}
              height={363}
              priority
              className="absolute left-0 top-[22px] h-[363px] w-[238px] rounded-[25px] object-cover"
            />
            <Image
              src="/images/two.png"
              alt="AC repair service"
              width={238}
              height={176}
              className="absolute right-0 top-0 h-[176px] w-[238px] rounded-[25px] object-cover"
            />
            <Image
              src="/images/four.png"
              alt="Home cleaning service"
              width={238}
              height={363}
              className="absolute right-0 top-[199px] h-[363px] w-[238px] rounded-[25px] object-cover"
            />
            <Image
              src="/images/three.png"
              alt="Electrical service technician"
              width={238}
              height={176}
              className="absolute left-0 top-[410px] h-[176px] w-[238px] rounded-[25px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
