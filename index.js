const auth = require('./auth.json')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {  
    client.guilds.forEach((guild) => {
        console.log(`Following guild were leaved: ${guild.name}`)
        guild.leave(guild.name)

    })
})
client.login(auth.token)
