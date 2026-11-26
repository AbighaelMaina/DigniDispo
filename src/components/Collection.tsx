import CollectionForm from "./CollectionForm";
import Reveal from "./Reveal";

export default function Collection() {
  return (
    <section id="collection" className="bg-sage/30 py-16 md:py-24">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[2fr_3fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold text-teal md:text-4xl">Need a collection?</h2>
          <p className="mt-4 max-w-sm text-lg text-charcoal/80">Tell us where and when, and we&apos;ll coordinate the rest.</p>
        </div>
        <CollectionForm />
      </Reveal>
    </section>
  );
}
