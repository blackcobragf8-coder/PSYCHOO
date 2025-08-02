module.exports.config = {
    name: "help",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zia_Rein",
    description: "important notes",
    commandCategory: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`╔==============╗\n𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 𝐋𝐈𝐒𝐓\n╚==============╝\n═════════════════════════👉1.all
👉2.box info
👉3.resend
👉4.fbuser -fbuser id remove
👉5.kick - Member Remove
👉6.antiout - Auto Added Member
👉7.antiflood -
👉8.antijoin - Join Noti
👉9.autoreply - Set auto reply
👉10.unsend - Check Unsend Message
👉11.boxemoji - set emoji
👉12.boximage - set image
👉13.setall - Onlyadmin setting.
👉14. advice - উক্তি

🌀🔹Category ISLAM 🔸

👉1.হাদিস - হাদিস বাংলা
👉2.Hadis - বাংলা পিক হাদিস,
👉3.Dua - ইসলামিক প্রয়োজনীয় দোয়া সমূহ,
👉4.HZALI - হজরত আলি (রাঃ) এর উক্তি.
👉5.Death - 😓😭

🌀🔹Category: All User Used Command🔸

👉1.uid - আপনার নিজের আইডি Cord
👉2.trans - Language Translator
👉3.search - Google Searcher
👉4.imagesearch - 🔎 Searching for image...
👉5.jail - জেল খানা.
👉6.idbox - Box number 
👉7.kiss - চুম্মা চুম্মি🤫
👉8.marry - শুভ বিবাহ 😘
👉9.couple - Couple pick
👉10.Love - Love ℅ ♥
👉11.LOVEU- ভালোবাসার উক্তি
👉12.mystery - অলৌকিক শক্তি.
👉13.rip - 😪মরে জাওয়া😓
👉14.setneme - ইউজার নাম চেঞ্জ
👉15.mems - Some Funny Memes
👉16.poop - কাবাবের হাড্ডি.
👉17.Shortlink - Original url: undefined
👉18.spank - Try to use THIS Command Funny.
👉19.ss - full Link Page  Screenshots
👉20.vb - Bangla Voice
👉21.ve - English Voice
👉22.math - Solve Mathematics
👉23.covid - For try Again.
👉24.movie - All information.
👉25.pic - Pic search 
👉26.rname - Random Nicknames

🌀🔸Category: Fun Post🔹

👉1.toilet - Funny Post ওয়াশরুম.
👉2.Trump - Twitter funny post
👉3.zuck - Zuckerberg Funny post
👉4.mark - Mark Zuckerberg  Comment
👉5.poutine - আমার ছোট ভাই পুতিন এর সাথে মিটিং.
👉6.Obama - Twitter Funny Post
👉7.Kader - Facebook post Obaidul Kader
👉8.lexi - Lexi Lore funny post
👉9.phub - Post the content of the comment on ponhub
👉10.Mia - Mia khalifa Fun post
👉11.Sunny - sunny leyon Fun post
👉12.sefuda - sefatullal Fun post

🌀🔸Category: Cover Making 🔹

👉1.fbcover - Facebook cover mack
👉2.fbcover2 - Facebook cover mack 2
👉3.Card - simply Parsonal Card

🌀🔹Category: Music Player & Video Downloader🔸

👉1.tiksearch - [Tiktok] Enter the character to search for! Song artist name.
👉2.yt2mp3 - YouTube to Mp3
👉3.yt2mp4 - YouTube to Mp4
👉4.ytsearch - YouTube Video Search
👉5.video - Yt Video
👉6.Song - Y26t Song all
👉7.lyrics - ♩ গান এর লিরিক্স.
👉8.sing - yt song
👉9.fbvideo - facebook video downlood.\n\n╔══════╗\n কি ভাবে 𝗨𝘀𝗲 করবেন \n╚══════╝\n𝙀𝙭𝙖𝙢𝙥𝙡𝙚⚛》》》/hot\n/song\n/quran《《《⚛\n===================================\n☆𝗧𝗼𝘁𝗮𝗹 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀:480\n===================================\n╔══════════╗\n   𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥\n╚══════════╝\n╔══════════════╗\n 𝐌𝐀𝐓𝐀𝐋 𝐓𝐎𝐌(✷‿✷)\n╚══════════════╝\n\n《《《⚛𝗢𝗪𝗡𝗘𝗥 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞⚛》》《\nhttps://www.facebook.com/varjin.pola.sexy》`);
   var ZiaRein = [
"https://i.imgur.com/huumLca.jpg",
"https://i.imgur.com/EcryTGh.jpg",
"https://i.imgur.com/tu12HrQ.jpg",
"https://i.imgur.com/Vx25FHG.jpg",
"https://i.imgur.com/NcbC8Pn.jpg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
