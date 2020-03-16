const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "ug",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("425295803305820160");

        var ug = new MessageEmbed()
        .setTitle("UnGraduate Gamer")
        .setColor("00FFFF")
        .addField("IGN:", " Inhibitor007", true)
        .addField("UID:", 65324399, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(ug);
    }
};