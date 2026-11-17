// Ícones SVG extraídos da proposta visual (docs/design/Visual-*.dc.html).
// Traço herdando currentColor, para seguir a cor do contêiner (.ico, .btn etc.).

const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  play: null, // preenchido (ver abaixo)
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 7.5-2" />
    </>
  ),
  lockClosed: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  gauge: (
    <>
      <path d="M3 16a9 9 0 0 1 18 0" />
      <path d="M12 16l4-5" />
      <circle cx="12" cy="16" r="1.2" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H6v18h12V7z" />
      <path d="M14 3v4h4M9 13h6M9 17h4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </>
  ),
  gamepad: (
    <>
      <rect x="2" y="7" width="20" height="11" rx="4" />
      <path d="M7 11v3M5.5 12.5h3" />
      <circle cx="16" cy="11.5" r="0.8" />
      <circle cx="18" cy="13.8" r="0.8" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  trend: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M7 21h10M5 7h14" />
      <path d="M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  whatsapp: <path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12z" />,
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14.5c1.6.7 2.6 2.6 3 5.5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1-4 4-6 8-6s7 2 8 6" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1 1-2 4-2 6 2 0 5-1 6-2" />
      <path d="M9 15l-3-3c1.5-4 5-8.5 12-9 0 7-5 10.5-9 12z" />
      <circle cx="14.5" cy="9.5" r="1.5" />
    </>
  ),
  box: (
    <>
      <path d="M12 2 3 7v10l9 5 9-5V7z" />
      <path d="M3 7l9 5 9-5M12 12v10" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </>
  ),
  network: (
    <>
      <circle cx="5" cy="12" r="2.5" />
      <circle cx="19" cy="5" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M7.3 11 16.7 6M7.3 13l9.4 5" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
      <path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2L15 11" />
      <path d="M21 8.5 17.5 5 13 9.5" />
      <path d="M3 8.5 6.5 5l5 5-2 2a1.4 1.4 0 0 1-2-2" />
      <path d="m3 8.5 5.5 5.5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export default function Icon({ name, size = 24, strokeWidth = 1.6, className, style }) {
  if (name === "play") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} style={style}>
        <path d="M8 5v14l11-7z" />
      </svg>
    );
  }
  if (name === "youtube") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} style={style}>
        <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3z" />
      </svg>
    );
  }
  if (name === "quote") {
    return (
      <svg width="32" height="24" viewBox="0 0 32 24" fill="#7C3AED" aria-hidden="true" className={className} style={style}>
        <path d="M0 24V13C0 5.8 4.4 1.4 11 0l1.4 3.2C8.6 4.6 6.8 7.2 6.6 10.4H12V24zm18 0V13c0-7.2 4.4-11.6 11-13l1.4 3.2c-3.8 1.4-5.6 4-5.8 7.2H30V24z" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}

// Ícones ilustrativos dos planos (Visual-Advocacia, linhas 217–220).
export function PlanIcon({ name }) {
  const common = { width: 44, height: 44, viewBox: "0 0 44 44", fill: "none", "aria-hidden": true };
  switch (name) {
    case "origem":
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="20" stroke="rgba(167,139,250,.35)" />
          <circle cx="22" cy="22" r="5" fill="#8B5CF6" />
        </svg>
      );
    case "orbita":
      return (
        <svg {...common}>
          <ellipse cx="22" cy="22" rx="20" ry="9" stroke="rgba(167,139,250,.6)" transform="rotate(-20 22 22)" />
          <circle cx="22" cy="22" r="5" fill="#8B5CF6" />
          <circle cx="39" cy="16" r="2.5" fill="#C4B5FD" />
        </svg>
      );
    case "vetor":
      return (
        <svg {...common} strokeLinecap="round">
          <path d="M6 38 36 8" stroke="#8B5CF6" strokeWidth="2" />
          <path d="M22 8h14v14" stroke="#C4B5FD" strokeWidth="2" />
          <circle cx="6" cy="38" r="3" fill="#8B5CF6" />
        </svg>
      );
    case "space":
    default:
      return (
        <svg {...common}>
          <path d="M22 4l4.5 13.5L40 22l-13.5 4.5L22 40l-4.5-13.5L4 22l13.5-4.5z" fill="#8B5CF6" opacity=".9" />
          <circle cx="36" cy="8" r="2" fill="#C4B5FD" />
          <circle cx="8" cy="36" r="1.5" fill="#C4B5FD" />
        </svg>
      );
  }
}
