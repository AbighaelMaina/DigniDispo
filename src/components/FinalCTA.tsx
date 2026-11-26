import Button from "./Button";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="px-5 py-16 md:py-24">
      <Reveal className="mx-auto max-w-4xl rounded-[2.5rem] bg-teal px-6 py-14 text-center text-cream md:px-12">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Ready for a more private way to dispose?</h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="#collection" variant="coral">Get a DigniPack</Button>
          <Button href="#collection" variant="ghost">Request Collection</Button>
        </div>
        <p className="mt-8 text-sage">DigniDispo — Private. Safe. Dignified.</p>
      </Reveal>
    </section>
  );
}
