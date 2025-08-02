const fs = require("fs");
module.exports.config = {
	name: "prem",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "/prem",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Love")==0 || event.body.indexOf("love")==0 || event.body.indexOf("Prem")==0 || event.body.indexOf("prem")==0) {
		var msg = {
				body: "🖤🥀\n\nআস্সালামু আলাইকুম❤️‍🔥\n\nভালোবাসা নিয়ে ছটো কথা 🥰\n\n-\n\nvoice by me:👅-✘ 𝐉𝐔𝐍𝐈𝐎𝐑 𝐓𝐎𝐌 : ) 🎀 🍒 ",
				attachment: fs.createReadStream(__dirname + `/noprefix/.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }