module.exports.config = {
    name: "💝",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
    commandCategory: "othre",
    usages: " please @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি জ্ঞান দিতে চান এমন 1 জনকে @ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("কলিজা মিকি এর ভালোবাসা নাও🖤🥀");
setTimeout(() => {a({body: "তোমার মতো মানুষ খুব কমই দেখেছি 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "তোমার জীবনে সফলতা কামনা করি 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "কখনো মন খারাপ করবা না 🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "যে তোমাকে বুঝতে চায় না তাকে ভুলে যাও 💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "কারো সাথে সম্পর্ক স্থাপন যদি কষ্ট-দায়ক হয় তবে একাকীত্ব জীবন অনেক ভালো!" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "depression এর মাইরে চু*** দাও 🤬 " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Ex এর গুষ্টি সু*** দাও 🤬" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "অনুগ্রহ করে নিজের আবেগ নতুন করে জাগ্রত করুন 🤟" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "ভুলে যাও সেই 12 ভাতারির কথা 🤝" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "নিজের যত্ন নিন সুস্থ থাকুন 💉।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "সর্বদা সুন্দর ব্যবহার করুন 😘।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "পৃথিবীর মায়া ত্যাগ করা থেকে বিরত থাকুন ✋" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: " সর্বশেষ নামাজ 🤲 পড়ুন ধর্মীয় অনুশীলন করুন সকল দুশ্চিন্তা থেকে মুক্তি পান" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~ বলদা তোকে জ্ঞান দেওয়া কমপ্লিট 🤖")}, 39000);
setTimeout(() =>{a("সুখে থেকো বন্ধু শব সময় দোয়া করি")}, 42000);



  
  }