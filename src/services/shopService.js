const User = require('../models/user');

const items = [
    { name: 'Sword', cost: 100 },
    { name: 'Shield', cost: 150 },
];

module.exports.handleShop = async (message, args) => {
    const user = await User.findOne({ discordId: message.author.id });

    if (!user) {
        return message.channel.send('You need to register first.');
    }

    if (args[0] === 'list') {
        const itemList = items.map(item => `${item.name}: ${item.cost} coins`).join('\n');
        return message.channel.send(`Available items:\n${itemList}`);
    } else if (args[0] === 'buy') {
        const itemName = args[1];
        const item = items.find(i => i.name.toLowerCase() === itemName.toLowerCase());

        if (!item) {
            return message.channel.send('Item not found.');
        }

        if (user.coins < item.cost) {
            return message.channel.send('Not enough coins.');
        }

        user.coins -= item.cost;
        user.inventory.push(item.name);
        await user.save();
        return message.channel.send(`You bought a ${item.name}!`);
    } else {
        return message.channel.send('Invalid command. Use "!shop list" to see available items or "!shop buy [item]" to buy an item.');
    }
};
