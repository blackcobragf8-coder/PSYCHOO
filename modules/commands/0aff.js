const fs = require("fs");
module.exports.config = {
	name: "tom12",
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
	if(react.includes("aj keo nai") ||
     react.includes("ajke keu nei bole") || 
react.includes("keu nai") || 
react.includes("ekla") ||
react.includes("Single")) {
		var msg = {
				body: "তুই কি এতিম!^ 😒 ^ "
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }