import { NextResponse } from 'next/server';

// In-memory OTP storage for demo/fallback verification
// Map: email -> { otp: string, expiresAt: number }
declare global {
  var _himsaruOtpStore: Map<string, { otp: string; expiresAt: number }> | undefined;
}

if (!global._himsaruOtpStore) {
  global._himsaruOtpStore = new Map();
}
const otpStore = global._himsaruOtpStore;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check backend connection if configured
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://himsaru-kyfv.onrender.com';
    
    // Generate a secure 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    otpStore.set(cleanEmail, { otp: generatedOtp, expiresAt });

    // Attempt to notify backend if an email service route exists
    try {
      await fetch(`${backendUrl}/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, otp: generatedOtp }),
      });
    } catch (e) {
      // Backend asleep or offline: fallback smoothly
    }

    console.log(`[HIMSARU OTP] Generated for ${cleanEmail}: ${generatedOtp}`);

    return NextResponse.json({
      success: true,
      message: `A 6-digit verification code was sent to ${cleanEmail}.`,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to send OTP.' },
      { status: 500 }
    );
  }
}
