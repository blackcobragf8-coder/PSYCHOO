module.exports.config = {
  name: "vabi",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["mahir"] !== "undefined" && thread["mahir"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    api.sendMessage(data, threadID, messageID)
  }
  //reply
  var msg = {
    body: `_ভাবি ভাবি কইরো না দুধ খাবা নাকি😋`
  }
  // Gọi bot
  var arr = ["vabi", ""];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "hi thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["parvej"] == "undefined" || data["parvej"] == true) data["parvej"] = false;
  else data["parvej"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["parvej"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
      }