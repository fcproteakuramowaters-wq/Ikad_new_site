import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/booking" },
  title: { absolute: "Book Your Stay | Ikad Hotels - Premium Accommodation in Lagos" },
  description: "Browse and book our luxury hotel locations in Victoria Island and Yaba. Experience exceptional service at Ikad Hotels with competitive rates and world-class amenities.",
  keywords: "hotel booking, Lagos hotels, Victoria Island hotel, Yaba hotel, luxury accommodation, book hotel online",
  openGraph: {
    title: "Book Your Stay | Ikad Hotels",
    description: "Discover and reserve your perfect hotel in Lagos. Premium locations at affordable prices.",
    url: "/booking",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ikad Hotels Victoria Island Reception",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Stay | Ikad Hotels",
    description: "Discover and reserve your perfect hotel in Lagos",
    images: ["/og-image.jpg"],
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
