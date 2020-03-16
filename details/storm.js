const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "storm",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("498829903991537696");

        var storm = new MessageEmbed()
        .setTitle("Storm")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "Âк★Sтσям⓿➒࿐", true)
        .addField("UID:", 613689215, true)
        .addField("Guild:", "★Âкατsυкi★", true)
        .addField("Favorite Weapon:", "SCAR & M1014", true);
    
      message.channel.send(storm);
    }
};