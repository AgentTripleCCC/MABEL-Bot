/*
     Mighty Abel Believer, Enforcing Leader
     Discord Bot, written in JavaScript
     By Curtis Chung
     Started April 19, 2019
*/

/* 
IDEAS FOR IMPLEMENTATION:
!fortune feature

SQL user server, point system for praying
can redeem for rewards (mystery skin, buy food, etc)


*/
const Discord = require('discord.js');
 const client = new Discord.Client();
const config = require("./config.json");
const random = require("./random.js");
const constants = require("./constants.js");


//
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) {return;}

    if (msg.content.startsWith(config.prefix + 'pray')) {
         msg.reply('Your prayers have been heard... Lord Gaybel is pleased!');
    }
    
    if(msg.content.startsWith(config.prefix + "fortune")) {
          msg.reply('The fortune trumpet is not function currently... we are working hard to make sure that your fortunes are told.');
          msg.reply(random.getRandomInt(constants.MIN, constants.MAX));
     }
 });


//Discord Login Token
client.login(config.TOKEN);