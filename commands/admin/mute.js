const ms = require("ms");

module.exports = {
    name : "mute",
    aliases : ["m"],
    category: "admin",
    description : "Warn a mentioned member",
    usage: "<Member & Time(s,m,h,d)>",

    run : async(client, message, args) => {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have premission to do that!");

        const permission = message.channel.permissionsFor(message.client.user);
        if(!permission.has("MANAGE_ROLES")){
            return message.reply("\`\`\`Don't have the permissions to Manage Roles!\`\`\`");
        }

        //!tempmute @user 1s/m/h/d
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("\`\`\`Couldn't find user.\`\`\`");
        if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("\`\`\`Can't mute them!\`\`\`");
        let muterole = message.guild.roles.find(`name`, "Muted");
        //start of create role
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                    name: "Muted",
                    color: "#000000",
                    permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            }catch(e){
                console.log(e.stack);
            }
        }
        //end of create role
        let mutetime = args[1];
        if(!mutetime) return message.reply("\`\`\`You didn't specify a time!\`\`\`");
        await(tomute.addRole(muterole.id));
        message.reply(`\*\*\*${tomute.displayName} has been muted for ${ms(ms(mutetime))}\*\*\*`);
        setTimeout(function(){
            tomute.removeRole(muterole.id);
            message.channel.send(`\`\`\`${tomute.displayName} has been unmuted!\`\`\``);
        }, ms(mutetime));
    }
};