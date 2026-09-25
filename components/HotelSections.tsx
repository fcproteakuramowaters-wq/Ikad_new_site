// Building blocks shared by the individual hotel pages (Victoria Island, Yaba).

import Link from "next/link";
import RoomGallery from "@/components/RoomGallery";
import { BedIcon, CheckIcon, UsersIcon, WhatsAppIcon } from "@/components/Icons";
import type { HotelInfo } from "@/lib/hotels";
import type { Place } from "@/lib/neighbourhood";
import { formatNaira, type Room } from "@/lib/rooms";

export const serif = { fontFamily: "var(--font-playfair)" };

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-gold" : "text-gold-dark"}`}>{children}</p>;
}

export function RoomCards({ hotel, rooms, bookingPath }: { hotel: HotelInfo; rooms: Room[]; bookingPath: string }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {rooms.map((room) => (
        <article key={room.type} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <RoomGallery images={room.images} alt={`${room.type} room at ${hotel.name}`} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-2xl text-navy" style={serif}>{room.type}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{room.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-700">
              <span className="flex items-center gap-1.5"><BedIcon className="h-4 w-4 text-gold-dark" />{room.bed}</span>
              <span className="flex items-center gap-1.5"><UsersIcon className="h-4 w-4 text-gold-dark" />{room.occupancy}</span>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              {room.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-green-700" />{h}</li>
              ))}
            </ul>

            <details className="group mt-4 text-sm">
              <summary className="cursor-pointer list-none font-semibold text-navy hover:underline [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">All room features</span>
                <span className="hidden group-open:inline">Hide features</span>
              </summary>
              <ul className="mt-3 grid grid-cols-1 gap-1.5 text-gray-600">
                {room.features.map((f) => <li key={f}>· {f}</li>)}
              </ul>
            </details>

            <div className="mt-auto flex items-end justify-between gap-4 border-t border-gray-100 pt-5">
              <p className="text-xs text-gray-500">
                <span className="block text-2xl font-medium text-navy" style={serif}>{formatNaira(room.price)}</span>
                per night
              </p>
              <Link
                href={`${bookingPath}?room=${encodeURIComponent(room.type)}`}
                className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
              >
                Reserve
              </Link>
            </div>
          </div>
        </article>
      ))}

      <div className="flex flex-col justify-center rounded-2xl border border-dashed border-gold/60 p-8 text-center">
        <h3 className="text-2xl text-navy" style={serif}>Not sure which room?</h3>
        <p className="mt-3 text-sm text-gray-600">Tell us about your trip and we&apos;ll recommend the right room and the best rate.</p>
        <a
          href={hotel.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" /> Ask us on WhatsApp
        </a>
      </div>
    </div>
  );
}

export function NearbyList({ places }: { places: Place[] }) {
  return (
    <>
      <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Nearby (approx. by car)</h3>
      <ul className="mt-4 divide-y divide-gray-100">
        {places.map((place) => (
          <li key={place.name} className="flex items-baseline justify-between gap-4 py-3 text-sm">
            <span className="text-gray-800">{place.name.split(" (")[0]}</span>
            <span className="shrink-0 text-gray-500">{place.time}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-gray-400">Times are typical estimates; Lagos traffic varies.</p>
    </>
  );
}

export function FaqSection({ id, title, faqs }: { id: string; title: string; faqs: { question: string; answer: string }[] }) {
  return (
    <section className="bg-cream px-5 py-14 sm:px-8 md:py-20" aria-labelledby={id}>
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Eyebrow>Good to know</Eyebrow>
          <h2 id={id} className="text-3xl leading-tight text-navy sm:text-4xl" style={serif}>{title}</h2>
        </div>
        <div className="divide-y divide-gray-200 border-y border-gray-200 md:col-span-8">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-navy [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="text-2xl font-light text-gold-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StickyBookBar({ fromPrice }: { fromPrice: string }) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-gray-200 bg-white/95 px-5 py-3 backdrop-blur md:hidden">
        <p className="text-xs text-gray-500">
          From <span className="text-lg font-semibold text-navy">{fromPrice}</span> / night
        </p>
        <a href="#book" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">Check availability</a>
      </div>
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
