const commandHandler = require('../handlers/commandHandler');

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        commandHandler.handle(message);
    },
};
