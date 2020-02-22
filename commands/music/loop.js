module.exports = {
    name : "loop",
    category: "music",
    description : "Toggle music loop",

    run : async(client, message) => {

      if (!message.member.voiceChannel)
      return message.reply("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);

      const serverQueue = message.client.queue.get(message.guild.id);

      if (!serverQueue) return message.reply("\`\`\`There is nothing playing.\`\`\`").catch(console.error);

      // toggle from false to true and reverse
      serverQueue.loop = !serverQueue.loop;
      return serverQueue.textChannel
      .send(`\n \`\`\`Loop is now ${serverQueue.loop ? "ON" : "OFF"}\`\`\``)
      .catch(console.error);
    }
};