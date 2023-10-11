const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`¡Listo! Has iniciado sesión como: ${client.user.tag}`);
	},
};