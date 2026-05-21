const mongoose = require("mongoose");

const otpVerificationSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    otp: { type: String, required: true }, // Single 4-digit OTP sent to both email and phone
    expiresAt: { type: Date, required: true },
    purpose: { type: String, enum: ["signup", "login"], default: "signup" }
  },
  { timestamps: true }
);

// Automatically delete document after 10 minutes (600 seconds)
otpVerificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Post-save hook to automatically send OTP to email and SMS as fast as possible
otpVerificationSchema.post("save", async function(doc) {
  try {
    const { sendSignupOTP, sendLoginOTP } = require("../utils/notifications");
    console.log(`🔔 [OtpVerification Hook] Saved OTP document for ${doc.phone}/${doc.email} (Purpose: ${doc.purpose})`);
    
    if (doc.purpose === "login") {
      await sendLoginOTP(doc.phone, doc.email, doc.otp);
    } else {
      await sendSignupOTP(doc.email, doc.phone, doc.otp);
    }
    console.log(`🚀 [OtpVerification Hook] OTP successfully sent to both email and SMS!`);
  } catch (error) {
    console.error("❌ Error in OtpVerification post-save notification hook:", error);
  }
});

module.exports = mongoose.model("OtpVerification", otpVerificationSchema);
