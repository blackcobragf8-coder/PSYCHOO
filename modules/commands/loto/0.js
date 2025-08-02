const fs = require("fs");
module.exports.config = {
	name: "tom1",
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
	if(react.includes("koi re") ||
     react.includes("bot koi tui") || 
react.includes("koi") || 
react.includes("kone") ||
react.includes("koi apni")) {
		var msg = {
				body: "-বলদ আমাকে না খুইজা আমার বস টম এরে একটা গফ দে-!🥀"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }