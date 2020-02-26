module.exports = {
    name : "stop",
    aliases : ["dc","leave"],
    category: "music",
    description : "Stops the music",

    run : async(client, message) => {
      const serverQueue = message.client.queue.get(message.guild.id);
      const memberChannel = message.member.voiceChannel;
      
      if (!serverQueue)
      return message.reply("\`\`\`There is nothing playing.\`\`\`").catch(console.error);

      if (!memberChannel)
      return message.reply("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);

      if (memberChannel != serverQueue.channel)
      return message.reply("\`\`\`You need to be in same voice channel!\`\`\`").catch(console.error);
      
      serverQueue.songs = [];
      serverQueue.connection.dispatcher.end();
      serverQueue.textChannel.send(`\`\`\`${message.member.displayName} ⏹ stopped the music!\`\`\``).catch(console.error);
    }
};