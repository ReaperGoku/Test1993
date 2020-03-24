const { MessageEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name : "reset",
    category: "music",
    description : "Reset Music Bot",
    

    run : async(client, message, args) => {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have premission to do that!");

        const serverQueue = message.client.queue.get(message.guild.id);
        const memberChannel = message.member.voice.channel;
        
        if (!serverQueue)
        return message.channel.send("\`\`\`There is nothing playing.\`\`\`").catch(console.error);

        if (!memberChannel)
        return message.channel.send("\`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);
  
        if (memberChannel != serverQueue.channel)
        return message.channel.send("\`\`\`You need to be in same voice channel!\`\`\`").catch(console.error);
        
        message.client.queue.delete(message.guild.id);
        message.channel.send("\> Reset Done!")
    }
};
