"use client";

import { useState } from "react";
import { faqItems } from "@/lib/home-data";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#FDA400"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F6F8FB] py-0">
      <div className="mx-auto flex max-w-[768px] flex-col items-center px-6 pb-20">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-10 text-[#0B1F3A]">
            Frequently Asked Questions
          </h2>
          <p className="pt-4 font-[family-name:var(--font-poppins)] text-lg leading-7 text-[#6B7280]">
            Everything you need to know about NexServe services and membership.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 pt-12">
          {faqItems.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={question}
                className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-[family-name:var(--font-poppins)] text-base font-semibold text-[#0B1F3A]">
                    {question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div className="border-t border-[#E5E7EB] px-6 py-4">
                    <p className="font-[family-name:var(--font-poppins)] text-[15px] leading-[23px] text-[#6B7280]">
                      Contact our team on WhatsApp at 0315-1018419 for detailed
                      answers about this topic.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
