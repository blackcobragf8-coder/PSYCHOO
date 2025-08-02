const fs = require("fs");
module.exports.config = {
	name: "hat",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "hat",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hat")==0 || event.body.indexOf("hatmar")==0 || event.body.indexOf("Hat")==0 || event.body.indexOf("nunu")==0) {
		var msg = {
				body: "｢হাত মারা শরীর এর জন্য ভালো🦋｣",
				attachment: fs.createReadStream(__dirname + `/noprefix/hat.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🔪", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }