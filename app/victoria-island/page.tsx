import Link from "next/link";
import Image from "next/image";
import QuickBook from "@/components/QuickBook";
import { Eyebrow, FaqSection, NearbyList, RoomCards, StickyBookBar, serif } from "@/components/HotelSections";
import BookingPlatforms from "@/components/BookingPlatforms";
import WhatsAppChat from "@/components/WhatsAppChat";
import { BreadcrumbSchema, FaqSchema, HotelSchema } from "@/components/SchemaMarkup";
import {
  ArrowRightIcon,
  BedIcon,
  BellIcon,
  BoltIcon,
  BriefcaseIcon,
  CheckIcon,
  DiningIcon,
  MailIcon,
  PawIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  WifiIcon,
} from "@/components/Icons";
import { HOTELS, SITE_URL } from "@/lib/hotels";
import { VI_ROOMS, formatNaira } from "@/lib/rooms";
import { VI_PLACES } from "@/lib/neighbourhood";

const hotel = HOTELS["victoria-island"];

const amenities = [
  { icon: WifiIcon, title: "Free high-speed Wi-Fi", text: "Fast internet in every room and public area." },
  { icon: BoltIcon, title: "24/7 power supply", text: "Reliable backup power, so work and rest never stop." },
  { icon: DiningIcon, title: "Restaurant & bar", text: "Nigerian and international dishes, cocktails and cold drinks." },
  { icon: BellIcon, title: "24-hour room service", text: "Order in at any hour, straight to your door." },
  { icon: ShieldIcon, title: "24-hour front desk", text: "A team on hand day and night to help with anything you need." },
  { icon: BriefcaseIcon, title: "Business-ready rooms", text: "Work desks in most rooms and a central Victoria Island address." },
  { icon: PawIcon, title: "Pet-friendly", text: "Pets are welcome (additional charges apply)." },
  { icon: CheckIcon, title: "Smoking corridor", text: "A designated smoking area keeps rooms fresh." },
];

const faqs = [
  {
    question: "Where exactly is Ikad Hotel & Suites Victoria Island?",
    answer: `We are at ${hotel.address.display}, right by the Eko Hotel Roundabout, a short walk from Adetokunbo Ademola Street and about 10 minutes by car from Landmark Beach and Eko Atlantic.`,
  },
  {
    question: "How far is the hotel from Lagos airport?",
    answer:
      "Murtala Muhammed International Airport is typically 45 to 90 minutes away by car, depending on Lagos traffic. Contact our front desk before arrival if you need help arranging transport.",
  },
  {
    question: "Which room has a jacuzzi?",
    answer: `Our Master suite (${formatNaira(VI_ROOMS[VI_ROOMS.length - 1].price)} per night) has a luxury bathroom with a jacuzzi, a king bed, a separate living space and concierge service.`,
  },
  {
    question: "Are pets allowed?",
    answer: "Yes, pets are welcome at our Victoria Island hotel. Additional charges apply, so please let us know when you book.",
  },
  {
    question: "Is the hotel good for business travellers?",
    answer:
      "Yes. We are in the heart of Victoria Island's business district, with free high-speed Wi-Fi, work desks in most rooms, 24/7 power and a 24-hour front desk.",
  },
  {
    question: "How do I get the best rate?",
    answer: `Book directly on this website or contact us on ${hotel.phoneDisplay} or WhatsApp. Direct bookings get our best available rate with no third-party fees.`,
  },
];

export default function VictoriaIsland() {
  return (
    <div>
      <HotelSchema hotelType="victoria-island" />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema
        path={[
          { name: "Home", url: SITE_URL },
          { name: "Victoria Island", url: `${SITE_URL}${hotel.path}` },
        ]}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden text-white">
        <Image
          src="/vi/master4.jpg"
          alt="Master suite with a king bed at Ikad Hotel & Suites, Victoria Island"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0e1520] via-[#0e1520]/70 to-[#0e1520]/40" aria-hidden="true" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-32 pt-28 sm:px-8 md:pb-36">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Victoria Island</span>
          </nav>
          <Eyebrow light>Etim Inyang Crescent · By Eko Hotel Roundabout</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl" style={serif}>
            Ikad Hotel &amp; Suites, <em className="text-gold">Victoria Island</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Refined rooms and suites in the heart of Lagos&apos; business and leisure district, minutes from Eko Atlantic, Landmark Beach and the Lekki corridor.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2 text-xs font-medium sm:text-sm">
            {["24/7 power", "Free Wi-Fi", "Restaurant & bar", "Pet-friendly", `From ${hotel.fromPrice}/night`].map((chip) => (
              <li key={chip} className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur">{chip}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking bar overlapping hero */}
      <div id="book" className="relative z-10 mx-auto -mt-20 max-w-5xl scroll-mt-24 px-5 sm:px-8">
        <QuickBook hotel="victoria-island" />
        <p className="mt-3 text-center text-sm text-gray-500">
          Prefer to talk? Call <a href={`tel:${hotel.phone}`} className="font-medium text-navy hover:underline">{hotel.phoneDisplay}</a> or{" "}
          <a href={hotel.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-navy hover:underline">chat on WhatsApp</a>.
        </p>
      </div>

      {/* Overview */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Welcome</Eyebrow>
            <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
              Your calm address in the heart of Victoria Island
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                Step off Etim Inyang Crescent into a bright, welcoming lobby, and leave the energy of Lagos at the door. Ikad Hotel &amp; Suites puts you steps from the Eko Hotel Roundabout, with the banks, offices, restaurants and nightlife of Victoria Island all around you.
              </p>
              <p>
                Choose from five room categories, from smart studios for solo business trips to our Master suite with its own jacuzzi. Every stay comes with round-the-clock power, fast Wi-Fi and a team that genuinely cares about getting the details right.
              </p>
            </div>
          </div>
          <aside className="rounded-2xl bg-cream p-8 lg:col-span-5">
            <h3 className="text-xl text-navy" style={serif}>At a glance</h3>
            <dl className="mt-6 space-y-5 text-sm">
              <div className="flex gap-4">
                <dt><PinIcon className="h-5 w-5 text-gold-dark" /><span className="sr-only">Address</span></dt>
                <dd className="text-gray-700">
                  {hotel.address.street}, {hotel.address.locality}, {hotel.address.region}
                  <a href={hotel.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block font-semibold text-navy hover:underline">Get directions</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt><BedIcon className="h-5 w-5 text-gold-dark" /><span className="sr-only">Rooms</span></dt>
                <dd className="text-gray-700">5 room types: {VI_ROOMS.map((r) => r.type).join(", ")}</dd>
              </div>
              <div className="flex gap-4">
                <dt><PhoneIcon className="h-5 w-5 text-gold-dark" /><span className="sr-only">Phone</span></dt>
                <dd><a href={`tel:${hotel.phone}`} className="text-gray-700 hover:text-navy">{hotel.phoneDisplay}</a></dd>
              </div>
              <div className="flex gap-4">
                <dt><MailIcon className="h-5 w-5 text-gold-dark" /><span className="sr-only">Email</span></dt>
                <dd><a href={`mailto:${hotel.email}`} className="break-all text-gray-700 hover:text-navy">{hotel.email}</a></dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="scroll-mt-20 bg-cream px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Rooms &amp; Suites</Eyebrow>
              <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
                Five ways to stay in Victoria Island
              </h2>
            </div>
            <p className="max-w-sm text-gray-600">
              All rooms include air-conditioning, a smart TV with local channels and sports, free Wi-Fi and 24/7 power.
            </p>
          </div>

          <RoomCards hotel={hotel} rooms={VI_ROOMS} bookingPath="/booking/details" />
        </div>
      </section>

      {/* Amenities */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Amenities &amp; Services</Eyebrow>
            <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
              Everything taken care of
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image src="/vi/irest.jpeg" alt="Restaurant at Ikad Hotel & Suites, Victoria Island" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-12 lg:py-24">
            <Eyebrow light>Restaurant &amp; Bar</Eyebrow>
            <h2 className="text-3xl leading-tight sm:text-4xl" style={serif}>
              Dine in, unwind, stay a little longer
            </h2>
            <p className="mt-6 leading-relaxed text-white/75">
              Grab a bite before your meetings, host a working lunch or end the evening with a drink at the bar. Our restaurant serves international cuisine alongside local favourites, and room service is available around the clock.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/vi/ibar.jpeg" alt="Bar lounge at Ikad Hotel & Suites" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/vi/IMG_2665.jpg" alt="Reception lounge at Ikad Hotel & Suites" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="scroll-mt-20 px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Location</Eyebrow>
              <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
                Where business and the beach meet
              </h2>
            </div>
            <Link href="/victoria-island/things-to-do" className="inline-flex items-center gap-2 font-semibold text-gold-dark hover:underline">
              Our Victoria Island guide <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="overflow-hidden rounded-2xl bg-gray-100 lg:col-span-3">
              <iframe
                title="Map showing Ikad Hotel & Suites, Victoria Island"
                src="https://maps.google.com/maps?q=Ikad+Hotel+and+Suite,+Victoria+Island,+Lagos&output=embed"
                className="h-[360px] w-full lg:h-full lg:min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="lg:col-span-2">
              <address className="not-italic">
                <p className="text-lg font-semibold text-navy">{hotel.name}</p>
                <p className="mt-1 text-gray-600">{hotel.address.street}, {hotel.address.locality}, {hotel.address.region}, Nigeria</p>
              </address>
              <NearbyList places={VI_PLACES.slice(0, 7)} />
            </div>
          </div>
        </div>
      </section>

      <BookingPlatforms />

      <FaqSection id="vi-faq" title="Questions about your stay" faqs={faqs} />

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy px-5 py-24 text-center text-white sm:px-8">
        <Image src="/vi/IMG_2624.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
        <div className="mx-auto max-w-3xl">
          <Eyebrow light>Book direct &amp; save</Eyebrow>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl" style={serif}>Your Victoria Island stay awaits</h2>
          <p className="mx-auto mt-6 max-w-xl text-white/75">Reserve online in minutes, or speak to our team for the best available rate.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#book" className="rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-white">
              Check availability
            </a>
            <a href={`tel:${hotel.phone}`} className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10">
              Call {hotel.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <StickyBookBar fromPrice={hotel.fromPrice} />

      <WhatsAppChat phoneNumber={hotel.phone} location="Victoria Island" raised />
    </div>
  );
}
