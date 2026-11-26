import Reveal from "./Reveal";
import Photo from "./Photo";
import { ROUTE } from "@/lib/route";

export default function Estate() {
  const lastIndex = ROUTE.stops.length - 1;

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <Reveal className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-teal md:text-4xl">
            Better collection, closer to home.
          </h2>
          <p className="mt-4 max-w-md text-lg text-charcoal/80">
            When households in the same estate or neighbourhood request collection, DigniDispo can coordinate efficient collection routes.
          </p>
          <p className="mt-4 max-w-md text-charcoal/80">
            We&apos;re starting with the {ROUTE.name}. Not on this route? Tell us your estate in the{" "}
            <a href="#collection" className="font-semibold text-teal underline underline-offset-4">
              collection form
            </a>{" "}
            and we&apos;ll let you know.
          </p>
        </div>

        <div className="sm:relative sm:pb-10">
          <Photo
            src="/images/estate.jpg"
            alt="An apartment building with palm trees in a Nairobi residential estate"
            className="aspect-[4/3] rounded-[2rem]"
          />
          <div className="mt-4 rounded-2xl bg-cream p-5 shadow-xl sm:absolute sm:bottom-0 sm:right-4 sm:mt-0 sm:w-[68%]">
            <p className="font-display text-lg text-teal">{ROUTE.name}</p>
            <ol className="mt-3">
              {ROUTE.stops.map((stop, i) => (
                <li key={stop.name} className="relative pb-3 pl-7 last:pb-0">
                  {i < lastIndex && (
                    <span
                      aria-hidden
                      className="absolute left-[7px] top-4 h-full border-l-2 border-dashed border-teal/40"
                    />
                  )}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-teal ${
                      i === lastIndex ? "bg-coral" : "bg-cream"
                    }`}
                  />
                  <span className="font-medium">{stop.name}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}