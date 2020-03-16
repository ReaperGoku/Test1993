const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "sid",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("671067990690627604");

        var sid = new MessageEmbed()
        .setTitle("ꜱɪᴅᴬᵏᵃᵗˢᵘᵏⁱ")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "ᴀᴋ❖sɪᴅᴅʜᴀɴᴛツ", true)
        .addField("UID:", 186663223, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "AK & MP40", true);
    
      message.channel.send(sid);
    }
};