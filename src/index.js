require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
//test
client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
})

client.on('messageCreate', (message) => {
    console.log(`${message.content} typed by ${message.guild.id}`);
    if (message.author.bot) return; // bot check
    if (message.content === 'hello') {
        message.reply('Пошел нахуй!');
    }
})

client.login(process.env.TOKEN);

