const fetch = require("node-fetch");
const ytdl = require("ytdl-core");

module.exports = {
  autoplay: async function(song, message){
    const config = {
      YT_ENDPOINT : "https://www.googleapis.com/youtube/v3/",
      YT_TOKEN: process.env.YOUTUBE_API_KEY,
    };
    const channel = message.member.voiceChannel;
    if (!channel) return message.reply("\n \`\`\`You need to join a voice channel first!\`\`\`").catch(console.error);

    const serverQueue = message.client.queue.get(message.guild.id);
    const queueConstruct = {
      textChannel: message.channel,
      channel : channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
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
        const requestUrl = `${config.YT_ENDPOINT}search?part=id&relatedToVideoId=${videoId}&type=video&key=${config.YT_TOKEN}`;
        const ap = await fetch(requestUrl)
        .then(res => res.json())
        .then(json => json.items[2].id);

        songInfo = await ytdl.getInfo(ap.videoId);
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
          await channel.leave(60000);
          return message.channel.send(`\n \`\`\`Could not join the channel: ${error}\`\`\``).catch(console.error);
        }
      }
    },
  }