const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "itachi",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("453220189149069354");

        var itachi = new MessageEmbed()
        .setTitle("ITACHI")
        .setColor("00FFFF")
        .addField("IGN:", " ITACHI❖YT", true)
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("UID:", 54877345, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true)
        .setFooter("CAN SACRIFICE ANYTHING FOR THEIR LOVED ONE’S");
    
      message.channel.send(itachi);
    }
};