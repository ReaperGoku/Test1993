module.exports = {
    name : "loop",
    category: "music",
    description : "Toggle music loop",

    run : async(client, message, args) => {
        const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("There is nothing playing.").catch(console.error);

    // toggle from false to true and reverse
    serverQueue.loop = !serverQueue.loop;
    return serverQueue.textChannel
      .send(`Loop is now ${serverQueue.loop ? "**on**" : "**off**"}`)
      .catch(console.error);
    }
};