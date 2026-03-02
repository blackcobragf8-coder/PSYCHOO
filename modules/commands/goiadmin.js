module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100067976303515","100025078339997","100025078339997") {
    var aid = ["100067976303515","100025078339997","100025078339997"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["য়ামাল বস কে এতো ডাকো কেন😒, ভালো টালো বাসো নাকি🤭", "য়ামাল মিকি বস কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", " বস এখন রুবিনার সাথে কথা বলায় বেস্তো আছে যা বলার আমাকে বলো🫣", "যা বলার আমাকে বলো য়ামাল মিকি বস এখন বিজি আছে🥰","বস এখন গুটি খাইতে চিপায় আছে🤭🙈🤖"," মিকি বস কই থুমি থুমারে এক বলদে ডাকে😁🤣"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }