const { getMember } = require("../../functions.js");

module.exports = {
    name : "flipcoin",
    aliases : ["toss"],
    category: "fun",
    description : "Heads or Tails",

    run : async(client, message, args) => {

        var flipcoin = ["heads", "tails"];

        const member = getMember(message, args.join(" "));

        var randomIndex = Math.floor(Math.random() * flipcoin.length); 

    message.channel.send(`<@${member.user.id}> `+ flipcoin[randomIndex]);
    }
};