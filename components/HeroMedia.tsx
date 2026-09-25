"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroMediaProps {
  poster: string;
  posterAlt: string;
  video: string;
}

// The background video is ~50 MB. Serving it to phones or data-saver users wrecks
// LCP and burns mobile data, so we render an optimised poster image first and only
// mount the video on larger screens once the page has loaded.
export default function HeroMedia({ poster, posterAlt, video }: HeroMediaProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!wide || reducedMotion || connection?.saveData) return;

    const start = () => setShowVideo(true);
    if (document.readyState === "complete") {
      start();
      return;
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  return (
    <>
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </>
  );
}
