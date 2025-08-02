const fs = require("fs");
module.exports.config = {
	name: "🙂",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😏")==0 || event.body.indexOf("😥")==0 || event.body.indexOf("🙂")==0 || event.body.indexOf("🙃")==0) {
		var msg = {
				body: "♡︎<3🩷🪽\n\n۵🦋হারাতে দিলেই মানুষ হারিয়ে যায় রাখার ইচ্ছা থাকলে  একসাথে শেষ সূর্যাস্ত দেখা যায়!🌩️☔♡:)<3☺️👍🌻\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐀𝐓𝐀 𝐓𝐎𝐌 (✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/sentikhor.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }