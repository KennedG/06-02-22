const express = require('express');
const db = require('quick.db');
const mongoose = require('mongoose')
const c = require('colors')
const ping = require("kettraworld-ping") 



const app = express();
app.get('/', (req, res) => res.send('Gizmo foi ligado com sucesso! mais informações na console do bot. mensagem de reinicialização foi enviada.🟢'));
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);

	response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online
const Discord = require('discord.js'); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos

//Status do bot
client.on('ready', () => {
	let activities = [
	`💎| Utilize ${config.prefix}help para a lista de comandos`,
	`🟢| ${client.guilds.cache.size} servidores!`,
	`🎶| ${client.channels.cache.size} canais!`,
	`✔| ${client.users.cache.size} usuários!`,
	`👑| Criador Geral:   @guilhermekenned_`,
    `⚔|G!HELP`,
	`⚙| Qualquer problema entre em contato usando o g!suporte`,
    `Shard 1`,
		
	],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: "PLAYING",
			}),
		1000 * 5
	);
	client.user
		.setStatus('')

		.catch(console.error);
	console.log(`ah...Olá`);
    console.log(`Estava tomando um café`);
	console.log('Ligando meu sistema...');
	console.log('Aguarde...');
	console.log('Iniciado!');
	console.log(`${client.user.tag}\n🟢Foi iniciado em ${client.guilds.cache.size} sevidores!\n🟢Tendo acesso a ${client.channels.cache.size} canais!\n🟢 Contendo ${client.users.cache.size} usuarios!`)


});

//Quando entra no servidor 𝗗𝗶𝘀𝗰𝗼𝗿𝗱 𝗱𝗼 𝗞𝗲𝗻𝗻𝗲𝗱
client.on('guildMemberAdd', async member => {
	let guild = await client.guilds.cache.get('644991505873895434');
	let channel = await client.channels.cache.get('769627013815205958');
	let emoji = await member.guild.emojis.cache.find(
		emoji => emoji.name === ':emoji_59:'
	);
	if (guild != member.guild) {
		return console.log('Sem boas-vindas pra você! Sai daqui saco pela.');
	} else {
		let embed = await new Discord.MessageEmbed()
			.setColor('#7c2ae8')
			.setAuthor(member.user.tag, member.user.displayAvatarURL())
			.setTitle(`<a:verificado:908562051927007242>  Boas-vinda <a:verificado:908562051927007242> `)
			.setImage('https://i.imgur.com/PFJbjNB.gif')
			.setDescription(
				` ** <:branco_pessoaRDM:908562579117453342>${member.user}**, bem-vindo(a) ao servidor **${
				guild.name
				}**! Atualmente estamos com **${
				member.guild.memberCount
				} membros**, divirta-se conosco! :heart:`
			)
			.setThumbnail(
				member.user.displayAvatarURL({
					dynamic: true,
					format: 'png',
					size: 1024
				})
			)
			.setFooter()
			.setTimestamp();

		channel.send(embed);
	}
});

//Quando entra no servidor TWO
client.on('guildMemberAdd', async member => {
	let guild = await client.guilds.cache.get('868292175400689685');
	let channel = await client.channels.cache.get('868293481326608394');
	let emoji = await member.guild.emojis.cache.find(
		emoji => emoji.name === ':emoji_59:'
	);
	if (guild != member.guild) {
		return console.log('Sem boas-vindas pra você! Sai daqui saco pela.');
	} else {
		let embed = await new Discord.MessageEmbed()
			.setColor('#7c2ae8')
			.setAuthor(member.user.tag, member.user.displayAvatarURL())
			.setTitle(`<a:verificado:908562051927007242>  Boas-vinda <a:verificado:908562051927007242> `)
			.setImage('')
			.setDescription(
				` ** <:branco_pessoaRDM:908562579117453342>${member.user}**, bem-vindo(a) ao servidor **${
				guild.name
				}**! Atualmente estamos com **${
				member.guild.memberCount
				} quero que você se foda!`
			)
			.setThumbnail(
				member.user.displayAvatarURL({
					dynamic: true,
					format: 'png',
					size: 1024
				})
			)
			.setFooter()
			.setTimestamp();

		channel.send(embed);
	}
});



//Entrada 🩸 INFERNUS
client.on('guildMemberAdd', async member => {
	let guild = await client.guilds.cache.get('916737235070619729');
	let channel = await client.channels.cache.get('916737235515219977');
	let emoji = await member.guild.emojis.cache.find(
		emoji => emoji.name === ':emoji_59:'
	);
	if (guild != member.guild) {
		return console.log('Sem boas-vindas pra você! Sai daqui saco pela.');
	} else {
		let embed = await new Discord.MessageEmbed()
			.setColor('#7c2ae8')
			.setAuthor(member.user.tag, member.user.displayAvatarURL())
			.setTitle(``)
			.setImage('')
			.setDescription(`** <:branco_pessoaRDM:908562579117453342>${member.user}**, bem-vindo(a) ao inferno **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, Espero que não faça o inferno ficar mais quente... `)
			.setThumbnail(member.user.displayAvatarURL({
				dynamic: true,
				format: 'png',
				size: 1024
			})
			)

			.setTimestamp();

		channel.send(embed);
	}
});

//Entrada 𝐿𝑜𝑠 𝐽𝑜𝑘𝑒𝑟’𝑠 
client.on('guildMemberAdd', async member => {
	let guild = await client.guilds.cache.get('806755769147588608');
	let channel = await client.channels.cache.get('857217762623225856');
	let emoji = await member.guild.emojis.cache.find(
		emoji => emoji.name === ''
	);
	if (guild != member.guild) {
		return console.log('Sem boas-vindas pra você! Sai daqui saco pela.');
	} else {
		let embed = await new Discord.MessageEmbed()
			.setColor('#7c2ae8')
			.setAuthor(member.user.tag, member.user.displayAvatarURL())
			.setTitle(`<a:verificado:908562051927007242>  Boas-vinda <a:verificado:908562051927007242> `)
			.setImage('https://i.imgur.com/t0zxXmc.jpeg')
			.setDescription(`**<a:raivapisca:859296464987881492> Olá **${member.user}**,Bem vindo ao **${guild.name}** atualmente estamos com **${member.guild.memberCount} membros. <a:raivapisca:859296464987881492>**Divirta-se, seu bosta.**<a:raivapisca:859296464987881492> `)
			.setThumbnail(member.user.displayAvatarURL({
				dynamic: true,
				format: 'png',
				size: 1024
			})
			)

			.setTimestamp();

		channel.send(embed);
	}
});

// Menção
client.on("message", message => {
	if (message.author.bot) return;
	if (message.channel.type == 'mencao')
		return
	if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
		return message.channel.send({
			embed: new Discord.MessageEmbed()
				.setColor('RANDOM') //se quiser e so alterar a cor
				.setTitle("<a:festa:898814251404247050> | Olá, Me chamaram?")
				.setDescription(`   
     > <:az_moderador_old:909264644168900629> » Meu prefixo é **g!**. 
     > <a:mundo:897137157704142888>» Use ${config.prefix}help ou ${config.prefix}ajuda para ver meus comandos!
     > <a:sintonia_emoji239:909266143204741181> » Website: [Site](https://sites.google.com/view/botgizmo)
     > <:badgePartner:909263598788968478>  » Link Do Meu Servidor: [Suporte](https://discord.gg/BVuYfhB9Gn)
	 
     > ** <a:coroa:898814229640019968> | Meu criador: <a:Desenvolvedor:861997097598844929> <@493282797222494230>**`)
				.setImage("https://i.imgur.com/PFJbjNB.gif")
				.setTimestamp()
				.setFooter(`Fui mencionado por ${message.author.tag}`, message.author.displayAvatarURL())
		})
	}
});


//entra no canal especifico assim que o bot ficar online
client.on("ready", () => {
	const channel = client.channels.cache.get("645054570816471082");//id do voice channel em que deseja que bot entre
	if (!channel) return console.error("O canal não existe!");
	channel.join().then(connection => { 'Funcionou!', console.log("Conectado ao canal.✔"); }).catch(er => { 'Ocorreu um erro', console.error(er); });
});


//Mensagem Reinicialização
client.on("ready", () => {
	var rei = client.channels.cache.get("905222116130033755");
let reimsg = new Discord.MessageEmbed()
		.setTitle(``)
		.setDescription(`
<a:ping:909996412660502608>| Acabei de ser reinicializado!
<:online:909288899862478878>  **Estou em:** ${client.guilds.cache.size} servidores!
**<a:coroa:898814229640019968> Responsável pela reinicialização <@493282797222494230> **
<:az_moderador_old:909264644168900629> **Cuidando de:** ${client.users.cache.size} usuários.`)
		.setFooter(`Reinicializado em: `)
		.setColor("#000000")
		.setImage(``)
		.setTimestamp();

	rei.send(reimsg)
});


//Mensagem de Shards
client.on("ready", () => {
	var rei = client.channels.cache.get("905231030510821426");//caso não tenha cria um com o nome status 

	let reimsg = new Discord.MessageEmbed()
		.setTitle(`SHARD STATUS`)
		.setDescription(`Shard 1 iniciada com sucesso.`)
		.setColor("#000000")
		.setImage(``)

	rei.send(reimsg)
});

//RESPONDER MENSAGEM - BOM DIA
client.on('message', message => {
    const ab = "🏙️ Bom Dia, Tudo Bem?<a:a_solRFE:928091627627610143>"
  
    if(message.content.startsWith("bom dia")){
      return message.reply(ab)
      
    }
  }) 


//RESPONDER MENSAGEM - BOA TARDE
client.on('message', message => {
    const ab = "🌆 Boa Tarde, Tudo Bem?<a:v_solRFE:928091667796488292> "
  
    if(message.content.startsWith("boa tarde")){
      return message.reply(ab)
      
    }
  }) 


//RESPONDER MENSAGEM - BOA NOITE
client.on('message', message => {
    const ab = "🌃 Boa noite, Tudo bem?<a:b_luaRFE:928091719227043850>"
  
    if(message.content.startsWith("boa noite")){
      return message.reply(ab)
      
    }
  }) 

//RESPONDER MENSAGEM DE BOM DIA EM MINUSCÚLO. ESTÁ ABAIXO

//RESPONDER MENSAGEM - BOM DIA
client.on('message', message => {
    const ab = "🏙️ Bom Dia, Tudo Bem?<a:a_solRFE:928091627627610143>"
  
    if(message.content.startsWith("Bom dia")){
      return message.reply(ab)
      
    }
  }) 


//RESPONDER MENSAGEM - BOA TARDE
client.on('message', message => {
    const ab = "🌆 Boa Tarde, Tudo Bem?<a:v_solRFE:928091667796488292> "
  
    if(message.content.startsWith("Boa tarde")){
      return message.reply(ab)
      
    }
  }) 


//RESPONDER MENSAGEM - BOA NOITE
client.on('message', message => {
    const ab = "🌃 Boa noite, Tudo bem?<a:b_luaRFE:928091719227043850>"
  
    if(message.content.startsWith("Boa noite")){
      return message.reply(ab)
      
    }
  }) 


// MENSAGEM DE QUANDO E ADICIONADO
client.on("guildCreate", (guild) => {
	let channelSend;
	let prefix = config.prefix;

	guild.channels.cache.forEach((channel) => {
		if (
			channel.type === "text" &&
			!channelSend &&
			channel.guild.me.hasPermission("SEND_MESSAGES"))
			channelSend = channel;
	});

	if (!channelSend) return;

	channelSend.send(`<a:coroa:898814229640019968> Para ver minha central de ajuda digite **[g!ajuda ou g!help]**`);
})


// MENSAGEM DE QUANDO E ADICIONADO
client.on('guildCreate', function(guild) {
	var channel = client.channels.cache.get('907751959254167583');
	var owner = guild.owner;

	const msg = new Discord.MessageEmbed()
		.setColor('#ff58c3')

		.setTitle(`<a:verificado:908562051927007242>| Fui adicionado em um novo servidor!`)

		.addField(`<a:hype:897139138661351434>| Nome do servidor:`, `\`${guild.name}\``, false)

		.addField(`<a:sintonia_emoji239:909266143204741181>| Id do servidor`, `\`${guild.id}\``, false)

		.addField(`<:branco_pessoaRDM:908562579117453342>| Quantidade de membros:`, `\`${guild.memberCount}\``, false)

		.addField(`<a:coroa:898814229640019968>| Dono:`, `\`${guild.owner.user.tag}\``, false)

		.addField(`<:czVoz_TTB:927082983087829092>|Total De Canais:`, `\`${guild.channels.cache.size}\``, false)

		.addField(`<:az_moderador_old:909264644168900629>|Total de servidores agora:`, `\`${client.guilds.cache.size}\``, false)

		.setTimestamp();

	channel.send(msg);
});



// MENSAGEM DE QUANDO E REMOVIDO DE UM SERVIDOR
client.on('guildDelete', function(guild) {
	var channel = client.channels.cache.get('925169349264830484');
	var owner = guild.owner;

	const msg = new Discord.MessageEmbed()
		.setColor('#ff58c3')

		.setTitle(`<a:verificado:908562051927007242>| Fui Removido de servidor!`)

		.addField(`<a:hype:897139138661351434>| Nome do servidor:`, `\`${guild.name}\``, false)

		.addField(`<a:sintonia_emoji239:909266143204741181>| Id do servidor`, `\`${guild.id}\``, false)

		.addField(`<:branco_pessoaRDM:908562579117453342>| Quantidade de membros:`, `\`${guild.memberCount}\``, false)

		.addField(`<a:coroa:898814229640019968>| Dono:`, `\`${guild.owner.user.tag}\``, false)

		.addField(`<:czVoz_TTB:927082983087829092>|Total De Canais:`, `\`${guild.channels.cache.size}\``, false)

		.addField(`<:az_moderador_old:909264644168900629>|Total de servidores agora:`, `\`${client.guilds.cache.size}\``, false)

		.setTimestamp();

	channel.send(msg);
});


//SET MSG APAGADAS
client.on("messageDelete", async (message) => {

	let ferinha_canal = db.get(`ferinha_msg_del_${message.guild.id}`);
	if (!ferinha_canal === null) return;

	if (message.author.bot) return;

	let ferinha_author = message.author;
	let ferinha_canal_2 = message.channel;
	let ferinha_msg_del = message.content;

	let ferinha_msg_embed = new Discord.MessageEmbed()
		.setTitle(`<:az_moderador_old:909264644168900629>  | Mensagem Excluída`)
		.setColor("FFFFFF")
		.addFields(
			{
				name: `<:error:909246856616366150> | Mensagem Apagada Por:`,
				value: ferinha_author,
				inline: false
			},
			{
				name: `<:dcl_ypSino:914350019182723122> | Canal`,
				value: ferinha_canal_2,
				inline: false
			},
			{
				name: `⌨️ | Mensagem Apagada:`,
				value: `\`\`\`${ferinha_msg_del}\`\`\``,
				inline: false
			}
		)
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setFooter(message.guild.name, message.guild.iconURL());

	client.channels.cache.get(ferinha_canal).send(ferinha_msg_embed)
});


//SET MSG EDITADAS
client.on("messageUpdate", async (message, oldMessage) => {
	let ferinha_canal = db.get(`ferinha_msg_edit_${message.guild.id}`);
	if (!ferinha_canal === null) return;

	if (message.author.bot) return;

	let ferinha_author = message.author;
	let ferinha_canal_2 = message.channel;
	let ferinha_msg_antiga = message.content;
	let ferinha_msg_editada = oldMessage.content;

	let ferinha_embed = new Discord.MessageEmbed()
		.setTitle(`<:az_moderador_old:909264644168900629>  Mensagem editada`)
		.setColor("FFFFFF")
		.addFields(
			{
				name: `<:error:909246856616366150> | Mensagem Editada Por:`,
				value: ferinha_author,
				inline: false
			},
			{
				name: `<:dcl_ypSino:914350019182723122>  Canal`,
				value: ferinha_canal_2,
				inline: false
			},
			{
				name: `Mensagem Antiga:`,
				value: `\`\`\`${ferinha_msg_antiga}\`\`\``,
				inline: false
			},
			{
				name: `Mensagem Nova/Editada:`,
				value: `\`\`\`${ferinha_msg_editada}\`\`\``,
				inline: false
			}
		)
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setFooter(message.guild.name, message.guild.iconURL());

	client.channels.cache.get(ferinha_canal).send(ferinha_embed)
});


//SET BOAS VINDAS
client.on("guildMemberAdd", (member) => {
	let ferinha_canal_de_boas_vindas = db.get(`ferinha_boas_vindas_${member.guild.id}`);
	let ferinha_contador = member.guild.memberCount;
	let ferinha_servidor = member.guild.name;

	if (!ferinha_canal_de_boas_vindas) return;

	let msg_embed_ferinha = new Discord.MessageEmbed() //mensagem embed
		.setAuthor(`${member.user.tag}`, member.user.avatarURL())
		.setDescription(`
  🎉 • Bem Vindo Ao Servidor, ${member.user}!
  
  💬 • Interaja Com Os Membros No Bate Papo!
  📢 • Fique De Olho Nos Avisos Do Servidor! 
  📜 • Leia As Nossas Regras Para Evitar Punições! 
  
  `)
		.setColor('RANDOM')
		.setFooter(`Agora Temos ${ferinha_contador} Membros! `)
		.setThumbnail(member.user.avatarURL());

	let msg_not_embed_ferinha = `Bem Vindo ${member.user}! 
   📑 • Registre-se Em 
  Atualmente Estamos Com \`${ferinha_contador}\` membros!`; //mensagem não embed

	client.channels.cache.get(ferinha_canal_de_boas_vindas).send(msg_embed_ferinha)
});


//SET SAÍDA
client.on("guildMemberRemove", (member) => {
	let ferinha_canal_de_saida = db.get(`ferinha_saída_${member.guild.id}`);
	let ferinha_contador = member.guild.memberCount;

	if (!ferinha_canal_de_saida) return;

	let msg_embed_ferinha = new Discord.MessageEmbed() //mensagem embed
		.setAuthor(`${member.user.tag}`, member.user.avatarURL())
		.setDescription(`O usuário ${member.user} saiu do servidor!
  
  😢 • Espero Que Algum Dia Volte.
  `)
		.setFooter(`Um Usuário Saiu, Agora Estamos Com \`${ferinha_contador}\` membros!
  `)
		.setColor("RANDOM")
		.setThumbnail(member.user.avatarURL());

	let msg_not_embed_ferinha = `O usuário ${member.user} saiu do servidor! \nAtualmente estamos com \`${ferinha_contador}\` membros!`; //mensagem não embed

	client.channels.cache.get(ferinha_canal_de_saida).send(msg_embed_ferinha)
});


//HANDLER
client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
	if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

	const args = message.content
		.trim().slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	let prefixo_fera = db.get(`ferinha_prefixo_${message.guild.id}`);
	if (!prefixo_fera) prefixo_fera = config.prefix;

	try {
		const commandFile = require(`./commands/${command}.js`)
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}


});

//AFK Data Base
client.on("message", async message => {

    let afk = new db.table("AFKs"),
          authorStatus = await afk.fetch(message.author.id),
          mentioned = message.mentions.members.first();
      
      if (mentioned) {
        let status = await afk.fetch(mentioned.id);
        
        if (status) {
          message.channel.send(`O Usúario **${mentioned.user.tag}** está AFK \nMotivo: **${status}**`).then(i => i.delete({timeout: 
    
    5000}));
        }
      }
      
      if (authorStatus) {
        message.channel.send(`${mentioned.user.tag} Não está mais AFK.<a:online:925875488944164894>`).then(i => i.delete({timeout: 5000}));
        afk.delete(message.author.id)
      }
    })

//ANTICLASHS

process.on('unhandledRejection', (reason, p) => {
	console.log(' [ ANTICLASH ] | SCRIPT REJEITADO');
	console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
	console.log(' [ ANTICLASH] | CATCH ERROR');
	console.log(err, origin);
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
	console.log(' [ ANTICLASH ] | BLOQUEADO');
	console.log(err, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
	console.log(' [ ANTICLASH ] | VÁRIOS ERROS');
	console.log(type, promise, reason);
});
client.login(process.env.TOKEN); // Acessando ao TOKEN