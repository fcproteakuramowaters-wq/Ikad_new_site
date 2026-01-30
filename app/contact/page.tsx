"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-lg text-gray-700">
            We'd love to hear from you. Get in touch with our team for any inquiries or bookings.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>

            {/* Victoria Island Contact */}
            <article className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                🏨 Victoria Island
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Address:</strong><br />
                204B, Etim Inyang Crescent<br />
                Eko Hotel Roundabout<br />
                Victoria Island, Lagos, Nigeria
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Phone:</strong><br />
                <a
                  href="tel:09163738458"
                  className="text-blue-600 hover:underline font-medium"
                >
                  <i className="fa-solid fa-phone"></i> +234 916 373 8458
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong><br />
                <a
                  href="mailto:victoria@ikadhotel.com"
                  className="text-blue-600 hover:underline font-medium"
                >
                  <i className="fa-solid fa-at"></i> victoria@ikadhotel.com
                </a>
              </p>
            </article>

            {/* Yaba Contact */}
            <article className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                🏨 Yaba
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Address:</strong><br />
                270 Borno Way, Adekunle, Lagos 100001, Lagos<br />
                <span className="text-sm text-gray-600">(Formerly Coolio Hotel)</span>
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Phone:</strong><br />
                <a
                  href="tel:08147318331"
                  className="text-blue-600 hover:underline font-medium"
                >
                  <i className="fa-solid fa-phone"></i> +234 814 731 8331
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong><br />
                <a
                  href="mailto:yaba@ikadhotel.com"
                  className="text-blue-600 hover:underline font-medium"
                >
                  <i className="fa-solid fa-at"></i> yaba@ikadhotel.com
                </a>
              </p>
            </article>

            {/* General Inquiries */}
            <article className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                📞 General Inquiries
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Phone:</strong><br />
                <a
                  href="tel:09163738458"
                  className="text-blue-600 hover:underline font-medium"
                >
                  <i className="fa-solid fa-phone"></i> +234 916 373 8458
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong><br />
                <a
                  href="mailto:info@ikadhotel.com"
                  className="text-blue-600 hover:underline font-medium"
                >
                  <i className="fa-solid fa-at"></i> info@ikadhotel.com
                </a>
              </p>
            </article>

            {/* Business Hours */}
            <article className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                🕐 Business Hours
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM
                </li>
                <li>
                  <strong>Saturday:</strong> 9:00 AM - 6:00 PM
                </li>
                <li>
                  <strong>Sunday:</strong> 10:00 AM - 5:00 PM
                </li>
                <li className="text-sm text-gray-600 mt-3">
                  24/7 Front Desk available for emergencies
                </li>
              </ul>
            </article>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>

            {submitMessage && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitMessage.includes("Thank you")
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 (0) 123 456 7890"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="event">Event Booking</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                  rows={6}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-gray-600">
                * Required fields. We'll respond to your message within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-bold text-gray-900 hover:text-blue-600">
                What is your cancellation policy?
              </summary>
              <p className="text-gray-700 mt-3">
                Cancellations made 48 hours before check-in are eligible for a full refund. Cancellations within 48 hours may incur a charge.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-bold text-gray-900 hover:text-blue-600">
                Do you offer group discounts?
              </summary>
              <p className="text-gray-700 mt-3">
                Yes, we offer special rates for group bookings of 10 or more rooms. Please contact us directly for a customized quote.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-bold text-gray-900 hover:text-blue-600">
                What payment methods do you accept?
              </summary>
              <p className="text-gray-700 mt-3">
                We accept credit cards, debit cards, bank transfers, and online payment platforms. All transactions are secure and encrypted.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-bold text-gray-900 hover:text-blue-600">
                Can I modify my booking?
              </summary>
              <p className="text-gray-700 mt-3">
                Yes, you can modify your booking up to 48 hours before check-in. Please contact our front desk for changes to dates or room types.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
