const { RichEmbed } = require("discord.js");

module.exports = {
    name : "pratham",
    run : async(client, message) => {
        const member = message.guild.members.get("575029791883919370");

        var pr = new RichEmbed()
        .setTitle("ᴘʀᴀᴛʜᴀᴍ")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", "ⒶⓀ★♬ⓅⓇⒶⓉⒽⒶ:m:★♬", true)
        .addField("UID:", 498740446, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "AK & MP40 & M1014", true);
    
      message.channel.send(pr);
    }
};