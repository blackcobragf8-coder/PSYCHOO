const fs = require("fs");
module.exports.config = {
	name: "Voice",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "/voice",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Voice")==0 || event.body.indexOf("🐯")==0 || event.body.indexOf("kotha")==0 || event.body.indexOf("🤲")==0) {
		var msg = {
				body: "--------------------------------\n\nকথা টা আসলেই শিক্ষনিয় 🥰🖤\n\n________________________________",
				attachment: fs.createReadStream(__dirname + `/noprefix/facebook.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {},true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}