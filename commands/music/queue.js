module.exports = {
  name : "queue",
  aliases : ["q"],
  category: "music",
  description : "Show the music queue and now playing.",

  run : async(client, message) => {
    
    const serverQueue = message.client.queue.get(message.guild.id);
    let clientVoiceConnection = message.guild.voice.connection
    
    if (!serverQueue)
    return message.channel.send("\`\`\`There is nothing playing.\`\`\`").catch(console.error);

    if (!clientVoiceConnection.voice.channel.members.has(message.member.id))
    return message.channel.send(`\`\`\`You need to join a voice channel ${serverQueue.channel.name}\`\`\``).catch(console.error);
  
    return message
    .channel.send("\n"+
    `\`\`\`📃 **Song queue**
${serverQueue.songs.map((song, index) => index + 1 + ". " + song.title).join("\n")}\`\`\`
\*Now playing:\* ${serverQueue.songs[0].title}
    `,
    { split: true }
    )
    .catch(console.error);
  }
};