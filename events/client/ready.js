module.exports = async (client) => {
    console.log('I am online');
    client.user.setActivity("this server",{type : "Watching"});
}