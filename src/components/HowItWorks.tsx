import Reveal from "./Reveal";
import { STEPS } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white/60 py-16 md:py-24">
      <Reveal className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-semibold text-teal md:text-4xl">Disposal made simple.</h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="border-t-2 border-sage pt-5">
              <span className="font-display text-3xl text-coral">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-charcoal/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
