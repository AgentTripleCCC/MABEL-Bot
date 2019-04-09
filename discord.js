
const Discord = require('discord.js');
 const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    if (msg.content.startsWith(config.prefix + 'pray')) {
         msg.reply('Your prayers have been heard... Gaybel is pleased!');
    }
 });


client.login(config.TOKEN);