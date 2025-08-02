module.exports.config = {
	name: "off",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Off Bot",
	commandCategory: "System",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("মামা থাকো আমি একটু মামির চিপা থেকে ঘুরে আসি😁🙈",event.threadID, () =>process.exit(0))