import Link from "next/link";
import Image from "next/image";
import QuickBook from "@/components/QuickBook";
import { Eyebrow, FaqSection, NearbyList, RoomCards, StickyBookBar, serif } from "@/components/HotelSections";
import WhatsAppChat from "@/components/WhatsAppChat";
import { BreadcrumbSchema, FaqSchema, HotelSchema } from "@/components/SchemaMarkup";
import {
  BoltIcon,
  TvIcon,
  BedIcon,
  BriefcaseIcon,
  CarIcon,
  DiningIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  WifiIcon,
  CheckIcon,
} from "@/components/Icons";
import { HOTELS, SITE_URL } from "@/lib/hotels";
import { YABA_ROOMS, formatNaira } from "@/lib/rooms";
import { YABA_PLACES } from "@/lib/neighbourhood";

const hotel = HOTELS.yaba;
const vi = HOTELS["victoria-island"];

const amenities = [
  { icon: CarIcon, title: "Free secure parking", text: "On-site parking for every guest at no extra cost." },
  { icon: BoltIcon, title: "24/7 power supply", text: "Constant electricity, day and night, so work and rest never stop." },
  { icon: TvIcon, title: "Weekend live sports", text: "Every weekend's big matches on the restaurant screens, and on the TV in every room." },
  { icon: WifiIcon, title: "Free high-speed Wi-Fi", text: "Reliable internet throughout the property." },
  { icon: DiningIcon, title: "Restaurant & bar", text: "Hearty local dishes and cold drinks in our dining lounge." },
  { icon: ShieldIcon, title: "24-hour front desk", text: "Friendly staff on hand day and night." },
  { icon: BriefcaseIcon, title: "Conference room", text: "A private space for meetings, trainings and interviews." },
  { icon: CheckIcon, title: "Laundry service", text: "Quick, efficient laundry so you can pack light." },
];

const faqs = [
  {
    question: "Where is Ikad Hotel Yaba?",
    answer: `We are at ${hotel.address.display}, close to the Third Mainland Bridge and a short drive from the Yaba tech hub, Yaba College of Technology and UNILAG.`,
  },
  {
    question: "Is Ikad Hotel Yaba the former Coolio Hotel?",
    answer: "Yes. The hotel at 270 Borno Way was formerly known as Coolio Hotel & Suites and is now Ikad Hotel Yaba, part of Ikad Hotels.",
  },
  {
    question: "How much does a room cost?",
    answer: `Standard rooms are ${formatNaira(YABA_ROOMS[0].price)} per night and Deluxe rooms are ${formatNaira(YABA_ROOMS[1].price)} per night. Book direct for our best available rate.`,
  },
  {
    question: "Does the hotel have 24/7 electricity?",
    answer: "Yes. Ikad Hotel Yaba has a 24/7 power supply, so your room, air-conditioning and Wi-Fi stay on day and night.",
  },
  {
    question: "Can I watch football and other sports at the hotel?",
    answer:
      "Yes. Every weekend we show the big matches in our restaurant and bar, so you can watch with other guests over pepper soup, drinks and more from our menu. Every room's smart TV also carries the matches if you'd rather watch in private.",
  },
  {
    question: "Is parking free?",
    answer: "Yes. Ikad Hotel Yaba has free, secure on-site parking for all guests.",
  },
  {
    question: "Can I host a meeting at the hotel?",
    answer: `Yes, we have a conference room for meetings, trainings and interviews. Contact us on ${hotel.phoneDisplay} or WhatsApp to check availability.`,
  },
  {
    question: "How far is the hotel from the airport and Victoria Island?",
    answer:
      "Murtala Muhammed International Airport is typically 40 to 60 minutes away by car, and Victoria Island about 30 to 45 minutes via the Third Mainland Bridge, depending on traffic.",
  },
];

export default function Yaba() {
  return (
    <div>
      <HotelSchema hotelType="yaba" />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema
        path={[
          { name: "Home", url: SITE_URL },
          { name: "Yaba", url: `${SITE_URL}${hotel.path}` },
        ]}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[68svh] items-end overflow-hidden text-white">
        <Image
          src="/yaba/IMG_2666.jpg"
          alt="Restaurant and bar at Ikad Hotel Yaba"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0e1520] via-[#0e1520]/75 to-[#0e1520]/45" aria-hidden="true" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-20 sm:px-8 md:pb-32">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Yaba</span>
          </nav>
          <Eyebrow light>270 Borno Way · Formerly Coolio Hotel</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl" style={serif}>
            Ikad Hotel <em className="text-gold">Yaba</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Smart, comfortable rooms at honest prices in the heart of mainland Lagos, minutes from the Third Mainland Bridge and Yaba&apos;s tech hub.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2 text-xs font-medium sm:text-sm">
            {["24/7 power", "Free parking", "Free Wi-Fi", "Weekend live sports", `From ${hotel.fromPrice}/night`].map((chip) => (
              <li key={chip} className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur">{chip}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking bar overlapping hero */}
      <div id="book" className="relative z-10 mx-auto -mt-20 max-w-5xl scroll-mt-24 px-5 sm:px-8">
        <QuickBook hotel="yaba" />
        <p className="mt-3 text-center text-sm text-gray-500">
          Prefer to talk? Call <a href={`tel:${hotel.phone}`} className="font-medium text-navy hover:underline">{hotel.phoneDisplay}</a> or{" "}
          <a href={hotel.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-navy hover:underline">chat on WhatsApp</a>.
        </p>
      </div>

      {/* Overview */}
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Welcome</Eyebrow>
            <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
              Comfort without compromise on the mainland
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                Ikad Hotel Yaba is the smart choice for travellers who want a clean, comfortable room, a warm welcome and a fair price. On Borno Way, close to the Third Mainland Bridge, we put the start-ups of Yaba, the campuses of YABATECH and UNILAG, and the rest of Lagos within easy reach.
              </p>
              <p>
                Whether you&apos;re here for business, study, a family visit or a quick stopover, you&apos;ll find 24/7 power, free parking, fast Wi-Fi, a relaxed restaurant and bar, and a team that treats you like family.
              </p>
            </div>
          </div>
          <aside className="rounded-2xl bg-cream p-8 lg:col-span-5">
            <div className="relative -mx-8 -mt-8 mb-6 aspect-[16/10] overflow-hidden rounded-t-2xl">
              <Image src="/yaba/entrance.jpg" alt="Front of Ikad Hotel Yaba at 270 Borno Way" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
            </div>
            <h3 className="text-xl text-navy" style={serif}>At a glance</h3>
            <dl className="mt-6 space-y-5 text-sm">
              <div className="flex gap-4">
                <dt><PinIcon className="h-5 w-5 text-gold-dark" /><span className="sr-only">Address</span></dt>
                <dd className="text-gray-700">
                  {hotel.address.display}
                  <a href={hotel.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block font-semibold text-navy hover:underline">Get directions</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt><BedIcon className="h-5 w-5 text-gold-dark" /><span className="sr-only">Rooms</span></dt>
                <dd className="text-gray-700">{YABA_ROOMS.map((r) => r.type).join(" and ")} rooms</dd>
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
      <section id="rooms" className="scroll-mt-20 bg-cream px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Rooms</Eyebrow>
              <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
                Rest well, spend less
              </h2>
            </div>
            <p className="max-w-sm text-gray-600">
              Every room includes air-conditioning, a smart TV with local channels and sports, free Wi-Fi and 24/7 power.
            </p>
          </div>
          <RoomCards hotel={hotel} rooms={YABA_ROOMS} bookingPath="/booking/yaba-details" />
        </div>
      </section>

      {/* Amenities */}
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Amenities &amp; Services</Eyebrow>
            <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
              The little things that make a stay easy
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-gold-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining & meetings */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[440px]">
            <Image src="/yaba/Cbar_Rest.jpeg" alt="Bar and dining lounge at Ikad Hotel Yaba" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-5 py-12 sm:px-12 lg:py-16">
            <Eyebrow light>Eat, meet &amp; unwind</Eyebrow>
            <h2 className="text-3xl leading-tight sm:text-4xl" style={serif}>
              Match days, pepper soup & good company
            </h2>
            <p className="mt-6 leading-relaxed text-white/75">
              Every weekend the big matches are live on our restaurant screens. Come and watch with fellow guests over a hot bowl of pepper soup, cold drinks and plenty more from the menu. Prefer your own space? Every room&apos;s TV shows the matches too. During the week, book our conference room for a team meeting, training or interview without leaving the hotel.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/yaba/crecep.jpeg" alt="Reception at Ikad Hotel Yaba" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/yaba/IMG_2667.jpg" alt="Guest room at Ikad Hotel Yaba" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="scroll-mt-20 px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Location</Eyebrow>
            <h2 className="text-3xl leading-tight text-navy sm:text-4xl md:text-5xl" style={serif}>
              Connected to all of Lagos
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="overflow-hidden rounded-2xl bg-gray-100 lg:col-span-3">
              <iframe
                title="Map showing Ikad Hotel Yaba, 270 Borno Way"
                src="https://maps.google.com/maps?q=270+Borno+Way,+Yaba,+Lagos&output=embed"
                className="h-[360px] w-full lg:h-full lg:min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="lg:col-span-2">
              <address className="not-italic">
                <p className="text-lg font-semibold text-navy">{hotel.name}</p>
                <p className="mt-1 text-gray-600">{hotel.address.display}, Nigeria</p>
                <p className="mt-1 text-sm text-gray-500">Formerly Coolio Hotel &amp; Suites</p>
              </address>
              <NearbyList places={YABA_PLACES.slice(0, 8)} />
            </div>
          </div>
        </div>
      </section>

      {/* Sister hotel */}
      <section className="px-5 pb-14 sm:px-8 md:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-gray-200 p-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Our sister hotel</p>
            <p className="mt-2 text-2xl text-navy" style={serif}>Staying on the Island? Try {vi.name}</p>
            <p className="mt-1 text-sm text-gray-600">Five room types by the Eko Hotel Roundabout, from {vi.fromPrice} per night.</p>
          </div>
          <Link href={vi.path} className="shrink-0 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white">
            Explore Victoria Island
          </Link>
        </div>
      </section>

      <FaqSection id="yaba-faq" title="Questions about your stay" faqs={faqs} />

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy px-5 py-16 text-center text-white sm:px-8 md:py-20">
        <Image src="/ikad/Deluxe1.jpeg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
        <div className="mx-auto max-w-3xl">
          <Eyebrow light>Book direct &amp; save</Eyebrow>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl" style={serif}>Your stay in Yaba starts here</h2>
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

      <WhatsAppChat phoneNumber={hotel.phone} location="Yaba" raised />
    </div>
  );
}
