const { RichEmbed } = require("discord.js");

module.exports = {
    name : "vaishali",
    run : async(client, message) => {
        const member = message.guild.members.get("591091285780332544");

        var Vaishali = new RichEmbed()
        .setTitle("✿乂░Vᴀɪꜱʜᴀʟɪ░乂✿")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL)
        .setDescription("Meri gulabo meri dilruba, pehle bewafa bani phir meri dua bani, sari umar ladta raha usse paane ke liye usse khone ke liye, phir bhi na dilruba mili, na dua mili, aur na iss dil ke dard ki koi dawa mili")
     // message.channel.send(Vaishali);
    }
};