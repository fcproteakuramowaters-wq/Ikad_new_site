import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevToolsCleaner from "@/components/DevToolsCleaner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { OrganizationSchema, WebsiteSchema } from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/hotels";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1a2332",
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
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ikad Hotels | Hotels in Victoria Island & Yaba, Lagos",
    template: "%s | Ikad Hotels",
  },
  description:
    "Book Ikad Hotels in Lagos: stylish suites in Victoria Island near Eko Hotel Roundabout and great-value rooms on Borno Way, Yaba. 24/7 power, free Wi-Fi, from ₦25,000 per night.",
  applicationName: "Ikad Hotels",
  authors: [{ name: "Ikad Hotels" }],
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "Ikad Hotels | Hotels in Victoria Island & Yaba, Lagos",
    description:
      "Stylish suites in Victoria Island and great-value rooms in Yaba. 24/7 power, free Wi-Fi and warm Nigerian hospitality.",
    url: "/",
    siteName: "Ikad Hotels",
    locale: "en_NG",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ikad Hotels – boutique hotels in Victoria Island and Yaba, Lagos" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikad Hotels | Victoria Island & Yaba, Lagos",
    description: "Stylish suites in Victoria Island and great-value rooms in Yaba, Lagos.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  manifest: "/manifest.json",
  appleWebApp: { capable: true, title: "Ikad Hotels", statusBarStyle: "black-translucent" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} ${geistMono.variable} bg-white text-gray-900 antialiased`}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded">
          Skip to content
        </a>
        <OrganizationSchema />
        <WebsiteSchema />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <SpeedInsights />
        <DevToolsCleaner />
      </body>
    </html>
  );
}
