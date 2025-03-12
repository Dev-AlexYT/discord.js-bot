const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('The command to send the bots ping.'),
    async execute (interaction) {
        const botPing = Math.floor
    await interaction.reply({ content: `The Bots Ping is: ${botPing}`})
    }
}