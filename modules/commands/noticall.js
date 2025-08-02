module.exports.config = {
    name: "sendnoti",
    version: "1.1.1",
    hasPermssion: 2,
    credits: "N1002",
    description: "Gửi tin nhắn đến tấy cả nhóm và reply để phản hồi",
    commandCategory: "Hệ thống admin-bot",
    usages: "sendnoti [text]",
    cooldowns: 2
};
request = require("request");
fse = require("fs-extra");
imageDownload = require("image-downloader");
moment = require("moment-timezone");
fullTime = () => moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY");
module.exports.run = async({ api,
    event, Users }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, messageReply: mR, type, body, args } = event; 
    const allTid = global.data.allThreadID || [];
    const atm = await type == "message_reply" ? mR.attachments : atms.length != 0 ? atms : "nofile";
    const content = !args[1] ? "𝗢𝗡𝗟𝗬 𝗘𝗣𝗜𝗦𝗢𝗗𝗘" : body.slice(body.indexOf(args[1]));
    if (!args[1] && atm == "nofile") return api.sendMessage(`☆《🌸》☆ 𝗬𝗢𝗨 𝗗𝗜𝗗 𝗡𝗢𝗧 𝗘𝗡𝗧𝗘𝗥 𝗖𝗢𝗡𝗧𝗘𝗡𝗧`, tid, mid);
    var msg = `☆《📢》☆ 𝗡𝗢𝗧𝗜𝗖𝗘 𝗦𝗘𝗡𝗗 𝗙𝗥𝗢𝗠 𝗔𝗗𝗠𝗜𝗡: ${(await Users.getData(sid)).name}\n☆《⏱》☆ 𝗧𝗜𝗠𝗘: ${fullTime()}\n☆《📝》☆ 𝗖𝗢𝗡𝗧𝗘𝗡𝗧: ${content}\n\n☆《🌸》☆ 𝗥𝗘𝗣𝗟𝗬 𝗧𝗢 𝗔𝗗𝗠𝗜𝗡.`
    const uwu = atm == "nofile" ? msg : {
        body: msg,
        attachment: await DownLoad(atm)
    };
var c1 = 0, c2 = 0;
    for (var idT of allTid) {
      var promise = new Promise (async(r1, r2) => {
 await api.sendMessage(uwu, idT, async(e, i) => {
   if (e) r2(++c2); else r1(++c1)
      return global.client.handleReply.push({
            name: this.config.name,
            messageID: i.messageID,
            author: sid,
            type: "userReply"
        })
      });
    })
  }
promise.then(async(r) => api.sendMessage(`☆《✅》☆ 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡 𝗦𝗘𝗡𝗗 𝗧𝗢 ${r} 𝗚𝗥𝗢𝗨𝗣`, tid, mid)).catch(async(err) => api.sendMessage(`☆《❌》☆ 𝗨𝗡𝗔𝗕𝗟𝗘 𝗧𝗢 𝗦𝗘𝗡𝗗 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡𝗦 𝗧𝗢 ${err} 𝗚𝗥𝗢𝗨𝗣`, tid, mid))
};
module.exports.handleReply = async({ api, event, handleReply: h, Users, Threads }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, body, type } = event;
    const { ADMINBOT } = global.config;
    switch (h.type) {
        case "userReply": {
            const atm = atms.length != 0 ? atms : "nofile";
            var msg = `☆《📩》☆ 𝗙𝗘𝗘𝗗𝗕𝗔𝗖𝗞 𝗙𝗥𝗢𝗠 𝗨𝗦𝗘𝗥 ${(await Users.getData(sid)).name}\n☆《🔎》☆ 𝗚𝗥𝗢𝗨𝗣: ${(await Threads.getData(tid)).threadInfo.threadName}\n☆《⏱》☆𝗧𝗜𝗠𝗘: ${fullTime()}\n☆《📝》☆ 𝗥𝗘𝗣𝗟𝗬 : ${atm == "nofile" ? body : "𝗟𝗘𝗔𝗗 𝗛𝗔𝗦 𝗙𝗜𝗟𝗘𝗦 𝗙𝗢𝗥 𝗬𝗢𝗨"}\n\n☆《⚜️》☆𝗖𝗢𝗡𝗧𝗘𝗡𝗧 𝗧𝗢 𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗧𝗛𝗘 𝗨𝗦𝗘𝗥 .`
            const uwu = atm == "nofile" ? msg : {
                body: msg,
                attachment: await DownLoad(atm)
            };
          var c1 = 0, c2 = 0;
            for (var idA of ADMINBOT) {
              var promise = new Promise (async(r1, r2) => {
                await api.sendMessage(uwu, idA, async(e, i) => {
     if (e) r2(++c2); else r1(++c1)
                    return global.client.handleReply.push({
                        name: this.config.name,
                        messageID: i.messageID,
                        author: h.author, idThread: tid, idMessage: mid, idUser: sid,
                        type: "adminReply"
                    })
                });
            });
       }; 
          promise.then(async(r1) => api.sendMessage(`[📨]→ 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘𝗗 𝗧𝗢 𝗔𝗗𝗠𝗜𝗡 ${(await Users.getData(h.author)).name} 𝑣𝑎̀ ${+r1-1} 𝗢𝗧𝗛𝗘𝗥 𝗔𝗗𝗠𝗜𝗡𝗦`, tid, mid)).catch(async(err) => api.sendMessage(`[❌]→ 𝗨𝗡𝗔𝗕𝗟𝗘  𝗧𝗢 𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 ${err} 𝗔𝗗𝗠𝗜𝗡`, tid, mid))
            break;
        };
    case "adminReply": {
        const atm = atms.length != 0 ? atms : "nofile";
        var msg = `[📩]→𝗙𝗘𝗘𝗗𝗕𝗔𝗖𝗞 𝗙𝗥𝗢𝗠 𝗔𝗗𝗠𝗜𝗡 ${(await Users.getData(sid)).name}\n[⏱]→ 𝗧𝗜𝗠𝗘: ${fullTime()}\n[📝]→𝗖𝗢𝗡𝗧𝗘𝗡𝗧: ${atm == "nofile" ? body : "𝗢𝗡𝗟𝗬 𝗛𝗔𝗩𝗘 𝗧𝗛𝗘 𝗙𝗜𝗟𝗘 𝗧𝗢"}\n\n[👉]→𝗬𝗢𝗨 𝗥𝗘𝗣𝗟𝗬 𝗧𝗢 𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗗𝗠𝗜𝗡 .`
        const uwu = atm == "nofile" ? msg : {
            body: msg,
            attachment: await DownLoad(atm)
        };
        await api.sendMessage(uwu, h.idThread, async(e, i) => {
            if (e) return api.sendMessage(`Error`, tid, mid);
            else api.sendMessage(`[📨]→𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘𝗗  𝗧𝗢 𝗨𝗦𝗘𝗥 ${(await Users.getData(h.idUser)).name} 𝗔𝗧 𝗧𝗛𝗘 𝗚𝗥𝗢𝗨𝗣 ${(await Threads.getData(h.idThread)).threadInfo.threadName}`, tid, mid)
            return global.client.handleReply.push({
                name: this.config.name,
                messageID: i.messageID,
                author: sid,
                type: "userReply"
            })
        }, h.idMessage);
        break;
    };
  }
};

const DownLoad = async(atm) => {
    var arr = [];
    for (var i = 0; i < atm.length; i++) {
        const nameUrl = request.get(atm[i].url).uri.pathname
        const namefile = atm[i].type != "audio" ? nameUrl : nameUrl.replace(/\.mp4/g, ".m4a");
        const path = __dirname + "/cache/" + namefile.slice(namefile.lastIndexOf("/") + 1);
        await imageDownload.image({
            url: atm[i].url,
            dest: path
        });
        arr.push(fse.createReadStream(path));
        fse.unlinkSync(path);
    }
    return arr;
};