const Console = require("lib/Console");
// Your remote nickname + token here
const $ = new (require("lib/IRC"))("nickname", "YOUR_REMOTE_TOKEN_HERE");
// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

// Bot MSG Your Console went get online on discord.
client.on('ready', () => {
    console.log(`Bot Logged in as ${client.user.tag}!`);
    // Control Bot status
    client.user.setStatus('online');
    // Show Status Info
    console.log(client.user.presence.status);

});

// PING & PONG MSG
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

// Bot Tutorial
client.on('message', msg => {
    if (msg.content === '!help') {
        msg.reply('You can check our help tutorial: https://github.com/unixfool/Discord');
    }
});

client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'discord bot?') {
        const embed = new MessageEmbed()
            .setTitle('Remote IRC Discord Bot.')
            .setColor('#010101')
            .setDescription('Hello you can join us on irc.freenode.net:+6697 \n\r Check our remotes: https://remotes.irc.com')
            .setAuthor('Author: y2k')
            .setFooter('Zebra Monitoring Bot for Discord.');

        message.channel.send(embed);
    }
});

// Bot Tutorial
client.on('message', msg => {
    if (msg.content === '!freenode') {
        msg.reply('Freenode Web: https://freenode.net');
        msg.reply('iOS APP: https://apps.apple.com/us/app/id1451123195');
        msg.reply('Android APP: https://play.google.com/store/apps/details?id=com.irc.ircclient');
    }
});

// Hello World!
client.on('message', msg => {
    if (msg.content === 'hello') {
        msg.reply('Hello, hows going?');
    }
});

// Admin Control CHannel.
client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;

    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .kick('Optional reason that will display in the audit logs')
                    .then(() => {
                        message.reply(`Successfully kicked ${user.tag}`);
                    })
                    .catch(err => {
                        message.reply('I was unable to kick the member');
                        console.error(err);
                    });
            } else {
                message.reply("That user isn't in this guild!");
            }
        } else {
            message.reply("You didn't mention the user to kick!");
        }
    }
});


// Your Discord Bot Token.
client.login('YOUR-DISCORD-BOT-TOKEN-HERE');