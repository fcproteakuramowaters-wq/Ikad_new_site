import Link from "next/link";
import BookingPlatforms from "@/components/BookingPlatforms";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-screen h-screen flex items-center justify-center text-white text-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 bg-black/70 p-12 rounded-lg max-w-2xl">
          <h1 className="text-6xl font-light mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Welcome to Ikad Hotels
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Comfort, luxury, and excellence in every location
          </p>
          <Link
            href="/booking"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded font-medium transition-colors"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="max-w-6xl mx-auto py-32 px-6">
        <h2 className="text-5xl font-light text-center mb-16 text-navy" style={{ fontFamily: "var(--font-playfair)" }}>
          Our Locations
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Victoria Island Hotel */}
          <article className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-64 overflow-hidden bg-gray-200">
              <img
                src="/vi/irecep.jpeg"
                alt="Ikad Hotel & Suites – Victoria Island"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 text-navy" style={{ fontFamily: "var(--font-playfair)" }}>
                Ikad Hotel & Suites – Victoria Island
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Luxury accommodation in the heart of Victoria Island. Experience premium hospitality with world-class amenities and services.
              </p>
              <Link
                href="/victoria-island"
                className="inline-flex items-center text-gold font-semibold hover:text-gold transition-colors"
              >
                View Hotel →
              </Link>
            </div>
          </article>

          {/* Yaba Hotel */}
          <article className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-64 overflow-hidden bg-gray-200">
              <img
                src="/yaba/entrance.jpg"
                alt="Ikad Hotel – Borno Way Yaba"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 text-navy" style={{ fontFamily: "var(--font-playfair)" }}>
                Ikad Hotel – Borno Way Yaba
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Affordable comfort with easy city access. The perfect choice for business travelers and families seeking convenience.
              </p>
              <Link
                href="/yaba"
                className="inline-flex items-center text-gold font-semibold hover:text-gold transition-colors"
              >
                View Hotel →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Booking Platforms Section */}
      <BookingPlatforms />

      {/* Call to Action */}
      <section className="bg-navy text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-light mb-6 text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Choose your perfect location and book with us today
          </p>
          <Link
            href="/booking"
            className="inline-block hover:bg-opacity-90 text-white px-10 py-3 rounded font-medium transition-all"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
