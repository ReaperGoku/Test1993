const ytdl= require("ytdl-core-discord");
const { MessageEmbed } = require("discord.js");
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
      var stream = await ytdl(song.url, {
        filter: "audioonly", 
        quality: "highestaudio"
      });
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
      .play(stream, { type: "opus" })
      .on("finish", () => {
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
          module.exports.play(queue.songs[0], message)
        }
      })      
      .on("close", () => {
        queue.textChannel.client.queue.delete(message.guild.id);
        queue.textChannel.send(`\`\`\`Disconnected!\`\`\``).catch(console.error);
      })
      .on("error", console.error);

    dispatcher.setVolumeLogarithmic(queue.volume / 100);

    try {
      const embed = new MessageEmbed()
      .setTitle(`🎶 Started playing: ${song.title}`)
      .setThumbnail(`https://img.youtube.com/vi/${song.id}/maxresdefault.jpg`);
      
      var playingMessage = await queue.textChannel.send(embed);
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
          if(!queue.channel.members.has(user.id)) break;
          queue.connection.dispatcher.end();
          queue.textChannel.send(`\`\`\`${user.username} ⏩ skipped the song\`\`\``).catch(console.error);
          collector.stop();
          playingMessage.reactions.removeAll();
          break;

        case "⏸":
          if(!queue.channel.members.has(user.id)) break;
          if(!queue.playing) break;
          queue.playing = false;
          queue.connection.dispatcher.pause();
          queue.textChannel.send(`\`\`\`${user.username} ⏸ paused the music.\`\`\``).catch(console.error);
          break;

        case "▶":
          if(!queue.channel.members.has(user.id)) break;
          if(queue.playing) break;
          queue.playing = true;
          queue.connection.dispatcher.resume();
          queue.textChannel.send(`\`\`\`${user.username} ▶ resumed the music!\`\`\``).catch(console.error);
          break;

        case "⏹":  
          if(!queue.channel.members.has(user.id)) break;
          queue.songs = [];
          queue.connection.dispatcher.end();
          queue.textChannel.send(`\`\`\`${user.username} ⏹ stopped the music!\`\`\``).catch(console.error);
          collector.stop();
          playingMessage.reactions.removeAll();
          break;

        default:
          break;
      }
    });

    collector.on("end", () => {
      playingMessage.reactions.removeAll();
    });
  }
};
