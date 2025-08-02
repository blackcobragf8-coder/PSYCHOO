const fs = require("fs");
module.exports.config = {
	name: "tom6",
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
	if(react.includes("love you ki") ||
     react.includes("i love u kake bole") || 
react.includes("i love you ki") || 
react.includes("i love you er ortho ki") ||
react.includes("i love u mane ki")) {
		var msg = {
				body: "- || - 'জঙ্গলে নিয়ে গিয়ে'🙈'\n\n,,-|সম্মানের সাথে পিছন মেরে দেওয়া কে আই লাপ ইউ বলে|😒  || - '🙈',,,-||😒"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }