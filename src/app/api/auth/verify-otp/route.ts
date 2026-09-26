import { NextResponse } from 'next/server';

declare global {
  var _himsaruOtpStore: Map<string, { otp: string; expiresAt: number }> | undefined;
}
const otpStore = global._himsaruOtpStore || new Map();

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: 'Email and verification code are required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();
    const record = otpStore.get(cleanEmail);

    if (!record) {
      return NextResponse.json(
        { success: false, message: 'No verification code requested for this email or it has expired.' },
        { status: 400 }
      );
    }

    if (Date.now() > record.expiresAt) {
      otpStore.delete(cleanEmail);
      return NextResponse.json(
        { success: false, message: 'Verification code has expired. Please request a new one.' },
        { status: 400 }
      );
    }

    if (record.otp !== otp.trim()) {
      return NextResponse.json(
        { success: false, message: 'Incorrect verification code. Please try again.' },
        { status: 400 }
      );
    }

    // Code is valid
    otpStore.delete(cleanEmail);

    return NextResponse.json({
      success: true,
      message: 'Email verified successfully!',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'OTP verification failed.' },
      { status: 500 }
    );
  }
}
