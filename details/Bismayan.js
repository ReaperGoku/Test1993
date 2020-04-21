const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "bismayan",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("629399423188729868");

        var Bismayan = new MessageEmbed()
        .setTitle("Bismayan")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "ᴀᴋ❖ʙɪsᴍᴀʏᴀɴツ", true)
        .addField("UID:", "237384443", true)
        .addField("Guild:", "☆Âкατsυкi☆", true)
        .addField("Favorite Weapon:", "XM8 & MP40", true);
    
      message.channel.send(Bismayan);
    }
};