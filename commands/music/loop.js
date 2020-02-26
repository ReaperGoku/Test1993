module.exports = {
    name : "loop",
    category: "music",
    description : "Toggle music loop",

    run : async(client, message) => {

      const serverQueue = message.client.queue.get(message.guild.id);
      const memberChannel = message.member.voiceChannel;
      
      if (!serverQueue)
      return message.reply("\`\`\`There is nothing playing.\`\`\`").catch(console.error);

      if (!memberChannel)
      return message.reply("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);

      if (memberChannel != serverQueue.channel)
      return message.reply("\`\`\`You need to be in same voice channel!\`\`\`").catch(console.error);
      
      // toggle from false to true and reverse
      serverQueue.loop = !serverQueue.loop;
      return serverQueue.textChannel
      .send(`\n \`\`\`Loop is now ${serverQueue.loop ? "ON" : "OFF"}\`\`\``)
      .catch(console.error);
      }    
};