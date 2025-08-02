module.exports.config = {
  name: "matal",
  version: "1.0.3",
  hasPermssion: 2,
  credits: "Thiệu Trung Kiên",
  description: "Command Prompt",
  commandCategory: "nsfw",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.languages = {
  vi: {
    returnResult: "Đây là kết quả phù hợp: \n",
    returnNull: "Không tìm thấy kết quả dựa vào tìm kiếm của bạn!"
  },
  en: {
    returnResult: "This is your result: \n",
    returnNull: "There is no result with your input!"
  }
}, module.exports.handleEvent = async function({
  api: e,
  event: n,
  args: a,
  Users: s,
  Threads: t
}) {
  const r = require("moment-timezone");
  var o = r.tz("Asia/Manila").format("HH:mm:ss"),
    h = global.config.ADMINBOT,
    i = r.tz("Asia/Manila").format("ss");
  if (o == `12:00:${i}` && i < 6)
    for (let n of h) setTimeout((() => e.sendMessage(`〉Bây giờ là: ${o}\n[❗] Bot will proceed to restart !`, n, (() => process.exit(1)))), 1e3)
}, module.exports.run = async function({
  api: e,
  event: n,
  getText: a,
  args: s
}) {
  if (!s[0]) return e.sendMessage("🛠 | এখানে বট এর সম্পূর্ণ সেটিংস আছে | 🛠\n=== সেটিংস পরিচালনা করুন ===\n[1] উপসর্গ।\n[2] বট নাম।\n[3] প্রশাসকদের তালিকা।\n[4] ভাষা।\n[5] স্বতঃ-পুনঃসূচনা .\n=== অপারেশন ম্যানেজমেন্ট ===\n[6] আপডেটের জন্য চেক করুন।\n[7] নিষিদ্ধ ব্যবহারকারীদের তালিকা পান।\n[8] নিষিদ্ধ গ্রুপের তালিকা পান।\n[9] পাঠান। সকল গ্রুপে বিজ্ঞপ্তি।\n[10]। ব্যবহারকারীর নামের মাধ্যমে UID অনুসন্ধান করুন।\n[11]। বক্সের নাম অনুসারে TID বক্স অনুসন্ধান করুন\n[12]। ইমোজি বক্স পরিবর্তন করুন\n[13]। বক্সটির নাম পরিবর্তন করুন\n[14]। তথ্য বাক্স দেখুন\n-> চয়ন করতে, এই বার্তার উত্তর দিন <-", n.threadID, ((e, a) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: a.messageID,
      author: n.senderID,
      type: "choose"
    })
  }), n.messageID)
}, module.exports.handleReply = async function({
  api: e,
  event: n,
  client: a,
  handleReply: s,
  Currencies: t,
  Users: r,
  Threads: o
}) {
  const {
    userName: h
  } = global.data, {
    writeFileSync: i,
    readFileSync: g
  } = global.nodemodule["fs-extra"], d = [];
  switch (l = 1, s.type) {
    case "choose":
      switch (n.body) {
        case "1":
          return e.sendMessage("Prefix của bot là : " + global.config.PREFIX, n.threadID, n.messageID);
        case "2":
          return e.sendMessage("Tên của bot là : " + global.config.BOTNAME, n.threadID, n.messageID);
        case "3": {
          const a = global.config['ADMINBOT'] || []
          var m = [];
          for (const e of a)
            if (parseInt(e)) {
              const n = h.get(e) || await r.getNameUser(e);
              m.push(`${n} - ${e}`)
            } return e.sendMessage(`[Admin] List of all bot operators: \n\n${m.join("\n")}`, n.threadID, n.messageID)
        }
        case "4":
          if ("vi" == global.config.language) return e.sendMessage("Language: Vietnamese", n.threadID, n.messageID);
          "en" == global.config.language && e.sendMessage("Language : English", n.threadID, n.messageID);
          break;
        case "5":
          return e.sendMessage("Bot will restart at 12hours", n.threadID, n.messageID);
        case "6":
          return e.sendMessage("Currently bot is in version : " + global.config.version, n.threadID, n.messageID);
        case "7": {
          const a = global.data.userBanned.keys();
          for (const e of a) {
            const n = global.data.userName.get(e) || await r.getNameUser(e);
            d.push(`${l++}. ${n} \nUID: ${e}`)
          }
          return e.sendMessage(`Currently available ${d.length} users get banned\n\n${d.join("\n")}\n\n`, n.threadID)
        }
        case "8": {
          const a = global.data.threadBanned.keys();
          for (const s of a) return nameT = await global.data.threadInfo.get(s).threadName || "Name does not exist", d.push(`${l++}. ${nameT}\nTID: ${s}`), e.sendMessage(`Currently available ${d.length} banned group\n\n${d.join("\n")}\n\n`, n.threadID)
        }
        break;
      case "9":
        return e.sendMessage("Reply to this message to enter the message you want to send to the groups", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "sendnoti"
          })
        }), n.messageID);
      case "10":
        return e.sendMessage("Reply to this message to enter username", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "getuid"
          })
        }), n.messageID);
      case "11":
        return e.sendMessage("Reply to this message to enter the box name", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "gettidbox"
          })
        }), n.messageID);
      case "12":
        return e.sendMessage("Reply to this message to enter the emoji you want to change", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "emojibox"
          })
        }), n.messageID);
      case "13":
        return e.sendMessage("Reply to this message to enter the box name to change", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "namebox"
          })
        }), n.messageID);
      case "14": {
        require("request");
        let a = await e.getThreadInfo(n.threadID);
        a.participantIDs.length;
        let s = a.participantIDs.length;
        var c = [],
          u = [],
          I = [];
        for (let e in a.userInfo) {
          var D = a.userInfo[e].gender,
            b = a.userInfo[e].name;
          "MALE" == D ? c.push(e + D) : "FEMALE" == D ? u.push(D) : I.push(b)
        }
        var p = c.length,
          y = u.length;
        let t = a.adminIDs.length,
          r = a.messageCount,
          o = (a.nicknames, a.emoji),
          h = a.threadName,
          i = a.threadID,
          g = a.approvalMode;
        var f = 0 == g ? "Turn off" : 1 == g ? "Turn on" : "Kh";
        e.sendMessage(`✨Name: ${h}\n🤖 ID Box: ${i}\n👀 Approve: ${f}\n🧠 Emoji: ${o}\n👉 Information: including ${s} member\n👦Male : ${p} member\n👩‍🦰
Female: ${y} member\nWith ${t} administrators\n🕵️‍♀️ Total number of messages: ${r} tin.\n`, n.threadID)
      }
      }
      break;
    case "sendnoti": {
      var $ = global.data.allThreadID || [];
      let a = await r.getNameUser(n.senderID);
      var M = 1,
        T = [];
      for (const s of $) isNaN(parseInt(s)) || s == n.threadID || (e.sendMessage(`Notice from admin ${a} \n\n` + n.body, s, ((e, n) => {
        e && T.push(s)
      })), M++, await new Promise((e => setTimeout(e, 500))));
      return e.sendMessage(`Successfully sent to : ${M} the group\n\nFailure ${T.length} the group`, n.threadID, n.messageID)
    }
    case "getuid":
      e.getUserID(`${n.body}`, ((a, s) => {
        var m = [];
        for (var t in s) m += `Name : ${s[t].name}\nUID : ${s[t].userID}\n\n`;
        return e.sendMessage(m, n.threadID)
      }));
      break;
    case "gettidbox":
      try {
        const a = n.body || "",
          s = (await o.getAll(["threadID", "threadInfo"])).filter((e => !!e.threadInfo));
        var x = [],
          v = "",
          N = 0;
        s.forEach((e => {
          (e.threadInfo.threadName || "").toLowerCase().includes(a.toLowerCase()) && x.push({
            name: e.threadInfo.threadName,
            id: e.threadID
          })
        })), x.forEach((e => v += `\n${N+=1}. ${e.name} - ${e.id}`)), x.length > 0 ? e.sendMessage(`Result of search : ${v}`, n.threadID) : e.sendMessage("Not found", n.threadID, n.messageID)
      } catch (a) {
        return e.sendMessage(a, n.threadID)
      }
      break;
    case "namebox":
      try {
        return e.setTitle(`${n.body}`, n.threadID, n.messageID), e.sendMessage(`Changed the box name to ${n.body}`, n.threadID)
      } catch (a) {
        return e.sendMessage("Error! An error occurred. Please try again later", n.threadID)
      }
      break;
    case "emojibox":
      try {
        e.changeThreadEmoji(n.body, n.threadID, (() => e.sendMessage(`🔨 The bot successfully changed Emoji to: ${n.body}`, n.threadID, n.messageID)))
      } catch (a) {
        e.sendMessage("Error! An error occurred. Please try again later", n.threadID)
      }
  }
};