const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        message.channel.send({embed: {
            color: 1146986,
            description: `Als jullie suggesties hebben voor mij zet ze er ook maar bij xx :) grtjs hawkiee`
          }});
    
          return message.delete();

}

module.exports.help = {
    name: ""
}