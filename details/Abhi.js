const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "abhi",
    run : async(client, message) => {

        const member = message.guild.members.cache.get("379884944823943168");

        var abhi = new MessageEmbed()
        .setTitle(" ᴀʙʜɪᴬᵏᵃᵗˢᵘᵏⁱ")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", " ᴀʙʜɪᴬᵏᵃᵗˢᵘᵏⁱ", true)
        .addField("UID:", "40331033", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(abhi);
    }
};