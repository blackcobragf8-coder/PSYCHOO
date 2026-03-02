 const login = require("meta-horizonn");
const fs = require("fs");
require("dotenv").config();

const appState = JSON.parse(fs.readFileSync("appstate.json", "utf-8"));

login({ appState }, (err, api) => {
  if (err) return console.error("Login error:", err);

  console.log("✅ Bot is active using meta-horizonn!");

  api.listenMqtt((err, event) => {
    if (err) return console.error(err);

    if (event.body && event.type === "message") {
      const reply = `Bot says: ${event.body}`;
      api.sendMessage(reply, event.threadID);
    }
  });
});