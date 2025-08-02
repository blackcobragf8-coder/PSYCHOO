const fs = require("fs");
module.exports.config = {
	name: "frnd",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "/freind",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🫂")==0 || event.body.indexOf("👥")==0 || event.body.indexOf("Mama")==0 || event.body.indexOf("বন্ধু")==0) {
		var msg = {
				body: "----------🖤---------\n\বন্ধু মানে ভালোবাসা 🥰\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐀𝐓𝐀 𝐓𝐎𝐌 (✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/freind.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }