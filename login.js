require("dotenv").config();
const fs = require("fs");
const login = require("fca-horizon-remake");

const credentials = {
  email: process.env.FB_EMAIL,
  password: process.env.FB_PASSWORD
};

login(credentials, (err, api) => {
  if (err) {
    console.error("❌ Login failed:", err);
    return;
  }

  fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState()));
  console.log("✅ Login successful! appstate.json created.");
});