  const fs = require("fs");
module.exports.config = {
	name: "taka",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "taka",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Taka")==0 || event.body.indexOf("টাকা")==0 || event.body.indexOf("গরিব")==0 || event.body.indexOf("Tk")==0) {
		var msg = {
				body: "টাকা ছাড়া দুনিয়া চলে না",
				attachment: fs.createReadStream(__dirname + `/noprefix/taka.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }