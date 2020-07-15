/*
     Mighty gAbel Belief Enforcement Leader
     Discord Bot, written in JavaScript
     By Curtis Chung
     Started April 19, 2019
*/

/* 
IDEAS FOR IMPLEMENTATION:
!fortune feature
     - Super bad odds of getting lucky
     - possibly give points once point system is implemented

SQL user server, point system for praying
can redeem for rewards (mystery skin, buy food, etc)

*/
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const Sequelize = require('sequelize');

const config = require("./config.json");
const random = require("./random.js");
const constants = require("./constants.js");
const { FILE } = require('dns');


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles)
{
     const command = require(`./commands/${file}`);
     client.commands.set(command.name, command);
}
//Listener event for when the bot sends a ready event (ex: logging in)
client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`);
 });

 //Listener Event which runs whenever a message with prefix '!' is received
client.on('message', message => {

     if (!message.content.startsWith(config.prefix) || message.author.bot) return;

     const args = message.content.slice(config.prefix.length).trim().split(/ +/);
     const commandName = args.shift().toLowerCase(); //Turns message to uppercase, to make commands not case sensitive
     const command = client.commands.get(commandName);

     if (!client.commands.has(commandName)) {
          message.reply("Command does not exist, check your spelling silly goose.")
     }
      console.log(args);
      console.log(command);
     try {
          command.execute(message, args);
     } catch (error) {
          console.error(error);
          message.channel.send("error");
     }

 });


//Discord Login Token
client.login(config.TOKEN);