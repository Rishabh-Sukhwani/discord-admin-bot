const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Select a member and kick them out (but not really).')
        .addUserOption(option => option.setName('target').setDescription('The member to kick')),
    async execute(interaction) {
        const member = interaction.options.getMember('target');
        if (!member) return interaction.reply('Please mention a valid member of this server');
        if (!member.kickable) return interaction.reply('I cannot kick this member!');

        await member.kick();
    },
};