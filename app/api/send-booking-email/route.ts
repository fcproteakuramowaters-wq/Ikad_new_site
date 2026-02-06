import nodemailer from "nodemailer";
import { getGuestEmailTemplate, getHotelEmailTemplate, BookingData } from "@/lib/emailTemplates";
import { NextRequest, NextResponse } from "next/server";

// Create separate transporters for each hotel location
const createTransporter = (location: string) => {
  // Prefer location-specific host if provided, then global SMTP_HOST, then Zoho default
  const viHost = process.env.VI_SMTP_HOST || process.env.SMTP_HOST || "smtppro.zoho.com";
  const yabaHost = process.env.YABA_SMTP_HOST || process.env.SMTP_HOST || "smtppro.zoho.com";

  if (location === "victoria-island") {
    return nodemailer.createTransport({
      host: viHost,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.VI_SMTP_USER || "reservations.vi@ikadhotels.com",
        pass: process.env.VI_SMTP_PASSWORD || "mU6uNWPnjknm",
      },
    });
  } else {
    return nodemailer.createTransport({
      host: yabaHost,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.YABA_SMTP_USER || "reservations.bw@ikadhotels.com",
        pass: process.env.YABA_SMTP_PASSWORD || "UwwJ60jRUmn7",
      },
    });
  }
};

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
    // Note: We now use location-specific SMTP credentials
    const requiredEnvs = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_FROM",
    ];
    const missingEnvs = requiredEnvs.filter((e) => !process.env[e]);
    
    // Check location-specific credentials
    if (booking.hotelLocation === "victoria-island") {
      if (!process.env.VI_SMTP_USER && !process.env.VI_SMTP_PASSWORD) {
        // Allow fallback to defaults if env vars not set
      }
    } else {
      if (!process.env.YABA_SMTP_USER && !process.env.YABA_SMTP_PASSWORD) {
        // Allow fallback to defaults if env vars not set
      }
    }
    
    if (missingEnvs.length > 0) {
      console.error("Missing required environment variables:", missingEnvs);
      return NextResponse.json(
        { error: `Server misconfiguration: missing env vars: ${missingEnvs.join(", ")}` },
        { status: 500 }
      );
    }

    // Get the appropriate transporter based on hotel location
    const transporter = createTransporter(booking.hotelLocation);

    const hotelEmail = booking.hotelLocation === "victoria-island"
      ? process.env.VICTORIA_ISLAND_EMAIL || "reservations.vi@ikadhotels.com"
      : process.env.YABA_EMAIL || "reservations.bw@ikadhotels.com";

    const smtpUser = booking.hotelLocation === "victoria-island"
      ? process.env.VI_SMTP_USER || "reservations.vi@ikadhotels.com"
      : process.env.YABA_SMTP_USER || "reservations.bw@ikadhotels.com";

    const guestHtmlTemplate = getGuestEmailTemplate(booking);
    const hotelHtmlTemplate = getHotelEmailTemplate(booking);

    // Verify transporter connection early to give clearer errors in logs
    try {
      // Mask the user in logs to avoid leaking full credentials
      const tOpts: any = (transporter as any).options || {};
      const logHost = tOpts.host || process.env.SMTP_HOST || "(unknown)";
      const logUser = tOpts.auth?.user || smtpUser || "(unknown)";
      const maskedUser = typeof logUser === "string" ? logUser.replace(/.(?=.{2})/g, "*") : logUser;
      console.log("[send-booking-email] Verifying SMTP connection", { host: logHost, user: maskedUser });

      await transporter.verify();
      console.log("[send-booking-email] SMTP verified successfully");
    } catch (verifyErr) {
      console.error("[send-booking-email] SMTP verify failed:", verifyErr);
      // Re-throw so the outer catch will return the 500 with details
      throw verifyErr;
    }

    // Send email to guest
    const guestEmailPromise = transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: booking.email,
      subject: `Booking Confirmation - Ikad Hotels ${
        booking.hotelLocation === "victoria-island" ? "Victoria Island" : "Yaba"
      }`,
      html: guestHtmlTemplate,
      replyTo: hotelEmail,
    });

    // Send email to hotel
    const hotelEmailPromise = transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
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
