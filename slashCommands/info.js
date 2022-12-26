const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    category: "information",
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Geeft info!'),
	async execute(client, interaction) {

        let date = new Date(interaction.member.joinedTimestamp);

    var botEmbed = new EmbedBuilder()
        .setTitle("Latin Kings")        
        .setDescription("Een Gang in Westervoort, The Netherlands.")
        .setColor("#272247")
        .addFields(
            { name: "Latin Kings", value: client.user.username },
            { name: "Je bent gejoined op:", value: date.toLocaleDateString() },
            { name: "Aantal leden", value: interaction.guild.memberCount.toString() }    
        )
        .setTimestamp()
        .setFooter({ text: "Informate van deze server", })
        .setAuthor({ name: interaction.member.user.username });

    await interaction.reply({ embeds: [botEmbed] });

	},
};