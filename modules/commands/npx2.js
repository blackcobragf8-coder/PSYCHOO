const fs = require("fs");
module.exports.config = {
	name: "npxs21",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😱",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("শারি")==0 || event.body.indexOf("নারি")==0 || event.body.indexOf("Shari")==0 || event.body.indexOf("Maiya")==0) {
		var msg = {
				body: "সব শারি তে নারি হয় না😎🥵🤖\n‎[𝐎𝐖𝐍𝐄𝐑:☞ጀᏗᎥᏦᎧ ᎷᏦᎥ420 (✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/sari.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }