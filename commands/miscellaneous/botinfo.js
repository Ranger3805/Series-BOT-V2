const { RichEmbed } = require("discord.js");
const { gold } = require("../../colours.json");
const { prefix } = require("../../botconfig.json");

module.exports= {
    config: {
        name: "botinfo",
        description: "Sends you the bot info.",
        usage: "",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["info", "bot"]
    },
    run: async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let botembed = new RichEmbed()
    .setTitle("⭐| Bot Information")
    .setDescription(`Hello my prefix is: ${prefix} `)
    .setColor(gold)
    .setThumbnail(bicon)
    .addField("Bot Version:", "2.6")
    .addField("Bot Made By:", "Series BOTs and Community Server")
    .addField("Support Link:", "https://discord.gg/wen9SQC")
    .addField("Bot Status", " ✅| Fun \n ✅| Moderation \n ✅| Images \n ✅| Owner \n ✅| Ticket related commands \n ⚠️| Under Development")
    .addField("Users using it:", `${bot.users.size} users!`)
    .addField("Servers:", `${bot.guilds.size} servers!`)
    .addField("Created On:", bot.user.createdAt)
    .setFooter("Series BOTs and Community Server ™");

    message.channel.send(botembed);
  }
}
