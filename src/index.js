require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { prefix } = require('./config/config.json');
const commandHandler = require('./handler/commandHandler');
const eventHandler = require('./handler/eventHandler');
const sequelize = require('./utility/db');
const User = require('./roles/user');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});


client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
})

eventHandler(client);

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    commandHandler.handle(message);
});

client.login(process.env.TOKEN);
