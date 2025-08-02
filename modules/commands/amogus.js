const fs = require("fs");
module.exports.config = {
	name: "sus",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sus",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😀")==0 || event.body.indexOf("🤐")==0 || event.body.indexOf("sus")==0 || event.body.indexOf("Sus")==0) {
		var msg = {
				body: "ඞ",z
				attachment: fs.createReadStream(__dirname + `/noprefix/sus.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }