"use client";

import Image from "next/image";
import { useState } from "react";
import { reviews } from "@/lib/home-data";

function QuoteIcon() {
  return (
    <svg width="60" height="43" viewBox="0 0 60 43" fill="none" aria-hidden="true">
      <path
        d="M0 43V26C0 11.64 11.64 0 26 0V12C18.95 12 13 17.95 13 25V43H0ZM34 43V26C34 11.64 45.64 0 60 0V12C52.95 12 47 17.95 47 25V43H34Z"
        fill="#FDA400"
      />
    </svg>
  );
}

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  return (
    <section className="flex w-full flex-col items-center gap-5 bg-[#FFF5E3] px-5 py-20 mt-[4em] mb-[4em]">
      <h2 className="w-full text-center font-[family-name:var(--font-poppins)] text-[29.5px] font-bold leading-[45px] text-[#05073C]">
        Customer Reviews
      </h2>

      <div className="flex max-w-[848px] flex-col items-center gap-[25px]">
        <div className="flex flex-col items-center gap-[43px]">
          <div className="flex flex-col items-center gap-[26px]">
            <QuoteIcon />
            <p className="text-center font-[family-name:var(--font-poppins)] text-[19.5px] font-medium leading-9 text-[#05073C]">
              &ldquo;Excellent AC repair service! The technician arrived within
              2 hours and fixed the cooling issue perfectly. Very professional
              and affordable.&rdquo;
            </p>
          </div>

          <div className="text-center">
            <p className="font-[family-name:var(--font-poppins)] text-[15.4px] font-bold leading-[22px] text-[#05073C]">
              {activeReview.name}
            </p>
            <p className="font-[family-name:var(--font-poppins)] text-[14.4px] leading-[21px] text-[#05073C]">
              {activeReview.area}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[33px]">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-full transition-transform ${
                index === activeIndex
                  ? "scale-110 ring-2 ring-[#FDA400] ring-offset-2"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Review by ${review.name}`}
            >
              <Image
                src={review.image}
                alt={review.name}
                width={70}
                height={71}
                className="rounded-full"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
