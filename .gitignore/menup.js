const Discord = require("discord.js");
const bot = new Discord.Client();
const token = require("./token.json")

client.login(process.env.TOKEN);

bot.on("ready", async () =>{
    bot.user.setStatus("online")
    bot.user.setActivity("Pornhub", {type: 'WATCHING'})
})
    


bot.on("guildMemberAdd", member => {
    bot.channels.cache.get('770421467774058517').send(`Wesh le sang, bienvenue dans le HHHH gangshit. Pour que tt se passe pour le mieux, je te conseille de lire le reglement. Amuse toi bien ! ${member}`);

})


bot.login(token.token);

