const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    discordId: String,
    username: String,
    coins: Number,
    inventory: Array,
});

module.exports = mongoose.model('User', userSchema);