const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name : "avatar",
    aliases : ["av", "dp"],
    category: "info",
    description : "Display the Profile Photo of the User",
    usage: "[username | id | mention]",

    run : async(client, message, args) => {
        const member = getMember(message, args.join(" "));

          var avatar = new RichEmbed()
              .setTitle("Hi Beautiful")
              .setImage(member.user.avatarURL)
              .setFooter(member.user.tag)
              .setColor("00FFFF");
        
            message.channel.send(avatar).then(async embedMessage => {
              await embedMessage.react("👍");
              await embedMessage.react("😱");
              await embedMessage.react("❤");
              await embedMessage.react("😡");
            });
        
    }
};