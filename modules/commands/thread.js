module.exports.config = {
	name: "thread",
	version: "0.0.3",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Ban or unblock a group",
	commandCategory: "system",
	usages: "[unban/ban/search] [ID or text]",
	cooldowns: 5
};

module.exports.handleReaction = async ({ event, api, Threads, handleReaction }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	switch (handleReaction.type) {
		case "ban": {
			const data = (await Threads.getData(handleReaction.target)).data || {};
			data.banned = 1;
			await Threads.setData(handleReaction.target, { data });
			global.data.threadBanned.set(parseInt(handleReaction.target), 1);
			api.sendMessage(`[${handleReaction.target}] Successfully granted!`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		case "unban": {
			const data = (await Threads.getData(handleReaction.target)).data || {};
			data.banned = 0;
			await Threads.setData(handleReaction.target, { data });
			global.data.threadBanned.delete(parseInt(handleReaction.target), 1);
			api.sendMessage(`[${handleReaction.target}] Successfully unbanned`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		default:
			break;
	}
}

module.exports.run = async ({ event, api, args, Threads }) => {
    let content = args.slice(1, args.length);
	switch (args[0]) {
		case "ban": {
			if (content.length == 0) return api.sendMessage("You need to enter the thread ID you want to ban!", event.threadID);
			for (let idThread of content) {
				idThread = parseInt(idThread);
				if (isNaN(idThread)) return api.sendMessage(`[${idThread}] not IDthread!`, event.threadID);
				let dataThread = (await Threads.getData(idThread.toString()));
				if (!dataThread) return api.sendMessage(`[${idThread}] thread does not exist in database!`, event.threadID);
				if (dataThread.banned) return api.sendMessage(`[${idThread}] Already banned`, event.threadID);
				return api.sendMessage(`[${idThread}] Do you want to ban this thread?\n\nPlease react to this message to ban!`, event.threadID, (error, info) => {
					global.client.handleReaction.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "ban",
						target: idThread
					});
				})
			}
			break;
		}
		case "unban": {
			if (content.length == 0) return api.sendMessage("আপনি ব্যান করতে চান থ্রেড আইডি লিখতে হবে!", event.threadID);
			for (let idThread of content) {
				idThread = parseInt(idThread);
				if (isNaN(idThread)) return api.sendMessage(`[${idThread}] থ্রেড আইডি নেই!`, event.threadID);
				let dataThread = (await Threads.getData(idThread)).data;
				if (!dataThread) return api.sendMessage(`[${idThread}] থ্রেড ডাটাবেসে বিদ্যমান নেই!`, event.threadID);
				if (dataThread.banned != 1) return api.sendMessage(`[${idThread}] আগে নিষিদ্ধ হয়নি`, event.threadID);
				return api.sendMessage(`[${idThread}] আপনি এই থ্রেডটি নিষিদ্ধ করতে চান?\n\nনিষেধ করতে দয়া করে এই বার্তাটিতে প্রতিক্রিয়া জানান!`, event.threadID, (error, info) => {
					global.client.handleReaction.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "unban",
						target: idThread
					});
				})
			}
			break;
		}
		case "search": {
			let contentJoin = content.join(" ");
			let getThreads =  (await Threads.getAll(['threadID', 'name'])).filter(item => !!item.name);
			let matchThreads = [], a = '', b = 0;
			getThreads.forEach(i => {
				if (i.name.toLowerCase().includes(contentJoin.toLowerCase())) {
					matchThreads.push({
						name: i.name,
						id: i.threadID
					});
				}
			});
			matchThreads.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchThreads.length > 0) ? api.sendMessage(`এখানে মিল আছে:\n${a}`, event.threadID) : api.sendMessage("আপনার অনুসন্ধানের উপর ভিত্তি করে কোন ফলাফল পাওয়া যায়নি!", event.threadID);
			break;
		}
		default: {
			return global.utils.throwError(this.config.name, event.threadID, event.messageID)
		}
	}
}
