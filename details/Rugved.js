const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "rugved",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("534631377635770379");

        var rug = new MessageEmbed()
        .setTitle("Rugved004")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "◥ᴬᴷ★ŘỮǤV€Đ࿐", true)
        .addField("UID:", 311793760, true)
        .addField("Guild:", "☆Âкατsυкi☆", true)
        .addField("Favorite Weapon:", "SCAR, M1014 & MP40", true)
        .setFooter("Zandu Bam Rugved");
    
        message.channel.send(rug);
    }
};