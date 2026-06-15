"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/navigation";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="#0B1F3A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="#0B1F3A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="relative z-50 w-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex h-[72px] w-full max-w-[1120px] items-center justify-between py-2.5">
          <Link href="/" aria-label="Nexserve Pakistan home" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="NexServe Pakistan"
              width={210}
              height={53}
              priority
              className="h-8 w-auto max-w-[140px] object-contain object-left sm:h-10 sm:max-w-[170px] md:h-[53px] md:w-[210px]"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-3 xl:gap-5 lg:flex"
          >
            {navItems.map(({ label, href }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    "flex h-[35px] items-center justify-center px-[3px] text-sm xl:text-base leading-7 text-[#0B1F3A] transition-colors hover:text-[#000E2B]",
                    isActive
                      ? "border-b-[3px] border-[#000E2B] font-[family-name:var(--font-inter)] font-bold"
                      : "font-[family-name:var(--font-poppins)] font-semibold",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-black/40 lg:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={[
          "absolute left-0 right-0 top-full z-50 border-t border-[#E5E7EB] bg-white shadow-lg lg:hidden",
          menuOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <ul className="mx-auto flex max-w-[1280px] flex-col px-4 py-4 sm:px-6 md:px-10">
          {navItems.map(({ label, href }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "block rounded-lg px-3 py-3 text-base text-[#0B1F3A] transition-colors hover:bg-[#F6F8FB]",
                    isActive
                      ? "border-l-[3px] border-[#000E2B] bg-[#F6F8FB] pl-[9px] font-[family-name:var(--font-inter)] font-bold"
                      : "font-[family-name:var(--font-poppins)] font-semibold",
                  ].join(" ")}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
