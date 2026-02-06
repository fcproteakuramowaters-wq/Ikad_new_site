export const metadata = {
  title: "Ikad Hotel & Suites — Victoria Island, Lagos | Hotels in Lagos, Lekki, Lagos Island",
  description:
    "Ikad Hotel & Suites Victoria Island — Luxury hotel in Lagos close to Lekki, Etim Inyang and Lagos Island. Book rooms, enjoy premium amenities and exceptional service.",
  keywords: [
    "Lagos",
    "Victoria Island",
    "Lagos Island",
    "Etim Inyang",
    "Lekki",
    "Eko hotels",
    "Ikad Hotel",
    "Victoria Island hotel",
    "hotels in Lagos",
  ].join(", "),
  openGraph: {
    title: "Ikad Hotel & Suites — Victoria Island, Lagos",
    description:
      "Luxury hotel in Victoria Island, Lagos with premium rooms, dining and proximity to Lekki and Lagos Island.",
    url: "https://ikadhotels.com/victoria-island",
    images: ["https://ikadhotels.com/vi/ientrance.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikad Hotel & Suites — Victoria Island, Lagos",
    description:
      "Luxury hotel in Victoria Island, Lagos close to Lekki, Etim Inyang and the financial district.",
  },
};

export default function Head() {
  return (
    <>
      <link rel="canonical" href="https://ikadhotels.com/victoria-island" />
      <meta name="robots" content="index, follow" />
    </>
  );
}
