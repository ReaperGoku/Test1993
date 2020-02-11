const { RichEmbed } = require("discord.js");

module.exports = {
    name : "rugved",
    run : async(client, message) => {
        const member = message.guild.members.get("534631377635770379");

        var rug = new RichEmbed()
        .setTitle("Rugved004")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", " Rugved004", true)
        .addField("UID:", 311793760, true)
        .addField("Guild:", "Âкατsυкiᴵᴺ", true)
        .addField("Favorite Weapon:", "SCAR, M1014 & MP40", true)
        .setFooter("Abey sale");
    
        message.channel.send(rug);
    }
};