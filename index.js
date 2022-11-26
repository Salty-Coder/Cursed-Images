const { Client, GatewayIntentBits } = require('discord.js');

require('dotenv').config();

/* Initialize client */
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

require('./eventLoader')(client);


client.login(process.env.TOKEN);