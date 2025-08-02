 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "zillor",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Random Nude Photo Nude is very beautiful and eye-pleasing (Note This is a photo command 18+ Consider Before Using)",
  commandCategory: "use",
  usages: "zillor",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/W4qDPj15/Picsart-22-10-30-21-32-40-706.jpg",
"https://i.postimg.cc/yYcdYnmT/received-688573779024799.jpg",
"https://i.postimg.cc/B6jZWCZH/received-671228684624452.jpg",
"https://i.postimg.cc/QCj69fBW/received-5718541054875676.jpg",
"https://i.postimg.cc/D0zr3HJ5/received-574069544496263.jpg",
"https://i.postimg.cc/286s056L/IMG-20221026-001247.jpg",
"https://i.postimg.cc/Kj6Ldznr/received-511151490919369.jpg",
"https://i.postimg.cc/LXY8rMmm/received-417097453961072.jpg",
  ];

  
   var callback = () => api.sendMessage({body:`কি আমারে খুঁজেন?: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };