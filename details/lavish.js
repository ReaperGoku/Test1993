const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "lavish",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("658971019054415872");

        var arpita = new MessageEmbed()
        .setTitle("Lavish")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "Ꮶᴇɴ々Ꮶᴀɴᴇᴋɪ", true)
        .addField("UID:", 695765569, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & M1014", true);
    
      message.channel.send(arpita);
    }
};