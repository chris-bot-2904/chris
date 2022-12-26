const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    catogory: "moderation",
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Verwijdert berichten in een kanaal')
        .addIntegerOption(option =>
            option.setName("aantal")
                .setDescription("Geef een aantal op")
                .setRequired(true)),
	async execute(client, interaction) {

        const aantal = await interaction.options.getInteger("aantal");

        interaction.channel.bulkDelete(aantal).then(() => {

            if(aantal == 1){
            interaction.reply({content: "Ik  heb 1 bericht verwijdert", ephemeral: true })
            } else {
            interaction.reply({content: `Ik heb ${aantal} berichten verwijdert.`, ephemeral: true })
            }

        }).catch(err => {
        interaction.reply({content: "Bepaal hoeveel berichten je wilt verwijeren", ephemeral: true})
        });
    }
};