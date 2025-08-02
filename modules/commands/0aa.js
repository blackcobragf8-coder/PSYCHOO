const fs = require("fs");
module.exports.config = {
	name: "tom2",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Junior Simanto", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("current") ||
     react.includes("maiya") || 
react.includes("may") || 
react.includes("🍆") ||
react.includes("Woman")) {
		var msg = {
				body:"🍆 বেগুন তুমি দন্য🥵\nকচি কচি মেয়েদের কে সুখ দিবার জন্য জন্য 🥵🥴"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }