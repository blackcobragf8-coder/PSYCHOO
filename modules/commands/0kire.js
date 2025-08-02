const fs = require("fs");
module.exports.config = {
	name: "tom21",
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
	if(react.includes("khusi") ||
     react.includes("hasi") || 
react.includes("hoiche") || 
react.includes("finally") ||
react.includes("done")) {
		var msg = {
				body: "🤨  |কিরে কি খুসির খবর| - '🙈',,,-|মিষ্টি কই হা,,|🐸🌚!🥀"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                 }