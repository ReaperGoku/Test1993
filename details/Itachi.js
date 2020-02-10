const { RichEmbed } = require("discord.js");

module.exports = {
    name : "Itachi",
    run : async(client, message) => {
        const member = message.guild.members.get("453220189149069354");

        var itachi = new RichEmbed()
        .setTitle("ITACHI")
        .setColor("00FFFF")
        .addField("IGN:", " ITACHI❖YT", true)
        .setThumbnail(member.user.avatarURL)
        .addField("UID:", 54877345, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true)
        .setFooter("CAN SACRIFICE ANYTHING FOR THEIR LOVED ONE’S");
    
      message.channel.send(itachi);
    }
};