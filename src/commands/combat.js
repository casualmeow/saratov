const combatService = require('../services/combatService');

module.exports = {
    name: 'combat',
    description: 'Start a combat',
    execute(message, args) {
        combatService.startCombat(message, args);
    }
};
