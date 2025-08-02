const fs = require("fs");
module.exports.config = {
	name: "tom22",
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
	if(react.includes("ke") ||
     react.includes("apni ke") || 
react.includes("ke apni") || 
react.includes("Chinlam na") ||
react.includes("chini na")) {
		var msg = {
				body: "- || - 'ঝাং তুমি আমারে চিনো না'🙈'-||😒 🐸!🥀"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }