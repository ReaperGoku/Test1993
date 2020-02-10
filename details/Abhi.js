const { RichEmbed } = require("discord.js");

module.exports = {
    name : "Abhi",
    run : async(client, message) => {

        const member = message.guild.members.get("379884944823943168");

        var abhi = new RichEmbed()
        .setTitle(" ᴀʙʜɪᴬᵏᵃᵗˢᵘᵏⁱ")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", " ᴀʙʜɪᴬᵏᵃᵗˢᵘᵏⁱ", true)
        .addField("UID:", "40331033", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(abhi);
    }
};