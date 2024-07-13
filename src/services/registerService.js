const User = require('../roles/user');

module.exports.registerUser = async (message) => {
    try {
        const discord_id = message.author.id;
        const user_id = null;
        const user_name = message.author.username;
        const entry_channel = message.channel.id;
        const member = await message.guild.members.fetch(discord_id);
        const entry_role = member.roles.cache.map(role => role.name).join(', ');

        const [user, created] = await User.findOrCreate({
            where: { discord_id },
            defaults: {
                user_id,
                entry_channel,
                coins: 0,
                inventory: {},
                entry_role
            }
        });

        if (created) {
            console.log(`User ${user_name} registered successfully!`);
        }
    } catch (error) {
        console.error('Error registering user:', error);
    }
};