const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('Entrega la IP del Servidor'),
	async execute(interaction) {
		await interaction.reply('Usa esta **IP** para conectarte:```play.paradisemc.cl```');
	},
};