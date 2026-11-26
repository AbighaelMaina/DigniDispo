const styles = {
  primary: "bg-teal text-cream hover:bg-[#0f3736]",
  coral: "bg-coral text-charcoal hover:bg-[#cf7d69]",
  outline: "border border-teal text-teal hover:bg-teal hover:text-cream",
  light: "bg-cream text-teal hover:bg-white",
  ghost: "border border-cream/50 text-cream hover:bg-cream/10",
};

export default function Button({
  href, variant = "primary", children, className = "",
}: { href: string; variant?: keyof typeof styles; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-base font-semibold transition-colors duration-200 ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}
