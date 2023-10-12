const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Obtener información sobre el servidor de Minecraft'),
    async execute(interaction) {
        const serverIp = '38.7.218.8';
        const serverPort = 25565;

    // Hacer una solicitud a la API para obtener información básica del servidor
    const apiURL = `https://api.mcsrvstat.us/2/${serverIp}:${serverPort}`;
    try {
        const response = await axios.get(apiURL);

        if (response.data.online) {
            const onlinePlayers = response.data.players.online;

        // Crear un embed con la información
            const embed = {
                title: 'Reporte de Paradise',
                color: 0x00ff00,
                fields: [
                    {
                    name: 'Jugadores en línea',
                    value: onlinePlayers,
                    },
                    {
                    name: 'Estado',
                    value: 'En línea',
                    },
                    {
                    name: 'Versión',
                    value: '1.20.X',
                    }
                ],
                footer: {
                    text: '¡Información por Paradise Chile Network!',
                },
            };

            interaction.reply({ embeds: [embed] });
        }   else {
            interaction.reply('El servidor está fuera de línea.');
        }
    }   catch (error) {
        console.error(error);
        interaction.reply('Hubo un error al consultar el servidor. Verifica la dirección IP y el puerto.');
        }
    },
};
