const { RichEmbed } = require("discord.js");
const randomPuppy = require ("random-puppy");

module.exports = {
    name : "meme",
    category: "fun",
    description : "meme command",

    run : async(client, message, args) => {

        async function automeme() {
        const channel = message.member.guild.channels.get(`547313757869703186`);
        const subReddits = ["denkmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
        .setColor("random")
        .setImage(img)
        .setURL(`http://reddit.com/r/${random}`)
        
        message.delete();
        channel.send(embed);
          
        setTimeout(automeme, 120*1000)
      } 
      automeme();
    }
};