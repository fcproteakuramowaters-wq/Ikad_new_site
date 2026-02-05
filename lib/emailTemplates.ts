export interface BookingData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  nights: number;
  amount: number;
  total: number;
  hotelLocation: "victoria-island" | "yaba";
}

// Guest Confirmation Email Template
export function getGuestEmailTemplate(booking: BookingData): string {
  const hotelName = booking.hotelLocation === "victoria-island" 
    ? "Ikad Hotels - Victoria Island" 
    : "Ikad Hotels - Yaba";
  
  const hotelEmail = booking.hotelLocation === "victoria-island"
    ? "victoria@ikadhotels.com"
    : "yaba@ikadhotels.com";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1a1a2e; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .booking-details { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #4CAF50; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #555; }
        .detail-value { text-align: right; }
        .total-row { background-color: #f0f0f0; padding: 10px; font-size: 18px; font-weight: bold; color: #4CAF50; margin-top: 10px; }
        .action-box { background-color: #e8f5e9; border: 1px solid #4CAF50; padding: 15px; margin: 15px 0; border-radius: 5px; }
        .action-box h3 { color: #2e7d32; margin-top: 0; }
        .footer { background-color: #f0f0f0; padding: 20px; text-align: center; border-top: 1px solid #ddd; font-size: 12px; }
        .button { display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
        .contact-info { background-color: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 15px 0; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Confirmation</h1>
          <p>${hotelName}</p>
        </div>

        <div class="content">
          <p>Dear <strong>${booking.name}</strong>,</p>

          <p>Thank you for choosing <strong>${hotelName}</strong> for your upcoming stay! We are delighted to confirm that we have received your booking request.</p>

          <h2>Your Booking Details</h2>
          <div class="booking-details">
            <div class="detail-row">
              <span class="detail-label">Guest Name:</span>
              <span class="detail-value">${booking.name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">${booking.email}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">${booking.phone}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Check-in Date:</span>
              <span class="detail-value">${new Date(booking.checkIn).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Check-out Date:</span>
              <span class="detail-value">${new Date(booking.checkOut).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Room Type:</span>
              <span class="detail-value">${booking.roomType}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Number of Nights:</span>
              <span class="detail-value">${booking.nights}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Price per Night:</span>
              <span class="detail-value">₦${booking.amount.toLocaleString('en-US')}</span>
            </div>
            <div class="total-row">
              Total Amount: ₦${booking.total.toLocaleString('en-US')}
            </div>
          </div>

          <div class="action-box">
            <h3>⏳ What Happens Next?</h3>
            <p>Your booking is currently pending confirmation from our hotel. We will:</p>
            <ol>
              <li>Verify room availability for your dates</li>
              <li>Send you a confirmation email with payment details</li>
              <li>Provide you with a secure payment link</li>
              <li>Complete your reservation once payment is received</li>
            </ol>
            <p><strong>Expected Response Time:</strong> We typically respond within 24 hours. You will receive an email with payment instructions and confirmation.</p>
          </div>

          <div class="contact-info">
            <h3>Need Immediate Assistance?</h3>
            <p>If you have any questions about your booking, please don't hesitate to contact us:</p>
            <p>
              <strong>Email:</strong> ${hotelEmail}<br>
              <strong>Phone:</strong> +234-916-373-8458<br>
              <strong>WhatsApp:</strong> <a href="https://wa.me/2349163738458">Chat with us</a>
            </p>
          </div>

          <h2>Hotel Policy</h2>
          <div class="booking-details">
            <h3 style="color: #1a1a2e; margin-top: 0;">Cancellation Policy</h3>
            <ul>
              <li><strong>Free Cancellation:</strong> Up to 48 hours before check-in date</li>
              <li><strong>50% Refund:</strong> 24-48 hours before check-in date</li>
              <li><strong>Non-Refundable:</strong> Less than 24 hours before check-in date</li>
            </ul>

            <h3 style="color: #1a1a2e;">Check-in & Check-out Times</h3>
            <ul>
              <li><strong>Check-in:</strong> 2:00 PM (Early check-in available upon request, subject to availability)</li>
              <li><strong>Check-out:</strong> 11:00 AM (Late checkout available for a fee)</li>
            </ul>

            <h3 style="color: #1a1a2e;">House Rules</h3>
            <ul>
              <li>Guests must be at least 18 years old</li>
              <li>Quiet hours: 10:00 PM - 8:00 AM</li>
              <li>No smoking in rooms (smoking area available in designated spaces)</li>
              <li>Pets are not allowed without prior arrangement</li>
              <li>Guests are responsible for any damages to the room or property</li>
              <li>Only registered guests are permitted in rooms</li>
              <li>Valuables should be stored in room safes (available upon request)</li>
            </ul>

            <h3 style="color: #1a1a2e;">Payment Terms</h3>
            <ul>
              <li>A secure payment link will be sent to your email</li>
              <li>Full payment is required to complete your booking</li>
              <li>We accept all major credit/debit cards and bank transfers</li>
              <li>Payment must be received to confirm your reservation</li>
            </ul>
          </div>

          <p>We look forward to welcoming you to ${hotelName}!</p>

          <p>Best regards,<br>
          <strong>Ikad Hotels Team</strong></p>
        </div>

        <div class="footer">
          <p>This is an automated email. Please do not reply directly to this message.</p>
          <p>&copy; 2024 Ikad Hotels. All rights reserved.</p>
          <p>Lagos, Nigeria | Phone: +234-916-373-8458 | Email: info@ikadhotels.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Hotel Notification Email Template
export function getHotelEmailTemplate(booking: BookingData): string {
  const hotelLocation = booking.hotelLocation === "victoria-island"
    ? "Victoria Island"
    : "Yaba";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1a1a2e; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .booking-details { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #2196F3; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #555; }
        .detail-value { text-align: right; }
        .total-row { background-color: #f0f0f0; padding: 10px; font-size: 18px; font-weight: bold; color: #2196F3; margin-top: 10px; }
        .action-box { background-color: #e3f2fd; border: 1px solid #2196F3; padding: 15px; margin: 15px 0; border-radius: 5px; }
        .action-box h3 { color: #1565c0; margin-top: 0; }
        .footer { background-color: #f0f0f0; padding: 20px; text-align: center; border-top: 1px solid #ddd; font-size: 12px; }
        .alert { background-color: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 15px 0; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Booking Request</h1>
          <p>Ikad Hotels - ${hotelLocation}</p>
        </div>

        <div class="content">
          <p>A new booking request has been received and requires your attention.</p>

          <h2>Guest Information</h2>
          <div class="booking-details">
            <div class="detail-row">
              <span class="detail-label">Guest Name:</span>
              <span class="detail-value">${booking.name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">${booking.email}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">${booking.phone}</span>
            </div>
          </div>

          <h2>Stay Details</h2>
          <div class="booking-details">
            <div class="detail-row">
              <span class="detail-label">Check-in Date:</span>
              <span class="detail-value">${new Date(booking.checkIn).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Check-out Date:</span>
              <span class="detail-value">${new Date(booking.checkOut).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Number of Nights:</span>
              <span class="detail-value">${booking.nights}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Room Type:</span>
              <span class="detail-value">${booking.roomType}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Price per Night:</span>
              <span class="detail-value">₦${booking.amount.toLocaleString('en-US')}</span>
            </div>
            <div class="total-row">
              Total Amount: ₦${booking.total.toLocaleString('en-US')}
            </div>
          </div>

          <div class="action-box">
            <h3>⚡ Action Required</h3>
            <p>Please:</p>
            <ol>
              <li>Review the booking details for availability</li>
              <li>Send a confirmation email to the guest with:</li>
              <ul>
                <li>Final confirmation of availability</li>
                <li>Payment link and instructions</li>
                <li>Any special requirements or notes</li>
              </ul>
              <li>Update the booking status in your system</li>
            </ol>
          </div>

          <div class="alert">
            <strong>⚠️ Note:</strong> The guest is waiting for confirmation. Please respond within 24 hours to maintain a good booking experience.
          </div>

          <p>Booking Reference Timestamp: ${new Date().toISOString()}</p>
        </div>

        <div class="footer">
          <p>&copy; 2024 Ikad Hotels. All rights reserved.</p>
          <p>This is an automated email. Do not reply to this message.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
