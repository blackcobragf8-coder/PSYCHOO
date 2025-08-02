const fs = require("fs");
module.exports.config = {
	name: "Rahad",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Rahad", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "byeall",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bye")==0 || event.body.indexOf("Good bye")==0 || event.body.indexOf("by")==0 || event.body.indexOf("Bye")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨🐰🍒🍭– 𝗘𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗮𝘀 𝗮𝗻 𝗮𝗱𝗱𝗶𝗰𝘁𝗶𝗼𝗻,💜🌺 -- 𝗮𝗻𝗱 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗺𝘆 𝗮𝗱𝗱𝗶𝗰𝘁𝗶𝗼𝗻-?🖇️✨ \n\n_প্রত্যেকেরই একটি নেশা আছে,🤍🦋💫 আর আমার সেই নেশাটাই আপনি.!🔐😇🖤\n\n༊❥অ্ঁপ্রি্ঁয়্ঁ মি্ঁকি্ঁ ত্যা্ঁহ্ঁ!৪২০...❉͜͡(✷‿✷)",
				attachment: fs.createReadStream(__dirname + `/noprefix/byeall.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }