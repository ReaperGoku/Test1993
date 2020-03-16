const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "jiren",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("425295803305820160");

        var jiren = new MessageEmbed()
        .setTitle("Jiren D Gray")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "Lᴏʀᴅ☁Jɪʀᴀɪʏᴀ", true)
        .addField("UID:", "1149406853", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite_Weapon:", "Famas & M1014", true)
        .setFooter("The Pervert");
    
      message.channel.send(jiren);
    }
};