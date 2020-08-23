module.exports = {
	name: 'roll',
    description: 'Forcing Anthony to decide for once in his life.',
    execute(message, args) {
        if (!args.length || isNaN(args))
        {
            return message.reply("Lord Gaybel would like valid arguments.");
        }
    
        const min = 0;
        const max = args;
        const rand = Math.random() * (max - min) + min;
        
        return message.channel.send(message.member.user.username + " rolled a " + Math.trunc(rand) + "!");
    }
}