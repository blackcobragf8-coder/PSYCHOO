const fs = require("fs");
module.exports.config = {
	name: "😢",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😢",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🫠")==0 || event.body.indexOf("🥹")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("😭")==0) {
		var msg = {
				body: "シ︎🥺পৃথিবীর সবচেয়ে ভয়ংকর রোগের নাম হচ্ছে মায়া------!! ༅༎ 🥀\n\n🦋⊱|| যেটা মানুষকে মৃত্যুর আগেই জিন্দালাশ বানিয়ে দেয়🥺||༊\n\n__💚🌻༅🌸💔\n 𝐌𝐀𝐓𝐀𝐋 𝐓𝐎𝐌(✷‿✷)",
				attachment: fs.createReadStream(__dirname + `/noprefix/tere.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }