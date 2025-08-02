const fs = require("fs");
module.exports.config = {
	name: "npxs15",
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
	if (event.body.indexOf("Valobashar mare xudi")==0 || event.body.indexOf("Ex er mare xudi")==0 || event.body.indexOf("365")==0 || event.body.indexOf("👿")==0) {
		var msg = {
				body: "ভালোবাসার মারে ৩৬৫ দিন ষুদিシ︎__💚🌻༅🌸💔\n ጀᏗᎥᏦᎧ ᎷᏦᎥ420(✷‿✷)",
				attachment: fs.createReadStream(__dirname + `/noprefix/voice1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }