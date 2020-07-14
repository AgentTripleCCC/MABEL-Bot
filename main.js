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
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const random = require("./random.js");
const constants = require("./constants.js");
const Sequelize = require('sequelize');


//Listener event for when the bot sends a ready event (ex: logging in)
client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`);
 });

 //Listener Event which runs whenever a message with prefix '!' is received
client.on('message', message => {

     var msg = message.content.toLowerCase(); //Turns message to uppercase, to make commands not case sensitive
     var sender = message.author; //Author of the message is set to the sender
     
     console.log(msg);
     if (!msg.startsWith(config.prefix) || sender.bot) {return;}

     if (msg.startsWith(config.prefix + 'pray')) {
          message.channel.send('Your prayers have been heard... Lord Gaybel is pleased!'); 
     }
    
     if(msg.startsWith(config.prefix + "fortune")) {
           message.channel.send('The fortune trumpet is not function currently... we are working hard to make sure that your fortunes are told.');
           message.channel.send(random.getRandomInt(constants.MIN, constants.MAX));
     }
 });


//Discord Login Token
client.login(config.TOKEN);