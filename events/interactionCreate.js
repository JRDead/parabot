const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`Ningún comando que coincidiera con: "${interaction.commandName}" fue encontrado.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Hubo un error al ejecutar: ${interaction.commandName}`);
			console.error(error);
		}
	},
};