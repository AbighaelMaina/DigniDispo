type Props = { className?: string };

export default function PackVisual({ className = "" }: Props) {
  return (
    <div className={`rounded-[2rem] bg-sage/30 p-3 sm:p-5 ${className}`}>
      <svg
        viewBox="0 0 520 400"
        className="h-auto w-full"
        role="img"
        aria-label="The DigniPack: a teal box with a compact container, a roll of discreet bags and a how-to-use card"
      >
        <defs>
          <linearGradient id="dpBox" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1f5f5d" />
            <stop offset="1" stopColor="#123a39" />
          </linearGradient>
          <linearGradient id="dpLid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2c7773" />
            <stop offset="1" stopColor="#1d5d5b" />
          </linearGradient>
          <linearGradient id="dpCream" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fffdf8" />
            <stop offset="1" stopColor="#e6dfd0" />
          </linearGradient>
          <filter id="dpShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#174C4B" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* floor shadow */}
        <ellipse cx="260" cy="352" rx="225" ry="16" fill="#174C4B" opacity="0.12" />

        {/* how-to-use card (behind box) */}
        <g transform="rotate(-6 120 90)" filter="url(#dpShadow)">
          <rect x="52" y="34" width="160" height="108" rx="10" fill="#fffdf8" />
          <rect x="68" y="50" width="56" height="7" rx="3.5" fill="#D98C7A" />
          <text x="68" y="78" fontSize="13" fontWeight="600" fill="#174C4B" fontFamily="var(--font-body), sans-serif">How to use</text>
          <rect x="68" y="90" width="120" height="5" rx="2.5" fill="#A8C3B0" />
          <rect x="68" y="102" width="96" height="5" rx="2.5" fill="#A8C3B0" />
          <rect x="68" y="114" width="108" height="5" rx="2.5" fill="#A8C3B0" />
        </g>

        {/* box */}
        <g filter="url(#dpShadow)">
          <rect x="40" y="150" width="240" height="190" rx="14" fill="url(#dpBox)" />
          <rect x="40" y="272" width="240" height="14" fill="#A8C3B0" opacity="0.9" />
          <rect x="30" y="122" width="260" height="46" rx="12" fill="url(#dpLid)" />
          <rect x="30" y="160" width="260" height="8" fill="#0f3736" opacity="0.25" />
          <text x="62" y="222" fontSize="32" fill="#F7F3EA" fontFamily="var(--font-display), Georgia, serif">DigniPack</text>
          <text x="62" y="244" fontSize="12" fill="#A8C3B0" fontFamily="var(--font-body), sans-serif">Private. Safe. Dignified.</text>
          <text x="62" y="314" fontSize="12" fill="#F7F3EA" opacity="0.8" fontFamily="var(--font-body), sans-serif">Household disposal kit</text>
          <circle cx="248" cy="192" r="15" fill="#D98C7A" />
          <path d="M241 192l5 5 9-10" fill="none" stroke="#F7F3EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* compact container */}
        <g filter="url(#dpShadow)">
          <rect x="324" y="180" width="124" height="160" rx="22" fill="url(#dpCream)" />
          <rect x="314" y="158" width="144" height="30" rx="15" fill="#A8C3B0" />
          <rect x="372" y="146" width="28" height="12" rx="6" fill="#8aab97" />
          <rect x="350" y="226" width="72" height="5" rx="2.5" fill="#174C4B" opacity="0.15" />
          <circle cx="386" cy="270" r="10" fill="#D98C7A" opacity="0.85" />
        </g>

        {/* roll of discreet bags */}
        <g filter="url(#dpShadow)">
          <rect x="414" y="62" width="88" height="72" rx="36" fill="url(#dpCream)" />
          <circle cx="458" cy="98" r="16" fill="#A8C3B0" />
          <circle cx="458" cy="98" r="6" fill="#F7F3EA" />
        </g>
      </svg>
    </div>
  );
}