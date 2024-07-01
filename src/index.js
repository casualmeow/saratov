
import { REST, Routes } from 'discord.js';

const TOKEN = 'MTI1Njg2NzA3MzQwNjI3MTQ4OA.GHirVP.KqkN83cGqjsvsuUBdqU9wGe4grlBhpyU2ORq80';

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

async function refreshCommands() {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands('1256867073406271488'), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}

refreshCommands();
