const fs = require("fs");
module.exports.config = {
	name: "😚",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😚",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😙")==0 || event.body.indexOf("🥴")==0 || event.body.indexOf("😗")==0 || event.body.indexOf("😬")==0) {
		var msg = {
				body: "🦋🍀\n\n        ツ●───༊᭄࿐❥\n– সময় আমাদের জীবনের কোনো কিছু নষ্ট করে না....!🙂🌼\n– শুধু শিখিয়ে দিয়ে যায় বাস্তবতা কি...! 🙂✌️\n\n               🥀🌺\n\n\n[𝐎𝐖𝐍𝐄𝐑:»𒄬 𓆩⃝𝐌𝐀𝐓𝐀𝐋𓆪᭄𝐓𝐎𝐌𓆩⁽๏̬̬̬̬̽̽̈⁾𓆪』",
				attachment: fs.createReadStream(__dirname + `/noprefix/bang.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }