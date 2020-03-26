const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "shreya",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("644972360994127902");

        var Shreya = new MessageEmbed()
        .setTitle("Shreya")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "Shreya", true)
        .addField("UID:", 306968994, true)
        .addField("Guild:", "Âкατsυкiᴵᴺ", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true)
        .setFooter("Prettiest Girl In The World");
    
        message.channel.send(Shreya);
    }
};