const { Client, Collection, GatewayBitFieldIntents } = require('discord.js');
const { token } = require('../../config.json')

const client = new Client.Collection()

client.on('ready', async (c) => {
    await console.log(`${c.user.username} is now online!`)
});

client.login(token)