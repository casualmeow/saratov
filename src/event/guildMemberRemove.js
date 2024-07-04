module.exports = {
    name: 'guildMemberRemove',
    execute(member) {
        const channel = member.guild.systemChannel;
        if (!channel) return;
        channel.send(`${member} has left the server.`);
    },
};
