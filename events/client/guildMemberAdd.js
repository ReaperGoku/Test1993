const discord = require('discord.js');
const Canvas = require('canvas');

module.exports = async(client, member) => {
  
  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 60;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 15}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};
  let position = member.guild.memberCount;
	const channel = member.guild.channels.get(`673880182519496714`);
	if (!channel) return;

	const canvas = Canvas.createCanvas(850, 1000);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./Wellcomer.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '38px sans-serif';
  ctx.textAlign = 'center';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2, canvas.height / 10);
  
  ctx.font = '38px serif';
  ctx.textAlign = 'center';  
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`You are the ${position}'th member.`, canvas.width / 2,canvas.height / 2.55);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
  ctx.textAlign = 'center';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2, canvas.height / 2.9);

	ctx.beginPath();
	ctx.arc(416, 209, 72, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 335, 130, 165, 165);

	const attachment = new discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
  //channel.send("𝒟𝑜𝓃'𝓉 𝐹𝑜𝓇𝑔𝑒𝓉 𝒯𝑜 𝑅𝑒𝒶𝒹  #🗒•‣⌈ʀᴜʟᴇs⌋");
	channel.send(`Welcome to the server, ${member}!`+ "\n" + `📌 Dont forgot to read ${member.guild.channels.get('673880182519496714').toString()}` + "\n" + `📌 Check ${member.guild.channels.get('673880182519496714').toString()} for Role 👑`, attachment);
};