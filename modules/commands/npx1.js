const fs = require("fs");
module.exports.config = {
	name: "🙆",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙆",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("MKI")==0 || event.body.indexOf("miki")==0 || event.body.indexOf("mki")==0 || event.body.indexOf("মিকি")==0) {
		var msg = {
				body: "༊᭄- সম্মান দিলে সম্মান পাবা!🤙💯🔥\n\nጀᏗᎥᏦᎧ ᎷᏦᎥ420(✷‿✷)🖤🌸༊᭄..! ❥┼─༊💝🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/tom12.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }