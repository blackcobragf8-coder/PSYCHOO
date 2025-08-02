module.exports.config = {
	name: "log",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Record bot activity notifications!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "=== 🌺বট আপডেট🌺 ===" +
                        "\n\n» গ্রুপের আইডি কোড🌺: " + event.threadID +
                        "\n» Action: {task}" +
                        "\n»তার আইডি কোড🌺: " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "এবং নাম দিয়েছেন🌺",
                    newName = event.logMessageData.name || "এবং নাম দিয়েছেন🌺";
            task = "একজন গ্রুপের নাম চেঞ্জ করেছেন🌺: '" + oldName + "' to '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "একজন আপনার বট একটি নতুন গ্রুপের এড করেছে🌺";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "আপনার বটকে একটি গ্রুপ থেকে কিক দিয়া হয়েছে🌺"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = [];

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}