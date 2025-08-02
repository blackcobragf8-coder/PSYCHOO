module.exports.config = {
	name: "ifter",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "TOM",
	description: "",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("March 30, 2023 12:16:00") - Date.parse(new Date());
    const seconds = Math.floor( (u/1000) % 70 );
    const minutes = Math.floor( (u/1000/50) % 50 );
    const hours = Math.floor( (u/(1000*50*50)) % 24 );
    const days = Math.floor( u/(1000*50*50*24) );

    return api.sendMessage(`🌙𝙍𝙖𝙢𝙖𝙙𝙖𝙣 𝙈𝙪𝙗𝙖𝙧𝙖𝙠 📿🤲 \n\nআজকের ইফতার শুরু হতে আর মাগরিবের আযান এর সময় হতে বাকি আছে  ❤ 🥰\n» ${days} দিন ${hours} ঘণ্টা ${minutes} মিনিট ${seconds} সেকেন্ড«\n💗ইফতার ঢাকার সময় অনুযায়ী সিলেক্ট করা \n*•.¸♡ \nইফতারের দোয়া\n\nبِسْمِ الله - اَللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ وَ اَفْطَرْتُ \n\nউচ্চারণ: বিসমিল্লাহি আল্লাহুম্মা লাকা সুমতু, ওয়া আলা রিযক্বিকা আফত্বারতু \n\nঅর্থ: আল্লাহর নামে (শুরু করছি); হে আল্লাহ! আমি তোমারই জন্যে রোজা রেখেছি এবং তোমারই দেওয়া রিজিক দ্বারা ইফতার করছি। (আবু দাউদ, মিশকাত)♡¸.•*\n\n𝗖𝗼𝗱𝗲 𝗕𝘆:\n≼≽𝐌𝐀𝐓𝐀𝐋 𝐓𝐎𝐌(✷‿✷)`, event.threadID, event.messageID);
}