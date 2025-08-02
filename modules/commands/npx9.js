const fs = require("fs");
module.exports.config = {
	name: "npx9",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Ff",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Game")==0 || event.body.indexOf("Ff")==0 || event.body.indexOf("Free")==0 || event.body.indexOf("ff")==0) {
		var msg = {
				body: "💯🔥\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐀𝐓𝐀 𝐓𝐎𝐌 (✷‿✷)☜🖤🌸༊💝🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/free12.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }