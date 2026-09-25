// Single source of truth for hotel facts used in page copy and structured data.
// Room data lives in lib/rooms.ts.

import { VI_ROOMS, YABA_ROOMS, formatNaira, type Room } from "./rooms";

const summarise = (rooms: Room[]) => rooms.map((r) => ({ type: r.type, price: formatNaira(r.price), bed: r.bed }));

export const SITE_URL = "https://ikadhotels.com";

export type HotelKey = "victoria-island" | "yaba";

export interface HotelInfo {
  key: HotelKey;
  name: string;
  shortName: string;
  path: string;
  tagline: string;
  summary: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    display: string;
  };
  geo: { latitude: number; longitude: number };
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  mapsUrl: string;
  priceRange: string;
  fromPrice: string;
  image: string;
  highlights: string[];
  petsAllowed?: boolean;
  rooms: { type: string; price: string; bed: string }[];
  areaServed: string[];
}

export const HOTELS: Record<HotelKey, HotelInfo> = {
  "victoria-island": {
    key: "victoria-island",
    name: "Ikad Hotel & Suites Victoria Island",
    shortName: "Victoria Island",
    path: "/victoria-island",
    tagline: "Business & leisure by Eko Hotel Roundabout",
    summary:
      "Refined suites on Etim Inyang Crescent, minutes from the Eko Hotel Roundabout, Lagos Island's business district and Lekki. Five room categories, from smart studios to master suites with a jacuzzi.",
    address: {
      street: "204B Etim Inyang Crescent, Eko Hotel Roundabout",
      locality: "Victoria Island",
      region: "Lagos",
      postalCode: "106104",
      display: "204B Etim Inyang Crescent, Victoria Island, Lagos",
    },
    geo: { latitude: 6.4330646, longitude: 3.4361889 },
    phone: "+2349163738458",
    phoneDisplay: "+234 916 373 8458",
    email: "reservations.vi@ikadhotels.com",
    whatsapp: "https://wa.me/2349163738458?text=Hello%20Ikad%20Hotels%20Victoria%20Island",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ikad+Hotel+and+Suite+Victoria+Island+Lagos",
    priceRange: "₦35,000 – ₦70,000",
    fromPrice: "₦35,000",
    image: "/vi/irest.jpeg",
    petsAllowed: true,
    highlights: ["Restaurant & bar", "24/7 power supply", "24-hour room service", "Free high-speed Wi-Fi"],
    rooms: summarise(VI_ROOMS),
    areaServed: ["Victoria Island", "Lagos Island", "Lekki", "Ikoyi", "Etim Inyang"],
  },
  yaba: {
    key: "yaba",
    name: "Ikad Hotel Yaba",
    shortName: "Yaba",
    path: "/yaba",
    tagline: "Smart value in the heart of mainland Lagos",
    summary:
      "Comfortable, well-priced rooms on Borno Way (formerly Coolio Hotel) with free secure parking, a bar & restaurant and easy access to Yaba's tech hub and the rest of mainland Lagos.",
    address: {
      street: "270 Borno Way, Adekunle",
      locality: "Yaba",
      region: "Lagos",
      postalCode: "100001",
      display: "270 Borno Way, Adekunle, Yaba, Lagos",
    },
    geo: { latitude: 6.4946171, longitude: 3.3788883 },
    phone: "+2348147318331",
    phoneDisplay: "+234 814 731 8331",
    email: "reservations.bw@ikadhotels.com",
    whatsapp: "https://wa.me/2348147318331?text=Hello%20Ikad%20Hotels%20Yaba",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=270+Borno+Way+Yaba+Lagos",
    priceRange: "₦25,000 – ₦30,000",
    fromPrice: "₦25,000",
    image: "/yaba/IMG_2666.jpg",
    highlights: ["Free secure parking", "Bar & restaurant", "Conference room", "Laundry service"],
    rooms: summarise(YABA_ROOMS),
    areaServed: ["Yaba", "Ebute Metta", "Surulere", "Akoka", "Lagos Mainland"],
  },
};

export const HOTEL_LIST = [HOTELS["victoria-island"], HOTELS.yaba];

export const SOCIAL_LINKS = [
  "https://www.facebook.com/profile.php?id=61558804720679",
  "https://www.facebook.com/profile.php?id=61559000253887",
  "https://www.instagram.com/ikadhotels",
];
