# Production OTP Delivery Troubleshooting Guide

We have updated the backend code to make the OTP system extremely robust. This guide details the modifications made and the specific steps required in your Render environment to guarantee successful OTP delivery via both SMS and Email.

---

## 🛠️ Code Upgrades & Refinements

1. **Native HTTP/S for SMS Delivery (Fast2SMS):**
   - Replaced Node's experimental `fetch` API with the native, built-in Node.js `https` module.
   - Bypasses any node runtime version discrepancies or errors on Render.
   
2. **Environment Variable Sanitizer (`cleanEnvVar`):**
   - Added automatic quote and whitespace stripping to `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, and `SMS_API_KEY`.
   - Prevents authentication failures if credentials on the Render dashboard are accidentally wrapped in quotes (e.g., `SMTP_USER="name@gmail.com"`).

---

## 📋 Render Dashboard Settings Checklist

For OTP delivery to succeed, verify your variables on the **Render Dashboard** exactly as follows.

> Make sure these environment variables are set on your **backend service (`himsaru-api`)**, **NOT** the frontend.

| Environment Variable | Expected Format / Example | Purpose |
| :--- | :--- | :--- |
| **`SMTP_HOST`** | `smtp.gmail.com` | Mail server domain |
| **`SMTP_PORT`** | `587` | Server port (STARTTLS) |
| **`SMTP_USER`** | `your_gmail_address@gmail.com` | Your real Gmail address |
| **`SMTP_PASS`** | `abcd efgh ijkl mnop` | **16-character App Password** (no spaces needed) |
| **`FROM_EMAIL`** | `HIMSARU <your_gmail_address@gmail.com>` | Sender header address |
| **`SMS_API_KEY`** | *[Your Fast2SMS Dev API Key]* | Dev key from Fast2SMS dashboard |
| **`SMS_SENDER_ID`** | `HMSRU` (or `FSTSMS` if default) | Sender name header |

---

## 🔑 Key Verification Steps

### 1. Gmail App Password Setup (Mandatory)
Standard Google accounts will reject SMTP logins using your master password.
1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords).
2. Generate an app password (select **Mail** and your device).
3. Copy the **16-character key** (e.g., `abcd efgh ijkl mnop`).
4. Set this key as the value of `SMTP_PASS` in your Render Environment.

### 2. Fast2SMS Quick Route Check
1. Go to your [Fast2SMS Dashboard](https://www.fast2sms.com/).
2. Confirm you have **active wallet balance** (Quick SMS costs ~0.20 INR per message).
3. Verify that your API Key is correctly copied from the **Dev API** tab.

---

## 🩺 Monitoring the Logs

Once you deploy these changes, open the **Logs** tab on Render. You should look for:
- Startup diagnostic logs:
  ```text
  📧 [Notifications] SMTP_HOST : smtp.gmail.com
  📧 [Notifications] SMTP_USER : your_gmail_address@gmail.com
  📧 [Notifications] SMTP_PASS : ✅ SET (16 chars)
  📱 [Notifications] SMS_API_KEY: ✅ SET (xx chars)
  ```
- Delivery logs when requesting OTP:
  ```text
  📤 [Signup OTP] Sending to email: ... | phone: ...
  ✅ [Email Live] Sent to ... | MessageId: <...>
  ✅ [SMS Live] Sent to ... | Fast2SMS ID: <...>
  ```
