const fs = require("fs");
module.exports.config = {
	name: "tom5",
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
	if(react.includes("dudh") ||
     react.includes("dud") || 
react.includes("bby") || 
react.includes("pom pom") ||
react.includes("dudu")) {
		var msg = {
				body:"মন তো সবাই দেয় তুমি না হয় পম পম দিলা 😌- || - 🙈'-| \nঝাং তোমার কচি দুই টা পমপম দেখতে চাওয়া আমার অবুজ মন🫠|😒 "
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😐", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                           }