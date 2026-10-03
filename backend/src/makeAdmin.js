const mongoose = require("mongoose");
const { User } = require("./models");
require("dotenv").config();

const email = process.argv[2];

if (!email) {
  console.log("❌ Please provide an email address. Usage: node makeAdmin.js <email>");
  process.exit(1);
}

const run = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error("❌ MONGODB_URI is not defined in environment variables.");
      process.exit(1);
    }
    
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      console.error(`❌ User not found with email: ${email}`);
      process.exit(1);
    }
    
    user.role = "admin";
    await user.save();
    
    console.log(`\n✅ Successfully promoted ${user.firstName} ${user.lastName} (${email}) to Admin!`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Operation failed:", err);
    process.exit(1);
  }
};

run();
