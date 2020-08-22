const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        message.channel.send({embed: {
            color: 1146986,
            description: `Welkom **${message.author.username}**. We heten u van harte welkom!`
          }});
    


}

module.exports.help = {
    name: "welkom"
}