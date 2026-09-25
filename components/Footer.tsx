import Link from "next/link";
import { HOTEL_LIST } from "@/lib/hotels";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/victoria-island", label: "Victoria Island hotel" },
  { href: "/yaba", label: "Yaba hotel" },
  { href: "/booking", label: "Book a room" },
  { href: "/contact", label: "Contact us" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e1520] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>Ikad Hotels</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Boutique hotels in Victoria Island and Yaba, Lagos, built around comfort, reliability and genuine Nigerian hospitality.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61558804720679" target="_blank" rel="noopener noreferrer" aria-label="Ikad Hotels on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold">
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/ikadhotels" target="_blank" rel="noopener noreferrer" aria-label="Ikad Hotels on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {HOTEL_LIST.map((hotel) => (
            <div key={hotel.key} className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{hotel.shortName}</p>
              <address className="mt-4 space-y-2 text-sm not-italic text-white/70">
                <p>
                  <Link href={hotel.path} className="font-medium text-white hover:text-gold">{hotel.name}</Link>
                </p>
                <p>{hotel.address.display}</p>
                <p><a href={`tel:${hotel.phone}`} className="hover:text-white">{hotel.phoneDisplay}</a></p>
                <p><a href={`mailto:${hotel.email}`} className="break-all hover:text-white">{hotel.email}</a></p>
                <p className="flex gap-4 pt-1">
                  <a href={hotel.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp
                  </a>
                  <a href={hotel.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <i className="fa-solid fa-location-dot" aria-hidden="true"></i> Directions
                  </a>
                </p>
              </address>
            </div>
          ))}

          <nav aria-label="Footer" className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
              <li><a href="mailto:info@ikadhotels.com" className="hover:text-white">info@ikadhotels.com</a></li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>&copy; {currentYear} Ikad Hotels. All rights reserved.</p>
          <p>Victoria Island · Yaba · Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
