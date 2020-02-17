const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require("moment");

module.exports = {
    name : "serverinfo",
    category: "info",
    description : "Return server Information",

    run : async(client, message, args) => {

function checkBots(guild) {
    let botCount = 0;
    guild.members.forEach(member => {
        if(member.user.bot) botCount++;
    });
    return botCount;
}

function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
        if(!member.user.bot) memberCount++;
    });
    return memberCount;
}

function checkOnlineUsers(guild) {
    let onlineCount = 0;
    guild.members.forEach(member => {
        if(member.user.presence.status === "online")
            onlineCount++; 
    });
    return onlineCount;
}

const created = moment(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss");

let serverembed = new RichEmbed()
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .setColor("#15f153")
    .setThumbnail(message.guild.iconURL)
    .addField('Server Information', stripIndents `> Server owner: \`${message.guild.owner.displayName}\` 
    > Server region: \`${message.guild.region}\`
    > Server Name: \`${message.guild.name}\`
    > Verification level: \`${message.guild.verificationLevel}\`
    > Channel count: \`${message.guild.channels.size}\`
    > Total member count: \`${message.guild.memberCount}\`
    > Humans: \`${checkMembers(message.guild)}\`
    > Bots: \`${checkBots(message.guild)}\`
    > Online: \`${checkOnlineUsers(message.guild)}\``,true)
    .setFooter(`Guild created at: ${created}`);

   return message.channel.send(serverembed);
  }
}; 