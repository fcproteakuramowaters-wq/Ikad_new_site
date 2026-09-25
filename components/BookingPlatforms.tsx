import Link from "next/link";

const platforms = [
  {
    name: "Booking.com",
    note: "Ikad Hotel & Suites, Victoria Island",
    url: "https://www.booking.com/hotel/ng/the-haven-suite.html",
  },
  {
    name: "Expedia",
    note: "Ikad Hotel & Suites, Victoria Island",
    url: "https://www.expedia.com/Lagos-Hotels-Ikad-Hotel-And-Suite.h103402219.Hotel-Information",
  },
  {
    name: "Trip.com",
    note: "Ikad Hotel & Suites, Victoria Island",
    url: "https://www.trip.com/hotels/detail/?cityId=87698&hotelId=102356645",
  },
];

export default function BookingPlatforms() {
  return (
    <section className="px-5 py-20 sm:px-8 md:py-28" aria-labelledby="platforms-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Book your way</p>
          <h2 id="platforms-heading" className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Also available on your favourite platforms
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-navy"
            >
              <span>
                <span className="block text-lg font-semibold text-navy">{platform.name}</span>
                <span className="mt-1 block text-sm text-gray-500">{platform.note}</span>
              </span>
              <span className="text-xl text-gold-dark transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-cream p-6 sm:flex-row sm:items-center">
          <p className="text-gray-700">
            <strong className="text-navy">Get our best rates by booking direct.</strong> Contact us for special offers and longer stays.
          </p>
          <Link href="/booking" className="shrink-0 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy">
            Book direct
          </Link>
        </div>
      </div>
    </section>
  );
}
