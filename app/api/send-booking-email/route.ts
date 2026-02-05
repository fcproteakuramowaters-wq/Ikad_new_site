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

    // Validate booking data (require all fields used in the templates)
    const requiredFields: Array<keyof BookingData> = [
      "name",
      "email",
      "phone",
      "checkIn",
      "checkOut",
      "roomType",
      "nights",
      "amount",
      "total",
      "hotelLocation",
    ];

    const missing = requiredFields.filter((f) => booking[f] === undefined || booking[f] === null || booking[f] === "");
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required booking fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Validate environment variables required for SMTP
    const requiredEnvs = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_USER",
      "SMTP_PASSWORD",
      "SMTP_FROM",
    ];
    const missingEnvs = requiredEnvs.filter((e) => !process.env[e]);
    if (missingEnvs.length > 0) {
      console.error("Missing required environment variables:", missingEnvs);
      return NextResponse.json(
        { error: `Server misconfiguration: missing env vars: ${missingEnvs.join(", ")}` },
        { status: 500 }
      );
    }

    const hotelEmail = booking.hotelLocation === "victoria-island"
      ? process.env.VICTORIA_ISLAND_EMAIL || "victoria@ikadhotels.com"
      : process.env.YABA_EMAIL || "yaba@ikadhotels.com";

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
