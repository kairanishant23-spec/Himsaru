# 📱 Fixing Fast2SMS SMS Delivery ("IP is blacklisted")

By testing the Fast2SMS API key directly against their servers, we identified the exact reason why the SMS OTPs are not being delivered, even though your database is generating the records successfully and your API key is correctly configured.

---

## 🎯 The Root Cause
Fast2SMS returned the following response to our API requests:
```json
{
  "return": false,
  "status_code": 414,
  "message": "IP is blacklisted from Dev API section"
}
```

This error (**Code 414**) happens because **IP Security** is enabled on your Fast2SMS developer account. When enabled, Fast2SMS rejects any API requests coming from IP addresses that are not explicitly whitelisted. 

Since your backend application runs on **Render** (which uses dynamic outbound IP addresses that change constantly), Fast2SMS blocks the requests.

---

## 🛠️ How to Fix This (Step-by-Step)

To allow Render (and your local machine) to send SMS OTPs successfully, you need to disable IP protection or whitelist the requests in your Fast2SMS panel:

1. **Log in** to your [Fast2SMS Dashboard](https://www.fast2sms.com/).
2. Click on the **Dev API** tab on the left sidebar.
3. Look for the **Security** or **IP Settings** sub-tab.
4. **Disable IP Security / IP Lock**:
   * Turn **OFF** the toggle for IP Security. 
   * *Note: Since Render uses a dynamic pool of IP addresses, disabling this security feature is the standard and most reliable way to ensure Render services can call the Fast2SMS API.*
5. **Save Changes**.

---

## 🩺 Verifying the Fix
Once you have disabled IP Security:
1. Make a request to sign up or sign in on HIMSARU.
2. The OTP should now arrive on the mobile number in a few seconds.
3. You can also view the logs of your backend service on Render. You should see a log like:
   ```text
   ✅ [SMS Live] Sent to 9999999999 | Fast2SMS ID: <request_id>
   ```

---

## 🔍 Code Diagnostics Upgrade
We have updated the backend code to make troubleshooting easier:
* **Returned Delivery Status:** The `/api/auth/signup-otp` and `/api/auth/login-otp` endpoints now capture the sending result of both Email and SMS and return it in a `delivery` object in the JSON response.
* **Easier Debugging:** If the SMS delivery fails again in the future, the exact error message from Fast2SMS will be returned directly in the API response payload, so you don't have to look through Render logs to find it.
