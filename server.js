const { Collection, Client, Discord, MessageEmbed } = require("discord.js");
const fs = require("fs");
const client = new Client

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
  });

client.login(process.env.token)