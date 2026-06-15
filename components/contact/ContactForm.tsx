"use client";

import { type FormEvent, useState } from "react";
import { serviceOptions } from "@/lib/contact-data";
import { WHATSAPP_URL } from "@/lib/home-data";
import { SendIcon } from "./ContactIcons";

const inputClassName =
  "w-full rounded-[9px] border border-[#D0D5DD] bg-[#F6F8FB] px-[15px] py-[11px] font-[family-name:var(--font-poppins)] text-[13px] leading-5 tracking-[0.02em] text-[#0B1F3A] shadow-[0px_0.94px_1.87px_rgba(16,24,40,0.05)] outline-none transition-colors focus:border-[#0B1F3A]";

const labelClassName =
  "font-[family-name:var(--font-poppins)] text-[17px] font-medium leading-[26px] tracking-[0.015em] text-[#3C4959]";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const text = [
      "Hi NexServe, I'd like to get in touch.",
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      service && `Service: ${service}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[552px] flex-col rounded-[9px] border-2 border-[#0B1F3A] bg-white p-[38px]"
    >
      <div className="flex flex-col gap-[11px]">
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="name" className={labelClassName}>
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClassName}
            required
          />
        </div>

        <div className="flex flex-col gap-[9px]">
          <label htmlFor="email" className={labelClassName}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-[9px]">
          <label htmlFor="phone" className={labelClassName}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="03xx-xxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClassName}
            required
          />
        </div>

        <div className="flex flex-col gap-[9px]">
          <label htmlFor="service" className={labelClassName}>
            Select Service
          </label>
          <div className="relative">
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`${inputClassName} appearance-none pr-10`}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
                <path
                  d="M5 7.5L9.5 12L14 7.5"
                  stroke="#667085"
                  strokeWidth="1.56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[9px]">
          <label htmlFor="message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="message"
            placeholder="Tell us about your service needs..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className={`${inputClassName} resize-none`}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-[37px] inline-flex w-fit items-center gap-2.5 rounded-[9px] bg-[#0B1F3A] px-7 py-3.5 font-[family-name:var(--font-poppins)] text-[15px] font-semibold leading-[23px] tracking-[0.015em] text-white transition-opacity hover:opacity-90"
      >
        <SendIcon />
        Send
      </button>
    </form>
  );
}
