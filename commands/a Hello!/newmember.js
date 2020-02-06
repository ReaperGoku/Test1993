module.exports = {
    name : "newmember",
    aliases : ["nmemb"],
    // category: "Owner",
    description : "emiter",

    run : async(client, message, args) => {
        client.emit('guildMemberAdd', message.member);
    }
};