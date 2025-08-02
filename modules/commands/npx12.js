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
	if (event.body.indexOf("😅")==0 || event.body.indexOf("😄")==0 || event.body.indexOf("😃")==0 || event.body.indexOf("😀")==0) {
		var msg = {
				body: "_💥🏡𝐎𝐧𝐞 𝐝𝐚𝐲 𝐢 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐥𝐨𝐬𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐝𝐚𝐫𝐤 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐤𝐧𝐨𝐰𝐢𝐧𝐠...!'😥😅\n\n___💥🦋হটাৎ কোন একদিন অজান্তে অন্ধকার এ হারিয়ে যাবো....!🙃🥀\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐀𝐓𝐀 𝐓𝐎𝐌 (✷‿✷)",
				attachment: fs.createReadStream(__dirname + `/noprefix/taka1.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }