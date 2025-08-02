const fs = require("fs");
module.exports.config = {
	name: "🐵",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🐵",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🐵")==0 || event.body.indexOf("🙉")==0 || event.body.indexOf("🐵")==0 || event.body.indexOf("🐒")==0 || event.body.indexOf("🙊")==0 || event.body.indexOf("🙈")==0) {
		var msg = {
				body: "ই্ঁমো্ঁজি্ঁটা্ঁ ঠি্ঁক্ঁ তো্ঁর ম্ঁতো্ঁ 🐒",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/imoji.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }