export const NAV = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "DigniPack", href: "/#dignipack" },
  { label: "Collection", href: "/#collection" },
  { label: "FAQs", href: "/#faqs" },
];

export const CONTACT_HREF = "/contact";

export const STEPS = [
  { title: "Contain", text: "Keep sensitive waste contained separately using a DigniPack or suitable dedicated container." },
  { title: "Request", text: "Submit a collection request through DigniDispo." },
  { title: "Collect", text: "DigniDispo coordinates collection through appropriate waste-management partners." },
  { title: "Handled responsibly", text: "The waste is routed through an appropriate treatment and final-disposal pathway." },
];

export const PACK_ITEMS = [
  { title: "Discreet disposal bags", text: "Opaque bags for containing waste." },
  { title: "Compact dedicated container", text: "A small container that fits in your bathroom." },
  { title: "Simple disposal instructions", text: "What goes in, and how to seal it." },
  { title: "Collection information", text: "How to request a pickup when you're ready." },
];

export const SERVICES = [
  { title: "DigniPack", text: "Get a discreet household disposal kit.", cta: "Get Started", href: "#collection", type: "dignipack" },
  { title: "One-Time Collection", text: "Request a collection whenever you need one.", cta: "Request Collection", href: "#collection", type: "one-time" },
  { title: "Regular Collection", text: "Set up recurring household collection.", cta: "Request Collection", href: "#collection", type: "regular" },
];

export const SERVICE_TYPES = [
  { value: "dignipack", label: "Get a DigniPack" },
  { value: "one-time", label: "One-time collection" },
  { value: "regular", label: "Regular collection" },
];

export const BENEFITS = [
  { title: "Private", text: "Sensitive waste stays contained." },
  { title: "Convenient", text: "Request collection without having to figure out the disposal process yourself." },
  { title: "Discreet", text: "Designed to fit naturally into your home." },
  { title: "Responsible", text: "We coordinate appropriate collection and disposal pathways through suitable partners." },
];

export const FAQS = [
  { q: "What is DigniDispo?", a: "DigniDispo is a household service for sanitary and intimate waste. We help you contain it privately and request collection, so you don't have to work out the disposal yourself." },
  { q: "What is a DigniPack?", a: "A DigniPack is a discreet kit for containing sensitive household waste. It includes disposal bags, a compact dedicated container, simple instructions and collection information." },
  { q: "What waste can I put in a DigniPack?", a: "DigniPack is designed for sanitary towels, condoms, diapers and similar household waste. It is not designed for medical, hazardous or sharp waste." },
  { q: "How do I request collection?", a: "Fill in the collection form on this page with your name, phone number, estate, preferred date and time. We'll follow up to confirm the details." },
  { q: "Do I need a subscription?", a: "No. You can request a one-time collection whenever you need one, or set up regular collection if you'd prefer a routine." },
  { q: "Where is DigniDispo currently available?", a: "We're starting with selected areas. Enter your estate or location in the collection form and we'll confirm whether we can serve you." },
  { q: "Who handles the waste after collection?", a: "DigniDispo coordinates collection and disposal through appropriate waste-management and treatment partners. We do not operate our own treatment facilities." },
];

export const FOOTER_LINKS = [
  ...NAV,
  { label: "Contact", href: CONTACT_HREF },
];