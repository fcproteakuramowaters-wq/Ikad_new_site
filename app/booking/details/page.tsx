"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

// Room pricing data
const roomPricing: { [key: string]: number } = {
  Studio: 35000,
  Elite: 45000,
  Premium: 50000,
  Luxury: 65000,
  Master: 70000,
};

const roomTypes = Object.keys(roomPricing);

function BookingDetailsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: searchParams.get("check_in") || "",
    checkOut: searchParams.get("check_out") || "",
    roomType: "Studio",
    adults: parseInt(searchParams.get("adults") || "1"),
    children: parseInt(searchParams.get("children") || "0"),
    childAge: parseInt(searchParams.get("child_age") || "0"),
    nights: 1,
    amount: 30000,
    total: 30000,
  });

  const totalSteps = 4;

  // Calculate nights when check-in or check-out changes
  useEffect(() => {
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const nightsDifference = Math.ceil(
        (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const nights = Math.max(1, nightsDifference);
      const roomPrice = roomPricing[formData.roomType] || 30000;
      const total = roomPrice * nights;

      // Schedule state update asynchronously to avoid synchronous setState in effect
      setTimeout(() => {
        setFormData((prev) => ({
          ...prev,
          nights,
          total,
        }));
      }, 0);
    }
  }, [formData.checkIn, formData.checkOut, formData.roomType]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoomTypeChange = (roomType: string) => {
    const newAmount = roomPricing[roomType] || 30000;
    const total = newAmount * formData.nights;
    setFormData((prev) => {
      // enforce children rules for Victoria Island details page
      let children = prev.children;
      // If two adults and room is Studio/Elite/Premium -> no children allowed
      if (prev.adults >= 2 && ["Studio", "Elite", "Premium"].includes(roomType)) {
        children = 0;
      }
      // If room is Luxury or Master, allow at most 1 child
      if (["Luxury", "Master"].includes(roomType)) {
        children = Math.min(children, 1);
      }
      return {
        ...prev,
        roomType,
        amount: newAmount,
        total,
        children,
        // clear childAge if children got reset
        childAge: children ? prev.childAge : 0,
      };
    });
  };

  const handleAdultsChange = (v: number) => {
    const adults = Math.min(2, Math.max(1, v));
    setFormData((prev) => ({
      ...prev,
      adults,
      // if two adults and roomType is Studio/Elite/Premium => children forced to 0
      children: adults >= 2 && ["Studio", "Elite", "Premium"].includes(prev.roomType) ? 0 : prev.children,
      childAge: adults >= 2 && ["Studio", "Elite", "Premium"].includes(prev.roomType) ? 0 : prev.childAge,
    }));
  };

  const handleChildrenChange = (v: number) => {
    // enforce max children based on room
    let maxChild = 1; // by rules only up to 1 child allowed in victoria
    if (["Luxury", "Master"].includes(formData.roomType)) maxChild = 1;
    const children = Math.min(v, maxChild);
    setFormData((prev) => ({ ...prev, children, childAge: children ? prev.childAge : 0 }));
  };

  const handleChildAgeChange = (age: number) => {
    setFormData((prev) => ({ ...prev, childAge: Math.max(0, age) }));
  };


  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === totalSteps) {
      // Validation: if children present, ensure allowed by room and age rules
      if (formData.children > 0) {
        // For Victoria Island only Luxury/Master allow children (we already enforced elsewhere)
        if (!["Luxury", "Master"].includes(formData.roomType)) {
          alert("Selected room does not allow children when 2 adults are selected or by room policy.");
          return;
        }
        // child age must be provided and <= 4 for Victoria Island policy
        if (!formData.childAge || formData.childAge > 4) {
          alert("For Luxury/Master rooms in Victoria Island a child must be age 4 or below.");
          return;
        }
      }
      try {
        // Send booking confirmation emails
        const response = await fetch("/api/send-booking-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            hotelLocation: "victoria-island",
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          alert(
            `Error sending confirmation email: ${errorData.error || "Unknown error"}`
          );
          return;
        }

        // Log booking submitted
        console.log("Booking submitted:", formData);
        // Redirect to confirmation page
        router.push("/booking/confirmation");
      } catch (error) {
        console.error("Error submitting booking:", error);
        alert("Error submitting booking. Please try again.");
      }
    } else {
      handleNextStep();
    }
  };

  const today = new Date().toISOString().split("T")[0];

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Complete Your Booking
          </h1>
          <p className="text-gray-600">
            Victoria Island - Ikad Hotels
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                      step <= currentStep
                        ? "bg-green-500 scale-110"
                        : "bg-gray-300"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`w-12 h-1 transition-all duration-300 ${
                        step < currentStep ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Full width progress bar */}
          <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
            <div
              className="bg-green-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* Step labels */}
          <div className="grid grid-cols-4 gap-2 mt-4 text-center text-sm">
            <div className={currentStep === 1 ? "font-bold text-green-600" : "text-gray-600"}>
              Details
            </div>
            <div className={currentStep === 2 ? "font-bold text-green-600" : "text-gray-600"}>
              Room
            </div>
            <div className={currentStep === 3 ? "font-bold text-green-600" : "text-gray-600"}>
              Summary
            </div>
            <div className={currentStep === 4 ? "font-bold text-green-600" : "text-gray-600"}>
              Confirm
            </div>
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Guest Information
              </h2>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="adults" className="block text-sm font-semibold text-gray-700 mb-2">Adults <span className="text-red-600">*</span></label>
                  <select id="adults" value={formData.adults} onChange={(e) => handleAdultsChange(parseInt(e.target.value))} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    {[1,2].map(a => (
                      <option key={a} value={a}>{a} Adult{a>1?"s":""}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="children" className="block text-sm font-semibold text-gray-700 mb-2">Children</label>
                  <select id="children" value={formData.children} onChange={(e) => handleChildrenChange(parseInt(e.target.value))} className="w-full px-4 py-3 border border-gray-300 rounded-lg" disabled={formData.adults >= 2 && ["Studio","Elite","Premium"].includes(formData.roomType)}>
                    {[0,1].map(c => (
                      <option key={c} value={c}>{c} Child{c!==1?"ren":""}</option>
                    ))}
                  </select>
                </div>
                {/* Child age (only for Luxury/Master when a child is added) */}
                {formData.children === 1 && ["Luxury", "Master"].includes(formData.roomType) && (
                  <div className="mt-3">
                    <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">Child Age (years)</label>
                    <input
                      id="childAge"
                      type="number"
                      min={0}
                      max={4}
                      value={formData.childAge}
                      onChange={(e) => handleChildAgeChange(parseInt(e.target.value || "0"))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="Age (0-4)"
                    />
                    <p className="text-xs text-gray-500 mt-1">For Luxury/Master rooms a child must be 4 years or below.</p>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-semibold text-gray-700 mb-2">
                    Check-in Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    min={today}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="checkOut" className="block text-sm font-semibold text-gray-700 mb-2">
                    Check-out Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    min={formData.checkIn || today}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Room Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Select Your Room
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roomTypes.map((roomType) => (
                  <div
                    key={roomType}
                    onClick={() => handleRoomTypeChange(roomType)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.roomType === roomType
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 hover:border-green-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {roomType}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          ₦{roomPricing[roomType].toLocaleString()} per night
                        </p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          formData.roomType === roomType
                            ? "border-green-500 bg-green-500"
                            : "border-gray-400"
                        }`}
                      >
                        {formData.roomType === roomType && (
                          <div className="text-white text-sm">✓</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Number of Nights:</span>{" "}
                  {formData.nights} night{formData.nights !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Summary */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Booking Summary
              </h2>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-gray-700">Guest Name:</span>
                  <span className="font-semibold text-gray-900">
                    {formData.name}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-gray-700">Email:</span>
                  <span className="font-semibold text-gray-900">
                    {formData.email}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-gray-700">Phone:</span>
                  <span className="font-semibold text-gray-900">
                    {formData.phone}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-gray-700">Check-in:</span>
                  <span className="font-semibold text-gray-900">
                    {new Date(formData.checkIn).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-gray-700">Check-out:</span>
                  <span className="font-semibold text-gray-900">
                    {new Date(formData.checkOut).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-gray-700">Room Type:</span>
                  <span className="font-semibold text-gray-900">
                    {formData.roomType}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-gray-700">Number of Nights:</span>
                  <span className="font-semibold text-gray-900">
                    {formData.nights}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-gray-700">Price per Night:</span>
                  <span className="font-semibold text-gray-900">
                    ₦{formData.amount.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2 text-lg">
                  <span className="font-bold text-gray-900">Total Amount:</span>
                  <span className="font-bold text-green-600 text-xl">
                    ₦{formData.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Confirm Your Booking
              </h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900">
                      Ready to confirm?
                    </h3>
                    <p className="text-green-800 text-sm mt-1">
                      Please review all details above and click &quot;Confirm Booking&quot; to
                      proceed. You will receive a confirmation email with your
                      booking details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  <span className="font-semibold">Note:</span> A payment link will
                  be sent to your email address. Please complete the payment to
                  secure your reservation.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  required
                />
                <label htmlFor="agree" className="text-sm text-gray-700">
                  I agree to the terms and conditions and privacy policy of Ikad
                  Hotels
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-gray-300">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                currentStep === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-500 hover:bg-gray-600 text-white"
              }`}
            >
              Back
            </button>

            <button
              type="submit"
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                currentStep === totalSteps
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {currentStep === totalSteps ? "Confirm Booking" : "Next"}
            </button>
          </div>
        </form>

        {/* Back to hotel link */}
        <div className="text-center">
          <Link
            href="/victoria-island"
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            ← Back to Victoria Island
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BookingDetails() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
      <BookingDetailsContent />
    </Suspense>
  );
}
