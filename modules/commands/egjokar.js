const fs = require("fs");
module.exports.config = {
	name: "🤡",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🤡",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😶‍🌫️")==0 || event.body.indexOf("🌼")==0 || event.body.indexOf("🥀")==0 || event.body.indexOf("🌺")==0) {
		var msg = {
				body: "🪐🧸!< 𝘿𝙤𝙣'𝙩 💝𝘽𝙚𝙇𝙡𝙚𝙫𝙀🌈🌠𝙞𝙉\n\n𝙏𝙚𝙈𝙥𝙤𝙧𝘼𝙧𝙔 𝙏𝙝𝙄𝙣𝙂𝙨<!\n\n 				_সম্পর্কটা কিছুদিনের হলেও🐰\n\n _তাকে ছাড়া প্রতিটা মুহূর্ত খুব শূন্য লাগে! >)🌧️🖤\n\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐀𝐓𝐀 𝐓𝐎𝐌 (✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/joker.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }