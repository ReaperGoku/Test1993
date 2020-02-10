const { RichEmbed } = require("discord.js");

module.exports = {
    name : "Deepak",
    run : async(client, message) => {
        const member = message.guild.members.get("452357258710351873");

        var deepak = new RichEmbed()
        .setTitle("Deepak")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", "ᴬᴷ★Dᴇᴇᴩᴀᴋ࿐ ★♬", true)
        .addField("UID:", "54032086", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(deepak);
    }
};