const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "cindru",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("637140633059983380");

        var cindru = new MessageEmbed()
        .setTitle("Cindrella")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true })())
        .addField("IGN:", "✿᭄Cɪɴᴅʀᴇʟʟᴀ★", true)
        .addField("UID:", "636204320", true)
        .addField("Guild:", "Team🔥Lava", true)
        .addField("Favorite Weapon:", "SCAR", true);
    
      message.channel.send(cindru);        
    }
};