const ytdl = require("ytdl-core");

module.exports = {
  autoplay: async function(song, message){
    
    const channel = message.member.voice.channel;
    
    const serverQueue = message.client.queue.get(message.guild.id);
    const queueConstruct = {
      guild : message.guild,
      textChannel: message.channel,
      channel : channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 50,
      playing: true,
      autoplay: false
    };

    let songInfo = null;
    let videoId= null;
    
    if (!serverQueue.songs.length) {
      if(!queueConstruct.songs.length){
        return;
      }else{
        videoId = queueConstruct.songs[0].id;
      }
    } else {
       videoId = serverQueue.songs[0].id;
      }
      try {
        
        const ap = await ytdl.getInfo(videoId);

        songInfo = await ytdl.getInfo(ap.related_videos[0].id);
        song = {
          title: songInfo.title,
          url: songInfo.video_url,
          duration: songInfo.length_seconds,
          id: songInfo.video_id
        };
      } catch (error) {
        console.error(error);
      }

      serverQueue.songs.shift();

      if (serverQueue) {
        serverQueue.songs.push(song);
      } else {
        queueConstruct.songs.push(song);
      }
      if (!serverQueue) message.client.queue.set(message.guild.id, queueConstruct);
      if (!serverQueue) {
        try {
          queueConstruct.connection = await channel.join();
          play(queueConstruct.songs[0], message);
        } catch (error) {
          console.error(`\n \`\`\`Could not join voice channel: ${error}\`\`\``);
          message.client.queue.delete(message.guild.id);
          await channel.leave();
          return message.channel.send(`\n \`\`\`Could not join the channel: ${error}\`\`\``).catch(console.error);
        }
      }
    },
    checkChannelMembers:    function(message) {
      const serverQueue = message.client.queue.get(message.guild.id);
      let channelMembers = 0;
      serverQueue.channel.members.forEach(member => {
          if(!member.user.bot) channelMembers++;
      });
      return channelMembers;
    },
  }