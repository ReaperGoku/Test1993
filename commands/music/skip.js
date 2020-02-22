module.exports = {
    name : "skip",
    aliases : ["s"],
    category: "music",
    description : "Skip the currently playing song",

    run : async(client, message) => {
        const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voiceChannel)
      return message.reply("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);

    if (!serverQueue)
      return message.channel.send("\`\`\`There is nothing playing that I could skip for you.\`\`\`").catch(console.error);

    serverQueue.connection.dispatcher.end();
    
    serverQueue.textChannel.send(`\`\`\`${message.author} ⏭ skipped the song\`\`\``).catch(console.error);
    }
};