const { RichEmbed } = require("discord.js");

module.exports = {
    name : "vaibhav",
    run : async(client, message) => {
        const member = message.guild.members.get("423354847761399810");

        var vbv = new RichEmbed()
        .setTitle("Vaibhav")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", "₳₭࿐Vαibђαv", true)
        .addField("UID:", "100196687", true)
        .addField("Guild:", "Âкατsυкiᵀˢ⁰⁷", true)
        .addField("Favorite Weapon:", "Car", true)
    
      message.channel.send(vbv);
    }
};