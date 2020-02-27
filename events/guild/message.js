module.exports = async (client, message) => {
    const config = {
        prefix : process.env.PREFIX
    };
    const permissions = message.channel.permissionsFor(client.user.id);
    
    if(message.channel.type === "dm") return;
    if(message.content.startsWith(config.prefix))return;
    
    if(message.author.bot)return;
    if(!message.guild)return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    
    const cmd = message.content.toLowerCase();

    if(cmd.length === 0)return;

    let command = client.details.get(cmd);
    
    if(!command){
        return;
    } else {

        if(!permissions.has("SEND_MESSAGES"))
        return message.member.send(`Don't have the permissions to Send Messages in ${message.channel} in ${message.guild}`); 
        
        command.run(client, message);
    }
};
