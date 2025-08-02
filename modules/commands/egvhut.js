const fs = require("fs");
module.exports.config = {
	name: "👻",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "👻",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("☠️")==0 || event.body.indexOf("🤖")==0 || event.body.indexOf("👻")==0 || event.body.indexOf("👽")==0) {
		var msg = {
				body: "কি্ঁরে্ঁ ভু্ঁত্ঁ দি্ঁয়া্ঁ ভ্ঁয়্ঁ দে্ঁখা্ঁছ্ঁ কে্ঁন্ঁ 👿😈",
				attachment: fs.createReadStream(__dirname + `/noprefix/voot.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😒", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }