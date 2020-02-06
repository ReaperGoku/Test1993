
module.exports = {
    name : "say",
    aliases : ["sy"],
    category: "fun",
    description : "Send a given message",
    usage: "<Message>",

    run : async(client, message, args) => {
        if(message.deletable) message.delete();

        if(!args[0]){
          message.reply("Please specify input").then(m => m.delete(3000));
         } else {
               message.delete();
  
               message.channel.send(args.join(" "));
            };
    }
};