/**
 * Fast2SMS Diagnostic Test
 * Run: node test-sms-direct.js
 * PURPOSE: See the exact raw response from Fast2SMS to diagnose SMS delivery failure
 */

const https = require("https");

const SMS_API_KEY = "MtwLpgJCqsfBF9muk1NPOS3nQVeDoXl62HYaRWcr4dGi8x5AjvdYUQkfNB4HPiqFtM9voWK2R73y5SrX";

// ⚠️ CHANGE THIS to your own phone number before running
const TEST_PHONE = "9999999999"; // <-- Replace with your actual number

const otp = "8472";

// ─── TEST 1: Quick SMS Route ("q") — current implementation ──────────────────
function testQuickRoute() {
  return new Promise((resolve) => {
    console.log("\n🔵 TEST 1: Quick SMS Route (route=q)");
    const payload = JSON.stringify({
      route: "q",
      message: `HIMSARU: Your OTP is ${otp}. Valid for 10 min. Do not share.`,
      language: "english",
      flash: 0,
      numbers: TEST_PHONE
    });

    const options = {
      hostname: "www.fast2sms.com",
      port: 443,
      path: "/dev/bulkV2",
      method: "POST",
      headers: {
        authorization: SMS_API_KEY,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => body += chunk);
      res.on("end", () => {
        console.log("📬 Raw Response:", body);
        try {
          const data = JSON.parse(body);
          console.log("✅ Parsed:", JSON.stringify(data, null, 2));
          resolve(data);
        } catch (e) {
          console.log("❌ Non-JSON response:", body);
          resolve({ error: body });
        }
      });
    });
    req.on("error", (e) => {
      console.error("❌ Network error:", e.message);
      resolve({ error: e.message });
    });
    req.write(payload);
    req.end();
  });
}

// ─── TEST 2: DLT Route ("dlt") — required for OTP in India since TRAI rules ──
function testDltRoute() {
  return new Promise((resolve) => {
    console.log("\n🟡 TEST 2: DLT Route (route=dlt)");
    console.log("   NOTE: This requires DLT sender_id and template_id registered on Fast2SMS");
    const payload = JSON.stringify({
      route: "dlt",
      sender_id: "HMSRU",           // Must be DLT registered
      message: `Your OTP is ${otp}. Valid for 10 min. Do not share. - HIMSARU`,
      variables_values: otp,
      flash: 0,
      numbers: TEST_PHONE
    });

    const options = {
      hostname: "www.fast2sms.com",
      port: 443,
      path: "/dev/bulkV2",
      method: "POST",
      headers: {
        authorization: SMS_API_KEY,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => body += chunk);
      res.on("end", () => {
        console.log("📬 Raw Response:", body);
        try {
          const data = JSON.parse(body);
          console.log("✅ Parsed:", JSON.stringify(data, null, 2));
          resolve(data);
        } catch (e) {
          console.log("❌ Non-JSON response:", body);
          resolve({ error: body });
        }
      });
    });
    req.on("error", (e) => {
      console.error("❌ Network error:", e.message);
      resolve({ error: e.message });
    });
    req.write(payload);
    req.end();
  });
}

async function run() {
  console.log("=".repeat(60));
  console.log("🧪 FAST2SMS DIAGNOSTIC TEST");
  console.log("=".repeat(60));
  console.log("📱 Target Phone:", TEST_PHONE);
  console.log("🔑 API Key (last 6):", SMS_API_KEY.slice(-6));

  const r1 = await testQuickRoute();
  const r2 = await testDltRoute();

  console.log("\n" + "=".repeat(60));
  console.log("📊 SUMMARY");
  console.log("=".repeat(60));
  console.log("Quick Route (q):", r1.return ? "✅ SUCCESS" : `❌ FAILED — ${r1.message || JSON.stringify(r1)}`);
  console.log("DLT Route     :", r2.return ? "✅ SUCCESS" : `❌ FAILED — ${r2.message || JSON.stringify(r2)}`);
  console.log("\n👉 Share the above output to diagnose the issue.");
}

run();
