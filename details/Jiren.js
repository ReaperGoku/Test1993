const { RichEmbed } = require("discord.js");

module.exports = {
    name : "Jiren",
    run : async(client, message) => {
        const member = message.guild.members.get("425295803305820160");

        var jiren = new RichEmbed()
        .setTitle("Jiren D Gray")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", "Lᴏʀᴅ☁Jɪʀᴀɪʏᴀ", true)
        .addField("UID:", "1149406853", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite_Weapon:", "Famas & M1014", true)
        .setFooter("The Pervert");
    
      message.channel.send(jiren);
    }
};