interface HotelHeroProps {
  title: string;
  location: string;
  image: string;
  description?: string;
}

export default function HotelHero({
  title,
  location,
  image,
  description,
}: HotelHeroProps) {
  return (
    <section
      className="h-[60vh] flex items-center justify-start text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      role="img"
      aria-label={`${title} - ${location}`}
    >
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 ml-10 px-6 py-12">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-4 leading-tight tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h1>
          <p className="text-2xl text-gray-100 mb-6 font-light">{location}</p>
          {description && (
            <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
