const inventoryService = require('../services/inventoryService');

module.exports = {
    name: 'inventory',
    description: 'Check your inventory',
    execute(message, args) {
        inventoryService.checkInventory(message, args);
    }
};