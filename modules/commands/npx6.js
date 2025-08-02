const fs = require("fs");
module.exports.config = {
	name: "misty",
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
	if (event.body.indexOf("Misty")==0 || event.body.indexOf("Misti")==0 || event.body.indexOf("মিষ্টি")==0 || event.body.indexOf("@Megher Alo")==0) {
		var msg = {
				body: "🌺!!༄᭄༊___দূরত্ব কিছুই না যদি___🦋●\n🌻༄᭄༊__তোমার অনূভুতি\nআমার জন্য সত্যি হয়-🥀𖠺᭄🥀\n‎[𝐎𝐖𝐍𝐄𝐑:☞ጀᏗᎥᏦᎧ ᎷᏦᎥ420 (✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/misti3.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }