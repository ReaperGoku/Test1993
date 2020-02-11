module.exports = async (client, message) => {
    const config = {
        prefix : process.env.PREFIX
    };

    if(message.author.bot)return;
    if(!message.guild)return;
    if(!message.member) message.member = await message.guild.fetchMember(message);

    const cmd = message.content.toLowerCase();

    if(cmd.length === 0)return;

    let command = client.details.get(cmd);

    if(command)
    command.run(client, message);
};