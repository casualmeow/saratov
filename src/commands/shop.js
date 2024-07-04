const shopService = require('../services/shopService');

module.exports = {
    name: 'shop',
    description: 'Access the shop',
    execute(message, args) {
        shopService.handleShop(message, args);
    }
};
