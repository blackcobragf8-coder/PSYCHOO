const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gali",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Love you")==0 || event.body.indexOf("LOVE YOU")==0 || event.body.indexOf("Love u")==0 || event.body.indexOf("miss u")==0) {
		var msg = {
				body: "ভালোবাসার মাইরে চোদ-__'",
				attachment: fs.createReadStream(__dirname + `/noprefix/gali1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }