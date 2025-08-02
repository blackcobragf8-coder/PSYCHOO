const fs = require("fs");
module.exports.config = {
	name: "tom17",
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
	if(react.includes("khaisos") ||
     react.includes("khaicho") || 
react.includes("khawa dawa hoiche") || 
react.includes("khai") ||
react.includes("khawa")) {
		var msg = {
				body: "❤️༎_____ঝাং থুমি তো খাইতেই দিলা না খামু কি ভাবে﹏🙂💔 \n উফ ঝাং তোমাকে চুষে চুষে খাওয়ার 𝐹𝑒𝑒𝑙𝑖𝑛𝑔'𝑠 হচ্ছে হোক '😒  |🤤😝| -"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }