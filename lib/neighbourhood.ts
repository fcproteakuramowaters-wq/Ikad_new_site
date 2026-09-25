// Places near Ikad Hotel & Suites, Victoria Island.
// Travel times are typical off-peak estimates by car; Lagos traffic varies a lot.

export interface Place {
  name: string;
  area: string;
  time: string;
  category: "Business" | "Beach & leisure" | "Culture" | "Shopping" | "Getting around";
  description: string;
}

export const VI_PLACES: Place[] = [
  {
    name: "Eko Hotel Roundabout & Adetokunbo Ademola Street",
    area: "Victoria Island",
    time: "A short walk",
    category: "Business",
    description:
      "Our doorstep. One of Victoria Island's busiest junctions, lined with banks, corporate offices, restaurants, lounges and event venues, including the Eko Hotels & Suites convention centre.",
  },
  {
    name: "Landmark Beach",
    area: "Oniru, Victoria Island",
    time: "About 10 minutes",
    category: "Beach & leisure",
    description:
      "Lagos' best-known managed beach, with cabanas, beach sports, restaurants and live music at weekends. Ideal for a relaxed afternoon by the Atlantic.",
  },
  {
    name: "Eko Atlantic City",
    area: "Victoria Island",
    time: "About 10 minutes",
    category: "Business",
    description:
      "The new waterfront district built on reclaimed land, home to modern office towers, the Ocean Drive promenade and some of the city's most striking views.",
  },
  {
    name: "Terra Kulture",
    area: "Victoria Island",
    time: "About 10 minutes",
    category: "Culture",
    description:
      "An arts centre with a theatre, gallery, bookshop and Nigerian restaurant: a great evening out and one of the best places to catch a stage play in Lagos.",
  },
  {
    name: "Lekki–Ikoyi Link Bridge",
    area: "Lekki / Ikoyi",
    time: "About 15 minutes",
    category: "Beach & leisure",
    description:
      "The cable-stayed bridge is a favourite early-morning and evening spot for walkers, joggers and photographers, with views across the lagoon.",
  },
  {
    name: "Freedom Park",
    area: "Lagos Island",
    time: "About 20–30 minutes",
    category: "Culture",
    description:
      "A former colonial prison turned into a leafy cultural park with concerts, art exhibitions, food and craft markets in the heart of Lagos Island.",
  },
  {
    name: "Lekki Conservation Centre",
    area: "Lekki",
    time: "About 30–45 minutes",
    category: "Beach & leisure",
    description:
      "A nature reserve famous for one of Africa's longest canopy walkways, plus boardwalks through wetland forest where you may spot monkeys and birds.",
  },
  {
    name: "Nike Art Gallery",
    area: "Lekki",
    time: "About 30–45 minutes",
    category: "Culture",
    description:
      "A multi-storey gallery with thousands of works of Nigerian art, from adire textiles to contemporary painting. A must for art lovers and souvenir hunters.",
  },
  {
    name: "Tarkwa Bay Beach",
    area: "Lagos Harbour",
    time: "Short drive + boat ride",
    category: "Beach & leisure",
    description:
      "A sheltered, calm-water beach reached by boat from jetties in Victoria Island and Ikoyi. A popular day trip for swimming and seafood.",
  },
  {
    name: "Murtala Muhammed International Airport (LOS)",
    area: "Ikeja",
    time: "About 45–90 minutes",
    category: "Getting around",
    description:
      "Lagos' main international airport. Journey times depend heavily on traffic, so allow extra time at rush hour. Our front desk can advise on transfers.",
  },
];

export const VI_TIPS = [
  {
    title: "Getting around",
    text: "Ride-hailing apps such as Uber and Bolt work well across Victoria Island, Ikoyi and Lekki. Avoid the evening rush (roughly 4–8pm) for cross-city trips where you can.",
  },
  {
    title: "Best time to visit",
    text: "The dry season (roughly November to March) brings sunny beach days and Lagos' famous December festive season (\"Detty December\") of concerts and events. Book early for December.",
  },
  {
    title: "Money",
    text: "The Nigerian naira (₦) is used everywhere. Cards and bank transfers are widely accepted in Victoria Island, but carry some cash for markets and small vendors.",
  },
  {
    title: "Staying connected",
    text: "All Ikad rooms include free high-speed Wi-Fi, and local SIM cards are easy to buy with ID if you want mobile data on the go.",
  },
];
