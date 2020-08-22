const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.guild.members.fetch().then(fetchedMembers => {
        const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
        // We now have a collection with all online member objects in the totalOnline variable
        message.channel.send({embed: {
            color: 15105570,
            description: `Er zijn **${totalOnline.size}** members online in de Community!`
          }});
    });


}

module.exports.help = {
    name: "online"
}