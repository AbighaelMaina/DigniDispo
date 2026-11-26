import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact | DigniDispo",
  description: "Get in touch with DigniDispo about DigniPacks and household collection.",
};

const channels = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, note: "We reply within one working day." },
  { label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref, note: CONTACT.hours },
  { label: "WhatsApp", value: CONTACT.whatsapp, href: CONTACT.whatsappHref, note: "Message us any time. We reply in working hours." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-14 md:py-24">
        <h1 className="font-display text-4xl font-semibold text-teal md:text-5xl">Get in touch.</h1>
        <p className="mt-4 max-w-xl text-lg text-charcoal/80">
          Questions about DigniPack or collection? Reach us any of these ways. Your messages are handled privately.
        </p>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className="block h-full rounded-3xl bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-sm font-medium text-coral">{c.label}</p>
                <p className="mt-2 break-words font-display text-xl text-teal">{c.value}</p>
                <p className="mt-3 text-sm text-charcoal/70">{c.note}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-3xl bg-sage/30 p-6 sm:p-8">
          <h2 className="font-display text-2xl text-teal">Ready to request a collection?</h2>
          <p className="mt-2 text-charcoal/80">
            The quickest way is the collection form. Based in {CONTACT.area}.
          </p>
          <Button href="/#collection" className="mt-5">Request Collection</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}