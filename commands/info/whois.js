const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name : "whois",
    aliases : [ 'userinfo', 'user', 'who' ],
    category: "info",
    description : "Return User Information",
    usage: "[username | id | mention]",

    run : async(client, message, args) => {
        const member = getMember(message, args.join(" "));

        //Member Variable
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
          .filter(r => r.id !== message.guild.id)
          .map(r => r)
          .join(", ") || "none";

        // User variable
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
          .setFooter(member.displayName, member.user.displayAvatarURL)
          .setThumbnail(member.user.displayAvatarURL)
          .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)

          .addField('Member Information', stripIndents `**> Display name:** ${member.displayName}
          **> Joined at:** ${joined}
          **> Roles:** ${roles}`,true)

          .addField('User Information', stripIndents`**> ID:** ${member.user.id}
          **> Username:** ${member.user.username}
          **> Discord tag:** ${member.user.tag}
          **> Created at:** ${created}`,true)

          .setTimestamp()

        if(member.user.presence.game)
           embed.addField(`Currently playing`, `**> Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
};