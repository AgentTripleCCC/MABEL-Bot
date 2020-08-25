module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	execute(message, args) {
        if(!args.length) {
            return message.channel.send("Please give our Lord and Savior a command to review.");
        }

        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
                || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if(!command) {
            return message.channel.send("Lord Gabel does not like jokes, please give him a valid command to review.");
        }
        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
        } catch (error) {
            console.log(error);
            message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }
        message.channel.send(`Command \`${command.name}\` was reloaded!`);
	},
};