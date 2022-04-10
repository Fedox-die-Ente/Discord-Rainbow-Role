const toml = require("toml");
const { Intents, Client } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES] });
const log = require(`../handlers/logHandler.js`);
const ms = require('ms');
const data = require("../data/rainbowrole.json")
const fs = require("fs");
const { runMain } = require("module");
config = toml.parse(fs.readFileSync('./config.toml', 'utf-8'));

module.exports = class {
  constructor(client) {
    this.client = client;
  }
  async run() {
    
  }
}
