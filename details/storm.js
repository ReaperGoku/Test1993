const { RichEmbed } = require("discord.js");

module.exports = {
    name : "storm",
    run : async(client, message) => {
        const member = message.guild.members.get("498829903991537696");

        var storm = new RichEmbed()
        .setTitle("Storm")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", "Âк★Sтσям⓿➒࿐", true)
        .addField("UID:", 613689215, true)
        .addField("Guild:", "★Âкατsυкi★", true)
        .addField("Favorite Weapon:", "SCAR & M1014", true);
    
      message.channel.send(storm);
    }
};