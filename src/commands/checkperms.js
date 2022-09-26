const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('checkperms')
        .setDescription('Check wether a member has kick and ban permissions')
        .addUserOption(option => option.setName('target').setDescription('Member to check permissions for')),
    async execute(interaction) {
        const member = interaction.options.getMember('target');

        if (member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
            return interaction.reply(`${member} can kick`);
        }

        if (member.permissions.has(PermissionsBitField.Flags.KickMembers, PermissionsBitField.Flags.BanMembers)) {
            return interaction.reply(`${member} can kick and ban`);
        }

        if (member.permissions.has(PermissionsBitField.Flags.KickMembers, false)) {
            return interaction.reply(`${member} can kick without allowing admin to override`);
        }

        else {
            return interaction.reply(`${member} cannot kick or ban`);
        }
    },

};
