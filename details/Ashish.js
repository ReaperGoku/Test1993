const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "ashish",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("578584873284009984");

        let ashish = new MessageEmbed()
        .setTitle("Ashish")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "◥IᴛꜱMᴇ₳ѕнιѕH", true)
        .addField("UID:", "419340245", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "Scar & MP40", true);
      
      message.channel.send(ashish);
    }
};