import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BookingPlatforms from "@/components/BookingPlatforms";
import HeroMedia from "@/components/HeroMedia";
import QuickBook from "@/components/QuickBook";
import { ArrowRightIcon, TvIcon } from "@/components/Icons";
import { VI_PLACES } from "@/lib/neighbourhood";
import { FaqSchema, HotelsListSchema } from "@/components/SchemaMarkup";
import { HOTEL_LIST, HOTELS } from "@/lib/hotels";

export const metadata: Metadata = {
  title: { absolute: "Ikad Hotels | Hotels in Victoria Island & Yaba, Lagos – Book Direct" },
  description:
    "Stay at Ikad Hotels in Lagos: stylish suites in Victoria Island by Eko Hotel Roundabout and great-value rooms on Borno Way, Yaba. 24/7 power, free Wi-Fi, rooms from ₦25,000/night. Book direct.",
  alternates: { canonical: "/" },
};

const serif = { fontFamily: "var(--font-playfair)" };

const vi = HOTELS["victoria-island"];
const yaba = HOTELS.yaba;

const faqs = [
  {
    question: "Where are Ikad Hotels located in Lagos?",
    answer: `We have two hotels in Lagos. Ikad Hotel & Suites is at ${vi.address.display}, by the Eko Hotel Roundabout. Ikad Hotel Yaba is at ${yaba.address.display} (formerly Coolio Hotel).`,
  },
  {
    question: "How much does a room cost per night?",
    answer: `Rooms at Ikad Hotel Yaba start from ${yaba.fromPrice} per night, and rooms at Ikad Hotel & Suites Victoria Island start from ${vi.fromPrice} per night, up to ${vi.rooms[vi.rooms.length - 1].price} for a Master suite. Rates are confirmed at the time of booking.`,
  },
  {
    question: "How do I book a room at Ikad Hotels?",
    answer: `You can book directly on our website, call or WhatsApp the hotel (Victoria Island: ${vi.phoneDisplay}, Yaba: ${yaba.phoneDisplay}), or book through Booking.com, Expedia or Trip.com. Contacting us directly gets you our best available rate.`,
  },
  {
    question: "Do the hotels have Wi-Fi and constant electricity?",
    answer:
      "Yes. Both hotels have a 24/7 power supply, free high-speed Wi-Fi and a 24-hour front desk, so work and rest never stop.",
  },
  {
    question: "Can I watch football matches at the hotel?",
    answer:
      "Yes. Every weekend both hotels show the big matches in the restaurant, where you can watch with other guests over pepper soup, drinks and more. Every room's TV also shows the matches if you prefer to watch privately.",
  },
  {
    question: "Is parking available?",
    answer:
      "Ikad Hotel Yaba offers free secure parking for all guests. For parking at our Victoria Island hotel, please contact the front desk before arrival.",
  },
];

const pillars = [
  {
    title: "Uninterrupted comfort",
    text: "24/7 power at both hotels, air-conditioned rooms and fast Wi-Fi, so work and rest never stop.",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    title: "Prime Lagos locations",
    text: "Island business district or mainland tech hub: stay close to where your day happens.",
    icon: "M12 22s-7-6.2-7-12a7 7 0 1114 0c0 5.8-7 12-7 12zm0-9a3 3 0 100-6 3 3 0 000 6z",
  },
  {
    title: "Genuine hospitality",
    text: "A 24-hour front desk and a team that knows guests by name, not room number.",
    icon: "M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z",
  },
  {
    title: "Honest pricing",
    text: "Transparent nightly rates in naira, with the best prices when you book direct.",
    icon: "M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L2 12V2h10l8.6 8.6a2 2 0 010 2.8zM7 7h.01",
  },
];

const gallery = [
  { src: "/vi/lobby.jpeg", alt: "Lobby at Ikad Hotel & Suites, Victoria Island" },
  { src: "/vi/IMG_2624.jpg", alt: "Luxury king room at Ikad Hotel & Suites, Victoria Island" },
  { src: "/yaba/Cbar_Rest.jpeg", alt: "Bar and restaurant at Ikad Hotel Yaba" },
  { src: "/vi/master4.jpg", alt: "Master suite at Ikad Hotel & Suites, Victoria Island" },
  { src: "/ikad/Deluxe1.jpeg", alt: "Deluxe room at Ikad Hotel Yaba" },
];

function Icon({ d }: { d: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-gold" : "text-gold-dark"}`}>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <HotelsListSchema />
      <FaqSchema items={faqs} />

      {/* Hero */}
      <section className="relative isolate flex min-h-[80svh] items-end overflow-hidden text-white">
        <HeroMedia video="/background.mp4" poster="/vi/IMG_2665.jpg" posterAlt="Reception lounge at Ikad Hotel & Suites, Victoria Island, Lagos" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1520] via-[#0e1520]/75 to-[#0e1520]/50" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-24 sm:px-8 md:pb-14">
          <Eyebrow light>Victoria Island · Yaba · Lagos</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl" style={serif}>
            Boutique hotels in the heart of <em className="text-gold">Lagos</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Stylish suites by the Eko Hotel Roundabout in Victoria Island and smart-value rooms on Borno Way, Yaba, with 24/7 comfort and warm Nigerian hospitality.
          </p>
          <QuickBook className="mt-10 max-w-5xl" />
          <a href="#locations" className="mt-5 inline-block text-sm font-medium text-white/80 underline decoration-gold underline-offset-4 hover:text-white">
            Explore our two hotels
          </a>

          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-6 sm:grid-cols-4">
            {[
              ["2", "Lagos locations"],
              [yaba.fromPrice, "Rooms from / night"],
              ["24/7", "Front desk"],
              ["Free", "High-speed Wi-Fi"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs uppercase tracking-wider text-white/60">{label}</dt>
                <dd className="text-2xl font-medium text-white sm:text-3xl" style={serif}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-cream px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Eyebrow>Welcome to Ikad Hotels</Eyebrow>
            <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
              Two addresses. One standard of care.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700 md:col-span-7">
            <p>
              Whether you are in Lagos for a board meeting on the Island, a conference on the mainland or a weekend with family, Ikad Hotels gives you a calm, well-run base to return to.
            </p>
            <p>
              Choose <Link href="/victoria-island" className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4">Ikad Hotel &amp; Suites, Victoria Island</Link> for refined suites close to Lekki and Lagos Island, or <Link href="/yaba" className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4">Ikad Hotel Yaba</Link> for comfortable, great-value rooms with free parking on the mainland.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="scroll-mt-20 px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Our Hotels</Eyebrow>
            <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
              Choose where you stay in Lagos
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {HOTEL_LIST.map((hotel) => (
              <article key={hotel.key} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl">
                <Link href={hotel.path} className="relative block aspect-[4/3] overflow-hidden bg-gray-100" tabIndex={-1} aria-hidden="true">
                  <Image
                    src={hotel.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
                    {hotel.shortName}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm font-medium text-gold-dark">{hotel.tagline}</p>
                  <h3 className="mt-2 text-2xl text-navy sm:text-3xl" style={serif}>
                    <Link href={hotel.path} className="hover:underline hover:decoration-gold">{hotel.name}</Link>
                  </h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{hotel.summary}</p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
                    {hotel.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <address className="mt-6 flex items-start gap-2 text-sm not-italic text-gray-500">
                    <Icon d="M12 22s-7-6.2-7-12a7 7 0 1114 0c0 5.8-7 12-7 12zm0-9a3 3 0 100-6 3 3 0 000 6z" />
                    <span>
                      {hotel.address.display} ·{" "}
                      <a href={`tel:${hotel.phone}`} className="text-navy hover:underline">{hotel.phoneDisplay}</a>
                    </span>
                  </address>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-500">
                      From <span className="text-2xl font-medium text-navy" style={serif}>{hotel.fromPrice}</span> / night
                    </p>
                    <div className="flex gap-3">
                      <Link href={hotel.path} className="rounded-full border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white">
                        View hotel
                      </Link>
                      <Link href="/booking" className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy">
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ikad */}
      <section className="bg-navy px-5 py-14 text-white sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <Eyebrow light>Why guests choose us</Eyebrow>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl" style={serif}>
              The essentials, done properly
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="bg-navy p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon d={p.icon} />
                </span>
                <h3 className="mt-6 text-xl" style={serif}>{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend match days */}
      <section className="bg-cream px-5 py-14 sm:px-8 md:py-20" aria-labelledby="matchday-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
            <Image src="/yaba/IMG_2666.jpg" alt="Restaurant with a big screen showing live sport at Ikad Hotel Yaba" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-navy/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" aria-hidden="true" /> Live every weekend
            </span>
          </div>
          <div>
            <Eyebrow>Weekend match days</Eyebrow>
            <h2 id="matchday-heading" className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
              Big games, pepper soup &amp; good company
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Every weekend, the biggest matches are live on the screens in our restaurants at both hotels. Pull up a chair with fellow guests, order a steaming bowl of pepper soup, cold drinks and bites from the menu, and enjoy the game together.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                "Watch together in the restaurant every weekend",
                "Pepper soup, drinks and more while you watch",
                "Prefer privacy? Every room's TV shows the matches too",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <TvIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rooms & rates */}
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Rooms &amp; Rates</Eyebrow>
              <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
                A room for every kind of trip
              </h2>
            </div>
            <p className="max-w-sm text-gray-600">
              Nightly rates in naira. Every room includes air-conditioning, a smart TV with sports channels, free Wi-Fi and 24/7 power.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {HOTEL_LIST.map((hotel) => (
              <div key={hotel.key} className="rounded-2xl border border-gray-200 p-6 sm:p-8">
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <h3 className="text-xl text-navy" style={serif}>{hotel.shortName}</h3>
                  <Link href={hotel.path} className="text-sm font-semibold text-gold-dark hover:underline">
                    See rooms <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <table className="w-full text-left">
                  <caption className="sr-only">Room rates at {hotel.name}</caption>
                  <thead className="sr-only">
                    <tr><th scope="col">Room</th><th scope="col">Bed</th><th scope="col">Price per night</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {hotel.rooms.map((room) => (
                      <tr key={room.type}>
                        <th scope="row" className="py-4 font-medium text-gray-900">{room.type}</th>
                        <td className="py-4 text-sm text-gray-500">{room.bed}</td>
                        <td className="py-4 text-right font-medium text-navy">{room.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream px-5 py-14 sm:px-8 md:py-20" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Inside Ikad</Eyebrow>
            <h2 id="gallery-heading" className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
              A look around
            </h2>
          </div>
          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4">
            {gallery.map((img, i) => (
              <div key={img.src} className={`relative overflow-hidden rounded-xl bg-gray-200 ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <Image src={img.src} alt={img.alt} fill sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"} className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingPlatforms />

      {/* Victoria Island guide teaser */}
      <section className="bg-navy px-5 py-14 text-white sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow light>Explore Lagos</Eyebrow>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl" style={serif}>
              Beaches, art &amp; business, all on our doorstep
            </h2>
            <p className="mt-6 text-white/70">
              From Landmark Beach to Eko Atlantic and Terra Kulture, Victoria Island puts the best of Lagos within minutes of your room.
            </p>
            <Link href="/victoria-island/things-to-do" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-white">
              Read our Victoria Island guide <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:col-span-7">
            {VI_PLACES.slice(1, 7).map((place) => (
              <li key={place.name} className="bg-navy p-6">
                <p className="text-xs uppercase tracking-wider text-gold">{place.category}</p>
                <p className="mt-2 text-lg" style={serif}>{place.name}</p>
                <p className="mt-1 text-sm text-white/60">{place.time} from Ikad Victoria Island</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-14 sm:px-8 md:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Good to know</Eyebrow>
            <h2 id="faq-heading" className="text-3xl leading-tight text-navy sm:text-4xl" style={serif}>
              Frequently asked questions
            </h2>
            <p className="mt-4 text-gray-600">
              Something else? <Link href="/contact" className="font-medium text-navy underline decoration-gold underline-offset-4">Contact our team</Link>.
            </p>
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

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-navy px-5 py-16 text-center text-white sm:px-8 md:py-20">
        <Image src="/vi/iwalkway.jpeg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
        <div className="mx-auto max-w-3xl">
          <Eyebrow light>Book direct &amp; save</Eyebrow>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl" style={serif}>
            Your Lagos stay starts here
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/75">
            Reserve online in minutes, or speak to our reservations team for the best available rate.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/booking" className="rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-white">
              Check availability
            </Link>
            <a href={vi.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
