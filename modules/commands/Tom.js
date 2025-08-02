const fs = require("fs");
module.exports.config = {
	name: "sad11",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sad11",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🥲")==0 || event.body.indexOf("😢")==0 || event.body.indexOf("😞")==0 || event.body.indexOf("😓")==0) {
		var msg = {
				body: "*\n\nমানুষ কথা দেয় শুধুমাত্র মুহূর্ত সুন্দর করার জন্য..!🙂😊\n\n𝐌𝐀𝐓𝐀𝐋 𝐓𝐎𝐌(✷‿✷)",
				attachment: fs.createReadStream(__dirname + `/noprefix/sad11.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }