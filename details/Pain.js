const { RichEmbed } = require("discord.js");

module.exports = {
    name : "Pain",
    run : async(client, message) => {
        const member = message.guild.members.get("487525353875832842");

        var pain = new RichEmbed()
        .setTitle("Pain")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .addField("IGN:", "₱₳ł₦ᴬᵏᵃᵗˢᵘᵏⁱ", true)
        .addField("UID:", 42921744, true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(pain);
    }
};