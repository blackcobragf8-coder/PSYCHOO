const fs = require("fs");
module.exports.config = {
	name: "sad",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("i love you") ||
     react.includes("love") || 
react.includes("baby") || react.includes("xan") || react.includes("xanu") || react.includes("sona") ||
react.includes("xn") ||
react.includes("xona") || react.includes("xuna") || react.includes("ভালবাসি") ||
react.includes("ব্রেকাপ") ||
react.includes("break up") ||
react.includes("sex") ||
react.includes("nude") ||  
react.includes("Fucking") ||
react.includes("🤤")) {
		var msg = {
				body: "- ভালোবাসা পেতে চাইলে  আামার মামা টম এর ইনবক্সে চলে জাও-!!🌚"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }