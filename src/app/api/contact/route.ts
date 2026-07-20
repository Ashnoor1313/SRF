import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key'); // Provide a fallback for local testing if needed

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Build the email content
    const htmlContent = `
      <h2>New Enquiry from Siya Ram Fabrics Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `;

    // Only attempt to send email if API key is actually set and not the dummy one
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_dummy_key') {
      const data = await resend.emails.send({
        from: 'Siya Ram Fabrics <onboarding@resend.dev>', // Should be a verified domain in production
        to: process.env.CONTACT_EMAIL || 'info@siyaramfabrics.com',
        subject: `New Enquiry from ${name}`,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, data });
    } else {
      // Simulate successful email send for development
      console.log('Development mode: Email not sent because RESEND_API_KEY is not configured properly.');
      console.log('Email Data:', { name, email, phone, company, message });
      return NextResponse.json({ success: true, message: 'Dev mode: email logged to console.' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
