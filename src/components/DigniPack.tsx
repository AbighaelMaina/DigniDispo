import Button from "./Button";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { PACK_ITEMS } from "@/lib/content";

export default function DigniPack() {
  return (
    <section id="dignipack" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <Reveal className="grid items-center gap-12 md:grid-cols-2">
        <div className="rounded-[2rem] bg-sage/30 p-6 sm:p-10 md:order-2">
          <Photo
            src="/images/dignipack.jpeg"
            alt="The DigniPack Disposal Kit: a cream pouch with a green hills design and the words Dignity. Privacy. Respect."
            sizes="(min-width: 768px) 320px, 80vw"
            className="mx-auto aspect-[217/228] w-full max-w-[320px] rounded-2xl shadow-xl"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-teal md:text-4xl">Meet DigniPack.</h2>
          <p className="mt-3 text-lg text-charcoal/80">A discreet way to contain sensitive household waste.</p>
          <ul className="mt-8 space-y-5">
            {PACK_ITEMS.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span aria-hidden className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-coral" />
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-charcoal/70">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button href="#collection" className="mt-8">Get a DigniPack</Button>
        </div>
      </Reveal>
    </section>
  );
}