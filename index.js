const { Client, Collection } = require("discord.js");
const{ discord } = require("discord.js");
const { RichEmbed } = require("discord.js");
const {token} = require("./botconfig.json");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.on('ready', () => {
    bot.guilds.map((guild) => console.log(`Name: ${guild.name} (ID: ${guild.id}) (Owner: ${guild.owner}) (Member Count: ${guild.memberCount})` ));
});


bot.on('guildCreate', (guild) => {


       let channel = bot.channels.get(guild.channels.filter(c => c.permissionsFor(bot.user).has("SEND_MESSAGES") && c.type === "text").map(r => r.id)[0])

       channel.send(`Thank you for inviting our bot Series! \n If you need support managing it do \`!help <command> or !setup\` or join our support server: https://discord.gg/wen9SQC \n The bot's prefix is \!\ .`)

});


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;


bot.on('message', message => {
  if (message.channel.id === "615584109011402781") {
    message.react('✅')
      .then(() => {
        message.react('❎')
      });
  }
});


bot.on('message', message => {
  if(message.content.startsWith("!" + "unlock")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) returnmessage.channel.send("You can't unlock Channels!")

    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
  });
  let enligne = new Discord.RichEmbed()
  .addField(`🔓 Unlocked!`, `Channel has been unlocked by: ${message.author}**`)

  message.channel.send(enligne)
    }
  });
bot.on('message', message => {
    if(message.content.startsWith("!" + "lock")) {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("You can't lock Channels!")

      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    });

    message.channel.send(`✅ Channel locked by ${message.author}!`)
    }
    });

    let blacklisted = [
      "fuck",
      "fck",
      "fack",
      "fvck",
      "fvk",
      "fuk",
      "fk",
      "shit",
      "sht",
      "shat",
      "fweak",
      "feak",
      "anal",
      "anus",
      "arse",
      "ass",
      "ballsack",
      "balls",
      "bastard",
      "bitch",
      "biatch",
      "bloody",
      "blowjob",
      "blow job",
      "bollock",
      "bollok",
      "boner",
      "boob",
      "bugger",
      "bum",
      "butt",
      "buttplug",
      "clitoris",
      "cock",
      "coon",
      "crap",
      "cunt",
      "damn",
      "dick",
      "dildo",
      "dyke",
      "fag",
      "feck",
      "fellate",
      "fellatio",
      "felching",
      "f u c k",
      "fudgepacker",
      "fudge packer",
      "flange",
      "Goddamn",
      "God damn",
      "homo",
      "jerk",
      "jizz",
      "knobend",
      "knob end",
      "lesbian",
      "labia",
      "lmfao",
      "muff",
      "nigger",
      "nigga",
      "penis",
      "piss",
      "poop",
      "prick",
      "pube",
      "pussy",
      "queer",
      "scrotum",
      "sex",
      "s hit",
      "sh1t",
      "slut",
      "smegma",
      "spunk",
      "tit",
      "tosser",
      "turd",
      "twat",
      "wank",
      "whore",
      "wtf",
      "freak",
      "vagina"
    ];

    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if (foundInText){
      message.delete();
      message.channel.send("⚠| You may not us this word in this server as it is swear protected!");
    }
  });

  bot.on("messageUpdate", async(oldMessage, newMessage) =>{
    if(oldMessage.content === newMessage.content){
      return;
    }

    let logEmbed = new RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor()
    .setDescription("A message from a user was edited")
    .addField("Before:", oldMessage.content, true)
    .addField("After:", newMessage.content, true)
    .addField("In:", `${oldMessage.channel}`)
    .setTimestamp();

    let loggingChannel = newMessage.guild.channels.find(ch => ch.name === "modlogs")

    loggingChannel.send(logEmbed);
  });

  const serverStats = {
  guildID: '614904662575022083',
  totalUserID: '621922381937508381',
  memberCountID: '621922465773256741',
  botcountID:'621922556743647242',
  }
  bot.on('guildMemberAdd', member => {
  if(member.guild.id !== serverStats.guildID) return;
  bot.channels.get(serverStats.totalUserID).setName(`Total Users: ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botcountID).setName(`BOT Count: ${member.guild.members.filter(m => m.user.bot).size}`);
  });
  bot.on('guildMemberRemove', member => {
  if(member.guild.id !== serverStats.guildID) return;
  bot.channels.get(serverStats.totalUserID).setName(`Total Users : ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botcountID).setName(`BOT Count : ${member.guild.members.filter(m => m.user.bot).size}`);
  });



bot.login(token);
