import Reveal from "./Reveal";
import { BENEFITS } from "@/lib/content";

export default function Why() {
  return (
    <section className="bg-teal py-16 text-cream md:py-24">
      <Reveal className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Designed around your privacy.</h2>
        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <div key={b.title} className="border-l-2 border-coral pl-5">
              <dt className="font-display text-2xl">{b.title}</dt>
              <dd className="mt-1 text-cream/80">{b.text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
