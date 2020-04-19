const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "sumi",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("532631150108082187");

        var jiren = new MessageEmbed()
        .setTitle("Sumi")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "Lᴏʀᴅ☁Jɪʀᴀɪʏᴀ", true)
        .addField("UID:", "501106749", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite_Weapon:", "Famas & M1014", true)
        .setFooter("The Pervert");
    
      //message.channel.send(jiren);
    }
};