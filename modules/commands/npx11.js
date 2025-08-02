const fs = require("fs");
module.exports.config = {
	name: "npx",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "besti",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Besti")==0 || event.body.indexOf("Dost")==0 || event.body.indexOf("Dst")==0 || event.body.indexOf("Bedi")==0 || event.body.indexOf("Best")==0 || event.body.indexOf("Frnd")==0 || event.body.indexOf("Firnd")==0 ||
event.body.indexOf("শারি")==0 || event.body.indexOf("mota")==0) {
		var msg = {
				body: "💕𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞!ᵉ-🌺\n\n মন তো সবাই দেয় তুমি না হয় পম পম দিলা 😌",
				attachment: fs.createReadStream(__dirname + `/noprefix/besti2.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }