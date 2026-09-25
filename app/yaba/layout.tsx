import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Ikad Hotel Yaba, Borno Way Lagos | Affordable Hotel with Free Parking" },
  description:
    "Ikad Hotel Yaba (formerly Coolio Hotel), 270 Borno Way: comfortable Standard and Deluxe rooms from ₦25,000/night with free secure parking, restaurant, conference room and free Wi-Fi.",
  keywords: ["Yaba hotel", "hotels in Yaba Lagos", "Borno Way hotel", "Coolio Hotel Yaba", "affordable hotel Lagos mainland", "Ikad Hotel Yaba"],
  alternates: { canonical: "/yaba" },
  openGraph: {
    title: "Ikad Hotel Yaba – Borno Way, Lagos",
    description: "Great-value rooms in Yaba with free parking and free Wi-Fi. From ₦25,000/night.",
    url: "/yaba",
    type: "website",
    images: [{ url: "/og-yaba.jpg", width: 1200, height: 630, alt: "Restaurant at Ikad Hotel Yaba" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikad Hotel Yaba – Borno Way, Lagos",
    description: "Great-value rooms in Yaba with free parking. From ₦25,000/night.",
    images: ["/og-yaba.jpg"],
  },
};

export default function YabaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
