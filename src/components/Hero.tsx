import Button from "./Button";
import Photo from "./Photo";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-teal">
      {/* Background photo: blurred and dimmed so it never competes with the text */}
      <div className="absolute inset-0 scale-110 blur-[6px] brightness-75">
        <Photo
          src="/images/hero-home.jpg"
          alt="A modern residential apartment development in Nairobi"
          priority
          sizes="100vw"
          className="h-full w-full"
        />
      </div>

      {/* Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-teal/85 md:bg-gradient-to-r md:from-teal/95 md:via-teal/85 md:to-teal/70"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Private disposal for the waste you don&apos;t want sitting in your bin.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/90">
            DigniDispo gives households a discreet way to contain, manage and request collection for sanitary and intimate waste.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#collection" variant="coral">Get a DigniPack</Button>
            <Button href="#collection" variant="ghost">Request Collection</Button>
          </div>
        </div>
      </div>
    </section>
  );
}