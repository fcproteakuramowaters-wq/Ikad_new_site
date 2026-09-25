"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/victoria-island", label: "Victoria Island" },
  { href: "/yaba", label: "Yaba" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Ikad Hotels home">
          <Image src="/favicon.ico" alt="" width={40} height={40} className="rounded" />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-semibold tracking-tight text-navy" style={{ fontFamily: "var(--font-playfair)" }}>
              Ikad Hotels
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gray-500">Lagos · Nigeria</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${active ? "text-navy" : "text-gray-600 hover:text-navy"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/booking"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-black/5 bg-white md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="border-b border-gray-100 py-3 text-base font-medium text-gray-800"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/booking" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-navy py-3 text-center font-semibold text-white">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
