const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready"), function() {
    bot.user.setGame("!help");
    console.log("Le Bot a bien ete connecter");
});

bot.login("NDU2NTUzMDAwOTg3NjU2MTkz.DgMU9w.dSBb0Mg5t2a32ZjiNTTQNxf2MhQ");
