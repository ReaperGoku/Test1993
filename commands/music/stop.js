module.exports = {
    name : "stop",
    category: "music",
    description : "Stops the music",

    run : async(client, message) => {
        const serverQueue = message.client.queue.get(message.guild.id);

        if (!message.member.voiceChannel)
          return message.reply("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);
        if (!serverQueue) return message.reply("\`\`\`There is nothing playing.\`\`\`").catch(console.error);
    
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
        serverQueue.textChannel.send(`\`\`\`${message.author} ⏹ stopped the music!\`\`\``).catch(console.error);
    }
};