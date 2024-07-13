const fs = require('fs');
const { prefix } = require('../config/config.json');
const { registerUser } = require('../services/registerService');

module.exports.handle = async (message) => {
    await registerUser(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`../commands/${command}.js`);
        commandFile.execute(message, args);
    } catch (error) {
        message.channel.send(`Command ${command} not found`);
    }
};
