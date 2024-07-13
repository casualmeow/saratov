const inventoryService = require('../services/inventoryService');

module.exports = {
    name: 'info',
    description: 'Check your info such coins, inventory, e.t.c.',
    execute(message, args) {
        inventoryService.checkInventory(message, args);
    }
};