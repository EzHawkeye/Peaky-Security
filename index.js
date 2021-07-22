const Discord = require("discord.js");
const botConfig = require("./botconfig.json");

const SUGGESTION_CHANNEL = '867769713391042621'
const SUGGESTION_CHANNEL2 = ''

Discord.RichEmbed = Discord.MessageEmbed;

const fs = require("fs");

const bot = new Discord.Client();
bot.commands = new Discord.Collection();




fs.readdir("./commands/", (err, files) => {

  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
      console.log("Kon geen files vinden");
      return;
  }

  jsFiles.forEach((f, i) => {

      var fileGet = require(`./commands/${f}`);
      console.log(`De kanker file ${f} is geladen`);

      bot.commands.set(fileGet.help.name, fileGet);

  })

});


bot.on("ready", async () => {

    console.log(`BOOMMM ${bot.user.username} is online!`);

    bot.user.setActivity("🛠️ Peaky API", { type: "PLAYING" });

})

bot.on("message", async message => {

    // Als bot bericht stuurt stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;


    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");


    var command = messageArray[0];

    if(!message.content.startsWith(prefix)) return;
    
    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot,message, arguments);

    if (message.channel.id === SUGGESTION_CHANNEL) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.member.nickname ? message.member.nickname : message.author.tag, message.author.displayAvatarURL())
        .setColor(15158332)
        .setTitle('Peaky Security Suggestions')
        .setDescription(message.content)
        .setFooter(`Peaky Sec... | ${message.author.tag}`)
        message.channel.send(embed).then((message) => {
          const sent = message;
          sent.react ('✅');
            sent.react('❌');
            
          
        });
        return message.delete();
      }

      if (message.channel.id === SUGGESTION_CHANNEL2) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.member.nickname ? message.member.nickname : message.author.tag, message.author.displayAvatarURL())
        .setColor(15844367)
        .setTitle('Poll')
        .setDescription(message.content)
        .setFooter(`Community | ${message.author.tag}`)
        message.channel.send(embed).then((message) => {
          const sent = message;
          sent.react ('✅');
            sent.react('❌');
            
          
        });
        return message.delete();
      }


}); 



bot.login(process.env.token);