import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key'); // Provide a fallback for local testing if needed

const MAX_BODY_BYTES = 10 * 1024; // 10 KB
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // requests per window per IP

const enquirySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(10).max(20),
  company: z.string().max(150).optional(),
  message: z.string().min(10).max(5000),
});

const rateHits = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateHits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length >= RATE_LIMIT_MAX) {
    rateHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  rateHits.set(ip, hits);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request body too large' }, { status: 413 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  const body = await request.text();
  if (Buffer.byteLength(body, 'utf8') > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request body too large' }, { status: 413 });
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const result = enquirySchema.safeParse(parsed);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Invalid submission', details: result.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { name, email, phone, company, message } = result.data;

  try {
    // Build the email content
    const htmlContent = `
      <h2>New Enquiry from Siya Ram Fabrics Website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || 'N/A')}</p>
      <h3>Message:</h3>
      <p>${escapeHtml(message)}</p>
    `;

    // Only attempt to send email if API key is actually set and not the dummy one
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_dummy_key') {
      await resend.emails.send({
        from: 'Siya Ram Fabrics <onboarding@resend.dev>', // Should be a verified domain in production
        to: process.env.CONTACT_EMAIL || 'siyaramfabrics@gmail.com',
        subject: `New Enquiry from ${escapeHtml(name)}`,
        html: htmlContent,
      });

      return NextResponse.json({ success: true });
    } else {
      // Simulate successful email send for development
      console.log('Development mode: Email not sent because RESEND_API_KEY is not configured properly.');
      console.log('Email Data:', { name, email, phone, company, message });
      return NextResponse.json({ success: true, message: 'Dev mode: email logged to console.' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}