"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";

interface RoomGalleryProps {
  images: string[];
  alt: string;
  sizes: string;
  className?: string;
}

// Swipeable, scroll-snap gallery: native touch scrolling on phones, arrow
// buttons on desktop, no autoplay (autoplaying carousels hurt usability & CLS).
export default function RoomGallery({ images, alt, sizes, className = "aspect-[4/3]" }: RoomGalleryProps) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className={`group/gallery relative overflow-hidden bg-gray-100 ${className}`}>
      <div
        ref={track}
        onScroll={(e) => {
          const el = e.currentTarget;
          setIndex(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="flex h-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label={alt}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0 snap-center" aria-roledescription="slide" aria-label={`${i + 1} of ${images.length}`}>
            <Image src={src} alt={`${alt}, photo ${i + 1}`} fill sizes={sizes} className="object-cover" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow opacity-0 transition-opacity group-hover/gallery:opacity-100 focus-visible:opacity-100 disabled:invisible md:flex"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={index === images.length - 1}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow opacity-0 transition-opacity group-hover/gallery:opacity-100 focus-visible:opacity-100 disabled:invisible md:flex"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
            {index + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}
