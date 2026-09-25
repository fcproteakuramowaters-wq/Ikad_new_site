import { Metadata } from "next";

// Step-in-a-flow page: keep it out of search results but let crawlers follow links.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function BookingStepLayout({ children }: { children: React.ReactNode }) {
  return children;
}
