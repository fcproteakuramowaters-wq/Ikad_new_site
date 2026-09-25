import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Ikad Hotel & Suites Victoria Island, Lagos | Near Eko Hotel & Lekki" },
  description:
    "Ikad Hotel & Suites, 204B Etim Inyang Crescent, Victoria Island: studio to master suites from ₦35,000/night, restaurant & bar, 24/7 power and free Wi-Fi. Minutes from Eko Hotel Roundabout, Lagos Island and Lekki.",
  keywords: ["Victoria Island hotel", "hotels in Victoria Island Lagos", "hotel near Eko Hotel", "Etim Inyang hotel", "Lekki hotel", "Lagos Island hotel", "Ikad Hotel"],
  alternates: { canonical: "/victoria-island" },
  openGraph: {
    title: "Ikad Hotel & Suites – Victoria Island, Lagos",
    description: "Refined suites near Eko Hotel Roundabout with 24/7 power, restaurant & bar and free Wi-Fi. From ₦35,000/night.",
    url: "/victoria-island",
    type: "website",
    images: [{ url: "/og-victoria-island.jpg", width: 1200, height: 630, alt: "Reception at Ikad Hotel & Suites, Victoria Island" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikad Hotel & Suites – Victoria Island, Lagos",
    description: "Refined suites near Eko Hotel Roundabout. From ₦35,000/night.",
    images: ["/og-victoria-island.jpg"],
  },
};

export default function VictoriaIslandLayout({ children }: { children: React.ReactNode }) {
  return children;
}
