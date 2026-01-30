"use client";

import { useState } from "react";
import { format, addDays } from "date-fns";

interface BookingSearchProps {
  location?: "victoria-island" | "yaba";
}

export default function BookingSearch({ location = "victoria-island" }: BookingSearchProps) {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkIn && checkOut) {
      // Handle search logic - redirect to booking details page based on location
      const bookingPath = location === "yaba" ? "/booking/yaba-details" : "/booking/details";
      const searchParams = new URLSearchParams({
        check_in: checkIn,
        check_out: checkOut,
        adults: adults.toString(),
        children: children.toString(),
      });
      window.location.href = `${bookingPath}?${searchParams.toString()}`;
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 -mt-20 mx-4 relative z-20 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Check Availability
      </h3>
      
      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Check-in Date */}
          <div>
            <label htmlFor="check-in" className="block text-sm font-semibold text-gray-700 mb-2">
              Check-in <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="check-in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={today}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Select check-in date"
            />
          </div>

          {/* Check-out Date */}
          <div>
            <label htmlFor="check-out" className="block text-sm font-semibold text-gray-700 mb-2">
              Check-out <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="check-out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || today}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Select check-out date"
            />
          </div>

          {/* Adults */}
          <div>
            <label htmlFor="adults" className="block text-sm font-semibold text-gray-700 mb-2">
              Adults <span className="text-red-600">*</span>
            </label>
            <select
              id="adults"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} Adult{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Children */}
          <div>
            <label htmlFor="children" className="block text-sm font-semibold text-gray-700 mb-2">
              Children
            </label>
            <select
              id="children"
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Child{num !== 1 ? "ren" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={!checkIn || !checkOut}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold px-12 py-3 rounded-lg transition-colors duration-200 uppercase tracking-wide"
          >
            Search Availability
          </button>
        </div>
      </form>
    </div>
  );
}
