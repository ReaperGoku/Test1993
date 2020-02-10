const { RichEmbed } = require("discord.js");

module.exports = {
    name : "Arpita",
    run : async(client, message) => {
        const member = message.guild.members.get("577792254643798016");

        var arpita = new RichEmbed()
        .setTitle("Arpita")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", " ⒶⓀ♫★ⒶⓇⓅⒾⓉⒶ★♫", true)
        .addField("UID:", 479926005, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(arpita);
    }
};