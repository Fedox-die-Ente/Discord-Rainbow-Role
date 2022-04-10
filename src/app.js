const Discord = require('discord.js');
const { Intents } = require('discord.js')
const log = require('./handlers/logHandler.js');
const fs = require(`fs`);
const toml = require("toml");
const ms = require("ms");
const data = require("./data/rainbowrole.json")
config = toml.parse(fs.readFileSync('./config.toml', 'utf-8'));


const client = new Discord.Client({
  intents: [
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.DIRECT_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.GUILD_VOICE_STATES
  ],
});

client.on('ready', () => {
  setTimeout(async function() {
    log.info(`Verbindung wird hergestellt...`)
  }, ms('1s'));
  setTimeout(async function() {
    log.info(`Angemeldet als ${client.user.tag}`)
    let guild = client.guilds.cache.get(`${config.rainbow.guild}`);
    const rolez = guild.roles.cache.find(ch => ch.name == `${config.rainbow.role}`);
    var rolestart = setInterval(function() {
      var colors = data.rainbowrole;
      var colorsz = colors[Math.floor(Math.random() * colors.length)];
      rolez.setColor(colorsz)
    }, config.rainbow.delay)

  }, ms('3s'));
  client.user.setActivity(`> 🏳️‍🌈`, { type: 'WATCHING' })
});

client.login(`${config.general.token}`);
