export function HotelSchema({ hotelName, hotelType }: { hotelName: string; hotelType: string }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Hotel",
    "name": hotelName,
    "url": hotelType === "victoria-island" 
      ? "https://ikadhotels.com/victoria-island" 
      : "https://ikadhotels.com/yaba",
    "telephone": "+234-916-373-8458",
    "email": "info@ikadhotels.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hotelType === "victoria-island" 
        ? "123 Victoria Island" 
        : "Borno Way, Yaba",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos",
      "postalCode": hotelType === "victoria-island" 
        ? "106104" 
        : "101212",
      "addressCountry": "NG",
    },
    "priceRange": hotelType === "victoria-island" ? "$$$" : "$$",
    "image": hotelType === "victoria-island"
      ? "https://ikadhotels.com/vi/ientrance.jpeg"
      : "https://ikadhotels.com/yaba/cooli_entrance.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "128",
    },
    "amenityFeature": [
      {
        "@type": "Text",
        "name": "Free Wi-Fi",
      },
      {
        "@type": "Text",
        "name": "24-Hour Front Desk",
      },
      {
        "@type": "Text",
        "name": "Restaurant",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ikad Hotels",
    "url": "https://ikadhotels.com",
    "logo": "https://ikadhotels.com/logo.png",
    "description": "Premium hotel accommodations in Lagos, Nigeria with locations in Victoria Island and Yaba",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Reservations",
      "telephone": "+234-916-373-8458",
      "email": "info@ikadhotels.com",
    },
    "sameAs": [
      "https://www.facebook.com/ikadhotels",
      "https://www.instagram.com/ikadhotels",
      "https://www.twitter.com/ikadhotels",
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG",
      "addressLocality": "Lagos",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ikad Hotels",
    "image": "https://ikadhotels.com/vi/ientrance.jpeg",
    "url": "https://ikadhotels.com",
    "telephone": "+234-916-373-8458",
    "email": "info@ikadhotels.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Multiple Locations",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos",
      "addressCountry": "NG",
    },
    "priceRange": "$$ - $$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ path }: { path: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": path.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
