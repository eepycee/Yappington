const {
    EmbedBuilder,
    SlashCommandBuilder,
  } = require("discord.js");

const superagent = require("superagent");

let yeye = ["Kanye", "Kanye West", "Mr West", "Ye", "Ye Ye", "Nitrous King", "Yeezy", "Yeezus", "Saint Pablo", "Louis Vuitton Don", "This generation's closest thing to Einstein", "Malcolm West", "Ain't one of the Cosby's", "The abomination of Obama's nation", "Kan The Louis Vuitton Don", "Swag King Cole", "KanYeezy", "Steve Jobs mixed with Steve Austin", "A god"];

require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kanye")
    .setDescription(" once said..."),
    
    async execute (interaction) {
        await interaction.deferReply({ ephmeral: false });
        const output = await superagent.get('https://api.kanye.rest/');

        const embed= new EmbedBuilder()
            .setColor("#5865f4")
            .setTitle(`**${yeye[(Math.floor(Math.random() * yeye.length))]} Once Said:**`)
            .setDescription(`${output.body.quote}`)
            .setTimestamp();

        await interaction.editReply({ embeds: [embed] });
    }
}