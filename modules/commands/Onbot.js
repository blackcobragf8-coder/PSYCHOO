module.exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "HTHB",
	description: "Bật Bot.",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("BOSS_ আমি এখানে-!🦾🤖 ",event.threadID, () =>process.enter(0))
