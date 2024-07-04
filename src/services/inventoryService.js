const User = require('../models/user');

module.exports.checkInventory = async (message, args) => {
    const user = await User.findOne({ discordId: message.author.id });

    if (!user) {
        return message.channel.send('You need to register first.');
    }

    if (user.inventory.length === 0) {
        return message.channel.send('Your inventory is empty.');
    }

    const inventoryList = user.inventory.join(', ');
    return message.channel.send(`Your inventory: ${inventoryList}`);
};
