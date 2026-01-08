> [!CAUTION]
> You are currently on the **`develop`** branch of Yappington. The bot may not function as intended, and this is designed only for experimental additions to the bot that aren't stable enough to be brought into the `main` branch

# Yappington
A cool open-source bot designed for friend group fun! Probably better than MEE6 ever could be :trollface:

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- ABOUT -->
## About Yappington
Yappington is a Discord bot that is specifically designed for friend groups, with commands designed specifically for **YOU** 🫵

<!-- SELFHOST -->
## Self-Hosting
> [!NOTE]
> This bot is generally only accessible through self-hosting, we don't want to verify our identity to Discord's developer department just to get killed by the AI moderation Robocop to be completely honest, they already know too much about us! 

Before you begin `git clone`ing this beautiful repository, ensure you have NodeJS installed, you can check this by running `node` in your terminal!

After that, `git clone` the repo by running:
```bash
git clone https://github.com/eepycee/Yappington.git
```
Then, in the Yappington folder that should be created, run 
```bash
npm install
```
to install all of the dependencies that you need.

Last but not least, you'll need to create an `.env` file, this is where ALL of the bot secrets are stored. The current `.env` schema goes a little bit something like this:
```env
TOKEN= <TOKEN>
GUILD_ID= <GUILD ID if in Development>
STATUS=DEVELOPMENT <Change to PRODUCTION to load commands on every guild>
STATUSBOT= <The status for your bot>
DISCORDSTATUS=dnd <Change to whatever you want>
TENORAPI=<Your Tenor API>
```

Your final step is to up the bot! Should everything be working, `npm run start` should bring your beautiful bot to life! Good job!

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
This project couldn't have been made without the following people:
* **You**: For checking this repository out, really appreciated!
* **[KuromiBot](https://github.com/KuromiBot/KuromiBot)**: We forked this bih! 🗣️🔥‼️
* **[mezotv](https://github.com/mezotv)** - The author of the amazing [discord.js template](https://github.com/mezotv/Discord-Bot-Template) that actually helped me get this thing here
* **[discord.js](https://github.com/discordjs/discord.js)** - discord.js API wrapper
* **Our beautiful contributors!**

And many, many more package authors, Stack Overflow members, Discord users, and Neovim.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/KuromiBot/KuromiBot.svg?color=8ae8ff&labelColor=black&style=flat-square
[contributors-url]: https://github.com/KuromiBot/KuromiBot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/KuromiBot/KuromiBot.svg?color=8ae8ff&labelColor=black&style=flat-square
[forks-url]: https://github.com/KuromiBot/KuromiBot/network/members
[stars-shield]: https://img.shields.io/github/stars/KuromiBot/KuromiBot.svg?color=8ae8ff&labelColor=black&style=flat-square
[stars-url]: https://github.com/KuromiBot/KuromiBot/stargazers
[issues-shield]: https://img.shields.io/github/forks/eepycee/Yappington?color=8ae8ff&labelColor=black&style=flat-square
[issues-url]: https://github.com/KuromiBot/KuromiBot/issues
[license-shield]: https://img.shields.io/github/license/KuromiBot/KuromiBot.svg?color=8ae8ff&labelColor=black&style=flat-square
[license-url]: https://github.com/KuromiBot/KuromiBot/blob/master/LICENSE
