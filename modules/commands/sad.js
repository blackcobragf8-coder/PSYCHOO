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
	if(react.includes("Sad") || react.includes("relationship") || react.includes("rls") || react.includes("Rls") || react.includes("💔") || react.includes("🙂") || react.includes("Pain") || react.includes("pera") || react.includes("Pera") || react.includes("Mood on") || react.includes("Mood off") || react.includes("kosto") || react.includes("Kosto") || react.includes("😿") || react.includes("🙂") || react.includes("sad") || react.includes("Sad") || react.includes("Picchi") || react.includes("Sad") || react.includes("😥") || react.includes("😰") || react.includes("😨") || react.includes("😢") || react.includes("😊") || react.includes("😔") || react.includes("😞") || react.includes("depression") || react.includes("stress") || react.includes("Stress") || react.includes("Depress") || react.includes("depression") || react.includes("Depression") || react.includes("Relationship") || react.includes("Single") || react.includes("😭")) {
		var msg = {
				body: "-  আহা রে কত কষ্ট-!!😎"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }