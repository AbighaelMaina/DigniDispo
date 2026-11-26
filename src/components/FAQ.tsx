"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-white/60 py-16 md:py-24">
      <Reveal className="mx-auto max-w-3xl px-5">
        <h2 className="font-display text-3xl font-semibold text-teal md:text-4xl">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-teal/15 border-y border-teal/15">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-lg font-medium">
                    {f.q}
                    <span aria-hidden className={`text-2xl text-coral transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden leading-relaxed text-charcoal/75">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
