const { RichEmbed } = require("discord.js");

module.exports = {
    name : "sandy",
    run : async(client, message) => {
        const member = message.guild.members.get("526652626142756894");

        var sandy = new RichEmbed()
        .setTitle("Sandy")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", "SANDY", true)
        .addField("UID:", 88027587, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & M1014", true)
        .setFooter("Pudinaahhhhh");
    
      message.channel.send(sandy);
    }
};