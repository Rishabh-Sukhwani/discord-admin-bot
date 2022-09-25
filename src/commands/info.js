const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Display user and server info'),
    async execute(interaction) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}\nServer name: ${interaction.guild.name}\n$Total members: ${interaction.guild.memberCount}`);
    },
};