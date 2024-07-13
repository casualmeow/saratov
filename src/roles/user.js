const { DataTypes } = require('sequelize');
const sequelize = require('../utility/db');

const User = sequelize.define('User', {
    discord_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    entry_channel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coins: {
        type: DataTypes.INTEGER,
        defaultValue: 100,
        allowNull: true
    },
    inventory: {
        type: DataTypes.JSON,
        defaultValue: {},
        allowNull: true
    },
    entry_role: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = User;
