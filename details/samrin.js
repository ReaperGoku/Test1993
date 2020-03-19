const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "samrin",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("493103544409260033");

        var samrin = new MessageEmbed()
        .setTitle("Samrin")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "ᴀᴋ❖ꜱᴀᴍʀɪɴツ", true)        
        .addField("UID:", "🤪Nahi Batana🤪 ", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(samrin);
    }    
};