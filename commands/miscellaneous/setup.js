const { Discord } = require("discord.js")
const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json")
const { prefix } = require("../../botconfig.json");
module.exports= {
    config: {
        name: "setup",
        description: "Help you Setup Channels and The BOT.",
        usage: "",
        category: "miscellaneous",
        accessableby: "Everyone",
        aliases: ["guide", "bothelp"]
    },
    run: async (bot, message, args) => {

      let setEmbed = new RichEmbed()
      .setTitle("⭐| Setup Configuration")
      .setColor(gold)
      .setDescription("Welcome to Series Owner Guide. Please read below for instructions to manage it!")
      .addField("Ticket Commands:", "1. Create a category named \`tickets\` \n 2. Create a role named \`Support Members\` and put it to Members you want to have access to read tickets. \n 3. Create a channel named \`ticketlogs\` to get logs every ticket being made or closed. \n Your done!")
      .addField("Application Commands:", "1. Create a category named \`applications\` \n 2. Create a role named \`Application Reader\` and put it to Members you want have access to read apps. \n 3. Create a channel named \'applogs\` to get every app being made or passed or declined or basically made done.")
      .addField("Moderation:", "**1st Category:** \n !announce >> Create a channel named \`announcements\`. \n !report >> Create a channel named \`reports\`. \n **2nd Category:** All moderation commands need a channel named \`modlogs\`.")
      .addField("Fun:", "Commands: !fotd >> \`❕》fotd\`, !qotd >> \`❓》qotd\`. ")
      .addField("Music:", "Common problems[if happened]: \n \`!play\` wont work. Do \`!playlink https://www.youtube.com/watch?v=Wch3gJG2GJ4 \` it will reset it, then retry again and it should work! \n The BOT wont complete playing music after its done! Do \`!leave\` and play your video.")
      .addField("Need Help?", "Go to our server link using the command \`!slink\`.")
      .setFooter("Series BOTs and Community Server™");

      message.author.send(setEmbed);
    }
  }
