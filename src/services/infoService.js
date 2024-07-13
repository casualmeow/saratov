const User = require('../roles/user');
require('dotenv').config();

module.exports.watchUserInformation = async (message, args) => {


    const inventoryList = user.inventory.join(', ');
    return message.channel.send(`Your inventory: ${inventoryList}`);
};