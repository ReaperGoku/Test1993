const { RichEmbed } = require("discord.js");

module.exports = {
    name : "shadow",
    run : async(client, message) => {
        const member = message.guild.members.get("587175518584045569");

        var shadow = new RichEmbed()
        .setTitle("Shadow")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", "Âк★รнคdσω⓿➋࿐", true)
        .addField("UID:", 865898376, true)
        .addField("Guild:", "★Âкατsυкi★", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(shadow);
    }
};