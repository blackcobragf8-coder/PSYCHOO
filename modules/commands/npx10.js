const fs = require("fs");
module.exports.config = {
	name: "npxlove1099",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🥰",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nobin")==0 || event.body.indexOf("Jhamela")==0 || event.body.indexOf("Tor mar voda")==0 || event.body.indexOf("xall")==0 || event.body.indexOf("jhamela")==0 || event.body.indexOf("💯")==0 || event.body.indexOf("Put")==0 ||
event.body.indexOf("Fut")==0 || event.body.indexOf("Taxt")==0) {
		var msg = {
				body: "TAXT আবালের বাচ্চা আমার বস \n(✷‿✷)\n তর রিয়েল আব্বু লাগে বুজলি🤟💯🤣",
				attachment: fs.createReadStream(__dirname + `/noprefix/pushpa.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💯", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }