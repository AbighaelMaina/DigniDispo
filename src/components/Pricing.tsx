import Button from "./Button";
import Reveal from "./Reveal";
import { PRICING } from "@/lib/pricing";

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className={`mt-0.5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

export default function Pricing() {
  const { pack, estate, interest } = PRICING;

  return (
    <section id="pricing" className="bg-white/60 py-16 md:py-24">
      <Reveal className="mx-auto max-w-5xl px-5">
        <h2 className="font-display text-3xl font-semibold text-teal md:text-4xl">{PRICING.heading}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:items-stretch">
          {/* DigniPack: one-time purchase */}
          <article className="flex flex-col rounded-3xl bg-cream p-7 shadow-sm ring-1 ring-teal/15 transition-transform duration-300 hover:-translate-y-1 sm:p-9">
            <span className="self-start rounded-full bg-sage/50 px-3 py-1 text-sm font-medium text-teal">
              {pack.tag}
            </span>
            <h3 className="mt-5 font-display text-2xl text-teal">{pack.name}</h3>
            <p className="mt-1 font-medium text-coral">{pack.label}</p>
            <p className="mt-5 flex flex-wrap items-baseline gap-x-2">
              <span className="font-display text-5xl text-charcoal">{pack.price}</span>
              <span className="text-charcoal/65">{pack.unit}</span>
            </p>
            <p className="mt-4 text-charcoal/75">{pack.text}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {pack.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="text-teal" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button href="#collection" variant="primary" className="mt-8">
              {pack.cta}
            </Button>
          </article>

          {/* Estate plan: recurring monthly subscription (slightly more prominent) */}
          <article className="flex flex-col rounded-3xl bg-teal p-7 text-cream shadow-2xl transition-transform duration-300 hover:-translate-y-1 sm:p-9 md:-my-3 md:py-12">
            <span className="self-start rounded-full bg-coral px-3 py-1 text-sm font-semibold text-charcoal">
              {estate.tag}
            </span>
            <h3 className="mt-5 font-display text-2xl">{estate.name}</h3>
            <p className="mt-1 font-medium text-sage">{estate.label}</p>
            <p className="mt-5 flex flex-wrap items-baseline gap-x-2">
              <span className="font-display text-5xl">{estate.price}</span>
              <span className="text-cream/80">{estate.unit}</span>
            </p>
            <p className="mt-4 text-cream/85">{estate.text}</p>
            <ul className="mt-6 space-y-3">
              {estate.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="text-coral" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex-1 space-y-2 rounded-2xl border border-cream/20 bg-cream/10 p-4 text-sm">
              <p className="font-semibold text-cream">{estate.perHousehold}</p>
              <p className="text-cream/80">{estate.routes}</p>
            </div>
            <Button href="#collection" variant="coral" className="mt-8">
              {estate.cta}
            </Button>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-3xl bg-sage/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 md:mt-14">
          <div>
            <h3 className="font-display text-xl text-teal">{interest.title}</h3>
            <p className="mt-1 max-w-xl text-charcoal/80">{interest.text}</p>
          </div>
          <Button href="#collection" variant="outline" className="shrink-0">
            {interest.cta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}