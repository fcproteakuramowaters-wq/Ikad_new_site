import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-3 shadow-md bg-white sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <Image
          src="/favicon.ico"
          alt="Ikad Hotels Logo"
          width={40}
          height={40}
          className="rounded"
        />
        <span className="text-2xl font-bold text-gray-900 hidden sm:inline">
          Ikad Hotels
        </span>
      </Link>

      <div className="flex items-center space-x-6">
        <Link href="/victoria-island" className="text-gray-700 hover:text-gray-900 transition-colors">
          Victoria Island
        </Link>
        <Link href="/yaba" className="text-gray-700 hover:text-gray-900 transition-colors">
          Yaba
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
          Contact
        </Link>
        <Link
          href="/booking"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors font-medium"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
