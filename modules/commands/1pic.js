 const API = "https://logo.callback32.repl.co/api/textpro?number=1&text="
module.exports.config = {
	name: "graf1",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MKI",
	description: "logo",
	commandCategory: "text maker",
	usages: "...",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
if (this.config.credits != "MR CHAND") {
        console.log("[ WARNING ] » Change credited Fuck You By MKI :p  :) "+ global.config.BOTNAME + ' credits modules "' + this.config.name + '"');
        return api.sendMessage("× [ WARNING ] × LOL CREDIT CHANGED FUCK YOUR SISTER BY MKI 😹🖐🏻" , event.threadID, event.messageID);
}
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("ᶜ🍂ᵗ 𝐏𝐋𝐄𝐀𝐒𝐄 ❺ 𝐒𝐄𝐂𝐎𝐍𝐃𝐒 𝐖𝐀𝐈𝐓 ᶜ🍂ᵗ", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: "💯𝐄𝐃𝐈𝐓 𝐁𝐘 -𝐗𝐀𝐈𝐊𝐎 𝐌𝐊𝐈💯", attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};