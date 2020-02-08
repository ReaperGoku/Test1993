const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name : "news",
    category: "info",
    description : "Current News of INDIA",

    run : async(client, message, args) => {
        const config = {
            api : process.env.NEWSAPI
        };

          const channel = message.member.guild.channels.get(`667188695790649364`);
          message.delete();
        
          var i;
          for (i =0; i< 20; i++){
        
              let news =  await fetch(`https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${config.api}`)
                .then(res => res.json())
                .then(json => json.articles[i])
                .catch(err => console.error(err))
          
              let embed = new RichEmbed()
                .setTitle(news.title)
                .setColor("00FFFF")
                .setImage(news.urlToImage)
                .setDescription(news.description)
                .setURL(news.url)
                .setTimestamp(news.publishedAt)
                .setFooter(news.source.name);
       
                channel.send(embed);
          };
    }   
};