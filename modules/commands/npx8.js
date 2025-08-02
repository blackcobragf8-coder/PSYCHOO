const fs = require("fs");
module.exports.config = {
	name: "🚬",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🚬",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Biri")==0 || event.body.indexOf("সিগারেট")==0 || event.body.indexOf("🚬")==0 || event.body.indexOf("বিড়ি")==0) {
		var msg = {
				body: "ভালোবাসার মারে ৩৬৫ দিন ষুদিシ︎__💚🌻༅🌸💔\n ጀᏗᎥᏦᎧ ᎷᏦᎥ420(✷‿✷)",
				attachment: fs.createReadStream(__dirname + `/noprefix/rahad9.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤟", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }