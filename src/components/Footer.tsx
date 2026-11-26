import { FOOTER_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-teal/10 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-teal">DigniDispo</p>
          <p className="mt-1 text-charcoal/70">Private. Safe. Dignified.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} className="inline-block py-1 hover:text-teal">{l.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-sm text-charcoal/60">© 2026 DigniDispo</p>
    </footer>
  );
}
