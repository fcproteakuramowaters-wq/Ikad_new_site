// Inline SVG icons. Replaces the Font Awesome CDN stylesheet (~100 KB of
// render-blocking CSS + font files) with a few hundred bytes per icon.

type IconProps = { className?: string; title?: string };

function Svg({ className = "h-5 w-5", title, children, fill = false }: IconProps & { children: React.ReactNode; fill?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.8 2z" /></Svg>
);
export const MailIcon = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Svg>
);
export const PinIcon = (p: IconProps) => (
  <Svg {...p}><path d="M12 22s-7-6.2-7-12a7 7 0 1114 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="10" r="2.5" /></Svg>
);
export const CheckIcon = (p: IconProps) => (
  <Svg {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></Svg>
);
export const WifiIcon = (p: IconProps) => (
  <Svg {...p}><path d="M2 8.8a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0" /><circle cx="12" cy="19.5" r="0.8" fill="currentColor" /></Svg>
);
export const BoltIcon = (p: IconProps) => (
  <Svg {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></Svg>
);
export const BellIcon = (p: IconProps) => (
  <Svg {...p}><path d="M4 18h16M6 18a6 6 0 0112 0M12 6v2M10 6h4" /></Svg>
);
export const DiningIcon = (p: IconProps) => (
  <Svg {...p}><path d="M7 2v20M4 2v6a3 3 0 006 0V2M17 22V2c-2.5 1-4 3.5-4 7v4h4" /></Svg>
);
export const BedIcon = (p: IconProps) => (
  <Svg {...p}><path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5" /><circle cx="7" cy="11" r="2" /></Svg>
);
export const UsersIcon = (p: IconProps) => (
  <Svg {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M18 14c2 .8 3.5 2.9 3.5 6" /></Svg>
);
export const ShieldIcon = (p: IconProps) => (
  <Svg {...p}><path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></Svg>
);
export const BriefcaseIcon = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" /></Svg>
);
export const PawIcon = (p: IconProps) => (
  <Svg {...p}><circle cx="6" cy="10" r="1.8" /><circle cx="10" cy="6" r="1.8" /><circle cx="14" cy="6" r="1.8" /><circle cx="18" cy="10" r="1.8" /><path d="M12 12c-3 0-6 4-6 6.5 0 1.5 1.5 2 3 1.5s2-.8 3-.8 1.5.3 3 .8 3 0 3-1.5C18 16 15 12 12 12z" /></Svg>
);
export const CarIcon = (p: IconProps) => (
  <Svg {...p}><path d="M5 17h14M5 17v2M19 17v2M3 13l2-6a2 2 0 012-1.4h10a2 2 0 012 1.4l2 6v4H3v-4zM3 13h18" /><circle cx="7.5" cy="15" r="0.6" fill="currentColor" /><circle cx="16.5" cy="15" r="0.6" fill="currentColor" /></Svg>
);
export const TvIcon = (p: IconProps) => (
  <Svg {...p}><rect x="2.5" y="5" width="19" height="13" rx="2" /><path d="M8 21h8M12 18v3M9 2.5l3 2.5 3-2.5" /></Svg>
);
export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
export const ChevronLeftIcon = (p: IconProps) => (
  <Svg {...p}><path d="M15 6l-6 6 6 6" /></Svg>
);
export const ChevronRightIcon = (p: IconProps) => (
  <Svg {...p}><path d="M9 6l6 6-6 6" /></Svg>
);
export const CalendarIcon = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></Svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <Svg {...p} fill>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1112 21.8zM12 0a12 12 0 00-10.3 18.1L0 24l6.1-1.6A12 12 0 1012 0z" />
  </Svg>
);
export const FacebookIcon = (p: IconProps) => (
  <Svg {...p} fill>
    <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4z" />
  </Svg>
);
export const InstagramIcon = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" /></Svg>
);
