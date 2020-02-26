const{autoplay} = require("../../musicFunctions.js")

module.exports = {
    name : "autoplay",
    aliases : ["ap"],
    category: "music",
    description : "Toggle music autoplay",

    run : async(client, message, song) => {

      const serverQueue = message.client.queue.get(message.guild.id);
      const memberChannel = message.member.voiceChannel;

      if (!serverQueue)
      return message.reply("\`\`\`There is nothing playing.\`\`\`").catch(console.error);

      if (!memberChannel)
      return message.reply("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);

      if (memberChannel != serverQueue.channel)
      return message.reply("\`\`\`You need to be in same voice channel!\`\`\`").catch(console.error);

      autoplay(song,message).catch(console.error);

      // toggle from false to true and reverse
      serverQueue.autoplay = !serverQueue.autoplay;
      return serverQueue.textChannel
      .send(`\n \`\`\`Autoplay is now ${serverQueue.autoplay ? "ON" : "OFF"}\`\`\``)
      .catch(console.error);
    }
};