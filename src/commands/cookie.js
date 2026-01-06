const {
    EmbedBuilder,
    SlashCommandBuilder,
  } = require("discord.js");
  const { QuickDB } = require(`quick.db`);
  const db = new QuickDB();

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("give-cookie")
    .setDescription("give someone a cookie!")
    .addUserOption(option => option.setName('user').setDescription('give them a cookie!').setRequired(true)),
    
    async execute(interaction, client) {
        const member = interaction.options.getUser('user');
    
        const embed = new EmbedBuilder()
        .setColor("Red")
        .setDescription(`<@${member.tag}> just got a cookie! what a good individual of unspecified gender!`)
        
        await interaction.reply({ embeds: [embed] });
    
        db.add(`cookies_${member}`, 1)
    }
  }