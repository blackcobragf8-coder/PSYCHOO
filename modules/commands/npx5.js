const fs = require("fs");
module.exports.config = {
	name: "Rahad",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Rahad", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Shikha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hack")==0 || event.body.indexOf("Id")==0 || event.body.indexOf("Hacker")==0 || event.body.indexOf("Fb")==0) {
		var msg = {
				body: "আইডি পাসওয়ার্ড দে তর আইডির হুগা মারমু🐸\n༻𝐎𝐖𝐍𝐄𝐑:- ☞𝐌𝐀𝐓𝐀𝐋 𝐓𝐎𝐌(✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/shaonhack.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }