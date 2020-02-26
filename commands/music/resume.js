module.exports = {
    name : "resume",
    category: "music",
    description : "Resume currently playing music",

    run : async(client, message) => {
      
      const serverQueue = message.client.queue.get(message.guild.id);
      const memberChannel = message.member.voiceChannel;
      
      if (!serverQueue)
      return message.reply("\`\`\`There is nothing playing.\`\`\`").catch(console.error);

      if (!memberChannel)
      return message.reply("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);

      if (memberChannel != serverQueue.channel)
      return message.reply("\`\`\`You need to be in same voice channel!\`\`\`").catch(console.error);
    
      if (!serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return serverQueue.textChannel.send(`\`\`\`${message.author} ▶ resumed the music!\`\`\``).catch(console.error);
    } else {
      return message.reply("\`\`\`There is nothing playing.\`\`\`").catch(console.error);
    }
  }
};