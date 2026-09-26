# HIMSARU — Modern Next.js + TypeScript + Tailwind CSS Frontend

This is the elevated, responsive, full-featured modern frontend for HIMSARU built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## ✨ What Has Been Enhanced
1. **100% Brand Loyalty**: Uses exact HIMSARU colors (`--forest: #1b3a20`, `--moss: #3d6b42`, `--cream: #fbf7f0`, `--warm: #f5efe4`, `--gold: #c4890a`, `--honey: #f5b942`).
2. **3-Step Email OTP Sign Up**:
   - **Step 1**: Enter email address.
   - **Step 2**: Verify 6-digit OTP (with cooldown & instant demo code fallback).
   - **Step 3**: Provide 10-digit mobile number, name & password.
3. **Mobile-Only Sign In**:
   - Customer enters only their mobile number.
   - If account exists -> Enter password to log in.
   - If account does NOT exist -> Automatically redirects to the 3-step Sign Up flow with the mobile number remembered.
4. **Interactive "Our Soul" Experience (`/our-soul`)**:
   - Misty Himalayan backdrop and mountain landscape aesthetic.
   - **Daughters of the Himalayas**: Tabbed artisan spotlights (Kamla Devi, Maya Rawat, Deepa Negi) detailing their daily routines, wisdom, and mountain craft.
   - **From Mountain to Jar**: Interactive 4-stage Vedic Bilona and raw honey extraction journey.
   - **Living Impact Tracker**: Real community metrics (140+ craftswomen supported, 100% fair wages).
   - **Pahad Scenery Showcase**: High-definition Chamoli, Nanda Devi & Bugyal valley scenery.
5. **Full Commerce Engine**:
   - Product catalog with categories, weight variant picker, real-time pricing and stock badges.
   - Interactive Search Modal with autocomplete.
   - Cart Drawer with `localStorage` persistence.
   - Multi-step Checkout Modal (Saved addresses, Instant UPI QR/Apps, Razorpay card/net-banking, COD).
   - Protected Admin Dashboard (`/admin`).

## 🚀 Running the Project
```bash
cd "new frontend"
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
