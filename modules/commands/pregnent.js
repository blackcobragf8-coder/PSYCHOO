const fs = require("fs");
module.exports.config = {
	name: "🤰",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🤰",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🫃")==0 || event.body.indexOf("🤱")==0 ||  event.body.indexOf("🤰")==0) {
		var msg = {
				body: "কি্ঁরে্ঁ ত্ঁরে্ঁ প্রে্ঁগ্নে্ঁট্ঁ ক্ঁর্ঁলো্ঁ কি্ঁডা্ঁ👀🐸",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/pregnet.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }