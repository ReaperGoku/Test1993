const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "arpita",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("577792254643798016");

        var arpita = new MessageEmbed()
        .setTitle("Arpita")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", " ⒶⓀ♫★ⒶⓇⓅⒾⓉⒶ★♫", true)
        .addField("UID:", 479926005, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(arpita);
    }
};