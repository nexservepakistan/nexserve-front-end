"use client";

import { type FormEvent, useState } from "react";
import { serviceOptions } from "@/lib/contact-data";
import { SendIcon } from "./ContactIcons";

const inputClassName =
  "w-full rounded-[9px] border border-[#D0D5DD] bg-[#F6F8FB] px-[15px] py-[11px] font-[family-name:var(--font-poppins)] text-sm leading-5 tracking-[0.02em] text-[#0B1F3A] shadow-[0px_0.94px_1.87px_rgba(16,24,40,0.05)] outline-none transition-colors focus:border-[#0B1F3A] sm:text-[13px]";

const labelClassName =
  "font-[family-name:var(--font-poppins)] text-sm font-medium leading-6 tracking-[0.015em] text-[#3C4959] sm:text-[17px] sm:leading-[26px]";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[552px] flex-col rounded-[9px] border-2 border-[#0B1F3A] bg-white p-5 sm:p-8 lg:p-[38px] lg:max-w-none"
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
            disabled={status === "loading"}
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
            disabled={status === "loading"}
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
            disabled={status === "loading"}
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
              disabled={status === "loading"}
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
            disabled={status === "loading"}
          />
        </div>
      </div>

      {status === "success" && (
        <p className="mt-4 font-[family-name:var(--font-poppins)] text-sm text-green-600">
          Thank you! Your message has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 font-[family-name:var(--font-poppins)] text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-[9px] bg-[#0B1F3A] px-7 py-3.5 font-[family-name:var(--font-poppins)] text-sm font-semibold leading-[23px] tracking-[0.015em] text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:mt-[37px] sm:w-fit sm:text-[15px]"
      >
        <SendIcon />
        {status === "loading" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
