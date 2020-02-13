module.exports = {
    name : "queue",
    aliases : ["q"],
    category: "music",
    description : "Show the music queue and now playing.",

    run : async(client, message, args) => {
        const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("There is nothing playing.").catch(console.error);
    return message
      .reply(
        `📃 **Song queue**

${serverQueue.songs.map((song, index) => index + 1 + ". " + song.title).join("\n")}

Now playing: **${serverQueue.songs[0].title}**
		`,
        { split: true }
      )
      .catch(console.error);
    }
};