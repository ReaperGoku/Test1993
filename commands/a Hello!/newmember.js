module.exports = {
    name : "newmember",
    aliases : ["nmemb"],
    description : "emiter",

    run : async(client, message, args) => {
        client.emit('guildMemberAdd', message.member);
    }
};