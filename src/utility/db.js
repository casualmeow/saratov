const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    host: 'localhost',
    storage: process.env.DATABASE_DIR,
    logging: false
});

module.exports = sequelize;
