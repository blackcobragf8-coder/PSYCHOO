const fs = require("fs");
module.exports.config = {
	name: "😮",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😮",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙀")==0 || event.body.indexOf("🧐")==0 || event.body.indexOf("😳")==0 || event.body.indexOf("😱")==0) {
		var msg = {
				body: ">💘🥀𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞!-💜\n\n____ღ۵-🌺🦋“ ইচ্ছে গুলো পবিত্র হলে, সপ্ন গুলো একদিন ঠিকই পূরণ হবে 🥀❤️\n\n							 ইনশাআল্লাহ ❤️🦋\n\n︵ღ᭄🥀༊࿐💙\n\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐀𝐓𝐀 𝐓𝐎𝐌 (✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/amikivut.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("✨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }