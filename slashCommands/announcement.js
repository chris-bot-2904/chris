const { SlashCommandBuilder, ChannelType, PermissionFlagsBits, EmbedBuilder, } = require('discord.js');

module.exports = {
	category:  "moderation",
	data: new SlashCommandBuilder()
		.setName('announcement')
		.setDescription('Stuur een mededeling')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addStringOption(option =>
            option.setName('bericht')
            .setDescription('Geef een Berict mee')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('kleur')
            .setDescription('Geef een kleur mee')
            .addChoices(
                { name: 'Rood', value: "#eb1730"},
                { name: 'Blauw', value: "#3417eb"},
                { name: 'Paars', value: "#720ca6"},
                { name: 'Groen', value: "#26ff00"},
                { name: 'Geel', value: "#fffb00"},
                { name: 'Oranje', value: "#ff7700"}
            ))
        .addChannelOption(option =>
            option.setName('kanaal')
                .setDescription('Geef eeen kanaal mee')
                .addChannelTypes(ChannelType.GuildText)),        
	async execute(client, interaction) {

        const title  = await interaction.options.getString("titel");
        const message = await interaction.options.getString("bericht");
        let colour =  await interaction.options.getString("kleur");
        let channel = await interaction.options.getChannel("kanaal");

        if (colour == null) colour = "eeeeee";
        if (channel == null) channel = "1051191594407178290";

        let embed = new EmbedBuilder()
            .setTitle(title)
            .setColor(colour)
            .setDescription(message)
            .setTimestamp()

            interaction.reply({ content: "Bericht verstuurd", ephermeral: true })
            await interaction.guild.channels.cache.find(c => c.id == channel).send({ embeds: [embed] });
	}
};