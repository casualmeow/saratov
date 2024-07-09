const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utility/db');

const User = sequelize.define('User', {
    discord_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    entry_channel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    welcome_role_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    inventory: {
        type: DataTypes.JSON,
        allowNull: true
    },
    entry_role: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = User;
