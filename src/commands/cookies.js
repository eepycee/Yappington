const {
    EmbedBuilder,
    SlashCommandBuilder,
  } = require("discord.js");
  const { QuickDB } = require(`quick.db`);
  const db = new QuickDB();

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("cookies")
    .setDescription("check cookies!")
    .addUserOption(option => option.setName('user').setDescription('check their cookies!').setRequired(true)),
    
    async execute(interaction, client) {
        
        const member = interaction.options.getUser('user');
        let cookies = await db.get(`cookies_${member}`);

        if (cookies == null) cookies = 0;

        const embed = new EmbedBuilder()
        .setColor("Blurple")
        .setDescription(`waow! ${member.tag} has **${cookies}** cookies:bangbang:`)

        await interaction.reply({ embeds: [embed] })
    }
  }