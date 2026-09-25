// Room catalogue for both hotels. Prices must match the booking pages'
// roomPricing tables (app/booking/details and app/booking/yaba-details).

export interface Room {
  type: string;
  price: number;
  tagline: string;
  bed: string;
  occupancy: string;
  highlights: string[];
  features: string[];
  images: string[];
}

export const formatNaira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export const VI_ROOMS: Room[] = [
  {
    type: "Studio",
    price: 35000,
    tagline: "Smart and compact, made for the solo business traveller.",
    bed: "Single bed",
    occupancy: "Ideal for 1 guest",
    highlights: ["Work desk", "Smart TV", "En-suite bathroom"],
    features: ["Single bed", "Smart TV with local channels & sports", "Air-conditioning", "En-suite bathroom", "Free Wi-Fi", "Work desk", "Wardrobe"],
    images: ["/vi/IMG_6958.jpg", "/vi/IMG_6959.jpg", "/vi/IMG_6960.jpg", "/vi/IMG_6961.jpg", "/vi/IMG_6962.jpg"],
  },
  {
    type: "Elite",
    price: 45000,
    tagline: "A comfortable double with a minibar and in-room safe.",
    bed: "Double bed",
    occupancy: "Up to 2 adults",
    highlights: ["Minibar", "In-room safe", "Work desk"],
    features: ["Double bed", "Smart TV with local channels & sports", "Air-conditioning", "En-suite bathroom", "Free Wi-Fi", "Work desk", "Minibar", "Safe"],
    images: ["/ikad/Elite.jpeg", "/ikad/Elite1.jpeg"],
  },
  {
    type: "Premium",
    price: 50000,
    tagline: "Queen bed, robes and slippers, and coffee on tap.",
    bed: "Queen bed",
    occupancy: "Up to 2 adults",
    highlights: ["Robes & slippers", "Coffee/tea maker", "Mini fridge"],
    features: ["Queen bed", "Smart TV with local channels & sports", "Air-conditioning", "Luxury bathroom", "Free Wi-Fi", "Work desk", "Mini fridge", "Coffee/tea maker", "Robes & slippers"],
    images: ["/ikad/premium.jpeg", "/ikad/Ikad27.jpeg", "/ikad/Ikad3.jpeg"],
  },
  {
    type: "Luxury",
    price: 65000,
    tagline: "A king room with its own living area and city views.",
    bed: "King bed",
    occupancy: "2 adults + 1 child",
    highlights: ["Living area", "City view", "Premium toiletries"],
    features: ["King bed", "Smart TV with local channels & sports", "Air-conditioning", "Premium bathroom with shower", "Free Wi-Fi", "Work desk", "Living area", "Minibar", "City view", "Premium toiletries"],
    images: ["/vi/IMG_2624.jpg", "/vi/IMG_2639.jpg", "/vi/IMG_2657.jpg", "/vi/IMG_2627.jpg", "/ikad/luxury.jpeg", "/ikad/Ikad31.jpeg"],
  },
  {
    type: "Master",
    price: 70000,
    tagline: "Our finest suite: a jacuzzi bath, living space and concierge service.",
    bed: "King bed",
    occupancy: "2 adults + 1 child",
    highlights: ["Jacuzzi", "Living space", "Concierge service"],
    features: ["King bed", "Smart TV with local channels & sports", "Air-conditioning", "Luxury bathroom with jacuzzi", "Free Wi-Fi", "Work/dining area", "Living space", "Premium minibar", "City view", "Concierge service", "Premium amenities"],
    images: ["/vi/master4.jpg", "/vi/master5.jpg", "/vi/Master room.jpeg", "/vi/MasterB.jpeg"],
  },
];

export const YABA_ROOMS: Room[] = [
  {
    type: "Standard",
    price: 25000,
    tagline: "Everything you need for a restful night on the mainland.",
    bed: "Double bed",
    occupancy: "Up to 2 adults",
    highlights: ["Smart TV", "En-suite bathroom", "Free Wi-Fi"],
    features: ["Double bed", "Smart TV with local channels & sports", "Air-conditioning", "En-suite bathroom", "Free Wi-Fi"],
    images: ["/ikad/standard.jpeg", "/ikad/Ikad37.jpeg", "/ikad/standard1.jpeg"],
  },
  {
    type: "Deluxe",
    price: 30000,
    tagline: "More room to work, with a reading table and coffee maker.",
    bed: "Double bed",
    occupancy: "Up to 2 adults",
    highlights: ["Work desk", "Reading table", "Coffee/tea maker"],
    features: ["Double bed", "Smart TV with local channels & sports", "Air-conditioning", "Bathroom", "Free Wi-Fi", "Work desk", "Leather chair & reading table", "Coffee/tea maker"],
    images: ["/ikad/Deluxe1.jpeg", "/ikad/Deluxe2.jpeg", "/ikad/Deluxe3.jpeg", "/ikad/Deluxe4.jpeg", "/ikad/Ikad32.jpeg"],
  },
];
