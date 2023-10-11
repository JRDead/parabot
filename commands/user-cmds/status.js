const { SlashCommandBuilder } = require('discord.js');
const {ip, servername, serverlogo} = require('./config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Entrega información sobre el estado del servidor.'),
	async execute(interaction) {
// START
        // Fetch statistics from mcapi.us
        const res = await fetch(`https://mcapi.us/server/status?ip=${config.ipAddress}${config.port ? `&port=${config.port}` : ''}`)
        if (!res) return message.channel.send(`Looks like your server is not reachable... Please verify it's online and it isn't blocking access!`)
        // Parse the mcapi.us response
        const body = await res.json()

        const attachment = new Discord.MessageAttachment(Buffer.from(body.favicon.substr('data:image/png;base64,'.length), 'base64'), "icon.png")

        const embed = new Discord.MessageEmbed()
            .setAuthor(config.ipAddress)
            .attachFiles(attachment)
            .setThumbnail("attachment://icon.png")
            .addField("Version", body.server.name)
            .addField("Connected", `${body.players.now} players`)
            .addField("Maximum", `${body.players.max} players`)
            .addField("Status", (body.online ? "Online" : "Offline"))
            .setColor("#FF0000")
            .setFooter("Open Source Minecraft Discord Bot")
        
        sentMessage.edit(`:chart_with_upwards_trend: Here are the stats for **${config.ipAddress}**:`, { embed })
// END
	},
};