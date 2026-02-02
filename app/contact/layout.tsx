import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ikad Hotels - Get in Touch | Reservations & Support",
  description: "Contact Ikad Hotels for reservations, inquiries, and support. Reach our team across Victoria Island and Yaba locations in Lagos.",
  keywords: "contact us, hotel reservations, customer support, Ikad Hotels contact",
  openGraph: {
    title: "Contact Ikad Hotels",
    description: "Get in touch with Ikad Hotels for reservations and inquiries",
    url: "https://ikadhotels.com/contact",
    type: "website",
    images: [
      {
        url: "https://ikadhotels.com/vi/IMG_2665.PNG",
        width: 1200,
        height: 630,
        alt: "Ikad Hotels Reception",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ikad Hotels",
    description: "Get in touch with our team for reservations and support",
    images: ["https://ikadhotels.com/vi/IMG_2665.PNG"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
