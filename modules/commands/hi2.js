module.exports.config = {
    name: "hi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kanichi",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "Hi",
        "request": "Hlw"
    }
};
/*module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hi.gif")) request("https://i.imgur.com/shIPtZI.gif").pipe(fs.createWriteStream(dirMaterial + "hi.gif"));
} */
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `কি হইছে এতো Hi Hello করিস কেন😒 ${name},চলো চিপায় যাই🤖🙈`,
                attachment: fs.createReadStream(__dirname + `/noprefix/hi.gif`)
            }	
    if (event.body.toLowerCase() == "hi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Hello"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
   if (event.body.toLowerCase() == "Helo"){
        return api.sendMessage(msg,event.threadID,event.messageID);} 
 if (event.body.toLowerCase() == "Hlw"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
   if (event.body.toLowerCase() == "Hi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
   if (event.body.toLowerCase() == "Ki koro"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Kmn aso"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Kemon aso"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == " Hay"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Use the wrong way and then lie",event.threadID)
                                     }