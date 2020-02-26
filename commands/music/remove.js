module.exports = {
    name : "remove",
    aliases : ["re"],
    category: "music",
    description : "Remove song from the queue",
    usage: "[ | ]",

    run : async(client, message, args) => {

        const serverQueue = message.client.queue.get(message.guild.id);
        const memberChannel = message.member.voiceChannel;

        if (!serverQueue) return message.channel.send("\n \`\`\`There is no queue.\`\`\`").catch(console.error);
        
        if (!memberChannel)
        return message.reply("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);
  
        if (memberChannel != serverQueue.channel)
        return message.reply("\`\`\`You need to be in same voice channel!\`\`\`").catch(console.error);
        
        if (!args.length) return message.reply("\n \`\`\`Usage: /remove <Queue Number>\`\`\`");
    
        const song = serverQueue.songs.splice(args[0] - 1, 1);
        serverQueue.textChannel.send(`\`\`\`${message.author} ❌ removed ${song[0].title} from the queue.\`\`\``).catch(console.error);
    }
};