import { WHATSAPP_URL } from "@/lib/home-data";

export function ReadyCta() {
  return (
    <section className="flex w-full max-w-[1212px] flex-col items-center gap-5 text-center">
      <h2 className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[51px] text-[#000E2B]">
        Ready to Experience Better Home Care?
      </h2>
      <p className="max-w-[960px] font-[family-name:var(--font-poppins)] text-lg leading-10 text-[#6B7280]">
        Join hundreds of satisfied families who trust NexServe for their home
        maintenance needs.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex h-20 items-center justify-center rounded-[17.14px] bg-[#FDA400] px-16 font-[family-name:var(--font-poppins)] text-xl font-bold text-[#000E2B] transition-opacity hover:opacity-90"
      >
        Book Your First Service
      </a>
    </section>
  );
}
