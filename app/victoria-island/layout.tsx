import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ikad Hotel & Suites Victoria Island - Luxury 5-Star Hotel in Lagos",
  description: "Experience luxury hospitality at Ikad Hotel & Suites in Victoria Island. Premium rooms, fine dining, spa, and world-class amenities in Lagos's most prestigious location.",
  keywords: "Victoria Island hotel, luxury hotel Lagos, 5-star hotel, business hotel, hotel Victoria Island",
  openGraph: {
    title: "Ikad Hotel & Suites Victoria Island",
    description: "Luxury 5-star accommodation in the heart of Victoria Island. Premium rooms and world-class amenities.",
    url: "https://ikadhotels.com/victoria-island",
    type: "website",
    images: [
      {
        url: "https://ikadhotels.com/vi/ientrance.jpeg",
        width: 1200,
        height: 630,
        alt: "Ikad Hotel Victoria Island Entrance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikad Hotel & Suites Victoria Island",
    description: "Luxury 5-star accommodation in Lagos's most prestigious location",
    images: ["https://ikadhotels.com/vi/ientrance.jpeg"],
  },
};

export default function VictoriaIslandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
