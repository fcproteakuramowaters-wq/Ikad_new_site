"use client";

import Link from "next/link";
import HotelHero from "@/components/HotelHero";

export default function Booking() {
  const hotels = [
    {
      name: "Ikad Hotel & Suites – Victoria Island",
      location: "Victoria Island, Lagos",
      description:
        "Luxury accommodation in the heart of Victoria Island. Experience premium hospitality with world-class amenities and services.",
      image: "/ikad/irecep.jpeg",
      link: "/victoria-island",
      features: [
        "5-star luxury amenities",
        "Multiple room categories",
        "Fine dining restaurant",
        "24/7 concierge service",
      ],
    },
    {
      name: "Ikad Hotel – Borno Way Yaba",
      location: "Borno Way, Yaba, Lagos",
      description:
        "Affordable comfort with easy city access. The perfect choice for business travelers and families seeking convenience.",
      image: "/yaba/entrance.jpg",
      link: "/yaba",
      features: [
        "Budget-friendly rates",
        "Central location",
        "Modern amenities",
        "Business-friendly facilities",
      ],
    },
  ];

  return (
    <main>
      <HotelHero
        title="Select Your Hotel"
        location="Choose Your Perfect Stay"
        image="/ikad/Ikad11.jpeg"
        description="Browse our premium hotel locations and find the perfect accommodation for your stay"
      />

      {/* Hotels Selection Section */}
      <section className="max-w-6xl mx-auto py-32 px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest gold uppercase mb-4">
            Choose Your Location
          </p>
          <h1
            className="text-5xl font-light text-navy mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Hotels
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select from our carefully curated hotel locations, each offering unique
            experiences and exceptional service tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hotel Image */}
              <div className="relative h-80 overflow-hidden bg-gray-200">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Location Badge */}
                <div
                  className="absolute top-6 right-6 text-white px-4 py-2 rounded"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <p className="text-sm font-semibold">{hotel.location}</p>
                </div>
              </div>

              {/* Hotel Info */}
              <div className="p-8 bg-white">
                <h3
                  className="text-2xl font-semibold mb-4 text-navy"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {hotel.name}
                </h3>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {hotel.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {hotel.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: "var(--gold)" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={hotel.link}
                  className="block w-full text-white py-3 rounded font-semibold text-center transition-colors uppercase text-sm hover:opacity-90"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  View Hotel & Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-light text-navy mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Why Choose Ikad Hotels?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experience world-class hospitality with exceptional attention to detail
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Best Value
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Competitive prices with unmatched value for your investment
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                Perfect Locations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strategically located in Lagos&apos;s most desirable areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-light mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Make Your Choice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Click on either hotel above to view detailed information and complete your booking
          </p>
        </div>
      </section>
    </main>
  );
}
