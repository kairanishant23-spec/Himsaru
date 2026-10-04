const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const { User, OtpVerification } = require("../models");
const { auth } = require("../middleware/auth");
const { sendEmailNotification } = require("../utils/notifications");

const router = express.Router();

// ─── Helper: Generate JWT ─────────────────────────────────────────────────────
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "super_secret_himsaru_dev_key", { expiresIn: "30d" });
};

// ─── Helper: clean 10-digit Indian phone number ───────────────────────────────
const cleanPhoneNumber = (phone) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.substring(2);
  }
  return digits;
};

// ─── Helper: IST timestamp ────────────────────────────────────────────────────
const getISTTimestamp = () => new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  year: "numeric", month: "short", day: "numeric",
  hour: "2-digit", minute: "2-digit", hour12: true
}).format(new Date());

// ─────────────────────────────────────────────────────────────────────────────
// @route   POST /api/auth/send-otp
// @desc    Generate Email OTP, save to DB, and send via SMTP Email
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.status(400).json({ success: false, message: "Valid email address is required." });
    }
    const cleanEmail = email.toLowerCase().trim();

    // Generate 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store in MongoDB (overwrite previous pending OTPs)
    await OtpVerification.deleteMany({ email: cleanEmail });
    await OtpVerification.create({
      email: cleanEmail,
      otp: generatedOtp,
      expiresAt,
      purpose: "signup"
    });

    // Send real email via SMTP
    const subject = `🔑 HIMSARU: Your Verification OTP is ${generatedOtp}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 12px; background-color: #fbf7f0;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="color: #1b3a20; margin: 0; font-size: 24px;">HIMSARU</h2>
          <p style="color: #c4890a; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px;">Pure Taste of the Himalayas</p>
        </div>
        <p style="color: #374151; font-size: 14px; line-height: 1.5;">Hello,</p>
        <p style="color: #374151; font-size: 14px; line-height: 1.5;">Thank you for registering with HIMSARU. Please use the 6-digit verification code below to confirm your email address:</p>
        <div style="background-color: #1b3a20; color: #f5b942; font-size: 32px; font-weight: bold; text-align: center; padding: 15px; border-radius: 8px; letter-spacing: 8px; margin: 20px 0;">
          ${generatedOtp}
        </div>
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px; text-align: center;">This code is valid for 10 minutes. If you did not request this code, please ignore this email.</p>
      </div>
    `;

    const emailResult = await sendEmailNotification(cleanEmail, subject, htmlContent);
    if (!emailResult.success) {
      console.error(`[HIMSARU DB OTP] Email delivery failed for ${cleanEmail}:`, emailResult.error);
      return res.status(500).json({
        success: false,
        message: `Email sending error: ${emailResult.error || 'Please verify SMTP credentials in Render.'}`
      });
    }

    console.log(`[HIMSARU DB OTP] Generated & sent to ${cleanEmail}`);
    res.json({ success: true, message: `Verification code sent to ${cleanEmail}` });
  } catch (err) {
    console.error("send-otp error:", err);
    res.status(500).json({ success: false, message: (err && err.message) || "Failed to send OTP email." });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// @route   POST /api/auth/verify-otp
// @desc    Verify OTP from DB
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "Email and OTP are required." });
    }
    const cleanEmail = email.toLowerCase().trim();
    const cleanOtp = otp.toString().trim();

    const record = await OtpVerification.findOne({ email: cleanEmail, otp: cleanOtp });
    if (!record) {
      return res.status(400).json({ success: false, message: "Invalid or expired verification code." });
    }

    if (record.expiresAt < new Date()) {
      await OtpVerification.deleteOne({ _id: record._id });
      return res.status(400).json({ success: false, message: "Verification code has expired. Please request a new one." });
    }

    // Clear verified OTP record
    await OtpVerification.deleteOne({ _id: record._id });

    res.json({ success: true, message: "Email verified successfully!" });
  } catch (err) {
    console.error("verify-otp error:", err);
    res.status(500).json({ success: false, message: "Server error during verification." });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// @route   POST /api/auth/register
// @desc    Register new user with email, phone, password
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.post(
  "/register",
  [
    body("firstName").trim().notEmpty().withMessage("First name is required"),
    body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
    body("phone").trim().notEmpty().withMessage("Phone number is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters")
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const { firstName, lastName, email, phone, password } = req.body;
      const cleanedPhone = cleanPhoneNumber(phone);

      // Validate exactly 10 numerical digits
      if (cleanedPhone.length !== 10 || !/^\d{10}$/.test(cleanedPhone)) {
        return res.status(400).json({
          success: false,
          message: "Mobile number must be exactly 10 numerical digits."
        });
      }

      // Check if user already exists
      const existing = await User.findOne({ $or: [{ email }, { phone: cleanedPhone }] });
      if (existing) {
        return res.status(400).json({
          success: false,
          message: "An account with this email or phone already exists. Please log in."
        });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const user = await User.create({
        firstName,
        lastName: lastName || "",
        email,
        phone: cleanedPhone,
        password: hashedPassword,
        createdAtIST: getISTTimestamp()
      });

      const token = generateToken(user._id);

      res.status(201).json({
        success: true,
        message: "Account created successfully! Welcome to HIMSARU.",
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          role: user.role
        }
      });
    } catch (err) {
      console.error("Register error:", err);
      res.status(500).json({ success: false, message: "Server error during registration." });
    }
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// @route   POST /api/auth/login
// @desc    Login with email/phone + password
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.post(
  "/login",
  [
    body("identifier").trim().notEmpty().withMessage("Email or phone number is required"),
    body("password").notEmpty().withMessage("Password is required")
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const { identifier, password } = req.body;

      // Find user by email or phone
      const cleanedPhone = cleanPhoneNumber(identifier);
      const user = await User.findOne({
        $or: [
          { email: identifier.toLowerCase().trim() },
          { phone: cleanedPhone }
        ]
      });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: "No account found with this email or phone. Please register first."
        });
      }

      // Verify password
      if (!user.password) {
        return res.status(400).json({
          success: false,
          message: "This account was created without a password. Please contact support."
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password. Please try again."
        });
      }

      const token = generateToken(user._id);

      res.json({
        success: true,
        message: "Login successful! Welcome back.",
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          role: user.role
        }
      });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ success: false, message: "Server error during login." });
    }
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// @route   POST /api/auth/admin-login
// @desc    Admin login with email + password (used by admin.html dashboard)
// @access  Public
// ─────────────────────────────────────────────────────────────────────────────
router.post("/admin-login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required." });
    }
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user || user.role !== "admin") {
      return res.status(401).json({ success: false, message: "Access denied. Admin accounts only." });
    }
    if (!user.password) {
      return res.status(400).json({ success: false, message: "No password set. Contact support." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password." });
    }
    const token = generateToken(user._id);
    res.json({
      success: true,
      message: "Admin login successful.",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (err) {
    console.error("Admin login error:", err);
    res.status(500).json({ success: false, message: "Server error during login." });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// @route   GET /api/auth/me
// @desc    Get current logged-in user
// @access  Private
// ─────────────────────────────────────────────────────────────────────────────
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password").lean();
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }
    res.json({ success: true, user });
  } catch (err) {
    console.error("Get me error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// @route   PUT /api/auth/profile
// @desc    Update user profile (name, addresses)
// @access  Private
// ─────────────────────────────────────────────────────────────────────────────
router.put("/profile", auth, async (req, res) => {
  try {
    const { firstName, lastName, addresses } = req.body;
    const updateData = {};
    if (firstName) updateData.firstName = firstName.trim();
    if (lastName !== undefined) updateData.lastName = lastName.trim();
    if (addresses) updateData.addresses = addresses;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updateData },
      { new: true }
    ).select("-password").lean();

    res.json({ success: true, user });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// @route   PUT /api/auth/change-password
// @desc    Change user password
// @access  Private
// ─────────────────────────────────────────────────────────────────────────────
router.put(
  "/change-password",
  auth,
  [
    body("currentPassword").notEmpty().withMessage("Current password is required"),
    body("newPassword").isLength({ min: 6 }).withMessage("New password must be at least 6 characters")
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const { currentPassword, newPassword } = req.body;
      const user = await User.findById(req.user._id);

      const isMatch = await bcrypt.compare(currentPassword, user.password || "");
      if (!isMatch) {
        return res.status(400).json({ success: false, message: "Current password is incorrect." });
      }

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
      await user.save();

      res.json({ success: true, message: "Password changed successfully." });
    } catch (err) {
      console.error("Change password error:", err);
      res.status(500).json({ success: false, message: "Server error." });
    }
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// @route   POST /api/auth/address
// @desc    Add a new address to user profile
// @access  Private
// ─────────────────────────────────────────────────────────────────────────────
router.post("/address", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    const { name, phone, line1, line2, city, state, pincode, email, isDefault } = req.body;

    if (isDefault) {
      user.addresses.forEach(addr => { addr.isDefault = false; });
    }

    user.addresses.push({ name, phone, line1, line2, city, state, pincode, email, isDefault: !!isDefault });
    await user.save();

    res.json({ success: true, addresses: user.addresses });
  } catch (err) {
    console.error("Add address error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

module.exports = router;
