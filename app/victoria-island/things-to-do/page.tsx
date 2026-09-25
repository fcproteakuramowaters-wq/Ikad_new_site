import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { ArrowRightIcon, PinIcon } from "@/components/Icons";
import { HOTELS, SITE_URL } from "@/lib/hotels";
import { VI_PLACES, VI_TIPS, type Place } from "@/lib/neighbourhood";

const hotel = HOTELS["victoria-island"];
const serif = { fontFamily: "var(--font-playfair)" };
const PATH = "/victoria-island/things-to-do";

export const metadata: Metadata = {
  title: { absolute: "Things to Do in Victoria Island, Lagos: A Local Guide | Ikad Hotels" },
  description:
    "Beaches, art, culture and business hubs near Victoria Island, Lagos: Landmark Beach, Eko Atlantic, Terra Kulture, Lekki Conservation Centre and more, with travel times and local tips from Ikad Hotel & Suites.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Things to Do in Victoria Island, Lagos",
    description: "A local guide to beaches, culture and business around Victoria Island, from the team at Ikad Hotel & Suites.",
    url: PATH,
    type: "article",
    images: [{ url: "/og-victoria-island.jpg", width: 1200, height: 630, alt: "Ikad Hotel & Suites, Victoria Island" }],
  },
};

const categories: Place["category"][] = ["Beach & leisure", "Culture", "Business", "Getting around"];

export default function ThingsToDo() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Things to Do in Victoria Island, Lagos: A Local Guide",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}${PATH}`,
    image: `${SITE_URL}/og-victoria-island.jpg`,
    about: { "@type": "Place", name: "Victoria Island, Lagos" },
    mentions: VI_PLACES.map((p) => ({ "@type": "TouristAttraction", name: p.name, address: `${p.area}, Lagos` })),
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <BreadcrumbSchema
        path={[
          { name: "Home", url: SITE_URL },
          { name: "Victoria Island", url: `${SITE_URL}${hotel.path}` },
          { name: "Things to do", url: `${SITE_URL}${PATH}` },
        ]}
      />

      <header className="bg-navy px-5 pb-14 pt-12 text-white sm:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href={hotel.path} className="hover:text-white">Victoria Island</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Things to do</span>
          </nav>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Local guide</p>
          <h1 className="text-4xl leading-[1.1] sm:text-5xl md:text-6xl" style={serif}>
            Things to do in Victoria Island, Lagos
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Victoria Island is where Lagos does business by day and comes alive by night. Here are our team&apos;s favourite beaches, galleries and landmarks within easy reach of {hotel.name}.
          </p>
        </div>
      </header>

      <div className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-4xl space-y-14">
          {categories.map((cat) => {
            const places = VI_PLACES.filter((p) => p.category === cat);
            if (!places.length) return null;
            return (
              <section key={cat} aria-labelledby={`cat-${cat}`}>
                <h2 id={`cat-${cat}`} className="text-3xl text-navy sm:text-4xl" style={serif}>{cat}</h2>
                <div className="mt-8 space-y-8">
                  {places.map((place) => (
                    <article key={place.name} className="border-l-2 border-gold/60 pl-6">
                      <h3 className="text-xl font-semibold text-navy">{place.name}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                        <PinIcon className="h-4 w-4" /> {place.area} · {place.time} from the hotel
                      </p>
                      <p className="mt-3 leading-relaxed text-gray-700">{place.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          <section aria-labelledby="tips" className="rounded-2xl bg-cream p-8 sm:p-10">
            <h2 id="tips" className="text-3xl text-navy" style={serif}>Local tips for your visit</h2>
            <dl className="mt-8 grid gap-8 sm:grid-cols-2">
              {VI_TIPS.map((tip) => (
                <div key={tip.title}>
                  <dt className="font-semibold text-navy">{tip.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-gray-700">{tip.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="text-sm text-gray-500">
            Travel times are typical estimates by car and can be much longer at rush hour. Opening hours and prices change, so check with each venue before you go. Our front desk is always happy to help.
          </p>

          <section className="rounded-2xl bg-navy p-8 text-white sm:p-12">
            <h2 className="text-3xl" style={serif}>Stay at the centre of it all</h2>
            <p className="mt-4 max-w-xl text-white/75">
              {hotel.name} is by the Eko Hotel Roundabout, with rooms from {hotel.fromPrice} per night, 24/7 power and free Wi-Fi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${hotel.path}#rooms`} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-white">
                See rooms &amp; rates <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a href={hotel.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Ask our team on WhatsApp
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
