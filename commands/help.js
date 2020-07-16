module.exports = 
{
    name: 'help',
    description: "Our Lord and Savior blesses you with a list of commands to worship me further.",
    aliases: ['commands'],
    usage: '[command name]',
    execute(message, args) 
    {

        const data = [];
        const { commands } = message.client;

        if(!args.length)
        {
            data.push("Commands:");
            data.push(commands.map(command => command.name).join(', '));

            return message.author.send(data, { splot: true})
                .then(() => {
                    if(message.channel.type === 'dm') return;
                    message.reply("Our Lord and Savior blesses you with a list of commands to worship me further.");
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name);
    }
}