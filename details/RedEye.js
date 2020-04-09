const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "redeye",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("514448595555188750");

        var viru = new MessageEmbed()
        .setTitle("Red Eye")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "₳₭☁Ɽᴇᴅᴇʏᴇ❶❸", true)
        .addField("UID:", "663211040", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite_Weapon:", "AK & M1887", true)
        .setFooter("0 Kill wala");
    
      message.channel.send(viru);
    }
};