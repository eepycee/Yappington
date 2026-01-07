const {
    EmbedBuilder,
    SlashCommandBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
    .setName("give-cookie")
    .setDescription("give someone a cookie!")
    .addUserOption(option => option.setName('user').setDescription('give them a cookie!').setRequired(true)),
    
    async execute(interaction, client) {
        const member = interaction.options.getUser('user');
    
        const embed = new EmbedBuilder()
        .setColor("Green")
        .setDescription(`<@${member.id}> just got a cookie! yummy!! <a:meow_cookie:1458280998428213384>`)
        
        await interaction.reply({ embeds: [embed] });
        }
  }