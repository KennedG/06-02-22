const Discord = require("discord.js")

module.exports = {
    name: "unlockall", // Coloque o nome do comando do arquivo
    aliases: [""], // Coloque sinônimos aqui

    run: async (client, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply(`Você não possui a permissão de \`Administrador\`.`)
        } else {

            try {

                //message.reply(`✅`);

                message.guild.channels.cache.forEach(channel => {

                    if (channel.type === "GUILD_TEXT") {

                    channel.send(`\🔓 Canal desbloquado por ${message.author}.`).catch(e => console.log(e));

                    channel.permissionOverwrites.edit(message.guild.id, {SEND_MESSAGES: true, ADD_REACTIONS: null}).catch(e => console.log(e));
                }
      
                });

            } catch (e) {
                console.log(e)
            }
            
        }

    }
}