const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "deep",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("376715652637130763");

        var deep = new MessageEmbed()
        .setTitle("Deep")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "『D』『E』『E』『P』", true)
        .addField("UID:", 218004519, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "AK47 & MP40", true);
    
        message.channel.send(deep);
    }
};