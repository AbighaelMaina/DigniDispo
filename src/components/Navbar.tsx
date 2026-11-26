"use client";
import { useState } from "react";
import Button from "./Button";
import { NAV } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-teal/10 bg-cream/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/" className="font-display text-2xl font-semibold text-teal">DigniDispo</a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.href}><a href={n.href} className="text-sm font-medium hover:text-teal">{n.label}</a></li>
          ))}
        </ul>
        <Button href="/#collection" className="hidden !min-h-10 !px-5 !text-sm md:inline-flex">Request Collection</Button>
        <button
          type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-full text-teal md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-teal/10 bg-cream px-5 pb-6 md:hidden">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-teal/10 py-4 text-lg">{n.label}</a>
              </li>
            ))}
          </ul>
          <Button href="/#collection" className="mt-5 w-full">Request Collection</Button>
        </div>
      )}
    </header>
  );
}