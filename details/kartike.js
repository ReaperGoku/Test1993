const { RichEmbed } = require("discord.js");

module.exports = {
    name : "kartike",
    run : async(client, message) => {
        const member = message.guild.members.get("441943765855240192");

        var kartike = new RichEmbed()
        .setTitle("Kartike Singh")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .setImage("https://i.pinimg.com/originals/d6/73/5a/d6735a63235fe493b1d3a2a7e0bbdd74.png")
        .addField("IGN:", "₳₭࿐ƘƛƦƬƖƘЄ࿐", true)
        .addField("UID:", "346336435", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite_Weapon:", "AK & MP40", true)
    
      message.channel.send(kartike);
    }
};