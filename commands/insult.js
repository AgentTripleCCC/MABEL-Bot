const Discord = require('discord.js');
const querystring = require('querystring');
const fetch = require('node-fetch');

module.exports = {
    name: 'insult',
    description: "Insult the person who didn't block the Caitlinn ultimate.",
    async execute (message, args) 
    {
        //if(!args.length) {return message.channel.send("Lord Gabel does not know who to make fun of.");}

        const query = querystring.stringify({who: args.join(' ')});
        try {
            const list = await fetch(`https://insult.mattbas.org/api/insult.json?${query}`).then(response => response.json());
            console.log(list);

            if(!list)
            {
                return message.channel.send('Lord Gaybel cannot find such language, speak normally.');
            }
    
            message.channel.send(`${list.insult}!`);
        } catch(error) {
            console.log(`Promise Error`);
            console.log(list[0]);
            message.channel.send(`Promise Error`);
        }
    
    }
}