import nodemailer from "nodemailer";
import { getGuestEmailTemplate, getHotelEmailTemplate, BookingData } from "@/lib/emailTemplates";
import { NextRequest, NextResponse } from "next/server";

// Configure your email service here
// Using Gmail, SendGrid, or another SMTP service
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const booking: BookingData = await request.json();

    // Validate booking data
    if (!booking.name || !booking.email || !booking.phone) {
      return NextResponse.json(
        { error: "Missing required booking information" },
        { status: 400 }
      );
    }

    const hotelEmail = booking.hotelLocation === "victoria-island"
      ? process.env.VICTORIA_ISLAND_EMAIL || "victoria@ikadhotel.com"
      : process.env.YABA_EMAIL || "yaba@ikadhotel.com";

    const guestHtmlTemplate = getGuestEmailTemplate(booking);
    const hotelHtmlTemplate = getHotelEmailTemplate(booking);

    // Send email to guest
    const guestEmailPromise = transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: booking.email,
      subject: `Booking Confirmation - Ikad Hotels ${
        booking.hotelLocation === "victoria-island" ? "Victoria Island" : "Yaba"
      }`,
      html: guestHtmlTemplate,
      replyTo: hotelEmail,
    });

    // Send email to hotel
    const hotelEmailPromise = transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: hotelEmail,
      cc: process.env.ADMIN_EMAIL,
      subject: `New Booking Request - ${booking.name} (${
        booking.hotelLocation === "victoria-island" ? "Victoria Island" : "Yaba"
      })`,
      html: hotelHtmlTemplate,
      replyTo: booking.email,
    });

    // Wait for both emails to be sent
    await Promise.all([guestEmailPromise, hotelEmailPromise]);

    return NextResponse.json(
      {
        success: true,
        message: "Booking confirmation emails sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending booking emails:", error);
    return NextResponse.json(
      {
        error: "Failed to send confirmation emails. Please try again or contact support.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
