const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category:  "moderation",
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Antwoord met Pong!'),
	async execute(client, interaction) {
		return await interaction.reply("Pong!")
	},
};