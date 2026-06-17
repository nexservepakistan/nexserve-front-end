"use client";

import Image from "next/image";
import { useState } from "react";
import { reviews } from "@/lib/home-data";

function QuoteIcon() {
  return (
    <svg
      width="60"
      height="43"
      viewBox="0 0 60 43"
      fill="none"
      aria-hidden="true"
      className="h-8 w-11 sm:h-[43px] sm:w-[60px]"
    >
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
    <section className="mt-12 mb-12 flex w-full flex-col items-center gap-5 bg-[#FFF5E3] px-4 py-12 sm:mt-16 sm:mb-16 sm:px-5 sm:py-16 lg:mt-[4em] lg:mb-[4em] lg:py-20">
      <h2 className="w-full text-center font-[family-name:var(--font-poppins)] text-2xl font-bold leading-tight text-[#05073C] sm:text-[29.5px] sm:leading-[45px]">
        Customer Reviews
      </h2>

      <div className="flex w-full max-w-[848px] flex-col items-center gap-5 sm:gap-[25px]">
        <div className="flex flex-col items-center gap-6 sm:gap-[43px]">
          <div className="flex flex-col items-center gap-4 sm:gap-[26px]">
            <QuoteIcon />
            <p className="px-1 text-center font-[family-name:var(--font-poppins)] text-base font-medium leading-7 text-[#05073C] sm:text-[19.5px] sm:leading-9">
              &ldquo;Excellent AC repair service! The technician arrived within
              2 hours and fixed the cooling issue perfectly. Very professional
              and affordable.&rdquo;
            </p>
          </div>

          <div className="text-center">
            <p className="font-[family-name:var(--font-poppins)] text-sm font-bold leading-[22px] text-[#05073C] sm:text-[15.4px]">
              {activeReview.name}
            </p>
            <p className="font-[family-name:var(--font-poppins)] text-sm leading-[21px] text-[#05073C] sm:text-[14.4px]">
              {activeReview.area}
            </p>
          </div>
        </div>

        <div className="flex max-w-full flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-[33px]">
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
                className="h-12 w-12 rounded-full sm:h-[70px] sm:w-[70px]"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
