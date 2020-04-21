const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "monu",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("489048565155364864");

        var monu = new MessageEmbed()
        .setTitle("Monu")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "『AK』MONU", true)
        .addField("UID:", 227258203, true)
        .addField("Guild:", "AKATSUKI★07", true)
        .addField("Favorite Weapon:", "Mp40❤", true)
        .setFooter("Madara ka bhai");
    
      message.channel.send(monu);
    }
};