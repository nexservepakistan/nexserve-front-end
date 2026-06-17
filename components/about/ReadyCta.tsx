import { WHATSAPP_URL } from "@/lib/home-data";

export function ReadyCta() {
  return (
    <section className="flex w-full max-w-[1212px] flex-col items-center gap-4 px-2 text-center sm:gap-5">
      <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#000E2B] sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[51px]">
        Ready to Experience Better Home Care?
      </h2>
      <p className="max-w-[960px] font-[family-name:var(--font-poppins)] text-base leading-7 text-[#6B7280] sm:text-lg sm:leading-10">
        Join hundreds of satisfied families who trust NexServe for their home
        maintenance needs.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex h-14 w-full items-center justify-center rounded-[17.14px] bg-[#FDA400] px-6 font-[family-name:var(--font-poppins)] text-base font-bold text-[#000E2B] transition-opacity hover:opacity-90 sm:mt-5 sm:h-20 sm:w-auto sm:px-16 sm:text-xl"
      >
        Book Your First Service
      </a>
    </section>
  );
}
