const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "shadow",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("587175518584045569");

        var shadow = new MessageEmbed()
        .setTitle("Shadow")
        .setColor("00FFFF").avatarURL
        .setThumbnail(member.user({ format: 'png', dynamic: true }))
        .addField("IGN:", "Âк★รнคdσω⓿➋࿐", true)
        .addField("UID:", 865898376, true)
        .addField("Guild:", "★Âкατsυкi★", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(shadow);
    }
};