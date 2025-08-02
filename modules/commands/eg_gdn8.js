const fs = require("fs");
module.exports.config = {
	name: "n8",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gdn8",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Good night")==0 || event.body.indexOf("Gd n8")==0 || event.body.indexOf("good night")==0 || event.body.indexOf("gd n8")==0) {
		var msg = {
				body: "ও্ঁকে্ঁ সো্ঁনা গু্ঁড্ঁ না্ঁই্ঁট্ঁ 🌚",
				attachment: fs.createReadStream(__dirname + `/noprefix/okshona.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }