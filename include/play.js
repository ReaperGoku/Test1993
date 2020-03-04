const ytdl= require("ytdl-core");
const { RichEmbed } = require("discord.js");
const{autoplay, checkMemberChannel} = require("../musicFunctions.js")

module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id);
      return queue.textChannel.send("\n \`\`\`🚫 Music queue ended.\`\`\`").catch(console.error);
    }
    
    try {
      var stream = await ytdl(song.url, { filter: "audioonly", quality: "highestaudio" });
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);        
      }

      if (error.message.includes("copyright")) {
        return message.channel
          .send("\n \`\`\`⛔ A video could not be played due to copyright protection ⛔\`\`\`")
          .catch(console.error);
      } else {
        console.error(error);
      }
    }

    const dispatcher = queue.connection
      .playStream(stream)
      .on("end", () => {
        if (queue.loop) {
          // if loop is on, push the song back at the end of the queue
          // so it can repeat endlessly
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else if(queue.autoplay && song ) {

          autoplay(song,message);
          module.exports.play(queue.songs[0], message); 

        } else {
           // Recursively play the next song
           queue.songs.shift();
           module.exports.play(queue.songs[0], message);        
        }
      })
      .on("error", console.error);
    dispatcher.setVolumeLogarithmic(queue.volume / 100);

    try {
      const embed = new RichEmbed()
      .setTitle(`🎶 Started playing: ${song.title}`)
      .setThumbnail(`https://img.youtube.com/vi/${song.id}/maxresdefault.jpg`);

      var playingMessage = await queue.textChannel.send(embed); //${song.url}
      await playingMessage.react("⏭");
      await playingMessage.react("⏸");
      await playingMessage.react("▶");
      await playingMessage.react("⏹");
    } catch (error) {
      console.error(error);
    }

    const filter = (reaction, user) => user.id !== message.client.user.id;
    const collector = playingMessage.createReactionCollector(filter, { time: 1800000 });

    collector.on("collect", (reaction, user) => {
      // Stop if there is no queue on the server
      if (!queue) return;
      

      switch (reaction.emoji.name) {
        case "⏭":
          if(!message.member.voiceChannelID) break;
          if(message.member.voiceChannelID != reaction.message.member.voiceChannelID) break;
          queue.connection.dispatcher.end();
          queue.textChannel.send(`\`\`\`⏩ skipped the song\`\`\``).catch(console.error);
          collector.stop();
          playingMessage.clearReactions();
          break;

        case "⏸":
          console.log(message.users)
          // if(!message.member.voiceChannelID) break;
          // if(message.member.voiceChannelID != reaction.message.member.voiceChannelID) break;
          if (!queue.playing) break;
          queue.playing = false;
          queue.connection.dispatcher.pause();
          queue.textChannel.send(`\`\`\`⏸ paused the music.\`\`\``).catch(console.error);
          break;

        case "▶":
          if(!message.member.voiceChannelID) break;
          if(message.member.voiceChannelID != reaction.message.member.voiceChannelID) break;
          if (queue.playing) break;
          queue.playing = true;
          queue.connection.dispatcher.resume();
          queue.textChannel.send(`\`\`\`▶ resumed the music!\`\`\``).catch(console.error);
          break;

        case "⏹": 
          if(!message.member.voiceChannelID) break;
          if(message.member.voiceChannelID != reaction.message.member.voiceChannelID) break;
          queue.songs = [];
          queue.connection.dispatcher.end();
          queue.textChannel.send(`\`\`\`⏹ stopped the music!\`\`\``).catch(console.error);
          collector.stop();
          playingMessage.clearReactions();
          break;

        default:
          break;
      }
    });

    collector.on("end", () => {
      playingMessage.clearReactions();
    });
  }
};
