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