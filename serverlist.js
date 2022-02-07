module.exports = {
    name: "serverlist",
    description: "Mostra a lista de servidores que o bot está",
    run: async (client, message, args, storage) => {
  
     if (!['493282797222494230'].includes(message.author.id))
      return message.reply(
        "Apenas meu criador pode usar!")
  
  client.guilds.cache.map(g => message.author.send(`➡ ${g.name}・||${g.id}||`))
  
  message.author.send(`Totalizando ${client.guilds.cache.size} servidores`)
    }
  }