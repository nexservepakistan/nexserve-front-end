import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/home-data";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#0B1F3A_0%,#0C213D_14.29%,#0E233F_28.57%,#0F2642_42.86%,#112845_57.14%,#122A47_71.43%,#142D4A_85.71%,#152F4D_100%)] pt-10 pb-10">
      <div className="mx-auto flex max-w-[1280px] items-center px-20">
        <div className="flex w-full max-w-[1120px] items-center justify-between gap-10">
          <div className="flex max-w-[636px] flex-col gap-[68px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(253,164,0,0.3)] bg-[rgba(253,164,0,0.15)] px-4 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#FFC928] opacity-90" />
                    <span className="font-[family-name:var(--font-poppins)] text-sm font-semibold tracking-[0.35px] text-[#FFC928]">
                      Karachi&apos;s Trusted Home Services
                    </span>
                  </span>

                  <h1 className="font-[family-name:var(--font-poppins)] text-[58px] font-bold leading-[69px] text-white">
                    Ghar Ki Care, Ab Hogi Easy!
                  </h1>
                </div>

                <p className="max-w-[532px] font-[family-name:var(--font-poppins)] text-lg leading-10 text-[#D1D5DC]">
                  NexServe Pakistan provides trusted home services in Karachi
                  for all your cleaning, plumbing, electrical, AC, and
                  maintenance needs — delivered by verified professionals.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-[22.86px]">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[54px] items-center justify-center rounded-[10px] bg-[#FDA400] px-5 font-[family-name:var(--font-poppins)] text-xl font-semibold text-black shadow-[0px_4px_4px_rgba(255,255,255,0.25)] transition-opacity hover:opacity-90"
                >
                  Book on WhatsApp
                </a>
                <Link
                  href="/services"
                  className="flex h-[54px] items-center justify-center rounded-[10px] bg-white px-5 font-[family-name:var(--font-poppins)] text-xl font-semibold text-black shadow-[0px_4px_4px_rgba(255,255,255,0.25)] transition-opacity hover:opacity-90"
                >
                  View Services
                </Link>
              </div>
            </div>
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
