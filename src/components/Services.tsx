import Button from "./Button";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24" aria-label="Service options">
      <Reveal className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.title} className="flex flex-col rounded-3xl bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <h3 className="font-display text-2xl text-teal">{s.title}</h3>
            <p className="mt-3 flex-1 text-charcoal/75">{s.text}</p>
            <Button href={s.href} variant={s.type === "dignipack" ? "primary" : "outline"} className="mt-6">{s.cta}</Button>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
