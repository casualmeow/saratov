const User = require('../models/user');

module.exports = {
    name: 'register',
    description: 'Register a new user',
    execute: async (message, args) => {
        const existingUser = await User.findOne({ discordId: message.author.id });

        if (existingUser) {
            return message.channel.send('You are already registered.');
        }

        const newUser = new User({
            discordId: message.author.id,
            username: message.author.username,
            coins: 100,
            inventory: [],
        });

        await newUser.save();
        return message.channel.send('You have been registered!');
    }
};
