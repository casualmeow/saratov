const User = require('../models/user');

module.exports.startCombat = async (message, args) => {
    const user = await User.findOne({ discordId: message.author.id });

    if (!user) {
        return message.channel.send('You need to register first.');
    }

    // Placeholder logic for combat
    const opponentId = args[0];
    const opponent = await User.findOne({ discordId: opponentId });

    if (!opponent) {
        return message.channel.send('Opponent not found.');
    }

    const userPower = Math.floor(Math.random() * 100);
    const opponentPower = Math.floor(Math.random() * 100);

    if (userPower > opponentPower) {
        user.coins += 10;
        await user.save();
        return message.channel.send(`You won the combat! You earned 10 coins.`);
    } else {
        return message.channel.send('You lost the combat.');
    }
};
