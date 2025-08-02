const fs = require("fs");
module.exports.config = {
	name: "gud1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs15",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ভুদা")==0 || event.body.indexOf("Xudi")==0 || event.body.indexOf("Voda")==0 || event.body.indexOf("🥵")==0) {
		var msg = {
				body: "‎[𝐎𝐖𝐍𝐄𝐑:☞𝚇𝙰𝙸𝙺𝙾 𝙼𝙺𝙸420 (✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/gud1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }