const { RichEmbed } = require("discord.js");

module.exports = {
    name : "ff",
    category: "info",
    description : "Details of free fire weapon",
    usage: "<Gun Name>",

    run : async(client, message, args) => {
        const response = args.join();

      switch (response) {
      case "famas":
      const famas = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/10/ee/e2/10eee2986d2a5a8ad0ed709b2b76d486.jpg"
      );
      message.channel.send(famas);
      break;
      case "ak":
      const ak = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/44/3f/2e/443f2ecd898eb95aa1de4db95eed9ed1.jpg"
      );
      message.channel.send(ak);
      break;
      case "scar":
      const scar = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/94/b2/12/94b21263321fd81cb91e3e46e387ffee.jpg"
      );
      message.channel.send(scar);
      break;
      case "mp40":
      const mp40 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/90/6b/e1/906be1849f3101598f4ed525baf16071.jpg"
      );
      message.channel.send(mp40);
      break;
      case "m1014":
      const m1014 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/a5/d3/d7/a5d3d745d2e68f9f5957d1d949a3b962.jpg"
      );
      message.channel.send(m1014);
      break;
      case "spas":
      const spas = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/d7/7d/aa/d77daac646517d042f8c2c90cf274d6b.jpg"
      );
      message.channel.send(spas);
      break;
      case "m79":
      const m79 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/56/16/03/56160351664dc59303c594d6e9ce6501.jpg"
      );
      message.channel.send(m79);
      break;
      case "pan":
      const pan = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/90/8d/89/908d894e17b755d095220c53039a8110.jpg"
      );
      message.channel.send(pan);
      break;
      case "an94":
      const an94 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/b7/ec/3a/b7ec3a892342d63228abf61b408e0dc9.jpg"
      );
      message.channel.send(an94);
      break;
      case "xm8":
      const xm8 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/f4/d9/cb/f4d9cb67c9e77a1af4e010b73e205c74.jpg"
      );
      message.channel.send(xm8);
      break;
      case "m60":
      const m60 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/c0/b7/88/c0b7885cd0a78207cc166643b04fb44e.jpg"
      );
      message.channel.send(m60);
      break;
      case "dragunov":
      const drg = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/69/6a/ab/696aabc70fdb2d622ecec1e20b8fa06b.jpg"
      );
      message.channel.send(drg);
      break;
      case "m4a1":
      const m4a1 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/98/f3/16/98f3162a35c7139e4325733a0300f1fd.jpg"
      );
      message.channel.send(m4a1);
      break;
      case "sks":
      const sks = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/b0/56/51/b05651dd0599c5124691d149d244e294.jpg"
      );
      message.channel.send(sks);
      break;
      case "groza":
      const groza = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/59/9e/40/599e40914d5dfbabc81e71641638ad78.jpg"
      );
      message.channel.send(groza);
      break;
      case "katana":
      const katana = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/97/c1/ea/97c1ea5abb25ff836fe1bfea251389bb.jpg"
      );
      message.channel.send(katana);
      break;
      case "bat":
      const bat = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/78/86/78/78867831a9cb5a72e4a411517f889a6f.jpg"
      );
      message.channel.send(bat);
      break;
      case "grenade":
      const grenade = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/6e/6d/5b/6e6d5b4a6ac69ef6122f09b743f243bb.jpg"
      );
      message.channel.send(grenade);
      break;
      case "parang":
      const parang = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/63/10/0d/63100dc02cc07a88abba64e43201991f.jpg"
      );
      message.channel.send(parang);
      break;
      case "cg15":
      const cg15 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/67/ca/f9/67caf9b6504a460b1e6a8f9243104086.jpg"
      );
      message.channel.send(cg15);
      break;
      case "p90":
      const p90 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/2d/75/2f/2d752f409184a514e906271cc1f6983c.jpg"
      );
      message.channel.send(p90);
      break;
      case "ump":
      const ump = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/f0/b0/58/f0b05828aa2ee5b05e3e6b60f1e59679.jpg"
      );
      message.channel.send(ump);
      break;
      case "mp5":
      const mp5 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/1f/b8/7d/1fb87d62f97c83c2dd300555edf1056e.jpg"
      );
      message.channel.send(mp5);
      break;
      case "vss":
      const vss = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/68/d4/f2/68d4f2b93ae6b02dece4162a015dbaba.jpg"
      );
      message.channel.send(vss);
      break;
      case "m249":
      const m249 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/75/33/46/753346a99fc98d3e08768e4b4c83e1ef.jpg"
      );
      message.channel.send(m249);
      break;
      case "mgl140":
      const mgl140 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/0f/30/46/0f30463a80d42af109c7b4e3c80f25a9.jpg"
      );
      message.channel.send(mgl140);
      break;
      case "rgs50":
      const rgs50 = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/a7/2d/c8/a72dc8256227360b09ab3288781956fe.jpg"
      );
      message.channel.send(rgs50);
      break;
      case "awm":
      const awm = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/7b/b3/c1/7bb3c1b3c6acc5b80de6c3dc9d62cf19.jpg"
      );
      message.channel.send(awm);
      break;
      case "kar98k":
      const kar98k = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/60/57/de/6057deb0499399e45fd88d3adfd279c3.jpg"
      );
      message.channel.send(kar98k);
      break;
      case "itachi":
      const itachi = new RichEmbed().setImage(
        "https://i.pinimg.com/originals/19/e0/82/19e082ac5754c0861bf7c6f1d410f511.jpg"
      );
      message.channel.send(itachi);
      break;
      default:
            message.channel.send("Not defined yet");
      }
      
    }
};