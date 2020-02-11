const { RichEmbed } = require("discord.js");

module.exports = {
    name : "sunil",
    run : async(client, message) => {
        const member = message.guild.members.get("392566171041529857");

        var sunil = new RichEmbed()
        .setTitle("SunilBB")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", "SunilBB", true)
        .addField("UID:", "28664813", true)
        .addField("Guild:", "Âкατsυкiᵀˢ⁰⁷", true)
        .addField("Favorite Weapon:", "SCAR & M1014", true);
    
      message.channel.send(sunil);
    }
};