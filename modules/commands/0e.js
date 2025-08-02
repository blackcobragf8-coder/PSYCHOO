const fs = require("fs");
module.exports.config = {
	name: "tom11",
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
	if(react.includes("ami kar") ||
     react.includes("kar") || 
react.includes("tmi amr") || 
react.includes("amr") ||
react.includes("ke kar")) {
		var msg = {
				body: "- || - 'তুমি সুধু আমার ঝাং '🙈',,,-||😒 🐸 >3!🥀"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😐", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }