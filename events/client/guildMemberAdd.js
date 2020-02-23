const db = require("quick.db")
const discord = require('discord.js');
const Canvas = require('canvas');

module.exports = async(client, member) => {
	
	let count = member.guild.memberCount.toString() 
	let end = count[count.length]
	let suffixed = end == 1 ? count + "st" : end == 2 ? count + "nd" : end == 3 ? count + "rd" : count + "th" 

	const channel = member.guild.channels.get('657077921613217804');
	if (!channel) return;

	const canvas = Canvas.createCanvas(2560, 1440);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://i.pinimg.com/originals/c7/2d/fc/c72dfc54da51757a4719c4b441470e7d.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#ffffff';
	ctx.lineWidth = 50;
	ctx.strokeRect(150, 420, 600, 600);

	ctx.strokeStyle = '#ad0909';
	ctx.lineWidth = 30;
	ctx.strokeRect(5, 5, 2550, 1430);

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 150, 420, 600, 600);

	const attachment = new discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}`+ "\n" + 
	`You are the **${suffixed}** member!`+ "\n" +
	`📌 Dont forgot to read ${member.guild.channels.get('547101326019002409').toString()}` + "\n" +
	`📌 Check ${member.guild.channels.get('589503796913111149').toString()} for Role 👑`, {files: [attachment] });
};