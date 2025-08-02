const fs = require("fs");
module.exports.config = {
	name: "pompom",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Rahad", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "pompom",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("পমপম")==0 || event.body.indexOf("পম পম")==0 || event.body.indexOf("Pompom")==0 || event.body.indexOf("Pom pom")==0) {
		var msg = {
				body: "পম পম দেখো আর হাত মারো বক্তরা 🤤😋🥵\n╔═❖•ೋ°°ೋ•❖═╗\n    ---» 𒄬 𓆩⃝𝐌𝐗𓆪᭄𝐓𝐎𝐌𓆩⁽๏̬̬̬̬̽̽̈⁾𓆪』 ---\n╚═❖•ೋ°°ೋ•❖═╝",
				attachment: fs.createReadStream(__dirname + `/noprefix/pompom.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }