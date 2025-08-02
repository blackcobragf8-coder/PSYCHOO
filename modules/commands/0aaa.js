const fs = require("fs");
module.exports.config = {
	name: "tom3",
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
	if(react.includes("hop") ||
     react.includes("ukkhe") || 
react.includes("humm") || 
react.includes("ok") ||
react.includes("Acca")) {
		var msg = {
				body:"- || - 'হুম '🙈'-| ঝাং |😒"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }