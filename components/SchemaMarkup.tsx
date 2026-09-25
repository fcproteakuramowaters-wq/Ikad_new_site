import { HOTELS, HOTEL_LIST, SITE_URL, SOCIAL_LINKS, type HotelKey, type HotelInfo } from "@/lib/hotels";

// Note: no aggregateRating here on purpose. Google treats self-authored review
// markup that isn't backed by on-page reviews as spam and can issue a manual action.

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function hotelNode(hotel: HotelInfo) {
  return {
    "@type": "Hotel",
    "@id": `${SITE_URL}${hotel.path}#hotel`,
    name: hotel.name,
    url: `${SITE_URL}${hotel.path}`,
    description: hotel.summary,
    telephone: hotel.phone,
    email: hotel.email,
    image: `${SITE_URL}${hotel.image}`,
    priceRange: hotel.priceRange,
    currenciesAccepted: "NGN",
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address.street,
      addressLocality: hotel.address.locality,
      addressRegion: hotel.address.region,
      postalCode: hotel.address.postalCode,
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotel.geo.latitude,
      longitude: hotel.geo.longitude,
    },
    hasMap: hotel.mapsUrl,
    areaServed: hotel.areaServed.map((name) => ({ "@type": "Place", name })),
    amenityFeature: ["Free Wi-Fi", "24-hour front desk", ...hotel.highlights].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    makesOffer: hotel.rooms.map((room) => ({
      "@type": "Offer",
      name: `${room.type} room`,
      price: room.price.replace(/[^\d]/g, ""),
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
    })),
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

export function HotelSchema({ hotelType }: { hotelName?: string; hotelType: HotelKey }) {
  return <JsonLd data={{ "@context": "https://schema.org", ...hotelNode(HOTELS[hotelType]) }} />;
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Ikad Hotels",
        url: SITE_URL,
        logo: `${SITE_URL}/icon-512.png`,
        email: "info@ikadhotels.com",
        sameAs: SOCIAL_LINKS,
        contactPoint: HOTEL_LIST.map((hotel) => ({
          "@type": "ContactPoint",
          contactType: "reservations",
          telephone: hotel.phone,
          email: hotel.email,
          areaServed: "NG",
          availableLanguage: ["English"],
        })),
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Ikad Hotels",
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-NG",
      }}
    />
  );
}

export function HotelsListSchema() {
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": HOTEL_LIST.map(hotelNode) }} />;
}

export function FaqSchema({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({ path }: { path: { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: path.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
