module.exports = {
    name : "queue",
    aliases : ["q"],
    category: "music",
    description : "Show the music queue and now playing.",

    run : async(client, message) => {

      const serverQueue = message.client.queue.get(message.guild.id);
      const memberChannel = message.member.voiceChannel;

      if (!serverQueue) return message.reply("\`\`\`There is nothing playing.\`\`\`").catch(console.error);

      if (!memberChannel)
      return message.reply("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);

      if (memberChannel != serverQueue.channel)
      return message.reply("\`\`\`You need to be in same voice channel!\`\`\`").catch(console.error);
    
      return message
      .reply("\n"+
      `\`\`\`📃 **Song queue**
      ${serverQueue.songs.map((song, index) => index + 1 + ". " + song.title).join("\n")}
      Now playing: ${serverQueue.songs[0].title}
      \`\`\``,
      { split: true }
      )
      .catch(console.error);
    }
};