"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HotelHero from "@/components/HotelHero";
import BookingSearch from "@/components/BookingSearch";
import BookingPlatforms from "@/components/BookingPlatforms";
import WhatsAppChat from "@/components/WhatsAppChat";
import { HotelSchema, OrganizationSchema } from "@/components/SchemaMarkup";

export default function Yaba() {
  const [expandedRoom, setExpandedRoom] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [heroImageIndex, setHeroImageIndex] = useState<number>(0);
  const [roomImageIndex, setRoomImageIndex] = useState<{ [key: string]: number }>({});
  const [detailImageIndex, setDetailImageIndex] = useState<number>(0);
  const [amenitiesImageIndex, setAmenitiesImageIndex] = useState<number>(0);
  const amenities = [
    {
      name: "Free Parking",
      icon: "🚗",
      description: "Secure parking for all guests",
    },
    {
      name: "Restaurant",
      icon: "🍽️",
      description: "Delicious meals and local cuisine",
    },
    {
      name: "24-Hour Front Desk",
      icon: "🛎️",
      description: "Professional staff available anytime",
    },
    {
      name: "High-Speed Internet",
      icon: "📡",
      description: "Reliable Wi-Fi throughout the property",
    },
    {
      name: "Conference Rooms",
      icon: "📋",
      description: "Perfect for business meetings",
    },
    {
      name: "Laundry Service",
      icon: "🧺",
      description: "Quick and efficient laundry facilities",
    },
  ];

  const rooms = [
    {
      type: "Standard",
      price: "₦20,000",
      features: ["Double Bed", "Smart TV with Local Channels & Sports", "AC", "En-suite Bathroom", "Free Wi-Fi"],
      images: ["/ikad/standard.jpeg", "/ikad/Ikad37.jpeg", "/ikad/standard1.jpeg"],
    },
    {
      type: "Deluxe",
      price: "₦25,000",
      features: ["Double Bed", "Smart TV with Local Channels & Sports", "AC", "Bathroom", "Free Wi-Fi", "Work Desk", "Leather Chair & Reading Table", "Coffee/Tea Maker"],
      images: ["/ikad/Deluxe1.jpeg", "/ikad/Deluxe2.jpeg", "/ikad/Deluxe3.jpeg", "/ikad/Deluxe4.jpeg", "/ikad/Ikad32.jpeg"],
    },
  ];

  // Hero images for carousel
  const heroImages = [
    "/yaba/cooli_entrance.jpg",
    "/yaba/crecep.jpeg",
    "/yaba/Cbar_Rest.jpeg",
  ];

  // Amenities carousel images
  const amenitiesImages = [
    "/yaba/Cbar_Rest.jpeg",
    "/yaba/crecep.jpeg",
    "/yaba/cooli_entrance.jpg",
    "/yaba/entrance.jpg",
  ];

  // Auto-play hero carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-play room carousels every 3 seconds with 1 second delay between each room
  useEffect(() => {
    const intervals = rooms.map((room, index) => {
      if (room.images.length > 1) {
        return setTimeout(() => {
          const interval = setInterval(() => {
            setRoomImageIndex((prev) => ({
              ...prev,
              [room.type]: ((prev[room.type] || 0) + 1) % room.images.length,
            }));
          }, 3000);
          return interval;
        }, index * 1000);
      }
      return null;
    });
    return () => {
      intervals.forEach((interval) => {
        if (interval) clearTimeout(interval);
      });
    };
  }, [rooms.length]);

  // Auto-play amenities carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAmenitiesImageIndex((prev) => (prev + 1) % amenitiesImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [amenitiesImages.length]);

  // Room image carousel navigation
  const nextRoomImage = (roomType: string, totalImages: number) => {
    setRoomImageIndex((prev) => ({
      ...prev,
      [roomType]: ((prev[roomType] || 0) + 1) % totalImages,
    }));
  };

  const prevRoomImage = (roomType: string, totalImages: number) => {
    setRoomImageIndex((prev) => ({
      ...prev,
      [roomType]: ((prev[roomType] || 0) - 1 + totalImages) % totalImages,
    }));
  };
  return (
    <main>
      <HotelSchema hotelName="Ikad Hotel Yaba" hotelType="yaba" />
      <OrganizationSchema />
      <HotelHero
        title="Ikad Hotel"
        location="Borno Way, Yaba"
        image="/yaba/cooli_entrance.jpg"
        description="Comfort, affordability, and convenience in the heart of Yaba"
      />

      {/* Booking Search Section */}
      <BookingSearch location="yaba" />

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-40 px-6">
        <h2 className="text-5xl font-light mb-8 text-navy" style={{ fontFamily: "var(--font-playfair)" }}>About the Hotel</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Ikad Hotel Yaba is your smart choice for comfort without compromise. Strategically located on Borno Way in the vibrant heart of Yaba, we deliver exceptional value and authentic hospitality to savvy travelers who demand quality at smart prices. Our commitment is simple: provide a welcoming sanctuary where you can rest easy, work productively, and experience genuine Nigerian hospitality.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Perfect for business professionals, families, and leisure travelers, Ikad Hotel Yaba combines affordability with thoughtful amenities. From our friendly staff who treat you like family to our well-appointed rooms equipped with modern conveniences, every stay is designed to exceed your expectations.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Surrounded by bustling markets, excellent dining options, and seamless access to Lagos&apos;s key business districts, Ikad Hotel Yaba is your gateway to experiencing authentic Lagos while enjoying reliable comfort and unbeatable value.
        </p>
      </section>

      {/* Room Types Section - Marriott Style */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest gold uppercase mb-4">OUR ROOMS</p>
            <h2 className="text-5xl font-light text-navy mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Comfortable & Affordable Rooms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience quality accommodation designed for modern travelers seeking comfort and value in central Lagos
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => {
                  setSelectedRoom(room.type);
                  setDetailImageIndex(0);
                }}
              >
                {/* Room Image with Carousel */}
                <div className="relative h-80 overflow-hidden bg-gray-200">
                  <img
                    src={room.images[(roomImageIndex[room.type] || 0)]}
                    alt={room.type}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-6 right-6 text-white px-4 py-2 rounded" style={{ backgroundColor: "var(--gold)" }}>
                    <p className="text-sm font-semibold">{room.price}</p>
                    <p className="text-xs">per night</p>
                  </div>

                  {/* Image Navigation Buttons */}
                  {room.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevRoomImage(room.type, room.images.length);
                        }}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-white p-2 rounded-full transition-all"
                        aria-label="Previous room image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextRoomImage(room.type, room.images.length);
                        }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-white p-2 rounded-full transition-all"
                        aria-label="Next room image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                        {room.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setRoomImageIndex((prev) => ({
                                ...prev,
                                [room.type]: imgIndex,
                              }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              imgIndex === (roomImageIndex[room.type] || 0) ? "bg-white" : "bg-white/50"
                            }`}
                            aria-label={`Go to room image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Room Info */}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-semibold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>{room.type}</h3>
                  
                  {/* Features - Show only first 4 */}
                  <div className="space-y-2 mb-6">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--gold)" }}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Details */}
                  {room.features.length > 4 && (
                    <button
                      onClick={() => setExpandedRoom(expandedRoom === room.type ? null : room.type)}
                      className="text-blue-600 text-sm font-semibold hover:text-blue-700 mb-4 underline"
                    >
                      {expandedRoom === room.type ? "Hide Details" : "View Details"}
                    </button>
                  )}

                  {/* Expanded Features */}
                  {expandedRoom === room.type && room.features.length > 4 && (
                    <div className="space-y-2 mb-6 p-4 bg-blue-50 rounded border border-blue-200">
                      <p className="text-xs font-semibold text-blue-700 uppercase mb-3">Additional Features</p>
                      {room.features.slice(4).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <svg className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href="/booking/yaba-details"
                    className="block w-full text-white py-3 rounded font-semibold text-center transition-colors uppercase text-sm hover:opacity-90" style={{ backgroundColor: "var(--gold)" }}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section - Professional Style */}
      <section className="py-40 px-6 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Experience Excellence</p>
            <h2 className="text-5xl font-light mb-4 text-navy" style={{ fontFamily: "var(--font-playfair)" }}>
              Hotel Amenities & Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">Quality facilities for comfort and convenience</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Amenities List - Left Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Hotel Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-xl font-bold flex-shrink-0 pt-0.5" style={{ color: "var(--gold)" }}>✓</span>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{amenity.name}</p>
                        <p className="text-xs text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-300 pt-8">
                <h3 className="text-xl font-semibold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Room Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold flex-shrink-0 pt-0.5" style={{ color: "var(--gold)" }}>✓</span>
                    <p className="text-sm text-gray-700">Air Conditioning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold flex-shrink-0 pt-0.5" style={{ color: "var(--gold)" }}>✓</span>
                    <p className="text-sm text-gray-700">Comfortable Beds</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold flex-shrink-0 pt-0.5" style={{ color: "var(--gold)" }}>✓</span>
                    <p className="text-sm text-gray-700">Work Area</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold flex-shrink-0 pt-0.5" style={{ color: "var(--gold)" }}>✓</span>
                    <p className="text-sm text-gray-700">Smart TV</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold flex-shrink-0 pt-0.5" style={{ color: "var(--gold)" }}>✓</span>
                    <p className="text-sm text-gray-700">Private Bathroom</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold flex-shrink-0 pt-0.5" style={{ color: "var(--gold)" }}>✓</span>
                    <p className="text-sm text-gray-700">Free Wi-Fi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Images Carousel - Right Side */}
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg h-96 bg-gray-200">
                <img 
                  src={amenitiesImages[amenitiesImageIndex]} 
                  alt="Hotel Amenities" 
                  className="w-full h-full object-cover transition-opacity duration-700"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={() => setAmenitiesImageIndex((prev) => (prev - 1 + amenitiesImages.length) % amenitiesImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setAmenitiesImageIndex((prev) => (prev + 1) % amenitiesImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {amenitiesImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setAmenitiesImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === amenitiesImageIndex ? "bg-white w-8" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Access Section */}
      <section className="py-40 px-6" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-navy" style={{ fontFamily: "var(--font-playfair)" }}>Location & Accessibility</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-navy">Why Choose Yaba?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold mr-3" style={{ color: "var(--gold)" }}>•</span>
                  <span className="text-gray-700">Walking distance to Yaba Tech and shopping centers</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3" style={{ color: "var(--gold)" }}>•</span>
                  <span className="text-gray-700">Easy access to major roads and transportation hubs</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3" style={{ color: "var(--gold)" }}>•</span>
                  <span className="text-gray-700">Vibrant neighborhood with restaurants and shops</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3" style={{ color: "var(--gold)" }}>•</span>
                  <span className="text-gray-700">Budget-friendly without compromising quality</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-4 text-navy" style={{ fontFamily: "var(--font-playfair)" }}>Contact Information</h4>
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong><br />
                270 Borno Way, Adekunle, Lagos 100001, Lagos
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Phone:</strong><br />
                <a href="tel:+2348147318331" className="hover:opacity-75" style={{ color: "var(--gold)" }}>
                  +234 814 731 8331
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong><br />
                <a href="mailto:reservations.bw@ikadhotels.com" className="hover:opacity-75" style={{ color: "var(--gold)" }}>
                  reservations.bw@ikadhotels.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-40 px-6" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest gold uppercase mb-4">OUR LOCATION</p>
            <h2 className="text-5xl font-light text-navy mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Find Us in Yaba
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Conveniently located in the vibrant heart of Yaba, central Lagos
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=COOLIO+HOTEL+and+SUITES,+Borno+Way,+Yaba,+Lagos&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Address</h3>
              <p className="text-lg text-gray-700 mb-4">
                270 Borno Way, Adekunle, Lagos 100001, Lagos<br />
                <span className="text-sm text-gray-600">(Formerly Coolio Hotel)</span>
              </p>
              <a
                href="https://www.google.com/maps/place/COOLIO+HOTEL+%26+SUITES/@6.4946465,3.3786793,20.76z/data=!4m9!3m8!1s0x103b8d719658189b:0x9e6cc660582ce82e!5m2!4m1!1i2!8m2!3d6.4946171!4d3.3788883!16s%2Fg%2F11qsqw489n?hl=en-GB&authuser=0&entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold" style={{ color: "var(--gold)" }}
              >
                View on Google Maps →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Contact Information</h3>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Address:</span><br />
                  270 Borno Way, Adekunle, Lagos 100001, Lagos
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Phone:</span><br />
                  <a href="tel:08147318331" className="hover:opacity-75" style={{ color: "var(--gold)" }}>+234 814 731 8331</a>
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Email:</span><br />
                  <a href="mailto:reservations.bw@ikadhotels.com" className="hover:opacity-75" style={{ color: "var(--gold)" }}>reservations.bw@ikadhotels.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Premium Design */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest gold uppercase mb-4">Ready to Book?</p>
          <h2 className="text-5xl font-light text-navy mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Affordable Comfort Awaits
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Reserve your stay at Ikad Hotel Yaba and enjoy quality accommodation with excellent value
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/booking"
              className="inline-block text-white px-12 py-4 rounded font-semibold transition-colors uppercase text-sm tracking-wide hover:opacity-90" style={{ backgroundColor: "var(--gold)" }}
            >
              Book Your Stay
            </Link>
            <Link
              href="/contact"
              className="inline-block text-white px-12 py-4 rounded font-semibold transition-colors uppercase text-sm tracking-wide hover:opacity-90" style={{ backgroundColor: "var(--navy)" }}
            >
              Get More Information
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Platforms Section */}
      <BookingPlatforms />

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Left Side - Image Carousel */}
                <div>
                  {rooms.find(r => r.type === selectedRoom) && (
                    <>
                      {/* Main Image */}
                      <div className="relative h-96 rounded-lg overflow-hidden bg-gray-200 mb-4">
                        <img
                          src={rooms.find(r => r.type === selectedRoom)?.images[detailImageIndex]}
                          alt={selectedRoom}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Navigation Arrows */}
                        {rooms.find(r => r.type === selectedRoom)!.images.length > 1 && (
                          <>
                            <button
                              onClick={() => setDetailImageIndex((prev) => (prev - 1 + rooms.find(r => r.type === selectedRoom)!.images.length) % rooms.find(r => r.type === selectedRoom)!.images.length)}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={() => setDetailImageIndex((prev) => (prev + 1) % rooms.find(r => r.type === selectedRoom)!.images.length)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnail Gallery */}
                      <div className="flex gap-2 overflow-x-auto">
                        {rooms.find(r => r.type === selectedRoom)?.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setDetailImageIndex(idx)}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                              idx === detailImageIndex ? "border-gold" : "border-gray-200"
                            }`}
                            style={{ borderColor: idx === detailImageIndex ? "var(--gold)" : undefined }}
                          >
                            <img src={img} alt={`${selectedRoom} ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Right Side - Room Details */}
                <div>
                  {rooms.find(r => r.type === selectedRoom) && (
                    <>
                      <h1 className="text-4xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                        {selectedRoom} Room
                      </h1>

                      {/* Spec Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 border border-gray-300 rounded text-sm">🛏️ 1 room</span>
                        <span className="px-3 py-1 border border-gray-300 rounded text-sm">📐 Spacious</span>
                        <span className="px-3 py-1 border border-gray-300 rounded text-sm">🌟 Quality</span>
                      </div>

                      {/* Price */}
                      <div className="mb-6">
                        <p className="text-3xl font-bold" style={{ color: "var(--gold)" }}>
                          {rooms.find(r => r.type === selectedRoom)?.price}
                        </p>
                        <p className="text-gray-600">per night</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-8 leading-relaxed">
                        Experience comfort and value in our {selectedRoom} room, thoughtfully designed for modern travelers. Enjoy quality amenities and a welcoming atmosphere at Ikad Hotel Yaba.
                      </p>

                      {/* Room Features - Two Columns */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-navy mb-4">Room Amenities</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {rooms.find(r => r.type === selectedRoom)?.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-lg" style={{ color: "var(--gold)" }}>✓</span>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href="/booking"
                        className="block w-full text-white py-4 rounded font-semibold text-center transition-colors uppercase text-sm hover:opacity-90"
                        style={{ backgroundColor: "var(--gold)" }}
                      >
                        Book This Room
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <WhatsAppChat phoneNumber="+234 814 731 8331" location="Yaba" />
    </main>
  );
}
