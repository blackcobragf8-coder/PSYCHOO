module.exports.config = {
	name: "cute",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "TAHEDUl VAIYA",
	description: "Random baby video",
	commandCategory: "media",
	usages: "",
	cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs": ""
  }
};

const videoDATA = "https://videos-api--xaikon4y4n.repl.co/video/baby";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/nayan')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/nayan');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/nayan').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/nayan/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(videoDATA)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.data), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/nayan/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          api.sendMessage({
            body: "☆《CUTE BABBY》☆",
            attachment: global.nodemodule["fs"].createReadStream(path)
          }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("Something went wrong...", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("Something went wrong...", event.threadID, event.messageID);
    return;
  });

  return;
  }