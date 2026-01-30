import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1a1a2e",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ikad Hotels - Luxury & Comfort Accommodation in Lagos",
  description: "Discover Ikad Hotels: premium accommodation in Victoria Island and Yaba, Lagos. Experience world-class hospitality with modern amenities and excellent service.",
  keywords: "hotels in Lagos, Victoria Island hotel, Yaba hotel, luxury accommodation, book hotel online, Lagos Nigeria",
  authors: [{ name: "Ikad Hotels" }],
  openGraph: {
    title: "Ikad Hotels - Premium Accommodation in Lagos",
    description: "Experience luxury and comfort at Ikad Hotels with locations in Victoria Island and Yaba",
    url: "https://ikadhotels.com",
    siteName: "Ikad Hotels",
    images: [
      {
        url: "https://ikadhotels.com/vi/ientrance.jpeg",
        width: 1200,
        height: 630,
        alt: "Ikad Hotels",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikad Hotels",
    description: "Premium accommodation in Lagos, Nigeria",
    images: ["https://ikadhotels.com/vi/ientrance.jpeg"],
    creator: "@ikadhotels",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://ikadhotels.com",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          #next-logo, 
          [data-next-mark="true"], 
          [data-nextjs-dev-tools-button="true"],
          [data-next-badge="true"],
          [aria-label="Open Next.js Dev Tools"],
          button[data-nextjs-dev-tools-button],
          div[data-nextjs-dev-tools-menu] { 
            display: none !important; 
            visibility: hidden !important;
            pointer-events: none !important;
            height: 0 !important;
            width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
          }
        `}</style>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ikad Hotels" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} ${geistMono.variable} bg-white text-gray-900 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Remove Next.js dev tools button and badge
                const removeDevTools = () => {
                  document.querySelectorAll('[data-nextjs-dev-tools-button], #next-logo, [data-next-mark="true"], [data-next-badge="true"], [data-nextjs-dev-tools-menu]').forEach(el => el.remove());
                };
                
                const observer = new MutationObserver(removeDevTools);
                observer.observe(document.body, { childList: true, subtree: true });
                
                // Initial cleanup
                setTimeout(removeDevTools, 50);
                setTimeout(removeDevTools, 200);
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
