import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ikad Hotel Yaba - Affordable Comfort in Central Lagos",
  description: "Book Ikad Hotel in Yaba for affordable luxury accommodation with easy city access. Perfect for business travelers and families seeking modern amenities and excellent service.",
  keywords: "Yaba hotel, hotel in Yaba, affordable hotel Lagos, business hotel, budget hotel",
  openGraph: {
    title: "Ikad Hotel Yaba - Comfort at Affordable Rates",
    description: "Affordable luxury accommodation in Yaba, Lagos. Perfect location for business and leisure.",
    url: "https://ikadhotels.com/yaba",
    type: "website",
    images: [
      {
        url: "https://ikadhotels.com/yaba/cooli_entrance.jpg",
        width: 1200,
        height: 630,
        alt: "Ikad Hotel Yaba Entrance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikad Hotel Yaba",
    description: "Affordable comfort hotel in central Lagos with modern amenities",
    images: ["https://ikadhotels.com/yaba/cooli_entrance.jpg"],
  },
};

export default function YabaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
