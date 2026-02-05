"use client";

import Link from "next/link";

export default function YabaBookingConfirmation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        {/* Success Card */}
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Booking Confirmed!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Thank you for choosing Ikad Hotels Yaba. Your booking has been
            successfully submitted.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 text-left">
            <h2 className="font-bold text-green-900 mb-3">What happens next?</h2>
            <ul className="space-y-2 text-green-800 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Confirmation email sent to your inbox
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Payment link will be sent shortly
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Complete payment to secure your reservation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Final confirmation will be sent 24 hours before arrival
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 mb-8 text-left rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">Need Help?</h3>
            <p className="text-blue-800 text-sm mb-3">
              If you have any questions or need to modify your booking, please
              contact us:
            </p>
            <div className="space-y-1 text-sm text-blue-900">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+2348147318331" className="text-blue-600 hover:underline">
                  +234 814 731 8331
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:yaba@ikadhotels.com" className="text-blue-600 hover:underline">
                  yaba@ikadhotels.com
                </a>
              </p>
              <p>
                <span className="font-semibold">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/2348147318331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Chat with us
                </a>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/yaba"
              className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Back to Yaba
            </Link>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
