const { RichEmbed } = require("discord.js");

module.exports = {
    name : "sid",
    run : async(client, message) => {
        const member = message.guild.members.get("671067990690627604");

        var sid = new RichEmbed()
        .setTitle("ꜱɪᴅᴬᵏᵃᵗˢᵘᵏⁱ")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", " ꜱɪᴅᴬᵏᵃᵗˢᵘᵏⁱ", true)
        .addField("UID:", 186663223, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "AK & MP40", true);
    
      message.channel.send(sid);
    }
};